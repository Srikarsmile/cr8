import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pathways - CRE8 Pathways",
  description:
    "Explore five career pathways: Digital & Creative, Beauty, Construction, Entrepreneurship, and Soft Life Loading.",
};

const pathways = [
  {
    title: "Digital & Creative",
    description:
      "Web development, graphic design, social media management, content creation, UX/UI design, video production and more. The digital economy is booming - and there's space for you.",
    href: "/pathways/digital-creative",
    gradient: "from-brand-purple to-purple-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Beauty",
    description:
      "Hair styling, nail tech, skincare, makeup artistry, barbering and more. A creative, hands-on industry with real earning power and flexibility.",
    href: "/pathways/beauty",
    gradient: "from-brand-pink to-pink-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Construction",
    description:
      "Bricklaying, carpentry, plumbing, electrical work, site management and more. A sector with massive demand, great pay and a clear career ladder.",
    href: "/pathways/construction",
    gradient: "from-brand-orange to-orange-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Entrepreneurship",
    description:
      "Got an idea? Learn how to start a business, go self-employed, price your services, find funding and build something of your own.",
    href: "/entrepreneurship",
    gradient: "from-brand-teal to-teal-600",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Soft Life Loading",
    description:
      "Not a career path - it's what makes every path work. Build interview confidence, craft your CV, learn workplace skills and get mentally ready to win.",
    href: "/soft-life-loading",
    gradient: "from-brand-yellow to-yellow-500",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export default function PathwaysPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Explore Your Pathway
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Five routes into real careers. Each one is packed with
            opportunities, training and practical steps to get you where you
            want to be.
          </p>
        </div>
      </section>

      {/* Pathway Cards */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-8">
          {pathways.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row">
                <div
                  className={`bg-gradient-to-br ${p.gradient} p-8 flex items-center justify-center md:w-48 text-white`}
                >
                  {p.icon}
                </div>
                <div className="p-8 flex-1">
                  <h2 className="font-display text-2xl font-bold text-brand-dark mb-2 group-hover:text-brand-purple transition-colors">
                    {p.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {p.description}
                  </p>
                  <span className="inline-block mt-4 text-sm font-semibold text-brand-purple group-hover:underline">
                    Explore this pathway &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
