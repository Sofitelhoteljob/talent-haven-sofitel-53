
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Briefcase, Heart, Award, Building } from "lucide-react";

const benefits = [
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
];

export const BenefitsSection = () => {
  return (
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
          {benefits.map((benefit, index) => (
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
  );
};
