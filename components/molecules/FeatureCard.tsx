import React from "react";
import AnimatedContent from "@/components/atoms/AnimatedContent";
import * as Icons from "lucide-react";

interface FeatureCardProps {
  title: string;
  desc: string;
  iconName: string;
  delay: number;
}

export default function FeatureCard({ title, desc, iconName, delay }: FeatureCardProps) {
  // @ts-ignore - Dynamic icon rendering
  const Icon = Icons[iconName] || Icons.HelpCircle;

  return (
    <AnimatedContent
      distance={40}
      direction="vertical"
      duration={0.65}
      delay={delay}
      animateOpacity
      initialOpacity={0}
      threshold={0.15}
    >
      <div
        className="group p-6 rounded-2xl border border-white/8 transition-all duration-300 hover:border-[#FFA500]/30 h-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
          backdropFilter: "blur(8px)",
          boxShadow:
            "0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        <div
          className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{
            background: "rgba(255,165,0,0.12)",
            border: "1px solid rgba(255,165,0,0.25)",
          }}
        >
          <Icon className="w-6 h-6 text-[#FFA500]" />
        </div>
        <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
        <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
      </div>
    </AnimatedContent>
  );
}
