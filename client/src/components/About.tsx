import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-yellow-600 text-sm md:text-base font-semibold tracking-wider mb-3 uppercase">À Propos du Cabinet</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Notre Vision</h3>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" data-aos="fade-right" data-aos-delay="200">
            <p className="text-gray-700 text-lg leading-relaxed">
              Le <strong>Cabinet Zaid Hammami</strong> est un cabinet d'avocats tunisien établi à Tunis, rendant ses services sur tout le territoire tunisien dans plusieurs domaines de droit.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Spécialisé notamment en <strong>droit pénal</strong>, <strong>droit du sport</strong>, <strong>droit de l'immobilier</strong>, <strong>droit du travail</strong>, <strong>droit civil & familial</strong> et <strong>droit des étrangers</strong>.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Nous sommes déterminés à fournir à nos clients des solutions juridiques innovantes et pratiques avec un service de qualité supérieure. Nous sommes engagés à maintenir les normes les plus élevées d'intégrité et de professionnalisme dans toutes nos activités.
            </p>
          </div>
          
          <div className="bg-gray-900 text-white p-10 rounded-sm shadow-2xl" data-aos="fade-left" data-aos-delay="300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <h4 className="text-2xl font-bold">Me. Zaid Hammami</h4>
                <p className="text-yellow-500">Avocat</p>
              </div>
            </div>
            <div className="space-y-4 border-t border-gray-700 pt-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-300 text-sm">3 avenue Hedi Nouira ennasr 2, complexe le Forum 2ème étage B2-2, Ariana 2037</p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-gray-300">+216 22 699 656</p>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-300">Ouvert 24h/24</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
