
import { Badge } from "@/components/ui/badge";
import { BenefitCard } from "@/components/sections/benefits/BenefitCard";
import { TestimonialCarousel } from "@/components/sections/benefits/TestimonialCarousel";
import { ImageCarousel } from "@/components/sections/benefits/ImageCarousel";
import { benefits, testimonials, carouselImages } from "@/components/sections/benefits/benefitsData";

export const BenefitsSection = () => {
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
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
        
        <TestimonialCarousel testimonials={testimonials} />
        <ImageCarousel images={carouselImages} />
      </div>
    </section>
  );
};
