import ContactForm from "~/components/contact-form"

export default function ContactSection() {
  return (
    <section id="contact" className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold">Get in touch</h2>
      <p className="mt-2 text-muted-foreground">I&apos;m available for freelance and full-time opportunities.</p>

      <div className="mt-6">
        <ContactForm />
      </div>
    </section>
  )
}
