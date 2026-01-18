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
      <div className="max-w-6xl mx-auto px-6">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.05] mb-6">
            Is This Internship Right for You?
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
            An honest look at fit, commitment, and expectations.
          </p>
        </div>

        {/* --- COMPARISON GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* LEFT CARD: GOOD FIT */}
          <div className="group relative bg-[#0A0A0A] rounded-[2.5rem] p-10 md:p-12 border border-emerald-900/30 overflow-hidden flex flex-col hover:border-emerald-500/20 transition-colors duration-500">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 flex flex-col h-full">
              {/* Card Header */}
              <div className="flex items-start justify-between mb-10 pb-8 border-b border-emerald-500/10">
                <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight leading-tight max-w-[80%]">
                  This Internship Is a Good Fit If You…
                </h3>
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-500 flex-shrink-0 mt-1">
                   <CheckCircle2 className="w-6 h-6" strokeWidth={1.5} />
                </div>
              </div>

              {/* List */}
              <div className="space-y-6">
                {TARGET_PROFILE.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 group/item">
                    <div className="mt-1.5 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-emerald-500 group-hover/item:text-black transition-colors duration-300">
                      <Check className="w-3 h-3 text-emerald-400 group-hover/item:text-black" strokeWidth={3} />
                    </div>
                    <p className="text-lg text-gray-300 font-light leading-relaxed group-hover/item:text-white transition-colors duration-300">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CARD: NOT RIGHT */}
          <div className="relative bg-[#0A0A0A] rounded-[2.5rem] p-10 md:p-12 border border-white/5 flex flex-col hover:border-white/10 transition-colors duration-500">
            <div className="relative z-10 flex flex-col h-full">
              {/* Card Header */}
              <div className="flex items-start justify-between mb-10 pb-8 border-b border-white/5">
                <h3 className="text-2xl md:text-3xl font-medium text-gray-200 tracking-tight leading-tight max-w-[80%]">
                  This Internship May Not Be Right If You…
                </h3>
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/5 text-gray-400 flex-shrink-0 mt-1">
                   <AlertCircle className="w-6 h-6" strokeWidth={1.5} />
                </div>
              </div>

              {/* List */}
              <div className="space-y-6">
                {NON_TARGET_PROFILE.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1.5 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/5">
                      <X className="w-3 h-3 text-gray-500" strokeWidth={3} />
                    </div>
                    <p className="text-lg text-gray-500 font-light leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* --- FOOTER STATEMENT --- */}
        <div className="mt-24 text-center border-t border-white/5 pt-12">
          <p className="text-xl text-gray-500 font-light italic">
            "We believe the right fit matters more than mass participation."
          </p>
        </div>

      </div>
    </section>
  );
}