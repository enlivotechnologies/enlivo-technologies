/**
 * components/sections/ServicesOverview.tsx
 *
 * PURPOSE: Services overview section with interactive hover effects.
 * DESIGN: Clean list layout with smooth black background transitions on hover.
 */

"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

// Register ScrollTrigger safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- TYPES ---
interface Service {
  title: string;
  description: string;
  href: string;
}

// --- DATA ---
const SERVICES_DATA: Service[] = [
  {
    title: "MVP & Product Development",
    description:
      "Turn your startup idea into a validated, market-ready product in weeks—not months. Our expert MVP development team builds scalable minimum viable products with core features that drive user engagement and investor interest. From rapid prototyping to production launch, we help founders validate business models and secure funding faster.",
    href: "/services/mvp-development",
  },
  {
    title: "Backend Systems & APIs",
    description:
      "Enterprise-grade backend infrastructure that scales with your business. We architect secure, high-performance RESTful APIs, microservices, and database systems that power mission-critical applications. Built with security-first principles and optimized for reliability—trusted by startups and enterprises for handling millions of requests daily.",
    href: "/services/backend-systems",
  },
  {
    title: "Frontend Web Applications",
    description:
      "Beautiful, lightning-fast web applications that convert visitors into customers. Our frontend development team builds responsive, mobile-first applications using React, Next.js, and modern frameworks that deliver exceptional user experiences. Every interaction is optimized for performance, accessibility, and engagement across all devices.",
    href: "/services/frontend-applications",
  },
  {
    title: "UI Implementation",
    description:
      "Transform your design vision into pixel-perfect, production-ready code. We specialize in converting Figma and Sketch designs into responsive, accessible, and performant user interfaces that maintain 100% design fidelity. Our component-based approach ensures consistency, scalability, and faster time-to-market for your product.",
    href: "/services/ui-implementation",
  },
  {
    title: "Ongoing Development & Support",
    description:
      "Keep your product competitive with continuous development and 24/7 technical support. We provide proactive maintenance, security updates, performance optimization, and feature enhancements that evolve with your business needs. Trusted by growing companies who need reliable partners for long-term success.",
    href: "/services/ongoing-support",
  },
];

export function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
      });

      // Animate heading
      tl.fromTo(
        headingRef.current,
        { y: 40, opacity: 0, filter: "blur(10px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.0,
          ease: "power3.out",
        }
      );

      // Animate subheading
      tl.fromTo(
        subheadingRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );

      // Animate list items on scroll
      tl.fromTo(
        listRef.current?.children || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services-overview"
      className="py-24 lg:py-32 bg-white relative overflow-hidden"
    >
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- CENTERED HEADER --- */}
        <div ref={headerRef} className="text-center max-w-4xl mx-auto mb-24">
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-black leading-[1.1] mb-6 tracking-tight opacity-0"
          >
            What We Help Founders Build
          </h2>
          <p
            ref={subheadingRef}
            className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto opacity-0 font-light"
          >
            From MVP to production-ready products, we deliver the full stack of engineering services your startup needs to scale.
          </p>
        </div>

        {/* Services List - Interactive Hover Effects */}
        <div ref={listRef} className="flex flex-col border-t border-gray-200">
          {SERVICES_DATA.map((service, index) => {
            const number = String(index + 1).padStart(2, "0");

            return (
              <div
                key={service.title}
                className="group relative w-full block border-b border-gray-200 outline-none cursor-pointer"
              >
                {/* Background Transition Layer - Creates smooth blue sweep from top to bottom */}
                <div className="absolute inset-0 bg-blue-600 scale-y-0 origin-top transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />

                <div className="relative z-10 flex flex-col md:flex-row items-start md:items-baseline justify-between px-4 sm:px-6 lg:px-10 py-10 transition-colors duration-500 ease-out">
                  {/* Left: Number */}
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-12">
                    <span className="text-lg font-mono text-gray-400 group-hover:text-white/60 transition-colors duration-300">
                      {number}
                    </span>
                  </div>

                  {/* Center: Title & Description Expansion */}
                  <div className="flex-1 w-full md:pr-20">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-black group-hover:text-white transition-colors duration-300 tracking-tight">
                      {service.title}
                    </h3>

                    {/* Grid Height Trick: Allows animating from height:0 to height:auto smoothly */}
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                      <div className="overflow-hidden">
                        <p className="pt-4 text-base md:text-lg text-gray-400 group-hover:text-gray-300 font-light leading-relaxed max-w-2xl opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75 ease-out">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Icon - Commented out */}
                  {/* <div className="hidden md:flex flex-shrink-0 items-center justify-center w-12 h-12 rounded-full border border-gray-200 group-hover:border-white/20 transition-all duration-500 mt-2 md:mt-0">
                    <ArrowUpRight className="w-5 h-5 text-black group-hover:text-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-45" />
                  </div> */}
                  
                  {/* Links - Commented out for now */}
                  {/* <Link href={service.href} className="...">
                    ...
                  </Link> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
