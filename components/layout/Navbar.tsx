/**
 * components/layout/Navbar.tsx
 *
 * PURPOSE: Global navigation header.
 * STYLE: Replicating "Vectura" UI (Pill buttons, clean spacing, bold logo).
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
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
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-300"
      )}
      style={{ backgroundColor: "#FFFFFF" }}
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      <nav
          className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <div className="relative flex items-center justify-between h-16 w-full">
          
          {/* --- Logo Section (Left) --- */}
          <Link
            href="/"
            className="flex items-center gap-2.5 cursor-pointer group flex-shrink-0 z-20"
            aria-label="Enlivo Technologies - Home"
            itemProp="url"
          >
            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
              <Image
                src="https://res.cloudinary.com/dqmryiyhz/image/upload/v1768460030/EnlivotechnologiesLogo_kzklhg.png"
                width={32}
                height={32}
                className="w-full h-full object-contain"
                alt="Enlivo Technologies Logo"
                priority
                itemProp="logo"
              />
            </div>
            <span
              className="text-[17px] font-semibold font-sans text-black tracking-normal whitespace-nowrap"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              itemProp="name"
            >
              Enlivo Technologies
            </span>
          </Link>

          {/* --- Desktop Navigation (Centered) --- */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8" role="menubar">
            {mainNavItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                className="text-[17px] font-[family-name:var(--font-geist-light)] font-light text-black hover:text-black transition-colors duration-200 whitespace-nowrap relative"
                  title={item.label}
                  itemProp="url"
                  role="menuitem"
                  onClick={(e) => {
                    if (pathname === "/" && item.href.startsWith("/#")) {
                      e.preventDefault();
                      const id = item.href.replace("/#", "");
                      const el = document.getElementById(id);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <span itemProp="name">{item.label}</span>
                </a>
            ))}
          </div>

          {/* --- Desktop CTA Button (Right) --- */}
          <div className="hidden lg:flex flex-shrink-0 z-20 items-center">
            <a
              href="mailto:Info.enlivo@gmail.com"
              className="bg-black text-white text-[17px] font-medium px-6 py-2.5 rounded-full hover:bg-gray-900 transition-colors duration-200 whitespace-nowrap"
              title="Talk to the Founder"
                role="menuitem"
              >
              Talk to the Founder
              </a>
          </div>

          {/* --- Mobile Menu Button --- */}
          <button
            className="lg:hidden relative text-black p-2 -mr-2 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white pt-24 px-6 overflow-y-auto transition-all duration-300 lg:hidden",
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-6 text-lg font-[family-name:var(--font-geist-light)] font-light text-gray-900">
          {mainNavItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left py-3 border-b border-gray-100 hover:text-black transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="mailto:Info.enlivo@gmail.com"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full bg-black text-white py-4 rounded-full font-medium text-center mt-6 hover:bg-gray-900 transition-colors duration-200"
          >
            Talk to the Founder
          </Link>
        </div>
      </div>
    </header>
  );
}