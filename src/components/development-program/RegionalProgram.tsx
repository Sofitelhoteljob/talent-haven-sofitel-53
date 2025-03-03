
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";

interface RegionalProgramProps {
  region: string;
  color: string;
  title: string;
  description: string;
  imageSrc: string;
  focusAreas: string[];
  benefits: string[];
}

export const RegionalProgram = ({
  region,
  color,
  title,
  description,
  imageSrc,
  focusAreas,
  benefits
}: RegionalProgramProps) => {
  const [showFullInfo, setShowFullInfo] = useState(false);

  const toggleInfoSection = () => {
    setShowFullInfo(prev => !prev);
  };

  const scrollToApply = () => {
    const element = document.getElementById('apply-now');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Card className="overflow-hidden border-secondary/20">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="aspect-square md:aspect-auto">
          <img 
            src={imageSrc} 
            alt={`${title} image`} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2 p-6 md:p-8">
          <CardHeader className="p-0 pb-4">
            <div className="flex items-center mb-2">
              <Badge className={`bg-[${color}]/10 text-[${color}] mr-2`}>{region}</Badge>
            </div>
            <CardTitle className="font-playfair text-2xl font-bold">{title}</CardTitle>
            <CardDescription>
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                {description}
              </p>
              
              {showFullInfo && (
                <div className="space-y-4 animate-fade-in">
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Focus Areas:</h4>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                      {focusAreas.map((area, index) => (
                        <li key={index}>{area}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Program Benefits:</h4>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                      {benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="p-0 pt-4">
            <Button 
              variant="outline" 
              className="mr-4"
              onClick={toggleInfoSection}
            >
              {showFullInfo ? (
                <>Less Info <ChevronUp className="ml-2 h-4 w-4" /></>
              ) : (
                <>More Info <ChevronDown className="ml-2 h-4 w-4" /></>
              )}
            </Button>
            <Button 
              className="bg-secondary hover:bg-secondary/90"
              onClick={scrollToApply}
            >
              Apply Now
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};
