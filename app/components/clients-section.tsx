export default function ClientsSection({ clients }: { clients: Array<{ name: string }> }) {
  return (
    <section id="clients" className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold">Clients & collaborators</h2>
      <p className="mt-2 text-muted-foreground">Selected companies I&apos;ve worked with.</p>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center">
        {clients.map((c) => (
          <div key={c.name} className="flex items-center justify-center rounded-md border p-4">
            <span className="text-sm font-medium">{c.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
