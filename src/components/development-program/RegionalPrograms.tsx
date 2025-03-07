import { Badge } from "@/components/ui/badge";
import { RegionalProgram } from "./regional-program";

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
      ],
      detailedInfo: {
        vision: "To empower African youth through education, mentorship, and hands-on experience in luxury hospitality while promoting sustainable tourism practices.",
        coreValues: ["Youth empowerment", "Cultural preservation and exchange", "Environmental sustainability", "Professional growth and career advancement"],
        targetCountries: [
          {
            name: "Uganda",
            focus: "Youth empowerment and rural economic development",
            initiatives: [
              "Partnerships with local vocational schools to provide hospitality training",
              "Mentorship programs for young women and men from rural areas",
              "Workshops on sustainable tourism practices"
            ]
          },
          {
            name: "South Africa",
            focus: "Skills development and workforce diversity",
            initiatives: [
              "Collaboration with historically disadvantaged institutions",
              "Training modules on luxury service standards and leadership skills",
              "Opportunities to showcase South African art, music, and cuisine"
            ]
          },
          {
            name: "Morocco",
            focus: "Sustainable tourism and cultural heritage",
            initiatives: [
              "Programs focused on preserving Moroccan traditions in hospitality",
              "Training in eco-friendly hotel operations and waste management",
              "Exposure to international markets through Accor Group's global network"
            ]
          }
        ],
        successStories: [
          {
            name: "Sarah from Uganda",
            background: "Grew up in a rural village with limited access to formal education",
            journey: "Joined the program after completing a vocational course in hospitality",
            outcome: "Now works as a Guest Relations Manager at Sofitel Frankfurt Opera and advocates for sustainable tourism in her home country"
          },
          {
            name: "Ahmed from Morocco",
            background: "Passionate about preserving Moroccan traditions in hospitality",
            journey: "Trained in eco-friendly hotel operations and brought his expertise to Frankfurt",
            outcome: "Leads cultural workshops for colleagues and guests, showcasing Moroccan heritage"
          }
        ]
      }
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
      ],
      detailedInfo: {
        vision: "To foster cultural exchange and professional growth by empowering individuals from South America to excel in luxury hospitality while promoting sustainable practices.",
        coreValues: ["Cultural diversity and inclusion", "Environmental responsibility", "Workforce empowerment and innovation"],
        targetCountries: [
          {
            name: "Brazil",
            focus: "Environmental sustainability and cultural preservation",
            initiatives: [
              "Training on green hospitality practices, such as energy efficiency and waste reduction",
              "Partnerships with local organizations focused on rainforest conservation",
              "Opportunities for participants to showcase Brazilian traditions at Sofitel Frankfurt Opera"
            ]
          },
          {
            name: "Colombia",
            focus: "Workforce development and peacebuilding through tourism",
            initiatives: [
              "Collaboration with vocational training centers in underserved areas",
              "Programs to empower women and youth affected by conflict",
              "Celebrating Colombian art, coffee culture, and music within the Sofitel brand"
            ]
          },
          {
            name: "Argentina",
            focus: "Culinary arts and cultural diplomacy",
            initiatives: [
              "Training modules on gourmet cuisine and wine pairing",
              "Promoting Argentine traditions, such as tango and mate culture, at Sofitel Frankfurt Opera",
              "Encouraging participants to act as cultural ambassadors for their home country"
            ]
          }
        ],
        successStories: [
          {
            name: "Maria from Brazil",
            background: "Grew up in a rural community near the Amazon rainforest, passionate about environmental conservation",
            journey: "Joined the program after completing a course in sustainable tourism",
            outcome: "Now works as a Sustainability Coordinator at Sofitel Frankfurt Opera and advocates for eco-friendly practices in the hospitality industry"
          },
          {
            name: "Juan from Colombia",
            background: "Affected by conflict in his hometown, sought opportunities to rebuild his life",
            journey: "Trained in hospitality and leadership skills through the program",
            outcome: "Leads cultural workshops for colleagues and guests, showcasing Colombian traditions and promoting peacebuilding through tourism"
          },
          {
            name: "Sofia from Argentina",
            background: "A talented chef with a passion for Argentine cuisine",
            journey: "Joined the program to gain international experience in luxury hospitality",
            outcome: "Now heads the culinary team at Sofitel Frankfurt Opera, introducing guests to authentic Argentine flavors and traditions"
          }
        ]
      }
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
              detailedInfo={program.detailedInfo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
