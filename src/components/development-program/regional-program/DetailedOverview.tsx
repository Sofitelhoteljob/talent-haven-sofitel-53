
import { CountryInfo, DetailedInfo, SuccessStory } from "./types";
import { CountryFocus } from "./CountryFocus";
import { SuccessStories } from "./SuccessStories";

interface DetailedOverviewProps {
  detailedInfo: DetailedInfo;
}

export const DetailedOverview = ({ detailedInfo }: DetailedOverviewProps) => {
  return (
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
        <CountryFocus countries={detailedInfo.targetCountries} />
      )}
      
      {detailedInfo.successStories && (
        <SuccessStories stories={detailedInfo.successStories} />
      )}
    </div>
  );
};
