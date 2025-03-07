
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

const DevelopmentProgram = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Global Talent Program | Sofitel Frankfurt Opera</title>
        <meta name="description" content="Join our prestigious Global Talent Program at Sofitel Frankfurt Opera and build an international career in luxury hospitality. Applications open for our development program." />
        <meta name="keywords" content="global talent program, hospitality career development, luxury hotel internship, Sofitel development program, international hospitality training" />
        <meta property="og:title" content="Global Talent Program | Sofitel Frankfurt Opera" />
        <meta property="og:description" content="Join our prestigious Global Talent Program and build an international career in luxury hospitality." />
        <meta property="og:image" content="/lovable-uploads/98647a09-12e4-4c6d-9040-a33dec47dc88.png" />
        <meta property="og:url" content="https://sofitel-frankfurt-careers.com/development-program" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://sofitel-frankfurt-careers.com/development-program" />
      </Helmet>
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
