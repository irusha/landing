"use client";

import { useState } from "react";
import { Search, Dumbbell, Heart, Users, User } from "lucide-react";

export default function FeaturesPage() {
    const [activeFilter, setActiveFilter] = useState("All Features");

    const filters = [
        { label: "All Features", icon: <Search size={16} /> },
        { label: "Strength", icon: <Dumbbell size={16} /> },
        { label: "Cardio", icon: <Heart size={16} /> },
        { label: "Group Classes", icon: <Users size={16} /> },
        { label: "Personal", icon: <User size={16} /> },
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

            {/* Search bar */}
            <div className="w-full max-w-xl mb-6">
                <input
                    type="text"
                    placeholder="Search services..."
                    className="w-full bg-gray-100 border-none rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap justify-center gap-3">
                {filters.map((filter) => (
                    <button
                        key={filter.label}
                        onClick={() => setActiveFilter(filter.label)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition 
              ${
                            activeFilter === filter.label
                                ? "bg-black text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        {filter.icon}
                        <span>{filter.label}</span>
                    </button>
                ))}
            </div>
        </main>
    );
}
