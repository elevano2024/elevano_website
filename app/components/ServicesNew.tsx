"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ServiceIcons } from "./icons/ServiceIcons";

// Enhanced random rotation utility
const getRandomRotation = () => {
  const baseRotation = Math.random() * 10 - 5; // Random value between -5 and 5 degrees
  return baseRotation * (Math.random() > 0.5 ? 1.5 : -1.5); // Amplify rotation randomly
};

const services = [
  {
    category: "What We Do",
    title: "Full-Stack Development & Technical Innovation",
    description:
      "Leveraging cutting-edge frameworks and modern tech stacks to deliver scalable solutions. From intuitive frontends to robust cloud infrastructure, we architect end-to-end systems that drive digital transformation.",
    technologies: [
      { name: "React/Next.js", icon: "/tech/react.svg", color: "#61DAFB" },
      { name: "Node.js", icon: "/tech/node.svg", color: "#339933" },
      { name: "Python", icon: "/tech/python.svg", color: "#3776AB" },
      { name: "Figma", icon: "/tech/figma.svg", color: "#3178C6" },
      { name: "AWS", icon: "/tech/aws.svg", color: "#FF9900" },
      { name: "Docker", icon: "/tech/docker.svg", color: "#2496ED" },
      { name: "MongoDB", icon: "/tech/mongodb.svg", color: "#47A248" },
      { name: "WordPress", icon: "/tech/wordpress.svg", color: "#21759B" },
      { name: "openai", icon: "/tech/openai.svg", color: "#DC382D" },
      { name: "Kubernetes", icon: "/tech/kubernetes.svg", color: "#326CE5" },
      { name: "firebase", icon: "/tech/firebase.svg", color: "#FF6F00" },
      { name: "TensorFlow", icon: "/tech/tensorflow.svg", color: "#FF6F00" },
    ],
  },
];

// Predefined rotations for consistent layout
const cardPositions = [
  { rotation: -4, translateX: 0, translateY: 0 }, // Top left
  { rotation: 3, translateX: 5, translateY: -2 }, // Top center
  { rotation: -2, translateX: -3, translateY: 3 }, // Top right
  { rotation: -2, translateX: 2, translateY: 1 }, // Bottom left
  { rotation: 4, translateX: -4, translateY: -2 }, // Bottom center
  { rotation: 5, translateX: 3, translateY: 2 }, // Bottom right
];

const serviceCards = [
  {
    icon: ServiceIcons.ProductDesign,
    title: "Product Design & UX",
    description: "Creating intuitive digital experiences",
    features: [
      { name: "Design Systems", tech: "Component Libraries, Design Tokens" },
      {
        name: "Interactive Prototypes",
        tech: "Micro-interactions, Motion Design",
      },
      { name: "User Research", tech: "Analytics Integration, A/B Testing" },
    ],
    ...cardPositions[0],
    bgColor: "from-blue-50 to-indigo-50",
  },
  {
    icon: ServiceIcons.WebDev,
    title: "Modern Web Apps",
    description: "Building the next generation of web applications",
    features: [
      {
        name: "Frontend Architecture",
        tech: "Server Components, Edge Runtime",
      },
      { name: "State Management", tech: "Server Actions, Real-time Updates" },
      { name: "Performance", tech: "SSR, ISR, Dynamic Imports" },
    ],
    ...cardPositions[1],
    bgColor: "from-emerald-50 to-teal-50",
  },
  {
    icon: ServiceIcons.Cloud,
    title: "Cloud & DevOps",
    description: "Scaling your infrastructure for global reach",
    features: [
      { name: "Infrastructure", tech: "IaC, Multi-region Deployment" },
      { name: "Containerization", tech: "Microservices, Service Mesh" },
      { name: "CI/CD", tech: "GitOps, Automated Pipelines" },
    ],
    ...cardPositions[2],
    bgColor: "from-violet-50 to-purple-50",
  },
  {
    icon: ServiceIcons.Transform,
    title: "Digital Innovation",
    description: "Revolutionizing business through technology",
    features: [
      { name: "System Design", tech: "Event-Driven, Domain-Driven" },
      { name: "API Architecture", tech: "REST, GraphQL, WebSockets" },
      { name: "Data Strategy", tech: "Data Mesh, Event Streaming" },
    ],
    ...cardPositions[3],
    bgColor: "from-orange-50 to-amber-50",
  },
  {
    icon: ServiceIcons.AI,
    title: "AI & Machine Learning",
    description: "Harnessing AI to drive business innovation",
    features: [
      { name: "LLM Integration", tech: "RAG, Embeddings, Fine-tuning" },
      { name: "MLOps", tech: "Model Serving, Feature Stores" },
      { name: "Vector Search", tech: "Semantic Search, Neural DBs" },
    ],
    ...cardPositions[4],
    bgColor: "from-pink-50 to-rose-50",
  },
  {
    icon: ServiceIcons.Backend,
    title: "Backend & APIs",
    description: "Building robust foundations for your applications",
    features: [
      { name: "Serverless", tech: "Edge Functions, BaaS" },
      { name: "Data Engineering", tech: "OLAP, Stream Processing" },
      { name: "Security", tech: "Zero Trust, IAM, WAF" },
    ],
    ...cardPositions[5],
    bgColor: "from-cyan-50 to-sky-50",
  },
];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export function ServicesNew() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section className="py-16 relative overflow-hidden bg-gray-100/90">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 via-gray-100/30 to-gray-100/90" />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(300px,1fr)_2fr] gap-8">
          {/* Left Column - Reorganized */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-primary text-sm font-medium"
              >
                {services[0].category}
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold text-gray-900"
              >
                {services[0].title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-600 text-sm leading-relaxed"
              >
                {services[0].description}
              </motion.p>
            </div>

            {/* Technology Icons Grid - 3 columns with gradient overlay */}
            <div className="relative">
              <div className="grid grid-cols-3 gap-3 h-[calc(100vh-24rem)] overflow-hidden">
                {services[0].technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    className="flex flex-col items-center justify-center bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-12 h-12"
                    />
                  </motion.div>
                ))}
              </div>
              {/* Gradient overlay for technology grid */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-100 to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column - Improved sticky notes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
            {serviceCards.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  x: isDesktop ? service.translateX : 0,
                  y: isDesktop ? service.translateY - 50 : 0,
                  rotate: isDesktop ? service.rotation : 0,
                }}
                whileInView={{
                  opacity: 1,
                  y: isDesktop ? service.translateY : 0,
                  x: isDesktop ? service.translateX : 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    mass: 1,
                    delay: index * 0.1,
                  },
                }}
                whileHover={{
                  scale: 1.02,
                  rotate: isDesktop ? service.rotation * -0.7 : 0,
                  y: isDesktop ? service.translateY - 8 : -4,
                  zIndex: 10,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 15,
                    mass: 0.5,
                    duration: 0.2,
                  },
                }}
                className={`group rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 
                  will-change-transform
                  ${
                    isDesktop
                      ? `bg-gradient-to-br ${service.bgColor}`
                      : "bg-white"
                  }`}
                style={{
                  transformOrigin: "50% 0%",
                  position: "relative",
                  zIndex: index,
                  transform: isDesktop
                    ? `perspective(1000px) rotateZ(${service.rotation}deg)`
                    : "none",
                  backfaceVisibility: "hidden",
                  WebkitFontSmoothing: "antialiased",
                  WebkitTransformStyle: "preserve-3d",
                }}
              >
                <div className="space-y-3 relative">
                  {/* Hide icon on mobile */}
                  <div className="hidden md:flex justify-center mb-4">
                    <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-gray-900 leading-tight text-center">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-xs leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-gray-600 text-xs group/item"
                      >
                        <svg
                          className="w-3.5 h-3.5 text-primary mr-2 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <div>
                          <span className="font-semibold">{feature.name}</span>
                          <span className="text-[10px] text-gray-500 block mt-0.5 opacity-90">
                            {feature.tech}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
