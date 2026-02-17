import Link from "next/link";
import type { Opportunity } from "@/data/opportunities";

const sectorLabels: Record<string, string> = {
  "digital-creative": "Digital & Creative",
  beauty: "Beauty",
  construction: "Construction",
  entrepreneurship: "Entrepreneurship",
};

const sectorColors: Record<string, string> = {
  "digital-creative": "bg-brand-purple/10 text-brand-purple",
  beauty: "bg-brand-pink/10 text-brand-pink",
  construction: "bg-brand-orange/10 text-brand-orange",
  entrepreneurship: "bg-brand-teal/10 text-brand-teal",
};

const typeColors: Record<string, string> = {
  Job: "bg-green-100 text-green-700",
  Apprenticeship: "bg-blue-100 text-blue-700",
  Training: "bg-yellow-100 text-yellow-700",
  Funding: "bg-purple-100 text-purple-700",
};

export default function OpportunityCard({ opp }: { opp: Opportunity }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex flex-wrap gap-2 mb-3">
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${sectorColors[opp.sector]}`}
        >
          {sectorLabels[opp.sector]}
        </span>
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typeColors[opp.type]}`}
        >
          {opp.type}
        </span>
      </div>

      <h3 className="font-display text-lg font-bold text-brand-dark mb-1">
        {opp.title}
      </h3>
      <p className="text-sm text-gray-500 mb-1">{opp.organisation}</p>
      <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {opp.location}
        </span>
        {opp.pay && (
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {opp.pay}
          </span>
        )}
      </div>

      <div className="space-y-3 mb-4">
        <div>
          <p className="text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1">
            What you&apos;ll do
          </p>
          <p className="text-sm text-gray-600">{opp.whatYoullDo}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1">
            What you need
          </p>
          <p className="text-sm text-gray-600">{opp.whatYouNeed}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1">
            Why it&apos;s good for you
          </p>
          <p className="text-sm text-gray-600">{opp.whyItsGood}</p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-4">
        <p className="text-xs font-semibold text-brand-dark uppercase tracking-wider mb-1">
          How to apply
        </p>
        <p className="text-sm text-gray-700">{opp.howToApply}</p>
      </div>
    </div>
  );
}
