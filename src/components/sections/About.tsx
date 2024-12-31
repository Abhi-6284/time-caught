'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <section ref={ref} className="py-20 bg-gray-200 overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-8">About Me</h1>
          <motion.p className="text-xl mb-8" style={{ y }}>
            I'm a passionate photographer and video editor with over 10 years of experience. 
            My work focuses on capturing the beauty of nature and the essence of human emotions. 
            Through my lens, I strive to tell compelling stories and create visually stunning content.
          </motion.p>
          <motion.img
            src="/placeholder.svg"
            alt="Profile"
            className="w-64 h-64 rounded-full mx-auto mb-8 object-cover"
            whileHover={{ scale: 1.1, rotate: 5 }}
          />
          <motion.p className="text-lg mb-8" style={{ y }}>
            My journey in photography began when I was just a teenager, captivated by the way a single image could tell a powerful story. 
            Since then, I've honed my skills in both still photography and video production, always pushing the boundaries of my creativity.
          </motion.p>
          <motion.p className="text-lg" style={{ y }}>
            When I'm not behind the camera, you can find me exploring new locations for my next shoot, experimenting with cutting-edge editing techniques, 
            or mentoring aspiring photographers. I believe in the power of visual storytelling to inspire, educate, and bring about positive change in the world.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

