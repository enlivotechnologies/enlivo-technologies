/**
 * seo/schemas/organization.ts
 *
 * PURPOSE: Organization-specific JSON-LD schema configuration.
 * WHY: Organization schema helps Google build Knowledge Panel
 *      and understand your brand entity.
 *
 * TODO: Fill in actual business details before launch
 */

import { buildOrganizationSchema } from "@/lib/schema";

/**
 * Full organization schema with all details
 * Used on homepage and about page
 */
export const ORGANIZATION_SCHEMA = buildOrganizationSchema({
  name: "Enlivo Technologies",
  description:
    "Enlivo Technologies is an enterprise software company that designs and engineers secure, scalable digital products people trust. Specializing in product engineering, AI automation, and cloud platform solutions.",

  // Contact information
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-XXX-XXX-XXXX", // TODO: Add actual phone number
    contactType: "customer service",
    email: "contact@enlivotechnologies.com",
    availableLanguage: ["English"],
  },

  // Social media profiles - helps Google build Knowledge Panel
  sameAs: [
    "https://linkedin.com/company/enlivotechnologies",
    "https://twitter.com/enlivotechnologies",
    // 'https://github.com/enlivotechnologies',
  ],
});

/**
 * Simplified organization schema for inner pages
 * Lighter weight, just establishes the entity
 */
export const ORGANIZATION_SCHEMA_SIMPLE = buildOrganizationSchema();
