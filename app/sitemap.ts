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
import { getAllCaseStudies, getAllInsights, getAllJobs } from "@/lib/cms";

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
 * Generate case study pages
 * Includes both index and individual case study pages
 */
async function getCaseStudyPages(): Promise<MetadataRoute.Sitemap> {
  const caseStudies = await getAllCaseStudies();
  
  return [
    // Case studies index page
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: caseStudies.length > 0 
        ? new Date(Math.max(...caseStudies.map(cs => new Date(cs.updatedAt || cs.publishedAt).getTime())))
        : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    // Individual case study pages
    ...caseStudies.map((study) => ({
      url: `${BASE_URL}/case-studies/${study.slug}`,
      lastModified: new Date(study.updatedAt || study.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
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
  const [caseStudyPages, insightPages, jobPages] = await Promise.all([
    getCaseStudyPages(),
    getInsightPages(),
    getJobPages(),
  ]);

  // Combine all pages
  return [
    ...STATIC_PAGES,
    ...getServicePages(),
    ...caseStudyPages,
    ...insightPages,
    ...jobPages,
  ];
}
