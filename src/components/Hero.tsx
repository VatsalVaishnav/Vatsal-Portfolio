"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import myimage from "@/assets/image/vatsalPhoto.png";
import { SparklesCore } from "@/components/ui/sparkles";

import react from "@/assets/image/react.png";
import next from "@/assets/image/next-js.svg";
import tailwind from "@/assets/image/tailwind.png";
import redux from "@/assets/image/redux.png";
import javascript from "@/assets/image/JavaScript-logo.png";
import typescript from "@/assets/image/Typescript_logo_2020.svg";
import github from "@/assets/image/github.png";

const floatingSkills = [
    {
        src: react,
        alt: "React",
        position: "top-20 left-6 md:left-16",
        drift: -14,
    },
    {
        src: next,
        alt: "Next.js",
        position: "top-10 right-10 md:right-24",
        drift: -20,
    },
    {
        src: tailwind,
        alt: "Tailwind CSS",
        position: "top-1/2 left-4 md:left-24",
        drift: 16,
    },
    {
        src: typescript,
        alt: "TypeScript",
        position: "bottom-24 left-10 md:left-40",
        drift: -12,
    },
    {
        src: redux,
        alt: "Redux",
        position: "bottom-16 right-6 md:right-28",
        drift: 18,
    },
    {
        src: javascript,
        alt: "JavaScript",
        position: "top-1/3 right-4 md:right-32",
        drift: -10,
    },
    { src: github, alt: "GitHub", position: "top-1/2 right-1/3", drift: 14 },
];

export default function Hero() {
    
    return (
        <section className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">
            <SparklesCore
                id="tsparticlesfullpage"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={100}
                className="w-full h-full absolute"
                particleColor="#FFFFFF"
            />                


            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[100px]" />
            </div>

            {/* Floating Skill Badges */}
            <div className="pointer-events-none absolute inset-0">
                {floatingSkills.map((skill, index) => (
                    <motion.div
                        key={skill.alt}
                        className={`absolute ${skill.position}`}
                        animate={{ 
                            y: [0, skill.drift, 0],
                        }}
                        transition={{
                            duration: 4 + index * 0.3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <motion.div 
                            className="relative flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-2xl border border-primary/40 bg-white/10 backdrop-blur-xl"
                            animate={{
                                boxShadow: [
                                    "0 0 20px rgba(59,130,246,0.4), 0 0 40px rgba(236,72,153,0.3), 0 10px 40px rgba(0,0,0,0.4)",
                                    "0 0 30px rgba(59,130,246,0.6), 0 0 60px rgba(236,72,153,0.5), 0 10px 40px rgba(0,0,0,0.4)",
                                    "0 0 20px rgba(59,130,246,0.4), 0 0 40px rgba(236,72,153,0.3), 0 10px 40px rgba(0,0,0,0.4)"
                                ]
                            }}
                            transition={{
                                duration: 2 + index * 0.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/40 to-secondary/40 opacity-30" />
                            <motion.div 
                                className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/30 to-secondary/30 blur-sm"
                                animate={{
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{
                                    duration: 2.5 + index * 0.15,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <Image
                                src={skill.src}
                                alt={skill.alt}
                                className="relative h-5 w-5 md:h-7 md:w-7 object-contain z-10"
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            <div className="container mx-auto px-4 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className="relative w-32 h-32 md:w-48 md:h-48 mx-auto mb-6 md:mb-8"
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="relative w-full h-full"
                        >
                            <div className="absolute inset-0 rounded-full bg-linear-to-r from-primary to-secondary blur-2xl opacity-30" />
                            <Image
                                src={myimage}
                                alt="Vatsal Vaishnav"
                                className="relative w-full h-full rounded-full border-2 border-primary/30 object-cover shadow-2xl"
                                priority
                            />
                        </motion.div>
                    </motion.div>

                    <h2 className="text-lg sm:text-xl md:text-2xl text-primary font-medium mb-3 md:mb-4">
                        Hi, I&apos;m Vatsal Vaishnav
                    </h2>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
                        Frontend{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
                            Developer
                        </span>
                    </h1>
                    <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 px-4">
                        I build fast, modern, responsive web experiences with a focus on
                        clean code and user-centric design.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
                        <Link
                            href="#projects"
                            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-primary hover:bg-blue-600 text-white rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] text-sm sm:text-base"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="#contact"
                            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 glass hover:bg-white/10 text-white rounded-full font-medium transition-all duration-300 text-sm sm:text-base"
                        >
                            Hire Me
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
