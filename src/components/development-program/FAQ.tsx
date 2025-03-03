
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What is the Employment Guarantee Bond?",
      answer: "The Employment Guarantee Bond is a €1,000 deposit that secures your place in the program and demonstrates your commitment. It is fully refundable after completing 12 months of successful employment with Sofitel Frankfurt Opera. This bond helps us maintain the quality of our program and ensures that participants are serious about their career development."
    },
    {
      question: "What kind of visa assistance is provided?",
      answer: "We provide comprehensive visa support, including: preparation of all required documentation, guidance through the application process, payment of visa processing fees, and coordination with German authorities. Our dedicated visa team has extensive experience with international employee relocations and will work closely with you throughout the process."
    },
    {
      question: "What training will I receive as part of the program?",
      answer: "Participants receive comprehensive training including: luxury hospitality standards and service excellence, German language courses, cultural adaptation support, technical skills specific to your role, leadership and professional development, and Accor brand standards. The training program is designed to ensure your success in your role and prepare you for future career advancement."
    },
    {
      question: "What accommodation support is available?",
      answer: "We provide comprehensive accommodation support including: assistance finding suitable housing options in Frankfurt, guidance navigating the local rental market, help with rental applications and contracts, temporary accommodation upon arrival if needed, and advice on neighborhoods, transportation, and local amenities. Our team understands the challenges of relocating to a new country and will help make your transition as smooth as possible."
    },
    {
      question: "What are the career advancement opportunities?",
      answer: "After successfully completing the two-year program, participants have various career advancement opportunities including: continuing with Sofitel Frankfurt Opera in an advanced role, transferring to another Accor property in Germany or internationally, participating in specialized leadership development programs, and accessing Accor's global internal job market. Your performance and aspirations will guide your career path within our extensive network."
    },
    {
      question: "What are the eligibility requirements?",
      answer: "Eligibility requirements include: citizenship of a qualifying country in Africa, South America, or Asia, minimum of basic English language proficiency (additional languages are an advantage), previous hospitality experience or relevant education (varies by program), willingness to commit to a two-year work placement in Germany, and eligibility to apply for a German work visa. Specific requirements may vary by regional program and role."
    }
  ];

  return (
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
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index + 1}`} 
                className="border border-secondary/20 rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg font-playfair">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
