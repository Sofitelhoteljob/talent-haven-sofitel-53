
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Plane, GraduationCap, BriefcaseIcon, Building, GlobeIcon, UserPlus } from "lucide-react";

export const ProgramBenefits = () => {
  const benefits = [
    {
      icon: <Plane className="h-6 w-6 text-secondary" />,
      title: "Free Visa Processing",
      description: "We provide comprehensive visa support, including application guidance, documentation, and processing fees to ensure a smooth transition to Germany."
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-secondary" />,
      title: "Comprehensive Training",
      description: "Receive world-class training in luxury hospitality standards, cultural adaptation, language skills, and professional development."
    },
    {
      icon: <BriefcaseIcon className="h-6 w-6 text-secondary" />,
      title: "Guaranteed Employment",
      description: "Secure a two-year position at Sofitel Frankfurt Opera with competitive salary and benefits according to German standards."
    },
    {
      icon: <Building className="h-6 w-6 text-secondary" />,
      title: "Accommodation Support",
      description: "Get assistance finding suitable housing in Frankfurt and settling into your new environment with practical support and guidance."
    },
    {
      icon: <GlobeIcon className="h-6 w-6 text-secondary" />,
      title: "Global Career Network",
      description: "Access to Accor's worldwide network of hotels and resorts, creating opportunities for international career advancement."
    },
    {
      icon: <UserPlus className="h-6 w-6 text-secondary" />,
      title: "Mentorship Program",
      description: "One-on-one guidance from experienced hospitality professionals to help you navigate your career and maximize your potential."
    }
  ];

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-secondary/10 text-secondary mb-4">Why Join Us</Badge>
          <h2 className="font-playfair text-4xl font-bold mb-6">Program Benefits</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our Global Talent Program offers numerous advantages designed to support your international career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="font-playfair text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
