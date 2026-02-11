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
            className="
        bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-700
        rounded-3xl
        shadow-lg
        p-6 sm:p-8
        border border-gray-200 dark:border-gray-700
        flex flex-col gap-5
        min-h-[380px]
      "
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-2xl overflow-hidden">
                    <Image
                        src={image}
                        alt={name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div>
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{role}</p>
                </div>
            </div>

            <p className="text-gray-800dark:text-gray-400 text-sm leading-relaxed">
                {bio}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {skills.map((skill, i) => (
                    <span
                        key={i}
                        className="
              px-4 py-2
              bg-purple-300
              dark:bg-gray-300/40
              dark:text-gray-900
              rounded-full
              text-sm
              font-medium
              border border-gray-400/95
              backdrop-blur-sm
            "
                    >
            {skill}
          </span>
                ))}
            </div>
        </motion.div>
    );
}
