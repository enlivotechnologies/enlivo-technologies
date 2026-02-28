/**
 * app/(marketing)/blog/page.tsx
 *
 * PURPOSE: Premium blog listing page — SEO-optimized, high-quality content hub.
 * DESIGN: Featured hero post (dark card), trending badges, card grid, newsletter CTA.
 * SEO: Targets startup founders, CTOs, and technical decision-makers.
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  TrendingUp,
  Flame,
} from "lucide-react";
import {
  getAllPosts,
  getFeaturedPost,
  formatBlogDate,
  type BlogPost,
} from "./data";

export const metadata: Metadata = buildMetadata({
  title:
    "Blog | AI, Startups & Software Engineering Insights | Enlivo Technologies",
  description:
    "Trending insights on vibe coding, AI agents, MVP development costs, and startup engineering. Real case studies and honest advice from an agency that builds with AI. Updated weekly.",
  keywords: [
    "vibe coding 2026",
    "AI coding tools",
    "startup engineering blog",
    "MVP development cost",
    "AI agents writing code",
    "software development blog",
    "Indian dev agency",
    "Next.js MVP",
    "hire developers 2026",
    "AI vs developers",
    "startup CTO blog",
    "dev agency future",
    "Cursor AI development",
    "Claude AI coding",
    "offshore development 2026",
    "build MVP fast",
    "software architecture blog",
    "Enlivo blog",
    "product development insights",
    "engineering best practices",
  ],
  pathname: "/blog",
  ogImage: "/images/og/enlivo-technologies.png",
});

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featuredPost = getFeaturedPost();
  const restPosts = allPosts.filter((p) => p.slug !== featuredPost.slug);

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog" },
        ])}
      />

      <main className="min-h-screen bg-white">
        {/* ─── HERO ──────────────────────────────────────────── */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-white">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 mb-6">
                {/* Blinking Dot */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                <span className="text-xs font-semibold text-orange-700 uppercase tracking-tight">
                  Trending Now
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.08] mb-6">
                Engineering Insights for Builders.
              </h1>
              <p className="text-lg text-black/70 leading-relaxed max-w-2xl font-light">
                Trending takes on AI-powered development, startup engineering,
                and the future of software agencies. Updated weekly with real
                case studies and honest numbers.
              </p>
            </div>
          </div>
        </section>

        {/* ─── FEATURED POST ─────────────────────────────────── */}
        <section className="pb-16 md:pb-20">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="relative rounded-3xl overflow-hidden bg-[#0a0a0a]">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Left: Content */}
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </span>
                      <span className="text-xs text-[#9E9EA0] uppercase tracking-tight font-medium">
                        {featuredPost.category}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight leading-snug mb-5 ">
                      {featuredPost.title}
                    </h2>

                    <p className="text-[#9E9EA0] leading-relaxed mb-8 max-w-lg text-[15px]">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-white text-sm font-semibold">
                          {featuredPost.author.name.charAt(0)}
                        </div>
                        <div>
                          <span className="text-sm text-white font-medium">
                            {featuredPost.author.name}
                          </span>
                          <span className="block text-xs text-[#9E9EA0]">
                            {formatBlogDate(featuredPost.date)}
                          </span>
                        </div>
                      </div>
                      <span className="w-1 h-1 bg-[#9E9EA0] rounded-full" />
                      <span className="flex items-center gap-1.5 text-xs text-[#9E9EA0]">
                        <Clock className="w-3 h-3" />
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Right: Image */}
                  <div className="relative aspect-[4/3] lg:aspect-auto min-h-[300px] lg:min-h-0 order-1 lg:order-2">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent hidden lg:block" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* ─── ALL POSTS ─────────────────────────────────────── */}
        <section className="pb-24 md:pb-32">
          <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-semibold text-black tracking-tight">
                All Posts
              </h2>
              <span className="text-sm text-black/70">
                {allPosts.length} articles
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {restPosts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── NEWSLETTER CTA ────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-[#fafaf9] border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-6 sm:px-12 lg:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-4">
              Get insights before everyone else
            </h2>
            <p className="text-lg text-gray-500 mb-8 max-w-xl mx-auto font-light">
              No spam, no fluff. Actionable insights on AI, startups, and
              software engineering. Once a week.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@startup.com"
                className="flex-1 px-5 py-3.5 rounded-full border border-gray-200 bg-white text-gray-900 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-300 transition-all"
              />
              <button className="inline-flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white px-6 py-3.5 rounded-full text-sm font-semibold transition-colors">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

/* ─── POST CARD COMPONENT ─────────────────────────────────────── */

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      {/* Image */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 mb-5">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {post.isTrending && (
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-white text-[11px] font-medium">
            <TrendingUp className="w-3 h-3 text-green-300" />
            Trending
          </div>
        )}
      </div>

      {/* Meta */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-semibold text-orange-600 uppercase tracking-tight">
          {post.category}
        </span>
        <span className="w-1 h-1 bg-black/50 rounded-full" />
        <span className="flex items-center gap-1.5 text-xs text-black/70">
          <Clock className="w-3 h-3" />
          {post.readTime}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-black tracking-tight leading-snug mb-2">
        {post.title}
      </h3>

      {/* Excerpt */}
      <p className="text-sm text-black/70 leading-relaxed line-clamp-2 mb-4">
        {post.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-xs font-semibold">
            {post.author.name.charAt(0)}
          </div>
          <div>
            <span className="text-xs text-black/90 font-medium block">
              {post.author.name}
            </span>
            <span className="text-[11px] text-black/70 block">
              {formatBlogDate(post.date)}
            </span>
          </div>
        </div>
        <ArrowUpRight className="w-5 h-5 text-black/70 group-hover:text-orange-600 transition-colors" />
      </div>
    </Link>
  );
}
