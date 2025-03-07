
import { ReactNode } from "react";
import { Input } from "@/components/ui/input";

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}

export const FormField = ({ id, label, error, children }: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-medium">{label}</label>
      {children}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};
