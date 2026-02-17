import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrepreneurship Hub - CRE8 Pathways",
  description:
    "Learn how to start a business, go self-employed, price your services, find funding and build something of your own.",
};

const sections = [
  {
    title: "What is Self-Employment?",
    content:
      "Being self-employed means you work for yourself instead of an employer. You find your own clients, set your own prices and manage your own time. It could be freelancing, running a business from home, offering a service, selling products online - the options are endless. You don't need a degree, a big budget or a perfect plan. You just need an idea and the willingness to start.",
  },
  {
    title: "How to Register as Self-Employed",
    content:
      "In the UK, you need to register with HMRC as self-employed. It's free and you can do it online at gov.uk. You'll need to register by 5 October in your business's second tax year. Once registered, you'll need to file a Self Assessment tax return each year and pay Income Tax and National Insurance on your profits. It sounds complicated but there are free tools and guides to help you through it.",
  },
  {
    title: "Basic Pricing Guidance",
    content:
      "Pricing is one of the hardest things to get right. Start by researching what others in your area charge for similar services. Factor in your costs (materials, travel, tools), the time it takes, and what you need to earn. Don't underprice yourself - your time has value. A good starting point: work out your hourly rate, then add your costs and a margin. You can always adjust as you grow.",
  },
  {
    title: "Marketing Basics",
    content:
      "You don't need a massive budget to market yourself. Start with social media - Instagram, TikTok and LinkedIn are free and powerful. Post consistently, show your work, share your journey and engage with your audience. Word of mouth is huge - ask happy customers to recommend you. Create a simple website or portfolio. Use free tools like Canva for graphics and Google Business Profile to show up in local searches.",
  },
];

const fundingOptions = [
  {
    title: "The Prince's Trust Enterprise Programme",
    description:
      "Mentoring, training and funding of up to £5,000 for 18-30 year olds starting a business.",
  },
  {
    title: "Start Up Loans",
    description:
      "Government-backed personal loans of 500-£25,000 for new businesses, with free mentoring included.",
  },
  {
    title: "Universal Credit & Self-Employment",
    description:
      "If you're on Universal Credit, you can get support during your first year of self-employment through the New Enterprise Allowance.",
  },
  {
    title: "Local Authority Grants",
    description:
      "Many local councils offer small grants or business support for young entrepreneurs. Check your council's website.",
  },
];

const checklist = [
  "Write down your business idea in one sentence",
  "Research your target market - who will pay for this?",
  "Work out your basic costs and pricing",
  "Register as self-employed with HMRC",
  "Set up a business bank account (most are free)",
  "Create your social media profiles",
  "Build a simple portfolio or website",
  "Tell people what you do - start networking",
  "Keep records of all income and expenses",
  "Look into funding and support options",
];

export default function EntrepreneurshipPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-teal to-teal-600 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Entrepreneurship Hub
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Got an idea? Want to be your own boss? This is your starting point.
            Practical guidance on going self-employed, starting a business and
            making it work.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Funding */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-8">
            Funding &amp; Grants
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {fundingOptions.map((option) => (
              <div
                key={option.title}
                className="bg-white rounded-2xl p-6 border border-gray-100"
              >
                <h3 className="font-semibold text-brand-dark mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Checklist */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-8">
            Your Startup Checklist
          </h2>
          <div className="bg-brand-teal/5 rounded-2xl p-8">
            <ul className="space-y-4">
              {checklist.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-brand-teal flex items-center justify-center mt-0.5">
                    <span className="text-xs font-bold text-brand-teal">
                      {i + 1}
                    </span>
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-brand-teal to-teal-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="font-display text-3xl font-bold mb-4">
            Start Your Journey
          </h2>
          <p className="text-white/80 mb-8">
            Every successful business started with someone deciding to try.
            Explore opportunities, build your skills and take the first step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/opportunities"
              className="px-8 py-3 bg-white text-brand-teal font-bold rounded-xl hover:bg-gray-100 transition-colors"
            >
              View Opportunities
            </Link>
            <Link
              href="/soft-life-loading"
              className="px-8 py-3 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-colors"
            >
              Build Your Skills
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
