import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Github, BookOpen, Layers, Users } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (to, label) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-white'
        }`
      }
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white">
            <div className="h-7 w-7 rounded bg-gradient-to-br from-cyan-400 to-blue-600" />
            <span className="font-semibold tracking-tight">CoreDeck</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItem('/', 'Home')}
            {navItem('/docs', 'Docs')}
            {navItem('/features', 'Features')}
            {navItem('/community', 'Community')}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </nav>

          <button
            className="md:hidden text-gray-200 hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-1">
            <div className="flex flex-col">
              {navItem('/', 'Home')}
              {navItem('/docs', 'Docs')}
              {navItem('/features', 'Features')}
              {navItem('/community', 'Community')}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white inline-flex items-center gap-2"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
