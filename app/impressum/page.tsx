import type { Metadata } from "next";

export const metadata: Metadata = { title: "Impressum | Agent Bot" };

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <nav className="sticky top-0 z-50 w-full border-b border-black/10 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <div className="h-7 w-7 bg-[#FF4F15]" />
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase">Agent Bot</span>
          </a>
        </div>
      </nav>
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h1 className="text-3xl font-black uppercase mb-8">Impressum</h1>
        <div className="space-y-6 text-sm leading-relaxed text-black/80">
          <section>
            <h2 className="font-bold text-black mb-2">Angaben gemäß § 5 TMG</h2>
            <p>Hannes Schwede<br />Sömmeringstraße 15<br />50823 Köln</p>
          </section>
          <section>
            <h2 className="font-bold text-black mb-2">Kontakt</h2>
            <p>E-Mail: <a href="mailto:hannes@agent-bot.de" className="text-[#FF4F15] hover:underline">hannes@agent-bot.de</a></p>
          </section>
          <section>
            <h2 className="font-bold text-black mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>Hannes Schwede<br />Sömmeringstraße 15<br />50823 Köln</p>
          </section>
        </div>
      </main>
      <footer className="border-t border-black/10 px-6 py-8 text-center">
        <p className="text-[11px] text-black/30 mb-2">© 2026 Agent Bot · Hannes Schwede</p>
        <div className="flex justify-center gap-4 text-[11px] text-black/30">
          <a href="/impressum" className="hover:text-[#FF4F15] transition-colors">Impressum</a>
          <a href="/datenschutz" className="hover:text-[#FF4F15] transition-colors">Datenschutz</a>
        </div>
      </footer>
    </div>
  );
}
