import { Link } from "react-router"
import { Button } from "~/components/ui/button"
import ThemeToggle from "~/components/theme-toggle"
import { useEffect, useState } from "react"

export function Header() {
  const [open, setOpen] = useState(false)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const original = document.body.style.overflow
    document.body.style.overflow = open ? "hidden" : original
    return () => {
      document.body.style.overflow = original
    }
  }, [open])

  return (
    <header className="w-full border-b bg-background/50 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="font-semibold text-lg flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">CC</span>
          <span>Carlos Castillo</span>
        </Link>

        {/* Desktop nav - visible on lg and up */}
        <nav className="hidden lg:flex items-center gap-4">
          <Link to="/projects" className="text-sm">Projects</Link>
          <Link to="/about" className="text-sm">About</Link>
          <Link to="/blog" className="text-sm">Blog</Link>
          <ThemeToggle />
          <Link to="/contact" className="text-sm">
            <Button size="sm" variant="ghost">Contact</Button>
          </Link>
        </nav>

        {/* Mobile controls - visible below lg */}
        <div className="flex items-center lg:hidden">
          <ThemeToggle />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="ml-2 inline-flex items-center justify-center rounded-md p-2 hover:bg-muted/10 focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {open ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="lg:hidden fixed inset-0 z-50 bg-background/90 backdrop-blur-sm p-6"
          onClick={() => setOpen(false)}
        >
          <div
            className="max-w-md mx-auto bg-popover rounded-lg shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-5 border-b">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 text-base font-semibold">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">CC</span>
                  <span className="ml-2">Carlos Castillo</span>
                </Link>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-md p-1 hover:bg-muted/10 focus:outline-none"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="px-6 py-6 space-y-4">
              <Link to="/projects" className="block text-base font-medium hover:underline" onClick={() => setOpen(false)}>
                Projects
              </Link>
              <Link to="/blog" className="block text-base font-medium hover:underline" onClick={() => setOpen(false)}>
                Blog
              </Link>
              <Link to="/about" className="block text-base font-medium hover:underline" onClick={() => setOpen(false)}>
                About
              </Link>
              <Link to="/contact" className="block text-base font-medium hover:underline" onClick={() => setOpen(false)}>
                Contact
              </Link>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">Theme</p>
                <div className="mt-2">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
