import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Bot Weekly – KI-Agenten Newsletter",
  description:
    "Der deutschsprachige Newsletter zu KI-Agenten, MCP, LLMs und Automatisierung. Jeden Freitag kostenlos.",
  openGraph: {
    type: "website",
    url: "https://agent-bot.de/newsletter",
    title: "Agent Bot Weekly – KI-Agenten Newsletter",
    description:
      "Curated News, Deep Dives und echte Use Cases rund um autonome KI-Agenten — jeden Freitag kostenlos.",
  },
};

const issues = [
  {
    num: "#024",
    date: "28. Feb 2025",
    datetime: "2025-02-28",
    title: "MCP: Das neue Standard-Protokoll für Agenten?",
    description:
      "Anthropics Model Context Protocol gewinnt rasant an Adoptierung — was steckt dahinter und warum ist es wichtig?",
    tags: ["MCP", "Anthropic", "Protokolle"],
  },
  {
    num: "#023",
    date: "21. Feb 2025",
    datetime: "2025-02-21",
    title: "OpenAI Operator vs. Claude Computer Use",
    description:
      "Browser-steuernde Agenten im direkten Vergleich — was kann heute schon produktiv eingesetzt werden?",
    tags: ["OpenAI", "Claude", "Browser-Agents"],
  },
  {
    num: "#022",
    date: "14. Feb 2025",
    datetime: "2025-02-14",
    title: "LangGraph vs. CrewAI — welches Framework gewinnt?",
    description:
      "Ein ehrlicher Vergleich zweier populärer Multi-Agent-Frameworks mit echten Code-Beispielen.",
    tags: ["LangGraph", "CrewAI", "Frameworks"],
  },
];

const topics = [
  { icon: "🔍", title: "Deep Dives", description: "Technische Analysen zu Frameworks, Protokollen und Architektur-Entscheidungen in der Agenten-Welt." },
  { icon: "⚡", title: "News & Updates", description: "Die wichtigsten Releases und Ankündigungen der Woche — gefiltert und eingeordnet." },
  { icon: "🛠️", title: "Tools & Ressourcen", description: "Praktische Tools, Open-Source-Projekte und Repos, die den Unterschied machen." },
  { icon: "💼", title: "Use Cases", description: "Echte Einsatzszenarien aus der Praxis — was funktioniert, was nicht und warum." },
];

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e8e8f0] font-sans">

      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-[#1e1e2e] bg-[#0a0a0f]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="text-sm font-bold tracking-widest uppercase text-[#e8e8f0] hover:text-[#a78bfa] transition-colors">
            ← Agent Bot
          </a>
          <span className="text-sm font-bold">
            agentbot<span className="text-[#a78bfa]">weekly</span>
          </span>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-24 text-center">
        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-[600px] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(167,139,250,0.18)_0%,transparent_70%)] blur-3xl" />

        <div className="relative mx-auto max-w-2xl">
          <span className="mb-6 inline-block rounded-full border border-[rgba(167,139,250,0.3)] bg-[rgba(167,139,250,0.12)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#a78bfa]">
            🤖 Wöchentlich · Kostenlos · Auf Deutsch
          </span>
          <h1 className="mb-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            KI-Agenten verstehen.{" "}
            <span className="text-[#a78bfa]">Woche für Woche.</span>
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-[#9ca3af]">
            Curated News, Deep Dives und echte Use Cases rund um autonome KI-Agenten,
            MCP, LLM-Infrastruktur und Prompt Engineering — direkt in dein Postfach.
          </p>

          {/* Beehiiv Embed */}
          <div className="mx-auto max-w-lg">
            <iframe
              src="https://subscribe-forms.beehiiv.com/8ec40e27-e80c-4afa-a2d1-aa4eba6cbdf9"
              data-test-id="beehiiv-embed"
              frameBorder="0"
              scrolling="no"
              style={{
                width: "100%",
                maxWidth: "100%",
                height: "339px",
                backgroundColor: "transparent",
                border: "none",
                display: "block",
              }}
            />
          </div>
          <p className="mt-2 text-xs text-[#6b7280]">Kein Spam. Kein Tracking. Jederzeit abbestellbar.</p>
        </div>
      </section>

      {/* STATS */}
      <div className="border-y border-[#1e1e2e] bg-[#0d0d18]">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center divide-x divide-[#1e1e2e]">
          {[
            { num: "1.200+", label: "Abonnenten" },
            { num: "24", label: "Ausgaben" },
            { num: "5 min", label: "Lesezeit" },
            { num: "Freitags", label: "Erscheinungstag" },
          ].map((s) => (
            <div key={s.label} className="px-8 py-6 text-center">
              <span className="block text-2xl font-black text-[#a78bfa]">{s.num}</span>
              <span className="mt-1 block text-xs uppercase tracking-widest text-[#6b7280]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* TOPICS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Was dich erwartet</h2>
            <p className="mt-2 text-[#9ca3af]">Jede Ausgabe bringt das Wesentliche auf den Punkt</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((t) => (
              <div
                key={t.title}
                className="rounded-xl border border-[#1e1e2e] bg-[#13131f] p-6 transition-all hover:-translate-y-1 hover:border-[#a78bfa]"
              >
                <div className="mb-3 text-3xl">{t.icon}</div>
                <h3 className="mb-2 font-semibold">{t.title}</h3>
                <p className="text-sm leading-relaxed text-[#9ca3af]">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ISSUES */}
      <section className="bg-[#0d0d18] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold">Letzte Ausgaben</h2>
            <p className="mt-2 text-[#9ca3af]">Ein Blick in die neuesten Deep Dives</p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {issues.map((issue) => (
              <article
                key={issue.num}
                className="flex flex-col gap-3 rounded-xl border border-[#1e1e2e] bg-[#13131f] p-6 transition-all hover:-translate-y-1 hover:border-[#a78bfa]"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#a78bfa]">{issue.num}</span>
                  <time className="text-xs text-[#4b5563]" dateTime={issue.datetime}>{issue.date}</time>
                </div>
                <h3 className="font-semibold leading-snug">{issue.title}</h3>
                <p className="flex-1 text-sm leading-relaxed text-[#9ca3af]">{issue.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {issue.tags.map((tag) => (
                    <span key={tag} className="rounded bg-[rgba(167,139,250,0.1)] px-2 py-0.5 text-xs font-medium text-[#a78bfa]">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <div className="mx-auto max-w-lg">
          <h2 className="mb-2 text-3xl font-bold">Bereit loszulegen?</h2>
          <p className="mb-8 text-[#9ca3af]">Trag dich jetzt ein und verpasse keine Ausgabe mehr.</p>
          <iframe
            src="https://subscribe-forms.beehiiv.com/8ec40e27-e80c-4afa-a2d1-aa4eba6cbdf9"
            data-test-id="beehiiv-embed"
            frameBorder="0"
            scrolling="no"
            style={{
              width: "100%",
              maxWidth: "100%",
              height: "339px",
              backgroundColor: "transparent",
              border: "none",
              display: "block",
            }}
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1e1e2e] bg-[#0d0d18] px-6 py-8 text-center text-xs text-[#4b5563]">
        <p className="mb-2">© 2025 Agent Bot Weekly · Hannes Schwede</p>
        <div className="flex justify-center gap-4">
          <a href="/impressum" className="hover:text-[#a78bfa] transition-colors">Impressum</a>
          <a href="/datenschutz" className="hover:text-[#a78bfa] transition-colors">Datenschutz</a>
          <a href="/agb" className="hover:text-[#a78bfa] transition-colors">AGB</a>
        </div>
      </footer>

      {/* Beehiiv script */}
      <script async src="https://subscribe-forms.beehiiv.com/embed.js" />
    </div>
  );
}
