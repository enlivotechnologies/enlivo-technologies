/**
 * app/(marketing)/services/ongoing-support/page.tsx
 *
 * PURPOSE: Ongoing Development & Support service page.
 * SEO: Targets "ongoing support", "maintenance services", "development support" keywords.
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema, buildServiceSchema } from "@/lib/schema";
import { ArrowUpRight, Wrench, Shield, TrendingUp, Headphones, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Ongoing Development & Support Services | Enlivo Technologies",
  description:
    "Continuous improvement, maintenance, and technical support to keep your product evolving and running smoothly. Reliable ongoing development and support services.",
  keywords: [
    "ongoing development",
    "maintenance services",
    "development support",
    "technical support",
    "product maintenance",
    "continuous improvement",
    "software maintenance",
    "development services",
  ],
  pathname: "/services/ongoing-support",
  ogImage: "/images/og/services.png",
});

const SERVICE_NAME = "Ongoing Development & Support";
const SERVICE_SLUG = "ongoing-support";

export default function OngoingSupportPage() {
  const offerings = [
    {
      name: "Bug Fixes & Updates",
      description: "Keep your product running smoothly with regular maintenance",
    },
    {
      name: "Feature Development",
      description: "Continuously evolve your product with new features",
    },
    {
      name: "Performance Monitoring",
      description: "Proactive monitoring and optimization of your systems",
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
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200">
                  <Wrench className="w-4 h-4 text-indigo-600" strokeWidth={2} />
                  <span className="text-sm font-semibold text-indigo-700 uppercase tracking-wide">
                    Service
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight">
                  Ongoing Development
                  <br />
                  <span className="text-indigo-600">& Support</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light max-w-2xl">
                  Continuous improvement, maintenance, and technical support to keep your product evolving and running smoothly.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-base hover:scale-[1.02] hover:shadow-xl transition-all duration-200"
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
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80"
                  alt="Ongoing Development & Support"
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
                Why Choose Our <span className="text-indigo-600">Support Services</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Your product evolves with your business. We're here for the long term.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-2xl p-8 border border-indigo-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center mb-6">
                  <Headphones className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">24/7 Support</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Always available when you need us. Quick response times for critical issues and ongoing assistance.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-8 border border-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Continuous Growth</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Regular feature updates and improvements keep your product competitive and relevant.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-gradient-to-br from-violet-50 to-violet-100/50 rounded-2xl p-8 border border-violet-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Reliable Maintenance</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Proactive monitoring and maintenance ensure your systems stay secure and performant.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-4 tracking-tight">
                What's <span className="text-indigo-600">Included</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Bug fixes and troubleshooting",
                "Security updates and patches",
                "Performance optimization",
                "Feature additions and enhancements",
                "Code reviews and refactoring",
                "Documentation updates",
                "Third-party integrations",
                "Server monitoring and maintenance",
              ].map((service, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all duration-300 flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                  <p className="text-gray-900 font-medium">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-indigo-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready for Ongoing Support?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's keep your product running smoothly and evolving with your business needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-base hover:scale-[1.02] hover:shadow-xl transition-all duration-200"
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
