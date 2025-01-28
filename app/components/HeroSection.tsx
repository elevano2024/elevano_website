"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ParticleCanvas } from "./ParticleCanvas";

export function HeroSection() {
  const heroContentRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-x-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-primary-800/50 to-primary-900/50" />
        <ParticleCanvas interactionElementRef={heroContentRef} />
      </div>

      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <motion.div
            ref={heroContentRef}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full"
          >
            <motion.span
              className="text-brand-300 text-lg mb-4 block font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Innovate • Design • Transform
            </motion.span>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Building Digital Excellence Through Innovation
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Empowering businesses with AI-driven, scalable, and cutting-edge
              digital solutions. At Elevano, we transform ideas into intelligent
              systems that drive growth and innovation, ensuring your success in
              a rapidly evolving tech landscape.
            </motion.p>
            <motion.div
              className="space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link href="/contact" className="inline-block">
                <button className="border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white/10 transition-all duration-300">
                  Get in Touch
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
