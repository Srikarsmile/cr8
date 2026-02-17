"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import PathwayCard from "@/components/PathwayCard";
import OpportunityCard from "@/components/OpportunityCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { getOpportunities } from "@/lib/opportunities-store";
import type { Opportunity } from "@/data/opportunities";

const pathways = [
  {
    title: "Digital & Creative",
    description:
      "From web development to graphic design, social media to content creation - the digital world is yours.",
    href: "/pathways/digital-creative",
    color: "text-brand-purple",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Beauty",
    description:
      "Hair, nails, skincare, makeup - train in a booming industry and build your own brand.",
    href: "/pathways/beauty",
    color: "text-brand-pink",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Construction",
    description:
      "Get hands-on skills in one of the UK's biggest industries. Build things that last.",
    href: "/pathways/construction",
    color: "text-brand-orange",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "Entrepreneurship",
    description:
      "Got a business idea? Learn how to start, grow and fund your own thing.",
    href: "/entrepreneurship",
    color: "text-brand-teal",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Soft Life Loading",
    description:
      "Level up your interview skills, CV game, confidence and workplace readiness.",
    href: "/soft-life-loading",
    color: "text-brand-yellow",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export default function Home() {
  const [featured, setFeatured] = useState<Opportunity[]>([]);

  useEffect(() => {
    const all = getOpportunities();
    setFeatured(all.filter((o) => o.featured && !o.archived).slice(0, 3));
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-transparent to-brand-pink/20" />
        <div className="relative max-w-5xl mx-auto px-4 py-24 md:py-32 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Build skills. Access opportunities.{" "}
            <span className="gradient-text">Create your path.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            CRE8 Pathways connects 18-24 year olds to real careers in digital,
            creative, beauty, construction and entrepreneurship. No fluff - just
            real next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pathways"
              className="px-8 py-4 bg-brand-purple text-white font-bold rounded-xl hover:bg-brand-purple/90 transition-colors text-lg"
            >
              Explore Pathways
            </Link>
            <Link
              href="/opportunities"
              className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-colors text-lg"
            >
              View Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Pathway Tiles */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-dark mb-3">
              Choose Your Pathway
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Five routes to real opportunities. Pick the one that fits you - or
              explore them all.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pathways.map((p) => (
              <PathwayCard key={p.href} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-dark mb-3">
              Featured Opportunities
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Jobs, apprenticeships, training and funding - updated regularly.
            </p>
          </div>
          {featured.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((opp) => (
                <OpportunityCard key={opp.id} opp={opp} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">
              Loading opportunities...
            </p>
          )}
          <div className="text-center mt-10">
            <Link
              href="/opportunities"
              className="inline-block px-8 py-3 bg-brand-dark text-white font-bold rounded-xl hover:bg-brand-dark/90 transition-colors"
            >
              View All Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </main>
  );
}
