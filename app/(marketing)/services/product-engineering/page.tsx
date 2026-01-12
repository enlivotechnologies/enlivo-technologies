/**
 * app/(marketing)/services/product-engineering/page.tsx
 *
 * PURPOSE: Product Engineering service detail page.
 * WHY: High-intent commercial page targeting product engineering keywords.
 */

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";
import { getServiceSEO, getServiceHeadings } from "@/seo/services";
import { getServiceSchema } from "@/seo/schemas/service";
import { Container } from "@/components/ui/Container";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceCapabilities } from "@/components/sections/ServiceCapabilities";
import { CTA } from "@/components/sections/CTA";

const SERVICE_SLUG = "product-engineering";

/**
 * Page Metadata
 */
export const metadata: Metadata = buildMetadata(getServiceSEO(SERVICE_SLUG)!);

/**
 * Product Engineering Service Page
 */
export default function ProductEngineeringPage() {
  const headings = getServiceHeadings(SERVICE_SLUG)!;
  const serviceSchema = getServiceSchema(SERVICE_SLUG);

  return (
    <>
      {/* Structured Data */}
      {serviceSchema && <JsonLd data={serviceSchema} />}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Product Engineering" },
        ])}
      />

      {/* Hero Section with H1 */}
      <ServiceHero
        heading={headings.h1}
        subheading={headings.sections.overview}
        // TODO: Add description prop when copy is ready
      />

      <Container className="py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {headings.sections.overview}
          </h2>
          {/* TODO: Add overview content */}
          <p className="text-gray-600 text-lg">
            Our product engineering team transforms ideas into scalable digital
            products. From MVPs to enterprise platforms, we deliver end-to-end
            solutions using modern technologies and agile methodologies.
          </p>
        </section>

        {/* Capabilities Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {headings.sections.capabilities}
          </h2>
          <ServiceCapabilities
            capabilities={[
              // TODO: Replace with actual capabilities
              {
                title: "Custom Software Development",
                description:
                  "Tailored solutions built for your specific needs.",
              },
              {
                title: "MVP Development",
                description: "Rapid prototyping to validate your ideas.",
              },
              {
                title: "Product Scaling",
                description: "Scale your products for enterprise demands.",
              },
              {
                title: "Technical Architecture",
                description: "Robust, scalable system design.",
              },
            ]}
          />
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {headings.sections.process}
          </h2>
          {/* TODO: Add process steps component */}
          <p className="text-gray-600">
            Our proven development process ensures quality delivery on time and
            budget.
          </p>
        </section>

        {/* Technologies Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {headings.sections.technologies}
          </h2>
          {/* TODO: Add technologies grid */}
          <p className="text-gray-600">
            We use modern technology stacks including React, Node.js, Python,
            cloud platforms, and more.
          </p>
        </section>
      </Container>

      {/* CTA Section */}
      <CTA heading={headings.sections.cta} />
    </>
  );
}
