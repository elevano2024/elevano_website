import Image from "next/image";

const projects = [
  {
    title: "Modern E-commerce Platform",
    description:
      "A cutting-edge shopping experience with AI-powered recommendations",
    image: "/portfolio/ecommerce.svg",
    tags: ["Next.js", "React", "AI", "TypeScript"],
  },
  {
    title: "Healthcare Management System",
    description: "Streamlined patient care and medical record management",
    image: "/portfolio/healthcare.svg",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Financial Analytics Dashboard",
    description: "Real-time data visualization and financial insights",
    image: "/portfolio/finance.svg",
    tags: ["Vue.js", "D3.js", "Python"],
  },
  {
    title: "Smart Home IoT Platform",
    description: "Connected device management and automation",
    image: "/portfolio/iot.svg",
    tags: ["IoT", "React", "Node.js"],
  },
  {
    title: "Mobile Banking App",
    description: "Secure and intuitive mobile banking experience",
    image: "/portfolio/mobile.svg",
    tags: ["React Native", "TypeScript", "Node.js"],
  },
  {
    title: "AI Content Generator",
    description: "Advanced AI-powered content creation platform",
    image: "/portfolio/ai.svg",
    tags: ["Python", "TensorFlow", "React"],
  },
  // Add more projects as needed
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 pt-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Work</h1>
        <p className="text-xl text-gray-600 mb-12">
          Explore our latest projects and success stories
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-brand-100 text-brand-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
