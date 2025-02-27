
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Briefcase, Heart, Award, Building } from "lucide-react";

const Index = () => {
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-fade-in">
                <div className="h-12 w-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
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
