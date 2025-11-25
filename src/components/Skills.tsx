"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Frameworks",
    skills: ["React", "Next.js", "Vue.js"],
  },
  {
    title: "Styling",
    skills: ["TailwindCSS", "CSS3", "SASS", "Framer Motion"],
  },
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 neon-text"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-xl hover:bg-white/5 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-primary mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:bg-primary/50 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
