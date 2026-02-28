/**
 * components/sections/Hero.tsx
 *
 * UPDATES:
 * - Further reduced marquee width to `max-w-lg` for a more focused, premium spotlight effect.
 * - Adjusted gap spacing to `gap-8` to maintain visual balance in the smaller container.
 */

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Lazy load GSAP
let gsapPromise: Promise<any> | null = null;

function loadGSAP() {
  if (!gsapPromise) {
    gsapPromise = import("gsap").then((mod) => mod.gsap);
  }
  return gsapPromise;
}

interface HeroProps {
  heading?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export function Hero({
  heading = "We Ship Your SaaS Product in 6-8 Weeks While You Focus on Getting Customers",
  description = "Production ready. Fully documented. Built by senior engineers who've shipped products for funded startups.",
  imageUrl = "https://cjlpsqzjtchvpckpyllb.supabase.co/storage/v1/object/public/sentia/grad10.jpeg",
  imageAlt = "Hero background gradient",
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const trustSectionRef = useRef<HTMLDivElement>(null);
  
  const [isMounted, setIsMounted] = useState(false);
  const [gsap, setGsap] = useState<any>(null);
  const [isHydrated, setIsHydrated] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    if (typeof window !== 'undefined') {
      setIsMobileDevice(window.innerWidth < 768);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    loadGSAP().then((gsapModule) => {
      setGsap(gsapModule);
      setIsMounted(true);
    });
  }, [isHydrated]);

  // GSAP animations
  useEffect(() => {
    if (!isMounted || !gsap) return;
    
    // Mobile: Show immediately
    if (isMobileDevice) {
      const refs = [headingRef, descriptionRef, buttonsRef, trustSectionRef];
      refs.forEach(ref => {
        if (ref.current) {
          ref.current.style.opacity = "1";
          ref.current.style.transform = "none";
          ref.current.style.filter = "none";
        }
      });
      return;
    }
    
    // Desktop Animation Sequence
    let ctx: any = null;
    let timer: NodeJS.Timeout | null = null;
    
    timer = setTimeout(() => {
      if (!sectionRef.current) return;
      
      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        // 1. Heading slide in
        if (headingRef.current) {
          tl.fromTo(
            headingRef.current,
            { opacity: 0, x: -30, filter: "blur(12px)" },
            { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.2, ease: "power3.out" }
          );
        }

        // 2. Description slide in
        if (descriptionRef.current) {
          tl.fromTo(
            descriptionRef.current,
            { opacity: 0, x: -20, filter: "blur(5px)" },
            { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.0 },
            "-=0.9"
          );
        }

        // 3. Buttons pop in
        if (buttonsRef.current) {
          tl.fromTo(
            buttonsRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8 },
            "-=0.7"
          );
        }

        // 4. Trust Section fade up
        if (trustSectionRef.current) {
           tl.fromTo(
            trustSectionRef.current,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.8 },
            "-=0.6"
          );
        }

      }, sectionRef);
    }, 50);

    return () => {
      if (timer) clearTimeout(timer);
      if (ctx) ctx.revert();
    };
  }, [isMounted, gsap, isMobileDevice]);

  // Marquee Content - List of countries
  const countries = [
    { flag: "🇺🇸", name: "United States" },
    { flag: "🇬🇧", name: "United Kingdom" },
    { flag: "🇩🇪", name: "Germany" },
    { flag: "🇦🇺", name: "Australia" },
    { flag: "🇨🇦", name: "Canada" },
    { flag: "🇸🇬", name: "Singapore" },
    { flag: "🇦🇪", name: "United Arab Emirates" },
    { flag: "🇫🇷", name: "France" },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .hover-pause:hover .animate-marquee {
          animation-play-state: paused;
        }
        .mask-linear-fade {
          mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
        }
      `}} />

      <section
        ref={sectionRef}
        className="relative w-full min-h-screen flex items-center overflow-hidden bg-black pt-34 md:pt-42 pb-20"
        aria-labelledby="hero-heading"
        suppressHydrationWarning
      >
        {/* 1. Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover object-center opacity-80"
            sizes="100vw"
            quality={100}
            priority
          />
        </div>

        {/* 2. Content Layer */}
        <div className="relative z-20 w-full max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16 h-full flex items-center">
          <div className="max-w-4xl flex flex-col items-start text-left">

            {/* Heading */}
            <h1
              ref={headingRef}
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.15] mb-6 opacity-0 drop-shadow-2xl"
            >
              {heading}
            </h1>

            {/* Description */}
            <p
              ref={descriptionRef}
              className="text-base sm:text-lg lg:text-xl text-[#9E9EA0] leading-relaxed max-w-2xl mb-12 opacity-0 font-light"
            >
              {description}
            </p>

            {/* Buttons */}
            <div 
              ref={buttonsRef}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full mb-16 opacity-0"
            >
              {/* Primary Button */}
              <a
                href="#audit"
                className="group flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-100 transition-all duration-300 px-8 py-3.5 rounded-full text-[15px] font-semibold min-w-[180px] shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)]"
              >
                Book Free 30-Min Audit 
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>

              {/* Secondary Button */}
              <a
                href="#how-we-work"
                className="group flex items-center justify-center gap-2 bg-white/[0.03] border border-white/10 text-white hover:bg-white/[0.08] hover:border-white/20 backdrop-blur-sm transition-all duration-300 px-8 py-3.5 rounded-full text-[15px] font-medium min-w-[180px]"
              >
                See How We Work 
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
            </div>

{/* --- MARQUEE SECTION --- */}
<div 
              ref={trustSectionRef}
              className="w-full opacity-0 pt-3 overflow-hidden"
            >
              <p className="text-[11px] uppercase tracking-tight text-[#9E9EA0] mb-4 font-semibold pl-1">
                TRUSTED BY FOUNDERS IN:
              </p>
              
              {/* Width slightly expanded if needed, keeping max-w-lg or adjusting to max-w-2xl based on your layout */}
              <div className="relative w-full max-w-2xl hover-pause mask-linear-fade">
                
                {/* 1. Softened border to white/15 for a more premium, subtle grid.
                */}
                <div className="flex w-max animate-marquee border-y border-l border-white/15 border-dashed">
                  
                  {[1, 2].map((setIndex) => (
                    <div key={setIndex} className="flex items-center">
                      
                      {countries.map((country, i) => (
                        <div 
                          key={`${setIndex}-${i}`} 
                          // Reduced padding: py-2.5 and px-5 sm:px-6
                          // Added 'antialiased' for premium font rendering
                          className="group flex items-center gap-2.5 py-2.5 px-5 sm:px-6 border-r border-white/15 border-dashed text-[#9E9EA0] font-medium whitespace-nowrap cursor-default hover:text-white hover:bg-white/[0.03] transition-all duration-300 antialiased"
                        >
                          <span className="text-lg relative top-[1px] shadow-sm grayscale-[30%] group-hover:grayscale-0 transition-all duration-300">
                            {country.flag}
                          </span>
                          <span className="text-[13px] sm:text-sm tracking-wide">
                            {country.name}
                          </span>
                        </div>
                      ))}
                      
                    </div>
                  ))}

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}