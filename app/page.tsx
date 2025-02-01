"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, Camera } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power4.out"
      });

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-6">Capturing Life's Beautiful Moments</h1>
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Professional photography services that tell your story through stunning visuals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
                <Link href="/gallery">
                  View Gallery
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-background bg-background text-foreground hover:bg-white/20">
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section ref={galleryRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of my best photographs showcasing the beauty of moments frozen in time
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1519741497674-611481863552",
              "https://images.unsplash.com/photo-1524863479829-916d8e77f114",
              "https://images.unsplash.com/photo-1520854221256-17451cc331bf",
              "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
              "https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
              "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6"
            ].map((url, index) => (
              <div
                key={index}
                className="gallery-item relative group overflow-hidden rounded-lg aspect-square"
              >
                <img
                  src={`${url}?auto=format&fit=crop&w=800&q=80`}
                  alt={`Featured work ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="outline" className="border-white text-white hover:bg-white/20">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional photography services tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Weddings",
                description: "Capturing your special day with elegance and style",
                icon: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=400&q=60"
              },
              {
                title: "Portraits",
                description: "Professional portraits that showcase your personality",
                icon: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&w=400&q=60"
              },
              {
                title: "Events",
                description: "Comprehensive coverage of your special events",
                icon: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=400&q=60"
              },
              {
                title: "Commercial",
                description: "High-quality commercial photography for your business",
                icon: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=400&q=60"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background rounded-lg overflow-hidden shadow-lg"
              >
                <div className="aspect-video relative">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/services">Learn More</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}