
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/lovable-uploads/8c4239cf-b955-4bf8-9a49-5a454761aada.png',
    '/lovable-uploads/bea6904e-c603-4408-a960-cc7f8b14c9e9.png',
    '/lovable-uploads/427f06a8-ac06-4a13-b7f0-31e6a6285dfa.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {images.map((image, index) => (
        <div 
          key={image}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
          style={{
            backgroundImage: `url('${image}')`,
            filter: "brightness(0.6)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: currentImageIndex === index ? 1 : 0,
            zIndex: currentImageIndex === index ? 1 : 0
          }}
          aria-hidden="true"
        />
      ))}
      <div className="relative container mx-auto px-6 text-center text-white z-10">
        <Badge className="bg-secondary text-white mb-6 animate-fade-in">We're Hiring</Badge>
        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Join Our Legacy of Luxury
        </h1>
        <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in">
          Be part of the Sofitel Frankfurt Opera team and help us create extraordinary moments for our guests
        </p>
        <Link to="/development-program">
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-white animate-fade-in"
          >
            Join Development Program
          </Button>
        </Link>
      </div>
    </section>
  );
};
