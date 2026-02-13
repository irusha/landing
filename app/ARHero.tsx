import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ShaderAnimation } from "@/components/ShaderAnimation";
import { WordRotate } from "@/components/ui/WordRotate";

export default function ARGymHero() {
    const [isVisible, setIsVisible] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            {/* Shader Background */}
            <div className="absolute inset-0">
                <ShaderAnimation />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />

            {/* Content */}
            <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
                {/* Main Heading - Single Line with Baseline Alignment */}
                <div
                    className={`transition-all duration-1000 ease-out ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-10"
                    }`}
                >
                    <div className="flex flex-col sm:flex-row items-baseline justify-center gap-3 sm:gap-5 mb-8">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center tracking-tight leading-none bg-gradient-to-r from-[hsl(var(--color-brand-accent))] via-[hsl(var(--color-brand-accent-hover))] to-[hsl(var(--color-brand-accent))] bg-clip-text text-transparent animate-pulse">
                            Workouts
                        </h1>
                        <WordRotate
                            words={[
                                "Revolutionized",
                                "Transformed",
                                "Elevated",
                                "Amplified",
                                "Reimagined",
                            ]}
                            duration={2500}
                            specialWordDuration={7500}
                            specialWord="Reimagined"
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none bg-gradient-to-r from-[hsl(var(--color-brand-accent))] via-[hsl(var(--color-brand-accent-hover))] to-[hsl(var(--color-brand-accent))] bg-clip-text text-transparent whitespace-nowrap"
                            framerProps={{
                                initial: { opacity: 0, y: -20 },
                                animate: { opacity: 1, y: 0 },
                                exit: { opacity: 0, y: 20 },
                                transition: { duration: 0.4, ease: "easeInOut" },
                            }}
                        />
                    </div>
                </div>

                {/* Subheading */}
                <div
                    className={`transition-all duration-1000 delay-200 ease-out ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                >
                    <p className="text-base sm:text-lg md:text-xl text-white/80 text-center max-w-xl mx-auto mb-12 font-light leading-relaxed">
                        Transform your fitness journey with{" "}
                        <span
                            className="font-semibold text-white"
                            style={{ color: "hsl(var(--color-brand-accent))" }}
                        >
              augmented reality
            </span>
                        . Train smarter, anywhere.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div
                    className={`transition-all duration-1000 delay-400 ease-out ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                    }`}
                >
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <button
                            className="group relative px-8 py-3.5 text-black dark:text-black font-semibold text-base rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
                            style={{
                                backgroundColor: "hsl(var(--color-brand-accent))",
                                boxShadow:
                                    "0 10px 30px -10px hsl(var(--color-brand-accent) / 0.5)",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow =
                                    "0 15px 40px -10px hsl(var(--color-brand-accent) / 0.7)";
                                e.currentTarget.style.transform = "scale(1.05) translateY(-1px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow =
                                    "0 10px 30px -10px hsl(var(--color-brand-accent) / 0.5)";
                                e.currentTarget.style.transform = "";
                            }}
                        >
                            <span className="relative z-10">Get Started</span>
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    background:
                                        "linear-gradient(to right, hsl(var(--color-brand-accent)), hsl(var(--color-brand-accent-hover)), hsl(var(--color-brand-accent)))",
                                }}
                            />
                        </button>

                        <button
                            onClick={() => router.push("/contact")}
                            className="px-8 py-3.5 bg-transparent border text-white/90 font-medium text-base rounded-full hover:bg-white/5 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                            style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.4)";
                                e.currentTarget.style.color = "#fff";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                                e.currentTarget.style.color = "";
                            }}
                        >
                            Watch Demo
                        </button>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator - Fixed to bottom */}
            <div
                className={`absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ease-out ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
            >
                <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/70 text-sm font-light tracking-wide">
            Scroll to explore
          </span>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{ color: "hsl(var(--color-brand-accent))" }}
                    >
                        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                </div>
            </div>

            <style jsx>{`
                @keyframes pulse {
                    0%,
                    100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.85;
                    }
                }
                .animate-pulse {
                    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
            `}</style>
        </div>
    );
}