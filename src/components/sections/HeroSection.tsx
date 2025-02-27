
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/lovable-uploads/5f32c2d1-ece8-4cc5-a2db-78d20584fe63.png')",
          filter: "brightness(0.6)"
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
        >
          View Open Positions
        </Button>
      </div>
    </section>
  );
};
