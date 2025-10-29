import React, { useState, useEffect } from 'react'
import type { FormEvent } from 'react'

const Contact: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    const phoneNumber = '+21622699656'
    const text = `Nom: ${formData.name}
Email: ${formData.email}
Objet: ${formData.subject}
Message: ${formData.message}`
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
    
    window.open(whatsappURL, '_blank')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Parallax Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)',
          transform: `translateX(${scrollY * 0.1}px)`
        }}
      />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-yellow-500 text-sm md:text-base font-semibold tracking-wider mb-3 uppercase">Prenez contact</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Contactez-Nous</h3>
          <div className="w-24 h-1 bg-yellow-600 mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Vous avez besoin de conseils juridiques ? Notre cabinet se tient à votre disposition pour répondre à vos questions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8" data-aos="fade-right" data-aos-delay="200">
            <div className="bg-gray-800 p-8 rounded-sm">
              <h4 className="text-2xl font-bold text-white mb-6">Informations de Contact</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-2">Adresse</h5>
                    <p className="text-gray-400 leading-relaxed">
                      3 avenue Hedi Nouira ennasr 2<br />
                      complexe le Forum 2ème étage B2-2<br />
                      Ariana 2037, Tunisie
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-2">Téléphone</h5>
                    <p className="text-gray-400">+216 22 699 656</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-600 rounded-sm flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-white font-semibold mb-2">Horaires</h5>
                    <p className="text-gray-400">Ouvert 24h/24</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Direct Contact */}
            <div className="bg-green-600 p-6 rounded-sm text-white">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <h4 className="text-xl font-bold">Contact Direct via WhatsApp</h4>
              </div>
              <p className="text-green-50 mb-4">Pour une réponse plus rapide, utilisez le formulaire ci-contre qui ouvrira WhatsApp automatiquement.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-sm shadow-2xl" data-aos="fade-left" data-aos-delay="300">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un Message</h4>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom Complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition"
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Objet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 p-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition"
                  placeholder="Objet de votre demande"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full border border-gray-300 p-4 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent transition resize-none"
                  placeholder="Décrivez votre situation..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-4 px-6 rounded-sm transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-3"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Envoyer via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
