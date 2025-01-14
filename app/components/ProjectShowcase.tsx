"use client";
import { motion, useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
  AnalyticsIllustration,
  HealthcareIllustration,
} from "./ProjectIllustrations";

const projects = [
  {
    id: 1,
    title: "Smart Logbook",
    subtitle: "Asset Management Dashboard",
    description:
      "Intelligent dashboard for tracking and managing industrial assets with real-time monitoring and detailed reporting.",
    color: "#4C42D9",
    Illustration: () => (
      <div className="relative mix-blend-luminosity">
        <img
          src="/portfolio/logbook.png"
          alt="Smart Logbook Dashboard"
          className="rounded-lg w-full max-w-[600px] md:max-w-[800px]"
        />
      </div>
    ),
  },
  {
    id: 2,
    title: "Smart Analytics",
    subtitle: "for E-commerce",
    description: "Data-driven insights powering online retail success.",
    color: "#FF6B6B",
    Illustration: AnalyticsIllustration,
  },
  {
    id: 3,
    title: "AI-Powered",
    subtitle: "Healthcare Platform",
    description: "Revolutionary healthcare management system.",
    color: "#4ECDC4",
    Illustration: HealthcareIllustration,
  },
];

export function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Adjust the calculation to create more defined sections
      const sectionProgress = latest * projects.length;
      const newIndex = Math.min(
        projects.length - 1,
        Math.floor(sectionProgress)
      );

      // Add a buffer at the end of each section
      if (sectionProgress % 1 < 0.8) {
        setCurrentIndex(newIndex);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section
      id="portfolio"
      ref={containerRef}
      style={{
        // Add extra height to ensure last section has room to scroll
        height: `${(projects.length + 0.5) * 100}vh`,
        backgroundColor: projects[currentIndex].color,
        transition: "background-color 0.3s ease-in-out",
      }}
      className="relative"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
          className="h-full flex items-center"
        >
          <div className="container mx-auto px-4 pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-4xl md:text-6xl font-bold mb-4">
                    {projects[currentIndex].title}
                  </h2>
                  <h3 className="text-2xl md:text-4xl mb-6">
                    {projects[currentIndex].subtitle}
                  </h3>
                  <p className="text-lg md:text-xl opacity-80">
                    {projects[currentIndex].description}
                  </p>
                </motion.div>
              </div>

              <motion.div
                key={`illustration-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative flex items-center justify-center mt-8 lg:mt-0"
              >
                {React.createElement(projects[currentIndex].Illustration)}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
