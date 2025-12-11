"use client";

import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { Github, ExternalLink, TrendingUp, Calendar, Zap } from "lucide-react";
import Link from "next/link";
export default function GitContribution() {

  return (
    <section id="contributions" className="py-20 bg-black/50 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 from-white/10 via-white/5 to-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:border-white/30 hover:shadow-[0_6px_30px_rgba(255,255,255,0.15)] transition-all duration-300 mb-6 cursor-default"
          >
            <Calendar size={14} />
            Contributions
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 neon-text"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Git Contributions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 mb-8 text-sm md:text-base"
          >
            Track my coding journey and contributions over time
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <motion.div
              className="glass p-8 rounded-xl flex flex-col justify-center items-center overflow-hidden neon-box relative"
              whileHover={{ 
                scale: 1.02
              }}
              transition={{ duration: 0.3 }}
            >
              
              <div className="relative z-10 w-full">
                <GitHubCalendar
                  username="vatsalvaishnav"
                  colorScheme="dark"
                  fontSize={16}
                  blockSize={13}
                  blockMargin={5}
                />
              </div>

              {/* Interactive overlay with stats */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 mt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-xs text-white/80"
                >
                  <TrendingUp size={12} />
                  <span>Active Developer</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* GitHub profile link */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8"
          >
            <Link
              href="https://github.com/vatsalvaishnav"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-primary/20 to-secondary/20 border border-primary/30 text-white transition-all duration-300 backdrop-blur-sm shadow-lg group"
              >
                <Github size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-medium">View GitHub Profile</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12"
          >
            {[
              { icon: Zap, label: "Consistent", value: "Daily Coding" },
              { icon: Calendar, label: "Activity", value: "Year Round" },
              { icon: TrendingUp, label: "Growth", value: "Always Learning" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-4 rounded-lg border border-white/10 transition-all duration-300 cursor-default"
              >
                <stat.icon className="w-6 h-6 text-primary mb-2 mx-auto" />
                <p className="text-xs text-gray-400 mb-1">{stat.label}</p>
                <p className="text-sm font-semibold text-white">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
