'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react'

export function FooterComponent() {
  return (
    (<footer className="bg-zinc-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-blue-600">Q7</span>
              <span className="text-2xl font-semibold text-black">Technology</span>
            </Link>
            <p className="text-zinc-700">
              Empowering businesses with innovative IT solutions since 2014.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
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
          
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Contact</h3>
            <address className="text-zinc-700 not-italic">
              Ballarat, VIC 3350<br />
              Australia<br />
              <a href="tel:+61475126818" className="hover:text-blue-600 transition-colors">
                +61 475 126 818
              </a><br />
              <a
                href="mailto:leighton.lauton@q7technology.com.au"
                className="hover:text-blue-600 transition-colors">
                leighton.lauton@q7technology.com.au
              </a>
            </address>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-zinc-700 hover:text-blue-600 transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-zinc-700 hover:text-blue-600 transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-zinc-700 hover:text-blue-600 transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:leighton.lauton@q7technology.com.au"
                className="text-zinc-700 hover:text-blue-600 transition-colors">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-200 text-center text-zinc-700">
          <p>&copy; {new Date().getFullYear()} Q7 Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>)
  );
}