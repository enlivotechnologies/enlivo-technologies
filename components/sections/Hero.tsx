/**
 * components/sections/Hero.tsx
 *
 * PURPOSE: Hero section with H1 heading and award-winning GSAP animations.
 * WHY: First content users see, contains primary H1 for SEO.
 *
 * SEO CRITICAL:
 * - H1 should contain primary keyword
 * - Only ONE H1 per page
 * - Description should be compelling and include secondary keywords
 * - Image alt text should be descriptive for accessibility & SEO
 *
 * ANIMATIONS:
 * - Premium left-to-right text reveal with smooth blur effect
 * - Award-winning fluidity and timing
 */

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface HeroProps {
  /** H1 heading - primary SEO keyword should be included */
  heading?: string;
  /** Optional subheading/eyebrow text */
  subheading?: string;
  /** Description paragraph - include secondary keywords naturally */
  description?: string;
  /** Hero image URL */
  imageUrl?: string;
  /** Hero image alt text for accessibility & SEO - be descriptive */
  imageAlt?: string;
}

// Split text into individual characters wrapped in spans
function SplitText({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <>
      {children.split("").map((char, index) => (
        <span
          key={index}
          className={`inline-block char-reveal ${className}`}
          style={{
            opacity: 0,
            transform: "translateY(20px)",
            filter: "blur(8px)",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </>
  );
}

export function Hero({
  subheading,
  description = "Backend, frontend, and UI delivered by a founder-led engineering team that owns execution from day one.",
  imageUrl = "https://res.cloudinary.com/dqmryiyhz/image/upload/v1768502352/8a3628a7-3d06-480c-970b-b2c4b9720897_mpofoq.jpg",
  imageAlt = "Enlivo Technologies team collaborating on secure software systems, enterprise platforms, and AI-powered solutions for modern businesses",
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingLine1Ref = useRef<HTMLSpanElement>(null);
  const headingLine2Ref = useRef<HTMLSpanElement>(null);
  const highlightBoxRef = useRef<HTMLSpanElement>(null);
  const asteriskRef = useRef<SVGSVGElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const ctx = gsap.context(() => {
      // Get all character spans
      const line1Chars =
        headingLine1Ref.current?.querySelectorAll(".char-reveal");
      const line2Chars =
        headingLine2Ref.current?.querySelectorAll(".char-reveal");
      const highlightChars =
        highlightBoxRef.current?.querySelectorAll(".char-reveal");

      // Create timeline for sequenced animations
      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      // Animate first line - smooth character reveal with blur
      if (line1Chars) {
        tl.to(line1Chars, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.5,
          stagger: 0.02,
          ease: "power3.out",
        });
      }

      // Show asterisk with smooth rotation
      tl.fromTo(
        asteriskRef.current,
        { opacity: 0, scale: 0.5, rotation: -90 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "back.out(2)",
        },
        "-=0.35"
      );

      // Animate "products" word - fast and smooth
      if (line2Chars) {
        tl.to(
          line2Chars,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.4,
            stagger: 0.025,
            ease: "power3.out",
          },
          "-=0.4"
        );
      }

      // Animate highlighted box - smooth scale
      tl.fromTo(
        highlightBoxRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.4, ease: "power2.inOut" },
        "-=0.25"
      );

      // Reveal characters inside highlight box - fast reveal
      if (highlightChars) {
        tl.to(
          highlightChars,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.35,
            stagger: 0.018,
            ease: "power3.out",
          },
          "-=0.25"
        );
      }

      // Animate description - elegant fade
      tl.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 15, filter: "blur(4px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2"
      );

      // Animate image - cinematic reveal
      tl.fromTo(
        imageRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-36 lg:pt-48 bg-black overflow-hidden"
      aria-labelledby="hero-heading"
      itemScope
      itemType="https://schema.org/WebPageElement"
    >
      {/* Text Content - Constrained Width */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Text Section - Single Column Layout for SEO */}
        <div className="max-w-4xl mb-12 lg:mb-16">
          {/* Optional Subheading/Eyebrow */}
          {subheading && (
            <p className="text-sm md:text-base text-[#2563EB] font-medium uppercase tracking-wider mb-4">
              {subheading}
            </p>
          )}

          <h1
            id="hero-heading"
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white tracking-tight leading-[1.15] mb-6"
            itemProp="headline"
          >
            {/* Top Line - Character by character reveal */}
            <span ref={headingLine1Ref} className="block whitespace-nowrap">
              <SplitText>We Help Founders Turn Ideas</SplitText>
            </span>

            {/* Bottom Line: "into Reliable Products — Without Hiring a Tech Team" */}
            <span className="inline-flex flex-nowrap items-center gap-x-2 md:gap-x-3 mt-1">
              {/* "into Reliable Products — Without" text */}
              <span ref={headingLine2Ref} className="whitespace-nowrap">
                <SplitText>into Reliable Products - Without</SplitText>
              </span>

              {/* Highlighted Box with "businesses." */}
              <span
                ref={highlightBoxRef}
                className="px-2 md:px-4 py-0.5 rounded-lg bg-[#FFA500] text-[#0F172A] whitespace-nowrap"
                style={{
                  transform: "scaleX(0)",
                  transformOrigin: "left center",
                }}
              >
                <SplitText>businesses.</SplitText>
              </span>
            </span>
          </h1>

          {/* Description - SEO optimized, placed below heading */}
          <p
            ref={descriptionRef}
            className="mt-6 md:mt-8 text-base md:text-lg text-white/50 leading-relaxed max-w-3xl opacity-0"
            itemProp="description"
            suppressHydrationWarning
          >
            {description}
          </p>
        </div>
      </div>

      {/* Full-Width Image Section - Premium Design - Edge to Edge */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        {/* Premium gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-10 pointer-events-none" />
        
        <figure
          ref={imageRef}
          className={`relative w-full h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] overflow-hidden transition-opacity duration-700 ${
            isMounted ? "opacity-100" : "opacity-0"
          }`}
          suppressHydrationWarning
        >
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            className="object-cover object-center"
            priority
            itemProp="image"
            sizes="100vw"
            quality={95}
          />
          
          {/* Premium overlay effects for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
          
          {/* Subtle radial vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.1)_100%)] z-10 pointer-events-none" />
        </figure>
      </div>
    </section>
  );
}
