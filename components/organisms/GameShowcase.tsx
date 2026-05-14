import React from "react";
import AnimatedContent from "@/components/atoms/AnimatedContent";
import GameCard from "@/components/molecules/GameCard";
import GAMES from "@/data/games.json";

export default function GameShowcase() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto mb-10">
        <AnimatedContent
          distance={30}
          duration={0.6}
          animateOpacity
          initialOpacity={0}
          threshold={0.2}
        >
          <p className="text-[#FF4D4D] text-xs font-bold tracking-widest uppercase mb-2">
            Game Library
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
            Popular Titles
          </h2>
        </AnimatedContent>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Mobile: horizontal CSS Scroll Snap */}
        <div className="flex gap-4 overflow-x-auto pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
          {GAMES.map((g, i) => (
            <div key={g.id} className="snap-start flex-shrink-0 w-44">
              <GameCard game={g} delay={i * 0.08} />
            </div>
          ))}
        </div>

        {/* Desktop: 3×2 grid with staggered AnimatedContent */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {GAMES.map((g, i) => (
            <GameCard key={g.id} game={g} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
