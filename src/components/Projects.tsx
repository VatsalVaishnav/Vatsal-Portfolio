"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for managing products, orders, and customers with real-time analytics.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Prisma"],
    image: "bg-blue-500", // Placeholder class
    live: "#",
    github: "#",
  },
  {
    title: "Social Media App",
    description:
      "A full-featured social media platform with real-time chat, posts, and user authentication.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "bg-purple-500",
    live: "#",
    github: "#",
  },
  {
    title: "Task Management Tool",
    description:
      "A productivity app for teams to organize tasks, set deadlines, and track progress.",
    tech: ["Vue.js", "Firebase", "Vuex"],
    image: "bg-green-500",
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website with smooth animations and dark mode support.",
    tech: ["Next.js", "Framer Motion", "TailwindCSS"],
    image: "bg-pink-500",
    live: "#",
    github: "#",
  },
  {
    title: "Weather App",
    description:
      "A beautiful weather application providing real-time forecasts and weather maps.",
    tech: ["React", "OpenWeather API", "Chart.js"],
    image: "bg-yellow-500",
    live: "#",
    github: "#",
  },
  {
    title: "Fitness Tracker",
    description:
      "An app to track workouts, diet, and health metrics with visual progress charts.",
    tech: ["React Native", "Redux", "Node.js"],
    image: "bg-red-500",
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="vatsalprojects" className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 neon-text"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 group"
            >
              <div
                className={`h-48 w-full ${project.image} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-white/5 rounded text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link
                    href={project.live}
                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </Link>
                  <Link
                    href={project.github}
                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
                  >
                    <Github size={16} /> GitHub
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
