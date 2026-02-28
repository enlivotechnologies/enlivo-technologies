/**
 * components/sections/TrustStatement.tsx
 *
 * UPDATES:
 * - Profile Image: Reduced size to `w-20 h-20` and made it `rounded-full` (Circular).
 * - Author Block (Left): Aligned Image and Text side-by-side for a compact, professional look.
 * - Content: Added "Founder & CEO" and "8+ Years Building SaaS Products" exactly as requested.
 */

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Lazy load GSAP
let gsapPromise: Promise<any> | null = null;
let scrollTriggerPromise: Promise<any> | null = null;

function loadGSAP() {
  if (!gsapPromise) {
    gsapPromise = import("gsap").then((mod) => mod.gsap);
  }
  return gsapPromise;
}

function loadScrollTrigger() {
  if (!scrollTriggerPromise) {
    scrollTriggerPromise = import("gsap/ScrollTrigger").then((mod) => mod.ScrollTrigger);
  }
  return scrollTriggerPromise;
}

export function TrustStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const guaranteeRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  const [isMounted, setIsMounted] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    if (typeof window !== "undefined") {
      setIsMobileDevice(window.innerWidth < 768);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    Promise.all([loadGSAP(), loadScrollTrigger()]).then(([gsap, ScrollTrigger]) => {
      gsap.registerPlugin(ScrollTrigger);
      setIsMounted(true);
    });
  }, [isHydrated]);

  useEffect(() => {
    if (!isMounted || !sectionRef.current) return;

    let ctx: any = null;

    Promise.all([loadGSAP(), loadScrollTrigger()]).then(([gsap]) => {
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });

        // 1. Heading Fade In
        if (headingRef.current) {
          tl.fromTo(
            headingRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
          );
        }

        // 2. Guarantee Section Fade In
        if (guaranteeRef.current) {
          tl.fromTo(
            guaranteeRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            "-=0.6"
          );
        }

        // 3. List Items Stagger
        if (listRef.current) {
          tl.fromTo(
            listRef.current.children,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" },
            "-=0.4"
          );
        }

        // 4. Quote Fade In
        if (quoteRef.current) {
          tl.fromTo(
            quoteRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1.0, ease: "power3.out" },
            "-=0.2"
          );
        }

      }, sectionRef);
    });

    return () => ctx?.revert();
  }, [isMounted, isMobileDevice]);

  const guarantees = [
    {
      title: "SENIOR ENGINEERS ONLY",
      desc: "Every developer has 5+ years experience. No juniors learning on your budget.",
    },
    {
      title: "FLUENT ENGLISH COMMUNICATION",
      desc: "Daily Slack updates. Weekly video calls. Zero communication gaps.",
    },
    {
      title: "YOUR TIMEZONE AVAILABILITY",
      desc: "We work 12pm-9pm IST = overlap with US/EU hours. Available when you need us.",
    },
    {
      title: "WEEKLY PROOF OF PROGRESS",
      desc: "Every Friday: Working demo + video walkthrough. You SEE what you're paying for.",
    },
    {
      title: "COMPLETE CODE OWNERSHIP",
      desc: "Full GitHub transfer. All documentation. You own 100%. Zero lock-in.",
    },
    {
      title: "30-DAY BUG-FIX GUARANTEE",
      desc: "Free fixes for 30 days after launch. No questions asked.",
    },
    {
      title: "MONEY-BACK PROMISE",
      desc: "Unhappy after Week 1? Full refund. We stand behind our work.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-white overflow-hidden"
      id="why-us"
    >
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* --- ROW 1: HEADLINE --- */}
        <div ref={headingRef} className="mb-12 lg:mb-16 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 tracking-tight mb-6">
            Why Choose Enlivo Over Other Dev Agencies?
          </h2>
        </div>

        {/* --- ROW 2: CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24 lg:mb-32">
          
          <div className="lg:col-span-12" ref={guaranteeRef}>
            
            <h3 className="text-[11px] md:text-[14px] uppercase font-medium text-[#2563EB] mb-2">
              Our Guarantee to you:
            </h3>
            
            {/* GRID CONTAINER */}
            <div className="overflow-hidden p-1 -m-1">
              <ul 
                ref={listRef} 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mr-[1px] -mb-[1px]"
              >
                {guarantees.map((item, idx) => {
                  const isLastItem = idx === guarantees.length - 1;

                  return (
                    <li 
                      key={idx} 
                      className={`
                        flex gap-4 items-start p-8 border-r border-gray-100
                        ${isLastItem ? "lg:col-start-2 lg:border-l border-b-0" : "border-b"} 
                      `}
                    >
                      <div className="flex-shrink-0 w-6 h-6 mt-0.5 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-[16px] mb-2">{item.title}</h4>
                        <p className="text-[15px] text-gray-600 leading-relaxed max-w-sm">{item.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* --- ROW 3: FOUNDER'S PERSONAL NOTE --- */}
        <div 
          ref={quoteRef}
          className="relative w-full max-w-[90rem] mx-auto"
        >
          {/* 1. TOP: The Quote (Right Aligned) */}
          <div className="mb-16 flex flex-col items-end">
              <p className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-gray-900 leading-[1.2] tracking-tight max-w-5xl text-right">
                “I personally lead every project. You work directly with me, not account managers or junior developers. I review every line of code before it ships.”
              </p>
          </div>

          {/* 2. BOTTOM ROW: Flex Container */}
          <div className="flex flex-col md:flex-row items-end justify-between gap-10 w-full">
            
            {/* LEFT SIDE: Author Block (Image + Text) */}
            <div className="flex flex-row items-center gap-5 text-left">
               
               {/* Profile Image (Reduced Size & Rounded) */}
               <div className="relative w-20 h-20 rounded-full overflow-hidden bg-gray-100 flex-shrink-0 ">
                  <Image
                    src="https://res.cloudinary.com/dqmryiyhz/image/upload/v1768642767/ceo_mstgxw.png"
                    alt="Akshay K - Founder & CEO"
                    fill
                    className="object-cover object-top"
                  />
               </div>

               {/* Text Details */}
               <div className="flex flex-col gap-0.5">
                   <p className="text-xl font-medium text-gray-900">
                     Akshay K
                   </p>
                   <p className="text-[11px] font-medium text-gray-400 uppercase tracking-[0.1em] mt-0.5">
                     Founder & CEO
                   </p>
                   <p className="text-[13px] text-black font-medium">
                     8+ Years Building SaaS Products
                   </p>
               </div>
            </div>

            {/* RIGHT SIDE: Social Links */}
            <div className="flex-shrink-0">
               <div className="flex items-center gap-6 text-[11px] font-medium uppercase text-black ">
                 <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
                 <span className="text-gray-300 font-light">|</span>
                 <a href="#" className="hover:text-blue-600 transition-colors">GitHub</a>
                 <span className="text-gray-300 font-light">|</span>
                 <a href="#" className="hover:text-blue-600 transition-colors">Email</a>
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}