import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProgramHero } from "@/components/development-program/ProgramHero";
import { ProgramOverview } from "@/components/development-program/ProgramOverview";
import { RegionalPrograms } from "@/components/development-program/RegionalPrograms";
import { ApplicationSection } from "@/components/development-program/ApplicationSection";
import { ProgramBenefits } from "@/components/development-program/ProgramBenefits";
import { FAQ } from "@/components/development-program/FAQ";
import { CTASection } from "@/components/development-program/CTASection";
import { GoogleMap } from "@/components/GoogleMap";
import { Helmet } from "react-helmet-async";
import { StructuredData } from "@/components/SEO/StructuredData";
import { SocialMediaCards } from "@/components/SEO/SocialMediaCards";

const DevelopmentProgram = () => {
  const jobPostingData = {
    title: "Global Talent Program",
    description: "Join our prestigious Global Talent Program at Sofitel Frankfurt Opera and build an international career in luxury hospitality.",
    datePosted: "2023-06-01",
    validThrough: "2024-12-31",
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "Sofitel Frankfurt Opera",
      sameAs: "https://sofitel-frankfurt-careers.com"
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Opernplatz 16",
        addressLocality: "Frankfurt am Main",
        postalCode: "60313",
        addressCountry: "DE"
      }
    }
  };
  
  const faqData = {
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Global Talent Program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Global Talent Program is Sofitel's international development initiative designed to identify and nurture exceptional talent in the luxury hospitality industry."
        }
      },
      {
        "@type": "Question",
        name: "How long is the program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The program typically runs for 18-24 months, including rotations across different departments and possibly different properties."
        }
      },
      {
        "@type": "Question",
        name: "What qualifications do I need?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Candidates should have a degree in hospitality management or related field, excellent communication skills, and a passion for luxury service."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Global Talent Program | Sofitel Frankfurt Opera</title>
        <meta name="description" content="Join our prestigious Global Talent Program at Sofitel Frankfurt Opera and build an international career in luxury hospitality. Applications open for our development program." />
        <meta name="keywords" content="global talent program, hospitality career development, luxury hotel internship, Sofitel development program, international hospitality training" />
        
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Sofitel Frankfurt Opera" />
      </Helmet>
      <SocialMediaCards 
        title="Global Talent Program | Sofitel Frankfurt Opera"
        description="Join our prestigious Global Talent Program and build an international career in luxury hospitality. Discover opportunities for professional growth."
        image="/lovable-uploads/1352e9d8-a09e-4f71-a975-8b9766e5905f.png"
        url="/development-program"
      />
      <StructuredData type="JobPosting" data={jobPostingData} />
      <StructuredData type="FAQPage" data={faqData} />
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <ProgramHero />
        <ProgramOverview />
        <RegionalPrograms />
        <ApplicationSection />
        <ProgramBenefits />
        <FAQ />
        <CTASection />
        <GoogleMap />
        <Footer />
      </div>
    </div>
  );
};

export default DevelopmentProgram;
