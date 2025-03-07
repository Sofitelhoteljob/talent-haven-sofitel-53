
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const QuickApplySection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6 text-center">
        <Badge className="bg-secondary/10 text-secondary mb-4">Ready to Join?</Badge>
        <h2 className="font-playfair text-4xl font-bold mb-4">Development Program</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Discover opportunities to work, learn, and grow with Sofitel Frankfurt Opera.
        </p>
        
        <div className="max-w-3xl mx-auto bg-white/70 p-6 rounded-lg shadow-sm mb-8">
          <h3 className="font-playfair text-xl font-medium mb-3">Key Program Details:</h3>
          <ul className="text-left space-y-2 mb-4">
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Two-year employment contract with competitive salary</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>€1,000 refundable employment guarantee bond (returned after 12 months)</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Complete visa processing support and assistance with German work permits</span>
            </li>
            <li className="flex items-start">
              <span className="font-medium mr-2">•</span>
              <span>Accommodation support and cultural integration training</span>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground italic">
            Open to candidates from Africa, South America, and Asia with hospitality experience
          </p>
        </div>
        
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
