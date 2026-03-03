'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: "#system", label: "System" },
  { href: "#manifest", label: "Manifest" },
  { href: "#delivery-check", label: "Check" },
];

const DELIVERY_ITEMS = [
  {
    id: "friction",
    title: "Friction Analysis",
    description: "Wo bricht der Prozess aktuell zusammen?",
  },
  {
    id: "ownership",
    title: "Asset Ownership",
    description: "Wer ist verantwortlich für den nächsten State-Change?",
  },
];

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const Section = ({ children, className = "", id }: SectionProps) => (
  <section id={id} className={`w-full border-t border-black/25 ${className}`}>
    <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-32">
      {children}
    </div>
  </section>
);

export default function ExecutionModelLanding() {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [report, setReport] = useState<any>(null);
  const [copyFeedback, setCopyFeedback] = useState("");

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const toggleItem = (itemId: string) => {
    setSelectedItems(prev => {
      const next = new Set(prev);
      next.has(itemId) ? next.delete(itemId) : next.add(itemId);
      return next;
    });
  };

  const handleReport = () => {
    if (selectedItems.size === 0) return;

    setReport({
      selected: Array.from(selectedItems),
      timestamp_local: new Date().toLocaleString("de-DE"),
      timestamp_iso: new Date().toISOString(),
    });
  };

  const copyReport = async () => {
    if (!report || !navigator.clipboard?.writeText) return;

    try {
      await navigator.clipboard.writeText(JSON.stringify(report, null, 2));
      setCopyFeedback("Kopiert!");
    } catch {
      setCopyFeedback("Fehler");
    } finally {
      setTimeout(() => setCopyFeedback(""), 1500);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black bg-grid font-sans">

      <nav className="sticky top-0 z-50 relative w-full border-b border-black/25 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">

          <div className="flex items-center gap-4">
            <div className="h-7 w-7 bg-black" />
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase">
              Execution Model
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[11px] font-semibold tracking-[0.28em] uppercase">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} className="hover:text-[#ff4d00]">
                {label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 z-[60] bg-black/20 overscroll-contain"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="absolute top-full left-0 w-full bg-white border-b border-black/25 py-4 px-6 flex flex-col gap-4 text-[11px] font-semibold tracking-[0.28em] uppercase"
              onClick={(e) => e.stopPropagation()}
            >
              {NAV_LINKS.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="hover:text-[#ff4d00]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="mx-auto w-full max-w-7xl px-6 py-20 md:py-32">
        <h1 className="text-[64px] md:text-[112px] font-black leading-[0.82] tracking-[-0.04em]">
          DELIVERY<br />
          <span className="text-[#ff4d00]">PROTOCOL.</span>
        </h1>
      </main>

      <Section id="delivery-check" className="bg-white border-black/25 bg-grid">
        <div className="max-w-2xl bg-white border border-black/25 p-8 md:p-12 shadow-[8px_8px_0px_rgba(0,0,0,1)]">

          <h2 className="text-3xl font-black mb-8 uppercase">
            Delivery Check.
          </h2>

          <div className="space-y-4">
            {DELIVERY_ITEMS.map((item) => {
              const isSelected = selectedItems.has(item.id);
              return (
                <label
                  key={item.id}
                  className={`block border p-4 cursor-pointer ${
                    isSelected ? "border-black" : "border-black/15"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleItem(item.id)}
                    className="mr-2"
                  />
                  <span className="font-bold">{item.title}</span>
                </label>
              );
            })}
          </div>

          <button
            onClick={handleReport}
            disabled={selectedItems.size === 0}
            className="mt-8 w-full bg-black text-white h-14 uppercase disabled:opacity-40"
          >
            Report generieren
          </button>

          {report && (
            <div className="mt-6 border border-black/25 bg-black/5 p-4 font-mono text-xs">
              <button onClick={copyReport}>
                {copyFeedback || "Kopieren"}
              </button>
              <pre>{JSON.stringify(report, null, 2)}</pre>
            </div>
          )}
        </div>
      </Section>

    </div>
  );
}