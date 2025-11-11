import React, { useState, useEffect } from 'react'
import type { FormEvent, ChangeEvent } from 'react'
import { XMarkIcon, CheckCircleIcon, DocumentTextIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const Contact: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [agreedToTerms, setAgreedToTerms] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
  const [showIdModal, setShowIdModal] = useState(false)
  const [idCardFile, setIdCardFile] = useState<File | null>(null)
  const [idCardPreview, setIdCardPreview] = useState<string>('')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    if (!agreedToTerms) {
      alert('Veuillez accepter les conditions générales avant de continuer.')
      return
    }
    
    // Show ID card upload modal
    setShowIdModal(true)
  }

  const handleIdCardUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setIdCardFile(file)
      // Create preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setIdCardPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleFinalSubmit = () => {
    if (!idCardFile) {
      alert('Veuillez télécharger une photo de votre carte d\'identité nationale.')
      return
    }

    const phoneNumber = '+21622699656'
    const text = `🔔 NOUVELLE DEMANDE DE CONSULTATION\n\n` +
      `📋 INFORMATIONS CLIENT:\n` +
      `━━━━━━━━━━━━━━━━━━\n` +
      `👤 Nom: ${formData.name}\n` +
      `📧 Email: ${formData.email}\n` +
      `📌 Objet: ${formData.subject}\n\n` +
      `💬 MESSAGE:\n${formData.message}\n\n` +
      `━━━━━━━━━━━━━━━━━━\n` +
      `✅ Conditions acceptées\n` +
      `🆔 Carte d'identité fournie: OUI\n` +
      `⚠️ Paiement requis pour consultation\n\n` +
      `Note: Le client enverra la photo de sa carte d'identité dans le prochain message.`

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank')
    
    // Automatically download the ID card image for easy upload to WhatsApp
    if (idCardFile) {
      const downloadLink = document.createElement('a')
      downloadLink.href = idCardPreview
      downloadLink.download = `ID_Card_${formData.name.replace(/\s+/g, '_')}_${Date.now()}.${idCardFile.name.split('.').pop()}`
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)
    }
    
    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    setAgreedToTerms(false)
    setShowIdModal(false)
    setIdCardFile(null)
    setIdCardPreview('')
    
    alert('✅ Votre demande a été envoyée!\n\n📥 La photo de votre carte d\'identité a été téléchargée automatiquement.\n\n📤 Veuillez maintenant l\'envoyer dans la conversation WhatsApp qui vient de s\'ouvrir.')
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

            {/* Google Maps */}
            <div className="bg-gray-800 rounded-sm overflow-hidden shadow-xl">
              <div className="p-4 border-b border-gray-700">
                <h4 className="text-xl font-bold text-white flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Notre Localisation
                </h4>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.4089474879566!2d10.180089076704766!3d36.86159897223314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34d0e6d6f0c1%3A0x9d3c3a4c4c4c4c4c!2s3%20Avenue%20Hedi%20Nouira%2C%20Ariana!5e0!3m2!1sfr!2stn!4v1635000000000!5m2!1sfr!2stn"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cabinet Zaid Hammami Location"
                className="w-full"
              />
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

              {/* Terms and Conditions */}
              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-1 w-5 h-5 text-yellow-600 border-gray-300 rounded focus:ring-yellow-600 cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">
                    J'accepte les{' '}
                    <button
                      type="button"
                      onClick={() => setShowTerms(true)}
                      className="text-yellow-600 font-semibold hover:text-yellow-700 underline"
                    >
                      conditions générales
                    </button>
                    {' '}et je comprends qu'un paiement sera requis pour la consultation juridique.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={!agreedToTerms}
                className={`w-full font-bold py-4 px-6 rounded-sm transition-all duration-300 transform shadow-lg flex items-center justify-center gap-3 ${
                  agreedToTerms
                    ? 'bg-yellow-600 hover:bg-yellow-700 text-white hover:scale-[1.02] cursor-pointer'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {agreedToTerms ? 'Envoyer via WhatsApp' : 'Acceptez les conditions pour continuer'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Terms Modal */}
      {showTerms && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setShowTerms(false)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          
          <div 
            className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-6 relative">
              <button
                onClick={() => setShowTerms(false)}
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-4">
                <DocumentTextIcon className="w-12 h-12 text-white" />
                <h3 className="text-3xl font-bold text-white">Conditions Générales</h3>
              </div>
            </div>

            <div className="p-8 overflow-y-auto max-h-[calc(85vh-120px)]">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">1. Acceptation des Conditions</h4>
                  <p className="text-gray-700 leading-relaxed">
                    En utilisant nos services de consultation juridique, vous acceptez les présentes conditions générales dans leur intégralité.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
                  <div className="flex items-start gap-3">
                    <ExclamationTriangleIcon className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">2. Paiement Obligatoire</h4>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Toute consultation juridique est soumise à paiement.</strong> Le montant sera convenu avant le début de la consultation. Aucun conseil juridique ne sera fourni sans confirmation de paiement préalable.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">3. Vérification d'Identité</h4>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Pour des raisons de sécurité et de conformité légale, nous exigeons:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Une copie de votre carte d'identité nationale</li>
                    <li>La vérification de vos informations personnelles</li>
                    <li>La confirmation de votre identité avant toute consultation</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">4. Confidentialité</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Toutes les informations partagées, y compris votre carte d'identité, seront traitées de manière strictement confidentielle conformément au secret professionnel de l'avocat et aux lois sur la protection des données.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">5. Modalités de Consultation</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Les consultations peuvent se faire par téléphone, visioconférence, ou en personne selon disponibilité. Les tarifs varient selon la complexité du dossier et la durée de la consultation.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">6. Engagement du Cabinet</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Nous nous engageons à fournir des services juridiques de qualité, dans le respect du code de déontologie des avocats et avec la plus grande diligence professionnelle.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => {
                    setShowTerms(false)
                    setAgreedToTerms(true)
                  }}
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <CheckCircleIcon className="w-6 h-6" />
                  J'accepte les conditions
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ID Card Upload Modal */}
      {showIdModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setShowIdModal(false)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          
          <div 
            className="relative bg-white rounded-lg shadow-2xl max-w-lg w-full animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6 relative">
              <button
                onClick={() => setShowIdModal(false)}
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <DocumentTextIcon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-white">Carte d'Identité Nationale</h3>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Pour finaliser votre demande, veuillez télécharger une photo claire de votre carte d'identité nationale.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> Vos informations sont protégées et seront traitées de manière strictement confidentielle.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <label className="block">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-yellow-600 transition-colors cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleIdCardUpload}
                      className="hidden"
                    />
                    {idCardPreview ? (
                      <div>
                        <img src={idCardPreview} alt="ID Preview" className="max-h-48 mx-auto rounded mb-3" />
                        <p className="text-sm text-green-600 font-semibold">✓ Photo téléchargée</p>
                      </div>
                    ) : (
                      <div>
                        <svg className="w-16 h-16 mx-auto text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="text-gray-600 font-semibold mb-1">Cliquez pour télécharger</p>
                        <p className="text-sm text-gray-500">PNG, JPG jusqu'à 10MB</p>
                      </div>
                    )}
                  </div>
                </label>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowIdModal(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Annuler
                </button>
                <button
                  onClick={handleFinalSubmit}
                  disabled={!idCardFile}
                  className={`flex-1 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 ${
                    idCardFile
                      ? 'bg-yellow-600 hover:bg-yellow-700 text-white cursor-pointer'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Confirmer et Envoyer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Contact
