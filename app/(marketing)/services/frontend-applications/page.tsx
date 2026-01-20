/**
 * app/(marketing)/services/frontend-applications/page.tsx
 *
 * PURPOSE: Frontend Web Applications service page.
 * SEO: Targets "frontend development", "web applications", "frontend services" keywords.
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema, buildServiceSchema } from "@/lib/schema";
import { ArrowUpRight, Globe, Smartphone, Zap, Palette, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Frontend Development Services | React & Next.js Experts | Enlivo",
  description:
    "Hire expert frontend developers. Build beautiful, fast web applications with React, Next.js, and modern frameworks. Responsive design, great UX. Get started today.",
  keywords: [
    "frontend development",
    "frontend development services",
    "web application development",
    "frontend services",
    "hire frontend developers",
    "React development",
    "React development services",
    "Next.js development",
    "Next.js development services",
    "responsive web design",
    "frontend engineering",
    "user interface development",
    "web app development",
    "frontend web development",
    "custom web application",
    "modern web development",
    "frontend development company",
    "React.js development",
  ],
  pathname: "/services/frontend-applications",
  ogImage: "/images/og/services.png",
});

const SERVICE_NAME = "Frontend Web Applications";
const SERVICE_SLUG = "frontend-applications";

export default function FrontendApplicationsPage() {
  const offerings = [
    {
      name: "Modern Web Apps",
      description: "Build with React, Next.js, and cutting-edge frameworks",
    },
    {
      name: "Responsive Design",
      description: "Perfect experiences across all devices and screen sizes",
    },
    {
      name: "Performance Optimization",
      description: "Lightning-fast load times and smooth interactions",
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
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-green-50 via-white to-teal-50">
          <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-200">
                  <Globe className="w-4 h-4 text-green-600" strokeWidth={2} />
                  <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                    Service
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight">
                  Frontend Web
                  <br />
                  <span className="text-green-600">Applications</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light max-w-2xl">
                  Modern, responsive web applications built with cutting-edge frameworks for exceptional user experiences across all devices.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-base hover:scale-[1.02] hover:shadow-xl transition-all duration-200"
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
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&q=80"
                  alt="Frontend Web Applications"
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
                Why Choose Our <span className="text-green-600">Frontend Services</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We build web applications that users love to use.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-8 border border-green-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center mb-6">
                  <Smartphone className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Responsive Design</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Perfect on every device. Mobile-first design ensures your app looks great on phones, tablets, and desktops.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl p-8 border border-teal-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Lightning Fast</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Optimized performance. Fast load times and smooth animations keep users engaged.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl p-8 border border-emerald-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center mb-6">
                  <Palette className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Modern UI/UX</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Beautiful interfaces that delight users. We combine design aesthetics with functionality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-24 md:py-32 bg-gray-50">
          <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black mb-4 tracking-tight">
                Our <span className="text-green-600">Frontend Stack</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Webpack", "GraphQL"].map((tech, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-300 text-center">
                  <p className="text-lg font-semibold text-gray-900">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-green-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Beautiful Web Apps?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's create a frontend that engages and converts your users.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-base hover:scale-[1.02] hover:shadow-xl transition-all duration-200"
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
