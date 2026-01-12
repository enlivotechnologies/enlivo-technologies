/**
 * seo/insights.ts
 *
 * PURPOSE: SEO content for insights/blog pages.
 * WHY: Content marketing through insights:
 *      - Targets informational keywords
 *      - Establishes thought leadership
 *      - Builds organic traffic over time
 *      - Supports internal linking strategy
 */

import type { PageSEO } from "@/lib/seo";

/**
 * Insights index page SEO
 */
export const INSIGHTS_INDEX_SEO: PageSEO = {
  title: "Insights - Technology Articles & Thought Leadership",
  description:
    "Expert insights on enterprise technology, digital transformation, AI, cloud platforms, and cybersecurity. Stay informed with our latest articles and analysis.",
  keywords: [
    "technology insights",
    "digital transformation articles",
    "enterprise technology blog",
    "AI insights",
    "cloud computing articles",
    "cybersecurity news",
  ],
  pathname: "/insights",
  ogImage: "/images/og/insights.png",
};

/**
 * Insights index headings
 */
export const INSIGHTS_HEADINGS = {
  h1: "Insights",
  sections: {
    featured: "Featured Articles",
    latest: "Latest Insights",
    categories: "Browse by Category",
    newsletter: "Subscribe to Our Newsletter",
  },
} as const;

/**
 * Dynamic insight/article SEO builder
 */
export function buildInsightSEO(insight: {
  title: string;
  description: string;
  slug: string;
  category: string;
  image?: string;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
}): PageSEO {
  return {
    title: insight.title,
    description: insight.description,
    keywords: [
      insight.category.toLowerCase(),
      // TODO: Add article-specific keywords
    ],
    pathname: `/insights/${insight.slug}`,
    ogImage: insight.image || "/images/og/insight-default.png",
    section: "article",
    publishedTime: insight.publishedAt,
    modifiedTime: insight.updatedAt,
    authors: insight.author ? [insight.author] : undefined,
  };
}

/**
 * Insight page section headings template
 */
export const INSIGHT_PAGE_SECTIONS = {
  content: "Article Content",
  author: "About the Author",
  related: "Related Articles",
  cta: "Stay Updated",
} as const;

/**
 * Insight categories for filtering and navigation
 * WHY: Category pages can rank for topic clusters
 */
export const INSIGHT_CATEGORIES = [
  {
    slug: "ai-technology",
    name: "AI & Technology",
    description:
      "Latest insights on artificial intelligence and emerging technologies.",
  },
  {
    slug: "digital-transformation",
    name: "Digital Transformation",
    description:
      "Strategies and best practices for enterprise digital transformation.",
  },
  {
    slug: "cloud-computing",
    name: "Cloud Computing",
    description:
      "Cloud architecture, migration, and platform engineering insights.",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    description: "Security trends, threats, and protection strategies.",
  },
  {
    slug: "engineering",
    name: "Engineering",
    description: "Software engineering practices, patterns, and methodologies.",
  },
] as const;
