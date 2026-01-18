"use client";

/**
 * WhyInternshipsFail Component
 * * UPDATES: Content updated to specific "Real Work" messaging.
 * * STYLE: Compact Cinematic Dark Mode Bento Grid (Static, High-Fidelity).
 */

import React from "react";
import Image from "next/image";

export function WhyInternshipsFail() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-medium text-black tracking-tight leading-[1.1] mb-4">
              Why This Internship Is Different
            </h2>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed font-light max-w-xl">
            Because watching tutorials doesn’t prepare you for real work.
            </p>
          </div>
        </div>

        {/* --- COMPACT CINEMATIC GRID --- */}
        {/* Fixed height of 480px on large screens for a sleek, widescreen feel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:h-[480px] items-stretch mb-12">
          
          {/* --- LEFT CARD: RED (How Most Internships Fail) --- */}
          <div className="lg:col-span-5 relative rounded-xl overflow-hidden bg-black border border-white/10 h-full min-h-[360px]">
            {/* Background Image */}
            <Image 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200" 
              alt="Coding struggle"
              fill
              className="object-cover opacity-60"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

            {/* Content */}
            <div className="relative z-10 h-full p-8 flex flex-col justify-end">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-200 backdrop-blur-md mb-5 w-fit">
                <span className="text-[10px] font-bold uppercase tracking-widest">COMMON LIMITATIONS</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-medium text-white mb-3 tracking-tight">
              Beyond Tutorials. Into Real Work.
              </h3>
              
              <div className="h-0.5 w-10 bg-red-600 mb-4" />
              
              <div className="space-y-2">
                <p className="text-white font-medium text-sm leading-relaxed">
                  Real work doesn’t follow a fixed path — and neither do we.
                </p>
                <p className="text-gray-400 leading-relaxed font-light text-sm">
                  Most internships focus on guided tutorials. In reality, work involves unclear requirements and iteration. This internship introduces you to that reality gradually and responsibly.
                </p>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN STACK (7 Cols) --- */}
          <div className="lg:col-span-7 flex flex-col gap-4 h-full">
            
            {/* TOP CARD: GREEN (How You Actually Learn Here) */}
            <div className="flex-1 relative rounded-xl overflow-hidden bg-black border border-white/10">
               <Image 
                 src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200" 
                 alt="Mentorship"
                 fill
                 className="object-cover opacity-50"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

               <div className="relative z-10 h-full p-8 flex flex-col justify-center">
                  <div className="max-w-lg">
                     <div className="mb-3">
                        <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest">How You Actually Learn Here</span>
                     </div>
                     <h3 className="text-2xl font-medium text-white mb-2 tracking-tight">
                     Guided Work, With Accountability.
                     </h3>
                     <p className="text-white text-sm font-medium mb-1">
                        You're supported — but you're never passive.
                     </p>
                     <p className="text-gray-400 text-sm font-light leading-relaxed max-w-md">
                        You work on real tasks with clear expectations. Mentors guide you through decisions, improvements, and mistakes — so learning happens through doing.
                     </p>
                  </div>
               </div>
            </div>

            {/* BOTTOM CARD: BLUE (What Makes It Industry-Relevant) */}
            <div className="flex-1 relative rounded-xl overflow-hidden bg-black border border-white/10">
               <Image 
                 src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200" 
                 alt="Real World Scale"
                 fill
                 className="object-cover opacity-50"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

               <div className="relative z-10 h-full p-8 flex flex-col justify-center">
                  <div className="max-w-lg">
                     <div className="mb-3">
                        <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest">Industry Relevant</span>
                     </div>
                     <h3 className="text-2xl font-medium text-white mb-2 tracking-tight">
                     From Development to Production Thinking.
                     </h3>
                     <p className="text-white text-sm font-medium mb-1">
                        Understanding how work reaches real users.
                     </p>
                     <p className="text-gray-400 text-sm font-light leading-relaxed max-w-md">
                        You learn how work moves beyond your laptop — how changes are reviewed, tested, and maintained. This builds professional thinking, not just technical familiarity.
                     </p>
                  </div>
               </div>
            </div>

          </div>
        </div>

        {/* --- OPTIONAL CLOSING LINE --- */}
        <div className="text-center pt-16 pb-8">
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            "This internship is designed to help you think and work like a professional — step by step, with guidance."
          </p>
        </div>

      </div>
    </section>
  );
}