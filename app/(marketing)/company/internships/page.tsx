"use client";

/**
 * app/(marketing)/company/internships/page.tsx
 *
 * PURPOSE: Premium Internship/Training Program Landing Page.
 * DESIGN: High-contrast architectural aesthetic (Dark Hero/Syllabus + Light Features/Testimonials).
 */

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Terminal,
  Cpu,
  Users,
  Award,
  Rocket,
  PlayCircle,
  ChevronDown,
  Zap,
  Layers,
  Bot,
  Globe,
  Database,
} from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";
import { cn } from "@/lib/utils";

// --- DATA: HERO HIGHLIGHTS ---
const PROGRAM_HIGHLIGHTS = [
  {
    icon: Terminal,
    title: "6-Month Intensive",
    desc: "A rigorous timeline designed to fast-track your career.",
  },
  {
    icon: Code2,
    title: "100% Online & Live",
    desc: "Interactive classes you can attend from anywhere.",
  },
  {
    icon: Cpu,
    title: "Theory + Hands-On",
    desc: "Don't just learn syntax. Build real engines.",
  },
];

// --- DATA: BENTO FEATURES ---
const BENTO_FEATURES = [
  {
    title: "Industry-Recognized Certification",
    description:
      "Receive an official certificate to strengthen your resume and LinkedIn profile. Validated by Enlivo Global Tech Solutions.",
    icon: Award,
    className: "md:col-span-2",
    bg: "bg-gradient-to-br from-blue-50 to-indigo-50/50",
    border: "border-blue-100",
  },
  {
    title: "Expert Mentorship",
    description:
      "Learn directly from industry professionals through personalized 1-on-1 mentoring sessions.",
    icon: Users,
    className: "md:col-span-1",
    bg: "bg-white",
    border: "border-gray-200",
  },
  {
    title: "Project-Based Learning",
    description:
      "Work on real-world projects and build a job-ready portfolio that proves your skills.",
    icon: Code2,
    className: "md:col-span-1",
    bg: "bg-white",
    border: "border-gray-200",
  },
  {
    title: "Career Support & Alumni",
    description:
      "Get resume reviews, mock interviews, and join a growing network of graduates for referrals.",
    icon: Rocket,
    className: "md:col-span-2",
    bg: "bg-gradient-to-br from-purple-50 to-pink-50/50",
    border: "border-purple-100",
  },
];

// --- DATA: DETAILED SYLLABUS ---
const SYLLABUS_DATA = [
  {
    id: 1,
    title: "Getting Started: Your Journey Overview",
    icon: Terminal,
    description:
      "Orientation, environment setup, and mastering the professional developer workflow.",
    techStack: ["Git", "Linux", "VS Code"],
    topics: [
      "Professional Git Workflows",
      "Command Line Mastery",
      "Development Environment Architecture",
      "Agile Methodologies",
    ],
  },
  {
    id: 2,
    title: "Part 1: C++ & DSA Fundamentals",
    icon: Code2,
    description:
      "Building a rock-solid foundation in memory management and algorithmic thinking.",
    techStack: ["C++", "STL", "GDB"],
    topics: [
      "Memory Management & Pointers",
      "Time & Space Complexity",
      "Recursion & Backtracking",
      "Sorting & Searching Deep Dive",
    ],
  },
  {
    id: 3,
    title: "Part 2: Data Structures Deep Dive",
    icon: Layers,
    description:
      "Mastering complex data organization for high-performance applications.",
    techStack: ["Abstract Data Types", "System Design"],
    topics: [
      "Advanced Linked Lists",
      "Trees, BST & AVL",
      "Heaps & Priority Queues",
      "Hashing Strategies",
    ],
  },
  {
    id: 4,
    title: "Part 3: Advanced Algorithms",
    icon: Zap,
    description:
      "Solving complex problems with Dynamic Programming and Graph Theory.",
    techStack: ["Algorithms", "Competitive Programming"],
    topics: [
      "Graph Theory & Traversal",
      "Dynamic Programming Patterns",
      "Greedy Algorithms",
      "Bit Manipulation Mastery",
    ],
  },
  {
    id: 5,
    title: "Part 4: AI Fundamentals & Theory",
    icon: Database,
    description:
      "The mathematical and theoretical core behind modern Artificial Intelligence.",
    techStack: ["Python", "NumPy", "Pandas", "PyTorch"],
    topics: [
      "Linear Algebra for ML",
      "Neural Network Architecture",
      "Natural Language Processing (NLP)",
      "Data Preprocessing Pipelines",
    ],
  },
  {
    id: 6,
    title: "Part 5: Building AI Applications",
    icon: Bot,
    description:
      "Integrating Large Language Models into real-world software products.",
    techStack: ["OpenAI", "LangChain", "Pinecone", "RAG"],
    topics: [
      "Prompt Engineering mastery",
      "Retrieval Augmented Generation (RAG)",
      "Vector Databases",
      "API Integration & Management",
    ],
  },
  {
    id: 7,
    title: "Part 6: Advanced AI & Multi-Agent Systems",
    icon: Cpu,
    description:
      "Architecting autonomous systems that can think, plan, and execute.",
    techStack: ["CrewAI", "AutoGPT", "Agentic Workflows"],
    topics: [
      "Multi-Agent Orchestration",
      "Task Planning & Execution",
      "Custom Tool Development",
      "Autonomous Agent Evaluation",
    ],
  },
  {
    id: 8,
    title: "Part 7: Production AI & Deployment",
    icon: Globe,
    description:
      "Moving from local scripts to scalable, cloud-hosted AI applications.",
    techStack: ["Docker", "AWS", "FastAPI", "CI/CD"],
    topics: [
      "Containerization with Docker",
      "Cloud Infrastructure (AWS/GCP)",
      "Model Quantization & Optimization",
      "Monitoring & LLM-Ops",
    ],
  },
];

// --- DATA: TESTIMONIALS ---
const TESTIMONIALS = [
  {
    id: 1,
    type: "video",
    name: "Satyam Vyas",
    role: "ADMM Analyst @ Deloitte",
    image:
      "https://res.cloudinary.com/dqmryiyhz/video/upload/v1768462714/Untitled_design_scbpxt.mp4",
  },
  {
    id: 2,
    type: "text",
    name: "Anusha Jha",
    role: "Software Engineer",
    company: "Deloitte",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    text: "My journey truly began in the third year of my college. I lacked consistency in DSA practice even though my CS fundamentals were strong. Enlivo changed that.",
  },
  {
    id: 3,
    type: "video",
    name: "Subhajit Raha",
    role: "Software Engineer @ Oracle",
    image:
      "https://res.cloudinary.com/dqmryiyhz/video/upload/v1768464802/Untitled_design_3_pkbjtp.mp4",
  },
  {
    id: 4,
    type: "text",
    name: "Vishnupriya",
    role: "SDE Intern",
    company: "Morgan Stanley",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    text: "When I started college, I was initially more drawn to management. I explored consulting but soon realized it lacked the constant challenge I found here.",
  },
];

// --- SUB-COMPONENT: Syllabus Accordion Item ---
function SyllabusItem({
  item,
  isOpen,
  toggle,
}: {
  item: (typeof SYLLABUS_DATA)[0];
  isOpen: boolean;
  toggle: () => void;
}) {
  return (
    <div
      className={cn(
        "group mb-4 rounded-2xl border transition-all duration-500 overflow-hidden",
        isOpen
          ? "border-blue-500/50 bg-white/[0.03] shadow-[0_0_30px_-10px_rgba(59,130,246,0.2)]"
          : "border-white/10 bg-transparent hover:border-white/20"
      )}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left"
      >
        <div className="flex items-center gap-5">
          {/* Number Box with Rotation Effect */}
          <div
            className={cn(
              "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border text-lg font-bold transition-all duration-500",
              isOpen
                ? "bg-blue-600 border-blue-400 text-white rotate-[360deg] shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                : "bg-white/5 border-white/10 text-white/50"
            )}
          >
            {item.id}
          </div>

          <div>
            <h4
              className={cn(
                "text-lg md:text-xl font-bold tracking-tight transition-colors duration-300",
                isOpen ? "text-white" : "text-white/70 group-hover:text-white"
              )}
            >
              {item.title}
            </h4>
            {/* Tech Stack Badges */}
            {/* <div className="flex flex-wrap gap-2 mt-2">
              {item.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div> */}
          </div>
        </div>

        <div
          className={cn(
            "rounded-full p-2 transition-all duration-500",
            isOpen
              ? "bg-blue-600 text-white rotate-180"
              : "bg-white/5 text-white/30"
          )}
        >
          <ChevronDown className="h-5 w-5" />
        </div>
      </button>

      {/* Accordion Content */}
      <div
        className={cn(
          "grid transition-all duration-500 ease-in-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-8 ml-16 md:ml-20">
            <div className="h-px w-full bg-gradient-to-r from-blue-500/50 to-transparent mb-6" />

            <p className="text-white/50 text-sm mb-6 max-w-2xl leading-relaxed">
              {item.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {item.topics.map((topic, i) => (
                <div key={i} className="flex items-center gap-3 group/item">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-500/50 group-hover:item:bg-blue-400 transition-colors" />
                  <span className="text-white/70 text-sm group-hover:item:text-white transition-colors">
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- SUB-COMPONENT: Testimonial Cards ---
function PhotoCard({ data }: { data: any }) {
  const isVideo = data.type === "video";
  return (
    <figure className="relative w-[280px] h-[340px] overflow-hidden rounded-2xl border border-gray-200 shadow-md group bg-white mx-3">
      {isVideo ? (
        <div className="absolute inset-0 w-full h-full">
          <video
            src={data.image}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            style={{ pointerEvents: "none" }}
          />
          <div className="absolute top-3 right-3 bg-black/20 backdrop-blur-sm p-1.5 rounded-full">
            <PlayCircle className="w-4 h-4 text-white" />
          </div>
        </div>
      ) : (
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          unoptimized
        />
      )}

      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

      <div className="absolute bottom-4 left-4 z-10">
        <div className="bg-white/20 backdrop-blur-md border border-white/20 rounded-lg py-1 px-3 inline-block mb-2 shadow-sm">
          <span className="text-[12px] font-semibold text-white tracking-wide">
            {data.name}
          </span>
        </div>
        {data.role && (
          <p className="text-[11px] font-medium text-white/90">{data.role}</p>
        )}
        {data.company && (
          <p className="text-[10px] text-white/70">{data.company}</p>
        )}
      </div>
    </figure>
  );
}

function ReviewCard({ data }: { data: any }) {
  return (
    <figure className="relative w-[280px] h-[340px] flex flex-col justify-between p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 mx-3">
      <div>
        <div className="flex items-center gap-3 mb-5">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-100 shadow-sm">
            <Image
              src={data.image}
              alt={data.name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <div className="text-[14px] font-bold text-slate-800">
              {data.name}
            </div>
            <div className="text-[11px] font-medium text-slate-500">
              {data.role}
            </div>
          </div>
        </div>
        <blockquote className="text-[13px] leading-relaxed text-slate-600 font-medium">
          "{data.text}"
        </blockquote>
      </div>
      <div className="pt-4 border-t border-gray-50 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
          Alumni Success Story
        </span>
      </div>
    </figure>
  );
}

// --- MAIN PAGE COMPONENT ---
export default function InternshipsPage() {
  const [openSyllabusId, setOpenSyllabusId] = useState<number | null>(1);

  return (
    <main className="bg-white min-h-screen text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* --- PREMIUM HERO SECTION (Dark Mode) --- */}
      <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-[#050505] text-white">
        {/* Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex-1 flex flex-col items-center justify-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 transition-colors hover:bg-white/10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[11px] font-medium text-blue-100 tracking-[0.1em]">
              Applications Open for 2026 Batch
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.05] mb-8 max-w-5xl mx-auto">
            Applied Full Stack <br />
            <span className="text-white/90">Development Program</span>
          </h1>

          <p className="text-base md:text-lg text-white/40 max-w-2xl mx-auto mb-4 font-light leading-relaxed">
            Hands-on exposure to live full stack projects, designed to transform
            students into job-ready developers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-2">
            <Link
              href="#apply"
              className="group h-14 min-w-[180px] inline-flex items-center justify-center rounded-full bg-blue-600 px-10 font-bold text-white transition-all hover:bg-blue-500 hover:scale-[1.02] active:scale-95 shadow-lg shadow-blue-600/20"
            >
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#curriculum"
              className="h-14 min-w-[180px] inline-flex items-center justify-center rounded-full bg-white px-10 font-bold text-black transition-all hover:bg-white/90 hover:scale-[1.02] active:scale-95"
            >
              View Curriculum
            </Link>
          </div>
        </div>

        {/* Integrated Highlights */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
          <div className="w-full h-px bg-white/5 mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12">
            {PROGRAM_HIGHLIGHTS.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 transition-all group-hover:bg-blue-600/10 group-hover:border-blue-600/30">
                  <item.icon className="w-6 h-6 text-white transition-colors group-hover:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 tracking-tight text-center">
                  {item.title}
                </h3>
                <p className="text-sm text-white/40 text-center max-w-[260px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BENTO GRID FEATURES (Light Mode) --- */}
      <section className="py-20 lg:py-32 bg-slate-50/50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Program Benefits
            </h2>
            <p className="text-slate-500 text-lg">
              Everything you need to launch your career in tech.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BENTO_FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className={cn(
                  "relative p-8 rounded-3xl border overflow-hidden group hover:shadow-lg transition-all duration-500",
                  feature.bg,
                  feature.border,
                  feature.className
                )}
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-100">
                    <feature.icon className="w-6 h-6 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
                    {feature.description}
                  </p>
                </div>
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DETAILED SYLLABUS SECTION (Premium Dark Mode) --- */}
      <section
        id="curriculum"
        className="py-24 bg-black relative overflow-hidden text-white"
      >
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                <Zap className="w-3 h-3 text-blue-400" />
                <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">
                  Mastery Roadmap
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
                Detailed <span className="text-blue-500">Syllabus</span>
              </h2>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setOpenSyllabusId(null)}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-white/50 hover:text-white hover:bg-white/10 transition-all"
              >
                Collapse All
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {SYLLABUS_DATA.map((item) => (
              <SyllabusItem
                key={item.id}
                item={item}
                isOpen={openSyllabusId === item.id}
                toggle={() =>
                  setOpenSyllabusId(openSyllabusId === item.id ? null : item.id)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- PARTNERS SECTION (Light) --- */}
      <section className="py-16 bg-white overflow-hidden border-b border-gray-100">
        <div className="text-center mb-10">
          <span className="text-2xl font-bold tracking-[0.2em] text-slate-700 uppercase">
            Our Partners
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-10 items-center opacity-70">
          <img
            src="/images/partners/google.png"
            alt="Google"
            className="h-8 md:h-10 grayscale hover:grayscale-0 transition-all"
          />
          <img
            src="/images/partners/mobbin.png"
            alt="Mobbin"
            className="h-8 md:h-10 grayscale hover:grayscale-0 transition-all"
          />
          <img
            src="/images/partners/padlet.png"
            alt="Padlet"
            className="h-8 md:h-10 grayscale hover:grayscale-0 transition-all"
          />
          <img
            src="/images/partners/decode.png"
            alt="Decode"
            className="h-8 md:h-10 grayscale hover:grayscale-0 transition-all"
          />
          {/* Add more partners as needed */}
        </div>
      </section>

      {/* --- TESTIMONIALS (Light Mode) --- */}
      <section className="py-24 overflow-hidden bg-slate-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Success Stories
            </h2>
            <p className="text-slate-500 max-w-md text-lg">
              Join alumni who are now working at top tech companies.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            100% Verified Placements
          </div>
        </div>

        <div className="relative flex flex-col gap-6">
          <Marquee pauseOnHover className="[--duration:50s]">
            {TESTIMONIALS.map((item) =>
              item.type === "video" ? (
                <PhotoCard key={item.id} data={item} />
              ) : (
                <ReviewCard key={item.id} data={item} />
              )
            )}
          </Marquee>
          {/* Side Fades (White) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />
        </div>
      </section>

      {/* --- PREMIUM COMPACT CTA SECTION --- */}
      <section
        id="apply"
        className="py-16 bg-white flex items-center justify-center"
      >
        <div className="w-full max-w-4xl mx-auto px-6">
          <div className="relative group rounded-[2rem] bg-[#0A0A0B] p-8 md:p-16 flex flex-col items-center justify-center text-center overflow-hidden border border-white/10 shadow-[0_24px_80px_-15px_rgba(0,0,0,0.3)]">
            {/* Mesh Gradient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
              <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[100px] rounded-full" />
              <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[100px] rounded-full" />
            </div>

            {/* Top Accent Line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="relative z-10 flex flex-col items-center">
              {/* Badge */}
              <div className="mb-6 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-md">
                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
                  Next Cohort: Winter 2026
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6 tracking-tight">
                Ready to Start <br className="hidden md:block" /> Your Journey?
              </h2>

              <p className="text-sm md:text-base text-white/40 leading-relaxed mb-10 max-w-md mx-auto font-light tracking-wide">
                Join a community of builders. Transform your career with
                hands-on, project-based learning.
              </p>

              {/* High-Contrast Button */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="mailto:info.enlivo@gmail.com"
                  className="group relative inline-flex items-center justify-center bg-white text-black font-bold text-base rounded-full px-10 py-4 transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  Enroll Now
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                <Link
                  href="mailto:info.enlivo@gmail.com"
                  className="text-white/40 hover:text-white text-sm font-medium transition-colors py-2 px-4"
                >
                  Talk to an Advisor
                </Link>
              </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 bg-[#f7f8fa]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0a174e] mb-4">
            FAQs
          </h2>
          <p className="text-lg text-center text-slate-500 mb-12">
            Get your questions answered
          </p>
          <div className="space-y-6">
            {/* FAQ Item */}
            <details className="group rounded-xl bg-white px-6 py-5 shadow transition-all">
              <summary className="font-semibold text-lg text-[#0a174e] cursor-pointer flex items-center justify-between">
                What makes Enlivo's internship program different from others?
                <span className="ml-2 text-xl transition-transform group-open:rotate-180">
                  ⌄
                </span>
              </summary>
              <div className="mt-3 text-slate-600 text-base">
                Our program is designed by industry experts, offers real-world
                project experience, 1-on-1 mentorship, and a job-focused
                curriculum. We emphasize practical skills and career support,
                not just theory.
              </div>
            </details>
            <details className="group rounded-xl bg-white px-6 py-5 shadow transition-all">
              <summary className="font-semibold text-lg text-[#0a174e] cursor-pointer flex items-center justify-between">
                Do I need prior coding experience to join?
                <span className="ml-2 text-xl transition-transform group-open:rotate-180">
                  ⌄
                </span>
              </summary>
              <div className="mt-3 text-slate-600 text-base">
                No prior experience is required. Our curriculum starts from the
                basics and supports you every step of the way, whether you’re a
                beginner or looking to upskill.
              </div>
            </details>
            <details className="group rounded-xl bg-white px-6 py-5 shadow transition-all">
              <summary className="font-semibold text-lg text-[#0a174e] cursor-pointer flex items-center justify-between">
                What kind of support and mentorship will I get?
                <span className="ml-2 text-xl transition-transform group-open:rotate-180">
                  ⌄
                </span>
              </summary>
              <div className="mt-3 text-slate-600 text-base">
                You’ll receive personalized mentorship from industry
                professionals, regular feedback on your work, and access to a
                supportive alumni network for career guidance and referrals.
              </div>
            </details>
            <details className="group rounded-xl bg-white px-6 py-5 shadow transition-all">
              <summary className="font-semibold text-lg text-[#0a174e] cursor-pointer flex items-center justify-between">
                Are the courses self-paced or scheduled?
                <span className="ml-2 text-xl transition-transform group-open:rotate-180">
                  ⌄
                </span>
              </summary>
              <div className="mt-3 text-slate-600 text-base">
                The program is a blend of live online sessions and flexible
                project work, so you get the benefits of both structure and
                self-paced learning.
              </div>
            </details>
            <details className="group rounded-xl bg-white px-6 py-5 shadow transition-all">
              <summary className="font-semibold text-lg text-[#0a174e] cursor-pointer flex items-center justify-between">
                Will I get a certificate and job support after completion?
                <span className="ml-2 text-xl transition-transform group-open:rotate-180">
                  ⌄
                </span>
              </summary>
              <div className="mt-3 text-slate-600 text-base">
                Yes! You’ll receive an industry-recognized certificate and
                ongoing career support, including resume reviews, mock
                interviews, and access to our alumni network for job referrals.
              </div>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
