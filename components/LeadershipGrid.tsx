"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import LeaderCard, { LeaderCardProps } from "./LeadershipCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface LeadershipGridProps {
    leaders: LeaderCardProps[];
}

export default function LeadershipGrid({ leaders }: LeadershipGridProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const isPausedRef = useRef(false);
    const directionRef = useRef(1); // 1 = right, -1 = left

    const [, forceRender] = useState(0); // only used to trigger re-render if needed

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const interval = setInterval(() => {
            if (isPausedRef.current) return;

            const maxScroll = container.scrollWidth - container.clientWidth;

            if (container.scrollLeft >= maxScroll - 5) {
                directionRef.current = -1; // hit right end → go left
            } else if (container.scrollLeft <= 5) {
                directionRef.current = 1; // hit left end → go right
            }

            container.scrollBy({
                left: 300 * directionRef.current,
                behavior: "smooth",
            });
        }, 2500);

        return () => clearInterval(interval);
    }, []); // empty deps — refs never go stale

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <section className="max-w-full px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
                Leadership Team
            </h2>

            <div className="relative flex items-center">
                {/* Left Arrow */}
                <button
                    onClick={scrollLeft}
                    className="flex-shrink-0 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 text-white transition mr-4"
                >
                    <ChevronLeft size={20} />
                </button>

                {/* Cards Row */}
                <div
                    ref={scrollRef}
                    onMouseEnter={() => { isPausedRef.current = true; }}
                    onMouseLeave={() => { isPausedRef.current = false; }}
                    className="flex flex-row gap-10 overflow-x-auto flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-4"
                >
                    {leaders.map((leader, index) => (
                        <motion.div
                            key={index}
                            className="flex-none"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                        >
                            <LeaderCard {...leader} />
                        </motion.div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={scrollRight}
                    className="flex-shrink-0 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 text-white transition ml-4"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </section>
    );
}