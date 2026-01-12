/**
 * seo/services.ts
 *
 * PURPOSE: Centralized SEO content for all service pages.
 * WHY: Service pages are high-intent pages that should rank for
 *      commercial keywords. Centralized management ensures consistency.
 */

import type { PageSEO } from "@/lib/seo";

/**
 * Services index page SEO
 */
export const SERVICES_INDEX_SEO: PageSEO = {
  title: "Enterprise Technology Services",
  description:
    "Comprehensive technology services including product engineering, enterprise systems, AI automation, cloud platforms, and cybersecurity. Partner with us for digital excellence.",
  keywords: [
    "enterprise technology services",
    "software development services",
    "digital transformation services",
    "IT consulting",
  ],
  pathname: "/services",
  ogImage: "/images/og/services.png",
};

/**
 * Individual service page SEO configurations
 *
 * SEO STRATEGY:
 * - Each service page targets specific commercial intent keywords
 * - Title format: [Service] Services | [Company]
 * - Description should address pain points + solutions
 */
export const SERVICE_PAGES_SEO: Record<string, PageSEO> = {
  "product-engineering": {
    // TODO: Research competitor titles, optimize for CTR
    title: "Product Engineering Services",
    description:
      "Build scalable digital products from concept to launch. Our product engineering team delivers custom software, MVPs, and enterprise applications using modern technologies.",
    keywords: [
      "product engineering services",
      "custom software development",
      "MVP development",
      "software product development",
      "agile product development",
    ],
    pathname: "/services/product-engineering",
    ogImage: "/images/og/product-engineering.png",
  },

  "enterprise-systems": {
    title: "Enterprise Systems Integration & Modernization",
    description:
      "Modernize legacy systems and integrate enterprise applications. We specialize in ERP implementation, system integration, and digital transformation for large organizations.",
    keywords: [
      "enterprise systems integration",
      "legacy system modernization",
      "ERP implementation",
      "enterprise application integration",
      "digital transformation",
    ],
    pathname: "/services/enterprise-systems",
    ogImage: "/images/og/enterprise-systems.png",
  },

  "ai-automation": {
    title: "AI & Automation Solutions",
    description:
      "Leverage artificial intelligence and machine learning to automate business processes. We build intelligent systems that drive efficiency and innovation.",
    keywords: [
      "AI automation solutions",
      "machine learning services",
      "business process automation",
      "intelligent automation",
      "AI consulting",
    ],
    pathname: "/services/ai-automation",
    ogImage: "/images/og/ai-automation.png",
  },

  "cloud-platforms": {
    title: "Cloud Platform Engineering & Migration",
    description:
      "Design and implement cloud-native architectures on AWS, Azure, and GCP. Expert cloud migration, DevOps, and infrastructure optimization services.",
    keywords: [
      "cloud platform engineering",
      "cloud migration services",
      "AWS consulting",
      "Azure services",
      "cloud architecture",
      "DevOps services",
    ],
    pathname: "/services/cloud-platforms",
    ogImage: "/images/og/cloud-platforms.png",
  },

  cybersecurity: {
    title: "Enterprise Cybersecurity Services",
    description:
      "Protect your digital assets with comprehensive security solutions. From security assessments to SOC services, we deliver enterprise-grade protection.",
    keywords: [
      "enterprise cybersecurity",
      "security assessment",
      "penetration testing",
      "SOC services",
      "cybersecurity consulting",
    ],
    pathname: "/services/cybersecurity",
    ogImage: "/images/og/cybersecurity.png",
  },
};

/**
 * Service page headings structure
 */
export const SERVICE_HEADINGS: Record<
  string,
  { h1: string; sections: Record<string, string> }
> = {
  "product-engineering": {
    h1: "Product Engineering Services",
    sections: {
      overview: "Build Products That Scale",
      capabilities: "Our Capabilities",
      process: "Our Development Process",
      technologies: "Technologies We Use",
      caseStudies: "Related Case Studies",
      cta: "Start Your Product Journey",
    },
  },
  "enterprise-systems": {
    h1: "Enterprise Systems Integration & Modernization",
    sections: {
      overview: "Transform Your Enterprise Infrastructure",
      capabilities: "Our Capabilities",
      process: "Our Approach",
      technologies: "Technologies & Platforms",
      caseStudies: "Related Case Studies",
      cta: "Modernize Your Systems",
    },
  },
  "ai-automation": {
    h1: "AI & Automation Solutions",
    sections: {
      overview: "Intelligent Automation for Your Business",
      capabilities: "Our AI Capabilities",
      process: "Our AI Development Process",
      technologies: "AI Technologies",
      caseStudies: "Related Case Studies",
      cta: "Explore AI Solutions",
    },
  },
  "cloud-platforms": {
    h1: "Cloud Platform Engineering",
    sections: {
      overview: "Cloud-Native Architecture Excellence",
      capabilities: "Our Cloud Capabilities",
      process: "Our Cloud Journey",
      technologies: "Cloud Platforms",
      caseStudies: "Related Case Studies",
      cta: "Start Your Cloud Journey",
    },
  },
  cybersecurity: {
    h1: "Enterprise Cybersecurity Services",
    sections: {
      overview: "Comprehensive Security Solutions",
      capabilities: "Our Security Services",
      process: "Our Security Approach",
      technologies: "Security Technologies",
      caseStudies: "Related Case Studies",
      cta: "Secure Your Business",
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
