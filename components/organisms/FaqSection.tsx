"use client";

import React, { useState } from "react";
import AnimatedContent from "@/components/atoms/AnimatedContent";
import FaqAccordionItem from "@/components/molecules/FaqAccordionItem";
import FAQ_DATA from "@/data/faq.json";
import { FaqItem } from "@/types";

const faqs = FAQ_DATA as FaqItem[];

export default function FaqSection() {
  // Controlled state: index of open FAQ item, null jika semua tertutup
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative min-h-screen snap-start flex flex-col items-center justify-center px-6 md:px-12 py-20 overflow-hidden"
    >
      {/* Mesh noise overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Background glowing orb — aksen merah untuk section ini */}
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#FF4D4D]/5 blur-[130px] -z-10 pointer-events-none" />

      <div className="w-full max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <AnimatedContent
            distance={20}
            direction="vertical"
            reverse={true}
            duration={0.5}
            delay={0.1}
            animateOpacity
            initialOpacity={0}
          >
            <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#FF4D4D]/70 mb-4">
              Bantuan & Info
            </span>
          </AnimatedContent>

          <AnimatedContent
            distance={40}
            direction="vertical"
            reverse={true}
            duration={0.7}
            delay={0.2}
            animateOpacity
            initialOpacity={0}
          >
            <h2 className="text-4xl sm:text-5xl font-black leading-tight">
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #ffffff 0%, #FF4D4D 60%, #FFA500 100%)",
                }}
              >
                Pertanyaan Umum
              </span>
            </h2>
          </AnimatedContent>

          <AnimatedContent
            distance={20}
            direction="vertical"
            reverse={true}
            duration={0.5}
            delay={0.3}
            animateOpacity
            initialOpacity={0}
          >
            <p className="text-white/40 text-sm mt-4 leading-relaxed">
              Tidak menemukan jawaban yang kamu cari? Hubungi tim kami langsung
              via WhatsApp.
            </p>
          </AnimatedContent>
        </div>

        {/* FAQ Accordion List */}
        <AnimatedContent
          distance={30}
          direction="vertical"
          duration={0.65}
          delay={0.4}
          animateOpacity
          initialOpacity={0}
          threshold={0.05}
        >
          <div className="flex flex-col gap-3">
            {faqs.map((item, i) => (
              <FaqAccordionItem
                key={i}
                item={item}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            ))}
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
