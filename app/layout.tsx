import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "agent-bot — Operational system for collaboration",
  description:
    "Agent Bot structures handoffs, ownership and follow-ups so projects run without coordination.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}