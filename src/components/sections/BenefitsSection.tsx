
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Briefcase, Heart, Award, Building } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const benefits = [
  {
    icon: Building,
    title: "Prestigious Location",
    description: "Work in one of Frankfurt's most iconic luxury hotels"
  },
  {
    icon: Heart,
    title: "Well-being Focus",
    description: "Comprehensive health benefits and work-life balance"
  },
  {
    icon: Award,
    title: "Growth Opportunities",
    description: "Continuous learning and career development programs"
  },
  {
    icon: Briefcase,
    title: "Global Network",
    description: "Be part of Accor's worldwide hospitality network"
  }
];

const carouselImages = [
  {
    src: "/lovable-uploads/cb34e963-852e-4568-a5b6-cba5db17673d.png",
    alt: "Luxury lounge area with yellow chairs"
  },
  {
    src: "/lovable-uploads/79292aec-c144-4e09-b99f-d3320cab2a1f.png",
    alt: "Elegant hotel bedroom"
  },
  {
    src: "/lovable-uploads/0b612257-0fb7-479f-b14a-ff318247b8e9.png",
    alt: "Modern hotel room interior"
  },
  {
    src: "/lovable-uploads/bca6acf8-6961-445e-beac-6f6ada16843a.png",
    alt: "Spa massage treatment"
  },
  {
    src: "/lovable-uploads/05044d72-53e2-4e97-8f88-4ee78c95496d.png",
    alt: "Facial treatment at spa"
  },
  {
    src: "/lovable-uploads/b64348a5-7bcb-46f4-a1e3-ccf29ebafd69.png",
    alt: "Couple in bathrobes enjoying view"
  },
  {
    src: "/lovable-uploads/76404b92-ed4b-4b2e-8f74-132d4648d5fb.png",
    alt: "Couple dancing in hotel room"
  },
  {
    src: "/lovable-uploads/93088b86-2ffd-4b71-8238-907a99489b17.png",
    alt: "Historic Frankfurt Opera House with bicycles"
  },
  {
    src: "/lovable-uploads/84329b53-2b02-474b-84a3-648b8f92958a.png",
    alt: "Couple dining at luxury restaurant"
  }
];

export const BenefitsSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(Array(carouselImages.length).fill(false));
  
  // Preload first 3 images, load others when component mounts
  useEffect(() => {
    // Set a small delay to not block initial render
    const timer = setTimeout(() => {
      setImagesLoaded(prev => {
        const newState = [...prev];
        // Mark first 3 as loading immediately
        newState[0] = true;
        newState[1] = true;
        newState[2] = true;
        return newState;
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Function to handle image loading by index
  const handleImageVisible = (index: number) => {
    if (!imagesLoaded[index]) {
      setImagesLoaded(prev => {
        const newState = [...prev];
        newState[index] = true;
        return newState;
      });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-secondary/10 text-secondary mb-4">Why Join Us</Badge>
          <h2 className="font-playfair text-4xl font-bold mb-4">Experience Excellence</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join a team that sets the standard for luxury hospitality in Frankfurt
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-secondary/5 animate-fade-in border-secondary/10"
            >
              <div className="h-14 w-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="h-7 w-7 text-secondary group-hover:text-secondary/80" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3 group-hover:text-secondary transition-colors">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onScroll={() => {
              // Trigger loading of all visible images on scroll
              carouselImages.forEach((_, index) => handleImageVisible(index));
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {carouselImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div 
                    className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100"
                    onMouseEnter={() => handleImageVisible(index)}
                    onIntersectionChange={() => handleImageVisible(index)}
                  >
                    {imagesLoaded[index] ? (
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading={index < 3 ? "eager" : "lazy"}
                        width="400"
                        height="300"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <div className="w-8 h-8 border-4 border-secondary/20 border-t-secondary rounded-full animate-spin"></div>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-white/80 hover:bg-white" />
            <CarouselNext className="hidden md:flex -right-4 bg-white/80 hover:bg-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
