
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const ProgramHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  const images = [
    '/lovable-uploads/8c4239cf-b955-4bf8-9a49-5a454761aada.png',
    '/lovable-uploads/bea6904e-c603-4408-a960-cc7f8b14c9e9.png',
    '/lovable-uploads/427f06a8-ac06-4a13-b7f0-31e6a6285dfa.png'
  ];
  
  useEffect(() => {
    // Preload all hero images
    const imageObjects = images.map(src => {
      const img = new Image();
      img.src = src;
      return img;
    });
    
    Promise.all(
      imageObjects.map(img => {
        return new Promise(resolve => {
          img.onload = resolve;
        });
      })
    ).then(() => {
      setImagesLoaded(true);
    });
    
    // Set a timeout to show a placeholder if images take too long
    const timeout = setTimeout(() => {
      if (!imagesLoaded) setImagesLoaded(true);
    }, 2000);
    
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [imagesLoaded, images.length]);

  const scrollToApply = () => {
    const element = document.getElementById('apply-now');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {imagesLoaded ? (
        images.map((image, index) => (
          <div 
            key={image}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 animate-fade-in"
            style={{
              backgroundImage: `url('${image}')`,
              filter: "brightness(0.6)",
              backgroundPosition: "center",
              backgroundSize: "cover",
              opacity: currentImageIndex === index ? 1 : 0,
              zIndex: currentImageIndex === index ? 1 : 0
            }}
            aria-label={`Sofitel Frankfurt Opera hotel image ${index + 1}`}
          />
        ))
      ) : (
        <div className="absolute inset-0 bg-gray-700"></div>
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
