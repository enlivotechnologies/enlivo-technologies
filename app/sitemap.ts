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
import { getAllInsights, getAllJobs } from "@/lib/cms";

/**
 * Sitemap Configuration
 */
const BASE_URL = SITE_CONFIG.url;

/**
 * Revalidation: Regenerate sitemap every 24 hours
 * This ensures new content is discovered quickly
 */
export const revalidate = 86400; // 24 hours in seconds

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
 * Lastmod from sitemap generator: 2026-01-25T10:39:56+00:00
 * Update this when you regenerate the sitemap or when pages are meaningfully updated.
 */
const SITEMAP_LASTMOD = new Date("2026-01-25T10:39:56+00:00");

/**
 * Static pages that are always included
 * Priorities and lastmod for core pages from generated sitemap; rest kept for full coverage.
 */
const STATIC_PAGES: MetadataRoute.Sitemap = [
  // Homepage - priority 1.00 (from generated sitemap)
  {
    url: BASE_URL,
    lastModified: SITEMAP_LASTMOD,
    changeFrequency: "weekly",
    priority: 1.0,
  },

  // Services index (not in user's list; kept for SEO)
  {
    url: `${BASE_URL}/services`,
    lastModified: SITEMAP_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.9,
  },

  // Company pages (priorities from generated sitemap)
  {
    url: `${BASE_URL}/company/about`,
    lastModified: SITEMAP_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/company/internships`,
    lastModified: SITEMAP_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/company/internships/full-stack-developer`,
    lastModified: SITEMAP_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.64,
  },
  {
    url: `${BASE_URL}/company/careers`,
    lastModified: SITEMAP_LASTMOD,
    changeFrequency: "weekly",
    priority: 0.7,
  },

  // Contact (priorities from generated sitemap)
  {
    url: `${BASE_URL}/contact`,
    lastModified: SITEMAP_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/contact/support`,
    lastModified: SITEMAP_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.64,
  },

  // Legal pages (priorities 0.80 from generated sitemap)
  {
    url: `${BASE_URL}/privacy`,
    lastModified: SITEMAP_LASTMOD,
    changeFrequency: "yearly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/terms`,
    lastModified: SITEMAP_LASTMOD,
    changeFrequency: "yearly",
    priority: 0.8,
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
 * Generate insight/blog pages
 * Includes both index and individual insight pages
 */
async function getInsightPages(): Promise<MetadataRoute.Sitemap> {
  const insights = await getAllInsights();
  
  return [
    // Insights index page (if it exists as a route)
    // Note: Add this only if you have an /insights index page
    // {
    //   url: `${BASE_URL}/insights`,
    //   lastModified: insights.length > 0 
    //     ? new Date(Math.max(...insights.map(i => new Date(i.updatedAt || i.publishedAt).getTime())))
    //     : new Date(),
    //   changeFrequency: "weekly" as const,
    //   priority: 0.7,
    // },
    // Individual insight pages
    ...insights.map((insight) => ({
      url: `${BASE_URL}/insights/${insight.slug}`,
      lastModified: new Date(insight.updatedAt || insight.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}

/**
 * Generate job posting pages (if dynamic)
 */
async function getJobPages(): Promise<MetadataRoute.Sitemap> {
  try {
    const jobs = await getAllJobs();
    return jobs.map((job) => ({
      url: `${BASE_URL}/company/careers/${job.slug}`,
      lastModified: new Date(job.publishedAt),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));
  } catch (error) {
    // If jobs are not available, return empty array
    return [];
  }
}

/**
 * Sitemap Generation Function
 * 
 * This function is called by Next.js to generate the sitemap.
 * It runs at build time for static routes and can be revalidated.
 * 
 * SEO BEST PRACTICES:
 * - Include all indexable pages
 * - Use accurate lastModified dates
 * - Set appropriate priorities (0.0-1.0)
 * - Set realistic changeFrequency
 * - Revalidate regularly to include new content
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic content in parallel for better performance
  const [insightPages, jobPages] = await Promise.all([
    getInsightPages(),
    getJobPages(),
  ]);

  // Combine all pages
  return [
    ...STATIC_PAGES,
    ...getServicePages(),
    ...insightPages,
    ...jobPages,
  ];
}
