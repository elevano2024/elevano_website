"use client";
import { motion } from "framer-motion";

const ServiceIcon = ({
  type,
  isActive,
}: {
  type: string;
  isActive: boolean;
}) => {
  switch (type) {
    case "Product Design":
      return (
        <motion.span
          className="material-icons-outlined"
          style={{
            color: isActive ? "#fff" : "#4C42D9",
            fontSize: "32px",
          }}
          whileHover={{
            scale: 1.1,
            rotate: 180,
            transition: { duration: 0.3 },
          }}
        >
          design_services
        </motion.span>
      );

    case "Web and Mobile App Development":
      return (
        <motion.span
          className="material-icons-outlined"
          style={{
            color: isActive ? "#fff" : "#4C42D9",
            fontSize: "32px",
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
        >
          devices
        </motion.span>
      );

    case "Cloud Services":
      return (
        <motion.span
          className="material-icons-outlined"
          style={{
            color: isActive ? "#fff" : "#4C42D9",
            fontSize: "32px",
          }}
          whileHover={{
            scale: 1.1,
            y: [-2, 2, -2],
            transition: { duration: 0.5 },
          }}
        >
          cloud
        </motion.span>
      );

    case "Digital Transformation Consulting":
      return (
        <motion.span
          className="material-icons-outlined"
          style={{
            color: isActive ? "#fff" : "#4C42D9",
            fontSize: "32px",
          }}
          whileHover={{
            scale: 1.1,
            rotate: 90,
            transition: { duration: 0.3 },
          }}
        >
          transform
        </motion.span>
      );

    case "AI Solutions":
      return (
        <motion.span
          className="material-icons-outlined"
          style={{
            color: isActive ? "#fff" : "#4C42D9",
            fontSize: "32px",
          }}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
        >
          psychology
        </motion.span>
      );

    case "Backend Development":
      return (
        <motion.span
          className="material-icons-outlined"
          style={{
            color: isActive ? "#fff" : "#4C42D9",
            fontSize: "32px",
          }}
          whileHover={{
            scale: 1.1,
            y: [-2, 2, -2],
            transition: { duration: 0.5 },
          }}
        >
          storage
        </motion.span>
      );

    case "AI & Machine Learning":
      return (
        <motion.svg
          width="40"
          height="40"
          viewBox="0 0 48 48"
          fill="none"
          whileHover={{ scale: 1.05 }}
        >
          {/* Neural Network */}
          <motion.g>
            {[0, 1, 2].map((i) => (
              <motion.circle
                key={`top-${i}`}
                cx={16 + i * 8}
                cy="16"
                r="3"
                fill={isActive ? "#fff" : "#4C42D9"}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              />
            ))}
            {[0, 1].map((i) => (
              <motion.circle
                key={`middle-${i}`}
                cx={20 + i * 8}
                cy="24"
                r="3"
                fill={isActive ? "#fff" : "#8B85E3"}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.2 },
                }}
              />
            ))}
            <motion.circle
              cx="24"
              cy="32"
              r="3"
              fill={isActive ? "#fff" : "#4C42D9"}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 },
              }}
            />
          </motion.g>
          <motion.g
            stroke={isActive ? "#fff" : "#8B85E3"}
            strokeWidth="2"
            strokeLinecap="round"
          >
            <motion.path
              d="M16 16l4 8M24 16v8M32 16l-4 8"
              whileHover={{
                pathLength: [1, 0.5, 1],
                transition: { duration: 0.3 },
              }}
            />
            <motion.path
              d="M20 24l4 8M28 24l-4 8"
              whileHover={{
                pathLength: [1, 0.5, 1],
                transition: { duration: 0.3 },
              }}
            />
          </motion.g>
        </motion.svg>
      );

    case "Backend & API Development":
      return (
        <motion.svg
          width="40"
          height="40"
          viewBox="0 0 48 48"
          fill="none"
          whileHover={{ scale: 1.05 }}
        >
          <motion.g>
            {[0, 1, 2].map((i) => (
              <motion.rect
                key={i}
                x="12"
                y={16 + i * 6}
                width="24"
                height="4"
                rx="1"
                fill="none"
                stroke={isActive ? "#fff" : "#4C42D9"}
                strokeWidth="2"
                whileHover={{
                  x: [0, -2, 0],
                  transition: {
                    duration: 0.3,
                    delay: i * 0.1,
                  },
                }}
              />
            ))}
          </motion.g>
          <motion.g stroke={isActive ? "#fff" : "#8B85E3"} strokeWidth="2">
            {[0, 1, 2].map((i) => (
              <motion.line
                key={i}
                x1="28"
                y1={18 + i * 6}
                x2="32"
                y2={18 + i * 6}
                strokeLinecap="round"
                whileHover={{
                  pathLength: [1, 0.5, 1],
                  transition: {
                    duration: 0.3,
                    delay: i * 0.1,
                  },
                }}
              />
            ))}
          </motion.g>
          <motion.path
            d="M36 14v20M36 18h4M36 24h4M36 30h4"
            stroke={isActive ? "#fff" : "#4C42D9"}
            strokeWidth="2"
            strokeLinecap="round"
            whileHover={{
              x: [0, 2, 0],
              transition: { duration: 0.3 },
            }}
          />
        </motion.svg>
      );

    default:
      return null;
  }
};

const services = [
  {
    title: "Product Design",
    description:
      "Transform your ideas into intuitive products with our expert product design process.",
    icon: "Product Design",
  },
  {
    title: "Web and Mobile App Development",
    description:
      "Build robust and scalable applications using cutting-edge technologies.",
    icon: "Web and Mobile App Development",
  },
  {
    title: "Cloud Services",
    description:
      "Leverage cloud solutions for scalable and efficient infrastructure.",
    icon: "Cloud Services",
  },
  {
    title: "Digital Transformation Consulting",
    description: "Strategic guidance for your digital evolution journey.",
    icon: "Digital Transformation Consulting",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Harness AI capabilities to automate processes and gain valuable insights.",
    icon: "AI & Machine Learning",
  },
  {
    title: "Backend & API Development",
    description:
      "Build scalable backend systems and APIs with modern architectures.",
    icon: "Backend & API Development",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 bg-white w-full">
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
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            From crafting visually stunning websites to delivering robust
            software solutions and scalable cloud infrastructure, we provide
            customized strategies to meet your unique business needs. Partner
            with us to drive innovation, efficiency, and long-term growth in the
            digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(76, 66, 217, 0.02)",
              }}
              className="relative flex items-start p-6 rounded-xl transition-colors cursor-pointer bg-white"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <ServiceIcon type={service.icon} isActive={false} />
              </div>
              <div className="ml-4 flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
