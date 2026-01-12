/**
 * app/(marketing)/insights/page.tsx
 *
 * PURPOSE: Insights/blog index page.
 * WHY: Content marketing hub - targets informational keywords,
 *      establishes thought leadership, supports internal linking.
 */

import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";
import { INSIGHTS_INDEX_SEO, INSIGHTS_HEADINGS } from "@/seo/insights";
import { getAllInsights } from "@/lib/cms";
import { Container } from "@/components/ui/Container";
import { InsightCard } from "@/components/cards/InsightCard";

/**
 * Page Metadata
 */
export const metadata: Metadata = buildMetadata(INSIGHTS_INDEX_SEO);

/**
 * Insights Index Page
 */
export default async function InsightsPage() {
  const insights = await getAllInsights();

  return (
    <>
      {/* Breadcrumb Schema */}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights" },
        ])}
      />

      <Container className="py-16 lg:py-24">
        {/* Page Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {INSIGHTS_HEADINGS.h1}
          </h1>
          {/* TODO: Add compelling intro copy */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert perspectives on technology trends, digital transformation,
            and enterprise innovation.
          </p>
        </header>

        {/* Latest Insights */}
        <section aria-labelledby="latest-heading">
          <h2
            id="latest-heading"
            className="text-2xl font-bold text-gray-900 mb-8"
          >
            {INSIGHTS_HEADINGS.sections.latest}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight) => (
              <InsightCard
                key={insight.slug}
                title={insight.title}
                description={insight.description}
                category={insight.category}
                href={`/insights/${insight.slug}`}
                image={insight.image}
                publishedAt={insight.publishedAt}
                author={insight.author}
              />
            ))}
          </div>
        </section>

        {/* Empty State */}
        {insights.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">
              Insights coming soon. Subscribe to our newsletter to stay updated.
            </p>
          </div>
        )}
      </Container>
    </>
  );
}
