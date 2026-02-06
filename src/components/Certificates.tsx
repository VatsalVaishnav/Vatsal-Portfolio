"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";

// Placeholder data - replace with your actual certificates
const certificates = [
    {
        id: 1,
        title: "Full Stack Web Development",
        issuer: "Udemy",
        date: "2023",
        image: "/api/placeholder/400/300",
        link: "#",
    },
    {
        id: 2,
        title: "React Native Specialist",
        issuer: "Coursera",
        date: "2022",
        image: "/api/placeholder/400/300",
        link: "#",
    },
    {
        id: 3,
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        date: "2023",
        image: "/api/placeholder/400/300",
        link: "#",
    },
];

const Certificates = () => {
    return (
        <section id="certificates" className="relative scroll-mt-24">
            <div className="mx-auto max-w-7xl px-6 py-8 sm:py-16 md:py-24">
                <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-linear-to-br from-primary/10 via-black/50 to-secondary/10 px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 backdrop-blur-sm shadow-[0_0_50px_rgba(59,130,246,0.15)]">

                    {/* Header */}
                    <div className="mb-16 text-center">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="inline-flex items-center rounded-full border border-primary/30 bg-linear-to-r from-primary/20 via-primary/10 to-secondary/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm shadow-[0_4px_20px_rgba(59,130,246,0.2)] mb-6"
                        >
                            Certifications
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl mb-4 neon-text"
                        >
                            Credentials & Achievements
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-gray-300 max-w-2xl mx-auto"
                        >
                            Validating expertise through continuous learning and professional development.
                        </motion.p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certificates.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative flex flex-col overflow-hidden rounded-2xl border border-primary/20 bg-black/40 hover:border-primary/50 transition-colors duration-300"
                            >
                                {/* Image Placeholder Area */}
                                <div className="aspect-video w-full bg-linear-to-br from-gray-900 to-black relative overflow-hidden">
                                    {/* Replace src with cert.image when real images are available */}
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-600 bg-gray-900/50 group-hover:bg-gray-900/30 transition-colors">
                                        <Award className="w-12 h-12 opacity-50" />
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col p-6">
                                    <div className="flex items-start justify-between gap-4 mb-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                                {cert.title}
                                            </h3>
                                            <p className="text-sm text-gray-400 mt-1">{cert.issuer}</p>
                                        </div>
                                    </div>

                                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-primary/10">
                                        <div className="flex items-center gap-2 text-xs text-gray-500 font-mono uppercase tracking-wider">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {cert.date}
                                        </div>
                                        <a
                                            href={cert.link}
                                            className="inline-flex items-center gap-1.5 text-xs text-primary font-medium hover:text-white transition-colors"
                                        >
                                            View Credential <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Certificates;
