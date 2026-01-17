"use client";

import React from "react";
import Image from "next/image";
import { DoorOpen, Wrench, Shield, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

// --- DATA ---
const STEPS = [
  {
    id: 1,
    step: "01",
    title: "Onboarding & Setup",
    description: "We don't just throw you in. You'll get a structured orientation, set up your professional dev environment, and meet your dedicated mentor.",
    icon: DoorOpen,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&h=800&fit=crop",
    outcome: "Ready to Build",
    colSpan: "lg:col-span-4",
  },
  {
    id: 2,
    step: "02",
    title: "Guided Engineering",
    description: "Start shipping code immediately. You will work on real-world tickets under supervision, participating in code reviews and learning industry patterns.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop",
    outcome: "Shipping Features",
    colSpan: "lg:col-span-8",
  },
  {
    id: 3,
    step: "03",
    title: "Full Ownership",
    description: "Transition from following instructions to making decisions. You'll lead small feature sets, architect solutions, and own the deployment pipeline.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop",
    outcome: "Professional Autonomy",
    colSpan: "lg:col-span-7",
  },
  {
    id: 4,
    step: "04",
    title: "Career Showcase",
    description: "Compile your contributions into a portfolio. We conduct mock interviews and refine your resume based on the actual work you've delivered.",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=800&fit=crop",
    outcome: "Job Ready",
    colSpan: "lg:col-span-5",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-black tracking-tight leading-[1.1] mb-6">
              The Path to <br className="hidden md:block" />
              <span className="text-gray-400">Professional Engineering.</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-xl leading-relaxed font-light">
              No random tutorials. A structured four-stage evolution from student to deployed engineer.
            </p>
          </div>
          
          <div className="hidden md:block">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-sm font-medium text-gray-600">
               <span className="w-2 h-2 rounded-full bg-green-500" />
               Duration: 6 Months
            </div>
          </div>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {STEPS.map((item) => {
            const Icon = item.icon;
            
            return (
              <div
                key={item.id}
                className={cn(
                  "relative flex flex-col justify-between overflow-hidden rounded-[2.5rem] bg-gray-50 border border-gray-100",
                  item.colSpan,
                  "min-h-[480px] lg:min-h-[520px]" 
                )}
              >
                {/* CONTENT LAYER */}
                <div className="relative z-20 p-8 md:p-12 flex flex-col h-full pointer-events-none">
                  
                  {/* Top: Header */}
                  <div className="flex justify-between items-start mb-auto">
                    <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 inline-flex">
                      <Icon className="w-6 h-6 text-black" strokeWidth={1.5} />
                    </div>
                    <span className="text-5xl font-bold text-gray-200 select-none">
                      {item.step}
                    </span>
                  </div>

                  {/* Middle: Text */}
                  <div className="mt-8 mb-8">
                    <h3 className="text-2xl md:text-3xl font-medium text-black mb-4 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light text-base md:text-lg max-w-lg">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom: Outcome Badge */}
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-full shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-black" />
                      <span className="text-sm font-semibold text-black uppercase tracking-wide">
                        Outcome: {item.outcome}
                      </span>
                    </div>
                  </div>
                </div>

                {/* IMAGE LAYER (Background) */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  {/* Static Gradients for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50/90 to-transparent opacity-95" />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/80 to-transparent opacity-100" />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}