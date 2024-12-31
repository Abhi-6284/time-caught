"use client";

import { motion } from "framer-motion";
// import FlickeringGrid from "../ui/flickering-grid";
import Ripple from "../ui/ripple";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/hero-background.mp4" type="video/mp4" />
      </video>
      {/* <FlickeringGrid
        className="z-0 absolute w-full h-full object-cover inset-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.1}
      /> */}
      <Ripple className="" mainCircleSize={100} />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        className="relative z-10 text-center text-white px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Time Caught: Moments Preserved
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Capturing Life{"'"}s Precious Instants Through Photography & Videography
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/portfolio" className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-lg">
          Explore Our Gallery
          </Link>
        </motion.button>
      </motion.div>
    </section>
  );
}
