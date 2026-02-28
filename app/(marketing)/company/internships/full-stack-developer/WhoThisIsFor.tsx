"use client";

/**
 * WhoThisIsFor Component
 * 
 * Section clarifying who this internship is for
 * and who it's not for.
 */

import React from "react";
import { CheckCircle2, XCircle } from "lucide-react";

const FOR_WHO = [
  "College students serious about software engineering",
  "Beginners who want strong fundamentals (not shortcuts)",
  "Self-learners stuck in tutorial hell",
];

const NOT_FOR_WHO = [
  "People looking for easy certificates",
  "People who don't want to code daily",
];

export function WhoThisIsFor() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight mb-6 leading-[1.1]">
            Who This Internship Is For
          </h2>
        </div>

        {/* Content Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* For Who - Left Column */}
          <div className="space-y-4">
            {FOR_WHO.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-green-50 rounded-2xl p-6 border border-green-100">
                <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" strokeWidth={2.5} />
                <p className="text-lg text-black leading-relaxed font-light">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Not For Who - Right Column */}
          <div className="space-y-4">
            {NOT_FOR_WHO.map((item, index) => (
              <div key={index} className="flex items-start gap-4 bg-red-50 rounded-2xl p-6 border border-red-100">
                <XCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" strokeWidth={2.5} />
                <p className="text-lg text-black leading-relaxed font-light">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
