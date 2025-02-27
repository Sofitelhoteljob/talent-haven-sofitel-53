import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Briefcase, Heart, Award, Building } from "lucide-react";
import { useState } from "react";
import { Department, EmploymentType, Job, Location } from "@/types/job";
import { JobCard } from "@/components/JobCard";
import { JobFilters } from "@/components/JobFilters";
import { useToast } from "@/components/ui/use-toast";

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

const Index = () => {
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
    // Here you would typically navigate to an application form or open a modal
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158')",
            filter: "brightness(0.6)"
          }}
        />
        <div className="relative container mx-auto px-6 text-center text-white z-10">
          <Badge className="bg-secondary text-white mb-6 animate-fade-in">We're Hiring</Badge>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Join Our Legacy of Luxury
          </h1>
          <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in">
            Be part of the Sofitel Frankfurt Opera team and help us create extraordinary moments for our guests
          </p>
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-white animate-fade-in"
          >
            View Open Positions
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/10 text-secondary mb-4">Why Join Us</Badge>
            <h2 className="font-playfair text-4xl font-bold mb-4">Experience Excellence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join a team that sets the standard for luxury hospitality in Frankfurt
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                icon: Building,
                title: "Prestigious Location",
                description: "Work in one of Frankfurt's most iconic luxury hotels"
              },
              {
                icon: Heart,
                title: "Well-being Focus",
                description: "Comprehensive health benefits and work-life balance"
              },
              {
                icon: Award,
                title: "Growth Opportunities",
                description: "Continuous learning and career development programs"
              },
              {
                icon: Briefcase,
                title: "Global Network",
                description: "Be part of Accor's worldwide hospitality network"
              }
            ].map((benefit, index) => (
              <Card 
                key={index} 
                className="group p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-secondary/5 animate-fade-in border-secondary/10"
              >
                <div className="h-14 w-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-7 w-7 text-secondary group-hover:text-secondary/80" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-3 group-hover:text-secondary transition-colors">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
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

      {/* Quick Apply Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6 text-center">
          <Badge className="bg-secondary/10 text-secondary mb-4">Ready to Join?</Badge>
          <h2 className="font-playfair text-4xl font-bold mb-4">Start Your Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We're always looking for passionate individuals to join our team
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Apply Now
          </Button>
        </div>
      </section>

      {/* Footer with Legal Links */}
      <footer className="py-8 bg-white border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Sofitel Frankfurt Opera. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/impressum" className="text-sm text-muted-foreground hover:text-primary">
                Impressum
              </a>
              <a href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
