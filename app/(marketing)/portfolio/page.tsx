/**
 * app/(marketing)/portfolio/page.tsx
 *
 * PURPOSE: Portfolio page — showcases delivered projects with trust-building narrative.
 * DESIGN: Premium editorial — black text, no gradients, dashed borders,
 *         numbered grids, trust signals. Matches site-wide design language.
 *
 * STRUCTURE:
 * 1. Hero — editorial headline + stats strip
 * 2. Featured Projects — large cards with images + story summaries
 * 3. Industries We Serve — numbered grid
 * 4. Our Technology Stack — grouped tech badges
 * 5. How We Deliver — process overview
 * 6. CTA — dark section
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio | Products We've Shipped for Funded Startups | Enlivo",
  description:
    "Explore our portfolio of 50+ products shipped for funded startups across HealthTech, FinTech, EdTech, and E-Commerce. Real results, real code, real impact.",
  keywords: [
    "software development portfolio", "startup portfolio", "MVP portfolio",
    "app development portfolio", "product development case studies",
    "software agency portfolio", "shipped products", "startup app examples",
    "HealthTech development", "FinTech development", "EdTech development",
    "e-commerce development", "SaaS development portfolio", "mobile app portfolio",
    "web app portfolio",
  ],
  pathname: "/portfolio",
  ogImage: "/images/og/enlivo-technologies.png",
});

/* ── PROJECT DATA ── */
const PROJECTS = [
  {
    id: "healthsync",
    number: "01",
    name: "HealthSync",
    category: "HealthTech",
    country: "United States",
    flag: "🇺🇸",
    title: "HIPAA-compliant patient management — shipped in 7 weeks",
    description: "A seed-stage founder burned $40K with a previous agency. We rebuilt from zero and delivered a fully compliant platform with 2,400+ active users in month one.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS", "HIPAA"],
    metrics: [
      { value: "7 weeks", label: "Delivered" },
      { value: "2,400+", label: "Users month 1" },
      { value: "99.9%", label: "Uptime" },
    ],
    caseStudyHref: "/case-studies",
  },
  {
    id: "fintrace",
    number: "02",
    name: "Fintrace",
    category: "FinTech",
    country: "United Kingdom",
    flag: "🇬🇧",
    title: "Zero-downtime rebuild handling 50K daily transactions",
    description: "A Series A fintech startup had a dashboard crashing at 5K users. We rebuilt it with zero downtime, migrating 200K financial records without losing a single entry.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    tags: ["React", "Python", "Redis", "AWS Lambda", "WebSocket"],
    metrics: [
      { value: "12 weeks", label: "Full rebuild" },
      { value: "50K+", label: "Daily transactions" },
      { value: "<200ms", label: "Query time" },
    ],
    caseStudyHref: "/case-studies",
  },
  {
    id: "learnhub",
    number: "03",
    name: "LearnHub",
    category: "EdTech",
    country: "Germany",
    flag: "🇩🇪",
    title: "MVP shipped in 6 weeks — raised €800K two months later",
    description: "A former teacher in Berlin needed a multi-tenant learning platform on a pre-seed budget. We shipped a lean MVP that helped her raise €800K and onboard 15K+ students across 3 countries.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop",
    tags: ["Next.js", "Supabase", "Stripe", "Vercel", "Multi-tenant"],
    metrics: [
      { value: "6 weeks", label: "MVP shipped" },
      { value: "€800K", label: "Raised" },
      { value: "15K+", label: "Students" },
    ],
    caseStudyHref: "/case-studies",
  },
  {
    id: "elderlycare",
    number: "04",
    name: "ElderlyCare",
    category: "HealthTech",
    country: "India",
    flag: "🇮🇳",
    title: "Compassionate care, powered by technology",
    description: "A comprehensive elderly care management platform connecting caregivers, families, and healthcare providers — real-time health monitoring, medication tracking, and emergency alerts.",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2678&auto=format&fit=crop",
    tags: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    metrics: [
      { value: "8 weeks", label: "Delivered" },
      { value: "3 platforms", label: "iOS, Android, Web" },
      { value: "Real-time", label: "Health monitoring" },
    ],
    caseStudyHref: "/case-studies",
  },
  {
    id: "freshkart",
    number: "05",
    name: "FreshKart",
    category: "E-Commerce",
    country: "India",
    flag: "🇮🇳",
    title: "Farm-to-door grocery — 5,000+ orders per week",
    description: "A hyperlocal grocery delivery platform with real-time inventory sync, route-optimized delivery, and a vendor dashboard — serving three cities with 5,000+ weekly orders.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2674&auto=format&fit=crop",
    tags: ["Next.js", "Stripe", "Supabase", "Vercel"],
    metrics: [
      { value: "5,000+", label: "Weekly orders" },
      { value: "3 cities", label: "Served" },
      { value: "Real-time", label: "Inventory sync" },
    ],
    caseStudyHref: "/case-studies",
  },
  {
    id: "ai-dashboard",
    number: "06",
    name: "AI Dashboard",
    category: "AI / SaaS",
    country: "United States",
    flag: "🇺🇸",
    title: "Decisions at the speed of intelligence",
    description: "An AI-powered analytics dashboard that aggregates business data, generates predictive insights, and automates reports — replacing 20+ hours of manual analysis per week.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    tags: ["Next.js", "Python", "OpenAI", "Redis"],
    metrics: [
      { value: "20+ hrs", label: "Saved weekly" },
      { value: "AI-powered", label: "Insights" },
      { value: "Real-time", label: "Data sync" },
    ],
    caseStudyHref: "/case-studies",
  },
];

/* ── INDUSTRIES ── */
const INDUSTRIES = [
  { title: "HealthTech", description: "HIPAA-compliant platforms, patient management, telemedicine, health monitoring systems for clinics and hospitals." },
  { title: "FinTech", description: "Payment processing, financial dashboards, transaction management, real-time analytics for banks and startups." },
  { title: "EdTech", description: "Learning management systems, multi-tenant platforms, student analytics, and classroom management tools." },
  { title: "E-Commerce", description: "Hyperlocal delivery, inventory management, vendor dashboards, payment integration, and route optimization." },
  { title: "AI / SaaS", description: "AI-powered dashboards, predictive analytics, automated reporting, NLP integrations, and data pipelines." },
  { title: "Logistics", description: "Fleet management, route optimization, real-time tracking, warehouse management, and supply chain tools." },
];

/* ── TECH STACK ── */
const TECH_GROUPS = [
  { label: "Frontend", techs: ["React", "Next.js", "React Native", "TypeScript", "Tailwind CSS"] },
  { label: "Backend", techs: ["Node.js", "Python", "Express", "FastAPI", "GraphQL", "NestJS"] },
  { label: "Database", techs: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase"] },
  { label: "Cloud & DevOps", techs: ["AWS", "Vercel", "Docker", "GitHub Actions", "Terraform"] },
  { label: "AI / ML", techs: ["OpenAI", "LangChain", "TensorFlow", "Pinecone", "RAG Pipelines"] },
  { label: "Payments", techs: ["Stripe", "Razorpay", "PayPal", "Plaid", "Chargebee"] },
];

/* ── TRUST NUMBERS ── */
const TRUST_STATS = [
  { value: "50+", label: "Products shipped" },
  { value: "15+", label: "Countries served" },
  { value: "99.9%", label: "Average uptime" },
  { value: "4.9/5", label: "Client rating" },
];

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Portfolio" }])} />

      <main className="min-h-screen bg-[#FFFFFF]">
        {/* ── HERO ── */}
        <section className="pt-36 pb-20 lg:pt-52 lg:pb-28">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="text-[11px] md:text-[14px] uppercase font-medium text-[#2563EB] flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
              Portfolio
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
              <div className="lg:col-span-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-black tracking-tight leading-[1.08] mb-6">
                  Products we&apos;ve shipped.<br />
                  Results they&apos;ve driven.
                </h1>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl">
                  Every project here is a real product, built for a real founder, solving a real problem. No concept work, no redesigns of imaginary apps — just shipped software that&apos;s running in production right now.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Link href="https://cal.com/info-enlivo-yyhgqr" target="_blank" className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-black transition-colors group">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
            {/* Trust Stats Strip */}
            <div className="mt-12 pt-8 border-t border-dashed border-gray-200 grid grid-cols-2 md:grid-cols-4 gap-8">
              {TRUST_STATS.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-2xl sm:text-3xl font-medium text-black tracking-tight">{stat.value}</p>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURED PROJECTS ── */}
        <section className="py-24 lg:py-32 bg-[#F8F8F8]">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="mb-16 max-w-3xl">
              <div className="text-[11px] md:text-[14px] uppercase font-medium text-[#2563EB] flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                Featured Work
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.05]">
                Real products. Real founders. Real impact.
              </h2>
            </div>

            <div className="space-y-8">
              {PROJECTS.map((project, idx) => (
                <div key={project.id} className="bg-white rounded-2xl border border-black/5 overflow-hidden">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${idx % 2 !== 0 ? "lg:direction-rtl" : ""}`}>
                    {/* Image */}
                    <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                      <Image
                        src={project.image}
                        alt={`${project.name} — ${project.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="text-xs font-medium text-white/90 bg-black/30 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/10">
                          {project.flag} {project.country}
                        </span>
                        <span className="text-xs font-medium text-white/90 bg-black/30 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/10">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl font-light text-gray-300 tracking-tighter leading-none">{project.number}</span>
                        <span className="text-xs font-medium text-black uppercase tracking-wider">{project.name}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-medium text-black tracking-tight leading-snug mb-3">
                        {project.title}
                      </h3>
                      <p className="text-[15px] text-gray-600 leading-relaxed mb-6">
                        {project.description}
                      </p>
                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 mb-6 pt-6 border-t border-dashed border-black/10">
                        {project.metrics.map((metric, i) => (
                          <div key={i}>
                            <p className="text-lg font-medium text-black tracking-tight">{metric.value}</p>
                            <p className="text-xs text-gray-600 font-medium">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[11px] font-medium text-gray-600 bg-gray-50 border border-black/5 px-2.5 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link href={project.caseStudyHref} className="inline-flex items-center gap-2 text-sm font-medium text-black group">
                        <span className="border-b border-black group-hover:border-transparent transition-colors">Read the full story</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ── */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="mb-16 max-w-3xl">
              <div className="text-[11px] md:text-[14px] uppercase font-medium text-[#2563EB] flex items-center gap-2  mb-6">
                <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                Industries
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.05]">
                We understand your industry, not just your code.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-dashed border-black/10">
              {INDUSTRIES.map((item, idx) => (
                <div key={idx} className="border-r border-b border-dashed border-black/10 p-8 lg:p-10 group hover:bg-gray-50/50 transition-colors duration-300">
                  <span className="text-5xl font-light text-gray-300 tracking-tighter leading-none block mb-6">{String(idx + 1).padStart(2, "0")}</span>
                  <h3 className="text-xl font-medium text-black mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECHNOLOGY STACK ──
        <section className="py-24 lg:py-32 bg-[#F8F8F8]">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <div className="text-[11px] md:text-[14px] uppercase font-medium text-[#2563EB] flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                  Technology
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.08] ">
                  Built with technologies your next CTO already knows.
                </h2>
                <p className="text-gray-500 text-base leading-relaxed mt-6">
                  We use battle-tested, widely-adopted technologies. No exotic frameworks, no vendor lock-in — just tools that scale, hire for, and maintain easily.
                </p>
              </div>
              <div className="lg:col-span-8">
                <div className="space-y-0 border-t border-black/10 border-dashed">
                  {TECH_GROUPS.map((group, idx) => (
                    <div key={idx} className="py-6 border-b border-black/10 border-dashed">
                      <p className="text-sm font-medium text-gray-600 uppercase  mb-4">{group.label}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.techs.map((tech) => (
                          <span key={tech} className="text-sm font-medium text-black bg-white border border-black/10 px-4 py-2 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* ── TECHNOLOGY STACK ── */}
        <section className="py-24 lg:py-32 bg-[#F8F8F8]">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            
            {/* Shifted to gap-16 and a 6/6 grid to give the text maximum width */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              
              {/* LEFT COLUMN: Increased to lg:col-span-6 */}
              <div className="lg:col-span-6 lg:sticky lg:top-32 lg:pr-4">
                {/* Tech Label */}
                <div className="text-[11px] md:text-[14px] uppercase font-medium text-[#2563EB] flex items-center gap-2.5 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                  Technology
                </div>
                
                {/* Main Heading - Responsive sizing ensures perfect line breaks */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.08]">
                  Built with technologies your next CTO already knows.
                </h2>
                
                {/* Subtitle - Increased max-width to match the new wider column */}
                <p className="text-gray-500 text-base leading-relaxed mt-8 max-w-lg">
                  We use battle-tested, widely-adopted technologies. No exotic frameworks, no vendor lock in - just tools that scale, hire for, and maintain easily.
                </p>
              </div>

              {/* RIGHT COLUMN: Balanced to lg:col-span-6 */}
              <div className="lg:col-span-6 mt-8 lg:mt-0">
                <div className="border-t border-gray-200 border-dashed">
                  {TECH_GROUPS.map((group, idx) => (
                    <div key={idx} className="py-6 border-b border-gray-200 border-dashed">
                      {/* Section Label */}
                      <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-5 pl-1">
                        {group.label}
                      </p>
                      
                      {/* Pills Container */}
                      <div className="flex flex-wrap gap-3">
                        {group.techs.map((tech) => (
                          <span 
                            key={tech} 
                            className="text-[12px] sm:text-sm font-medium text-gray-800 bg-white border border-gray-200 px-5 py-2.5 rounded-xl"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── HOW WE DELIVER ── */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <div className="text-[11px] md:text-[14px] uppercase font-medium text-[#2563EB] flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                  Our Standards
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.08]">
                  What every project gets.
                </h2>
              </div>
              <div className="lg:col-span-8">
                <div className="space-y-0 border-t border-black/10 border-dashed">
                  {[
                    "Weekly working demos - you see software, not slide decks",
                    "100% code ownership - full GitHub transfer on completion",
                    "Daily Slack updates with screenshots and progress metrics",
                    "Comprehensive documentation - API docs, architecture diagrams, deployment guides",
                    "30 days of free post launch support and bug fixes",
                    "Dedicated tech lead who owns architecture and code quality",
                    "Fixed pricing - no surprise invoices, no hourly billing games",
                    "NDA signed before any code is shared or discussed",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 py-6 border-b border-black/10 border-dashed">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-lg text-black font-medium leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

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
              Your project could be next.
              </h2>
              
              {/* Subheading */}
              <div className="space-y-2">
                <p className="text-lg sm:text-xl text-white font-normal drop-shadow-md">
                We&apos;ve shipped 50+ products for funded startups across 4 continents. Tell us about your idea - we&apos;ll tell you how fast we can ship it.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://cal.com/info-enlivo-yyhgqr" target="_blank" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-base font-medium hover:bg-gray-100 transition-colors group">
                Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/case-studies" className="inline-flex items-center justify-center gap-2 text-white hover:text-white/60 px-8 py-4 rounded-full text-base font-medium border border-white/40 hover:border-white/60 transition-colors">
                Read Case Studies
              </Link>
              </div>

            </div>
          </div>

        </div>
        
      </div>
    </section>
      </main>
    </>
  );
}
