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

type SkillItem = {
  name: string;
  icon?: string | StaticImageData;
};

const featuredSkills: SkillItem[] = [
  { name: "React", icon: reactLogo },
  { name: "Next.js", icon: nextLogo },
  { name: "Tailwind CSS", icon: tailwindLogo },
  { name: "TypeScript", icon: typescriptLogo },
  { name: "JavaScript", icon: javascriptLogo },
  { name: "Redux", icon: reduxLogo },
  { name: "GitHub", icon: githubLogo },
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
        { name: "Vue.js" },
      ],
    },
    {
      title: "Styling Systems",
      caption: "Design tokens, motion, and polish",
      skills: [
        { name: "Tailwind CSS", icon: tailwindLogo },
        { name: "CSS3" },
        { name: "SASS" },
        { name: "Framer Motion" },
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
        { name: "VS Code" },
        { name: "Figma" },
      ],
    },
  ];

export default function Skills() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: marqueeRef,
    offset: ["start end", "end start"],
  });
  const scrollX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section id="skills" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 opacity-70">
        <div className="absolute top-[-15%] left-[-10%] h-64 w-64 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-5%] h-72 w-72 rounded-full bg-secondary/25 blur-[140px]" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="inline-flex items-center rounded-full border border-white/20 bg-linear-to-r from-white/10 via-white/5 to-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-white/40 hover:shadow-[0_6px_30px_rgba(255,255,255,0.1)] transition-all duration-300"
          >
            Skills
          </motion.span>
          <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl got-text">
            A toolkit tuned for immersive, performant frontends.
          </h2>
          <p className="mt-4 text-lg text-white/70">
            From product thinking to motion craft, these are the stacks I reach
            for when building the same cinematic feel found across the hero and
            about sections.
          </p>
        </motion.div>

        <div
          ref={marqueeRef}
          className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur"
        >
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-black/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-black/80 to-transparent" />
            <motion.div
              className="flex min-w-full gap-6"
              style={{ x: scrollX }}
            >
              {[...featuredSkills, ...featuredSkills].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex min-w-[200px] items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white font-semibold"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 border border-white/25">
                    <Image
                      src={skill.icon || javascriptLogo}
                      alt={skill.name}
                      className="h-6 w-6 object-contain"
                    />
                  </span>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-white/5 blur-2xl" />
              </div>
              <div className="relative z-10 space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70 font-bold">
                    {category.caption}
                  </p>
                  <h3 className="mt-2 text-xl font-bold text-white got-text">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      whileHover={{ y: -3 }}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur font-semibold"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 border border-white/25">
                        {skill.icon ? (
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            className="h-5 w-5 object-contain"
                          />
                        ) : (
                          <span className="text-xs font-semibold text-white/80">
                            {skill.name
                              .split(" ")
                              .map((part) => part[0])
                              .slice(0, 2)
                              .join("")}
                          </span>
                        )}
                      </span>
                      {skill.name}
                    </motion.span>
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
