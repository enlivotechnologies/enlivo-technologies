/**
 * lib/cms.ts
 *
 * PURPOSE: CMS client abstraction layer.
 * WHY: Decouples application from specific CMS implementation.
 *      Easy to switch between Sanity, Contentful, Strapi, or static content.
 *
 * TODO: Implement actual CMS integration when ready
 */

import { SERVICES } from "./constants";

/**
 * Content types
 */
export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  client: string;
  industry: string;
  services: string[];
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  publishedAt: string;
  updatedAt?: string;
}

export interface Insight {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  image: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string;
  updatedAt?: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface JobPosting {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "internship";
  description: string;
  requirements: string[];
  responsibilities: string[];
  publishedAt: string;
}

/**
 * Mock data for development
 * TODO: Replace with actual CMS queries
 */

// Mock case studies
const MOCK_CASE_STUDIES: CaseStudy[] = [
  {
    slug: "enterprise-digital-transformation",
    title: "Enterprise Digital Transformation",
    description:
      "How we helped a Fortune 500 company modernize their legacy systems.",
    client: "Global Manufacturing Corp",
    industry: "Manufacturing",
    services: ["enterprise-systems", "cloud-platforms"],
    challenge: "TODO: Add challenge description",
    solution: "TODO: Add solution description",
    results: [
      "50% reduction in operational costs",
      "3x faster deployment cycles",
    ],
    image: "",
    publishedAt: "2024-01-15",
  },
  {
    slug: "ai-powered-customer-service",
    title: "AI-Powered Customer Service Platform",
    description:
      "Building an intelligent customer service solution that reduced response times by 80%.",
    client: "Leading Retail Brand",
    industry: "Retail",
    services: ["ai-automation", "product-engineering"],
    challenge: "TODO: Add challenge description",
    solution: "TODO: Add solution description",
    results: [
      "80% faster response times",
      "45% increase in customer satisfaction",
    ],
    image: "",
    publishedAt: "2024-02-20",
  },
  // TODO: Add more case studies
];

// Mock insights
const MOCK_INSIGHTS: Insight[] = [
  {
    slug: "future-of-enterprise-ai",
    title: "The Future of Enterprise AI in 2024",
    description:
      "Exploring how artificial intelligence is reshaping enterprise operations.",
    content: "TODO: Add full content",
    category: "AI & Technology",
    tags: ["AI", "Enterprise", "Digital Transformation"],
    image: "/images/insights/placeholder.jpg",
    author: {
      name: "John Doe",
      role: "CTO",
    },
    publishedAt: "2024-03-01",
  },
  // TODO: Add more insights
];

// Mock job postings
const MOCK_JOBS: JobPosting[] = [
  {
    slug: "senior-software-engineer",
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Remote",
    type: "full-time",
    description: "TODO: Add job description",
    requirements: ["5+ years experience", "React/Node.js expertise"],
    responsibilities: [
      "Lead technical initiatives",
      "Mentor junior developers",
    ],
    publishedAt: "2024-03-15",
  },
  // TODO: Add more job postings
];

/**
 * CMS Query Functions
 * These will be replaced with actual CMS queries
 */

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  // TODO: Replace with actual CMS query
  // Example: return await sanityClient.fetch(`*[_type == "caseStudy"]`);
  return MOCK_CASE_STUDIES;
}

export async function getCaseStudyBySlug(
  slug: string
): Promise<CaseStudy | null> {
  // TODO: Replace with actual CMS query
  const caseStudy = MOCK_CASE_STUDIES.find((cs) => cs.slug === slug);
  return caseStudy || null;
}

export async function getAllInsights(): Promise<Insight[]> {
  // TODO: Replace with actual CMS query
  return MOCK_INSIGHTS;
}

export async function getInsightBySlug(slug: string): Promise<Insight | null> {
  // TODO: Replace with actual CMS query
  const insight = MOCK_INSIGHTS.find((i) => i.slug === slug);
  return insight || null;
}

export async function getAllJobs(): Promise<JobPosting[]> {
  // TODO: Replace with actual CMS query
  return MOCK_JOBS;
}

export async function getJobBySlug(slug: string): Promise<JobPosting | null> {
  // TODO: Replace with actual CMS query
  const job = MOCK_JOBS.find((j) => j.slug === slug);
  return job || null;
}

export async function getServiceBySlug(slug: string) {
  // TODO: Replace with actual CMS query or extended service data
  const service = SERVICES.find((s) => s.slug === slug);
  return service || null;
}

/**
 * Generate static params for dynamic routes
 * WHY: Required for static generation of dynamic pages
 */
export async function getCaseStudySlugs(): Promise<string[]> {
  const caseStudies = await getAllCaseStudies();
  return caseStudies.map((cs) => cs.slug);
}

export async function getInsightSlugs(): Promise<string[]> {
  const insights = await getAllInsights();
  return insights.map((i) => i.slug);
}

export async function getJobSlugs(): Promise<string[]> {
  const jobs = await getAllJobs();
  return jobs.map((j) => j.slug);
}
