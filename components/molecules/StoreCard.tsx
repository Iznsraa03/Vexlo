import React from "react";
import Image from "next/image";
import AnimatedContent from "@/components/atoms/AnimatedContent";
import { Store } from "@/types";

interface StoreCardProps {
  store: Store;
  delay?: number;
}

export default function StoreCard({ store, delay = 0 }: StoreCardProps) {
  return (
    <AnimatedContent
      distance={40}
      direction="vertical"
      reverse={false}
      duration={0.65}
      delay={delay}
      ease="power3.out"
      animateOpacity
      initialOpacity={0}
      threshold={0.15}
    >
      <a
        href={store.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Kunjungi ${store.name}`}
        className="group flex flex-col items-center gap-4 cursor-pointer select-none"
      >
        {/* Circular Logo */}
        <div
          className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-2 border-white/10 transition-all duration-300 group-hover:border-[#FF4D4D]/70 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,77,77,0.4)]"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <Image
            src={store.logo}
            alt={store.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, (max-width: 1024px) 160px, 192px"
          />
          {/* Hover glow overlay */}
          <div className="absolute inset-0 rounded-full bg-[#FF4D4D]/0 group-hover:bg-[#FF4D4D]/10 transition-colors duration-300" />
        </div>

        {/* Store Name */}
        <span
          className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold tracking-wider text-white/70 group-hover:text-white transition-colors duration-300 uppercase"
        >
          {store.name}
        </span>

        {/* Visit CTA */}
        <span
          className="text-[9px] sm:text-[10px] md:text-xs font-bold tracking-widest uppercase px-3 py-1 sm:px-3.5 sm:py-1.5 md:px-5 md:py-2 rounded-full border border-[#FF4D4D]/40 text-[#FF4D4D] bg-[#FF4D4D]/10 transition-all duration-300 -mt-2 shadow-[0_2px_8px_rgba(255,77,77,0.1)] group-hover:bg-[#FF4D4D]/25 group-hover:text-white group-hover:border-[#FF4D4D]/80 group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(255,77,77,0.4)]"
        >
          Kunjungi →
        </span>
      </a>
    </AnimatedContent>
  );
}
