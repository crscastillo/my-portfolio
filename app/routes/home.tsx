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
import GitHubRepos from "~/components/github-repos"
import { getTopPosts, type Post as BlogPost } from "../../lib/db/posts"
import { useEffect, useState } from "react"
import siteData, { sampleProjects, techs, educationEntries, clients } from "~/data/site-data"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Carlos Castillo — Full-stack Developer" },
    { name: "description", content: "Portfolio of Carlos Castillo — full-stack software developer." },
  ]
}

// project and site data are centralized in app/data/site-data.ts

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

        <TechnologiesSection techs={techs} />

        <EducationSection entries={educationEntries} />

  <ClientsSection clients={clients} />

  <GitHubRepos username="crscastillo" count={8} />

  <ContactSection />
      </main>

      <Footer />
    </div>
  )
}