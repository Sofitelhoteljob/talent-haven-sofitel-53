
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const QuickApplySection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6 text-center">
        <Badge className="bg-secondary/10 text-secondary mb-4">Ready to Join?</Badge>
        <h2 className="font-playfair text-4xl font-bold mb-4">Development Program</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Discover opportunities to work, learn, and grow with Sofitel Frankfurt Opera.
        </p>
        <Link to="/development-program">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white"
          >
            Apply Now
          </Button>
        </Link>
      </div>
    </section>
  );
};
