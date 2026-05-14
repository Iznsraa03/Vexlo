import React from "react";
import AnimatedContent from "@/components/atoms/AnimatedContent";
import StoreCard from "@/components/molecules/StoreCard";
import STORES from "@/data/stores.json";

export default function StoreShowcase() {
  return (
    <section
      id="stores"
      className="h-screen snap-start flex flex-col items-center justify-center px-6 md:px-12"
    >
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <AnimatedContent
          distance={30}
          duration={0.6}
          animateOpacity
          initialOpacity={0}
          threshold={0.2}
          className="mb-14"
        >
          <p className="text-[#FF4D4D] text-xs font-bold tracking-widest uppercase mb-3">
            Official Stores
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
            Toko Kami
          </h2>
          <p className="text-white/40 text-sm md:text-base max-w-sm mx-auto">
            Pilih store favoritmu dan top-up langsung dengan cepat & aman.
          </p>
        </AnimatedContent>

        {/* Store Cards Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
          {STORES.map((store, i) => (
            <StoreCard key={store.id} store={store} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
