"use client";

import {
  Zap,
  ShieldCheck,
  HeadphonesIcon,
  ExternalLink,
  Gamepad2,
  ChevronRight,
} from "lucide-react";
import TextType from "@/components/ui/TextType";
import AnimatedContent from "@/components/ui/AnimatedContent";

// ── Types ────────────────────────────────────────────────────────────────────
interface GameCard {
  id: string;
  title: string;
  genre: string;
  badge: string;
  gradient: string;
  emoji: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface PaymentMethod {
  label: string;
  abbr: string;
  color: string;
}

// ── Static Data ──────────────────────────────────────────────────────────────
const GAMES: GameCard[] = [
  {
    id: "mlbb",
    title: "Mobile Legends",
    genre: "MOBA",
    badge: "🔥 HOT",
    gradient: "from-blue-900/60 via-blue-800/30 to-transparent",
    emoji: "⚔️",
  },
  {
    id: "freefire",
    title: "Free Fire",
    genre: "Battle Royale",
    badge: "⚡ TOP",
    gradient: "from-orange-900/60 via-orange-800/30 to-transparent",
    emoji: "🔥",
  },
  {
    id: "valorant",
    title: "Valorant",
    genre: "FPS Tactical",
    badge: "💎 PREMIUM",
    gradient: "from-red-900/60 via-red-800/30 to-transparent",
    emoji: "🎯",
  },
  {
    id: "pubg",
    title: "PUBG Mobile",
    genre: "Battle Royale",
    badge: "🏆 POPULAR",
    gradient: "from-yellow-900/60 via-yellow-800/30 to-transparent",
    emoji: "🪖",
  },
  {
    id: "genshin",
    title: "Genshin Impact",
    genre: "RPG",
    badge: "✨ TRENDING",
    gradient: "from-purple-900/60 via-purple-800/30 to-transparent",
    emoji: "🌟",
  },
  {
    id: "cod",
    title: "Call of Duty",
    genre: "FPS",
    badge: "💥 NEW",
    gradient: "from-green-900/60 via-green-800/30 to-transparent",
    emoji: "🎖️",
  },
];

const FEATURES: Feature[] = [
  {
    icon: <Zap className="w-6 h-6 text-[#FFA500]" />,
    title: "Instant Delivery",
    desc: "Top-up processed in under 60 seconds. Zero waiting, maximum gaming.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#FFA500]" />,
    title: "Secure Payment",
    desc: "256-bit SSL encryption on every transaction. Your data stays yours.",
  },
  {
    icon: <HeadphonesIcon className="w-6 h-6 text-[#FFA500]" />,
    title: "24/7 Support",
    desc: "Live agents around the clock. We speak gamer so you don't have to explain.",
  },
];

const PAYMENTS: PaymentMethod[] = [
  { label: "QRIS", abbr: "QR", color: "#FF4D4D" },
  { label: "GoPay", abbr: "GP", color: "#00AED6" },
  { label: "OVO", abbr: "OV", color: "#4C3494" },
  { label: "DANA", abbr: "DN", color: "#118EEA" },
  { label: "ShopeePay", abbr: "SP", color: "#EE4D2D" },
  { label: "BCA", abbr: "BC", color: "#005DAA" },
];

// ── Sub-components ────────────────────────────────────────────────────────────
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-[#121212]/80 border-b border-white/5">
    <div className="flex items-center gap-2">
      <Gamepad2 className="w-6 h-6 text-[#FF4D4D]" />
      <span className="text-xl font-black tracking-widest text-white">
        VEX<span className="text-[#FF4D4D]">LO</span>
      </span>
    </div>
    <a
      href="#catalog"
      className="flex items-center gap-1.5 text-sm font-semibold text-white/70 hover:text-[#FFA500] transition-colors duration-200"
    >
      Catalog <ChevronRight className="w-4 h-4" />
    </a>
  </nav>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden pt-20">
    {/* Background gradient */}
    <div
      className="absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255,77,77,0.18) 0%, transparent 60%), linear-gradient(180deg, #1a0a0a 0%, #121212 60%, #0d0d0d 100%)",
      }}
    />
    {/* Mesh noise overlay */}
    <div
      className="absolute inset-0 -z-10 opacity-[0.035]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: "200px 200px",
      }}
    />
    {/* Glowing orb */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#FF4D4D]/8 blur-[120px] -z-10 pointer-events-none" />

    {/* Badge */}
    <AnimatedContent
      distance={30}
      direction="vertical"
      reverse={true}
      duration={0.6}
      delay={0.1}
      animateOpacity
      initialOpacity={0}
    >
      <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#FF4D4D]/30 bg-[#FF4D4D]/10 text-[#FF4D4D] text-xs font-bold tracking-widest uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D4D] animate-pulse" />
        Digital Asset Marketplace
      </div>
    </AnimatedContent>

    {/* Headline — static "VEXLO:" line + TextType animated sub-lines */}
    <AnimatedContent
      distance={40}
      direction="vertical"
      reverse={true}
      duration={0.7}
      delay={0.25}
      animateOpacity
      initialOpacity={0}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 max-w-4xl">
        <span
          className="text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #ffffff 0%, #FF4D4D 50%, #FFA500 100%)",
          }}
        >
          VEXLO:
        </span>
        <br />
        {/* TextType cycling sub-lines */}
        <TextType
          as="span"
          text={[
            "Level Up Your Digital Assets",
            "Top-Up in Under 60 Seconds",
            "Built for Gamers. By Gamers.",
          ]}
          typingSpeed={55}
          deletingSpeed={35}
          pauseDuration={1800}
          showCursor
          cursorCharacter="_"
          cursorClassName="text-[#FFA500]"
          cursorBlinkDuration={0.5}
          loop
          className="text-white"
        />
      </h1>
    </AnimatedContent>

    {/* Sub-headline */}
    <AnimatedContent
      distance={30}
      direction="vertical"
      reverse={true}
      duration={0.6}
      delay={0.4}
      animateOpacity
      initialOpacity={0}
    >
      <p className="text-white/50 text-base sm:text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
        Top-up diamonds, credits, and skins for every major title.
        Fast. Safe. No BS.
      </p>
    </AnimatedContent>

    {/* Primary CTA */}
    <AnimatedContent
      distance={20}
      direction="vertical"
      reverse={true}
      duration={0.6}
      delay={0.55}
      animateOpacity
      initialOpacity={0}
    >
      <a
        href="https://your-catalog-url.com"
        target="_blank"
        rel="noopener noreferrer"
        id="catalog"
        className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#FFA500] text-black font-black text-lg tracking-wide transition-all duration-300 hover:scale-105 active:scale-95"
        style={{
          boxShadow:
            "0 0 25px rgba(255,165,0,0.4), 0 0 50px rgba(255,165,0,0.15)",
        }}
      >
        Open Catalog
        <ExternalLink className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </AnimatedContent>

    {/* Social proof */}
    <AnimatedContent
      distance={15}
      direction="vertical"
      reverse={true}
      duration={0.5}
      delay={0.7}
      animateOpacity
      initialOpacity={0}
    >
      <div className="mt-8 flex items-center gap-2 text-white/30 text-sm">
        <span className="flex -space-x-1.5">
          {["🟠", "🔴", "⚽"].map((e, i) => (
            <span
              key={i}
              className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-xs"
            >
              {e}
            </span>
          ))}
        </span>
        <span>
          Trusted by{" "}
          <strong className="text-white/60">50,000+</strong> gamers
        </span>
      </div>
    </AnimatedContent>
  </section>
);

const GameCardItem = ({
  game,
  delay,
}: {
  game: GameCard;
  delay: number;
}) => (
  /* AnimatedContent wraps each card for scroll-triggered entrance */
  <AnimatedContent
    distance={50}
    direction="vertical"
    reverse={false}
    duration={0.65}
    delay={delay}
    ease="power3.out"
    animateOpacity
    initialOpacity={0}
    threshold={0.15}
  >
    <div
      className="relative group rounded-2xl overflow-hidden border border-white/8 cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:border-[#FF4D4D]/40 h-full"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow:
          "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-b ${game.gradient}`} />
      <div className="relative p-5 flex flex-col gap-3 min-h-[180px] justify-between">
        <div className="flex items-start justify-between">
          <span className="text-4xl leading-none">{game.emoji}</span>
          <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-[#FF4D4D]/20 text-[#FF4D4D] border border-[#FF4D4D]/30 whitespace-nowrap">
            {game.badge}
          </span>
        </div>
        <div>
          <p className="text-[10px] font-semibold tracking-widest text-white/40 uppercase mb-1">
            {game.genre}
          </p>
          <h3 className="text-white font-bold text-sm sm:text-base leading-tight">
            {game.title}
          </h3>
        </div>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-[#FF4D4D]/10 to-transparent pointer-events-none" />
    </div>
  </AnimatedContent>
);

const GameShowcase = () => (
  <section className="py-20 px-6 md:px-12">
    <div className="max-w-6xl mx-auto mb-10">
      <AnimatedContent
        distance={30}
        duration={0.6}
        animateOpacity
        initialOpacity={0}
        threshold={0.2}
      >
        <p className="text-[#FF4D4D] text-xs font-bold tracking-widest uppercase mb-2">
          Game Library
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
          Popular Titles
        </h2>
      </AnimatedContent>
    </div>

    <div className="max-w-6xl mx-auto">
      {/* Mobile: horizontal CSS Scroll Snap */}
      <div className="flex gap-4 overflow-x-auto pb-4 md:hidden snap-x snap-mandatory scrollbar-hide">
        {GAMES.map((g, i) => (
          <div key={g.id} className="snap-start flex-shrink-0 w-44">
            <GameCardItem game={g} delay={i * 0.08} />
          </div>
        ))}
      </div>

      {/* Desktop: 3×2 grid with staggered AnimatedContent */}
      <div className="hidden md:grid grid-cols-3 gap-5">
        {GAMES.map((g, i) => (
          <GameCardItem key={g.id} game={g} delay={i * 0.1} />
        ))}
      </div>
    </div>
  </section>
);

const FeatureHighlights = () => (
  <section className="py-20 px-6 md:px-12">
    <div className="max-w-6xl mx-auto">
      <AnimatedContent
        distance={30}
        duration={0.6}
        animateOpacity
        initialOpacity={0}
        threshold={0.2}
        className="mb-12 text-center"
      >
        <p className="text-[#FFA500] text-xs font-bold tracking-widest uppercase mb-2">
          Why VEXLO
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
          Built Different
        </h2>
      </AnimatedContent>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {FEATURES.map((feat, i) => (
          <AnimatedContent
            key={feat.title}
            distance={40}
            direction="vertical"
            duration={0.65}
            delay={i * 0.12}
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
                {feat.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                {feat.title}
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">
                {feat.desc}
              </p>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </div>
  </section>
);

const PaymentBar = () => (
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
          <AnimatedContent
            key={p.label}
            distance={20}
            direction="horizontal"
            reverse={i % 2 === 0}
            duration={0.5}
            delay={i * 0.07}
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
                style={{ background: p.color, color: "#fff" }}
              >
                {p.abbr}
              </div>
              <span className="text-white/30 text-sm font-semibold transition-colors duration-300 group-hover:text-white/70">
                {p.label}
              </span>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
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

// ── Page ─────────────────────────────────────────────────────────────────────
export default function VexloLanding() {
  return (
    <div
      className="min-h-screen font-sans antialiased"
      style={{ background: "#121212" }}
    >
      <Navbar />
      <HeroSection />
      <GameShowcase />
      <FeatureHighlights />
      <PaymentBar />
      <Footer />
    </div>
  );
}
