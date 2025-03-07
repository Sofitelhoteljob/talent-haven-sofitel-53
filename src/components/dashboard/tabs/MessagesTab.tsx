
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, MessageSquare } from "lucide-react";

export const MessagesTab = () => {
  // Mock message data
  const messages = [
    {
      id: 1,
      title: "Application Received",
      content: "Thank you for submitting your application to the Sofitel Frankfurt Opera Global Talent Program. We have received your application and will review it shortly.",
      date: "June 15, 2023",
      read: true,
      sender: "Recruitment Team"
    },
    {
      id: 2,
      title: "Document Request",
      content: "Please provide a copy of your latest language certification to complete your application. You can upload this document in the Profile section.",
      date: "June 20, 2023",
      read: false,
      sender: "Recruitment Team"
    },
    {
      id: 3,
      title: "Application Status Update",
      content: "Your application has progressed to the review stage. Our team is currently evaluating your profile against the program requirements.",
      date: "June 25, 2023",
      read: false,
      sender: "Program Manager"
    }
  ];
  
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Messages & Notifications</CardTitle>
          <CardDescription>Stay updated with important communications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {messages.map(message => (
              <div key={message.id} className={`p-4 border rounded-md ${!message.read ? 'bg-muted/50 border-primary/20' : ''}`}>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <MessageSquare className={`h-5 w-5 mr-2 ${!message.read ? 'text-primary' : 'text-muted-foreground'}`} />
                    <h3 className="text-sm font-medium">{message.title}</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    {!message.read && <Badge variant="outline" className="text-xs">New</Badge>}
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {message.date}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{message.content}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-muted-foreground">From: {message.sender}</span>
                  <div className="flex items-center text-xs text-primary">
                    <Mail className="h-3 w-3 mr-1" />
                    Reply
                  </div>
                </div>
              </div>
            ))}
            
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
