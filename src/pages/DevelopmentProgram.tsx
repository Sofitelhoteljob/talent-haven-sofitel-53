
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProgramHero } from "@/components/development-program/ProgramHero";
import { ProgramOverview } from "@/components/development-program/ProgramOverview";
import { RegionalPrograms } from "@/components/development-program/RegionalPrograms";
import { ApplicationSection } from "@/components/development-program/ApplicationSection";
import { ProgramBenefits } from "@/components/development-program/ProgramBenefits";
import { FAQ } from "@/components/development-program/FAQ";
import { CTASection } from "@/components/development-program/CTASection";

const DevelopmentProgram = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <ProgramHero />
        <ProgramOverview />
        <RegionalPrograms />
        <ApplicationSection />
        <ProgramBenefits />
        <FAQ />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default DevelopmentProgram;
