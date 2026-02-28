/**
 * app/(marketing)/contact/page.tsx
 *
 * PURPOSE: Contact page - premium, conversion-optimized design.
 * WHY: Users on this page are ready to engage. Clean, modern UI.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/schema";
import { CONTACT_SEO, CONTACT_HEADINGS, CONTACT_FAQS } from "@/seo/contact";
import { Mail, MessageCircle, Briefcase } from "lucide-react";

/**
 * Page Metadata
 */
export const metadata: Metadata = buildMetadata(CONTACT_SEO);

/**
 * Contact Page
 */
export default function ContactPage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact" },
        ])}
      />
      <JsonLd data={buildFAQSchema(CONTACT_FAQS)} />

      <main className="min-h-screen bg-white">
      {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16 text-center">
            <div className="space-y-4">
              <p className="text-sm md:text-base font-medium text-gray-600 uppercase tracking-wider">
                CONTACT
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight leading-[1.1]">
                How can we help?
          </h1>
              <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-2xl mx-auto">
                Whether you&apos;re ready to see Enlivo in action or just need a hand with a question, our sales and support teams are here to help.
              </p>
            </div>
          </div>
          </section>

        {/* Contact Cards Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-[#FBFAF9]">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
              
              {/* Support Card */}
              <div className="bg-[#FFFFFF] rounded-2xl p-10 md:p-12 min-h-[380px] flex flex-col">
                <div className="flex flex-col h-full space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-7 h-7 text-black" strokeWidth={2} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-medium text-black tracking-tight">
                      Support
            </h2>
                  </div>
                  <p className="text-[16px] text-black/70 font-light leading-relaxed flex-grow">
                    Email us at{" "}
                    <a 
                      href="mailto:contact@enlivotechnologies.com" 
                      className="text-black hover:text-gray-700 font-medium"
                    >
                     contact@enlivotechnologies.com
                    </a>{" "}
                    with your question.
                  </p>
                  <Link
                    href="/contact/support"
                    className="inline-flex items-center justify-center w-full px-8 py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-all duration-200 text-base shadow-sm hover:shadow-md mt-auto"
                  >
                    Submit an inquiry
                  </Link>
                </div>
              </div>

              {/* Sales Card */}
              <div className="bg-[#F2EBE8] rounded-2xl p-10 md:p-12 min-h-[380px] flex flex-col">
                <div className="flex flex-col h-full space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-7 h-7 text-black" strokeWidth={2} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-medium text-black tracking-tight">
                      Sales
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 font-light leading-relaxed flex-grow">
                    Connect with our sales team to request a demo or discuss pricing.
                  </p>
                <a
                    href="https://cal.com/info-enlivo-yyhgqr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full px-8 py-4 bg-[#F5F5F4] border border-black/10 text-black rounded-xl font-medium hover:bg-black/5 hover:border-black/20 transition-all duration-200 text-base mt-auto"
                  >
                    Book a demo
                  </a>
                </div>
              </div>

              {/* Media Inquiry Card */}
              <div className="bg-[#EDEDED] rounded-2xl p-10 md:p-12 min-h-[380px] flex flex-col">
                <div className="flex flex-col h-full space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-7 h-7 text-black" strokeWidth={2} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-medium text-black tracking-tight">
                      Media inquiry
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 font-light leading-relaxed flex-grow">
                    Reach out to our team for press requests or media opportunities.
                  </p>
                <a
                    href="mailto:contact@enlivotechnologies.com?subject=Media Inquiry"
                    className="inline-flex items-center justify-center w-full px-8 py-4 bg-[#FAFAFA] border border-black/10 text-black rounded-xl font-medium hover:bg-black/5 hover:border-black/20 transition-all duration-200 text-base mt-auto"
                >
                    Email us
                </a>
                </div>
              </div>

              </div>
            </div>
          </section>

        {/* FAQ Section */}
        {CONTACT_FAQS && CONTACT_FAQS.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
              <h2 className="text-3xl md:text-4xl font-medium text-black tracking-tight mb-12 text-center">
                Frequently asked questions
          </h2>

              <div>
            {CONTACT_FAQS.map((faq, index) => (
                  <details
                    key={index}
                    className="group"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none py-4 border-b border-gray-200 hover:text-gray-700 transition-colors duration-200">
                      <h3 className="text-base md:text-lg font-medium text-black pr-4">
                  {faq.question}
                </h3>
                      <svg
                        className="w-5 h-5 text-black transform transition-transform duration-200 group-open:rotate-180 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </summary>
                    <div className="pt-4 pb-6">
                      <p className="text-base text-gray-600 font-light leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
          </div>
        </section>
        )}
      </main>
    </>
  );
}
