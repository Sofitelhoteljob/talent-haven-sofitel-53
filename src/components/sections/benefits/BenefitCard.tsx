
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => {
  return (
    <Card 
      className="group p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white to-secondary/5 animate-fade-in border-secondary/10"
    >
      <div className="h-14 w-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-7 w-7 text-secondary group-hover:text-secondary/80" />
      </div>
      <h3 className="font-playfair text-xl font-semibold mb-3 group-hover:text-secondary transition-colors">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </Card>
  );
};
