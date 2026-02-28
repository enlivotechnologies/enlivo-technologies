/**
 * proxy.ts
 *
 * PURPOSE: Handle subdomain routing for careers & blog subdomains
 * WHY: Routes subdomains to internal pages while maintaining SEO-friendly URLs
 *
 * Subdomains handled:
 * - careers.enlivotechnologies.com → /company/careers/*
 * - blog.enlivotechnologies.com → /blog/*
 *
 * NOTE: Next.js 16.1.1+ uses "proxy" instead of deprecated "middleware"
 */

import { NextRequest, NextResponse } from "next/server";

/** Paths that should never be rewritten (static assets, API, etc.) */
function isStaticPath(pathname: string): boolean {
  return (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/_static/') ||
    pathname === '/manifest.json' ||
    pathname === '/sitemap.xml' ||
    pathname === '/robots.txt' ||
    /\.\w+$/.test(pathname) // Files with extensions
  );
}

export default function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Normalize hostname (remove port for comparison)
  const normalizedHostname = hostname.split(':')[0];

  // ── Careers subdomain ──
  // careers.enlivotechnologies.com → /company/careers/*
  if (normalizedHostname.startsWith('careers.')) {
    if (url.pathname.startsWith('/company/careers') || isStaticPath(url.pathname)) {
      return NextResponse.next();
    }

    if (url.pathname === '/') {
      url.pathname = '/company/careers';
      return NextResponse.rewrite(url);
    }

    url.pathname = `/company/careers${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // ── Blog subdomain ──
  // blog.enlivotechnologies.com → /blog/*
  // blog.enlivotechnologies.com/vibe-coding-killing-dev-agencies → /blog/vibe-coding-killing-dev-agencies
  if (normalizedHostname.startsWith('blog.')) {
    if (url.pathname.startsWith('/blog') || isStaticPath(url.pathname)) {
      return NextResponse.next();
    }

    if (url.pathname === '/') {
      url.pathname = '/blog';
      return NextResponse.rewrite(url);
    }

    // Handle blog post slugs (e.g., /vibe-coding-killing-dev-agencies → /blog/vibe-coding-killing-dev-agencies)
    url.pathname = `/blog${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // For main domain, continue normally
  return NextResponse.next();
}
