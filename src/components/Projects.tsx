"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import aitraveler from "../assets/projects/aitraveler.png"
import p3jets from "../assets/projects/p3.png"
import fivepull from "../assets/projects/fivepull.png"
import porterYatch from "../assets/projects/porterYatch.png"
import portfolio from "../assets/projects/portfolio.png"
import gamming from "../assets/projects/gamming.png"

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
      "I developed Skillzap ai Travel website where users can create a personalized itinerary with the help of AI. Users can chat with the AI to ask for details about different places and customize their trip according to their preferences. They can also set their travel budget, and based on that, the AI generates a complete trip plan.",
    tech: ["React JS", "JavaScript", "Tailwind CSS", "Stripe"],
    image: aitraveler,
    live: "https://aitraveler.ai/",
    github: "#",
  },
  {
    title: "P3 Jets",
    description:
      "I developed a high-performance, SEO-optimized Next.js website for a luxury jet booking company. The platform enables users to explore and book premium private jets through an elegant, modern interface, with fast server-side rendering to improve search visibility. I implemented an advanced multi-filter system that allows users to refine listings by location, duration, aircraft length, price, and amenities, ensuring a smooth and intuitive browsing experience. The website is fully responsive, speed-optimized, and designed to showcase luxury jet listings in a visually appealing and user-focused way.",
    tech: ["Next.js", "Tailwind CSS", "firebase"],
    image: p3jets,
    live: "https://www.p3jets.com/",
    github: "#",
  },
  {
    title: "FivePull",
    description:
      "It is a modern and clean single-page landing website designed with a simple yet elegant user interface and smooth animations to create an engaging user experience. The landing page is fully responsive and optimized for performance, ensuring fast loading and seamless interaction across all devices.",
    tech: ["React JS", "Tailwind CSS"],
    image: fivepull,
    live: "https://tranquil-basbousa-1d5c14.netlify.app/",
    github: "#",
  },
  {
    title: "Porter Yachts",
    description:
      "I developed a high-performance, SEO-optimized Next.js website for a luxury yacht booking company that allows users to explore and book premium yachts through a modern, elegant, and user-friendly interface. The platform uses fast server-side rendering to improve search visibility and overall performance. I implemented an advanced multi-filter system that enables users to refine yacht listings by location, duration, length, price, and amenities, providing a smooth and intuitive browsing experience. The website is fully responsive, speed-optimized, and carefully designed to showcase luxury yacht listings in a visually engaging and user-centric manner.",
    tech: ["Next.js", "Tailwind CSS", "firebase"],
    image: porterYatch,
    live: "https://www.porteryachts.com/",
    github: "#",
  },
  {
    title: "Gamming",
    description:
      "I developed a modern gaming website built with rich and immersive GSAP animations, designed to deliver a highly engaging and interactive user experience. The website features advanced, smooth, and visually dynamic animations that help create a modern gaming feel, with seamless transitions between sections and interactions.",
    tech: ["React", "GSAP", "motion", "Tailwind CSS"],
    image: gamming,
    live: "https://gamewebsitevatsal.netlify.app/",
    github: "#",
  },
  // {
  //   title: "Fitness Tracker",
  //   description:
  //     "An app to track workouts, diet, and health metrics with visual progress charts.",
  //   tech: ["React Native", "Redux", "Node.js"],
  //   image: aitraveler,
  //   live: "#",
  //   github: "#",
  // },
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
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-primary/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-secondary/15 rounded-full blur-[80px]" />
        </div>

        <div className="absolute top-[80px] left-0 w-full text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <motion.span
              // whileHover={{ scale: 1.05 }}
              className="inline-flex items-center w-fit rounded-full border border-primary/40 bg-primary/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary mb-6 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Projects
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold neon-text">
              Featured Projects
            </h2>
          </motion.div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-10 md:px-20 pt-[110px] will-change-transform">
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col h-[350px] w-[350px] md:h-[420px] md:w-[550px] shrink-0 overflow-hidden rounded-2xl glass hover:border-primary/50 transition-colors duration-500 cursor-pointer will-change-gpu"
            >
              <div className="relative h-3/4 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-fill  transition-transform duration-500 group-hover:scale-110"
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
              className="relative w-full max-w-7xl max-h-[95vh] overflow-hidden rounded-3xl border border-primary/40 bg-[#0a0a0a] shadow-[0_0_80px_rgba(59,130,246,0.4),_0_0_30px_rgba(59,130,246,0.2)] flex flex-col"
            >
              {/* Decorative Background Glows */}
              <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/30 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-all duration-300 border border-white/10 active:scale-95"
              >
                <X size={20} />
              </button>

              <div className="relative z-10 flex flex-col h-full overflow-y-auto custom-scrollbar">
                {/* Image Section */}
                <div className="relative w-full h-[400px] md:h-[600px] shrink-0 overflow-hidden bg-white/5">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-contain p-4 md:p-8"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 md:pb-20 flex flex-col space-y-12 bg-[#0a0a0a]/50 backdrop-blur-sm">
                  <div className="space-y-6">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl md:text-6xl font-bold neon-text tracking-tight"
                    >
                      {selectedProject.title}
                    </motion.h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((t, i) => (
                        <motion.span
                          key={t}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="text-xs md:text-sm px-5 py-2 bg-white/5 border border-white/10 rounded-full text-primary-200 font-medium tracking-wide uppercase"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-4">
                      <h4 className="text-xl font-semibold text-white/90 flex items-center gap-3">
                        <span className="w-10 h-[1px] bg-primary" />
                        About the Project
                      </h4>
                      <p className="text-gray-400 leading-relaxed text-xl">
                        {selectedProject.description}
                        {" "}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>

                    <div className="flex flex-col gap-6 pt-4 lg:pt-0">
                      <h4 className="text-xl font-semibold text-white/90">Actions</h4>
                      <div className="flex flex-col gap-4">
                        <Link
                          href={selectedProject.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn relative flex items-center justify-center gap-3 px-8 py-5 bg-primary text-white rounded-2xl font-bold transition-all duration-500 overflow-hidden text-lg"
                        >
                          <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                          <span className="relative flex items-center gap-3">
                            <ExternalLink size={22} /> Launch Project
                          </span>
                        </Link>
                        {/* <Link
                          href={selectedProject.github}
                          className="flex items-center justify-center gap-3 px-8 py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold transition-all duration-300 border border-white/10 text-lg"
                        >
                          <Github size={22} /> View Source
                        </Link> */}
                      </div>
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

