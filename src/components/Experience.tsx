"use client";

import { motion } from "framer-motion";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    description:
      "Leading the frontend team in building scalable web applications using Next.js and React.",
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency",
    period: "2021 - 2023",
    description:
      "Developed responsive websites and landing pages for various clients using modern web technologies.",
  },
  {
    role: "Junior Web Developer",
    company: "StartUp Hub",
    period: "2020 - 2021",
    description:
      "Assisted in the development of the company's main product and maintained legacy code.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <DottedGlowBackground
          className="pointer-events-none opacity-40"
          gap={14}
          radius={1.2}
          colorDarkVar="--glass-border"
          glowColorDarkVar="--primary-glow"
          backgroundOpacity={0.1}
          speedMin={0.2}
          speedMax={1}
          speedScale={0.8}
        />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gray-300 mb-4 backdrop-blur-md">
            Career Path
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            A timeline of my professional journey and the key roles that have shaped my expertise.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-8 md:pl-0 group"
            >
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-primary/30 to-transparent -translate-x-1/2 group-last:bottom-auto group-last:h-full shadow-[0_0_10px_rgba(59,130,246,0.2)]" />

              {/* Mobile Timeline Line */}
              <div className="md:hidden absolute left-[11px] top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/30 to-primary/5 group-last:bottom-auto group-last:h-full" />

              <div className={`md:flex items-center justify-between gap-10 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full border-4 border-[#0a0a0a] bg-primary shadow-[0_0_20px_var(--primary)] z-10 -translate-x-[1.5px] md:-translate-x-1/2 mt-1.5 md:mt-0 group-hover:scale-125 transition-transform duration-300" />

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-2.5rem)] mb-12 md:mb-0">
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="relative p-1 rounded-2xl bg-linear-to-br from-white/10 to-white/0 hover:from-primary/40 hover:to-secondary/40 transition-all duration-500 group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
                  >
                    <div className="relative p-6 rounded-xl bg-[#0a0a0a]/90 backdrop-blur-xl h-full">
                      <div className="flex flex-col gap-2 mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                          <span className="text-gray-300 font-medium">
                            {exp.company}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                          <span className="text-gray-400 font-mono text-xs tracking-wide uppercase border border-white/10 px-2 py-0.5 rounded-full bg-white/5">{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for the other side of the timeline */}
                <div className="hidden md:block w-[calc(50%-2.5rem)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
