"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden -z-10">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
                delay: i * 10,
              }}
              className="absolute inset-0"
            >
              <div className="grid grid-cols-6 gap-4 p-4 h-full">
                {Array.from({ length: 24 }).map((_, j) => (
                  <div
                    key={j}
                    className="h-32 bg-brand/10 rounded-lg"
                    style={{
                      transform: `rotate(${Math.random() * 10 - 5}deg)`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-brand/20 via-primary-800/40 to-transparent" />
      </motion.div>
    </div>
  );
}
