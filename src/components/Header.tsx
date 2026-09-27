import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#effects', label: 'Visual Effects' },
  { href: '#gallery', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[#39ff14]/15 bg-black/90 backdrop-blur">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="site-title-font text-2xl font-black tracking-tight text-[#39ff14] neon-glow">
            APEX MODZ STUDIO
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-300 hover:text-[#39ff14] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-[#39ff14] px-5 py-2 text-sm font-semibold text-black hover:bg-[#62ff45] transition-colors"
          >
            Get a Quote
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden text-[#39ff14]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-5 pb-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-neutral-200 hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-[#39ff14] px-4 py-2 text-center font-semibold text-black"
          >
            Get a Quote
          </a>
        </nav>
      )}
    </header>
  )
}
