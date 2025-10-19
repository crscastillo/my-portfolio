export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Carlos Castillo. Built with React + Tailwind.</p>
      </div>
    </footer>
  )
}

export default Footer
