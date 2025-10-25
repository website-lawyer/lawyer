import React from 'react'
import { BriefcaseIcon, UsersIcon, BuildingOfficeIcon, DocumentTextIcon, GlobeAltIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const services = [
  { name: "Criminal Law", icon: BriefcaseIcon },
  { name: "Family Law", icon: UsersIcon },
  { name: "Labor Law", icon: DocumentTextIcon },
  { name: "Real Estate & Rental", icon: BuildingOfficeIcon },
  { name: "Sports Law", icon: UserGroupIcon },
  { name: "Foreigners Law", icon: GlobeAltIcon }
]

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-0 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.name} className="p-6 border rounded-lg hover:shadow-lg transition flex flex-col items-center">
              <service.icon className="w-12 h-12 mb-4 text-yellow-600"/>
              <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
              <p className="text-gray-600">Expert legal advice and representation in {service.name}.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
