export interface Opportunity {
  id: string;
  title: string;
  organisation: string;
  location: string;
  pay?: string;
  sector: "digital-creative" | "beauty" | "construction" | "entrepreneurship";
  type: "Job" | "Apprenticeship" | "Training" | "Funding";
  whatYoullDo: string;
  whatYouNeed: string;
  whyItsGood: string;
  howToApply: string;
  featured: boolean;
  archived: boolean;
  createdAt: string;
}

export const defaultOpportunities: Opportunity[] = [
  {
    id: "1",
    title: "Junior Web Developer",
    organisation: "Creative Digital Agency",
    location: "London",
    pay: "£22,000 - £26,000",
    sector: "digital-creative",
    type: "Job",
    whatYoullDo:
      "Build websites and web apps for clients using HTML, CSS, JavaScript and React. Work alongside senior developers and learn on the job.",
    whatYouNeed:
      "Basic understanding of HTML/CSS/JavaScript. A portfolio or personal projects. Eagerness to learn.",
    whyItsGood:
      "Real-world experience at a growing agency. Mentorship from senior devs. Flexible working options.",
    howToApply: "Send your CV and portfolio link to careers@creativedigital.example.com",
    featured: true,
    archived: false,
    createdAt: "2026-02-01",
  },
  {
    id: "2",
    title: "Digital Marketing Apprentice",
    organisation: "MediaBoost",
    location: "Manchester",
    pay: "£18,000",
    sector: "digital-creative",
    type: "Apprenticeship",
    whatYoullDo:
      "Learn social media management, content creation, email marketing and basic analytics. Support real campaigns from day one.",
    whatYouNeed:
      "Interest in social media and marketing. Good communication skills. No experience needed - full training provided.",
    whyItsGood:
      "Earn while you learn. Gain a Level 3 qualification. Real portfolio pieces from live campaigns.",
    howToApply: "Apply through the MediaBoost careers page",
    featured: true,
    archived: false,
    createdAt: "2026-02-05",
  },
  {
    id: "3",
    title: "Nail Tech Training Programme",
    organisation: "Glow Academy",
    location: "Birmingham",
    pay: "Free (funded place)",
    sector: "beauty",
    type: "Training",
    whatYoullDo:
      "Complete a 12-week nail technician course covering gel, acrylic, nail art and hygiene standards. Includes business basics for going self-employed.",
    whatYouNeed:
      "Aged 18-24. Passion for beauty. No prior qualifications needed.",
    whyItsGood:
      "Fully funded training. Industry-recognised certification. Support to start your own business.",
    howToApply: "Register at glowacademy.example.com/apply",
    featured: true,
    archived: false,
    createdAt: "2026-01-20",
  },
  {
    id: "4",
    title: "Beauty Therapist Apprenticeship",
    organisation: "LuxSpa Group",
    location: "Leeds",
    pay: "£15,000",
    sector: "beauty",
    type: "Apprenticeship",
    whatYoullDo:
      "Train in facials, waxing, lash & brow treatments and customer service in a luxury spa environment.",
    whatYouNeed:
      "Friendly, professional attitude. Interest in skincare and beauty. Willingness to learn.",
    whyItsGood:
      "Work in a premium spa. Earn a Level 2 Beauty Therapy qualification. Potential full-time role after completion.",
    howToApply: "Email recruitment@luxspa.example.com with your CV",
    featured: false,
    archived: false,
    createdAt: "2026-01-25",
  },
  {
    id: "5",
    title: "Construction Site Apprentice",
    organisation: "BuildRight Ltd",
    location: "Bristol",
    pay: "£17,500",
    sector: "construction",
    type: "Apprenticeship",
    whatYoullDo:
      "Work on active construction sites learning bricklaying, carpentry basics and site safety. Attend college one day a week.",
    whatYouNeed:
      "CSCS card (or willingness to get one). Physical fitness. Reliable and punctual.",
    whyItsGood:
      "Hands-on trade skills. Clear progression path. High demand for skilled workers in construction.",
    howToApply: "Apply via BuildRight careers portal",
    featured: true,
    archived: false,
    createdAt: "2026-02-10",
  },
  {
    id: "6",
    title: "Carpentry Training Course",
    organisation: "SkillsForge",
    location: "Nottingham",
    pay: "Free (government funded)",
    sector: "construction",
    type: "Training",
    whatYoullDo:
      "8-week intensive carpentry programme. Learn joinery, woodworking, reading blueprints and workshop safety.",
    whatYouNeed:
      "Aged 18-24. Interest in hands-on work. No experience required.",
    whyItsGood:
      "Free training with tools provided. Job placement support after completion. CSCS card included.",
    howToApply: "Sign up at skillsforge.example.com",
    featured: false,
    archived: false,
    createdAt: "2026-02-08",
  },
  {
    id: "7",
    title: "Young Entrepreneurs Grant",
    organisation: "The Prince's Trust",
    location: "Nationwide",
    pay: "Up to £5,000",
    sector: "entrepreneurship",
    type: "Funding",
    whatYoullDo:
      "Access funding, mentoring and business planning support to start your own business or become self-employed.",
    whatYouNeed:
      "Aged 18-30. A business idea (doesn't need to be fully formed). Commitment to making it work.",
    whyItsGood:
      "Financial support to get started. One-to-one mentoring. Access to a network of young entrepreneurs.",
    howToApply: "Visit princes-trust.org.uk/support",
    featured: true,
    archived: false,
    createdAt: "2026-01-15",
  },
  {
    id: "8",
    title: "Graphic Design Bootcamp",
    organisation: "PixelUp Academy",
    location: "Online",
    pay: "Free (scholarship available)",
    sector: "digital-creative",
    type: "Training",
    whatYoullDo:
      "6-week intensive covering Adobe Creative Suite, brand identity design, typography and portfolio building.",
    whatYouNeed:
      "Access to a laptop. Creative mindset. No prior design experience needed.",
    whyItsGood:
      "Learn industry-standard tools. Build a real portfolio. Career coaching included.",
    howToApply: "Apply at pixelup.example.com/bootcamp",
    featured: false,
    archived: false,
    createdAt: "2026-02-12",
  },
  {
    id: "9",
    title: "Plumbing & Heating Apprentice",
    organisation: "HeatWorks Services",
    location: "Sheffield",
    pay: "£16,000 - £19,000",
    sector: "construction",
    type: "Apprenticeship",
    whatYoullDo:
      "Install and maintain heating systems, learn plumbing fundamentals, and work with experienced engineers on residential jobs.",
    whatYouNeed:
      "Good problem-solving skills. Comfortable working in different locations. Full driving licence preferred but not essential.",
    whyItsGood:
      "Skilled trade with high earning potential. Job security. Option to go self-employed after qualifying.",
    howToApply: "Call 0800 123 4567 or email jobs@heatworks.example.com",
    featured: true,
    archived: false,
    createdAt: "2026-02-14",
  },
];
