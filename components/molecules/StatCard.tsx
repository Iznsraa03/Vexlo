import React from "react";
import AnimatedContent from "@/components/atoms/AnimatedContent";
import { AboutStat } from "@/types";

interface StatCardProps {
  stat: AboutStat;
  delay: number;
}

export default function StatCard({ stat, delay }: StatCardProps) {
  return (
    <AnimatedContent
      distance={30}
      direction="vertical"
      duration={0.6}
      delay={delay}
      animateOpacity
      initialOpacity={0}
      threshold={0.1}
    >
      <div
        className="group p-6 rounded-2xl border border-white/8 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-[#FF4D4D]/40 hover:scale-105 h-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
          backdropFilter: "blur(10px)",
          boxShadow:
            "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Stat Value */}
        <span
          className="text-4xl md:text-5xl font-black leading-none mb-2 text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #FF4D4D 0%, #FFA500 100%)",
          }}
        >
          {stat.value}
        </span>

        {/* Stat Label */}
        <span className="text-white/50 text-xs md:text-sm font-semibold tracking-widest uppercase">
          {stat.label}
        </span>

        {/* Subtle glow on hover */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ boxShadow: "inset 0 0 30px rgba(255,77,77,0.06)" }}
        />
      </div>
    </AnimatedContent>
  );
}
