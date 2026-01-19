"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// --- DATA ---
const TRACKS = [
  {
    id: "01",
    title: "Full Stack Development",
    href: "/company/internships/full-stack-developer",
    image: "https://res.cloudinary.com/dqmryiyhz/image/upload/v1768669946/fullstack_rcogah.jpg",
    description: "Master frontend and backend technologies to build complete web solutions.",
  },
  {
    id: "02",
    title: "AWS Cloud Engineering",
    href: "#apply-aws",
    image: "https://res.cloudinary.com/dqmryiyhz/image/upload/v1768670131/aws_wuotze.jpg",
    description: "Architect scalable, reliable, and secure cloud infrastructure on AWS.",
  },
  {
    id: "03",
    title: "DevOps Engineering",
    href: "#apply-devops",
    image: "https://res.cloudinary.com/dqmryiyhz/image/upload/v1768670402/devops_qqpnhi.jpg",
    description: "Streamline development workflows with CI/CD and automation tools.",
  },
];

export function InternshipTracks() {
  return (
    <section id="areas-of-internship" className="py-24 bg-gray-50">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 md:text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 tracking-tight mb-4">
            Explore Our Internship Areas and Specializations
          </h2>
          <p className="text-lg text-gray-500">
            Real-world internship tracks. Learn, build, and grow with hands-on experience and mentorship.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TRACKS.map((track) => {
            return (
              <div
                key={track.id}
                // Removed 'group', transitions, and hover:shadow effects
                className="relative h-[28rem] w-full overflow-hidden rounded-[2rem] bg-gray-900 shadow-md"
              >
                {/* --- BACKGROUND IMAGE --- */}
                <div className="absolute inset-0 h-full w-full">
                  <Image
                    src={track.image}
                    alt={track.title}
                    fill
                    // Removed hover scale and transitions
                    className="object-cover"
                    priority
                  />
                  
                  {/* --- STATIC OVERLAYS --- */}
                  <div className="absolute inset-0 bg-black/20" /> 
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/60 to-transparent" />
                </div>

                {/* --- CONTENT OVERLAY --- */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 flex flex-col justify-end h-full">
                  
                  {/* Content Wrapper - Removed translate effects */}
                  <div>
                    
                    {/* Title */}
                    <h3 className="mb-3 text-3xl font-bold leading-tight text-white antialiased">
                      {track.title}
                    </h3>
                    
                    {/* Description - Made always visible (removed opacity transitions) */}
                    <p className="mb-8 text-[15px] leading-relaxed text-gray-300 line-clamp-2 opacity-90">
                      {track.description}
                    </p>

                    {/* Action Button - Removed hover scale/active effects */}
                    <Link
                      href={track.href}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-white py-3.5 text-base font-bold text-gray-900 shadow-lg"
                    >
                      Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}