
import { useState } from "react";
import { RegionalProgramCard } from "./RegionalProgramCard";
import { DetailedOverview } from "./DetailedOverview";
import { RegionalProgramProps } from "./types";

export const RegionalProgram = (props: RegionalProgramProps) => {
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
    <RegionalProgramCard 
      {...props}
      showFullInfo={showFullInfo}
      showDetailedOverview={showDetailedOverview}
      toggleInfoSection={toggleInfoSection}
      toggleDetailedOverview={toggleDetailedOverview}
      scrollToApply={scrollToApply}
    />
  );
};
