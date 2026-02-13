"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface LeaderCardProps {
    image: string;
    name: string;
}

export default function LeadershipCard({ image, name }: LeaderCardProps) {
    return (
        <motion.div
            className="flex flex-col items-center gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
        >
            {/* Circular image */}
            <div className="w-56 h-56 rounded-full overflow-hidden border-2 border-gray-600 flex-shrink-0">
                <Image
                    src={image}
                    alt={name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Name */}
            <p className="text-sm font-bold tracking-widest uppercase text-black dark:text-white text-center whitespace-nowrap">
                {name}
            </p>
        </motion.div>
    );
}