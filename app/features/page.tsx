"use client";

import {
    Search,
    Dumbbell,
    Heart,
    Users,
    User,
    Cpu,
    Clock,
    BarChart,
    CheckCircle,
    UsersRound,
} from "lucide-react";

import ServiceCards from "@/components/ServiceCards";
import FeatureSlide from "@/components/FeatureSlide";
import type { ServiceCardData } from "@/components/ServiceCards";
import { motion } from "framer-motion";

// Service Cards Data
const serviceCardsData: ServiceCardData[] = [
    {
        id: 1,
        title: "Welcome Screen",
        description: "",
        image: "/images/screens/SplashScreen.png",
        price: "",
        icon: <Dumbbell size={24} />,
        category: "",
        details: [
            { icon: <Clock size={16} />, text: "45-60 minutes" },
            { icon: <BarChart size={16} />, text: "Beginner to Advanced" },
            { icon: <CheckCircle size={16} />, text: "Free weights & barbells" },
            { icon: <CheckCircle size={16} />, text: "Resistance machines" },
        ],
    },
    {
        id: 2,
        title: "Workout Builder Page",
        description: "",
        image: "/images/screens/WorkoutBuilderScreen.png",
        price: "",
        icon: <Heart size={24} />,
        category: "",
        details: [
            { icon: <Clock size={16} />, text: "30-45 minutes" },
            { icon: <BarChart size={16} />, text: "All Levels" },
            { icon: <CheckCircle size={16} />, text: "HIIT training sessions" },
            { icon: <CheckCircle size={16} />, text: "Treadmills & ellipticals" },
        ],
    },
    {
        id: 3,
        title: "Home Screen",
        description: "",
        image: "/images/screens/StatsScreen.png",
        price: "",
        icon: <User size={24} />,
        category: "",
        details: [
            { icon: <Clock size={16} />, text: "45-60 minutes" },
            { icon: <BarChart size={16} />, text: "All Levels" },
            { icon: <CheckCircle size={16} />, text: "Yoga and pilates classes" },
            { icon: <CheckCircle size={16} />, text: "Zumba and dance fitness" },
        ],
    },
    {
        id: 4,
        title: "Community",
        description: "",
        image: "/images/screens/ChallengesScreen.png",
        price: "",
        icon: <Users size={24} />,
        category: "",
        details: [
            { icon: <Clock size={16} />, text: "60 minutes" },
            { icon: <BarChart size={16} />, text: "Customized" },
            { icon: <CheckCircle size={16} />, text: "Goal-specific plans" },
            { icon: <CheckCircle size={16} />, text: "Nutrition advice" },
        ],
    },
];

export default function FeaturesPage() {
    const cards = [
        {
            title: "Using the Latest Technology",
            description: "Our app uses the latest technology available in the industry.",
            icon: <Cpu className="w-12 h-12 text-gray-700 dark:text-gray-300" />,
        },
        {
            title: "Friendly Experience",
            description:
                "Our design is built to be fun and easy to use, making your journey smooth and enjoyable.",
            icon: <UsersRound className="w-12 h-12 text-gray-700 dark:text-gray-300" />,
        },
        {
            title: "Based on Research",
            description:
                "Our app is built on research and developed with the help of experts to ensure effectiveness.",
            icon: <Search className="w-12 h-12 text-gray-700 dark:text-gray-300" />,
        },
    ];

    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20
      bg-gradient-to-b from-gray-100 to-white text-gray-800
      dark:from-gray-950 dark:to-gray-900 dark:text-gray-100"
        >
            {/* Top section */}
            <motion.div
                className="max-w-2xl mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.button
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition
            bg-gray-100 text-gray-700 hover:bg-gray-200
            dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    ⚡ Complete Feature Catalog
                </motion.button>

                <motion.h1
                    className="text-5xl font-extrabold mt-6 leading-tight text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                >
                    Our Features
                </motion.h1>

                <motion.p
                    className="mt-4 text-lg leading-relaxed text-gray-500 dark:text-gray-400"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Discover smart, interactive training programs crafted by expert trainers to help you reach your goals. With AR-guided workouts,
                    personalized plans, and seamless trainer collaboration,
                    Repz gives you everything you need to level up your fitness journey.
                </motion.p>
            </motion.div>

            {/* Feature cards section */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full max-w-6xl"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: { staggerChildren: 0.15 },
                    },
                }}
            >
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex flex-col items-center justify-center rounded-3xl px-6 py-10 transition hover:shadow-lg
              bg-white border border-gray-100 shadow-sm
              dark:bg-gray-900 dark:border-gray-800 dark:shadow-gray-950/50"
                    >
                        {card.icon && <div className="mb-4">{card.icon}</div>}

                        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                            {card.title}
                        </h3>

                        <p className="text-sm max-w-xs text-gray-500 dark:text-gray-400">
                            {card.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>

            {/* ServiceCards Component */}
            <ServiceCards cards={serviceCardsData} />

            {/* Section Title Before Slides */}
            <h2 className="w-full max-w-6xl mx-auto mb-4 md:mb-8 text-2xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Connect, Train, and Achieve Together
            </h2>

            {/* Additional slides */}
            <div className="gap-6 mb-10 w-full mx-auto flex flex-col md:flex-row items-center justify-center">
                <FeatureSlide
                    subtitle="AR Form Assistant"
                    title="Train Safely With Real-Time Guidance"
                    description="Repz uses augmented reality overlays to help you perfect your form, avoid injuries, and perform every rep with confidence."
                    image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1470"
                />

                <FeatureSlide
                    subtitle="Trainer Control Hub"
                    title="Empower Trainers With Better Tools"
                    description="Trainers can manage clients, assign customized plans, monitor performance, and stay connected."
                    image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1470"
                    reverse
                />
            </div>
        </main>
    );
}
