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
    title: ["Product clarity call", "(with founder)"],
    description:
      "Start with a direct conversation with the founder to understand your vision, goals, and challenges. We ask the right questions to clarify requirements, assess feasibility, and align on expectations before any work begins.",
    outcome: "Clear vision, aligned expectations, and a solid foundation.",
    keywords: [
      "product discovery",
      "founder consultation",
      "requirements clarification",
      "feasibility assessment",
    ],
  },
  {
    number: "02",
    title: ["Scope + roadmap", "definition"],
    description:
      "We define the project scope, create a detailed roadmap, and break down the work into manageable phases. You'll see exactly what will be built, when, and how it aligns with your business objectives.",
    outcome: "A clear roadmap and defined scope for success.",
    keywords: [
      "project scoping",
      "roadmap planning",
      "project definition",
      "milestone planning",
    ],
  },
  {
    number: "03",
    title: ["Build in weekly", "milestones"],
    description:
      "Development happens in weekly sprints with clear milestones. You get regular updates, see progress in real-time, and can provide feedback as we build. No surprises, just steady, visible progress.",
    outcome: "Transparent progress with weekly deliverables.",
    keywords: [
      "agile development",
      "weekly sprints",
      "milestone delivery",
      "iterative development",
    ],
  },
  {
    number: "04",
    title: ["Demo, feedback,", "iterate"],
    description:
      "Each milestone ends with a demo where you see the work, provide feedback, and we iterate. This continuous feedback loop ensures we're building exactly what you need, the way you need it.",
    outcome: "Refined product that matches your exact needs.",
    keywords: [
      "demo sessions",
      "client feedback",
      "iterative improvement",
      "collaborative development",
    ],
  },
  {
    number: "05",
    title: ["Launch + ongoing", "support"],
    description:
      "We handle deployment, ensure everything works smoothly, and provide ongoing support. Your product launches successfully, and we're there to help it grow and evolve with your business.",
    outcome: "Successful launch with continuous support and growth.",
    keywords: [
      "product launch",
      "deployment",
      "ongoing support",
      "maintenance",
      "continuous improvement",
    ],
  },
];

export function OurProcess() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section
      id="our-process"
      className="py-24 lg:py-32 bg-[#050505] text-white overflow-hidden"
      aria-labelledby="process-heading"
      aria-describedby="process-description"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      {/* Schema.org HowTo structured data for SEO */}
      <meta
        itemProp="name"
        content="How We Work - Product Development Process | Enlivo Technologies"
      />
      <meta
        itemProp="description"
        content="Our simple, transparent 5-step process: Product clarity call with founder, scope and roadmap definition, weekly milestone builds, demo and feedback iterations, and launch with ongoing support. Get results without the complexity."
      />
      <meta itemProp="totalTime" content="P12W" />
      <meta itemProp="estimatedCost" content="Contact for quote" />
      <link
        itemProp="mainEntityOfPage"
        href="https://www.enlivotechnologies.com/#process"
      />

      {/* Hidden SEO content for search engines - keyword rich */}
      <div className="sr-only" id="process-description">
        Enlivo Technologies product development process: A simple, transparent
        5-step methodology. Start with a product clarity call with the founder,
        define scope and roadmap, build in weekly milestones, demo and iterate
        based on feedback, then launch with ongoing support. Our process ensures
        transparency, regular communication, and results-driven delivery.
        Keywords: product development process, MVP development, agile
        methodology, weekly sprints, founder-led development, transparent
        process.
      </div>

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Header Section - Centered --- */}
        <header className="text-center mb-20 lg:mb-24">
          {/* Label */}
          <div className="mb-4">
            <span
              className="text-[11px] font-medium tracking-[0.2em] text-white/40 uppercase block font-sans"
              aria-label="Section: How We Work"
            >
              / How We Work /
            </span>
          </div>

          {/* Headline - Centered */}
          <div className="max-w-4xl mx-auto">
            <h2
              id="process-heading"
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-[family-name:var(--font-neue-montreal)] leading-[1.1] tracking-tight text-white"
              itemProp="name"
            >
              A Simple, Transparent Process That Gets Results
            </h2>
          </div>
        </header>

        {/* --- Process Cards Container --- */}
        <div
          className="flex flex-col lg:flex-row gap-4 lg:gap-4 lg:h-[480px]"
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
                  rounded-xl border transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] cursor-default
                  focus:outline-none focus:ring-2 focus:ring-[#FFA500]/50
                  h-auto min-h-[200px] lg:min-h-0 lg:h-full
                  p-6 lg:p-8
                  ${
                    isActive
                      ? "border-[#FFA500]/30 bg-gradient-to-br from-[#0a0a0a] to-[#0f0f0f] lg:flex-[2.8] shadow-lg shadow-[#FFA500]/10"
                      : "border-white/[0.08] bg-transparent lg:flex-1 hover:border-white/[0.15] hover:bg-white/[0.02]"
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
                      text-xl lg:text-2xl xl:text-[1.75rem] font-[family-name:var(--font-neue-montreal)] tracking-tight transition-colors duration-500 leading-[1.2]
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
                    <p
                      className="text-[13px] text-white/60 leading-relaxed"
                      itemProp="result"
                      itemScope
                      itemType="https://schema.org/Thing"
                    >
                      <span className="text-[#FFA500] font-semibold tracking-[0.1em] uppercase mr-2">
                        OUTCOME:
                      </span>
                      <span itemProp="name">
                        {step.outcome}
                      </span>
                    </p>
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
