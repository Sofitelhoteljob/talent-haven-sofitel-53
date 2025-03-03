
import { Badge } from "@/components/ui/badge";
import { BriefcaseIcon, GraduationCap, Building, User } from "lucide-react";

export const ProgramOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-secondary/10 text-secondary mb-4">About The Program</Badge>
          <h2 className="font-playfair text-4xl font-bold mb-6">Global Talent Program</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our mission is to bring skilled individuals from Africa, South America, and Asia to work in luxury hospitality in Germany, creating a diverse and dynamic workforce while providing life-changing opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/lovable-uploads/cb34e963-852e-4568-a5b6-cba5db17673d.png" 
              alt="Luxury hotel lounge area" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="space-y-6">
            <h3 className="font-playfair text-2xl font-bold">Why Join Our Program?</h3>
            <p className="text-muted-foreground">
              The Sofitel Frankfurt Opera Global Talent Program offers a unique opportunity to develop your skills in one of Germany's most prestigious luxury hotels while experiencing a new culture and building an international career.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-secondary/10 p-2 rounded-full">
                  <BriefcaseIcon className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium">Guaranteed Employment</h4>
                  <p className="text-sm text-muted-foreground">Secure a position at Sofitel Frankfurt Opera with our employment guarantee</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-secondary/10 p-2 rounded-full">
                  <GraduationCap className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium">World-Class Training</h4>
                  <p className="text-sm text-muted-foreground">Receive comprehensive training in luxury hospitality standards</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-secondary/10 p-2 rounded-full">
                  <Building className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium">Accommodation Support</h4>
                  <p className="text-sm text-muted-foreground">Get assistance finding suitable housing in Frankfurt</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 mt-1 bg-secondary/10 p-2 rounded-full">
                  <User className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium">Career Development</h4>
                  <p className="text-sm text-muted-foreground">Access career advancement opportunities within the global Accor network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
