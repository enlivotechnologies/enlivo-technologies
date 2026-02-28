"use client";

/**
 * WhoShouldApply Component
 * * CONTENT UPDATE: Neutral, adult, and trustworthy tone.
 * * DESIGN: Premium Dark Mode with specific header updates.
 */

import React from "react";
import { Check, X, CheckCircle2, AlertCircle } from "lucide-react";

// --- DATA ---
const TARGET_PROFILE = [
  "You value hands-on production over theoretical study.",
  "You view bugs as learning opportunities, not failures.",
  "You can commit 15+ hours/week consistently.",
  "You actively seek feedback to refine your engineering.",
  "You want to build a career, not just collect a paper."
];

const NON_TARGET_PROFILE = [
  "You are primarily looking for a certificate for LinkedIn.",
  "You expect pre-recorded videos with zero interaction.",
  "You cannot commit to a regular coding schedule.",
  "You prefer copying code without understanding the 'why'.",
];

export function WhoShouldApply() {
  return (
    <section className="py-24 md:py-32 bg-[#050505] border-t border-white/5">
      <div className="max-w-[90rem] mx-auto px-6">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.05] mb-6">
            Is This Internship Right for You?
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            An honest look at fit, commitment, and expectations.
          </p>
        </div>

        {/* --- COMPARISON GRID WITH VERTICAL DIVIDER --- */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* LEFT: GOOD FIT */}
          <div className="flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-10 pb-8">
              <div className="flex-1 pr-4">
                <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight leading-tight mb-2">
                  This Internship Is a Good Fit
                </h3>
                <p className="text-lg text-white/80 font-normal">If You…</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-green-400" strokeWidth={1.5} />
              </div>
            </div>

            {/* List */}
            <div className="space-y-5">
              {TARGET_PROFILE.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-green-400" strokeWidth={2.5} />
                  </div>
                  <p className="text-base text-gray-300 font-normal leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* VERTICAL DIVIDER LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          {/* RIGHT: NOT RIGHT */}
          <div className="flex flex-col">
            {/* Header */}
            <div className="flex items-start justify-between mb-10 pb-8">
              <div className="flex-1 pr-4">
                <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight leading-tight mb-2">
                  This Internship May Not Be Right
                </h3>
                <p className="text-lg text-white/80 font-normal">If You…</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-red-400" strokeWidth={1.5} />
              </div>
            </div>

            {/* List */}
            <div className="space-y-5">
              {NON_TARGET_PROFILE.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3 text-red-400" strokeWidth={2.5} />
                  </div>
                  <p className="text-base text-gray-500 font-normal leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}