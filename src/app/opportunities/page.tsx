"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import OpportunityCard from "@/components/OpportunityCard";
import { getOpportunities } from "@/lib/opportunities-store";
import type { Opportunity } from "@/data/opportunities";

const sectors = [
  { value: "", label: "All Sectors" },
  { value: "digital-creative", label: "Digital & Creative" },
  { value: "beauty", label: "Beauty" },
  { value: "construction", label: "Construction" },
  { value: "entrepreneurship", label: "Entrepreneurship" },
];

const types = [
  { value: "", label: "All Types" },
  { value: "Job", label: "Job" },
  { value: "Apprenticeship", label: "Apprenticeship" },
  { value: "Training", label: "Training" },
  { value: "Funding", label: "Funding" },
];

const locations = [
  { value: "", label: "All Locations" },
  { value: "London", label: "London" },
  { value: "Manchester", label: "Manchester" },
  { value: "Birmingham", label: "Birmingham" },
  { value: "Leeds", label: "Leeds" },
  { value: "Bristol", label: "Bristol" },
  { value: "Sheffield", label: "Sheffield" },
  { value: "Nottingham", label: "Nottingham" },
  { value: "Online", label: "Online" },
  { value: "Nationwide", label: "Nationwide" },
];

export default function OpportunitiesPage() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [sectorFilter, setSectorFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  useEffect(() => {
    const all = getOpportunities();
    setOpportunities(all.filter((o) => !o.archived));
  }, []);

  const filtered = opportunities.filter((opp) => {
    if (sectorFilter && opp.sector !== sectorFilter) return false;
    if (typeFilter && opp.type !== typeFilter) return false;
    if (locationFilter && opp.location !== locationFilter) return false;
    return true;
  });

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Opportunities
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Jobs, apprenticeships, training and funding - all in one place.
            Filter by what matters to you and find your next step.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              value={sectorFilter}
              onChange={(e) => setSectorFilter(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-purple focus:border-transparent"
            >
              {sectors.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-purple focus:border-transparent"
            >
              {locations.map((l) => (
                <option key={l.value} value={l.value}>
                  {l.label}
                </option>
              ))}
            </select>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-purple focus:border-transparent"
            >
              {types.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              {filtered.length} opportunit{filtered.length === 1 ? "y" : "ies"}{" "}
              found
            </p>
            {(sectorFilter || typeFilter || locationFilter) && (
              <button
                onClick={() => {
                  setSectorFilter("");
                  setTypeFilter("");
                  setLocationFilter("");
                }}
                className="text-sm text-brand-purple hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Listings */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((opp) => (
                <OpportunityCard key={opp.id} opp={opp} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <svg
                className="w-16 h-16 text-gray-300 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <h3 className="font-display text-xl font-bold text-brand-dark mb-2">
                No opportunities found
              </h3>
              <p className="text-gray-500">
                Try adjusting your filters or check back soon for new listings.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Admin Link */}
      <section className="py-8 px-4 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            href="/opportunities/admin"
            className="text-sm text-gray-400 hover:text-brand-purple transition-colors"
          >
            Admin: Manage Opportunities
          </Link>
        </div>
      </section>
    </main>
  );
}
