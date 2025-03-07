
import { useCallback, useEffect, useRef, useState } from "react";
import { ImageLoader } from "@/components/ui/image-loader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

export const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(Array(images.length).fill(false));
  const imageRefs = useRef<(HTMLDivElement | null)[]>(Array(images.length).fill(null));
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setImagesLoaded(prev => {
        const newState = [...prev];
        // Load first 4 images initially for a better experience
        newState[0] = true;
        newState[1] = true;
        newState[2] = true;
        newState[3] = true;
        return newState;
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    imageRefs.current.forEach((ref, index) => {
      if (!ref) return;
      
      if (index < 4) return; // Skip first 4 images as they are loaded initially
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            handleImageVisible(index);
            observer.disconnect();
          }
        });
      }, { threshold: 0.1 });
      
      observer.observe(ref);
      observers.push(observer);
    });
    
    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const handleImageVisible = useCallback((index: number) => {
    if (!imagesLoaded[index]) {
      setImagesLoaded(prev => {
        const newState = [...prev];
        newState[index] = true;
        return newState;
      });
    }
  }, [imagesLoaded]);

  return (
    <div className="mt-16 relative">
      <h3 className="text-2xl font-playfair font-semibold text-center mb-6">Experience Our World-Class Facilities</h3>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        onScroll={() => {
          images.forEach((_, index) => handleImageVisible(index));
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div 
                className="aspect-[4/3] overflow-hidden rounded-lg bg-gray-100"
                onMouseEnter={() => handleImageVisible(index)}
                ref={el => imageRefs.current[index] = el}
              >
                {imagesLoaded[index] ? (
                  <ImageLoader
                    src={image.src}
                    alt={image.alt}
                    loading={index < 4 ? "eager" : "lazy"}
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
  );
};
