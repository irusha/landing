"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHeroSection() {
    return (
        <section className="pt-24 min-h-screen relative bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#0b0f17] dark:via-[#0b0f17] dark:to-[#070a10] flex flex-col items-center">

            {/* === MAIN TITLE === */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 text-center mb-6"
            >
                Here's who we are <br /> & what our app is about
            </motion.h1>

            {/* === BUTTON === */}
            <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-16 px-6 py-3 text-black dark:text-black font-medium rounded-full shadow hover:shadow-lg transition-all"
                style={{
                    backgroundColor: "hsl(var(--color-brand-accent))"
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "hsl(var(--color-brand-accent-hover))";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "hsl(var(--color-brand-accent))";
                }}
            >
                ✨ Get to know more about us
            </motion.button>

            {/* === GRID (left text + right images) === */}
            <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-24">

                {/* LEFT CARD */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="p-10 rounded-3xl shadow-lg bg-gradient-to-br from-white/20 to-gray-400/10 dark:from-gray-400/15 dark:to-gray-600/10 backdrop-blur-sm border border-gray-300/50 dark:border-gray-400/20"
                >
                    <h2 className="text-2xl font-semibold mb-4 text-foreground">
                        You know the workouts, but what about the team behind <span style={{color: "hsl(var(--color-brand-accent))"}}>REPZ</span>?
                    </h2>

                    <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                        Meet the innovators, fitness experts, and creators building the future of
                        training. From powerful workout tracking to immersive AR guidance, our team
                        is dedicated to helping both gym users and trainers train smarter, safer,
                        and stronger.
                    </p>

                    <p className="mt-10 text-center text-foreground font-semibold text-lg">
                        #TeamRepz ✨
                    </p>
                </motion.div>

                {/* RIGHT IMAGES GRID */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.15 }}
                    className="bg-gradient-to-r bg-gradient-to-br from-white/20 to-gray-400/10 dark:from-gray-400/15 dark:to-gray-600/10 backdrop-blur-sm border border-gray-300/50 dark:border-gray-400/20 p-8 rounded-3xl shadow-lg flex flex-wrap justify-center gap-4"
                >
                    {["/team1.jpg", "/team2.jpg", "/team3.jpg", "/team4.jpg"].map((src, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.6 }}
                            whileHover={{ scale: 1.05, rotate: -1 }}
                            className="relative w-40 h-28 rounded-xl overflow-hidden shadow-lg"
                        >
                            <Image
                                src={src}
                                alt={`Team ${idx + 1}`}
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
