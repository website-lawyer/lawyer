import React, { useEffect, useState } from 'react'
import { BriefcaseIcon, UsersIcon, BuildingOfficeIcon, DocumentTextIcon, GlobeAltIcon, UserGroupIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'

const services = [
  { 
    name: "Droit Pénal", 
    icon: BriefcaseIcon,
    description: "Nous intervenons dans les affaires de crimes et délits, procédures de garde à vue, auditions, et infractions économiques et financières.",
    details: {
      intro: "Notre expertise en droit pénal vous garantit une défense solide et stratégique à chaque étape de la procédure judiciaire.",
      services: [
        "Défense lors des gardes à vue et auditions",
        "Représentation devant les tribunaux correctionnels et cours d'assises",
        "Gestion des infractions économiques et financières",
        "Constitution de partie civile",
        "Appels et pourvois en cassation"
      ]
    }
  },
  { 
    name: "Droit de la Famille", 
    icon: UsersIcon,
    description: "Soutien juridique attentif dans les litiges de divorce, garde d'enfants, successions et médiation familiale.",
    details: {
      intro: "Nous comprenons la sensibilité des affaires familiales et vous accompagnons avec empathie et professionnalisme.",
      services: [
        "Procédures de divorce (contentieux et amiable)",
        "Garde d'enfants et droit de visite",
        "Pension alimentaire et prestation compensatoire",
        "Successions et partages",
        "Médiation familiale et règlement amiable"
      ]
    }
  },
  { 
    name: "Droit du Travail", 
    icon: DocumentTextIcon,
    description: "Accompagnement dans les procédures de contrat de travail, licenciement, rupture conventionnelle, harcèlement et discrimination.",
    details: {
      intro: "Protection de vos droits en tant que salarié ou employeur dans toutes les situations de conflit professionnel.",
      services: [
        "Contentieux prud'homal",
        "Licenciement abusif et rupture conventionnelle",
        "Harcèlement moral et discrimination",
        "Négociation et rédaction de contrats",
        "Accidents du travail et maladies professionnelles"
      ]
    }
  },
  { 
    name: "Droit Immobilier & Location", 
    icon: BuildingOfficeIcon,
    description: "Assistance pour les transactions immobilières, litiges de bail, problèmes de propriété et conflits locatifs.",
    details: {
      intro: "Sécurisez vos transactions immobilières et résolvez efficacement vos litiges locatifs avec notre expertise.",
      services: [
        "Rédaction et vérification d'actes de vente",
        "Contentieux locatifs (expulsion, loyers impayés)",
        "Copropriété et assemblées générales",
        "Vices cachés et garanties",
        "Baux commerciaux et professionnels"
      ]
    }
  },
  { 
    name: "Droit du Sport", 
    icon: UserGroupIcon,
    description: "Représentation des acteurs sportifs : joueurs, entraîneurs, athlètes, agents, dans le suivi de leurs contrats et carrières.",
    details: {
      intro: "Expertise spécialisée pour protéger les intérêts des professionnels du sport à tous les niveaux.",
      services: [
        "Négociation et rédaction de contrats sportifs",
        "Litiges avec les clubs et fédérations",
        "Transferts et mutations",
        "Droit à l'image et sponsoring",
        "Contentieux disciplinaires"
      ]
    }
  },
  { 
    name: "Droit des Étrangers", 
    icon: GlobeAltIcon,
    description: "Conseil et assistance dans les démarches de régularisation administrative et contestation des refus de titre de séjour.",
    details: {
      intro: "Accompagnement complet dans vos démarches administratives pour obtenir ou renouveler votre titre de séjour.",
      services: [
        "Demandes de titres de séjour et renouvellements",
        "Recours contre les OQTF (Obligations de Quitter le Territoire)",
        "Regroupement familial",
        "Naturalisation et acquisition de nationalité",
        "Demandes d'asile et protection internationale"
      ]
    }
  }
]

const Services: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)
  const [selectedService, setSelectedService] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (selectedService !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedService])

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
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Nos Services</h3>
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
                
                {/* Suivre Plus Button */}
                <button
                  onClick={() => setSelectedService(index)}
                  className="mt-6 text-yellow-600 font-semibold hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group/btn"
                >
                  <span>Suivre plus</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedService !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          {/* Blurred Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />
          
          {/* Modal Content */}
          <div 
            className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-6 relative">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors duration-200"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  {React.createElement(services[selectedService].icon, { className: "w-9 h-9 text-yellow-600" })}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">
                    {services[selectedService].name}
                  </h3>
                  <p className="text-yellow-100 mt-1">
                    {services[selectedService].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 overflow-y-auto max-h-[calc(85vh-180px)]">
              <div className="mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Notre Expertise</h4>
                <p className="text-gray-700 leading-relaxed">
                  {services[selectedService].details.intro}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Services Inclus</h4>
                <ul className="space-y-4">
                  {services[selectedService].details.services.map((item, idx) => (
                    <li 
                      key={idx} 
                      className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-yellow-50 transition-colors duration-200"
                    >
                      <CheckCircleIcon className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action */}
              <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-gray-50 rounded-lg border border-yellow-200">
                <p className="text-gray-800 font-semibold mb-3">Besoin d'assistance ?</p>
                <p className="text-gray-600 mb-4">Contactez-nous pour une consultation personnalisée sur votre situation.</p>
                <button 
                  onClick={() => {
                    setSelectedService(null)
                    setTimeout(() => {
                      const contactSection = document.getElementById('contact')
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                      }
                    }, 300)
                  }}
                  className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors duration-300 w-full sm:w-auto"
                >
                  Prendre rendez-vous
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Services
