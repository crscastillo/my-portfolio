import { type ReactNode } from "react"

export default function ClientModal({
  open,
  onClose,
  title,
  children,
  tech,
  website,
  logoUrl,
}: {
  open: boolean
  onClose: () => void
  title: string
  children?: ReactNode
  tech?: string[]
  website?: string
  logoUrl?: string
}) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl mx-4 bg-card rounded-lg p-6 shadow-lg">
        <button className="absolute right-4 top-4 text-muted-foreground" onClick={onClose} aria-label="Close">✕</button>

        {logoUrl ? (
          <img src={logoUrl} alt={`${title} logo`} className="h-12 mx-auto mb-3 object-contain" />
        ) : null}

        <h3 className="text-xl font-semibold text-center">{title}</h3>

        <div className="mt-4 text-left">{children ?? <p className="text-sm text-muted-foreground">Add details about this engagement here.</p>}</div>

        {website && (
          <div className="mt-4 text-left">
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-sm text-primary underline break-all">
              {website}
            </a>
          </div>
        )}

        {tech && tech.length > 0 && (
          <div className="mt-4 text-left">
            <h4 className="text-sm font-medium">Tech stack</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {tech.map((t) => (
                <span key={t} className="rounded-md border px-2 py-1 text-xs">{t}</span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button onClick={onClose} className="rounded bg-primary px-4 py-2 text-primary-foreground">Close</button>
        </div>
      </div>
    </div>
  )
}
