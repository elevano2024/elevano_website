"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  AnalyticsIllustration,
  CRMIllustration,
  HealthcareIllustration,
} from "./ProjectIllustrations";

const projects = [
  {
    id: 1,
    title: "The All-In-One",
    subtitle: "CRM for construction",
    description:
      "Streamlining construction management with intelligent solutions.",
    color: "#4C42D9",
    Illustration: CRMIllustration,
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            project={project}
            progress={scrollYProgress}
            index={index}
            total={projects.length}
          />
        ))}
      </div>
    </div>
  );
}

interface ProjectItemProps {
  project: {
    title: string;
    subtitle: string;
    description: string;
    color: string;
    Illustration: () => JSX.Element;
  };
  progress: any;
  index: number;
  total: number;
}

function ProjectItem({ project, progress, index, total }: ProjectItemProps) {
  const itemProgress = useTransform(
    progress,
    [index / total, (index + 1) / total],
    [0, 1]
  );

  const opacity = useTransform(itemProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const y = useTransform(itemProgress, [0, 1], ["20%", "-20%"]);

  const scale = useTransform(itemProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        opacity,
        backgroundColor: project.color,
      }}
      className="flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div style={{ y }} className="text-white z-10">
            <motion.h2 className="text-6xl font-bold mb-4">
              {project.title}
            </motion.h2>
            <motion.h3 className="text-4xl mb-6">{project.subtitle}</motion.h3>
            <motion.p className="text-xl opacity-80">
              {project.description}
            </motion.p>
          </motion.div>

          {/* Illustration */}
          <motion.div
            style={{ scale }}
            className="relative flex items-center justify-center"
          >
            <project.Illustration />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
