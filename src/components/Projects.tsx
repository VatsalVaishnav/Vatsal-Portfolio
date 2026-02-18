"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import aitraveler from "../assets/projects/aitraveler.png"

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: any;
  live: string;
  github: string;
}

const projects = [
  {
    title: "AI-Traveler",
    description:
      "A comprehensive dashboard for managing products, orders, and customers with real-time analytics.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Prisma"],
    image: aitraveler,
    live: "#",
    github: "#",
  },
  {
    title: "Social Media App",
    description:
      "A full-featured social media platform with real-time chat, posts, and user authentication.",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: aitraveler,
    live: "#",
    github: "#",
  },
  {
    title: "Task Management Tool",
    description:
      "A productivity app for teams to organize tasks, set deadlines, and track progress.",
    tech: ["Vue.js", "Firebase", "Vuex"],
    image: aitraveler,
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio website with smooth animations and dark mode support.",
    tech: ["Next.js", "Framer Motion", "TailwindCSS"],
    image: aitraveler,
    live: "#",
    github: "#",
  },
  {
    title: "Weather App",
    description:
      "A beautiful weather application providing real-time forecasts and weather maps.",
    tech: ["React", "OpenWeather API", "Chart.js"],
    image: aitraveler,
    live: "#",
    github: "#",
  },
  {
    title: "Fitness Tracker",
    description:
      "An app to track workouts, diet, and health metrics with visual progress charts.",
    tech: ["React Native", "Redux", "Node.js"],
    image: aitraveler,
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section ref={targetRef} id="projects" className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-black/50">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-primary rounded-full blur-[100px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-secondary rounded-full blur-[100px]" />
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
              className="inline-flex items-center rounded-full border border-white/20 bg-gradient-to-r from-white/10 via-white/5 to-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:border-white/30 hover:shadow-[0_6px_30px_rgba(255,255,255,0.15)] transition-all duration-300"
            >
              Projects
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold neon-text">
              Featured Projects
            </h2>
          </motion.div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-10 md:px-20">
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col h-[350px] w-[350px] md:h-[420px] md:w-[550px] shrink-0 overflow-hidden rounded-2xl glass hover:border-primary/50 transition-colors duration-500 cursor-pointer"
            >
              <div className="relative h-3/4 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="h-1/4 p-6 flex flex-col justify-center bg-white/5 group-hover:bg-white/10 transition-colors duration-300 border-t border-white/5">
                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-white/40 text-xs md:text-sm font-medium group-hover:text-white/60 transition-colors duration-300">
                  Click for more details →
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-7xl max-h-[95vh] overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-[0_0_50px_rgba(0,0,0,0.5)] flex flex-col"
            >
              {/* Decorative Background Glows */}
              <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-all duration-300 border border-white/10 active:scale-95"
              >
                <X size={20} />
              </button>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 h-full overflow-y-auto custom-scrollbar">
                {/* Image Section */}
                <div className="relative h-[300px] lg:h-full min-h-[400px] overflow-hidden">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent lg:hidden" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0a] hidden lg:block" />
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center space-y-10 bg-[#0a0a0a]/50 backdrop-blur-sm">
                  <div className="space-y-4">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-4xl md:text-5xl font-bold neon-text tracking-tight"
                    >
                      {selectedProject.title}
                    </motion.h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t, i) => (
                        <motion.span
                          key={t}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="text-xs px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-primary-200 font-medium tracking-wide uppercase"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-white/90 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-primary" />
                        About the Project
                      </h4>
                      <p className="text-gray-400 leading-relaxed text-lg">
                        {selectedProject.description}
                        {" "}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5 pt-4">
                      <Link
                        href={selectedProject.live}
                        className="group/btn relative flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold transition-all duration-500 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                        <span className="relative flex items-center gap-2">
                          <ExternalLink size={20} /> Launch Project
                        </span>
                      </Link>
                      <Link
                        href={selectedProject.github}
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold transition-all duration-300 border border-white/10"
                      >
                        <Github size={20} /> View Source
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

