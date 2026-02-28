/**
 * app/(marketing)/services/free-audit/page.tsx
 *
 * PURPOSE: Free Technical Audit service page — top-of-funnel lead gen.
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
  title: "Free Technical Audit | Get Your App Assessed by Senior Engineers | Enlivo",
  description:
    "Get a free, no-obligation technical audit of your app or codebase. Senior engineers identify performance bottlenecks, security risks, and architecture improvements — delivered in 48 hours.",
  keywords: [
    "free technical audit", "free code review", "app audit", "software audit",
    "technical assessment", "code quality review", "free app assessment",
    "performance audit", "security audit software", "codebase review",
    "technical debt assessment", "free consultation software development",
    "app performance review", "architecture review", "free software consultation",
  ],
  pathname: "/services/free-audit",
  ogImage: "/images/og/services.png",
});

const SERVICE_NAME = "Free Technical Audit";
const SERVICE_SLUG = "free-audit";

const AUDIT_COVERS = [
  { title: "Codebase Architecture", description: "We review your code structure, design patterns, and separation of concerns. You get a clear picture of what's solid and what's spaghetti." },
  { title: "Performance Bottlenecks", description: "Load testing, database query analysis, and rendering audits. We find exactly what's making your app slow and tell you how to fix it." },
  { title: "Security Vulnerabilities", description: "OWASP Top 10 check, dependency vulnerability scan, authentication flow review. We identify risks before attackers do." },
  { title: "Scalability Assessment", description: "Can your architecture handle 10x your current load? We stress-test your assumptions and flag scaling limits before they become emergencies." },
  { title: "Technical Debt Mapping", description: "Every piece of tech debt cataloged, prioritized by business impact, and estimated for fix time. No more guessing what to tackle first." },
  { title: "Actionable Roadmap", description: "A clear, prioritized PDF report with specific recommendations, estimated timelines, and quick wins you can implement immediately." },
];

const PROCESS = [
  { step: "01", title: "Book a Call", meta: "Day 1 · Free", description: "30-minute video call to understand your app, tech stack, pain points, and goals. We ask the right questions so we audit what matters most to you." },
  { step: "02", title: "Share Access", meta: "Day 1-2", description: "Give us read-only access to your repository and staging environment. We sign an NDA before you share anything. Your code stays confidential." },
  { step: "03", title: "Deep Analysis", meta: "Days 2-3", description: "Two senior engineers spend 8+ hours reviewing your codebase, running performance tests, and documenting findings with screenshots and examples." },
  { step: "04", title: "Report Delivery", meta: "Day 4 · Free", description: "You receive a detailed PDF report with findings, recommendations, and a prioritized action plan. We walk you through it on a live call." },
];

const DELIVERABLES = [
  "Detailed PDF report (15-25 pages) with findings and recommendations",
  "Prioritized action plan with effort estimates for each fix",
  "Performance benchmarks — current vs. achievable metrics",
  "Security vulnerability report with severity ratings",
  "Architecture diagram of your current system with improvement notes",
  "30-minute walkthrough call to discuss findings and answer questions",
];

const WHY_FREE = [
  { title: "We believe in earning trust", description: "We don't cold-email or run Facebook ads. We earn clients by showing value first. If our audit saves you time and money, you'll remember us when you need a dev team." },
  { title: "It helps us too", description: "Every audit sharpens our team's skills across different tech stacks and industries. It's training for us and value for you — everyone wins." },
  { title: "No strings attached", description: "Seriously. There's no follow-up sales sequence, no \"limited time offer,\" no pressure to hire us. The report is yours — do whatever you want with it." },
];

export default function FreeAuditPage() {
  const offerings = [
    { name: "Codebase Analysis", description: "Deep review of code architecture, patterns, and technical debt" },
    { name: "Performance Review", description: "Load testing, query analysis, and bottleneck identification" },
    { name: "Security Assessment", description: "OWASP Top 10 check, dependency audit, and vulnerability scan" },
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
              Free Service
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
              <div className="lg:col-span-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-medium text-black tracking-tight leading-[1.08] mb-6">
                  Free Technical Audit
                </h1>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl">
                  Not sure where your app stands? Get a no-obligation technical audit from senior engineers. We&apos;ll tell you exactly what&apos;s working, what&apos;s broken, and what to fix first — delivered as a detailed PDF within 48 hours. Completely free.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Link href="https://cal.com/info-enlivo-yyhgqr" target="_blank" className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-black transition-colors group">
                  Request Free Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-dashed border-gray-200 flex flex-wrap gap-x-10 gap-y-4">
              {["100% free — no catch", "48-hour turnaround", "NDA signed upfront", "15-25 page PDF report"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                  <Check className="w-4 h-4 text-black" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT THE AUDIT COVERS ── */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="mb-16 max-w-3xl">
              <div className="text-[11px] md:text-[12px] font-medium text-[#2563EB] flex items-center gap-2 uppercase tracking-[0.15em] mb-6">
                <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                What The Audit Covers
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.05]">
                A real audit, not a sales pitch in disguise.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-dashed border-black/10">
              {AUDIT_COVERS.map((item, idx) => (
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
                  How It Works
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.05]">
                  From call to report in 4 days.
                </h2>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-end">
                <p className="text-gray-500 text-base leading-relaxed lg:text-right">
                  No long onboarding. No weeks of waiting. Book a call today, share access tomorrow, and have a detailed audit report in your inbox by the end of the week.
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

        {/* ── WHAT YOU WALK AWAY WITH ── */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <div className="text-[11px] md:text-[12px] font-medium text-[#2563EB] flex items-center gap-2 uppercase tracking-[0.15em] mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                  Deliverables
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.08]">
                  What you walk away with.
                </h2>
              </div>
              <div className="lg:col-span-8">
                <div className="space-y-0 border-t border-black/10">
                  {DELIVERABLES.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 py-6 border-b border-black/10">
                      <Check className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                      <p className="text-lg text-black font-medium leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                  <Link href="https://cal.com/info-enlivo-yyhgqr" target="_blank" className="inline-flex items-center gap-3 text-base font-medium text-black group">
                    <span className="border-b border-black group-hover:border-transparent transition-colors">Book your free audit call</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-sm text-gray-400 mt-3">30 minutes. No commitment. Walk away with clarity on your codebase.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHY IT'S FREE ── */}
        <section className="py-24 lg:py-32 bg-[#F8F8F8]">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="mb-16 max-w-3xl">
              <div className="text-[11px] md:text-[12px] font-medium text-[#2563EB] flex items-center gap-2 uppercase tracking-[0.15em] mb-6">
                <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                No Catch
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.05]">
                Why is it free? Honest answer.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {WHY_FREE.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 lg:p-10 border border-black/5">
                  <span className="text-5xl font-light text-gray-200/80 tracking-tighter leading-none block mb-6">{String(idx + 1).padStart(2, "0")}</span>
                  <h3 className="text-xl font-medium text-black mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-[15px] text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
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
              Get your free audit today.
              </h2>
              
              {/* Subheading */}
              <div className="space-y-2">
                <p className="text-lg sm:text-xl text-white font-normal drop-shadow-md">
                No commitment, no sales pitch — just honest technical feedback from senior engineers who&apos;ve shipped 50+ products.
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
