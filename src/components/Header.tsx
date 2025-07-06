// src/components/Header.tsx
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            Dr. Serena Blake
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="text-gray-700 hover:text-primary transition">
              About
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-primary transition">
              Services
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-primary transition">
              FAQ
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary transition">
              Contact
            </Link>
          </nav>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}