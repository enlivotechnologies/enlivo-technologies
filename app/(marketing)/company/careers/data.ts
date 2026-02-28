/**
 * app/(marketing)/company/careers/data.ts
 *
 * PURPOSE: Shared job data for careers pages.
 * WHY: Centralized data source for listings and detail pages.
 */

export interface Job {
  slug: string;
  title: string;
  department: "Design" | "Engineering" | "Operations" | "Product" | "Sales & Marketing";
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
    location: "Remote — Worldwide",
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
    location: "Remote — Worldwide",
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
    location: "Remote — Worldwide",
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
    location: "Remote — Worldwide",
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
    location: "Remote — Worldwide",
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
  },
  {
    slug: "senior-backend-engineer",
    title: "Senior Backend Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote — Worldwide",
    description: "Build robust APIs and microservices using Node.js and Python.",
    isIntern: false,
    about: "Join our backend engineering team to build scalable APIs and microservices that power our platform. You'll work with modern technologies, design efficient database schemas, and ensure system reliability. This role offers the opportunity to work on high-traffic systems and contribute to architectural decisions.",
    responsibilities: [
      "Design and develop RESTful APIs and microservices",
      "Optimize database queries and improve system performance",
      "Implement security best practices and authentication systems",
      "Collaborate with frontend engineers on API contracts",
      "Write comprehensive tests and maintain code quality",
      "Participate in code reviews and technical discussions"
    ],
    requirements: [
      "5+ years of experience in backend development",
      "Strong proficiency in Node.js, Python, or similar",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Understanding of RESTful API design principles",
      "Experience with cloud platforms (AWS, GCP)",
      "Strong problem-solving and debugging skills"
    ],
    preferredSkills: [
      "Experience with microservices architecture",
      "Knowledge of message queues (RabbitMQ, Kafka)",
      "Experience with containerization (Docker, Kubernetes)",
      "Understanding of system monitoring and observability"
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
    slug: "devops-engineer",
    title: "DevOps Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Remote — Worldwide",
    description: "Manage infrastructure, CI/CD pipelines, and cloud deployments.",
    isIntern: false,
    about: "Join our DevOps team to manage infrastructure, automate deployments, and ensure system reliability. You'll work with modern cloud platforms, containerization technologies, and monitoring tools to keep our systems running smoothly. This role offers the opportunity to work with cutting-edge infrastructure technologies.",
    responsibilities: [
      "Manage and maintain cloud infrastructure (AWS, GCP)",
      "Design and implement CI/CD pipelines",
      "Automate deployment and scaling processes",
      "Monitor system performance and troubleshoot issues",
      "Implement security best practices and compliance",
      "Collaborate with engineering teams on infrastructure needs"
    ],
    requirements: [
      "4+ years of experience in DevOps or infrastructure engineering",
      "Strong experience with cloud platforms (AWS, GCP, or Azure)",
      "Proficiency in infrastructure as code (Terraform, CloudFormation)",
      "Experience with containerization (Docker, Kubernetes)",
      "Knowledge of CI/CD tools (GitHub Actions, Jenkins, GitLab CI)",
      "Strong scripting skills (Bash, Python)"
    ],
    preferredSkills: [
      "Experience with monitoring tools (Datadog, New Relic, Prometheus)",
      "Knowledge of security best practices and compliance",
      "Experience with serverless architectures",
      "Understanding of networking and security"
    ],
    interviewProcess: [
      "Round 1: HR screening and initial discussion",
      "Round 2: Technical assessment - infrastructure and automation",
      "Round 3: System design and troubleshooting discussion",
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
  
  // OPERATIONS
  {
    slug: "operations-manager",
    title: "Operations Manager",
    department: "Operations",
    type: "Full-time",
    location: "Remote — Worldwide",
    description: "Streamline processes and drive operational excellence across the organization.",
    isIntern: false,
    about: "Join our operations team to streamline processes, improve efficiency, and drive operational excellence. You'll work closely with leadership to implement best practices, manage vendor relationships, and ensure smooth day-to-day operations. This role offers the opportunity to make a significant impact on how we operate as a company.",
    responsibilities: [
      "Develop and implement operational processes and procedures",
      "Manage vendor relationships and contracts",
      "Coordinate cross-functional projects and initiatives",
      "Analyze operational metrics and identify improvement opportunities",
      "Support leadership with strategic planning and execution",
      "Ensure compliance with policies and regulations"
    ],
    requirements: [
      "5+ years of experience in operations or business management",
      "Strong analytical and problem-solving skills",
      "Experience with process improvement methodologies",
      "Excellent communication and project management skills",
      "Ability to work independently and manage multiple priorities",
      "Experience in a fast-paced, growing organization"
    ],
    preferredSkills: [
      "Experience with project management tools (Asana, Jira)",
      "Knowledge of business analytics and reporting",
      "Experience with vendor management",
      "Understanding of financial planning and budgeting"
    ],
    interviewProcess: [
      "Round 1: HR screening and initial discussion",
      "Round 2: Case study and problem-solving",
      "Round 3: Team collaboration and culture fit",
      "Round 4: Leadership discussion and final review"
    ],
    companyDetails: "Enlivo Technologies is a premium software engineering company building secure, scalable systems for organizations worldwide. We specialize in helping founders and enterprises transform their ideas into production-ready products through expert engineering and design.",
    benefits: [
      "Competitive salary and benefits package",
      "Health insurance coverage",
      "Flexible work arrangements",
      "Professional development opportunities",
      "Team events and activities"
    ]
  },
  {
    slug: "people-operations-specialist",
    title: "People Operations Specialist",
    department: "Operations",
    type: "Full-time",
    location: "Remote — Worldwide",
    description: "Support employee experience and HR operations.",
    isIntern: false,
    about: "Join our people operations team to support employee experience, manage HR processes, and contribute to our company culture. You'll work on everything from onboarding to employee engagement, ensuring our team has the support they need to succeed. This role offers the opportunity to shape how we support and develop our people.",
    responsibilities: [
      "Manage employee onboarding and offboarding processes",
      "Support HR operations and employee relations",
      "Coordinate employee engagement initiatives and events",
      "Maintain employee records and HR systems",
      "Assist with recruitment and hiring processes",
      "Support leadership with people-related initiatives"
    ],
    requirements: [
      "3+ years of experience in HR or people operations",
      "Strong organizational and communication skills",
      "Experience with HR systems and processes",
      "Ability to handle sensitive and confidential information",
      "Strong attention to detail",
      "Passion for creating great employee experiences"
    ],
    preferredSkills: [
      "Experience with HRIS systems",
      "Knowledge of employment law and compliance",
      "Experience with employee engagement initiatives",
      "Understanding of recruitment and talent acquisition"
    ],
    interviewProcess: [
      "Round 1: HR screening and initial discussion",
      "Round 2: Case study and problem-solving",
      "Round 3: Team collaboration and culture fit",
      "Round 4: Final discussion with leadership"
    ],
    companyDetails: "Enlivo Technologies is a premium software engineering company building secure, scalable systems for organizations worldwide. We specialize in helping founders and enterprises transform their ideas into production-ready products through expert engineering and design.",
    benefits: [
      "Competitive salary and benefits package",
      "Health insurance coverage",
      "Flexible work arrangements",
      "Professional development opportunities",
      "Team events and activities"
    ]
  },
  {
    slug: "business-operations-analyst",
    title: "Business Operations Analyst",
    department: "Operations",
    type: "Full-time",
    location: "Remote — Worldwide",
    description: "Analyze business metrics and drive data-driven decisions.",
    isIntern: false,
    about: "Join our operations team as a Business Operations Analyst to analyze business metrics, create reports, and drive data-driven decisions. You'll work with leadership to understand business performance, identify trends, and provide insights that help us grow. This role offers the opportunity to work with data and make a real impact on business strategy.",
    responsibilities: [
      "Analyze business metrics and create reports",
      "Build dashboards and data visualizations",
      "Identify trends and provide actionable insights",
      "Support strategic planning with data analysis",
      "Collaborate with teams to understand business needs",
      "Maintain data accuracy and integrity"
    ],
    requirements: [
      "3+ years of experience in business analysis or data analysis",
      "Strong analytical and quantitative skills",
      "Proficiency in Excel, SQL, and data visualization tools",
      "Experience with business intelligence tools (Tableau, Looker)",
      "Strong communication and presentation skills",
      "Ability to translate data into actionable insights"
    ],
    preferredSkills: [
      "Experience with Python or R for data analysis",
      "Knowledge of statistical analysis methods",
      "Experience with CRM systems (Salesforce, HubSpot)",
      "Understanding of business metrics and KPIs"
    ],
    interviewProcess: [
      "Round 1: HR screening and initial discussion",
      "Round 2: Technical assessment - data analysis challenge",
      "Round 3: Case study and problem-solving",
      "Round 4: Team collaboration and final discussion"
    ],
    companyDetails: "Enlivo Technologies is a premium software engineering company building secure, scalable systems for organizations worldwide. We specialize in helping founders and enterprises transform their ideas into production-ready products through expert engineering and design.",
    benefits: [
      "Competitive salary and benefits package",
      "Health insurance coverage",
      "Flexible work arrangements",
      "Professional development opportunities",
      "Team events and activities"
    ]
  },
  
  // PRODUCT
  {
    slug: "product-manager",
    title: "Product Manager",
    department: "Product",
    type: "Full-time",
    location: "Remote — Worldwide",
    description: "Drive product strategy and execution for our core platform.",
    isIntern: false,
    about: "Join our product team to drive product strategy and execution. You'll work closely with engineering, design, and leadership to define product vision, prioritize features, and ensure we're building products that solve real problems. This role offers the opportunity to shape product direction and make a significant impact on our platform.",
    responsibilities: [
      "Define product strategy and roadmap",
      "Gather and prioritize product requirements",
      "Collaborate with engineering and design teams",
      "Conduct user research and analyze feedback",
      "Track product metrics and measure success",
      "Communicate product vision to stakeholders"
    ],
    requirements: [
      "5+ years of experience in product management",
      "Strong analytical and strategic thinking skills",
      "Experience with agile development methodologies",
      "Excellent communication and collaboration skills",
      "Experience working with engineering and design teams",
      "Track record of shipping successful products"
    ],
    preferredSkills: [
      "Experience with product analytics tools (Mixpanel, Amplitude)",
      "Knowledge of user research methodologies",
      "Experience with A/B testing and experimentation",
      "Understanding of technical concepts and constraints"
    ],
    interviewProcess: [
      "Round 1: HR screening and initial discussion",
      "Round 2: Product case study and strategy discussion",
      "Round 3: Team collaboration and culture fit",
      "Round 4: Leadership discussion and final review"
    ],
    companyDetails: "Enlivo Technologies is a premium software engineering company building secure, scalable systems for organizations worldwide. We specialize in helping founders and enterprises transform their ideas into production-ready products through expert engineering and design.",
    benefits: [
      "Competitive salary and equity",
      "Health insurance and wellness programs",
      "Flexible work arrangements",
      "Professional development budget",
      "Learning opportunities and conference attendance"
    ]
  },
  {
    slug: "senior-product-manager",
    title: "Senior Product Manager",
    department: "Product",
    type: "Full-time",
    location: "Remote — Worldwide",
    description: "Lead product initiatives and drive innovation across multiple product lines.",
    isIntern: false,
    about: "Join our product team as a Senior Product Manager to lead product initiatives and drive innovation. You'll own product strategy for key areas, work with cross-functional teams, and make data-driven decisions that impact our business. This role offers the opportunity to lead product direction and mentor other product managers.",
    responsibilities: [
      "Lead product strategy and roadmap for key product areas",
      "Define and prioritize product features based on user needs and business goals",
      "Work closely with engineering, design, and leadership teams",
      "Conduct market research and competitive analysis",
      "Define and track product metrics and KPIs",
      "Mentor junior product managers and contribute to product culture"
    ],
    requirements: [
      "7+ years of experience in product management",
      "Strong strategic thinking and analytical skills",
      "Experience leading product initiatives from conception to launch",
      "Excellent communication and leadership skills",
      "Experience working with engineering and design teams",
      "Track record of shipping successful products at scale"
    ],
    preferredSkills: [
      "Experience with product analytics and data analysis",
      "Knowledge of user research and UX principles",
      "Experience with A/B testing and experimentation",
      "Understanding of technical architecture and constraints",
      "Experience with agile and lean product development"
    ],
    interviewProcess: [
      "Round 1: HR screening and initial discussion",
      "Round 2: Product case study and strategy discussion",
      "Round 3: Team collaboration and leadership discussion",
      "Round 4: Final discussion with product leadership"
    ],
    companyDetails: "Enlivo Technologies is a premium software engineering company building secure, scalable systems for organizations worldwide. We specialize in helping founders and enterprises transform their ideas into production-ready products through expert engineering and design.",
    benefits: [
      "Competitive salary and equity",
      "Health insurance and wellness programs",
      "Flexible work arrangements",
      "Professional development budget",
      "Learning opportunities and conference attendance",
      "Leadership development programs"
    ]
  },
  
  // SALES & MARKETING
  {
    slug: "sales-development-representative",
    title: "Sales Development Representative",
    department: "Sales & Marketing",
    type: "Full-time",
    location: "Remote — Worldwide",
    description: "Generate leads and build relationships with potential clients.",
    isIntern: false,
    about: "Join our sales team as a Sales Development Representative to generate leads, qualify prospects, and build relationships with potential clients. You'll work closely with the sales team to identify opportunities, conduct outreach, and help grow our business. This role offers the opportunity to learn sales fundamentals and grow your career in sales.",
    responsibilities: [
      "Generate and qualify sales leads",
      "Conduct outreach to potential clients via email and phone",
      "Schedule meetings and demos for the sales team",
      "Maintain accurate records in CRM system",
      "Research target accounts and industries",
      "Collaborate with marketing on lead generation campaigns"
    ],
    requirements: [
      "1-3 years of experience in sales or business development",
      "Strong communication and interpersonal skills",
      "Experience with CRM systems (Salesforce, HubSpot)",
      "Ability to work in a fast-paced environment",
      "Strong organizational and time management skills",
      "Passion for building relationships and helping clients"
    ],
    preferredSkills: [
      "Experience with B2B sales",
      "Knowledge of sales automation tools",
      "Experience with email outreach and cold calling",
      "Understanding of the software/technology industry"
    ],
    interviewProcess: [
      "Round 1: HR screening and initial discussion",
      "Round 2: Sales role-play and scenario discussion",
      "Round 3: Team collaboration and culture fit",
      "Round 4: Final discussion with sales leadership"
    ],
    companyDetails: "Enlivo Technologies is a premium software engineering company building secure, scalable systems for organizations worldwide. We specialize in helping founders and enterprises transform their ideas into production-ready products through expert engineering and design.",
    benefits: [
      "Competitive base salary and commission structure",
      "Health insurance coverage",
      "Flexible work arrangements",
      "Sales training and development programs",
      "Team events and activities"
    ]
  },
  {
    slug: "marketing-manager",
    title: "Marketing Manager",
    department: "Sales & Marketing",
    type: "Full-time",
    location: "Remote — Worldwide",
    description: "Develop and execute marketing strategies to grow brand awareness and generate leads.",
    isIntern: false,
    about: "Join our marketing team to develop and execute marketing strategies that grow brand awareness and generate leads. You'll work on everything from content marketing to digital campaigns, helping us reach and engage with potential clients. This role offers the opportunity to shape our brand and marketing approach.",
    responsibilities: [
      "Develop and execute marketing strategies and campaigns",
      "Create content for blog, social media, and marketing materials",
      "Manage digital marketing channels (SEO, SEM, social media)",
      "Analyze marketing metrics and optimize campaigns",
      "Collaborate with sales on lead generation initiatives",
      "Manage marketing budget and track ROI"
    ],
    requirements: [
      "4+ years of experience in marketing",
      "Strong experience with digital marketing channels",
      "Experience with content creation and copywriting",
      "Proficiency in marketing analytics and tools",
      "Strong communication and creative skills",
      "Experience in B2B marketing"
    ],
    preferredSkills: [
      "Experience with marketing automation tools (HubSpot, Marketo)",
      "Knowledge of SEO and content marketing",
      "Experience with paid advertising (Google Ads, LinkedIn Ads)",
      "Understanding of marketing attribution and analytics"
    ],
    interviewProcess: [
      "Round 1: HR screening and initial discussion",
      "Round 2: Marketing case study and strategy discussion",
      "Round 3: Portfolio review and creative discussion",
      "Round 4: Team collaboration and final discussion"
    ],
    companyDetails: "Enlivo Technologies is a premium software engineering company building secure, scalable systems for organizations worldwide. We specialize in helping founders and enterprises transform their ideas into production-ready products through expert engineering and design.",
    benefits: [
      "Competitive salary and benefits package",
      "Health insurance coverage",
      "Flexible work arrangements",
      "Marketing budget for campaigns and tools",
      "Professional development opportunities",
      "Team events and activities"
    ]
  }
];

/**
 * Get job by slug
 */
export function getJobBySlug(slug: string): Job | undefined {
  return JOBS_DATA.find(job => job.slug === slug);
}
