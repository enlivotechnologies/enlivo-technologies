/**
 * app/(marketing)/services/product-rebuild/page.tsx
 *
 * PURPOSE: Product Rebuild & Modernization service page.
 * DESIGN: Premium editorial — black text, no gradients, dashed borders,
 *         numbered grids, trust signals. Matches site-wide design language.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema, buildServiceSchema } from "@/lib/schema";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = buildMetadata({
  title: "Product Rebuild Services | Rewrite & Modernize Your App | Enlivo",
  description:
    "Rebuild your legacy product with modern technology. Zero-downtime migration, clean architecture, and 10x performance. Trusted by funded startups across US, UK, and EU.",
  keywords: [
    "product rebuild", "app rewrite", "legacy modernization", "software rebuild",
    "code refactoring", "legacy code modernization", "product rewrite services",
    "rebuild app from scratch", "modernize legacy software", "tech debt cleanup",
    "zero downtime migration", "app migration services", "replatform application",
    "software modernization company", "product rebuild cost",
  ],
  pathname: "/services/product-rebuild",
  ogImage: "/images/og/services.png",
});

const SERVICE_NAME = "Product Rebuild & Modernization";
const SERVICE_SLUG = "product-rebuild";

const FEATURES = [
  { title: "Zero-Downtime Migration", description: "Run old and new systems in parallel. Every record migrated, validated, and reconciled — your users never notice the switch." },
  { title: "10x Performance", description: "Modern architecture built for 10x your current load. Sub-200ms queries, real-time updates, and infrastructure that actually scales." },
  { title: "Clean Codebase", description: "Fully documented, well-tested code your team can actually maintain. No more spaghetti, no more tribal knowledge, no more fear of changes." },
  { title: "Modern Tech Stack", description: "We migrate you to battle-tested technologies — React, Next.js, Node, PostgreSQL, AWS — that your future hires already know." },
  { title: "Data Integrity", description: "Every database record accounted for. Automated validation scripts ensure nothing is lost, corrupted, or mismatched during migration." },
  { title: "Full Documentation", description: "Architecture diagrams, API docs, deployment guides, and video walkthroughs. Your next CTO will thank you." },
];

const PROCESS = [
  { step: "01", title: "Deep Audit", meta: "Week 1 · Free", description: "We analyze your existing codebase, database, infrastructure, and identify every piece of technical debt. You get a detailed report with prioritized recommendations." },
  { step: "02", title: "Architecture Design", meta: "Week 2 · 30% Deposit", description: "Design the new system architecture. Database schema, API contracts, deployment strategy — everything approved before we write a single line of code." },
  { step: "03", title: "Parallel Build", meta: "Weeks 3-8 · 40% at Week 5", description: "Build the new system alongside the old one. Feature parity testing, data migration scripts, and weekly demos showing progress on staging." },
  { step: "04", title: "Gradual Cutover", meta: "Week 9 · Final 30%", description: "Switch traffic gradually from old to new. Monitor, validate, and only fully cut over when everything is verified. 30 days of post-migration support." },
];

const SIGNALS = [
  "Your app crashes under load and you&apos;re losing customers",
  "New features take weeks instead of days because of legacy code",
  "Your previous dev team left and nobody understands the codebase",
  "Investors are asking about your tech stack and you&apos;re embarrassed",
  "You&apos;re paying $5K+/month in infrastructure for what should cost $500",
];

export default function ProductRebuildPage() {
  const offerings = [
    { name: "Legacy System Audit", description: "Deep-dive analysis of your existing codebase" },
    { name: "Zero-Downtime Migration", description: "Rebuild alongside your existing system with parallel running" },
    { name: "Modern Architecture", description: "Clean, scalable architecture built for 10x your current load" },
  ];

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: SERVICE_NAME }])} />
      <JsonLd data={buildServiceSchema({ name: SERVICE_NAME, description: metadata.description || "", slug: SERVICE_SLUG, offerings })} />

      <main className="min-h-screen bg-[#FFFFFF]">
        {/* ── HERO ── */}
        <section className="pt-36 pb-20 lg:pt-52 lg:pb-28">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="text-[11px] md:text-[12px] font-medium text-[#2563EB] flex items-center gap-2 uppercase tracking-[0.15em] mb-6">
              <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
              Service
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
              <div className="lg:col-span-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-black tracking-tight leading-[1.08] mb-6">
                  Product Rebuild & Modernization
                </h1>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl">
                  Your product works — but it&apos;s held together with duct tape. We rebuild it properly. Zero downtime, clean architecture, 10x performance, and a codebase your team can actually maintain.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Link href="https://cal.com/info-enlivo-yyhgqr" target="_blank" className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-black transition-colors group">
                  Get Free Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-dashed border-gray-200 flex flex-wrap gap-x-10 gap-y-4">
              {["Zero-downtime migration", "10x performance boost", "Full documentation", "30-day post-launch support"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                  <Check className="w-4 h-4 text-black" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT YOU GET ── */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="mb-16 max-w-3xl">
              <div className="text-[11px] md:text-[12px] font-medium text-[#2563EB] flex items-center gap-2 uppercase tracking-[0.15em] mb-6">
                <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                What You Get
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.05]">
                A product rebuilt for the next 3 years of growth.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-dashed border-black/10">
              {FEATURES.map((item, idx) => (
                <div key={idx} className="border-r border-b border-dashed border-black/10 p-8 lg:p-10 group hover:bg-gray-50/50 transition-colors duration-300">
                  <span className="text-5xl font-light text-gray-200/80 tracking-tighter leading-none block mb-6">{String(idx + 1).padStart(2, "0")}</span>
                  <h3 className="text-xl font-medium text-black mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="py-24 lg:py-32 bg-[#F8F8F8]">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
              <div className="lg:col-span-7">
                <div className="text-[11px] md:text-[12px] font-medium text-[#2563EB] flex items-center gap-2 uppercase tracking-[0.15em] mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                  Our Process
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.05]">
                  Rebuild without breaking what works.
                </h2>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-end">
                <p className="text-gray-500 text-base leading-relaxed lg:text-right">
                  The old system keeps running while the new one is built alongside it. Your customers never notice. Your revenue never stops.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROCESS.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 lg:p-10 border border-black/5">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-5xl font-light text-gray-200/80 tracking-tighter leading-none">{item.step}</span>
                    <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest bg-gray-50 border border-black/5 px-3 py-1.5 rounded-md">{item.meta}</span>
                  </div>
                  <h3 className="text-xl font-medium text-black mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WARNING SIGNALS ── */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <div className="text-[11px] md:text-[12px] font-medium text-[#2563EB] flex items-center gap-2 uppercase tracking-[0.15em] mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                  Warning Signs
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.08]">
                  Time to rebuild?
                </h2>
              </div>
              <div className="lg:col-span-8">
                <div className="space-y-0 border-t border-black/10">
                  {SIGNALS.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 py-6 border-b border-black/10">
                      <span className="text-[15px] font-medium text-gray-300 mt-0.5 flex-shrink-0">{String(idx + 1).padStart(2, "0")}</span>
                      <p className="text-lg text-black font-medium leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                  <Link href="https://cal.com/info-enlivo-yyhgqr" target="_blank" className="inline-flex items-center gap-3 text-base font-medium text-black group">
                    <span className="border-b border-black group-hover:border-transparent transition-colors">Get a free technical audit of your codebase</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-sm text-gray-400 mt-3">We&apos;ll tell you exactly what needs to change and how long it&apos;ll take.</p>
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
              Ready to rebuild your product?
              </h2>
              
              {/* Subheading */}
              <div className="space-y-2">
                <p className="text-lg sm:text-xl text-white font-normal drop-shadow-md">
                Stop firefighting legacy code. Start building on a foundation designed for growth.
                </p>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://cal.com/info-enlivo-yyhgqr" target="_blank" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full text-base font-medium hover:bg-gray-100 transition-colors group">
                Start Your Project <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/services" className="inline-flex items-center justify-center gap-2 text-white hover:text-white/60 px-8 py-4 rounded-full text-base font-medium border border-white/40 hover:border-white/60 transition-colors">
              View All Services
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
