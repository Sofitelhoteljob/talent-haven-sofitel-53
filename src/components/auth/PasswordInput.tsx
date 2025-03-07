
import { useState } from "react";
import { Eye, EyeOff, Key } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PasswordInputProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  showPassword?: boolean;
  toggleShowPassword?: () => void;
  error?: string;
}

export const PasswordInput = ({
  id,
  value,
  onChange,
  placeholder = "••••••••",
  required = true,
  showPassword = false,
  toggleShowPassword,
  error,
}: PasswordInputProps) => {
  const [localShowPassword, setLocalShowPassword] = useState(showPassword);
  
  const handleTogglePassword = () => {
    if (toggleShowPassword) {
      toggleShowPassword();
    } else {
      setLocalShowPassword(!localShowPassword);
    }
  };

  const shouldShowPassword = showPassword !== undefined ? showPassword : localShowPassword;

  return (
    <div className="relative">
      <Input
        id={id}
        type={shouldShowPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="pl-10"
      />
      <Key className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={handleTogglePassword}
        className="absolute right-0 top-0 h-full"
      >
        {shouldShowPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
      </Button>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};
