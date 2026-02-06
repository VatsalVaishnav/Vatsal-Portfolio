"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, CheckCircle2 } from "lucide-react";
import Image from "next/image";

// Placeholder for images if needed, or we use icons
// import reactLogo from "@/assets/image/react.png"; 

// Premium data structure
const certificates = [
    {
        id: 1,
        title: "Full Stack Web Development",
        issuer: "Udemy",
        date: "2023",
        skills: ["React", "Node.js", "MongoDB"],
        credentialId: "UC-12345678",
        link: "#",
        color: "from-blue-500/20 to-purple-500/20", // Custom gradient for each
    },
    {
        id: 2,
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2023",
        skills: ["AWS", "Cloud Security", "EC2"],
        credentialId: "AWS-CP-2023",
        link: "#",
        color: "from-orange-500/20 to-yellow-500/20",
    },
    {
        id: 3,
        title: "Meta Front-End Developer",
        issuer: "Coursera",
        date: "2022",
        skills: ["React", "UX/UI", "Figma"],
        credentialId: "META-FE-99",
        link: "#",
        color: "from-blue-400/20 to-cyan-400/20",
    },
];

const Certificates = () => {
    return (
        <section id="certificates" className="relative py-24 scroll-mt-24">
            {/* Ambient Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] left-[5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="inline-flex items-center rounded-full border border-primary/30 bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm shadow-[0_4px_20px_rgba(59,130,246,0.2)] mb-6"
                    >
                        Certifications
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl mb-4"
                    >
                        Validated expertise, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">proven results.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-300"
                    >
                        Continuous learning is the engine of my growth. Here are the milestones that mark my technical journey.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-white/5 to-white/0 hover:border-primary/50 transition-all duration-500 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.2)]"
                        >
                            {/* Card Gradient Glow - visible but subtle by default, stronger on hover */}
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-10 group-hover:opacity-25 transition-opacity duration-500`}
                            />

                            <div className="relative p-8 flex flex-col h-full z-10">
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${cert.color} border border-white/10 text-white shadow-lg group-hover:scale-110 transition-transform duration-300 bg-opacity-20`}>
                                        <Award className="w-8 h-8" />
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <span className="text-xs font-mono text-primary/80 uppercase tracking-wider mb-1">Issued</span>
                                        <span className="text-sm font-medium text-white/90">{cert.date}</span>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-2 group-hover:text-primary group-hover:bg-none transition-colors duration-300">
                                        {cert.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {cert.issuer}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                    {cert.skills.map(skill => (
                                        <span key={skill} className="px-2 py-1 bg-primary/10 rounded-md text-[10px] text-primary-200 uppercase tracking-wide border border-primary/20 font-mono">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-white/10 group-hover:border-primary/30 transition-colors">
                                    <span className="text-xs text-gray-500 font-mono">
                                        ID: {cert.credentialId}
                                    </span>
                                    <a
                                        href={cert.link}
                                        className="inline-flex items-center gap-1.5 text-xs text-primary font-medium hover:text-white transition-colors"
                                    >
                                        Verify <ExternalLink className="w-3.5 h-3.5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
