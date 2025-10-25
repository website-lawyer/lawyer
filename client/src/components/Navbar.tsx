import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Contact', to: 'contact' }
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900">
          Bejaoui<span className="text-yellow-600">Law</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-64} // height of navbar
                className="cursor-pointer hover:text-yellow-600"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-900"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 p-6">
            {menuItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-64}
                  className="cursor-pointer text-gray-700 font-medium hover:text-yellow-600 block"
                  onClick={() => setIsOpen(false)} // close menu on click
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
