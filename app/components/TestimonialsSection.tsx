"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Elevano transformed our digital infrastructure completely. Their expertise in cloud solutions saved us both time and resources.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    quote:
      "The team's dedication to delivering quality solutions is unmatched. They truly understand modern technology needs.",
    author: "Michael Chen",
    role: "CEO, InnovateTech",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    quote:
      "Working with Elevano has been a game-changer for our business. Their IT consulting services are top-notch.",
    author: "Emma Williams",
    role: "Operations Director, FutureSoft",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    quote:
      "Their AI integration capabilities helped us automate crucial processes. The ROI has been exceptional.",
    author: "David Martinez",
    role: "Innovation Lead, AI Solutions",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    quote:
      "The development team's attention to detail and commitment to quality is remarkable. They've exceeded our expectations.",
    author: "Lisa Zhang",
    role: "Product Manager, TechFlow",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    quote:
      "Outstanding service and technical expertise. They've been instrumental in our digital transformation journey.",
    author: "James Wilson",
    role: "Digital Director, NextGen",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const getSlideStyle = (index: number) => {
    const position = index - currentIndex;
    const totalSlides = testimonials.length;
    const normalizedPosition =
      ((position % totalSlides) + totalSlides) % totalSlides;

    if (normalizedPosition === 0) {
      return {
        scale: 1,
        opacity: 1,
        x: 0,
        zIndex: 3,
      };
    } else if (
      normalizedPosition === 1 ||
      normalizedPosition === -totalSlides + 1
    ) {
      return {
        scale: 0.8,
        opacity: 0.5,
        x: "50%",
        zIndex: 2,
      };
    } else if (
      normalizedPosition === totalSlides - 1 ||
      normalizedPosition === -1
    ) {
      return {
        scale: 0.8,
        opacity: 0.5,
        x: "-50%",
        zIndex: 2,
      };
    } else {
      return {
        scale: 0.6,
        opacity: 0,
        x: normalizedPosition > 0 ? "100%" : "-100%",
        zIndex: 1,
      };
    }
  };

  return (
    <section className="py-8 md:py-16 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="mt-2 md:mt-4 text-lg md:text-xl text-gray-600">
            Success stories from businesses we've helped transform
          </p>
        </motion.div>

        <div className="relative h-[550px] md:h-[400px] overflow-hidden">
          <div className="absolute w-full h-full flex items-center justify-center">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                animate={getSlideStyle(index)}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="absolute w-full max-w-2xl px-2 md:px-6"
              >
                <div className="bg-white rounded-xl p-4 md:p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-0 mb-4 md:mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden md:mr-4 border-2 border-primary/20">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="font-semibold text-lg md:text-xl text-gray-900">
                        {testimonial.author}
                      </h3>
                      <p className="text-sm md:text-base text-primary/80">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed italic text-center md:text-left">
                    "{testimonial.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 md:gap-3 mt-4 md:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gray-900 w-6 md:w-8"
                  : "bg-gray-400 w-2 md:w-2.5 hover:bg-gray-600"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
