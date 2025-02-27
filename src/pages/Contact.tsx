
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="font-playfair text-4xl font-bold mb-8 text-center">Contact Us</h1>
          
          <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 text-secondary" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">Opernplatz 16, 60313 Frankfurt am Main, Germany</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-1 text-secondary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">+49 69 2561270</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-1 text-secondary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">h3539@sofitel.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Career Inquiries</h2>
              <p className="text-muted-foreground mb-4">
                Interested in joining our team? We're always looking for talented individuals who are passionate about hospitality.
              </p>
              <Button 
                onClick={() => window.location.href = 'https://careers.accor.com/global/en/sofitel-jobs'}
                className="w-full bg-secondary hover:bg-secondary/90"
              >
                View Career Opportunities
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
