import React from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

// Ganti nomor ini dengan nomor WhatsApp admin yang sebenarnya
const WHATSAPP_NUMBER = "6281234567890";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Brand Logo + Name */}
        <div className="flex items-center gap-3">
          <div className="relative w-7 h-7 shrink-0 rounded-full overflow-hidden border border-white/10">
            <Image
              src="/logo/logo.png"
              alt="Vexlo Logo"
              fill
              sizes="28px"
              className="object-cover"
            />
          </div>
          <span className="text-white font-black tracking-widest">
            Money<span className="text-[#FF4D4D]">Heist</span>
          </span>
        </div>

        {/* Copyright */}
        <p className="text-white/20 text-xs text-center order-last sm:order-0">
          © {new Date().getFullYear()} VEXLO. All rights reserved.
        </p>

        {/* WhatsApp CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with admin via WhatsApp"
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-[#25D366]/30 bg-[#25D366]/8 text-[#25D366] text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#25D366]/18 hover:border-[#25D366]/60 hover:shadow-[0_0_20px_rgba(37,211,102,0.2)]"
        >
          <MessageCircle className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
          <span>Chat Admin</span>
        </a>

      </div>
    </footer>
  );
}
