/**
 * components/layout/CareersNavbar.tsx
 *
 * PURPOSE: Premium navbar for careers pages — replicates main site Navbar style
 * with career-specific navigation options.
 * STYLE: Fixed header, centered nav links, CTA button right, mobile hamburger.
 * WIDTH: max-w-[95rem] matching main Navbar for consistency.
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { id: "openings", label: "Open Positions", href: "/company/careers" },
  { id: "internships", label: "Internships", href: "/company/internships" },
  { id: "about", label: "Life at Enlivo", href: "/company/about" },
  { id: "home", label: "Main Website", href: "/" },
];

export function CareersNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"
          : "bg-white"
      )}
    >
      <nav
        className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Careers navigation"
      >
        <div className="relative flex items-center justify-between h-16 w-full">
          {/* Logo (Left) */}
          <Link
            href="/company/careers"
            className="flex items-center gap-2.5 cursor-pointer group flex-shrink-0 z-20"
            aria-label="Enlivo Careers - Home"
          >
            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
              <Image
                src="/images/navbar/EnlivotechnologiesLogo.png"
                width={32}
                height={32}
                className="w-full h-full object-contain"
                alt="Enlivo Technologies Logo"
                priority
              />
            </div>
            <span
              className="text-sm sm:text-[17px] font-semibold text-black tracking-normal whitespace-nowrap hidden min-[360px]:inline"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              Enlivo Careers
            </span>
            <span
              className="text-sm font-semibold text-black tracking-normal whitespace-nowrap min-[360px]:hidden"
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              Careers
            </span>
          </Link>

          {/* Desktop Nav (Centered) */}
          <div
            className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8"
            role="menubar"
          >
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href === "/company/careers" &&
                  pathname?.startsWith("/company/careers/") &&
                  item.id === "openings");

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    "text-[15px] font-light transition-colors duration-200 whitespace-nowrap relative py-1",
                    isActive
                      ? "text-black font-medium"
                      : "text-gray-500 hover:text-black"
                  )}
                  style={{
                    fontFamily: "var(--font-geist-light), system-ui, sans-serif",
                  }}
                  role="menuitem"
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] bg-black rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA (Right) */}
          <div className="hidden lg:flex flex-shrink-0 z-20 items-center gap-4">
            <a
              href="mailto:Info.enlivo@gmail.com"
              className="bg-black text-white text-[15px] font-medium px-6 py-2.5 rounded-full hover:bg-gray-900 transition-colors duration-200 whitespace-nowrap"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative text-black p-2 -mr-2 flex items-center justify-center z-20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white pt-24 px-6 overflow-y-auto transition-all duration-300 lg:hidden",
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
          aria-label="Close menu"
        >
          <X size={24} className="text-gray-900" />
        </button>

        <div className="flex flex-col space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block w-full text-left py-4 border-b border-gray-100 text-lg transition-colors duration-200",
                  isActive
                    ? "text-black font-medium"
                    : "text-gray-600 hover:text-black font-light"
                )}
              >
                {item.label}
              </Link>
            );
          })}

          <a
            href="mailto:Info.enlivo@gmail.com"
            className="w-full bg-black text-white py-4 rounded-full font-medium text-center mt-8 hover:bg-gray-900 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}