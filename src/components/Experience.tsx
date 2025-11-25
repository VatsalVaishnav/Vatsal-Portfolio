"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    description:
      "Leading the frontend team in building scalable web applications using Next.js and React.",
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency",
    period: "2021 - 2023",
    description:
      "Developed responsive websites and landing pages for various clients using modern web technologies.",
  },
  {
    role: "Junior Web Developer",
    company: "StartUp Hub",
    period: "2020 - 2021",
    description:
      "Assisted in the development of the company's main product and maintained legacy code.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 neon-text"
        >
          Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 pb-12 border-l border-glass-border last:pb-0"
            >
              <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />

              <div className="glass p-6 rounded-xl hover:bg-white/5 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-1">
                  {exp.role}
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-primary font-medium">
                    {exp.company}
                  </span>
                  <span className="text-sm text-gray-400">{exp.period}</span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
