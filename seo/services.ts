/**
 * seo/services.ts
 *
 * PURPOSE: Centralized SEO content for all service pages.
 * WHY: Service pages are high-intent pages that should rank for
 *      commercial keywords. Centralized management ensures consistency.
 *
 * SERVICES (4 total):
 * 1. MVP Development — for founders who need to ship fast
 * 2. Product Rebuild — for startups with legacy tech debt
 * 3. Dedicated Team — for scaling engineering capacity
 * 4. Free Audit — top-of-funnel lead generation
 */

import type { PageSEO } from "@/lib/seo";

/**
 * Services index page SEO
 */
export const SERVICES_INDEX_SEO: PageSEO = {
  title: "Software Development Services for Funded Startups",
  description:
    "MVP development, product rebuilds, dedicated engineering teams, and free technical audits. Enlivo Technologies helps funded startups across the US, UK, EU, and Australia ship production-ready software in weeks.",
  keywords: [
    "software development services",
    "startup development services",
    "MVP development company",
    "product rebuild services",
    "dedicated development team",
    "free technical audit",
    "software development for startups",
    "hire software developers",
  ],
  pathname: "/services",
  ogImage: "/images/og/services.png",
};

/**
 * Individual service page SEO configurations
 */
export const SERVICE_PAGES_SEO: Record<string, PageSEO> = {
  "mvp-development": {
    title: "MVP Development Services | Build Your Startup App Fast",
    description:
      "Build your MVP in weeks, not months. Expert MVP development services for startups. Rapid prototyping, validated products, faster funding. Trusted by founders in US, UK, EU.",
    keywords: [
      "MVP development",
      "MVP development services",
      "build MVP",
      "startup MVP development",
      "minimum viable product",
      "rapid MVP development",
      "MVP development company",
      "startup app development",
      "prototype development",
      "MVP for startups",
      "lean product development",
      "rapid prototyping",
      "startup product development",
      "MVP development cost",
      "how to build an MVP",
    ],
    pathname: "/services/mvp-development",
    ogImage: "/images/og/services.png",
  },

  "product-rebuild": {
    title: "Product Rebuild Services | Rewrite & Modernize Your App",
    description:
      "Rebuild your legacy product with modern technology. Zero-downtime migration, clean architecture, and 10x performance. Trusted by funded startups across US, UK, and EU.",
    keywords: [
      "product rebuild",
      "app rewrite",
      "legacy modernization",
      "software rebuild",
      "code refactoring",
      "legacy code modernization",
      "product rewrite services",
      "rebuild app from scratch",
      "modernize legacy software",
      "tech debt cleanup",
      "zero downtime migration",
      "app migration services",
      "software modernization company",
      "product rebuild cost",
    ],
    pathname: "/services/product-rebuild",
    ogImage: "/images/og/services.png",
  },

  "dedicated-team": {
    title: "Dedicated Development Team | Hire Engineers on Demand",
    description:
      "Hire a dedicated development team that works as an extension of your startup. Senior engineers, transparent pricing, weekly demos. Scale up or down as you grow.",
    keywords: [
      "dedicated development team",
      "hire development team",
      "dedicated software team",
      "offshore development team",
      "remote development team",
      "staff augmentation",
      "hire remote developers",
      "dedicated engineering team",
      "outsource development team",
      "hire software engineers",
      "team augmentation services",
      "dedicated developers India",
      "extended development team",
      "hire full stack developers",
    ],
    pathname: "/services/dedicated-team",
    ogImage: "/images/og/services.png",
  },

  "free-audit": {
    title: "Free Technical Audit | Get Your App Assessed by Senior Engineers",
    description:
      "Get a free, no-obligation technical audit of your app or codebase. Our senior engineers will identify performance bottlenecks, security risks, and architecture improvements.",
    keywords: [
      "free technical audit",
      "free code review",
      "app audit",
      "software audit",
      "technical assessment",
      "code quality review",
      "free app assessment",
      "performance audit",
      "security audit software",
      "codebase review",
      "technical debt assessment",
      "free consultation software development",
      "architecture review",
    ],
    pathname: "/services/free-audit",
    ogImage: "/images/og/services.png",
  },
};

/**
 * Service page headings structure
 */
export const SERVICE_HEADINGS: Record<
  string,
  { h1: string; sections: Record<string, string> }
> = {
  "mvp-development": {
    h1: "MVP & Product Development",
    sections: {
      overview: "Build Products That Users Love",
      capabilities: "Why Choose Our MVP Development",
      process: "Our MVP Process",
      cta: "Ready to Build Your MVP?",
    },
  },
  "product-rebuild": {
    h1: "Product Rebuild & Modernization",
    sections: {
      overview: "Rebuild for the Next 3 Years of Growth",
      capabilities: "Why Choose Our Product Rebuild",
      process: "Our Rebuild Process",
      cta: "Ready to Rebuild Your Product?",
    },
  },
  "dedicated-team": {
    h1: "Dedicated Development Team",
    sections: {
      overview: "Your Team, Your Way",
      capabilities: "Why Choose a Dedicated Team",
      process: "How It Works",
      cta: "Ready to Build Your Team?",
    },
  },
  "free-audit": {
    h1: "Free Technical Audit",
    sections: {
      overview: "Know Exactly Where Your App Stands",
      capabilities: "What's Included",
      process: "How It Works",
      cta: "Get Your Free Audit Today",
    },
  },
};

/**
 * Helper to get SEO config for a service
 */
export function getServiceSEO(slug: string): PageSEO | null {
  return SERVICE_PAGES_SEO[slug] || null;
}

/**
 * Helper to get headings for a service
 */
export function getServiceHeadings(slug: string) {
  return SERVICE_HEADINGS[slug] || null;
}
