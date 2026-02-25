import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://agent-bot.de"),

  title: "Agent Bot — Delivery State System für Agenturen",
  description:
    "Eure Projekte hängen nicht an der Kreativität — sie hängen an Übergaben, Feedback und unklarer Ownership. Agent Bot strukturiert Handoffs, Freigaben und Status automatisch.",

  openGraph: {
    type: "website",
    url: "https://agent-bot.de",
    title: "Agent Bot — Delivery State System",
    description:
      "Projekte scheitern nicht an Ideen, sondern an Übergaben und unklarer Verantwortung.",
    images: [
      {
        url: "https://agent-bot.de/og.jpg",
        width: 1200,
        height: 630,
        alt: "Agent Bot — Delivery State System",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Agent Bot — Delivery State System",
    description:
      "Projekte scheitern nicht an Ideen, sondern an Übergaben und unklarer Verantwortung.",
    images: ["https://agent-bot.de/og.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};