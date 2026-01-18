"use client";

/**
 * FAQSection Component
 * * DESIGN: Premium Editorial Aesthetic.
 * * TYPOGRAPHY: Mixed Sans-Serif + Serif headline.
 * * PALETTE: Black, Cool Gray, and Terracotta (#D97757).
 */

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "Language and Prerequisites?",
    answer: "Basic computer knowledge is enough. We start from fundamentals and move to advanced concepts step by step. The program is conducted in English.",
  },
  {
    question: "Will I get recordings if I miss a class?",
    answer: "Yes. All live sessions are recorded and accessible throughout the program.",
  },
  {
    question: "How long will I have access to the course content?",
    answer: "You get access for the entire internship duration and post-completion support resources.",
  },
  {
    question: "Is this course job-guaranteed?",
    answer: "No false promises. We focus on skills, projects, and readiness — results depend on effort.",
  },
  {
    question: "What projects will I build?",
    answer: "You'll build real-world projects including full-stack CRUD applications with authentication, dashboards with real-time data, REST APIs with database integration, and a final capstone project. Every project follows industry standards: clean architecture, version control, reviews, and deployment.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- EDITORIAL HEADER --- */}
        <div className="mb-20 text-center">
          <div className="inline-block mb-4">
             <span className="py-1 px-3 rounded-full border border-gray-200 bg-gray-50 text-[10px] font-mono uppercase tracking-widest text-gray-500">
               Support
             </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-black tracking-tighter leading-[1.05]">
            Frequently asked <br className="md:hidden"/>
            <span className="font-serif italic font-light text-[#D97757]">Questions</span>
          </h2>
        </div>

        {/* --- PREMIUM ACCORDION --- */}
        <div className="space-y-4">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={cn(
                  "group rounded-2xl border transition-all duration-300 ease-out",
                  isOpen 
                    ? "bg-gray-50 border-gray-200 shadow-sm" 
                    : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm"
                )}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between py-6 px-6 md:px-8 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={cn(
                    "text-lg md:text-xl font-medium tracking-tight transition-colors duration-300",
                    isOpen ? "text-black" : "text-gray-700 group-hover:text-black"
                  )}>
                    {item.question}
                  </span>
                  
                  {/* Custom Animated Icon */}
                  <div className={cn(
                    "relative flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 shrink-0 ml-4",
                    isOpen 
                      ? "bg-black border-black text-white rotate-180" 
                      : "bg-white border-gray-200 text-gray-400 group-hover:border-gray-300 group-hover:text-black"
                  )}>
                    {/* Conditional rendering for smoother visual swap or CSS rotation */}
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Content Wrapper */}
                <div
                  className={cn(
                    "grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-8 pt-0">
                      <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-3xl">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom Support Line */}
        <div className="mt-16 text-center">
           <p className="text-gray-500 font-light">
             Have more questions? <a href="#" className="text-black font-medium border-b border-black/20 hover:border-black transition-colors">Chat with our team</a>
           </p>
        </div>

      </div>
    </section>
  );
}