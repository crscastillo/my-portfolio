export default function PersonalInfo({
  name,
  startYear,
  experience,
  location,
}: {
  name: string
  startYear?: number
  experience?: string
  location: string
}) {
  const years = typeof startYear === "number" ? new Date().getFullYear() - startYear : undefined

  return (
    <div className="mt-6 rounded-md border p-4 inline-block text-left">
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-muted-foreground">Experience: {years !== undefined ? `${years} years` : experience}</p>
      <p className="text-sm text-muted-foreground">Location: {location}</p>
    </div>
  )
}
