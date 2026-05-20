import React from "react";
import AnimatedContent from "@/components/atoms/AnimatedContent";
import StatCard from "@/components/molecules/StatCard";
import ABOUT from "@/data/about.json";
import { AboutStat } from "@/types";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative h-screen snap-start flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden"
    >
      {/* Mesh noise overlay — konsisten dengan HeroSection */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Background glowing orb — aksen oranye untuk membedakan dari hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#FFA500]/5 blur-[140px] -z-10 pointer-events-none" />

      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Section Label */}
          <AnimatedContent
            distance={20}
            direction="vertical"
            reverse={true}
            duration={0.5}
            delay={0.1}
            animateOpacity
            initialOpacity={0}
          >
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#FFA500]/70 mb-4">
              Tentang Kami
            </span>
          </AnimatedContent>

          {/* Heading */}
          <AnimatedContent
            distance={40}
            direction="vertical"
            reverse={true}
            duration={0.7}
            delay={0.2}
            animateOpacity
            initialOpacity={0}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #ffffff 0%, #FF4D4D 50%, #FFA500 100%)",
                }}
              >
                Misi Kami
              </span>
            </h2>
          </AnimatedContent>

          {/* Brand Story */}
          <AnimatedContent
            distance={30}
            direction="vertical"
            reverse={true}
            duration={0.65}
            delay={0.35}
            animateOpacity
            initialOpacity={0}
          >
            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              {ABOUT.story}
            </p>
          </AnimatedContent>

          {/* Tagline badge */}
          <AnimatedContent
            distance={20}
            direction="vertical"
            reverse={true}
            duration={0.5}
            delay={0.5}
            animateOpacity
            initialOpacity={0}
          >
            <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF4D4D]/25 bg-[#FF4D4D]/8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D4D] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-[#FF4D4D]/80 uppercase">
                {ABOUT.tagline}
              </span>
            </div>
          </AnimatedContent>
        </div>

        {/* Right: Stats Grid 2×2 */}
        <div className="flex-1 grid grid-cols-2 gap-4 w-full max-w-sm lg:max-w-none">
          {(ABOUT.stats as AboutStat[]).map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={0.3 + i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
