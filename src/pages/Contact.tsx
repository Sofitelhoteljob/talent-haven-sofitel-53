import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
const Contact = () => {
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us | Sofitel Frankfurt Opera Careers</title>
        <meta name="description" content="Get in touch with our recruitment team at Sofitel Frankfurt Opera. Find contact details for career inquiries and job opportunities." />
        <meta name="keywords" content="contact Sofitel Frankfurt, luxury hotel recruitment, hospitality career contact, hotel job inquiries" />
        <meta property="og:title" content="Contact Us | Sofitel Frankfurt Opera Careers" />
        <meta property="og:description" content="Get in touch with our recruitment team at Sofitel Frankfurt Opera." />
        <meta property="og:image" content="/lovable-uploads/98647a09-12e4-4c6d-9040-a33dec47dc88.png" />
        <meta property="og:url" content="https://sofitel-frankfurt-careers.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://sofitel-frankfurt-careers.com/contact" />
      </Helmet>
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
      <Footer />
    </div>;
};
export default Contact;