"use client";

import { motion } from "framer-motion";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2023 - Present",
    location: "Remote",
    description:
      "Leading the frontend team in building scalable web applications using Next.js and React.",
    achievements: [
      "Led a team of 5 developers",
      "Improved app performance by 40%",
      "Implemented modern design systems",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency",
    period: "2021 - 2023",
    location: "New York, NY",
    description:
      "Developed responsive websites and landing pages for various clients using modern web technologies.",
    achievements: [
      "Delivered 20+ client projects",
      "Reduced load time by 50%",
      "Achieved 95% client satisfaction",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "StartUp Hub",
    period: "2020 - 2021",
    location: "San Francisco, CA",
    description:
      "Assisted in the development of the company's main product and maintained legacy code.",
    achievements: [
      "Fixed 100+ bugs",
      "Improved code quality",
      "Learned modern frameworks",
    ],
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
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-linear-to-r from-gold/20 via-gold/10 to-gold/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold backdrop-blur-sm shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:border-gold/50 hover:shadow-[0_6px_30px_rgba(212,175,55,0.3)] transition-all duration-300 mb-6"
          >
            <Briefcase className="w-3 h-3" />
            Career Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 got-text"
          >
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-gold to-secondary">
              Experience
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            A journey through my professional growth and the impactful roles that shaped my expertise.
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                className="group relative"
              >
                {/* Card Container */}
                <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-linear-to-br from-[#0a0a0a]/95 via-[#0f0f0f]/95 to-[#0a0a0a]/95 backdrop-blur-xl transition-all duration-500 hover:border-gold/40 hover:shadow-[0_20px_60px_rgba(212,175,55,0.3)]">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-linear-to-r from-gold/0 via-gold/5 to-red-dark/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Content */}
                  <div className="relative p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      {/* Left Section */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          {/* Icon Badge */}
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                            className="shrink-0 w-14 h-14 rounded-xl bg-linear-to-br from-gold/20 to-gold-dark/20 border border-gold/40 flex items-center justify-center shadow-lg group-hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"
                          >
                            <Briefcase className="w-7 h-7 text-gold" />
                          </motion.div>
                          
                          {/* Title Section */}
                          <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-gold group-hover:to-gold-dark transition-all duration-300 got-text">
                              {exp.role}
                            </h3>
                            <div className="flex flex-wrap items-center gap-3 text-sm">
                              <span className="text-gray-300 font-bold flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                                {exp.company}
                              </span>
                              <span className="text-gray-500">•</span>
                              <span className="text-gray-400 flex items-center gap-1.5">
                                <MapPin className="w-4 h-4" />
                                {exp.location}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-400 leading-relaxed text-base mb-6 group-hover:text-gray-300 transition-colors duration-300">
                          {exp.description}
                        </p>
                      </div>

                      {/* Right Section - Period Badge */}
                      <div className="shrink-0">
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + 0.3 }}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-linear-to-r from-gold/10 to-gold-dark/10 border border-gold/30 backdrop-blur-sm group-hover:border-gold/50 group-hover:from-gold/20 group-hover:to-gold-dark/20 transition-all duration-300"
                        >
                          <Calendar className="w-4 h-4 text-gold" />
                          <span className="text-gray-300 font-mono text-sm font-semibold">
                            {exp.period}
                          </span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Achievements Section */}
                    <div className="pt-6 border-t border-gold/20 group-hover:border-gold/40 transition-colors duration-300">
                      <div className="flex items-center gap-2 mb-4">
                        <ArrowRight className="w-4 h-4 text-gold" />
                        <span className="text-sm font-bold text-gold uppercase tracking-wider got-text">
                          Key Achievements
                        </span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {exp.achievements.map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + 0.4 + idx * 0.1 }}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gold/5 border border-gold/20 group-hover:bg-gold/10 group-hover:border-gold/40 transition-all duration-300"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                            <span className="text-sm text-gray-300 group-hover:text-gold font-medium transition-colors duration-300">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-gold/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-linear-to-tr from-red-dark/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
