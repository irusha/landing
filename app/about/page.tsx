import Image from "next/image";
import Tabs from "@/components/Tabs";
import Timeline from "@/components/Timeline";
import LeadershipCard from "@/components/LeadershipCard";
import CoreValues from "@/components/CoreValues";
import AboutHeroSection from "@/components/AboutHero";

export default function AboutPage() {
    return (
        <>
            <AboutHeroSection></AboutHeroSection>

            {/* ---- Tabs Section ---- */}
            <Tabs
                tabs={[
                    {
                        label: "Our Story",
                        content: (
                            <Timeline
                                items={[
                                    {
                                        day: "01",
                                        year: "September",
                                        title: "REPZ Founded",
                                        description:
                                            "Repz began as a simple but powerful idea — helping gym users and trainers connect, collaborate, and train smarter using the latest AR technology.",
                                        image: "/images/gym1.jpg",
                                    },
                                    {
                                        day: "02",
                                        year: "October",
                                        title: "Design Finalized",
                                        description:
                                            "Completed the final app design with polished interfaces and a seamless user experience for both trainers and gym members.",
                                        image: "/images/gym2.jpg",
                                    },
                                    {
                                        day: "03",
                                        year: "December",
                                        title: "Website Launched",
                                        description:
                                            "Launched the official Repz website, introducing our mission and platform to the fitness community.",
                                        image: "/images/gym3.jpg",
                                    },
                                ]
                            }
                            />
                        ),
                    },
                    {
                        label: "Values",
                        content: <CoreValues />,
                    },
                    {
                        label: "Leadership",
                        content: (
                            <div className="flex flex-col items-center text-center mb-12">
                                <h2 className="text-3xl font-bold">Leadership Team</h2>
                                <p className="text-gray-600 mt-2 max-w-xl">
                                    Meet the passionate leaders driving FitPro mission and vision forward.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                                    <LeadershipCard
                                        name="Michael Rodriguez"
                                        role="Founder & CEO"
                                        image="/images/gym1.jpg"
                                        bio="With 20+ years in fitness industry, Michael founded FitPro with a vision to create a community-focused gym."
                                        skills={["Business Leadership", "Fitness Strategy", "Community Building"]}
                                    />

                                    <LeadershipCard
                                        name="Sarah Johnson"
                                        role="Head of Training"
                                        image="/images/gym1.jpg"
                                        bio="ACSM certified with expertise in strength training and program development for all fitness levels."
                                        skills={["Business Leadership", "Fitness Strategy", "Community Building"]}
                                    />

                                    <LeadershipCard
                                        name="David Chen"
                                        role="Nutrition Director"
                                        image="/images/gym1.jpg"
                                        bio="Registered Dietitian specializing in sports nutrition and sustainable lifestyle changes."
                                        skills={["Business Leadership", "Fitness Strategy", "Community Building"]}
                                    />

                                    <LeadershipCard
                                        name="Emily Davis"
                                        role="Wellness Coordinator"
                                        image="/images/gym1.jpg"
                                        bio="Certified in yoga, meditation, and mental health first aid, focusing on holistic wellness."
                                        skills={["Business Leadership", "Fitness Strategy", "Community Building"]}
                                    />
                                </div>
                            </div>
                        ),
                    }
                ]}
            />
        </>
    );
}
