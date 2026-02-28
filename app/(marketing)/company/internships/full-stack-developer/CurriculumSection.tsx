"use client";

/**
 * ProgramJourney Component
 * * DESIGN: "System Specification" / Linear-Style List.
 * * FEEL: Engineered, precise, data-dense but readable.
 * * VISUALS: Mono-spaced accents, high-contrast borders, focus states.
 */

import React, { useState } from "react";
import { ChevronDown, ArrowRight, CornerDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

// --- TYPES ---
interface CurriculumTopic {
  title: string;
  subtopics: string[];
}

interface CurriculumSection {
  id: string;
  name: string;
  outcome: string;
  topics: CurriculumTopic[];
}

// --- DATA ---
const PROGRAM_DATA: CurriculumSection[] = [
  {
    id: "01",
    name: "Foundations of Real Work",
    outcome: "Sets the mindset and basics needed to work like a professional.",
    topics: [
      {
        title: "Introduction to Computer Networks",
        subtopics: [
          "What is Internet? & WWW Overview",
          "Data Transferring & IP Protocols",
          "ISPs, Routers & Infrastructure",
        ],
      },
      {
        title: "Domain Name Systems",
        subtopics: [
          "DNS Resolution & Hierarchy",
          "A, CNAME, MX Records",
          "Recursive DNS Resolvers",
        ],
      },
      {
        title: "Client Server Architecture",
        subtopics: [
          "Earlier System Architectures",
          "HTTP Request-Response Cycle",
          "Web Servers and Web Hosting",
        ],
      },
      {
        title: "Internet Protocols",
        subtopics: [
          "HTTP vs HTTPS",
          "TCP/IP Protocol Suite",
          "RESTful API Principles",
        ],
      },
    ],
  },
  {
    id: "02",
    name: "Working With Professional Tools",
    outcome: "Master the environment used by senior engineers daily.",
    topics: [
      {
        title: "Environment Setup",
        subtopics: [
          "VS Code Mastery & Extensions",
          "Git Version Control Deep Dive",
          "Node.js Runtime & npm/yarn",
        ],
      },
      {
        title: "Package & Build Managers",
        subtopics: [
          "npm vs yarn vs pnpm",
          "Vite Configuration",
          "Linting & Formatting (ESLint/Prettier)",
        ],
      },
    ],
  },
  {
    id: "03",
    name: "Core Engineering Concepts",
    outcome: "Understand the building blocks of the web, not just syntax.",
    topics: [
      {
        title: "HTML5 & Semantic Web",
        subtopics: [
          "Semantic Architecture",
          "Accessibility (ARIA) Standards",
          "SEO Fundamentals",
        ],
      },
      {
        title: "CSS Mastery",
        subtopics: [
          "Flexbox & Grid Layouts",
          "CSS Variables & Theming",
          "Responsive Design Patterns",
        ],
      },
      {
        title: "JavaScript Core",
        subtopics: [
          "Closures, Scope & Hoisting",
          "Event Loop & Concurrency",
          "Async/Await & Promises",
        ],
      },
    ],
  },
  {
    id: "04",
    name: "Building Interactive Applications",
    outcome: "Learn how browsers actually render and manage application state.",
    topics: [
      {
        title: "DOM Manipulation",
        subtopics: [
          "Event Delegation & Bubbling",
          "Efficient DOM Updates",
          "Event Handling",
        ],
      },
      {
        title: "Browser APIs & Performance",
        subtopics: [
          "LocalStorage vs SessionStorage",
          "Fetch API & Interceptors",
          "Lazy Loading & Code Splitting",
        ],
      },
    ],
  },
  {
    id: "05",
    name: "Writing Reliable Code",
    outcome: "Shift from 'it works' to 'it scales' using TypeScript.",
    topics: [
      {
        title: "TypeScript Essentials",
        subtopics: [
          "Strict Typing & Interfaces",
          "Generics & Utility Types",
          "Type Guards & Narrowing",
          "TypeScript with React",
        ],
      },
    ],
  },
  {
    id: "06",
    name: "Designing Backend Systems",
    outcome: "Architect scalable server-side logic and database schemas.",
    topics: [
      {
        title: "Node.js & Express",
        subtopics: [
          "Event-Driven Architecture",
          "Middleware Patterns",
          "Authentication & Authorization",
        ],
      },
      {
        title: "Database Integration",
        subtopics: [
          "SQL vs NoSQL Architecture",
          "PostgreSQL Schema Design",
          "ORM Implementation (Prisma)",
        ],
      },
      {
        title: "API Development",
        subtopics: [
          "RESTful API Design",
          "GraphQL Basics",
          "API Documentation & Testing",
        ],
      },
    ],
  },
  {
    id: "07",
    name: "Scalable User Interfaces",
    outcome: "Build complex, component-driven UIs with React and Next.js.",
    topics: [
      {
        title: "React Fundamentals",
        subtopics: [
          "Virtual DOM & Reconciliation",
          "Hooks (useState, useEffect, custom)",
          "Context API & State Management",
        ],
      },
      {
        title: "Next.js Framework",
        subtopics: [
          "Server Side Rendering (SSR)",
          "Static Site Generation (SSG)",
          "App Router Architecture",
        ],
      },
    ],
  },
  {
    id: "08",
    name: "Connecting Systems End-to-End",
    outcome: "Integrate frontend, backend, and security into a cohesive unit.",
    topics: [
      {
        title: "Full Stack Architecture",
        subtopics: [
          "MVC and MVVM Patterns",
          "Connecting Frontend to Backend",
          "State Management Across Stack",
        ],
      },
      {
        title: "Authentication & Security",
        subtopics: [
          "JWT Tokens & OAuth 2.0",
          "Password Hashing",
          "CORS & Security Headers",
        ],
      },
    ],
  },
  {
    id: "09",
    name: "Integrating Intelligence",
    outcome: "Go beyond CRUD by adding AI capabilities to your apps.",
    topics: [
      {
        title: "AI & ML Basics",
        subtopics: [
          "OpenAI API Integration",
          "LangChain Basics",
          "Prompt Engineering",
          "Using Pre-trained Models",
        ],
      },
    ],
  },
  {
    id: "10",
    name: "Running & Maintaining Apps",
    outcome: "Learn the DevOps lifecycle: CI/CD, Docker, and Cloud.",
    topics: [
      {
        title: "DevOps Essentials",
        subtopics: [
          "Git Workflows & Pull Requests",
          "Docker Containerization",
          "CI/CD Pipelines (GitHub Actions)",
          "Cloud Deployment (AWS/Vercel)",
        ],
      },
      {
        title: "Monitoring",
        subtopics: [
          "Error Tracking (Sentry)",
          "Performance Monitoring",
          "Logging Best Practices",
        ],
      },
    ],
  },
  {
    id: "11",
    name: "Real-World Projects",
    outcome: "Build, improve, and take responsibility for real features.",
    topics: [
      {
        title: "Production Grade Projects",
        subtopics: [
          "System & Database Design",
          "Code Reviews & Documentation",
          "Security Hardening",
          "Production Deployment",
        ],
      },
    ],
  },
  {
    id: "12",
    name: "Advanced Exploration",
    outcome: "Future-proof your career with advanced architectural patterns.",
    topics: [
      {
        title: "Advanced Concepts",
        subtopics: [
          "Microservices Architecture",
          "Serverless Functions",
          "WebSockets & Real-time",
          "Career & Portfolio Strategy",
        ],
      },
    ],
  },
];

export function CurriculumSection() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([0]));

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <section id="syllabus" className="py-24 md:py-32 bg-[#FFFFFF]">
      <div className="max-w-[90rem] mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="mb-24 max-w-4xl">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
            </span>
            <span className="text-[11px] font-mono uppercase tracking-widest font-semibold">
              The Path Forward
            </span>
          </div> */}
          
          <h2 className="text-5xl md:text-6xl font-medium tracking-tighter leading-[1.05] mb-8">
            <span className="text-black">The Program</span>{" "}
            <span className="text-[#8B5CF6]">Journey.</span>
          </h2>
          
          <div className="pl-6 border-l-2 border-purple-200">
            <p className="text-base md:text-lg text-gray-700 font-light leading-relaxed mb-4">
            This internship is designed as a progression — from guided learning to real responsibility.
            You start with support, take on meaningful work, and gradually own outcomes that reflect how professional teams operate.
            </p>
            <p className="text-sm text-purple-600 font-mono uppercase tracking-wide font-medium">
              * The journey adapts as you grow — based on progress, feedback, and readiness.
            </p>
          </div>
        </div>

        {/* --- SYSTEM SPEC LIST --- */}
        <div className="space-y-4">
          {PROGRAM_DATA.map((section, index) => {
            const isExpanded = expandedItems.has(index);

            return (
              <div
                key={index}
                className={cn(
                  "rounded-xl border transition-all duration-300 ease-in-out group",
                  isExpanded 
                    ? "bg-neutral-50 border-neutral-200 shadow-sm" 
                    : "bg-white border-neutral-200 hover:border-neutral-300 hover:shadow-sm"
                )}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full text-left focus:outline-none py-4 md:py-5 px-6 md:px-8 flex flex-col md:flex-row gap-4 md:gap-8 md:items-center"
                >
                  {/* Column 1: Index */}
                  <span className="text-sm font-mono text-neutral-400 font-medium shrink-0">
                    {section.id}
                  </span>

                  {/* Column 2: Main Content */}
                  <div className="flex-1">
                    <h3 className={cn(
                      "text-xl md:text-2xl font-medium tracking-tight transition-colors duration-300",
                      isExpanded ? "text-black" : "text-neutral-800 group-hover:text-black"
                    )}>
                      {section.name}
                    </h3>
                  </div>

                  {/* Column 3: Icon */}
                  <div className="shrink-0 pt-1 md:pt-0">
                    <div className={cn(
                      "w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 border",
                      isExpanded 
                        ? "bg-black border-black text-white rotate-180" 
                        : "bg-white border-neutral-200 text-neutral-400 group-hover:border-neutral-300 group-hover:text-neutral-600"
                    )}>
                      <ChevronDown className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                  </div>
                </button>

                {/* Expandable Content Area */}
                <div
                  className={cn(
                    "grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden",
                    isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    {/* Content Container */}
                    <div className="px-6 md:px-8 pb-8 pt-0 md:pl-[6.5rem]">
                      <div className="border-t border-neutral-200/60 pt-6 space-y-8">
                        
                        {section.topics.map((topic, tIndex) => (
                          <div key={tIndex} className="space-y-3">
                            <h4 className="text-base md:text-lg font-semibold text-black tracking-tight">
                              {topic.title}
                            </h4>
                            <ul className="space-y-2.5 pl-4">
                              {topic.subtopics.map((sub, sIndex) => (
                                <li key={sIndex} className="text-neutral-600 text-sm md:text-[15px] leading-relaxed group/item flex items-start gap-3">
                                  {/* Circle indicator */}
                                  <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 mt-2 shrink-0 group-hover/item:bg-black transition-colors" />
                                  <span className="flex-1">{sub}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}