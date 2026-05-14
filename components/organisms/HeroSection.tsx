import React from "react";
import { ExternalLink } from "lucide-react";
import TextType from "@/components/atoms/TextType";
import AnimatedContent from "@/components/atoms/AnimatedContent";

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
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 max-w-4xl">
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #ffffff 0%, #FF4D4D 50%, #FFA500 100%)",
            }}
          >
            VEXLO:
          </span>
          <br />
          <TextType
            as="span"
            text={[
              "TOPUP DAN BONGKAR TERMURAH DAN TERCEPAT",
              "TERMURAH DAN TERCEPAT",
              "BUAT KALIAN PARA GAMER",
            ]}
            typingSpeed={55}
            deletingSpeed={35}
            pauseDuration={1800}
            showCursor
            cursorCharacter="_"
            cursorClassName="text-[#FFA500]"
            cursorBlinkDuration={0.5}
            loop
            className="text-white"
          />
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
        <p className="text-white/50 text-base sm:text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
          Top-up diamonds, credits, and skins for every major title.
          Fast. Safe. No BS.
        </p>
      </AnimatedContent>

      {/* Primary CTA */}
      <AnimatedContent
        distance={20}
        direction="vertical"
        reverse={true}
        duration={0.6}
        delay={0.55}
        animateOpacity
        initialOpacity={0}
      >
        <a
          href="https://your-catalog-url.com"
          target="_blank"
          rel="noopener noreferrer"
          id="catalog"
          className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFA500] text-black font-black text-lg tracking-wide transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            boxShadow:
              "0 0 25px rgba(255,165,0,0.4), 0 0 50px rgba(255,165,0,0.15)",
          }}
        >
          Open Catalog
          <ExternalLink className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </AnimatedContent>

      {/* Social proof */}
      <AnimatedContent
        distance={15}
        direction="vertical"
        reverse={true}
        duration={0.5}
        delay={0.7}
        animateOpacity
        initialOpacity={0}
      >
        <div className="mt-8 flex items-center gap-2 text-white/30 text-sm">
          <span className="flex -space-x-1.5">
            {["🟠", "🔴", "⚽"].map((e, i) => (
              <span
                key={i}
                className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-xs"
              >
                {e}
              </span>
            ))}
          </span>
          <span>
            Trusted by{" "}
            <strong className="text-white/60">50,000+</strong> gamers
          </span>
        </div>
      </AnimatedContent>
    </section>
  );
}
