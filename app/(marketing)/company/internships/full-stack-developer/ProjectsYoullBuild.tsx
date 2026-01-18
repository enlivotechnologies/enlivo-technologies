"use client";

/**
 * ProjectsYoullBuild Component
 * 
 * Section showcasing the projects students will build
 * during the internship program.
 */

import React from "react";
import { Code2, Database, Globe, Rocket } from "lucide-react";

const PROJECTS = [
  {
    icon: Code2,
    title: "Full-stack CRUD application with authentication",
    description: "Build a complete application with user authentication, data management, and secure API endpoints.",
  },
  {
    icon: Database,
    title: "Dashboard with real-time data",
    description: "Create an interactive dashboard that displays live data with real-time updates and visualizations.",
  },
  {
    icon: Globe,
    title: "REST API with database & role-based access",
    description: "Develop a robust REST API with database integration and implement role-based access control.",
  },
  {
    icon: Rocket,
    title: "Final capstone project (end-to-end)",
    description: "Build a complete end-to-end application from concept to deployment, showcasing all your skills.",
  },
];

export function ProjectsYoullBuild() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight mb-6 leading-[1.1]">
            Projects You'll Build
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {PROJECTS.map((project, index) => {
            const Icon = project.icon;
            
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-black flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-black mb-2 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Industry Standards Note */}
        <div className="max-w-4xl mx-auto bg-black rounded-2xl p-8 md:p-10 text-center">
          <p className="text-lg md:text-xl text-white leading-relaxed font-light">
            Every project follows <span className="font-semibold">industry standards</span>: clean architecture, version control, reviews, and deployment.
          </p>
        </div>
      </div>
    </section>
  );
}
