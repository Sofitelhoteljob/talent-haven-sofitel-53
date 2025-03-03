
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useFormContext } from "./FormContext";

export const ProgramDetailsStep = () => {
  const { formData, errors, handleInputChange, handleSelectChange } = useFormContext();

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="space-y-2">
        <label htmlFor="program" className="text-sm font-medium">Preferred Program</label>
        <Select 
          onValueChange={(value) => handleSelectChange("program", value)}
          value={formData.program}
        >
          <SelectTrigger id="program" className={`w-full ${errors.program ? "border-destructive" : ""}`}>
            <SelectValue placeholder="Select program" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Africa Development Program">Africa Development Program</SelectItem>
            <SelectItem value="America Development Program">America Development Program</SelectItem>
            <SelectItem value="Asia Development Program">Asia Development Program</SelectItem>
          </SelectContent>
        </Select>
        {errors.program && <p className="text-xs text-destructive mt-1">{errors.program}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="experience" className="text-sm font-medium">Hospitality Experience</label>
        <Select 
          onValueChange={(value) => handleSelectChange("experience", value)}
          value={formData.experience}
        >
          <SelectTrigger id="experience" className={`w-full ${errors.experience ? "border-destructive" : ""}`}>
            <SelectValue placeholder="Select experience level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-1 years">0-1 years</SelectItem>
            <SelectItem value="1-3 years">1-3 years</SelectItem>
            <SelectItem value="3-5 years">3-5 years</SelectItem>
            <SelectItem value="5+ years">5+ years</SelectItem>
          </SelectContent>
        </Select>
        {errors.experience && <p className="text-xs text-destructive mt-1">{errors.experience}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="motivation" className="text-sm font-medium">Motivation Letter</label>
        <Textarea
          id="motivation"
          placeholder="Tell us why you want to join the program and what you hope to achieve (max 500 words)"
          className={`min-h-[150px] ${errors.motivation ? "border-destructive" : ""}`}
          value={formData.motivation}
          onChange={handleInputChange}
        />
        {errors.motivation && <p className="text-xs text-destructive mt-1">{errors.motivation}</p>}
      </div>
    </div>
  );
};
