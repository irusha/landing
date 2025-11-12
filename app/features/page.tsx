"use client";

import { useState } from "react";
import { Search, Dumbbell, Heart, Users, User, Cpu } from "lucide-react";

export default function FeaturesPage() {
    const [activeFilter, setActiveFilter] = useState("All Features");

    const filters = [
        { label: "All Features", icon: <Search size={16} /> },
        { label: "Strength", icon: <Dumbbell size={16} /> },
        { label: "Cardio", icon: <Heart size={16} /> },
        { label: "Group Classes", icon: <Users size={16} /> },
        { label: "Personal", icon: <User size={16} /> },
    ];

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
                "https://cdn-icons-png.flaticon.com/512/4712/4712026.png", // You can replace this with your own cute mascot image
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
            <div className="max-w-2xl mb-8">
                <button className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
                    ⚡ Complete Feature Catalog
                </button>

                <h1 className="text-5xl font-extrabold mt-6 leading-tight">
                    Our <span className="block">Features</span>
                </h1>

                <p className="mt-4 text-gray-500 text-lg leading-relaxed">
                    Discover comprehensive fitness programs designed by experts to help you
                    achieve your goals. From personal training to group classes, we have
                    everything you need for your fitness journey.
                </p>
            </div>

            {/* 🌟 Feature cards section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full max-w-6xl">
                {cards.map((card, index) => (
                    <div
                        key={index}
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
                    </div>
                ))}
            </div>

            {/* Search + Filter section */}
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
                {/* 🔍 Search bar */}
                <div className="w-full md:w-1/3">
                    <input
                        type="text"
                        placeholder="Search services..."
                        className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                </div>

                {/* Filter buttons */}
                <div className="flex flex-wrap justify-start md:justify-end gap-3 w-full md:w-2/3">
                    {filters.map((filter) => (
                        <button
                            key={filter.label}
                            onClick={() => setActiveFilter(filter.label)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition 
                ${activeFilter === filter.label
                                ? "bg-black text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                        >
                            {filter.icon}
                            <span>{filter.label}</span>
                        </button>
                    ))}
                </div>
            </div>
        </main>
    );
}
