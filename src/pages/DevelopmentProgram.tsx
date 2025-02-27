import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  GlobeIcon, 
  Clock, 
  MapPin, 
  BriefcaseIcon, 
  User, 
  UserPlus, 
  Building, 
  Plane, 
  GraduationCap, 
  CreditCard,
  Check,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const DevelopmentProgram = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    motivation: '',
    resume: null,
  });
  const { toast } = useToast();

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData(prevData => ({
      ...prevData,
      resume: file,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission and success message
    toast({
      title: "Application Submitted",
      description: "Your application has been successfully submitted!",
    });

    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      motivation: '',
      resume: null,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/lovable-uploads/98647a09-12e4-4c6d-9040-a33dec47dc88.png')`,
              filter: "brightness(0.6)",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          />
          <div className="relative container mx-auto px-6 text-center text-white z-10">
            <Badge className="bg-secondary text-white mb-6 animate-fade-in">
              Launch Your Career
            </Badge>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Elevate Your Potential
            </h1>
            <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in">
              Embark on a transformative journey with our Development Program, designed to cultivate future leaders in the world of hospitality.
            </p>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white animate-fade-in"
              onClick={() => document.getElementById('apply-now')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apply Now
            </Button>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="font-playfair text-4xl font-bold text-center mb-8">
              Program Overview
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-center">
              Our Development Program is a comprehensive initiative designed to provide aspiring professionals with the skills, knowledge, and experience necessary to excel in the hospitality industry. Through a combination of hands-on training, mentorship, and academic coursework, participants will gain a deep understanding of hotel operations and leadership principles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {/* Immersive Training */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BriefcaseIcon className="h-5 w-5 text-primary" />
                    Immersive Training
                  </CardTitle>
                  <CardDescription>
                    Hands-on experience in various hotel departments.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Participate in real-world projects and gain practical skills.
                </CardContent>
              </Card>

              {/* Mentorship */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UserPlus className="h-5 w-5 text-primary" />
                    Mentorship
                  </CardTitle>
                  <CardDescription>
                    Guidance from industry leaders and seasoned professionals.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Receive personalized advice and support to achieve your goals.
                </CardContent>
              </Card>

              {/* Academic Coursework */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Academic Coursework
                  </CardTitle>
                  <CardDescription>
                    Formal education to complement practical experience.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Enhance your knowledge with relevant industry topics.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Regional Programs */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-6">
            <h2 className="font-playfair text-4xl font-bold text-center mb-8">
              Regional Programs
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-center mb-12">
              Explore our Development Program offerings in different regions, each tailored to meet the unique needs and opportunities of the local hospitality market.
            </p>

            <Tabs defaultValue="europe" className="w-full">
              <TabsList className="mx-auto w-fit">
                <TabsTrigger value="europe">Europe</TabsTrigger>
                <TabsTrigger value="northAmerica">North America</TabsTrigger>
                <TabsTrigger value="asia">Asia</TabsTrigger>
              </TabsList>
              <TabsContent value="europe" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>European Development Program</CardTitle>
                    <CardDescription>
                      Focusing on luxury hospitality in Europe.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5">
                      <li>Intensive training in hotel management</li>
                      <li>Cross-cultural communication skills</li>
                      <li>Networking opportunities with industry leaders</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="justify-end">
                    <Button>
                      Learn More <ArrowRight className="ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="northAmerica" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>North American Development Program</CardTitle>
                    <CardDescription>
                      Developing leaders for the North American market.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5">
                      <li>Focus on customer service excellence</li>
                      <li>Leadership development workshops</li>
                      <li>Exposure to diverse hospitality segments</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="justify-end">
                    <Button>
                      Learn More <ArrowRight className="ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="asia" className="mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Asian Development Program</CardTitle>
                    <CardDescription>
                      Preparing professionals for Asia's booming hospitality sector.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5">
                      <li>Understanding Asian hospitality traditions</li>
                      <li>Language and cultural immersion programs</li>
                      <li>Strategic management in emerging markets</li>
                    </ul>
                  </CardContent>
                  <CardFooter className="justify-end">
                    <Button>
                      Learn More <ArrowRight className="ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-white" id="apply-now">
          <div className="container mx-auto px-6">
            <h2 className="font-playfair text-4xl font-bold text-center mb-8">
              Application Process
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-center mb-12">
              Ready to take the next step? Learn about our streamlined application process and discover how you can join our Development Program.
            </p>

            <Accordion type="single" collapsible>
              <AccordionItem value="application-form">
                <AccordionTrigger onClick={toggleExpanded}>
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-lg font-semibold">Application Form</h3>
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-muted-foreground">First Name</label>
                      <Input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        className="mt-1" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-muted-foreground">Last Name</label>
                      <Input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                        className="mt-1" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">Email</label>
                      <Input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="mt-1" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground">Phone</label>
                      <Input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="mt-1" 
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-muted-foreground">Country</label>
                      <Select onValueChange={(value) => setFormData(prevData => ({ ...prevData, country: value }))}>
                        <SelectTrigger className="w-full mt-1">
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="USA">United States</SelectItem>
                          <SelectItem value="Canada">Canada</SelectItem>
                          <SelectItem value="UK">United Kingdom</SelectItem>
                          <SelectItem value="Germany">Germany</SelectItem>
                          {/* Add more countries as needed */}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label htmlFor="resume" className="block text-sm font-medium text-muted-foreground">Resume</label>
                      <Input 
                        type="file" 
                        id="resume" 
                        name="resume" 
                        onChange={handleFileChange} 
                        className="mt-1" 
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="motivation" className="block text-sm font-medium text-muted-foreground">Motivation</label>
                      <Textarea 
                        id="motivation" 
                        name="motivation" 
                        value={formData.motivation} 
                        onChange={handleChange} 
                        className="mt-1" 
                        rows={4} 
                        required 
                      />
                    </div>
                    <div className="md:col-span-2 text-center">
                      <Button type="submit" className="bg-secondary hover:bg-secondary/90 text-white">
                        Submit Application
                      </Button>
                    </div>
                  </form>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="interview-process">
                <AccordionTrigger>Interview Process</AccordionTrigger>
                <AccordionContent>
                  Our interview process involves several stages, including a phone screening, a virtual interview, and a final interview with our hiring team.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="selection-criteria">
                <AccordionTrigger>Selection Criteria</AccordionTrigger>
                <AccordionContent>
                  We evaluate candidates based on their qualifications, experience, and passion for hospitality.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-6">
            <h2 className="font-playfair text-4xl font-bold text-center mb-8">
              Benefits of the Program
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-center mb-12">
              Discover the exceptional benefits and opportunities that await you as a participant in our Development Program.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Career Advancement */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    Career Advancement
                  </CardTitle>
                  <CardDescription>
                    Accelerate your career growth within our organization.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Gain access to leadership roles and advancement opportunities.
                </CardContent>
              </Card>

              {/* Global Exposure */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GlobeIcon className="h-5 w-5 text-primary" />
                    Global Exposure
                  </CardTitle>
                  <CardDescription>
                    Expand your horizons with international assignments.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Work in diverse locations and experience different cultures.
                </CardContent>
              </Card>

              {/* Competitive Compensation */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Competitive Compensation
                  </CardTitle>
                  <CardDescription>
                    Receive a competitive salary and benefits package.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Enjoy financial security and peace of mind.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="font-playfair text-4xl font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto text-center mb-12">
              Find answers to common questions about our Development Program and learn more about what to expect.
            </p>

            <Accordion type="multiple" collapsible>
              <AccordionItem value="question-1">
                <AccordionTrigger>
                  What is the duration of the program?
                </AccordionTrigger>
                <AccordionContent>
                  The program typically lasts 12-18 months, depending on the specific track and location.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="question-2">
                <AccordionTrigger>
                  What qualifications are required to apply?
                </AccordionTrigger>
                <AccordionContent>
                  We look for candidates with a bachelor's degree in hospitality or a related field, as well as relevant work experience.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="question-3">
                <AccordionTrigger>
                  What career opportunities are available after completing the program?
                </AccordionTrigger>
                <AccordionContent>
                  Graduates of the program have the opportunity to pursue leadership roles in various hotel departments, such as operations, sales, and marketing.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-6 text-center">
            <Badge className="bg-secondary/20 text-secondary mb-4">
              Ready to Elevate Your Career?
            </Badge>
            <h2 className="font-playfair text-4xl font-bold mb-4">
              Apply to Our Development Program
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Take the first step towards a rewarding career in hospitality.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white"
              onClick={() => document.getElementById('apply-now')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Apply Now
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default DevelopmentProgram;
