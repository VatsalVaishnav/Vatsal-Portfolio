"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";



const stats = [
  { label: "Concept-to-launch cycles shipped", value: "45" },
  { label: "Product launches & shipped features", value: "+15" },
  { label: "Avg. Lighthouse performance score", value: "95+" },
  { label: "Client & team satisfaction", value: "100%" },
];

const focusAreas = [
  "Design Systems",
  "Motion & Micro-interactions",
  "Performance Engineering",
  "Collaboration & Mentorship",
];

import ToolArsenal from "./ToolArsenal";

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Extract the number from the string (e.g., "95+" -> 95)
  const numericValue = parseInt(value) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return (
    <span className="relative inline-flex items-center">
      <span ref={ref}>0</span>
      <span>{suffix}</span>
    </span>
  );
}

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as any
    },
  };

  const baseCardStyle = "group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/10";

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Decorative localized glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10 animate-pulse" />

      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Header Card - Spans 8 columns - Blue Theme */}
          <motion.div
            variants={itemVariants}
            className={`md:col-span-8 p-10 flex flex-col justify-center shadow-[0_0_50px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_80px_-5px_rgba(59,130,246,0.7)] hover:border-primary/50 ${baseCardStyle}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center w-fit rounded-full border border-primary/40 bg-primary/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary mb-6 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Background
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight flex flex-wrap gap-x-[0.2em]">
              {"Building".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-primary animate-gradient inline-block"
              >
                digital solutions
              </motion.span>
              {"that bridge design and engineering.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>
            <div className="mt-6 flex flex-wrap gap-x-[0.3em] gap-y-0 text-lg text-gray-300 leading-relaxed max-w-2xl overflow-hidden">
              {"I blend design intuition with engineering rigor to ship polished interfaces that feel fast, emotive, and dependable. My workflow pairs rapid prototyping with measurable performance goals—so ideas move from Figma to production without losing the magic.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2 + i * 0.02,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Stats Bento Block - Spans 4 columns - Pink Theme */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`p-6 flex flex-col items-center justify-center text-center shadow-[0_0_40px_-10px_rgba(236,72,153,0.4)] hover:shadow-[0_0_60px_-5px_rgba(236,72,153,0.6)] hover:border-secondary/50 ${baseCardStyle}`}
              >
                <div className="absolute inset-0 bg-gradient-to-tl from-secondary/10 via-transparent to-transparent opacity-60" />
                <span className="text-3xl font-bold text-white mb-2 relative z-10">
                  <CountUp value={stat.value} />
                </span>
                <span className="text-[10px] uppercase tracking-tighter text-gray-400 font-semibold leading-tight relative z-10">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Creative Process Card - Spans 7 columns - Violet Theme */}
          <motion.div
            variants={itemVariants}
            className={`md:col-span-7 shadow-[0_0_50px_-10px_rgba(139,92,246,0.4)] hover:shadow-[0_0_70px_-5px_rgba(139,92,246,0.6)] hover:border-violet-500/50 ${baseCardStyle}`}
          >
            <CardSpotlight className="p-10 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/15 via-transparent to-transparent opacity-60" />
              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Creative process</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 leading-none relative z-10">
                {[
                  { title: "Discovery", desc: "Sketch journeys, story-map features, and align on core metrics." },
                  { title: "Prototyping", desc: "Motion + micro-interactions to validate delight quickly." },
                  { title: "Development", desc: "Accessible React systems with documented tokens + variants." },
                  { title: "Iteration", desc: "Measure performance budgets and iterate with real user insights." }
                ].map((step, i) => (
                  <div key={i} className="space-y-2 group/step">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-violet-400 group-hover/step:scale-150 transition-transform shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                      <h4 className="text-sm font-bold text-white/90">{step.title}</h4>
                    </div>
                    <p className="text-xs text-gray-400 group-hover/step:text-gray-200 transition-colors leading-normal">{step.desc}</p>
                  </div>
                ))}
              </div>
            </CardSpotlight>
          </motion.div>

          {/* Core Expertise Card - Spans 5 columns - Indigo Theme */}
          <motion.div
            variants={itemVariants}
            className={`md:col-span-5 p-10 shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_-5px_rgba(99,102,241,0.6)] hover:border-indigo-500/50 ${baseCardStyle}`}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/15 via-transparent to-transparent opacity-60" />
            <h3 className="text-xl font-bold text-white mb-6 relative z-10">Core Expertise</h3>
            <div className="flex flex-wrap gap-3 relative z-10">
              {focusAreas.map((area) => (
                <motion.span
                  key={area}
                  whileHover={{
                    x: [0, -2, 2, -2, 2, 0],
                    y: [0, 2, -2, 2, -2, 0],
                    skewX: -12,
                    scale: 1.05,
                    transition: {
                      x: { repeat: Infinity, duration: 0.08 },
                      y: { repeat: Infinity, duration: 0.08 },
                      skewX: { duration: 0.1 },
                    }
                  }}
                  className="px-5 py-2.5 rounded-2xl bg-white/10 border border-white/10 text-sm text-gray-300 hover:bg-indigo-500/30 hover:text-white transition-all cursor-default shadow-sm hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] relative group/chip overflow-hidden"
                >
                  <div className="absolute inset-0 bg-indigo-400/20 blur-xl opacity-0 group-hover/chip:opacity-100 transition-opacity duration-300" />
                  <div className="absolute -left-full top-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover/chip:animate-shimmer" />
                  <span className="relative z-10 whitespace-nowrap">{area}</span>
                </motion.span>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/30 to-violet-500/30 border border-white/20 relative z-10 shadow-lg shadow-indigo-500/10">
              <p className="text-sm font-medium text-white/90">
                Currently open to projects that value craft and intentionality.
              </p>
              <button className="mt-4 text-xs font-bold uppercase tracking-wider text-indigo-300 hover:text-white transition-colors">
                Let's talk →
              </button>
            </div>
          </motion.div>

          {/* Tool Arsenal Integrated - Spans all 12 columns - Multi Theme */}
          <motion.div
            variants={itemVariants}
            className={`md:col-span-12 p-10 shadow-[0_0_60px_-15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_90px_-10px_rgba(255,255,255,0.25)] hover:border-white/30 ${baseCardStyle}`}
          >
            <div className="absolute inset-0 bg-linear-to-r from-primary/10 via-violet-500/10 to-secondary/10 opacity-60" />
            {/* <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4 relative z-10"> */}
            {/* <h3 className="text-2xl font-bold text-white">Tool Arsenal</h3> */}
            {/* <p className="text-sm text-gray-300">The frameworks and libraries I use to build performant web apps.</p> */}
            {/* </div> */}
            <div className="relative z-10">
              <ToolArsenal />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
