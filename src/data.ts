export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/founder", label: "Our Founder" },
  { to: "/contact", label: "Contact" },
];

export type Service = {
  id: string;
  no: string;
  name: string;
  short: string;
  tagline: string;
  desc: string[];
  offerTitle: string;
  offer: string[];
  benefitTitle: string;
  benefits: string[];
  tags: string[];
  note: string;
  accent: "teal" | "amber" | "sky";
};

export const SERVICES: Service[] = [
  {
    id: "custom-software",
    no: "01",
    name: "Custom Software Development",
    short: "Software tailored to your exact business processes and goals — never off-the-shelf.",
    tagline: "Build software that fits your business — not the other way around.",
    desc: [
      "At Teztecch, we design and develop custom software solutions tailored to your unique business processes, goals, and challenges. Unlike off-the-shelf tools, our solutions are built specifically for your workflow — ensuring maximum efficiency, scalability, and control.",
      "We work closely with you to understand your operations and create software that simplifies processes, eliminates manual work, and enhances productivity.",
    ],
    offerTitle: "What We Offer",
    offer: [
      "Business-specific software development",
      "Custom dashboards & reporting systems",
      "Process-driven application development",
      "Scalable architecture for future growth",
    ],
    benefitTitle: "Key Benefits",
    benefits: [
      "100% tailored to your business",
      "Increased operational efficiency",
      "Seamless integration with existing systems",
      "Secure, scalable & high-performance",
    ],
    tags: ["Dashboards", "Business Systems", "Scalable Architecture"],
    note: "Perfect for businesses looking to digitize and optimize their operations.",
    accent: "teal",
  },
  {
    id: "erp",
    no: "02",
    name: "ERP Software Solutions",
    short: "One unified system for inventory, billing, HR, payroll and reporting.",
    tagline: "Integrate, automate & control your entire business.",
    desc: [
      "Our ERP (Enterprise Resource Planning) solutions help you manage all your business operations — from inventory and accounts to HR and reporting — within a single, unified system.",
      "Teztecch ERP eliminates data silos and ensures real-time visibility across departments, helping you make faster and smarter decisions.",
    ],
    offerTitle: "Modules We Develop",
    offer: [
      "Inventory & Stock Management",
      "Billing & Accounting",
      "HR & Payroll",
      "Purchase & Sales Management",
      "Reports & Analytics",
    ],
    benefitTitle: "Key Benefits",
    benefits: [
      "Centralized business management",
      "Real-time data & reporting",
      "Reduced manual errors",
      "Improved operational efficiency",
    ],
    tags: ["Inventory", "Billing & Accounting", "HR & Payroll", "Analytics"],
    note: "A complete system to run your business smoothly and efficiently.",
    accent: "amber",
  },
  {
    id: "crm",
    no: "03",
    name: "CRM Software Solutions",
    short: "Manage leads, automate follow-ups and close more deals with smart CRM.",
    tagline: "Manage leads, track sales & close more deals.",
    desc: [
      "Teztecch CRM software helps you streamline your sales process by managing leads, automating follow-ups, and maintaining strong customer relationships.",
      "From lead capture to deal closure, our CRM ensures no opportunity is missed.",
    ],
    offerTitle: "Key Features",
    offer: [
      "Lead tracking & management",
      "Sales pipeline visualization",
      "Automated follow-ups & reminders",
      "Customer database management",
      "Team performance tracking",
    ],
    benefitTitle: "Key Benefits",
    benefits: [
      "Higher lead conversion rates",
      "Better sales visibility",
      "Improved customer engagement",
      "Organized and efficient workflow",
    ],
    tags: ["Lead Tracking", "Sales Pipeline", "Follow-ups", "Customer Database"],
    note: "Turn your leads into loyal customers with a powerful CRM system.",
    accent: "sky",
  },
  {
    id: "automation",
    no: "04",
    name: "Business Automation Software",
    short: "Intelligent systems that handle repetitive tasks while you focus on growth.",
    tagline: "Automate repetitive tasks & boost productivity.",
    desc: [
      "Reduce manual work and increase efficiency with intelligent automation solutions from Teztecch.",
      "We design systems that automate your daily operations, saving time and minimizing human errors.",
    ],
    offerTitle: "What We Automate",
    offer: [
      "Workflow & process automation",
      "Task & approval systems",
      "Data entry & processing",
      "Notifications & alerts",
    ],
    benefitTitle: "Key Benefits",
    benefits: [
      "Save time and operational costs",
      "Reduce human errors",
      "Faster execution of tasks",
      "Improved productivity",
    ],
    tags: ["Workflows", "Approvals", "Data Processing", "Alerts"],
    note: "Let technology handle routine work while you focus on growth.",
    accent: "teal",
  },
  {
    id: "saas",
    no: "05",
    name: "SaaS Product Development",
    short: "Scalable, secure cloud products — from idea to launch, end to end.",
    tagline: "Build scalable cloud-based software products.",
    desc: [
      "We help startups and enterprises build SaaS (Software as a Service) platforms that are scalable, secure, and accessible from anywhere.",
      "From idea to launch, Teztecch provides end-to-end SaaS product development services.",
    ],
    offerTitle: "What We Offer",
    offer: [
      "Multi-user cloud-based applications",
      "Subscription-based platforms",
      "Secure data architecture",
      "API integrations",
    ],
    benefitTitle: "Key Benefits",
    benefits: [
      "Scalable business model",
      "Global accessibility",
      "Recurring revenue potential",
      "High security & performance",
    ],
    tags: ["Cloud-Native", "Subscriptions", "Multi-User", "APIs"],
    note: "Turn your software idea into a successful SaaS product.",
    accent: "amber",
  },
  {
    id: "maintenance",
    no: "06",
    name: "Software Maintenance & Support",
    short: "Ongoing updates, optimization and security so systems never skip a beat.",
    tagline: "Keep your software running smoothly & securely.",
    desc: [
      "Software needs continuous monitoring, updates, and improvements to perform at its best.",
      "Teztecch provides reliable maintenance and support services to ensure your systems run without interruptions.",
    ],
    offerTitle: "Our Support Includes",
    offer: [
      "Bug fixes & issue resolution",
      "Performance optimization",
      "Regular updates & upgrades",
      "Security enhancements",
      "Technical support",
    ],
    benefitTitle: "Key Benefits",
    benefits: [
      "Improved system performance",
      "Enhanced security",
      "Reduced downtime",
      "Long-term reliability",
    ],
    tags: ["Bug Fixes", "Optimization", "Security", "24/7 Support"],
    note: "We ensure your software evolves as your business grows.",
    accent: "sky",
  },
];

export const WHY_CHOOSE = [
  {
    title: "Tailor-Made Software Solutions",
    desc: "Every system is engineered around your processes — no one-size-fits-all, no compromises.",
  },
  {
    title: "Experienced Development Team",
    desc: "Engineers who have shipped ERP, CRM and SaaS platforms across industries.",
  },
  {
    title: "Scalable & Secure Systems",
    desc: "Architectures built to grow with your business and hardened against threats.",
  },
  {
    title: "Business-Focused Approach",
    desc: "We measure success in your outcomes — efficiency, revenue and growth — not just code.",
  },
  {
    title: "End-to-End Support",
    desc: "From the first requirement workshop to years of maintenance, we stay with you.",
  },
];

export const STATS = [
  { value: 120, suffix: "+", label: "Projects Delivered", decimals: 0 },
  { value: 15, suffix: "+", label: "Industries Served", decimals: 0 },
  { value: 99.9, suffix: "%", label: "System Uptime", decimals: 1 },
  { value: 24, suffix: "/7", label: "Support Coverage", decimals: 0 },
];

export const PROCESS = [
  { step: "Understanding Requirements", desc: "We begin by deeply understanding your business, workflows and goals." },
  { step: "Planning & Design", desc: "Blueprints, architecture and UX are mapped before a single line is written." },
  { step: "Development", desc: "Agile sprints with transparent progress you can review at every stage." },
  { step: "Testing & Quality Assurance", desc: "Rigorous QA cycles ensure a stable, secure and reliable release." },
  { step: "Deployment", desc: "Smooth, zero-surprise rollout to production with training for your team." },
  { step: "Ongoing Support", desc: "Continuous monitoring, updates and enhancements as your business grows." },
];

export const STAND_OUT = [
  { title: "Customized solutions", desc: "No one-size-fits-all — every build is shaped around your operations." },
  { title: "Outcomes over code", desc: "A relentless focus on business results, not just delivery." },
  { title: "Long-term relationships", desc: "We stay engaged as partners, well beyond go-live." },
  { title: "Continuous innovation", desc: "Modern stacks and practices keep your systems ahead of the curve." },
];

export const CROSS_FEATURES = [
  "Scalable & Secure Systems",
  "User-Friendly Interface",
  "High Performance",
  "Integration Capabilities",
  "Cloud-Ready Solutions",
];

export const CONTACT = {
  location: "Nagpur, Maharashtra, India",
  phone: "+91-XXXXXXXXXX",
  email: "info@teztecch.com",
  website: "www.teztecch.com",
  websiteUrl: "https://teztecch.com",
  hours: [
    { day: "Monday – Saturday", time: "10:00 AM – 7:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
};

export const FOUNDER_IMAGE =
  "https://image.qwenlm.ai/generated-images/95d5874f-3fb2-4308-b68f-ce9db291d8a8/_result.png";
