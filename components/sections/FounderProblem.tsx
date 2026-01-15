"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, AlertCircle, Clock, ShieldOff } from "lucide-react";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const problems = [
  {
    icon: X,
    text: "Freelancers disappear",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    icon: AlertCircle,
    text: "Agencies oversell and underdeliver",
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    icon: Clock,
    text: "Founders waste months managing tech instead of business",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    icon: ShieldOff,
    text: "No clear ownership when things break",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
];

export function FounderProblem() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const problemsRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Animate heading
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      // Animate problems with stagger
      if (problemsRef.current?.children) {
        tl.fromTo(
          problemsRef.current.children,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }

      // Animate solution
      tl.fromTo(
        solutionRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 lg:py-24 bg-white overflow-hidden"
      aria-labelledby="founder-problem-heading"
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FFA500]/3 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-red-500/3 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            ref={headingRef}
            id="founder-problem-heading"
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-[family-name:var(--font-neue-montreal)] text-[#1a1a1a] leading-[1.15] tracking-tight opacity-0 max-w-3xl mx-auto"
          >
            Why Most Founder-Led Products Fail
          </h2>
        </div>

        {/* Problems Grid */}
        <div
          ref={problemsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-12 md:mb-16 max-w-4xl mx-auto"
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-100 rounded-lg p-5 md:p-6 hover:border-gray-200 hover:shadow-md transition-all duration-300 opacity-0"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                
                <div className="flex items-start gap-3 md:gap-4">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-lg ${problem.bgColor} ${problem.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  
                  {/* Text */}
                  <p className="text-sm md:text-base font-medium text-[#1a1a1a] leading-relaxed pt-0.5">
                    {problem.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Solution Section */}
        <div
          ref={solutionRef}
          className="relative max-w-3xl mx-auto text-center opacity-0"
        >
          {/* Premium card with gradient border */}
          <div className="relative bg-gradient-to-br from-[#FFA500]/8 via-white to-white rounded-xl p-6 md:p-8 border border-[#FFA500]/15 shadow-lg shadow-[#FFA500]/5">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFA500]/25 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFA500]/25 to-transparent" />
            
            <div className="space-y-3 md:space-y-4">
              <p className="text-base md:text-lg lg:text-xl font-light text-[#5a5a5a] leading-relaxed">
                Enlivo exists to remove this chaos.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-xl md:text-2xl lg:text-3xl font-[family-name:var(--font-neue-montreal)] text-[#1a1a1a] font-medium">
                <span>One founder.</span>
                <span className="hidden md:inline text-[#FFA500]">•</span>
                <span>One team.</span>
                <span className="hidden md:inline text-[#FFA500]">•</span>
                <span className="text-[#FFA500]">Clear ownership.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
