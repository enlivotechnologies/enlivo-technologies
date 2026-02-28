/**
 * app/(marketing)/case-studies/CaseStudiesPage.tsx
 *
 * Premium story-mode case studies page.
 * DESIGN: White bg, black text, editorial magazine feel.
 * Each case study reads like a short documentary — problem, approach, results.
 *
 * STRUCTURE:
 * 1. Hero — editorial headline
 * 2. Case Study Chapters — immersive story cards
 * 3. CTA — dark section
 */

"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════
   CASE STUDY DATA — Deep Story Format
   ═══════════════════════════════════════════════ */

interface CaseStudy {
  id: string;
  number: string;
  client: string;
  industry: string;
  flag: string;
  country: string;
  tagline: string;
  heroImage: string;
  timeline: string;

  /* The Story */
  backstory: string;
  problem: {
    title: string;
    narrative: string[];
    painPoints: string[];
  };
  approach: {
    title: string;
    narrative: string[];
    timeline: { week: string; title: string; detail: string }[];
  };
  results: {
    metrics: { value: string; label: string }[];
    aftermath: string;
    quote: { text: string; author: string; role: string };
  };

  tags: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "healthsync",
    number: "01",
    client: "HealthSync",
    industry: "HealthTech",
    flag: "\u{1F1FA}\u{1F1F8}",
    country: "United States",
    tagline: "From burned budget to live product in 7 weeks",
    heroImage: "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772106731/Meet_the_unlikely_veteran-turned-doctor_shaping_Amazon_s_health_plans_-_STAT_ncxx4c.jpg",
    timeline: "7 weeks",

    backstory: "Sarah Mitchell had spent two years as a nurse practitioner in Boston before she saw the gap: small clinics were drowning in paper charts, missed follow-ups, and disconnected systems. She quit her job, raised a pre-seed round, and set out to build HealthSync.",

    problem: {
      title: "A $40K lesson in choosing the wrong agency",
      narrative: [
        "Sarah\u2019s first hire was a boutique development agency that came highly recommended on LinkedIn. They quoted 12 weeks and $35K. It seemed reasonable.",
        "Six months later, she had burned through $40K and had nothing to show for it. The prototype crashed during her biggest investor demo. The code had no tests, no documentation, and the agency\u2019s lead developer had quietly left the company two months in. When Sarah asked for a handoff, they sent her a ZIP file with no README.",
        "With her runway shrinking and her next board meeting 8 weeks away, Sarah needed a team that could actually ship \u2014 not just talk about shipping.",
      ],
      painPoints: [
        "$40K burned with nothing shippable",
        "6 months wasted \u2014 runway shrinking fast",
        "Investor demo failed publicly",
        "Zero documentation or handoff from previous agency",
      ],
    },

    approach: {
      title: "We rebuilt from zero \u2014 and shipped in 7 weeks",
      narrative: [
        "We didn\u2019t start by writing code. We started by sitting in Sarah\u2019s kitchen in Boston for two days, watching her walk through the actual clinic workflows on a whiteboard. We mapped every user journey, identified the 6 features that would validate her business model, and cut everything else.",
        "Then we built. Every Friday, Sarah got a working demo on staging, a Loom walkthrough, and a live call. No surprises. No \u201Cwe\u2019re almost there.\u201D Just working software, every single week.",
      ],
      timeline: [
        { week: "Week 1", title: "Discovery + Architecture", detail: "User research, database schema, API contracts \u2014 everything approved before a single line of code." },
        { week: "Weeks 2\u20135", title: "Core Platform Build", detail: "Patient management, appointment scheduling, medication tracking, and provider dashboard \u2014 with weekly demos every Friday." },
        { week: "Week 6", title: "HIPAA Compliance + Testing", detail: "Full HIPAA compliance audit, end-to-end encryption, load testing at 10x expected traffic." },
        { week: "Week 7", title: "Launch + Pilot", detail: "Production deployment on AWS, onboarded 3 pilot clinics, and trained staff \u2014 all in 5 days." },
      ],
    },

    results: {
      metrics: [
        { value: "7 weeks", label: "Idea to launch" },
        { value: "$28K", label: "Total investment" },
        { value: "2,400+", label: "Active users in month 1" },
        { value: "99.9%", label: "Uptime since day one" },
      ],
      aftermath: "Three months after launch, Sarah closed a $1.2M seed round. The investors told her it was the cleanest product demo they\u2019d seen from an early-stage startup. HealthSync now serves 14 clinics across Massachusetts.",
      quote: {
        text: "Enlivo did in 7 weeks what my previous agency couldn\u2019t do in 6 months. The difference was night and day \u2014 they actually listened, cut the fluff, and shipped something real. I went from dreading board meetings to looking forward to them.",
        author: "Sarah Mitchell",
        role: "Founder & CEO, HealthSync",
      },
    },

    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS", "HIPAA"],
  },
  {
    id: "fintrace",
    number: "02",
    client: "Fintrace",
    industry: "FinTech",
    flag: "\u{1F1EC}\u{1F1E7}",
    country: "United Kingdom",
    tagline: "Rebuilt a crumbling dashboard to handle 50K daily transactions",
    heroImage: "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772110911/finance_hm55yh.jpg",
    timeline: "12 weeks",

    backstory: "James Park had built Fintrace from his flat in Shoreditch into a financial analytics startup serving 200+ small businesses across the UK. After raising a \u00A34M Series A, he was supposed to scale. Instead, he was firefighting.",

    problem: {
      title: "Their dashboard was a ticking time bomb",
      narrative: [
        "The core analytics dashboard \u2014 the product that investors had funded \u2014 was built by a previous CTO who left six months earlier. It was a monolithic PHP application running on a single EC2 instance. No tests. No CI/CD. Manual deployments at 2 AM.",
        "Every time traffic crossed 5,000 concurrent users, the dashboard crashed. Customer support tickets tripled. The database had 200,000+ financial records with no backup strategy and no migration plan. James\u2019s engineering team of four was spending 60% of their time fixing bugs instead of building features.",
        "His Series A investors were starting to ask uncomfortable questions about the technology. James knew that if the next quarter didn\u2019t show dramatic improvement, the Series B conversation would be dead on arrival.",
      ],
      painPoints: [
        "Dashboard crashed above 5K concurrent users",
        "200K financial records with no migration strategy",
        "60% of engineering time spent firefighting bugs",
        "Series A investors losing confidence in the technology",
      ],
    },

    approach: {
      title: "Zero-downtime migration + performance-first rebuild",
      narrative: [
        "The scariest part wasn\u2019t building the new system \u2014 it was migrating 200,000 financial records without losing a single transaction. We designed a parallel-run architecture: the old system kept serving users while the new one was built alongside it, with every database write replicated to both.",
        "We built the new dashboard with WebSocket connections for real-time updates, Redis caching for sub-200ms queries, and a microservices architecture on AWS Lambda that auto-scales with demand. James\u2019s existing team worked with us daily \u2014 we didn\u2019t replace them, we empowered them.",
      ],
      timeline: [
        { week: "Weeks 1\u20132", title: "Deep Audit + Architecture", detail: "Mapped every API endpoint, database table, and user flow. Designed the new microservices architecture with James\u2019s team." },
        { week: "Weeks 3\u20138", title: "Parallel Build", detail: "Built the new system alongside the old one. Shadow traffic testing ensured identical results. Weekly demos with the engineering team." },
        { week: "Weeks 9\u201310", title: "Data Migration", detail: "Automated migration scripts moved 200K+ records. Reconciliation reports validated every single transaction \u2014 zero discrepancies." },
        { week: "Weeks 11\u201312", title: "Gradual Rollout", detail: "Shifted 10% of traffic, then 25%, then 50%, then 100%. Monitored everything in real-time. Full cutover completed with zero downtime." },
      ],
    },

    results: {
      metrics: [
        { value: "12 weeks", label: "Full rebuild shipped" },
        { value: "99.97%", label: "Uptime since launch" },
        { value: "50K+", label: "Daily transactions" },
        { value: "<200ms", label: "Average query time" },
      ],
      aftermath: "Six months after the rebuild, Fintrace\u2019s customer base grew from 200 to 850 businesses. James\u2019s engineering team went from spending 60% of their time on bugs to spending 80% on new features. The Series B conversation? It happened three months ahead of schedule.",
      quote: {
        text: "The migration was the part I was most scared of - 200K financial records with zero room for error. Enlivo pulled it off with zero downtime and zero data loss. Our investors went from asking hard questions to writing bigger checks.",
        author: "James Park",
        role: "CEO, Fintrace",
      },
    },

    tags: ["React", "Python", "Redis", "AWS Lambda", "WebSocket"],
  },
  {
    id: "learnhub",
    number: "03",
    client: "LearnHub",
    industry: "EdTech",
    flag: "\u{1F1E9}\u{1F1EA}",
    country: "Germany",
    tagline: "MVP shipped in 6 weeks, raised \u20AC800K two months later",
    heroImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop",
    timeline: "6 weeks",

    backstory: "Lena Weber spent 8 years as a high school teacher in Berlin before she saw the future of education changing faster than schools could keep up. She quit teaching, wrote a 40-page business plan, and started knocking on investors\u2019 doors. The feedback was unanimous: \u201CGrowing idea. Come back when you have a product.\u201D",

    problem: {
      title: "A great idea with no way to prove it to investors",
      narrative: [
        "Lena had everything except the one thing investors wanted \u2014 a working product. Three school districts in Brandenburg had signed letters of intent. She had a detailed product spec. She even had paying customers ready to go. But every agency she talked to quoted 6+ months and \u20AC80K+ for an MVP.",
        "Her pre-seed budget was \u20AC30K for development. Half the agencies laughed her off the call. The other half wanted to build a \u201Csimplified version\u201D that stripped out the multi-tenant architecture she needed from day one \u2014 which meant she\u2019d have to rebuild everything when she scaled.",
        "Lena was running out of runway and patience. She needed a team that understood how to build for scale on a startup budget.",
      ],
      painPoints: [
        "3 school districts waiting, no product to deliver",
        "Every agency quoted 6+ months, \u20AC80K+",
        "Pre-seed budget of only \u20AC30K for development",
        "Needed multi-tenant architecture from day one",
      ],
    },

    approach: {
      title: "Lean MVP with multi-tenant built in from day one",
      narrative: [
        "Most agencies would\u2019ve told Lena to \u201Cstart simple\u201D and bolt on multi-tenancy later. We didn\u2019t. We designed the database schema to be multi-tenant from the start using Supabase\u2019s Row Level Security \u2014 which cost nothing extra and meant she\u2019d never have to rewrite her data layer.",
        "We prioritized ruthlessly: every feature was ranked by one question \u2014 \u201CWill this help Lena raise money?\u201D Student progress dashboards? Yes. Custom themes? No. Real-time notifications? Yes. Admin analytics? Later. The result was a focused product that did 6 things brilliantly instead of 20 things poorly.",
      ],
      timeline: [
        { week: "Week 1", title: "Investor Analysis + Scope", detail: "Studied 5 successful EdTech pitch decks. Identified the 6 features investors would want to see demoed. Designed the architecture around scale." },
        { week: "Weeks 2\u20134", title: "Core Platform Build", detail: "Multi-tenant architecture, student dashboard, teacher tools, progress tracking, and Stripe billing \u2014 all with real-time updates via Supabase subscriptions." },
        { week: "Week 5", title: "Pilot with First District", detail: "Deployed to the first school district. 200 students onboarded in 48 hours. Iterated based on teacher feedback in real-time." },
        { week: "Week 6", title: "Launch + Investor Prep", detail: "Production deploy, investor demo environment, pitch deck data screenshots, and a 2-minute product video for the deck." },
      ],
    },

    results: {
      metrics: [
        { value: "6 weeks", label: "MVP shipped" },
        { value: "\u20AC800K", label: "Raised post-launch" },
        { value: "15K+", label: "Students onboarded" },
        { value: "3", label: "Countries served" },
      ],
      aftermath: "Two months after launch, Lena closed an \u20AC800K pre-seed round led by a Berlin-based EdTech fund. The lead investor later told her that the product demo was what sealed the deal \u2014 \u201CIt didn\u2019t feel like an MVP. It felt like a real product.\u201D LearnHub now serves schools in Germany, Austria, and Switzerland.",
      quote: {
        text: "I went from having nothing to show investors to raising \u20AC800K in under 3 months. Enlivo didn\u2019t just build my product \u2014 they helped me think about what would actually convince investors. Every feature decision was filtered through one question: does this help us raise?",
        author: "Lena Weber",
        role: "Founder, LearnHub",
      },
    },

    tags: ["Next.js", "Supabase", "Stripe", "Vercel", "Multi-tenant"],
  },
];

/* ═══════════════════════════════════════════════
   SINGLE CASE STUDY CHAPTER
   ═══════════════════════════════════════════════ */

function CaseStudyChapter({ study, index }: { study: CaseStudy; index: number }) {
  const chapterRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!chapterRef.current) return;

    const ctx = gsap.context(() => {
      /* Parallax image */
      if (imageRef.current) {
        const img = imageRef.current.querySelector("img");
        if (img) {
          gsap.fromTo(img,
            { y: -30, scale: 1.08 },
            {
              y: 30, scale: 1,
              ease: "none",
              scrollTrigger: { trigger: imageRef.current, start: "top bottom", end: "bottom top", scrub: true },
            }
          );
        }
      }

      /* Fade-in sections */
      contentRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 82%", once: true },
          }
        );
      });
    }, chapterRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={chapterRef} className="relative">
      {/* ─── Chapter Header ─── */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16 mb-8 md:mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="text-[11px] md:text-[14px] uppercase font-medium text-[#2563EB] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
            Case Study {study.number}
          </span>
          <span className="text-base text-gray-400">|</span>
          <span className="text-base font-normal text-gray-500">{study.flag} {study.country}</span>
          <span className="text-base text-gray-400">|</span>
          <span className="text-base font-normal text-gray-500">{study.industry}</span>
          <span className="text-base text-gray-400">|</span>
          <span className="flex items-center gap-1 text-base text-gray-500">
            <Clock className="w-3 h-3" />
            {study.timeline}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight mb-3">
          {study.client}
        </h2>
        <p className="text-base sm:text-lg text-gray-500 font-light tracking-tight">
          {study.tagline}
        </p>
      </div>

      {/* ─── Hero Image ─── */}
      <div
        ref={imageRef}
        className="relative w-full max-w-[90rem] mx-auto aspect-[21/9] md:aspect-[21/8] overflow-hidden md:rounded-2xl mb-16 md:mb-20"
      >
        <Image
          src={study.heroImage}
          alt={`${study.client} — ${study.tagline}`}
          fill
          className="object-cover"
          sizes="100vw"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      {/* ─── Story Content ─── */}
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">

        {/* BACKSTORY */}
        <div ref={(el) => { contentRefs.current[0] = el; }} className="max-w-3xl mb-16 md:mb-20" style={{ opacity: 0 }}>
          <p className="text-[16px] sm:text-lg text-black leading-[1.85] font-light border-l border-black/10 pl-6">
            {study.backstory}
          </p>
        </div>

        {/* THE PROBLEM */}
        <div ref={(el) => { contentRefs.current[1] = el; }} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20" style={{ opacity: 0 }}>
          <div className="lg:col-span-4">
          <div className="flex items-center gap-2 mb-2">
               <div className="w-2 h-2 rounded-full bg-[#E03A26]"></div>
               <p className="text-[11px] md:text-[12px] font-medium text-[#E03A26] uppercase">
               THE PROBLEM
               </p>
            </div>
            <h3 className="text-2xl sm:text-3xl font-medium text-black tracking-tight leading-snug">
              {study.problem.title}
            </h3>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-5 mb-8">
              {study.problem.narrative.map((para, i) => (
                <p key={i} className="text-[16px] sm:text-lg text-black font-light leading-[1.85]">
                  {para}
                </p>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {study.problem.painPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-red-50/60 border border-red-100/80">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <span className="text-red-500 text-xs font-medium">{i + 1}</span>
                  </span>
                  <span className="text-sm text-black font-light leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* OUR APPROACH */}
        <div ref={(el) => { contentRefs.current[2] = el; }} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 md:mb-20" style={{ opacity: 0 }}>
          <div className="lg:col-span-4">
          <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-[#2563EB]"></div>
               <p className="text-[11px] md:text-[12px] font-medium text-[#2563EB] uppercase">
               OUR APPROACH
               </p>
            </div>
            <h3 className="text-2xl sm:text-3xl font-medium text-black tracking-tight leading-snug">
              {study.approach.title}
            </h3>
          </div>
          <div className="lg:col-span-8">
            <div className="space-y-5 mb-10">
              {study.approach.narrative.map((para, i) => (
                <p key={i} className="text-[16px] sm:text-lg text-black font-light leading-[1.85]">
                  {para}
                </p>
              ))}
            </div>

            {/* Timeline */}
            <div className="border-t border-dashed border-black/10">
              {study.approach.timeline.map((step, i) => (
                <div key={i} className="grid grid-cols-12 gap-4 py-5 border-b border-dashed border-black/10">
                  <div className="col-span-3 sm:col-span-2">
                    <span className="text-xs font-medium text-[#2563EB] uppercase tracking-wider">{step.week}</span>
                  </div>
                  <div className="col-span-9 sm:col-span-10">
                    <p className="text-[16px] sm:text-lg font-normal text-black mb-1">{step.title}</p>
                    <p className="text-[14px] text-gray-600">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* THE RESULTS */}
        <div ref={(el) => { contentRefs.current[3] = el; }} className="mb-16 md:mb-20" style={{ opacity: 0 }}>

          <div className="text-[11px] md:text-[12px] font-medium uppercase text-[#2563EB] mb-8 text-center flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2563EB]"></span>
            THE RESULTS
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {study.results.metrics.map((metric, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-[#F8F8F8] border border-black/5">
                <p className="text-2xl sm:text-3xl font-medium text-black tracking-tight mb-1">
                  {metric.value}
                </p>
                <p className="text-sm text-gray-500">{metric.label}</p>
              </div>
            ))}
          </div>
          {/* Aftermath */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-[16px] sm:text-lg text-black font-light leading-[1.85]">
              {study.results.aftermath}
            </p>
          </div>
        </div>

        {/* QUOTE */}
        <div ref={(el) => { contentRefs.current[4] = el; }} className="mb-10" style={{ opacity: 0 }}>
          <div className="relative bg-[#F8F8F8] rounded-2xl p-8 sm:p-12 border border-black/5">
            <div className="absolute top-6 left-8 text-7xl sm:text-8xl font-serif leading-none text-gray-200 select-none">
              &ldquo;
            </div>
            <blockquote className="relative z-10">
              <p className="text-lg sm:text-xl text-black leading-relaxed font-light mb-6 max-w-3xl">
                &ldquo;{study.results.quote.text}&rdquo;
              </p>
              <footer className="flex items-center gap-3">
                <div className="w-1 h-10 rounded-full bg-black" />
                <div>
                  <p className="text-sm font-medium text-black">{study.results.quote.author}</p>
                  <p className="text-xs text-black font-light">{study.results.quote.role}</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-[12px] font-normal text-gray-600 uppercase mr-2">Built with:</span>
          {study.tags.map((tag) => (
            <span key={tag} className="text-[12px] font-normal text-gray-700 bg-gray-50 border border-black/5 px-3 py-1 rounded-lg">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ═══════════════════════════════════════════════ */

export function CaseStudiesPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2, ease: "power3.out", delay: 0.1 }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* ─── Hero ─── */}
      <div className="pt-36 pb-16 lg:pt-52 lg:pb-20">
        <div ref={heroRef} className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16" style={{ opacity: 0 }}>
          <div className="text-[11px] md:text-[14px] uppercase font-medium text-[#2563EB] flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
            Case Studies
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900 tracking-tight leading-[1.08] mb-4">
                Real products. Real founders.
                <br />Real results.
              </h1>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl">
                We don&apos;t just write code - we solve problems that keep founders up at night. Here are the stories behind the products we&apos;ve shipped, told by the founders who lived them.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link href="/portfolio" className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-black transition-colors group">
                View Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-dashed border-gray-200 flex flex-wrap gap-x-10 gap-y-4">
            {["3 founders, 3 industries, 3 countries", "Average delivery: 8 weeks", "100% client retention rate"].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-base text-gray-600">
                <Check className="w-4 h-4 text-black" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Case Study Chapters ─── */}
      <div className="space-y-32 md:space-y-40 pb-24 md:pb-32">
        {CASE_STUDIES.map((study, index) => (
          <CaseStudyChapter key={study.id} study={study} index={index} />
        ))}
      </div>


      <section className="bg-black">
      {/* Container for outer left/right space */}
      <div className="max-w-[105rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Image Container: Rounded bottom, no top rounding */}
        <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] rounded-b-[2.5rem] sm:rounded-b-[3.5rem] overflow-hidden">
          
          {/* 1. Background Image */}
          <Image
            src="https://res.cloudinary.com/dzjxexhzf/image/upload/v1772104239/bg12_eqq2bv_lqskgl.jpg"
            alt="Background Visual"
            fill
            className="object-cover object-center"
            quality={100}
            priority
          />

          {/* 2. Content Overlay (Centered ON TOP of the image) */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-white tracking-tight drop-shadow-lg">
              Got a product idea? Let&apos;s <br /> make it real.
              </h2>
              
              {/* Subheading */}
              <div className="space-y-2">
                <p className="text-lg sm:text-xl text-white font-normal drop-shadow-md">
                We&apos;ve shipped 50+ products for funded startups across 4 continents. <br />Your story could be next.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://cal.com/info-enlivo-yyhgqr" target="_blank" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-base font-medium hover:bg-gray-100 transition-colors group">
              Book Free Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center justify-center gap-2 text-white hover:text-white/60 px-8 py-4 rounded-full text-base font-medium border border-white/40 hover:border-white/60 transition-colors">
              View Portfolio
              </Link>
              </div>

            </div>
          </div>

        </div>
        
      </div>
    </section>
    </div>
  );
}
