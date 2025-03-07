import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GoogleMap } from "@/components/GoogleMap";
import { MapPin, Mail, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { StructuredData } from "@/components/SEO/StructuredData";
import { SocialMediaCards } from "@/components/SEO/SocialMediaCards";

const Contact = () => {
  const hotelData = {
    name: "Sofitel Frankfurt Opera",
    image: "/lovable-uploads/98647a09-12e4-4c6d-9040-a33dec47dc88.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Opernplatz 16",
      addressLocality: "Frankfurt am Main",
      postalCode: "60313",
      addressCountry: "DE"
    },
    telephone: "+4915210840824",
    email: "Jobssofitelfrankfurtopera@gmail.com",
    amenityFeature: {
      "@type": "LocationFeatureSpecification",
      name: "Career Opportunities",
      value: true
    }
  };

  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us | Sofitel Frankfurt Opera Careers</title>
        <meta name="description" content="Get in touch with our recruitment team at Sofitel Frankfurt Opera. Find contact details for career inquiries and job opportunities." />
        <meta name="keywords" content="contact Sofitel Frankfurt, luxury hotel recruitment, hospitality career contact, hotel job inquiries" />
        
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Sofitel Frankfurt Opera" />
      </Helmet>
      <SocialMediaCards 
        title="Contact Us | Sofitel Frankfurt Opera Careers"
        description="Get in touch with our recruitment team at Sofitel Frankfurt Opera. Find contact details for career inquiries and job opportunities."
        image="/lovable-uploads/1352e9d8-a09e-4f71-a975-8b9766e5905f.png"
        url="/contact"
      />
      <StructuredData type="Hotel" data={hotelData} />
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
                    <p className="text-muted-foreground">+4915210840824</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 mt-1 text-secondary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">Jobssofitelfrankfurtopera@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Career Inquiries</h2>
              <p className="text-muted-foreground mb-4">
                Interested in joining our team? We're always looking for talented individuals who are passionate about hospitality.
              </p>
              <Button onClick={() => window.location.href = 'https://careers.accor.com/global/en/sofitel-jobs'} className="w-full bg-secondary hover:bg-secondary/90">
                View Career Opportunities
              </Button>
            </div>
          </div>
        </div>
      </div>
      <GoogleMap />
      <Footer />
    </div>;
};

export default Contact;
