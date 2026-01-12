/**
 * app/(marketing)/company/internships/page.tsx
 *
 * PURPOSE: Internships page - internship program details.
 * WHY: Attracts early talent, builds brand awareness with students.
 */

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";
import { INTERNSHIPS_SEO, COMPANY_HEADINGS } from "@/seo/company";
import { Container } from "@/components/ui/Container";

/**
 * Page Metadata
 */
export const metadata: Metadata = buildMetadata(INTERNSHIPS_SEO);

/**
 * Internships Page
 */
export default function InternshipsPage() {
  const headings = COMPANY_HEADINGS.internships;

  return (
    <>
      {/* Breadcrumb Schema */}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Company", path: "/company" },
          { name: "Internships" },
        ])}
      />

      {/* Hero Section */}
      <header className="bg-gray-900 text-white py-16 lg:py-24">
        <Container>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{headings.h1}</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Launch your career in technology with hands-on experience working
            alongside industry experts.
          </p>
        </Container>
      </header>

      <Container className="py-16">
        {/* Program Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {headings.sections.overview}
          </h2>
          {/* TODO: Add program overview */}
          <p className="text-gray-600 text-lg">
            Our internship program is designed to give you real-world experience
            on enterprise projects. You&apos;ll work on meaningful tasks,
            receive mentorship, and develop skills that will accelerate your
            career.
          </p>
        </section>

        {/* What You'll Gain */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {headings.sections.benefits}
          </h2>
          {/* TODO: Add benefits grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Real Projects",
                description: "Work on actual client projects, not busywork.",
              },
              {
                title: "Mentorship",
                description: "Learn from experienced engineers and leaders.",
              },
              {
                title: "Skill Development",
                description: "Gain technical and professional skills.",
              },
              {
                title: "Career Path",
                description: "Top interns receive full-time offers.",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="p-6 bg-gray-50 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Available Roles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {headings.sections.roles}
          </h2>
          {/* TODO: Add internship roles */}
          <div className="space-y-4">
            {[
              {
                title: "Software Engineering Intern",
                department: "Engineering",
              },
              { title: "Data Science Intern", department: "AI/ML" },
              { title: "Cloud Engineering Intern", department: "Platform" },
              { title: "UX Design Intern", department: "Design" },
            ].map((role) => (
              <div
                key={role.title}
                className="p-6 border border-gray-200 rounded-lg"
              >
                <h3 className="font-bold text-gray-900">{role.title}</h3>
                <p className="text-gray-600 text-sm">{role.department}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Apply */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {headings.sections.apply}
          </h2>
          {/* TODO: Add application process */}
          <p className="text-gray-600 text-lg">
            Applications open twice a year for summer and winter cohorts. Send
            your resume and a brief introduction to internships@company.com.
          </p>
        </section>
      </Container>
    </>
  );
}
