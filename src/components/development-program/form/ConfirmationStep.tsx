
import { CreditCard } from "lucide-react";

export const ConfirmationStep = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="p-4 bg-secondary/10 rounded-lg">
        <h4 className="font-medium mb-2">Employment Guarantee Bond</h4>
        <p className="text-sm text-muted-foreground mb-4">
          The €1,000 bond secures your place in the program and is fully refundable after 12 months of successful employment. This demonstrates your commitment and helps us maintain the quality of our program.
        </p>
        <div className="flex items-center">
          <CreditCard className="h-5 w-5 text-secondary mr-2" />
          <span className="text-sm font-medium">Payment will be requested after your application is accepted</span>
        </div>
      </div>
      
      <div className="space-y-2">
        <label className="text-sm font-medium">Confirm Understanding</label>
        <p className="text-sm text-muted-foreground">
          By submitting this application, I confirm that:
        </p>
        <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
          <li>All information provided is accurate and complete</li>
          <li>I understand the Employment Guarantee Bond requirement</li>
          <li>I am available for a two-year work placement in Frankfurt, Germany</li>
          <li>I am eligible to apply for a German work visa</li>
        </ul>
      </div>
    </div>
  );
};
