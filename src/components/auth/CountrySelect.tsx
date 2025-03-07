
import { Flag } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { countries } from "@/data/countries";

interface CountrySelectProps {
  value: string;
  onValueChange: (value: string) => void;
}

export const CountrySelect = ({ value, onValueChange }: CountrySelectProps) => {
  return (
    <div className="relative">
      <Select
        value={value}
        onValueChange={onValueChange}
      >
        <SelectTrigger id="country" className="pl-10">
          <SelectValue placeholder="Select Country" />
        </SelectTrigger>
        <SelectContent className="max-h-[200px]">
          {countries.map((c) => (
            <SelectItem key={c.code} value={c.name}>
              {c.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Flag className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
    </div>
  );
};
