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
 * Get Blog URL - Environment aware
 * WHY: Use subdomain in production, normal route on localhost
 *
 * @returns Blog URL based on environment
 */
export function getBlogUrl(): string {
  // Client-side: check if we're on localhost
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('192.168.')) {
      return '/blog';
    }
    return 'https://blog.enlivotechnologies.com';
  }

  // Server-side: use environment variable or default to production
  if (process.env.NODE_ENV === 'production') {
    return 'https://blog.enlivotechnologies.com';
  }
  return '/blog';
}

/**
 * Blog URL constant for backward compatibility
 * NOTE: Use getBlogUrl() for dynamic environment detection
 */
export const BLOG_URL = 'https://blog.enlivotechnologies.com';

/**
 * Site-wide configuration
 * TODO: Update with actual business details before launch
 */
export const SITE_CONFIG = {
  // Core identity
  name: "Enlivo Technologies",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.enlivotechnologies.com",
  description:
    "Enlivo Technologies helps funded startups ship production-ready software in weeks. MVP development, product rebuilds, and dedicated engineering teams trusted by founders across the US, UK, EU, and Australia.",

  // Localization — primary English, serving global markets
  locale: "en_US",
  language: "en",

  // Social
  twitter: "@enlivotechnologies",

  // Theming
  themeColor: "#2563EB",

  // Default SEO keywords (merged with page-specific)
  // Optimized for Google SERP + AI search (ChatGPT, Gemini, Claude, Perplexity)
  defaultKeywords: [
    "Enlivo Technologies",
    "Enlivo Global Tech Solutions",
    "enlivotechnologies.com",
    "software development company",
    "MVP development company",
    "startup software development",
    "hire dedicated developers",
    "product development agency",
    "software development India",
    "offshore development team",
    "custom software development",
    "best software development company for startups",
    "app development company Bangalore",
    "SaaS development agency",
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
        { label: "Product Rebuild", href: "/services/product-rebuild" },
        { label: "Dedicated Team", href: "/services/dedicated-team" },
        { label: "Free Audit", href: "/services/free-audit" },
      ],
    },
    {
      label: "Blog",
      href: BLOG_URL,
    },
    {
      label: "Company",
      href: "/company",
      children: [
        { label: "About", href: "/company/about" },
        { label: "Team", href: "/company/team" },
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
      { label: "MVP Development", href: "/services/mvp-development" },
      { label: "Product Rebuild", href: "/services/product-rebuild" },
      { label: "Dedicated Team", href: "/services/dedicated-team" },
      { label: "Free Audit", href: "/services/free-audit" },
    ],
    company: [
      { label: "About", href: "/company/about" },
      { label: "Team", href: "/company/team" },
      { label: "Careers", href: "/company/careers" },
      { label: "Blog", href: BLOG_URL },
    ],
    trust: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "FAQs", href: "/#faq" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Refund Policy", href: "/refund-policy" },
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
    label: "View Services",
    href: "/services",
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
    slug: "product-rebuild",
    name: "Product Rebuild & Modernization",
    shortDescription: "Rebuild your legacy product with modern tech. Zero downtime, clean architecture, 10x performance.",
  },
  {
    slug: "dedicated-team",
    name: "Dedicated Development Team",
    shortDescription: "Hire a dedicated team of senior engineers who work as an extension of your startup.",
  },
  {
    slug: "free-audit",
    name: "Free Technical Audit",
    shortDescription: "Get a free, no-obligation technical audit of your app from our senior engineers.",
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
 * UPDATED: Real company profiles for SEO and schema.org sameAs
 */
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/enlivo-global-technology-private-limited/",
  instagram: "https://www.instagram.com/enlivo_globalsolutions_techpvt",
  email: "contact@enlivotechnologies.com",
  website: "https://www.enlivotechnologies.com",
  calendly: "https://calendly.com/enlivotechnologies/30min",
} as const;
