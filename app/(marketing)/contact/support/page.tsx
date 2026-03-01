/**
 * app/(marketing)/contact/support/page.tsx
 *
 * PURPOSE: Support contact page with premium form layout.
 * WHY: Dedicated page for support inquiries — clean, modern, conversion-focused.
 *
 * DESIGN:
 * - Hero with bold headline + blue accent tag + back link
 * - Two-column layout: left info panel (sticky) + right form
 * - Trust indicators below the fold
 * - Consistent with /contact page design language
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Shield,
  Headphones,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import { SupportForm } from "@/components/sections/SupportForm";

/**
 * Page Metadata
 */
export const metadata: Metadata = buildMetadata({
  title: "Contact Support | Enlivo Technologies",
  description:
    "Reach out to our support team for quick help with product questions, onboarding, or technical issues. We respond within 4 hours.",
  keywords: [
    "support",
    "contact",
    "help",
    "technical support",
    "enlivo support",
  ],
  pathname: "/contact/support",
  ogImage: "/images/og/default.png",
});

/**
 * Support Page
 */
export default function SupportPage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
          { name: "Support" },
        ])}
      />

      <main className="min-h-screen bg-[#FAFAF9]">
        {/* ── Hero Section ── */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            {/* Back Link */}
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 text-black/45 hover:text-black transition-colors duration-200 text-sm font-medium mb-10"
            >
              <div className="w-8 h-8 rounded-full border border-black/10 group-hover:border-black/20 group-hover:bg-black/[0.03] flex items-center justify-center transition-all duration-200">
                <ArrowLeft
                  className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform"
                  strokeWidth={2}
                />
              </div>
              <span>Back to Contact</span>
            </Link>

            <div className="max-w-2xl">
              <div className="text-[11px] md:text-[12px] font-medium text-[#2563EB] flex items-center gap-2 uppercase mb-6">
                <div className="w-2 h-2 rounded-full bg-[#2563EB] shrink-0" />
                Support
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-black tracking-tight leading-[1.05] mb-5">
                How can we{" "}
                <span className="text-black/40">help you?</span>
              </h1>

              <p className="text-lg md:text-xl text-black/55 font-light leading-relaxed max-w-lg">
                Product questions, onboarding, or technical issues — our team
                responds within 4 hours.
              </p>
            </div>
          </div>
        </section>

        {/* ── Main Content: Info + Form ── */}
        <section className="py-16 md:py-24">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-28">
              {/* Left: Info Panel (sticky on desktop) */}
              <div className="lg:w-[35%] lg:sticky lg:top-32 lg:self-start h-fit">
                {/* Quick Stats */}
                <div className="space-y-6 mb-10">
                  {[
                    {
                      icon: Clock,
                      title: "< 4 Hour Response",
                      desc: "Average response time for all support inquiries.",
                    },
                    {
                      icon: Headphones,
                      title: "Dedicated Support",
                      desc: "Every project gets a dedicated point of contact.",
                    },
                    {
                      icon: Shield,
                      title: "NDA Protected",
                      desc: "All conversations are covered under NDA by default.",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-black/[0.04] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon
                          className="w-4 h-4 text-black"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <p className="text-[15px] font-medium text-black mb-0.5">
                          {item.title}
                        </p>
                        <p className="text-sm text-black/45 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-black/[0.06] pt-8 space-y-4">
                  <p className="text-xs font-medium text-black/35 uppercase tracking-wider mb-4">
                    Other ways to reach us
                  </p>

                  <div className="flex items-center gap-3">
                    <Mail
                      className="w-4 h-4 text-black/35 flex-shrink-0"
                      strokeWidth={1.5}
                    />
                    <a
                      href="mailto:contact@enlivotechnologies.com"
                      className="text-sm text-black/55 hover:text-black transition-colors"
                    >
                      contact@enlivotechnologies.com
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin
                      className="w-4 h-4 text-black/35 flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <p className="text-sm text-black/55 leading-relaxed">
                      #31 Srusthti Police Colony, Kengeri,
                      <br />
                      Bangalore 560060, India
                    </p>
                  </div>
                </div>

                {/* CTA: Book a call instead */}
                <div className="mt-10 p-6 rounded-2xl bg-black text-white">
                  <p className="text-[15px] font-medium mb-2">
                    Prefer a live conversation?
                  </p>
                  <p className="text-sm text-white/50 leading-relaxed mb-5">
                    Book a free 30-minute audit call with our team instead.
                  </p>
                  <a
                    href="https://cal.com/info-enlivo-yyhgqr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-lg text-sm font-medium hover:bg-white/90 transition-colors group"
                  >
                    Book a call
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:w-[65%]">
                <div className="bg-white rounded-2xl border border-black/[0.06] p-8 md:p-10 lg:p-12">
                  <div className="mb-8">
                    <h2 className="text-xl md:text-2xl font-medium text-black tracking-tight mb-2">
                      Submit a support inquiry
                    </h2>
                    <p className="text-sm text-black/45">
                      Fields marked with <span className="text-black">*</span>{" "}
                      are required. We&apos;ll get back within 4 hours.
                    </p>
                  </div>
                  <SupportForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
