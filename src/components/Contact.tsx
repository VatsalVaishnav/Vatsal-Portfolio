"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Phone } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 neon-text"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
            <p className="text-gray-400 mb-8">
              I'm currently open to new opportunities and freelance projects.
              Whether you have a question or just want to say hi, I'll try my
              best to get back to you!
            </p>

            <div className="space-y-4">
              <a
                href="mailto:vatsal@example.com"
                className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors"
              >
                <div className="p-3 glass rounded-full text-primary">
                  <Mail size={20} />
                </div>
                <span>vatsal@example.com</span>
              </a>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="p-3 glass rounded-full text-primary">
                  <Phone size={20} />
                </div>
                <span>+91 12345 67890</span>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <Link
                href="#"
                className="p-3 glass rounded-full text-gray-300 hover:text-primary hover:bg-white/10 transition-all duration-300"
              >
                <Github size={24} />
              </Link>
              <Link
                href="#"
                className="p-3 glass rounded-full text-gray-300 hover:text-primary hover:bg-white/10 transition-all duration-300"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="#"
                className="p-3 glass rounded-full text-gray-300 hover:text-primary hover:bg-white/10 transition-all duration-300"
              >
                <Instagram size={24} />
              </Link>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 glass rounded-lg bg-transparent border-glass-border focus:border-primary focus:outline-none text-white transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 glass rounded-lg bg-transparent border-glass-border focus:border-primary focus:outline-none text-white transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 glass rounded-lg bg-transparent border-glass-border focus:border-primary focus:outline-none text-white transition-colors"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
