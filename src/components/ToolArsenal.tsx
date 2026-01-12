"use client";

import React, { useState, useRef, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCpu } from "react-icons/fi";
import { BsCursorFill } from "react-icons/bs";
import { SiAnthropic, SiOpenai, SiGoogle } from "react-icons/si";
import cursor from "../assets/image/cursor.svg";
import claude from "../assets/image/claude.svg";
import chatgpt from "../assets/image/chatgpt.svg";
import gemini from "../assets/image/gemini.svg";

const ToolArsenal = memo(() => {
    const [active, setActive] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerWidth, setContainerWidth] = useState(800);

    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                setContainerWidth(entry.contentRect.width);
            }
        });
        observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, []);

    const tools = [
        {
            name: "Cursor",
            icon: { cursor },
            isImage: true,
            color: "text-white",
            label: "CODE_ENGINE",
            stats: { load: 100 },
            angle: -135,
        },
        {
            name: "Claude",
            icon: claude,
            isImage: true,
            color: "text-[#D97757]",
            label: "EXEC_PLANNER",
            stats: { load: 95 },
            angle: -45,
        },
        {
            name: "ChatGPT",
            icon: chatgpt,
            isImage: true,
            color: "text-white",
            label: "CORE_TASKS",
            stats: { load: 85 },
            angle: 45,
        },
        {
            name: "Gemini",
            icon: gemini,
            isImage: true,
            color: "text-[#8E75FF]",
            label: "IMAGE_SYNTHESIS",
            stats: { load: 90 },
            angle: 135,
        },
    ];

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[450px] flex items-center justify-center rounded-sm overflow-hidden bg-black/20"
        >
            {/* Background Radar / Scan Lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(153,27,27,0.05)_0%,transparent_70%)]" />
                <motion.div
                    className="absolute inset-0 border-r border-red-500/10 origin-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute top-1/2 left-0 w-full h-px bg-red-700/20" />
                <div className="absolute left-1/2 top-0 w-px h-full bg-red-700/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-red-700/20 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-red-700/20 rounded-full" />
            </div>

            {/* Central Core */}
            <motion.div
                className="relative z-10 w-16 h-16 bg-black border-2 border-red-600 flex items-center justify-center rounded-lg shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                animate={{
                    boxShadow: [
                        "0_0_20px_rgba(220,38,38,0.3)",
                        "0_0_40px_rgba(220,38,38,0.5)",
                        "0_0_20px_rgba(220,38,38,0.3)",
                    ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <FiCpu className="text-3xl text-red-500 animate-pulse" />
                <div className="absolute -bottom-6 text-[8px] font-mono text-red-500 tracking-[0.3em] font-bold">
                    SYSTEM_CORE
                </div>
            </motion.div>

            {/* Satellite Tools */}
            {tools.map((tool, i) => {
                const radius = 130;
                const x = Math.cos((tool.angle * Math.PI) / 180) * radius;
                const y = Math.sin((tool.angle * Math.PI) / 180) * radius;

                // Smart positioning: Check if tooltip would overflow container edges
                const tooltipWidth = 160; // Estimated max width
                const iconCorrection = 25; // Offset from icon center
                const spaceOnRight = containerWidth / 2 - (x + iconCorrection);
                const spaceOnLeft = containerWidth / 2 + (x - iconCorrection);

                let isOnRight = x >= 0;
                if (isOnRight && spaceOnRight < tooltipWidth) {
                    isOnRight = false; // Flip to left if not enough space on right
                } else if (!isOnRight && spaceOnLeft < tooltipWidth) {
                    isOnRight = true; // Flip to right if not enough space on left
                }

                return (
                    <div
                        key={tool.name}
                        className={`absolute inset-0 flex items-center justify-center pointer-events-none ${active === i ? "z-50" : "z-20"
                            }`}
                    >
                        {/* Connection Line */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                            <motion.line
                                x1="50%"
                                y1="50%"
                                x2={`calc(50% + ${x}px)`}
                                y2={`calc(50% + ${y}px)`}
                                stroke="currentColor"
                                className="text-red-900/40"
                                strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                strokeDasharray="4 4"
                            />
                        </svg>

                        {/* Satellite Node */}
                        <motion.div
                            style={{ x, y }}
                            className="pointer-events-auto relative"
                            onMouseEnter={() => setActive(i)}
                            onMouseLeave={() => setActive(null)}
                        >
                            <motion.div
                                className={`relative p-3 bg-black border-2 rounded-xl transition-all duration-300 ${active === i
                                    ? "border-red-500 scale-125 shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                                    : "border-red-900/50 scale-100"
                                    }`}
                            >
                                {tool.isImage ? (
                                    // Fallback if we ever use images again, but for now we are using components
                                    <img
                                        src={tool.icon}
                                        alt={tool.name}
                                        className="w-8 h-8 object-contain"
                                    />
                                ) : (
                                    <tool.icon className={`text-2xl ${tool.color}`} />
                                )}

                                {/* Satellite Hologram Label */}
                                <AnimatePresence>
                                    {active === i && (
                                        <motion.div
                                            initial={{ opacity: 0, x: isOnRight ? 10 : -10 }}
                                            animate={{ opacity: 1, x: isOnRight ? 20 : -20 }}
                                            exit={{ opacity: 0, x: isOnRight ? 10 : -10 }}
                                            className={`absolute top-1/2 -translate-y-1/2 bg-red-950/90 border border-red-500 p-3 backdrop-blur-md min-w-[140px] rounded-sm z-50 ${isOnRight ? "left-full" : "right-full"
                                                }`}
                                        >
                                            <div className="text-[7px] font-mono text-red-400 tracking-tighter uppercase mb-1">
                                                {tool.label}
                                            </div>
                                            <div className="text-[10px] font-bold text-white tracking-widest uppercase mb-2">
                                                {tool.name}
                                            </div>
                                            <div className="flex gap-1 h-1 bg-red-900/30 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-red-500"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${tool.stats.load}%` }}
                                                />
                                            </div>
                                            <div className="mt-1 text-[6px] font-mono text-red-500/80 flex justify-between">
                                                <span>LOAD: {tool.stats.load}%</span>
                                                <span>STABLE</span>
                                            </div>
                                            {/* Technical Corners for Hologram */}
                                            <div className="absolute top-0 left-0 w-1 h-1 border-t border-l border-white" />
                                            <div className="absolute bottom-0 right-0 w-1 h-1 border-b border-r border-white" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
});

export default ToolArsenal;
