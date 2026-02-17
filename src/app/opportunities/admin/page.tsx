"use client";

import { useEffect, useState } from "react";
import {
  getOpportunities,
  addOpportunity,
  deleteOpportunity,
  archiveOpportunity,
  updateOpportunity,
} from "@/lib/opportunities-store";
import type { Opportunity } from "@/data/opportunities";

const emptForm = {
  title: "",
  organisation: "",
  location: "",
  pay: "",
  sector: "digital-creative" as Opportunity["sector"],
  type: "Job" as Opportunity["type"],
  whatYoullDo: "",
  whatYouNeed: "",
  whyItsGood: "",
  howToApply: "",
  featured: false,
  archived: false,
};

export default function AdminPage() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptForm);
  const [showArchived, setShowArchived] = useState(false);

  useEffect(() => {
    setOpportunities(getOpportunities());
  }, []);

  const refresh = () => setOpportunities(getOpportunities());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateOpportunity(editingId, form);
    } else {
      addOpportunity(form);
    }
    setForm(emptForm);
    setShowForm(false);
    setEditingId(null);
    refresh();
  };

  const handleEdit = (opp: Opportunity) => {
    setForm({
      title: opp.title,
      organisation: opp.organisation,
      location: opp.location,
      pay: opp.pay || "",
      sector: opp.sector,
      type: opp.type,
      whatYoullDo: opp.whatYoullDo,
      whatYouNeed: opp.whatYouNeed,
      whyItsGood: opp.whyItsGood,
      howToApply: opp.howToApply,
      featured: opp.featured,
      archived: opp.archived,
    });
    setEditingId(opp.id);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this opportunity?")) {
      deleteOpportunity(id);
      refresh();
    }
  };

  const handleArchive = (id: string) => {
    archiveOpportunity(id);
    refresh();
  };

  const displayed = showArchived
    ? opportunities
    : opportunities.filter((o) => !o.archived);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-brand-dark text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-display text-3xl font-bold mb-2">
            Admin: Manage Opportunities
          </h1>
          <p className="text-gray-400">
            Add, edit, archive and delete opportunity listings.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="py-6 px-4 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-4 items-center">
            <button
              onClick={() => {
                setForm(emptForm);
                setEditingId(null);
                setShowForm(!showForm);
              }}
              className="px-6 py-2.5 bg-brand-purple text-white font-semibold rounded-xl hover:bg-brand-purple/90 transition-colors text-sm"
            >
              {showForm ? "Cancel" : "+ Add Opportunity"}
            </button>
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={showArchived}
                onChange={(e) => setShowArchived(e.target.checked)}
                className="rounded border-gray-300 text-brand-purple focus:ring-brand-purple"
              />
              Show archived
            </label>
          </div>
          <p className="text-sm text-gray-500">
            {displayed.length} listing{displayed.length !== 1 && "s"}
          </p>
        </div>
      </section>

      {/* Add/Edit Form */}
      {showForm && (
        <section className="py-8 px-4 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-xl font-bold text-brand-dark mb-6">
              {editingId ? "Edit Opportunity" : "Add New Opportunity"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-1">
                    Role Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.title}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-1">
                    Organisation *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.organisation}
                    onChange={(e) =>
                      setForm({ ...form, organisation: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-1">
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.location}
                    onChange={(e) =>
                      setForm({ ...form, location: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-1">
                    Pay
                  </label>
                  <input
                    type="text"
                    value={form.pay}
                    onChange={(e) =>
                      setForm({ ...form, pay: e.target.value })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                    placeholder="e.g. £20,000 or Free"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-1">
                    Sector *
                  </label>
                  <select
                    value={form.sector}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        sector: e.target.value as Opportunity["sector"],
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  >
                    <option value="digital-creative">
                      Digital &amp; Creative
                    </option>
                    <option value="beauty">Beauty</option>
                    <option value="construction">Construction</option>
                    <option value="entrepreneurship">Entrepreneurship</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-dark mb-1">
                    Type *
                  </label>
                  <select
                    value={form.type}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        type: e.target.value as Opportunity["type"],
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-purple focus:border-transparent"
                  >
                    <option value="Job">Job</option>
                    <option value="Apprenticeship">Apprenticeship</option>
                    <option value="Training">Training</option>
                    <option value="Funding">Funding</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1">
                  What you&apos;ll do *
                </label>
                <textarea
                  required
                  rows={2}
                  value={form.whatYoullDo}
                  onChange={(e) =>
                    setForm({ ...form, whatYoullDo: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-purple focus:border-transparent resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1">
                  What you need *
                </label>
                <textarea
                  required
                  rows={2}
                  value={form.whatYouNeed}
                  onChange={(e) =>
                    setForm({ ...form, whatYouNeed: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-purple focus:border-transparent resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1">
                  Why it&apos;s good for you *
                </label>
                <textarea
                  required
                  rows={2}
                  value={form.whyItsGood}
                  onChange={(e) =>
                    setForm({ ...form, whyItsGood: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-purple focus:border-transparent resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-dark mb-1">
                  How to apply *
                </label>
                <textarea
                  required
                  rows={2}
                  value={form.howToApply}
                  onChange={(e) =>
                    setForm({ ...form, howToApply: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:ring-2 focus:ring-brand-purple focus:border-transparent resize-none"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    checked={form.featured}
                    onChange={(e) =>
                      setForm({ ...form, featured: e.target.checked })
                    }
                    className="rounded border-gray-300 text-brand-purple focus:ring-brand-purple"
                  />
                  Featured on homepage
                </label>
              </div>

              <button
                type="submit"
                className="px-8 py-3 bg-brand-purple text-white font-bold rounded-xl hover:bg-brand-purple/90 transition-colors"
              >
                {editingId ? "Update Opportunity" : "Add Opportunity"}
              </button>
            </form>
          </div>
        </section>
      )}

      {/* Listings Table */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-4">
            {displayed.map((opp) => (
              <div
                key={opp.id}
                className={`bg-white rounded-xl p-6 border ${
                  opp.archived
                    ? "border-gray-200 opacity-60"
                    : "border-gray-100"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                        {opp.sector}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                        {opp.type}
                      </span>
                      {opp.featured && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-brand-purple/10 text-brand-purple">
                          Featured
                        </span>
                      )}
                      {opp.archived && (
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-red-100 text-red-600">
                          Archived
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-brand-dark">
                      {opp.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {opp.organisation} &middot; {opp.location}
                      {opp.pay ? ` · ${opp.pay}` : ""}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    <button
                      onClick={() => handleEdit(opp)}
                      className="px-3 py-1.5 text-xs font-semibold bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Edit
                    </button>
                    {!opp.archived && (
                      <button
                        onClick={() => handleArchive(opp.id)}
                        className="px-3 py-1.5 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition-colors"
                      >
                        Archive
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(opp.id)}
                      className="px-3 py-1.5 text-xs font-semibold bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
