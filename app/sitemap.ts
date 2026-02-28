/**
 * app/sitemap.ts
 *
 * PURPOSE: Dynamic XML sitemap generation for search engines + AI crawlers.
 * WHY: Sitemaps help search engines AND AI systems discover and index all pages.
 *      Includes blog posts, service pages, and all static routes.
 *
 * SEO CRITICAL:
 * - Include all indexable pages (especially blog posts for organic traffic)
 * - Set appropriate changefreq and priority
 * - Update lastModified dates accurately
 * - Exclude noindex pages
 *
 * URL: /sitemap.xml
 */

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { getAllInsights, getAllJobs } from "@/lib/cms";
import { BLOG_POSTS } from "@/app/(marketing)/blog/data";

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
  { slug: "product-rebuild", priority: 0.9 },
  { slug: "dedicated-team", priority: 0.9 },
  { slug: "free-audit", priority: 0.9 },
] as const;

/**
 * Lastmod — updated to reflect latest content changes
 */
const SITEMAP_LASTMOD = new Date("2026-02-27T00:00:00+00:00");

/**
 * Static pages that are always included
 */
const STATIC_PAGES: MetadataRoute.Sitemap = [
  // Homepage — highest priority
  {
    url: BASE_URL,
    lastModified: SITEMAP_LASTMOD,
    changeFrequency: "weekly",
    priority: 1.0,
  },

  // Services index
  {
    url: `${BASE_URL}/services`,
    lastModified: SITEMAP_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.9,
  },

  // Company pages
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

  // Contact
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

  // Team page
  {
    url: `${BASE_URL}/company/team`,
    lastModified: SITEMAP_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.8,
  },

  // Portfolio
  {
    url: `${BASE_URL}/portfolio`,
    lastModified: SITEMAP_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.85,
  },

  // Case Studies
  {
    url: `${BASE_URL}/case-studies`,
    lastModified: SITEMAP_LASTMOD,
    changeFrequency: "monthly",
    priority: 0.85,
  },

  // Blog index — high priority for organic traffic
  {
    url: "http://blog.enlivotechnologies.com",
    lastModified: SITEMAP_LASTMOD,
    changeFrequency: "weekly",
    priority: 0.9,
  },

  // Legal pages
  {
    url: `${BASE_URL}/privacy`,
    lastModified: SITEMAP_LASTMOD,
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: `${BASE_URL}/terms`,
    lastModified: SITEMAP_LASTMOD,
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    url: `${BASE_URL}/refund-policy`,
    lastModified: SITEMAP_LASTMOD,
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

/**
 * Generate service page URLs
 */
function getServicePages(): MetadataRoute.Sitemap {
  return ACTUAL_SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: SITEMAP_LASTMOD,
    changeFrequency: "monthly" as const,
    priority: service.priority,
  }));
}

/**
 * Generate blog post pages from local data
 * HIGH PRIORITY: Blog posts drive organic traffic and AI discoverability
 */
function getBlogPages(): MetadataRoute.Sitemap {
  const BLOG_BASE = "http://blog.enlivotechnologies.com";
  return BLOG_POSTS.map((post) => ({
    url: `${BLOG_BASE}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
}

/**
 * Generate insight/blog pages from CMS
 */
async function getInsightPages(): Promise<MetadataRoute.Sitemap> {
  try {
    const insights = await getAllInsights();
    return insights.map((insight) => ({
      url: `${BASE_URL}/insights/${insight.slug}`,
      lastModified: new Date(insight.updatedAt || insight.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));
  } catch {
    return [];
  }
}

/**
 * Generate job posting pages
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
  } catch {
    return [];
  }
}

/**
 * Sitemap Generation Function
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic content in parallel
  const [insightPages, jobPages] = await Promise.all([
    getInsightPages(),
    getJobPages(),
  ]);

  return [
    ...STATIC_PAGES,
    ...getServicePages(),
    ...getBlogPages(),
    ...insightPages,
    ...jobPages,
  ];
}
