
import { Globe } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { languages } from "@/data/languages";

interface LanguageSelectProps {
  value: string;
  onValueChange: (value: string) => void;
}

export const LanguageSelect = ({ value, onValueChange }: LanguageSelectProps) => {
  return (
    <div className="relative">
      <Select
        value={value}
        onValueChange={onValueChange}
      >
        <SelectTrigger id="preferredLanguage" className="pl-10">
          <SelectValue placeholder="Select Language" />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 z-10" />
    </div>
  );
};
