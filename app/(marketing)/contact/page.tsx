/**
 * app/(marketing)/contact/page.tsx
 *
 * PURPOSE: Contact page — premium, conversion-optimized design.
 * WHY: Users on this page are ready to engage. Clean, modern UI.
 *
 * DESIGN:
 * - Hero with bold headline + subtle tag
 * - 3 contact cards: Support, Sales (highlighted), Media
 * - Trust strip with key stats
 * - FAQ accordion with rich answers
 * - Final CTA banner
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/schema";
import { CONTACT_SEO, CONTACT_FAQS } from "@/seo/contact";
import {
  Mail,
  MessageCircle,
  Calendar,
  ArrowUpRight,
  Clock,
  Shield,
  Zap,
  ChevronDown,
  MapPin,
  Phone,
} from "lucide-react";

/**
 * Page Metadata
 */
export const metadata: Metadata = buildMetadata(CONTACT_SEO);

/**
 * Contact Page
 */
export default function ContactPage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact" },
        ])}
      />
      <JsonLd data={buildFAQSchema(CONTACT_FAQS)} />

      <main className="min-h-screen bg-[#FAFAF9]">
        {/* ── Hero Section ── */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="max-w-3xl">
              <div className="text-[11px] md:text-[12px] font-medium text-[#2563EB] flex items-center gap-2 uppercase mb-6">
                <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                Get in Touch
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-black tracking-tight leading-[1.05] mb-6">
                Let&apos;s build something{" "}
                <span className="text-black/40">great together.</span>
              </h1>

              <p className="text-lg md:text-xl text-black/60 font-light leading-relaxed max-w-xl">
                Whether you have a product idea, need a rebuild, or want a
                dedicated team — we&apos;re here to help you ship faster.
              </p>
            </div>
          </div>
        </section>

        {/* ── Contact Cards ── */}
        <section className="py-16 md:py-24">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
              {/* Support Card */}
              <div className="bg-white rounded-2xl p-8 md:p-10 flex flex-col border border-black/[0.06] hover:border-black/10 transition-colors duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-black/[0.04] flex items-center justify-center mb-8">
                  <MessageCircle
                    className="w-5 h-5 text-black"
                    strokeWidth={1.5}
                  />
                </div>
                <h2 className="text-2xl font-medium text-black tracking-tight mb-3">
                  Support
                </h2>
                <p className="text-[15px] text-black/55 leading-relaxed mb-8 flex-grow">
                  Have a question about an existing project or need technical
                  help? Our support team responds within 4 hours.
                </p>
                <Link
                  href="/contact/support"
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-black text-white rounded-xl font-medium text-[15px] hover:bg-black/90 transition-all duration-200 group/btn"
                >
                  Submit an inquiry
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Sales Card — Highlighted */}
              <div className="bg-black rounded-2xl p-8 md:p-10 flex flex-col text-white relative overflow-hidden">
                {/* Subtle gradient accent */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-white/[0.06] to-transparent rounded-bl-full" />

                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-8 relative z-10">
                  <Calendar
                    className="w-5 h-5 text-white"
                    strokeWidth={1.5}
                  />
                </div>
                <h2 className="text-2xl font-medium tracking-tight mb-3 relative z-10">
                  Book a Free Audit
                </h2>
                <p className="text-[15px] text-white/60 leading-relaxed mb-8 flex-grow relative z-10">
                  Get a free 30-min technical audit. We&apos;ll review your
                  idea, recommend a stack, and give you a realistic timeline and
                  budget.
                </p>
                <a
                  href="https://cal.com/info-enlivo-yyhgqr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-white text-black rounded-xl font-medium text-[15px] hover:bg-white/90 transition-all duration-200 relative z-10 group/btn"
                >
                  Book a call — it&apos;s free
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Email / Media Card */}
              <div className="bg-white rounded-2xl p-8 md:p-10 flex flex-col border border-black/[0.06] hover:border-black/10 transition-colors duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-black/[0.04] flex items-center justify-center mb-8">
                  <Mail className="w-5 h-5 text-black" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-medium text-black tracking-tight mb-3">
                  Email Us
                </h2>
                <p className="text-[15px] text-black/55 leading-relaxed mb-8 flex-grow">
                  For partnerships, media inquiries, or anything else — drop us
                  an email and we&apos;ll get back within 24 hours.
                </p>
                <a
                  href="mailto:contact@enlivotechnologies.com"
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-black/[0.04] text-black rounded-xl font-medium text-[15px] hover:bg-black/[0.08] border border-black/[0.06] transition-all duration-200 group/btn"
                >
                  contact@enlivotechnologies.com
                  <ArrowUpRight className="w-4 h-4 ml-2 opacity-50 group-hover/btn:opacity-100 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-all" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust Strip ── */}
        <section className="py-12 md:py-16 border-y border-black/[0.06] bg-white">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                {
                  icon: Clock,
                  label: "Response Time",
                  value: "< 4 Hours",
                },
                {
                  icon: Zap,
                  label: "Project Kickoff",
                  value: "5-7 Days",
                },
                {
                  icon: Shield,
                  label: "NDA Signed",
                  value: "Before Day 1",
                },
                {
                  icon: Calendar,
                  label: "Free Audit",
                  value: "30 Minutes",
                },
              ].map((stat, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-black/[0.04] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <stat.icon
                      className="w-4 h-4 text-black"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-black/50 font-medium mb-0.5">
                      {stat.label}
                    </p>
                    <p className="text-lg font-semibold text-black tracking-tight">
                      {stat.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        {CONTACT_FAQS && CONTACT_FAQS.length > 0 && (
          <section className="py-20 md:py-28 bg-white">
            <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                {/* Left: Header */}
                <div className="lg:w-[35%] lg:sticky lg:top-32 lg:self-start h-fit">
                  <div className="text-[11px] md:text-[12px] font-medium text-[#2563EB] flex items-center gap-2 uppercase mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                    FAQs
                  </div>

                  <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium tracking-tight text-black leading-[1.1] mb-5">
                    Questions founders
                    <br className="hidden sm:block" /> always ask.
                  </h2>

                  <p className="text-base text-black/55 leading-relaxed mb-8 max-w-sm">
                    Honest answers to the real questions you have before making a
                    decision.
                  </p>

                  {/* Office Info */}
                  <div className="space-y-4 pt-6 border-t border-black/[0.06]">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-black/40 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                      <p className="text-sm text-black/55 leading-relaxed">
                        #31 Srusthti Police Colony, Kengeri,
                        <br />
                        Bangalore 560060, India
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-black/40 flex-shrink-0" strokeWidth={1.5} />
                      <a
                        href="mailto:contact@enlivotechnologies.com"
                        className="text-sm text-black/55 hover:text-black transition-colors"
                      >
                        contact@enlivotechnologies.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right: Accordion */}
                <div className="lg:w-[65%]">
                  <div className="border-t border-black/[0.06]">
                    {CONTACT_FAQS.map((faq, index) => (
                      <details key={index} className="group border-b border-black/[0.06]">
                        <summary className="flex items-center gap-6 cursor-pointer list-none py-6 md:py-7 select-none">
                          <span className="flex-shrink-0 text-sm font-medium tabular-nums text-black/30 group-open:text-black transition-colors duration-300">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="flex-1 text-base md:text-lg font-medium text-black/70 group-open:text-black pr-4 transition-colors duration-300">
                            {faq.question}
                          </h3>
                          <span className="flex-shrink-0 w-8 h-8 rounded-full border border-black/10 group-open:bg-black group-open:border-black flex items-center justify-center transition-all duration-300">
                            <ChevronDown className="w-4 h-4 text-black/40 group-open:text-white group-open:rotate-180 transition-all duration-300" strokeWidth={1.5} />
                          </span>
                        </summary>
                        <div className="pb-7 pl-[calc(0.875rem+1.5rem)] md:pl-[calc(0.875rem+1.5rem)] pr-12">
                          <p className="text-[15px] text-black/55 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Bottom CTA ── */}
        <section className="py-20 md:py-24 bg-black">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-2">
                  Ready to start building?
                </h2>
                <p className="text-base text-white/50">
                  Book a free 30-minute audit. No commitment, no sales pitch.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://cal.com/info-enlivo-yyhgqr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-xl font-medium text-[15px] hover:bg-white/90 transition-all duration-200 group"
                >
                  Book Free Audit
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="mailto:contact@enlivotechnologies.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-xl font-medium text-[15px] hover:bg-white/15 border border-white/10 transition-all duration-200"
                >
                  Email Us Instead
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
