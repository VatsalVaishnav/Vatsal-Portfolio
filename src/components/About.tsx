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

import ToolArsenal from "./ToolArsenal";

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-6">

        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-linear-to-br from-white/10 via-white/5 to-white/0 px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12">


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
                  className="inline-flex items-center rounded-full border border-white/20 bg-gradient-to-r from-white/10 via-white/5 to-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:border-white/30 hover:shadow-[0_6px_30px_rgba(255,255,255,0.15)] transition-all duration-300"
                >
                  About Me
                </motion.span>
                <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                  Building thoughtful, human-centric web experiences.
                </h2>
                <p className="mt-4 text-lg text-gray-300">
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
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur"
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
                    className="rounded-2xl border border-white/10 bg-black/50 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                  >
                    <p className="text-4xl font-semibold text-white">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
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
                  <h3 className="text-xl font-semibold text-white">
                    Creative process
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    How I move ideas from notebook sketches to production-ready
                    UI.
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-300 text-sm leading-relaxed">
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>
                        Sketch journeys, story-map features, and align on metrics.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>
                        Prototype motion + micro-interactions to validate delight
                        quickly.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>
                        Build accessible React systems with documented tokens +
                        variants.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>
                        Measure performance budgets and iterate with real user
                        insights.
                      </span>
                    </li>
                  </ul>
                </CardSpotlight>
              </motion.div>

              <div className="rounded-2xl border border-primary/40 bg-linear-to-tr from-primary/30 to-secondary/30 p-6 text-white shadow-[0_20px_60px_rgba(59,130,246,0.35)]">
                <p className="text-lg font-medium">
                  Currently seeking teams who value craft, experimentation, and
                  shipping with intention.
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Let’s build something ambitious together—reach out for
                  collaborations or full-time roles.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="mt-12">
            <ToolArsenal />
          </div>

        </div>

      </div>
    </section>
  );
}
