
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileQuestion, MessageSquare } from "lucide-react";

export const ResourcesTab = () => {
  // Empty resources array - no mock data
  const resources: any[] = [];
  
  // Empty FAQ array - no mock data
  const faqs: any[] = [];
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Program Resources</CardTitle>
            <CardDescription>Download important documents and guides</CardDescription>
          </CardHeader>
          <CardContent>
            {resources.length === 0 && (
              <div className="text-center py-6">
                <MessageSquare className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">No resources available yet</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>Common questions about the program</CardDescription>
          </CardHeader>
          <CardContent>
            {faqs.length === 0 && (
              <div className="text-center py-6">
                <FileQuestion className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">No FAQs available yet</p>
              </div>
            )}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
            <CardDescription>Contact our support team</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-3">
              <p className="text-sm text-muted-foreground">
                If you have any questions or need assistance with your application, our team is here to help.
              </p>
              <Button className="w-full">Contact Support</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
