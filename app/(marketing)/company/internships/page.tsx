/**
 * app/(marketing)/company/internships/page.tsx
 *
 * PURPOSE: Premium Internship/Training Program Landing Page (Light Mode).
 * DESIGN: Clean, architectural, high-end white aesthetic with soft shadows.
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Marquee } from "@/components/ui/Marquee";
import { cn } from "@/lib/utils";

// --- SEO METADATA ---
export const metadata: Metadata = buildMetadata({
  title: "Applied Full Stack Development Program | Enlivo Careers",
  description:
    "A 6-month intensive, 100% online internship program designed to transform students into job-ready Full Stack Developers.",
});

// --- DATA ---
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
    company: "Delloite",
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
  {
    id: 5,
    type: "video",
    name: "Rohit Sharma",
    role: "SDE @ Amazon",
    image:
      "https://res.cloudinary.com/dqmryiyhz/video/upload/v1768464062/Untitled_design_1_vmz5hb.mp4",
  },
];

// --- COMPONENTS ---

function PhotoCard({ data }: { data: any }) {
  const isVideo = data.type === "video";
  return (
    <figure className="relative w-[280px] h-[340px] overflow-hidden rounded-2xl border border-gray-200 shadow-md group bg-white">
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
          {/* Play Icon Hint */}
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

      {/* Gradient Overlay for Text Visibility */}
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
    <figure className="relative w-[280px] h-[340px] flex flex-col justify-between p-6 rounded-2xl border border-gray-100 bg-white shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300">
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

export default function InternshipsPage() {
  return (
    <main className="bg-white min-h-screen text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black">
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-medium text-blue-600 tracking-wide">
              Applications Open for 2026 Batch
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white tracking-tight leading-[1.15]">
            Applied Full Stack <br />
            <span className="text-white">Development Program</span>
          </h1>

          <p className="text-base md:text-lg text-[#5a5a5a] leading-relaxed max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Hands-on exposure to live full stack projects, designed to transform
            students into job-ready developers.
            <span className="block mt-2 text-white font-medium">
              Fast-Track Your Career in 6 Months.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary Action */}
            <Link
              href="#apply"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-blue-600 px-8 font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
            >
              <span className="mr-2">Apply Now</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-shimmer" />
            </Link>
            {/* Secondary Action */}
            <Link
              href="#curriculum"
              className="inline-flex h-12 items-center justify-center rounded-full border border-gray-200 bg-white px-8 font-medium text-slate-700 shadow-sm transition-all hover:bg-gray-50 hover:border-gray-300"
            >
              View Curriculum
            </Link>
          </div>

          {/* Highlights Row - Clean and Minimal */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-10">
            {PROGRAM_HIGHLIGHTS.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="p-2.5 bg-blue-50 rounded-xl mb-3">
                  <item.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-base text-gray-200 text-center mt-1 max-w-[240px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BENTO GRID FEATURES --- */}
      <section className="py-20 lg:py-32 bg-slate-50/50 border-y border-gray-100">
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

                {/* Subtle light effect on hover */}
                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PARTNERS SECTION --- */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="text-center mb-10">
          <span className="text-2xl font-bold tracking-[0.2em] text-slate-700 uppercase">
            Our Partners
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-10 items-center">
          {/* Example partner logos, replace src with your own or random company logos */}
          <img
            src="/images/partners/google.png"
            alt="Google"
            className="h-10 grayscale opacity-80 hover:opacity-100 transition"
          />
          <img
            src="/images/partners/mobbin.png"
            alt="Mobbin"
            className="h-10 grayscale opacity-80 hover:opacity-100 transition"
          />
          <img
            src="/images/partners/padlet.png"
            alt="Padlet"
            className="h-10 grayscale opacity-80 hover:opacity-100 transition"
          />
          <img
            src="/images/partners/decode.png"
            alt="Decode"
            className="h-10 grayscale opacity-80 hover:opacity-100 transition"
          />
          <img
            src="/images/partners/genio.png"
            alt="Genio"
            className="h-10 grayscale opacity-80 hover:opacity-100 transition"
          />
          <img
            src="/images/partners/bigbluebutton.png"
            alt="BigBlueButton"
            className="h-10 grayscale opacity-80 hover:opacity-100 transition"
          />
          <img
            src="/images/partners/craft.png"
            alt="Craft"
            className="h-10 grayscale opacity-80 hover:opacity-100 transition"
          />
          <img
            src="/images/partners/axa.png"
            alt="AXA"
            className="h-10 grayscale opacity-80 hover:opacity-100 transition"
          />
        </div>
      </section>

      {/* --- TESTIMONIALS (Clean & Light) --- */}
      <section className="py-24 overflow-hidden bg-slate-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Success Stories
            </h2>
            <p className="text-slate-500 max-w-md text-lg">
              Join alumni who are now working at top tech companies like Amazon,
              Oracle, Deloitte, and more.
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

      {/* --- APPLICATION / CONTACT SECTION --- */}
      <section id="apply" className="py-24 relative bg-white">
        <div className="max-w-5xl mx-auto px-6">
          {/* Card Container */}
          <div className="relative rounded-[2.5rem] overflow-hidden bg-[#0F172A] p-10 md:p-20 text-center shadow-2xl shadow-blue-900/20">
            {/* Background Glows (Dark container for contrast) */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/70 text-xs font-medium uppercase tracking-wider mb-6">
                Limited Seats Available
              </span>

              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to launch your career?
              </h2>
              <p className="text-slate-300 text-lg mb-12 max-w-xl mx-auto">
                Secure your spot in the next cohort. Join a community of
                builders and future leaders.
              </p>

              <div className="flex flex-col items-center gap-8">
                {/* Primary Contact Button */}
                <a
                  href="mailto:info.enlivo@gmail.com?subject=Application for Full Stack Program"
                  className="w-full sm:w-auto h-14 px-12 rounded-full bg-white text-slate-900 font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200"
                >
                  <Rocket className="w-5 h-5 text-blue-600" />
                  Apply via Email
                </a>

                {/* Contact Numbers */}
                <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-400 font-mono">
                  <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                    <span>📞 +91 89713 63921</span>
                  </div>
                  <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                    <span>📞 +91 77278 67878</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 mt-2">
                  Have questions? Visit{" "}
                  <span className="text-slate-300">enlivotechnologies.com</span>{" "}
                  for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
