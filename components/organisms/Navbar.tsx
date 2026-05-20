"use client";

import React from "react";
import Image from "next/image";
import StaggeredMenu from "@/components/atoms/StaggeredMenu";

const MENU_ITEMS = [
  { label: "Home", ariaLabel: "Go to home page", link: "#home" },
  { label: "About", ariaLabel: "About Vexlo", link: "#about" },
  { label: "FAQ", ariaLabel: "Frequently Asked Questions", link: "#faq" },
  { label: "Contact", ariaLabel: "Get in touch", link: "#contact" },
];

const SOCIAL_ITEMS = [
  { label: "Twitter", link: "https://twitter.com" },
  { label: "Instagram", link: "https://instagram.com" },
  { label: "Discord", link: "https://discord.com" },
];

export default function Navbar() {
  return (
    <>
      {/* Static left side: Logo — fixed & always visible */}
      <div className="fixed top-0 left-0 z-50 flex items-center gap-3 px-6 py-5 md:px-12">
        <div className="relative w-8 h-8 shrink-0 rounded-full overflow-hidden border border-white/10">
          <Image
            src="/logo/logo.png"
            alt="Vexlo Logo"
            fill
            sizes="32px"
            className="object-cover"
          />
        </div>
        <span className="text-xl font-black tracking-widest text-white">
          Money<span className="text-[#FF4D4D]">Heist</span>
        </span>
      </div>

      {/* StaggeredMenu — fixed overlay occupying the full viewport */}
      <StaggeredMenu
        isFixed={true}
        position="right"
        items={MENU_ITEMS}
        socialItems={SOCIAL_ITEMS}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#ffffff"
        openMenuButtonColor="#111111"
        changeMenuColorOnOpen={true}
        colors={["#1a0a0a", "#FF4D4D"]}
        accentColor="#FF4D4D"
      />
    </>
  );
}
