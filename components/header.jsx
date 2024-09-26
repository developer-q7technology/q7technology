'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function HeaderComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    (<header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-600">Q7</span>
          <span className="text-2xl font-semibold text-black">Technology</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-zinc-700 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link
            href="/services"
            className="text-zinc-700 hover:text-blue-600 transition-colors">
            Services
          </Link>
          {/* <Link
            href="/about"
            className="text-zinc-700 hover:text-blue-600 transition-colors">
            About
          </Link> */}
          <Link
            href="/contact"
            className="text-zinc-700 hover:text-blue-600 transition-colors">
            Contact
          </Link>
        </nav>
        
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-zinc-700" />
          ) : (
            <Menu className="h-6 w-6 text-zinc-700" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-6 bg-white">
            <Link href="/" className="text-zinc-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link
              href="/services"
              className="text-zinc-700 hover:text-blue-600 transition-colors">
              Services
            </Link>
            {/* <Link
              href="/about"
              className="text-zinc-700 hover:text-blue-600 transition-colors">
              About
            </Link> */}
            <Link
              href="/contact"
              className="text-zinc-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>)
  );
}