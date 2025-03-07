
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

export const MessagesTab = () => {
  // Empty messages array - no mock data
  const messages: any[] = [];
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Messages & Notifications</CardTitle>
          <CardDescription>Stay updated with important communications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-6">
                <MessageSquare className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">No messages yet</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Notification Preferences</CardTitle>
          <CardDescription>Manage how you receive updates</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-center text-sm text-muted-foreground py-6">
            Notification preference settings will be available soon.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
