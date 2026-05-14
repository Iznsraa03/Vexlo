import React from "react";
import Navbar from "@/components/organisms/Navbar";
import HeroSection from "@/components/organisms/HeroSection";
import GameShowcase from "@/components/organisms/GameShowcase";
import FeatureHighlights from "@/components/organisms/FeatureHighlights";
import PaymentBar from "@/components/organisms/PaymentBar";
import Footer from "@/components/organisms/Footer";

export default function LandingTemplate() {
  return (
    <div className="relative min-h-screen font-sans antialiased text-white">
      {/* Global Background Layer with fallback color */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat bg-[#121212]"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(18, 18, 18, 0.9)), url('/img/moneyheist.webp')",
        }}
      />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <GameShowcase />
        <FeatureHighlights />
        <PaymentBar />
        <Footer />
      </div>
    </div>
  );
}
