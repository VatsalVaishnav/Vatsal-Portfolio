"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Phone, Send, User, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-gray-300 mb-4 backdrop-blur-md">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
            Let's Work Together
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden group">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h3 className="text-2xl font-bold text-white mb-6 relative z-10">Contact Information</h3>

              <div className="space-y-6 relative z-10">
                <a
                  href="mailto:vatsal@example.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-white group/item transition-colors"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <span className="text-lg">vatsal@example.com</span>
                </a>

                <div className="flex items-center gap-4 text-gray-300 hover:text-white group/item transition-colors">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-primary group-hover/item:bg-primary group-hover/item:text-white transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <span className="text-lg">+91 12345 67890</span>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 relative z-10">
                <h4 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">Social Profiles</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "#" },
                    { icon: Linkedin, href: "#" },
                    { icon: Instagram, href: "#" }
                  ].map((Social, index) => (
                    <Link
                      key={index}
                      href={Social.href}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:-translate-y-1"
                    >
                      <Social.icon size={20} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              className="space-y-6 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl relative overflow-hidden"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">Name</label>
                  <div className="relative group">
                    <User className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-primary transition-colors" size={18} />
                    <input
                      type="text"
                      id="name"
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-primary focus:bg-white/5 focus:outline-none text-white transition-all duration-300 placeholder:text-gray-600"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-primary transition-colors" size={18} />
                    <input
                      type="email"
                      id="email"
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-primary focus:bg-white/5 focus:outline-none text-white transition-all duration-300 placeholder:text-gray-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <div className="relative group">
                  <MessageSquare className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-primary transition-colors" size={18} />
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-black/20 border border-white/10 focus:border-primary focus:bg-white/5 focus:outline-none text-white transition-all duration-300 placeholder:text-gray-600 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary hover:bg-blue-600 text-white rounded-xl font-medium transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
