"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import myimage from "@/assets/image/vatsalPhoto.png";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center relative overflow-hidden pt-20">
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

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="relative w-48 h-48 mx-auto mb-8"
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
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur-2xl opacity-30" />
              <Image
                src={myimage}
                alt="Vatsal Vaishnav"
                className="relative w-full h-full rounded-full border-2 border-primary/30 object-cover shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>

          <h2 className="text-xl md:text-2xl text-primary font-medium mb-4">
            Hi, I'm Vatsal Vaishnav
          </h2>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Frontend{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Developer
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            I build fast, modern, responsive web experiences with a focus on
            clean code and user-centric design.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="#projects"
              className="px-8 py-3 bg-primary hover:bg-blue-600 text-white rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)]"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 glass hover:bg-white/10 text-white rounded-full font-medium transition-all duration-300"
            >
              Hire Me
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
