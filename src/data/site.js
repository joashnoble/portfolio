import {
  Briefcase, FolderGit2, Users, Server, Layout, Globe, Plug, Database, Code2, Wrench,
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
  title: "Senior Software Engineer / Full-stack Developer",
  tagline: "Full-stack software engineer building reliable, scalable web applications and business solutions.",
  location: "Angeles City, Pampanga, Philippines",
};

export const about = {
  subtitle: "A bit about how I work",
  paragraphs: [
    "I’m a Full-Stack Software Engineer with nearly 10 years of professional experience building, maintaining, and improving business applications. I specialize in PHP, Laravel, CodeIgniter, JavaScript, React, WordPress, and MySQL, with experience integrating third-party services such as Stripe, EasyPost, and Auth0.",
    "Throughout my career, I’ve worked across the full development lifecycle from understanding client requirements and developing features to API integrations, debugging, code reviews, QA, and system maintenance. I enjoy solving complex problems, improving existing systems, and building practical, reliable software that meets real-world business needs.",
  ],
};

export const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "Build and maintain business applications using PHP, Laravel, CodeIgniter, JavaScript, React, Vue, and MySQL.",
    icon: Server,
  },
  {
    title: "Third-Party API Integration",
    description:
      "Integrate payment, shipping, authentication, analytics, communication, and other third-party services into existing applications.",
    icon: Plug,
  },
  {
    title: "System Maintenance & Customization",
    description:
      "Maintain existing applications, troubleshoot issues, implement client-specific requirements, and improve system functionality.",
    icon: Wrench,
  },
  {
    title: "Code Review & Technical Leadership",
    description:
      "Review pull requests, coordinate development tasks, perform QA, and help ensure reliable and maintainable releases.",
    icon: Users,
  },
];

export const skillCategories = [
  {
    title: "Backend & Database",
    icon: Database,
    skills: [
      { name: "PHP", level: 90 },
      { name: "Laravel", level: 90 },
      { name: "CodeIgniter", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "Database Design", level: 82 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "JavaScript", level: 85 },
      { name: "React", level: 78 },
      { name: "Vue", level: 75 },
      { name: "HTML / CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Integrations, Tools & Practices",
    icon: Wrench,
    skills: [
      { name: "WordPress", level: 87 },
      { name: "API Integration", level: 90 },
      { name: "Third-Party Integrations", level: 90 },
      { name: "Git", level: 88 },
      { name: "Code Review", level: 90 },
      { name: "QA & Debugging", level: 88 },
    ],
  },
];

export const projects = [
  {
    title: "Traffic School System",
    image: "/images/projects/traffic-school-system.png",
    tags: ["Laravel", "MySQL", "Stripe", "EasyPost", "Auth0"],
    description:
      "Maintained and enhanced a production business application, integrating Stripe, EasyPost, and Auth0 while implementing client requirements and system improvements.",
    url: null,
  },
  {
    title: "Client Drive System",
    image: "/images/projects/client-drive-system.jpg",
    tags: ["Laravel", "MySQL", "React", "Stripe"],
    description:
      "Contributed to a client management platform combining task management, client communication, and payment functionality, including Stripe integration.",
  },
  {
    title: "WordPress Marketing Application",
    image: "/images/projects/wordpress-marketing-application.png",
    tags: ["WordPress", "PHP", "JavaScript", "CSS"],
    description:
      "Maintained and enhanced the Traffic School System's WordPress marketing website by implementing new features, updates, and client-requested changes.",
  },
  {
    title: "HR, Scheduling & Payroll System",
    image: "/images/projects/hr-scheduling-payroll-system.png",
    tags: ["PHP", "Codeigniter", "MySQL", "Ajax", "Jquery", "Payroll"],
    description:
      "Customized and maintained HR, scheduling, and payroll systems based on client requirements, including Philippine statutory payroll updates for SSS, Pag-IBIG, PhilHealth, and withholding tax.",
  },
  {
    title: "Clinic Management System",
    image: "/images/projects/clinic-management-system.png",
    tags: ["PHP", "Codeigniter", "MySQL", "Ajax", "Jquery"],
    description:
      "Maintained a clinic management system used by a private clinic to support day-to-day business and operational processes.",
  },
  {
    title: "Billing & Accounting Systems",
    image: "/images/projects/billing-accounting-system.png",
    tags: ["PHP", "Codeigniter", "MySQL", "Ajax", "Jquery", "Accounting"],
    description:
      "Maintained billing functionality for multiple clients, including customer subsidiaries, statements of accounts, payments, purchasing, sales, and inventory.",
  },
  {
    title: "Business Management System",
    image: "/images/projects/business-management-system.png",
    tags: ["PHP", "Codeigniter", "MySQL", "Ajax", "Jquery", "Business Management"],
    description:
      "Maintained a business management system covering Bill of Materials, Invoicing, Job Orders, and Variation Orders for multiple clients.",
  },
  {
    title: "Church System",
    image: "/images/projects/church-system.png",
    tags: ["PHP", "CodeIgniter", "MySQL", "Ajax", "jQuery", "Tailwind"],
    description:
      "A church management system for managing members, records, schedules, and other administrative activities, designed to streamline day-to-day church operations.",
  },
  {
    title: "Enrollment System",
    image: "/images/projects/enrollment-system.png",
    tags: ["PHP", "CodeIgniter", "MySQL", "Ajax", "jQuery", "Tailwind"],
    description:
      "A student enrollment and academic management system for handling student records, enrollment, schedules, and related administrative processes.",
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
      "Served as Lead Programmer, guiding technical implementation, assigning development tasks to a team of 3 developers, and overseeing development activities, code reviews, QA, and deployments.",
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
  { name: "CodeIgniter", logo: "/images/technologies/codeigniter.svg" },
  { name: "React", logo: "/images/technologies/react.svg" },
  { name: "Vue", logo: "/images/technologies/vue.svg" },
  { name: "WordPress", logo: "/images/technologies/wordpress.svg" },
  { name: "MySQL", logo: "/images/technologies/mysql.svg" },
  { name: "Figma", logo: "/images/technologies/figma.svg" },
  { name: "Photoshop", logo: "/images/technologies/photoshop.svg" },
];

export const NAV = [
  { id: "hero", label: "hero" },
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "experiences", label: "experiences" },
  { id: "projects", label: "projects" },
  { id: "services", label: "services" },
  { id: "academic", label: "academic" },
  { id: "contact", label: "contact" },
];
