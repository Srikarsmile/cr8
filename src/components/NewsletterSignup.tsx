"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would connect to a newsletter service
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-br from-brand-purple to-brand-pink py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-display text-3xl font-bold text-white mb-3">
          Stay in the Loop
        </h2>
        <p className="text-white/80 mb-8">
          Get the latest opportunities, events and resources straight to your
          inbox. No spam — just real stuff that matters.
        </p>

        {submitted ? (
          <div className="bg-white/20 backdrop-blur rounded-xl p-6">
            <p className="text-white font-semibold text-lg">
              You&apos;re signed up! We&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 border-0"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-brand-purple font-bold rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
