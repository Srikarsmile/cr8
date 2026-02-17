"use client";

import { Opportunity, defaultOpportunities } from "@/data/opportunities";

const STORAGE_KEY = "cre8_opportunities";

export function getOpportunities(): Opportunity[] {
  if (typeof window === "undefined") return defaultOpportunities;

  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultOpportunities));
    return defaultOpportunities;
  }
  return JSON.parse(stored);
}

export function saveOpportunities(opportunities: Opportunity[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(opportunities));
}

export function addOpportunity(opp: Omit<Opportunity, "id" | "createdAt">) {
  const opportunities = getOpportunities();
  const newOpp: Opportunity = {
    ...opp,
    id: Date.now().toString(),
    createdAt: new Date().toISOString().split("T")[0],
  };
  opportunities.unshift(newOpp);
  saveOpportunities(opportunities);
  return newOpp;
}

export function updateOpportunity(id: string, updates: Partial<Opportunity>) {
  const opportunities = getOpportunities();
  const index = opportunities.findIndex((o) => o.id === id);
  if (index === -1) return null;
  opportunities[index] = { ...opportunities[index], ...updates };
  saveOpportunities(opportunities);
  return opportunities[index];
}

export function deleteOpportunity(id: string) {
  const opportunities = getOpportunities();
  const filtered = opportunities.filter((o) => o.id !== id);
  saveOpportunities(filtered);
}

export function archiveOpportunity(id: string) {
  return updateOpportunity(id, { archived: true });
}
