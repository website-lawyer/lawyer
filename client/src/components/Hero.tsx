import React, { useEffect, useState } from 'react'
import heroImg from '../assets/hero-lawyer.jpeg'

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center bg-gray-900 overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img
          src={heroImg}
          alt="Avocat"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-5xl">
        <div className="mb-6">
          <h2 className="text-yellow-500 text-xl md:text-2xl font-light tracking-wider mb-4 uppercase" data-aos="fade-down" data-aos-duration="800">Cabinet d'Avocat</h2>
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            Maître Zaid<br />Hammami
          </h1>
        </div>
        <p className="text-gray-200 text-lg md:text-2xl mb-10 font-light max-w-3xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="400">
          Excellence juridique · Défense de vos droits · Conseil personnalisé
        </p>
        <div className="flex justify-center gap-6 flex-wrap" data-aos="fade-up" data-aos-delay="600">
          <a 
            href="#contact" 
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 text-lg font-semibold rounded-sm transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Prendre Rendez-vous
          </a>
          <a 
            href="#services" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold rounded-sm transition-all duration-300"
          >
            Nos Services
          </a>
        </div>
        
        {/* Contact Info Bar */}
        <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8 text-white/90" data-aos="fade-up" data-aos-delay="800">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-base">+216 22 699 656</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-base">Ouvert 24h/24</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
