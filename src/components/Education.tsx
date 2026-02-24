"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, BookOpen, Calendar, Star } from "lucide-react";
import { useContentfulData } from "../context/ContentfulContext";
import SectionHeading from "../components/SectionHeading";

const Education = () => {
    const { content } = useContentfulData();
    const { education } = content;

    if (!education || education.length === 0) {
        return null;
    }

    return (
        <section id="education" className="relative py-24 scroll-mt-24 overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10 animate-pulse" />

            <div className="container mx-auto px-6">
                <SectionHeading
                    eyebrow="Academic Background"
                    title="Education"
                    subtitle="A journey of constant learning and academic excellence."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {education.map((item, index) => (
                        <motion.div
                            key={`${item.school}-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-full"
                        >
                            {/* Outer Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative h-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10 transition-all duration-500 hover:bg-white/[0.07] hover:border-primary/30">
                                {/* Decorative Pattern Background */}
                                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                                    <BookOpen size={180} className="rotate-12" />
                                </div>

                                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                                    {/* Left Column: Icon/Image */}
                                    <div className="shrink-0">
                                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20 p-4 flex items-center justify-center shadow-lg shadow-primary/10 group-hover:scale-110 transition-transform duration-500">
                                            {item.logoImage ? (
                                                <img src={item.logoImage} alt={item.school} className="w-full h-full object-contain" />
                                            ) : (
                                                <GraduationCap className="w-full h-full text-primary" />
                                            )}
                                        </div>
                                    </div>

                                    {/* Right Column: Content */}
                                    <div className="flex-grow space-y-4">
                                        <div className="flex flex-wrap items-center justify-between gap-4">
                                            <div className="space-y-1">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4 text-primary" />
                                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{item.duration}</span>
                                                </div>
                                                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                                                    {item.school}
                                                </h3>
                                            </div>
                                            {item.grade && (
                                                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary/10 border border-primary/20">
                                                    <Star className="w-3.5 h-3.5 text-primary fill-primary" />
                                                    <span className="text-sm font-bold text-primary">{item.grade}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="space-y-3">
                                            <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                                {item.degree}
                                            </p>

                                            {item.location && (
                                                <div className="flex items-center gap-2 text-gray-400">
                                                    <MapPin className="w-4 h-4 text-secondary/70" />
                                                    <span className="text-sm font-medium">{item.location}</span>
                                                </div>
                                            )}
                                        </div>

                                        {item.achievement && (
                                            <div className="mt-6 p-5 rounded-2xl bg-black/40 border border-white/5 group-hover:border-primary/10 transition-colors">
                                                <p className="text-sm leading-relaxed text-gray-400 italic">
                                                    "{item.achievement}"
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Bottom Highlight Line */}
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
