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
import { Menu, X, ChevronDown } from "lucide-react";
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

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const pathname = usePathname();

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

  // Check if current page is in a section
  const isCompanyActive = pathname?.startsWith("/company");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-300",
        isScrolled
          ? "bg-[#F9FAF8]/98 backdrop-blur-md border-b border-[#1a1a1a]/10"
          : "bg-[#F9FAF8] border-b border-transparent"
      )}
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      <nav
        className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <div className="flex justify-between items-center h-20">
          {/* --- Logo Section --- */}
          <Link
            href="/"
            className="flex items-center gap-3 cursor-pointer group"
            aria-label="Enlivo Technologies - Home"
            title="Enlivo Technologies - Enterprise Software Solutions"
            itemProp="url"
          >
            <div className="w-7 h-7 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/images/navbar/EnlivoLogo.png"
                width={28}
                height={28}
                className="w-full h-full object-contain"
                alt="Enlivo Technologies Logo - Digital Product Engineering Company"
                unoptimized
                itemProp="logo"
              />
            </div>
            <span
              className="text-base font-medium text-[#1a1a1a] tracking-tight"
              itemProp="name"
            >
              Enlivo Technologies
            </span>
          </Link>

          {/* --- Desktop Navigation --- */}
          <div className="hidden lg:flex items-center space-x-1" role="menubar">
            {/* 1. Services */}
            <a
              href="/#services-overview"
              className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:text-[#2563EB] hover:bg-black/5 cursor-pointer text-[#1a1a1a]"
              title="Our Services - Digital Product Engineering & Enterprise Systems"
              itemProp="url"
              role="menuitem"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  const el = document.getElementById("services-overview");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
            >
              <span itemProp="name">Services</span>
            </a>

            {/* 2. How We Work */}
            <a
              href="/#services-overview"
              className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:text-[#2563EB] hover:bg-black/5 cursor-pointer text-[#1a1a1a]"
              title="How We Work - Our development process and methodology"
              itemProp="url"
              role="menuitem"
              onClick={(e) => {
                if (pathname === "/") {
                  e.preventDefault();
                  const el = document.getElementById("services-overview");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                  }
                }
              }}
            >
              <span itemProp="name">How We Work</span>
            </a>

            {/* 3. Case Studies */}
            <Link
              href="/case-studies"
              className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:text-[#2563EB] hover:bg-black/5 text-[#1a1a1a]"
              title="Case Studies - See our successful digital transformation projects"
              itemProp="url"
              role="menuitem"
            >
              <span itemProp="name">Case Studies</span>
            </Link>

            {/* 4. Company Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-1.5 outline-none ring-0 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none group",
                    isCompanyActive
                      ? "text-[#2563EB] bg-[#2563EB]/10"
                      : "text-[#1a1a1a] hover:bg-black/5"
                  )}
                  aria-label="Company information menu"
                  aria-haspopup="true"
                  role="menuitem"
                >
                  Company
                  <ChevronDown
                    size={14}
                    className="group-data-[state=open]:rotate-180 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className="w-[220px] p-2 bg-white rounded-2xl border border-gray-100 shadow-xl shadow-black/5 mt-2 z-[110]"
                align="end"
                sideOffset={10}
                role="menu"
              >
                <div className="flex flex-col gap-1">
                  {companyItems.map((item) => (
                    <DropdownMenuItem key={item.id} asChild>
                      <Link
                        href={item.href}
                        className="block px-4 py-3 rounded-xl hover:bg-gray-50 text-[#1a1a1a] transition-colors cursor-pointer outline-none"
                        title={item.label}
                        itemProp="url"
                        role="menuitem"
                      >
                        <span
                          className="text-[15px] font-medium"
                          itemProp="name"
                        >
                          {item.label}
                        </span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 5. CTA Button */}
            <div className="pl-4">
              <Link
                href="/contact"
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-[#FFFFFF] text-sm font-medium px-6 py-2.5 rounded-full transition-colors duration-300 "
                title="Contact Us - Get in touch with our team for enterprise software solutions"
                itemProp="url"
                role="menuitem"
              >
                <span itemProp="name">Talk to Our Team</span>
              </Link>
            </div>
          </div>

          {/* --- Mobile Menu Button --- */}
          <button
            className="lg:hidden text-[#1a1a1a] p-2 hover:bg-black/5 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={
              isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
            }
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 bg-[#F9FAF8] pt-24 px-6 overflow-y-auto transition-all duration-300 lg:hidden",
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
        role="menu"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col space-y-6 text-lg font-medium text-[#1a1a1a] max-w-sm mx-auto">
          {/* Mobile Links */}
          <div className="space-y-4">
            {/* Mobile: Services */}
            <Link
              href="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left py-2 hover:opacity-70 transition-opacity"
              title="Services"
              role="menuitem"
            >
              Services
            </Link>

            {/* Mobile: Standard Links */}
            <Link
              href="/insights"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left py-2 hover:opacity-70 transition-opacity"
              title="How We Work - Our development process"
              role="menuitem"
            >
              How We Work
            </Link>
            <Link
              href="/case-studies"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left py-2 hover:opacity-70 transition-opacity"
              title="Case Studies - Our successful projects"
              role="menuitem"
            >
              Case Studies
            </Link>

            {/* Mobile: Company Dropdown */}
            <div className="border-t border-black/5 pt-4">
              <button
                onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                className="w-full flex items-center justify-between group py-2"
                aria-expanded={mobileCompanyOpen}
                aria-controls="mobile-company-menu"
              >
                <span className={mobileCompanyOpen ? "text-[#2563EB]" : ""}>
                  Company
                </span>
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    mobileCompanyOpen
                      ? "rotate-180 text-[#2563EB]"
                      : "text-gray-400"
                  }`}
                  aria-hidden="true"
                />
              </button>
              {mobileCompanyOpen && (
                <div
                  id="mobile-company-menu"
                  className="ml-2 mt-2 space-y-2 border-l-2 border-[#2563EB]/20 pl-4"
                >
                  {companyItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-left p-2 rounded-lg hover:bg-white/50 transition-colors"
                      title={item.label}
                      role="menuitem"
                    >
                      <div className="font-medium text-base text-gray-800 hover:opacity-70 transition-opacity">
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile: CTA */}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-[#FFFFFF] py-3.5 rounded-xl font-semibold mt-4 transition-colors duration-300 shadow-lg shadow-blue-500/20 text-center block"
            title="Contact Us - Get in touch with our team"
            role="menuitem"
          >
            Talk to Our Team
          </Link>
        </div>
      </div>
    </header>
  );
}
