"use client";

import { motion } from "framer-motion";
import React from "react";
import { Target, Heart, Lightbulb, Shield, Globe, Trophy } from "lucide-react";

export interface ValueItem {
    icon: React.ReactNode;
    title: string;
    description: string;
    bg: string;
}

const VALUES: ValueItem[] = [
    {
        icon: <Target size={28} className="text-blue-600" />,
        title: "Smart Training",
        description:
            "We empower users and trainers with data-driven insights and AR-powered workout guidance for more effective results.",
        bg: "bg-blue-100",
    },
    {
        icon: <Heart size={28} className="text-red-500" />,
        title: "Stronger Together",
        description:
            "Repz builds a connected fitness ecosystem where gym users and trainers collaborate, motivate, and grow as a community.",
        bg: "bg-red-100",
    },
    {
        icon: <Lightbulb size={28} className="text-yellow-500" />,
        title: "Innovation First",
        description:
            "We push boundaries with cutting-edge AR technology, redefining how workouts are learned, tracked, and experienced.",
        bg: "bg-yellow-100",
    },
    {
        icon: <Shield size={28} className="text-green-600" />,
        title: "Safe & Guided",
        description:
            "With real-time AR form guidance and trainer oversight, we ensure every rep is safe, accurate, and injury-free.",
        bg: "bg-green-100",
    },
    {
        icon: <Globe size={28} className="text-purple-600" />,
        title: "Accessible Fitness",
        description:
            "Repz makes expert-level training accessible to everyone—any level, any background, any fitness journey.",
        bg: "bg-purple-100",
    },
    {
        icon: <Trophy size={28} className="text-orange-500" />,
        title: "Real Progress",
        description:
            "Our mission is simple: help you achieve consistent, measurable progress through intelligent tracking and personalized plans.",
        bg: "bg-orange-100",
    },
];

export default function CoreValues() {
    return (
        <section className="w-full max-w-6xl mx-auto py-6">
            <h2 className="text-3xl font-bold text-center mb-3">Our Core Values</h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
                These principles guide everything we do and shape the culture of our community.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {VALUES.map((value, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-white/10 to-white/[0.03] dark:from-white/5 dark:to-white/[0.02] backdrop-blur-sm border border-gray-200/40 dark:border-white/10 dark:text-white/80 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all min-h-[260px]"
                    >
                        <div
                            className={`w-16 h-16 ${value.bg} rounded-2xl flex items-center justify-center mb-6`}
                        >
                            {value.icon}
                        </div>

                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="dark:text-gray-400 leading-relaxed">{value.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
