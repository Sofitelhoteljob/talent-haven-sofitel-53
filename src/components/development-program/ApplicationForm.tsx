
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CreditCard } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  program: string;
  experience: string;
  motivation: string;
}

export const ApplicationForm = () => {
  const [formStep, setFormStep] = useState(1);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    program: "",
    experience: "",
    motivation: ""
  });

  const handleNextStep = () => {
    setFormStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setFormStep(prev => Math.max(1, prev - 1));
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = encodeURIComponent(
      `*New Global Talent Program Application*\n\n` +
      `*Personal Information:*\n` +
      `Full Name: ${formData.fullName}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Country: ${formData.country}\n\n` +
      `*Program Details:*\n` +
      `Preferred Program: ${formData.program}\n` +
      `Hospitality Experience: ${formData.experience}\n\n` +
      `*Motivation:*\n${formData.motivation}`
    );
    
    const whatsappLink = `https://wa.me/+4915210755401?text=${message}`;
    window.open(whatsappLink, "_blank");
    
    toast({
      title: "Application Submitted",
      description: "Your application information has been sent to our recruitment team via WhatsApp.",
    });
  };

  return (
    <Card className="bg-secondary/5 border-secondary/20">
      <CardHeader>
        <CardTitle className="font-playfair text-2xl">Start Your Application</CardTitle>
        <CardDescription>
          Take the first step toward your international hospitality career
        </CardDescription>
      </CardHeader>
      <CardContent>
        {formStep === 1 && (
          <div className="space-y-4 animate-fade-in">
            <div className="space-y-2">
              <label htmlFor="fullName" className="text-sm font-medium">Full Name</label>
              <Input 
                id="fullName" 
                placeholder="Enter your full name" 
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email Address</label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
              <Input 
                id="phone" 
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="country" className="text-sm font-medium">Country of Residence</label>
              <Select 
                onValueChange={(value) => handleSelectChange("country", value)}
                value={formData.country}
              >
                <SelectTrigger id="country" className="w-full">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Uganda">Uganda</SelectItem>
                  <SelectItem value="South Africa">South Africa</SelectItem>
                  <SelectItem value="Morocco">Morocco</SelectItem>
                  <SelectItem value="Brazil">Brazil</SelectItem>
                  <SelectItem value="Colombia">Colombia</SelectItem>
                  <SelectItem value="Argentina">Argentina</SelectItem>
                  <SelectItem value="India">India</SelectItem>
                  <SelectItem value="Thailand">Thailand</SelectItem>
                  <SelectItem value="Philippines">Philippines</SelectItem>
                  <SelectItem value="Vietnam">Vietnam</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}
        
        {formStep === 2 && (
          <div className="space-y-4 animate-fade-in">
            <div className="space-y-2">
              <label htmlFor="program" className="text-sm font-medium">Preferred Program</label>
              <Select 
                onValueChange={(value) => handleSelectChange("program", value)}
                value={formData.program}
              >
                <SelectTrigger id="program" className="w-full">
                  <SelectValue placeholder="Select program" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Africa Development Program">Africa Development Program</SelectItem>
                  <SelectItem value="America Development Program">America Development Program</SelectItem>
                  <SelectItem value="Asia Development Program">Asia Development Program</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="experience" className="text-sm font-medium">Hospitality Experience</label>
              <Select 
                onValueChange={(value) => handleSelectChange("experience", value)}
                value={formData.experience}
              >
                <SelectTrigger id="experience" className="w-full">
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1 years">0-1 years</SelectItem>
                  <SelectItem value="1-3 years">1-3 years</SelectItem>
                  <SelectItem value="3-5 years">3-5 years</SelectItem>
                  <SelectItem value="5+ years">5+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="motivation" className="text-sm font-medium">Motivation Letter</label>
              <Textarea
                id="motivation"
                placeholder="Tell us why you want to join the program and what you hope to achieve (max 500 words)"
                className="min-h-[150px]"
                value={formData.motivation}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}
        
        {formStep === 3 && (
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
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {formStep > 1 && (
          <Button variant="outline" onClick={handlePrevStep}>
            Back
          </Button>
        )}
        {formStep < 3 ? (
          <Button className="bg-secondary hover:bg-secondary/90 ml-auto" onClick={handleNextStep}>
            Next Step
          </Button>
        ) : (
          <Button className="bg-secondary hover:bg-secondary/90 ml-auto" onClick={handleSubmitApplication}>
            Submit Application
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
