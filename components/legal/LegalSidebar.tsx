/**
 * components/legal/LegalSidebar.tsx
 *
 * PURPOSE: Sticky sidebar nav for legal pages with active scroll tracking.
 * WHY: Highlights the currently visible section as the user scrolls,
 *      giving a premium reading experience.
 *
 * FEATURES:
 * - IntersectionObserver-based scroll tracking
 * - Gray box background
 * - Active state: dark black text with left accent bar
 * - Smooth transitions
 * - Related links section
 */

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface SidebarSection {
  id: string;
  title: string;
}

interface RelatedLink {
  href: string;
  label: string;
}

interface LegalSidebarProps {
  sections: SidebarSection[];
  relatedLinks: RelatedLink[];
  note?: string;
}

export function LegalSidebar({
  sections,
  relatedLinks,
  note,
}: LegalSidebarProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    // Small delay to ensure DOM sections exist
    const timer = setTimeout(() => {
      sections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (!el) return;

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveId(section.id);
              }
            });
          },
          {
            rootMargin: "-20% 0px -60% 0px",
            threshold: 0,
          }
        );

        observer.observe(el);
        observers.push(observer);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observers.forEach((obs) => obs.disconnect());
    };
  }, [sections]);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="lg:w-[30%] lg:sticky lg:top-28 lg:self-start h-fit hidden lg:block">
      {/* Gray box with navigation */}
      <div className="bg-[#F3F3F1] rounded-2xl p-7 pb-8">
        <p className="text-[11px] font-semibold text-black/30 uppercase tracking-[0.15em] mb-5">
          On this page
        </p>

        <nav className="space-y-0.5">
          {sections.map((section, i) => {
            const isActive = activeId === section.id;

            return (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                className={`
                  w-full flex items-center gap-3.5 py-2.5 px-3 rounded-xl text-left transition-all duration-300 cursor-pointer
                  ${
                    isActive
                      ? "bg-white text-black shadow-sm shadow-black/[0.04]"
                      : "text-black/35 hover:text-black/60 hover:bg-white/50"
                  }
                `}
              >
                <span
                  className={`text-[11px] tabular-nums font-medium transition-colors duration-300 ${
                    isActive ? "text-black" : "text-black/20"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`text-[13px] leading-snug transition-all duration-300 ${
                    isActive ? "font-medium" : "font-normal"
                  }`}
                >
                  {section.title}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Related links */}
      <div className="mt-6 px-2 space-y-3">
        <p className="text-[11px] font-semibold text-black/30 uppercase tracking-[0.15em] mb-4 px-1">
          Related
        </p>
        {relatedLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-2 text-sm text-black/40 hover:text-black transition-colors px-1 py-1"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Optional note */}
      {note && (
        <div className="mt-6 p-5 rounded-xl bg-[#F3F3F1] border border-black/[0.04]">
          <p className="text-[11px] font-semibold text-black/35 uppercase tracking-wider mb-2">
            Note
          </p>
          <p className="text-[13px] text-black/40 leading-relaxed">{note}</p>
        </div>
      )}
    </aside>
  );
}
