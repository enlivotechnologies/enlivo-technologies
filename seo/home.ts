/**
 * seo/home.ts
 *
 * PURPOSE: Global Enterprise SEO Configuration.
 * STRATEGY: Targeting high-value commercial intent keywords used by Fortune 500 decision-makers.
 * GOAL: Rank for specific "solution" terms rather than just generic "development" terms.
 */

import type { PageSEO } from "@/lib/seo";

export const HOME_SEO: PageSEO = {
  // 1. TITLE (Authority & Scale)
  // Combines the Brand Name with the two most valuable service categories.
  title: "Enlivo Technologies | Global Digital Transformation & Strategy",

  // 2. DESCRIPTION (Global & Strategic)
  // Includes "Enlivo Global Tech Solutions" naturally to help rank for that variation too.
  description:
    "Enlivo architects the secure digital backbone for modern global business. Precision engineering for mission critical platforms, cloud infrastructure, and AI.",

  // 3. KEYWORDS (The "Big Giant" Strategy)
  // Categorized to capture search traffic at every level of the decision process.
  keywords: [
    // --- BRAND VARIATIONS ---
    "Enlivo Technologies",
    "Enlivo Global Tech Solutions",
    "Enlivo",
    
    // --- HIGH-LEVEL STRATEGIC (What CEOs search for) ---
    "enterprise digital transformation services",
    "global IT consulting firms",
    "strategic technology partners",
    "digital product engineering",
    "business process modernization",
    "future-ready technology architecture",
    
    // --- CORE ENGINEERING (What CTOs search for) ---
    "custom enterprise software development",
    "secure software engineering company",
    "cloud-native application development",
    "legacy system modernization services",
    "scalable microservices architecture",
    "enterprise mobile app development",
    "SaaS platform engineering",
    
    // --- AI & INNOVATION (What Innovation VPs search for) ---
    "enterprise AI solutions provider",
    "intelligent process automation",
    "generative AI for business",
    "machine learning integration services",
    "data-driven digital platforms",
    
    // --- GLOBAL/RELIABILITY (Trust Signals) ---
    "top software engineering firms worldwide",
    "secure fintech software solutions", // (Optional: implies high security)
    "HIPAA compliant software development", // (Optional: implies high security)
    "reliable offshore development partners",
    "end-to-end software delivery",
  ],

  pathname: "/",

  // Your premium OG image
  ogImage: "/images/og/home.png",
};

/**
 * Headings Structure
 * Aligned with the "Global Giant" persona.
 */
export const HOME_HEADINGS = {
  // H1: The core promise
  h1: "We build secure software systems for modern businesses.",

  sections: {
    services: "Our Expertise",     // Professional
    caseStudies: "Global Impact",  // Shows scale
    process: "Our Approach",       // Shows methodology
    trust: "Our Team",
    cta: "Let's Make This Simple",    // Focus on result
  },
} as const;

export const HOME_SCHEMA_CONFIG = {
  includeOrganization: true,
  includeWebSite: true,
  includeBreadcrumb: false,
} as const;