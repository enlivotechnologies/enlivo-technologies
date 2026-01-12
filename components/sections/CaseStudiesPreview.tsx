/**
 * components/sections/CaseStudiesPreview.tsx
 *
 * PURPOSE: Case studies preview on homepage.
 * WHY: Social proof + internal links to case study pages.
 */

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { getAllCaseStudies } from "@/lib/cms";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";

export async function CaseStudiesPreview() {
  const caseStudies = await getAllCaseStudies();
  const featured = caseStudies.slice(0, 3); // Show first 3

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
            <p className="text-gray-600 max-w-2xl">
              {/* TODO: Add case studies section description */}
              See how we&apos;ve helped enterprises transform their technology
              landscape.
            </p>
          </div>
          <Link
            href="/case-studies"
            className="hidden lg:inline-flex text-blue-600 font-medium hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((study) => (
            <CaseStudyCard
              key={study.slug}
              title={study.title}
              description={study.description}
              client={study.client}
              industry={study.industry}
              href={`/case-studies/${study.slug}`}
              image={study.image}
            />
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="mt-8 text-center lg:hidden">
          <Link
            href="/case-studies"
            className="text-blue-600 font-medium hover:underline"
          >
            View all case studies →
          </Link>
        </div>
      </Container>
    </section>
  );
}
