/**
 * middleware.ts
 *
 * PURPOSE: Edge middleware for security headers and redirects.
 * WHY: Important for SEO (canonical enforcement, redirects)
 *      and security (CSP, HSTS, etc.)
 *
 * RUNS ON: Edge runtime (before request reaches the server)
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Get the pathname
  const { pathname } = request.nextUrl;

  /**
   * Security Headers
   * WHY: Protects against common web vulnerabilities
   */

  // Strict Transport Security - enforce HTTPS
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=31536000; includeSubDomains"
  );

  // Prevent clickjacking
  response.headers.set("X-Frame-Options", "DENY");

  // Prevent MIME type sniffing
  response.headers.set("X-Content-Type-Options", "nosniff");

  // Enable XSS protection
  response.headers.set("X-XSS-Protection", "1; mode=block");

  // Referrer policy
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  // Permissions policy
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );

  /**
   * SEO Redirects
   * WHY: Prevents duplicate content, enforces canonical URLs
   */

  // Remove trailing slashes (except root)
  if (pathname !== "/" && pathname.endsWith("/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 308); // Permanent redirect
  }

  // Lowercase URLs
  if (pathname !== pathname.toLowerCase()) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 308);
  }

  /**
   * TODO: Add more redirects as needed
   *
   * Example: Old URL structure to new
   * if (pathname.startsWith('/blog/')) {
   *   const url = request.nextUrl.clone();
   *   url.pathname = pathname.replace('/blog/', '/insights/');
   *   return NextResponse.redirect(url, 308);
   * }
   */

  return response;
}

/**
 * Matcher configuration
 * Excludes static files and API routes from middleware
 */
export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico, sitemap.xml, robots.txt
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
