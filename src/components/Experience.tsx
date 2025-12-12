"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useContentfulData } from "../context/ContentfulContext";

const Experience = () => {
  const { content } = useContentfulData();
  const { experiences, personal } = content;
  const timelineRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      );
    };
    checkMobile();
  }, []);

  // All hooks must be called before any conditional returns
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.6", "end 0.3"],
  });

  // Simplified spring on mobile for better performance
  const easedProgress = useSpring(scrollYProgress || 0, {
    stiffness: isMobile ? 80 : 120,
    damping: isMobile ? 30 : 24,
    mass: isMobile ? 1 : 0.6,
  });

  const indicatorOffset = useTransform(easedProgress, (value) => {
    const percentage = Math.min(Math.max(value || 0, 0), 1) * 100;
    return `calc(${percentage}% - 1.125rem)`;
  });

  // Now we can do conditional returns after all hooks
  if (!experiences || !personal || experiences.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-16 md:py-24">
        <SectionHeading
          eyebrow="Experience"
          title="Delivering momentum across agencies and product teams."
          subtitle="From design sprints to production launches, I translate ideas into interactive experiences that convert."
        />

        <div ref={timelineRef} className="relative">
          <div className="space-y-12">
            {experiences.map((item) => (
              <motion.article
                key={`${item.company}-${item.duration}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr_1fr_4fr]"
              >
                <div className="w-full lg:max-w-sm">
                    <div className="flex flex-col items-start gap-y-3 text-sm font-light">
                    <time className="text-xs font-semibold uppercase tracking-[0.45em] text-gray-400">
                      {item.duration}
                    </time>
                    <div className="flex items-center gap-3">
                      {item.logoImage ? (
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-linear-to-br from-primary/20 to-secondary/20 p-1.5 shadow-lg backdrop-blur-sm">
                          <img
                            src={item.logoImage}
                            alt={`${item.company} logo`}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-contain"
                          />
                        </div>
                      ) : null}
                      <h2 className="font-serif text-2xl font-semibold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-primary md:text-3xl">
                        {item.company}
                      </h2>
                    </div>
                    <div className="flex flex-col gap-2 text-gray-400">
                      {item.location && (
                        <div className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 shrink-0 text-primary/80" />
                          <span className="text-sm">{item.location}</span>
                        </div>
                      )}
                      {item.workMode && (
                        <div className="flex items-center gap-1.5">
                          <Briefcase className="h-3.5 w-3.5 shrink-0 text-secondary/80" />
                          <span className="text-sm font-semibold text-gray-300">
                            {item.workMode}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block" />

                <div className="relative w-full">
                  <div className="flex flex-col gap-6 text-sm leading-relaxed text-gray-300">
                    <header>
                      <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary md:text-2xl">
                        {item.role}
                      </h3>
                    </header>
                    <section aria-label="Key achievements">
                      <ul className="flex list-none flex-col gap-4 text-gray-300/90">
                        <li className="leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-linear-to-r from-primary to-secondary shrink-0" />
                          <span>{item.achievement}</span>
                        </li>
                      </ul>
                    </section>
                    {item.skills?.length ? (
                      <section aria-label="Technologies used">
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-linear-to-r from-primary/10 via-secondary/10 to-primary/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.35em] text-gray-200 shadow-sm hover:border-primary/50 hover:bg-linear-to-r hover:from-primary/20 hover:via-secondary/20 hover:to-primary/20 transition-all duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </section>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Timeline Indicator - Only render when data is loaded */}
          {personal && experiences && experiences.length > 0 && (
            <div className="pointer-events-none absolute inset-y-9 left-[calc(32%-1rem)] hidden w-8 md:flex">
              <div className="relative h-full w-full">
                <div className="absolute inset-0 left-1/2 hidden h-full w-1.5 -translate-x-1/2 rounded-full bg-black/50 border border-primary/20 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] md:block" />
                <motion.div
                  className="absolute inset-0 left-1/2 hidden h-full w-1.5 -translate-x-1/2 origin-top rounded-full bg-linear-to-b from-primary via-secondary to-primary md:block shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                  style={{ scaleY: easedProgress }}
                />
                <motion.div
                  className="absolute left-1/2 hidden -translate-x-1/2 md:flex"
                  style={{ top: indicatorOffset }}
                >
                  <div className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-primary/60 bg-black/80 shadow-lg shadow-primary/50 ring-2 ring-secondary/30">
                    <img
                      src={personal.photo}
                      alt="Timeline avatar"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
