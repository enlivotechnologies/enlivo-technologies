/**
 * components/sections/CTA.tsx
 *
 * PURPOSE: Final Call to Action section.
 * DESIGN: Replicating "Vectura" Image + Floating Card Layout.
 * FUNCTIONALITY: Integrated Cal.com modal for the "Get started now" button.
 */

"use client";

import { useEffect } from "react";
import Image from "next/image";
import { CheckCircle2, TrendingUp, ArrowRight } from "lucide-react";

interface CTAProps {
  heading?: string;
  description?: string;
}

export function CTA({ 
  heading = "Start with clarity, scale with confidence.",
  description = "Enlivo helps founders move faster — with a dedicated engineering team, transparent processes, and a focus on building scalable products from day one."
}: CTAProps = {}) {
  // --- Initialize Cal.com ---
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[105rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Container: Rounded corners, gray background */}
        <div className="relative flex flex-col lg:flex-row items-center justify-end rounded-[2.5rem] overflow-hidden bg-gray-50 min-h-[600px] lg:h-[700px]">
          
          {/* --- Left: Full Height Image --- */}
          {/* We position it absolute on desktop to allow the card to 'float' over it comfortably */}
          <div className="relative w-full lg:absolute lg:inset-y-0 lg:left-0 lg:w-[65%] h-[400px] lg:h-full">
            <Image
              src="https://res.cloudinary.com/dqmryiyhz/image/upload/v1768579852/img_r9uwif.jpg"
              alt="Founder looking confidently at the future"
              fill
              className="object-cover object-center"
              priority
            />
            {/* Gradient Overlay: Ensures smooth visual transition if needed */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/20 lg:to-transparent" />
          </div>

          {/* --- Right: The Black Card (Premium UI) --- */}
          {/* z-10 ensures it sits on top. lg:mr-12 positions it nicely on the right. */}
          <div className="relative z-10 w-full lg:w-[45%] max-w-2xl lg:mr-16 -mt-10 lg:mt-0 px-4 lg:px-0">
            <div className="bg-black text-white rounded-[2rem] p-8 md:p-12 lg:p-14 shadow-2xl border border-gray-800">
              
              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.1] tracking-tight mb-6">
                {heading}
              </h2>
              
              {/* Description */}
              <p className="text-lg text-gray-400 font-light leading-relaxed mb-10">
                {description}
              </p>

              {/* Dividers & Features */}
              <div className="space-y-6 mb-12">
                {/* Feature 1 */}
                <div className="group">
                  <div className="flex items-start gap-4 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <h3 className="text-lg font-medium text-white">Fast onboarding</h3>
                  </div>
                  <p className="text-gray-400 pl-10 text-[15px] leading-relaxed">
                    Most projects are fully staffed and ready to kick off within a week of agreement.
                  </p>
                </div>

                {/* Divider Line */}
                <div className="h-px w-full bg-gray-800" />

                {/* Feature 2 */}
                <div className="group">
                  <div className="flex items-start gap-4 mb-3">
                    <TrendingUp className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                    <h3 className="text-lg font-medium text-white">Built for scale</h3>
                  </div>
                  <p className="text-gray-400 pl-10 text-[15px] leading-relaxed">
                    From MVP to enterprise-grade systems, we build with future growth in mind—no bloat, no friction.
                  </p>
                </div>
              </div>

              {/* Action Button: White Pill Shape */}
              <button
                data-cal-link="nishal-pktyks" 
                data-cal-config='{"layout":"month_view"}'
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-black text-[17px] font-medium px-8 py-4 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <span>Get started now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- Helper to load Cal.com script (Same logic as before) ---
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