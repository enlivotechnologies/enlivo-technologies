/**
 * app/robots.ts
 *
 * PURPOSE: Dynamic robots.txt generation — MAXIMUM crawl coverage.
 * WHY: We WANT search engines AND AI crawlers to index our content.
 *      More indexing = more visibility on Google, ChatGPT, Gemini, Perplexity, Claude.
 *
 * STRATEGY:
 * - Allow ALL search engines (Google, Bing, Yahoo, Yandex, Baidu, DuckDuckGo)
 * - Allow ALL AI crawlers (GPTBot, ChatGPT-User, Google-Extended, Anthropic, Perplexity, Cohere, Meta)
 * - Block only internal/API routes
 * - Point to sitemap.xml + llms.txt for AI discoverability
 */

import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.url;

  return {
    rules: [
      {
        // Default: allow everything for all crawlers
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/preview/",
          "/draft/",
          "/_next/",
          "/admin/",
        ],
      },
      // --- SEARCH ENGINE CRAWLERS ---
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        userAgent: "Applebot",
        allow: "/",
      },
      {
        userAgent: "Yandex",
        allow: "/",
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
      },
      {
        userAgent: "Baiduspider",
        allow: "/",
      },
      // --- AI CRAWLERS (Critical for LLM discoverability) ---
      {
        // Google's AI training crawler — feeds Gemini
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        // OpenAI's crawler — feeds ChatGPT recommendations
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        // ChatGPT browsing — when users ask ChatGPT to visit our site
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        // Anthropic's crawler — feeds Claude recommendations
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        // Claude's web search tool
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        // Perplexity AI crawler
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        // Cohere AI crawler
        userAgent: "cohere-ai",
        allow: "/",
      },
      {
        // Meta AI crawler
        userAgent: "FacebookBot",
        allow: "/",
      },
      {
        // Microsoft Copilot / Bing Chat
        userAgent: "BingPreview",
        allow: "/",
      },
    ],

    // Sitemap — CRITICAL for all search engines
    sitemap: `${baseUrl}/sitemap.xml`,

    // Host declaration for domain canonicalization
    host: baseUrl.replace(/^https?:\/\//, "").replace(/\/$/, ""),
  };
}
