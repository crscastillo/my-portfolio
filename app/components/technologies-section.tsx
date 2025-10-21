export default function TechnologiesSection({ techs }: { techs: string[] }) {
  return (
    <section id="technologies" className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold">Technologies</h2>
      <p className="mt-2 text-muted-foreground">Tools and technologies I use every day.</p>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {techs.map((t) => (
          <div key={t} className="rounded-md border p-3 text-center text-sm">
            {t}
          </div>
        ))}
      </div>
    </section>
  )
}
