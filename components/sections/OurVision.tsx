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
    value: "17+",
    label: "Projects delivered",
  },
  {
    value: "$1.2M+",
    label: "Client revenue impacted",
  },
  {
    value: "97%",
    label: "Client retention",
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
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }
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
      className="py-24 lg:py-32 bg-white"
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
        content="https://www.enlivotechnologies.com/logo.png"
      />
      <meta itemProp="foundingDate" content="2020" />
      <meta itemProp="numberOfEmployees" content="10-50" />
      <meta
        itemProp="knowsAbout"
        content="Enterprise Software Development, Secure Web Applications, Scalable Cloud Platforms, Digital Transformation, AI-Powered Solutions, Cybersecurity, Custom Software Engineering"
      />
      <meta
        itemProp="description"
        content="Enlivo Technologies builds secure, scalable software systems—websites, applications, and enterprise platforms—that help organizations operate reliably and grow sustainably."
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Left Label + Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-24">
          {/* Left: Section Label */}
          <div className="lg:col-span-2 pt-2">
            <span
              ref={labelRef}
              className="text-xs font-medium tracking-widest block text-black opacity-0 uppercase"
            >
              /Our Vision/
            </span>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-10">
            {/* Vision Headline */}
            <h2
              ref={headingRef}
              id="vision-heading"
              className="text-2xl md:text-4xl lg:text-5xl font-medium text-[#1a1a1a] leading-[1.15] mb-6 tracking-tight w-full opacity-0"
              itemProp="slogan"
            >
              Whether it&apos;s a digital platform, an enterprise system, or an
              AI powered product - we design and engineer solutions that work.
            </h2>

            {/* Supporting Description */}
            <p
              ref={descriptionRef}
              className="text-base md:text-lg text-[#5a5a5a] leading-relaxed mb-16 w-full max-w-none opacity-0"
            >
              Our focus is on building secure, scalable, and reliable digital
              products that organizations can trust today and as they grow. Good
              design isn&apos;t just about looks. It&apos;s about solving real
              problems and getting results.
            </p>

            {/* Statistics Grid - Social Proof for SEO Trust Signals */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-12"
              role="list"
              aria-label="Enlivo Technologies company statistics and achievements"
              itemProp="aggregateRating"
              itemScope
              itemType="https://schema.org/AggregateRating"
            >
              {STATS.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col opacity-0"
                  role="listitem"
                  itemProp="ratingValue"
                >
                  {/* Stat Value */}
                  <span
                    className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#2563EB] leading-none mb-3 tracking-tight"
                    aria-label={`${stat.value} ${stat.label}`}
                  >
                    {stat.value}
                  </span>
                  {/* Stat Label */}
                  <span className="text-sm font-medium text-[#1a1a1a] opacity-60">
                    {stat.label}
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
