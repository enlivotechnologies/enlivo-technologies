/**
 * proxy.ts
 *
 * PURPOSE: Handle subdomain routing for careers.enlivotechnologies.com
 * WHY: Routes careers subdomain to careers pages while maintaining SEO-friendly URLs
 * 
 * NOTE: Next.js 16.1.1+ uses "proxy" instead of deprecated "middleware"
 */

import { NextRequest, NextResponse } from "next/server";

export default function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Define domains based on environment
  const isProduction = process.env.NODE_ENV === 'production';
  const mainDomain = isProduction ? 'enlivotechnologies.com' : 'localhost:3000';
  const careersSubdomain = `careers.${mainDomain}`;

  // Check if request is coming from careers subdomain
  if (hostname === careersSubdomain || hostname.startsWith('careers.')) {
    // Skip rewriting if already on /company/careers path (to avoid double rewriting)
    if (url.pathname.startsWith('/company/careers')) {
      return NextResponse.next();
    }

    // Skip API routes, static files, and public assets
    if (
      url.pathname.startsWith('/api/') ||
      url.pathname.startsWith('/_next/') ||
      url.pathname.startsWith('/_static/') ||
      /\.\w+$/.test(url.pathname) // Files with extensions
    ) {
      return NextResponse.next();
    }

    // Handle root path - rewrite to careers listing page
    if (url.pathname === '/') {
      url.pathname = '/company/careers';
      return NextResponse.rewrite(url);
    }

    // Handle job detail pages (e.g., /senior-product-designer)
    // Rewrite any path to /company/careers/[path]
    url.pathname = `/company/careers${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // For main domain, continue normally
  return NextResponse.next();
}
