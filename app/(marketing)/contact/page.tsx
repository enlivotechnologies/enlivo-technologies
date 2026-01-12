/**
 * app/(marketing)/contact/page.tsx
 *
 * PURPOSE: Contact page - high-intent conversion page.
 * WHY: Users on this page are ready to engage. Should be fast,
 *      accessible, and conversion-optimized.
 */

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/schema";
import { CONTACT_SEO, CONTACT_HEADINGS, CONTACT_FAQS } from "@/seo/contact";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/sections/ContactForm";

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

      {/* Hero Section */}
      <header className="bg-gray-900 text-white py-16 lg:py-24">
        <Container>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            {CONTACT_HEADINGS.h1}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Ready to transform your business? Get in touch with our team to
            discuss your project requirements.
          </p>
        </Container>
      </header>

      <Container className="py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {CONTACT_HEADINGS.sections.form}
            </h2>
            <ContactForm />
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {CONTACT_HEADINGS.sections.info}
            </h2>

            {/* TODO: Add actual contact information */}
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <a
                  href="mailto:contact@company.com"
                  className="text-blue-600 hover:underline"
                >
                  contact@company.com
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                <a
                  href="tel:+1-555-555-5555"
                  className="text-blue-600 hover:underline"
                >
                  +1 (555) 555-5555
                </a>
              </div>

              {/* TODO: Add office locations if applicable */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                <address className="text-gray-600 not-italic">
                  123 Business Avenue
                  <br />
                  Suite 100
                  <br />
                  City, State 12345
                </address>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="mt-16 pt-16 border-t">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {CONTACT_HEADINGS.sections.faq}
          </h2>

          <div className="space-y-6">
            {CONTACT_FAQS.map((faq, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}
