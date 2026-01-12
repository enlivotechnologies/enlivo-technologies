/**
 * seo/case-studies.ts
 *
 * PURPOSE: SEO content for case study pages.
 * WHY: Case studies are powerful for SEO:
 *      - Target industry-specific keywords
 *      - Build credibility (E-E-A-T)
 *      - Generate backlinks
 *      - Convert high-intent visitors
 */

import type { PageSEO } from "@/lib/seo";

/**
 * Case studies index page SEO
 */
export const CASE_STUDIES_INDEX_SEO: PageSEO = {
  title: "Case Studies - Client Success Stories",
  description:
    "Explore how we help enterprises transform their technology landscape. Real results from product engineering, AI automation, cloud migration, and more.",
  keywords: [
    "case studies",
    "client success stories",
    "digital transformation examples",
    "enterprise technology projects",
    "software development case studies",
  ],
  pathname: "/case-studies",
  ogImage: "/images/og/case-studies.png",
};

/**
 * Case studies index headings
 */
export const CASE_STUDIES_HEADINGS = {
  h1: "Case Studies",
  sections: {
    featured: "Featured Projects",
    byIndustry: "By Industry",
    byService: "By Service",
    results: "Client Results",
  },
} as const;

/**
 * Dynamic case study SEO builder
 * WHY: Each case study should have unique, optimized metadata
 */
export function buildCaseStudySEO(caseStudy: {
  title: string;
  description: string;
  slug: string;
  client: string;
  industry: string;
  image?: string;
}): PageSEO {
  return {
    // Include client industry in title for industry-specific rankings
    title: `${caseStudy.title} | ${caseStudy.industry} Case Study`,
    description: caseStudy.description,
    keywords: [
      `${caseStudy.industry.toLowerCase()} case study`,
      "digital transformation",
      "client success story",
      // TODO: Add service-specific keywords dynamically
    ],
    pathname: `/case-studies/${caseStudy.slug}`,
    ogImage: caseStudy.image || "/images/og/case-study-default.png",
    section: "article", // Marks this as article type for OpenGraph
  };
}

/**
 * Case study page section headings template
 */
export function getCaseStudyHeadings(clientName: string) {
  return {
    h1: `${clientName} Case Study`, // Will be more specific in actual implementation
    sections: {
      overview: "Project Overview",
      challenge: "The Challenge",
      solution: "Our Solution",
      results: "Results & Impact",
      technologies: "Technologies Used",
      testimonial: "Client Testimonial",
      related: "Related Case Studies",
    },
  };
}
