import { Link } from "react-router"
import { Button } from "~/components/ui/button"

export function Header() {
  return (
    <header className="w-full border-b bg-background/50 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="font-semibold text-lg">Carlos Castillo</Link>
        <nav className="flex items-center gap-2">
          <Link to="/projects" className="text-sm">Projects</Link>
          <Link to="/about" className="text-sm">About</Link>
          <Link to="/contact" className="text-sm">
            <Button size="sm" variant="ghost">Contact</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
