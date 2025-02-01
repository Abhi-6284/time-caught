"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Wedding Photography",
      price: "from $2,500",
      description: "Comprehensive wedding day coverage with a second shooter, digital gallery, and custom album.",
      features: [
        "8-12 hours of coverage",
        "Two professional photographers",
        "Online gallery with high-res downloads",
        "Custom wedding album",
        "Engagement session included",
        "Travel within 50 miles"
      ],
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Portrait Sessions",
      price: "from $300",
      description: "Professional portrait sessions for individuals, couples, or families.",
      features: [
        "1-2 hour session",
        "Multiple outfit changes",
        "Professional editing",
        "Online gallery with downloads",
        "Print release included",
        "Location of your choice"
      ],
      image: "https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Event Coverage",
      price: "from $800",
      description: "Professional photography for corporate events, parties, and special occasions.",
      features: [
        "4-6 hours of coverage",
        "Event highlight gallery",
        "Quick turnaround time",
        "Professional editing",
        "Digital delivery",
        "Commercial usage rights"
      ],
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80"
    }
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
            <h1 className="text-4xl font-bold mb-6">Services & Pricing</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional photography services tailored to capture your special moments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-background rounded-lg overflow-hidden shadow-lg"
              >
                <div className="aspect-video relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-xl font-bold text-primary mb-4">{service.price}</p>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted-foreground">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link href="/contact">Book Now</Link>
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