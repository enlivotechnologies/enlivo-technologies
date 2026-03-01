/**
 * components/sections/SupportForm.tsx
 *
 * PURPOSE: Premium support contact form component.
 * WHY: Client-side form handling for support inquiries.
 *
 * DESIGN:
 * - Clean floating-label-style inputs with subtle borders
 * - Custom country code dropdown with search
 * - Smooth transitions and focus states
 * - Success state with check animation
 */

"use client";

import { useState, useRef, useEffect } from "react";
import { CheckCircle, ChevronDown, Search } from "lucide-react";

// Country list with codes
const COUNTRIES = [
  { name: "United States", code: "+1", flag: "\u{1F1FA}\u{1F1F8}" },
  { name: "United Kingdom", code: "+44", flag: "\u{1F1EC}\u{1F1E7}" },
  { name: "Canada", code: "+1", flag: "\u{1F1E8}\u{1F1E6}" },
  { name: "India", code: "+91", flag: "\u{1F1EE}\u{1F1F3}" },
  { name: "China", code: "+86", flag: "\u{1F1E8}\u{1F1F3}" },
  { name: "Japan", code: "+81", flag: "\u{1F1EF}\u{1F1F5}" },
  { name: "Australia", code: "+61", flag: "\u{1F1E6}\u{1F1FA}" },
  { name: "Germany", code: "+49", flag: "\u{1F1E9}\u{1F1EA}" },
  { name: "France", code: "+33", flag: "\u{1F1EB}\u{1F1F7}" },
  { name: "Italy", code: "+39", flag: "\u{1F1EE}\u{1F1F9}" },
  { name: "Spain", code: "+34", flag: "\u{1F1EA}\u{1F1F8}" },
  { name: "Brazil", code: "+55", flag: "\u{1F1E7}\u{1F1F7}" },
  { name: "Mexico", code: "+52", flag: "\u{1F1F2}\u{1F1FD}" },
  { name: "Russia", code: "+7", flag: "\u{1F1F7}\u{1F1FA}" },
  { name: "South Korea", code: "+82", flag: "\u{1F1F0}\u{1F1F7}" },
  { name: "Netherlands", code: "+31", flag: "\u{1F1F3}\u{1F1F1}" },
  { name: "Sweden", code: "+46", flag: "\u{1F1F8}\u{1F1EA}" },
  { name: "Switzerland", code: "+41", flag: "\u{1F1E8}\u{1F1ED}" },
  { name: "Belgium", code: "+32", flag: "\u{1F1E7}\u{1F1EA}" },
  { name: "Austria", code: "+43", flag: "\u{1F1E6}\u{1F1F9}" },
  { name: "Poland", code: "+48", flag: "\u{1F1F5}\u{1F1F1}" },
  { name: "Denmark", code: "+45", flag: "\u{1F1E9}\u{1F1F0}" },
  { name: "Norway", code: "+47", flag: "\u{1F1F3}\u{1F1F4}" },
  { name: "Finland", code: "+358", flag: "\u{1F1EB}\u{1F1EE}" },
  { name: "Ireland", code: "+353", flag: "\u{1F1EE}\u{1F1EA}" },
  { name: "Portugal", code: "+351", flag: "\u{1F1F5}\u{1F1F9}" },
  { name: "Greece", code: "+30", flag: "\u{1F1EC}\u{1F1F7}" },
  { name: "Turkey", code: "+90", flag: "\u{1F1F9}\u{1F1F7}" },
  { name: "Saudi Arabia", code: "+966", flag: "\u{1F1F8}\u{1F1E6}" },
  { name: "United Arab Emirates", code: "+971", flag: "\u{1F1E6}\u{1F1EA}" },
  { name: "Singapore", code: "+65", flag: "\u{1F1F8}\u{1F1EC}" },
  { name: "Malaysia", code: "+60", flag: "\u{1F1F2}\u{1F1FE}" },
  { name: "Thailand", code: "+66", flag: "\u{1F1F9}\u{1F1ED}" },
  { name: "Indonesia", code: "+62", flag: "\u{1F1EE}\u{1F1E9}" },
  { name: "Philippines", code: "+63", flag: "\u{1F1F5}\u{1F1ED}" },
  { name: "Vietnam", code: "+84", flag: "\u{1F1FB}\u{1F1F3}" },
  { name: "New Zealand", code: "+64", flag: "\u{1F1F3}\u{1F1FF}" },
  { name: "South Africa", code: "+27", flag: "\u{1F1FF}\u{1F1E6}" },
  { name: "Egypt", code: "+20", flag: "\u{1F1EA}\u{1F1EC}" },
  { name: "Israel", code: "+972", flag: "\u{1F1EE}\u{1F1F1}" },
  { name: "Argentina", code: "+54", flag: "\u{1F1E6}\u{1F1F7}" },
  { name: "Chile", code: "+56", flag: "\u{1F1E8}\u{1F1F1}" },
  { name: "Colombia", code: "+57", flag: "\u{1F1E8}\u{1F1F4}" },
  { name: "Peru", code: "+51", flag: "\u{1F1F5}\u{1F1EA}" },
  { name: "Venezuela", code: "+58", flag: "\u{1F1FB}\u{1F1EA}" },
  { name: "Pakistan", code: "+92", flag: "\u{1F1F5}\u{1F1F0}" },
  { name: "Bangladesh", code: "+880", flag: "\u{1F1E7}\u{1F1E9}" },
  { name: "Afghanistan", code: "+93", flag: "\u{1F1E6}\u{1F1EB}" },
  { name: "Albania", code: "+355", flag: "\u{1F1E6}\u{1F1F1}" },
  { name: "Algeria", code: "+213", flag: "\u{1F1E9}\u{1F1FF}" },
];

export function SupportForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter countries based on search term
  const filteredCountries = COUNTRIES.filter(
    (country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.code.includes(searchTerm)
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setSearchTerm("");
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleCountrySelect = (country: (typeof COUNTRIES)[0]) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    setSearchTerm("");
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);

      // Prepare form data
      const data = {
        fullName: formData.get("fullName") as string,
        email: formData.get("email") as string,
        companyName: (formData.get("companyName") as string) || undefined,
        phoneNumber: (formData.get("phoneNumber") as string) || undefined,
        countryCode: (formData.get("countryCode") as string) || undefined,
        message: formData.get("message") as string,
      };

      // Send to API
      const response = await fetch("/api/contact/support", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  // ── Success State ──
  if (isSubmitted) {
    return (
      <div className="py-16 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-emerald-500" strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-medium text-black tracking-tight mb-2">
          Inquiry submitted
        </h3>
        <p className="text-[15px] text-black/50 max-w-sm leading-relaxed">
          Thank you for reaching out. Our team will review your message and get
          back to you within 4 hours.
        </p>
      </div>
    );
  }

  // ── Form ──
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name + Email Row */}
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-[13px] font-medium text-black/70 mb-2"
          >
            Full name <span className="text-black/30">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            className="w-full px-4 py-3.5 bg-black/[0.02] border border-black/[0.08] rounded-xl text-[15px] text-black placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/15 focus:bg-white transition-all duration-200"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-[13px] font-medium text-black/70 mb-2"
          >
            Email <span className="text-black/30">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3.5 bg-black/[0.02] border border-black/[0.08] rounded-xl text-[15px] text-black placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/15 focus:bg-white transition-all duration-200"
            placeholder="john@company.com"
          />
        </div>
      </div>

      {/* Company Name */}
      <div>
        <label
          htmlFor="companyName"
          className="block text-[13px] font-medium text-black/70 mb-2"
        >
          Company name
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          className="w-full px-4 py-3.5 bg-black/[0.02] border border-black/[0.08] rounded-xl text-[15px] text-black placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/15 focus:bg-white transition-all duration-200"
          placeholder="Your company name"
        />
      </div>

      {/* Phone Number */}
      <div>
        <label
          htmlFor="phoneNumber"
          className="block text-[13px] font-medium text-black/70 mb-2"
        >
          Phone number
        </label>
        <div className="flex gap-3">
          {/* Country Code Dropdown */}
          <div className="relative flex-shrink-0" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-4 py-3.5 bg-black/[0.02] border border-black/[0.08] rounded-xl text-[15px] text-black cursor-pointer min-w-[110px] hover:border-black/15 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/15 transition-all duration-200"
            >
              <span className="text-base">{selectedCountry.flag}</span>
              <span>{selectedCountry.code}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-black/35 ml-auto transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                strokeWidth={2}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-[300px] bg-white border border-black/[0.08] rounded-xl shadow-lg shadow-black/[0.08] z-50 max-h-[380px] flex flex-col overflow-hidden">
                {/* Search */}
                <div className="p-3 border-b border-black/[0.06]">
                  <div className="relative">
                    <Search
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-black/30"
                      strokeWidth={2}
                    />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search countries..."
                      className="w-full pl-9 pr-3 py-2.5 bg-black/[0.03] border border-black/[0.06] rounded-lg text-sm text-black placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/15 transition-all"
                      autoFocus
                    />
                  </div>
                </div>

                {/* Country List */}
                <div className="overflow-y-auto max-h-[300px]">
                  {filteredCountries.length > 0 ? (
                    filteredCountries.map((country) => (
                      <button
                        key={`${country.code}-${country.name}`}
                        type="button"
                        onClick={() => handleCountrySelect(country)}
                        className={`w-full px-4 py-2.5 text-left text-sm hover:bg-black/[0.03] transition-colors flex items-center justify-between ${
                          selectedCountry.code === country.code &&
                          selectedCountry.name === country.name
                            ? "bg-black/[0.04] font-medium"
                            : ""
                        }`}
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-base">{country.flag}</span>
                          <span className="text-black/70">{country.name}</span>
                        </span>
                        <span className="text-black/40 text-xs tabular-nums">
                          {country.code}
                        </span>
                      </button>
                    ))
                  ) : (
                    <div className="px-4 py-6 text-sm text-black/35 text-center">
                      No countries found
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Phone Input */}
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="flex-1 px-4 py-3.5 bg-black/[0.02] border border-black/[0.08] rounded-xl text-[15px] text-black placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/15 focus:bg-white transition-all duration-200"
            placeholder="(XXX) XXX-XXXX"
          />
          <input
            type="hidden"
            name="countryCode"
            value={selectedCountry.code}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-[13px] font-medium text-black/70 mb-2"
        >
          How can we help? <span className="text-black/30">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3.5 bg-black/[0.02] border border-black/[0.08] rounded-xl text-[15px] text-black placeholder:text-black/30 resize-none focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/15 focus:bg-white transition-all duration-200"
          placeholder="Describe your issue or question in detail..."
        />
      </div>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-black text-white rounded-xl font-medium text-[15px] hover:bg-black/90 active:scale-[0.99] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {isSubmitting ? (
            <span className="inline-flex items-center gap-2">
              <svg
                className="w-4 h-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Sending...
            </span>
          ) : (
            "Send inquiry"
          )}
        </button>

        <p className="text-center text-xs text-black/30 mt-4">
          By submitting, you agree to our{" "}
          <a href="/privacy" className="underline hover:text-black/50 transition-colors">
            Privacy Policy
          </a>
          . We&apos;ll never spam you.
        </p>
      </div>
    </form>
  );
}
