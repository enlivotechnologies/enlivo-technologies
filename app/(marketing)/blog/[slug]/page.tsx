/**
 * app/(marketing)/blog/[slug]/page.tsx
 *
 * PURPOSE: Individual blog post page with full article content.
 * SEO: Dynamic metadata, article schema (TechArticle), breadcrumbs, OG tags.
 * DESIGN: Two-column layout — article on left, sticky sidebar on right.
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Clock,
  Calendar,
  Tag,
  CheckCircle2,
  Mail,
  Zap,
  Shield,
  Rocket,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildArticleSchema, buildBreadcrumbSchema } from "@/lib/schema";
import {
  getPostBySlug,
  getPostSlugs,
  getAllPosts,
  formatBlogDate,
} from "../data";

/* ─── STATIC PARAMS ──────────────────────────────────────────── */

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

/* ─── DYNAMIC METADATA ───────────────────────────────────────── */

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    pathname: `/blog/${post.slug}`,
    ogImage: post.image,
    section: "article",
    publishedTime: post.date,
    modifiedTime: post.date,
    authors: [post.author.name],
  });
}

/* ─── PAGE COMPONENT ─────────────────────────────────────────── */

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      {/* Schema */}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title },
        ])}
      />
      <JsonLd
        data={buildArticleSchema({
          title: post.title,
          description: post.excerpt,
          slug: post.slug,
          image: post.image,
          publishedAt: post.date,
          authorName: post.author.name,
          type: "TechArticle",
          basePath: "/blog",
        })}
      />

      <main className="min-h-screen bg-white">
        {/* ─── HERO HEADER ───────────────────────────────────── */}
        <section className="pt-28 pb-6 md:pt-36 md:pb-8 bg-white">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-black/70 hover:text-black transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="max-w-4xl">
              {/* Category + Meta */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-tight">
                  {post.category}
                </span>
                <span className="w-1 h-1 bg-gray-500 rounded-full" />
                <span className="flex items-center gap-1.5 text-xs text-black/70">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black tracking-tight leading-[1.1] mb-6">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-lg md:text-xl text-black/70 leading-relaxed mb-8 font-light max-w-3xl">
                {post.excerpt}
              </p>

              {/* Author + Date */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-base font-semibold">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <span className="text-sm font-medium text-black block">
                    {post.author.name}
                  </span>
                  <span className="text-sm text-black/70 block">
                    {post.author.role}
                  </span>
                </div>
                <span className="w-1 h-1 bg-gray-500 rounded-full" />
                <div className="flex items-center gap-1.5 text-sm text-black/70">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatBlogDate(post.date)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── HERO IMAGE ────────────────────────────────────── */}
        <section className="py-8 md:py-12">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="relative aspect-[21/9] md:aspect-[3/1] rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* ─── TWO-COLUMN: ARTICLE + SIDEBAR ───────────────── */}
        <section className="py-8 md:py-12">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="flex flex-col lg:flex-row gap-10 xl:gap-16">
              {/* ── LEFT: Article Content ────────────────────── */}
              <div className="flex-1 min-w-0 max-w-3xl">
                <article className="prose prose-lg prose-gray max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-p:text-black/70 prose-strong:text-black prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-orange-500 prose-blockquote:bg-orange-50/50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-li:text-gray-600 prose-table:text-sm prose-th:bg-gray-50 prose-th:px-4 prose-th:py-3 prose-td:px-4 prose-td:py-3 prose-td:border-gray-100">
                  <MarkdownContent content={post.content} />
                </article>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-4 h-4 text-gray-500" />
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-gray-100 text-xs font-medium text-black/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── RIGHT: Sticky Sidebar ────────────────────── */}
              <aside className="w-full lg:w-[380px] xl:w-[400px] flex-shrink-0">
                <div className="lg:sticky lg:top-32 lg:max-h-[calc(100vh-8.5rem)] lg:overflow-y-auto scrollbar-hidden lg:pb-8 space-y-6">
                  {/* ── Newsletter Subscribe Card ────────────── */}
                  <div className="rounded-2xl border border-gray-300 bg-white p-5 xl:p-6">
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-orange-600" />
                      </div>
                      <h3 className="text-[16px] font-semibold text-black">
                        Subscribe to Our Newsletter
                      </h3>
                    </div>
                    <p className="text-sm text-black/70 leading-relaxed mb-4">
                      Get weekly insights on AI-powered development, startup engineering, and building products that scale.
                    </p>

                    {/* Email Input */}
                    <div className="space-y-2.5">
                      <input
                        type="email"
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-300 bg-gray-50/50 text-sm text-black placeholder:text-black/50 outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all"
                      />
                      <button className="w-full px-4 py-2.5 rounded-xl bg-black text-white text-sm font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2">
                        Subscribe
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[11px] text-black/70 mt-2.5 leading-relaxed">
                      No spam. Unsubscribe anytime. We send 1 email per week.
                    </p>
                  </div>

                  {/* ── Ship Faster Card (like reference) ────── */}
                  <div className="rounded-2xl border border-gray-300 bg-white p-5 xl:p-6">
                    <h3 className="text-[16px] font-semibold text-gray-900 leading-snug mb-3.5">
                      Ship Your MVP 3x Faster with AI Augmented Development
                    </h3>

                    <div className="space-y-2.5 mb-5">
                      {[
                        { icon: Zap, text: "3-week delivery for most MVPs" },
                        { icon: Shield, text: "Production-grade architecture & security" },
                        { icon: CheckCircle2, text: "AI + senior engineers for 40% cost savings" },
                        { icon: Rocket, text: "Deployed, tested & launch-ready" },
                        { icon: CheckCircle2, text: "Fixed-price. No surprises." },
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <div className="mt-0.5 flex-shrink-0">
                            <item.icon className="w-4 h-4 text-emerald-500" />
                          </div>
                          <span className="text-[13px] text-black/70 leading-snug">
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/services/free-audit"
                      className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#d4f53c] text-black text-sm font-semibold hover:bg-[#c5e636] transition-colors"
                    >
                      Get a Free Audit
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ─── RELATED POSTS ─────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-[#fafaf9] border-t border-gray-100">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-black tracking-tight mb-10">
              More from the blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 mb-4">
                    <Image
                      src={rp.image}
                      alt={rp.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <span className="text-xs font-semibold text-orange-600 uppercase tracking-tight block mb-2">
                    {rp.category}
                  </span>
                  <h3 className="text-base font-semibold text-black leading-snug">
                    {rp.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

/* ─── MARKDOWN CONTENT RENDERER ─────────────────────────────── */

function MarkdownContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  let inTable = false;
  let tableRows: string[][] = [];
  let tableHeader: string[] = [];
  let inList = false;
  let listItems: string[] = [];
  let listOrdered = false;

  const flushTable = () => {
    if (tableRows.length > 0) {
      elements.push(
        <div key={key++} className="overflow-x-auto my-6">
          <table>
            <thead>
              <tr>
                {tableHeader.map((h, j) => (
                  <th key={j}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    tableRows = [];
    tableHeader = [];
    inTable = false;
  };

  const flushList = () => {
    if (listItems.length > 0) {
      const Tag = listOrdered ? "ol" : "ul";
      elements.push(
        <Tag key={key++}>
          {listItems.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          ))}
        </Tag>
      );
    }
    listItems = [];
    inList = false;
  };

  const inlineFormat = (text: string): string => {
    return text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/`([^`]+)`/g, "<code>$1</code>");
  };

  while (i < lines.length) {
    const line = lines[i];

    // Table row
    if (line.startsWith("|")) {
      if (inList) flushList();
      const cells = line
        .split("|")
        .filter((c) => c.trim() !== "")
        .map((c) => c.trim());

      if (!inTable) {
        tableHeader = cells;
        inTable = true;
        i++; // skip separator row
        i++;
        continue;
      } else if (line.includes("---")) {
        i++;
        continue;
      } else {
        tableRows.push(cells);
        i++;
        continue;
      }
    } else if (inTable) {
      flushTable();
    }

    // Unordered list
    if (/^[-*] /.test(line.trim())) {
      if (!inList || listOrdered) {
        if (inList) flushList();
        inList = true;
        listOrdered = false;
        listItems = [];
      }
      listItems.push(line.trim().replace(/^[-*] /, ""));
      i++;
      continue;
    }

    // Ordered list
    if (/^\d+\. /.test(line.trim())) {
      if (!inList || !listOrdered) {
        if (inList) flushList();
        inList = true;
        listOrdered = true;
        listItems = [];
      }
      listItems.push(line.trim().replace(/^\d+\. /, ""));
      i++;
      continue;
    }

    if (inList) flushList();

    // Heading
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          dangerouslySetInnerHTML={{
            __html: inlineFormat(line.replace("## ", "")),
          }}
        />
      );
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={key++}
          dangerouslySetInnerHTML={{
            __html: inlineFormat(line.replace("### ", "")),
          }}
        />
      );
      i++;
      continue;
    }

    // Horizontal rule
    if (line.trim() === "---") {
      elements.push(<hr key={key++} />);
      i++;
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Regular paragraph
    elements.push(
      <p
        key={key++}
        dangerouslySetInnerHTML={{ __html: inlineFormat(line) }}
      />
    );
    i++;
  }

  if (inTable) flushTable();
  if (inList) flushList();

  return <>{elements}</>;
}
