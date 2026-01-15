"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Monitor,
  Layers,
  Code2,
  Server,
  Cpu,
  Cloud,
  ShieldCheck,
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
    title: "Website & Experience Design",
    description:
      "High-performance digital experiences balancing brand, usability, and speed.",
    href: "/services/web-design",
    icon: Monitor,
  },
  {
    title: "Product Strategy & UX",
    description:
      "Translating complex requirements into clear strategies and intuitive flows.",
    href: "/services/product-strategy",
    icon: Layers,
  },
  {
    title: "Web & Mobile Engineering",
    description:
      "Secure, reliable applications using modern engineering practices.",
    href: "/services/engineering",
    icon: Code2,
  },
  {
    title: "Enterprise Systems",
    description:
      "Robust backend systems and APIs powering mission-critical workflows.",
    href: "/services/enterprise",
    icon: Server,
  },
  {
    title: "AI & Intelligent Systems",
    description:
      "Applied AI pipelines and automation workflows that operate reliably.",
    href: "/services/ai",
    icon: Cpu,
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Cloud-native architectures supporting scalability and cost efficiency.",
    href: "/services/cloud",
    icon: Cloud,
  },
  // The 7th item (Center of last row)
  {
    title: "Cybersecurity Engineering",
    description:
      "Security embedded into every layer—from data protection to access control.",
    href: "/services/security",
    icon: ShieldCheck,
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
        <div ref={headerRef} className="text-center max-w-4xl mx-auto mb-20">
          <div className="mb-3">
            <span className="inline-block text-[11px] font-medium tracking-[0.25em] text-black/40 uppercase mb-6">
              / What We Do /
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-[#1a1a1a] leading-[1.15] mb-6 tracking-tight">
            We provide our customer the finest service available
          </h2>
        </div>

        {/* --- GRID LAYOUT WITH CSS MASKING --- */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-gray-200 relative"
        >
          {SERVICES_DATA.map((service, index) => {
            const isLastItem = index === SERVICES_DATA.length - 1;

            return (
              <div
                key={service.title}
                className={`contents ${isLastItem ? "lg:last-row" : ""}`}
              >
                {/* GHOST CELL LEFT */}
                {isLastItem && (
                  <div
                    className="hidden lg:block bg-white w-full h-full"
                    aria-hidden="true"
                  />
                )}

                <Link
                  href={service.href}
                  className="bg-white p-8 xl:p-10 flex flex-col items-center text-center group h-full"
                >
                  {/* ICON CIRCLE */}
                  <div className="mb-5">
                    <div className="w-14 h-14 rounded-full bg-[#F9FAFB] border border-gray-100 flex items-center justify-center">
                      <service.icon
                        strokeWidth={1.5}
                        className="w-6 h-6 text-zinc-600"
                      />
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[17px] font-medium text-[#111] mb-2 tracking-tight">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-[14px] leading-relaxed text-zinc-500 max-w-[280px]">
                    {service.description}
                  </p>
                </Link>

                {/* GHOST CELL RIGHT */}
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
