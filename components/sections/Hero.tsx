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
  description = "Designing and engineering websites, applications, enterprise platforms, and AI-powered solutions that companies rely on to operate, scale, and grow with confidence.",
  imageUrl = "https://res.cloudinary.com/dqmryiyhz/image/upload/v1768460210/hero3_jlvgha.png",
  imageAlt = "Enlivo Technologies team collaborating on secure software systems, enterprise platforms, and AI-powered solutions for modern businesses",
}: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingLine1Ref = useRef<HTMLSpanElement>(null);
  const headingLine2Ref = useRef<HTMLSpanElement>(null);
  const highlightBoxRef = useRef<HTMLSpanElement>(null);
  const asteriskRef = useRef<SVGSVGElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLElement>(null);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    setImageVisible(true);
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
      className="relative pt-36 lg:pt-48 bg-white overflow-hidden"
      // bg-[#F9FAF8]
      aria-labelledby="hero-heading"
      itemScope
      itemType="https://schema.org/WebPageElement"
    >
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Text Section - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-20 mb-12 lg:mb-16 items-start">
          {/* Left: H1 Heading */}
          <div>
            {/* Optional Subheading/Eyebrow */}
            {subheading && (
              <p className="text-sm md:text-base text-[#2563EB] font-medium uppercase tracking-wider mb-4">
                {subheading}
              </p>
            )}

            <h1
              id="hero-heading"
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#1a1a1a] tracking-tight leading-[1.15]"
              itemProp="headline"
            >
              {/* Top Line - Character by character reveal */}
              <span ref={headingLine1Ref} className="block whitespace-nowrap">
                <SplitText>We build secure software</SplitText>
              </span>

              {/* Bottom Line: systems for modern + Box */}
              <span className="inline-flex flex-nowrap items-center gap-x-2 md:gap-x-3 mt-1">
                {/* "systems for modern" text */}
                <span ref={headingLine2Ref} className="whitespace-nowrap">
                  <SplitText>systems for modern</SplitText>
                </span>

                {/* Highlighted Box with "businesses." */}
                <span
                  ref={highlightBoxRef}
                  className="px-2 md:px-4 py-0.5 rounded-lg bg-[#E2E8F0] text-[#0F172A] whitespace-nowrap"
                  style={{
                    transform: "scaleX(0)",
                    transformOrigin: "left center",
                  }}
                >
                  <SplitText>businesses.</SplitText>
                </span>
              </span>
            </h1>
          </div>

          {/* Right: Description */}
          <div className="lg:pt-4 lg:flex lg:flex-col lg:justify-start">
            <p
              ref={descriptionRef}
              className="text-sm md:text-base lg:text-lg text-[#5a5a5a] leading-relaxed lg:max-w-md lg:ml-auto"
              style={{ opacity: 0 }}
              itemProp="description"
            >
              {description}
            </p>
          </div>
        </div>

        {/* Image Section */}
        <figure
          ref={imageRef}
          className="relative w-full rounded-2xl overflow-hidden mb-12 lg:mb-16"
          style={{ opacity: imageVisible ? 1 : 0 }}
        >
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={1920}
            height={1080}
            className="w-full h-auto object-cover rounded-2xl"
            priority
            itemProp="image"
          />
        </figure>
      </div>
    </section>
  );
}
