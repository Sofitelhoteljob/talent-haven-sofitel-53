
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar, CheckCircle2, Clock, FileText, AlertCircle } from "lucide-react";

export const ApplicationTab = () => {
  // Mock application data
  const applicationStages = [
    { id: 1, name: "Application Submitted", completed: true, date: "June 15, 2023" },
    { id: 2, name: "Application Under Review", completed: true, date: "June 18, 2023" },
    { id: 3, name: "Interview Scheduled", completed: false, date: "Pending" },
    { id: 4, name: "Final Decision", completed: false, date: "Pending" },
    { id: 5, name: "Onboarding", completed: false, date: "Pending" }
  ];
  
  const currentStage = applicationStages.findIndex(stage => !stage.completed);
  const progressPercentage = (currentStage / (applicationStages.length - 1)) * 100;
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Application Status</CardTitle>
          <CardDescription>Track your application progress</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium">Application Progress</h3>
              <Badge variant="outline" className="font-normal">
                {applicationStages[currentStage]?.name || "Complete"}
              </Badge>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
          
          <div className="space-y-4">
            {applicationStages.map((stage, index) => (
              <div key={stage.id} className="flex items-start">
                <div className="flex-shrink-0 mr-3 mt-1">
                  {stage.completed ? (
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  ) : index === currentStage ? (
                    <Clock className="h-5 w-5 text-amber-500" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-gray-300" />
                  )}
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between">
                    <h4 className={`text-sm font-medium ${index === currentStage ? 'text-amber-500' : stage.completed ? 'text-green-500' : 'text-gray-500'}`}>
                      {stage.name}
                    </h4>
                    <div className="flex items-center text-xs text-gray-500">
                      <Calendar className="h-3 w-3 mr-1" />
                      {stage.date}
                    </div>
                  </div>
                  {index === currentStage && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Your application is currently being reviewed by our team. We'll update you soon.
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Application Details</CardTitle>
          <CardDescription>Review your submitted application</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-muted rounded-md">
            <div className="flex items-center">
              <FileText className="h-5 w-5 mr-2 text-primary" />
              <div>
                <h4 className="text-sm font-medium">Global Talent Program Application</h4>
                <p className="text-xs text-muted-foreground">Submitted on June 15, 2023</p>
              </div>
            </div>
            <Badge>Pending</Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Selected Program</h3>
              <p className="text-sm text-muted-foreground">International Management Trainee</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Experience Level</h3>
              <p className="text-sm text-muted-foreground">1-3 years</p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-sm font-medium mb-2">Motivation</h3>
              <p className="text-sm text-muted-foreground">
                I am passionate about the hospitality industry and excited about the opportunity to develop my career with Sofitel Frankfurt Opera...
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
          <CardDescription>What to expect in the coming stages</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium">1</div>
              </div>
              <div>
                <h4 className="text-sm font-medium">Interview Preparation</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  If selected for an interview, you'll receive an email with the date, time, and format (in-person or virtual).
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium">2</div>
              </div>
              <div>
                <h4 className="text-sm font-medium">Document Verification</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Be prepared to provide original copies of your qualifications and identification documents.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                <div className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-medium">3</div>
              </div>
              <div>
                <h4 className="text-sm font-medium">Bond Payment</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  If selected, you'll need to pay the €1,000 refundable bond to secure your position.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
