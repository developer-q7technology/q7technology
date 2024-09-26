'use client'

import Link from "next/link"
import { Lightbulb, BarChart, Cog } from "lucide-react"

export function ServicesSectionComponent() {
  return (
    (<section className="w-full bg-zinc-50 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="mt-4 text-zinc-700 md:text-lg max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <Lightbulb className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-black mb-2">Consulting</h3>
            <p className="text-zinc-700 mb-4">
              Expert advice to align your IT strategy with your business goals
            </p>
            <Link
              href="/services#consulting"
              className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More
            </Link>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <BarChart className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-black mb-2">Management</h3>
            <p className="text-zinc-700 mb-4">
              Efficient oversight and optimization of your IT infrastructure
            </p>
            <Link
              href="/services#management"
              className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More
            </Link>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <Cog className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-black mb-2">Implementation</h3>
            <p className="text-zinc-700 mb-4">
              Seamless execution of IT solutions tailored to your needs
            </p>
            <Link
              href="/services#implementation"
              className="text-blue-600 hover:text-blue-800 font-medium">
              Learn More
            </Link>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
            View All Services
          </Link>
        </div>
      </div>
    </section>)
  );
}