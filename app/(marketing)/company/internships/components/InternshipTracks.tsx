"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, Cloud, Terminal } from "lucide-react";

// --- DATA ---
const TRACKS = [
  {
    id: "01",
    title: "Full Stack Development",
    icon: Code2,
    href: "#apply-fullstack",
  },
  {
    id: "02",
    title: "AWS Cloud Engineering",
    icon: Cloud,
    href: "#apply-aws",
  },
  {
    id: "03",
    title: "DevOps Engineering",
    icon: Terminal,
    href: "#apply-devops",
  },
];

export function InternshipTracks() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-gray-100 pb-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight mb-4">
              Choose Your Path.
            </h2>
            <p className="text-lg text-gray-500 font-light">
              Three specialized tracks designed to make you industry-ready.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-sm font-mono text-gray-400 uppercase tracking-widest">
              Select a Track
            </span>
          </div>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRACKS.map((track) => {
            const Icon = track.icon;
            
            return (
              <div
                key={track.id}
                // Static Card: No 'group', no 'hover', no 'transition' classes.
                className="relative flex flex-col justify-between h-[550px] bg-[#0A0A0A] rounded-[2.5rem] p-10 overflow-hidden border border-white/5"
              >
                {/* --- CARD BACKGROUND --- */}
                {/* Static Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* --- TOP CONTENT (ID & Icon) --- */}
                <div className="relative z-10 flex justify-between items-start">
                  <span className="font-mono text-sm text-gray-500 border border-white/10 px-3 py-1 rounded-full bg-white/5">
                    TRACK {track.id}
                  </span>
                  {/* Static Icon State */}
                  <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                </div>

                {/* --- CENTER VISUAL (Big Typography) --- */}
                <div className="relative z-10 my-auto">
                  <h3 className="text-4xl md:text-5xl font-medium text-white leading-[1.1] tracking-tight">
                    {track.title.split(" ").map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                  </h3>
                </div>

                {/* --- BOTTOM CONTENT (Static Apply Button) --- */}
                <div className="relative z-10 pt-8 border-t border-white/10">
                  <Link
                    href={track.href}
                    // Removed hover:scale, active:scale, and transition effects.
                    className="w-full h-14 rounded-full bg-white text-black font-semibold text-lg flex items-center justify-center gap-2"
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
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