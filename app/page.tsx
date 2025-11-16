"use client";

import React, { useEffect, useRef, useState } from "react";
import PhoneMockup from "@/components/PhoneMockup";
import {Dumbbell, Sparkles, Users, Zap} from "lucide-react";

export default function Home() {
    const [phoneScreen, setPhoneScreen] = useState(0); // 0..2
    const phoneContainerRef = useRef<HTMLDivElement | null>(null);

    const isPhoneInView = () => {
        if (!phoneContainerRef.current) return false;
        const rect = phoneContainerRef.current.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    };

    useEffect(() => {
        let accDelta = 0;
        let raf: number | null = null;
        const SENSITIVITY = 0.003; // Base sensitivity for wheel
        const TOUCH_SENSITIVITY = 0.005; // Base sensitivity for touch
        const MAX_SCREEN = 2;
        const MIN_SCREEN = 0;

        const clamp = (v: number) => Math.max(MIN_SCREEN, Math.min(MAX_SCREEN, v));

        const onWheel = (e: WheelEvent) => {
            if (!phoneContainerRef.current) return;

            // 1. Check if the phone container is currently visible on the screen
            const isInView = isPhoneInView();
            if (!isInView) return;

            const delta = e.deltaY * SENSITIVITY;
            const newPhoneScreen = clamp(phoneScreen + delta); // Calculate potential new value

            // 2. Determine if the scroll will cause a screen change or if we are at a boundary
            const isScrollingUp = delta < 0; // Negative delta is scroll up
            const isScrollingDown = delta > 0; // Positive delta is scroll down

            // We only prevent default scroll *if* we are still transitioning screens.
            // If the user tries to scroll down while already at screen 2,
            // or up while already at screen 0, we *don't* prevent default, allowing the main page to scroll.
            const isAtUpperLimit = phoneScreen === MAX_SCREEN && isScrollingDown;
            const isAtLowerLimit = phoneScreen === MIN_SCREEN && isScrollingUp;

            if (!isAtUpperLimit && !isAtLowerLimit) {
                // Prevent default scroll only if we are actively transitioning
                e.preventDefault();
            }

            // Always accumulate delta, and let the clamp function handle the boundaries
            accDelta += delta;

            if (!raf) {
                raf = requestAnimationFrame(() => {
                    setPhoneScreen(prev => {
                        const nextVal = clamp(prev + accDelta);
                        // Ensure we don't apply delta that goes beyond the max/min
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

            // Use the same logic for touch as for wheel
            const isInView = isPhoneInView();
            if (!isInView) return;

            const y = e.touches[0].clientY;
            // Negative delta (upward swipe) means screen goes up (negative number change)
            const delta = (lastTouchY - y) * TOUCH_SENSITIVITY;
            lastTouchY = y;

            const newPhoneScreen = clamp(phoneScreen + delta);

            const isScrollingUp = delta > 0; // Upward swipe (screen number increases)
            const isScrollingDown = delta < 0; // Downward swipe (screen number decreases)

            // Touch move needs to prevent default to stop page scroll/bounce/refresh
            // We need a more complex strategy for touch to allow page scroll when at boundaries.
            // For simplicity and common use, let's allow touch to drive the transition while in view,
            // and rely on browser behavior to scroll the page once the custom scroll can't proceed.
            // A perfect touch solution is much more complex, but this will get you closer.

            // *Simple Fix for Touch:* Prevent default to ensure custom scroll works,
            // and trust the user will scroll the main page out of the phone view range once they hit the end.
            e.preventDefault();

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
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float [animation-delay:1s]" />
                </div>

                <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <div className="text-center lg:text-left animate-fade-in">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 [background-image:var(--gradient-primary)] bg-clip-text text-transparent">
                            Transform Your Fitness with AR
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
                            Experience the future of workout training with augmented reality guidance. Real-time form correction, personalized routines, and immersive motivation.
                        </p>
                    </div>

                    <div className="flex justify-center animate-slide-in-left">
                        <div className="relative">
                            <div className="absolute inset-0 [background-image:var(--gradient-primary)] opacity-50 blur-2xl [box-shadow:var(--shadow-glow)]" />
                            <img
                                src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=800&fit=crop"
                                alt="AR Workout Preview"
                                className="relative rounded-3xl shadow-2xl w-[300px] h-[600px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Phone Section */}
            <section ref={phoneContainerRef} className="flex justify-center items-center py-20">
                <div className="sticky top-20">
                    <PhoneMockup screenIndex={phoneScreen} />
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
            <section className="py-24 px-4 bg-gradient-primary text-white relative overflow-hidden">
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