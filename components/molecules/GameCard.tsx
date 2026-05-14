import React from "react";
import AnimatedContent from "@/components/atoms/AnimatedContent";
import { GameCard as GameCardType } from "@/types";

interface GameCardProps {
  game: GameCardType;
  delay: number;
}

export default function GameCard({ game, delay }: GameCardProps) {
  return (
    <AnimatedContent
      distance={50}
      direction="vertical"
      reverse={false}
      duration={0.65}
      delay={delay}
      ease="power3.out"
      animateOpacity
      initialOpacity={0}
      threshold={0.15}
    >
      <div
        className="relative group rounded-2xl overflow-hidden border border-white/8 cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:border-[#FF4D4D]/40 h-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          boxShadow:
            "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        <div className={`absolute inset-0 bg-gradient-to-b ${game.gradient}`} />
        <div className="relative p-5 flex flex-col gap-3 min-h-[180px] justify-between">
          <div className="flex items-start justify-between">
            <span className="text-4xl leading-none">{game.emoji}</span>
            <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-[#FF4D4D]/20 text-[#FF4D4D] border border-[#FF4D4D]/30 whitespace-nowrap">
              {game.badge}
            </span>
          </div>
          <div>
            <p className="text-[10px] font-semibold tracking-widest text-white/40 uppercase mb-1">
              {game.genre}
            </p>
            <h3 className="text-white font-bold text-sm sm:text-base leading-tight">
              {game.title}
            </h3>
          </div>
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#FF4D4D]/10 to-transparent pointer-events-none" />
      </div>
    </AnimatedContent>
  );
}
