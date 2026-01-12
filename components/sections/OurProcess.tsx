/**
 * components/sections/OurProcess.tsx
 *
 * PURPOSE: Software development process section showcasing Enlivo's methodology.
 * WHY: Builds trust by demonstrating structured, professional approach to projects.
 *
 * SEO OPTIMIZATIONS:
 * ├─ Schema.org: HowTo + HowToStep structured data for rich snippets
 * ├─ Semantic HTML: Proper heading hierarchy (H2 → H3), article elements
 * ├─ ARIA: aria-labelledby, aria-describedby, role attributes
 * ├─ Keywords: software development process, enterprise engineering, security-first
 * └─ Accessibility: Screen reader friendly with hidden descriptive content
 *
 * TARGET KEYWORDS:
 * - Primary: "software development process", "enterprise software methodology"
 * - Secondary: "secure software development", "agile engineering", "production-ready"
 * - Brand: "Enlivo Technologies" - https://www.enlivotechnologies.com
 */

"use client";

import { useState } from "react";

// --- TYPES ---
interface ProcessStep {
  number: string;
  title: string[];
  description: string;
  outcome: string;
  keywords: string[]; // SEO keywords for each step
}

// --- DATA ---
const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: ["Understand", "the Business"],
    description:
      "Every engagement begins by understanding the problem behind the request. Business goals, users, constraints, and risks are defined early so technology decisions are made with purpose — not assumptions.",
    outcome: "Clear direction and shared understanding.",
    keywords: [
      "business analysis",
      "requirements gathering",
      "stakeholder alignment",
    ],
  },
  {
    number: "02",
    title: ["Design", "with Intent"],
    description:
      "Architecture, user experience, and security considerations are planned together. Design is treated as a decision-making tool, not just a visual layer, ensuring scalability, usability, and long-term maintainability.",
    outcome: "A blueprint that supports growth, performance, and security.",
    keywords: [
      "software architecture",
      "UX design",
      "system design",
      "scalable architecture",
    ],
  },
  {
    number: "03",
    title: ["Build with", "Discipline"],
    description:
      "Engineering follows proven practices: modular development, code reviews, testing, and documentation. Systems are built to be stable, observable, and ready for real-world usage.",
    outcome: "Production-ready software, not prototypes.",
    keywords: [
      "software engineering",
      "code quality",
      "test-driven development",
      "CI/CD",
    ],
  },
  {
    number: "04",
    title: ["Secure", "by Default"],
    description:
      "Security is embedded throughout the lifecycle — from access control and data protection to infrastructure hardening and compliance readiness. Risks are addressed before systems go live, not after incidents occur.",
    outcome: "Platforms teams can trust with sensitive data and operations.",
    keywords: [
      "cybersecurity",
      "secure development",
      "compliance",
      "data protection",
    ],
  },
  {
    number: "05",
    title: ["Launch, Measure,", "Improve"],
    description:
      "Deployment is only the beginning. Performance, reliability, and user behavior are monitored, and improvements are made based on real usage — not guesses.",
    outcome: "Systems that evolve with the business.",
    keywords: ["deployment", "monitoring", "continuous improvement", "DevOps"],
  },
];

export function OurProcess() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section
      className="py-24 lg:py-32 bg-[#050505] text-white overflow-hidden"
      aria-labelledby="process-heading"
      aria-describedby="process-description"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      {/* Schema.org HowTo structured data for SEO */}
      <meta
        itemProp="name"
        content="Enterprise Software Development Process | Enlivo Technologies"
      />
      <meta
        itemProp="description"
        content="Building reliable digital systems requires structure, accountability, and disciplined execution. Our proven 5-step process reduces delivery risk, aligns teams, and produces secure, production-ready software for enterprise operations."
      />
      <meta itemProp="totalTime" content="P12W" />
      <meta itemProp="estimatedCost" content="Contact for quote" />
      <link
        itemProp="mainEntityOfPage"
        href="https://www.enlivotechnologies.com/#process"
      />

      {/* Hidden SEO content for search engines - keyword rich */}
      <div className="sr-only" id="process-description">
        Enlivo Technologies enterprise software development process: A proven
        5-step methodology for building secure, production-ready digital
        systems. Our structured approach includes business analysis, intentional
        software architecture design, disciplined engineering practices,
        security-first development, and continuous improvement. We reduce
        delivery risk, align business and technical teams, and deliver scalable
        enterprise software solutions that support real business operations.
        Keywords: software development process, enterprise software, secure
        development, production-ready software, digital transformation, agile
        methodology.
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Header Section --- */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-16 mb-20 lg:mb-24">
          {/* Left Label */}
          <div className="lg:col-span-2 pt-2">
            <span
              className="text-[11px] font-medium tracking-[0.2em] text-white/40 uppercase block font-sans"
              aria-label="Section: Our Process"
            >
              / Our Process /
            </span>
          </div>

          {/* Right Content - Headline */}
          <div className="lg:col-span-10">
            <h2
              id="process-heading"
              className="text-3xl md:text-4xl lg:text-[3.25rem] font-medium leading-[1.15] tracking-tight text-white lg:text-left"
              itemProp="name"
            >
              A Proven Software Development Process for Enterprise Scale Success
            </h2>
          </div>
        </header>

        {/* --- Process Cards Container --- */}
        <div
          className="flex flex-col lg:flex-row gap-3 lg:gap-3 lg:h-[420px]"
          role="list"
        >
          {PROCESS_STEPS.map((step, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                key={step.number}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                tabIndex={0}
                className={`
                  group relative flex flex-col
                  rounded-2xl border transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-default
                  focus:outline-none focus:ring-2 focus:ring-[#2563EB]/50
                  h-auto min-h-[180px] lg:min-h-0 lg:h-full
                  p-5 lg:p-6
                  ${
                    isActive
                      ? "border-white/20 bg-[#0a0a0a] lg:flex-[2.8]"
                      : "border-white/[0.08] bg-transparent lg:flex-1 hover:border-white/[0.12]"
                  }
                `}
                role="listitem"
                aria-label={`Step ${step.number}: ${step.title.join(" ")}`}
                itemScope
                itemType="https://schema.org/HowToStep"
                itemProp="step"
              >
                {/* Schema.org step metadata */}
                <meta itemProp="position" content={String(index + 1)} />
                <meta
                  itemProp="url"
                  content={`https://www.enlivotechnologies.com/#process-step-${step.number}`}
                />

                {/* Hidden keywords for SEO */}
                <span className="sr-only">
                  Keywords: {step.keywords.join(", ")}
                </span>

                {/* Top Content: Number & Title */}
                <div className="flex-shrink-0">
                  <span
                    className={`
                      text-[11px] font-medium block mb-4 transition-colors duration-500
                      ${isActive ? "text-white/50" : "text-white/20"}
                    `}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>

                  <h3
                    className={`
                      text-xl lg:text-[1.65rem] font-medium tracking-tight transition-colors duration-500 leading-[1.2]
                      ${isActive ? "text-white" : "text-white/30"}
                    `}
                    itemProp="name"
                  >
                    {step.title.map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>
                </div>

                {/* Bottom Content: Description & Outcome */}
                <div className="relative mt-auto pt-4">
                  {/* Description - Only visible when active */}
                  <div
                    className={`
                      transition-all duration-500 ease-out
                      ${
                        isActive
                          ? "opacity-100 max-h-[250px] translate-y-0"
                          : "opacity-0 max-h-0 translate-y-2 overflow-hidden"
                      }
                    `}
                  >
                    <p
                      className="text-[13px] leading-[1.65] text-white/45 font-light mb-4 max-w-sm"
                      itemProp="text"
                    >
                      {step.description}
                    </p>

                    {/* Outcome Badge */}
                    <div
                      className="flex items-center gap-2"
                      itemProp="result"
                      itemScope
                      itemType="https://schema.org/Thing"
                    >
                      <span className="text-[9px] font-semibold tracking-[0.15em] text-[#2563EB] uppercase">
                        Outcome:
                      </span>
                      <span
                        className="text-[13px] text-white/60"
                        itemProp="name"
                      >
                        {step.outcome}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
