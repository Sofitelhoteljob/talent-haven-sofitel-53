
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const ProgramHero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    // Preload the hero image
    const img = new Image();
    img.src = '/lovable-uploads/98647a09-12e4-4c6d-9040-a33dec47dc88.png';
    img.onload = () => setImageLoaded(true);
    
    // Set a timeout to show a placeholder if image takes too long
    const timeout = setTimeout(() => {
      if (!imageLoaded) setImageLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timeout);
  }, []);

  const scrollToApply = () => {
    const element = document.getElementById('apply-now');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {imageLoaded ? (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in"
          style={{
            backgroundImage: `url('/lovable-uploads/98647a09-12e4-4c6d-9040-a33dec47dc88.png')`,
            filter: "brightness(0.6)",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
          aria-label="Background image of Sofitel Frankfurt Opera"
        />
      ) : (
        <div className="absolute inset-0 bg-gray-400"></div>
      )}
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
          onClick={scrollToApply}
          aria-label="Scroll to application form"
        >
          Apply Now <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};
