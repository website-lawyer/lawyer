import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'

const Home: React.FC = () => {
  return (
    <main className="pt-16"> {/* pt-16 to offset fixed navbar height */}
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  )
}

export default Home
