"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const StepIcon = ({ stepId }: { stepId: number }) => {
  switch (stepId) {
    case 1:
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Magnifying glass handle */}
          <motion.path
            d="M32 32L40 40"
            stroke="#4C42D9"
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          {/* Glass circle */}
          <motion.circle
            cx="24"
            cy="22"
            r="14"
            stroke="#8B85E3"
            strokeWidth="3"
            fill="none"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          {/* Sparkles */}
          <motion.path
            d="M24 12v-4M30 14l2-3M34 20h4M30 26l2 3"
            stroke="#4C42D9"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8, staggerChildren: 0.1 }}
          />
        </svg>
      );
    case 2:
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Design tools */}
          <motion.path
            d="M14 34L34 14"
            stroke="#4C42D9"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.path
            d="M32 16l-4-4 2-2 4 4-2 2zM16 32l-4-4 2-2 4 4-2 2z"
            fill="#8B85E3"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          {/* Color palette */}
          <motion.circle
            cx="18"
            cy="18"
            r="3"
            fill="#4C42D9"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          />
          <motion.circle
            cx="30"
            cy="30"
            r="3"
            fill="#8B85E3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          />
        </svg>
      );
    case 3:
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Code brackets */}
          <motion.path
            d="M16 16L8 24L16 32"
            stroke="#4C42D9"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.path
            d="M32 16L40 24L32 32"
            stroke="#8B85E3"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          {/* Middle code line */}
          <motion.path
            d="M28 12L20 36"
            stroke="#4C42D9"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </svg>
      );
    case 4:
      return (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Rocket body */}
          <motion.path
            d="M24 36V12"
            stroke="#4C42D9"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          {/* Rocket wings */}
          <motion.path
            d="M16 28L24 36L32 28"
            stroke="#8B85E3"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          {/* Rocket flames */}
          <motion.path
            d="M20 36l4 4 4-4"
            stroke="#4C42D9"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: [0, 1, 0], y: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </svg>
      );
    default:
      return null;
  }
};

const steps = [
  {
    id: 1,
    title: "Discover",
    description: "Explore what challenges or problems the project presents.",
    color: "#4C42D9",
  },
  {
    id: 2,
    title: "Design",
    description:
      "Create innovative solutions through thoughtful design and planning.",
    color: "#4C42D9",
  },
  {
    id: 3,
    title: "Develop",
    description: "Transform designs into robust, scalable solutions.",
    color: "#4C42D9",
  },
  {
    id: 4,
    title: "Deliver",
    description:
      "Launch and maintain high-quality solutions with ongoing support.",
    color: "#4C42D9",
  },
];

export function WorkProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentStep = steps[activeStep];

  // Handle scroll navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isAnimating) return;

      if (e.deltaY > 0 && activeStep < steps.length - 1) {
        e.preventDefault();
        setIsAnimating(true);
        setActiveStep((prev) => prev + 1);
        setTimeout(() => setIsAnimating(false), 1000);
      } else if (e.deltaY < 0 && activeStep > 0) {
        e.preventDefault();
        setIsAnimating(true);
        setActiveStep((prev) => prev - 1);
        setTimeout(() => setIsAnimating(false), 1000);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [activeStep, isAnimating]);

  return (
    <>
      {/* Desktop Version */}
      <div
        ref={containerRef}
        className="hidden md:block relative h-screen bg-white overflow-hidden"
      >
        <div className="container mx-auto h-full">
          <div className="grid grid-cols-2 h-full gap-12">
            {/* Left side - Animation and Title */}
            <div className="flex items-center justify-center">
              <motion.div className="relative w-[600px] h-[600px]">
                {/* Progress Ring */}
                <svg
                  className="absolute inset-0 w-full h-full -rotate-90"
                  viewBox="0 0 200 200"
                >
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#4C42D9"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="565.48"
                    initial={{ strokeDashoffset: 565.48 }}
                    animate={{
                      strokeDashoffset:
                        565.48 - (activeStep + 1) * (565.48 / steps.length),
                    }}
                    transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                  />
                </svg>

                {/* Content inside ring */}
                <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-center p-12">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                      className="text-primary-600"
                    >
                      <StepIcon stepId={currentStep.id} />
                    </motion.div>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={`title-${activeStep}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2, delay: 0.02 }}
                      className="text-3xl font-bold text-gray-900 mt-4 mb-3"
                    >
                      {currentStep.title}
                    </motion.h3>
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`desc-${activeStep}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.2, delay: 0.04 }}
                      className="text-gray-600 max-w-sm"
                    >
                      {currentStep.description}
                    </motion.p>
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            </div>

            {/* Right side - Text Content */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-6xl font-bold mb-8 text-gray-900">
                  How we work
                </h2>
                <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
                  At Elevano, every solution starts with understanding your
                  vision. Through a thoughtful discovery process, we uncover
                  your unique challenges and define clear goals. From there, our
                  expert team transforms ideas into innovative, tailored IT
                  solutions, blending creativity with cutting-edge technology.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setActiveStep(index);
                    setTimeout(() => setIsAnimating(false), 1000);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeStep === index
                    ? "bg-primary-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to step ${step.title}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Version - Keep existing mobile version */}
      <div className="md:hidden bg-white">
        <div className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              How we work
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We follow a proven process to deliver exceptional results for your
              business.
            </p>
          </motion.div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-bold">{step.id}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 ml-14">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 mb-6">Ready to start your project?</p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium bg-primary-600 transition-colors"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}
