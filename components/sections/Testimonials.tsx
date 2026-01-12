"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/Marquee";

// Star rating component
function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={cn(
            "w-4 h-4",
            i < rating ? "text-yellow-400" : "text-white/20"
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sunil B K",
    role: "CTO",
    company: "Global FinTech",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "Enlivo worked closely with our internal teams to modernize legacy systems without disrupting operations. Their approach to architecture and security gave us a scalable foundation ready for AI-driven growth.",
    rating: 5,
  },
  {
    id: 2,
    name: "Ananya Rao",
    role: "Product Manager",
    company: "Enterprise Solutions",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    text: "What stood out was their ability to translate business requirements into practical technical decisions. The team balanced UX, performance, and security without overengineering.",
    rating: 5,
  },
  {
    id: 3,
    name: "Karthik R",
    role: "Director of Technology",
    company: "LogiChain",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    text: "Enlivo helped stabilize and scale systems under production load. Their focus on reliability and risk reduction gave us confidence during expansion.",
    rating: 5,
  },
  {
    id: 4,
    name: "Rohit Mehra",
    role: "Head of Engineering",
    company: "SaaS Platform",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    text: "Enlivo brought structure to our development process at a critical growth stage. Clear communication, predictable delivery, and strong engineering discipline made them a reliable partner.",
    rating: 5,
  },
  {
    id: 5,
    name: "Vinay S",
    role: "VP Operations",
    company: "LogiChain",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
    text: "By automating critical workflows, Enlivo helped us significantly reduce manual data processing and operational errors. The impact was measurable and integrated smoothly.",
    rating: 5,
  },
  {
    id: 6,
    name: "Nagarjun",
    role: "Founder",
    company: "EcoStart",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    text: "The engineers we hired through Enlivo's IT Launchpad were production-ready from day one. Their understanding of real-world systems stood out compared to traditional hiring.",
    rating: 5,
  },
  {
    id: 7,
    name: "Shashi Gupta",
    role: "Lead Developer",
    company: "Enlivo (Former Intern)",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
    text: "The internship program focused on real projects, clear expectations, and strong mentorship. It prepared me for enterprise development work and long-term career growth.",
    rating: 5,
  },
  {
    id: 8,
    name: "Priya Sharma",
    role: "CTO",
    company: "HealthTech Startup",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    text: "Enlivo's security-first approach was crucial for our healthcare platform. They delivered HIPAA-compliant solutions that we could trust with sensitive patient data.",
    rating: 5,
  },
];

const firstColumn = TESTIMONIALS.slice(0, 3);
const secondColumn = TESTIMONIALS.slice(3, 6);
const thirdColumn = TESTIMONIALS.slice(6, 8);

function ReviewCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure
      className={cn(
        "relative w-full cursor-default overflow-hidden rounded-2xl p-6",
        "border border-white/[0.08] bg-white/[0.03]",
        "hover:bg-white/[0.06] hover:border-white/[0.12]",
        "transition-all duration-300"
      )}
      itemScope
      itemType="https://schema.org/Review"
    >
      <meta itemProp="itemReviewed" content="Enlivo Technologies" />

      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/10 shrink-0 ring-2 ring-white/[0.08]">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div itemProp="author" itemScope itemType="https://schema.org/Person">
            <cite className="not-italic text-sm font-medium text-white block">
              <span itemProp="name">{testimonial.name}</span>
            </cite>
            <span className="text-xs text-white/40">
              <span itemProp="jobTitle">{testimonial.role}</span>,{" "}
              {testimonial.company}
            </span>
          </div>
        </div>

        <StarRating rating={testimonial.rating} />
      </div>

      <blockquote>
        <p
          className="text-sm text-white/70 leading-relaxed"
          itemProp="reviewBody"
        >
          {testimonial.text}
        </p>
      </blockquote>
    </figure>
  );
}

export function Testimonials() {
  return (
    <section
      className="py-24 lg:py-32 bg-[#050505] overflow-hidden"
      aria-labelledby="testimonials-heading"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <meta itemProp="name" content="Enlivo Technologies" />
      <meta itemProp="url" content="https://www.enlivotechnologies.com" />

      <div className="sr-only" id="testimonials-description">
        Client testimonials and reviews for Enlivo Technologies enterprise
        software development services. Read what CTOs, founders, and engineering
        leaders say about working with Enlivo on digital transformation and
        scalable software systems.
      </div>

      {/* Header Section - Centered and prominent */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-20">
        <div className="text-center">
          {/* Label */}
          <span className="inline-block text-[11px] font-medium tracking-[0.25em] text-white/40 uppercase mb-6">
            / Testimonials /
          </span>

          {/* Main Heading */}
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-medium leading-[1.1] tracking-tight text-white max-w-4xl mx-auto"
          >
            Trusted by{" "}
            <span className="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text">
              engineering leaders
            </span>{" "}
            building the future.
          </h2>

          {/* Subheading for SEO */}
          <p className="mt-6 text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            See why CTOs, founders, and technical leaders choose Enlivo for
            enterprise software development and digital transformation.
          </p>
        </div>
      </div>

      {/* Testimonials Marquee Grid - Below heading */}
      <div className="relative max-w-6xl mx-auto px-4">
        {/* Marquee Columns Container */}
        <div className="relative flex h-[520px] w-full flex-row items-center justify-center gap-4 overflow-hidden">
          <Marquee
            pauseOnHover
            vertical
            className="[--duration:25s] [--gap:1rem] w-full max-w-sm hidden md:flex"
          >
            {firstColumn.map((testimonial) => (
              <ReviewCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Marquee>

          <Marquee
            reverse
            pauseOnHover
            vertical
            className="[--duration:30s] [--gap:1rem] w-full max-w-sm"
          >
            {secondColumn.map((testimonial) => (
              <ReviewCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Marquee>

          <Marquee
            pauseOnHover
            vertical
            className="[--duration:20s] [--gap:1rem] w-full max-w-sm hidden lg:flex"
          >
            {thirdColumn.map((testimonial) => (
              <ReviewCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Marquee>
        </div>

        {/* Top Fade Overlay - Minimal */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-12 z-10"
          style={{
            background:
              "linear-gradient(to bottom, #050505 0%, transparent 100%)",
          }}
        />

        {/* Bottom Fade Overlay - Minimal */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-6 z-10"
          style={{
            background: "linear-gradient(to top, #050505 0%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}
