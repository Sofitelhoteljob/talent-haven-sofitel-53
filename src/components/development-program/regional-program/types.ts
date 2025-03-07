
export interface CountryInfo {
  name: string;
  focus: string;
  initiatives: string[];
}

export interface SuccessStory {
  name: string;
  background: string;
  journey: string;
  outcome: string;
}

export interface DetailedInfo {
  vision?: string;
  coreValues?: string[];
  targetCountries?: CountryInfo[];
  successStories?: SuccessStory[];
}

export interface RegionalProgramProps {
  region: string;
  color: string;
  title: string;
  description: string;
  imageSrc: string;
  focusAreas: string[];
  benefits: string[];
  detailedInfo?: DetailedInfo;
}

export interface RegionalProgramCardProps extends RegionalProgramProps {
  showFullInfo: boolean;
  showDetailedOverview: boolean;
  toggleInfoSection: () => void;
  toggleDetailedOverview: () => void;
  scrollToApply: () => void;
}
