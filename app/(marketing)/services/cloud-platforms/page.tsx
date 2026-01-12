/**
 * app/(marketing)/services/cloud-platforms/page.tsx
 *
 * PURPOSE: Cloud Platforms service detail page.
 * WHY: Targets cloud computing, migration, and DevOps keywords.
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

const SERVICE_SLUG = "cloud-platforms";

/**
 * Page Metadata
 */
export const metadata: Metadata = buildMetadata(getServiceSEO(SERVICE_SLUG)!);

/**
 * Cloud Platforms Service Page
 */
export default function CloudPlatformsPage() {
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
          { name: "Cloud Platforms" },
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
            Design and implement cloud-native architectures on AWS, Azure, and
            Google Cloud Platform. Our cloud experts help you migrate, optimize,
            and manage your cloud infrastructure for maximum performance and
            cost efficiency.
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
                title: "Cloud Migration",
                description: "Seamless migration to AWS, Azure, or GCP.",
              },
              {
                title: "Cloud Architecture",
                description: "Scalable, resilient cloud-native designs.",
              },
              {
                title: "DevOps & CI/CD",
                description: "Automated pipelines and infrastructure as code.",
              },
              {
                title: "Cloud Optimization",
                description: "Cost optimization and performance tuning.",
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
            Our cloud journey methodology ensures a smooth transition with
            minimal disruption to your business operations.
          </p>
        </section>

        {/* Platforms Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {headings.sections.technologies}
          </h2>
          {/* TODO: Add cloud platforms grid */}
          <p className="text-gray-600">
            We are certified partners with AWS, Microsoft Azure, and Google
            Cloud, with expertise in Kubernetes, Terraform, and modern DevOps
            tools.
          </p>
        </section>
      </Container>

      {/* CTA Section */}
      <CTA heading={headings.sections.cta} />
    </>
  );
}
