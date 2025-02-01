"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-item", {
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2
      });
    });

    return () => ctx.revert();
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1519741497674-611481863552",
    "https://images.unsplash.com/photo-1524863479829-916d8e77f114",
    "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6",
    "https://images.unsplash.com/photo-1504593811423-6dd665756598",
    "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
    "https://images.unsplash.com/photo-1523438097201-512ae7d59c44"
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-6">Gallery</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of my finest work showcasing moments frozen in time.
            </p>
          </motion.div>

          <div
            ref={galleryRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {images.map((url, index) => (
              <motion.div
                key={index}
                className="gallery-item relative group overflow-hidden rounded-lg aspect-square"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={`${url}?auto=format&fit=crop&w=800&q=80`}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}