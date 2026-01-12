/**
 * app/(marketing)/services/page.tsx
 *
 * PURPOSE: Services index/landing page.
 * WHY: Hub page that links to all service detail pages.
 *      Important for internal linking and SEO.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";
import { SERVICES_INDEX_SEO } from "@/seo/services";
import { SERVICES } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/cards/ServiceCard";

/**
 * Services Index Metadata
 */
export const metadata: Metadata = buildMetadata(SERVICES_INDEX_SEO);

/**
 * Services Index Page
 */
export default function ServicesPage() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services" },
        ])}
      />

      <Container className="py-16 lg:py-24">
        {/* Page Header */}
        <header className="text-center mb-16">
          {/* H1 - Primary heading */}
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>

          {/* TODO: Add compelling intro copy */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions to transform your business. From
            product engineering to enterprise security, we deliver excellence.
          </p>
        </header>

        {/* Services Grid */}
        <section aria-labelledby="services-list-heading">
          <h2 id="services-list-heading" className="sr-only">
            All Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.name}
                description={service.shortDescription}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-gray-600 mb-6">
            Our team can help identify the right solutions for your business
            challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </section>
      </Container>
    </>
  );
}
