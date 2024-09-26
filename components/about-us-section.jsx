'use client'

import Image from "next/image"
import { Users, Clock, MapPin } from "lucide-react"

export function AboutUsSectionComponent() {
  return (
    (<section className="w-full bg-zinc-50 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-1 lg:gap-24 items-center">
          <div className="space-y-6">
            <h2
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
              Our <span className="text-blue-600">Story</span>
            </h2>
            <p className="text-zinc-700 md:text-lg">
              Q7 Technology is a proud Ballarat family-owned business with deep roots in our community. For over six decades, we've been at the forefront of technological innovation, providing cutting-edge IT solutions to businesses across the region.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-blue-600" />
                <span className="text-zinc-700">Family-owned and operated</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-blue-600" />
                <span className="text-zinc-700">Over 60 years of combined IT experience</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-blue-600" />
                <span className="text-zinc-700">Proudly serving Ballarat and surrounding areas</span>
              </li>
            </ul>
            <p className="text-zinc-700 md:text-lg">
              Our team's expertise spans generations, allowing us to blend time-tested wisdom with the latest technological advancements. We're committed to delivering personalized IT solutions that help local businesses thrive in the digital age.
            </p>
          </div>
          {/* <div
            className="relative h-[500px] w-full overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Q7 Technology Team"
              layout="fill"
              objectFit="cover"
              className="object-center" />
          </div> */}
        </div>
      </div>
    </section>)
  );
}