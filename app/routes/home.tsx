// import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

// export default function Home() {
//   return <Welcome />;
// }

import type { Route } from "./+types/home"
import { Header } from "~/components/header"
import { HeroSection } from "~/components/hero-section"
import { Footer } from "~/components/footer"
import ProjectsSection from "~/components/projects-section"
import TechnologiesSection from "~/components/technologies-section"
import EducationSection from "~/components/education-section"
import ClientsSection from "~/components/clients-section"
import LatestPostsSection from "~/components/latest-posts-section"
import ContactSection from "~/components/contact-section"
import { getTopPosts, type Post as BlogPost } from "../../lib/db/posts"
import { useEffect, useState } from "react"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Carlos Castillo — Full-stack Developer" },
    { name: "description", content: "Portfolio of Carlos Castillo — full-stack software developer." },
  ]
}

const sampleProjects = [
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

export default function Home() {
  const [topPosts, setTopPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    let mounted = true
    getTopPosts(3).then((p: BlogPost[]) => {
      if (mounted) setTopPosts(p)
    })
    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-12 flex flex-col items-center text-center space-y-12">
        <HeroSection />

        <ProjectsSection projects={sampleProjects} />

        <LatestPostsSection posts={topPosts} />

        <TechnologiesSection
          techs={["TypeScript", "React", "Node.js", "PostgreSQL", "Prisma", "Docker", "Tailwind CSS", "AWS"]}
        />

        <EducationSection
          entries={[
            { title: "B.S. Computer Science — University of Somewhere", date: "2015 — 2019", detail: "Focus on distributed systems, databases, and full-stack development." },
            { title: "Professional Certificate — Cloud Engineering", date: "2022", detail: "Hands-on cloud architecture and CI/CD best practices." },
          ]}
        />

        <ClientsSection clients={[{ name: "Acme Co" }, { name: "Bright Apps" }, { name: "Fintech Labs" }, { name: "HealthSync" }]} />

        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}