"use client";

import { motion } from "framer-motion";

interface FeatureSlideProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    reverse?: boolean;
}

export default function FeatureSlide({
                                         title,
                                         subtitle,
                                         description,
                                         image,
                                         reverse = false,
                                     }: FeatureSlideProps) {
    return (
        <motion.section
            className={`flex flex-col items-center justify-between max-w-6xl w-full mx-auto rounded-3xl shadow-sm transition ${
                reverse
                    ? "flex-col-reverse bg-gradient-to-r from-blue-50 to-white dark:from-gray-900 dark:to-gray-950"
                    : "bg-gradient-to-r from-white to-blue-50 dark:from-gray-950 dark:to-gray-900"
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
                scale: 1.015,
                boxShadow: "0px 8px 200px rgba(0,0,0,0.05)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            {/* Text Section */}
            <motion.div
                className="md:w-3/4 px-4 md:px-4 text-center mt-5 md:mt-20 md:mb-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.15 } },
                }}
            >
                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.4 }}
                    className="text-sm font-bold md:font-extrabold uppercase tracking-wide mb-2
            text-blue-600 dark:text-blue-400"
                >
                    {subtitle}
                </motion.p>

                <motion.h4
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.45 }}
                    className="text-lg md:text-4xl font-semibold leading-snug
            text-gray-900 dark:text-white"
                >
                    {title}
                </motion.h4>

                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-sm md:text-xl leading-relaxed mt-4 mb-4
            text-gray-600 dark:text-gray-300"
                >
                    {description}
                </motion.p>
            </motion.div>

            {/* Image Section */}
            <motion.div
                className="md:w-2/3 flex justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <img
                    src={image}
                    alt={title}
                    className={`shadow-lg border transition ${
                        reverse
                            ? "rounded-t-2xl md:rounded-b-2xl md:rounded-t-none"
                            : "rounded-b-2xl md:rounded-t-2xl md:rounded-b-none"
                    } border-gray-100 dark:border-gray-800`}
                />
            </motion.div>
        </motion.section>
    );
}
