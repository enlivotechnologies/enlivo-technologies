/**
 * lib/seo.ts
 *
 * PURPOSE: Centralized metadata builder for all pages.
 * WHY: Prevents inconsistent SEO across pages, ensures canonical URLs,
 *      and makes updates easy without touching individual components.
 *
 * USAGE: Import `buildMetadata` in any page.tsx and pass page-specific data.
 */

import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

/**
 * Page-specific SEO data interface
 */
export interface PageSEO {
  title: string;
  description: string;
  keywords?: string[];
  pathname: string;
  ogImage?: string;
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  section?: string;
}

/**
 * Builds complete Next.js Metadata object
 *
 * @param pageSEO - Page-specific SEO configuration
 * @returns Next.js Metadata object with all required fields
 */
export function buildMetadata(pageSEO: PageSEO): Metadata {
  const {
    title,
    description,
    keywords = [],
    pathname,
    ogImage,
    noIndex = false,
    publishedTime,
    modifiedTime,
    authors = [],
    section,
  } = pageSEO;

  // Construct canonical URL (critical for SEO - prevents duplicate content)
  const canonicalUrl = `${SITE_CONFIG.url}${pathname}`;

  // Default OG image if not provided
  const ogImageUrl = ogImage
    ? `${SITE_CONFIG.url}${ogImage}`
    : `${SITE_CONFIG.url}/images/og/default.png`;

  // Construct full title with brand suffix
  const fullTitle =
    pathname === "/"
      ? `${title} | ${SITE_CONFIG.name}`
      : `${title} | ${SITE_CONFIG.name}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,

    // Robots directives
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
        },

    // Canonical URL - CRITICAL for SEO
    alternates: {
      canonical: canonicalUrl,
    },

    // OpenGraph for social sharing
    openGraph: {
      type: section === "article" ? "article" : "website",
      url: canonicalUrl,
      title: fullTitle,
      description,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors.length > 0 && { authors }),
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImageUrl],
      creator: SITE_CONFIG.twitter,
      site: SITE_CONFIG.twitter,
    },

    // Additional meta tags
    other: {
      "theme-color": SITE_CONFIG.themeColor,
    },
  };
}

/**
 * Generates metadata for dynamic routes (case studies, blog posts, etc.)
 *
 * @param baseSEO - Base SEO configuration
 * @param dynamicData - Data fetched from CMS or database
 * @returns Complete Metadata object
 */
export function buildDynamicMetadata(
  baseSEO: Partial<PageSEO>,
  dynamicData: {
    title: string;
    description: string;
    slug: string;
    image?: string;
    publishedAt?: string;
    updatedAt?: string;
  }
): Metadata {
  return buildMetadata({
    title: dynamicData.title,
    description: dynamicData.description,
    pathname: `${baseSEO.pathname}/${dynamicData.slug}`,
    ogImage: dynamicData.image,
    publishedTime: dynamicData.publishedAt,
    modifiedTime: dynamicData.updatedAt,
    ...baseSEO,
  });
}

/**
 * Helper to merge default keywords with page-specific ones
 */
export function mergeKeywords(pageKeywords: string[]): string[] {
  return [...SITE_CONFIG.defaultKeywords, ...pageKeywords];
}
