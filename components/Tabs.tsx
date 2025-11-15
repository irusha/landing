"use client";

import { useState, ReactNode } from "react";

interface Tab {
    label: string;
    content: ReactNode;
}

interface TabsProps {
    tabs: Tab[];
}

export default function Tabs({ tabs }: TabsProps) {
    const [active, setActive] = useState<number>(0);

    return (
        <div className="w-full max-w-4xl mx-auto mt-20">
            {/* ---- Tab Buttons ---- */}
            <div className="flex justify-center space-x-4 bg-gray-100 p-2 rounded-full">
                {tabs.map((t, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`px-6 py-2 rounded-full font-medium transition-all ${
                            active === i
                                ? "bg-white shadow text-black"
                                : "text-gray-600 hover:text-black"
                        }`}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            {/* ---- Tab Content ---- */}
            <div className="mt-10 p-6 bg-white shadow-lg rounded-3xl">
                {tabs[active].content}
            </div>
        </div>
    );
}
