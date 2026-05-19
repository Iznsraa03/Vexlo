import React from "react";
import AnimatedContent from "@/components/atoms/AnimatedContent";
import StoreCard from "@/components/molecules/StoreCard";
import STORES from "@/data/stores.json";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen snap-start flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-20">
      {/* Mesh noise overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />
      {/* Glowing orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#FF4D4D]/8 blur-[120px] -z-10 pointer-events-none" />

      {/* Headline */}
      <AnimatedContent
        distance={40}
        direction="vertical"
        reverse={true}
        duration={2}
        delay={0.25}
        animateOpacity
        initialOpacity={0}
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-4 max-w-4xl">
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #ffffff 0%, #FF4D4D 50%, #FFA500 100%)",
            }}
          >
            Money Heist
          </span>
        </h1>
      </AnimatedContent>

      {/* Sub-headline */}
      <AnimatedContent
        distance={30}
        direction="vertical"
        reverse={true}
        duration={0.6}
        delay={0.4}
        animateOpacity
        initialOpacity={0}
      >
        <p className="text-white/50 text-base sm:text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
          Pilih store favoritmu dan top-up langsung dengan cepat & aman.
        </p>
      </AnimatedContent>

      {/* Store Cards Grid */}
      <div className="flex flex-row md:flex-col items-center justify-center gap-4 sm:gap-8 md:gap-20 mt-4">
        {STORES.map((store, i) => (
          <StoreCard key={store.id} store={store} delay={0.5 + i * 0.15} />
        ))}
      </div>

    </section>
  );
}
