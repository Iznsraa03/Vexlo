import React from "react";
import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import Footer from "@/components/organisms/Footer";

export default function LandingTemplate() {
  return (
    <div className="relative min-h-screen font-sans antialiased text-white">
      {/* Global Background Layer with fallback color */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-[#121212]"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(18, 18, 18, 0.9)), url('/img/MH.webp')",
        }}
      />
      <div id="snap-main-container" className="relative z-10 h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
        <Navbar />
        <HeroSection />
        <section id="contact" className="snap-start flex flex-col justify-end min-h-max">
          <Footer />
        </section>
      </div>
    </div>
  );
}

