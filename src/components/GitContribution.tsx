"use client";

import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

export default function GitContribution() {
  return (
    <section id="contributions" className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
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
            className="inline-flex items-center rounded-full border border-gold/30 bg-linear-to-r from-gold/20 via-gold/10 to-gold/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold backdrop-blur-sm shadow-[0_4px_20px_rgba(212,175,55,0.2)] hover:border-gold/50 hover:shadow-[0_6px_30px_rgba(212,175,55,0.3)] transition-all duration-300 mb-6"
          >
            Contributions
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 got-text">
            Git Contributions
          </h2>
          <div className="glass p-8 rounded-xl flex justify-center items-center overflow-x-auto border-gold/30 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            <GitHubCalendar
              username="shree-code"
              colorScheme="dark"
              fontSize={16}
              blockSize={15}
              blockMargin={5}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
