import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – CRE8 Pathways",
  description:
    "Learn about CRE8 Pathways, our mission and why we exist.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-brand-dark text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            About CRE8 Pathways
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We exist to connect young adults to real careers, real skills and
            real opportunities.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            CRE8 Pathways exists to bridge the gap between young people and the
            careers they deserve. We believe that talent is everywhere, but
            opportunity isn&apos;t — and we&apos;re here to change that. We connect
            18–24 year olds to practical career pathways, real opportunities,
            and the soft skills training they need to succeed.
          </p>
        </div>
      </section>

      {/* Why We Were Created */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">
            Why CRE8 Was Created
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Too many young people are falling through the gaps. They&apos;re told
              to &ldquo;get a career&rdquo; but not shown how. They&apos;re pointed towards
              university when it might not be the right path for them. They&apos;re
              expected to write CVs, ace interviews and navigate workplaces
              without ever being taught how.
            </p>
            <p>
              CRE8 Pathways was created to fix that. We focus on sectors where
              there are genuine opportunities — digital and creative, beauty,
              construction and entrepreneurship — and we make the entry points
              clear, accessible and achievable.
            </p>
            <p>
              Through Soft Life Loading, our employability arm, we also tackle
              the soft skills gap head-on: interview confidence, CV writing,
              professional behaviour, communication and resilience. Because
              getting your foot in the door is only the start.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-brand-purple/10 to-brand-pink/10 rounded-2xl p-10">
            <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              A future where every young person — regardless of background,
              qualifications or postcode — has clear, accessible pathways to a
              career that excites them and a life that fulfils them.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-8 text-center">
            What We Stand For
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-semibold text-brand-dark mb-2">
                Real, Not Corporate
              </h3>
              <p className="text-sm text-gray-600">
                We speak plainly. No jargon, no buzzwords, no patronising tone.
                Just clear, honest guidance from people who understand.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-semibold text-brand-dark mb-2">
                Practical First
              </h3>
              <p className="text-sm text-gray-600">
                Everything we do is designed to be useful — not just
                inspirational. Practical steps, real opportunities, actual next
                moves.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-semibold text-brand-dark mb-2">
                Youth-Led Thinking
              </h3>
              <p className="text-sm text-gray-600">
                We design with young people, not just for them. Their voices,
                experiences and feedback shape everything we build.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-semibold text-brand-dark mb-2">
                Inclusive & Accessible
              </h3>
              <p className="text-sm text-gray-600">
                No matter your background, qualifications or starting point —
                there&apos;s a pathway for you here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-16 px-4 bg-brand-dark text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Partner With Us
          </h2>
          <p className="text-gray-300 mb-8">
            Are you an employer, training provider or community organisation?
            We&apos;d love to work with you to connect young people to
            opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-brand-purple text-white font-bold rounded-xl hover:bg-brand-purple/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
