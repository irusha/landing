"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface WordRotateProps {
    words: string[];
    duration?: number;
    specialWord?: string;
    specialWordDuration?: number;
    framerProps?: HTMLMotionProps<"div">;
    className?: string;
}

export function WordRotate({
                               words,
                               duration = 2500,
                               specialWord,
                               specialWordDuration = 7500, // 3x the default duration
                               framerProps = {
                                   initial: { opacity: 0, y: -50 },
                                   animate: { opacity: 1, y: 0 },
                                   exit: { opacity: 0, y: 50 },
                                   transition: { duration: 0.25, ease: "easeOut" },
                               },
                               className,
                           }: WordRotateProps) {
    const [index, setIndex] = useState(0);
    const currentWord = words[index];
    const isSpecialWord = specialWord && currentWord === specialWord;

    useEffect(() => {
        // Use different duration for special word
        const currentDuration = isSpecialWord ? specialWordDuration : duration;

        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, currentDuration);

        // Clean up interval on unmount
        return () => clearInterval(interval);
    }, [words, duration, specialWordDuration, isSpecialWord, index]);

    return (
        <div className="relative inline-flex items-baseline" style={{ paddingBottom: "1.5rem" }}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentWord}
                    className="relative inline-block"
                    {...framerProps}
                >
          <span className={cn(className)}>
            {currentWord}
          </span>

                    {/* Animated underline for special word - positioned far below text */}
                    {isSpecialWord && (
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "100%", opacity: 1 }}
                            exit={{ width: 0, opacity: 0 }}
                            transition={{
                                width: { duration: 1.2, ease: "easeOut", delay: 0.3 },
                                opacity: { duration: 0.4, delay: 0.3 }
                            }}
                            className="absolute left-0 h-1 rounded-full"
                            style={{
                                top: "calc(100% + 0.5rem)",
                                background: "linear-gradient(to right, hsl(var(--color-brand-accent)), hsl(var(--color-brand-accent-hover)), hsl(var(--color-brand-accent)))",
                                boxShadow: "0 0 20px hsl(var(--color-brand-accent) / 0.6)"
                            }}
                        />
                    )}

                    {/* Subtle glow effect for special word */}
                    {isSpecialWord && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: [0.3, 0.5, 0.3], scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                                scale: { duration: 0.4, ease: "easeOut" }
                            }}
                            className="absolute inset-0 -z-10 blur-2xl pointer-events-none"
                            style={{
                                background: "radial-gradient(circle, hsl(var(--color-brand-accent) / 0.3) 0%, transparent 70%)"
                            }}
                        />
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}