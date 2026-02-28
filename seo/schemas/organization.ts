/**
 * seo/schemas/organization.ts
 *
 * PURPOSE: Organization-specific JSON-LD schema configuration.
 * WHY: Organization schema helps Google build Knowledge Panel
 *      and understand your brand entity.
 *
 * SEO CRITICAL: Correct social links and email are essential for
 *   Google Knowledge Panel, AI search (ChatGPT, Gemini, Claude),
 *   and brand entity recognition.
 */

import { buildOrganizationSchema } from "@/lib/schema";
import { SOCIAL_LINKS } from "@/lib/constants";

/**
 * Full organization schema with all details
 * Used on homepage and about page
 */
export const ORGANIZATION_SCHEMA = buildOrganizationSchema({
  name: "Enlivo Technologies",
  description:
    "Enlivo Technologies is a premium software development company based in Bangalore, India that helps funded startups ship production-ready software in weeks. Specializing in MVP development, product rebuilds, and dedicated engineering teams for startup founders across the US, UK, EU, and Australia.",

  // Contact information — using official business email
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: SOCIAL_LINKS.email,
    availableLanguage: ["English"],
  },

  // Social media profiles — CRITICAL for Google Knowledge Panel + AI recognition
  sameAs: [
    SOCIAL_LINKS.linkedin,
    SOCIAL_LINKS.instagram,
  ],
});

/**
 * Simplified organization schema for inner pages
 * Lighter weight, just establishes the entity
 */
export const ORGANIZATION_SCHEMA_SIMPLE = buildOrganizationSchema();
