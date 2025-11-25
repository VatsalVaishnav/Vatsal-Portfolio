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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 neon-text">
            Git Contributions
          </h2>
          <div className="glass p-8 rounded-xl flex justify-center items-center overflow-x-auto neon-box">
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
