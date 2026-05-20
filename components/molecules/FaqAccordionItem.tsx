"use client";

import React from "react";
import { Plus, X } from "lucide-react";
import { FaqItem } from "@/types";

interface FaqAccordionItemProps {
  item: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FaqAccordionItem({
  item,
  index,
  isOpen,
  onToggle,
}: FaqAccordionItemProps) {
  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-[#FF4D4D]/40 shadow-[0_0_20px_rgba(255,77,77,0.1)]"
          : "border-white/8 hover:border-white/15"
      }`}
      style={{
        background: isOpen
          ? "linear-gradient(135deg, rgba(255,77,77,0.06) 0%, rgba(255,255,255,0.03) 100%)"
          : "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Question Header */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
        className="w-full flex items-center justify-between gap-4 p-5 text-left group"
      >
        <span className="text-sm md:text-base font-semibold text-white/85 group-hover:text-white transition-colors duration-200 leading-snug">
          {item.q}
        </span>
        <span
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
            isOpen
              ? "border-[#FF4D4D] bg-[#FF4D4D]/15 rotate-0"
              : "border-white/20 bg-white/5 rotate-0"
          }`}
        >
          {isOpen ? (
            <X className="w-3.5 h-3.5 text-[#FF4D4D]" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-white/60" />
          )}
        </span>
      </button>

      {/* Answer Body — CSS height transition */}
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? "300px" : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="px-5 pb-5 text-sm text-white/50 leading-relaxed">
          {item.a}
        </p>
      </div>
    </div>
  );
}
