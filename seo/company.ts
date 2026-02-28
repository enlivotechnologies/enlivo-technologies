/**
 * seo/company.ts
 *
 * PURPOSE: Centralized SEO content for company pages.
 * WHY: Company pages (About, Team, Careers) build E-E-A-T
 *      (Experience, Expertise, Authoritativeness, Trustworthiness)
 *      which is critical for Google rankings AND AI recommendations.
 *
 * E-E-A-T STRATEGY:
 * - About page establishes company credibility and founding story
 * - Team page shows real people (humanizes the brand)
 * - Careers page signals growth and legitimacy
 * - All pages include geographic signals for international trust
 */

import type { PageSEO } from "@/lib/seo";

/**
 * Company index page SEO
 */
export const COMPANY_INDEX_SEO: PageSEO = {
  title: "About Our Company | Enlivo Technologies",
  description:
    "Learn about Enlivo Technologies — a software development company based in Bangalore, India helping funded startups across the US, UK, EU, and Australia ship production-ready software in weeks.",
  keywords: [
    "about Enlivo Technologies",
    "Enlivo Global Tech Solutions",
    "software development company India",
    "Bangalore software company",
    "startup development company",
  ],
  pathname: "/company",
};

/**
 * About page SEO
 */
export const ABOUT_SEO: PageSEO = {
  title: "About Us - Our Story & Mission",
  description:
    "Enlivo Technologies was founded with one mission: help funded startups stop wasting money on slow agencies and ship real products fast. Based in Bangalore, serving founders worldwide.",
  keywords: [
    "about Enlivo Technologies",
    "Enlivo Global Tech Solutions Pvt Ltd",
    "software company mission",
    "startup development agency",
    "Bangalore software company",
    "Indian software development company",
    "technology leadership",
    "startup engineering partner",
  ],
  pathname: "/company/about",
  ogImage: "/images/og/about.png",
};

/**
 * Team page SEO
 */
export const TEAM_SEO: PageSEO = {
  title: "Our Team | Meet the Engineers Behind Enlivo",
  description:
    "Meet the team behind Enlivo Technologies — senior engineers, designers, and product thinkers who help funded startups ship world-class products in weeks, not months.",
  keywords: [
    "Enlivo team",
    "software development team",
    "startup engineering team",
    "Enlivo Technologies team",
    "Bangalore developers",
    "senior software engineers India",
    "dedicated software engineers",
  ],
  pathname: "/company/team",
};

/**
 * Careers page SEO
 */
export const CAREERS_SEO: PageSEO = {
  title: "Careers - Join Our Team",
  description:
    "Build your career at Enlivo Technologies. Join a team of senior engineers shipping products for funded startups worldwide. Remote-friendly, growth-focused, impact-driven.",
  keywords: [
    "Enlivo careers",
    "software engineering jobs",
    "Bangalore tech jobs",
    "startup jobs India",
    "remote developer jobs",
    "Enlivo Technologies careers",
    "software development jobs",
  ],
  pathname: "/company/careers",
  ogImage: "/images/og/careers.png",
};

/**
 * Why Us page SEO
 */
export const WHY_US_SEO: PageSEO = {
  title: "Why Choose Enlivo | Pros, Cons & Honest Comparison",
  description:
    "See exactly why 15+ funded startups chose Enlivo over other dev agencies. We share the real pros AND cons — because transparency builds trust.",
  keywords: [
    "why choose Enlivo",
    "Enlivo vs other agencies",
    "best startup development agency",
    "offshore development pros cons",
    "Enlivo Technologies review",
    "startup engineering partner comparison",
    "software development agency India",
    "honest dev agency",
  ],
  pathname: "/company/why-us",
  ogImage: "/images/og/why-us.png",
};

/**
 * Internships page SEO
 */
export const INTERNSHIPS_SEO: PageSEO = {
  title: "Internship Program - Start Your Tech Career",
  description:
    "Launch your technology career with Enlivo's internship program. Gain hands-on experience shipping real products for funded startups alongside senior engineers.",
  keywords: [
    "tech internship",
    "software engineering internship",
    "Bangalore internship",
    "startup internship India",
    "developer internship",
    "Enlivo internship",
  ],
  pathname: "/company/internships",
  ogImage: "/images/og/internships.png",
};

/**
 * Company page headings
 */
export const COMPANY_HEADINGS = {
  index: {
    h1: "About Enlivo Technologies",
    sections: {
      overview: "Who We Are",
      values: "What Drives Us",
      leadership: "Our Team",
    },
  },
  about: {
    h1: "About Us",
    sections: {
      story: "Our Story",
      mission: "Our Mission",
      vision: "Our Vision",
      values: "Our Core Values",
      leadership: "Leadership Team",
    },
  },
  team: {
    h1: "Our Team",
    sections: {
      members: "The People Behind Every Product We Ship",
      values: "What Drives Us",
      cta: "Want to Work With Us?",
    },
  },
  careers: {
    h1: "Careers at Enlivo",
    sections: {
      why: "Why Work With Us",
      culture: "Our Culture",
      openings: "Open Positions",
    },
  },
  whyUs: {
    h1: "Why Choose Enlivo",
    sections: {
      toggle: "Pros & Cons",
      guarantees: "Our Guarantees",
      comparison: "How We Compare",
      trust: "Trust Signals",
    },
  },
  internships: {
    h1: "Internship Program",
    sections: {
      overview: "Program Overview",
      benefits: "What You'll Gain",
      roles: "Available Roles",
      apply: "How to Apply",
    },
  },
} as const;
