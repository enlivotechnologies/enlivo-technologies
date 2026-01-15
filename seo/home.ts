/**
 * seo/home.ts
 *
 * PURPOSE: Centralized SEO content for the homepage.
 * WHY: Separating SEO content from UI components makes it easy to:
 *      - Update copy without touching code
 *      - A/B test different titles/descriptions
 *      - Hand off to marketing team
 *      - Maintain consistency across related pages
 */

import type { PageSEO } from "@/lib/seo";

/**
 * Homepage SEO Configuration
 *
 * SEO NOTES:
 * - Title should be 50-60 characters for optimal SERP display
 * - Description should be 150-160 characters
 * - Include primary keyword in both
 */
export const HOME_SEO: PageSEO = {
  title:
    "Enlivo Technologies | Digital Engineering & Enterprise Technology Company",

  description:
    "Enlivo Technologies is a technology company focused on building reliable digital platforms and systems for growing businesses and enterprises.",

  keywords: [
    "Enlivo Technologies",
    "Enlivo Global Tech Solutions",
    "secure software systems",
    "enterprise software development",
    "web application development",
    "AI-powered solutions",
    "enterprise platforms",
    "scalable software solutions",
    "custom software development",
    "digital transformation",
    "cloud platforms",
    "business software solutions",
  ],

  pathname: "/",

  ogImage: "/images/og/home.png",
};

/**
 * Homepage section headings
 * WHY: Consistent H1/H2 structure is critical for SEO
 *
 * RULE: Each page should have exactly ONE H1
 */
export const HOME_HEADINGS = {
  // H1 - Primary page heading (only one per page)
  h1: "We build secure software systems for modern businesses.",

  // H2s - Section headings
  sections: {
    services: "What We Do",
    caseStudies: "Our Work",
    process: "How We Work",
    stats: "By the Numbers",
    testimonials: "What Our Clients Say",
    cta: "Ready to Transform Your Business?",
  },
} as const;

/**
 * Homepage structured data
 * These will be combined in the page component
 */
export const HOME_SCHEMA_CONFIG = {
  includeOrganization: true,
  includeWebSite: true,
  includeBreadcrumb: false, // Homepage doesn't need breadcrumbs
} as const;
