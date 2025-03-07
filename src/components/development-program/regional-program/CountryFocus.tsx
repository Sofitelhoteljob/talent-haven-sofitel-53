
import { Globe } from "lucide-react";
import { CountryInfo } from "./types";

interface CountryFocusProps {
  countries: CountryInfo[];
}

export const CountryFocus = ({ countries }: CountryFocusProps) => {
  return (
    <div>
      <h4 className="font-medium text-lg mb-2">Target Countries & Focus Areas</h4>
      <div className="space-y-4">
        {countries.map((country, index) => (
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
  );
};
