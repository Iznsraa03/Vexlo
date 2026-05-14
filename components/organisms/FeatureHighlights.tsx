import React from "react";
import AnimatedContent from "@/components/atoms/AnimatedContent";
import FeatureCard from "@/components/molecules/FeatureCard";
import FEATURES from "@/data/features.json";

export default function FeatureHighlights() {
  return (
    <section id="features" className="h-screen snap-start py-20 px-6 md:px-12 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto">
        <AnimatedContent
          distance={30}
          duration={0.6}
          animateOpacity
          initialOpacity={0}
          threshold={0.2}
          className="mb-12 text-center"
        >
          <p className="text-[#FFA500] text-xs font-bold tracking-widest uppercase mb-2">
            Why VEXLO
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
            Built Different
          </h2>
        </AnimatedContent>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {FEATURES.map((feat, i) => (
            <FeatureCard 
              key={feat.title} 
              title={feat.title} 
              desc={feat.desc} 
              iconName={feat.icon} 
              delay={i * 0.12} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
