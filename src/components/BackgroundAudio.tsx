"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";
const audioSrc = "/audio/public_audio_loop.mp3";

export default function BackgroundAudio() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Use a direct path if the file is in public, or import it if in src/assets.
    // Since the user pointed to src/assets, we should verify how assets are handled.
    // Assuming standard Next.js import capability for assets.
    // If this fails, we might need to move the file to public/ or check configuration.
    // Ideally, for a persistent audio file, importing it is best to get the hashed URL.

    // However, I need to know the import path relative to this component.
    // component is in src/components
    // audio is in src/assets/audio
    // so import path: "@/assets/audio/public_audio_loop.mp3"

    useEffect(() => {
        // Attempt to autoplay on mount
        const audio = audioRef.current;
        if (audio) {
            audio.volume = 0.4; // Set a reasonable default volume
            const playPromise = audio.play();

            if (playPromise !== undefined) {
                playPromise.then(() => {
                    setIsPlaying(true);
                }).catch((error) => {
                    // Auto-play was prevented
                    console.log("Autoplay prevented:", error);
                    setIsPlaying(false);
                });
            }
        }
    }, []);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="fixed bottom-10 right-10 z-50">
            <audio
                ref={audioRef}
                loop
                src={audioSrc}
            />

            <button
                onClick={togglePlay}
                className="bg-primary/80 hover:bg-primary text-primary-foreground p-3 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-110"
                aria-label={isPlaying ? "Pause background music" : "Play background music"}
            >
                {isPlaying ? (
                    <Pause className="w-6 h-6" />
                ) : (
                    <Play className="w-6 h-6 ml-0.5" />
                )}
            </button>
        </div>
    );
}
