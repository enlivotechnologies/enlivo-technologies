/**
 * components/sections/TrustStatement.tsx
 *
 * PURPOSE: Mission/trust statement section below hero.
 * WHY: Establishes credibility and communicates Enlivo Technologies' core value proposition.
 *
 * SEO OPTIMIZATIONS:
 * ├─ Semantic HTML: Proper heading hierarchy (H2 follows H1 in Hero)
 * ├─ Schema.org: Organization markup with name, url, slogan, description, knowsAbout
 * ├─ ARIA: aria-labelledby, aria-describedby for accessibility
 * ├─ Keywords: enterprise software, security-first, production-ready, AI solutions
 * └─ Strong tag: Emphasizes brand name "Enlivo" for search engines
 *
 * TARGET KEYWORDS:
 * - Primary: "enterprise software development", "secure digital platforms"
 * - Secondary: "AI solutions", "cloud architecture", "digital transformation"
 * - Brand: "Enlivo Technologies" - https://www.enlivotechnologies.com
 *
 * GOOGLE RANKING FACTORS ADDRESSED:
 * - E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 * - Semantic relevance through Schema.org structured data
 * - Core Web Vitals friendly (minimal DOM, efficient animations)
 *
 * DESIGN: Minimal, enterprise-grade. "The work speaks."
 */

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function TrustStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Animate accent line
      tl.fromTo(
        accentRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        { scaleX: 1, duration: 0.6, ease: "power3.inOut" }
      );

      // Animate heading
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.3"
      );

      // Animate paragraph
      tl.fromTo(
        paragraphRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#F9FAF8]"
      aria-labelledby="trust-heading"
      aria-describedby="trust-description"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* Schema.org Organization markup for SEO */}
      <meta itemProp="name" content="Enlivo Technologies" />
      <meta itemProp="url" content="https://www.enlivotechnologies.com" />
      <meta
        itemProp="knowsAbout"
        content="Enterprise Software Development, AI Solutions, Cloud Architecture, Cybersecurity, Digital Transformation"
      />

      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative accent line - hidden from screen readers */}
        {/* <div
          ref={accentRef}
          className="w-12 h-[3px] bg-[#2563EB] mb-8 origin-left"
          style={{ transform: "scaleX(0)" }}
          aria-hidden="true"
          role="presentation"
        /> */}

        {/* H2 - Secondary heading supporting SEO hierarchy */}
        <h2
          ref={headingRef}
          id="trust-heading"
          className="text-center text-3xl md:text-5xl font-medium text-[#1a1a1a] tracking-tight leading-[1.15] mb-6 opacity-0"
          itemProp="slogan"
        >
          {/* Modern businesses run on software & reliability is non-negotiable. */}  We are committed to enabling individuals and businesses to build reliable digital systems, operate with confidence, and achieve long-term growth through secure, scalable technology.

        </h2>

        {/* Value proposition paragraph with semantic keywords */}
        {/* <p
          ref={paragraphRef}
          id="trust-description"
          className="text-sm md:text-base lg:text-lg text-[#5a5a5a] leading-relaxed max-w-4xl opacity-0"
          itemProp="description"
        >
          That&apos;s why enterprises partner with{" "}
          <strong className="text-[#1a1a1a] font-medium">Enlivo</strong> to
          design, build, and secure the systems they depend on every day.
          Through disciplined engineering, security-first architecture, and
          practical AI, complex ideas are transformed into production-ready
          platforms that deliver real business outcomes.
        </p> */}
      </div>
    </section>
  );
}
