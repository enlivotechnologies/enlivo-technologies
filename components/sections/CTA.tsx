"use client";

import { useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface CTAProps {
  heading?: string;
  description?: string;
}

export function CTA({
  heading = "Let's Make This Simple",
  description = "A short call with the founder to understand your idea, answer questions, and help you decide the right next step — no pressure.",
}: CTAProps) {
  // --- Initialize Cal.com ---
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#2563EB" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section
      className="relative py-24 md:py-32 bg-white overflow-hidden flex flex-col items-center justify-center"
      aria-labelledby="cta-heading"
    >
      {/* --- PREMIUM BACKGROUND EFFECTS --- */}

      {/* 1. Architectural Dot Matrix */}
      {/* Replaced lines with dots for a cleaner, high-tech agency feel */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* 2. Ambient Light (Subtle Depth) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FFA500]/5 blur-[120px] rounded-full pointer-events-none mix-blend-multiply opacity-40" />

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Main Heading: Premium Typography with Wow Effect */}
        <h2 
          id="cta-heading"
          className="text-2xl md:text-4xl lg:text-5xl font-medium font-[family-name:var(--font-neue-montreal)] text-[#1a1a1a] leading-[1.1] mb-8 tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 max-w-5xl mx-auto"
        >
          {heading}
        </h2>

        {/* Subheading: Clean & Balanced */}
        <p className="text-base md:text-lg text-[#5a5a5a] leading-relaxed max-w-3xl mx-auto mb-12 text-balance font-light animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
          {description}
        </p>

        {/* Actions */}
        <div className="flex flex-col items-center gap-5 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
          {/* Button: Premium Golden Gradient - Matching Navbar Style */}
          <a
            href="https://cal.com/nishal-pktyks"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#FFA500] via-[#FFB733] to-[#FFA500] hover:from-[#FFB733] hover:via-[#FFA500] hover:to-[#FFB733] text-[#0F172A] rounded-lg text-[15px] font-bold tracking-wide transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-[#FFA500]/30 hover:shadow-xl hover:shadow-[#FFA500]/40 overflow-hidden"
          >
            {/* Animated gradient overlay */}
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#FFA500] via-[#FFD700] to-[#FFA500] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <span className="relative z-10">Get a Free Product Clarity Call</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
          </a>

          {/* Trust Text */}
          <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#FFA500]" />
            <span>30-minute feasibility review • No sales pressure</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Helper to load Cal.com script ---
function getCalApi(): Promise<any> {
  return new Promise((resolve) => {
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      let d = C.document;
      C.cal =
        C.cal ||
        function () {
          let cal = C.cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            } as { (): void; q: unknown[] };
            const namespace = ar[1];
            api.q = api.q || [];
            typeof namespace === "string"
              ? (cal.ns[namespace] = api) && p(api, arguments)
              : p(cal, arguments);
            return;
          }
          p(cal, arguments);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // @ts-ignore
    resolve(window.cal);
    // @ts-ignore
    window.cal("init", { origin: "https://app.cal.com" });
  });
}
