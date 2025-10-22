import { useEffect, useState } from "react"
import { Button } from "~/components/ui/button"

type Repo = {
  id: number
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  language: string | null
}

export default function GitHubRepos({ username = "crscastillo", count = 6 }: { username?: string; count?: number }) {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    setLoading(true)
    fetch(`https://api.github.com/users/${username}/repos?per_page=${count}&sort=updated`)
      .then((r) => {
        if (!r.ok) throw new Error(`GitHub API returned ${r.status}`)
        return r.json()
      })
      .then((data) => {
        if (!mounted) return
        setRepos(Array.isArray(data) ? data : [])
      })
      .catch((err) => {
        if (!mounted) return
        setError(String(err))
      })
      .finally(() => {
        if (!mounted) return
        setLoading(false)
      })
    return () => {
      mounted = false
    }
  }, [username, count])

  return (
    <section className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">GitHub</h2>
      <p className="text-sm text-muted-foreground mb-4">Latest public repositories from @{username} — fetched from the GitHub API.</p>

      {loading && <p className="text-sm">Loading...</p>}
      {error && <p className="text-sm text-red-500">Error loading repos: {error}</p>}

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((r) => (
          <li key={r.id} className="p-4 border rounded-lg bg-card">
            <div className="flex items-start justify-between gap-4">
              <div>
                <a href={r.html_url} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
                  {r.name}
                </a>
                {r.description && <p className="text-sm text-muted-foreground mt-1">{r.description}</p>}
                <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{r.language ?? "—"}</span>
                  <span>★ {r.stargazers_count}</span>
                </div>
              </div>
              <div className="flex items-center">
                <Button asChild size="sm" variant="outline">
                  <a href={r.html_url} target="_blank" rel="noopener noreferrer">View</a>
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-center">
        <Button asChild variant="ghost">
          <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">View all on GitHub</a>
        </Button>
      </div>
    </section>
  )
}
