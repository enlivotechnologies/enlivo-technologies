/**
 * app/(marketing)/terms/page.tsx
 *
 * PURPOSE: Terms of Service page with premium dark UI design.
 * SEO: Essential legal page for compliance and trust.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";

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

export default function TermsPage() {
  const lastUpdated = "January 2025";

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Terms of Service" },
        ])}
      />

      <main className="min-h-screen bg-white text-black">
        {/* Hero Header */}
        <section>
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16 py-12 md:py-16">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight leading-[1.1]">
                Terms of Service
              </h1>
              <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-2xl">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 md:py-10">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="prose prose-lg max-w-none space-y-6">
              
              {/* Introduction */}
              <div className="space-y-3">
                <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed">
                  These Terms of Service ("Terms") govern your access to and use of Enlivo Technologies' website and services. By accessing or using our services, you agree to be bound by these Terms.
                </p>
              </div>

              {/* Acceptance of Terms */}
              <div className="space-y-3 pt-6">
                <h2 className="text-2xl md:text-3xl font-medium text-black tracking-tight">
                  1. Acceptance of Terms
                </h2>
                <div className="space-y-3 text-gray-700 font-light leading-relaxed">
                  <p className="text-base">
                    By accessing this website and using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree with any part of these Terms, you may not access or use our services.
                  </p>
                </div>
              </div>

              {/* Use of Services */}
              <div className="space-y-3 pt-6">
                <h2 className="text-2xl md:text-3xl font-medium text-black tracking-tight">
                  2. Use of Our Services
                </h2>
                <div className="space-y-3 text-gray-700 font-light leading-relaxed">
                  <p className="text-base">
                    You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
                  </p>
                  <ul className="space-y-2 pl-6 list-disc list-outside text-gray-700">
                    <li>Use our services in any way that violates applicable laws or regulations</li>
                    <li>Attempt to gain unauthorized access to any portion of our website or services</li>
                    <li>Interfere with or disrupt the integrity or performance of our services</li>
                    <li>Transmit any malicious code, viruses, or harmful data</li>
                    <li>Use automated systems to access our services without permission</li>
                  </ul>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="space-y-3 pt-6">
                <h2 className="text-2xl md:text-3xl font-medium text-black tracking-tight">
                  3. Intellectual Property Rights
                </h2>
                <div className="space-y-3 text-gray-700 font-light leading-relaxed">
                  <p className="text-base">
                    All content, features, and functionality of our website and services, including but not limited to text, graphics, logos, and software, are owned by Enlivo Technologies and are protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                  <p className="text-base">
                    You may not reproduce, distribute, modify, or create derivative works of any content from our website without our express written permission.
                  </p>
                </div>
              </div>

              {/* Service Availability */}
              <div className="space-y-3 pt-6">
                <h2 className="text-2xl md:text-3xl font-medium text-black tracking-tight">
                  4. Service Availability
                </h2>
                <div className="space-y-3 text-gray-700 font-light leading-relaxed">
                  <p className="text-base">
                    We strive to ensure our services are available and reliable, but we do not guarantee that our website or services will be uninterrupted, secure, or error-free. We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="space-y-3 pt-6">
                <h2 className="text-2xl md:text-3xl font-medium text-black tracking-tight">
                  5. Limitation of Liability
                </h2>
                <div className="space-y-3 text-gray-700 font-light leading-relaxed">
                  <p className="text-base">
                    To the maximum extent permitted by law, Enlivo Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
                  </p>
                </div>
              </div>

              {/* Indemnification */}
              <div className="space-y-3 pt-6">
                <h2 className="text-2xl md:text-3xl font-medium text-black tracking-tight">
                  6. Indemnification
                </h2>
                <div className="space-y-3 text-gray-700 font-light leading-relaxed">
                  <p className="text-base">
                    You agree to defend, indemnify, and hold harmless Enlivo Technologies and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of our services or violation of these Terms.
                  </p>
                </div>
              </div>

              {/* Governing Law */}
              <div className="space-y-3 pt-6">
                <h2 className="text-2xl md:text-3xl font-medium text-black tracking-tight">
                  7. Governing Law
                </h2>
                <div className="space-y-3 text-gray-700 font-light leading-relaxed">
                  <p className="text-base">
                    These Terms shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the appropriate courts.
                  </p>
                </div>
              </div>

              {/* Changes to Terms */}
              <div className="space-y-3 pt-6">
                <h2 className="text-2xl md:text-3xl font-medium text-black tracking-tight">
                  8. Changes to These Terms
                </h2>
                <div className="space-y-3 text-gray-700 font-light leading-relaxed">
                  <p className="text-base">
                    We reserve the right to modify these Terms at any time. We will notify you of any material changes by posting the updated Terms on this page and updating the "Last updated" date. Your continued use of our services after such modifications constitutes acceptance of the updated Terms.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <section className="py-12">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16 text-center">
            <p className="text-base text-gray-600 font-light mb-6">
              Have questions about our terms?
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
