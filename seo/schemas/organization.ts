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
    "Enlivo architects the secure digital backbone for modern global business. Precision engineering for mission critical platforms, cloud infrastructure, and AI.",

  // Contact information
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-89713-63921", // WhatsApp number
    contactType: "customer service",
    email: "Info.enlivo@gmail.com",
    availableLanguage: ["English"],
  },

  // Social media profiles - helps Google build Knowledge Panel
  sameAs: [
    "https://www.linkedin.com/company/enlivo-global-tech-solutions-pvt-ltd/",
    "https://www.instagram.com/enlivo_globalsolutions_techpvt",
    // Add other social profiles as needed
  ],
});

/**
 * Simplified organization schema for inner pages
 * Lighter weight, just establishes the entity
 */
export const ORGANIZATION_SCHEMA_SIMPLE = buildOrganizationSchema();
