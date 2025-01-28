"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface ShowcaseItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Creating modern, responsive web applications with cutting-edge technologies.",
    image: "/images/portfolio/web-dev.jpg",
  },
  {
    id: 2,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    image: "/images/portfolio/mobile-apps.jpg",
  },
  {
    id: 3,
    title: "UI/UX Design",
    description:
      "User-centered design solutions that deliver exceptional experiences.",
    image: "/images/portfolio/ui-design.jpg",
  },
  // Add more items as needed
];

export function PortfolioShowcase() {
  const [activeItem, setActiveItem] = useState<number>(1);

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left side - Navigation */}
        <div className="space-y-8">
          {showcaseItems.map((item) => (
            <motion.div
              key={item.id}
              className={`cursor-pointer group ${
                activeItem === item.id ? "text-brand" : "text-gray-600"
              }`}
              onHoverStart={() => setActiveItem(item.id)}
            >
              <div className="flex items-center gap-4">
                {/* Vertical line indicator */}
                <div className="relative w-1 h-16">
                  <div className="absolute inset-0 bg-gray-200 rounded-full" />
                  {activeItem === item.id && (
                    <motion.div
                      className="absolute inset-0 bg-brand rounded-full"
                      layoutId="activeIndicator"
                    />
                  )}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 max-w-md">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right side - Image */}
        <div className="relative h-[600px] rounded-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <Image
                src={
                  showcaseItems.find((item) => item.id === activeItem)?.image ||
                  ""
                }
                alt={
                  showcaseItems.find((item) => item.id === activeItem)?.title ||
                  ""
                }
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
