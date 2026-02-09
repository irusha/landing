"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export interface LeaderCardProps {
    image: string;
    name: string;
    role: string;
    bio: string;
    skills: string[];
}

export default function LeadershipCard({
                                           image,
                                           name,
                                           role,
                                           bio,
                                           skills,
                                       }: LeaderCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="
                bg-white
                rounded-3xl
                shadow-lg
                p-6 sm:p-8
                border border-gray-100
                hover:shadow-xl
                transition-all
                flex flex-col gap-5
            "
        >
            {/* Header */}
            <div className="flex items-center gap-5">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md">
                    <Image
                        src={image}
                        alt={name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                        {name}
                    </h3>
                    <p className="text-gray-600 font-medium">
                        {role}
                    </p>
                </div>
            </div>

            {/* Bio */}
            <p className="text-gray-700 leading-relaxed">
                {bio}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                    <span
                        key={i}
                        className="
                            px-4 py-2
                            bg-gray-100
                            text-gray-700
                            rounded-full
                            text-sm
                            font-medium
                            border
                        "
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
