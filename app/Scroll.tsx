import React, { useEffect, useRef, useState } from "react";
import Screen1 from "@/screens/Screen1";
import Screen2 from "@/screens/Screen2";
import Screen3 from "@/screens/Screen3";

// Reusable phone frame with notch used to wrap screens
const PhoneFrame = ({ children }: { children: React.ReactNode }) => (
    <div className="relative w-[340px] h-[700px] bg-black rounded-[50px] shadow-2xl overflow-hidden border-8 border-gray-800">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20" />
        {/* Screen container */}
        <div className="absolute inset-2 bg-white rounded-[42px] overflow-hidden">
            <div className="w-full h-full">{children}</div>
        </div>
    </div>
);

type SlideshowProps = {
    images?: string[]; // kept for API compatibility but unused now
    height?: number | string;
};

const ScrollControlledSlideshow = ({ images: _images, height = "100vh" }: SlideshowProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [isPinned, setIsPinned] = useState(false);
    const [hasCompleted, setHasCompleted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const [isVisible, setIsVisible] = useState(false);

    const pinScrollY = useRef<number | null>(null);
    const scrollCooldown = useRef(false);
    const totalSlides = 3; // using the three app screens

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.8 } // 10% visible triggers
        );

        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, []);

    // Lock page when slideshow reaches top
    useEffect(() => {
        function remToPx(rem: number) {
            return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
        }
        const handleScroll = () => {
            if (isVisible || hasCompleted) return;
            console.log("touched tips")


            const rect = containerRef.current!.getBoundingClientRect();
            console.log(rect)
            if (!isPinned && rect.top - remToPx(4) <= 0 && rect.bottom > 0) {
                setIsPinned(true);
                pinScrollY.current = window.scrollY;
            }

            if (isPinned && pinScrollY.current != null) {
                window.scrollTo(0, pinScrollY.current);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isPinned, hasCompleted]);

    // Wheel → change slides
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (!isPinned || hasCompleted) return;

            e.preventDefault();

            if (scrollCooldown.current) return;
            scrollCooldown.current = true;
            setTimeout(() => {
                scrollCooldown.current = false;
            }, 700);

            setCurrentIndex((prev) => {
                if (e.deltaY < 0) {
                    // reverse (move backwards)
                    if (prev > 0) return prev - 1;
                    return 0;
                } else if (e.deltaY > 0) {
                    // forward (move forward)
                    if (prev < totalSlides - 1) return prev + 1;

                    // Reached end → unlock
                    setHasCompleted(true);
                    setIsPinned(false);

                    return prev;
                }
                return prev;
            });
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            // Do not pass an options object here to satisfy TS typings
            window.removeEventListener("wheel", handleWheel);
        };
    }, [isPinned, hasCompleted, totalSlides]);

    const isActive = isPinned && !hasCompleted;

    return (
        <div
            ref={containerRef}
            style={{
                position: "relative",
                height,
            }}
        >
            <div
                style={{
                    position: isActive ? "fixed" : "relative",
                    top: isActive ? "4rem" : "auto",
                    left: 0,
                    width: "100%",
                    height: typeof height === "number" ? `${height}px` : height,
                    overflow: "hidden",
                    background: "#000",
                }}
            >
                {/* Center a single phone frame; only the inner screen scrolls */}
                <div style={{ height: "100%" }} className="flex items-center justify-center">
                    <PhoneFrame>
                        {/* Sliding screen content */}
                        <div
                            className="relative w-full h-full transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {/* Screen 1 */}
                            <div className="absolute inset-0 w-full h-full">
                                <Screen1 isVisible={currentIndex === 0} />
                            </div>

                            {/* Screen 2 */}
                            <div className="absolute inset-0 w-full h-full" style={{ transform: "translateX(100%)" }}>
                                <Screen2 isVisible={currentIndex === 1} />
                            </div>

                            {/* Screen 3 */}
                            <div className="absolute inset-0 w-full h-full" style={{ transform: "translateX(200%)" }}>
                                <Screen3 isVisible={currentIndex === 2} />
                            </div>
                        </div>
                    </PhoneFrame>
                </div>
            </div>
        </div>
    );
};

export default ScrollControlledSlideshow;
