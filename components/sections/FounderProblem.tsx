/**
 * components/sections/FounderProblem.tsx
 *
 * DESIGN: Premium 1+4 Grid Layout (Vectura Style).
 * CHANGES: Removed button from left card, moved text to bottom for a cinematic look.
 */

"use client";

import Image from "next/image";
import { UserX, ZapOff, Hourglass, ShieldAlert } from "lucide-react";

const PROBLEMS = [
  {
    icon: UserX,
    title: "Freelancers Disappear",
    description:
      "Ghosting is common. You're left with half-finished code, zero documentation, and a missing developer.",
  },
  {
    icon: ZapOff,
    title: "Agencies Oversell",
    description:
      "They pitch you the 'A-Team' senior engineers but quietly swap them for juniors learning on your dime.",
  },
  {
    icon: Hourglass,
    title: "The Time Sink",
    description:
      "Founders waste 40% of their week managing Jira tickets and code reviews instead of selling the product.",
  },
  {
    icon: ShieldAlert,
    title: "Zero Ownership",
    description:
      "When things break, the freelancer blames the API, the agency blames the specs, and you pay for the fix.",
  },
];

export function FounderProblem() {
  return (
    <section className="bg-black py-24 lg:py-32">
      <div className="max-w-[105rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Layout: 12 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* --- LEFT: MAIN FEATURE CARD (Spans 5 Columns) --- */}
          <div className="lg:col-span-5 relative bg-[#111111] rounded-[2.5rem] overflow-hidden min-h-[500px] lg:h-auto group">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="https://res.cloudinary.com/dqmryiyhz/image/upload/v1768631808/career_k5rv6v.jpg"
                alt="Founder looking stressed"
                fill
                className="object-cover object-center opacity-70 transition-transform duration-700 group-hover:scale-105"
              />
              {/* Premium Gradient Overlay (Darker at bottom for text readability) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            {/* Content Overlay - Positioned at Bottom */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
                Why most founder-led products fail
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed max-w-md font-light drop-shadow-md">
                The traditional hiring model is broken. It forces visionaries to become project managers, leading to burnout and stalled growth.
              </p>
            </div>
          </div>

          {/* --- RIGHT: 2x2 GRID (Spans 7 Columns) --- */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROBLEMS.map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between h-full min-h-[280px] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div>
                    <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 border border-gray-100">
                      <Icon className="w-7 h-7 text-black" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-medium text-black mb-4 tracking-tight">
                      {problem.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed font-light text-[16px]">
                      {problem.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}