import Image from "next/image";
import { Linkedin } from "lucide-react";

export default function AboutPage() {
    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 px-6 py-16 flex flex-col items-center">
            {/* ---------- Main heading ---------- */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-6">
                Here's who we are <br /> & what our gym is about
            </h1>

            <button className="mb-16 px-6 py-3 bg-gradient-to-r bg-[#CFF500] hover:bg-[#b8e000] text-black font-medium rounded-full shadow hover:shadow-lg transition-all">
                ✨ Get to know more about us
            </button>

            {/* ---------- About section ---------- */}
            <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-24">
                {/* Left card - text */}
                <div className="text-black p-10 rounded-3xl shadow-lg flex flex-col justify-between bg-gradient-to-r from-blue-50 to-white">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">
                            So you know about{" "}
                            <span className="text-black">FitLife Gym</span> — but what
                            about the team behind it?
                        </h2>
                        <p className="text-gray-800 leading-relaxed">
                            Meet the passionate trainers, developers, and fitness lovers who
                            made this platform possible. Our team’s goal is to help you stay
                            motivated, healthy, and inspired.
                        </p>
                    </div>
                    <div className="mt-10 text-center">
                        <p className="text-black font-semibold text-lg">
                            #TeamFitLife 💪
                        </p>
                    </div>
                </div>

                {/* Right card - team photos */}
                <div className="bg-gradient-to-r from-white to-blue-50 p-8 rounded-3xl shadow-lg flex flex-wrap justify-center gap-4">
                    <div className="relative w-40 h-28 rounded-xl overflow-hidden transform rotate-2 hover:rotate-0 transition">
                        <Image src="/team1.jpg" alt="Team 1" fill className="object-cover" />
                    </div>
                    <div className="relative w-40 h-28 rounded-xl overflow-hidden transform -rotate-3 hover:rotate-0 transition">
                        <Image src="/team2.jpg" alt="Team 2" fill className="object-cover" />
                    </div>
                    <div className="relative w-40 h-28 rounded-xl overflow-hidden transform rotate-1 hover:rotate-0 transition">
                        <Image src="/team3.jpg" alt="Team 3" fill className="object-cover" />
                    </div>
                    <div className="relative w-40 h-28 rounded-xl overflow-hidden transform -rotate-2 hover:rotate-0 transition">
                        <Image src="/team4.jpg" alt="Team 4" fill className="object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}
