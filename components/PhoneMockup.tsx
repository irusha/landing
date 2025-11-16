import React, { useEffect, useState } from "react";
import Screen2 from "@/screens/Screen2";
import Screen3 from "@/screens/Screen3";
import Screen1 from "@/screens/Screen1";

interface PhoneMockupProps {
    screenIndex: number; // 0..2 (can be fractional)
}

const PhoneMockup = ({ screenIndex }: PhoneMockupProps) => {
    const [animIndex, setAnimIndex] = useState(0);

    // Smoothly animate animIndex → screenIndex
    useEffect(() => {
        let raf: number;
        const ease = 0.15;

        const tick = () => {
            setAnimIndex(prev => {
                const next = prev + (screenIndex - prev) * ease;
                if (Math.abs(next - screenIndex) < 0.01) return screenIndex;
                return next;
            });
            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [screenIndex]);

    const rounded = Math.round(animIndex);
    const translateY = -(animIndex * 100);

    return (
        <div className="relative">
            {/* Phone frame */}
            <div className="relative w-[340px] h-[700px] bg-black rounded-[50px] shadow-2xl overflow-hidden border-8 border-gray-800">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20" />

                {/* Screen container */}
                <div className="absolute inset-2 bg-white rounded-[42px] overflow-hidden">
                    <div
                        className="relative w-full h-full transition-transform duration-300 ease-out"
                        style={{ transform: `translateX(${translateY}%)` }}
                    >
                        {/* Screen 1 */}
                        <div className="absolute inset-0 w-full h-full">
                            <Screen1 isVisible={rounded === 0} />
                        </div>

                        {/* Screen 2 */}
                        <div className="absolute inset-0 w-full h-full" style={{ transform: "translateX(100%)" }}>
                            <Screen2 isVisible={rounded === 1} />
                        </div>

                        {/* Screen 3 */}
                        <div className="absolute inset-0 w-full h-full" style={{ transform: "translateX(200%)" }}>
                            <Screen3 isVisible={rounded === 2} />
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="absolute right-0 top-32 w-1 h-12 bg-gray-700 rounded-l" />
                <div className="absolute right-0 top-48 w-1 h-16 bg-gray-700 rounded-l" />
                <div className="absolute right-0 top-68 w-1 h-16 bg-gray-700 rounded-l" />
                <div className="absolute left-0 top-40 w-1 h-8 bg-gray-700 rounded-r" />
            </div>

            {/* Progress indicator */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
                {[0, 1, 2].map(i => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${rounded === i ? "bg-primary w-8" : "bg-muted"}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhoneMockup;
