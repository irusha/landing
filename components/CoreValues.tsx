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
        title: "Excellence",
        description:
            "We strive for excellence in every aspect of our service, from cutting-edge equipment to expert guidance.",
        bg: "bg-blue-100",
    },
    {
        icon: <Heart size={28} className="text-red-500" />,
        title: "Community",
        description:
            "Building a supportive community where everyone feels welcome, motivated, and inspired.",
        bg: "bg-red-100",
    },
    {
        icon: <Lightbulb size={28} className="text-yellow-500" />,
        title: "Innovation",
        description:
            "Constantly evolving our methods and technology to provide the best fitness experience.",
        bg: "bg-yellow-100",
    },
    {
        icon: <Shield size={28} className="text-green-600" />,
        title: "Safety First",
        description:
            "Your safety and well-being are our top priorities in everything we do.",
        bg: "bg-green-100",
    },
    {
        icon: <Globe size={28} className="text-purple-600" />,
        title: "Inclusivity",
        description:
            "Creating an inclusive environment where everyone can achieve their fitness goals.",
        bg: "bg-purple-100",
    },
    {
        icon: <Trophy size={28} className="text-orange-500" />,
        title: "Results",
        description:
            "Committed to helping you achieve measurable, sustainable results that last.",
        bg: "bg-orange-100",
    },
];

export default function CoreValues() {
    return (
        <section className="w-full max-w-6xl mx-auto py-6">
            <h2 className="text-3xl font-bold text-center mb-3">Our Core Values</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
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
                        className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all min-h-[260px]"
                    >
                        <div
                            className={`w-16 h-16 ${value.bg} rounded-2xl flex items-center justify-center mb-6`}
                        >
                            {value.icon}
                        </div>

                        <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
