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
            className={`flex flex-col items-center justify-between max-w-6xl w-full mx-auto rounded-3xl ${
                reverse
                    ? "flex-col-reverse bg-gradient-to-r from-blue-50 to-white"
                    : "bg-gradient-to-r from-white to-blue-50"
            } shadow-sm`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
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
                    visible: { transition: { staggerChildren: 0.15 } }
                }}
            >
                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.4 }}
                    className="text-sm text-blue-600 font-bold md:font-extrabold uppercase tracking-wide mb-2"
                >
                    {subtitle}
                </motion.p>

                <motion.h4
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.45 }}
                    className="text-l md:text-4xl font-semibold leading-snug"
                >
                    {title}
                </motion.h4>

                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.5 }}
                    className="text-sm md:text-xl text-gray-600 leading-relaxed mt-4 mb-4"
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
                    className={`${
                        reverse
                            ? "rounded-t-2xl md:rounded-b-2xl md:rounded-t-none"
                            : "rounded-b-2xl md:rounded-t-2xl md:rounded-b-none"
                    } shadow-lg border border-gray-100`}
                />
            </motion.div>
        </motion.section>
    );
}
