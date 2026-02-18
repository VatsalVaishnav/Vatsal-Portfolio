"use client";

import React, { memo, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";

import cursorIcon from "../assets/image/cursor.svg";
import claudeIcon from "../assets/image/claude.svg";
import chatgptIcon from "../assets/image/chatgpt.svg";
import geminiIcon from "../assets/image/gemini.svg";

const tools = [
    { name: "Cursor", icon: cursorIcon, role: "CODE_ENGINE", color: "#3B82F6" },
    { name: "Claude", icon: claudeIcon, role: "ARCH_PLANNER", color: "#D97757" },
    { name: "ChatGPT", icon: chatgptIcon, role: "CORE_TASKS", color: "#10B981" },
    { name: "Gemini", icon: geminiIcon, role: "IMAGE_SYNTHESIS", color: "#8B5CF6" },
];

function ToolIcon({ tool, mouseX }: { tool: typeof tools[0], mouseX: any }) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
        return val - bounds.x - bounds.width / 2;
    });

    const widthSync = useTransform(distance, [-150, 0, 150], [48, 80, 48]);
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

    return (
        <motion.div
            ref={ref}
            style={{ width }}
            className="group relative aspect-square flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
            <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-20 blur-xl" style={{ backgroundColor: tool.color }} />

            <Image
                src={tool.icon}
                alt={tool.name}
                width={32}
                height={32}
                className="relative z-10 w-3/5 h-3/5 object-contain"
            />

            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    whileHover={{ opacity: 1, y: -50, scale: 1 }}
                    className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                    <div className="whitespace-nowrap rounded-lg bg-black/80 border border-white/10 px-3 py-1.5 shadow-2xl backdrop-blur-md">
                        <span className="block text-xs font-bold text-white tracking-wide uppercase">{tool.name}</span>
                        <span className="block text-[8px] font-mono text-gray-500 tracking-widest leading-none mt-0.5">{tool.role}</span>
                    </div>
                    <div className="h-1.5 w-1.5 rotate-45 border-r border-b border-white/10 bg-black/80" />
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}

const ToolArsenal = memo(() => {
    const mouseX = useMotionValue(Infinity);

    return (
        <div className="w-full py-12 flex flex-col items-center gap-12">
            <div className="text-center space-y-2">
                <h3 className="text-lg font-medium text-white/90 tracking-tight">AI Stack</h3>
                <p className="text-sm text-gray-500">Intelligent tools I use to build better products.</p>
            </div>

            <motion.div
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className="mx-auto flex h-20 items-end gap-4 rounded-3xl bg-black/20 border border-white/5 px-4 pb-3 backdrop-blur-2xl"
            >
                {tools.map((tool) => (
                    <ToolIcon key={tool.name} tool={tool} mouseX={mouseX} />
                ))}
            </motion.div>

            <div className="flex items-center gap-2 text-[10px] font-mono text-gray-700 tracking-[0.2em]">
                <span className="w-1.5 h-1.5 bg-gray-800 rounded-full"></span>
                MINIMAL_DOCK_ACTIVE
            </div>
        </div>
    );
});

export default ToolArsenal;
