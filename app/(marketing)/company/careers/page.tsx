import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { JsonLd, buildBreadcrumbSchema } from "@/lib/schema";
import { CAREERS_SEO } from "@/seo/company"; 
import { JOBS_DATA } from "./data";
// Note: We are using a direct div with Navbar classes instead of the generic Container component
import { Globe, ArrowUpRight, Clock, Sparkles, MapPin } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  ...CAREERS_SEO,
  title: "Careers at Enlivo - Join our India Team",
  description: "Explore internships and full-time positions in Design and Engineering at our India hubs.",
});

export default function CareersPage() {
  const departments = [
    {
      id: "design",
      name: "Design",
      description: "Shape the future of our visual language.",
      filter: (job: any) => job.department === "Design",
    },
    {
      id: "engineering",
      name: "Engineering",
      description: "Build the engines that power our platform.",
      filter: (job: any) => job.department === "Engineering",
    },
  ];

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Company", path: "/company" },
          { name: "Careers" },
        ])}
      />

      {/* Main Background */}
      <main className="bg-[#F9FAF8] min-h-screen font-sans selection:bg-zinc-900 selection:text-white">
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          {/* NAV WIDTH CONSTRAINT APPLIED HERE */}
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 py-1 rounded-full  text-xs font-medium text-zinc-600 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Hiring in India
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-[#1a1a1a] tracking-tight mb-4 leading-[1]">
                Do work that defines your decade. 
                {/* <br /><span className="text-zinc-400">your decade.</span> */}
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-[#5a5a5a] font-medium leading-relaxed max-w-3xl">
                {/* Join a team of obsessive craftsmen in India. We foster a culture 
                where the best idea wins, regardless of your title. */}
                Our philosophy is simple - hire a team of diverse, passionate people are foster a culture that empowers you to do your best work.
              </p>
            </div>
          </div>
        </section>

        {/* Listings Section */}
        <div className="pb-32 space-y-20">
          {departments.map((dept) => {
            const deptJobs = JOBS_DATA.filter(dept.filter);
            if (deptJobs.length === 0) return null;

            return (
              /* NAV WIDTH CONSTRAINT APPLIED HERE */
              <section key={dept.id} className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-12 gap-10 items-start border-t border-[#E5E5E0] pt-12">
                  
                  {/* Department Header - Sticky */}
                  <div className="lg:col-span-3 sticky top-32">
                    <h2 className="text-xl font-bold text-[#1a1a1a] mb-2">
                      {dept.name}
                    </h2>
                    <p className="text-base text-[#666] font-medium leading-relaxed pr-4">
                      {dept.description}
                    </p>
                  </div>

                  {/* Job Cards */}
                  <div className="lg:col-span-9 flex flex-col gap-5">
                    {deptJobs.map((job) => (
                      <Link 
                        href={`/company/careers/${job.slug}`} 
                        key={job.slug}
                        className="group block"
                      >
                        <article className="relative bg-white rounded-2xl p-7 transition-all duration-300 border border-[#EBEBE6] hover:border-zinc-400 hover:shadow-xl hover:shadow-zinc-200/40 group-hover:-translate-y-1">
                          
                          <div className="flex flex-col gap-5">
                            {/* Header Row */}
                            <div className="flex justify-between items-start">
                              <div className="space-y-2">
                                <div className="flex items-center gap-3">
                                  <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-black transition-colors">
                                    {job.title}
                                  </h3>
                                  {job.isIntern && (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-indigo-50 text-indigo-600 border border-indigo-100 uppercase tracking-wider">
                                      Internship
                                    </span>
                                  )}
                                </div>
                                <p className="text-[#666] text-[15px] leading-relaxed max-w-2xl">
                                  {job.description}
                                </p>
                              </div>
                              
                              {/* Hover Arrow */}
                              <div className="hidden sm:flex w-8 h-8 rounded-full items-center justify-center bg-zinc-50 text-zinc-300 group-hover:bg-[#1a1a1a] group-hover:text-white transition-all duration-300">
                                <ArrowUpRight className="w-4 h-4" />
                              </div>
                            </div>

                            {/* Footer / Meta Row */}
                            <div className="flex flex-wrap items-center gap-4 mt-1 pt-4 border-t border-zinc-50">
                               {/* Location */}
                              <div className="flex items-center gap-1.5 text-[13px] font-medium text-zinc-600 bg-[#F5F5F0] px-2.5 py-1.5 rounded-md border border-[#E5E5E0]">
                                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                                {job.location}
                              </div>

                              {/* Type */}
                              <div className="flex items-center gap-1.5 text-[13px] font-medium text-zinc-500">
                                {job.isIntern ? <Sparkles className="w-3.5 h-3.5 text-amber-500" /> : <Clock className="w-3.5 h-3.5" />}
                                {job.type}
                              </div>
                            </div>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
}