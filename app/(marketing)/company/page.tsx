/**
 * app/(marketing)/company/page.tsx
 *
 * PURPOSE: Company section index page.
 * WHY: Hub page for company information, links to about/careers/etc.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";
import { COMPANY_INDEX_SEO, COMPANY_HEADINGS } from "@/seo/company";
import { Container } from "@/components/ui/Container";

/**
 * Page Metadata
 */
export const metadata: Metadata = buildMetadata(COMPANY_INDEX_SEO);

/**
 * Company Index Page
 */
export default function CompanyPage() {
  return (
    <>
      {/* Breadcrumb Schema */}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Company" },
        ])}
      />

      <Container className="py-16 lg:py-24">
        {/* Page Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {COMPANY_HEADINGS.index.h1}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn about our mission, values, and the team driving innovation in
            enterprise technology.
          </p>
        </header>

        {/* Company Sections Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <Link
            href="/company/about"
            className="block p-8 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-2">About Us</h2>
            <p className="text-gray-600">
              Our story, mission, and the values that guide everything we do.
            </p>
          </Link>

          {/* Careers */}
          <Link
            href="/company/careers"
            className="block p-8 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-2">Careers</h2>
            <p className="text-gray-600">
              Join our team and build the future of enterprise technology.
            </p>
          </Link>

          {/* Internships */}
          <Link
            href="/company/internships"
            className="block p-8 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Internships
            </h2>
            <p className="text-gray-600">
              Launch your career with our hands-on internship program.
            </p>
          </Link>
        </div>
      </Container>
    </>
  );
}
