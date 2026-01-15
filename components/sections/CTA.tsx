"use client";

import { useEffect } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface CTAProps {
  heading?: string;
  description?: string;
}

export function CTA({
  heading = "Let’s Build Your System Right",
  description = "A focused discussion with senior engineers to assess feasibility, reduce risk, and define a clear technical path forward.",
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-50/50 blur-[120px] rounded-full pointer-events-none mix-blend-multiply opacity-60" />

      {/* --- CONTENT --- */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Status Badge: Frosted Glass */}
        <div className="inline-flex items-center justify-center mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700">
          <div className="inline-flex items-center gap-2 px-3 ">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-medium text-zinc-500 tracking-widest uppercase">
              Accepting New Projects
            </span>
          </div>
        </div>

        {/* Heading: Premium Typography */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-[#1a1a1a] leading-[1.15] mb-6 tracking-tight drop-shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          {heading}
        </h2>

        {/* Subheading: Clean & Balanced */}
        <p className="text-sm md:text-base lg:text-lg text-[#5a5a5a] leading-relaxed max-w-2xl mx-auto mb-9 text-balance font-light animate-in fade-in slide-in-from-bottom-5 duration-700 delay-150">
          {description}
        </p>

        {/* Actions */}
        <div className="flex flex-col items-center gap-5 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
          {/* Button: "Wow" Effect with inner gloss */}
          <a
            href="https://cal.com/nishal-pktyks"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#2563EB] text-white rounded-full text-[15px] font-semibold tracking-wide transition-all duration-300 hover:bg-[#1d4ed8] hover:scale-[1.01] hover:shadow-[0_8px_30px_-4px_rgba(37,99,235,0.3)] active:scale-95 ring-offset-2 focus:ring-2 ring-blue-500 overflow-hidden"
          >
            {/* Gloss Reflection Animation */}
            <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] group-hover:animate-shimmer" />

            <span className="relative z-10">Schedule Technical Discussion</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
          </a>

          {/* Trust Text */}
          <div className="flex items-center gap-2 text-[13px] text-zinc-400 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500/80" />
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
