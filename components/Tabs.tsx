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
        <div className="w-full max-w-5xl mx-auto mt-10 px-4">
            {/* ---- Tab Buttons ---- */}
            <div className="w-full flex justify-start md:justify-center">
                <div
                    className="
                        flex
                        overflow-x-auto
                        space-x-3
                        bg-gray-100
                        p-2
                        rounded-full
                        scrollbar-hide
                    "
                >
                    {tabs.map((t, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`
                                px-5 py-2 
                                whitespace-nowrap
                                rounded-full 
                                font-medium 
                                transition-all
                                ${
                                active === i
                                    ? "bg-white shadow text-black"
                                    : "text-gray-600 hover:text-black"
                            }
                            `}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* ---- Tab Content ---- */}
            <div className="mt-8 flex justify-center">
                <div className="w-full bg-white shadow-lg rounded-3xl p-6 md:p-10">
                    {tabs[active].content}
                </div>
            </div>
        </div>
    );
}
