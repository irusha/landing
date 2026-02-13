"use client";

import AboutHeroSection from "@/components/AboutHero";
import Timeline from "@/components/Timeline";
import CoreValues from "@/components/CoreValues";
import LeadershipGrid from "@/components/LeadershipGrid";

export default function AboutPage() {
    const leaders = [
        {
            image: "/images/leader1.jpeg",
            name: "Ishan Paranamana",
        },
        {
            image: "/images/leader2.jpeg",
            name: "Piviru Wijewardhana",
        },
        {
            image: "/images/leader3.jpeg",
            name: "Irusha Athukoralage",
        },
        {
            image: "/images/leader4.jpeg",
            name: "Navoda Bandara",
        },
        {
            image: "/images/leader5.jpeg",
            name: "Deeno Bajitha",
        },
        {
            image: "/images/leader6.jpeg",
            name: "Yashodha Samarasinghe",
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
