/**
 * app/(marketing)/refund-policy/page.tsx
 *
 * PURPOSE: Refund Policy page — legal transparency.
 * WHY: Required for B2B trust. Startup founders investing $20-80K+
 *      want to know the refund terms before engaging.
 */

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";

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

export default function RefundPolicyPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Refund Policy" },
        ])}
      />

      <main className="min-h-screen bg-white">
        <section className="pt-36 pb-24 lg:pt-48 lg:pb-32">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <p className="text-[#D95D39] text-xs font-semibold tracking-[0.2em] uppercase mb-5">
              LEGAL
            </p>
            <h1 className="text-4xl sm:text-5xl font-medium text-gray-900 tracking-tight leading-[1.12] mb-4">
              Refund Policy
            </h1>
            <p className="text-gray-400 text-sm mb-12">
              Last updated: February 24, 2026
            </p>

            <div className="prose prose-gray max-w-none space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  At Enlivo Technologies, we believe in transparent, fair billing. Our projects are
                  structured around milestone-based payments — you pay for completed work, not promises.
                  This policy outlines the terms under which refunds may be issued.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Milestone-Based Payments</h2>
                <p className="text-gray-600 leading-relaxed">
                  All projects are divided into clearly defined milestones, each with specific deliverables
                  and acceptance criteria. Payment for each milestone is due upon successful delivery and
                  client approval of the corresponding deliverables.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Refund Eligibility</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Refunds may be issued under the following circumstances:
                </p>
                <ul className="space-y-3">
                  {[
                    "Milestone deliverables do not meet the agreed-upon acceptance criteria after two revision cycles",
                    "Project is cancelled before any development work has begun (discovery/planning fees may still apply)",
                    "Significant delays caused by Enlivo that exceed the agreed timeline by more than 30%",
                    "Material breach of the Service Agreement by Enlivo",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                        <span className="text-gray-500 text-xs font-bold">{i + 1}</span>
                      </span>
                      <span className="text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Non-Refundable Items</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The following are generally non-refundable:
                </p>
                <ul className="space-y-3">
                  {[
                    "Work already completed and approved by the client",
                    "Third-party licenses, hosting costs, or domain registrations purchased on behalf of the client",
                    "Discovery and planning phase fees once the phase is completed",
                    "Rush or expedited delivery premiums",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-300 mt-2.5" />
                      <span className="text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cancellation Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  Either party may terminate the engagement with 14 days written notice. Upon cancellation,
                  the client is responsible for payment of all completed milestones and any work-in-progress
                  at the pro-rata rate. All completed deliverables and source code will be transferred to
                  the client upon final payment.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. How to Request a Refund</h2>
                <p className="text-gray-600 leading-relaxed">
                  To request a refund, please email us at{" "}
                  <a href="mailto:hello@enlivotechnologies.com" className="text-[#D95D39] hover:underline">
                    hello@enlivotechnologies.com
                  </a>{" "}
                  with your project details, the milestone in question, and a description of the issue.
                  We aim to respond to all refund requests within 3 business days.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Dispute Resolution</h2>
                <p className="text-gray-600 leading-relaxed">
                  In the event of a payment dispute, both parties agree to engage in good-faith negotiations
                  before pursuing any legal remedies. If a resolution cannot be reached, disputes shall be
                  resolved in accordance with the terms outlined in the Service Agreement.
                </p>
              </div>

              <div className="border-t border-gray-100 pt-8 mt-12">
                <p className="text-sm text-gray-400">
                  This refund policy is part of the Enlivo Technologies Service Agreement.
                  For questions, contact{" "}
                  <a href="mailto:hello@enlivotechnologies.com" className="text-[#D95D39] hover:underline">
                    hello@enlivotechnologies.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
