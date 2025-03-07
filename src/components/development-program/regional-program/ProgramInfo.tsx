
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { DetailedInfo } from "./types";
import { DetailedOverview } from "./DetailedOverview";

interface ProgramInfoProps {
  focusAreas: string[];
  benefits: string[];
  detailedInfo?: DetailedInfo;
  region: string;
  showDetailedOverview: boolean;
  toggleDetailedOverview: () => void;
}

export const ProgramInfo = ({
  focusAreas,
  benefits,
  detailedInfo,
  region,
  showDetailedOverview,
  toggleDetailedOverview
}: ProgramInfoProps) => {
  return (
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
            <DetailedOverview detailedInfo={detailedInfo} />
          )}
        </div>
      )}
    </div>
  );
};
