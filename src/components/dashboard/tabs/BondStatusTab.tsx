
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, AlertCircle } from "lucide-react";

export const BondStatusTab = () => {
  // Remove mock bond data
  const bondStatus = null;
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Bond Status</CardTitle>
          <CardDescription>
            Track the status of your refundable program bond
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center py-6">
            <AlertCircle className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
            <p className="text-muted-foreground">No bond information available</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Bond Information</CardTitle>
          <CardDescription>
            Learn more about the refundable bond requirement
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start">
              <HelpCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium">What is the bond for?</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  The €1,000 bond serves as a commitment to the program. It ensures that selected candidates are serious about participating and completing the program.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <HelpCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium">When is the bond refunded?</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  The bond is fully refunded upon successful completion of the Global Talent Program, which is typically after 12 months of service.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
