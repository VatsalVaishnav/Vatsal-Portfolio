"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Phone, Send, User, MessageSquare, ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "vatsal@example.com",
    href: "mailto:vatsal@example.com",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 12345 67890",
    href: "tel:+911234567890",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Available Worldwide",
    href: "#",
    color: "from-green-500/20 to-emerald-500/20",
  },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub", color: "hover:from-gray-800 hover:to-gray-900" },
  { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:from-blue-600 hover:to-blue-700" },
  { icon: Instagram, href: "#", label: "Instagram", color: "hover:from-pink-500 hover:to-purple-600" },
];

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
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-linear-to-r from-white/10 to-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-gray-300 mb-6 backdrop-blur-md shadow-lg"
          >
            <Send className="w-3 h-3" />
            Get in Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4"
          >
            Let&apos;s{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-primary">
              Work Together
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Have a project in mind or just want to say hi? I&apos;d love to hear from you and discuss how we can bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={index}
                    href={method.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#0a0a0a]/95 via-[#0f0f0f]/95 to-[#0a0a0a]/95 backdrop-blur-xl transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(59,130,246,0.2)]"
                  >
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-linear-to-br ${method.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative p-6 flex items-center gap-4">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="shrink-0 w-14 h-14 rounded-xl bg-linear-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center shadow-lg group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300"
                      >
                        <Icon className="w-7 h-7 text-primary" />
                      </motion.div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                          {method.label}
                        </p>
                        <p className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                          {method.value}
                        </p>
                      </div>
                      
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#0a0a0a]/95 via-[#0f0f0f]/95 to-[#0a0a0a]/95 backdrop-blur-xl p-6"
            >
              <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-linear-to-b from-primary to-secondary rounded-full" />
                Connect With Me
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      <Link
                        href={social.href}
                        className={`group relative flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:border-primary/50 hover:text-white ${social.color} hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]`}
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5 relative z-10" />
                        <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-[#0a0a0a]/95 via-[#0f0f0f]/95 to-[#0a0a0a]/95 backdrop-blur-xl p-8 md:p-10"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-primary/10 to-transparent rounded-bl-full opacity-50 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-linear-to-tr from-secondary/10 to-transparent rounded-tr-full opacity-50 blur-xl" />

              <div className="relative space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="space-y-2"
                  >
                    <label htmlFor="name" className="text-sm font-semibold text-gray-400 ml-1 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Name
                    </label>
                    <div className="relative group">
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/30 border border-white/10 focus:border-primary focus:bg-white/5 focus:outline-none text-white transition-all duration-300 placeholder:text-gray-600 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                        placeholder="Your name"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="space-y-2"
                  >
                    <label htmlFor="email" className="text-sm font-semibold text-gray-400 ml-1 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </label>
                    <div className="relative group">
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3.5 rounded-xl bg-black/30 border border-white/10 focus:border-primary focus:bg-white/5 focus:outline-none text-white transition-all duration-300 placeholder:text-gray-600 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2"
                >
                  <label htmlFor="message" className="text-sm font-semibold text-gray-400 ml-1 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Message
                  </label>
                  <div className="relative group">
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3.5 rounded-xl bg-black/30 border border-white/10 focus:border-primary focus:bg-white/5 focus:outline-none text-white transition-all duration-300 placeholder:text-gray-600 resize-none focus:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 bg-linear-to-r from-primary to-secondary hover:from-blue-600 hover:to-pink-600 text-white rounded-xl font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
