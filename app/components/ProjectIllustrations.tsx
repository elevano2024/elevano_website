"use client";
import { motion } from "framer-motion";

export const AnalyticsIllustration = () => (
  <motion.svg
    width="400"
    height="400"
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial="hidden"
    animate="visible"
  >
    {/* Graph lines */}
    <motion.path
      d="M50 350 L150 250 L250 300 L350 150"
      stroke="white"
      strokeWidth="3"
      fill="none"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1 },
      }}
      transition={{ duration: 1.5 }}
    />
    {/* Dots */}
    {[
      [150, 250],
      [250, 300],
      [350, 150],
    ].map(([cx, cy], i) => (
      <motion.circle
        key={i}
        cx={cx}
        cy={cy}
        r="6"
        fill="white"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8 + i * 0.2 }}
      />
    ))}
  </motion.svg>
);

export const HealthcareIllustration = () => (
  <motion.svg
    width="400"
    height="400"
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial="hidden"
    animate="visible"
  >
    {/* Pulse line */}
    <motion.path
      d="M50 200 L150 200 L175 150 L200 250 L225 150 L250 200 L350 200"
      stroke="white"
      strokeWidth="3"
      fill="none"
      variants={{
        hidden: { pathLength: 0 },
        visible: { pathLength: 1 },
      }}
      transition={{ duration: 1.5 }}
    />
    {/* Cross symbol */}
    <motion.g
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
    >
      <rect x="185" y="100" width="30" height="90" fill="white" />
      <rect x="155" y="130" width="90" height="30" fill="white" />
    </motion.g>
  </motion.svg>
);
