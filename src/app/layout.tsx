import type { Metadata, Viewport } from "next";
import { Cinzel, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/hooks/useLanguage";

const cinzel = Cinzel({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0B0E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://wexfordlaw.com"),
  title: "Wexford Law | International Counsel & Strategic Litigation",
  description:
    "Wexford Law is an elite international legal practice specializing in high-stakes capital recovery, strategic claims, cross-border corporate advisory, and uncompromising trial defense.",
  keywords: [
    "Wexford Law",
    "International Arbitration",
    "Asset Recovery",
    "Strategic Litigation",
    "Corporate Defense",
    "Trial Lawyers",
    "Recuperación de Dinero",
  ],
  authors: [{ name: "Wexford Law" }],
  openGraph: {
    title: "Wexford Law | We Defend What Matters",
    description:
      "Elite legal architecture for capital recovery, corporate sovereignty defense, and complex dispute resolution.",
    url: "https://wexfordlaw.com",
    siteName: "Wexford Law",
    images: [
      {
        url: "/images/hero-editorial.jpg",
        width: 1200,
        height: 630,
        alt: "Wexford Law Chambers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${plusJakarta.variable} dark scroll-smooth`}>
      <body className="bg-[#111622] text-[#F1F5F9] font-sans selection:bg-[#D4AF37] selection:text-[#0B0F19] antialiased overflow-x-hidden min-h-screen">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
