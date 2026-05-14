import React from "react";
import AnimatedContent from "@/components/atoms/AnimatedContent";
import PaymentItem from "@/components/molecules/PaymentItem";
import PAYMENTS from "@/data/payments.json";

export default function PaymentBar() {
  return (
    <section className="py-16 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <AnimatedContent
          distance={20}
          duration={0.5}
          animateOpacity
          initialOpacity={0}
          threshold={0.2}
          className="text-center mb-8"
        >
          <p className="text-white/25 text-xs font-semibold tracking-widest uppercase">
            Accepted Payment Methods
          </p>
        </AnimatedContent>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {PAYMENTS.map((p, i) => (
            <PaymentItem key={p.label} payment={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
