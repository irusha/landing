"use client";

import { motion } from "framer-motion";
import LeaderCard, { LeaderCardProps } from "./LeadershipCard";

interface LeadershipGridProps {
    leaders: LeaderCardProps[];
}

export default function LeadershipGrid({ leaders }: LeadershipGridProps) {
    return (
        <section className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
                Leadership Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {leaders.map((leader, index) => (
                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            x: index % 2 === 0 ? -120 : 120,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: index * 0.15,
                        }}
                        viewport={{ once: true }}
                    >
                        <LeaderCard {...leader} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
