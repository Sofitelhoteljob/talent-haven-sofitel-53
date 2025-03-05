
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export const HeroSection = () => {
  useEffect(() => {
    console.log("Loading image from:", "/lovable-uploads/98647a09-12e4-4c6d-9040-a33dec47dc88.png");
  }, []);

  const scrollToJobListings = () => {
    const jobListingsSection = document.querySelector('section:has(h2:contains("Join Our Team"))');
    if (jobListingsSection) {
      jobListingsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
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
        <Badge className="bg-secondary text-white mb-6 animate-fade-in">We're Hiring</Badge>
        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Join Our Legacy of Luxury
        </h1>
        <p className="font-sans text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in">
          Be part of the Sofitel Frankfurt Opera team and help us create extraordinary moments for our guests
        </p>
        <Button 
          size="lg" 
          className="bg-secondary hover:bg-secondary/90 text-white animate-fade-in"
          onClick={scrollToJobListings}
        >
          Join Development Program
        </Button>
      </div>
    </section>
  );
};
