import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Digital & Creative Careers – CRE8 Pathways",
  description:
    "Explore digital and creative career pathways including web development, graphic design, social media and content creation.",
};

export default function DigitalCreativePage() {
  return (
    <SectorPage
      title="Digital & Creative"
      sectorKey="digital-creative"
      accentColor="bg-gradient-to-br from-brand-purple to-purple-600"
      intro="From web development to graphic design, social media to video production — the digital economy is one of the fastest-growing sectors in the UK. There's space for coders, creatives, strategists and storytellers."
      whyGrowing="The UK's digital sector contributes over £150 billion to the economy annually. Demand for digital skills is outpacing supply, meaning employers are actively looking for new talent — including people without traditional degrees. Remote work, freelancing and flexible roles are common, making it one of the most accessible sectors for young people."
      steps={[
        {
          title: "Explore what interests you",
          description:
            "Web development? Graphic design? Social media management? Content creation? Video editing? There are dozens of roles — find the one that excites you.",
        },
        {
          title: "Start learning for free",
          description:
            "Platforms like freeCodeCamp, Canva Design School, Google Digital Garage and YouTube tutorials let you build real skills at zero cost.",
        },
        {
          title: "Build a portfolio",
          description:
            "Create personal projects, volunteer for small businesses, or do freelance work to build a portfolio that shows what you can do.",
        },
        {
          title: "Get certified",
          description:
            "Look into Google Certificates, Adobe Certified Professional, or apprenticeship-linked qualifications to formalise your skills.",
        },
        {
          title: "Apply for roles",
          description:
            "Junior roles, apprenticeships and internships are your way in. Many digital employers care more about what you can do than what qualifications you have.",
        },
      ]}
      entryRoutes={[
        {
          title: "Digital Apprenticeships",
          description:
            "Level 3–4 apprenticeships in software development, digital marketing, data analysis and more. Earn while you learn with real employers.",
        },
        {
          title: "Free Training Programmes",
          description:
            "Bootcamps and courses from organisations like Code First Girls, Generation UK and local colleges — many are fully funded.",
        },
        {
          title: "Entry-Level Jobs",
          description:
            "Junior developer, social media assistant, content creator, graphic design assistant — roles that value potential over experience.",
        },
        {
          title: "Freelancing",
          description:
            "Start offering your skills on platforms like Fiverr, Upwork or directly to local businesses. Build experience and income on your terms.",
        },
      ]}
    />
  );
}
