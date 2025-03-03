
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
  const scrollToApply = () => {
    const element = document.getElementById('apply-now');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-playfair text-4xl font-bold mb-6">Begin Your International Hospitality Journey</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Join the Sofitel Frankfurt Opera Global Talent Program and transform your career while experiencing the richness of German culture and luxury hospitality excellence.
        </p>
        <Button 
          size="lg" 
          className="bg-secondary hover:bg-secondary/90 text-white"
          onClick={scrollToApply}
        >
          Apply Now <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};
