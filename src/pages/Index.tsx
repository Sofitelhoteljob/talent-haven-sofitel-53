
import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { JobListingsSection } from "@/components/sections/JobListingsSection";
import { QuickApplySection } from "@/components/sections/QuickApplySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <JobListingsSection />
      <QuickApplySection />
      <Footer />
    </div>
  );
};

export default Index;
