'use client'

import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "CEO, Thompson Enterprises",
    image: "/placeholder.svg?height=100&width=100",
    quote: "Q7 Technology transformed our IT infrastructure. Their expertise and personalized approach have been invaluable to our business growth.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO, Innovate Solutions",
    image: "/placeholder.svg?height=100&width=100",
    quote: "The team at Q7 Technology consistently delivers cutting-edge solutions. Their support has been crucial in keeping our systems secure and efficient.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Manager, Global Logistics Co.",
    image: "/placeholder.svg?height=100&width=100",
    quote: "Q7's managed IT services have significantly reduced our downtime and improved productivity. Their responsiveness is unmatched.",
    rating: 5,
  },
]

export function TestimonialSectionComponent() {
  return (
    (<section className="w-full bg-zinc-50 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-black mb-12">
          What Our <span className="text-blue-600">Clients</span> Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold text-lg text-black">{testimonial.name}</h3>
                  <p className="text-zinc-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-zinc-700 mb-4">&quot;{testimonial.quote}&quot;</p>
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-zinc-700 mb-4">
            Ready to experience the Q7 Technology difference for yourself?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
            Contact Us
          </Link>
        </div>
      </div>
    </section>)
  );
}