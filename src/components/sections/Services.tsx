'use client'

import { motion } from 'framer-motion'
import { Camera, Video, Share2, Users } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'Social Media Marketing',
    description: 'Boost your online presence with our tailored SMM strategies.',
    icon: Share2,
    link: '/services/social-media-marketing'
  },
  {
    title: 'Video Editing',
    description: 'Professional video editing to bring your vision to life.',
    icon: Video,
    link: '/services/video-editing'
  },
  {
    title: 'Video Shoots',
    description: 'High-quality video production for various needs.',
    icon: Camera,
    link: '/services/video-shoots'
  },
  {
    title: 'Wedding Photography & Videography',
    description: 'Capture your special day with our expert team.',
    icon: Users,
    link: '/services/wedding-photography-videography'
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <service.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                href={service.link}
                className="text-blue-500 font-semibold hover:text-blue-600 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
