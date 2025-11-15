import Image from "next/image";
import Tabs from "@/components/Tabs";
import Timeline from "@/components/Timeline";

export default function AboutPage() {
    return (
        <>
            <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-6 py-16 flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-6">
                    Here's who we are <br /> & what our gym is about
                </h1>

                <button className="mb-16 px-6 py-3 bg-[#CFF500] hover:bg-[#b8e000] text-black font-medium rounded-full shadow hover:shadow-lg transition-all">
                    ✨ Get to know more about us
                </button>

                <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-24">
                    <div className="text-black p-10 rounded-3xl shadow-lg bg-gradient-to-r from-blue-50 to-white">
                        <h2 className="text-2xl font-semibold mb-4">
                            So you know about <span className="text-black">FitLife Gym</span> — but what about the
                            team behind it?
                        </h2>
                        <p className="text-gray-800 leading-relaxed">
                            Meet the passionate trainers, developers, and fitness lovers who
                            made this platform possible. Our team’s goal is to help you stay
                            motivated, healthy, and inspired.
                        </p>
                        <p className="mt-10 text-center text-black font-semibold text-lg">
                            #TeamFitLife 💪
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-3xl shadow-lg flex flex-wrap justify-center gap-4">
                        {["/team1.jpg", "/team2.jpg", "/team3.jpg", "/team4.jpg"].map((src, idx) => (
                            <div
                                key={idx}
                                className="relative w-40 h-28 rounded-xl overflow-hidden transform hover:rotate-0 transition"
                            >
                                <Image src={src} alt={`Team ${idx + 1}`} fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---- Tabs Section ---- */}
            <Tabs
                tabs={[
                    {
                        label: "Our Story",
                        content: (
                            <Timeline
                                items={[
                                    {
                                        day: "08",
                                        year: "2008",
                                        title: "FitPro Founded",
                                        description:
                                            "Started as a small neighborhood gym with a vision to make fitness accessible to everyone.",
                                        image: "/images/gym1.jpg",
                                    },
                                    {
                                        day: "12",
                                        year: "2012",
                                        title: "First Expansion",
                                        description:
                                            "Doubled our space and added group fitness classes due to growing member demand.",
                                        image: "/images/gym2.jpg",
                                    },
                                    {
                                        day: "16",
                                        year: "2016",
                                        title: "Technology Integration",
                                        description:
                                            "Introduced smart equipment and a mobile app for seamless member experience.",
                                        image: "/images/gym3.jpg",
                                    },
                                ]}
                            />
                        ),
                    },
                    {
                        label: "Values",
                        content: (
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Our Core Values</h2>
                                <ul className="text-gray-700 space-y-2">
                                    <li>• Excellence</li>
                                    <li>• Community</li>
                                    <li>• Innovation</li>
                                </ul>
                            </div>
                        ),
                    },
                    {
                        label: "Facilities",
                        content: (
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Facilities</h2>
                                <p className="text-gray-700">
                                    Modern equipment, spacious workout zones, fitness classes, and more.
                                </p>
                            </div>
                        ),
                    },
                    {
                        label: "Leadership",
                        content: (
                            <div>
                                <h2 className="text-2xl font-semibold mb-4">Leadership Team</h2>
                                <p className="text-gray-700">
                                    Meet the leaders driving FitLife Gym forward.
                                </p>
                            </div>
                        ),
                    },
                ]}
            />
        </>
    );
}
