
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Department, EmploymentType, Job, Location } from "@/types/job";
import { JobCard } from "@/components/JobCard";
import { JobFilters } from "@/components/JobFilters";
import { useToast } from "@/components/ui/use-toast";

// Sample job data
const JOBS: Job[] = [
  {
    id: "1",
    title: "Executive Chef",
    department: "Food & Beverage",
    location: "Frankfurt Main",
    employmentType: "Full-time",
    salaryRange: "€60,000 - €80,000",
    requirements: [
      "Minimum 5 years experience in luxury hospitality",
      "Culinary degree required",
      "Strong leadership skills",
      "Fluent in English and German"
    ],
    description: "Lead our culinary team in creating exceptional dining experiences for our guests.",
    postedDate: "2024-03-15"
  },
  {
    id: "2",
    title: "Front Office Manager",
    department: "Front Office",
    location: "Frankfurt Main",
    employmentType: "Full-time",
    salaryRange: "€45,000 - €55,000",
    requirements: [
      "3+ years front office experience",
      "Excellent communication skills",
      "Experience with Opera PMS",
      "Fluent in English and German"
    ],
    description: "Manage our front office operations and ensure exceptional guest experiences.",
    postedDate: "2024-03-14"
  },
  {
    id: "3",
    title: "Digital Marketing Specialist",
    department: "Sales & Marketing",
    location: "Hybrid",
    employmentType: "Full-time",
    salaryRange: "€40,000 - €50,000",
    requirements: [
      "2+ years digital marketing experience",
      "Experience with social media management",
      "Strong analytical skills",
      "Knowledge of SEO and SEM"
    ],
    description: "Drive our digital marketing initiatives and enhance our online presence.",
    postedDate: "2024-03-13"
  }
];

export const JobListingsSection = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [department, setDepartment] = useState<Department | 'All'>('All');
  const [location, setLocation] = useState<Location | 'All'>('All');
  const [employmentType, setEmploymentType] = useState<EmploymentType | 'All'>('All');

  const handleApply = (jobId: string) => {
    toast({
      title: "Application Started",
      description: "Thank you for your interest. The application form will open shortly.",
    });
  };

  const filteredJobs = JOBS.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = department === 'All' || job.department === department;
    const matchesLocation = location === 'All' || job.location === location;
    const matchesType = employmentType === 'All' || job.employmentType === employmentType;

    return matchesSearch && matchesDepartment && matchesLocation && matchesType;
  });

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

        <div className="mt-8 grid gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} onApply={handleApply} />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No positions found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
