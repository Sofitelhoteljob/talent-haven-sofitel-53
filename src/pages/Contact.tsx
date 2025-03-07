
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
    "@type": "Hotel",
    name: "Sofitel Frankfurt Opera",
    image: "/lovable-uploads/98647a09-12e4-4c6d-9040-a33dec47dc88.png",
    description: "Luxury 5-star hotel in Frankfurt am Main offering exceptional career opportunities in hospitality. Contact our recruitment team for job openings and career development programs.",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Opernplatz 16",
      addressLocality: "Frankfurt am Main",
      addressRegion: "Hesse",
      postalCode: "60313",
      addressCountry: "DE"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "50.1155",
      longitude: "8.6742"
    },
    telephone: "+4915210840824",
    email: "Jobssofitelfrankfurtopera@gmail.com",
    url: "https://sofitel-frankfurt-careers.com",
    sameAs: ["https://www.facebook.com/SofitelFrankfurtOpera", "https://www.instagram.com/sofitelfrankfurtopera/", "https://www.linkedin.com/company/sofitel-frankfurt-opera", "https://twitter.com/SofitelFrankfurt", "https://www.pinterest.com/sofitelfrankfurt/"],
    amenityFeature: [{
      "@type": "LocationFeatureSpecification",
      name: "Career Opportunities",
      value: true
    }, {
      "@type": "LocationFeatureSpecification",
      name: "Training Programs",
      value: true
    }, {
      "@type": "LocationFeatureSpecification",
      name: "International Placements",
      value: true
    }],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+4915210840824",
      contactType: "Recruitment Team",
      email: "Jobssofitelfrankfurtopera@gmail.com",
      availableLanguage: ["English", "German", "French"]
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://sofitel-frankfurt-careers.com/contact"
      },
      name: "Contact Recruitment Team"
    }
  };
  
  return <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us | Sofitel Frankfurt Opera Careers - Recruitment Team</title>
        <meta name="description" content="Get in touch with our recruitment team at Sofitel Frankfurt Opera. Find contact details for career inquiries, job applications, and internship opportunities at our luxury hotel in the heart of Frankfurt. Our team is ready to assist you with your hospitality career journey." />
        <meta name="keywords" content="contact Sofitel Frankfurt, luxury hotel recruitment, hospitality career contact, hotel job inquiries, Sofitel HR department, Frankfurt hotel employment contact, hospitality recruitment team, hotel internship application, Sofitel careers contact, luxury hospitality jobs Frankfurt, hotel application information, hospitality employment opportunities" />
        
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Sofitel Frankfurt Opera" />
        <meta name="geo.region" content="DE-HE" />
        <meta name="geo.placename" content="Frankfurt am Main" />
        <meta name="geo.position" content="50.1155;8.6742" />
        <meta name="ICBM" content="50.1155, 8.6742" />
        <meta name="format-detection" content="telephone=yes" />
      </Helmet>
      <SocialMediaCards title="Contact Us | Sofitel Frankfurt Opera Careers - Recruitment Team" description="Get in touch with our recruitment team at Sofitel Frankfurt Opera. Find contact details for career inquiries, job applications, and internship opportunities at our luxury hotel in the heart of Frankfurt. Our team is ready to assist you with your hospitality career journey." image="/lovable-uploads/1352e9d8-a09e-4f71-a975-8b9766e5905f.png" url="/contact" keywords="contact Sofitel Frankfurt, luxury hotel recruitment, hospitality career contact, hotel job inquiries, Sofitel HR department, Frankfurt hotel employment contact, hospitality recruitment team, hotel internship application" />
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
              <Button 
                onClick={() => window.location.href = 'mailto:Jobssofitelfrankfurtopera@gmail.com?subject=Career Opportunity Inquiry'} 
                className="w-full bg-secondary hover:bg-secondary/90"
              >
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
