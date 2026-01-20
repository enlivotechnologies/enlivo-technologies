/**
 * app/robots.ts
 *
 * PURPOSE: Dynamic robots.txt generation.
 * WHY: Controls how search engines crawl your site.
 *      Prevents indexing of sensitive or duplicate content.
 *
 * SEO CRITICAL:
 * - Allow crawling of all public content
 * - Block admin/API routes
 * - Point to sitemap
 * - Consider crawl-delay for high-traffic sites
 *
 * URL: /robots.txt
 */

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

/**
 * Robots.txt Configuration
 *
 * SECURITY NOTE:
 * - robots.txt is NOT a security measure
 * - It's a guideline that respectful crawlers follow
 * - Don't rely on it to hide sensitive content
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.url;

  return {
    rules: [
      {
        // Default rule for all crawlers
        userAgent: "*",
        allow: "/",
        disallow: [
          // Block API routes from indexing
          "/api/",

          // Block preview/draft pages
          "/preview/",
          "/draft/",

          // Block search results (if implemented)
          "/search?",

          // Block internal pages
          "/_next/",
          "/admin/",

          // Block utility pages that shouldn't be indexed
          // TODO: Add any additional paths to block
        ],
      },
      {
        // Specific rules for Googlebot (if needed)
        userAgent: "Googlebot",
        allow: "/",
        // Googlebot-specific disallows (if any)
      },
      // {
      //   // Block AI training crawlers (optional - uncomment if desired)
      //   userAgent: 'GPTBot',
      //   disallow: '/',
      // },
      // {
      //   userAgent: 'ChatGPT-User',
      //   disallow: '/',
      // },
      // {
      //   userAgent: 'CCBot',
      //   disallow: '/',
      // },
    ],

    // Point to sitemap (CRITICAL for SEO)
    sitemap: `${baseUrl}/sitemap.xml`,

    // Host declaration (helps with domain canonicalization)
    // This ensures Google knows the preferred domain (www vs non-www)
    host: baseUrl.replace(/^https?:\/\//, '').replace(/\/$/, ''),
  };
}
