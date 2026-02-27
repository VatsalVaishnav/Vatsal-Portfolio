"use client";

import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import reactLogo from "@/assets/image/react.png";
import nextLogo from "@/assets/image/next-js.svg";
import tailwindLogo from "@/assets/image/tailwind.png";
import typescriptLogo from "@/assets/image/Typescript_logo_2020.svg";
import javascriptLogo from "@/assets/image/JavaScript-logo.png";
import reduxLogo from "@/assets/image/redux.png";
import githubLogo from "@/assets/image/github.png";
import viteLogo from "@/assets/image/vite.png";
import motiondev from "@/assets/image/motiondev.png";
import shadcn from "@/assets/image/shadcn.png";
import figma from "@/assets/image/figma.png";
import vscode from "@/assets/image/vscode.png";
type SkillItem = {
  name: string;
  icon?: string | StaticImageData;
};

const featuredSkills: SkillItem[] = [
  { name: "Tailwind CSS", icon: tailwindLogo },
  { name: "JavaScript", icon: javascriptLogo },
  { name: "Next.js", icon: nextLogo },
  { name: "React", icon: reactLogo },
  { name: "TypeScript", icon: typescriptLogo },
  { name: "Redux", icon: reduxLogo },
  { name: "GitHub", icon: githubLogo },
  { name: "Figma", icon: figma },
];

const skillCategories: {
  title: string;
  caption: string;
  skills: SkillItem[];
}[] = [
    {
      title: "Frontend Frameworks",
      caption: "Modern UI stacks I ship with daily",
      skills: [
        { name: "React", icon: reactLogo },
        { name: "Next.js", icon: nextLogo },
        { name: "Vite", icon: viteLogo },
      ],
    },
    {
      title: "Styling Systems",
      caption: "Design tokens, motion, and polish",
      skills: [
        { name: "Tailwind CSS", icon: tailwindLogo },
        { name: "shadcn/ui", icon: shadcn },
        // { name: "SASS" },  
        { name: "Motion ", icon: motiondev },
      ],
    },
    {
      title: "Languages",
      caption: "Semantics + DX harmony",
      skills: [
        { name: "JavaScript (ES6+)", icon: javascriptLogo },
        { name: "TypeScript", icon: typescriptLogo },
        { name: "HTML5" },
      ],
    },
    {
      title: "Tools",
      caption: "Workflow accelerators & collaboration",
      skills: [
        { name: "Redux", icon: reduxLogo },
        { name: "Git & GitHub", icon: githubLogo },
        { name: "VS Code", icon: vscode },
        { name: "Figma", icon: figma },
      ],
    },
  ];

export default function Skills() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: marqueeRef,
    offset: ["start end", "end start"],
  });
  const scrollX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section id="skills" className="relative overflow-hidden py-32 bg-[#050505]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] h-[400px] w-[400px] rounded-full bg-primary/15 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-secondary/10 blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center mb-20"
        >
          <motion.span
            // whileHover={{ scale: 1.05 }}
            className="inline-flex items-center w-fit rounded-full border border-primary/40 bg-primary/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary mb-6 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Skill's
          </motion.span>
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl mb-8 leading-tight">
            Crafting Digital <br />
            <span className="bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent animate-gradient">Masterpieces</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/60 leading-relaxed md:text-xl">
            Leveraging a powerful ecosystem of modern technologies to build immersive,
            high-performance digital experiences with surgical precision.
          </p>
        </motion.div>

        {/* Enhanced Marquee */}
        <div
          ref={marqueeRef}
          className="relative mt-20 group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-[2rem] blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/60 backdrop-blur-md p-8 py-8 shadow-2xl will-change-transform">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-40 z-10 bg-gradient-to-r from-black via-black/50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-40 z-10 bg-gradient-to-l from-black via-black/50 to-transparent" />

            <motion.div
              className="flex gap-5 whitespace-nowrap"
              style={{ x: scrollX }}
            >
              {[...featuredSkills, ...featuredSkills, ...featuredSkills].map((skill, index) => (
                <motion.div
                  key={`${skill.name}-${index}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-none items-center gap-5 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent px-5 py-3 transition-all duration-300 hover:border-primary/50 hover:bg-white/5 shadow-lg group/item"
                >
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-black/50 p-3 shadow-inner group-hover/item:shadow-primary/20 transition-all">
                    <div className="absolute inset-0 bg-primary/10 rounded-xl blur-md opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    <Image
                      src={skill.icon || javascriptLogo}
                      alt={skill.name}
                      className="h-full w-full object-contain relative z-10"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-white group-hover/item:text-primary transition-colors">{skill.name}</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-medium">Core Stack</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Skill Categories Grid */}
        <div className="mt-32 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="group relative h-full"
            >
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-primary/50 to-secondary/50 blur opacity-0 transition group-hover:opacity-20" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08] will-change-gpu">

                {/* Visual Accent */}
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                  <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                </div>

                <div className="mb-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 mb-3 group-hover:text-primary transition-colors">
                    {category.caption}
                  </p>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="mt-auto flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/70 shadow-sm backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-white/10 hover:text-white"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-black/40 p-1">
                        {skill.icon ? (
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            className="h-full w-full object-contain"
                          />
                        ) : (
                          <span className="text-[10px] font-bold text-primary">
                            {skill.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                          </span>
                        )}
                      </div>
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

