'use client'

import { 
  Search, 
  BarChart2, 
  Network, 
  Server, 
  RefreshCw, 
  Cloud, 
  ShieldCheck, 
  Zap, 
  Lock, 
  LayoutGrid,
  Lightbulb,
  Database
} from "lucide-react"

export function ServicesPageComponent() {
  return (
    (<div className="w-full bg-white">
      <main className="container mx-auto px-4 py-12 md:py-24">
        <h1
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black mb-8">
          Our <span className="text-blue-600">Services</span>
        </h1>
        
        <section id="consulting" className="mb-16">
          <h2 className="text-3xl font-semibold text-black mb-6">Consulting Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Search className="h-6 w-6 text-blue-600" />}
              title="Auditing"
              description="Comprehensive assessment of your current IT infrastructure, identifying strengths, weaknesses, and areas for improvement." />
            <ServiceCard
              icon={<BarChart2 className="h-6 w-6 text-blue-600" />}
              title="Strategic Planning"
              description="Develop long-term IT strategies aligned with your business goals, ensuring technology drives your company's success." />
            <ServiceCard
              icon={<Network className="h-6 w-6 text-blue-600" />}
              title="Infrastructure Planning"
              description="Design scalable and efficient IT infrastructures that support your business needs now and in the future." />
            <ServiceCard
              icon={<Lightbulb className="h-6 w-6 text-blue-600" />}
              title="Innovation Consulting"
              description="Identify cutting-edge technologies and innovative solutions to give your business a competitive edge in the digital landscape." />
          </div>
        </section>
        
        <section id="management" className="mb-16">
          <h2 className="text-3xl font-semibold text-black mb-6">Management Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Server className="h-6 w-6 text-blue-600" />}
              title="Infrastructure Management"
              description="Proactive monitoring and management of your IT infrastructure to ensure optimal performance and minimal downtime." />
            <ServiceCard
              icon={<RefreshCw className="h-6 w-6 text-blue-600" />}
              title="Asset Life Cycle Management"
              description="Comprehensive management of your IT assets from procurement to retirement, optimizing their use and value throughout their lifecycle." />
            <ServiceCard
              icon={<Cloud className="h-6 w-6 text-blue-600" />}
              title="Software and Cloud Support"
              description="Ongoing support and management of your software applications and cloud services, ensuring they remain up-to-date and secure." />
            <ServiceCard
              icon={<ShieldCheck className="h-6 w-6 text-blue-600" />}
              title="Disaster Recovery"
              description="Develop and implement robust disaster recovery plans to protect your data and ensure business continuity in case of unforeseen events." />
          </div>
        </section>
        
        <section id="implementation" className="mb-16">
          <h2 className="text-3xl font-semibold text-black mb-6">Implementation Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Zap className="h-6 w-6 text-blue-600" />}
              title="Automation"
              description="Implement automation solutions to streamline your business processes, increase efficiency, and reduce human error." />
            <ServiceCard
              icon={<Lock className="h-6 w-6 text-blue-600" />}
              title="Security"
              description="Deploy comprehensive security solutions to protect your data, networks, and systems from evolving cyber threats." />
            <ServiceCard
              icon={<LayoutGrid className="h-6 w-6 text-blue-600" />}
              title="Business Systems and Applications"
              description="Implement and integrate business systems and applications tailored to your specific industry and organizational needs." />
            <ServiceCard
              icon={<Database className="h-6 w-6 text-blue-600" />}
              title="Data Migration and Integration"
              description="Seamlessly transfer and integrate your data across different systems and platforms, ensuring data integrity and accessibility." />
          </div>
        </section>
        
        <section className="bg-zinc-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Ready to Transform Your IT Infrastructure?</h2>
          <p className="text-zinc-700 mb-6">
            Our team of experts is ready to help you optimize your IT systems and drive your business forward. 
            Contact us today to discuss how we can tailor our services to meet your unique needs.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
            Get in Touch
          </a>
        </section>
      </main>
    </div>)
  );
}

function ServiceCard({
  icon,
  title,
  description
}) {
  return (
    (<div
      className="bg-zinc-50 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-black ml-3">{title}</h3>
      </div>
      <p className="text-zinc-700">{description}</p>
    </div>)
  );
}