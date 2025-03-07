
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export const ApplicationTab = () => {
  // Empty application stages - no mock data
  const applicationStages: any[] = [];
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Application Status</CardTitle>
          <CardDescription>Track your application progress</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {applicationStages.length === 0 && (
            <div className="text-center py-6">
              <AlertCircle className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
              <p className="text-muted-foreground">No application data available</p>
            </div>
          )}
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Application Details</CardTitle>
          <CardDescription>Review your submitted application</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <AlertCircle className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
            <p className="text-muted-foreground">No application details available</p>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
          <CardDescription>What to expect in the coming stages</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-6">
            <AlertCircle className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
            <p className="text-muted-foreground">Information will be available once your application is submitted</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
