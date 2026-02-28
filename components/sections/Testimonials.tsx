/**
 * components/sections/Testimonials.tsx
 *
 * PURPOSE: Social proof section — client testimonials + founder bubble wall.
 * WHY: Trust is the #1 conversion driver for B2B SaaS agencies.
 *
 * ANIMATIONS:
 * - Cards: Staggered fade-up on scroll entry
 * - Bubbles: Scale-in with stagger + subtle float on scroll
 * - Header: Fade-up with blur reveal
 */

"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Star, Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// =========================================
// TESTIMONIAL DATA
// =========================================
interface Testimonial {
  id: number;
  label: string;
  text: string;
  name: string;
  role: string;
  image: string;
  isSpecial?: boolean;
  rating?: number;
}

const STATIC_REVIEWS: Testimonial[] = [
  {
    id: 1,
    label: "NEW VISIT BY MEDICAL CENTER",
    text: "Working with Enlivo on CareerPlanet was a great experience. They really understood what we wanted and turned it into something better than we imagined.",
    name: "Shashikumar P",
    role: "Founder & CEO",
    image: "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772185615/img1_txz7jg.jpg",
  },
  {
    id: 2,
    label: "MEDICAL CENTER PATIENT",
    text: "We needed a modern, user friendly redesign, and Enlivo delivered. The entire process felt smooth and well managed.",
    name: "Sophia Martinez",
    role: "Marketing Director,",
    image: "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772188547/image4_wbzeic.jpg",
    isSpecial: true,
    // rating: 4.2,
  },
  {
    id: 3,
    label: "BRUNCH 047",
    text: "Our old website needed a complete refresh, and Enlivo delivered exactly that. The redesign is clean, fast, and gives our business a much stronger online presence.",
    name: "Michiko Miller",
    role: "Founder & CEO",
    image: "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772185616/img2_vemf3n.jpg",
  },
  {
    id: 4,
    label: "DENTIST VISIT",
    text: "Enlivo redesigned our website to truly reflect our brand. The result is clean, modern, and professional.",
    name: "Daniel Carter",
    role: "Founder, Medixa Labs",
    image: "https://res.cloudinary.com/dzjxexhzf/image/upload/v1772188706/image6_evtp81.jpg",
  },
];

// =========================================
// BUBBLE LAYOUT
// =========================================
const VIDEO_POSTER = "https://res.cloudinary.com/dqmryiyhz/image/upload/v1768980610/person1_ecjljf.jpg";
const VIDEO_URL = "https://res.cloudinary.com/dzjxexhzf/video/upload/v1772080500/1_o9ofhb.mp4";

const BUBBLE_IMAGES = [
  "https://res.cloudinary.com/dzjxexhzf/video/upload/v1772080500/1_o9ofhb.mp4",
  "https://res.cloudinary.com/dzjxexhzf/video/upload/v1772201054/video2_n0bd7q.mp4",
  "https://res.cloudinary.com/dzjxexhzf/video/upload/v1772080500/1_o9ofhb.mp4",
  "https://res.cloudinary.com/dzjxexhzf/video/upload/v1772080500/1_o9ofhb.mp4",
];

interface BubbleConfig {
  id: number;
  type: "image" | "text" | "video";
  position: string;
  size: string;
  zIndex: number;
  textLabel?: string;
  imgIndex?: number; 
}

const BUBBLES: BubbleConfig[] = [
  // LEFT CLUSTER
  { id: 1, type: "image", position: "left-[4%] top-[5%]", size: "w-[12%]", zIndex: 10, imgIndex: 0 },
  { id: 2, type: "text", position: "left-[3%] top-[42%]", size: "w-[11%]", zIndex: 20, textLabel: "View All Services" },
  { id: 3, type: "image", position: "left-[5%] top-[78%]", size: "w-[9%]", zIndex: 15, imgIndex: 2 },
  { id: 4, type: "image", position: "left-[19%] top-[25%]", size: "w-[11%]", zIndex: 12, imgIndex: 1 },
  { id: 5, type: "image", position: "left-[20%] top-[72%]", size: "w-[9%]", zIndex: 10, imgIndex: 3 },

  // CENTER — Hero Video
  { id: 6, type: "video", position: "left-[35%] top-[8%]", size: "w-[26%]", zIndex: 30 },

  // RIGHT CLUSTER
  { id: 7, type: "image", position: "left-[64%] top-[8%]", size: "w-[13%]", zIndex: 10, imgIndex: 0 },
  { id: 8, type: "image", position: "left-[62%] top-[65%]", size: "w-[10%]", zIndex: 12, imgIndex: 2 },
  { id: 9, type: "image", position: "left-[72%] top-[48%]", size: "w-[11%]", zIndex: 20, imgIndex: 1 },
  { id: 10, type: "image", position: "left-[82%] top-[20%]", size: "w-[20%]", zIndex: 5, imgIndex: 3 },
];

// =========================================
// REVIEW CARD COMPONENT
// =========================================
function ReviewCard({ data }: { data: Testimonial }) {
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between p-6 sm:p-8 rounded-[2rem] h-full min-h-[300px]",
        "shadow-sm hover:shadow-xl transition-shadow duration-500",
        data.isSpecial
          ? "bg-gradient-to-br from-white via-[#fff5f5] to-[#f0f8ff]"
          : "bg-white"
      )}
    >
      {/* <div className="text-[10px] font-semibold text-gray-400 uppercase mb-4 tracking-tight">
        {data.label}
      </div> */}

      <div className="flex-1">
        <p className="text-base sm:text-lg font-medium text-gray-900 leading-snug tracking-tight">
          {data.text}
        </p>

        {data.rating && (
          <div className="flex items-center gap-1 mt-4">
            <div className="flex text-yellow-400 gap-0.5">
              {[...Array(4)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
              <Star className="w-3 h-3 fill-current opacity-30" />
            </div>
            <span className="text-[10px] font-bold text-gray-400 ml-1">{data.rating}</span>
          </div>
        )}
      </div>

      <div className="relative mt-6 pt-2 flex items-center gap-3">
        <Quote className="absolute bottom-1 right-0 w-8 h-8 text-gray-200 fill-current rotate-180" />
        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ">
          <Image src={data.image} alt={data.name} fill className="object-cover" sizes="40px" />
        </div>
        <div className="flex-1 min-w-0 pr-8">
          <h4 className="text-[12px] font-semibold text-gray-900">{data.name}</h4>
          <p className="text-[10px] text-gray-500 truncate">{data.role}</p>
        </div>
      </div>

      {data.isSpecial && (
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/20 via-transparent to-blue-100/20 pointer-events-none rounded-[2rem]" />
      )}
    </div>
  );
}

// =========================================
// BUBBLE COMPONENT
// =========================================
function Bubble({ config }: { config: BubbleConfig }) {
  // TEXT BUBBLE
  if (config.type === "text") {
    return (
      <div
        data-bubble
        className={cn(
          "absolute aspect-square rounded-full flex items-center justify-center cursor-pointer group",
          "bg-white backdrop-blur-sm",       
          "transition-shadow duration-500",
          config.position,
          config.size
        )}
        style={{ zIndex: config.zIndex, opacity: 0, transform: "scale(0.5)" }}
      >
        <Link href="/services" className="flex flex-col items-center justify-center gap-2 p-3 w-full h-full">
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-lg shadow-orange-500/50" />
          <span className="text-black font-semibold text-[10px] sm:text-[11px] md:text-xs leading-tight text-center px-2 tracking-tight group-hover:text-orange-600 transition-colors duration-300">
            {config.textLabel}
          </span>
        </Link>
      </div>
    );
  }

  // VIDEO BUBBLE (Handles both the main center video and the smaller side videos)
  const isCenterHero = config.type === "video";
  const mediaSrc = isCenterHero
    ? VIDEO_URL
    : BUBBLE_IMAGES[(config.imgIndex ?? 0) % BUBBLE_IMAGES.length];

  return (
    <div
      data-bubble
      className={cn(
        "absolute aspect-square rounded-full flex items-center justify-center overflow-hidden group",
        "bg-neutral-900 transition-shadow duration-500",
        config.position,
        config.size
      )}
      style={{ zIndex: config.zIndex, opacity: 0, transform: "scale(0.5)" }}
    >
      <video
        src={mediaSrc}
        poster={isCenterHero ? VIDEO_POSTER : undefined}
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full brightness-95 group-hover:brightness-100 transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/10 pointer-events-none" />
    </div>
  );
}

// =========================================
// MAIN COMPONENT
// =========================================
export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsHeaderRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);
  const bubblesHeaderRef = useRef<HTMLDivElement>(null);
  const bubblesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // --- 1. Cards header: fade-up + blur reveal ---
      if (cardsHeaderRef.current) {
        gsap.fromTo(
          cardsHeaderRef.current,
          { opacity: 0, y: 50, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsHeaderRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // --- 2. Cards: staggered fade-up ---
      if (cardsGridRef.current) {
        const cards = cardsGridRef.current.querySelectorAll("[data-review-card]");
        if (cards.length) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 60, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: cardsGridRef.current,
                start: "top 80%",
                once: true,
              },
            }
          );
        }
      }

      // --- 3. Bubbles header: fade-up ---
      if (bubblesHeaderRef.current) {
        gsap.fromTo(
          bubblesHeaderRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bubblesHeaderRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // --- 4. Bubbles: scale-in with stagger ---
      if (bubblesContainerRef.current) {
        const bubbles = bubblesContainerRef.current.querySelectorAll("[data-bubble]");
        if (bubbles.length) {
          gsap.to(bubbles, {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: {
              each: 0.08,
              from: "center", 
            },
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: bubblesContainerRef.current,
              start: "top 75%",
              once: true,
            },
          });
        }

        // --- 5. Subtle float on scroll ---
        bubbles.forEach((bubble, i) => {
          const depth = i % 2 === 0 ? 15 : -15; 
          gsap.to(bubble, {
            y: depth,
            ease: "none",
            scrollTrigger: {
              trigger: bubblesContainerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-black text-white py-24 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-12 lg:px-16">

        {/* ─── SECTION 1: Testimonial Cards ─── */}
        <div className="mb-24">
          <div ref={cardsHeaderRef} className="text-center mb-16" style={{ opacity: 0 }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
              What Our Clients Say
            </h2>
            <p className="text-base text-[#9E9EA0] max-w-2xl mx-auto font-light">
              Real stories from founders who shipped with us.
            </p>
          </div>

          <div ref={cardsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 font-medium ">
            {STATIC_REVIEWS.map((item, index) => (
              <div
                key={item.id}
                data-review-card
                className={cn(index === 2 ? "lg:col-span-2" : "lg:col-span-1")}
                style={{ opacity: 0 }}
              >
                <ReviewCard data={item} />
              </div>
            ))}
          </div>
        </div>

        {/* ─── SECTION 2: Bubble Wall ─── */}
        {/* <div className="pt-8 border-t border-white/5">
          <div ref={bubblesHeaderRef} className="text-center mb-12" style={{ opacity: 0 }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] text-white">
              Join 15+ funded startups <br /> who&apos;ve shipped with us
            </h2>
          </div>

          <div
            ref={bubblesContainerRef}
            className="relative w-full mx-auto aspect-[16/5] md:aspect-[16/5.5] min-h-[350px] sm:min-h-[450px]"
          >
            {BUBBLES.map((config) => (
              <Bubble key={config.id} config={config} />
            ))}
          </div>
        </div> */}

      </div>
    </section>
  );
}