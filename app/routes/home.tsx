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
import { Hero } from "~/components/hero"
import { ProjectCard } from "~/components/project-card"
import { Footer } from "~/components/footer"
import BlogCard from "~/components/blog-card"
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

      <main>
        <Hero />

        <section id="projects" className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold">Selected projects</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sampleProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>

        <section id="latest-posts" className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Latest posts</h2>
            <a href="/blog" className="text-sm text-primary underline">See all</a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {topPosts.length ? (
              topPosts.map((post) => <BlogCard key={post.id} post={post} />)
            ) : (
              <p className="text-muted-foreground">No posts yet.</p>
            )}
          </div>
        </section>

        <section id="technologies" className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold">Technologies</h2>
          <p className="mt-2 text-muted-foreground">Tools and technologies I use every day.</p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "TypeScript",
              "React",
              "Node.js",
              "PostgreSQL",
              "Prisma",
              "Docker",
              "Tailwind CSS",
              "AWS",
            ].map((t) => (
              <div key={t} className="rounded-md border p-3 text-center text-sm">
                {t}
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold">Education</h2>
          <div className="mt-4 space-y-4">
            <div className="rounded-md border p-4">
              <h3 className="font-medium">B.S. Computer Science — University of Somewhere</h3>
              <p className="text-sm text-muted-foreground">2015 — 2019</p>
              <p className="mt-2 text-sm">Focus on distributed systems, databases, and full-stack development.</p>
            </div>

            <div className="rounded-md border p-4">
              <h3 className="font-medium">Professional Certificate — Cloud Engineering</h3>
              <p className="text-sm text-muted-foreground">2022</p>
              <p className="mt-2 text-sm">Hands-on cloud architecture and CI/CD best practices.</p>
            </div>
          </div>
        </section>

        <section id="clients" className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold">Clients & collaborators</h2>
          <p className="mt-2 text-muted-foreground">Selected companies I&apos;ve worked with.</p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
            {[
              { name: "Acme Co" },
              { name: "Bright Apps" },
              { name: "Fintech Labs" },
              { name: "HealthSync" },
            ].map((c) => (
              <div key={c.name} className="flex items-center justify-center rounded-md border p-4">
                <span className="text-sm font-medium">{c.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-semibold">Get in touch</h2>
          <p className="mt-2 text-muted-foreground">I&apos;m available for freelance and full-time opportunities.</p>
        </section>
      </main>

      <Footer />
    </div>
  )
}