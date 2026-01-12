/**
 * components/sections/CTA.tsx
 *
 * PURPOSE: Call-to-action section.
 * WHY: Conversion-focused section at end of pages.
 */

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CTA_CONFIG } from "@/lib/constants";

interface CTAProps {
  heading?: string;
  description?: string;
}

export function CTA({ heading, description }: CTAProps) {
  return (
    <section className="py-16 lg:py-24 bg-gray-900 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {heading || "Ready to Get Started?"}
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            {description ||
              "Let's discuss how we can help transform your business with technology."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={CTA_CONFIG.primary.href}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              {CTA_CONFIG.primary.label}
            </Link>
            <Link
              href={CTA_CONFIG.secondary.href}
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
            >
              {CTA_CONFIG.secondary.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
