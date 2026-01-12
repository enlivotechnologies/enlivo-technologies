/**
 * components/layout/Navbar.tsx
 *
 * PURPOSE: Global navigation header.
 * WHY: Consistent navigation across all pages.
 *
 * SEO NOTES:
 * - Semantic <header> and <nav> elements for proper document structure
 * - Schema.org SiteNavigationElement for rich snippets
 * - Proper aria-labels for accessibility
 * - Descriptive link titles for better crawlability
 * - Internal linking structure helps distribute page authority
 */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
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
  desc: string;
  href: string;
}

// DATA: What We Do (Services) - Internal linking for service pages
const whatWeDoItems: NavItem[] = [
  {
    id: "digital",
    label: "Digital Platforms",
    desc: "Design and engineering of scalable web and mobile products",
    href: "/services/product-engineering",
  },
  {
    id: "enterprise",
    label: "Enterprise Systems",
    desc: "Internal platforms, integrations, and mission-critical systems",
    href: "/services/enterprise-systems",
  },
  {
    id: "ai",
    label: "AI & Automation",
    desc: "Intelligent workflows, data platforms, and operational efficiency",
    href: "/services/ai-automation",
  },
];

// DATA: Company (Internal Info) - Internal linking for company pages
const companyItems: NavItem[] = [
  {
    id: "aboutus",
    label: "About Enlivo",
    desc: "Our mission, vision, and core values",
    href: "/company/about",
  },
  {
    id: "careers",
    label: "Careers",
    desc: "Join our growing team of innovators",
    href: "/company/careers",
  },
  {
    id: "internship",
    label: "Internships",
    desc: "Start your professional journey with us",
    href: "/company/internships",
  },
  {
    id: "launchpad",
    label: "IT Launchpad",
    desc: "Our exclusive tech acceleration program",
    href: "/company/launchpad",
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileWhatWeDoOpen, setMobileWhatWeDoOpen] = useState(false);
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
  const isServicesActive = pathname?.startsWith("/services");
  const isCompanyActive = pathname?.startsWith("/company");

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-300",
        isScrolled
          ? "bg-[#F5F5F0]/98 backdrop-blur-md border-b border-[#1a1a1a]/10"
          : "bg-[#F5F5F0] border-b border-transparent"
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
            <div className="w-9 h-9 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src="/images/navbar/EnlivoLogo-overlay.png"
                width={36}
                height={36}
                className="w-full h-full object-contain"
                alt="Enlivo Technologies Logo - Digital Product Engineering Company"
                unoptimized
                itemProp="logo"
              />
            </div>
            <span
              className="text-xl font-medium text-[#1a1a1a] tracking-tight"
              itemProp="name"
            >
              Enlivo Technologies
            </span>
          </Link>

          {/* --- Desktop Navigation --- */}
          <div className="hidden lg:flex items-center space-x-1" role="menubar">
            {/* 1. What We Do Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 flex items-center gap-1.5 outline-none ring-0 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none group",
                    isServicesActive
                      ? "text-[#2563EB] bg-[#2563EB]/10"
                      : "text-[#1a1a1a] hover:bg-black/5"
                  )}
                  aria-label="Services menu - View our digital product engineering services"
                  aria-haspopup="true"
                  role="menuitem"
                >
                  What We Do
                  <ChevronDown
                    size={14}
                    className="group-data-[state=open]:rotate-180 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className="w-[340px] p-2 bg-[#F5F5F0] rounded-xl border border-[#1a1a1a]/10 shadow-xl shadow-[#1a1a1a]/5 mt-2 z-[110]"
                align="start"
                sideOffset={8}
                role="menu"
              >
                {whatWeDoItems.map((item, index) => (
                  <div key={item.id}>
                    <DropdownMenuItem asChild>
                      <Link
                        href={item.href}
                        className="group flex flex-col items-start gap-1 p-3 rounded-lg cursor-pointer focus:bg-white hover:bg-white outline-none transition-all duration-200 shadow-sm hover:shadow-sm border border-transparent hover:border-[#1a1a1a]/5"
                        title={`${item.label} - ${item.desc}`}
                        itemProp="url"
                        role="menuitem"
                      >
                        <div className="flex items-center justify-between w-full">
                          <span
                            className="font-medium text-[#1a1a1a] text-sm transition-colors"
                            itemProp="name"
                          >
                            {item.label}
                          </span>
                          <ArrowRight
                            size={14}
                            className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#1a1a1a]"
                            aria-hidden="true"
                          />
                        </div>
                        <span
                          className="text-xs text-[#4a4a4a] font-normal leading-relaxed"
                          itemProp="description"
                        >
                          {item.desc}
                        </span>
                      </Link>
                    </DropdownMenuItem>

                    {/* Separator Line */}
                    {index < whatWeDoItems.length - 1 && (
                      <div
                        className="h-[1px] bg-gradient-to-r from-transparent via-[#1a1a1a]/10 to-transparent mx-4 my-1"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 2. Standard Links */}
            <Link
              href="/insights"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:bg-black/5",
                pathname === "/insights" ? "text-[#2563EB]" : "text-[#1a1a1a]"
              )}
              title="How We Work - Our development process and methodology"
              itemProp="url"
              role="menuitem"
            >
              <span itemProp="name">How We Work</span>
            </Link>
            <Link
              href="/case-studies"
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:bg-black/5",
                pathname?.startsWith("/case-studies")
                  ? "text-[#2563EB]"
                  : "text-[#1a1a1a]"
              )}
              title="Case Studies - See our successful digital transformation projects"
              itemProp="url"
              role="menuitem"
            >
              <span itemProp="name">Case Studies</span>
            </Link>

            {/* 3. Company Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 flex items-center gap-1.5 outline-none ring-0 focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:outline-none group",
                    isCompanyActive
                      ? "text-[#2563EB] bg-[#2563EB]/10"
                      : "text-[#1a1a1a] hover:bg-black/5"
                  )}
                  aria-label="Company information menu - About us, careers, and more"
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
                className="w-[280px] p-2 bg-[#F5F5F0] rounded-xl border border-[#1a1a1a]/10 shadow-xl shadow-[#1a1a1a]/5 mt-2 z-[110]"
                align="end"
                sideOffset={10}
                role="menu"
              >
                {companyItems.map((item, index) => (
                  <div key={item.id}>
                    <DropdownMenuItem asChild>
                      <Link
                        href={item.href}
                        className="group flex flex-col items-start gap-1 p-3 rounded-lg cursor-pointer focus:bg-white hover:bg-white outline-none transition-all duration-200 shadow-sm hover:shadow-sm border border-transparent hover:border-[#1a1a1a]/5"
                        title={`${item.label} - ${item.desc}`}
                        itemProp="url"
                        role="menuitem"
                      >
                        <div className="flex items-center justify-between w-full">
                          <span
                            className="font-medium text-[#1a1a1a] text-sm transition-colors"
                            itemProp="name"
                          >
                            {item.label}
                          </span>
                          <ArrowRight
                            size={14}
                            className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#1a1a1a]"
                            aria-hidden="true"
                          />
                        </div>
                        <span
                          className="text-xs text-[#4a4a4a] font-normal leading-relaxed"
                          itemProp="description"
                        >
                          {item.desc}
                        </span>
                      </Link>
                    </DropdownMenuItem>

                    {/* Separator Line */}
                    {index < companyItems.length - 1 && (
                      <div
                        className="h-[1px] bg-gradient-to-r from-transparent via-[#1a1a1a]/10 to-transparent mx-4 my-1"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* 4. CTA Button */}
            <div className="pl-4">
              <Link
                href="/contact"
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-[#FFFFFF] text-sm font-semibold px-6 py-2.5 rounded-full transition-colors duration-300 shadow-lg shadow-blue-500/20"
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
          "fixed inset-0 z-40 bg-[#F5F5F0] pt-24 px-6 overflow-y-auto transition-all duration-300 lg:hidden",
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
        role="menu"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col space-y-6 text-lg font-medium text-[#1a1a1a] max-w-sm mx-auto">
          {/* Mobile Accordions */}
          <div className="space-y-4">
            {/* Mobile: What We Do */}
            <div className="border-b border-black/5 pb-4">
              <button
                onClick={() => setMobileWhatWeDoOpen(!mobileWhatWeDoOpen)}
                className="w-full flex items-center justify-between group"
                aria-expanded={mobileWhatWeDoOpen}
                aria-controls="mobile-services-menu"
              >
                <span className={mobileWhatWeDoOpen ? "text-[#2563EB]" : ""}>
                  What We Do
                </span>
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    mobileWhatWeDoOpen
                      ? "rotate-180 text-[#2563EB]"
                      : "text-gray-400"
                  }`}
                  aria-hidden="true"
                />
              </button>

              <div
                id="mobile-services-menu"
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  mobileWhatWeDoOpen
                    ? "grid-rows-[1fr] mt-4"
                    : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden space-y-3">
                  {whatWeDoItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full text-left p-3 rounded-xl bg-white/50 hover:bg-white transition-colors"
                      title={`${item.label} - ${item.desc}`}
                      role="menuitem"
                    >
                      <div className="font-semibold text-base text-[#1a1a1a]">
                        {item.label}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

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

            {/* Mobile: Company */}
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
                      title={`${item.label} - ${item.desc}`}
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
