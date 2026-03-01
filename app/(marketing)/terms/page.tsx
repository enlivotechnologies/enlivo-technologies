/**
 * app/(marketing)/terms/page.tsx
 *
 * PURPOSE: Terms of Service — premium legal page.
 * WHY: Essential for compliance and trust. Clean, readable design.
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
  title: "Terms of Service | Enlivo Technologies",
  description:
    "Read Enlivo Technologies' Terms of Service. Understand the terms and conditions governing your use of our website and services.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "terms of use",
    "user agreement",
    "legal terms",
  ],
  pathname: "/terms",
  ogImage: "/images/og/default.png",
});

const SIDEBAR_SECTIONS = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "use", title: "Use of Our Services" },
  { id: "ip", title: "Intellectual Property Rights" },
  { id: "availability", title: "Service Availability" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes", title: "Changes to These Terms" },
];

const RELATED_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms of Service" },
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
                Terms of Service
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-black/40">
                <span className="inline-flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" strokeWidth={1.5} />
                  Last updated: January 2025
                </span>
                <span className="hidden sm:inline text-black/15">|</span>
                <span>8 sections</span>
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
              />

              {/* Main Content */}
              <div className="lg:w-[70%]">
                {/* Intro */}
                <div className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 mb-6">
                  <p className="text-[15px] md:text-base text-black/55 leading-relaxed">
                    These Terms of Service (&ldquo;Terms&rdquo;) govern your
                    access to and use of Enlivo Technologies&apos; website and
                    services. By accessing or using our services, you agree to be
                    bound by these Terms.
                  </p>
                </div>

                {/* Section Cards */}
                <div className="space-y-5">
                  {/* 01 — Acceptance of Terms */}
                  <div
                    id="acceptance"
                    className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                        01
                      </span>
                      <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                        Acceptance of Terms
                      </h2>
                    </div>
                    <div className="pl-12 text-[15px] text-black/55 leading-relaxed space-y-4">
                      <p>
                        By accessing this website and using our services, you
                        acknowledge that you have read, understood, and agree to
                        be bound by these Terms and our Privacy Policy. If you do
                        not agree with any part of these Terms, you may not
                        access or use our services.
                      </p>
                    </div>
                  </div>

                  {/* 02 — Use of Our Services */}
                  <div
                    id="use"
                    className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                        02
                      </span>
                      <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                        Use of Our Services
                      </h2>
                    </div>
                    <div className="pl-12 text-[15px] text-black/55 leading-relaxed space-y-4">
                      <p>
                        You agree to use our services only for lawful purposes
                        and in accordance with these Terms. You agree not to:
                      </p>
                      <ul className="space-y-2.5 mt-3">
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            Use our services in any way that violates applicable
                            laws or regulations
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            Attempt to gain unauthorized access to any portion of
                            our website or services
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            Interfere with or disrupt the integrity or
                            performance of our services
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            Transmit any malicious code, viruses, or harmful data
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            Use automated systems to access our services without
                            permission
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* 03 — Intellectual Property Rights */}
                  <div
                    id="ip"
                    className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                        03
                      </span>
                      <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                        Intellectual Property Rights
                      </h2>
                    </div>
                    <div className="pl-12 text-[15px] text-black/55 leading-relaxed space-y-4">
                      <p>
                        All content, features, and functionality of our website
                        and services, including but not limited to text,
                        graphics, logos, and software, are owned by Enlivo
                        Technologies and are protected by international
                        copyright, trademark, and other intellectual property
                        laws.
                      </p>
                      <p>
                        You may not reproduce, distribute, modify, or create
                        derivative works of any content from our website without
                        our express written permission.
                      </p>
                    </div>
                  </div>

                  {/* 04 — Service Availability */}
                  <div
                    id="availability"
                    className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                        04
                      </span>
                      <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                        Service Availability
                      </h2>
                    </div>
                    <div className="pl-12 text-[15px] text-black/55 leading-relaxed space-y-4">
                      <p>
                        We strive to ensure our services are available and
                        reliable, but we do not guarantee that our website or
                        services will be uninterrupted, secure, or error-free. We
                        reserve the right to modify, suspend, or discontinue any
                        part of our services at any time without prior notice.
                      </p>
                    </div>
                  </div>

                  {/* 05 — Limitation of Liability */}
                  <div
                    id="liability"
                    className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                        05
                      </span>
                      <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                        Limitation of Liability
                      </h2>
                    </div>
                    <div className="pl-12 text-[15px] text-black/55 leading-relaxed space-y-4">
                      <p>
                        To the maximum extent permitted by law, Enlivo
                        Technologies shall not be liable for any indirect,
                        incidental, special, consequential, or punitive damages,
                        or any loss of profits or revenues, whether incurred
                        directly or indirectly, or any loss of data, use,
                        goodwill, or other intangible losses resulting from your
                        use of our services.
                      </p>
                    </div>
                  </div>

                  {/* 06 — Indemnification */}
                  <div
                    id="indemnification"
                    className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                        06
                      </span>
                      <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                        Indemnification
                      </h2>
                    </div>
                    <div className="pl-12 text-[15px] text-black/55 leading-relaxed space-y-4">
                      <p>
                        You agree to defend, indemnify, and hold harmless Enlivo
                        Technologies and its officers, directors, employees, and
                        agents from and against any claims, liabilities, damages,
                        losses, and expenses, including reasonable attorneys&apos;
                        fees, arising out of or in any way connected with your
                        use of our services or violation of these Terms.
                      </p>
                    </div>
                  </div>

                  {/* 07 — Governing Law */}
                  <div
                    id="governing-law"
                    className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                        07
                      </span>
                      <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                        Governing Law
                      </h2>
                    </div>
                    <div className="pl-12 text-[15px] text-black/55 leading-relaxed space-y-4">
                      <p>
                        These Terms shall be governed by and construed in
                        accordance with the laws of India, without regard to its
                        conflict of law provisions. Any disputes arising from
                        these Terms shall be subject to the exclusive
                        jurisdiction of the courts in Bangalore, Karnataka,
                        India.
                      </p>
                    </div>
                  </div>

                  {/* 08 — Changes to These Terms */}
                  <div
                    id="changes"
                    className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                        08
                      </span>
                      <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                        Changes to These Terms
                      </h2>
                    </div>
                    <div className="pl-12 text-[15px] text-black/55 leading-relaxed space-y-4">
                      <p>
                        We reserve the right to modify these Terms at any time.
                        We will notify you of any material changes by posting the
                        updated Terms on this page and updating the &ldquo;Last
                        updated&rdquo; date. Your continued use of our services
                        after such modifications constitutes acceptance of the
                        updated Terms.
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
                  Have questions about our terms?
                </h2>
                <p className="text-base text-white/45">
                  We&apos;re happy to clarify anything. Reach out anytime.
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
