"use client";
import { motion } from "./motion";

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
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-primary-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Success stories from businesses we've helped transform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {testimonial.author}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
