/**
 * app/(marketing)/company/careers/page.tsx
 *
 * PURPOSE: Careers page - job listings and company culture.
 * WHY: Attracts talent, can rank for "[company] jobs" queries.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";
import { CAREERS_SEO, COMPANY_HEADINGS } from "@/seo/company";
import { getAllJobs } from "@/lib/cms";
import { Container } from "@/components/ui/Container";

/**
 * Page Metadata
 */
export const metadata: Metadata = buildMetadata(CAREERS_SEO);

/**
 * Careers Page
 */
export default async function CareersPage() {
  const jobs = await getAllJobs();
  const headings = COMPANY_HEADINGS.careers;

  return (
    <>
      {/* Breadcrumb Schema */}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Company", path: "/company" },
          { name: "Careers" },
        ])}
      />

      {/* Hero Section */}
      <header className="bg-gray-900 text-white py-16 lg:py-24">
        <Container>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{headings.h1}</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Join our team of innovators and help shape the future of enterprise
            technology.
          </p>
        </Container>
      </header>

      <Container className="py-16">
        {/* Why Work With Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {headings.sections.why}
          </h2>
          {/* TODO: Add compelling reasons to join */}
          <p className="text-gray-600 text-lg">
            We offer a collaborative environment where you can grow your skills,
            work on challenging projects, and make a real impact.
          </p>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {headings.sections.benefits}
          </h2>
          {/* TODO: Add benefits grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Competitive Salary",
              "Remote-Friendly",
              "Health Insurance",
              "Learning Budget",
              "Flexible Hours",
              "Team Events",
            ].map((benefit) => (
              <div key={benefit} className="p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {headings.sections.openings}
          </h2>

          {jobs.length > 0 ? (
            <div className="space-y-4">
              {jobs
                .filter((job) => job.type !== "internship")
                .map((job) => (
                  <div
                    key={job.slug}
                    className="p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-900">{job.title}</h3>
                        <p className="text-gray-600 text-sm">
                          {job.department} • {job.location} • {job.type}
                        </p>
                      </div>
                      <Link
                        href={`/company/careers/${job.slug}`}
                        className="text-blue-600 hover:underline text-sm"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <p className="text-gray-600">
              No open positions at the moment. Check back soon or send us your
              resume at careers@company.com.
            </p>
          )}
        </section>
      </Container>
    </>
  );
}
