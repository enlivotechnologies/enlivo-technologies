"use client";

/**
 * Outcomes Component
 * 
 * Section displaying what interns will walk away with
 * after completing the internship program.
 */

import React from "react";
import { CheckCircle2, Briefcase, Code, FolderKanban, Clock, Target, Award } from "lucide-react";

// --- DATA: OUTCOMES ---
const OUTCOMES = [
  {
    id: 1,
    icon: Briefcase,
    title: "Real Work Experience",
    description: "Hands-on experience working on tasks similar to those handled in real companies.",
  },
  {
    id: 2,
    icon: Code,
    title: "Practical Skills You Can Explain",
    description: "You'll understand what you built, why you built it, and how it works.",
  },
  {
    id: 3,
    icon: FolderKanban,
    title: "Portfolio-Ready Work",
    description: "Projects or contributions you can confidently show and discuss.",
  },
  {
    id: 4,
    icon: Clock,
    title: "Professional Work Habits",
    description: "Experience with timelines, feedback, revisions, and structured work.",
  },
  {
    id: 5,
    icon: Target,
    title: "Clarity on Your Career Direction",
    description: "A clearer understanding of what kind of work you enjoy and want to pursue.",
  },
  {
    id: 6,
    icon: Award,
    title: "Certificate of Completion",
    description: "Provided after meeting program expectations and standards.",
  },
];

export function Outcomes() {
  return (
    <section className="py-24 md:py-32 bg-black">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
            What You'll Walk Away With
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light mb-4">
            This internship is designed to leave you with real capability, not just participation.
          </p>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-light italic">
            By the end of the internship, you will have:
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {OUTCOMES.map((outcome) => {
            const Icon = outcome.icon;
            
            return (
              <div
                key={outcome.id}
                className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10"
              >
                {/* Icon */}
                <div className="mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                    <Icon className="w-6 h-6 text-black" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 tracking-tight">
                  {outcome.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                  {outcome.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
