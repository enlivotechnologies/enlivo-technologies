/**
 * app/(marketing)/privacy/page.tsx
 *
 * PURPOSE: Privacy Policy — premium legal page.
 * WHY: Essential for compliance, GDPR, and trust.
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

const SECTIONS = [
  {
    id: "collection",
    title: "Information We Collect",
    content: (
      <>
        <p>
          We may collect information that you provide directly to us, including:
        </p>
        <ul>
          <li>Contact information (name, email address, phone number)</li>
          <li>Company information and job title</li>
          <li>
            Information you provide when contacting us or requesting our services
          </li>
          <li>Information you submit through forms on our website</li>
        </ul>
      </>
    ),
  },
  {
    id: "usage",
    title: "How We Use Your Information",
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Provide, maintain, and improve our services</li>
          <li>Respond to your inquiries and communicate with you</li>
          <li>
            Send you updates, newsletters, and marketing communications (with
            your consent)
          </li>
          <li>Monitor and analyze usage patterns and trends</li>
          <li>Detect, prevent, and address technical issues</li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Information Sharing and Disclosure",
    content: (
      <>
        <p>
          We do not sell, trade, or rent your personal information to third
          parties. We may share your information only in the following
          circumstances:
        </p>
        <ul>
          <li>
            With service providers who assist us in operating our website and
            conducting business
          </li>
          <li>When required by law or to respond to legal process</li>
          <li>To protect our rights, privacy, safety, or property</li>
          <li>In connection with a merger, acquisition, or sale of assets</li>
        </ul>
      </>
    ),
  },
  {
    id: "security",
    title: "Data Security",
    content: (
      <p>
        We implement appropriate technical and organizational measures to protect
        your personal information against unauthorized access, alteration,
        disclosure, or destruction. However, no method of transmission over the
        internet or electronic storage is 100% secure.
      </p>
    ),
  },
  {
    id: "rights",
    title: "Your Rights",
    content: (
      <>
        <p>
          Depending on your location, you may have certain rights regarding your
          personal information, including:
        </p>
        <ul>
          <li>The right to access your personal information</li>
          <li>The right to correct inaccurate or incomplete information</li>
          <li>The right to request deletion of your personal information</li>
          <li>
            The right to object to processing of your personal information
          </li>
          <li>The right to data portability</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and Tracking Technologies",
    content: (
      <p>
        We use cookies and similar tracking technologies to collect and use
        personal information about you. You can instruct your browser to refuse
        all cookies or to indicate when a cookie is being sent. However, if you
        do not accept cookies, you may not be able to use some portions of our
        website.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Privacy Policy",
    content: (
      <p>
        We may update our Privacy Policy from time to time. We will notify you of
        any changes by posting the new Privacy Policy on this page and updating
        the &ldquo;Last updated&rdquo; date. You are advised to review this Privacy Policy
        periodically for any changes.
      </p>
    ),
  },
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
                    href="/refund-policy"
                    className="flex items-center gap-2 text-sm text-black/45 hover:text-black transition-colors"
                  >
                    Refund Policy
                  </Link>
                </div>
              </aside>

              {/* Main Content */}
              <div className="lg:w-[72%]">
                {/* Intro */}
                <div className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 mb-8">
                  <p className="text-[15px] md:text-base text-black/55 leading-relaxed">
                    At Enlivo Technologies, we respect your privacy and are
                    committed to protecting your personal information. This
                    Privacy Policy explains how we collect, use, disclose, and
                    safeguard your information when you use our website and
                    services.
                  </p>
                </div>

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
