"use client";
import { motion } from "./motion";

export function CTASection() {
  return (
    <section className="py-20 bg-primary-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have A Project In Mind?
            <br />
            Let's Get To Work With Us.
          </h2>
          <button className="bg-white text-primary-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
