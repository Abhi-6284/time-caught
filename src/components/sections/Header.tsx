'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const serviceItems = [
    { href: '/services/social-media-marketing', label: 'Social Media Marketing' },
    { href: '/services/video-editing', label: 'Video Editing' },
    { href: '/services/video-shoots', label: 'Video Shoots' },
    { href: '/services/wedding-photography-videography', label: 'Wedding Photography & Videography' },
  ]

  const navItems = [
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <motion.header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          PixelMaster
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            <li className="relative">
              <button 
                className="text-gray-600 hover:text-gray-900 flex items-center"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {servicesDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-10">
                  {serviceItems.map((item) => (
                    <li key={item.href}>
                      <Link 
                        href={item.href} 
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setServicesDropdownOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href} 
                  className={`text-gray-600 hover:text-gray-900 ${pathname === item.href ? 'font-bold' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <motion.nav 
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li className="w-full">
              <button 
                className="text-gray-600 hover:text-gray-900 w-full text-left px-4 py-2 flex justify-between items-center"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {servicesDropdownOpen && (
                <ul className="bg-gray-100 py-2">
                  {serviceItems.map((item) => (
                    <li key={item.href}>
                      <Link 
                        href={item.href} 
                        className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-200"
                        onClick={() => {
                          setServicesDropdownOpen(false)
                          setMobileMenuOpen(false)
                        }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            {navItems.map((item) => (
              <li key={item.href} className="w-full">
                <Link 
                  href={item.href} 
                  className={`block px-4 py-2 text-gray-600 hover:text-gray-900 ${pathname === item.href ? 'font-bold' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </motion.header>
  )
}

