
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Department, EmploymentType, Job, Location } from "@/types/job";
import { JobCard } from "@/components/JobCard";
import { JobFilters } from "@/components/JobFilters";
import { useToast } from "@/components/ui/use-toast";

// Sample job data
const JOBS: Job[] = [
  // Food & Beverage Jobs
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
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
    id: "5",
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
    id: "6",
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
