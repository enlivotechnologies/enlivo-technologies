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
    "Enlivo architects the secure digital backbone for modern global business. Precision engineering for mission critical platforms, cloud infrastructure, and AI.",

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
        { label: "MVP & Product Development", href: "/services/mvp-development" },
        { label: "Backend Systems & APIs", href: "/services/backend-systems" },
        { label: "Frontend Web Applications", href: "/services/frontend-applications" },
        { label: "UI Implementation", href: "/services/ui-implementation" },
        { label: "Ongoing Development & Support", href: "/services/ongoing-support" },
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
      { label: "MVP & Product Development", href: "/services/mvp-development" },
      { label: "Backend Systems & APIs", href: "/services/backend-systems" },
      { label: "Frontend Web Applications", href: "/services/frontend-applications" },
      { label: "UI Implementation", href: "/services/ui-implementation" },
      { label: "Ongoing Development & Support", href: "/services/ongoing-support" },
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
 * NOTE: These match the actual service pages that exist
 */
export const SERVICES = [
  {
    slug: "mvp-development",
    name: "MVP & Product Development",
    shortDescription: "Turn your startup idea into a validated, market-ready product in weeks—not months.",
  },
  {
    slug: "backend-systems",
    name: "Backend Systems & APIs",
    shortDescription: "Enterprise-grade backend infrastructure that scales with your business.",
  },
  {
    slug: "frontend-applications",
    name: "Frontend Web Applications",
    shortDescription: "Beautiful, lightning-fast web applications that convert visitors into customers.",
  },
  {
    slug: "ui-implementation",
    name: "UI Implementation",
    shortDescription: "Transform your design vision into pixel-perfect, production-ready code.",
  },
  {
    slug: "ongoing-support",
    name: "Ongoing Development & Support",
    shortDescription: "Keep your product competitive with continuous development and 24/7 technical support.",
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
