
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
    description: "Join our prestigious Global Talent Program at Sofitel Frankfurt Opera and build an international career in luxury hospitality. This 18-24 month program offers rotational experience across departments with mentorship from industry leaders.",
    datePosted: "2023-06-01",
    validThrough: "2024-12-31",
    employmentType: "FULL_TIME",
    jobBenefits: [
      "Competitive salary and benefits package",
      "International career opportunities",
      "Professional development and training",
      "Mentorship from industry leaders",
      "Cross-departmental experience"
    ],
    educationRequirements: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      educationalLevel: "Bachelor's Degree"
    },
    experienceRequirements: {
      "@type": "OccupationalExperienceRequirements",
      monthsOfExperience: 12
    },
    hiringOrganization: {
      "@type": "Organization",
      name: "Sofitel Frankfurt Opera",
      sameAs: "https://sofitel-frankfurt-careers.com",
      logo: "https://sofitel-frankfurt-careers.com/lovable-uploads/3a302ffc-3de0-4cfa-bb45-17de1a0e13a7.png"
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Opernplatz 16",
        addressLocality: "Frankfurt am Main",
        postalCode: "60313",
        addressCountry: "DE"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "50.1155",
        longitude: "8.6742"
      }
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "EUR",
      value: {
        "@type": "QuantitativeValue",
        minValue: 35000,
        maxValue: 45000,
        unitText: "YEAR"
      }
    },
    skills: [
      "Customer Service", "Hospitality Management", "Foreign Languages", 
      "Leadership", "Team Collaboration", "Problem Solving"
    ]
  };
  
  const faqData = {
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Global Talent Program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Global Talent Program is Sofitel's international development initiative designed to identify and nurture exceptional talent in the luxury hospitality industry. It includes rotational assignments across multiple departments, mentorship from senior leaders, and potential international placements."
        }
      },
      {
        "@type": "Question",
        name: "How long is the program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The program typically runs for 18-24 months, including rotations across different departments and possibly different properties. This comprehensive timeline ensures participants gain a well-rounded understanding of luxury hospitality operations."
        }
      },
      {
        "@type": "Question",
        name: "What qualifications do I need?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Candidates should have a degree in hospitality management or related field, excellent communication skills in English (additional languages are a plus), and a passion for luxury service. Previous internship or work experience in hospitality is preferred but not required for exceptional candidates."
        }
      },
      {
        "@type": "Question",
        name: "Are international opportunities available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the Global Talent Program offers opportunities for international placements within the Accor network. Participants may have the chance to work in Sofitel properties across Europe, Asia, the Middle East, or the Americas, depending on business needs and participant preferences."
        }
      },
      {
        "@type": "Question",
        name: "What happens after the program?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Upon successful completion of the program, participants are typically offered permanent positions within Sofitel or the broader Accor network, with opportunities for continued career advancement and development in various roles and locations."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Global Talent Program | Sofitel Frankfurt Opera</title>
        <meta name="description" content="Join our prestigious Global Talent Program at Sofitel Frankfurt Opera and build an international career in luxury hospitality. This 18-24 month development program offers mentorship, cross-departmental experience, and potential for global placement within the Accor network. Applications open now." />
        <meta name="keywords" content="global talent program, hospitality career development, luxury hotel internship, Sofitel development program, international hospitality training, hotel management training, luxury service career path, hospitality job rotation, Accor career program, Frankfurt hotel jobs, hospitality leadership development, hotel industry mentorship, cross-departmental hotel experience, hotel career advancement, Sofitel management training" />
        
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Sofitel Frankfurt Opera" />
        <meta name="geo.region" content="DE-HE" />
        <meta name="geo.placename" content="Frankfurt am Main" />
        <meta name="geo.position" content="50.1155;8.6742" />
        <meta name="ICBM" content="50.1155, 8.6742" />
        
        {/* Job-specific metadata */}
        <meta name="job_title" content="Global Talent Program" />
        <meta name="job_location" content="Frankfurt am Main, Germany" />
        <meta name="job_benefits" content="International career opportunities, Professional development, Competitive salary" />
        <meta name="job_employment_type" content="FULL_TIME" />
        <meta name="job_education_requirement" content="Bachelor's degree in Hospitality Management or related field" />
      </Helmet>
      <SocialMediaCards 
        title="Global Talent Program | Sofitel Frankfurt Opera - International Hospitality Careers"
        description="Join our prestigious Global Talent Program and build an international career in luxury hospitality. Our 18-24 month development program includes rotational experience across departments, mentorship from industry leaders, and opportunities for international placement within the Accor network."
        image="/lovable-uploads/1352e9d8-a09e-4f71-a975-8b9766e5905f.png"
        url="/development-program"
        keywords="global talent program, hospitality career development, luxury hotel internship, Sofitel development program, international hospitality training, hotel management training, luxury service career path, hospitality job rotation, Accor career program, Frankfurt hotel jobs"
        publishedTime="2023-06-01"
        modifiedTime="2024-04-01"
      />
      <StructuredData type="JobPosting" data={jobPostingData} />
      <StructuredData type="FAQPage" data={faqData} />
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        {/* Add semantic H1 heading for SEO - visually hidden but available to screen readers and search engines */}
        <h1 className="sr-only">Global Talent Program at Sofitel Frankfurt Opera - International Hospitality Career Development</h1>
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
