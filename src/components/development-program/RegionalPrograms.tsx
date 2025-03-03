
import { Badge } from "@/components/ui/badge";
import { RegionalProgram } from "./RegionalProgram";

export const RegionalPrograms = () => {
  const programs = [
    {
      region: "Africa",
      color: "#FFC74A",
      title: "Africa Development Program",
      description: "Our Africa Development Program focuses on creating opportunities for talented individuals from across the continent to build careers in luxury hospitality while promoting sustainable tourism practices.",
      imageSrc: "/lovable-uploads/93088b86-2ffd-4b71-8238-907a99489b17.png",
      focusAreas: [
        "Youth employment initiatives in Uganda, South Africa, and Morocco",
        "Skills development in luxury hospitality service",
        "Sustainable tourism practices and education",
        "Cultural exchange and international career development"
      ],
      benefits: [
        "Two-year work contract with Sofitel Frankfurt Opera",
        "Specialized training in European luxury hospitality standards",
        "Mentorship from senior Accor hospitality professionals",
        "Housing assistance and relocation support"
      ]
    },
    {
      region: "America",
      color: "#4AB8FE",
      title: "America Development Program",
      description: "Our America Development Program emphasizes cultural exchange and professional growth for participants from South America, bringing Latin American warmth and hospitality expertise to our European setting.",
      imageSrc: "/lovable-uploads/76404b92-ed4b-4b2e-8f74-132d4648d5fb.png",
      focusAreas: [
        "Cultural exchange programs with Brazil, Colombia, and Argentina",
        "Advanced hospitality and tourism training",
        "Environmental sustainability practices in luxury hospitality",
        "Leadership development for emerging hospitality professionals"
      ],
      benefits: [
        "Two-year work contract with Sofitel Frankfurt Opera",
        "German language courses and cultural orientation",
        "Cross-cultural hospitality management training",
        "International networking opportunities within Accor"
      ]
    },
    {
      region: "Asia",
      color: "#FE4A8B",
      title: "Asia Development Program",
      description: "Our Asia Development Program showcases opportunities for hospitality professionals from across Asia, combining Asian service excellence with European luxury standards.",
      imageSrc: "/lovable-uploads/bca6acf8-6961-445e-beac-6f6ada16843a.png",
      focusAreas: [
        "Gender equality initiatives for hospitality professionals",
        "Rural economic growth through skills development",
        "Luxury hospitality skill-building for participants from India, Thailand, the Philippines, and Vietnam",
        "Cultural heritage preservation and promotion"
      ],
      benefits: [
        "Two-year work contract with Sofitel Frankfurt Opera",
        "Specialized training in Asian-European fusion hospitality",
        "Career advancement pathways within Accor's Asian properties",
        "Community leadership development"
      ]
    }
  ];

  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="bg-secondary/10 text-secondary mb-4">Our Initiatives</Badge>
          <h2 className="font-playfair text-4xl font-bold mb-6">Regional Development Programs</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our specialized regional programs are designed to address the unique needs and opportunities in Africa, South America, and Asia.
          </p>
        </div>

        <div className="space-y-12">
          {programs.map((program, index) => (
            <RegionalProgram 
              key={index}
              region={program.region}
              color={program.color}
              title={program.title}
              description={program.description}
              imageSrc={program.imageSrc}
              focusAreas={program.focusAreas}
              benefits={program.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
