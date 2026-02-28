"use client";

/**
 * FAQSection Component
 * * DESIGN: Premium Split Layout with Considered Restraint
 * * LAYOUT: Left column (static reassurance), Right column (accordion)
 * * PALETTE: Dark with intentional hierarchy
 */

import React, { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "Who is this internship designed for?",
    answer: "College students serious about software engineering, beginners who want strong fundamentals (not shortcuts), and self-learners stuck in tutorial hell. This internship is for those ready to commit daily effort and take responsibility for real work.",
  },
  {
    question: "Do I need prior experience to apply?",
    answer: "Basic computer knowledge is enough. We start from fundamentals and move to advanced concepts step by step. What matters more is your commitment to learning and willingness to put in consistent effort throughout the program.",
  },
  {
    question: "What is the expected time commitment?",
    answer: "This is a full-time commitment over 6 months. You'll work on real projects, receive feedback, and participate in code reviews. Expect to invest significant daily hours — similar to what you'd commit in an actual engineering role.",
  },
  {
    question: "How does mentorship and feedback work?",
    answer: "You receive regular feedback on your work — what's good, what needs improvement, and how to fix it. Senior engineers guide you through decisions, review your code, and help you understand professional standards. Support is provided, but effort and responsibility are expected from you.",
  },
  {
    question: "What kind of projects will I work on?",
    answer: "Real-world projects similar to what professionals do in companies. You'll build full-stack applications with authentication, work with databases and APIs, contribute to existing systems, and complete a capstone project that demonstrates your skills.",
  },
  {
    question: "Is this internship paid or unpaid?",
    answer: "This is an unpaid educational internship focused on building real-world engineering skills and experience. You receive mentorship, structured learning, and portfolio-ready work — valuable preparation for a professional engineering career.",
  },
  {
    question: "Does this guarantee a job or placement?",
    answer: "No. We focus on skills, projects, and readiness — results depend on effort. We don't make false promises. Instead, we prepare you with real experience and the ability to demonstrate your capabilities to potential employers.",
  },
  {
    question: "What happens if I struggle during the program?",
    answer: "Struggling is part of learning. We provide support through mentorship, code reviews, and guidance. However, if you're consistently not meeting expectations or not putting in the required effort, we'll have honest conversations about whether this is the right fit.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-black border-t border-white/10">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- SPLIT LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Static Reassurance */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-[1.1]">
                Before You <span className="text-[#8B5CF6]">Apply</span>
              </h2>
              <p className="text-base text-gray-400 font-light leading-relaxed">
                Common questions, answered clearly.
              </p>
            </div>
            
            <div className="space-y-4 pt-4">
              <p className="text-base text-gray-300 font-light leading-relaxed">
                This internship is a serious commitment. These answers will help you decide if it's the right fit for you.
              </p>
              
              <div className="pt-2">
                <a 
                  href="#" 
                  className="group inline-flex items-center gap-2 text-white font-medium hover:text-gray-200 transition-colors duration-200 text-sm"
                >
                  <span>Still have questions? Talk to us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Accordion */}
          <div className="lg:col-span-8">
            <div className="space-y-2">
              {FAQ_DATA.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={cn(
                      "group rounded-lg border transition-all duration-200 ease-out",
                      isOpen 
                        ? "bg-[#0A0A0A] border-white/12" 
                        : "bg-[#0A0A0A] border-white/6 hover:border-white/10"
                    )}
                  >
                    {/* Trigger Button */}
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full flex items-center justify-between py-4 px-5 text-left focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className={cn(
                        "text-base font-medium tracking-tight transition-colors duration-200 leading-relaxed pr-4",
                        isOpen ? "text-white" : "text-gray-300 group-hover:text-white"
                      )}>
                        {item.question}
                      </span>
                      
                      {/* Chevron Icon */}
                      <ChevronDown 
                        className={cn(
                          "w-4 h-4 text-gray-500 transition-all duration-200 shrink-0",
                          isOpen && "transform rotate-180 text-gray-300"
                        )} 
                        strokeWidth={1.5} 
                      />
                    </button>

                    {/* Content Wrapper */}
                    <div
                      className={cn(
                        "grid transition-all duration-200 ease-out overflow-hidden",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-4 pt-0">
                          <p className="text-sm text-gray-400 font-light leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* --- REASSURANCE STRIP --- */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <p className="text-lg text-[#F9FAF0] font-light leading-relaxed">
            Already applied or still deciding?
            </p>
            <p className="text-base text-[#B5B9A6] font-light leading-relaxed max-w-2xl mx-auto">
            Use this only if you have a specific question that isn’t answered above.
            </p>
            <div className="pt-2">
              <a 
                href="#" 
                className="group inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors duration-200"
              >
                Get Clarification
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
