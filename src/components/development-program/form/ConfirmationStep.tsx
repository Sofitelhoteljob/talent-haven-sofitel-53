
import { CreditCard, AlertCircle } from "lucide-react";

export const ConfirmationStep = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
        <h4 className="font-medium mb-2 flex items-center">
          <AlertCircle className="h-5 w-5 text-secondary mr-2" />
          Employment Guarantee Bond (€1,000)
        </h4>
        <p className="text-sm text-muted-foreground mb-4">
          The €1,000 bond secures your place in the program and is fully refundable after 12 months of successful employment. This demonstrates your commitment and helps us maintain the quality of our program.
        </p>
        <div className="bg-white p-3 rounded-md border border-secondary/20">
          <h5 className="text-sm font-medium mb-2">Bond Fee Details:</h5>
          <ul className="text-sm text-muted-foreground space-y-1.5 list-disc list-inside">
            <li>Payment is required after your application is accepted</li>
            <li>100% refundable after 12 months of successful employment</li>
            <li>Secures your position in the competitive program</li>
            <li>Demonstrates your commitment to the full program duration</li>
            <li>Can be paid via bank transfer or credit card</li>
          </ul>
        </div>
        <div className="flex items-center mt-4">
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
          <li>I understand the Employment Guarantee Bond requirement of €1,000</li>
          <li>I am available for a two-year work placement in Frankfurt, Germany</li>
          <li>I am eligible to apply for a German work visa</li>
        </ul>
      </div>
    </div>
  );
};
