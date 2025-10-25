import React from 'react'
import heroImg from '../assets/hero-lawyer.jpeg'

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center bg-gray-900 overflow-hidden">
      <img
        src={heroImg}
        alt="Lawyer"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative z-10 px-4 animate-fadeIn">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Justice. Integrity. Experience.</h1>
        <p className="text-gray-200 text-lg md:text-xl mb-8">
          Professional legal services you can trust, for you and your future.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-md transition">
            Contact Us
          </a>
          <a href="#about" className="border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-6 py-3 rounded-md transition">
            Learn More
          </a>
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px);}
            100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fadeIn {
            animation: fadeIn 1.5s ease-out;
          }
        `}
      </style>
    </section>
  )
}

export default Hero
