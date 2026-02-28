/**
 * app/(marketing)/services/dedicated-team/page.tsx
 *
 * PURPOSE: Dedicated Development Team service page.
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
  title: "Dedicated Development Team | Hire Engineers on Demand | Enlivo",
  description:
    "Hire a dedicated development team that works as an extension of your startup. Senior engineers, transparent pricing, weekly demos. Scale up or down as you grow.",
  keywords: [
    "dedicated development team", "hire development team", "dedicated software team",
    "offshore development team", "remote development team", "staff augmentation",
    "hire remote developers", "dedicated engineering team", "outsource development team",
    "hire software engineers", "team augmentation services", "dedicated developers India",
    "nearshore development team", "extended development team", "hire full stack developers",
  ],
  pathname: "/services/dedicated-team",
  ogImage: "/images/og/services.png",
});

const SERVICE_NAME = "Dedicated Development Team";
const SERVICE_SLUG = "dedicated-team";

const FEATURES = [
  { title: "Your Team, Your Way", description: "Engineers work in your tools — Jira, Slack, GitHub — attend your standups, and follow your coding standards. It feels like in-house." },
  { title: "Ship From Week One", description: "No 3-month ramp-up. Our engineers are pre-vetted, senior-level, and ready to contribute meaningful code from the first sprint." },
  { title: "Flexible Scaling", description: "Need 2 engineers this month, 5 next month? Scale up or down as your project demands. No long-term contracts or lock-in." },
  { title: "Full Timezone Overlap", description: "We work 12pm-9pm IST to overlap with US, UK, and EU business hours. Available for standups, demos, and ad-hoc calls." },
  { title: "Transparent Reporting", description: "Weekly progress reports, daily Slack updates, time tracking, and sprint velocity metrics. You always know what your team is working on." },
  { title: "Engineering Leadership", description: "Every team includes a tech lead who owns architecture decisions, code reviews, and ensures quality across the board." },
];

const PROCESS = [
  { step: "01", title: "Discovery Call", meta: "Day 1 · Free", description: "30-minute call to understand your project, tech stack, team culture, and what kind of engineers you need. No commitment, no pressure." },
  { step: "02", title: "Team Assembly", meta: "Days 2-5", description: "We hand-pick engineers matched to your requirements. You interview them. You approve them. Only engineers you like join your team." },
  { step: "03", title: "Integration", meta: "Week 1", description: "Onboard into your tools, processes, and codebase. Daily standups start immediately. Your team is productive from day one." },
  { step: "04", title: "Ship & Scale", meta: "Ongoing", description: "Deliver features every sprint. Scale the team up or down as needed. Monthly reviews ensure alignment and continuous improvement." },
];

const INCLUDES = [
  "Senior engineers with 5+ years experience",
  "Dedicated tech lead for architecture and code quality",
  "Daily standups and weekly sprint demos",
  "Direct Slack access — no account managers in between",
  "Monthly performance reviews and team health checks",
  "Scale up or down with 2 weeks notice",
];

export default function DedicatedTeamPage() {
  const offerings = [
    { name: "Team Assembly", description: "Hand-picked engineers matched to your tech stack" },
    { name: "Embedded Integration", description: "Your team works in your tools and follows your processes" },
    { name: "Flexible Scaling", description: "Scale up or down based on project needs" },
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
                  Dedicated Development Team
                </h1>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl">
                  Get a team of senior engineers who feel like your own — embedded in your workflow, committed to your goals, and shipping code from week one. More control than outsourcing, more flexibility than hiring.
                </p>
              </div>
              <div className="lg:col-span-4 flex lg:justify-end">
                <Link href="https://cal.com/info-enlivo-yyhgqr" target="_blank" className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-black transition-colors group">
                  Build Your Team
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-dashed border-gray-200 flex flex-wrap gap-x-10 gap-y-4">
              {["Ship from week one", "Scale up or down anytime", "Full timezone overlap", "No long-term lock-in"].map((item, idx) => (
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
                A team that feels like your own.
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
                  How It Works
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.05]">
                  Your team, assembled in days.
                </h2>
              </div>
              <div className="lg:col-span-5 flex flex-col justify-end">
                <p className="text-gray-500 text-base leading-relaxed lg:text-right">
                  From first call to shipping code — typically under 7 days. You interview every engineer. You approve every hire.
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

        {/* ── WHAT'S INCLUDED ── */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                <div className="text-[11px] md:text-[12px] font-medium text-[#2563EB] flex items-center gap-2 uppercase tracking-[0.15em] mb-4">
                  <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                  Included
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.08]">
                  Everything is included.
                </h2>
              </div>
              <div className="lg:col-span-8">
                <div className="space-y-0 border-t border-black/10">
                  {INCLUDES.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 py-6 border-b border-black/10">
                      <Check className="w-5 h-5 text-black mt-0.5 flex-shrink-0" />
                      <p className="text-lg text-black font-medium leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                  <Link href="https://cal.com/info-enlivo-yyhgqr" target="_blank" className="inline-flex items-center gap-3 text-base font-medium text-black group">
                    <span className="border-b border-black group-hover:border-transparent transition-colors">Schedule a discovery call</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-sm text-gray-400 mt-3">Tell us about your project and we&apos;ll assemble the perfect team within a week.</p>
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
              Ready to build your team?
              </h2>
              
              {/* Subheading */}
              <div className="space-y-2">
                <p className="text-lg sm:text-xl text-white font-normal drop-shadow-md">
                Stop searching for engineers. Start shipping features. Your dedicated team is one call away.
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
