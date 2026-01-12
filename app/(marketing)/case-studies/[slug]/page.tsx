/**
 * app/(marketing)/case-studies/[slug]/page.tsx
 *
 * PURPOSE: Individual case study page (dynamic route).
 * WHY: Each case study is unique content that can rank for
 *      industry-specific and solution-specific keywords.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildDynamicMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/schema";
import { buildCaseStudySchemas } from "@/seo/schemas/case-study";
import { getCaseStudyBySlug, getCaseStudySlugs } from "@/lib/cms";
import { Container } from "@/components/ui/Container";
import { getCaseStudyHeadings } from "@/seo/case-studies";

/**
 * Generate static params for all case studies
 * WHY: Enables static generation at build time
 */
export async function generateStaticParams() {
  const slugs = await getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

/**
 * Generate metadata for each case study
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return { title: "Case Study Not Found" };
  }

  return buildDynamicMetadata(
    { pathname: "/case-studies" },
    {
      title: caseStudy.title,
      description: caseStudy.description,
      slug: caseStudy.slug,
      image: caseStudy.image,
      publishedAt: caseStudy.publishedAt,
      updatedAt: caseStudy.updatedAt,
    }
  );
}

/**
 * Case Study Page Component
 */
export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);

  // 404 if case study not found
  if (!caseStudy) {
    notFound();
  }

  const { articleSchema, breadcrumbSchema } = buildCaseStudySchemas(caseStudy);
  const headings = getCaseStudyHeadings(caseStudy.client);

  return (
    <>
      {/* Structured Data */}
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <article>
        {/* Hero Section */}
        <header className="bg-gray-900 text-white py-16 lg:py-24">
          <Container>
            {/* Industry Badge */}
            <span className="inline-block px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full mb-4">
              {caseStudy.industry}
            </span>

            {/* H1 - Case Study Title */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              {caseStudy.title}
            </h1>

            {/* Client Name */}
            <p className="text-xl text-gray-300">Client: {caseStudy.client}</p>
          </Container>
        </header>

        <Container className="py-16">
          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {headings.sections.overview}
            </h2>
            <p className="text-gray-600 text-lg">{caseStudy.description}</p>
          </section>

          {/* Challenge */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {headings.sections.challenge}
            </h2>
            {/* TODO: Add rich content for challenge */}
            <p className="text-gray-600">{caseStudy.challenge}</p>
          </section>

          {/* Solution */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {headings.sections.solution}
            </h2>
            {/* TODO: Add rich content for solution */}
            <p className="text-gray-600">{caseStudy.solution}</p>
          </section>

          {/* Results */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {headings.sections.results}
            </h2>
            <ul className="space-y-2">
              {caseStudy.results.map((result, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-600"
                >
                  <span className="text-green-500">✓</span>
                  {result}
                </li>
              ))}
            </ul>
          </section>

          {/* Services Used */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Services Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {caseStudy.services.map((service) => (
                <span
                  key={service}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>
          </section>
        </Container>
      </article>
    </>
  );
}
