"use client";

import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

// Country list with codes
const COUNTRIES = [
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "China", code: "+86", flag: "🇨🇳" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Italy", code: "+39", flag: "🇮🇹" },
  { name: "Spain", code: "+34", flag: "🇪🇸" },
  { name: "Brazil", code: "+55", flag: "🇧🇷" },
  { name: "Mexico", code: "+52", flag: "🇲🇽" },
  { name: "Russia", code: "+7", flag: "🇷🇺" },
  { name: "South Korea", code: "+82", flag: "🇰🇷" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱" },
  { name: "Sweden", code: "+46", flag: "🇸🇪" },
  { name: "Switzerland", code: "+41", flag: "🇨🇭" },
  { name: "Belgium", code: "+32", flag: "🇧🇪" },
  { name: "Austria", code: "+43", flag: "🇦🇹" },
  { name: "Poland", code: "+48", flag: "🇵🇱" },
  { name: "Denmark", code: "+45", flag: "🇩🇰" },
  { name: "Norway", code: "+47", flag: "🇳🇴" },
  { name: "Finland", code: "+358", flag: "🇫🇮" },
  { name: "Ireland", code: "+353", flag: "🇮🇪" },
  { name: "Portugal", code: "+351", flag: "🇵🇹" },
  { name: "Greece", code: "+30", flag: "🇬🇷" },
  { name: "Turkey", code: "+90", flag: "🇹🇷" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾" },
  { name: "Thailand", code: "+66", flag: "🇹🇭" },
  { name: "Indonesia", code: "+62", flag: "🇮🇩" },
  { name: "Philippines", code: "+63", flag: "🇵🇭" },
  { name: "Vietnam", code: "+84", flag: "🇻🇳" },
  { name: "New Zealand", code: "+64", flag: "🇳🇿" },
  { name: "South Africa", code: "+27", flag: "🇿🇦" },
  { name: "Egypt", code: "+20", flag: "🇪🇬" },
  { name: "Israel", code: "+972", flag: "🇮🇱" },
  { name: "Argentina", code: "+54", flag: "🇦🇷" },
  { name: "Chile", code: "+56", flag: "🇨🇱" },
  { name: "Colombia", code: "+57", flag: "🇨🇴" },
  { name: "Peru", code: "+51", flag: "🇵🇪" },
  { name: "Venezuela", code: "+58", flag: "🇻🇪" },
  { name: "Pakistan", code: "+92", flag: "🇵🇰" },
  { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
  { name: "Afghanistan", code: "+93", flag: "🇦🇫" },
  { name: "Albania", code: "+355", flag: "🇦🇱" },
  { name: "Algeria", code: "+213", flag: "🇩🇿" },
];

interface JobApplicationFormProps {
  jobTitle: string;
  onClose: () => void;
}

export function JobApplicationForm({ jobTitle, onClose }: JobApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES.find(c => c.name === "India") || COUNTRIES[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Filter countries based on search term
  const filteredCountries = COUNTRIES.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.code.includes(searchTerm)
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleCountrySelect = (country: typeof COUNTRIES[0]) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    setSearchTerm("");
  };

  const handleFileSelect = (file: File) => {
    if (file.size > 50 * 1024 * 1024) {
      alert("File size must be less than 50MB");
      return;
    }
    const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png"];
    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a PDF, DOC, DOCX, JPEG, or PNG file");
      return;
    }
    setResumeFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      // Prepare form data
      const data = {
        jobTitle,
        fullName: formData.get("fullName") as string,
        email: formData.get("email") as string,
        phoneNumber: formData.get("phoneNumber") as string || undefined,
        countryCode: formData.get("countryCode") as string || undefined,
        resumeFile: resumeFile ? resumeFile.name : undefined,
        // Add all other form fields
        managerExperience: formData.get("managerExperience") as string || undefined,
        dotnetVersionExperience: formData.get("dotnetVersionExperience") as string || undefined,
        willingToRelocate: formData.get("willingToRelocate") as string || undefined,
        noticePeriod: formData.get("noticePeriod") as string || undefined,
        noticePeriodNegotiable: formData.get("noticePeriodNegotiable") as string || undefined,
        productCompanyExperience: formData.get("productCompanyExperience") as string || undefined,
        dotnet8910Experience: formData.get("dotnet8910Experience") as string || undefined,
        indiaCitizen: formData.get("indiaCitizen") as string || undefined,
        currentCTCRange: formData.get("currentCTCRange") as string || undefined,
        currentCTCBreakup: formData.get("currentCTCBreakup") as string || undefined,
        expectedCTC: formData.get("expectedCTC") as string || undefined,
        linkedinProfile: formData.get("linkedinProfile") as string || undefined,
        proudProject: formData.get("proudProject") as string || undefined,
        jobOffers: formData.get("jobOffers") as string || undefined,
        foundJobOpportunity: formData.get("foundJobOpportunity") as string || undefined,
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
        throw new Error("Failed to submit application");
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-2xl p-12 max-w-md w-full mx-4 shadow-2xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">Application Submitted!</h3>
            <p className="text-[#666] mb-6">Thank you for your application. We&apos;ll review it and get back to you soon.</p>
            <button
              onClick={onClose}
              className="w-full bg-[#1A1A1A] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#000000] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl my-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-[#E5E5E0] px-8 py-6 flex items-center justify-between z-10">
          <div>
            <h2 className="text-2xl font-bold text-[#1a1a1a] mb-1">Application Form</h2>
            <p className="text-sm text-[#666]">Apply for {jobTitle}</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-[#666]" />
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-8 space-y-12">
          {/* My Information Section */}
          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">My information</h3>
            <p className="text-sm text-[#666] mb-6">Fill out the information below</p>
            
            <div className="space-y-5">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                  Full name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  className="w-full px-4 py-3 border border-[#E5E5E0] rounded-lg focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent transition-all text-base"
                  placeholder="Full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                  Email address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-[#E5E5E0] rounded-lg focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent transition-all text-base"
                  placeholder="Your email address"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-[#1a1a1a] mb-2">
                  Phone number *
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-shrink-0" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="flex items-center gap-2 px-4 py-3 pr-8 border border-[#E5E5E0] rounded-lg focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent transition-all text-base bg-white cursor-pointer min-w-[120px] hover:border-[#1A1A1A]"
                    >
                      <span>{selectedCountry.flag}</span>
                      <span className="text-sm">{selectedCountry.code}</span>
                      <svg
                        className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666] pointer-events-none transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-[300px] bg-white border border-[#E5E5E0] rounded-lg shadow-lg z-50 max-h-[400px] flex flex-col">
                        <div className="p-3 border-b border-[#E5E5E0]">
                          <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Search countries..."
                            className="w-full px-3 py-2 border border-[#E5E5E0] rounded-md text-sm focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent"
                            autoFocus
                          />
                        </div>
                        <div className="overflow-y-auto max-h-[320px]">
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                              <button
                                key={`${country.code}-${country.name}`}
                                type="button"
                                onClick={() => handleCountrySelect(country)}
                                className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors flex items-center justify-between ${
                                  selectedCountry.code === country.code && selectedCountry.name === country.name
                                    ? "bg-gray-100"
                                    : ""
                                }`}
                              >
                                <span className="flex items-center gap-2">
                                  <span>{country.flag}</span>
                                  <span>{country.name}</span>
                                </span>
                                <span className="text-[#666]">{country.code}</span>
                              </button>
                            ))
                          ) : (
                            <div className="px-4 py-3 text-sm text-[#666] text-center">No countries found</div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    className="flex-1 px-4 py-3 border border-[#E5E5E0] rounded-lg focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent transition-all text-base"
                    placeholder={selectedCountry.code}
                  />
                  <input type="hidden" name="countryCode" value={selectedCountry.code} />
                </div>
              </div>

              {/* CV/Resume Upload */}
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                  CV or resume *
                </label>
                <p className="text-xs text-[#666] mb-3">Upload your CV or resume file</p>
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
                    isDragging
                      ? "border-[#1A1A1A] bg-gray-50"
                      : "border-[#E5E5E0] hover:border-[#1A1A1A] hover:bg-gray-50"
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".pdf,.doc,.docx,.jpeg,.jpg,.png"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleFileSelect(file);
                    }}
                    className="hidden"
                  />
                  {resumeFile ? (
                    <div>
                      <p className="text-sm font-medium text-[#1a1a1a] mb-1">✓ {resumeFile.name}</p>
                      <p className="text-xs text-[#666]">Click to change file</p>
                    </div>
                  ) : (
                    <div>
                      <p className="text-sm font-medium text-[#1a1a1a] mb-1">
                        <span className="font-bold">Upload a file</span> or drag and drop here
                      </p>
                      <p className="text-xs text-[#666] mt-2">
                        Accepted files: PDF, DOC, DOCX, JPEG and PNG up to 50MB.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Questions Section */}
          <div>
            <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Questions</h3>
            <p className="text-sm text-[#666] mb-6">Please fill in additional questions</p>
            
            <div className="space-y-6">
              {/* Manager Experience */}
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-3">
                  How many years of experience do you have as a manager? *
                </label>
                <input
                  type="text"
                  name="managerExperience"
                  required
                  className="w-full px-4 py-3 border border-[#E5E5E0] rounded-lg focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent transition-all text-base"
                  placeholder="Enter years of experience"
                />
              </div>

              {/* DotNet Version Experience */}
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-3">
                  Do you have hands-on experience with DotNet version 9.0 and above? *
                </label>
                <div className="space-y-2">
                  {["Yes", "No"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="dotnetVersionExperience"
                        value={option}
                        required
                        className="w-4 h-4 text-[#1A1A1A] focus:ring-[#1A1A1A]"
                      />
                      <span className="text-base text-[#1a1a1a]">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Willing to Relocate */}
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-3">
                  Are you willing to relocate to Pune? *
                </label>
                <div className="space-y-2">
                  {["Yes", "No"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="willingToRelocate"
                        value={option}
                        required
                        className="w-4 h-4 text-[#1A1A1A] focus:ring-[#1A1A1A]"
                      />
                      <span className="text-base text-[#1a1a1a]">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Notice Period */}
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-3">
                  What is your notice period? (We are looking for candidates who can join within 30 days) *
                </label>
                <div className="space-y-2">
                  {["0 - 15 days", "15 - 30 days", "30 - 45 days", "45 - 60 days", "60 - 75 days", "75 - 90 days"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="noticePeriod"
                        value={option}
                        required
                        className="w-4 h-4 text-[#1A1A1A] focus:ring-[#1A1A1A]"
                      />
                      <span className="text-base text-[#1a1a1a]">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Notice Period Negotiable */}
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-3">
                  Is your notice period negotiable? *
                </label>
                <div className="space-y-2">
                  {["Yes", "No"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="noticePeriodNegotiable"
                        value={option}
                        required
                        className="w-4 h-4 text-[#1A1A1A] focus:ring-[#1A1A1A]"
                      />
                      <span className="text-base text-[#1a1a1a]">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Product Company Experience */}
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-3">
                  Do you have experience working at a product-based company? *
                </label>
                <div className="space-y-2">
                  {["Yes", "No"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="productCompanyExperience"
                        value={option}
                        required
                        className="w-4 h-4 text-[#1A1A1A] focus:ring-[#1A1A1A]"
                      />
                      <span className="text-base text-[#1a1a1a]">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* DotNet 8/9/10 Experience */}
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-3">
                  Do you have experience working with DotNet 8/9/10 *
                </label>
                <div className="space-y-2">
                  {["Yes", "No"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="dotnet8910Experience"
                        value={option}
                        required
                        className="w-4 h-4 text-[#1A1A1A] focus:ring-[#1A1A1A]"
                      />
                      <span className="text-base text-[#1a1a1a]">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* India Citizen */}
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-3">
                  Are you a citizen of India and currently based in India? *
                </label>
                <div className="space-y-2">
                  {["Yes", "No"].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="indiaCitizen"
                        value={option}
                        required
                        className="w-4 h-4 text-[#1A1A1A] focus:ring-[#1A1A1A]"
                      />
                      <span className="text-base text-[#1a1a1a]">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Current CTC Range */}
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-3">
                  What is your current annual CTC range? (INR) *
                </label>
                <div className="space-y-2">
                  {[
                    "0 - 5 Lakh", "5 - 10 Lakh", "10 - 15 Lakh", "15 - 20 Lakh",
                    "20 - 25 Lakh", "25 - 30 Lakh", "30 - 35 Lakh", "35 to 40 Lakh",
                    "40 to 45 Lakh", "45 to 50 Lakh", "50 to 55 Lakh", "55 to 60 Lakh",
                    "60 to 70 Lakh", "70 to 80 Lakh", "80 to 90 Lakh", "90Lakh to 1Cr", "1Cr +"
                  ].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="currentCTCRange"
                        value={option}
                        required
                        className="w-4 h-4 text-[#1A1A1A] focus:ring-[#1A1A1A]"
                      />
                      <span className="text-base text-[#1a1a1a]">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Current CTC Breakup */}
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                  Please share the figures for your current CTC breakup: Fixed, Variable, ESOPs (with vesting), and any other components *
                </label>
                <input
                  type="text"
                  name="currentCTCBreakup"
                  required
                  className="w-full px-4 py-3 border border-[#E5E5E0] rounded-lg focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent transition-all text-base"
                  placeholder="Enter CTC breakup details"
                />
              </div>

              {/* Expected CTC */}
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                  What is your expected annual CTC? (INR) *
                </label>
                <input
                  type="text"
                  name="expectedCTC"
                  required
                  className="w-full px-4 py-3 border border-[#E5E5E0] rounded-lg focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent transition-all text-base"
                  placeholder="Enter expected CTC"
                />
              </div>

              {/* LinkedIn Profile */}
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                  Help us with your LinkedIn profile link *
                </label>
                <input
                  type="url"
                  name="linkedinProfile"
                  required
                  className="w-full px-4 py-3 border border-[#E5E5E0] rounded-lg focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent transition-all text-base"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              {/* Proud Project */}
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                  Tell us about a project you&apos;ve worked on that you are most proud of. Please include a brief description, your exact role, how long it took to complete, any major challenges you faced, and how you overcame them. Feel free to add a link if available. *
                </label>
                <textarea
                  name="proudProject"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-[#E5E5E0] rounded-lg focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent resize-none transition-all text-base"
                  placeholder="Describe your proud project..."
                />
              </div>

              {/* Job Offers */}
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                  Are you currently holding any job offers? If yes, please provide details about the role, company, expected joining date, and offered compensation. If not, please respond with &apos;NA&apos;. *
                </label>
                <textarea
                  name="jobOffers"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-[#E5E5E0] rounded-lg focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent resize-none transition-all text-base"
                  placeholder="Enter job offer details or 'NA'"
                />
              </div>

              {/* Found Job Opportunity */}
              <div>
                <label className="block text-sm font-medium text-[#1a1a1a] mb-2">
                  Where did you find this job opportunity? (e.g., LinkedIn, Twitter, WhatsApp, etc). If someone referred you, please mention their name and contact number so we can thank them. (Write NA if not applicable). *
                </label>
                <textarea
                  name="foundJobOpportunity"
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-[#E5E5E0] rounded-lg focus:ring-2 focus:ring-[#1A1A1A] focus:border-transparent resize-none transition-all text-base"
                  placeholder="Enter where you found this opportunity"
                />
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <p className="text-xs text-[#666]">All fields marked with * are required.</p>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-[#E5E5E0] rounded-lg font-semibold text-[#1a1a1a] hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !resumeFile}
              className="flex-1 px-6 py-3 bg-[#1A1A1A] text-white rounded-lg font-semibold hover:bg-[#000000] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
