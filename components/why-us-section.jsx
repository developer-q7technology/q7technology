'use client'

import { CheckCircle, Settings, DollarSign } from "lucide-react";
import Link from 'next/link';

export function WhyUsSectionComponent() {
  return (
    (<section className="w-full bg-white py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
            Why Choose <span className="text-blue-600">Q7 Technology</span>?
          </h2>
          <p className="mt-4 text-zinc-700 md:text-lg max-w-2xl mx-auto">
            With decades of experience and a commitment to excellence, we offer unparalleled IT solutions tailored to your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="bg-zinc-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <CheckCircle className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-black">Quality Service</h3>
            </div>
            <p className="text-zinc-700">
              We pride ourselves on delivering top-notch IT services. Our experienced team ensures that every solution we provide meets the highest standards of quality and reliability.
            </p>
          </div>
          <div
            className="bg-zinc-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <Settings className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-black">Unique, Customised Solutions</h3>
            </div>
            <p className="text-zinc-700">
              We understand that every business is unique. That&apos;s why we create tailor-made IT solutions that perfectly align with your specific needs and goals, ensuring optimal performance and efficiency.
            </p>
          </div>
          <div
            className="bg-zinc-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <DollarSign className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-black">Value for Money</h3>
            </div>
            <p className="text-zinc-700">
              We believe in providing cost-effective IT solutions without compromising on quality. Our services are designed to give you the best return on your investment, helping your business grow without breaking the bank.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
            <Link href="/services"  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              Learn More About Our Services
            </Link>
        </div>
      </div>
    </section>)
  );
}