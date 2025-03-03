
import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { JobListingsSection } from "@/components/sections/JobListingsSection";
import { QuickApplySection } from "@/components/sections/QuickApplySection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Careers at Sofitel Frankfurt Opera | Luxury Hospitality Jobs</title>
        <meta name="description" content="Join our team at Sofitel Frankfurt Opera and build your career in luxury hospitality. Explore current job openings and our Global Talent Program." />
        <meta name="keywords" content="Sofitel Frankfurt, luxury hotel careers, hospitality jobs, hotel employment, Frankfurt jobs" />
        <meta property="og:title" content="Careers at Sofitel Frankfurt Opera" />
        <meta property="og:description" content="Join our team at Sofitel Frankfurt Opera and build your career in luxury hospitality." />
        <meta property="og:image" content="/lovable-uploads/98647a09-12e4-4c6d-9040-a33dec47dc88.png" />
        <meta property="og:url" content="https://sofitel-frankfurt-careers.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://sofitel-frankfurt-careers.com" />
      </Helmet>
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <HeroSection />
        <BenefitsSection />
        <JobListingsSection />
        <QuickApplySection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
