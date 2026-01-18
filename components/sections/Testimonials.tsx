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
        "relative w-[360px] h-[320px] cursor-pointer overflow-hidden rounded-xl p-6",
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
        <blockquote className="text-sm leading-relaxed text-white/75 font-normal mb-5">
          "{data.text}"
        </blockquote>
      </div>

      {/* Footer: Avatar, Name, Role & Company */}
      <div className="pt-4 border-t border-white/[0.08]">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
            <Image
              src={data.image}
              alt={data.name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-white leading-tight truncate">
              {data.name}
            </div>
            <div className="text-xs text-white/60 mt-1">
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
        "relative w-[360px] h-[320px] overflow-hidden rounded-xl",
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
      <div className="absolute bottom-5 left-5 right-5 z-10">
        <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-lg py-2 px-4 inline-block shadow-lg">
          <span className="text-sm font-semibold text-white">
            {data.name}
          </span>
        </div>
      </div>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="py-12 md:py-16 bg-black overflow-hidden relative">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-neue-montreal)] text-white mb-6 tracking-tight leading-[1.1]">
            Trusted by founders who ship
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
            Real stories from entrepreneurs who built their products with Enlivo — from idea to launch, without the hiring headaches.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative flex flex-col gap-3">
          
          {/* Row 1: Moves LEFT (Normal direction) */}
          <div className="relative">
            <Marquee 
              pauseOnHover 
              className="[--duration:45s] [--gap:0.75rem] p-0"
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
              className="[--duration:50s] [--gap:0.75rem] p-0"
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

          {/* Side Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
        </div>

      </div>
    </section>
  );
}