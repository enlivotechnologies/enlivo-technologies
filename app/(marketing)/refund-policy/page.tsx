/**
 * app/(marketing)/refund-policy/page.tsx
 *
 * PURPOSE: Refund Policy — premium legal page.
 * WHY: Required for B2B trust. Startup founders investing $20-80K+
 *      want to know the refund terms before engaging.
 *
 * DESIGN:
 * - Hero with blue accent tag, bold headline, last-updated badge
 * - Two-column layout: gray sidebar nav (scroll-tracked) + white content cards
 * - Numbered sections with clean typography
 * - Bottom CTA to contact
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";
import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { LegalSidebar } from "@/components/legal/LegalSidebar";

export const metadata: Metadata = buildMetadata({
  title: "Refund Policy | Enlivo Technologies",
  description:
    "Refund policy for Enlivo Technologies software development services. Understand our milestone-based payment structure, refund eligibility, and cancellation terms.",
  keywords: [
    "refund policy",
    "Enlivo refund",
    "software development refund",
    "cancellation policy",
    "payment terms",
  ],
  pathname: "/refund-policy",
});

const SIDEBAR_SECTIONS = [
  { id: "overview", title: "Overview" },
  { id: "milestones", title: "Milestone-Based Payments" },
  { id: "eligibility", title: "Refund Eligibility" },
  { id: "non-refundable", title: "Non-Refundable Items" },
  { id: "cancellation", title: "Cancellation Policy" },
  { id: "how-to", title: "How to Request a Refund" },
  { id: "disputes", title: "Dispute Resolution" },
];

const RELATED_LINKS = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
];

export default function RefundPolicyPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Refund Policy" },
        ])}
      />

      <main className="min-h-screen bg-[#FAFAF9]">
        {/* ── Hero ── */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-white border-b border-black/[0.06]">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="max-w-3xl">
              <div className="text-[11px] md:text-[12px] font-medium text-[#2563EB] flex items-center gap-2 uppercase mb-6">
                <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                Legal
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-black tracking-tight leading-[1.05] mb-5">
                Refund Policy
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-black/40">
                <span className="inline-flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" strokeWidth={1.5} />
                  Last updated: February 2026
                </span>
                <span className="hidden sm:inline text-black/15">|</span>
                <span>7 sections</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Content ── */}
        <section className="py-16 md:py-24">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-20">
              {/* Sidebar with scroll tracking */}
              <LegalSidebar
                sections={SIDEBAR_SECTIONS}
                relatedLinks={RELATED_LINKS}
                note="This refund policy is part of the Enlivo Technologies Service Agreement."
              />

              {/* Main Content */}
              <div className="lg:w-[70%]">
                {/* Section Cards */}
                <div className="space-y-5">
                  {/* 01 — Overview */}
                  <div
                    id="overview"
                    className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                        01
                      </span>
                      <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                        Overview
                      </h2>
                    </div>
                    <div className="pl-12 text-[15px] text-black/55 leading-relaxed space-y-4">
                      <p>
                        At Enlivo Technologies, we believe in transparent, fair
                        billing. Our projects are structured around
                        milestone-based payments — you pay for completed work,
                        not promises. This policy outlines the terms under which
                        refunds may be issued.
                      </p>
                    </div>
                  </div>

                  {/* 02 — Milestone-Based Payments */}
                  <div
                    id="milestones"
                    className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                        02
                      </span>
                      <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                        Milestone-Based Payments
                      </h2>
                    </div>
                    <div className="pl-12 text-[15px] text-black/55 leading-relaxed space-y-4">
                      <p>
                        All projects are divided into clearly defined milestones,
                        each with specific deliverables and acceptance criteria.
                        Payment for each milestone is due upon successful
                        delivery and client approval of the corresponding
                        deliverables.
                      </p>
                    </div>
                  </div>

                  {/* 03 — Refund Eligibility */}
                  <div
                    id="eligibility"
                    className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                        03
                      </span>
                      <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                        Refund Eligibility
                      </h2>
                    </div>
                    <div className="pl-12 text-[15px] text-black/55 leading-relaxed space-y-4">
                      <p>
                        Refunds may be issued under the following circumstances:
                      </p>
                      <ul className="space-y-2.5 mt-3">
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            Milestone deliverables do not meet the agreed-upon
                            acceptance criteria after two revision cycles
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            Project is cancelled before any development work has
                            begun (discovery/planning fees may still apply)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            Significant delays caused by Enlivo that exceed the
                            agreed timeline by more than 30%
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            Material breach of the Service Agreement by Enlivo
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* 04 — Non-Refundable Items */}
                  <div
                    id="non-refundable"
                    className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                        04
                      </span>
                      <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                        Non-Refundable Items
                      </h2>
                    </div>
                    <div className="pl-12 text-[15px] text-black/55 leading-relaxed space-y-4">
                      <p>The following are generally non-refundable:</p>
                      <ul className="space-y-2.5 mt-3">
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            Work already completed and approved by the client
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            Third-party licenses, hosting costs, or domain
                            registrations purchased on behalf of the client
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            Discovery and planning phase fees once the phase is
                            completed
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>Rush or expedited delivery premiums</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* 05 — Cancellation Policy */}
                  <div
                    id="cancellation"
                    className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                        05
                      </span>
                      <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                        Cancellation Policy
                      </h2>
                    </div>
                    <div className="pl-12 text-[15px] text-black/55 leading-relaxed space-y-4">
                      <p>
                        Either party may terminate the engagement with 14 days
                        written notice. Upon cancellation, the client is
                        responsible for payment of all completed milestones and
                        any work-in-progress at the pro-rata rate. All completed
                        deliverables and source code will be transferred to the
                        client upon final payment.
                      </p>
                    </div>
                  </div>

                  {/* 06 — How to Request a Refund */}
                  <div
                    id="how-to"
                    className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                        06
                      </span>
                      <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                        How to Request a Refund
                      </h2>
                    </div>
                    <div className="pl-12 text-[15px] text-black/55 leading-relaxed space-y-4">
                      <p>
                        To request a refund, please email us at{" "}
                        <a
                          href="mailto:contact@enlivotechnologies.com"
                          className="text-[#2563EB] hover:underline"
                        >
                          contact@enlivotechnologies.com
                        </a>{" "}
                        with your project details, the milestone in question, and
                        a description of the issue. We aim to respond to all
                        refund requests within 3 business days.
                      </p>
                    </div>
                  </div>

                  {/* 07 — Dispute Resolution */}
                  <div
                    id="disputes"
                    className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                        07
                      </span>
                      <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                        Dispute Resolution
                      </h2>
                    </div>
                    <div className="pl-12 text-[15px] text-black/55 leading-relaxed space-y-4">
                      <p>
                        In the event of a payment dispute, both parties agree to
                        engage in good-faith negotiations before pursuing any
                        legal remedies. If a resolution cannot be reached,
                        disputes shall be resolved in accordance with the terms
                        outlined in the Service Agreement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="py-16 md:py-20 bg-black">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-2">
                  Questions about refunds or billing?
                </h2>
                <p className="text-base text-white/45">
                  We respond to all refund inquiries within 3 business days.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-xl font-medium text-[15px] hover:bg-white/90 transition-all duration-200 group"
                >
                  Contact Us
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <a
                  href="mailto:contact@enlivotechnologies.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white rounded-xl font-medium text-[15px] hover:bg-white/15 border border-white/10 transition-all duration-200"
                >
                  <Mail className="w-4 h-4 mr-2" strokeWidth={1.5} />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
