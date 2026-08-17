import {
  Briefcase, FolderGit2, Users, Server, Monitor, Layout, Globe, Plug, Database, Code2, Wrench, GitBranch, 
} from "lucide-react";

export const RESUME_URL = "/Joash_Noble_Senior_Software_Engineer_Resume.pdf";

export const SOCIALS = {
  github: "https://github.com/joashnoble",
  linkedin: "https://www.linkedin.com/in/joashnoble/",
};

export const AVATAR_URL =
  "/images/avatar.png";

export const CONTACT_INFO = {
  email: "noblejjoash@gmail.com",
};

export const CONTACT_ENDPOINT = "/api/contact";

export const profile = {
  name: "Joash Jezreel Lucas Noble",
  title: "Senior Software Engineer / Full-Stack Developer",
  tagline:
    "Full-stack engineer with 9+ years of experience building, maintaining, and improving production business applications, APIs, and third-party integrations.",
  location: "Angeles City, Pampanga, Philippines",
};

export const about = {
  subtitle: "Production systems, business logic, and integrations",
  paragraphs: [
    "I’m a Senior Full-Stack Software Engineer with 9+ years of experience building, maintaining, and improving production business applications. My primary stack is PHP, Laravel, JavaScript, React, MySQL, and REST APIs.",
    "I’ve worked on payment, authentication, shipping, email, analytics, notarization, HR/payroll, accounting, healthcare, education, and client collaboration systems. I’m strongest at understanding existing systems, implementing business requirements, troubleshooting production issues, integrating external services, and delivering reliable features from development through QA and deployment.",
  ],
};

export const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Build and improve production business applications with PHP, Laravel, JavaScript, React, Vue, MySQL, and REST APIs.",
    icon: Server,
  },
  {
    title: "API & Third-Party Integrations",
    description:
      "Connect payments, authentication, shipping, email, analytics, notarization, and other external services to existing applications.",
    icon: Plug,
  },
  {
    title: "Legacy System Modernization",
    description:
      "Upgrade frameworks, refactor existing functionality, improve performance, and safely extend established production systems.",
    icon: Wrench,
  },
  {
    title: "Code Review, QA & Release Support",
    description:
      "Review pull requests, troubleshoot issues, validate functionality, coordinate development work, and support stable releases.",
    icon: Users,
  },
];

export const skillCategories = [
  {
    title: "Backend & Database",
    icon: Server,
    skills: [
      { name: "PHP" },
      { name: "Laravel" },
      { name: "CodeIgniter" },
      { name: "MySQL" },
      { name: "SQL" },
      { name: "REST APIs" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Monitor,
    skills: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Vue" },
      { name: "jQuery" },
      { name: "AJAX" },
      { name: "HTML / CSS" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
    ],
  },
  {
    title: "Integrations & APIs",
    icon: Plug,
    skills: [
      { name: "Stripe" },
      { name: "Auth0" },
      { name: "EasyPost" },
      { name: "BlueNotary" },
      { name: "Proof" },
      { name: "SendGrid" },
      { name: "CleverTap" },
      { name: "VWO" },
    ],
  },
  {
    title: "Engineering Practices",
    icon: GitBranch,
    skills: [
      { name: "Git" },
      { name: "Code Review" },
      { name: "QA & Testing" },
      { name: "Debugging" },
      { name: "System Maintenance" },
      { name: "API Integration" },
      { name: "Sentry" },
      { name: "Deployment" },
    ],
  },
];

export const projects = [
  {
    title: "Traffic School System",
    featured: true,
    image: "/images/projects/traffic-school-system.png",
    tags: ["Laravel", "MySQL", "JavaScript", "jQuery"],
    role:
      "Senior Full-Stack Engineer; later Lead Programmer. Maintained and enhanced an established production platform rather than owning the original product.",
    ownership:
      "Implemented features, fixes, integrations, refactors, upgrades, and state-specific functionality. Later assigned work to and reviewed/QA’d changes from a team of 3 developers.",
    description:
      "A production platform for drivers who need to complete state-approved traffic school lessons and exams after receiving a citation or case. Users can complete lessons across devices, pass a final exam, pay online, and receive a certificate for their case.",
    features: [
      "Online lessons, exams, final exam, checkout, and certificate workflow.",
      "State-specific courses and business rules for California, Florida, Texas, Nevada, and Virginia.",
      "Case Status administration with search, sorting, bulk actions, submission tracking, archiving, review status, and notes.",
      "Localization for Chinese, Spanish, and English.",
      "Payment loading/error handling to prevent duplicate charges.",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "jQuery", "AJAX", "REST APIs"],
    integrations: [
      "Stripe — payment processing and PaymentIntents",
      "Auth0 — authentication and Google social login",
      "EasyPost — shipping",
      "BlueNotary / Proof — notarization workflow and webhooks",
      "CleverTap — marketing journeys",
      "VWO — A/B testing",
      "SendGrid — transactional email",
      "Reviews.io — review workflow",
      "Abstract API — email validation",
      "Python REST API — DMV functionality",
    ],
    architecture:
      "Established Laravel monolith with server-rendered application flows, AJAX/jQuery interactions, MySQL persistence, and external services connected through APIs and webhooks.",
    challenges: [
      "Investigated production Sentry errors caused by incomplete registration/session state and added safer error handling and redirects.",
      "Fixed an N+1 query issue affecting lesson pages.",
      "Refactored checkout and updated Stripe across systems to use Products/Prices with PaymentIntents.",
      "Upgraded Laravel applications from 6 through 10 while continuing to support existing functionality.",
      "Added new state-specific behavior without breaking the existing states.",
    ],
    impact: [
      "Production platform supporting 5 U.S. states.",
      "Worked within an established application already used by customers in production.",
      "Later coordinated development work and QA for a team of 3 developers.",
    ],
  },
  {
    title: "Church & Enrollment System",
    featured: true,
    image: "/images/projects/church-system.png",
    gallery: ["/images/projects/church-system.png", "/images/projects/enrollment-system.png"],
    tags: ["Laravel", "PHP", "MySQL", "jQuery", "Tailwind CSS"],
    role: "Full-Stack Engineer; built the system from start to finish.",
    ownership:
      "Designed and implemented the application, its CRUD modules, reporting, and a separate enrollment workspace.",
    description:
      "A church management and enrollment platform built from the ground up to manage members, missions, giving, basic income/expense accounting, and academic enrollment workflows.",
    features: [
      "Member, mission, and giving management.",
      "Basic accounting for income and expenses with reporting.",
      "Separate enrollment workspace for subjects, curriculum, classes, students, teachers, schedules, grades, and enrollments.",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "jQuery", "Tailwind CSS"],
    architecture:
      "Laravel application with a separate enrollment workspace sharing the system’s authentication and data layer.",
    challenges: [
      "Designed the system around two distinct workspaces while keeping the application maintainable.",
      "Implemented a broad set of administrative CRUD workflows and reporting requirements.",
    ],
    impact: [
      "Built the core church system end-to-end.",
      "Enrollment workspace was ongoing when the engagement ended.",
    ],
  },
  {
    title: "Client Drive System",
    featured: true,
    image: "/images/projects/client-drive-system.jpg",
    tags: ["React", "Laravel", "MySQL", "Stripe"],
    role: "Full-Stack Engineer; contributor to development.",
    ownership:
      "Implemented assigned frontend/backend features, UI reskins, permissions fixes, invitation workflows, and payment functionality. I did not lead this project.",
    description:
      "A collaboration platform where users and clients can manage tasks, comments, attachments, deadlines, teams, and project activity.",
    features: [
      "Tasks, comments, attachments, deadlines, and project activity.",
      "Team members, invitations, active/inactive team views, and role filtering.",
      "Client-facing collaboration workflows.",
      "Stripe-powered payments.",
    ],
    technologies: ["React", "Laravel", "MySQL", "JavaScript", "Tailwind CSS", "Bootstrap", "DaisyUI"],
    integrations: ["Stripe — primary payment option"],
    architecture:
      "React frontend backed by Laravel, with shared components supporting active and inactive team views and role-based permissions.",
    challenges: [
      "Converted the existing Tailwind-based UI to Bootstrap for a required reskin.",
      "Fixed invitation behavior for active and inactive teams and added resend/cancel workflows.",
      "Resolved permission issues using Spatie Laravel Permission.",
      "Added separate inactive-team routes/components while reusing shared child components.",
    ],
    impact: [
      "Contributed to a production collaboration platform with both client and user workflows.",
      "Strengthened experience working across a React + Laravel codebase.",
    ],
  },
  {
    title: "HR, Scheduling & Payroll System",
    featured: true,
    image: "/images/projects/hr-scheduling-payroll-system.png",
    tags: ["CodeIgniter", "PHP", "MySQL", "jQuery", "AJAX"],
    role: "Full-Stack Engineer responsible for maintaining and continuing development of an established system.",
    ownership:
      "Took over the system after the original developer left, maintained it, added modules, handled client-specific customizations, and continued development.",
    description:
      "An internal HR and payroll system that manages employee timekeeping, scheduling, leave, personnel records, and payroll calculations.",
    features: [
      "Scheduling and barcode-based time-in/time-out.",
      "Payroll connected to SSS, PhilHealth, Pag-IBIG, withholding tax, loans, and leaves.",
      "Client-specific reports and customizations.",
      "Simplified payroll workflow for processing larger employee groups.",
    ],
    technologies: ["CodeIgniter", "PHP", "MySQL", "jQuery", "AJAX", "SQL"],
    challenges: [
      "Inherited and maintained an established application after the original developer left.",
      "Adapted payroll behavior to changing Philippine statutory requirements and client-specific rules.",
      "Extended an existing standard product while preserving established workflows.",
    ],
    impact: [
      "Maintained HR/payroll systems for 6 clients.",
      "Supported real operational workflows for scheduling and payroll processing.",
    ],
  },
  {
    title: "Business Management System",
    featured: true,
    image: "/images/projects/business-management-system.png",
    tags: ["CodeIgniter", "PHP", "MySQL", "jQuery", "AJAX"],
    role: "Full-Stack Engineer; created the business-management layer from the existing accounting platform.",
    ownership:
      "Implemented additional business modules and customized workflows and reports for client requirements.",
    description:
      "A business management system built on the existing accounting platform, extending it with operational workflows for purchasing, inventory, jobs, and invoicing.",
    features: [
      "Bill of Materials.",
      "Receiving and purchasing workflows.",
      "Invoicing.",
      "Job Orders.",
      "Variation Orders.",
      "Client-specific reporting and details.",
    ],
    technologies: ["CodeIgniter", "PHP", "MySQL", "jQuery", "AJAX", "SQL"],
    architecture:
      "Extended an established accounting application so operational modules could share existing purchasing, sales, inventory, and accounting data.",
    challenges: [
      "Extended a mature accounting codebase without replacing the existing core workflows.",
      "Connected new operational modules to existing business and accounting processes.",
    ],
    impact: [
      "Built the additional business-management modules used by 2 clients.",
    ],
  },
  {
    title: "Billing & Accounting Systems",
    image: "/images/projects/billing-accounting-system.png",
    tags: ["CodeIgniter", "PHP", "MySQL", "jQuery", "AJAX"],
    role: "Full-Stack Engineer maintaining and customizing an established accounting product.",
    ownership:
      "Implemented client-specific reports, details, and improvements while maintaining existing billing and accounting workflows.",
    description:
      "A standard accounting and billing platform covering customer subsidiaries, statements of accounts, payments, purchasing, sales, inventory, and accounting journals.",
    features: [
      "Customer subsidiaries and statements of accounts.",
      "Payments.",
      "Purchasing, sales, and inventory.",
      "Accounting journals and reporting.",
    ],
    technologies: ["CodeIgniter", "PHP", "MySQL", "jQuery", "AJAX", "SQL"],
    architecture:
      "Established CodeIgniter application where sales, purchasing, inventory, billing, and accounting workflows share the same business data.",
    challenges: [
      "Customized reports and fields for new clients while preserving the standard product.",
      "Maintained integrations between sales, purchasing, inventory, billing, and accounting workflows.",
    ],
    impact: [
      "Maintained billing functionality for 3 clients.",
    ],
  },
  {
    title: "Clinic Management System",
    image: "/images/projects/clinic-management-system.png",
    tags: ["CodeIgniter", "PHP", "MySQL", "jQuery", "AJAX"],
    role: "Full-Stack Engineer responsible for ongoing maintenance and feature development.",
    ownership:
      "Took over the established system after the original developer left and continued development for the client.",
    description:
      "An internal clinic management system used by a private nephrology clinic for patient information and day-to-day clinical workflows.",
    features: [
      "Patient information and history.",
      "Prescription and follow-up workflows.",
      "Clinical History and Medical Clearance.",
      "Admitting Order, Kidney Biopsy, and Dietary Referral modules.",
      "Export to Excel and printing of patient information.",
    ],
    technologies: ["CodeIgniter", "PHP", "MySQL", "jQuery", "AJAX"],
    challenges: [
      "Maintained an established application while adding new clinical modules.",
      "Resolved data and formatting issues such as dates not saving and patient billing number formatting.",
    ],
    impact: [
      "Supported daily operations for 1 private clinic.",
    ],
  },
  {
    title: "WordPress Marketing Application",
    image: "/images/projects/wordpress-marketing-application.png",
    tags: ["WordPress", "PHP", "ACF", "JavaScript", "CSS"],
    role: "Full-Stack/WordPress developer maintaining an established marketing application.",
    ownership:
      "Implemented client-requested pages, sections, content, pricing changes, and template reskins based on Figma designs.",
    description:
      "A WordPress marketing application supporting the Traffic School business, with client-facing pages for courses, pricing, reviews, and related content.",
    features: [
      "New marketing sections and pages.",
      "Front page, About, Course, Cost, and Reviews template updates.",
      "Client-requested pricing and content changes.",
      "Backend content management using plugins and ACF.",
    ],
    technologies: ["WordPress", "PHP", "ACF", "JavaScript", "CSS", "Figma"],
    challenges: [
      "Implemented Figma designs manually within existing WordPress templates.",
      "Extended an established marketing application without rebuilding its underlying platform.",
    ],
    impact: [
      "Maintained and enhanced an established production marketing application.",
    ],
  },
];

export const academicTimeline = [
  {
    title: "BS in Information Systems",
    org: "City College of Angeles",
    period: "2013 – 2017",
    points: ["Dean's Lister, 2nd Semester S.Y. 2016–2017", "Participated in back-end programming, TORO Competition (2016)"],
  },
  {
    title: "High School Diploma",
    org: "Claro M. Recto Information and Communication Technology High School",
    period: "2009 – 2013",
    points: [],
  },  
];

export const experienceTimeline = [
  {
    title: "Senior Software Engineer / Full-stack Developer",
    org: "Bycodeworks",
    period: "August 2021 – August 2026",
    points: [
      "Joined as a hands-on Senior Software Engineer and later took on Lead Programmer responsibilities, including assigning development tasks to a team of 3 developers and reviewing/QA’ing their work.",
      "Maintained and enhanced Traffic School and WordPress-based marketing applications, developing full-stack features, resolving issues, and improving system functionality based on client requirements.",
      "Integrated and maintained third-party services and APIs, including Stripe, EasyPost, Auth0, BlueNotary, CleverTap, Intercom, Plaid, Proof, Reviews.io, SendGrid, and VWO.",
      "Collaborated with clients and developers to translate business requirements into technical solutions, proactively improving system maintainability and coordinating stable releases from development through QA and deployment.",
    ],
  },
  {
    title: "Mid-level Software Engineer",
    org: "JDEV Office Solution Inc.",
    period: "May 2017 - August 2021",
    points: [
      "Maintained and customized HR, Scheduling, and Payroll systems for 6 clients, adapting functionality to their business rules, organizational settings, and requirements, including Philippine payroll regulations.",
      "Developed and maintained Payroll, Clinic Management, Billing, and Accounting systems, covering modules such as Customer Subsidiary, Statements of Accounts, Payments, Purchasing, Sales, and Inventory.",
      "Worked on business management systems supporting Bill of Materials, Invoicing, Job Orders, and Variation Orders, while managing and deploying client applications on cloud servers.",
      "Collaborated directly with clients to understand business requirements, implement system improvements, and provide technical support and troubleshooting for both applications and computer hardware/software.",
    ],
  },
  {
    title: "Database Editor - Intern",
    org: "Top Data Global IT Solutions",
    period: "November 2016 – March 2017",
    points: [
      "Maintained and updated database records to ensure data accuracy, consistency, and reliability.",
      "Performed data entry, validation, organization, and cleanup of database information.",
      "Identified and corrected data inconsistencies and errors to maintain accurate records.",
      "Supported the team in maintaining organized and reliable database records for daily operations.",
    ],
  },
];

export const heroSkills = [
  { name: "PHP", logo: "/images/technologies/php.svg" },
  { name: "Laravel", logo: "/images/technologies/laravel.svg" },
  { name: "React", logo: "/images/technologies/react.svg" },
  { name: "MySQL", logo: "/images/technologies/mysql.svg" },
  { name: "CodeIgniter", logo: "/images/technologies/codeigniter.svg" },
  { name: "WordPress", logo: "/images/technologies/wordpress.svg" },
];

export const NAV = [
  { id: "hero", label: "hero" },
  { id: "about", label: "about" },
  { id: "experiences", label: "experiences" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "services", label: "services" },
  { id: "academic", label: "academic" },
  { id: "contact", label: "contact" },
];
