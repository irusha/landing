"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TimelineItem {
    day: string;
    year: string;
    title: string;
    description: string;
    image: string;
}

interface TimelineProps {
    items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
    return (
        <div className="relative max-w-5xl mx-auto py-24 px-4">

            <h2 className="text-4xl font-bold text-center mb-24">
                Our Journey
            </h2>

            {/* Vertical line */}
            <div className="absolute left-1/2 top-40 bottom-0 w-px bg-gray-300 hidden md:block" />

            <div className="space-y-32">
                {items.map((item, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                        >
                            {/* Text */}
                            <div
                                className={
                                    isEven
                                        ? "md:text-right md:pr-16"
                                        : "md:text-left md:pl-16 md:order-2"
                                }
                            >
                                <span className="text-sm text-gray-500">
                                    {item.year}
                                </span>
                                <h3 className="text-2xl font-semibold mt-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            {/* Image */}
                            <div
                                className={`relative ${
                                    isEven ? "" : "md:order-1"
                                }`}
                            >
                                <div className="rounded-3xl overflow-hidden shadow-xl">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-72 object-cover"
                                    />
                                </div>

                                {/* Dot */}
                                <div
                                    className="
                                        hidden md:flex
                                        absolute top-1/2 -translate-y-1/2
                                        w-14 h-14
                                        rounded-full
                                        bg-black text-white
                                        items-center justify-center
                                        font-bold
                                    "
                                    style={{
                                        left: isEven ? "-3.5rem" : "auto",
                                        right: isEven ? "auto" : "-3.5rem",
                                    }}
                                >
                                    {item.day}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
