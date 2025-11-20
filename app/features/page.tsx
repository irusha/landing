"use client";

import {
    Search, Dumbbell, Heart, Users, User, Cpu,
    Sprout,
    Clock,
    BarChart,
    CheckCircle
} from "lucide-react";
import ServiceCards from "@/components/ServiceCards";
import FeatureSlide from "@/components/FeatureSlide";
import type { ServiceCardData } from "@/components/ServiceCards";
import { motion } from "framer-motion";

// 3. This is the new "config" for your service cards
const serviceCardsData: ServiceCardData[] = [
    {
        id: 1,
        title: "Strength Training",
        description: "Build muscle and increase power with comprehensive strength training.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1470",
        price: "From $35",
        icon: <Dumbbell size={24} />,
        category: "Strength",
        details: [
            { icon: <Clock size={16} />, text: "45-60 minutes" },
            { icon: <BarChart size={16} />, text: "Beginner to Advanced" },
            { icon: <CheckCircle size={16} />, text: "Free weights & barbells" },
            { icon: <CheckCircle size={16} />, text: "Resistance machines" },
        ]
    },
    {
        id: 2,
        title: "Cardio Fitness",
        description: "Improve cardiovascular health and endurance with varied workouts.",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1470",
        price: "From $25",
        icon: <Heart size={24} />,
        category: "Cardio",
        details: [
            { icon: <Clock size={16} />, text: "30-45 minutes" },
            { icon: <BarChart size={16} />, text: "All Levels" },
            { icon: <CheckCircle size={16} />, text: "HIIT training sessions" },
            { icon: <CheckCircle size={16} />, text: "Treadmills & ellipticals" },
        ]
    },
    {
        id: 3,
        title: "Group Fitness Classes",
        description: "Join energetic group sessions for motivation and community.",
        image: "https://images.unsplash.com/photo-1571902943202-50aec6386092?auto=format&fit=crop&w=1470",
        price: "From $20",
        icon: <Users size={24} />,
        category: "Group Classes",
        details: [
            { icon: <Clock size={16} />, text: "45-60 minutes" },
            { icon: <BarChart size={16} />, text: "All Levels" },
            { icon: <CheckCircle size={16} />, text: "Yoga and pilates classes" },
            { icon: <CheckCircle size={16} />, text: "Zumba and dance fitness" },
        ]
    },
    {
        id: 4,
        title: "Personal Training",
        description: "Get one-on-one guidance tailored to your specific fitness goals.",
        image: "https://images.unsplash.com/photo-1594737637105-3EB4e9c4A57a?auto=format&fit=crop&w=1470",
        price: "From $50",
        icon: <User size={24} />,
        category: "Personal",
        details: [
            { icon: <Clock size={16} />, text: "60 minutes" },
            { icon: <BarChart size={16} />, text: "Customized" },
            { icon: <CheckCircle size={16} />, text: "Goal-specific plans" },
            { icon: <CheckCircle size={16} />, text: "Nutrition advice" },
        ]
    },
    {
        id: 5,
        title: "Wellness & Recovery",
        description: "Focus on recovery, flexibility, and mental well-being.",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1520",
        price: "From $30",
        icon: <Sprout size={24} />,
        category: "Wellness",
        details: [
            { icon: <Clock size={16} />, text: "30-60 minutes" },
            { icon: <BarChart size={16} />, text: "All Levels" },
            { icon: <CheckCircle size={16} />, text: "Meditation & Mindfulness" },
            { icon: <CheckCircle size={16} />, text: "Stretching & Foam Rolling" },
        ]
    },
];


export default function FeaturesPage() {
    const cards = [
        {
            title: "Using the Latest Technology",
            description: "Our app uses the latest technology available in the industry.",
            icon: <Cpu className="w-10 h-10 text-gray-700" />,
        },
        {
            title: "Friendly Experience",
            description:
                "Our design is built to be fun and easy to use, making your journey smooth and enjoyable.",
            image:
                "https://cdn-icons-png.flaticon.com/512/4712/4712026.png",
        },
        {
            title: "Based on Research",
            description:
                "Our app is built on research and developed with the help of experts to ensure effectiveness.",
            icon: <Search className="w-10 h-10 text-gray-700" />,
        },
    ];

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white text-center px-6 py-10 text-gray-800">
            {/* Top section */}
            <motion.div
                className="max-w-2xl mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.button
                    className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    ⚡ Complete Feature Catalog
                </motion.button>

                <motion.h1
                    className="text-5xl font-extrabold mt-6 leading-tight"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                >
                    Our Features
                </motion.h1>

                <motion.p
                    className="mt-4 text-gray-500 text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    Discover comprehensive fitness programs designed by experts to help you
                    achieve your goals. From personal training to group classes, we have
                    everything you need for your fitness journey.
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
                        transition: { staggerChildren: 0.15 }
                    }
                }}
            >
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex flex-col items-center justify-center bg-white rounded-3xl shadow-sm border border-gray-100 px-6 py-10 transition hover:shadow-lg"
                    >
                        {card.icon && <div className="mb-4">{card.icon}</div>}

                        {card.image && (
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-40 h-40 object-contain mb-4"
                            />
                        )}

                        <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>
                        <p className="text-gray-500 text-sm max-w-xs">{card.description}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* Updated ServiceCards Component - No filters passed */}
            <ServiceCards cards={serviceCardsData} />
            {/* Section Title Before Slides */}
            <h2 className="w-full max-w-6xl mx-auto text-3xl font-bold mb-6">
                More Smart Features
            </h2>
            {/* Additional slides */}
            <div className="gap-6 mb-10 w-full mx-auto flex flex-col md:flex-row items-center justify-center">
                <FeatureSlide
                    subtitle="VoxBuddy"
                    title="Ask Anything from lengthy documents"
                    description="Chat with VoxBuddy, your supportive AI-powered companion."
                    image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1470"
                />

                <FeatureSlide
                    subtitle="SmartRead"
                    title="Ask Anything from lengthy documents"
                    description="let SmartRead summarize them documents easy-to-understand insights."
                    image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1470"
                    reverse
                />
            </div>

        </main>
    );
}