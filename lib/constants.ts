import { GALLERY_PATHS } from "./site-images";
import { withBasePath } from "./site";

export const THEME = {
  // Switch accent color here to update the entire site
  // Options: '#1B4FD8' (cobalt) or '#F8F9FC' (white)
  accent: "#1B4FD8",
  accentHover: "#3366FF",
  accentDark: "#0F2F8A",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES_MEGA = [
  {
    slug: "epc-services",
    name: "EPC Services",
    description: "End-to-end project execution",
    icon: "Cpu",
  },
  {
    slug: "installation-commissioning",
    name: "Installation & Commissioning",
    description: "Precision setup and activation",
    icon: "Wrench",
  },
  {
    slug: "project-management",
    name: "Project Management",
    description: "Structured coordination and delivery",
    icon: "ClipboardList",
  },
  {
    slug: "service-maintenance",
    name: "Service & Maintenance",
    description: "Lifecycle performance support",
    icon: "Activity",
  },
  {
    slug: "residential-rooftop",
    name: "Residential Rooftop",
    description: "Smart home solar solutions",
    icon: "Home",
  },
  {
    slug: "other-solar-services",
    name: "Other Solar Services",
    description: "Specialized project support",
    icon: "Settings",
  },
] as const;

export const FOOTER_QUICK_LINKS = NAV_LINKS;

export const FOOTER_SERVICES = [
  { href: "/services/epc-services", label: "EPC Services" },
  { href: "/services/installation-commissioning", label: "Installation & Commissioning" },
  { href: "/services/project-management", label: "Project Management" },
  { href: "/services/service-maintenance", label: "Service & Maintenance" },
  { href: "/services/residential-rooftop", label: "Residential Rooftop Solar" },
  { href: "/services/other-solar-services", label: "Other Solar Services" },
] as const;

export const CONTACT = {
  phone: "+91 70320 35976",
  phoneRaw: "917032035976",
  email: "rjsunsolgreenenergy2024@gmail.com",
  address: "274B, Tiruppur Road, Kangeyam, Tiruppur – 638701",
  website: "rjsunsol.com",
  whatsappUrl: "https://wa.me/917032035976",
} as const;

export const IMAGE_OVERLAY = {
  hero: "var(--overlay-hero)",
  section: "var(--overlay-section)",
  cta: "var(--overlay-cta)",
} as const;

/** Shared hero background motion: parallax (scroll) + Ken Burns (scale). Use with useReducedMotion(). */
export const HERO_MOTION = {
  kenBurnsScale: 1.15,
  kenBurnsDuration: 25,
  parallaxScrollRange: [0, 600] as const,
  parallaxTransformRange: [0, 100] as const,
} as const;

export const BLOGS_DATA = [
  {
    slug: "commercial-solar-benefits",
    title: "How Solar Energy Installation Benefits Commercial Industries",
    excerpt: "How commercial enterprises are transforming their bottom line — and their legacy — by harnessing the sun's limitless potential.",
    category: "Commercial Solar",
    readTime: "8 min read",
    date: "March 2026",
    datePublished: "2026-03-01",
    dateModified: "2026-03-01",
    heroImage: withBasePath("/images/blog-commercial-solar.webp"),
    cta: "Every day without solar is a day of untapped savings. A commercial solar assessment is the logical first step toward understanding the opportunity sitting on your roof.",
  },
  {
    slug: "ongrid-vs-offgrid-solar",
    title: "On-Grid vs. Off-Grid Solar: What Every Business Should Know Before Making a Decision",
    excerpt: "If you're exploring solar energy for your facility, this is the right place to start. The answer shapes everything — system design, budget, technology, and long-term returns.",
    category: "Solar Basics",
    readTime: "10 min read",
    date: "March 2026",
    datePublished: "2026-03-05",
    dateModified: "2026-03-05",
    heroImage: withBasePath("/images/blog-ongrid-offgrid.webp"),
    cta: "Whether you're powering a family home, a remote cabin, or a commercial factory — solar energy starts with one simple choice: how connected do you want to be?",
  },
  {
    slug: "what-is-epc-provider",
    title: "What Is an EPC Provider in Solar Energy — and Why Does It Matter Who Builds Your System?",
    excerpt: "If you're evaluating solar for your facility, you'll encounter this term early. Understanding what an EPC provider does can be the difference between a system that delivers returns for 25 years and one that underperforms.",
    category: "EPC & Engineering",
    readTime: "12 min read",
    date: "March 2026",
    datePublished: "2026-03-10",
    dateModified: "2026-03-10",
    heroImage: withBasePath("/images/blog-epc-provider.webp"),
    cta: "Evaluating solar for your facility? The first step is a thorough site and energy assessment conducted by a qualified EPC team. Reach out to us to understand what the right system for your facility looks like.",
  },
  {
    slug: "solar-facility-assessment",
    title: "Is Your Facility a Good Fit for Solar? 6 Factors That Determine Solar Viability",
    excerpt: "Before committing to a solar investment, here's how to assess whether your facility is genuinely well-suited — and what to do if it isn't straightforward.",
    category: "Solar Basics",
    readTime: "11 min read",
    date: "March 2026",
    datePublished: "2026-03-15",
    dateModified: "2026-03-15",
    heroImage: withBasePath("/images/blog-facility-assessment.webp"),
    cta: "Want to know if your facility is a good candidate for solar? Our team conducts detailed feasibility assessments for commercial and industrial sites. Get in touch to schedule yours.",
  },
] as const;

export type BlogPost = (typeof BLOGS_DATA)[number];

export const SERVICES_DATA = [
  {
    slug: "epc-services",
    number: "01",
    category: "Engineering",
    title: "EPC Services",
    subtitle: "Complete Engineering, Procurement & Construction",
    heroImage: withBasePath("/images/installation_hero-construction.webp"),
    overviewImage: withBasePath("/images/solar-farms_solar-farm-golden.webp"),
    description:
      "We provide full-scope Engineering, Procurement, and Construction services for utility-scale and commercial solar projects — managing every stage from initial feasibility through to final commissioning.",
    longDescription:
      "Our EPC service covers the complete project lifecycle. We begin with detailed site assessment and energy yield analysis, move through system design, equipment procurement from certified vendors, and execute installation with precision. Every project is handed over with full documentation, training, and performance guarantees.",
    keyFeatures: [
      {
        title: "Feasibility & Site Assessment",
        description:
          "Detailed solar resource analysis, shadow studies, and grid connectivity evaluation before any investment is committed.",
      },
      {
        title: "System Design & Engineering",
        description:
          "Data-driven electrical and civil designs optimized for maximum energy yield, safety compliance, and long-term durability.",
      },
      {
        title: "Procurement & Supply Chain",
        description:
          "Strategic sourcing from certified Tier-1 manufacturers ensuring quality, delivery timelines, and cost efficiency.",
      },
      {
        title: "Construction & Installation",
        description:
          "Disciplined on-site execution by trained technicians following strict quality and safety protocols.",
      },
      {
        title: "Commissioning & Handover",
        description:
          "End-to-end system testing, performance validation, operator training, and complete documentation handover.",
      },
      {
        title: "Post-Commissioning Support",
        description:
          "Immediate post-handover support ensuring stable performance during the critical early operation phase.",
      },
    ],
    stats: [
      { number: "113", suffix: "+", unit: "MW", label: "Commissioned" },
      { number: "13", suffix: "", unit: "", label: "Projects Delivered" },
      { number: "100", suffix: "%", unit: "", label: "On-Time Delivery" },
    ],
    processSteps: [
      "Site Assessment & Feasibility",
      "System Design & Engineering",
      "Equipment Procurement",
      "Civil & Electrical Works",
      "Testing & Commissioning",
      "Handover & Documentation",
    ],
  },
  {
    slug: "installation-commissioning",
    number: "02",
    category: "Installation",
    title: "Installation & Commissioning",
    subtitle: "Precision Setup & Seamless Activation",
    heroImage: withBasePath("/images/installation_workers-install.webp"),
    overviewImage: withBasePath("/images/installation_mounting-structure.webp"),
    description:
      "Our expert installation teams ensure precise, safe, and efficient solar system setup — from panel mounting and electrical works through to full grid commissioning and performance testing.",
    longDescription:
      "Every installation is executed by trained technicians following strict quality and safety protocols. We manage civil works, module mounting, inverter installation, cabling, earthing, and grid synchronization — ensuring your system is activated correctly the first time.",
    keyFeatures: [
      {
        title: "Structural Mounting Systems",
        description:
          "Custom mounting structures designed for ground-mount and rooftop installations across varied terrain.",
      },
      {
        title: "Electrical & Cable Works",
        description:
          "DC and AC electrical works including cable laying, terminations, protection systems, and earthing.",
      },
      {
        title: "Inverter & Equipment Setup",
        description:
          "Professional installation and configuration of inverters, transformers, and switchgear.",
      },
      {
        title: "Grid Synchronization",
        description:
          "Complete grid connectivity setup and synchronization ensuring compliance with utility requirements.",
      },
      {
        title: "Performance Testing",
        description:
          "Comprehensive system testing including IV curve tracing, insulation resistance, and yield verification.",
      },
      {
        title: "Safety & Compliance",
        description:
          "All works executed per CEIG standards, local regulations, and industry safety protocols.",
      },
    ],
    stats: [
      { number: "100", suffix: "+", unit: "MW", label: "Installed" },
      { number: "30", suffix: "+", unit: "MW", label: "In Progress" },
      { number: "5", suffix: "+", unit: "", label: "Regions Active" },
    ],
    processSteps: [
      "Site Preparation",
      "Structural Installation",
      "Module Mounting",
      "Electrical Works",
      "System Testing",
      "Grid Commissioning",
    ],
  },
  {
    slug: "project-management",
    number: "03",
    category: "Management",
    title: "Project Management",
    subtitle: "Structured Coordination & Accountable Delivery",
    heroImage: withBasePath("/images/civil-works_cable-laying-team.webp"),
    overviewImage: withBasePath("/images/civil-works_trench-team.webp"),
    description:
      "Our dedicated project management capability ensures every solar project is delivered on schedule, within budget, and to the highest quality standards — with full transparency at every stage.",
    longDescription:
      "We deploy structured project management frameworks covering planning, scheduling, procurement coordination, quality assurance, HSE compliance, and stakeholder reporting. Our project managers act as your single point of accountability from kickoff to handover.",
    keyFeatures: [
      {
        title: "Project Planning & Scheduling",
        description:
          "Detailed project schedules with milestones, resource allocation, and critical path management.",
      },
      {
        title: "Quality Assurance",
        description:
          "Structured QA/QC protocols at every stage ensuring materials and workmanship meet specifications.",
      },
      {
        title: "HSE Management",
        description:
          "Rigorous health, safety, and environment protocols protecting workers and communities.",
      },
      {
        title: "Vendor & Procurement Coordination",
        description:
          "Seamless coordination across equipment vendors, subcontractors, and logistics partners.",
      },
      {
        title: "Progress Reporting",
        description:
          "Regular structured reports keeping clients informed with full transparency on progress and risks.",
      },
      {
        title: "Risk Management",
        description:
          "Proactive identification and mitigation of project risks before they impact delivery.",
      },
    ],
    stats: [
      { number: "13", suffix: "", unit: "", label: "Projects Managed" },
      { number: "100", suffix: "%", unit: "", label: "On-Time Completion" },
      { number: "5", suffix: "+", unit: "", label: "Regions Covered" },
    ],
    processSteps: [
      "Project Kickoff",
      "Planning & Scheduling",
      "Procurement Coordination",
      "Execution Monitoring",
      "QA/QC Reviews",
      "Closeout & Handover",
    ],
  },
  {
    slug: "service-maintenance",
    number: "04",
    category: "Operations",
    title: "Service & Maintenance",
    subtitle: "Lifecycle Support for Peak Performance",
    heroImage: GALLERY_PATHS.scadaPanel,
    overviewImage: GALLERY_PATHS.weatherStation,
    description:
      "Our comprehensive O&M service keeps your solar assets performing at their best — with preventive maintenance schedules, rapid response support, and continuous performance monitoring.",
    longDescription:
      "Solar assets require structured ongoing care to deliver their promised returns. Our O&M teams provide routine preventive maintenance, performance diagnostics, cleaning programs, SCADA monitoring, and rapid corrective action — minimizing downtime and maximizing energy yield year over year.",
    keyFeatures: [
      {
        title: "Preventive Maintenance",
        description:
          "Scheduled inspection and servicing programs preventing failures before they occur.",
      },
      {
        title: "Performance Monitoring",
        description:
          "Real-time SCADA-based monitoring tracking energy output, system health, and anomaly detection.",
      },
      {
        title: "Panel Cleaning Programs",
        description:
          "Regular module cleaning schedules maintaining peak energy yield throughout the year.",
      },
      {
        title: "Corrective Maintenance",
        description:
          "Rapid response teams deployed for fault diagnosis and repair minimizing generation losses.",
      },
      {
        title: "Annual Performance Reports",
        description:
          "Detailed annual reports benchmarking actual vs expected yield with improvement recommendations.",
      },
      {
        title: "Warranty & Insurance Support",
        description:
          "Documentation and technical support for warranty claims and insurance assessments.",
      },
    ],
    stats: [
      { number: "100", suffix: "+", unit: "MW", label: "Under Maintenance" },
      { number: "24", suffix: "/7", unit: "", label: "Monitoring" },
      { number: "100", suffix: "%", unit: "", label: "Client Retention" },
    ],
    processSteps: [
      "Asset Onboarding",
      "Baseline Assessment",
      "Maintenance Scheduling",
      "Routine Inspections",
      "Performance Reviews",
      "Annual Reporting",
    ],
  },
  {
    slug: "residential-rooftop",
    number: "05",
    category: "Residential",
    title: "Residential Rooftop Solar",
    subtitle: "Clean Energy for Every Home",
    heroImage: withBasePath("/images/installation_solar-panels-close.webp"),
    overviewImage: withBasePath("/images/installation_panel-blue-sky.webp"),
    description:
      "Affordable, high-quality rooftop solar systems designed for Indian homes — cutting electricity bills, enabling net metering, and delivering lasting value for families.",
    longDescription:
      "We make going solar simple for homeowners. From the first site visit and system sizing through to installation, grid connectivity, net metering registration, and post-installation support — we handle everything so you can start saving from day one.",
    keyFeatures: [
      {
        title: "Home Site Assessment",
        description:
          "Roof evaluation, shadow analysis, and consumption assessment to right-size your system.",
      },
      {
        title: "Custom System Design",
        description:
          "Tailored system designs maximizing rooftop utilization and household energy offset.",
      },
      {
        title: "Quality Equipment",
        description:
          "Tier-1 panels and inverters backed by manufacturer warranties for lasting performance.",
      },
      {
        title: "Net Metering Support",
        description:
          "Complete support for DISCOM net metering applications and approvals.",
      },
      {
        title: "Clean Installation",
        description:
          "Neat, professional installation with minimal disruption to your home and daily routine.",
      },
      {
        title: "Ongoing Support",
        description:
          "Post-installation monitoring, maintenance, and assistance whenever you need it.",
      },
    ],
    stats: [
      { number: "5", suffix: "kW", unit: "", label: "Avg Home System" },
      { number: "90", suffix: "%", unit: "", label: "Bill Reduction" },
      { number: "25", suffix: "+", unit: "", label: "Year System Life" },
    ],
    processSteps: [
      "Home Assessment",
      "System Design",
      "DISCOM Approval",
      "Installation",
      "Net Metering",
      "Handover & Support",
    ],
  },
  {
    slug: "other-solar-services",
    number: "06",
    category: "Specialized",
    title: "Other Solar Services",
    subtitle: "Specialized Solar Support for Every Need",
    heroImage: GALLERY_PATHS.weatherStation,
    overviewImage: GALLERY_PATHS.scadaPanel,
    description:
      "Beyond standard EPC, we offer a range of specialized solar services including structure fabrication, inverter replacement, panel cleaning, system audits, and expansion support — tailored to meet diverse energy requirements with flexibility and reliability.",
    longDescription:
      "Our extended solar services are designed to support clients at every stage of their solar journey. Whether you need structural fabrication for mounting systems, inverter replacement for aging plants, professional panel cleaning programs, comprehensive system audits, or capacity expansion support — our technical team delivers with the same precision and quality as our core EPC work. Driven by technical excellence and a commitment to quality, we ensure seamless execution, strong service support, and sustainable energy outcomes across all projects.",
    keyFeatures: [
      {
        title: "Structure Fabrication",
        description:
          "Custom design and fabrication of mounting structures for ground-mount and rooftop solar installations across varied terrain and load conditions.",
      },
      {
        title: "Inverter Replacement",
        description:
          "Supply and replacement of inverters for aging or underperforming solar plants, ensuring minimal downtime and restored energy output.",
      },
      {
        title: "Panel Cleaning Services",
        description:
          "Professional module cleaning programs that restore panel efficiency and maintain peak energy yield throughout the year.",
      },
      {
        title: "System Audits",
        description:
          "Comprehensive technical audits of existing solar installations benchmarking actual vs expected performance with detailed corrective recommendations.",
      },
      {
        title: "Expansion Support",
        description:
          "End-to-end support for capacity expansion of existing solar plants — from feasibility and design through to installation and grid integration.",
      },
      {
        title: "Technical Consultancy",
        description:
          "Expert advisory on system optimization, technology upgrades, and performance improvement for any solar installation.",
      },
    ],
    stats: [
      { number: "13", suffix: "+", unit: "", label: "Projects Supported" },
      { number: "6", suffix: "", unit: "", label: "Service Types" },
      { number: "5", suffix: "+", unit: "", label: "Regions Active" },
    ],
    processSteps: [
      "Requirement Analysis",
      "Technical Proposal",
      "Scope Finalization",
      "Service Execution",
      "Quality Review",
      "Delivery & Support",
    ],
  },
] as const;

export type ServiceData = (typeof SERVICES_DATA)[number];
