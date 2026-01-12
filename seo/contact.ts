/**
 * seo/contact.ts
 *
 * PURPOSE: SEO content for the contact page.
 * WHY: Contact pages are high-intent - users ready to convert.
 *      Should be easily indexable and accessible.
 */

import type { PageSEO } from "@/lib/seo";

/**
 * Contact page SEO
 *
 * SEO NOTES:
 * - Contact pages should be simple and fast-loading
 * - Include LocalBusiness schema if you have physical locations
 * - Form should be accessible (labels, ARIA attributes)
 */
export const CONTACT_SEO: PageSEO = {
  title: "Contact Us - Get in Touch",
  description:
    "Ready to transform your business? Contact our team to discuss your project requirements. Get a free consultation for your enterprise technology needs.",
  keywords: [
    "contact",
    "get in touch",
    "free consultation",
    "project inquiry",
    "technology consulting",
  ],
  pathname: "/contact",
  ogImage: "/images/og/contact.png",
};

/**
 * Contact page headings
 */
export const CONTACT_HEADINGS = {
  h1: "Contact Us",
  sections: {
    form: "Send Us a Message",
    info: "Get in Touch",
    offices: "Our Offices",
    faq: "Frequently Asked Questions",
  },
} as const;

/**
 * Contact page FAQs
 * WHY: FAQ schema can generate rich snippets
 * TODO: Add actual FAQs based on common inquiries
 */
export const CONTACT_FAQS = [
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A typical MVP takes 3-4 months, while enterprise implementations may take 6-12 months. We provide detailed timelines during our initial consultation.",
  },
  {
    question: "Do you work with startups or only enterprises?",
    answer:
      "We work with organizations of all sizes, from funded startups to Fortune 500 companies. Our solutions are tailored to match your scale and growth trajectory.",
  },
  {
    question: "What is your engagement model?",
    answer:
      "We offer flexible engagement models including fixed-price projects, time and materials, and dedicated team arrangements. We recommend the best model based on your project needs.",
  },
  {
    question: "Do you offer maintenance and support?",
    answer:
      "Yes, we provide ongoing maintenance and support services. Our SLA-backed support ensures your systems remain operational and optimized.",
  },
  // TODO: Add more FAQs based on actual customer questions
];
