
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
  const [showFullInfo, setShowFullInfo] = useState({
    africa: false,
    america: false,
    asia: false
  });
  const [formStep, setFormStep] = useState(1);
  const { toast } = useToast();

  const toggleInfoSection = (region: 'africa' | 'america' | 'asia') => {
    setShowFullInfo(prev => ({
      ...prev,
      [region]: !prev[region]
    }));
  };

  const handleNextStep = () => {
    setFormStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setFormStep(prev => Math.max(1, prev - 1));
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received",
      description: "Thank you for your interest in our Development Program. We will contact you shortly.",
    });
    setFormStep(1);
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
            <Badge className="bg-secondary text-white mb-6 animate-fade-in">Global Talent Initiative</Badge>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Empowering Global Talent at Sofitel Frankfurt Opera
            </h1>
            <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in">
              Join our prestigious development program and build an international career in luxury hospitality
            </p>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white animate-fade-in"
              onClick={() => {
                const element = document.getElementById('apply-now');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="bg-secondary/10 text-secondary mb-4">About The Program</Badge>
              <h2 className="font-playfair text-4xl font-bold mb-6">Global Talent Program</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our mission is to bring skilled individuals from Africa, South America, and Asia to work in luxury hospitality in Germany, creating a diverse and dynamic workforce while providing life-changing opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/lovable-uploads/cb34e963-852e-4568-a5b6-cba5db17673d.png" 
                  alt="Luxury hotel lounge area" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="space-y-6">
                <h3 className="font-playfair text-2xl font-bold">Why Join Our Program?</h3>
                <p className="text-muted-foreground">
                  The Sofitel Frankfurt Opera Global Talent Program offers a unique opportunity to develop your skills in one of Germany's most prestigious luxury hotels while experiencing a new culture and building an international career.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 bg-secondary/10 p-2 rounded-full">
                      <BriefcaseIcon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Guaranteed Employment</h4>
                      <p className="text-sm text-muted-foreground">Secure a position at Sofitel Frankfurt Opera with our employment guarantee</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 bg-secondary/10 p-2 rounded-full">
                      <GraduationCap className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-medium">World-Class Training</h4>
                      <p className="text-sm text-muted-foreground">Receive comprehensive training in luxury hospitality standards</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 bg-secondary/10 p-2 rounded-full">
                      <Building className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Accommodation Support</h4>
                      <p className="text-sm text-muted-foreground">Get assistance finding suitable housing in Frankfurt</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 mt-1 bg-secondary/10 p-2 rounded-full">
                      <User className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Career Development</h4>
                      <p className="text-sm text-muted-foreground">Access career advancement opportunities within the global Accor network</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Programs */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="bg-secondary/10 text-secondary mb-4">Our Initiatives</Badge>
              <h2 className="font-playfair text-4xl font-bold mb-6">Regional Development Programs</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our specialized regional programs are designed to address the unique needs and opportunities in Africa, South America, and Asia.
              </p>
            </div>

            <div className="space-y-12">
              {/* Africa Development Program */}
              <Card className="overflow-hidden border-secondary/20">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="aspect-square md:aspect-auto">
                    <img 
                      src="/lovable-uploads/93088b86-2ffd-4b71-8238-907a99489b17.png" 
                      alt="Historic Frankfurt Opera House" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-2 p-6 md:p-8">
                    <CardHeader className="p-0 pb-4">
                      <div className="flex items-center mb-2">
                        <Badge className="bg-[#FFC74A]/10 text-[#FFC74A] mr-2">Africa</Badge>
                      </div>
                      <CardTitle className="font-playfair text-2xl font-bold">Africa Development Program</CardTitle>
                      <CardDescription>
                        Empowering talent from Uganda, South Africa, and Morocco
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Our Africa Development Program focuses on creating opportunities for talented individuals from across the continent to build careers in luxury hospitality while promoting sustainable tourism practices.
                        </p>
                        
                        {showFullInfo.africa && (
                          <div className="space-y-4 animate-fade-in">
                            <div className="space-y-2">
                              <h4 className="font-medium">Key Focus Areas:</h4>
                              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                                <li>Youth employment initiatives in Uganda, South Africa, and Morocco</li>
                                <li>Skills development in luxury hospitality service</li>
                                <li>Sustainable tourism practices and education</li>
                                <li>Cultural exchange and international career development</li>
                              </ul>
                            </div>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">Program Benefits:</h4>
                              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                                <li>Two-year work contract with Sofitel Frankfurt Opera</li>
                                <li>Specialized training in European luxury hospitality standards</li>
                                <li>Mentorship from senior Accor hospitality professionals</li>
                                <li>Housing assistance and relocation support</li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="p-0 pt-4">
                      <Button 
                        variant="outline" 
                        className="mr-4"
                        onClick={() => toggleInfoSection('africa')}
                      >
                        {showFullInfo.africa ? (
                          <>Less Info <ChevronUp className="ml-2 h-4 w-4" /></>
                        ) : (
                          <>More Info <ChevronDown className="ml-2 h-4 w-4" /></>
                        )}
                      </Button>
                      <Button 
                        className="bg-secondary hover:bg-secondary/90"
                        onClick={() => {
                          const element = document.getElementById('apply-now');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        Apply Now
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
              
              {/* America Development Program */}
              <Card className="overflow-hidden border-secondary/20">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="aspect-square md:aspect-auto">
                    <img 
                      src="/lovable-uploads/76404b92-ed4b-4b2e-8f74-132d4648d5fb.png" 
                      alt="Couple dancing in hotel room" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-2 p-6 md:p-8">
                    <CardHeader className="p-0 pb-4">
                      <div className="flex items-center mb-2">
                        <Badge className="bg-[#4AB8FE]/10 text-[#4AB8FE] mr-2">America</Badge>
                      </div>
                      <CardTitle className="font-playfair text-2xl font-bold">America Development Program</CardTitle>
                      <CardDescription>
                        Cultural exchange and workforce development from Brazil, Colombia, and Argentina
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Our America Development Program emphasizes cultural exchange and professional growth for participants from South America, bringing Latin American warmth and hospitality expertise to our European setting.
                        </p>
                        
                        {showFullInfo.america && (
                          <div className="space-y-4 animate-fade-in">
                            <div className="space-y-2">
                              <h4 className="font-medium">Key Focus Areas:</h4>
                              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                                <li>Cultural exchange programs with Brazil, Colombia, and Argentina</li>
                                <li>Advanced hospitality and tourism training</li>
                                <li>Environmental sustainability practices in luxury hospitality</li>
                                <li>Leadership development for emerging hospitality professionals</li>
                              </ul>
                            </div>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">Program Benefits:</h4>
                              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                                <li>Two-year work contract with Sofitel Frankfurt Opera</li>
                                <li>German language courses and cultural orientation</li>
                                <li>Cross-cultural hospitality management training</li>
                                <li>International networking opportunities within Accor</li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="p-0 pt-4">
                      <Button 
                        variant="outline" 
                        className="mr-4"
                        onClick={() => toggleInfoSection('america')}
                      >
                        {showFullInfo.america ? (
                          <>Less Info <ChevronUp className="ml-2 h-4 w-4" /></>
                        ) : (
                          <>More Info <ChevronDown className="ml-2 h-4 w-4" /></>
                        )}
                      </Button>
                      <Button 
                        className="bg-secondary hover:bg-secondary/90"
                        onClick={() => {
                          const element = document.getElementById('apply-now');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        Apply Now
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
              
              {/* Asia Development Program */}
              <Card className="overflow-hidden border-secondary/20">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="aspect-square md:aspect-auto">
                    <img 
                      src="/lovable-uploads/bca6acf8-6961-445e-beac-6f6ada16843a.png" 
                      alt="Spa massage treatment" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="col-span-2 p-6 md:p-8">
                    <CardHeader className="p-0 pb-4">
                      <div className="flex items-center mb-2">
                        <Badge className="bg-[#FE4A8B]/10 text-[#FE4A8B] mr-2">Asia</Badge>
                      </div>
                      <CardTitle className="font-playfair text-2xl font-bold">Asia Development Program</CardTitle>
                      <CardDescription>
                        Opportunities for professionals from India, Thailand, the Philippines, and Vietnam
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-4">
                        <p className="text-muted-foreground">
                          Our Asia Development Program showcases opportunities for hospitality professionals from across Asia, combining Asian service excellence with European luxury standards.
                        </p>
                        
                        {showFullInfo.asia && (
                          <div className="space-y-4 animate-fade-in">
                            <div className="space-y-2">
                              <h4 className="font-medium">Key Focus Areas:</h4>
                              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                                <li>Gender equality initiatives for hospitality professionals</li>
                                <li>Rural economic growth through skills development</li>
                                <li>Luxury hospitality skill-building for participants from India, Thailand, the Philippines, and Vietnam</li>
                                <li>Cultural heritage preservation and promotion</li>
                              </ul>
                            </div>
                            
                            <div className="space-y-2">
                              <h4 className="font-medium">Program Benefits:</h4>
                              <ul className="list-disc pl-5 text-muted-foreground space-y-2">
                                <li>Two-year work contract with Sofitel Frankfurt Opera</li>
                                <li>Specialized training in Asian-European fusion hospitality</li>
                                <li>Career advancement pathways within Accor's Asian properties</li>
                                <li>Community leadership development</li>
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter className="p-0 pt-4">
                      <Button 
                        variant="outline" 
                        className="mr-4"
                        onClick={() => toggleInfoSection('asia')}
                      >
                        {showFullInfo.asia ? (
                          <>Less Info <ChevronUp className="ml-2 h-4 w-4" /></>
                        ) : (
                          <>More Info <ChevronDown className="ml-2 h-4 w-4" /></>
                        )}
                      </Button>
                      <Button 
                        className="bg-secondary hover:bg-secondary/90"
                        onClick={() => {
                          const element = document.getElementById('apply-now');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        Apply Now
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-white" id="apply-now">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="bg-secondary/10 text-secondary mb-4">Join Us</Badge>
              <h2 className="font-playfair text-4xl font-bold mb-6">Application Process</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Joining our Global Talent Program involves a straightforward application process designed to find the best match for your skills and our opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-medium mb-2">Submit Online Application</h3>
                    <p className="text-muted-foreground">Complete our comprehensive application form with your personal details, professional experience, and program preferences.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-medium mb-2">Virtual Interview</h3>
                    <p className="text-muted-foreground">Selected candidates will be invited for a virtual interview with our recruitment team to discuss your experience and aspirations.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-medium mb-2">Employment Guarantee Bond</h3>
                    <p className="text-muted-foreground">Secure your place in the program with the €1,000 Employment Guarantee Bond, fully refundable after 12 months of successful employment.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-medium mb-2">Visa Processing</h3>
                    <p className="text-muted-foreground">Our team will assist you with the visa application process, providing all necessary documentation and guidance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-bold mr-4">
                    5
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-medium mb-2">Pre-Departure Orientation</h3>
                    <p className="text-muted-foreground">Receive comprehensive information about your role, living in Germany, and what to expect upon arrival.</p>
                  </div>
                </div>
              </div>
              
              <div>
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
                          <Input id="fullName" placeholder="Enter your full name" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                          <Input id="email" type="email" placeholder="Enter your email address" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                          <Input id="phone" placeholder="Enter your phone number" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="nationality" className="text-sm font-medium">Country of Residence</label>
                          <Select>
                            <SelectTrigger id="nationality" className="w-full">
                              <SelectValue placeholder="Select your country" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="uganda">Uganda</SelectItem>
                              <SelectItem value="south-africa">South Africa</SelectItem>
                              <SelectItem value="morocco">Morocco</SelectItem>
                              <SelectItem value="brazil">Brazil</SelectItem>
                              <SelectItem value="colombia">Colombia</SelectItem>
                              <SelectItem value="argentina">Argentina</SelectItem>
                              <SelectItem value="india">India</SelectItem>
                              <SelectItem value="thailand">Thailand</SelectItem>
                              <SelectItem value="philippines">Philippines</SelectItem>
                              <SelectItem value="vietnam">Vietnam</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}
                    
                    {formStep === 2 && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="space-y-2">
                          <label htmlFor="program" className="text-sm font-medium">Preferred Program</label>
                          <Select>
                            <SelectTrigger id="program" className="w-full">
                              <SelectValue placeholder="Select program" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="africa">Africa Development Program</SelectItem>
                              <SelectItem value="america">America Development Program</SelectItem>
                              <SelectItem value="asia">Asia Development Program</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="experience" className="text-sm font-medium">Hospitality Experience</label>
                          <Select>
                            <SelectTrigger id="experience" className="w-full">
                              <SelectValue placeholder="Select experience level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-1">0-1 years</SelectItem>
                              <SelectItem value="1-3">1-3 years</SelectItem>
                              <SelectItem value="3-5">3-5 years</SelectItem>
                              <SelectItem value="5+">5+ years</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="motivation" className="text-sm font-medium">Motivation Letter</label>
                          <Textarea
                            id="motivation"
                            placeholder="Tell us why you want to join the program and what you hope to achieve (max 500 words)"
                            className="min-h-[150px]"
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
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="bg-secondary/10 text-secondary mb-4">Why Join Us</Badge>
              <h2 className="font-playfair text-4xl font-bold mb-6">Program Benefits</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our Global Talent Program offers numerous advantages designed to support your international career journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <Plane className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="font-playfair text-xl">Free Visa Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We provide comprehensive visa support, including application guidance, documentation, and processing fees to ensure a smooth transition to Germany.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="font-playfair text-xl">Comprehensive Training</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Receive world-class training in luxury hospitality standards, cultural adaptation, language skills, and professional development.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <BriefcaseIcon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="font-playfair text-xl">Guaranteed Employment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Secure a two-year position at Sofitel Frankfurt Opera with competitive salary and benefits according to German standards.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <Building className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="font-playfair text-xl">Accommodation Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Get assistance finding suitable housing in Frankfurt and settling into your new environment with practical support and guidance.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <GlobeIcon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="font-playfair text-xl">Global Career Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access to Accor's worldwide network of hotels and resorts, creating opportunities for international career advancement.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-white hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <UserPlus className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="font-playfair text-xl">Mentorship Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    One-on-one guidance from experienced hospitality professionals to help you navigate your career and maximize your potential.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge className="bg-secondary/10 text-secondary mb-4">Common Questions</Badge>
              <h2 className="font-playfair text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Find answers to common questions about our Global Talent Program.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" className="space-y-4">
                <AccordionItem value="item-1" className="border border-secondary/20 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-playfair">
                    What is the Employment Guarantee Bond?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    The Employment Guarantee Bond is a €1,000 deposit that secures your place in the program and demonstrates your commitment. It is fully refundable after completing 12 months of successful employment with Sofitel Frankfurt Opera. This bond helps us maintain the quality of our program and ensures that participants are serious about their career development.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2" className="border border-secondary/20 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-playfair">
                    What kind of visa assistance is provided?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We provide comprehensive visa support, including: preparation of all required documentation, guidance through the application process, payment of visa processing fees, and coordination with German authorities. Our dedicated visa team has extensive experience with international employee relocations and will work closely with you throughout the process.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3" className="border border-secondary/20 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-playfair">
                    What training will I receive as part of the program?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Participants receive comprehensive training including: luxury hospitality standards and service excellence, German language courses, cultural adaptation support, technical skills specific to your role, leadership and professional development, and Accor brand standards. The training program is designed to ensure your success in your role and prepare you for future career advancement.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4" className="border border-secondary/20 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-playfair">
                    What accommodation support is available?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We provide comprehensive accommodation support including: assistance finding suitable housing options in Frankfurt, guidance navigating the local rental market, help with rental applications and contracts, temporary accommodation upon arrival if needed, and advice on neighborhoods, transportation, and local amenities. Our team understands the challenges of relocating to a new country and will help make your transition as smooth as possible.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5" className="border border-secondary/20 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-playfair">
                    What are the career advancement opportunities?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    After successfully completing the two-year program, participants have various career advancement opportunities including: continuing with Sofitel Frankfurt Opera in an advanced role, transferring to another Accor property in Germany or internationally, participating in specialized leadership development programs, and accessing Accor's global internal job market. Your performance and aspirations will guide your career path within our extensive network.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6" className="border border-secondary/20 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-playfair">
                    What are the eligibility requirements?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Eligibility requirements include: citizenship of a qualifying country in Africa, South America, or Asia, minimum of basic English language proficiency (additional languages are an advantage), previous hospitality experience or relevant education (varies by program), willingness to commit to a two-year work placement in Germany, and eligibility to apply for a German work visa. Specific requirements may vary by regional program and role.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-playfair text-4xl font-bold mb-6">Begin Your International Hospitality Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join the Sofitel Frankfurt Opera Global Talent Program and transform your career while experiencing the richness of German culture and luxury hospitality excellence.
            </p>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white"
              onClick={() => {
                const element = document.getElementById('apply-now');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default DevelopmentProgram;
