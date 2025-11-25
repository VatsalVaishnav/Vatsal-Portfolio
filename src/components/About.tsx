"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 neon-text">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I am a passionate Frontend Developer with a knack for creating
            visually stunning and highly functional web applications. With a
            strong foundation in modern web technologies, I specialize in
            building responsive, user-friendly interfaces that deliver
            exceptional user experiences. I love solving complex problems and
            turning creative ideas into reality through code.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 glass rounded-xl neon-box">
              <h3 className="text-4xl font-bold text-primary mb-2">2+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="p-6 glass rounded-xl neon-box">
              <h3 className="text-4xl font-bold text-secondary mb-2">20+</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="p-6 glass rounded-xl neon-box">
              <h3 className="text-4xl font-bold text-primary mb-2">100%</h3>
              <p className="text-gray-400">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
