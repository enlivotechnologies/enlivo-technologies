/**
 * app/(marketing)/case-studies/page.tsx
 *
 * PURPOSE: Case studies index page.
 * WHY: Showcases work and builds credibility (E-E-A-T).
 */

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";
import {
  CASE_STUDIES_INDEX_SEO,
  CASE_STUDIES_HEADINGS,
} from "@/seo/case-studies";
import { getAllCaseStudies } from "@/lib/cms";
import { Container } from "@/components/ui/Container";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";

/**
 * Page Metadata
 */
export const metadata: Metadata = buildMetadata(CASE_STUDIES_INDEX_SEO);

/**
 * Case Studies Index Page
 */
export default async function CaseStudiesPage() {
  // Fetch case studies from CMS
  const caseStudies = await getAllCaseStudies();

  return (
    <>
      {/* Breadcrumb Schema */}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case Studies" },
        ])}
      />

      <Container className="py-16 lg:py-24">
        {/* Page Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {CASE_STUDIES_HEADINGS.h1}
          </h1>
          {/* TODO: Add compelling intro copy */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore how we help enterprises transform their technology
            landscape. Real results from real projects.
          </p>
        </header>

        {/* Featured Case Studies */}
        <section aria-labelledby="featured-heading" className="mb-16">
          <h2
            id="featured-heading"
            className="text-2xl font-bold text-gray-900 mb-8"
          >
            {CASE_STUDIES_HEADINGS.sections.featured}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard
                key={study.slug}
                title={study.title}
                description={study.description}
                client={study.client}
                industry={study.industry}
                href={`/case-studies/${study.slug}`}
                image={study.image}
              />
            ))}
          </div>
        </section>

        {/* Empty State */}
        {caseStudies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              Case studies coming soon. Contact us to learn more about our work.
            </p>
          </div>
        )}
      </Container>
    </>
  );
}
