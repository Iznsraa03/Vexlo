import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VEXLO — Level Up Your Digital Assets",
  description:
    "Top-up diamonds, credits, and skins for every major game title. Fast, secure, 24/7.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      style={{ fontFamily: "var(--font-inter), Inter, sans-serif" }}
    >
      <body className="min-h-full flex flex-col bg-[#121212]">{children}</body>
    </html>
  );
}
