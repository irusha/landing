"use client";

import AboutHeroSection from "@/components/AboutHero";
import Timeline from "@/components/Timeline";
import CoreValues from "@/components/CoreValues";
import LeadershipGrid from "@/components/LeadershipGrid";

export default function AboutPage() {
    const leaders = [
        {
            image: "/images/gym1.jpg",
            name: "Michael Rodriguez",
            role: "Founder & CEO",
            bio: "With over 20 years in the fitness industry, Michael founded REPZ to merge technology with training.",
            skills: ["Leadership", "Fitness Strategy", "Community Building"],
        },
        {
            image: "/images/gym2.jpg",
            name: "Sarah Johnson",
            role: "Head of Training",
            bio: "ACSM certified trainer specializing in strength training and performance programs.",
            skills: ["Strength Training", "Coaching", "Program Design"],
        },
        {
            image: "/images/gym3.jpg",
            name: "David Chen",
            role: "Nutrition Director",
            bio: "Registered dietitian focused on sports nutrition and sustainable wellness habits.",
            skills: ["Sports Nutrition", "Meal Planning", "Health Coaching"],
        },
        {
            image: "/images/gym1.jpg",
            name: "Emily Davis",
            role: "Wellness Coordinator",
            bio: "Certified yoga and mindfulness instructor promoting holistic wellness.",
            skills: ["Yoga", "Mindfulness", "Mental Wellness"],
        },
    ];

    return (
        <>
            <AboutHeroSection />

            {/* Timeline */}
            <Timeline
                items={[
                    {
                        day: "01",
                        year: "September",
                        title: "REPZ Founded",
                        description:
                            "REPZ began as a powerful idea to connect gym users and trainers using AR technology.",
                        image: "/images/gym1.jpg",
                    },
                    {
                        day: "02",
                        year: "October",
                        title: "Design Finalized",
                        description:
                            "Finalized the app design with polished UI and seamless user experience.",
                        image: "/images/gym2.jpg",
                    },
                    {
                        day: "03",
                        year: "December",
                        title: "Website Launched",
                        description:
                            "Launched the official REPZ website to the fitness community.",
                        image: "/images/gym3.jpg",
                    },
                ]}
            />

            {/* Values + Leadership */}
            <div className="max-w-5xl mx-auto px-4 space-y-32 pb-32">
                <CoreValues />

                <section>

                    {/* Animated Leadership Grid */}
                    <LeadershipGrid leaders={leaders} />
                </section>
            </div>
        </>
    );
}
