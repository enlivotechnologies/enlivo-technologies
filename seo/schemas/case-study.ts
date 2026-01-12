/**
 * seo/schemas/case-study.ts
 *
 * PURPOSE: Case study JSON-LD schema helpers.
 * WHY: Article schema for case studies can generate
 *      rich snippets with author and date information.
 */

import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/schema";
import type { CaseStudy } from "@/lib/cms";

/**
 * Build full schema set for a case study page
 */
export function buildCaseStudySchemas(caseStudy: CaseStudy) {
  // Article schema for the case study
  const articleSchema = buildArticleSchema({
    title: caseStudy.title,
    description: caseStudy.description,
    slug: caseStudy.slug,
    image: caseStudy.image,
    publishedAt: caseStudy.publishedAt,
    updatedAt: caseStudy.updatedAt,
    type: "Article",
    basePath: "/case-studies",
  });

  // Breadcrumb schema for navigation
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Case Studies", path: "/case-studies" },
    { name: caseStudy.title },
  ]);

  return {
    articleSchema,
    breadcrumbSchema,
  };
}

/**
 * Build schema for case studies listing page
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function buildCaseStudiesListSchema(_caseStudies: CaseStudy[]) {
  // Note: caseStudies parameter available for future use (e.g., ItemList schema)
  return buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Case Studies" },
  ]);
}
