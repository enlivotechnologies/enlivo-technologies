"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Cloud, Terminal } from "lucide-react";

// --- DATA ---
const TRACKS = [
  {
    id: "01",
    title: "Full Stack Development",
    icon: Code2,
    href: "/company/internships/full-stack-developer",
    image: "https://res.cloudinary.com/dqmryiyhz/image/upload/v1768669946/fullstack_rcogah.jpg",
    hasImage: true,
  },
  {
    id: "02",
    title: "AWS Cloud Engineering",
    icon: Cloud,
    href: "#apply-aws",
    image: "https://res.cloudinary.com/dqmryiyhz/image/upload/v1768670131/aws_wuotze.jpg",
    hasImage: true,
  },
  {
    id: "03",
    title: "DevOps Engineering",
    icon: Terminal,
    href: "#apply-devops",
    image: "https://res.cloudinary.com/dqmryiyhz/image/upload/v1768670402/devops_qqpnhi.jpg",
    hasImage: true,
  },
];

export function InternshipTracks() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 ">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight mb-4">
            Areas of Internship
            </h2>
            <p className="text-lg text-gray-500 font-light">
            Choose the area where you’ll work, learn, and build real experience.
            </p>
          </div>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRACKS.map((track) => {
            const Icon = track.icon;
            
            return (
              <div
                key={track.id}
                className="relative flex flex-col justify-between h-[420px] rounded-[2.5rem] p-8 overflow-hidden border border-white/5"
                style={track.hasImage ? {} : { backgroundColor: "#0A0A0A" }}
              >
                {/* --- CARD BACKGROUND --- */}
                {track.hasImage ? (
                  <>
                    {/* Image Background */}
                    <div className="absolute inset-0">
                      <Image
                        src={track.image!}
                        alt={track.title}
                        fill
                        className="object-cover"
                        priority
                      />
                      {/* Dark Gradient Overlay for Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
                    </div>
                  </>
                ) : (
                  /* Static Grid Pattern Overlay for non-image cards */
                  <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                )}

                {/* --- CENTER VISUAL (Big Typography) --- */}
                <div className="relative z-10 flex-1 flex items-center">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-[1.1] tracking-tight">
                    {track.title.split(" ").map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </h3>
                </div>

                {/* --- BOTTOM CONTENT (Static Apply Button) --- */}
                <div className={`relative z-10 pt-6 ${
                  track.hasImage ? "border-t border-white/20" : "border-t border-white/10"
                }`}>
                  <Link
                    href={track.href}
                    className="w-full h-12 rounded-full bg-white text-black font-semibold text-base flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}