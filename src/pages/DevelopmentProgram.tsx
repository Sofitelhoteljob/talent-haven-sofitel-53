
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, Check, GraduationCap, Lightbulb, Clock, Users, Award, ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";

const DevelopmentProgram = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-secondary/10 py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <Badge className="mb-4">Employee Development</Badge>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Grow Your Career With Us
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our development programs are designed to nurture talent, build expertise, and create pathways for career advancement in the hospitality industry.
            </p>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              View Programs <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold mb-4">Our Development Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From entry-level training to executive leadership development, we offer programs for every stage of your career.
            </p>
          </div>

          <Tabs defaultValue="leadership" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="leadership">Leadership</TabsTrigger>
                <TabsTrigger value="skills">Skills Training</TabsTrigger>
                <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="leadership" className="animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProgramCard 
                  title="Executive Leadership Track" 
                  description="Develop strategic thinking and leadership skills necessary for senior management roles."
                  duration="12 months"
                  icon={<GraduationCap className="h-10 w-10 text-secondary" />}
                  features={[
                    "Strategic planning workshops",
                    "Financial management training",
                    "Cross-functional leadership experience",
                    "Executive mentorship"
                  ]}
                />
                <ProgramCard 
                  title="Department Head Development" 
                  description="Build the expertise required to lead individual departments with excellence."
                  duration="9 months"
                  icon={<Users className="h-10 w-10 text-secondary" />}
                  features={[
                    "Departmental operations mastery",
                    "Team management training",
                    "Conflict resolution skills",
                    "Budget planning and control"
                  ]}
                />
                <ProgramCard 
                  title="Emerging Leaders Program" 
                  description="Identify and develop high-potential employees for future leadership positions."
                  duration="6 months"
                  icon={<Lightbulb className="h-10 w-10 text-secondary" />}
                  features={[
                    "Leadership fundamentals",
                    "Project management skills",
                    "Communication workshop",
                    "Personal development planning"
                  ]}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="skills" className="animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProgramCard 
                  title="Culinary Excellence" 
                  description="Master advanced culinary techniques and innovative food presentation."
                  duration="4 months"
                  icon={<Award className="h-10 w-10 text-secondary" />}
                  features={[
                    "Advanced cooking techniques",
                    "Menu development",
                    "Food photography",
                    "International cuisine mastery"
                  ]}
                />
                <ProgramCard 
                  title="Guest Service Excellence" 
                  description="Elevate customer service skills to create memorable guest experiences."
                  duration="3 months"
                  icon={<Users className="h-10 w-10 text-secondary" />}
                  features={[
                    "Luxury service standards",
                    "Guest psychology",
                    "Problem-solving techniques",
                    "Service recovery protocols"
                  ]}
                />
                <ProgramCard 
                  title="Digital Hospitality" 
                  description="Develop skills in digital marketing and technology for the modern hospitality landscape."
                  duration="3 months"
                  icon={<Lightbulb className="h-10 w-10 text-secondary" />}
                  features={[
                    "Social media management",
                    "Online reputation management",
                    "Digital guest journey mapping",
                    "Analytics and reporting"
                  ]}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="mentorship" className="animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProgramCard 
                  title="Executive Shadowing" 
                  description="Learn directly from our executive team through one-on-one shadowing opportunities."
                  duration="6 months"
                  icon={<Users className="h-10 w-10 text-secondary" />}
                  features={[
                    "Weekly executive meetings",
                    "Decision-making observation",
                    "Strategy planning participation",
                    "Leadership style development"
                  ]}
                />
                <ProgramCard 
                  title="Cross-Department Mentoring" 
                  description="Broaden your understanding of hotel operations through mentorship across departments."
                  duration="4 months"
                  icon={<GraduationCap className="h-10 w-10 text-secondary" />}
                  features={[
                    "Interdepartmental knowledge sharing",
                    "Operational versatility development",
                    "Career path exploration",
                    "Networking opportunities"
                  ]}
                />
                <ProgramCard 
                  title="Peer Learning Circles" 
                  description="Collaborative learning groups focused on specific skill development."
                  duration="Ongoing"
                  icon={<Lightbulb className="h-10 w-10 text-secondary" />}
                  features={[
                    "Peer-to-peer knowledge exchange",
                    "Collaborative problem solving",
                    "Industry trend discussions",
                    "Group project opportunities"
                  ]}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the employees who have grown their careers through our development programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SuccessStoryCard
              name="Marie Laurent"
              startPosition="Front Desk Agent"
              currentPosition="Hotel Manager"
              program="Executive Leadership Track"
              quote="The development program gave me the confidence and skills to advance my career beyond what I thought possible."
              imageSrc="/placeholder.svg"
            />
            <SuccessStoryCard
              name="Thomas Weber"
              startPosition="Junior Chef"
              currentPosition="Executive Chef"
              program="Culinary Excellence"
              quote="The mentorship and culinary training I received helped me refine my craft and eventually lead our award-winning kitchen team."
              imageSrc="/placeholder.svg"
            />
            <SuccessStoryCard
              name="Sofia Garcia"
              startPosition="Guest Relations"
              currentPosition="Director of Customer Experience"
              program="Department Head Development"
              quote="Through the cross-departmental exposure and leadership training, I was able to create a unified vision for guest experience across the hotel."
              imageSrc="/placeholder.svg"
            />
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold mb-4">How to Apply</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our development programs are open to all employees who meet the eligibility criteria.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <ApplicationStep
                number="1"
                title="Review Available Programs"
                description="Explore our current development opportunities to find the right fit for your career goals and interests."
              />
              <ApplicationStep
                number="2"
                title="Discuss with Your Manager"
                description="Have a career development conversation with your manager about your interest in the program."
              />
              <ApplicationStep
                number="3"
                title="Submit Your Application"
                description="Complete the application form, including your career goals and why you're interested in the program."
              />
              <ApplicationStep
                number="4"
                title="Assessment and Interview"
                description="Qualified candidates will be invited for an assessment and interview with the program coordinators."
              />
              <ApplicationStep
                number="5"
                title="Program Commencement"
                description="Selected participants will receive an official invitation with program start dates and preparation materials."
              />
            </div>

            <div className="mt-12 text-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Request Application Form
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our development programs.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-6">
            <FaqItem
              question="Who is eligible to apply for development programs?"
              answer="All employees who have completed their probation period are eligible to apply. Some specialized programs may have additional requirements such as time in role or specific experience."
            />
            <FaqItem
              question="How much time commitment is required?"
              answer="Program time commitments vary. Most programs require a combination of on-the-job training, in-person workshops, and self-paced learning. Your manager will work with you to ensure you have adequate time to participate."
            />
            <FaqItem
              question="Will I be guaranteed a promotion after completing a program?"
              answer="While completion of a development program does not guarantee promotion, it significantly enhances your skills and readiness for advancement opportunities when they become available."
            />
            <FaqItem
              question="Can I participate in multiple programs simultaneously?"
              answer="Generally, we recommend focusing on one program at a time to maximize learning. However, some complementary programs may be taken concurrently with approval from program coordinators."
            />
            <FaqItem
              question="Is there a cost to participate in development programs?"
              answer="All development programs are fully funded by the company for eligible employees. This includes materials, workshops, and necessary travel for training."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl font-bold mb-6">Ready to Accelerate Your Career?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Take the next step in your professional journey with our industry-leading development programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Apply Now
            </Button>
            <Button size="lg" variant="outline">
              Speak to HR
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Helper Components
const ProgramCard = ({ 
  title, 
  description, 
  duration, 
  features, 
  icon 
}: { 
  title: string; 
  description: string; 
  duration: string; 
  features: string[];
  icon: React.ReactNode;
}) => {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle className="font-playfair text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-4 text-sm text-muted-foreground">
          <Clock className="mr-2 h-4 w-4" />
          <span>Duration: {duration}</span>
        </div>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="mr-2 h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">Learn More</Button>
      </CardFooter>
    </Card>
  );
};

const SuccessStoryCard = ({ 
  name, 
  startPosition, 
  currentPosition, 
  program, 
  quote,
  imageSrc
}: { 
  name: string; 
  startPosition: string; 
  currentPosition: string; 
  program: string; 
  quote: string;
  imageSrc: string;
}) => {
  return (
    <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="aspect-[16/9] relative">
        <img
          src={imageSrc}
          alt={`Portrait of ${name}`}
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="font-playfair text-xl">{name}</CardTitle>
        <CardDescription className="flex flex-col">
          <span className="text-muted-foreground">Started as: {startPosition}</span>
          <span className="font-medium text-secondary">Now: {currentPosition}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 text-sm inline-block rounded-full px-3 py-1 bg-secondary/10 text-secondary">
          {program}
        </div>
        <blockquote className="italic text-muted-foreground">"{quote}"</blockquote>
      </CardContent>
    </Card>
  );
};

const ApplicationStep = ({ 
  number, 
  title, 
  description 
}: { 
  number: string; 
  title: string; 
  description: string; 
}) => {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 flex items-start">
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white font-medium">
          {number}
        </div>
      </div>
      <div>
        <h3 className="font-playfair text-lg font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const FaqItem = ({ 
  question, 
  answer 
}: { 
  question: string; 
  answer: string; 
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-playfair">{question}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{answer}</p>
      </CardContent>
    </Card>
  );
};

export default DevelopmentProgram;
