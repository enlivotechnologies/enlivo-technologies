"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Building2, MapPin, Home } from "lucide-react";
import { JOBS_DATA, Job } from "./data";

// Map Job type to workType for display
const getWorkType = (type: string, location: string): string => {
  if (type.toLowerCase().includes("remote") || location.toLowerCase().includes("remote")) {
    return "Remote";
  }
  return "On-site";
};

// Extract location city from full location string
const getLocationCity = (location: string): string => {
  // Handle formats like "Bengaluru, India" or "Remote / India"
  if (location.toLowerCase().includes("remote")) {
    return "Remote";
  }
  return location.split(",")[0].trim();
};

// Transform JOBS_DATA to match component needs
const transformJobs = (jobs: Job[]) => {
  return jobs.map((job) => ({
    id: job.slug,
    title: job.title,
    location: getLocationCity(job.location),
    workType: getWorkType(job.type, job.location),
    slug: job.slug,
    department: job.department.toLowerCase(),
  }));
};

// Get unique departments from jobs data
const getDepartmentsFromJobs = (jobs: Job[]) => {
  const departments = new Set<string>();
  jobs.forEach((job) => {
    departments.add(job.department);
  });
  
  return [
    { id: "all", name: "All departments" },
    ...Array.from(departments).map((dept) => ({
      id: dept.toLowerCase(),
      name: dept,
    })),
  ];
};

export function CareersPageClient() {
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  
  // Transform jobs data
  const transformedJobs = useMemo(() => transformJobs(JOBS_DATA), []);
  
  // Get departments from jobs data
  const departments = useMemo(() => getDepartmentsFromJobs(JOBS_DATA), []);
  
  // Filter jobs based on selected department
  const filteredJobs = useMemo(() => {
    if (selectedDepartment === "all") {
      return transformedJobs;
    }
    return transformedJobs.filter((job) => job.department === selectedDepartment);
  }, [selectedDepartment, transformedJobs]);

  // Calculate department counts dynamically
  const getDepartmentCount = (deptId: string) => {
    if (deptId === "all") {
      return transformedJobs.length;
    }
    return transformedJobs.filter((job) => job.department === deptId).length;
  };

  // Handle department filter change
  const handleDepartmentFilter = (deptId: string) => {
    setSelectedDepartment(deptId);
  };

  return (
    <>
      {/* Main Background */}
      <div className="bg-white min-h-screen font-sans">
        
        {/* Hero Banner Section - Full Width Image Background */}
        <section className="w-full relative pt-24 pb-20 lg:pt-28 lg:pb-24 overflow-hidden bg-black">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: 'url(https://res.cloudinary.com/dqmryiyhz/image/upload/v1768832831/__hghwzo.jpg)',
            }}
          />
          
          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              
              {/* Hiring Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-gray-700 tracking-wide uppercase">
                  Hiring in India
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#FFFFFF] tracking-tight mb-6 leading-[1.1]">
                Do Work That Matters.
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg lg:text-xl text-gray-300 font-normal leading-relaxed max-w-3xl">
                Build real products, solve meaningful problems, and grow with people who take their craft seriously.
              </p>
            </div>
          </div>
        </section>

        {/* Jobs Section */}
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Department Filters */}
            <div className="flex flex-wrap items-center gap-6 mb-4 pb-4">
              {departments.map((dept) => {
                const count = getDepartmentCount(dept.id);
                const isSelected = selectedDepartment === dept.id;
                return (
                  <button
                    key={dept.id}
                    onClick={() => handleDepartmentFilter(dept.id)}
                    className={`relative px-1 py-3 text-base font-medium transition-colors duration-200 ${
                      isSelected
                        ? "text-black"
                        : "text-gray-600 hover:text-black"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {dept.name}
                      {count > 0 && (
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          isSelected
                            ? "bg-gray-200 text-gray-700"
                            : "bg-gray-100 text-gray-600"
                        }`}>
                          {count}
                        </span>
                      )}
                    </span>
                    {/* Underline for selected item */}
                    {isSelected && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Job Count and Share */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <span className="text-lg font-medium text-[#1a1a1a]">
                  {filteredJobs.length} jobs
                </span>
              </div>
            
            </div>

            {/* Jobs Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => {
                const isRemote = job.workType.toLowerCase() === "remote";
                
                return (
                  <article
                    key={job.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 h-full flex flex-col"
                  >
                    {/* Job Title */}
                    <h3 className="text-lg font-semibold text-[#1a1a1a] mb-4">
                      {job.title}
                    </h3>

                    {/* Job Meta Info */}
                    <div className="flex flex-col gap-3 mb-6 flex-grow">
                      {/* Work Type and Location */}
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1.5">
                          {isRemote ? (
                            <Home className="w-4 h-4 text-gray-400" />
                          ) : (
                            <Building2 className="w-4 h-4 text-gray-400" />
                          )}
                          <span>{job.workType}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* View Job Button */}
                    <div className="mt-auto">
                      <Link
                        href={`/company/careers/${job.slug}`}
                        className="inline-block w-full text-center bg-[#1a1a1a] text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors duration-200 hover:bg-black"
                      >
                        View job
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
