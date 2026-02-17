import type { Metadata } from "next";
import SectorPage from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Beauty Careers - CRE8 Pathways",
  description:
    "Explore beauty career pathways including nail tech, hair styling, skincare, makeup artistry and barbering.",
};

export default function BeautyPage() {
  return (
    <SectorPage
      title="Beauty"
      sectorKey="beauty"
      accentColor="bg-gradient-to-br from-brand-pink to-pink-600"
      intro="Hair, nails, skincare, makeup, barbering - the beauty industry is creative, hands-on and full of opportunity. Whether you want to work in a salon, go mobile, or build your own brand, this sector gives you real earning power and flexibility."
      whyGrowing="The UK beauty industry is worth over £30 billion. Demand for skilled beauty professionals continues to rise, especially in specialist areas like nail art, aesthetics and male grooming. Social media has created new routes to building a client base, and self-employment is more achievable than ever."
      steps={[
        {
          title: "Choose your specialism",
          description:
            "Hair styling? Nail tech? Skincare? Makeup artistry? Barbering? Lashes and brows? Pick what excites you most.",
        },
        {
          title: "Get trained",
          description:
            "Look for funded courses, college programmes or private training academies. Many offer Level 2-3 qualifications that are industry-recognised.",
        },
        {
          title: "Practice and build a portfolio",
          description:
            "Work on friends, family and models. Document everything with good photos for your social media portfolio.",
        },
        {
          title: "Get qualified and insured",
          description:
            "Make sure you have the right certifications and insurance to work legally - especially important for treatments like nails and aesthetics.",
        },
        {
          title: "Start working or go self-employed",
          description:
            "Work in a salon, rent a chair, go mobile or set up from home. Many beauty professionals build thriving businesses within their first year.",
        },
      ]}
      entryRoutes={[
        {
          title: "Beauty Apprenticeships",
          description:
            "Level 2-3 apprenticeships in hairdressing, beauty therapy, barbering and more. Train in a real salon while earning a wage.",
        },
        {
          title: "Funded Training Courses",
          description:
            "Short courses and bootcamps in nail tech, lash extensions, makeup artistry and skincare - often free for 18-24 year olds.",
        },
        {
          title: "Salon Employment",
          description:
            "Junior stylist, beauty therapist, salon receptionist - get your foot in the door and learn on the job.",
        },
        {
          title: "Self-Employment",
          description:
            "Register as self-employed, build your social media presence, and start taking bookings. Many beauty pros start earning quickly this way.",
        },
      ]}
    />
  );
}
