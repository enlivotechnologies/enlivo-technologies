/**
 * seo/schemas/service.ts
 *
 * PURPOSE: Service-specific JSON-LD schema configurations.
 * WHY: Service schema helps Google understand your offerings
 *      and can improve visibility in relevant searches.
 */

import { buildServiceSchema } from "@/lib/schema";

/**
 * Product Engineering Service Schema
 */
export const PRODUCT_ENGINEERING_SCHEMA = buildServiceSchema({
  name: "Product Engineering Services",
  description:
    "End-to-end product engineering services from concept to launch, including custom software development, MVP creation, and enterprise applications.",
  slug: "product-engineering",
  offerings: [
    {
      name: "Custom Software Development",
      description:
        "Tailored software solutions built for your specific business needs.",
    },
    {
      name: "MVP Development",
      description:
        "Rapid minimum viable product development to validate your ideas.",
    },
    {
      name: "Product Scaling",
      description:
        "Scale your existing products to handle enterprise-level demands.",
    },
    // TODO: Add more offerings
  ],
});

/**
 * Enterprise Systems Service Schema
 */
export const ENTERPRISE_SYSTEMS_SCHEMA = buildServiceSchema({
  name: "Enterprise Systems Integration",
  description:
    "Legacy system modernization, ERP implementation, and enterprise application integration services.",
  slug: "enterprise-systems",
  offerings: [
    {
      name: "Legacy Modernization",
      description:
        "Transform legacy systems into modern, maintainable architectures.",
    },
    {
      name: "ERP Implementation",
      description: "End-to-end ERP implementation and customization services.",
    },
    {
      name: "System Integration",
      description:
        "Connect disparate systems for seamless data flow and operations.",
    },
    // TODO: Add more offerings
  ],
});

/**
 * AI & Automation Service Schema
 */
export const AI_AUTOMATION_SCHEMA = buildServiceSchema({
  name: "AI & Automation Solutions",
  description:
    "Artificial intelligence and machine learning solutions for business process automation and intelligent decision-making.",
  slug: "ai-automation",
  offerings: [
    {
      name: "Machine Learning Solutions",
      description:
        "Custom ML models for prediction, classification, and optimization.",
    },
    {
      name: "Process Automation",
      description: "Intelligent automation of repetitive business processes.",
    },
    {
      name: "AI Consulting",
      description: "Strategic guidance on AI adoption and implementation.",
    },
    // TODO: Add more offerings
  ],
});

/**
 * Cloud Platforms Service Schema
 */
export const CLOUD_PLATFORMS_SCHEMA = buildServiceSchema({
  name: "Cloud Platform Engineering",
  description:
    "Cloud architecture, migration, and DevOps services for AWS, Azure, and Google Cloud platforms.",
  slug: "cloud-platforms",
  offerings: [
    {
      name: "Cloud Migration",
      description: "Seamless migration of workloads to cloud platforms.",
    },
    {
      name: "Cloud Architecture",
      description: "Design and implement scalable cloud-native architectures.",
    },
    {
      name: "DevOps & CI/CD",
      description:
        "Implement robust DevOps practices and deployment pipelines.",
    },
    // TODO: Add more offerings
  ],
});

/**
 * Cybersecurity Service Schema
 */
export const CYBERSECURITY_SCHEMA = buildServiceSchema({
  name: "Enterprise Cybersecurity Services",
  description:
    "Comprehensive security services including assessments, penetration testing, and managed security operations.",
  slug: "cybersecurity",
  offerings: [
    {
      name: "Security Assessment",
      description: "Comprehensive evaluation of your security posture.",
    },
    {
      name: "Penetration Testing",
      description: "Identify vulnerabilities before attackers do.",
    },
    {
      name: "Managed SOC",
      description: "24/7 security monitoring and incident response.",
    },
    // TODO: Add more offerings
  ],
});

/**
 * Map of service slugs to schemas
 */
export const SERVICE_SCHEMAS = {
  "product-engineering": PRODUCT_ENGINEERING_SCHEMA,
  "enterprise-systems": ENTERPRISE_SYSTEMS_SCHEMA,
  "ai-automation": AI_AUTOMATION_SCHEMA,
  "cloud-platforms": CLOUD_PLATFORMS_SCHEMA,
  cybersecurity: CYBERSECURITY_SCHEMA,
} as const;

/**
 * Get schema for a specific service
 */
export function getServiceSchema(slug: string) {
  return SERVICE_SCHEMAS[slug as keyof typeof SERVICE_SCHEMAS] || null;
}
