"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const technologies = {
  languages: [
    { name: "TypeScript", icon: "/typescript-icon.svg" },
    { name: "Python", icon: "/python-icon.svg" },
    { name: "Go", icon: "/golang-icon.svg" },
    { name: "Rust", icon: "/rust-icon.svg" },
  ],
  frontend: [
    { name: "React", icon: "/react-icon.svg" },
    { name: "Next.js", icon: "/nextjs-icon.svg" },
    { name: "Tailwind", icon: "/tailwind-icon.svg" },
  ],
  backend: [
    { name: "Node.js", icon: "/nodejs-icon.svg" },
    { name: "PostgreSQL", icon: "/postgresql-icon.svg" },
    { name: "MongoDB", icon: "/mongodb-icon.svg" },
  ],
  cloud: [
    { name: "AWS", icon: "/aws-icon.svg" },
    { name: "Docker", icon: "/docker-icon.svg" },
    { name: "Kubernetes", icon: "/kubernetes-icon.svg" },
  ],
  ai: [
    { name: "TensorFlow", icon: "/tensorflow-icon.svg" },
    { name: "PyTorch", icon: "/pytorch-icon.svg" },
    { name: "Jupyter", icon: "/jupyter-icon.svg" },
  ],
};

export function TechStack() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-600">
            We use cutting-edge technologies to build modern solutions
          </p>
        </motion.div>

        {Object.entries(technologies).map(
          ([category, techs], categoryIndex) => (
            <div key={category} className="mb-16 last:mb-0">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xl font-semibold text-gray-800 mb-6 capitalize"
              >
                {category}
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      width={48}
                      height={48}
                      className="mb-3"
                    />
                    <span className="text-sm text-gray-600">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
