"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    value: 20,
    label: "Projects Delivered",
    color: "#4F46E5",
    description: "Successfully completed projects across various industries",
    percentage: 95,
  },
  {
    value: 98,
    label: "Happy Clients",
    color: "#4F46E5",
    description: "Maintaining long-term relationships with satisfied clients",
    percentage: 98,
  },
  {
    value: 10,
    label: "Years Experience",
    color: "#4F46E5",
    description: "Years of expertise in delivering innovative solutions",
    percentage: 85,
  },
];
export default function StatsSection() {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in our achievements and the trust our clients place in
            us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="relative w-32 h-32 mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  {/* Background circle */}
                  <circle
                    cx="64"
                    cy="64"
                    r="60"
                    className="stroke-gray-200"
                    strokeWidth="8"
                    fill="none"
                  />
                  {/* Progress circle */}
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="60"
                    stroke={stat.color}
                    strokeWidth="8"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: stat.percentage / 100 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    strokeLinecap="round"
                    strokeDasharray="376.99111843077515"
                    strokeDashoffset="0"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <CountUp
                    end={stat.value}
                    duration={2}
                    className="text-3xl font-bold text-gray-900"
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
