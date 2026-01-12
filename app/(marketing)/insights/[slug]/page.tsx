/**
 * app/(marketing)/insights/[slug]/page.tsx
 *
 * PURPOSE: Individual insight/article page (dynamic route).
 * WHY: Each article is unique content targeting specific keywords.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildDynamicMetadata } from "@/lib/seo";
import { JsonLd } from "@/lib/schema";
import { buildInsightSchemas } from "@/seo/schemas/article";
import { getInsightBySlug, getInsightSlugs } from "@/lib/cms";
import { Container } from "@/components/ui/Container";
import { formatDate } from "@/lib/utils";

/**
 * Generate static params for all insights
 */
export async function generateStaticParams() {
  const slugs = await getInsightSlugs();
  return slugs.map((slug) => ({ slug }));
}

/**
 * Generate metadata for each insight
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);

  if (!insight) {
    return { title: "Article Not Found" };
  }

  return buildDynamicMetadata(
    { pathname: "/insights" },
    {
      title: insight.title,
      description: insight.description,
      slug: insight.slug,
      image: insight.image,
      publishedAt: insight.publishedAt,
      updatedAt: insight.updatedAt,
    }
  );
}

/**
 * Insight Page Component
 */
export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  const { articleSchema, breadcrumbSchema } = buildInsightSchemas(insight);

  return (
    <>
      {/* Structured Data */}
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />

      <article>
        {/* Article Header */}
        <header className="bg-gray-50 py-16 lg:py-24">
          <Container>
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full mb-4">
              {insight.category}
            </span>

            {/* H1 - Article Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {insight.title}
            </h1>

            {/* Meta Information */}
            <div className="flex items-center gap-4 text-gray-600">
              <span>{insight.author.name}</span>
              <span>•</span>
              <time dateTime={insight.publishedAt}>
                {formatDate(insight.publishedAt)}
              </time>
            </div>
          </Container>
        </header>

        {/* Article Content */}
        <Container className="py-16">
          <div className="max-w-3xl mx-auto">
            {/* Lead Paragraph */}
            <p className="text-xl text-gray-600 mb-8">{insight.description}</p>

            {/* Main Content */}
            {/* TODO: Render MDX content when CMS is integrated */}
            <div className="prose prose-lg max-w-none">
              <p>{insight.content}</p>
            </div>

            {/* Tags */}
            {insight.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t">
                <h2 className="text-sm font-semibold text-gray-900 mb-4">
                  Tags
                </h2>
                <div className="flex flex-wrap gap-2">
                  {insight.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            <aside className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h2 className="text-sm font-semibold text-gray-900 mb-2">
                About the Author
              </h2>
              <p className="font-medium text-gray-900">{insight.author.name}</p>
              <p className="text-gray-600 text-sm">{insight.author.role}</p>
            </aside>
          </div>
        </Container>
      </article>
    </>
  );
}
