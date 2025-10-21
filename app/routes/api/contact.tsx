type ActionArgs = { request: Request }

function json(data: any, init?: ResponseInit) {
  return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" }, ...init })
}

export async function action({ request }: ActionArgs) {
  const form = await request.formData()
  const name = (form.get("name") as string) || ""
  const email = (form.get("email") as string) || ""
  const subject = (form.get("subject") as string) || "Website contact"
  const message = (form.get("message") as string) || ""

  if (!name || !email || !message) {
    return json({ success: false, error: "Missing fields" }, { status: 400 })
  }

  // If SMTP is configured, send an email using nodemailer.
  const SMTP_HOST = process.env.SMTP_HOST
  const SMTP_PORT = process.env.SMTP_PORT
  const SMTP_USER = process.env.SMTP_USER
  const SMTP_PASS = process.env.SMTP_PASS
  const FROM_EMAIL = process.env.FROM_EMAIL || SMTP_USER
  const TO_EMAIL = process.env.CONTACT_RECEIVER || "crscastillo+portfolioform@gmail.com"

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    // SMTP not configured on this environment.
    // Return success so the UI can show confirmation, but note that delivery won't happen.
    // In production you should configure SMTP or a transactional email provider.
    console.warn("SMTP not configured - received contact form:", { name, email, subject, message })
    return json({ success: true, info: "SMTP not configured; form received" })
  }

  try {
    // Import nodemailer dynamically so environments without it won't fail until action runs.
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const nodemailer = require("nodemailer")

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    })

    const text = `From: ${name} <${email}>
Subject: ${subject}

${message}`

    await transporter.sendMail({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `Portfolio contact: ${subject}`,
      text,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p><strong>Subject:</strong> ${subject}</p><pre>${message}</pre>`,
    })

    return json({ success: true })
  } catch (err: any) {
    console.error("Error sending contact email:", err)
    return json({ success: false, error: err?.message || String(err) }, { status: 500 })
  }
}
