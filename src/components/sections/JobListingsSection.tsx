
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Department, EmploymentType, Job, Location } from "@/types/job";
import { JobCard } from "@/components/JobCard";
import { JobFilters } from "@/components/JobFilters";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { getJobs, seedInitialJobs, trackJobView } from "@/services/jobService";
import { Skeleton } from "@/components/ui/skeleton";

// Sample job data for initial seeding if needed
const SAMPLE_JOBS: Omit<Job, 'id' | 'is_active'>[] = [
  // Food & Beverage Jobs
  {
    title: "Food & Beverage Supervisor",
    department: "Food & Beverage",
    location: "Frankfurt Main",
    employmentType: "Full-time",
    salaryRange: "Competitive",
    requirements: [
      "Previous supervisory experience in luxury hospitality",
      "Excellent communication and leadership skills",
      "Fluent in English and German",
      "Strong organizational abilities"
    ],
    description: "Lead and supervise food & beverage operations at Sofitel Frankfurt Opera.",
    postedDate: "2024-03-15"
  },
  {
    title: "Stagiaire Restauration (Intern)",
    department: "Food & Beverage",
    location: "Frankfurt Main",
    employmentType: "Internship",
    salaryRange: "Competitive",
    requirements: [
      "Currently enrolled in hospitality management program",
      "Basic knowledge of F&B operations",
      "Good communication skills",
      "English and German language skills"
    ],
    description: "Join our F&B team as an intern and gain hands-on experience in luxury hospitality.",
    postedDate: "2024-03-15"
  },
  {
    title: "Conference & Events Operations Manager",
    department: "Food & Beverage",
    location: "Frankfurt Main",
    employmentType: "Full-time",
    salaryRange: "Competitive",
    requirements: [
      "5+ years experience in events management",
      "Strong organizational and leadership skills",
      "Experience in luxury hospitality",
      "Fluent in English and German"
    ],
    description: "Manage and oversee all aspects of conference and events operations.",
    postedDate: "2024-03-14"
  },
  // Culinary Jobs
  {
    title: "Chef de Partie - Rooftop",
    department: "Food & Beverage",
    location: "Frankfurt Main",
    employmentType: "Full-time",
    salaryRange: "Competitive",
    requirements: [
      "3+ years experience as Chef de Partie",
      "Experience in fine dining restaurants",
      "Strong culinary skills",
      "Team management experience"
    ],
    description: "Join our culinary team as Chef de Partie for our exclusive rooftop restaurant.",
    postedDate: "2024-03-14"
  },
  {
    title: "Premier Chef de Partie Pâtisserie",
    department: "Food & Beverage",
    location: "Frankfurt Main",
    employmentType: "Full-time",
    salaryRange: "Competitive",
    requirements: [
      "5+ years experience in pastry",
      "Experience in luxury hotels or fine dining",
      "Creative mindset",
      "Leadership skills"
    ],
    description: "Lead our pastry team in creating exceptional desserts and pastries.",
    postedDate: "2024-03-13"
  },
  {
    title: "Chef Exécutif H/F",
    department: "Food & Beverage",
    location: "Frankfurt Main",
    employmentType: "Full-time",
    salaryRange: "Competitive",
    requirements: [
      "10+ years culinary experience",
      "Previous experience as Executive Chef",
      "Strong leadership and management skills",
      "Fluent in English, German knowledge preferred"
    ],
    description: "Lead our entire culinary operation and maintain the highest standards of gastronomy.",
    postedDate: "2024-03-13"
  }
];

export const JobListingsSection = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [department, setDepartment] = useState<Department | 'All'>('All');
  const [location, setLocation] = useState<Location | 'All'>('All');
  const [employmentType, setEmploymentType] = useState<EmploymentType | 'All'>('All');
  const [showAll, setShowAll] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadJobs = async () => {
      try {
        // First attempt to seed the database with initial data if empty
        await seedInitialJobs(SAMPLE_JOBS);
        
        // Then fetch all jobs
        const fetchedJobs = await getJobs();
        setJobs(fetchedJobs);
      } catch (error) {
        console.error("Error loading jobs:", error);
        toast({
          title: "Error",
          description: "Failed to load job listings. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadJobs();
  }, [toast]);

  const handleApply = async (jobId: string) => {
    // Track job application view for analytics
    await trackJobView(jobId);
    
    toast({
      title: "Application Started",
      description: "Thank you for your interest. The application form will open shortly.",
    });
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = department === 'All' || job.department === department;
    const matchesLocation = location === 'All' || job.location === location;
    const matchesType = employmentType === 'All' || job.employmentType === employmentType;

    return matchesSearch && matchesDepartment && matchesLocation && matchesType;
  });

  const displayedJobs = showAll ? filteredJobs : filteredJobs.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-secondary/10 text-secondary mb-4">Open Positions</Badge>
          <h2 className="font-playfair text-4xl font-bold mb-4">Join Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore current opportunities to be part of our exceptional team at Sofitel Frankfurt Opera
          </p>
        </div>

        <JobFilters
          searchQuery={searchQuery}
          department={department}
          location={location}
          employmentType={employmentType}
          onSearchChange={setSearchQuery}
          onDepartmentChange={setDepartment}
          onLocationChange={setLocation}
          onEmploymentTypeChange={setEmploymentType}
        />

        {isLoading ? (
          <div className="mt-8 grid gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-lg border p-6 shadow-sm">
                <div className="flex justify-between items-start">
                  <div className="space-y-3">
                    <Skeleton className="h-6 w-64" />
                    <div className="flex space-x-2">
                      <Skeleton className="h-5 w-24" />
                      <Skeleton className="h-5 w-20" />
                      <Skeleton className="h-5 w-32" />
                    </div>
                  </div>
                  <div>
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-4 w-16 mt-1" />
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <div className="mt-4">
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8 grid gap-6">
            {displayedJobs.length > 0 ? (
              displayedJobs.map((job) => (
                <JobCard key={job.id} job={job} onApply={handleApply} />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No positions found matching your criteria.</p>
              </div>
            )}
          </div>
        )}

        {filteredJobs.length > 3 && (
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="border-secondary text-secondary hover:bg-secondary hover:text-white"
            >
              {showAll ? "Show Less" : `Show More (${filteredJobs.length - 3} positions)`}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
