/**
 * app/(marketing)/services/enterprise-systems/page.tsx
 *
 * PURPOSE: Enterprise Systems service detail page.
 * WHY: Targets enterprise modernization and integration keywords.
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

const SERVICE_SLUG = "enterprise-systems";

/**
 * Page Metadata
 */
export const metadata: Metadata = buildMetadata(getServiceSEO(SERVICE_SLUG)!);

/**
 * Enterprise Systems Service Page
 */
export default function EnterpriseSystemsPage() {
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
          { name: "Enterprise Systems" },
        ])}
      />

      {/* Hero Section with H1 */}
      <ServiceHero
        heading={headings.h1}
        subheading={headings.sections.overview}
      />

      <Container className="py-16">
        {/* Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {headings.sections.overview}
          </h2>
          {/* TODO: Add overview content */}
          <p className="text-gray-600 text-lg">
            Modernize legacy systems and integrate enterprise applications to
            drive operational efficiency. We specialize in ERP implementation,
            system integration, and digital transformation for large
            organizations.
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
                title: "Legacy Modernization",
                description:
                  "Transform outdated systems into modern architectures.",
              },
              {
                title: "ERP Implementation",
                description: "End-to-end ERP deployment and customization.",
              },
              {
                title: "System Integration",
                description:
                  "Connect disparate systems for seamless operations.",
              },
              {
                title: "Data Migration",
                description:
                  "Safe, reliable data migration with zero downtime.",
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
            Our methodical approach ensures minimal disruption during
            transformation.
          </p>
        </section>

        {/* Technologies Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {headings.sections.technologies}
          </h2>
          {/* TODO: Add technologies grid */}
          <p className="text-gray-600">
            We work with SAP, Oracle, Salesforce, custom middleware, and modern
            integration platforms.
          </p>
        </section>
      </Container>

      {/* CTA Section */}
      <CTA />
    </>
  );
}
