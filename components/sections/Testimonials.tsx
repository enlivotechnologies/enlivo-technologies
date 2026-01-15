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
  // --- ROW 1 (Moves Left) ---
  {
    id: 1,
    type: "text",
    name: "Ananya Rao",
    role: "Product Manager",
    company: "Enterprise Solutions",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    text: "The team balanced UX, performance, and security without overengineering. What stood out was their ability to translate business requirements into technical decisions.",
  },
  {
    id: 2,
    type: "video", // VIDEO 1
    name: "Sarah Jenkins",
    image: "https://res.cloudinary.com/dqmryiyhz/video/upload/v1768464062/Untitled_design_1_vmz5hb.mp4",
  },
  {
    id: 3,
    type: "text",
    name: "Karthik R",
    role: "Director of Tech",
    company: "LogiChain",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    text: "Enlivo helped stabilize and scale systems under production load. Their focus on reliability gave us confidence during expansion.",
  },
  {
    id: 4,
    type: "video", // VIDEO 2
    name: "Satyam Vyas",
    image: "https://res.cloudinary.com/dqmryiyhz/video/upload/v1768462714/Untitled_design_scbpxt.mp4",
  },

  // --- ROW 2 (Moves Right) ---
  {
    id: 5,
    type: "video", // VIDEO 3
    name: "Olivia",
    image: "https://res.cloudinary.com/dqmryiyhz/video/upload/v1768464308/Untitled_design_2_hxk8qe.mp4",
  },
  {
    id: 6,
    type: "text",
    name: "Sunil B K",
    role: "CTO",
    company: "Global FinTech",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "Enlivo worked closely with our internal teams to modernize legacy systems without disrupting operations. Their approach to architecture gave us a scalable foundation.",
  },
  {
    id: 7,
    type: "video", // VIDEO 4 (New Video added here)
    name: "James Carter",
    image: "https://res.cloudinary.com/dqmryiyhz/video/upload/v1768464802/Untitled_design_3_pkbjtp.mp4",
  },
  {
    id: 8,
    type: "text",
    name: "Rohit Mehra",
    role: "Head of Engineering",
    company: "SaaS Platform",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    text: "Clear communication, predictable delivery, and strong engineering discipline made them a reliable partner at a critical growth stage.",
  },
];

const firstRow = TESTIMONIALS.slice(0, 4);
const secondRow = TESTIMONIALS.slice(4, 8);

// --- COMPONENT: STANDARD TEXT CARD ---
function ReviewCard({ data }: { data: Testimonial }) {
  return (
    <figure
      className={cn(
        "relative w-[300px] h-[260px] cursor-pointer overflow-hidden rounded-2xl p-6",
        "bg-[#09090b] border border-white/[0.08]",
        "hover:bg-[#111113] hover:border-white/[0.15] transition-all duration-300",
        "flex flex-col justify-between"
      )}
    >
      <div>
        {/* Header: Avatar + Name */}
        <div className="flex items-center gap-3 mb-4">
          <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/10">
            <Image
              src={data.image}
              alt={data.name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="text-[14px] font-semibold text-white leading-tight">
            {data.name}
          </div>
        </div>

        {/* Body Text */}
        <blockquote className="text-[13px] leading-relaxed text-zinc-400 font-normal line-clamp-4">
          "{data.text}"
        </blockquote>
      </div>

      {/* Footer: Role & Company */}
      <div className="pt-4 border-t border-white/[0.06]">
        <div className="text-[12px] font-medium text-white/90">{data.role}</div>
        <div className="text-[11px] text-zinc-500 mt-0.5">{data.company}</div>
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
        "relative w-[260px] h-[260px] overflow-hidden rounded-2xl",
        "border border-white/[0.08] group bg-[#09090b]"
      )}
    >
      {isVideo ? (
        <video
          src={data.image}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          unoptimized
        />
      )}

      {/* Dark Gradient Overlay at Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />

      {/* Name Overlay at Bottom */}
      <div className="absolute bottom-4 left-4 z-10">
        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-lg py-1.5 px-3 inline-block">
          <span className="text-[13px] font-medium text-white">
            {data.name}
          </span>
        </div>
      </div>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section className="py-16 bg-black overflow-hidden relative">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">
            Don't just take our word for it
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Hear from engineering leaders who have transformed their businesses with Enlivo.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative flex flex-col gap-4">
          
          {/* Row 1: Moves LEFT */}
          <Marquee 
            pauseOnHover 
            className="[--duration:50s] [--gap:1rem]"
          >
            {firstRow.map((item) =>
              (item.type === "image" || item.type === "video") ? (
                <PhotoCard key={item.id} data={item} />
              ) : (
                <ReviewCard key={item.id} data={item} />
              )
            )}
          </Marquee>

          {/* Row 2: Moves RIGHT (Reverse) */}
          <Marquee 
            reverse 
            pauseOnHover 
            className="[--duration:55s] [--gap:1rem]"
          >
            {secondRow.map((item) =>
              (item.type === "image" || item.type === "video") ? (
                <PhotoCard key={item.id} data={item} />
              ) : (
                <ReviewCard key={item.id} data={item} />
              )
            )}
          </Marquee>

          {/* Side Fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
        </div>

      </div>
    </section>
  );
}