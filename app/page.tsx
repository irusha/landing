"use client";

import React, { useEffect, useRef, useState } from "react";
import {Dumbbell, Sparkles, Users, Zap} from "lucide-react";
import FitnessHero from "@/app/Hero";
import MobileView from "@/components/MobileView";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
    const [phoneScreen, setPhoneScreen] = useState(0); // 0..2
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        // 0 when the top of the section hits 90% of the viewport (almost bottom)
        // 1 when the bottom hits 10% of the viewport (almost top)
        offset: ["start 0.9", "end 0.2"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 20,
        mass: 0.2,
    });

    // width in %, between 60% and 100%
    const [featureWidth, setFeatureWidth] = useState(80);
    const lastProgress = useRef(0);
    const hasReachedMax = useRef(false);

    useEffect(() => {
        const MIN = 80;
        const MAX = 100;

        const unsubscribe = smoothProgress.on("change", (value) => {
            if (hasReachedMax.current) return;

            const next = MIN +  (MAX-MIN) * value * 5;

            setFeatureWidth(next);

            // if width is basically max, lock it
            if (next >= MAX - 0.5) {
                hasReachedMax.current = true;
                setFeatureWidth(MAX);
            }
        });

        return () => {
            unsubscribe();
        };
    }, [smoothProgress]);


    return (
        <div className="min-h-screen bg-gradient-hero">
            {/* Hero Section */}
            <FitnessHero/>
            <MobileView images={[
                "/images/screens/SplashScreen.png",
                "/images/screens/WorkoutBuilderScreen.png",
                "/images/screens/StatsScreen.png",
                "/images/screens/ChallengesScreen.png",
            ]}
                        height={"calc(100vh - 4rem)"}/>

            {/* Features Section */}
            <section className="py-24 px-4 bg-background" >
                <motion.div
                    ref={containerRef}
                    className="my-1 bg-black text-white p-10 rounded-4xl"
                    style={{
                        width: `${featureWidth}%`,  // animated width
                        margin: "0 auto",           // center the box
                    }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
                        Why Choose AR Workout
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary transition-colors animate-fade-in">
                            <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                                <Dumbbell className="text-black" size={28} />
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
                                <Zap className="text-black" size={28} />
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
                                <Users className="text-black" size={28} />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Community Driven</h3>
                            <p className="text-muted-foreground">
                                Join thousands of users, compete in challenges, and share your progress with a supportive community.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}