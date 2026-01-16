/**
 * components/sections/FounderProblem.tsx
 *
 * DESIGN: "Bento Grid" layout with premium Apple-style aesthetics.
 * ANIMATION: Staggered entry, hover lift effects, and smooth typography reveals.
 */

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { UserX, ZapOff, Hourglass, ShieldAlert, CheckCircle2 } from "lucide-react";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PROBLEMS = [
  {
    icon: UserX,
    title: "Freelancers Disappear",
    description: "Ghosting is common. You're left with half-finished code and zero accountability.",
  },
  {
    icon: ZapOff,
    title: "Agencies Oversell",
    description: "They pitch the 'A-Team' but assign junior devs who learn on your dime.",
  },
  {
    icon: Hourglass,
    title: "Time Sink",
    description: "Founders waste 40% of their week managing dev tickets instead of selling.",
  },
  {
    icon: ShieldAlert,
    title: "Zero Ownership",
    description: "When things break, the freelancer blames the API, and the agency blames the specs.",
  },
];

export function FounderProblem() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Animation (Fade Up)
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // 2. Grid Cards Animation (Staggered Pop-in)
      if (gridRef.current?.children) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
            },
          }
        );
      }

      // 3. Solution Banner Animation (Expand Width)
      gsap.fromTo(
        solutionRef.current,
        { width: "80%", opacity: 0, y: 40 },
        {
          width: "100%",
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: solutionRef.current,
            start: "top 90%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-[105rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div ref={headerRef} className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight leading-[1.1] mb-6">
            Why Most Founder-Led Products Fail
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
            The traditional hiring model is broken. It forces founders to become project managers instead of visionaries.
          </p>
        </div>

        {/* --- BENTO GRID OF PAIN --- */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto mb-24"
        >
          {PROBLEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative bg-[#F5F5F7] rounded-[2rem] p-8 md:p-10 lg:p-12 transition-all duration-500 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1"
              >
                {/* Icon Circle */}
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <Icon strokeWidth={1.5} className="w-6 h-6 text-black" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-medium text-black tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-500 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Gradient Overlay (Only visible on hover) */}
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-black/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* --- THE SOLUTION (High Contrast) --- */}
        <div className="flex justify-center w-full">
          <div
            ref={solutionRef}
            className="relative w-full max-w-6xl bg-black rounded-[2.5rem] overflow-hidden px-6 py-16 md:py-20 lg:py-24 text-center shadow-2xl"
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm font-medium backdrop-blur-sm border border-white/10 mb-2">
                <CheckCircle2 size={16} className="text-white" />
                <span>The Enlivo Way</span>
              </div>
              
              <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-tight">
                One Founder. One Team. <br className="hidden md:block" />
                <span className="text-gray-400">Clear Ownership.</span>
              </h3>
              
              <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
                We replace the chaos of fragmented hiring with a unified engineering partner that owns execution from day one.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}