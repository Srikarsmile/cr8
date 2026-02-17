import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Construction Careers - CRE8 Pathways",
  description:
    "Explore construction career pathways including bricklaying, carpentry, plumbing, electrical and site management.",
};

export default function ConstructionPage() {
  return (
    <SectorPage
      title="Construction"
      sectorKey="construction"
      accentColor="bg-gradient-to-br from-brand-orange to-orange-600"
      intro="Bricklaying, carpentry, plumbing, electrical, site management - construction is one of the UK's biggest and most in-demand industries. If you like hands-on work, problem-solving and seeing real results, this is for you."
      whyGrowing="The UK construction sector employs over 2.4 million people and is facing a significant skills shortage. With major infrastructure projects, house building targets and a wave of retirements, the industry urgently needs young, skilled workers. Pay is competitive, career progression is clear, and many trades offer the option to go self-employed."
      steps={[
        {
          title: "Choose a trade",
          description:
            "Bricklaying, carpentry, plumbing, electrical, plastering, roofing, painting and decorating - each trade has strong demand and good earning potential.",
        },
        {
          title: "Get your CSCS card",
          description:
            "The Construction Skills Certification Scheme (CSCS) card is your passport to working on construction sites. It proves you have the right health and safety training.",
        },
        {
          title: "Find training or an apprenticeship",
          description:
            "Look for construction apprenticeships, college courses or industry training programmes. Many are fully funded for under-25s.",
        },
        {
          title: "Gain on-site experience",
          description:
            "Work alongside experienced tradespeople, learn the practical skills, and build your confidence on real projects.",
        },
        {
          title: "Qualify and progress",
          description:
            "Complete your NVQ or apprenticeship, get fully qualified, and choose your path - employed, self-employed or running your own firm.",
        },
      ]}
      entryRoutes={[
        {
          title: "Construction Apprenticeships",
          description:
            "Level 2-3 apprenticeships in all major trades. Earn while you learn with on-the-job training and college day release.",
        },
        {
          title: "CITB Training Programmes",
          description:
            "The Construction Industry Training Board runs short courses and funded programmes to get young people site-ready.",
        },
        {
          title: "Labourer / Site Assistant Roles",
          description:
            "Entry-level site roles that let you earn money while getting exposure to different trades before specialising.",
        },
        {
          title: "Self-Employment",
          description:
            "Once qualified, many tradespeople go self-employed. Plumbers, electricians and carpenters are always in demand.",
        },
      ]}
    />
  );
}
