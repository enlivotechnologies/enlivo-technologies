/**
 * components/sections/ServicesOverview.tsx
 *
 * PURPOSE: Interactive services accordion on homepage.
 * WHY: Showcases Enlivo Technologies' service offerings with engaging UI.
 *
 * SEO NOTES:
 * - H2 heading for proper hierarchy
 * - Service titles in H3 for crawlability
 * - Schema.org Service markup
 * - Keywords: enterprise software, digital product engineering, AI automation
 */

"use client";

import { useState } from "react";

// Service data structure
interface Service {
  number: string;
  title: string;
  description: string;
  href: string; // Link to service detail page
}

// Services data - Enlivo Technologies offerings
const SERVICES_DATA: Service[] = [
  {
    number: "01",
    title: "Website & Digital Experience Design",
    description:
      "We design high-performance websites and digital experiences that balance brand, usability, accessibility, and speed—built to convert, scale, and perform across devices.",
    href: "/services/product-engineering",
  },
  {
    number: "02",
    title: "Product Strategy & UX Design",
    description:
      "We translate complex business requirements into clear product strategy, intuitive user flows, and scalable UX systems that drive adoption and long-term value.",
    href: "/services/product-engineering",
  },
  {
    number: "03",
    title: "Web & Mobile Engineering",
    description:
      "We build secure, reliable web and mobile applications using modern engineering practices—optimized for performance, maintainability, and real-world usage at scale.",
    href: "/services/product-engineering",
  },
  {
    number: "04",
    title: "Enterprise Systems & Backend Platforms",
    description:
      "We engineer robust backend systems, APIs, and integrations that power mission-critical workflows, data pipelines, and enterprise operations.",
    href: "/services/enterprise-systems",
  },
  {
    number: "05",
    title: "AI, Automation & Intelligent Systems",
    description:
      "We design and deploy applied AI systems, automation pipelines, and intelligent workflows that operate reliably in production—not experiments or demos.",
    href: "/services/ai-automation",
  },
  {
    number: "06",
    title: "Cloud & Platform Engineering",
    description:
      "We architect cloud-native infrastructure that supports scalability, availability, cost efficiency, and operational resilience across modern platforms.",
    href: "/services/cloud-platforms",
  },
  {
    number: "07",
    title: "Cybersecurity & Secure Engineering",
    description:
      "Security is embedded into every layer of our work—from application security and data protection to access control, secure architecture, and operational safeguards.",
    href: "/services/cybersecurity",
  },
];

export function ServicesOverview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="py-24 bg-[#F4F5F3]"
      aria-labelledby="services-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 mb-20 lg:mb-24 items-start">
          {/* Left Label */}
          <div className="lg:col-span-2 pt-3">
            <span
              className="text-xs font-medium tracking-[0.2em] text-zinc-400 uppercase tracking-widest block "
              aria-label="Section label"
            >
              / Service We Offer /
            </span>
          </div>

          {/* Right Content - Headline */}
          <div className="lg:col-span-10">
            <h2
              id="process-heading"
              className="text-3xl md:text-4xl lg:text-[3.25rem] font-medium leading-[1.15] tracking-tight text-[#1a1a1a] lg:text-left mb-6"
              itemProp="name"
            >
              What We Build for Modern <br className="hidden lg:block" />
              Enterprises at Scale.
            </h2>
            <p className="text-lg md:text-xl text-[#555555] leading-relaxed max-w-3xl font-medium">
              End-to-end digital, AI, and security-first systems designed for
              reliability, growth, and real-world enterprise operations.
            </p>
          </div>
        </header>
        {/* <div className="mb-12">
          <h2
            id="services-heading"
            className="text-3xl md:text-5xl font-medium text-[#1a1a1a] leading-[1.1] tracking-tight max-w-3xl"
            itemProp="name"
          >
            This is how we help ambitious <br className="hidden lg:block" />
            companies succeed.
          </h2>
        </div> */}

        {/* Services Accordion List */}
        <div className="flex flex-col border-t border-[#1a1a1a]/10" role="list">
          {SERVICES_DATA.map((service, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={service.number}
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
                className="relative border-b border-[#1a1a1a]/10 cursor-pointer group"
                role="listitem"
                itemScope
                itemType="https://schema.org/Service"
                itemProp="itemListElement"
              >
                {/* Background Layer (Blue Hover Effect) */}
                <div
                  className={`
                    absolute inset-0 w-full rounded-lg transition-all duration-300 ease-out origin-center
                    ${
                      isOpen
                        ? "bg-[#2563EB] scale-[1.005] shadow-lg opacity-100 my-1"
                        : "bg-transparent scale-100 opacity-0 my-0"
                    }
                  `}
                  aria-hidden="true"
                />

                {/* Content Layer */}
                <div
                  className={`relative z-10 w-full transition-all duration-300 ${
                    isOpen ? "py-5 px-6" : "py-4 px-0"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* Left: Number + Content */}
                    <div className="flex items-start gap-6 md:gap-12 flex-1">
                      {/* Service Number */}
                      <span
                        className={`
                          text-sm font-medium pt-1 transition-colors duration-300
                          ${
                            isOpen
                              ? "text-white/60"
                              : "text-[#1a1a1a] opacity-40"
                          }
                        `}
                        aria-hidden="true"
                      >
                        {service.number}
                      </span>

                      <div className="flex-1">
                        {/* Service Title */}
                        <h3
                          className={`
                            text-xl md:text-3xl font-medium tracking-tight transition-colors duration-300
                            ${isOpen ? "text-white" : "text-[#1a1a1a]"}
                          `}
                          itemProp="name"
                        >
                          {service.title}
                        </h3>

                        {/* Description (Expandable) */}
                        <div
                          className={`
                            grid transition-all duration-300 ease-out
                            ${
                              isOpen
                                ? "grid-rows-[1fr] opacity-100 mt-2"
                                : "grid-rows-[0fr] opacity-0 mt-0"
                            }
                          `}
                        >
                          <div className="overflow-hidden">
                            <p
                              className="text-sm text-white/90 font-light leading-relaxed max-w-3xl"
                              itemProp="description"
                            >
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Expand Icon */}
                    <div className="flex items-center h-full pt-1">
                      <span
                        className={`
                          text-2xl font-light transition-transform duration-300 block
                          ${
                            isOpen
                              ? "text-white rotate-45"
                              : "text-[#1a1a1a] rotate-0"
                          }
                        `}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hidden link for SEO crawlability */}
                <meta
                  itemProp="url"
                  content={`https://www.enlivotechnologies.com${service.href}`}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
