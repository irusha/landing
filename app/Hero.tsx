"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import {ShaderAnimation} from "@/components/ShaderAnimation";
import ARGymHero from "@/app/ARHero";

const images = [
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
];

export default function FitnessHero() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="space-y-8 p-8">

            <div>
                <ARGymHero></ARGymHero>
            </div>
        </div>

        // <div className="w-full min-h-[calc(100vh-4rem)] bg-white flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 lg:py-20 gap-10">
        //     {/* LEFT SIDE */}
        //     <div className="flex flex-col max-w-xl space-y-6">
        //
        //         {/* Heading with gradient text */}
        //         <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-transparent bg-clip-text">
        //             Transform <br /> Your <br />
        //             <span className="font-extrabold">Body & Mind</span>
        //         </h1>
        //
        //         <p className="text-gray-500 text-lg max-w-md">
        //             Experience the future of fitness with AR equipment detection,
        //             real-time pose correction, and personalized workout plans that connect you with expert trainers. .
        //         </p>
        //
        //         {/* Buttons */}
        //         <div className="flex gap-4 pt-4">
        //             <motion.button
        //                 whileHover={{ scale: 1.05 }}
        //                 className="group bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 font-medium shadow-lg"
        //             >
        //                 Start Your Journey
        //                 <motion.span
        //                     className="inline-block"
        //                     initial={{ x: 0 }}
        //                     whileHover={{ x: 6 }}
        //                     transition={{ type: "spring", stiffness: 200 }}
        //                 >
        //                     <ChevronRight size={18} />
        //                 </motion.span>
        //             </motion.button>
        //
        //             <button className="border px-6 py-3 rounded-xl flex items-center gap-2 font-medium text-gray-700">
        //                 ▶ Watch Our Story
        //             </button>
        //         </div>
        //     </div>
        //
        //     {/* RIGHT SIDE IMAGE SLIDESHOW */}
        //     <div className="relative w-full max-w-lg h-[420px] rounded-3xl overflow-hidden shadow-xl">
        //         <AnimatePresence>
        //             <motion.img
        //                 key={index}
        //                 src={images[index]}
        //                 initial={{ scale: 1.15, opacity: 0 }}
        //                 animate={{ scale: 1, opacity: 1 }}
        //                 exit={{ scale: 0.9, opacity: 0 }}
        //                 transition={{ duration: 0.8, ease: "easeOut" }}
        //                 className="absolute inset-0 w-full h-full object-cover"
        //             />
        //         </AnimatePresence>
        //     </div>
        // </div>
    );
}
