// src/components/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Dr. Serena Blake</h3>
            <p className="text-gray-400">Clinical Psychologist</p>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0">
            <Link href="#about" className="text-gray-400 hover:text-white transition">
              About
            </Link>
            <Link href="#services" className="text-gray-400 hover:text-white transition">
              Services
            </Link>
            <Link href="#faq" className="text-gray-400 hover:text-white transition">
              FAQ
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.</p>
          <p className="mt-2">This website is for demonstration purposes only.</p>
        </div>
      </div>
    </footer>
  )
}