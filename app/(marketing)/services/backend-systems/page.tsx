/**
 * app/(marketing)/services/backend-systems/page.tsx
 *
 * PURPOSE: Backend Systems & APIs service page.
 * SEO: Targets "backend development", "API development", "backend services" keywords.
 */

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema, buildServiceSchema } from "@/lib/schema";
import { ArrowUpRight, Database, Server, Lock, CheckCircle2, Zap, Cpu } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Backend Development Services | API Development Company | Enlivo",
  description:
    "Hire expert backend developers. Build scalable APIs, microservices, and database systems. Enterprise-grade backend development services. Get a quote today.",
  keywords: [
    "backend development",
    "backend development services",
    "API development",
    "backend services",
    "hire backend developers",
    "RESTful API development",
    "backend infrastructure",
    "server-side development",
    "database architecture",
    "backend engineering",
    "API development company",
    "microservices development",
    "backend systems",
    "Node.js backend development",
    "Python backend development",
    "backend API services",
    "custom backend development",
    "scalable backend services",
  ],
  pathname: "/services/backend-systems",
  ogImage: "/images/og/services.png",
});

const SERVICE_NAME = "Backend Systems & APIs";
const SERVICE_SLUG = "backend-systems";

export default function BackendSystemsPage() {
  const offerings = [
    {
      name: "RESTful API Development",
      description: "Design and build robust REST APIs for your applications",
    },
    {
      name: "Database Architecture",
      description: "Scalable database design and optimization",
    },
    {
      name: "Server Infrastructure",
      description: "Reliable and performant server-side systems",
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
        <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
                  <Server className="w-4 h-4 text-blue-600" strokeWidth={2} />
                  <span className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                    Service
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight">
                  Backend Systems
                  <br />
                  <span className="text-blue-600">& APIs</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light max-w-2xl">
                  Scalable, secure backend infrastructure and RESTful APIs that power your applications with reliability and performance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-base hover:scale-[1.02] hover:shadow-xl transition-all duration-200"
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
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
                  alt="Backend Systems Development"
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
                Why Choose Our <span className="text-blue-600">Backend Services</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We build backend systems that scale, perform, and secure your application data.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Scalable Architecture</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Designed to grow with your business. Our backend systems handle millions of requests effortlessly.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-2xl p-8 border border-indigo-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center mb-6">
                  <Lock className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">Enterprise Security</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Bank-level security protocols. We protect your data with industry-standard encryption and authentication.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100/50 rounded-2xl p-8 border border-cyan-100 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-600 flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-black mb-3">High Performance</h3>
                <p className="text-gray-700 leading-relaxed font-light">
                  Optimized for speed. Fast response times and efficient resource usage for better user experiences.
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
                Our <span className="text-blue-600">Technology Stack</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "REST APIs"].map((tech, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 text-center">
                  <p className="text-lg font-semibold text-gray-900">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-32 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Build Scalable Backends?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's architect a backend that powers your application's success.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-base hover:scale-[1.02] hover:shadow-xl transition-all duration-200"
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
