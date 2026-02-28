/**
 * app/(marketing)/services/mvp-development/page.tsx
 *
 * PURPOSE: MVP & Product Development service page.
 * DESIGN: Premium editorial — black text, no gradients, dashed borders,
 *         numbered grids, trust signals. Matches site-wide design language.
 *
 * WIDTH: max-w-[90rem] with px-6 sm:px-12 lg:px-16
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema, buildServiceSchema } from "@/lib/schema";
import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = buildMetadata({
  title: "MVP Development Services | Build Your Startup App Fast | Enlivo",
  description:
    "Build your MVP in weeks, not months. Expert MVP development services for startups. Rapid prototyping, validated products, faster funding. Get started today.",
  keywords: [
    "MVP development", "MVP development services", "build MVP",
    "startup MVP development", "minimum viable product", "rapid MVP development",
    "MVP development company", "startup app development", "prototype development",
    "MVP for startups", "build an MVP", "MVP software development",
    "lean product development", "rapid prototyping", "startup product development",
    "affordable MVP development", "MVP development cost", "how to build an MVP",
  ],
  pathname: "/services/mvp-development",
  ogImage: "/images/og/services.png",
});

const SERVICE_NAME = "MVP & Product Development";
const SERVICE_SLUG = "mvp-development";

const FEATURES = [
  { title: "Rapid Launch", description: "Get your product to market in 6-8 weeks. We focus on speed without compromising code quality or scalability." },
  { title: "Core Features First", description: "We build only what validates your business model. Every feature is designed to prove assumptions and attract users." },
  { title: "Scalable Foundation", description: "Built with growth in mind. Your MVP evolves seamlessly into a full product as you raise funding and scale users." },
  { title: "Full Code Ownership", description: "Complete GitHub transfer, documentation, and credentials. You own 100% of the code — zero vendor lock-in." },
  { title: "Weekly Working Demos", description: "Every Friday you get a working demo, a Loom walkthrough, and a live call. You see exactly what your money built." },
  { title: "Post-Launch Support", description: "30 days of free bug fixes after launch. We stay on until your product is stable and your first users are happy." },
];

const PROCESS = [
  { step: "01", title: "Free Technical Audit", meta: "Week 0 · $0", description: "30-minute call to understand your idea. You walk away with a detailed PDF roadmap — yours to keep, even if you never hire us." },
  { step: "02", title: "Plan & Prototype", meta: "Week 1 · 30% Deposit", description: "Wireframes, database schema, API planning, and milestone schedule. You approve everything before a single line of code is written." },
  { step: "03", title: "Build & Iterate", meta: "Weeks 2-7 · 40% at Week 4", description: "Daily standups, Slack updates with screenshots, and code pushed to GitHub. Every Friday: working demo on staging + Loom walkthrough." },
  { step: "04", title: "Launch & Handoff", meta: "Week 8 · Final 30%", description: "Production deployment, full repository transfer, technical documentation, and 30 days of free post-launch support." },
];

const IDEAL_FOR = [
  "Funded startups that need to ship an MVP before the next board meeting",
  "Solo founders validating a SaaS idea with real users",
  "Companies pivoting to a new product line and need to move fast",
  "Seed-stage startups building investor-ready demos",
];

export default function MVPDevelopmentPage() {
  const offerings = [
    { name: "Rapid Prototyping", description: "Quick validation of ideas through functional prototypes" },
    { name: "Core Feature Development", description: "Focus on essential features that deliver user value" },
    { name: "Product Launch Strategy", description: "End-to-end support from concept to market launch" },
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
                  MVP & Product Development
                </h1>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl">
                  From idea to launched product in 8 weeks. We build MVPs that are good enough to charge users, raise funding, and scale — not throwaway prototypes you&apos;ll rebuild in 6 months.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Link href="https://cal.com/info-enlivo-yyhgqr" target="_blank" className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-black transition-colors group">
                  Book Free Audit
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-dashed border-gray-200 flex flex-wrap gap-x-10 gap-y-4">
              {["6-8 week delivery", "Fixed price guarantee", "100% code ownership", "30-day post-launch support"].map((item, idx) => (
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
                Everything you need to go from idea to launched product.
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
                  From zero to launched in 4 sprints.
                </h2>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-end">
                <p className="text-gray-500 text-base leading-relaxed lg:text-right">
                  You see working software every single week. Not promises. Not updates. Actual features you can click, test, and demo to investors.
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

        {/* ── IDEAL FOR ── */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <div className="text-[11px] md:text-[12px] font-medium text-[#2563EB] flex items-center gap-2 uppercase tracking-[0.15em] mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                  Ideal For
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.08]">
                  Is this the right fit?
                </h2>
              </div>
              <div className="lg:col-span-8">
                <div className="space-y-0 border-t border-black/10">
                  {IDEAL_FOR.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 py-6 border-b border-black/10">
                      <Check className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                      <p className="text-lg text-black font-medium leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                  <Link href="https://cal.com/info-enlivo-yyhgqr" target="_blank" className="inline-flex items-center gap-3 text-base font-medium text-black group">
                    <span className="border-b border-black group-hover:border-transparent transition-colors">Book a free 30-minute consultation</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-sm text-gray-400 mt-3">No commitment. Walk away with a free technical roadmap worth $500.</p>
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
              Ready to build your MVP?
              </h2>
              
              {/* Subheading */}
              <div className="space-y-2">
                <p className="text-lg sm:text-xl text-white font-normal drop-shadow-md">
                Most founders spend months finding the right dev team. You could start building next week.
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
