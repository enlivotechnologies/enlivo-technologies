/**
 * lib/constants.ts
 *
 * PURPOSE: Single source of truth for site-wide configuration.
 * WHY: Prevents hardcoded values scattered across components,
 *      makes updates (rebrand, domain change) trivial.
 */

/**
 * Get Careers URL - Environment aware
 * WHY: Use subdomain in production, normal route on localhost
 * 
 * @returns Careers URL based on environment
 */
export function getCareersUrl(): string {
  // Client-side: check if we're on localhost
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('192.168.')) {
      return '/company/careers';
    }
    return 'https://careers.enlivotechnologies.com';
  }
  
  // Server-side: use environment variable or default to production
  if (process.env.NODE_ENV === 'production') {
    return 'https://careers.enlivotechnologies.com';
  }
  return '/company/careers';
}

/**
 * Careers URL constant for backward compatibility
 * NOTE: Use getCareersUrl() for dynamic environment detection
 */
export const CAREERS_URL = 'https://careers.enlivotechnologies.com';

/**
 * Site-wide configuration
 * TODO: Update with actual business details before launch
 */
export const SITE_CONFIG = {
  // Core identity
  name: "Enlivo Technologies",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.enlivotechnologies.com",
  description:
    "Enlivo Technologies is an enterprise software company specializing in secure, scalable digital product engineering, AI automation, and cloud platform solutions.",

  // Localization
  locale: "en_US",
  language: "en",

  // Social
  twitter: "@enlivotechnologies",

  // Theming
  themeColor: "#2563EB",

  // Default SEO keywords (merged with page-specific)
  defaultKeywords: [
    "Envilo Global Tech Solutions",
    "Envilo Technologies",
    "enterprise software development",
    "digital product engineering",
    "secure digital systems",
    "scalable software solutions",
    "AI automation services",
    "cloud platform development",
    "enterprise technology partner",
  ],
} as const;

/**
 * Navigation structure
 * WHY: Centralized nav makes it easy to update site structure
 */
export const NAVIGATION = {
  main: [
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Product Engineering", href: "/services/product-engineering" },
        { label: "Enterprise Systems", href: "/services/enterprise-systems" },
        { label: "AI & Automation", href: "/services/ai-automation" },
        { label: "Cloud Platforms", href: "/services/cloud-platforms" },
        { label: "Cybersecurity", href: "/services/cybersecurity" },
      ],
    },
    {
      label: "Case Studies",
      href: "/case-studies",
    },
    {
      label: "Insights",
      href: "/insights",
    },
    {
      label: "Company",
      href: "/company",
      children: [
        { label: "About", href: "/company/about" },
        // Note: Careers URL should use getCareersUrl() in components for dynamic behavior
        { label: "Careers", href: "/company/careers" },
        { label: "Internships", href: "/company/internships" },
      ],
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  footer: {
    services: [
      { label: "Product Engineering", href: "/services/product-engineering" },
      { label: "Enterprise Systems", href: "/services/enterprise-systems" },
      { label: "AI & Automation", href: "/services/ai-automation" },
      { label: "Cloud Platforms", href: "/services/cloud-platforms" },
      { label: "Cybersecurity", href: "/services/cybersecurity" },
    ],
    company: [
      { label: "About", href: "/company/about" },
      // Note: Careers URL should use getCareersUrl() in components for dynamic behavior
      { label: "Careers", href: "/company/careers" },
      { label: "Internships", href: "/company/internships" },
      { label: "Contact", href: "/contact" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
} as const;

/**
 * CTA buttons configuration
 */
export const CTA_CONFIG = {
  primary: {
    label: "Get Started", // TODO: Finalize CTA copy
    href: "/contact",
  },
  secondary: {
    label: "View Case Studies",
    href: "/case-studies",
  },
} as const;

/**
 * Services data structure
 * WHY: Single source for service information used across pages
 */
export const SERVICES = [
  {
    slug: "product-engineering",
    name: "Product Engineering",
    shortDescription: "Build scalable digital products from concept to launch.",
    // TODO: Add full description, features, benefits
  },
  {
    slug: "enterprise-systems",
    name: "Enterprise Systems",
    shortDescription:
      "Modernize legacy systems and integrate enterprise applications.",
    // TODO: Add full description, features, benefits
  },
  {
    slug: "ai-automation",
    name: "AI & Automation",
    shortDescription:
      "Leverage AI and machine learning to automate business processes.",
    // TODO: Add full description, features, benefits
  },
  {
    slug: "cloud-platforms",
    name: "Cloud Platforms",
    shortDescription: "Design and implement cloud-native architectures.",
    // TODO: Add full description, features, benefits
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    shortDescription:
      "Protect your digital assets with comprehensive security solutions.",
    // TODO: Add full description, features, benefits
  },
] as const;

/**
 * Company stats (for social proof sections)
 * TODO: Update with real numbers
 */
export const COMPANY_STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "99%", label: "Client Satisfaction" },
] as const;

/**
 * Social media links
 * TODO: Add actual URLs
 */
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/your-company",
  twitter: "https://twitter.com/your-company",
  github: "https://github.com/your-company",
} as const;
