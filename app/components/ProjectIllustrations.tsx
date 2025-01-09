'use client'
import { motion } from 'framer-motion'

export const CRMIllustration = () => (
  <motion.svg
    width="400"
    height="400"
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial="hidden"
    animate="visible"
  >
    {/* Building blocks animation */}
    <motion.rect
      x="100"
      y="200"
      width="60"
      height="100"
      fill="white"
      variants={{
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 0.9 }
      }}
      transition={{ duration: 0.5 }}
    />
    <motion.rect
      x="170"
      y="150"
      width="60"
      height="150"
      fill="white"
      variants={{
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 0.9 }
      }}
      transition={{ duration: 0.5, delay: 0.2 }}
    />
    <motion.rect
      x="240"
      y="100"
      width="60"
      height="200"
      fill="white"
      variants={{
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 0.9 }
      }}
      transition={{ duration: 0.5, delay: 0.4 }}
    />
    {/* Connecting lines */}
    <motion.path
      d="M100 300 H300"
      stroke="white"
      strokeWidth="2"
      variants={{
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 0.5 }
      }}
      transition={{ duration: 1, delay: 0.6 }}
    />
  </motion.svg>
)

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
        visible: { pathLength: 1 }
      }}
      transition={{ duration: 1.5 }}
    />
    {/* Dots */}
    {[
      [150, 250],
      [250, 300],
      [350, 150]
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
)

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
        visible: { pathLength: 1 }
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
) 