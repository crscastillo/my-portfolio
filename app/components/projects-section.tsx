import { ProjectCard } from "~/components/project-card"

export default function ProjectsSection({ projects }: { projects: Array<any> }) {
  return (
    <section id="projects" className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold">Selected projects</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p: any) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
