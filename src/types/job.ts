
export type Department = 'Food & Beverage' | 'Housekeeping' | 'Front Office' | 'Sales & Marketing' | 'Administration';
export type EmploymentType = 'Full-time' | 'Part-time' | 'Temporary' | 'Internship';
export type Location = 'Frankfurt Main' | 'Remote' | 'Hybrid';
export type ApplicationStatus = 'pending' | 'reviewed' | 'shortlisted' | 'rejected' | 'hired';

export interface Job {
  id: string;
  title: string;
  department: Department;
  location: Location;
  employmentType: EmploymentType;
  salaryRange: string;
  requirements: string[];
  description: string;
  postedDate: string;
  is_active?: boolean;
}

export interface JobApplication {
  id?: string;
  job_id: string;
  full_name: string;
  email: string;
  phone: string;
  cover_letter: string;
  status?: ApplicationStatus;
  created_at?: string;
}
