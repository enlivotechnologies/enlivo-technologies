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
  // Note: Phone number removed for privacy - using email only
  // Phone number available via contact page and WhatsApp link in footer
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "Info.enlivo@gmail.com",
    availableLanguage: ["English"],
    // Optional: Add contact form URL instead
    // url: "https://www.enlivotechnologies.com/contact",
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
