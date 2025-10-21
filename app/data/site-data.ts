export const sampleProjects = [
  {
    id: "1",
    title: "Realtime Chat App",
    description: "Realtime messaging app with presence, typing indicators, and channels.",
    tech: "React, WebSockets, Node, PostgreSQL",
    href: "#",
  },
  {
    id: "2",
    title: "E-commerce Platform",
    description: "A scalable e-commerce backend with payments, inventory, and admin dashboard.",
    tech: "TypeScript, Express, Prisma, Stripe",
    href: "#",
  },
  {
    id: "3",
    title: "Design System",
    description: "A component library and design tokens used across multiple products.",
    tech: "React, Tailwind, Storybook",
    href: "#",
  },
]

export const techs = [
  "TypeScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Docker",
  "Tailwind CSS",
  "AWS",
]

export const educationEntries = [
  { title: "B.S. Computer Science — University of Somewhere", date: "2015 — 2019", detail: "Focus on distributed systems, databases, and full-stack development." },
  { title: "Professional Certificate — Cloud Engineering", date: "2022", detail: "Hands-on cloud architecture and CI/CD best practices." },
]

export const clients = [
  {
    name: "Silac",
    detail: "Platform architecture and API development",
    logoUrl: "https://logo.clearbit.com/silacins.com?size=128",
    website: "https://silacins.com",
    description: [
      "Led platform architecture and API development for Silac's core offerings.",
      "Designed resilient services, CI/CD pipelines, and observability for production systems.",
    ],
    tech: ["Go", "Postgres", "Docker", "AWS"],
  },
  {
    name: "Conductiv",
    detail: "Led backend & integrations for analytics products",
    website: "https://conductiv.com",
    description: [
      "Led backend development and integrations for analytics products, building event pipelines and SDKs.",
      "Worked closely with product to define data models and scale ingestion for high-throughput workloads.",
    ],
    tech: ["Python", "Kafka", "Postgres", "AWS"],
  },
  {
    name: "One Legal",
    detail: "Scaled document workflows and payment systems",
    website: "https://www.onelegal.com",
    description: [
      "Scaled document workflows and payment systems to improve throughput and reliability.",
      "Implemented robust background processing and optimized storage and retrieval paths.",
    ],
    tech: ["Python", "Node.js", "Postgres", "Stripe"],
  },
  {
    name: "Fiserv",
    detail: "Worked on payments and financial services integrations",
    website: "https://www.fiserv.com",
    description: [
      "Integrated payments and financial services APIs, improving reconciliation and monitoring.",
      "Collaborated with security and compliance teams to meet enterprise standards.",
    ],
    tech: ["Java", "Go", "AWS", "Docker"],
  },
  {
    name: "Chatham Financial",
    detail: "Systems integration and data pipelines",
    logoUrl: "https://logo.clearbit.com/chathamfinancial.com?size=128",
    website: "https://www.chathamfinancial.com",
    description: [
      "Built systems integration and data pipelines to connect internal and third-party systems.",
      "Delivered reliable ETL flows and monitoring for data quality.",
    ],
    tech: ["Python", "Airflow", "AWS"],
  },
  {
    name: "ImageNet",
    detail: "Worked on image processing pipelines and tooling",
    website: "https://imagenet.org",
    description: [
      "Developed image processing pipelines and tooling to support large-scale media workflows.",
      "Optimized processing performance and containerized workloads for reproducible deployments.",
    ],
    tech: ["Python", "TensorFlow", "Docker"],
  },
  {
    name: "By Design",
    detail: "Built design-to-production frontend workflows",
    website: "https://bydesign.com",
    description: [
      "Built design-to-production frontend workflows, bridging design systems and implementation.",
      "Improved developer experience and release automation for frontend teams.",
    ],
    tech: ["React", "TypeScript", "Tailwind", "Vite"],
  },
  {
    name: "Softland",
    detail: "Enterprise software and client integrations",
    website: "https://www.softland.com",
    description: [
      "Developed integrations and enhancements for Softland's enterprise product suite.",
      "Worked on cross-border deployments and optimizing deployment pipelines.",
    ],
    tech: ["Java", "Postgres", "Docker", "Kubernetes"],
  },
]

export default {
  sampleProjects,
  techs,
  educationEntries,
  clients,
}
