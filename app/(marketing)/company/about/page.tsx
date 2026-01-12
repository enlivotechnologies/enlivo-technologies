/**
 * app/(marketing)/company/about/page.tsx
 *
 * PURPOSE: About page - company overview, mission, values.
 * WHY: Critical for E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).
 *      Google uses About pages to understand brand credibility.
 */

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";
import { ABOUT_SEO, COMPANY_HEADINGS } from "@/seo/company";
import { ORGANIZATION_SCHEMA } from "@/seo/schemas/organization";
import { Container } from "@/components/ui/Container";

/**
 * Page Metadata
 */
export const metadata: Metadata = buildMetadata(ABOUT_SEO);

/**
 * About Page
 */
export default function AboutPage() {
  const headings = COMPANY_HEADINGS.about;

  return (
    <>
      {/* Structured Data */}
      <JsonLd data={ORGANIZATION_SCHEMA} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Company", path: "/company" },
          { name: "About" },
        ])}
      />

      {/* Hero Section */}
      <header className="bg-gray-900 text-white py-16 lg:py-24">
        <Container>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{headings.h1}</h1>
          {/* TODO: Add compelling tagline */}
          <p className="text-xl text-gray-300 max-w-2xl">
            We are a team of technologists passionate about helping enterprises
            transform through innovative solutions.
          </p>
        </Container>
      </header>

      <Container className="py-16">
        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {headings.sections.story}
          </h2>
          {/* TODO: Add founding story */}
          <p className="text-gray-600 text-lg">
            Founded with a vision to bridge the gap between cutting-edge
            technology and enterprise needs, we&apos;ve grown from a small team
            to a trusted partner for organizations worldwide.
          </p>
        </section>

        {/* Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {headings.sections.mission}
          </h2>
          {/* TODO: Add mission statement */}
          <p className="text-gray-600 text-lg">
            Our mission is to empower enterprises with technology solutions that
            drive growth, efficiency, and innovation.
          </p>
        </section>

        {/* Vision */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {headings.sections.vision}
          </h2>
          {/* TODO: Add vision statement */}
          <p className="text-gray-600 text-lg">
            To be the most trusted technology partner for enterprises undergoing
            digital transformation.
          </p>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {headings.sections.values}
          </h2>
          {/* TODO: Add values grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do.",
              },
              {
                title: "Innovation",
                description: "We embrace new ideas and technologies.",
              },
              {
                title: "Integrity",
                description: "We act with honesty and transparency.",
              },
              {
                title: "Partnership",
                description: "We succeed when our clients succeed.",
              },
            ].map((value) => (
              <div key={value.title} className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {headings.sections.leadership}
          </h2>
          {/* TODO: Add leadership team grid */}
          <p className="text-gray-600">
            Our leadership team brings decades of combined experience in
            technology and business transformation.
          </p>
        </section>
      </Container>
    </>
  );
}
