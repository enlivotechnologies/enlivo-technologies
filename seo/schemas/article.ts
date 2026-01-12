/**
 * seo/schemas/article.ts
 *
 * PURPOSE: Article/Insight JSON-LD schema helpers.
 * WHY: Proper article schema improves chances of
 *      appearing in Google News and Top Stories.
 */

import { buildArticleSchema, buildBreadcrumbSchema } from "@/lib/schema";
import type { Insight } from "@/lib/cms";

/**
 * Build full schema set for an insight/article page
 */
export function buildInsightSchemas(insight: Insight) {
  // Article schema
  const articleSchema = buildArticleSchema({
    title: insight.title,
    description: insight.description,
    slug: insight.slug,
    image: insight.image,
    publishedAt: insight.publishedAt,
    updatedAt: insight.updatedAt,
    authorName: insight.author.name,
    type: "TechArticle", // More specific type for tech content
    basePath: "/insights",
  });

  // Breadcrumb schema
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: insight.category, path: `/insights?category=${insight.category}` },
    { name: insight.title },
  ]);

  return {
    articleSchema,
    breadcrumbSchema,
  };
}

/**
 * Build schema for insights listing page
 */
export function buildInsightsListSchema() {
  return buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Insights" },
  ]);
}
