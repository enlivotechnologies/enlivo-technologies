/**
 * components/sections/OurVision.tsx
 *
 * PURPOSE: Vision statement with key metrics/statistics.
 * WHY: Builds credibility with quantifiable achievements and communicates company vision.
 *
 * SEO OPTIMIZATIONS (HIGH PRIORITY):
 * ├─ Schema.org: Organization + AboutPage markup for rich snippets
 * ├─ Semantic HTML: Proper H2 hierarchy, article/section landmarks
 * ├─ ARIA: aria-labelledby, aria-describedby for accessibility
 * ├─ Hidden Content: sr-only keyword-rich content for crawlers
 * ├─ Meta Tags: itemProp for name, description, knowsAbout, foundingDate
 * └─ Statistics: Structured data for social proof
 *
 * TARGET KEYWORDS (Google Ranking Priority):
 * - Primary: "secure software systems", "enterprise software development", "scalable platforms"
 * - Secondary: "digital transformation", "security-first design", "production-ready software"
 * - Long-tail: "custom enterprise software development company", "secure web application development"
 * - Brand: "Enlivo Technologies" - https://www.enlivotechnologies.com
 *
 * GOOGLE RANKING FACTORS ADDRESSED:
 * - E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
 * - Semantic relevance through Schema.org structured data
 * - Core Web Vitals friendly (efficient animations, no layout shifts)
 * - Mobile-first responsive design
 *
 * ANIMATIONS:
 * - Staggered text reveal on scroll
 * - Statistics animate in with stagger
 */

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Statistic data structure
interface Stat {
  value: string;
  label: string;
}

// Company statistics - update these with real data
const STATS: Stat[] = [
  {
    value: "20+",
    label: "Projects shipped",
  },
  {
    value: "15+",
    label: "Client partnerships",
  },
  {
    value: "$1M+",
    label: "Revenue enabled for clients",
  },
  {
    value: "95%",
    label: "Client retention rate",
  },
];

export function OurVision() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Animate label
      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );

      // Animate heading
      tl.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.3"
      );

      // Animate description
      tl.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.4"
      );

      // Animate stats with stagger
      tl.fromTo(
        statsRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="vision-heading"
      aria-describedby="vision-seo-content"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* ============================================
          SCHEMA.ORG STRUCTURED DATA (SEO Priority)
          Helps Google understand organization details
          ============================================ */}
      <meta itemProp="name" content="Enlivo Technologies" />
      <meta itemProp="url" content="https://www.enlivotechnologies.com" />
      <meta
        itemProp="logo"
        content="https://www.enlivotechnologies.com/images/navbar/EnlivoLogo.png"
      />
      <meta itemProp="foundingDate" content="2025" />
      {/* numberOfEmployees removed from meta tags - must use QuantitativeValue object in JSON-LD schema */}
      <meta
        itemProp="knowsAbout"
        content="Enterprise Software Development, Secure Web Applications, Scalable Cloud Platforms, Digital Transformation, AI-Powered Solutions, Cybersecurity, Custom Software Engineering"
      />
      <meta
        itemProp="description"
        content="Enlivo architects the secure digital backbone for modern global business. Precision engineering for mission critical platforms, cloud infrastructure, and AI."
      />

      {/* ============================================
          HIDDEN SEO CONTENT (HIGH PRIORITY)
          Keyword-rich content for search crawlers
          sr-only: visible to screen readers & bots
          ============================================ */}
      <div className="sr-only" id="vision-seo-content">
        <h3>Enlivo Technologies - Enterprise Software Development Company</h3>
        <p>
          Enlivo Technologies is a leading enterprise software development
          company specializing in secure, scalable software systems for modern
          businesses. Our vision is to shape a future where organizations can
          rely on technology with complete confidence.
        </p>
        <p>
          We build custom enterprise software solutions including: secure web
          applications, cloud-native platforms, AI-powered business systems,
          enterprise resource planning (ERP) integrations, and digital
          transformation solutions. Our security-first approach ensures
          production-ready software that protects sensitive business data.
        </p>
        <p>
          Services: Custom Software Development, Enterprise Application
          Development, Secure Web Application Development, Cloud Platform
          Engineering, API Development and Integration, AI and Machine Learning
          Solutions, Cybersecurity Consulting, Digital Transformation Strategy.
        </p>
        <p>
          Industries served: Financial Services, Healthcare Technology,
          E-commerce Platforms, SaaS Companies, Enterprise Organizations,
          Startups and Scale-ups.
        </p>
        <p>
          Why choose Enlivo: Disciplined engineering practices, security-first
          architecture, scalable system design, production-ready code quality,
          long-term technology partnerships.
        </p>
      </div>

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Content Layout */}
        <div className="flex flex-col items-center text-center">
          
          {/* Eyebrow Label - Centered at Top */}
            <span
              ref={labelRef}
            className="text-[11px] font-medium tracking-[0.2em] text-[#1a1a1a] opacity-50 uppercase mb-6"
            style={{ opacity: 0 }}
            >
            /OUR VISION/
            </span>

          {/* Vision Headline - Refined Typography */}
            <h2
              ref={headingRef}
              id="vision-heading"
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-[#1a1a1a] leading-[1.15] mb-6 tracking-[-0.02em] max-w-4xl mx-auto opacity-0"
              itemProp="slogan"
            >
            Whether it&apos;s a digital platform, an enterprise system, or an AI powered product - we design and engineer solutions that work.
            </h2>

          {/* Supporting Description - Single Premium Paragraph */}
            <p
              ref={descriptionRef}
            className="text-sm md:text-base text-[#1a1a1a] leading-[1.7] font-normal max-w-3xl mx-auto mb-16 opacity-0"
            >
            Our focus is on building secure, scalable, and reliable digital products that organizations can trust today and as they grow. Good design isn&apos;t just about looks—it&apos;s about solving real problems and getting results.
            </p>

          {/* Statistics Grid - Premium Full Width Spacing */}
            <div
              ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 lg:gap-20 xl:gap-24 w-full max-w-6xl mx-auto mt-4"
              role="list"
              aria-label="Enlivo Technologies company statistics and achievements"
            >
              {STATS.map((stat, index) => (
                <div
                  key={index}
                className="flex flex-col items-center opacity-0"
                  role="listitem"
                >
                {/* Stat Value - Refined Size */}
                  <span
                  className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#2563EB] leading-none mb-3 tracking-[-0.02em]"
                    aria-label={`${stat.value} ${stat.label}`}
                  >
                    {stat.value}
                  </span>
                {/* Stat Label - Refined Typography */}
                <span className="text-xs md:text-sm font-medium text-[#1a1a1a] opacity-80 text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

        </div>
      </div>
    </section>
  );
}
