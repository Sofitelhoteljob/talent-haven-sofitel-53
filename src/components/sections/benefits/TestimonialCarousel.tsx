
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  quote: string;
  name: string;
  position: string;
  avatar: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  return (
    <div className="mb-16">
      <h3 className="font-playfair text-2xl font-semibold text-center mb-10">What Our Team Says</h3>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
              <Card className="border-secondary/10 h-full flex flex-col">
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-4 text-secondary">
                    <Quote className="h-8 w-8 opacity-50" />
                  </div>
                  <p className="italic text-gray-700 mb-6 flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-4 bg-white/80 hover:bg-white" />
        <CarouselNext className="hidden md:flex -right-4 bg-white/80 hover:bg-white" />
      </Carousel>
    </div>
  );
};
