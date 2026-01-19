/**
 * app/sitemap.ts
 *
 * PURPOSE: Dynamic XML sitemap generation for search engines.
 * WHY: Sitemaps help search engines discover and index all pages.
 *      Next.js generates this at build time for static pages
 *      and on-demand for dynamic routes.
 *
 * SEO CRITICAL:
 * - Include all indexable pages
 * - Set appropriate changefreq and priority
 * - Update lastModified dates accurately
 * - Exclude noindex pages
 *
 * URL: /sitemap.xml
 */

import type { MetadataRoute } from "next";
import { SITE_CONFIG, SERVICES } from "@/lib/constants";
import { getAllCaseStudies, getAllInsights } from "@/lib/cms";

/**
 * Sitemap Configuration
 */
const BASE_URL = SITE_CONFIG.url;

/**
 * Static pages that are always included
 */
const STATIC_PAGES: MetadataRoute.Sitemap = [
  {
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0, // Homepage gets highest priority
  },
  {
    url: `${BASE_URL}/services`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${BASE_URL}/case-studies`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/insights`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/company`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/company/about`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/company/careers`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.6,
  },
  {
    url: `${BASE_URL}/company/internships`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/company/internships/full-stack-developer`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${BASE_URL}/contact`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8, // Contact page is important for conversions
  },
];

/**
 * Generate service page URLs
 */
function getServicePages(): MetadataRoute.Sitemap {
  return SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9, // Service pages are high priority
  }));
}

/**
 * Generate case study page URLs
 */
async function getCaseStudyPages(): Promise<MetadataRoute.Sitemap> {
  const caseStudies = await getAllCaseStudies();

  return caseStudies.map((study) => ({
    url: `${BASE_URL}/case-studies/${study.slug}`,
    lastModified: new Date(study.updatedAt || study.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));
}

/**
 * Generate insight/article page URLs
 */
async function getInsightPages(): Promise<MetadataRoute.Sitemap> {
  const insights = await getAllInsights();

  return insights.map((insight) => ({
    url: `${BASE_URL}/insights/${insight.slug}`,
    lastModified: new Date(insight.updatedAt || insight.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
}

/**
 * Sitemap Generation Function
 *
 * This function is called by Next.js to generate the sitemap.
 * It runs at build time for static routes and can be revalidated.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Gather all dynamic pages
  const [caseStudyPages, insightPages] = await Promise.all([
    getCaseStudyPages(),
    getInsightPages(),
  ]);

  // Combine all pages
  return [
    ...STATIC_PAGES,
    ...getServicePages(),
    ...caseStudyPages,
    ...insightPages,
  ];
}
