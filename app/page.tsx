"use client";

import React, { useEffect, useRef, useState } from "react";
import PhoneMockup from "@/components/PhoneMockup";
import {Dumbbell, Sparkles, Users, Zap} from "lucide-react";
import FitnessHero from "@/app/Hero";
import ScrollSlideshow from "@/app/MobileView";
import ScrollControlledSlideshow from "@/app/MobileView";

export default function Home() {
    const [phoneScreen, setPhoneScreen] = useState(0); // 0..2
    const phoneContainerRef = useRef<HTMLDivElement | null>(null);

    const isPhoneInView = () => {
        if (!phoneContainerRef.current) return false;
        const rect = phoneContainerRef.current.getBoundingClientRect();
        return rect.top + (window.innerHeight - 200) < window.innerHeight && rect.bottom > 0;
    };

    useEffect(() => {
        let accDelta = 0;
        let raf: number | null = null;
        const SENSITIVITY = 0.003; // Base sensitivity for wheel
        const TOUCH_SENSITIVITY = 0.005; // Base sensitivity for touch
        const MAX_STEP = 0.4; // Limit per event to avoid skipping screens on fast flicks
        const MAX_SCREEN = 2;
        const MIN_SCREEN = 0;

        const clamp = (v: number) => Math.max(MIN_SCREEN, Math.min(MAX_SCREEN, v));

        const onWheel = (e: WheelEvent) => {
            if (!phoneContainerRef.current) return;

            const isInView = isPhoneInView();
            if (!isInView) return;

            // Compress very large deltas so fast flicks don't jump multiple screens
            let raw = e.deltaY * SENSITIVITY;
            const delta = Math.max(-MAX_STEP, Math.min(MAX_STEP, raw));
            const prospective = clamp(phoneScreen + delta); // value after this wheel

            const isScrollingUp = delta < 0;
            const isScrollingDown = delta > 0;
            // Use prospective value for boundary detection + tolerance
            const TOL = 0.001;
            const isAtUpperLimit = prospective >= (MAX_SCREEN - TOL) && isScrollingDown;
            const isAtLowerLimit = prospective <= (MIN_SCREEN + TOL) && isScrollingUp;

            // Allow native page scroll if this event would hit a boundary
            if (!isAtUpperLimit && !isAtLowerLimit) {
                e.preventDefault();
            }

            accDelta += delta;

            if (!raf) {
                raf = requestAnimationFrame(() => {
                    setPhoneScreen(prev => {
                        const nextVal = clamp(prev + accDelta);
                        accDelta = 0;
                        raf = null;
                        return nextVal;
                    });
                });
            }
        };

        let lastTouchY = 0;
        const onTouchStart = (e: TouchEvent) => {
            if (e.touches.length > 0) lastTouchY = e.touches[0].clientY;
        };

        const onTouchMove = (e: TouchEvent) => {
            if (!phoneContainerRef.current || e.touches.length === 0) return;
            const isInView = isPhoneInView();
            if (!isInView) return;

            const y = e.touches[0].clientY;
            let raw = (lastTouchY - y) * TOUCH_SENSITIVITY;
            // Apply same per-event cap for touch gestures
            const delta = Math.max(-MAX_STEP, Math.min(MAX_STEP, raw));
            lastTouchY = y;
            const prospective = clamp(phoneScreen + delta);
            const isScrollingUp = delta > 0; // upward swipe increases screen
            const isScrollingDown = delta < 0;
            const TOL = 0.001;
            const isAtUpperLimit = prospective >= (MAX_SCREEN - TOL) && isScrollingUp; // note direction logic for touch (delta > 0 moves forward)
            const isAtLowerLimit = prospective <= (MIN_SCREEN + TOL) && isScrollingDown;

            // Only prevent default while transitioning internally
            if (!isAtUpperLimit && !isAtLowerLimit) {
                e.preventDefault();
            }

            accDelta += delta;
            if (!raf) {
                raf = requestAnimationFrame(() => {
                    setPhoneScreen(prev => {
                        const nextVal = clamp(prev + accDelta);
                        accDelta = 0;
                        raf = null;
                        return nextVal;
                    });
                });
            }
        };

        window.addEventListener("wheel", onWheel, { passive: false });
        window.addEventListener("touchstart", onTouchStart, { passive: true }); // passive: true for touchstart is generally recommended
        window.addEventListener("touchmove", onTouchMove, { passive: false });

        return () => {
            window.removeEventListener("wheel", onWheel);
            window.removeEventListener("touchstart", onTouchStart);
            window.removeEventListener("touchmove", onTouchMove);
            if (raf) cancelAnimationFrame(raf);
        };
    }, [phoneScreen]); // 💡Crucial: phoneScreen must be in the dependency array

    return (
        <div className="min-h-screen bg-gradient-hero">
            {/* Hero Section */}
            <FitnessHero/>
            <ScrollControlledSlideshow images={[
                "https://picsum.photos/seed/100/1920/1080",
                "https://picsum.photos/seed/200/1920/1080",
                "https://picsum.photos/seed/300/1920/1080",
                "https://picsum.photos/seed/400/1920/1080",
            ]}
            height={"calc(100vh - 4rem)"}/>
            {/* Phone Section */}
            <section ref={phoneContainerRef} className="flex justify-center items-center py-20">
                <div className="sticky top-20">
                    {/*<PhoneMockup screenIndex={phoneScreen} />*/}
                </div>
            </section>


            {/* Features Section */}
            <section className="py-24 px-4 bg-background">
                <div className="container mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
                        Why Choose AR Workout
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary transition-colors animate-fade-in">
                            <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                                <Dumbbell className="text-white" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Smart Form Tracking</h3>
                            <p className="text-muted-foreground">
                                Real-time AR overlays analyze your form and provide instant feedback to prevent injuries and maximize results.
                            </p>
                        </div>

                        <div
                            className="p-8 rounded-2xl bg-card border border-border hover:border-primary transition-colors animate-fade-in"
                            style={{ animationDelay: "0.1s" }}
                        >
                            <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                                <Zap className="text-white" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Adaptive Workouts</h3>
                            <p className="text-muted-foreground">
                                AI-powered routines that adapt to your fitness level, goals, and progress in real-time.
                            </p>
                        </div>

                        <div
                            className="p-8 rounded-2xl bg-card border border-border hover:border-primary transition-colors animate-fade-in"
                            style={{ animationDelay: "0.2s" }}
                        >
                            <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                                <Users className="text-white" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Community Driven</h3>
                            <p className="text-muted-foreground">
                                Join thousands of users, compete in challenges, and share your progress with a supportive community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 bg-gradient-primary  relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden opacity-10">
                    <div className="absolute -top-24 -left-24 w-96 h-96 border-2 border-white rounded-full" />
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 border-2 border-white rounded-full" />
                </div>

                <div className="container mx-auto text-center relative z-10">
                    <Sparkles className="mx-auto mb-6" size={48} />
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your AR Fitness Journey</h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">Download now and get 7 days of premium features completely free. No credit card required.</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 bg-background border-t border-border">
                <div className="container mx-auto text-center text-muted-foreground">
                    <p>&copy; 2024 AR Workout. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}