export default function PersonalInfo({ name, experience, location }: { name: string; experience: string; location: string }) {
  return (
    <div className="mt-6 rounded-md border p-4 inline-block text-left">
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-muted-foreground">Experience: {experience}</p>
      <p className="text-sm text-muted-foreground">Location: {location}</p>
    </div>
  )
}
