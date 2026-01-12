/**
 * app/(marketing)/services/cybersecurity/page.tsx
 *
 * PURPOSE: Cybersecurity service detail page.
 * WHY: Targets security-related commercial keywords.
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

const SERVICE_SLUG = "cybersecurity";

/**
 * Page Metadata
 */
export const metadata: Metadata = buildMetadata(getServiceSEO(SERVICE_SLUG)!);

/**
 * Cybersecurity Service Page
 */
export default function CybersecurityPage() {
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
          { name: "Cybersecurity" },
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
            Protect your digital assets with comprehensive security solutions.
            From security assessments and penetration testing to managed SOC
            services, we deliver enterprise-grade protection against evolving
            cyber threats.
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
                title: "Security Assessment",
                description:
                  "Comprehensive evaluation of your security posture.",
              },
              {
                title: "Penetration Testing",
                description: "Identify vulnerabilities before attackers do.",
              },
              {
                title: "Managed SOC",
                description: "24/7 security monitoring and incident response.",
              },
              {
                title: "Compliance",
                description:
                  "Meet regulatory requirements (SOC 2, HIPAA, etc.).",
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
            Our security-first approach ensures continuous protection and rapid
            incident response.
          </p>
        </section>

        {/* Technologies Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {headings.sections.technologies}
          </h2>
          {/* TODO: Add security technologies grid */}
          <p className="text-gray-600">
            We leverage leading security tools and frameworks including SIEM,
            EDR, vulnerability scanners, and compliance automation platforms.
          </p>
        </section>
      </Container>

      {/* CTA Section */}
      <CTA heading={headings.sections.cta} />
    </>
  );
}
