/**
 * components/sections/FounderProblem.tsx
 *
 * UPDATES FOR PREMIUM UI:
 * - High-Density Blueprint Padding: Significantly reduced the inner horizontal padding across all grid cells (`px-6 lg:px-8`).
 * - Flawless Vertical Alignment: By bringing the text much closer to the dashed border, it creates that tight, premium bento-box aesthetic seen in top-tier SaaS designs.
 * - Uniform Grid Snapping: Every single section (from the Hero down to the dark mode Solution) now aligns on the exact same vertical axis, exactly offset from the bounding box.
 */

"use client";

import { useEffect, useRef } from "react";
import { 
  X, 
  Check, 
  ArrowRight,
  UserX,
  Shuffle,
  Clock,
  ShieldAlert
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function FounderProblem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const realityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reality-item", {
        scrollTrigger: {
          trigger: realityRef.current,
          start: "top 85%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white pt-0 pb-0 overflow-hidden font-sans">
      
      {/* --- 1. TOP SECTION (Heading & Pitch) --- */}
      <div className="w-full border-b border-dashed border-black/15 px-4 md:px-8">
        <div className="max-w-[85rem] mx-auto border-x border-dashed border-black/15">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y divide-dashed lg:divide-y-0 lg:divide-x divide-black/15">
            
            {/* LEFT: Heading (Ultra-tight padding to hug the border) */}
            <div className="py-10 lg:py-8 px-6 lg:px-6 flex flex-col justify-center"> 
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.05]">
                Why Most Agencies <br className="hidden lg:block" />
                Fail Founders?
              </h2>
            </div>

            {/* RIGHT: Sales Pitch & Wow Sentence */}
            <div className="py-10 lg:py-8 px-6 lg:px-6 flex flex-col justify-center h-full">
              <div className="relative max-w-xl">
                 
              <div className="text-[11px] md:text-[12px] font-medium text-[#2563EB] flex items-center gap-2 uppercase">
                <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                You've heard this promise?
              </div>
                 <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-black leading-snug tracking-tight mb-2">
                   "We'll build your MVP in <span className="text-red-600 font-medium">12 weeks</span> for <span className="text-red-600 font-medium">$60k</span>."
                 </h3>

                 <p className="text-base lg:text-[1em] text-[#8E95A3] leading-relaxed font-light">
                 A pitch that sounds great until you're 4 months in, over budget, and holding code no senior engineer would touch.
                 </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* --- 2. THE REALITY (Architectural Grid) --- */}
      <div ref={realityRef} className="w-full bg-white flex flex-col">
        
        {/* HORIZONTAL HEADER BAND */}
        <div className="w-full border-b border-dashed border-black/15 px-4 md:px-8">
          <div className="max-w-[85rem] mx-auto border-x border-dashed border-black/15">
            <div className="py-4 lg:py-5 px-6 lg:px-8 flex items-center gap-3">
               <div className="w-2 h-2 rounded-full bg-[#E03A26]"></div>
               <p className="text-[11px] md:text-[12px] font-medium text-[#E03A26] uppercase">
                 Then Reality Hits:
               </p>
            </div>
          </div>
        </div>

        {/* GRID (Forced perfect 2-line text for absolute symmetry) */}
        <div className="w-full border-b border-dashed border-black/15 px-4 md:px-8">
          <div className="max-w-[85rem] mx-auto border-x border-dashed border-black/15">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y divide-dashed md:divide-y-0 md:divide-x divide-black/15">
              {[
                { w: "Weeks 1-4", t: <>"Still finalizing scope." Meetings replace progress. Nothing is built</> },
                { w: "Weeks 5-8", t: <>Junior developers shipped. The senior who sold you is gone.</> },
                { w: "Weeks 9-12", t: <>Minor issues. Just 2 more weeks. (Third time saying this.)</> },
                { w: "Weeks 13-16", t: <>You launch. It breaks on day one. They blame your infrastructure.</> },
              ].map((item, i) => (
                <div key={i} className="reality-item py-8 lg:py-10 px-6 lg:px-8 flex flex-col justify-start h-full">
                  <div className="flex items-center justify-between mb-8">
                     <span className="text-[10px] lg:text-[11px] font-semibold text-[#8E95A3] uppercase tracking-tight">
                       {item.w}
                     </span>
                     <X size={16} className="text-[#E03A26]" strokeWidth={1.5} />
                  </div>
                  <p className="text-[1.25rem] lg:text-[1.35rem] font-medium text-gray-900 leading-[1.3]">
                    {item.t}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- 3. FINAL COST FOOTER (Ultra-Tight, Minimalist Line) --- */}
        <div className="w-full border-b border-dashed border-black/15 bg-white overflow-hidden px-4 md:px-8">
          <div className="max-w-[85rem] mx-auto border-x border-dashed border-black/15">
            <div className="py-5 lg:py-6 px-6 lg:px-8 flex justify-end items-center">
               
               <div className="flex flex-row items-center gap-3 md:gap-4 whitespace-nowrap">
                 <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-tight leading-none">
                 The Real Cost: <span className="text-red-600 font-medium">$80k+</span> spent. <span className="text-red-600 font-medium">6 months</span> lost. Back to square one.
                 </p>
                 
               </div>

            </div>
          </div>
        </div>

      </div>

      {/* --- 4. THE 4 VILLAINS (Full Width Horizontal Band & Dashed Grid) --- */}
      <div className="w-full bg-white flex flex-col">
        
        {/* HORIZONTAL HEADER BAND */}
        <div className="w-full border-b border-dashed border-black/15 px-4 md:px-8">
          <div className="max-w-[85rem] mx-auto border-x border-dashed border-black/15">
          <div className="text-[11px] md:text-[12px] font-medium text-[#2563EB] flex items-center gap-2 uppercase px-6 lg:px-8 pt-5 pb-2 lg:pb-5">
                <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                The 4 Common Problems
              </div>
           
          </div>
        </div>

        {/* GRID (Forced perfect 2-line descriptions) */}
        <div className="w-full px-4 md:px-8">
          <div className="max-w-[85rem] mx-auto border-x border-dashed border-black/15">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y divide-dashed md:divide-y-0 md:divide-x divide-black/15">
              {[
                { 
                  icon: UserX,
                  title: "They Disappear", 
                  text: <>You raise a bug. Silence. You follow up. More silence. The code is yours to figure out.</>
                },
                { 
                  icon: Shuffle, 
                  title: "You Get Juniors, Not Experts", 
                  text: <>The senior developer who impressed you in the sales call? He won't write a single line of your code</>
                },
                { 
                  icon: Clock, 
                  title: "Your Launch Date Keeps Moving", 
                  text: <>Every sprint slips. Every deadline moves. "Almost done" is their permanent status.</>
                },
                { 
                  icon: ShieldAlert, 
                  title: "Zero Accountability", 
                  text: <>Bugs are your fault. Delays are your fault. You pay twice to fix what should have worked the first time.</>
                },
              ].map((card, i) => (
                <div key={i} className="py-8 lg:py-10 px-6 lg:px-8 flex flex-col justify-start h-full">
                  
                  {/* Minimalist icon box */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-[0.8rem] border border-black/15 bg-white text-black mb-6">
                    <card.icon size={20} strokeWidth={1.25} />
                  </div>
                  
                  <h4 className="text-lg lg:text-[1.15rem] font-medium text-black mb-3">
                    {card.title}
                  </h4>
                  <p className="text-[14px] lg:text-[15px] text-[#8E95A3] leading-relaxed">
                    {card.text}
                  </p>
                  
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* --- 5. THE SOLUTION (Dark Mode - Full Grid Layout with White Text) --- */}
      <div className="w-full bg-[#0A0A0A] border-t border-dashed border-white/15 relative overflow-hidden px-4 md:px-8">
         
         {/* Premium Subtle Glow Effect */}
         <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-[120px] -translate-y-1/2 pointer-events-none"></div>

         <div className="max-w-[85rem] mx-auto relative z-10 border-x border-dashed border-white/15">
           
           {/* Main Grid: Splits the section into Left (Title) and Right (Features Box Grid) */}
           <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-dashed divide-white/15">
             
             {/* LEFT SECTION: Title & CTA (Tighter inner padding) */}
             <div className="flex flex-col items-start justify-center py-12 lg:py-16 px-6 lg:px-8 h-full">
             <div className="text-[11px] md:text-[12px] font-medium text-[#2563EB] flex items-center gap-2 uppercase mb-2">
                <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                The Enlivo Way.
              </div>
               
               <h3 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-12 lg:mb-16 tracking-tight ">
                 We Built Enlivo <br/> To Fix This.
               </h3>

               <a href="#audit" className="inline-flex items-center gap-3 text-white font-medium text-[11px] md:text-[12px] font-medium tracking-tight uppercase border-b border-white/20 pb-2 hover:border-white transition-all group lg:mt-auto">
                 See how we work <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
               </a>
             </div>

            {/* RIGHT SECTION: Perfect 2x2 Bento Grid for Features (Tighter inner padding) */}
<div className="grid grid-cols-1 sm:grid-cols-2 h-full">
    {[
      { 
        text: "Senior-led (No junior handoffs)", 
        desc: "Every line of code is written and reviewed by engineers with 5+ years of product experience. No shortcuts.",
        border: "border-b border-dashed border-white/15 sm:border-r" 
      },
      { 
        text: "Weekly demos (Real progress)", 
        desc: "Every Friday you see what was built. No status updates. No guessing. Just working software.",
        border: "border-b border-dashed border-white/15" 
      },
      { 
        text: "Fixed milestones (Pay as delivered)", 
        desc: "You never pay for a milestone until it's live and approved by you. Your money is always tied to real output.",
        border: "border-b border-dashed border-white/15 sm:border-b-0 sm:border-r" 
      },
      { 
        text: "Complete handoff (You own it)", 
        desc: "Full source code, documentation, and deployment access — handed to you at the end. No lock-in. Ever.",
        border: "" 
      }
    ].map((item, i) => (
      <div 
        key={i} 
        className={`flex flex-col items-start gap-4 py-8 lg:py-10 px-6 lg:px-8 ${item.border}`}
      >
        {/* Minimalist circular checkmark */}
        <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center flex-shrink-0 mb-2">
           <Check size={14} className="text-white" strokeWidth={1.5} />
        </div>
        {/* Feature text */}
        <span className="text-white text-[14px] lg:text-[15px] font-medium tracking-wide leading-snug">
          {item.text}
        </span>
        {/* Description text */}
        <span className="text-white/50 text-[12px] lg:text-[13px] font-normal leading-relaxed -mt-2">
          {item.desc}
        </span>
      </div>
    ))}
</div>

           </div>
         </div>
      </div>

    </section>
  );
}