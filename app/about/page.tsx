"use client";

import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

export default function About() {
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
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate about capturing life's precious moments and turning them into timeless memories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1556103255-4443dbae8e5a?auto=format&fit=crop&w=800&q=80"
                alt="Photographer"
                className="rounded-lg shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-semibold">Hello, I'm Sarah</h2>
              <p className="text-muted-foreground">
                With over a decade of experience in photography, I've had the privilege of capturing 
                countless special moments for my clients. My journey in photography began with a simple 
                love for preserving memories, and it has grown into a passionate career that allows me 
                to tell unique stories through my Time Caught.
              </p>
              <p className="text-muted-foreground">
                I specialize in wedding photography, portraits, and event coverage. My style combines 
                candid moments with artistic composition, creating images that are both natural and 
                visually striking.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-3xl font-bold mb-2">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <p className="text-3xl font-bold mb-2">10+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">My Approach</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Creating beautiful, timeless photographs through attention to detail and genuine connections.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="h-8 w-8 mb-4" />,
                title: "Attention to Detail",
                description: "Every shot is carefully composed to capture the perfect moment."
              },
              {
                icon: <Camera className="h-8 w-8 mb-4" />,
                title: "Natural Style",
                description: "Creating authentic images that tell your unique story."
              },
              {
                icon: <Camera className="h-8 w-8 mb-4" />,
                title: "Professional Service",
                description: "Dedicated to providing an exceptional experience from start to finish."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-background rounded-lg shadow-lg"
              >
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}