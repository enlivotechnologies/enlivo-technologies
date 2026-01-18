/**
 * app/(marketing)/services/ui-implementation/page.tsx
 *
 * PURPOSE: UI Implementation service page.
 * SEO: Targets "UI implementation", "design to code", "UI development" keywords.
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema, buildServiceSchema } from "@/lib/schema";
import { ArrowUpRight, Palette, Eye, Code, Layers, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "UI Implementation Services | Enlivo Technologies",
  description:
    "Pixel-perfect UI implementation that transforms designs into interactive, accessible, and performant user interfaces. Expert design-to-code services.",
  keywords: [
    "UI implementation",
    "design to code",
    "UI development",
    "pixel perfect implementation",
    "design handoff",
    "UI coding",
    "interface development",
    "UI/UX implementation",
  ],
  pathname: "/services/ui-implementation",
  ogImage: "/images/og/services.png",
});

const SERVICE_NAME = "UI Implementation";
const SERVICE_SLUG = "ui-implementation";

export default function UIImplementationPage() {
  const offerings = [
    {
      name: "Design to Code",
      description: "Transform your Figma/Sketch designs into production code",
    },
    {
      name: "Pixel Perfect",
      description: "Every detail matches your design specifications exactly",
    },
    {
      name: "Component Libraries",
      description: "Reusable UI components for consistent design systems",
    },
  ];

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: SERVICE_NAME },
        ])}
      />
      <JsonLd
        data={buildServiceSchema({
          name: SERVICE_NAME,
          description: metadata.description || "",
          slug: SERVICE_SLUG,
          offerings,
        })}
      />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-pink-50 via-white to-orange-50">
          <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 border border-pink-200">
                  <Palette className="w-4 h-4 text-pink-600" strokeWidth={2} />
                  <span className="text-sm font-semibold text-pink-700 uppercase tracking-wide">
                    Service
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight">
                  UI
                  <br />
                  <span className="text-pink-600">Implementation</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light max-w-2xl">
                  Pixel-perfect UI implementation that transforms designs into interactive, accessible, and performant user interfaces.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-xl font-semibold text-base hover:scale-[1.02] hover:shadow-xl transition-all duration-200"
                  >
                    Get Started
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                  <Link
                    href="/services"
                    className="group inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-xl font-semibold text-base border-2 border-gray-300 hover:bg-gray-50 transition-all duration-200"
                  >
                    View All Services
                  </Link>
                </div>
              </div>

              {/* Right: Image */}
              <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80"
                  alt="UI Implementation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-4 tracking-tight">
                Why Choose Our <span className="text-pink-600">UI Implementation</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We bridge the gap between design and development with precision and expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-2xl p-8 border border-pink-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-pink-600 flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Pixel Perfect</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Every pixel matches your design. We ensure perfect fidelity between design and implementation.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-2xl p-8 border border-orange-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center mb-6">
                  <Code className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Clean Code</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Maintainable, semantic HTML and CSS. Your codebase stays organized and scalable.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-gradient-to-br from-rose-50 to-rose-100/50 rounded-2xl p-8 border border-rose-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-rose-600 flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Component Systems</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Reusable component libraries that ensure design consistency across your entire product.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-4 tracking-tight">
                Our <span className="text-pink-600">Implementation Process</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Design Review", desc: "Analyze designs for feasibility and optimization opportunities" },
                { title: "Component Breakdown", desc: "Structure UI into reusable, maintainable components" },
                { title: "Implementation", desc: "Code with precision, testing across devices and browsers" },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all duration-300">
                  <div className="text-3xl font-bold text-pink-600 mb-4">{String(idx + 1).padStart(2, "0")}</div>
                  <h3 className="text-xl font-bold text-black mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-pink-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Implement Your Designs?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's turn your beautiful designs into production-ready interfaces.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-pink-600 px-8 py-4 rounded-xl font-semibold text-base hover:scale-[1.02] hover:shadow-xl transition-all duration-200"
            >
              Get Started Today
              <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
