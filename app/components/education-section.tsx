export default function EducationSection({ entries }: { entries: Array<{ title: string; date: string; detail: string }> }) {
  return (
    <section id="education" className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold">Education</h2>
      <div className="mt-4 space-y-4">
        {entries.map((e) => (
          <div key={e.title} className="rounded-md border p-4">
            <h3 className="font-medium">{e.title}</h3>
            <p className="text-sm text-muted-foreground">{e.date}</p>
            <p className="mt-2 text-sm">{e.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
