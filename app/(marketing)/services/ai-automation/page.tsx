/**
 * app/(marketing)/services/ai-automation/page.tsx
 *
 * PURPOSE: AI & Automation service detail page.
 * WHY: Targets AI/ML and automation-related commercial keywords.
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

const SERVICE_SLUG = "ai-automation";

/**
 * Page Metadata
 */
export const metadata: Metadata = buildMetadata(getServiceSEO(SERVICE_SLUG)!);

/**
 * AI & Automation Service Page
 */
export default function AIAutomationPage() {
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
          { name: "AI & Automation" },
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
            Leverage the power of artificial intelligence and machine learning
            to automate business processes, gain insights from data, and create
            intelligent applications that drive competitive advantage.
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
                title: "Machine Learning Solutions",
                description:
                  "Custom ML models for prediction and optimization.",
              },
              {
                title: "Process Automation",
                description: "Intelligent automation of repetitive tasks.",
              },
              {
                title: "Natural Language Processing",
                description: "Text analysis, chatbots, and conversational AI.",
              },
              {
                title: "Computer Vision",
                description: "Image recognition and visual data analysis.",
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
            From problem definition to model deployment, our AI development
            process ensures measurable business outcomes.
          </p>
        </section>

        {/* Technologies Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {headings.sections.technologies}
          </h2>
          {/* TODO: Add technologies grid */}
          <p className="text-gray-600">
            We use TensorFlow, PyTorch, OpenAI, Azure AI, AWS SageMaker, and
            other leading AI platforms.
          </p>
        </section>
      </Container>

      {/* CTA Section */}
      <CTA heading={headings.sections.cta} />
    </>
  );
}
