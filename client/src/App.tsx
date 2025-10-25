import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App
