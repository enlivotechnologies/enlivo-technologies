/**
 * components/layout/Navbar.tsx
 *
 * PURPOSE: Global navigation header — premium dark style with Announcement Bar.
 * UPDATES: 
 * - Matched announcement bar background to the premium purple in the screenshot.
 * - Refined "Claim Your Spot" button for a high-end feel.
 * - Maintained existing "wow" UI elements (hover effects, blur).
 */

"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Type definitions
interface NavItem {
  id: string;
  label: string;
  href: string;
}

// Main navigation items
const mainNavItems: NavItem[] = [
  {
    id: "services",
    label: "Services",
    href: "/#services-overview",
  },
  {
    id: "portfolio",
    label: "Portfolio",
    href: "/#portfolio",
  },
  {
    id: "how-we-work",
    label: "How We Work",
    href: "/#our-process",
  },
  {
    id: "why-us",
    label: "Why Us",
    href: "/company/why-us",
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to handle announcement bar visibility (optional, currently always visible)
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (pathname === "/" && href.startsWith("/#")) {
        e.preventDefault();
        const id = href.replace("/#", "");
        const el = document.getElementById(id);
        if (!el) return;

        // Use Lenis scrollTo for butter-smooth nav scrolling (matches page feel)
        const lenis = (window as unknown as { lenis?: { scrollTo: (target: HTMLElement, opts?: Record<string, unknown>) => void } }).lenis;
        if (lenis) {
          lenis.scrollTo(el, { offset: -120, duration: 1.4 });
        } else {
          // Fallback if Lenis isn't ready
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    [pathname]
  );

  return (
    <div className="fixed top-0 left-0 w-full z-[100] flex flex-col">
      
      {/* ─── Announcement Bar ─── */}
      {showAnnouncement && (
        // Updated bg-gradient to match the deep purple from the screenshot
        <div className="relative z-[101] w-full bg-[#D4FF00] overflow-hidden"> 
        {/* You can also use a gradient if you prefer: bg-gradient-to-r from-[#4c1d95] via-[#6d28d9] to-[#4c1d95] */}
          
          {/* Subtle noise texture or pattern overlay (optional) */}
          <div className="absolute inset-0 bg-white/[0.03] pointer-events-none" />

          <div className="relative max-w-[90rem] mx-auto px-4 h-10 sm:h-11 flex items-center justify-center text-center">
             <Link 
               href="/contact" 
               className="group flex items-center justify-center gap-3 w-full h-full text-[12px] sm:text-[13px] font-medium text-black transition-colors"
             >
               <span className="inline-block animate-pulse text-lg leading-none">🎯</span>
               <span>
                 <span className="opacity-90">Limited: First 3 clients get</span>{" "}
                 <span className="font-semibold text-black border-b border-black/40 pb-0.5 group-hover:border-black transition-colors">50% off MVP development</span>
               </span>
               
               {/* "Claim Your Spot" Button Style */}
               <span className="flex items-center gap-1 ml-1 bg-white/20 hover:bg-white/30 text-black px-3 py-1 rounded-full text-[11px] sm:text-[12px] font-semibold transition-all duration-300 backdrop-blur-sm border border-black/10 group-hover:border-black/20">
                 Claim Your Spot <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
               </span>
             </Link>
          </div>
        </div>
      )}

      {/* ─── Navbar Header ─── */}
      <header
        className={cn(
          "w-full transition-all duration-500 border-transparent",
          isScrolled
            ? "backdrop-blur-xl bg-[#030304]/80"
            : "bg-gradient-to-b from-[#030304] to-[#030304]/0"
        )}
        itemScope
        itemType="https://schema.org/WPHeader"
      >
        <nav
          className="max-w-[90rem] mx-auto px-5 sm:px-8 lg:px-14"
          role="navigation"
          aria-label="Main navigation"
          itemScope
          itemType="https://schema.org/SiteNavigationElement"
        >
          <div className="relative flex items-center justify-between h-[72px] w-full">

            <Link
              href="/"
              className="flex items-center gap-3 cursor-pointer group flex-shrink-0 z-20"
              aria-label="Enlivo Technologies - Home"
              itemProp="url"
            >
              <div className=" flex items-center justify-center flex-shrink-0">
                <Image
                  src="/images/enlivo/enlivo-final-logo.png"
                  width={138}
                  height={138}
                  className="w-full h-full object-cover"
                  alt="Enlivo Technologies Logo"
                  priority
                  itemProp="logo"
                />

{/* <Image 
                   src="/images/enlivo/enlivo-final-logo.png"
                   alt="Enlivo Global Tech Solutions"
                   fill
                   className="object-contain object-left"
                   priority
                 /> */}
              </div>
            </Link>

            {/* ─── Desktop Nav Links (Center) ─── */}
            <div
              className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-10"
              role="menubar"
            >
              {mainNavItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "text-[15px] font-medium text-white/70 hover:text-white",
                    "transition-all duration-300 whitespace-nowrap relative group",
                  )}
                  style={{ fontFamily: "var(--font-geist), system-ui, -apple-system, sans-serif" }}
                  title={item.label}
                  itemProp="url"
                  role="menuitem"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span itemProp="name">{item.label}</span>
                  {/* Subtle hover dot indicator instead of underline for a cleaner look */}
                  <span className="absolute -bottom-2 left-1/2 w-0 h-0.5 bg-indigo-500 rounded-full transition-all duration-300 group-hover:w-1/2 group-hover:-translate-x-1/2 opacity-0 group-hover:opacity-100"></span>
                </a>
              ))}
            </div>

            {/* ─── Desktop CTA (Right) ─── */}
            <div className="hidden lg:flex flex-shrink-0 z-20 items-center gap-4">
              <Link
                href="/contact"
                className={cn(
                  "relative text-[15px] font-medium px-6 py-2.5 rounded-full whitespace-nowrap overflow-hidden group",
                  "bg-white text-black border border-white",
                  "hover:bg-gray-100 transition-all duration-300 ease-out"
                )}
                style={{ fontFamily: "var(--font-geist), system-ui, -apple-system, sans-serif" }}
                title="Book Free Audit"
                role="menuitem"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Free Audit
                </span>
              </Link>
            </div>

            {/* ─── Mobile Hamburger ─── */}
            <button
              className="lg:hidden relative text-white p-2 -mr-2 flex items-center justify-center z-20 hover:bg-white/10 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ─── Mobile Menu Overlay ─── */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-[#030304] transition-all duration-300 lg:hidden",
          "flex flex-col",
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible pointer-events-none -translate-y-4"
        )}
      >
        {/* Mobile Header Bar */}
        <div className="flex items-center justify-between h-[72px] px-5 sm:px-8 flex-shrink-0 mt-10 sm:mt-0">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
              <Image
                src="/images/navbar/EnlivotechnologiesLogo.png"
                width={32}
                height={32}
                className="w-full h-full object-contain brightness-0 invert"
                alt="Enlivo Technologies Logo"
              />
            </div>
            <span
              className="text-[17px] font-medium text-white tracking-[-0.01em] whitespace-nowrap hidden min-[420px]:inline"
              style={{ fontFamily: "var(--font-geist), system-ui, -apple-system, sans-serif" }}
            >
              Enlivo Technologies
            </span>
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 -mr-2 text-white hover:text-white/70 transition-colors duration-200"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 -mt-16">
          <div className="flex flex-col gap-1">
            {mainNavItems.map((item, index) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  handleNavClick(e, item.href);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "block py-4 text-[32px] sm:text-[40px] font-medium text-white/80 hover:text-white",
                  "transition-all duration-300 tracking-[-0.02em]",
      
                )}
                style={{
                  fontFamily: "var(--font-geist), system-ui, -apple-system, sans-serif",
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={cn(
              "mt-10 w-full text-center py-4 rounded-full text-[17px] font-medium",
              "bg-white text-black",
              "hover:bg-gray-200",
              "transition-all duration-300"
            )}
            style={{ fontFamily: "var(--font-geist), system-ui, -apple-system, sans-serif" }}
          >
            Book Free Audit
          </Link>
        </div>
      </div>
    </div>
  );
}