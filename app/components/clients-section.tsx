import { useState } from "react"
import ClientModal from "~/components/client-modal"

type Client = {
  name: string
  detail?: string
  /** Optional explicit logo URL — if provided, it will be used instead of Clearbit */
  logoUrl?: string
  /** Longer descriptions (paragraphs) shown in the modal */
  description?: string[]
  /** Tech stack tags to display in the modal */
  tech?: string[]
  /** Company website (used to render link in modal) */
  website?: string
}

export default function ClientsSection({ clients }: { clients: Client[] }) {
  const [failed, setFailed] = useState<Record<string, boolean>>({})
  const [selected, setSelected] = useState<Client | null>(null)

  function initials(name: string) {
    return name
      .split(/\s+/)
      .map((s) => s[0])
      .slice(0, 2)
      .join("")
      .toUpperCase()
  }

  function slugFromName(name: string) {
    return name.toLowerCase().replace(/[^a-z0-9]/g, "")
  }

  return (
    <section id="clients" className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Clients & collaborators</h2>
        <p className="mt-2 text-muted-foreground">Selected companies I&apos;ve worked with.</p>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-start">
        {clients.map((c) => {
          const slug = slugFromName(c.name)
          const logoSrc = c.logoUrl ?? `https://logo.clearbit.com/${slug}.com?size=128`

          return (
            <button
              key={c.name}
              onClick={() => setSelected(c)}
              className="rounded-md border p-4 text-center flex flex-col items-center gap-3 text-left"
            >
              {!failed[c.name] ? (
                <img
                  src={logoSrc}
                  alt={`${c.name} logo`}
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    // hide broken image and mark as failed to show initials fallback
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    e.currentTarget.style.display = "none"
                    setFailed((s) => ({ ...s, [c.name]: true }))
                  }}
                />
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-sm font-semibold text-foreground">
                  {initials(c.name)}
                </div>
              )}

              <div className="text-sm font-medium">{c.name}</div>
              {c.detail && <div className="mt-1 text-xs text-muted-foreground">{c.detail}</div>}
            </button>
          )
        })}
      </div>

      <ClientModal
        open={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.name ?? ""}
        tech={selected?.tech}
        website={selected?.website}
        logoUrl={selected?.logoUrl}
      >
        <p className="text-sm text-muted-foreground">{selected?.detail ?? ""}</p>
        <div className="mt-4 space-y-3">
          {selected?.description?.map((p, idx) => (
            <p key={idx} className="text-sm text-foreground">{p}</p>
          ))}
        </div>
      </ClientModal>
    </section>
  )
}
