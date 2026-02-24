import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://agent-bot.de"),

  title: "Agent Bot — Operational system for collaboration",
  description:
    "Agent Bot structures handoffs, ownership and follow-ups so projects run without coordination.",

  openGraph: {
    title: "Agent Bot — Delivery State System",
    description:
      "Projects don’t stall because of creativity — they stall because of handoffs and unclear ownership.",
    url: "https://agent-bot.de",
    siteName: "Agent Bot",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Agent Bot",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Agent Bot — Delivery State System",
    description:
      "Projects don’t stall because of creativity — they stall because of handoffs and unclear ownership.",
    images: ["/og.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}