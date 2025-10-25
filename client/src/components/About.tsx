import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-0 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">About Us</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Cabinet Zaid Hammami is a professional law firm in Tunis, specializing in various areas of law including criminal, family, labor, real estate, and sports law. Our mission is to provide personalized and high-quality legal services to our clients.
        </p>
      </div>
    </section>
  )
}

export default About
