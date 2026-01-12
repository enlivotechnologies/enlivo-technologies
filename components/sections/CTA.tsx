"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Video, Clock, ShieldCheck } from "lucide-react";

/**
 * CONFIGURATION & DEFAULTS
 */
const CTA_CONTENT = {
  heading: "A 30-minute architecture & feasibility discussion",
  subheading: "Designed for founders, CTOs, and product leaders evaluating complex digital initiatives.",
  assurance: "No sales pitches — only practical guidance and honest assessment.",
  buttonText: "Schedule a Technical Discussion",
  buttonLink: "/contact",
  trustAnchor: "Used by product teams building secure, scalable systems for real-world production.",
};

// ----------------------------------------------------------------------
// HELPER: Date Logic
// ----------------------------------------------------------------------
const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const dayNames = ["S", "M", "T", "W", "T", "F", "S"];

// ----------------------------------------------------------------------
// SUB-COMPONENT: Ultra-Flat Compact Scheduler
// ----------------------------------------------------------------------
function SchedulerWidget() {
  const [today, setToday] = useState<Date | null>(null);
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  
  useEffect(() => {
    const now = new Date();
    setToday(now);
    setSelectedDate(now.getDate());
  }, []);

  if (!today || selectedDate === null) {
    return <div className="w-full max-w-[700px] mx-auto h-[360px] bg-white rounded-2xl border border-gray-200 animate-pulse" />;
  }

  const currentYear = today.getFullYear();
  const currentMonthIndex = today.getMonth();
  const currentMonthName = monthNames[currentMonthIndex];
  
  const daysInMonth = getDaysInMonth(currentYear, currentMonthIndex);
  const firstDayIndex = getFirstDayOfMonth(currentYear, currentMonthIndex);

  const availableTimes = ["10:00 AM", "11:30 AM", "02:00 PM", "03:30 PM", "04:45 PM"];

  return (
    <div className="w-full max-w-[700px] mx-auto flex flex-col md:flex-row bg-white rounded-2xl border border-gray-200 overflow-hidden">
      
      {/* LEFT PANEL: Context */}
      <div className="md:w-[42%] bg-gray-50/40 p-6 flex flex-col border-b md:border-b-0 md:border-r border-gray-100 relative">
         <div className="absolute top-0 left-0 w-full h-[3px] bg-[#2563EB]" />

         <div className="flex-1 pt-2">
            <h3 className="text-[15px] font-bold text-gray-900 mb-4 tracking-tight">
              Who you’ll speak with
            </h3>
            
            <div className="text-[13px] text-gray-500 leading-relaxed font-medium space-y-4">
              <p>
                A senior engineer or solutions architect experienced in designing, scaling, and securing production systems across enterprise platforms, fintech, and applied AI.
              </p>
              <p>
                The focus is on practical guidance, clear trade-offs, and real-world feasibility.
              </p>
            </div>
         </div>

         {/* Footer Icons */}
         <div className="flex flex-col gap-2 mt-auto pt-6 border-t border-gray-200/50">
            <div className="flex items-center gap-2.5 text-[12px] font-medium text-gray-600">
               <div className="w-6 h-6 rounded-md bg-white border border-gray-200 flex items-center justify-center">
                 <Video className="w-3 h-3 text-gray-400" />
               </div>
               <span>Google Meet</span>
            </div>
            <div className="flex items-center gap-2.5 text-[12px] font-medium text-gray-600">
               <div className="w-6 h-6 rounded-md bg-white border border-gray-200 flex items-center justify-center">
                 <Clock className="w-3 h-3 text-gray-400" />
               </div>
               <span>30 Minutes</span>
            </div>
         </div>
      </div>

      {/* RIGHT PANEL: Calendar */}
      <div className="md:w-[58%] p-6 bg-white relative flex flex-col">
         
         {/* Header */}
         <div className="flex items-center justify-between mb-5 pl-1">
            <span className="text-[14px] font-bold text-gray-900 tracking-tight">
              {currentMonthName} {currentYear}
            </span>
            <div className="flex gap-1">
               <button className="p-1 hover:bg-gray-50 rounded text-gray-400 hover:text-gray-900 transition-colors">
                  <ChevronLeft className="w-4 h-4" />
               </button>
               <button className="p-1 hover:bg-gray-50 rounded text-gray-400 hover:text-gray-900 transition-colors">
                  <ChevronRight className="w-4 h-4" />
               </button>
            </div>
         </div>

         {/* Calendar Grid */}
         <div className="mb-auto">
            <div className="grid grid-cols-7 mb-2">
               {dayNames.map((day, i) => (
                  <div key={i} className="text-[10px] font-bold text-gray-400 text-center uppercase tracking-widest pb-1">
                     {day}
                  </div>
               ))}
            </div>

            <div className="grid grid-cols-7 gap-y-1 gap-x-1">
               {Array.from({ length: firstDayIndex }).map((_, i) => (
                  <div key={`empty-${i}`} />
               ))}
               
               {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const isToday = day === today.getDate();
                  const isSelected = day === selectedDate;
                  const isPast = day < today.getDate();

                  return (
                     <div key={day} className="flex justify-center aspect-square items-center">
                        <button 
                           disabled={isPast}
                           onClick={() => setSelectedDate(day)}
                           className={`
                              w-8 h-8 flex items-center justify-center text-[12px] font-medium rounded-lg transition-all duration-150 relative
                              ${isSelected 
                                 ? "bg-[#2563EB] text-white font-semibold" 
                                 : isPast 
                                    ? "text-gray-300 cursor-not-allowed"
                                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                              }
                           `}
                        >
                           {day}
                        </button>
                     </div>
                  );
               })}
            </div>
         </div>

         {/* Times List - Flat Pills */}
         <div className="pt-5 mt-4 border-t border-gray-100">
           <div className="mb-2.5 px-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                 Available Times
              </span>
           </div>
           
           <div className="flex flex-wrap gap-2">
              {availableTimes.map((time, i) => (
                <button 
                  key={i}
                  className="px-3 py-1.5 rounded-lg border border-gray-200 text-[11px] font-medium text-gray-600 bg-white hover:border-[#2563EB] hover:text-[#2563EB] transition-colors outline-none focus:ring-1 focus:ring-blue-500 whitespace-nowrap"
                >
                  {time}
                </button>
              ))}
           </div>
         </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// PROPS INTERFACE (Added for TypeScript support)
// ----------------------------------------------------------------------
interface CTAProps {
  heading?: string;
  subheading?: string;
  assurance?: string;
  buttonText?: string;
  buttonLink?: string;
}

// ----------------------------------------------------------------------
// MAIN COMPONENT
// ----------------------------------------------------------------------
export function CTA({
  heading = CTA_CONTENT.heading,
  subheading = CTA_CONTENT.subheading,
  assurance = CTA_CONTENT.assurance,
  buttonText = CTA_CONTENT.buttonText,
  buttonLink = CTA_CONTENT.buttonLink,
}: CTAProps = {}) {
  
  return (
    <section 
      className="relative py-24 lg:py-32 bg-[#F5F5F0] overflow-hidden"
      itemScope 
      itemType="https://schema.org/ContactPage"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Text Content */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <h2 
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#1a1a1a] tracking-tight leading-[1.1] mb-6"
              itemProp="headline"
            >
              {heading}
            </h2>
            
            <div className="space-y-4 mb-8 max-w-lg">
               <p 
                 className="text-[17px] text-gray-800 leading-relaxed font-medium"
                 itemProp="description"
               >
                 {subheading}
               </p>
               <p className="text-[14px] text-gray-500 font-medium">
                 {assurance}
               </p>
            </div>

            <div className="flex flex-col gap-6 w-full sm:w-auto">
               <Link
                 href={buttonLink}
                 className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#2563EB] text-white rounded-[12px] text-[15px] font-bold transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 active:translate-y-0 outline-none focus:ring-4 focus:ring-blue-100 shadow-lg shadow-blue-500/20"
                 itemProp="mainEntity" 
                 itemType="https://schema.org/Action"
               >
                 <span>{buttonText}</span>
                 <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
               </Link>

               <div className="flex items-center gap-2.5 text-[13px] text-gray-500 font-medium">
                  <ShieldCheck className="w-4 h-4 text-gray-400" />
                  <span>{CTA_CONTENT.trustAnchor}</span>
               </div>
            </div>
          </div>

          {/* RIGHT: Compact Premium Widget */}
          <div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
             <SchedulerWidget />
          </div>

        </div>
      </div>
    </section>
  );
}