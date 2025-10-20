import * as React from "react"
import { Button } from "~/components/ui/button"

function applyTheme(theme: "dark" | "light") {
  const root = document.documentElement
  if (theme === "dark") root.classList.add("dark")
  else root.classList.remove("dark")
}

export function ThemeToggle() {
  const [isDark, setIsDark] = React.useState<boolean | null>(null)

  React.useEffect(() => {
    if (typeof window === "undefined") return

    const stored = localStorage.getItem("theme")
    if (stored === "dark" || stored === "light") {
      applyTheme(stored as "dark" | "light")
      setIsDark(stored === "dark")
    } else {
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      applyTheme(prefersDark ? "dark" : "light")
      setIsDark(prefersDark)
    }

    const mq = window.matchMedia("(prefers-color-scheme: dark)")
    const onChange = (e: MediaQueryListEvent) => {
      // only react to system changes when the user hasn't chosen a theme
      if (!localStorage.getItem("theme")) {
        applyTheme(e.matches ? "dark" : "light")
        setIsDark(e.matches)
      }
    }
    if (mq.addEventListener) mq.addEventListener("change", onChange)
    else mq.addListener(onChange)

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange)
      else mq.removeListener(onChange)
    }
  }, [])

  const toggle = () => {
    const next = !isDark
    const theme = next ? "dark" : "light"
    setIsDark(next)
    localStorage.setItem("theme", theme)
    applyTheme(theme)
  }

  if (isDark === null) {
    // render an invisible placeholder until mounted
    return <Button size="sm" variant="ghost" aria-hidden className="opacity-0" />
  }

  return (
    <Button size="sm" variant="ghost" onClick={toggle} aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}>
      {isDark ? (
        // Sun icon (switch to light)
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="M4.93 4.93l1.41 1.41"></path>
          <path d="M17.66 17.66l1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="M4.93 19.07l1.41-1.41"></path>
          <path d="M17.66 6.34l1.41-1.41"></path>
        </svg>
      ) : (
        // Moon icon (switch to dark)
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      )}
    </Button>
  )
}

export default ThemeToggle
