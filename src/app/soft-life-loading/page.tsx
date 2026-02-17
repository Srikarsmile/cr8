import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soft Life Loading - CRE8 Pathways",
  description:
    "Build the confidence and soft skills you need to access opportunities. Interview prep, CV tips, communication skills and more.",
};

const skillAreas = [
  {
    title: "Interview Skills",
    description:
      "Learn how to prepare, what to say, how to handle nerves, and how to make a strong impression - even if it's your first ever interview.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "CV & Personal Branding",
    description:
      "Create a CV that actually stands out. Learn how to present yourself online and offline in a way that gets you noticed for the right reasons.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: "Communication Skills",
    description:
      "Speaking clearly, writing professionally, active listening and reading the room. These skills matter in every job and every industry.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: "Workplace Confidence",
    description:
      "Navigating a new workplace, dealing with imposter syndrome, asking questions without feeling stupid, and knowing your worth.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Professional Behaviour",
    description:
      "Punctuality, dress codes, email etiquette, team dynamics - the unwritten rules that nobody teaches you but everybody expects you to know.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Time Management",
    description:
      "Prioritising tasks, meeting deadlines, balancing work and life, and managing your energy - not just your hours.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Mindset & Resilience",
    description:
      "Dealing with rejection, staying motivated, bouncing back from setbacks, and building a growth mindset that keeps you moving forward.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const resources = [
  {
    title: "Interview Prep Guide",
    description:
      "A step-by-step guide to preparing for job interviews, including common questions and how to answer them.",
    tag: "Guide",
  },
  {
    title: "CV Template & Tips",
    description:
      "A clean, modern CV template with tips on what to include, how to format it, and common mistakes to avoid.",
    tag: "Template",
  },
  {
    title: "First Day Checklist",
    description:
      "Everything you need to know before your first day at work - what to wear, what to bring, and how to make a good impression.",
    tag: "Checklist",
  },
  {
    title: "Email Etiquette 101",
    description:
      "How to write professional emails that get read and get results. Includes templates for common situations.",
    tag: "Guide",
  },
  {
    title: "Handling Rejection",
    description:
      "Practical tips for dealing with job rejection, learning from it, and coming back stronger next time.",
    tag: "Tips",
  },
  {
    title: "Body Language Basics",
    description:
      "How to use body language to project confidence in interviews, meetings and networking situations.",
    tag: "Tips",
  },
];

export default function SoftLifeLoadingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-yellow to-yellow-500 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-dark mb-4">
            Soft Life Loading
          </h1>
          <p className="text-lg text-brand-dark/80 max-w-2xl mx-auto">
            The skills they don&apos;t teach you in school - but every employer expects
            you to have. Build your confidence, sharpen your soft skills, and
            get ready to level up.
          </p>
        </div>
      </section>

      {/* What Is It */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">
            What is Soft Life Loading?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Soft Life Loading is CRE8 Pathways&apos; employability and soft skills
            arm. It&apos;s designed to help young adults aged 18-24 build the
            confidence, communication skills and professional readiness they
            need to actually access and succeed in opportunities.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Because getting the interview is only half the battle - you need to
            know how to show up, speak up and stand out. Soft Life Loading gives
            you the tools to do exactly that.
          </p>
        </div>
      </section>

      {/* Key Skill Areas */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-8 text-center">
            Key Skill Areas
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillAreas.map((skill) => (
              <div
                key={skill.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 text-brand-dark flex items-center justify-center mb-4">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-brand-dark mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-3 text-center">
            What We Offer
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Practical, youth-friendly resources to help you prepare for the
            world of work. No jargon, no lectures - just real stuff that helps.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.title}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-yellow/20 text-brand-dark mb-3">
                  {resource.tag}
                </span>
                <h3 className="font-semibold text-brand-dark mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-brand-yellow to-yellow-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-brand-dark mb-4">
            Level Up Your Skills
          </h2>
          <p className="text-brand-dark/80 mb-8">
            Ready to build the confidence and skills you need? Explore our
            pathways to find your next opportunity, or check out what&apos;s
            available right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pathways"
              className="px-8 py-3 bg-brand-dark text-white font-bold rounded-xl hover:bg-brand-dark/90 transition-colors"
            >
              Explore Pathways
            </Link>
            <Link
              href="/opportunities"
              className="px-8 py-3 bg-white text-brand-dark font-bold rounded-xl hover:bg-gray-100 transition-colors"
            >
              View Opportunities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
