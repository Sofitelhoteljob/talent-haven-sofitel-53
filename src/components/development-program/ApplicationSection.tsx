
import { Badge } from "@/components/ui/badge";
import { ApplicationProcess } from "./ApplicationProcess";
import { ApplicationForm } from "./ApplicationForm";

export const ApplicationSection = () => {
  return (
    <section className="py-20 bg-white" id="apply-now">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-secondary/10 text-secondary mb-4">Join Us</Badge>
          <h2 className="font-playfair text-4xl font-bold mb-6">Application Process</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Joining our Global Talent Program involves a straightforward application process designed to find the best match for your skills and our opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <ApplicationProcess />
          <ApplicationForm />
        </div>
      </div>
    </section>
  );
};
