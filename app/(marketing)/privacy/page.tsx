/**
 * app/(marketing)/privacy/page.tsx
 *
 * PURPOSE: Privacy Policy — premium legal page.
 * WHY: Essential for compliance, GDPR, and trust.
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
  title: "Privacy Policy | Enlivo Technologies",
  description:
    "Read Enlivo Technologies' Privacy Policy. Learn how we collect, use, and protect your personal information and data.",
  keywords: [
    "privacy policy",
    "data protection",
    "privacy statement",
    "data privacy",
    "GDPR compliance",
  ],
  pathname: "/privacy",
  ogImage: "/images/og/default.png",
});

const SIDEBAR_SECTIONS = [
  { id: "collection", title: "Information We Collect" },
  { id: "usage", title: "How We Use Your Information" },
  { id: "sharing", title: "Information Sharing & Disclosure" },
  { id: "security", title: "Data Security" },
  { id: "rights", title: "Your Rights" },
  { id: "cookies", title: "Cookies & Tracking" },
  { id: "changes", title: "Changes to This Policy" },
];

const RELATED_LINKS = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/refund-policy", label: "Refund Policy" },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy" },
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
                Privacy Policy
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-black/40">
                <span className="inline-flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" strokeWidth={1.5} />
                  Last updated: January 2025
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
              />

              {/* Main Content */}
              <div className="lg:w-[70%]">
                {/* Intro */}
                <div className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 mb-6">
                  <p className="text-[15px] md:text-base text-black/55 leading-relaxed">
                    At Enlivo Technologies, we respect your privacy and are
                    committed to protecting your personal information. This
                    Privacy Policy explains how we collect, use, disclose, and
                    safeguard your information when you use our website and
                    services.
                  </p>
                </div>

                {/* Section Cards */}
                <div className="space-y-5">
                  {/* 01 — Information We Collect */}
                  <div
                    id="collection"
                    className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                        01
                      </span>
                      <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                        Information We Collect
                      </h2>
                    </div>
                    <div className="pl-12 text-[15px] text-black/55 leading-relaxed space-y-4">
                      <p>
                        We may collect information that you provide directly to
                        us, including:
                      </p>
                      <ul className="space-y-2.5 mt-3">
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            Contact information (name, email address, phone
                            number)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>Company information and job title</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            Information you provide when contacting us or
                            requesting our services
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            Information you submit through forms on our website
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* 02 — How We Use Your Information */}
                  <div
                    id="usage"
                    className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                        02
                      </span>
                      <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                        How We Use Your Information
                      </h2>
                    </div>
                    <div className="pl-12 text-[15px] text-black/55 leading-relaxed space-y-4">
                      <p>We use the information we collect to:</p>
                      <ul className="space-y-2.5 mt-3">
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            Provide, maintain, and improve our services
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            Respond to your inquiries and communicate with you
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            Send you updates, newsletters, and marketing
                            communications (with your consent)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            Monitor and analyze usage patterns and trends
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            Detect, prevent, and address technical issues
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* 03 — Information Sharing and Disclosure */}
                  <div
                    id="sharing"
                    className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                        03
                      </span>
                      <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                        Information Sharing & Disclosure
                      </h2>
                    </div>
                    <div className="pl-12 text-[15px] text-black/55 leading-relaxed space-y-4">
                      <p>
                        We do not sell, trade, or rent your personal information
                        to third parties. We may share your information only in
                        the following circumstances:
                      </p>
                      <ul className="space-y-2.5 mt-3">
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            With service providers who assist us in operating our
                            website and conducting business
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            When required by law or to respond to legal process
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            To protect our rights, privacy, safety, or property
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            In connection with a merger, acquisition, or sale of
                            assets
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* 04 — Data Security */}
                  <div
                    id="security"
                    className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                        04
                      </span>
                      <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                        Data Security
                      </h2>
                    </div>
                    <div className="pl-12 text-[15px] text-black/55 leading-relaxed space-y-4">
                      <p>
                        We implement appropriate technical and organizational
                        measures to protect your personal information against
                        unauthorized access, alteration, disclosure, or
                        destruction. However, no method of transmission over the
                        internet or electronic storage is 100% secure.
                      </p>
                    </div>
                  </div>

                  {/* 05 — Your Rights */}
                  <div
                    id="rights"
                    className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                        05
                      </span>
                      <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                        Your Rights
                      </h2>
                    </div>
                    <div className="pl-12 text-[15px] text-black/55 leading-relaxed space-y-4">
                      <p>
                        Depending on your location, you may have certain rights
                        regarding your personal information, including:
                      </p>
                      <ul className="space-y-2.5 mt-3">
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            The right to access your personal information
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            The right to correct inaccurate or incomplete
                            information
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            The right to request deletion of your personal
                            information
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>
                            The right to object to processing of your personal
                            information
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-black/20 flex-shrink-0 mt-2" />
                          <span>The right to data portability</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* 06 — Cookies and Tracking Technologies */}
                  <div
                    id="cookies"
                    className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                        06
                      </span>
                      <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                        Cookies & Tracking Technologies
                      </h2>
                    </div>
                    <div className="pl-12 text-[15px] text-black/55 leading-relaxed space-y-4">
                      <p>
                        We use cookies and similar tracking technologies to
                        collect and use personal information about you. You can
                        instruct your browser to refuse all cookies or to
                        indicate when a cookie is being sent. However, if you do
                        not accept cookies, you may not be able to use some
                        portions of our website.
                      </p>
                    </div>
                  </div>

                  {/* 07 — Changes to This Privacy Policy */}
                  <div
                    id="changes"
                    className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 scroll-mt-28"
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center text-xs font-medium text-black/40 tabular-nums mt-0.5">
                        07
                      </span>
                      <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight leading-snug">
                        Changes to This Privacy Policy
                      </h2>
                    </div>
                    <div className="pl-12 text-[15px] text-black/55 leading-relaxed space-y-4">
                      <p>
                        We may update our Privacy Policy from time to time. We
                        will notify you of any changes by posting the new Privacy
                        Policy on this page and updating the &ldquo;Last
                        updated&rdquo; date. You are advised to review this
                        Privacy Policy periodically for any changes.
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
                  Questions about your privacy?
                </h2>
                <p className="text-base text-white/45">
                  We take data protection seriously. Reach out anytime.
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
