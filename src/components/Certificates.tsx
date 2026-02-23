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
        <section id="certificates" className="relative py-24 scroll-mt-24 overflow-hidden">
            {/* Soft Ambient Background */}
            <div className="absolute inset-0 -z-10 bg-[#030014]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-primary/10 to-transparent blur-3xl opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <motion.span
                        // whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center w-fit rounded-full border border-primary/40 bg-primary/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-primary mb-6 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    >
                        Certifications
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                    >
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Milestones</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg leading-relaxed"
                    >
                        A showcase of my commitment to continuous growth and technical excellence in the evolving digital landscape.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="group relative"
                        >
                            {/* Animated Glow Border */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500 group-hover:duration-200" />

                            <div className="relative h-full p-8 rounded-2xl bg-[#0a0a1a] border border-white/5 flex flex-col transition-colors duration-300 group-hover:bg-[#0f0f2d]">
                                <div className="flex justify-between items-start mb-8">
                                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${cert.color} border border-white/10 group-hover:scale-110 transition-transform duration-500`}>
                                        <Award className="w-7 h-7 text-white" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 group-hover:text-primary/60 transition-colors">
                                        {cert.date}
                                    </span>
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-6">
                                        {cert.issuer}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {cert.skills.map(skill => (
                                            <span
                                                key={skill}
                                                className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-300 uppercase tracking-wider group-hover:border-primary/30 transition-colors"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-6 border-t border-white/5 group-hover:border-primary/20 transition-colors">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-gray-600 uppercase tracking-widest">ID Number</span>
                                        <span className="text-xs font-mono text-gray-400">{cert.credentialId}</span>
                                    </div>

                                    <motion.a
                                        href={cert.link}
                                        whileHover={{ x: 3 }}
                                        className="flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors"
                                    >
                                        Verify <ExternalLink className="w-4 h-4" />
                                    </motion.a>
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
