"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

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
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-black/50">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px]" />
        </div>

        <div className="absolute top-10 left-0 w-full text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="inline-flex items-center rounded-full border border-white/20 bg-linear-to-r from-white/10 via-white/5 to-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-white/40 hover:shadow-[0_6px_30px_rgba(255,255,255,0.1)] transition-all duration-300"
            >
              Projects
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold got-text">
              Featured Projects
            </h2>
          </motion.div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-10 md:px-20">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative h-[450px] w-[350px] md:h-[500px] md:w-[400px] shrink-0 overflow-hidden rounded-2xl glass hover:border-white/30 transition-colors duration-500"
            >
              <div
                className={`absolute inset-0 h-full w-full ${project.image} transition-transform duration-500 group-hover:scale-110 opacity-20 group-hover:opacity-30`}
              />

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-linear-to-t from-black via-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors duration-300 got-text">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white font-semibold uppercase tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link
                    href={project.live}
                    className="flex items-center gap-2 px-4 py-2 bg-linear-to-r from-primary to-red-dark hover:from-red-dark hover:to-primary text-white rounded-lg font-bold transition-all duration-300 shadow-[0_0_15px_rgba(220,20,60,0.5)] hover:shadow-[0_0_25px_rgba(220,20,60,0.7)] uppercase tracking-wide"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </Link>
                  <Link
                    href={project.github}
                    className="flex items-center gap-2 px-4 py-2 glass hover:bg-white/10 text-white rounded-lg font-bold transition-all duration-300 border border-white/20 hover:border-white/40 uppercase tracking-wide"
                  >
                    <Github size={18} /> GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

