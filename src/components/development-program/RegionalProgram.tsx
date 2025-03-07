
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, User, Globe } from "lucide-react";
import { ImageLoader } from "@/components/ui/image-loader";

interface CountryInfo {
  name: string;
  focus: string;
  initiatives: string[];
}

interface SuccessStory {
  name: string;
  background: string;
  journey: string;
  outcome: string;
}

interface DetailedInfo {
  vision?: string;
  coreValues?: string[];
  targetCountries?: CountryInfo[];
  successStories?: SuccessStory[];
}

interface RegionalProgramProps {
  region: string;
  color: string;
  title: string;
  description: string;
  imageSrc: string;
  focusAreas: string[];
  benefits: string[];
  detailedInfo?: DetailedInfo;
}

export const RegionalProgram = ({
  region,
  color,
  title,
  description,
  imageSrc,
  focusAreas,
  benefits,
  detailedInfo
}: RegionalProgramProps) => {
  const [showFullInfo, setShowFullInfo] = useState(false);
  const [showDetailedOverview, setShowDetailedOverview] = useState(false);

  const toggleInfoSection = () => {
    setShowFullInfo(prev => !prev);
  };

  const toggleDetailedOverview = () => {
    setShowDetailedOverview(prev => !prev);
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
          <ImageLoader
            src={imageSrc}
            alt={`${title} image`}
            className="w-full h-full object-cover"
            width="400"
            height="400"
            containerClassName="w-full h-full"
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

                  {detailedInfo && (region === "Africa" || region === "America") && (
                    <div className="mt-6">
                      <Button 
                        variant="outline"
                        onClick={toggleDetailedOverview}
                        className="w-full justify-between"
                      >
                        <span>Detailed Program Overview</span>
                        {showDetailedOverview ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </Button>
                      
                      {showDetailedOverview && (
                        <div className="mt-4 space-y-6 bg-secondary/5 p-4 rounded-md animate-fade-in">
                          {detailedInfo.vision && (
                            <div>
                              <h4 className="font-medium text-lg mb-2">Program Vision</h4>
                              <p className="text-muted-foreground">{detailedInfo.vision}</p>
                              
                              {detailedInfo.coreValues && (
                                <div className="mt-3">
                                  <h5 className="font-medium">Core Values</h5>
                                  <ul className="list-disc pl-5 text-muted-foreground mt-2">
                                    {detailedInfo.coreValues.map((value, index) => (
                                      <li key={index}>{value}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          )}
                          
                          {detailedInfo.targetCountries && (
                            <div>
                              <h4 className="font-medium text-lg mb-2">Target Countries & Focus Areas</h4>
                              <div className="space-y-4">
                                {detailedInfo.targetCountries.map((country, index) => (
                                  <div key={index} className="bg-white p-3 rounded-md shadow-sm">
                                    <div className="flex items-center">
                                      <Globe className="h-4 w-4 text-secondary mr-2" />
                                      <h5 className="font-medium">{country.name}</h5>
                                    </div>
                                    <p className="text-sm font-medium text-secondary mt-1">{country.focus}</p>
                                    <ul className="list-disc pl-5 text-muted-foreground mt-2 text-sm">
                                      {country.initiatives.map((initiative, idx) => (
                                        <li key={idx}>{initiative}</li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {detailedInfo.successStories && (
                            <div>
                              <h4 className="font-medium text-lg mb-2">Success Stories</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {detailedInfo.successStories.map((story, index) => (
                                  <div key={index} className="bg-white p-3 rounded-md shadow-sm">
                                    <div className="flex items-center mb-2">
                                      <div className="h-8 w-8 bg-secondary/20 rounded-full flex items-center justify-center mr-2">
                                        <User className="h-4 w-4 text-secondary" />
                                      </div>
                                      <h5 className="font-medium">{story.name}</h5>
                                    </div>
                                    <div className="space-y-1 text-sm text-muted-foreground">
                                      <p><span className="font-medium">Background:</span> {story.background}</p>
                                      <p><span className="font-medium">Journey:</span> {story.journey}</p>
                                      <p><span className="font-medium">Outcome:</span> {story.outcome}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
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
