"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Rocket,
  Server,
  Globe,
  Palette,
  HeadphonesIcon,
} from "lucide-react";

// Register ScrollTrigger safely
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// --- DATA ---
interface Service {
  title: string;
  description: string;
  href: string;
  icon: any;
}

const SERVICES_DATA: Service[] = [
  {
    title: "MVP & Product Development",
    description:
      "Rapidly build and launch your minimum viable product with a focus on core features that deliver value to your users from day one.",
    href: "/services/mvp-development",
    icon: Rocket,
  },
  {
    title: "Backend Systems & APIs",
    description:
      "Scalable, secure backend infrastructure and RESTful APIs that power your applications with reliability and performance.",
    href: "/services/backend-systems",
    icon: Server,
  },
  {
    title: "Frontend Web Applications",
    description:
      "Modern, responsive web applications built with cutting-edge frameworks for exceptional user experiences across all devices.",
    href: "/services/frontend-applications",
    icon: Globe,
  },
  {
    title: "UI Implementation",
    description:
      "Pixel-perfect UI implementation that transforms designs into interactive, accessible, and performant user interfaces.",
    href: "/services/ui-implementation",
    icon: Palette,
  },
  {
    title: "Ongoing Development & Support",
    description:
      "Continuous improvement, maintenance, and technical support to keep your product evolving and running smoothly.",
    href: "/services/ongoing-support",
    icon: HeadphonesIcon,
  },
];

export function ServicesOverview() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header Content Fade In (Centered)
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      // 2. Grid Fade In
      gsap.fromTo(
        gridRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
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
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- CENTERED HEADER --- */}
        <div ref={headerRef} className="text-center max-w-5xl mx-auto mb-20">
          {/* <div className="mb-3">
            <span className="inline-block text-[11px] font-medium tracking-[0.25em] text-black/40 uppercase mb-6">
              / What We Do /
            </span>
          </div> */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-[#1a1a1a] leading-[1.15] mb-6 tracking-tight">
          What We Help Founders Build MVP & Product Development Backend Systems & APIs
          </h2>
        </div>

        {/* --- GRID LAYOUT --- */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-gray-200 relative"
        >
          {SERVICES_DATA.map((service, index) => {
            // For 5 items: first 3 in row 1, last 2 in row 2 (centered)
            const isInLastRow = index >= 3;
            const isLastItem = index === SERVICES_DATA.length - 1;

            return (
              <div
                key={service.title}
                className={`contents ${isInLastRow ? "lg:col-start-auto" : ""}`}
              >
                {/* GHOST CELL LEFT - Only for first item in last row (4th item) */}
                {index === 3 && (
                  <div
                    className="hidden lg:block bg-white w-full h-full"
                    aria-hidden="true"
                  />
                )}

                <Link
                  href={service.href}
                  className="bg-white p-8 xl:p-10 flex flex-col items-center text-center group h-full transition-all duration-300 hover:bg-gray-50"
                >
                  {/* ICON CIRCLE */}
                  <div className="mb-5">
                    <div className="w-14 h-14 rounded-full bg-[#F9FAFB] border border-gray-100 flex items-center justify-center group-hover:border-gray-200 group-hover:bg-gray-50 transition-all duration-300">
                      <service.icon
                        strokeWidth={1.5}
                        className="w-6 h-6 text-zinc-600 group-hover:text-zinc-800 transition-colors duration-300"
                      />
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[17px] font-medium text-[#111] mb-3 tracking-tight group-hover:text-[#0F172A] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-[14px] leading-relaxed text-zinc-500 max-w-[280px] group-hover:text-zinc-600 transition-colors duration-300">
                    {service.description}
                  </p>
                </Link>

                {/* GHOST CELL RIGHT - Only for last item (5th item) */}
                {isLastItem && (
                  <div
                    className="hidden lg:block bg-white w-full h-full"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
