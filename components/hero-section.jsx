'use client'

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSectionComponent() {
  return (
    (<section className="w-full bg-white">
      <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-6">
            <h1
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-black">
              Innovate with <span className="text-blue-600">Q7 Technology</span>
            </h1>
            <p className="max-w-[600px] text-zinc-700 md:text-xl">
              Empowering businesses with cutting-edge solutions. Transform your operations and stay ahead in the digital era.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-100 hover:text-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500">
                Learn More
              </a>
            </div>
          </div>
          {/* <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
  <img
    src="/placeholder3.png"
    alt="Q7 Technology Innovation"
    className="object-cover w-full h-full"
  />
</div> */}
          <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
            <Image
              src="/placeholder1.png?height=400&width=600"
              alt="Q7 Technology Innovation"
              layout="fill"
              objectFit="cover"
              className="object-center" />
          </div>
        </div>
      </div>
    </section>)
  );
}