"use client";
import { motion } from "./motion";

const services = [
  {
    title: "Product Design",
    description:
      "Transform your ideas into intuitive products with our expert product design process.",
    icon: "🎨",
  },
  {
    title: "Web and Mobile App Development",
    description:
      "Build robust and scalable applications using cutting-edge technologies.",
    icon: "💻",
  },
  {
    title: "Cloud Services",
    description:
      "Leverage cloud solutions for scalable and efficient infrastructure.",
    icon: "☁️",
  },
  {
    title: "Digital Transformation Consulting",
    description: "Strategic guidance for your digital evolution journey.",
    icon: "🚀",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Whether you need a stunning website, custom software solutions,
            scalable cloud infrastructure, or strategic guidance for digital
            solutions, we deliver tailored services to propel your business
            forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start p-6 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl">
                {service.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
