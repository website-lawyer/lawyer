import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 100
    })
  }, [])

  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
