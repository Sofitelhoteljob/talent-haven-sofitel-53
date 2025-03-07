
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useFormContext } from "./FormContext";
import { countries } from "@/data/countries";

export const PersonalInfoStep = () => {
  const { formData, errors, handleInputChange, handleSelectChange } = useFormContext();

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="space-y-2">
        <label htmlFor="fullName" className="text-sm font-medium">Full Name</label>
        <Input 
          id="fullName" 
          placeholder="Enter your full name" 
          value={formData.fullName}
          onChange={handleInputChange}
          className={errors.fullName ? "border-destructive" : ""}
        />
        {errors.fullName && <p className="text-xs text-destructive mt-1">{errors.fullName}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">Email Address</label>
        <Input 
          id="email" 
          type="email" 
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleInputChange}
          className={errors.email ? "border-destructive" : ""}
        />
        {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
        <Input 
          id="phone" 
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={handleInputChange}
          className={errors.phone ? "border-destructive" : ""}
        />
        {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
      </div>
      <div className="space-y-2">
        <label htmlFor="country" className="text-sm font-medium">Country of Residence</label>
        <Select 
          onValueChange={(value) => handleSelectChange("country", value)}
          value={formData.country}
        >
          <SelectTrigger id="country" className={`w-full ${errors.country ? "border-destructive" : ""}`}>
            <SelectValue placeholder="Select your country" />
          </SelectTrigger>
          <SelectContent className="max-h-[200px]">
            {countries.map((country) => (
              <SelectItem key={country.code} value={country.name}>
                {country.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.country && <p className="text-xs text-destructive mt-1">{errors.country}</p>}
      </div>
    </div>
  );
};
