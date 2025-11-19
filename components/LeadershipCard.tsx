"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface LeaderCardProps {
    image: string;
    name: string;
    role: string;
    bio: string;
    skills: string[];
}

export default function LeaderCard({
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
                flex flex-col gap-4 sm:gap-6
                max-w-4xl w-full
            "
        >
            {/* TOP SECTION */}
            <div className="flex items-start gap-4 sm:gap-6">
                {/* Profile Image */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-md flex-shrink-0">
                    <Image
                        src={image}
                        alt={name}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Name + Role */}
                <div>
                    <h3 className="text-xl sm:text-3xl font-bold text-gray-900 leading-tight">
                        {name}
                    </h3>
                    <p className="text-sm sm:text-lg text-gray-600 font-medium mt-1">
                        {role}
                    </p>
                </div>
            </div>

            {/* BIO */}
            <p className="text-[15px] sm:text-[17px] text-gray-700 leading-relaxed max-w-3xl">
                {bio}
            </p>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-2">
                {skills.map((skill, i) => (
                    <span
                        key={i}
                        className="
                            px-3 py-1.5 sm:px-5 sm:py-2
                            bg-gray-100
                            text-gray-700
                            rounded-full
                            text-xs sm:text-sm font-medium
                            border shadow-sm
                        "
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </motion.div>
    );
}
