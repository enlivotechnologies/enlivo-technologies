/**
 * app/(marketing)/services/mvp-development/page.tsx
 *
 * PURPOSE: MVP & Product Development service page.
 * SEO: Targets "MVP development", "product development", "minimum viable product" keywords.
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema, buildServiceSchema } from "@/lib/schema";
import { ArrowUpRight, Rocket, Code, CheckCircle2, Zap, Shield } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "MVP Development Services | Build Your Startup App Fast | Enlivo",
  description:
    "Build your MVP in weeks, not months. Expert MVP development services for startups. Rapid prototyping, validated products, faster funding. Get started today.",
  keywords: [
    "MVP development",
    "MVP development services",
    "build MVP",
    "startup MVP development",
    "minimum viable product",
    "rapid MVP development",
    "MVP development company",
    "startup app development",
    "prototype development",
    "MVP for startups",
    "build an MVP",
    "MVP software development",
    "lean product development",
    "rapid prototyping",
    "startup product development",
    "affordable MVP development",
    "MVP development cost",
    "how to build an MVP",
  ],
  pathname: "/services/mvp-development",
  ogImage: "/images/og/services.png",
});

const SERVICE_NAME = "MVP & Product Development";
const SERVICE_SLUG = "mvp-development";

export default function MVPDevelopmentPage() {
  const offerings = [
    {
      name: "Rapid Prototyping",
      description: "Quick validation of ideas through functional prototypes",
    },
    {
      name: "Core Feature Development",
      description: "Focus on essential features that deliver user value",
    },
    {
      name: "Product Launch Strategy",
      description: "End-to-end support from concept to market launch",
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
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 border border-purple-200">
                  <Rocket className="w-4 h-4 text-purple-600" strokeWidth={2} />
                  <span className="text-sm font-semibold text-purple-700 uppercase tracking-wide">
                    Service
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight">
                  MVP & Product
                  <br />
                  <span className="text-[#8B5CF6]">Development</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light max-w-2xl">
                  Rapidly build and launch your minimum viable product with a focus on core features that deliver value to your users from day one.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white px-8 py-4 rounded-xl font-semibold text-base hover:scale-[1.02] hover:shadow-xl transition-all duration-200"
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
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80"
                  alt="MVP Development"
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
                Why Choose Our <span className="text-[#8B5CF6]">MVP Development</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We focus on building the right features that validate your business idea quickly and cost-effectively.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-8 border border-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Rapid Launch</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Get your product to market in weeks, not months. We focus on speed without compromising quality.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                  <Code className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Core Features First</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  We build only what matters. Every feature is designed to validate your business model and user needs.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Scalable Foundation</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Built with growth in mind. Your MVP evolves seamlessly into a full product as you scale.
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
                Our <span className="text-[#8B5CF6]">MVP Process</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Discovery", desc: "Understand your vision and user needs" },
                { step: "02", title: "Prioritize", desc: "Identify core features for validation" },
                { step: "03", title: "Build", desc: "Rapid development with weekly iterations" },
                { step: "04", title: "Launch", desc: "Deploy and gather real user feedback" },
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all duration-300">
                    <div className="text-4xl font-bold text-purple-600 mb-4">{item.step}</div>
                    <h3 className="text-lg font-bold text-black mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                  {idx < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300 transform -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-[#8B5CF6]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Your MVP?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's turn your idea into a validated product that users love.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#8B5CF6] px-8 py-4 rounded-xl font-semibold text-base hover:scale-[1.02] hover:shadow-xl transition-all duration-200"
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
