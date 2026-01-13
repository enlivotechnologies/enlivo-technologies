"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      
      {/* -------------------------------------------------------------------------
          PREMIUM BACKGROUND EFFECTS
          Subtle dot pattern + vignette + radial glow for depth
      -------------------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dot Pattern */}
        <div 
          className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60" 
          aria-hidden="true"
        />
        {/* Radial Fade (Vignette) - makes the center pop */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,white_100%)] opacity-80" />
        
        {/* Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-50/40 blur-[120px] rounded-full mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        
        {/* 1. STATUS BADGE */}
        <div className="inline-flex items-center justify-center mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
           <div className="inline-flex items-center gap-2 px-3 py-1.5 ">
             <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
             </span>
             <span className="text-[10px] font-medium text-gray-500 tracking-widest uppercase">Accepting New Projects</span>
           </div>
        </div>

        {/* 2. HEADING */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-[#1a1a1a] leading-[1.15] mb-6 drop-shadow-sm animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
          Let’s Build Your System Right
        </h2>
        
        {/* 3. SUBHEADING */}
        <p className="text-sm md:text-base lg:text-lg text-[#5a5a5a] leading-relaxed max-w-2xl mx-auto mb-8 text-balance ">
          A focused discussion with senior engineers to assess feasibility, reduce risk, and define a clear technical path forward.
        </p>

        {/* 4. CTA ACTIONS */}
        <div className="flex flex-col items-center gap-5 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
           
           {/* Primary Button */}
           <Link
             href="/contact"
             className="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-[#2563EB] text-white rounded-full text-[15px] font-semibold tracking-wide transition-all duration-300 hover:bg-[#1d4ed8] hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/20 active:scale-95 ring-offset-2 focus:ring-2 ring-blue-500"
           >
             <span>Schedule Technical Discussion</span>
             <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
           </Link>

           {/* Trust Text */}
           <div className="flex items-center gap-2 text-[13px] text-gray-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-gray-300" />
              <span>30-minute feasibility review • No sales pressure</span>
           </div>
        </div>

      </div>
    </section>
  );
}