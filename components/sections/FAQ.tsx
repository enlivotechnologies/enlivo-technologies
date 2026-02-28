/**
 * components/sections/FAQ.tsx
 *
 * PURPOSE: FAQ section — objection-crushing answers for funded startup founders.
 * WHY: Addresses trust barriers before CTA. Directly converts skeptical visitors.
 *
 * WIDTH: max-w-[90rem] with px-6 sm:px-12 lg:px-16 — matches Navbar, Hero, Footer.
 *
 * DESIGN:
 * - Left: Sticky header with section label, heading, subtext, and founder CTA
 * - Right: Premium accordion with smooth open/close animation
 * - Numbered items with clean typography
 * - GSAP scroll-triggered entrance animation
 * - Full-width dashed top border matching TrustedBy section
 */

"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ── FAQ Data ──
const FAQ_ITEMS = [
  {
    question: "I've been burned by offshore agencies before. How are you different?",
    answer: (
      <div className="space-y-4 text-black/70 leading-relaxed text-[15px]">
        <p>We've seen exactly how agencies fail founders - and we built Enlivo specifically to avoid every one of those traps.</p>
        <div className="space-y-3 mt-4">
          {[
            { label: "Founder Led", desc: "Akshay is on every strategic call, ensuring alignment from day one." },
            { label: "Senior Talent Only", desc: "Every engineer has 5+ years of shipped product experience. No juniors on your codebase." },
            { label: "Radical Transparency", desc: "Weekly demos of working software. You see real progress, not slide decks." },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 shrink-0" />
              <span><span className="text-black font-semibold">{item.label}:</span> {item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    question: "How much does it really cost? Any hidden fees?",
    answer: (
      <div className="space-y-6 text-black/70 text-[15px]">
        <p>Zero hidden fees. We scope strictly and stick to the budget. Most MVP projects fall into three tiers:</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="border border-black/10 p-5 rounded-xl bg-gray-50/80 flex flex-col justify-center items-center text-center">
            <span className="text-[10px] font-semibold uppercase tracking-tight text-black/70 mb-2">Simple MVP</span>
            <span className="text-xl text-black font-medium">$8k &mdash; $12k</span>
          </div>
          <div className="border border-black p-5 rounded-xl bg-black text-white flex flex-col justify-center items-center text-center">
            <span className="text-[10px] font-semibold uppercase tracking-tight text-white/70 mb-2">Standard MVP</span>
            <span className="text-xl font-medium">$12k &mdash; $20k</span>
          </div>
          <div className="border border-black/10 p-5 rounded-xl bg-gray-50/80 flex flex-col justify-center items-center text-center">
            <span className="text-[10px] font-semibold uppercase tracking-tight text-black/70 mb-2">Complex App</span>
            <span className="text-xl text-black font-medium">$20k &mdash; $35k</span>
          </div>
        </div>
        <p className="text-sm pt-2 border-t border-black/5">
          <span className="text-black font-semibold">Note:</span> Third-party infrastructure costs (AWS, Vercel, Stripe) are billed directly to your company cards. No markups.
        </p>
      </div>
    ),
  },
  {
    question: "How do I know you won't disappear mid-project?",
    answer: (
      <div className="space-y-5 text-black/70 text-[15px]">
        <p>We don't ask you to trust us blindly. We've structured every engagement so you're protected even if things go wrong.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="bg-gray-50/80 border border-black/5 p-5 rounded-xl">
            <strong className="block text-black mb-2 text-sm uppercase font-semibold">Milestone Payments</strong>
            <span className="text-sm leading-relaxed">You pay only for delivered, working features. We never ask for 100% upfront. Your money is always tied to real output.</span>
          </div>
          <div className="bg-gray-50/80 border border-black/5 p-5 rounded-xl">
            <strong className="block text-black mb-2 text-sm uppercase font-semibold">Day-1 Ownership</strong>
            <span className="text-sm leading-relaxed">You own the GitHub repository and all IP from the very first commit. Not at the end — from day one.</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    question: "We're 10+ hours apart. How does communication work?",
    answer: (
      <div className="space-y-5 text-black/70 text-[15px]">
        <p>Time zones don't stop us. Most of our clients are in the US and UK — and they never feel the distance.</p>
        <div className="text-sm border border-black/8 rounded-xl overflow-hidden">
          {[
            { label: "Daily Overlap", value: "4-7 Hours" },
            { label: "Communication", value: "Async Slack + Daily Updates" },
            { label: "Syncs", value: "Weekly Video Demos" },
          ].map((row, i) => (
            <div key={i} className={`flex justify-between items-center px-5 py-4 ${i % 2 === 0 ? "bg-gray-50/80" : "bg-white"} ${i < 2 ? "border-b border-black/5" : ""}`}>
              <span className="text-black/70 font-medium">{row.label}</span>
              <span className="text-black font-semibold">{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    question: "What about code quality? How do I verify it's good?",
    answer: (
      <div className="space-y-5 text-black/70 text-[15px]">
        <p>Every codebase we deliver can be handed to any senior engineer in the world and they'll understand it immediately. Clean architecture, documented, tested.</p>
        <div className="flex flex-wrap gap-2">
          {["80%+ Test Coverage", "Strict CI/CD Pipelines", "3rd-Party Audits Welcome"].map((tag) => (
            <span key={tag} className="px-4 py-2 bg-gray-50 border border-black/8 text-xs font-semibold text-black uppercase tracking-tight rounded-full">{tag}</span>
          ))}
        </div>
        <div className="p-4 bg-black text-white rounded-xl text-sm flex gap-4 items-center">
          <span className="w-1.5 h-6 bg-white shrink-0 rounded-full" />
          <p><span className="font-semibold tracking-tight">30-DAY GUARANTEE:</span> We fix any critical bugs found within 30 days of launch, absolutely free. No questions asked.</p>
        </div>
      </div>
    ),
  },
  {
    question: "What happens after launch? Am I locked in?",
    answer: (
      <div className="space-y-4 text-black/70 text-[15px]">
        <p><span className="text-black font-semibold">Zero lock-in.</span> You own the AWS accounts, the codebase, and the domains. After launch, you have three clear paths:</p>
        <div className="space-y-2 pt-2">
          {[
            { title: "Handoff", desc: "We cleanly transition the codebase to your internal team. Full documentation included." },
            { title: "Retainer", desc: "We stay on for maintenance and new features ($5k–$15k/mo). No long-term contract." },
            { title: "On-Demand", desc: "Ad-hoc updates billed strictly by the hour. Use us only when you need us." },
          ].map((opt, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-black/8 rounded-xl bg-white gap-2">
              <span className="font-semibold text-black text-sm uppercase ">{opt.title}:</span>
              <span className="text-sm text-black/70">{opt.desc}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    question: "Why should I choose you over a US/EU agency?",
    answer: (
      <div className="space-y-4 text-black/70 text-[15px]">
        <p>You get senior engineers who have built real SaaS products - at 40% of what a US agency charges - because you're not paying for their San Francisco rent.</p>
        <p>Our senior engineers cost <span className="text-black font-semibold">~$55–$75/hr.</span> The same profile in the US costs <span className="text-black font-semibold">$150–$250/hr.</span> That's your runway back in your pocket.</p>
        <p className="text-sm border-l-2 border-black/60 pl-2 mt-4 italic">
          The only difference? You save $80,000+ on your first product. We think that's a tradeoff worth making.
        </p>
      </div>
    ),
  },
  {
    question: "What if requirements change during development?",
    answer: (
      <div className="space-y-4 text-black/70 text-[15px]">
        <p>We expect requirements to evolve - that's normal. Small changes are absorbed at no cost. Bigger changes follow a simple 3 step process:</p>
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-black bg-gray-50/80 p-4 rounded-xl border border-black/5">
          <span className="uppercase tracking-tight">1. Scope Request</span>
          <ArrowRight className="w-3 h-3 text-black" />
          <span className="uppercase tracking-tight">2. Price Assessment</span>
          <ArrowRight className="w-3 h-3 text-black" />
          <span className="uppercase tracking-tight text-black">3. Client Approval</span>
        </div>
        <p className="text-sm">You approve every change before we build it. No surprises on your invoice, ever.</p>
      </div>
    ),
  },
  // ── NEW FAQ 09 ──
  {
    question: "Do you sign an NDA before we discuss our idea?",
    answer: (
      <div className="space-y-4 text-black/70 text-[15px]">
        <p>Yes - always. We sign a mutual NDA before any project discussion begins. Your idea, your data, and your business details are fully protected from the first conversation.</p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="bg-gray-50/80 border border-black/5 p-5 rounded-xl">
            <span className="block text-black mb-2 text-sm uppercase tracking-tight font-semibold">Signed Before Day 1</span>
            <span className="text-sm leading-relaxed">NDA is executed before we discuss any project details. No exceptions.</span>
          </div>
          <div className="bg-gray-50/80 border border-black/5 p-5 rounded-xl">
            <span className="block text-black mb-2 text-sm uppercase tracking-tight font-semibold">Full IP Protection</span>
            <span className="text-sm leading-relaxed">Every idea, design, and line of code created for you belongs entirely to you.</span>
          </div>
        </div>
      </div>
    ),
  },
  // ── NEW FAQ 10 ──
  {
    question: "How do I get started?",
    answer: (
      <div className="space-y-4 text-black/70 text-[15px]">
        <p>Book a free 30-minute Technical Audit. We'll review your idea, recommend a tech stack, and give you a realistic timeline and budget - at zero cost and zero obligation.</p>
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-gray-900 bg-gray-50/80 p-4 rounded-xl border border-black/5">
          <span className="uppercase tracking-tight">1. Book Free Audit</span>
          <ArrowRight className="w-3 h-3 text-black" />
          <span className="uppercase tracking-tight">2. Get Your Roadmap</span>
          <ArrowRight className="w-3 h-3 text-black" />
          <span className="uppercase tracking-tight text-black">3. We Start Building</span>
        </div>
        <div className="p-4 bg-black text-white rounded-xl text-sm flex gap-4 items-center">
          <span className="w-1.5 h-6 bg-white shrink-0 rounded-full" />
          <p><strong className="font-semibold tracking-tight">NO COMMITMENT REQUIRED:</strong> The audit is free. If we're not the right fit, you still walk away with a clear technical plan worth $500.</p>
        </div>
      </div>
    ),
  },
];

// ── Accordion Item ──
function AccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: (typeof FAQ_ITEMS)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      className={`border-b border-black/8 transition-colors duration-300 ${
        isOpen ? "bg-white" : "bg-transparent"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-6 sm:gap-8 py-7 sm:py-8 text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        {/* Number */}
        <span
          className={`flex-shrink-0 text-sm font-medium tabular-nums transition-colors duration-300 ${
            isOpen ? "text-black" : "text-black/70 group-hover:text-black"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Question */}
        <span
          className={`flex-1 text-lg sm:text-xl font-medium leading-snug transition-colors duration-300 ${
            isOpen ? "text-black" : "text-black/70 group-hover:text-black"
          }`}
        >
          {item.question}
        </span>

        {/* Toggle icon */}
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-black border-black text-white rotate-45"
              : "bg-transparent border-black/15 text-gray-400 group-hover:border-black group-hover:text-black"
          }`}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-transform duration-300"
          >
            <path
              d="M7 1v12M1 7h12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      {/* Answer */}
      <div
        className="overflow-hidden transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ height }}
      >
        <div ref={contentRef} className="pb-8 pl-[calc(0.875rem+1.5rem)] sm:pl-[calc(0.875rem+2rem)] pr-12">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

// ── Main Export ──
export function OurVision() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
            },
          }
        );
      }

      if (listRef.current) {
        const items = listRef.current.children;
        gsap.fromTo(
          items,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 85%",
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
      className="py-24 lg:py-32 bg-white border-t border-dashed border-black/15"
      id="faq"
    >
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">

          {/* ── LEFT: Sticky Header ── */}
          <div ref={headerRef} className="lg:w-[38%] xl:w-[35%] lg:sticky lg:top-32 lg:self-start h-fit">
            <div className="text-[11px] md:text-[12px] font-medium text-[#2563EB] flex items-center gap-2 uppercase mb-4">
              <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
              FAQs
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[3rem] font-medium tracking-tight text-black leading-[1.1] mb-6">
              Questions Founders Always Ask.
            </h2>

            <p className="text-lg text-black/70 font-normal leading-relaxed mb-10 max-w-sm">
              Clear answers to your most pressing questions about costs, process, and code quality.
            </p>

            <div className="hidden lg:block">
              <span className="text-[15px] text-black/70 mb-4">Still have questions? </span>
              <a
                href="https://cal.com/info-enlivo-yyhgqr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[15px] font-semibold text-black group border-b border-black/40"
              >
                Talk to Founder Directly
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* ── RIGHT: Accordion ── */}
          <div className="lg:w-[62%] xl:w-[65%]">
            <div ref={listRef} className="border-t border-black/8">
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem
                  key={index}
                  item={item}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => toggleFAQ(index)}
                />
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-12 lg:hidden border-t border-black/8 pt-8">
              <span className="text-sm text-gray-500 mb-4 text-center">Still have questions?</span>
              <a
                href="https://cal.com/info-enlivo-yyhgqr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-black text-white px-6 py-4 rounded-full font-medium text-[15px] tracking-wide group"
              >
                Talk to Founder Directly
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}