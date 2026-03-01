/**
 * app/(marketing)/refund-policy/page.tsx
 *
 * PURPOSE: Refund Policy — premium legal page.
 * WHY: Required for B2B trust. Startup founders investing $20-80K+
 *      want to know the refund terms before engaging.
 *
 * DESIGN:
 * - Hero with blue accent tag, bold headline, last-updated badge
 * - Two-column layout: sticky sidebar nav + scrollable content cards
 * - Numbered sections with clean typography
 * - Bottom CTA to contact
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";
import { ArrowUpRight, FileText, Mail } from "lucide-react";

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

const SECTIONS = [
  {
    id: "overview",
    title: "Overview",
    content: (
      <p>
        At Enlivo Technologies, we believe in transparent, fair billing. Our
        projects are structured around milestone-based payments — you pay for
        completed work, not promises. This policy outlines the terms under which
        refunds may be issued.
      </p>
    ),
  },
  {
    id: "milestones",
    title: "Milestone-Based Payments",
    content: (
      <p>
        All projects are divided into clearly defined milestones, each with
        specific deliverables and acceptance criteria. Payment for each milestone
        is due upon successful delivery and client approval of the corresponding
        deliverables.
      </p>
    ),
  },
  {
    id: "eligibility",
    title: "Refund Eligibility",
    content: (
      <>
        <p>Refunds may be issued under the following circumstances:</p>
        <ul>
          <li>
            Milestone deliverables do not meet the agreed-upon acceptance
            criteria after two revision cycles
          </li>
          <li>
            Project is cancelled before any development work has begun
            (discovery/planning fees may still apply)
          </li>
          <li>
            Significant delays caused by Enlivo that exceed the agreed timeline
            by more than 30%
          </li>
          <li>Material breach of the Service Agreement by Enlivo</li>
        </ul>
      </>
    ),
  },
  {
    id: "non-refundable",
    title: "Non-Refundable Items",
    content: (
      <>
        <p>The following are generally non-refundable:</p>
        <ul>
          <li>Work already completed and approved by the client</li>
          <li>
            Third-party licenses, hosting costs, or domain registrations
            purchased on behalf of the client
          </li>
          <li>
            Discovery and planning phase fees once the phase is completed
          </li>
          <li>Rush or expedited delivery premiums</li>
        </ul>
      </>
    ),
  },
  {
    id: "cancellation",
    title: "Cancellation Policy",
    content: (
      <p>
        Either party may terminate the engagement with 14 days written notice.
        Upon cancellation, the client is responsible for payment of all completed
        milestones and any work-in-progress at the pro-rata rate. All completed
        deliverables and source code will be transferred to the client upon final
        payment.
      </p>
    ),
  },
  {
    id: "how-to",
    title: "How to Request a Refund",
    content: (
      <p>
        To request a refund, please email us at{" "}
        <a
          href="mailto:contact@enlivotechnologies.com"
          className="text-[#2563EB] hover:underline"
        >
          contact@enlivotechnologies.com
        </a>{" "}
        with your project details, the milestone in question, and a description
        of the issue. We aim to respond to all refund requests within 3 business
        days.
      </p>
    ),
  },
  {
    id: "disputes",
    title: "Dispute Resolution",
    content: (
      <p>
        In the event of a payment dispute, both parties agree to engage in
        good-faith negotiations before pursuing any legal remedies. If a
        resolution cannot be reached, disputes shall be resolved in accordance
        with the terms outlined in the Service Agreement.
      </p>
    ),
  },
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
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-28">
              {/* Sidebar Nav (sticky) */}
              <aside className="lg:w-[28%] lg:sticky lg:top-32 lg:self-start h-fit hidden lg:block">
                <p className="text-xs font-medium text-black/35 uppercase tracking-wider mb-5">
                  On this page
                </p>
                <nav className="space-y-1">
                  {SECTIONS.map((section, i) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center gap-3 py-2 text-sm text-black/45 hover:text-black transition-colors duration-200 group"
                    >
                      <span className="text-[11px] tabular-nums text-black/25 group-hover:text-black/50 transition-colors">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{section.title}</span>
                    </a>
                  ))}
                </nav>

                {/* Related links */}
                <div className="mt-10 pt-8 border-t border-black/[0.06] space-y-3">
                  <p className="text-xs font-medium text-black/35 uppercase tracking-wider mb-4">
                    Related
                  </p>
                  <Link
                    href="/terms"
                    className="flex items-center gap-2 text-sm text-black/45 hover:text-black transition-colors"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="/privacy"
                    className="flex items-center gap-2 text-sm text-black/45 hover:text-black transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </div>

                {/* Note card */}
                <div className="mt-8 p-5 rounded-xl bg-black/[0.03] border border-black/[0.05]">
                  <p className="text-xs font-medium text-black/50 mb-1.5">
                    Note
                  </p>
                  <p className="text-[13px] text-black/40 leading-relaxed">
                    This refund policy is part of the Enlivo Technologies Service
                    Agreement.
                  </p>
                </div>
              </aside>

              {/* Main Content */}
              <div className="lg:w-[72%]">
                {/* Sections */}
                <div className="space-y-6">
                  {SECTIONS.map((section, i) => (
                    <div
                      key={section.id}
                      id={section.id}
                      className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                    >
                      <div className="flex items-start gap-4 mb-5">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                          {section.title}
                        </h2>
                      </div>
                      <div className="legal-content pl-12 text-[15px] text-black/55 leading-relaxed space-y-4 [&_ul]:space-y-2.5 [&_ul]:mt-3 [&_li]:flex [&_li]:items-start [&_li]:gap-3 [&_li]:text-[15px] [&_li]:text-black/55 [&_li]:leading-relaxed [&_li]:before:content-[''] [&_li]:before:w-1.5 [&_li]:before:h-1.5 [&_li]:before:rounded-full [&_li]:before:bg-black/20 [&_li]:before:flex-shrink-0 [&_li]:before:mt-2">
                        {section.content}
                      </div>
                    </div>
                  ))}
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
