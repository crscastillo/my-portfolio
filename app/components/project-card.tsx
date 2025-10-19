import { Button } from "~/components/ui/button"

type Project = {
  id: string
  title: string
  description: string
  tech?: string
  href?: string
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border p-6">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
      {project.tech && (
        <p className="mt-3 text-xs text-muted-foreground">{project.tech}</p>
      )}

      <div className="mt-4 flex items-center gap-2">
        {project.href ? (
          <a href={project.href} target="_blank" rel="noreferrer">
            <Button size="sm">View</Button>
          </a>
        ) : (
          <Button size="sm" variant="ghost">Details</Button>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
