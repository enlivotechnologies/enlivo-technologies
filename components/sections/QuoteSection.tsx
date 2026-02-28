/**
 * components/sections/QuoteSection.tsx
 *
 * PURPOSE: Premium quote section with testimonial-style layout.
 * STYLE: Clean, minimalist design with large quote and attribution.
 */

"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface QuoteSectionProps {
  eyebrow?: string;
  quote?: string;
  authorName?: string;
  authorTitle?: string;
  companyName?: string;
}

export function QuoteSection({
  eyebrow = "Who This Is For",
  quote = "Most product ideas fail due to fragmented execution, unclear ownership, and founders forced into managing technology.",
  authorName = "DANIEL CHEN",
  authorTitle = "CEO & Founder",
  companyName = "Enlivo",
}: QuoteSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLParagraphElement>(null);
  const quoteRef = useRef<HTMLHeadingElement>(null);
  const authorRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    let ctx: gsap.Context | null = null;
    let timer: NodeJS.Timeout | null = null;

    timer = setTimeout(() => {
      if (!sectionRef.current) return;

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        // Animate eyebrow
        if (eyebrowRef.current) {
          tl.fromTo(
            eyebrowRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6 },
          );
        }

        // Animate quote
        if (quoteRef.current) {
          tl.fromTo(
            quoteRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8 },
            "-=0.3"
          );
        }

        // Animate author and logo
        if (authorRef.current && logoRef.current) {
          tl.fromTo(
            [authorRef.current, logoRef.current],
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
            "-=0.4"
          );
        }
      }, sectionRef);
    }, 100);

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
      if (ctx) {
        try {
          ctx.revert();
        } catch (error) {
          // Silently handle cleanup errors
        }
      }
    };
  }, [isMounted]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "#F5F5F0" }}
      aria-label="Quote section"
    >
      {/* Main Container - Matching OurVision width */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
        <div>
          {/* Eyebrow Text - Top Left */}
          <p
            ref={eyebrowRef}
            className="text-xs md:text-sm font-sans font-light text-black uppercase tracking-wider mb-12 md:mb-16 opacity-0"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            {eyebrow}
          </p>

          {/* Main Content - Flex Layout */}
          <div className="relative flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-16">
            {/* Left Column - Large Quote */}
            <div className="flex-1 lg:max-w-3xl">
              <h2
                ref={quoteRef}
                className="text-2xl md:text-4xl lg:text-5xl font-normal text-[#1a1a1a] leading-[1.15] mb-0 opacity-0 whitespace-pre-line"
                style={{
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                }}
              >
                {quote}
              </h2>
            </div>

            {/* Right Column - Author Info & Logo (Positioned aligned with quote) */}
            <div className="flex flex-col items-start lg:items-start space-y-6 lg:pt-2">
              {/* Author Info */}
              <div ref={authorRef} className="opacity-0">
                <p 
                  className="text-base md:text-lg font-sans font-normal text-black mb-1.5 tracking-tight"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {authorName}
                </p>
                <p 
                  className="text-base md:text-lg font-sans font-normal text-black tracking-tight"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {authorTitle}
                </p>
              </div>

              {/* Company Logo */}
              <div
                ref={logoRef}
                className="flex items-center gap-2.5 opacity-0"
              >
                {/* Stylized Checkmark Logo */}
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-black"
                  >
                    <path
                      d="M8 16L14 22L24 10"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {/* Company Name */}
                <span 
                  className="text-lg md:text-xl font-bold text-black tracking-tight"
                  style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                >
                  {companyName}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
