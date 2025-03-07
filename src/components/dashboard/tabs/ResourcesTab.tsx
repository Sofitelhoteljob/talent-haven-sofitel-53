
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  FileText, 
  FileQuestion, 
  Download, 
  Globe, 
  CreditCard,
  Plane,
  Home
} from "lucide-react";

export const ResourcesTab = () => {
  // Mock resource data
  const resources = [
    {
      id: 1,
      title: "Program Handbook",
      description: "Complete guide to the Global Talent Program, including expectations and schedules.",
      icon: BookOpen,
      type: "PDF",
      size: "2.4 MB",
      new: true
    },
    {
      id: 2,
      title: "Visa Application Guide",
      description: "Step-by-step instructions for applying for a German work visa.",
      icon: Plane,
      type: "PDF",
      size: "1.8 MB",
      new: false
    },
    {
      id: 3,
      title: "Accommodation Guide",
      description: "Information about housing options in Frankfurt and surrounding areas.",
      icon: Home,
      type: "PDF",
      size: "3.2 MB",
      new: false
    },
    {
      id: 4,
      title: "Banking & Finance",
      description: "Guide to opening a German bank account and managing finances abroad.",
      icon: CreditCard,
      type: "PDF",
      size: "1.5 MB",
      new: true
    },
    {
      id: 5,
      title: "Cultural Adaptation",
      description: "Tips for adapting to German culture and workplace norms.",
      icon: Globe,
      type: "PDF",
      size: "2.1 MB",
      new: false
    }
  ];
  
  // Mock FAQ data
  const faqs = [
    {
      id: 1,
      question: "When will I receive feedback on my application?",
      answer: "Applications are typically reviewed within 2-3 weeks of submission. You'll receive an email notification once your application has been reviewed."
    },
    {
      id: 2,
      question: "What happens if I need to withdraw my application?",
      answer: "You can withdraw your application at any time by contacting our recruitment team via email at recruitment@sofitel-frankfurt.com."
    },
    {
      id: 3,
      question: "Is the bond payment refundable if I'm not selected?",
      answer: "The €1,000 bond is only required if you're accepted into the program. It is fully refundable upon successful completion of the program."
    }
  ];
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Program Resources</CardTitle>
            <CardDescription>Download important documents and guides</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {resources.map(resource => (
                <div key={resource.id} className="flex items-start p-3 border rounded-md hover:bg-muted/50 transition-colors">
                  <div className="flex-shrink-0 mr-3">
                    <div className="h-10 w-10 bg-primary/10 rounded-md flex items-center justify-center">
                      <resource.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow mr-3">
                    <div className="flex items-center">
                      <h3 className="text-sm font-medium">{resource.title}</h3>
                      {resource.new && (
                        <Badge className="ml-2 text-xs" variant="secondary">New</Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{resource.description}</p>
                    <div className="flex items-center mt-2">
                      <FileText className="h-3 w-3 text-muted-foreground mr-1" />
                      <span className="text-xs text-muted-foreground">{resource.type}</span>
                      <span className="text-xs text-muted-foreground mx-2">•</span>
                      <span className="text-xs text-muted-foreground">{resource.size}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="flex-shrink-0">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
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
            <div className="space-y-4">
              {faqs.map(faq => (
                <div key={faq.id} className="space-y-2">
                  <div className="flex items-start">
                    <FileQuestion className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <h3 className="text-sm font-medium">{faq.question}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground pl-7">{faq.answer}</p>
                </div>
              ))}
              
              <div className="text-center pt-2">
                <Button variant="link" size="sm" className="text-xs">
                  View All FAQs
                </Button>
              </div>
            </div>
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
