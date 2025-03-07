
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { 
  AlertCircle, 
  CheckCircle2, 
  CreditCard, 
  HelpCircle, 
  Info, 
  RefreshCcw
} from "lucide-react";

// Define proper bond status type to fix type comparison issues
type BondStatus = 'pending' | 'paid' | 'refunded';

export const BondStatusTab = () => {
  // Mock bond data
  const bondStatus: BondStatus = "pending"; // could be 'pending', 'paid', 'refunded'
  const bondAmount = "€1,000";
  const paymentDeadline = "August 15, 2023";
  
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
          <div className="flex items-center justify-center py-6">
            <div className="w-32 h-32 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                {bondStatus === "pending" && (
                  <AlertCircle className="h-12 w-12 text-amber-500" />
                )}
                {bondStatus === "paid" && (
                  <CheckCircle2 className="h-12 w-12 text-green-500" />
                )}
                {bondStatus === "refunded" && (
                  <RefreshCcw className="h-12 w-12 text-blue-500" />
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-muted/50 p-4 rounded-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium">Bond Amount:</h3>
              <span className="font-semibold">{bondAmount}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-medium">Status:</h3>
              <Badge variant={
                bondStatus === "paid" ? "default" : 
                bondStatus === "refunded" ? "secondary" : 
                "outline"
              }>
                {bondStatus === "pending" && "Pending Payment"}
                {bondStatus === "paid" && "Paid"}
                {bondStatus === "refunded" && "Refunded"}
              </Badge>
            </div>
            {bondStatus === "pending" && (
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium">Payment Deadline:</h3>
                <span className="text-amber-500 font-medium">{paymentDeadline}</span>
              </div>
            )}
          </div>
          
          {bondStatus === "pending" && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Action Required</AlertTitle>
              <AlertDescription>
                Please pay your bond by {paymentDeadline} to secure your position in the program.
              </AlertDescription>
            </Alert>
          )}
          
          {bondStatus === "paid" && (
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>Bond Payment Received</AlertTitle>
              <AlertDescription>
                Your bond payment has been processed and confirmed. This amount will be refunded upon successful completion of the program.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        {bondStatus === "pending" && (
          <CardFooter>
            <Button className="w-full">
              <CreditCard className="mr-2 h-4 w-4" />
              Make Bond Payment
            </Button>
          </CardFooter>
        )}
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
            
            <div className="flex items-start">
              <HelpCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-medium">What payment methods are accepted?</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  We accept bank transfers, credit/debit cards, and PayPal for bond payments. Detailed payment instructions will be provided upon acceptance.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
