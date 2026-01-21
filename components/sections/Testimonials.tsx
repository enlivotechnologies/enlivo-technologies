"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/Marquee";

// --- DATA ---
interface Testimonial {
  id: number;
  type: "text" | "image" | "video";
  name: string;
  role?: string;
  company?: string;
  image: string; // Stores Image URL OR Video URL
  text?: string;
}

const TESTIMONIALS: Testimonial[] = [
  // --- ROW 1 (Moves Left) - 2 text + 2 videos ---
  {
    id: 1,
    type: "text",
    name: "Rohit",
    role: "Founder",
    company: "Web Product",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    text: "I had already lost time and money with freelancers before. What was different here is communication — I always knew what was happening and why. That alone made this worth it.",
  },
  {
    id: 2,
    type: "video", // VIDEO 1
    name: "Satyam Vyas",
    image: "https://res.cloudinary.com/dqmryiyhz/video/upload/v1768462714/Untitled_design_scbpxt.mp4",
  },
  {
    id: 3,
    type: "text",
    name: "Amit",
    role: "Non-Technical Founder",
    company: "Startup MVP",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "Before working with Enlivo, I was completely confused about what to build first. They didn't just start coding — they helped me understand the product step by step. For the first time, I felt like someone actually took responsibility instead of pushing decisions back on me.",
  },
  {
    id: 4,
    type: "video", // VIDEO 2
    name: "Sarah Jenkins",
    image: "https://res.cloudinary.com/dqmryiyhz/video/upload/v1768464062/Untitled_design_1_vmz5hb.mp4",
  },

  // --- ROW 2 (Moves Right) - 3 text + 1 video ---
  {
    id: 5,
    type: "text",
    name: "Suresh",
    role: "Business Owner",
    company: "",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    text: "What I liked most was clarity. Timelines were realistic, progress was visible, and there were no surprises. That's rare.",
  },
  {
    id: 6,
    type: "text",
    name: "Agency Partner",
    role: "Project Lead",
    company: "",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "We needed reliable execution without constant follow-ups. Work was delivered cleanly and on time, which made our job easier.",
  },
  {
    id: 7,
    type: "text",
    name: "Neha",
    role: "Startup Founder",
    company: "",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    text: "I'm not technical, so I was worried about being misled. Instead, everything was explained clearly and decisions were discussed before execution. I never felt out of control.",
  },
  {
    id: 8,
    type: "video", // VIDEO 3
    name: "Olivia",
    image: "https://res.cloudinary.com/dqmryiyhz/video/upload/v1768464308/Untitled_design_2_hxk8qe.mp4",
  },
];

// Split testimonials into two rows with proper distribution
// Row 1 (Upper): First 4 items - moves LEFT (normal direction)
// Row 2 (Lower): Next 4 items - moves RIGHT (reverse direction - opposite)
const firstRow = TESTIMONIALS.slice(0, 4);
const secondRow = TESTIMONIALS.slice(4, 8);

// --- COMPONENT: STANDARD TEXT CARD ---
function ReviewCard({ data }: { data: Testimonial }) {
  return (
    <figure
      className={cn(
        // Mobile: Smaller cards that fit better on mobile screens
        "relative w-[280px] h-auto min-h-[240px] cursor-pointer overflow-hidden rounded-lg p-4",
        // Desktop: Original sizes maintained
        "sm:w-[360px] sm:h-[320px] sm:rounded-xl sm:p-6",
        "bg-gradient-to-br from-[#09090b] to-[#0a0a0a] border border-white/[0.08]",
        "hover:bg-gradient-to-br hover:from-[#111113] hover:to-[#0f0f0f] hover:border-white/[0.15] hover:shadow-xl hover:shadow-black/40 transition-all duration-300",
        "flex flex-col justify-between"
      )}
      style={{
        willChange: "transform, border-color",
        backfaceVisibility: "hidden",
        transform: "translate3d(0, 0, 0)",
      }}
    >
      <div className="flex-1">
        {/* Body Text */}
        <blockquote className="text-xs leading-relaxed text-white/75 font-normal mb-4 sm:text-sm sm:mb-5">
          "{data.text}"
        </blockquote>
      </div>

      {/* Footer: Avatar, Name, Role & Company */}
      <div className="pt-3 border-t border-white/[0.08] sm:pt-4">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10 flex-shrink-0 sm:w-10 sm:h-10">
            <Image
              src={data.image}
              alt={data.name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-semibold text-white leading-tight truncate sm:text-sm">
              {data.name}
            </div>
            <div className="text-[10px] text-white/60 mt-0.5 sm:text-xs sm:mt-1">
              {data.role}{data.company && ` • ${data.company}`}
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

// --- COMPONENT: PHOTO / VIDEO CARD ---
function PhotoCard({ data }: { data: Testimonial }) {
  const isVideo = data.type === "video";

  return (
    <figure
      className={cn(
        // Mobile: Smaller cards that fit better on mobile screens
        "relative w-[280px] h-[240px] overflow-hidden rounded-lg",
        // Desktop: Original sizes maintained
        "sm:w-[360px] sm:h-[320px] sm:rounded-xl",
        "border border-white/[0.08] group bg-[#09090b]",
        "hover:border-white/[0.15] hover:shadow-xl hover:shadow-black/40 transition-all duration-300"
      )}
      style={{
        willChange: "transform",
        backfaceVisibility: "hidden",
        transform: "translate3d(0, 0, 0)",
      }}
    >
      {isVideo ? (
        <video
          src={data.image}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          style={{ pointerEvents: "none" }} // Keeps it purely decorative
        />
      ) : (
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          unoptimized
        />
      )}

      {/* Name Overlay at Bottom - Matching Text Card Style */}
      <div className="absolute bottom-3 left-3 right-3 z-10 sm:bottom-5 sm:left-5 sm:right-5">
        <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-lg py-1.5 px-3 inline-block shadow-lg sm:py-2 sm:px-4">
          <span className="text-xs font-semibold text-white sm:text-sm">
            {data.name}
          </span>
        </div>
      </div>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="py-8 bg-black overflow-hidden relative sm:py-12 md:py-16">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-3xl font-[family-name:var(--font-neue-montreal)] text-white mb-4 tracking-tight leading-[1.1] sm:text-4xl sm:mb-6 md:text-5xl lg:text-6xl">
            Trusted by founders who ship
          </h2>
          <p className="text-base text-white/50 max-w-2xl mx-auto leading-relaxed font-light sm:text-lg md:text-xl">
            Real stories from entrepreneurs who built their products with Enlivo — from idea to launch, without the hiring headaches.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative flex flex-col gap-2 sm:gap-3">
          
          {/* Row 1: Moves LEFT (Normal direction) */}
          <div className="relative">
            <Marquee 
              pauseOnHover 
              className="[--duration:45s] [--gap:0.5rem] p-0 sm:[--gap:0.75rem]"
            >
              {firstRow.map((item) =>
                (item.type === "image" || item.type === "video") ? (
                  <PhotoCard key={item.id} data={item} />
                ) : (
                  <ReviewCard key={item.id} data={item} />
                )
              )}
            </Marquee>
          </div>

          {/* Row 2: Moves RIGHT (Reverse direction - opposite) */}
          <div className="relative">
            <Marquee 
              reverse
              pauseOnHover 
              className="[--duration:50s] [--gap:0.5rem] p-0 sm:[--gap:0.75rem]"
            >
              {secondRow.map((item) =>
                (item.type === "image" || item.type === "video") ? (
                  <PhotoCard key={item.id} data={item} />
                ) : (
                  <ReviewCard key={item.id} data={item} />
                )
              )}
            </Marquee>
          </div>

          {/* Side Fades - Mobile: Smaller width, Desktop: Original */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black via-black/80 to-transparent z-10 sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black via-black/80 to-transparent z-10 sm:w-24" />
        </div>

      </div>
    </section>
  );
}