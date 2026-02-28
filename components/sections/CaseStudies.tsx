"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// --- Case Studies Data ---
const CASE_STUDIES = [
  {
    id: "01",
    client: "HealthSync",
    industry: "HealthTech",
    flag: "🇺🇸",
    country: "United States",
    title: "Patient Management Platform — from Idea to Launch in 7 Weeks",
    description:
      "A seed-stage founder needed a HIPAA-compliant patient management system. Previous agency burned $40K with nothing to show. We rebuilt from scratch and launched in 7 weeks.",
    results: [
      { metric: "7 weeks", label: "Idea to launch" },
      { metric: "$28K", label: "Total investment" },
      { metric: "2,400+", label: "Active users in month 1" },
    ],
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
    color: "#10B981",
    href: "/case-studies/healthsync",
  },
  {
    id: "02",
    client: "Fintrace",
    industry: "FinTech",
    flag: "🇬🇧",
    country: "United Kingdom",
    title: "Real-Time Financial Dashboard That Handles 50K Transactions/Day",
    description:
      "Series A fintech needed to rebuild their crumbling dashboard. We migrated 200K records with zero downtime and delivered a system that scales to 50K daily transactions.",
    results: [
      { metric: "12 weeks", label: "Full rebuild" },
      { metric: "99.97%", label: "Uptime since launch" },
      { metric: "50K+", label: "Daily transactions" },
    ],
    tags: ["React", "Python", "Redis", "AWS Lambda"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    color: "#6366F1",
    href: "/case-studies/fintrace",
  },
  {
    id: "03",
    client: "LearnHub",
    industry: "EdTech",
    flag: "🇩🇪",
    country: "Germany",
    title: "EdTech Platform Serving 15K Students Across 3 Countries",
    description:
      "A pre-seed founder in Berlin needed an MVP to pitch investors. We shipped a multi-tenant learning platform in 6 weeks. They raised €800K two months after launch.",
    results: [
      { metric: "6 weeks", label: "MVP shipped" },
      { metric: "€800K", label: "Raised post-launch" },
      { metric: "15K+", label: "Students onboarded" },
    ],
    tags: ["Next.js", "Supabase", "Stripe", "Vercel"],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop",
    color: "#F59E0B",
    href: "/case-studies/learnhub",
  },
];

export function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Card stagger animation
      const validCards = cardsRef.current.filter(Boolean);
      if (validCards.length > 0) {
        gsap.fromTo(
          validCards,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: validCards[0],
              start: "top 85%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="relative bg-black py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-16">
        {/* ─── Header ─── */}
        <div ref={headerRef} className="mb-16 md:mb-24 opacity-0">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p className="text-[#D95D39] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                CASE STUDIES
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.1]">
                Real products. Real founders.
                <br />
                <span className="text-white/50">Real results.</span>
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="group flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors duration-300 whitespace-nowrap"
            >
              View all case studies
              <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* ─── Cards Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {CASE_STUDIES.map((study, index) => (
            <div
              key={study.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative flex flex-col bg-[#111] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 opacity-0"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent" />

                {/* Top badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-xs font-semibold text-white/90 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                    {study.flag} {study.country}
                  </span>
                  <span
                    className="text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: `${study.color}20`,
                      color: study.color,
                      border: `1px solid ${study.color}30`,
                    }}
                  >
                    {study.industry}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 sm:p-7">
                {/* Client name */}
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-3">
                  {study.client}
                </p>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-medium text-white leading-snug mb-4 tracking-tight">
                  {study.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/50 leading-relaxed mb-6 flex-1">
                  {study.description}
                </p>

                {/* Results row */}
                <div className="grid grid-cols-3 gap-3 mb-6 pt-5 border-t border-white/[0.06]">
                  {study.results.map((result, i) => (
                    <div key={i} className="text-center">
                      <p
                        className="text-lg sm:text-xl font-semibold tracking-tight"
                        style={{ color: study.color }}
                      >
                        {result.metric}
                      </p>
                      <p className="text-[11px] text-white/40 mt-1 leading-tight">
                        {result.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-white/50 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA link */}
                <Link
                  href={study.href}
                  className="group/link inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors duration-300"
                >
                  Read full case study
                  <ArrowUpRight className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform duration-300" />
                </Link>
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(600px circle at 50% 0%, ${study.color}08, transparent 60%)`,
                }}
              />
            </div>
          ))}
        </div>

        {/* ─── Bottom CTA ─── */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-sm text-white/40 mb-6">
            We&apos;ve shipped 50+ products for funded startups across 4
            continents.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-100 transition-all duration-300 px-8 py-3.5 rounded-full text-[15px] font-semibold"
          >
            Start Your Project
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
