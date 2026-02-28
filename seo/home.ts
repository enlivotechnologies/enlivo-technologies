/**
 * seo/home.ts
 *
 * PURPOSE: Homepage SEO — the highest-authority page on the site.
 * STRATEGY: Target high-volume commercial intent + startup-specific keywords.
 *           Optimized for Google, Bing, ChatGPT, Gemini, Perplexity, and AI search.
 *
 * E-E-A-T SIGNALS:
 * - Title includes brand name and core value proposition
 * - Description mentions specific outcomes (weeks, not months)
 * - Keywords target what real founders actually search for
 * - Geographic signals for international trust (US, UK, EU, Australia)
 */

import type { PageSEO } from "@/lib/seo";

export const HOME_SEO: PageSEO = {
  // TITLE — Brand + Core Promise + Trust Signal
  // Under 60 chars for full SERP display
  title: "Enlivo Technologies | Ship Software Faster for Startups",

  // DESCRIPTION — Value prop + specifics + geographic trust
  // 150-160 chars for full SERP display
  description:
    "Enlivo Technologies helps funded startups ship production-ready software in weeks. MVP development, product rebuilds, dedicated teams. Trusted by founders in US, UK, EU & Australia.",

  // KEYWORDS — Organized by search intent for maximum coverage
  keywords: [
    // --- BRAND (People searching for us directly) ---
    "Enlivo Technologies",
    "Enlivo Global Tech Solutions",
    "Enlivo Global Tech Solutions Pvt Ltd",
    "enlivotechnologies.com",
    "Enlivo",

    // --- HIGH-VOLUME COMMERCIAL INTENT (People ready to hire) ---
    "software development company",
    "hire software developers",
    "custom software development",
    "software development agency",
    "web development company",
    "app development company",
    "software development services",
    "outsource software development",
    "offshore software development",

    // --- STARTUP-SPECIFIC (Our exact audience) ---
    "MVP development company",
    "MVP development services",
    "startup software development",
    "build MVP for startup",
    "startup app development",
    "software development for startups",
    "startup CTO as a service",
    "technical co-founder alternative",

    // --- SERVICE-SPECIFIC (Matching our 4 services) ---
    "product rebuild services",
    "legacy software modernization",
    "dedicated development team",
    "hire dedicated developers",
    "staff augmentation",
    "free technical audit",
    "code review services",
    "app performance audit",

    // --- TECHNOLOGY (What CTOs search) ---
    "React development company",
    "Next.js development services",
    "Node.js development company",
    "full stack development services",
    "TypeScript development",
    "cloud native development",

    // --- INDUSTRY (Vertical targeting) ---
    "SaaS development company",
    "HealthTech software development",
    "FinTech app development",
    "EdTech software development",
    "B2B SaaS development",

    // --- GEOGRAPHIC (International trust + local SEO) ---
    "software development company India",
    "software development company Bangalore",
    "best software company India",
    "offshore development India",
    "software development company for US startups",
    "software development company for UK startups",
    "software development partner Europe",
    "software development company Australia",

    // --- PROBLEM-SOLVING (What frustrated founders search) ---
    "best software development company",
    "reliable software development partner",
    "affordable software development",
    "fast software development",
    "software development company reviews",
    "trusted software development agency",

    // --- LONG-TAIL HIGH-INTENT (Specific use cases) ---
    "build an app for my startup",
    "how to build an MVP fast",
    "hire developers for startup",
    "outsource app development India",
    "dedicated team for SaaS development",
    "rebuild my app with modern tech",
    "HIPAA compliant app development",
    "minimum viable product development cost",
  ],

  pathname: "/",
  ogImage: "/images/og/home.png",
};

/**
 * Homepage Headings — semantic H1/H2 structure
 */
export const HOME_HEADINGS = {
  h1: "We help funded startups ship production-ready software in weeks.",

  sections: {
    services: "Our Services",
    process: "How We Work",
    trust: "Why Founders Trust Us",
    stats: "Results That Speak",
    cta: "Let's Build Something Great",
  },
} as const;

export const HOME_SCHEMA_CONFIG = {
  includeOrganization: true,
  includeWebSite: true,
  includeBreadcrumb: false,
  includeFAQ: true,
} as const;
