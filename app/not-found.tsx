/**
 * app/not-found.tsx
 *
 * PURPOSE: Custom 404 page.
 * WHY: Good UX + prevents bounce rate issues.
 *      Also helps users find what they're looking for.
 *
 * SEO NOTE:
 * - Returns proper 404 status code
 * - Should include navigation options
 * - Can include search functionality
 */

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      {/* 404 Heading */}
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might
        have been moved or deleted.
      </p>

      {/* Navigation Options */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild>
          <Link href="/">Go to Homepage</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">Contact Support</Link>
        </Button>
      </div>

      {/* Helpful Links */}
      <div className="mt-12">
        <p className="text-gray-500 mb-4">Or try one of these pages:</p>
        <nav className="flex flex-wrap justify-center gap-4">
          <Link href="/services" className="text-blue-600 hover:underline">
            Services
          </Link>
          <Link href="/insights" className="text-blue-600 hover:underline">
            Insights
          </Link>
          <Link href="/company/about" className="text-blue-600 hover:underline">
            About Us
          </Link>
        </nav>
      </div>
    </Container>
  );
}
