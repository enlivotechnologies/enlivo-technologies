/**
 * app/(marketing)/company/why-us/WhyUsContent.tsx
 *
 * PURPOSE: Client component for the Why Us page interactive content.
 * WHY: Toggle between Pros (blue) and Cons (red) requires client state.
 *
 * DESIGN:
 * - Hero with toggle pill (blue = pros, red = cons)
 * - 6-card grid showing pros or cons based on toggle
 * - Guarantees section
 * - Comparison table (Us vs Typical Agency vs Freelancer)
 * - Trust stats strip
 * - Founder CTA
 */

"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Check,
  X,
  Shield,
  ArrowRight,
  Clock,
  Code2,
  MessageSquare,
  Users,
  Zap,
  Lock,
  AlertTriangle,
  Globe,
  DollarSign,
  HeartHandshake,
  Eye,
} from "lucide-react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ── Pros Data (Blue) ──
const PROS = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Senior Engineers Only",
    description:
      "Every developer on your project has 5+ years of experience. No juniors, no interns, no learning on your budget.",
    stat: "5+ yrs avg experience",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Fixed Price & Timeline",
    description:
      "You know exactly what you're paying and when you're launching before we write a single line of code. No surprise invoices.",
    stat: "100% on-time delivery",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Weekly Proof of Progress",
    description:
      "Every Friday you get a working demo, a Loom walkthrough, and a live call. You see exactly what your money built that week.",
    stat: "Weekly demos guaranteed",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "You Own Everything",
    description:
      "Full GitHub transfer, all credentials, complete documentation. Zero vendor lock-in. The code is yours forever.",
    stat: "100% code ownership",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Your Timezone, Your Language",
    description:
      "Fluent English. Daily Slack updates. Weekly video calls. We overlap with US, UK, EU, and AU business hours.",
    stat: "< 2 hour response time",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Money-Back Guarantee",
    description:
      "Unhappy after Week 1? Full refund, no questions asked. Plus 30 days of free bug fixes after launch.",
    stat: "30-day post-launch support",
  },
];

// ── Cons Data (Red) ──
const CONS = [
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: "We're Not the Cheapest",
    description:
      "Our rates are higher than budget freelancers. You're paying for senior engineers, not juniors. Quality costs more upfront but saves you from expensive rebuilds later.",
    reality: "But you avoid $30K+ rebuild costs",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Small Team, Limited Slots",
    description:
      "We only take 2-3 projects at a time. If we're at capacity, you may need to wait. We'd rather say no than deliver mediocre work.",
    reality: "But every project gets our full attention",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "We're Based in India",
    description:
      "Our team is in Bangalore. There's a timezone difference. We mitigate this with overlapping hours (12pm-9pm IST) and async communication.",
    reality: "But we overlap with US/EU business hours",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "We Push Back on Bad Ideas",
    description:
      "We won't just build whatever you say. If your approach has technical flaws, we'll tell you directly. Some founders don't like that.",
    reality: "But this saves you months of wrong direction",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "No Enterprise-Scale Projects",
    description:
      "We're built for MVPs and early-stage products, not 200-person enterprise migrations. If you need 50 engineers, we're not the right fit.",
    reality: "But for startups, we're precisely right",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Deposit Required Upfront",
    description:
      "We require a 30% deposit before work begins. No exceptions. This ensures commitment from both sides and funds the initial sprint.",
    reality: "But it protects both of us equally",
  },
];

// ── Comparison Data ──
const COMPARISON_ROWS = [
  {
    feature: "Senior engineers only",
    us: true,
    agency: "Mixed",
    freelancer: "Maybe",
  },
  {
    feature: "Fixed price guarantee",
    us: true,
    agency: false,
    freelancer: false,
  },
  {
    feature: "Weekly working demos",
    us: true,
    agency: "Sometimes",
    freelancer: false,
  },
  {
    feature: "Full code ownership",
    us: true,
    agency: "Negotiable",
    freelancer: true,
  },
  {
    feature: "Dedicated Slack channel",
    us: true,
    agency: false,
    freelancer: false,
  },
  {
    feature: "Money-back guarantee",
    us: true,
    agency: false,
    freelancer: false,
  },
  {
    feature: "Post-launch support (free)",
    us: "30 days",
    agency: "Paid",
    freelancer: false,
  },
  {
    feature: "Technical documentation",
    us: true,
    agency: "Extra cost",
    freelancer: false,
  },
];

// ── Guarantee Data ──
const GUARANTEES = [
  {
    number: "01",
    title: "On-Time Delivery",
    description: "If we miss the deadline, you don't pay the final milestone. Period.",
  },
  {
    number: "02",
    title: "Weekly Transparency",
    description: "Working demo every Friday. If you ever feel in the dark, something is wrong.",
  },
  {
    number: "03",
    title: "Code Quality",
    description: "Clean, documented, tested code. Your next CTO will thank you.",
  },
  {
    number: "04",
    title: "Full Ownership",
    description: "GitHub repo, credentials, documentation — everything transfers to you.",
  },
  {
    number: "05",
    title: "30-Day Bug Fixes",
    description: "Anything that breaks after launch, we fix it. Free. No questions asked.",
  },
  {
    number: "06",
    title: "Money-Back Promise",
    description: "Not satisfied after Week 1? Full refund. We stand behind our work.",
  },
];

// ── Stats ──
const STATS = [
  { value: "15+", label: "Products shipped" },
  { value: "100%", label: "On-time delivery" },
  { value: "4", label: "Countries served" },
  { value: "0", label: "Projects abandoned" },
  { value: "<2h", label: "Avg response time" },
];

export function WhyUsContent() {
  const [showCons, setShowCons] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
          }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  // Animate cards on toggle change
  useEffect(() => {
    if (!cardsRef.current) return;
    const cards = cardsRef.current.children;
    gsap.fromTo(
      cards,
      { opacity: 0, y: 20, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.06,
        ease: "power2.out",
      }
    );
  }, [showCons]);

  const activeColor = showCons ? "#DC2626" : "#2563EB";
  const activeBg = showCons ? "bg-red-50" : "bg-blue-50";
  const activeText = showCons ? "text-red-600" : "text-[#2563EB]";
  const activeBorder = showCons ? "border-red-200" : "border-blue-200";
  const activeItems = showCons ? CONS : PROS;

  return (
    <>
      {/* ═══════════════════════════════════════════════
          SECTION 1: HERO + TOGGLE
          ═══════════════════════════════════════════════ */}
      <section className="pt-36 pb-16 lg:pt-52 lg:pb-24 overflow-hidden">
        <div
          ref={heroRef}
          className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16"
        >
          {/* Label */}
          <div className="text-[11px] md:text-[14px] uppercase font-medium text-[#2563EB] flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
            Why Choose Us
          </div>

          {/* Heading */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.08]">
                {showCons ? (
                  <>
                    What happens when you{" "}
                    <span className="relative inline-flex items-center">
                      <button
                        onClick={() => setShowCons(!showCons)}
                        className="relative inline-flex items-center w-[4.5rem] h-[2.5rem] rounded-full mx-2 bg-red-500 transition-colors duration-500 cursor-pointer focus:outline-none align-middle"
                        aria-label="Show pros"
                      >
                        <span className="absolute w-[2rem] h-[2rem] bg-white rounded-full shadow-md translate-x-[2.25rem] transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]" />
                      </button>
                    </span>{" "}
                    <span className="text-red-500">skip</span> us.
                  </>
                ) : (
                  <>
                    When people{" "}
                    <span className="relative inline-flex items-center">
                      <button
                        onClick={() => setShowCons(!showCons)}
                        className="relative inline-flex items-center w-[4.5rem] h-[2.5rem] rounded-full mx-2 bg-[#2563EB] transition-colors duration-500 cursor-pointer focus:outline-none align-middle"
                        aria-label="Show cons"
                      >
                        <span className="absolute w-[2rem] h-[2rem] bg-white rounded-full shadow-md translate-x-[0.25rem] transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]" />
                      </button>
                    </span>{" "}
                    work with us.
                  </>
                )}
              </h1>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <a
                href="https://cal.com/info-enlivo-yyhgqr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-black transition-colors group"
              >
                Let&apos;s build something
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Subheading */}
          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-3xl leading-relaxed">
            {showCons ? (
              <>
                We believe in radical honesty. Here are the real trade-offs of working with us — straight from us, not a review site.{" "}
                <button onClick={() => setShowCons(false)} className="text-[#2563EB] hover:underline cursor-pointer font-medium">See the pros &rarr;</button>
              </>
            ) : (
              <>
                15+ funded startups trusted us to build their product. Here&apos;s exactly why — and we&apos;ll even show you{" "}
                <button onClick={() => setShowCons(true)} className="text-red-500 hover:underline cursor-pointer font-medium">our honest cons</button>.
              </>
            )}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 2: PROS / CONS GRID
          ═══════════════════════════════════════════════ */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeItems.map((item, idx) => (
              <div
                key={`${showCons ? "con" : "pro"}-${idx}`}
                className={cn(
                  "group relative rounded-2xl border p-8 lg:p-10 ",
                  activeBorder,
                  showCons ? "bg-red-50/30 hover:bg-red-50/60" : "bg-blue-50/30 hover:bg-blue-50/60"
                )}
              >
                {/* Number */}
                <span
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-widest mb-6 block",
                    activeText
                  )}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300",
                    showCons
                      ? "bg-red-100 text-red-600"
                      : "bg-blue-100 text-[#2563EB]"
                  )}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Bottom tag */}
                <div
                  className={cn(
                    "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full",
                    showCons
                      ? "bg-red-100 text-red-700"
                      : "bg-blue-100 text-blue-700"
                  )}
                >
                  {showCons ? (
                    <>
                      <HeartHandshake className="w-3.5 h-3.5" />
                      {"reality" in item ? item.reality : ""}
                    </>
                  ) : (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      {"stat" in item ? item.stat : ""}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 3: STATS STRIP
          ═══════════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="max-w-[100rem] mx-auto w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:divide-x divide-gray-200 border-y border-dashed border-gray-200">
            {STATS.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center px-4 py-8 lg:py-10"
              >
                <h3 className="text-5xl lg:text-[4.5rem] font-light text-[#1a1a1a] tracking-tight mb-2 lg:mb-3">
                  {stat.value}
                </h3>
                <p className="text-[13px] sm:text-[15px] text-[#1a1a1a] font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 4: GUARANTEES
          ═══════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            <div className="lg:col-span-7">
              <div className="text-[11px] md:text-[14px] uppercase font-medium text-[#2563EB] flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                Guarantees
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.05]">
                Six promises we put in writing.
              </h2>
            </div>
            <div className="lg:col-span-5 flex flex-col justify-end">
              <p className="text-gray-600 text-base leading-relaxed lg:text-right">
                Every guarantee is contractual. If we fail to deliver on any of
                these, you have recourse. That&apos;s how confident we are.
              </p>
            </div>
          </div>

          {/* Guarantee Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/10 border-dashed">
            {GUARANTEES.map((item, idx) => (
              <div
                key={idx}
                className="border-r border-b border-black/10 border-dashed p-8 lg:p-10 group hover:bg-gray-50/50 transition-colors duration-300"
              >
                <span className="text-5xl font-light text-gray-200/80 tracking-tighter leading-none block mb-6">
                  {item.number}
                </span>
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 5: COMPARISON TABLE
          ═══════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[#F8F8F8]">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
          {/* Header */}
          <div className="mb-16 max-w-3xl">
            <div className="text-[11px] md:text-[14px] uppercase font-medium text-[#2563EB] flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
              Honest Comparison
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.05]">
              How we stack up.
            </h2>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-black/10">
                  <th className="text-sm font-medium uppercase text-black  pb-4 pr-6 w-[40%]">
                    Feature
                  </th>
                  <th className="text-sm font-medium uppercase text-black  pb-4 px-6 w-[20%]">
                    Enlivo
                  </th>
                  <th className="text-sm font-medium uppercase text-black  pb-4 px-6 w-[20%]">
                    Typical Agency
                  </th>
                  <th className="text-sm font-medium uppercase text-black  pb-4 pl-6 w-[20%]">
                    Freelancer
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-black/10 group"
                  >
                    <td className="py-5 pr-6 text-[15px] font-medium text-black">
                      {row.feature}
                    </td>
                    <td className="py-5 px-6">
                      {row.us === true ? (
                        <div className="w-7 h-7">
                          <Check className="w-5 h-5 text-green-600" />
                        </div>
                      ) : (
                        <span className="text-sm text-black">
                          {row.us}
                        </span>
                      )}
                    </td>
                    <td className="py-5 px-6">
                      {row.agency === true ? (
                        <div className="w-7 h-7 ">
                          <Check className="w-5 h-5 text-green-600" />
                        </div>
                      ) : row.agency === false ? (
                        <div className="w-7 h-7">
                          <X className="w-5 h-5 text-red-400" />
                        </div>
                      ) : (
                        <span className="text-sm text-black">
                          {row.agency}
                        </span>
                      )}
                    </td>
                    <td className="py-5 pl-6">
                      {row.freelancer === true ? (
                        <div className="w-7 h-7">
                          <Check className="w-5 h-5 text-green-600" />
                        </div>
                      ) : row.freelancer === false ? (
                        <div className="w-7 h-7">
                          <X className="w-5 h-5 text-red-400" />
                        </div>
                      ) : (
                        <span className="text-sm text-black">
                          {row.freelancer}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTION 6: RADICAL TRANSPARENCY NOTE
          ═══════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left: Sticky Heading */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="text-[11px] md:text-[14px] uppercase font-medium text-[#2563EB] flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                Radical Transparency
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.08]">
                Why we show our cons.
              </h2>
            </div>

            {/* Right: Content */}
            <div className="lg:col-span-8 max-w-3xl">
              <p className="text-2xl md:text-[2rem] font-medium text-black leading-[1.3] mb-10 tracking-tight">
                Most agencies hide their weaknesses. We put ours on the homepage. Here&apos;s why.
              </p>

              <div className="space-y-8 text-lg md:text-[1.125rem] text-[#5a5a5a] leading-[1.8]">
                <p>
                  If you&apos;re comparing dev agencies, you&apos;re going to find our cons eventually. We&apos;d rather you find them from us — with full context — than discover them as surprises after signing a contract.
                </p>
                <p>
                  We believe every honest con has a pro hiding behind it. We&apos;re not the cheapest because we don&apos;t cut corners. We&apos;re small because we give every project our full attention. We push back because we care about your outcome, not just your invoice.
                </p>
                <p>
                  The founders who choose us after seeing this page are the ones we work best with. They value honesty over sales pitches. And that&apos;s exactly the kind of partnership that builds great products.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-black/10">
                <a
                  href="https://cal.com/info-enlivo-yyhgqr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-base font-medium text-black group"
                >
                  <span className="relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[1.5px] after:bg-black after:origin-left after:scale-x-100 group-hover:after:scale-x-0 after:transition-transform after:duration-300">
                    Book a free technical audit
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-sm text-[#5a5a5a] mt-3">
                  30 minutes. No pressure. Walk away with a free technical roadmap.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ═══════════════════════════════════════════════
          SECTION 7: FOUNDER QUOTE
          ═══════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 bg-[#F8F8F8] w-full">
        <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
          
          <div className="flex flex-col md:flex-row justify-between md:items-end gap-16 lg:gap-20">
            
            {/* LEFT SIDE: Quote & Social Links */}
            <div className="md:max-w-3xl lg:max-w-4xl">
              {/* Quote - Added margin-bottom (mb-12 lg:mb-16) for perfect spacing */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight text-left mb-12 lg:mb-16">
                I'd rather lose a deal by being honest than win one by overpromising. Every founder who reads our cons and still chooses us becomes a partner, not just a client.
              </h2>
              
              {/* Social Links */}
              <div className="flex items-center gap-6 text-[11px] font-medium uppercase text-black">
                <a 
                  href="#" 
                  className="hover:text-blue-600 transition-colors"
                >
                  LinkedIn
                </a>
                <span className="text-gray-300 font-light">|</span>
                <a 
                  href="#" 
                  className="hover:text-blue-600 transition-colors"
                >
                  GITHUB
                </a>
                <span className="text-gray-300 font-light">|</span>
                <a 
                  href="#" 
                  className="hover:text-blue-600 transition-colors"
                >
                  EMAIL
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: Profile Details */}
            <div className="flex-shrink-0">
              <div className="flex items-center gap-5 sm:gap-6">
                {/* Avatar with subtle shadow and border for the "wow" polish */}
                <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://res.cloudinary.com/dqmryiyhz/image/upload/v1768642767/ceo_mstgxw.png"
                    alt="Akshay K - Founder & CEO"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-col justify-center text-left">
                  <h3 className="text-xl font-medium text-gray-900">
                    Akshay K
                  </h3>
                  <p className="text-[11px] font-medium text-gray-400 uppercase tracking-[0.1em] mt-0.5">
                    FOUNDER & CEO
                  </p>
                  <p className="text-[13px] text-black font-medium">
                    8+ Years Building SaaS Products
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
