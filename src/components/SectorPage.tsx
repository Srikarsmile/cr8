"use client";

import Link from "next/link";
import OpportunityCard from "./OpportunityCard";
import type { Opportunity } from "@/data/opportunities";
import { useEffect, useState } from "react";
import { getOpportunities } from "@/lib/opportunities-store";

interface Step {
  title: string;
  description: string;
}

interface EntryRoute {
  title: string;
  description: string;
}

interface SectorPageProps {
  title: string;
  intro: string;
  whyGrowing: string;
  steps: Step[];
  entryRoutes: EntryRoute[];
  sectorKey: "digital-creative" | "beauty" | "construction";
  accentColor: string;
}

export default function SectorPage({
  title,
  intro,
  whyGrowing,
  steps,
  entryRoutes,
  sectorKey,
  accentColor,
}: SectorPageProps) {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);

  useEffect(() => {
    const all = getOpportunities();
    const filtered = all
      .filter((o) => o.sector === sectorKey && !o.archived)
      .slice(0, 3);
    setOpportunities(filtered);
  }, [sectorKey]);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className={`${accentColor} py-20 px-4`}>
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">{intro}</p>
        </div>
      </section>

      {/* Why This Sector */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">
            Why This Sector is Growing
          </h2>
          <p className="text-gray-600 leading-relaxed">{whyGrowing}</p>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-8">
            How to Get Started
          </h2>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-brand-dark mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entry Routes */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-8">
            Entry Routes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {entryRoutes.map((route, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-brand-dark mb-2">
                  {route.title}
                </h3>
                <p className="text-sm text-gray-600">{route.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-8">
            Featured Opportunities
          </h2>
          {opportunities.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {opportunities.map((opp) => (
                <OpportunityCard key={opp.id} opp={opp} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">
              No opportunities in this sector right now. Check back soon!
            </p>
          )}
          <div className="text-center mt-8">
            <Link
              href="/opportunities"
              className="inline-block px-8 py-3 bg-brand-dark text-white font-bold rounded-xl hover:bg-brand-dark/90 transition-colors"
            >
              View All Opportunities
            </Link>
          </div>
        </div>
      </section>

      {/* Soft Life Loading CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-3">
            Ready to Level Up Your Skills?
          </h2>
          <p className="text-gray-600 mb-6">
            Build the confidence and soft skills you need to succeed in{" "}
            {title.toLowerCase()}. Check out Soft Life Loading for interview
            prep, CV tips, and more.
          </p>
          <Link
            href="/soft-life-loading"
            className="inline-block px-8 py-3 bg-brand-yellow text-brand-dark font-bold rounded-xl hover:bg-brand-yellow/90 transition-colors"
          >
            Explore Soft Life Loading
          </Link>
        </div>
      </section>
    </main>
  );
}
