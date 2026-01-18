/**
 * app/(marketing)/privacy/page.tsx
 *
 * PURPOSE: Privacy Policy page with premium dark UI design.
 * SEO: Essential legal page for compliance and trust.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";

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

export default function PrivacyPage() {
  const lastUpdated = "January 2025";

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy" },
        ])}
      />

      <main className="min-h-screen bg-white text-black">
        {/* Hero Header */}
        <section>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight leading-[1.1]">
                Privacy Policy
              </h1>
              <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-2xl">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 md:py-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none space-y-6">
              
              {/* Introduction */}
              <div className="space-y-3">
                <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
                  At Enlivo Technologies, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="space-y-3 pt-6">
                <h2 className="text-2xl md:text-3xl font-medium text-black tracking-tight">
                  1. Information We Collect
                </h2>
                <div className="space-y-3 text-gray-700 font-light leading-relaxed">
                  <p className="text-base">
                    We may collect information that you provide directly to us, including:
                  </p>
                  <ul className="space-y-2 pl-6 list-disc list-outside text-gray-700">
                    <li>Contact information (name, email address, phone number)</li>
                    <li>Company information and job title</li>
                    <li>Information you provide when contacting us or requesting our services</li>
                    <li>Information you submit through forms on our website</li>
                  </ul>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="space-y-3 pt-6">
                <h2 className="text-2xl md:text-3xl font-medium text-black tracking-tight">
                  2. How We Use Your Information
                </h2>
                <div className="space-y-3 text-gray-700 font-light leading-relaxed">
                  <p className="text-base">
                    We use the information we collect to:
                  </p>
                  <ul className="space-y-2 pl-6 list-disc list-outside text-gray-700">
                    <li>Provide, maintain, and improve our services</li>
                    <li>Respond to your inquiries and communicate with you</li>
                    <li>Send you updates, newsletters, and marketing communications (with your consent)</li>
                    <li>Monitor and analyze usage patterns and trends</li>
                    <li>Detect, prevent, and address technical issues</li>
                  </ul>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="space-y-3 pt-6">
                <h2 className="text-2xl md:text-3xl font-medium text-black tracking-tight">
                  3. Information Sharing and Disclosure
                </h2>
                <div className="space-y-3 text-gray-700 font-light leading-relaxed">
                  <p className="text-base">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="space-y-2 pl-6 list-disc list-outside text-gray-700">
                    <li>With service providers who assist us in operating our website and conducting business</li>
                    <li>When required by law or to respond to legal process</li>
                    <li>To protect our rights, privacy, safety, or property</li>
                    <li>In connection with a merger, acquisition, or sale of assets</li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div className="space-y-3 pt-6">
                <h2 className="text-2xl md:text-3xl font-medium text-black tracking-tight">
                  4. Data Security
                </h2>
                <div className="space-y-3 text-gray-700 font-light leading-relaxed">
                  <p className="text-base">
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                  </p>
                </div>
              </div>

              {/* Your Rights */}
              <div className="space-y-3 pt-6">
                <h2 className="text-2xl md:text-3xl font-medium text-black tracking-tight">
                  5. Your Rights
                </h2>
                <div className="space-y-3 text-gray-700 font-light leading-relaxed">
                  <p className="text-base">
                    Depending on your location, you may have certain rights regarding your personal information, including:
                  </p>
                  <ul className="space-y-2 pl-6 list-disc list-outside text-gray-700">
                    <li>The right to access your personal information</li>
                    <li>The right to correct inaccurate or incomplete information</li>
                    <li>The right to request deletion of your personal information</li>
                    <li>The right to object to processing of your personal information</li>
                    <li>The right to data portability</li>
                  </ul>
                </div>
              </div>

              {/* Cookies and Tracking */}
              <div className="space-y-3 pt-6">
                <h2 className="text-2xl md:text-3xl font-medium text-black tracking-tight">
                  6. Cookies and Tracking Technologies
                </h2>
                <div className="space-y-3 text-gray-700 font-light leading-relaxed">
                  <p className="text-base">
                    We use cookies and similar tracking technologies to collect and use personal information about you. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                  </p>
                </div>
              </div>

              {/* Changes to Privacy Policy */}
              <div className="space-y-3 pt-6">
                <h2 className="text-2xl md:text-3xl font-medium text-black tracking-tight">
                  7. Changes to This Privacy Policy
                </h2>
                <div className="space-y-3 text-gray-700 font-light leading-relaxed">
                  <p className="text-base">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-base text-gray-600 font-light mb-6">
              Have questions about our privacy practices?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-black font-medium hover:text-gray-700 transition-colors duration-200 border-b border-black/20 hover:border-black"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
