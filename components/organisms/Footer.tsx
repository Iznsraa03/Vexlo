import React from "react";
import { Gamepad2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Gamepad2 className="w-5 h-5 text-[#FF4D4D]" />
          <span className="text-white font-black tracking-widest">
            VEX<span className="text-[#FF4D4D]">LO</span>
          </span>
        </div>
        <p className="text-white/20 text-xs text-center">
          © {new Date().getFullYear()} VEXLO. All rights reserved.
          <span className="mx-2 text-white/10">·</span>
          <a
            href="https://your-catalog-url.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFA500] transition-colors duration-200"
          >
            Open Catalog ↗
          </a>
        </p>
      </div>
    </footer>
  );
}
