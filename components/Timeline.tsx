"use client";

import React from "react";
import { motion } from "framer-motion";

export interface TimelineItem {
    day: string;
    year: string;
    title: string;
    description: string;
    image: string;
}

interface TimelineProps {
    items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
    return (
        <section className="w-full max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-14">Our Journey</h2>

            <div className="relative border-l border-gray-300 pl-10 space-y-28">
                {items.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative">

                        {/* ===== LEFT SIDE (Icon + Text) ===== */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative pl-8 lg:pl-4"
                        >
                            {/* Circle */}
                            <div className="absolute -left-[58px] top-0 w-16 h-16 flex items-center justify-center
                              bg-black text-white rounded-full text-xl font-bold shadow-lg">
                                {item.day}
                            </div>

                            <p className="text-sm font-semibold text-gray-500">{item.year}</p>
                            <h3 className="text-2xl font-bold mt-1">{item.title}</h3>
                            <p className="text-gray-600 mt-2 leading-relaxed">{item.description}</p>
                        </motion.div>

                        {/* ===== RIGHT SIDE (Image) ===== */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full rounded-xl shadow-lg object-cover max-h-[270px]"
                            />
                        </motion.div>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;
