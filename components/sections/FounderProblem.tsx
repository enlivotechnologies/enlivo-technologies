/**
 * components/sections/FounderProblem.tsx
 *
 * DESIGN: Premium 1+4 Grid Layout with Section Header.
 * STYLE: White background, thin borders, static cards (no hover effects), centered typography.
 */

"use client";

import Image from "next/image";
import { UserX, ZapOff, Hourglass, ShieldAlert, AlertCircle } from "lucide-react";

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
    <section className="bg-[#FFFFFF] py-24 lg:py-32">
      <div className="max-w-[105rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- SECTION HEADER --- */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700 uppercase tracking-wider mb-8">
             <AlertCircle className="w-3.5 h-3.5 text-gray-600" />
             <span>The Reality</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-black tracking-[-0.02em] leading-[1.15] mb-8">
            Building a product is hard.<br className="hidden md:block" />
            <span className="text-gray-900">Hiring a team shouldn&apos;t be.</span>
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Most founders get stuck managing people instead of building their vision.<br className="hidden md:block" />
            The traditional hiring model is fundamentally broken.
          </p>
        </div>

        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* --- LEFT: MAIN FEATURE CARD (Spans 5 Columns) --- */}
          <div className="lg:col-span-5 relative bg-[#111111] rounded-[2.5rem] overflow-hidden min-h-[500px] lg:h-auto border border-gray-200">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="https://res.cloudinary.com/dqmryiyhz/image/upload/v1768631808/career_k5rv6v.jpg"
                alt="Founder looking stressed"
                fill
                className="object-cover object-center opacity-70"
              />
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.1] mb-6 drop-shadow-lg">
                Why most founder-led products fail
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed max-w-md font-light drop-shadow-md">
                It forces visionaries to become project managers, leading to burnout, technical debt, and stalled growth.
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
                  className="bg-white rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between h-full min-h-[280px] border border-gray-200"
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