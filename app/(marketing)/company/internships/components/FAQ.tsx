"use client";

/**
 * FAQ Component
 * 
 * Frequently asked questions section with accordion-style
 * answers to help potential interns make informed decisions.
 */

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "Is this internship paid or unpaid?",
    answer: "This is a paid internship. You'll receive compensation while gaining hands-on experience, mentorship, and real project work. We believe in valuing your time and contributions as you build your portfolio and professional capabilities.",
  },
  {
    question: "Is this internship remote, onsite, or hybrid?",
    answer: "The internship is conducted remotely, allowing you to work from anywhere. We maintain consistent communication and collaboration through structured workflows, regular check-ins, and virtual team sessions.",
  },
  {
    question: "What is the time commitment per week?",
    answer: "We expect a consistent commitment of 20-25 hours per week. This includes active development work, code reviews, mentorship sessions, and learning activities. Consistency and quality matter more than exact hours logged.",
  },
  {
    question: "Do I need prior experience to apply?",
    answer: "Some foundational knowledge is helpful, but we welcome motivated learners at different stages. What matters most is your willingness to learn, commitment to improvement, and openness to feedback. We're looking for serious learners ready to grow.",
  },
  {
    question: "How is selection done?",
    answer: "Selection is based on your application, motivation, and alignment with our program values. We look for committed learners who are serious about growth, not just certificate seekers. The process includes reviewing your application and may involve a brief conversation to ensure mutual fit.",
  },
  {
    question: "Will I get a certificate after completion?",
    answer: "Yes, you'll receive a Certificate of Completion after successfully meeting program expectations and standards. However, the real value is in the practical skills, real-world experience, and portfolio work you'll build during the internship.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight mb-6 leading-[1.1]">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Clear answers to help you make an informed decision.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3">
            {FAQ_DATA.map((item, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div
                  key={index}
                  className={cn(
                    "group border border-gray-200 rounded-xl overflow-hidden transition-all duration-300",
                    isOpen ? "bg-gray-50 border-gray-300" : "bg-white hover:border-gray-300"
                  )}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between p-6 md:p-7 text-left focus:outline-none rounded-xl transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-base md:text-lg font-medium text-black pr-8 leading-relaxed">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <ChevronDown
                        className={cn(
                          "w-5 h-5 text-gray-500 transition-all duration-300",
                          isOpen && "transform rotate-180 text-black"
                        )}
                        strokeWidth={2}
                      />
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div
                    id={`faq-answer-${index}`}
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="px-6 md:px-7 pb-6 md:pb-7">
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light pt-2">
                        {item.answer}
                      </p>
                    </div>
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
