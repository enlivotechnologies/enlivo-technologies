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
import { SITE_CONFIG } from "@/lib/constants";

/**
 * Sitemap Configuration
 */
const BASE_URL = SITE_CONFIG.url;

/**
 * ACTUAL SERVICE PAGES THAT EXIST
 * Based on actual file structure in app/(marketing)/services/
 */
const ACTUAL_SERVICES = [
  { slug: "mvp-development", priority: 0.9 },
  { slug: "backend-systems", priority: 0.9 },
  { slug: "frontend-applications", priority: 0.9 },
  { slug: "ui-implementation", priority: 0.9 },
  { slug: "ongoing-support", priority: 0.9 },
] as const;

/**
 * Static pages that are always included
 * PRIORITY: Based on business value and conversion potential
 */
const STATIC_PAGES: MetadataRoute.Sitemap = [
  // Homepage - Highest priority
  {
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  },
  
  // Services index
  {
    url: `${BASE_URL}/services`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  
  // Company pages
  {
    url: `${BASE_URL}/company/about`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/company/internships`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/company/internships/full-stack-developer`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/company/careers`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  },
  
  // Contact - High conversion value
  {
    url: `${BASE_URL}/contact`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/contact/support`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  
  // Company index page
  {
    url: `${BASE_URL}/company`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
  
  // Legal pages
  {
    url: `${BASE_URL}/privacy`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: `${BASE_URL}/terms`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

/**
 * Generate service page URLs
 * Only includes pages that actually exist
 */
function getServicePages(): MetadataRoute.Sitemap {
  return ACTUAL_SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: service.priority,
  }));
}

/**
 * Sitemap Generation Function
 * 
 * NOTE: Removed case studies and insights as they don't exist yet
 * Add them back when actual content is created
 * 
 * This function is called by Next.js to generate the sitemap.
 * It runs at build time for static routes and can be revalidated.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Combine all pages
  return [
    ...STATIC_PAGES,
    ...getServicePages(),
    // TODO: Add case studies when they exist
    // const caseStudies = await getAllCaseStudies();
    // ...caseStudies.map((study) => ({
    //   url: `${BASE_URL}/case-studies/${study.slug}`,
    //   lastModified: new Date(study.updatedAt || study.publishedAt),
    //   changeFrequency: "monthly" as const,
    //   priority: 0.7,
    // })),
    // TODO: Add insights when they exist
    // const insights = await getAllInsights();
    // ...insights.map((insight) => ({
    //   url: `${BASE_URL}/insights/${insight.slug}`,
    //   lastModified: new Date(insight.updatedAt || insight.publishedAt),
    //   changeFrequency: "monthly" as const,
    //   priority: 0.6,
    // })),
  ];
}
