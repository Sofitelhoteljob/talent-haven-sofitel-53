
import { User, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FormField } from "./FormField";
import { PasswordInput } from "./PasswordInput";
import { CountrySelect } from "./CountrySelect";
import { LanguageSelect } from "./LanguageSelect";

interface SignupFormFieldsProps {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  phone: string;
  preferredLanguage: string;
  errors: Record<string, string>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSelectChange: (field: string, value: string) => void;
}

export const SignupFormFields = ({
  fullName,
  email,
  password,
  confirmPassword,
  country,
  phone,
  preferredLanguage,
  errors,
  handleInputChange,
  handleSelectChange,
}: SignupFormFieldsProps) => {
  return (
    <>
      {/* Full Name */}
      <FormField id="fullName" label="Full Name" error={errors.fullName}>
        <div className="relative">
          <Input 
            id="fullName"
            type="text"
            value={fullName}
            onChange={handleInputChange}
            placeholder="John Doe"
            required
            className="pl-10"
          />
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </FormField>
      
      {/* Email */}
      <FormField id="email" label="Email" error={errors.email}>
        <div className="relative">
          <Input 
            id="email"
            type="email"
            value={email}
            onChange={handleInputChange}
            placeholder="your.email@example.com"
            required
            className="pl-10"
          />
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </FormField>
      
      {/* Password */}
      <FormField id="password" label="Password" error={errors.password}>
        <PasswordInput
          id="password"
          value={password}
          onChange={handleInputChange}
        />
      </FormField>
      
      {/* Confirm Password */}
      <FormField id="confirmPassword" label="Confirm Password" error={errors.confirmPassword}>
        <PasswordInput
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleInputChange}
        />
      </FormField>
      
      {/* Country */}
      <FormField id="country" label="Country" error={errors.country}>
        <CountrySelect 
          value={country}
          onValueChange={(value) => handleSelectChange("country", value)}
        />
      </FormField>
      
      {/* Phone */}
      <FormField id="phone" label="Phone Number" error={errors.phone}>
        <div className="relative">
          <Input 
            id="phone"
            type="tel"
            value={phone}
            onChange={handleInputChange}
            placeholder="+1 234 567 8900"
            required
            className="pl-10"
          />
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </FormField>
      
      {/* Preferred Language */}
      <FormField id="preferredLanguage" label="Preferred Language" error={errors.preferredLanguage}>
        <LanguageSelect 
          value={preferredLanguage}
          onValueChange={(value) => handleSelectChange("preferredLanguage", value)}
        />
      </FormField>
    </>
  );
};
