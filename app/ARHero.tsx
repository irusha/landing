import { useState, useEffect } from "react";
import {ShaderAnimation} from "@/components/ShaderAnimation";

export default function ARGymHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-[850px] overflow-hidden rounded-xl">
      {/* Shader Background */}
      <div className="absolute inset-0">
        <ShaderAnimation />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-center tracking-tight mb-6">
            <span className="block bg-gradient-to-r from-[hsl(var(--color-brand-accent))] via-[hsl(var(--color-brand-accent-hover))] to-[hsl(var(--color-brand-accent))] bg-clip-text text-transparent animate-pulse">
              AR GYM
            </span>
          </h1>
        </div>

        {/* Subheading */}
        <div
          className={`transition-all duration-1000 delay-300 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 text-center max-w-3xl mb-8 font-light">
            Transform your fitness journey with{" "}
            <span className="font-semibold" style={{color: "hsl(var(--color-brand-accent))"}}>
              augmented reality
            </span>
            . Train smarter, anywhere.
          </p>
        </div>

        {/* Feature Tags */}
        <div
          className={`transition-all duration-1000 delay-500 ease-out ${
            isVisible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {["AI-Powered Coaching", "Real-Time Form Check", "Gamified Workouts"].map(
              (feature, index) => (
                <div
                  key={feature}
                  className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border text-white text-sm transition-all duration-300 hover:scale-105 cursor-default"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    borderColor: "hsl(var(--color-brand-accent) / 0.3)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "hsl(var(--color-brand-accent) / 0.2)";
                    e.currentTarget.style.borderColor = "hsl(var(--color-brand-accent) / 0.6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "";
                    e.currentTarget.style.borderColor = "hsl(var(--color-brand-accent) / 0.3)";
                  }}
                >
                  {feature}
                </div>
              )
            )}
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className={`transition-all duration-1000 delay-700 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="group relative px-8 py-4 text-black dark:text-black font-bold text-lg rounded-full overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: "hsl(var(--color-brand-accent))",
                boxShadow: "0 0 0 0 hsl(var(--color-brand-accent) / 0)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 25px 50px -12px hsl(var(--color-brand-accent) / 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 0 0 hsl(var(--color-brand-accent) / 0)";
              }}
            >
              <span className="relative z-10">Start Your Journey</span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(to right, hsl(var(--color-brand-accent)), hsl(var(--color-brand-accent-hover)), hsl(var(--color-brand-accent)))"
                }}
              />
            </button>

            <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-full hover:bg-white/10 hover:border-white/60 backdrop-blur-sm transition-all duration-300 hover:scale-105">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`transition-all duration-1000 delay-1000 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="mt-20 grid grid-cols-3 gap-8 sm:gap-16">
            {[
              { value: "50K+", label: "Active Users" },
              { value: "95%", label: "Accuracy" },
              { value: "4.9★", label: "Rating" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center hover:scale-110 transition-transform duration-300"
              >
                <div className="text-3xl sm:text-4xl font-bold mb-1" style={{color: "hsl(var(--color-brand-accent))"}}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1200 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/60 text-sm">Scroll to explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{color: "hsl(var(--color-brand-accent))"}}
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}

const { useRef } = await import("react");