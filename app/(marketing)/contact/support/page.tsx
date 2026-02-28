/**
 * app/(marketing)/contact/support/page.tsx
 *
 * PURPOSE: Support contact page with form.
 * WHY: Dedicated page for support inquiries.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";
import { ArrowLeft, Phone } from "lucide-react";
import { SupportForm } from "@/components/sections/SupportForm";

/**
 * Page Metadata
 */
export const metadata: Metadata = buildMetadata({
  title: "Contact Support | Enlivo Technologies",
  description:
    "Reach out to our support team for quick help with product questions, onboarding, or technical issues.",
  keywords: ["support", "contact", "help", "technical support"],
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

      <main className="min-h-screen bg-[#F9FAFB]">
        {/* Back Link */}
        <section className="pt-8 pb-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[90rem] mx-auto">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors duration-200 text-sm"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" strokeWidth={2} />
              <span>Back to Contact</span>
            </Link>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[90rem] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Left Section - Information */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.1] mb-6">
                    Contact support
                  </h1>
                  <p className="text-lg text-gray-600 font-light leading-relaxed">
                    Reach out to our support team for quick help with product questions, onboarding, or technical issues.
                  </p>
                </div>

                {/* Sales Section */}
                {/* <div className="pt-8 border-t border-gray-200">
                  <p className="text-gray-600 font-light mb-3">
                    Looking for details on plans, pricing, or booking a demo?
                  </p>
                  <Link
                    href="https://cal.com/nishal-pktyks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-black font-medium hover:text-gray-700 transition-colors duration-200"
                  >
                    Talk to sales
                  </Link>
                </div> */}
              </div>

              {/* Right Section - Contact Form */}
              <div>
                <SupportForm />
              </div>

            </div>
          </div>
        </section>
      </main>
    </>
  );
}
