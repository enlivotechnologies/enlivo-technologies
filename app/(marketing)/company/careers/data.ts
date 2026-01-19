/**
 * app/(marketing)/company/careers/data.ts
 *
 * PURPOSE: Shared job data for careers pages.
 * WHY: Centralized data source for listings and detail pages.
 */

export interface Job {
  slug: string;
  title: string;
  department: "Design" | "Engineering";
  type: string;
  location: string;
  description: string;
  isIntern: boolean;
  // Additional detail page content
  about?: string;
  responsibilities?: string[];
  requirements?: string[];
  preferredSkills?: string[];
  benefits?: string[];
  interviewProcess?: string[];
  companyDetails?: string;
}

export const JOBS_DATA: Job[] = [
  // DESIGN
  {
    slug: "senior-product-designer",
    title: "Senior Product Designer",
    department: "Design",
    type: "Full-time",
    location: "Bengaluru, India",
    description: "Lead our core platform initiatives and design system for the next generation of users.",
    isIntern: false,
    about: "As a Senior Product Designer at Enlivo, you'll lead design initiatives across our core platform, working closely with engineering and product teams to create intuitive, scalable design systems. You'll shape the visual language and user experience that defines how our products are used by thousands of users daily.",
    responsibilities: [
      "Lead design for major platform features and initiatives",
      "Create and maintain our design system and component library",
      "Collaborate with product managers and engineers to define requirements",
      "Conduct user research and translate insights into design solutions",
      "Present design concepts to stakeholders and gather feedback",
      "Mentor junior designers and contribute to design team culture"
    ],
    requirements: [
      "5+ years of experience in product design",
      "Strong portfolio showcasing complex product design work",
      "Proficiency in Figma, design systems, and prototyping tools",
      "Experience working with engineering teams in agile environments",
      "Strong communication and presentation skills",
      "Experience with enterprise software or B2B products"
    ],
    preferredSkills: [
      "Experience with design systems at scale",
      "Knowledge of accessibility standards (WCAG)",
      "Experience with user research methodologies",
      "Familiarity with frontend development principles"
    ],
    interviewProcess: [
      "Round 1: HR screening and initial discussion",
      "Round 2: Portfolio review and design challenge",
      "Round 3: Team collaboration and culture fit",
      "Round 4: Final discussion with leadership"
    ],
    companyDetails: "Enlivo Technologies is a premium software engineering company building secure, scalable systems for organizations worldwide. We specialize in helping founders and enterprises transform their ideas into production-ready products through expert engineering and design.",
    benefits: [
      "Competitive compensation and equity",
      "Health insurance and wellness programs",
      "Flexible work arrangements",
      "Professional development budget",
      "Learning opportunities and conference attendance"
    ]
  },
  {
    slug: "product-design-intern",
    title: "Product Design Intern",
    department: "Design",
    type: "Internship (6 Months)",
    location: "Remote / India",
    description: "Work closely with senior designers to craft pixel-perfect interfaces and user flows.",
    isIntern: true,
    about: "Join our design team as a Product Design Intern and work on real projects that impact our product. You'll learn from experienced designers while contributing to actual features that ship to users. This is a hands-on role where you'll build your portfolio with real-world work.",
    responsibilities: [
      "Design user interfaces and user flows for product features",
      "Create high-fidelity mockups and prototypes",
      "Participate in design reviews and iteration cycles",
      "Collaborate with designers, product managers, and engineers",
      "Contribute to design system documentation",
      "Present your work and gather feedback"
    ],
    requirements: [
      "Currently pursuing or recently completed a degree in Design or related field",
      "Basic knowledge of design tools (Figma, Sketch, or Adobe XD)",
      "Strong attention to detail and passion for user experience",
      "Ability to work independently and as part of a team",
      "Portfolio demonstrating design thinking and visual skills",
      "Commitment to 15+ hours per week"
    ],
    preferredSkills: [
      "Experience with prototyping tools (Framer, Principle)",
      "Basic understanding of HTML/CSS",
      "Interest in design systems and component libraries"
    ],
    interviewProcess: [
      "Round 1: Initial screening and portfolio review",
      "Round 2: Design challenge and discussion",
      "Round 3: Team fit and final discussion"
    ],
    companyDetails: "Enlivo Technologies is a premium software engineering company building secure, scalable systems for organizations worldwide. We specialize in helping founders and enterprises transform their ideas into production-ready products through expert engineering and design.",
    benefits: [
      "Hands-on experience with real product work",
      "Mentorship from senior designers",
      "Portfolio-building opportunities",
      "Certificate of completion",
      "Networking opportunities"
    ]
  },
  
  // ENGINEERING
  {
    slug: "frontend-engineer-ii",
    title: "Frontend Engineer II",
    department: "Engineering",
    type: "Full-time",
    location: "Mumbai, India",
    description: "Craft beautiful, high-performance UI components using Next.js and Tailwind.",
    isIntern: false,
    about: "Join our frontend engineering team to build the next generation of web applications. You'll work with React, Next.js, and modern tooling to create performant, accessible, and beautiful user interfaces. This role offers the opportunity to work on products used by thousands of users while building your expertise in modern frontend development.",
    responsibilities: [
      "Build and maintain React components and applications using Next.js",
      "Write clean, performant, and accessible code",
      "Collaborate with designers to implement pixel-perfect UIs",
      "Optimize applications for performance and scalability",
      "Participate in code reviews and technical discussions",
      "Contribute to technical decisions and architecture"
    ],
    requirements: [
      "3+ years of experience in frontend development",
      "Strong proficiency in React, Next.js, and TypeScript",
      "Experience with Tailwind CSS and modern CSS practices",
      "Understanding of web performance optimization",
      "Experience with version control (Git) and collaborative workflows",
      "Strong problem-solving and debugging skills"
    ],
    preferredSkills: [
      "Experience with state management (Zustand, Redux)",
      "Knowledge of testing frameworks (Jest, React Testing Library)",
      "Experience with animation libraries (Framer Motion)",
      "Understanding of accessibility (a11y) best practices"
    ],
    interviewProcess: [
      "Round 1: HR screening and initial discussion",
      "Round 2: Technical assessment - coding challenge",
      "Round 3: System design and architecture discussion",
      "Round 4: Team collaboration and final discussion"
    ],
    companyDetails: "Enlivo Technologies is a premium software engineering company building secure, scalable systems for organizations worldwide. We specialize in helping founders and enterprises transform their ideas into production-ready products through expert engineering and design.",
    benefits: [
      "Competitive salary and benefits package",
      "Health insurance coverage",
      "Remote work options",
      "Equipment and software provided",
      "Continuous learning opportunities",
      "Team events and activities"
    ]
  },
  {
    slug: "backend-engineering-intern",
    title: "Backend Engineering Intern",
    department: "Engineering",
    type: "Internship (Summer)",
    location: "Bengaluru, India",
    description: "Help build scalable APIs and optimize database queries for high-traffic systems.",
    isIntern: true,
    about: "Join our backend engineering team as an intern and work on real systems that power our applications. You'll learn best practices in API design, database optimization, and system architecture while contributing to features that ship to production. This is a paid internship with mentorship from experienced engineers.",
    responsibilities: [
      "Build and maintain RESTful APIs and backend services",
      "Write efficient database queries and optimize performance",
      "Collaborate with frontend engineers to integrate APIs",
      "Participate in code reviews and learn from feedback",
      "Document your code and contribute to technical discussions",
      "Debug and fix issues in production systems"
    ],
    requirements: [
      "Currently pursuing or recently completed a degree in Computer Science or related field",
      "Basic knowledge of backend technologies (Node.js, Python, or similar)",
      "Understanding of databases (SQL or NoSQL)",
      "Interest in building scalable systems",
      "Ability to work independently and learn quickly",
      "Commitment to 20+ hours per week during internship"
    ],
    preferredSkills: [
      "Experience with RESTful API design",
      "Knowledge of cloud platforms (AWS, GCP)",
      "Familiarity with containerization (Docker)"
    ],
    interviewProcess: [
      "Round 1: Initial screening and technical discussion",
      "Round 2: Coding challenge and problem-solving",
      "Round 3: Final discussion and team fit"
    ],
    companyDetails: "Enlivo Technologies is a premium software engineering company building secure, scalable systems for organizations worldwide. We specialize in helping founders and enterprises transform their ideas into production-ready products through expert engineering and design.",
    benefits: [
      "Paid internship with competitive compensation",
      "Real-world experience with production systems",
      "Mentorship from senior engineers",
      "Certificate of completion",
      "Potential for full-time conversion",
      "Networking and professional development"
    ]
  },
  {
    slug: "staff-software-engineer",
    title: "Staff Software Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote / India",
    description: "Architect scalable systems for our enterprise analytics platform.",
    isIntern: false,
    about: "As a Staff Software Engineer, you'll lead technical initiatives and architecture decisions for our enterprise platform. You'll work across teams to design scalable systems, mentor engineers, and drive technical excellence. This is a senior role with significant impact on our product and engineering culture.",
    responsibilities: [
      "Design and architect scalable, reliable systems",
      "Lead technical initiatives and cross-team projects",
      "Mentor engineers and contribute to technical strategy",
      "Review code and architecture decisions across teams",
      "Identify and solve complex technical challenges",
      "Contribute to hiring and team development"
    ],
    requirements: [
      "8+ years of experience in software engineering",
      "Deep expertise in system design and architecture",
      "Experience with cloud platforms (AWS, GCP, or Azure)",
      "Strong leadership and communication skills",
      "Experience mentoring engineers and leading projects",
      "Track record of building scalable systems"
    ],
    preferredSkills: [
      "Experience with microservices architecture",
      "Knowledge of distributed systems and event-driven architecture",
      "Experience with infrastructure as code (Terraform, CloudFormation)",
      "Understanding of security best practices and compliance"
    ],
    interviewProcess: [
      "Round 1: HR screening and initial discussion",
      "Round 2: Technical - architecture & system design",
      "Round 3: Team lead / peer-panel - coding, system decomposition",
      "Round 4: Leadership discussion and final review"
    ],
    companyDetails: "Enlivo Technologies is a premium software engineering company building secure, scalable systems for organizations worldwide. We specialize in helping founders and enterprises transform their ideas into production-ready products through expert engineering and design.",
    benefits: [
      "Top-tier compensation and equity",
      "Comprehensive health and wellness benefits",
      "Remote-first culture with flexible hours",
      "Unlimited learning and development budget",
      "Conference attendance and speaking opportunities",
      "Leadership development programs"
    ]
  }
];

/**
 * Get job by slug
 */
export function getJobBySlug(slug: string): Job | undefined {
  return JOBS_DATA.find(job => job.slug === slug);
}
