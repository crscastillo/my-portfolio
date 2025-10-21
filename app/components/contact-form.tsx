import { useState } from "react"

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<string | null>(null)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("sending")

    const fd = new FormData()
    fd.append("name", form.name)
    fd.append("email", form.email)
    fd.append("subject", form.subject)
    fd.append("message", form.message)

    try {
      const res = await fetch("/api/contact", { method: "POST", body: fd })
      const data = await res.json()
      if (res.ok && data.success) {
        setStatus("sent")
        setForm({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={submit} className="max-w-lg space-y-4">
      <div>
        <label className="block text-sm">Name</label>
        <input className="w-full rounded border px-3 py-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      </div>

      <div>
        <label className="block text-sm">Email</label>
        <input className="w-full rounded border px-3 py-2" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      </div>

      <div>
        <label className="block text-sm">Subject</label>
        <input className="w-full rounded border px-3 py-2" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
      </div>

      <div>
        <label className="block text-sm">Message</label>
        <textarea className="w-full rounded border px-3 py-2" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      </div>

      <div className="flex items-center gap-2">
        <button type="submit" className="rounded bg-primary px-4 py-2 text-primary-foreground" disabled={status === "sending"}>Send</button>
        {status === "sending" && <span className="text-sm">Sending…</span>}
        {status === "sent" && <span className="text-sm text-green-500">Sent — thanks!</span>}
        {status === "error" && <span className="text-sm text-red-500">Error sending</span>}
      </div>
    </form>
  )
}
