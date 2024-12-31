"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { MagicCard } from "../ui/magic-card";

const portfolioItems = [
  {
    id: 1,
    type: "image",
    src: "/placeholder.svg",
    alt: "Landscape Photography",
    category: "photography",
  },
  {
    id: 2,
    type: "video",
    src: "/placeholder-video.mp4",
    alt: "Nature Documentary",
    category: "video",
  },
  {
    id: 3,
    type: "image",
    src: "/placeholder.svg",
    alt: "Portrait Photography",
    category: "photography",
  },
  {
    id: 4,
    type: "image",
    src: "/placeholder.svg",
    alt: "Street Photography",
    category: "photography",
  },
  {
    id: 5,
    type: "video",
    src: "/placeholder-video.mp4",
    alt: "Wedding Highlights",
    category: "video",
  },
  {
    id: 6,
    type: "image",
    src: "/placeholder.svg",
    alt: "Wildlife Photography",
    category: "photography",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filteredItems = portfolioItems.filter(
    (item) => filter === "all" || item.category === filter
  );

  return (
    <section className="py-20 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-12">My Portfolio</h1>
        <div className="flex justify-center mb-8">
          <button
            className={`mx-2 px-4 py-2 rounded-full ${
              filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`mx-2 px-4 py-2 rounded-full ${
              filter === "photography"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setFilter("photography")}
          >
            Photography
          </button>
          <button
            className={`mx-2 px-4 py-2 rounded-full ${
              filter === "video" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter("video")}
          >
            Video
          </button>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="w-full group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              layout
            >
              <MagicCard className="relative overflow-hidden rounded-lg shadow-lg border *:w-full" gradientColor={"#D9D9D955"}>
                {item.type === "image" ? (
                  <Image
                    height={500}
                    width={400}
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-64 object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">{item.alt}</p>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
