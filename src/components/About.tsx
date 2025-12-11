"use client";

import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";



const stats = [
  { label: "Concept-to-launch cycles shipped", value: "45" },
  { label: "Product launches & shipped features", value: "20+" },
  { label: "Avg. Lighthouse performance score", value: "95+" },
  { label: "Client & team satisfaction", value: "100%" },
];

const focusAreas = [
  "Design Systems",
  "Motion & Micro-interactions",
  "Performance Engineering",
  "Collaboration & Mentorship",
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-6">
        
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-linear-to-br from-black/80 via-black/60 to-black/80 px-8 py-12 md:px-12 backdrop-blur-sm">
          
          
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr]"
            >
              <div className="space-y-8">
                <div>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="inline-flex items-center rounded-full border border-gold/30 bg-linear-to-r from-gold/20 via-gold/10 to-gold/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold backdrop-blur-sm shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:border-gold/50 hover:shadow-[0_6px_30px_rgba(212,175,55,0.3)] transition-all duration-300"
                  >
                    About Me
                  </motion.span>
                  <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl got-text">
                    Building thoughtful, human-centric web experiences.
                  </h2>
                  <p className="mt-4 text-lg text-gray-300 font-medium tracking-wide">
                    I blend design intuition with engineering rigor to ship
                    polished interfaces that feel fast, emotive, and dependable.
                    My workflow pairs rapid prototyping with measurable
                    performance goals—so ideas move from Figma to production
                    without losing the magic.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {focusAreas.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm text-gold backdrop-blur font-semibold uppercase tracking-wide"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ y: -6 }}
                      className="rounded-2xl border border-gold/20 bg-black/70 p-6 shadow-[0_20px_60px_rgba(212,175,55,0.2)] hover:border-gold/40 hover:shadow-[0_20px_60px_rgba(212,175,55,0.3)] transition-all duration-300"
                    >
                      <p className="text-4xl font-bold text-gold got-text">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm text-gray-300 font-medium uppercase tracking-wide">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border relative border-white/10 bg-white/4  backdrop-blur-xl"
                >
                  <CardSpotlight>
                    {/* <DottedGlowBackground
              className="pointer-events-none opacity-60"
              gap={14}
              radius={1.2}
              colorDarkVar="--glass-border"
              glowColorDarkVar="--primary-glow"
              backgroundOpacity={0.15}
              speedMin={0.2}
              speedMax={1}
              speedScale={0.8}
            /> */}
                  <h3 className="text-xl font-bold text-gold got-text">
                    Creative process
                  </h3>
                  <p className="mt-2 text-sm text-gray-300 font-medium">
                    How I move ideas from notebook sketches to production-ready
                    UI.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-300 text-sm leading-relaxed font-medium">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />
                      <span>
                        Sketch journeys, story-map features, and align on metrics.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />
                      <span>
                        Prototype motion + micro-interactions to validate delight
                        quickly.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />
                      <span>
                        Build accessible React systems with documented tokens +
                        variants.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />
                      <span>
                        Measure performance budgets and iterate with real user
                        insights.
                      </span>
                    </li>
                  </ul>
                  </CardSpotlight>  
                </motion.div>

                <div className="rounded-2xl border border-gold/40 bg-linear-to-tr from-gold/20 via-gold/10 to-red-dark/20 p-6 text-gold shadow-[0_20px_60px_rgba(212,175,55,0.3)]">
                  <p className="text-lg font-bold got-text">
                    Currently seeking teams who value craft, experimentation, and
                    shipping with intention.
                  </p>
                  <p className="mt-2 text-sm text-gold/90 font-medium">
                    Let&apos;s build something ambitious together—reach out for
                    collaborations or full-time roles.
                  </p>
                </div>
              </div>
            </motion.div>
       
          </div>
       
      </div>
    </section>
  );
}
