import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Bot — Delivery State System für Agenturen",
  description:
    "Übergaben, Ownership und Feedback so strukturieren, dass Projekte ohne Status-Chaos laufen.",
  metadataBase: new URL("https://agent-bot.de"),
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://agent-bot.de",
    title: "Agent Bot — Delivery State System für Agenturen",
    description:
      "Übergaben, Ownership und Feedback so strukturieren, dass Projekte ohne Status-Chaos laufen.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Agent Bot — Delivery State System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Bot — Delivery State System für Agenturen",
    description:
      "Übergaben, Ownership und Feedback so strukturieren, dass Projekte ohne Status-Chaos laufen.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}