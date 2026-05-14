import React from "react";
import AnimatedContent from "@/components/atoms/AnimatedContent";
import { PaymentMethod } from "@/types";

interface PaymentItemProps {
  payment: PaymentMethod;
  index: number;
}

export default function PaymentItem({ payment, index }: PaymentItemProps) {
  return (
    <AnimatedContent
      distance={20}
      direction="horizontal"
      reverse={index % 2 === 0}
      duration={0.5}
      delay={index * 0.07}
      animateOpacity
      initialOpacity={0}
      threshold={0.2}
    >
      <div
        className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/8 transition-all duration-300 hover:border-white/20 cursor-default"
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black transition-all duration-300 grayscale group-hover:grayscale-0"
          style={{ background: payment.color, color: "#fff" }}
        >
          {payment.abbr}
        </div>
        <span className="text-white/30 text-sm font-semibold transition-colors duration-300 group-hover:text-white/70">
          {payment.label}
        </span>
      </div>
    </AnimatedContent>
  );
}
