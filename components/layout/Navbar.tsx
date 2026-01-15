/**
 * components/layout/Navbar.tsx
 *
 * PURPOSE: Global navigation header.
 * WHY: Consistent navigation across all pages.
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

// Type definitions
interface NavItem {
  id: string;
  label: string;
  href: string;
}

// DATA: Company (Internal Info) - Removed IT Launchpad
const companyItems: NavItem[] = [
  {
    id: "aboutus",
    label: "About Enlivo",
    href: "/company/about",
  },
  {
    id: "careers",
    label: "Careers",
    href: "/company/careers",
  },
  {
    id: "internship",
    label: "Internships",
    href: "/company/internships",
  },
];

// Main navigation items
const mainNavItems: NavItem[] = [
  {
    id: "services",
    label: "Services",
    href: "/#services-overview",
  },
  {
    id: "process",
    label: "How it works",
    href: "/#our-process",
  },
  {
    id: "about",
    label: "About Enlivo",
    href: "/company/about",
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  // Set mounted state to prevent hydration issues
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);


  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500",
        isScrolled
          ? "bg-black/80 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-black/50"
          : "bg-black/70 backdrop-blur-xl border-b border-white/5"
      )}
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      {/* Premium glassmorphism gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/70 pointer-events-none" />
      <nav
        className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <div className="flex justify-between items-center h-20">
          {/* --- Logo Section --- */}
          <Link
            href="/"
            className="flex items-center gap-2.5 cursor-pointer group"
            aria-label="Enlivo Technologies - Home"
            title="Enlivo Technologies - Enterprise Software Solutions"
            itemProp="url"
          >
            <div className="w-8 h-8 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <Image
                src="https://res.cloudinary.com/dqmryiyhz/image/upload/v1768460030/EnlivotechnologiesLogo_kzklhg.png"
                width={32}
                height={32}
                className="w-full h-full object-contain"
                alt="Envilo Global Tech Solutions Logo"
                priority
                itemProp="logo"
              />
            </div>
            <span
              className="text-lg font-bold text-white/80 tracking-tight group-hover:text-[#F5B301] transition-colors duration-300"
              itemProp="name"
            >
              Enlivo Technologies
            </span>
          </Link>

          {/* --- Desktop Navigation --- */}
          <div className="hidden lg:flex items-center gap-1" role="menubar">
            {/* Main Navigation Links */}
            {mainNavItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:text-[#F5B301] cursor-pointer text-white/70 hover:text-white/90 group/nav"
                title={item.label}
                itemProp="url"
                role="menuitem"
                onClick={(e) => {
                  if (pathname === "/" && item.href.startsWith("/#")) {
                    e.preventDefault();
                    const id = item.href.replace("/#", "");
                    const el = document.getElementById(id);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
              >
                <span className="relative z-10" itemProp="name">{item.label}</span>
              </a>
            ))}

            {/* Golden CTA Button */}
            <div className="ml-6">
              <a
                href="mailto:enlivotechnologies@gmail.com"
                className="relative group/cta bg-gradient-to-r from-[#FFA500] via-[#FFB733] to-[#FFA500] hover:from-[#FFB733] hover:via-[#FFA500] hover:to-[#FFB733] text-[#0F172A] text-sm font-bold px-6 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-[#FFA500]/40 hover:shadow-xl hover:shadow-[#FFA500]/50 hover:scale-105 active:scale-95 overflow-hidden"
                title="Talk to the Founder"
                itemProp="email"
                role="menuitem"
              >
                {/* Animated gradient overlay */}
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#FFA500] via-[#FFD700] to-[#FFA500] opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500" />
                
                <span className="relative z-10" itemProp="name">Talk to the Founder</span>
              </a>
            </div>
          </div>

          {/* --- Mobile Menu Button --- */}
          <button
            className="lg:hidden relative text-white/80 p-2 rounded-full transition-all duration-300 hover:text-white group/mobile"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={
              isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="relative z-10">
              {isMobileMenuOpen ? (
                <X size={24} aria-hidden="true" className="transition-transform duration-300 rotate-90" />
              ) : (
                <Menu size={24} aria-hidden="true" className="transition-transform duration-300" />
              )}
            </span>
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 bg-black backdrop-blur-2xl pt-24 px-6 overflow-y-auto transition-all duration-500 lg:hidden",
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
        role="menu"
        aria-label="Mobile navigation menu"
      >
        <div className="relative z-10 flex flex-col space-y-6 text-lg font-medium text-white/80 max-w-sm mx-auto">
          {/* Mobile Links */}
          <div className="space-y-4">
            {mainNavItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left py-2 hover:text-[#F5B301] text-white/80 hover:text-white transition-colors"
                title={item.label}
                role="menuitem"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile: CTA */}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative group/cta-mobile w-full bg-gradient-to-r from-[#FFA500] via-[#FFB733] to-[#FFA500] hover:from-[#FFB733] hover:via-[#FFA500] hover:to-[#FFB733] text-[#0F172A] py-3.5 rounded-xl font-bold mt-4 transition-all duration-300 shadow-lg shadow-[#FFA500]/40 hover:shadow-xl hover:shadow-[#FFA500]/50 text-center block overflow-hidden"
            title="Talk to the Founder"
            role="menuitem"
          >
            {/* Animated gradient overlay */}
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FFA500] via-[#FFD700] to-[#FFA500] opacity-0 group-hover/cta-mobile:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">Talk to the Founder</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
