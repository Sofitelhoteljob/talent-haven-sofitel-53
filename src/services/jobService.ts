
import { supabase } from "@/integrations/supabase/client";
import { 
  Job, 
  JobApplication, 
  ensureDepartment, 
  ensureLocation, 
  ensureEmploymentType 
} from "@/types/job";

// Type for our database tables that aren't yet reflected in the types.ts file
type Tables = {
  jobs: {
    id: string;
    title: string;
    department: string;
    location: string;
    employment_type: string;
    salary_range: string | null;
    requirements: string[];
    description: string;
    posted_date: string;
    is_active: boolean;
  };
  job_applications: {
    id: string;
    job_id: string;
    full_name: string;
    email: string;
    phone: string;
    cover_letter: string;
    status: string;
    created_at: string;
  };
  analytics: {
    id: string;
    event_type: string;
    event_data: any;
    created_at: string;
  };
}

// Job Listings
export const getJobs = async (): Promise<Job[]> => {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .order('posted_date', { ascending: false }) as { data: Tables['jobs'][] | null, error: any };
    
    if (error) throw error;
    
    // Format the data to match our Job interface with proper type checking
    return (data || []).map((job) => ({
      id: job.id,
      title: job.title,
      department: ensureDepartment(job.department),
      location: ensureLocation(job.location),
      employmentType: ensureEmploymentType(job.employment_type),
      salaryRange: job.salary_range || '',
      requirements: job.requirements,
      description: job.description,
      postedDate: new Date(job.posted_date).toISOString().split('T')[0],
      is_active: job.is_active
    }));
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return [];
  }
};

export const getJobById = async (id: string): Promise<Job | null> => {
  try {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .eq('id', id)
      .single() as { data: Tables['jobs'] | null, error: any };
    
    if (error) throw error;
    if (!data) return null;
    
    return {
      id: data.id,
      title: data.title,
      department: ensureDepartment(data.department),
      location: ensureLocation(data.location),
      employmentType: ensureEmploymentType(data.employment_type),
      salaryRange: data.salary_range || '',
      requirements: data.requirements,
      description: data.description,
      postedDate: new Date(data.posted_date).toISOString().split('T')[0],
      is_active: data.is_active
    };
  } catch (error) {
    console.error('Error fetching job:', error);
    return null;
  }
};

// Job Applications
export const submitJobApplication = async (application: JobApplication): Promise<{ success: boolean; message: string; id?: string }> => {
  try {
    // Add analytics event for application
    await logAnalyticsEvent('job_application_submitted', {
      job_id: application.job_id,
      date: new Date().toISOString()
    });

    const { data, error } = await supabase
      .from('job_applications')
      .insert([
        {
          job_id: application.job_id,
          full_name: application.full_name,
          email: application.email,
          phone: application.phone,
          cover_letter: application.cover_letter,
          status: 'pending'
        }
      ])
      .select() as { data: Tables['job_applications'][] | null, error: any };
    
    if (error) throw error;
    
    return { 
      success: true, 
      message: 'Application submitted successfully', 
      id: data && data[0] ? data[0].id : undefined 
    };
  } catch (error) {
    console.error('Error submitting application:', error);
    return { 
      success: false, 
      message: 'Failed to submit application. Please try again.' 
    };
  }
};

// Analytics
export const logAnalyticsEvent = async (eventType: string, eventData: any): Promise<void> => {
  try {
    await supabase
      .from('analytics')
      .insert([
        {
          event_type: eventType,
          event_data: eventData
        }
      ]) as { data: any, error: any };
  } catch (error) {
    console.error('Error logging analytics event:', error);
  }
};

// Function to track job views for analytics
export const trackJobView = async (jobId: string): Promise<void> => {
  await logAnalyticsEvent('job_view', {
    job_id: jobId,
    date: new Date().toISOString()
  });
};

// Seed the database with initial job data if needed
export const seedInitialJobs = async (jobs: Omit<Job, 'id' | 'is_active'>[]): Promise<void> => {
  try {
    // Check if we already have jobs
    const { count, error: countError } = await supabase
      .from('jobs')
      .select('*', { count: 'exact', head: true }) as { count: number | null, error: any };
    
    if (countError) throw countError;
    
    // Only seed if no jobs exist
    if (count === 0) {
      // Convert the typed job data to the database schema
      const jobsToInsert = jobs.map(job => ({
        title: job.title,
        department: job.department,
        location: job.location,
        employment_type: job.employmentType,
        salary_range: job.salaryRange,
        requirements: job.requirements,
        description: job.description,
        posted_date: job.postedDate,
        is_active: true
      }));
      
      const { error } = await supabase
        .from('jobs')
        .insert(jobsToInsert) as { data: any, error: any };
      
      if (error) throw error;
      
      console.log('Initial jobs seeded successfully');
    }
  } catch (error) {
    console.error('Error seeding initial jobs:', error);
  }
};
