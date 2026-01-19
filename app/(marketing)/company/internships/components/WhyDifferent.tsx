"use client";

/**
 * WhyDifferent Component
 * 
 * Section explaining why this internship is different,
 * featuring 8 feature cards in a grid layout.
 */

import React from "react";

// --- DATA: FEATURE CARDS ---
const FEATURE_CARDS = [
  {
    id: 1,
    badge: "Real Work, Real Responsibility",
    badgeColor: "bg-blue-100 text-blue-800",
    description: "You don't just \"learn about\" technology here. You work on real tasks, similar to what professionals do in actual companies.",
  },
  {
    id: 2,
    badge: "Learn by Doing, Not Watching",
    badgeColor: "bg-purple-100 text-purple-800",
    description: "There are no long lectures or endless videos. You learn by building things, improving them, and understanding why they work.",
  },
  {
    id: 3,
    badge: "Clear Structure, Not Confusion",
    badgeColor: "bg-orange-100 text-orange-800",
    description: "You always know what you're working on, why it matters, and what \"good work\" looks like. No guessing. No random tasks.",
  },
  {
    id: 4,
    badge: "Guidance That Helps You Grow",
    badgeColor: "bg-green-100 text-green-800",
    description: "You receive feedback on your work — what's good, what needs improvement, and how to fix it. Support is provided, but effort and responsibility are expected from you.",
  },
  {
    id: 5,
    badge: "Focused Career Paths",
    badgeColor: "bg-pink-100 text-pink-800",
    description: "Instead of trying a little bit of everything, you choose a clear direction: building websites and applications, working with cloud systems, or understanding how modern software is deployed and maintained. This helps you grow faster and with purpose.",
  },
  {
    id: 6,
    badge: "Skills Over Certificates",
    badgeColor: "bg-indigo-100 text-indigo-800",
    description: "At the end of the internship, you can explain what you worked on, show your work, and feel confident talking about your skills. The certificate is a bonus — not the goal.",
  },
  {
    id: 7,
    badge: "Selective by Design",
    badgeColor: "bg-teal-100 text-teal-800",
    description: "Not everyone is accepted. We keep the group focused and manageable so that every intern gets proper attention, guidance, and meaningful work.",
    gridClass: "lg:col-start-1 lg:col-span-1 border-r border-gray-200",
  },
  {
    id: 8,
    badge: "Professional Work Environment",
    badgeColor: "bg-amber-100 text-amber-800",
    description: "You work in a structured, respectful environment with clear expectations, timelines, and communication — similar to how real companies operate.",
    gridClass: "lg:col-start-2 lg:col-span-1",
  },
  {
    id: 9,
    badge: "Industry-Ready Portfolio",
    badgeColor: "bg-cyan-100 text-cyan-800",
    description: "Build a portfolio of real projects that demonstrate your skills to employers. Every project you complete is something you can showcase in interviews and on your resume.",
    gridClass: "lg:col-start-3 lg:col-span-1",
  },
];

export function WhyDifferent() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight mb-6 leading-[1.1]">
            Why This Internship Is Different
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            We go beyond traditional internships to provide real engineering experience that prepares you for industry success.
          </p>
        </div>

        {/* Grid of Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gray-200 rounded-2xl overflow-hidden bg-white divide-x-0 lg:divide-x divide-y divide-gray-200">
          {FEATURE_CARDS.map((card) => (
            <div
              key={card.id}
              className={`bg-white p-6 md:p-8 hover:bg-gray-50 transition-colors duration-200 ${card.gridClass || ""}`}
            >
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 rounded-full ${card.badgeColor} text-sm font-medium`}>
                  {card.badge}
                </span>
              </div>
              <p className="text-black leading-relaxed font-light text-[15px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
