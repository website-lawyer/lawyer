import React, { useEffect, useState } from 'react'
import { BriefcaseIcon, UsersIcon, BuildingOfficeIcon, DocumentTextIcon, GlobeAltIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const services = [
  { 
    name: "Droit Pénal", 
    icon: BriefcaseIcon,
    description: "Nous intervenons dans les affaires de crimes et délits, procédures de garde à vue, auditions, et infractions économiques et financières."
  },
  { 
    name: "Droit de la Famille", 
    icon: UsersIcon,
    description: "Soutien juridique attentif dans les litiges de divorce, garde d'enfants, successions et médiation familiale."
  },
  { 
    name: "Droit du Travail", 
    icon: DocumentTextIcon,
    description: "Accompagnement dans les procédures de contrat de travail, licenciement, rupture conventionnelle, harcèlement et discrimination."
  },
  { 
    name: "Droit Immobilier & Location", 
    icon: BuildingOfficeIcon,
    description: "Assistance pour les transactions immobilières, litiges de bail, problèmes de propriété et conflits locatifs."
  },
  { 
    name: "Droit du Sport", 
    icon: UserGroupIcon,
    description: "Représentation des acteurs sportifs : joueurs, entraîneurs, athlètes, agents, dans le suivi de leurs contrats et carrières."
  },
  { 
    name: "Droit des Étrangers", 
    icon: GlobeAltIcon,
    description: "Conseil et assistance dans les démarches de régularisation administrative et contestation des refus de titre de séjour."
  }
]

const Services: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-yellow-100 rounded-full opacity-20 blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      />
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-gray-300 rounded-full opacity-20 blur-3xl"
        style={{ transform: `translateY(${-scrollY * 0.1}px)` }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-yellow-600 text-sm md:text-base font-semibold tracking-wider mb-3 uppercase">Domaines d'expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Nos Spécialités</h3>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Une expertise complète dans tous les domaines du droit pour répondre à vos besoins juridiques
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.name} 
              className="bg-white p-8 rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col items-start h-full">
                <div className="w-16 h-16 bg-yellow-600 rounded-sm flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-yellow-600 transition-colors">
                  {service.name}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="mt-6 text-yellow-600 font-semibold group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
