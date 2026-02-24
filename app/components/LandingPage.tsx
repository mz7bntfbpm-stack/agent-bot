'use client';

import { useEffect, useMemo, useState } from "react";
import type { Lang } from "../lib/i18n";
import { I18N } from "../lib/i18n";

const ORANGE = "#ff4f15";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function useLang() {
  const [lang, setLang] = useState<Lang>("de");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (saved === "en" || saved === "de") setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") localStorage.setItem("lang", lang);
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  return { lang, setLang };
}

type DiagnosisResult = "structured" | "reactive" | "chaos";

const QUESTIONS = {
  de: [
    { q: "Wenn eine Kundenanfrage eingeht — wer ist verantwortlich?",
      a: ["Eine feste Rolle","Kommt darauf an","Meist der, der es sieht","Oft niemand eindeutig"] },
    { q: "Woher weiß die nächste Person, dass sie dran ist?",
      a: ["System weist es zu","Man schreibt es dazu","Wird im Chat erwähnt","Die Person fragt nach"] },
    { q: "Wo sieht man den aktuellen Stand eines Projekts?",
      a: ["Eine zentrale Ansicht","Mehrere Tools","Chatverlauf","Menschen wissen es"] },
    { q: "Wer merkt, dass ein Angebot offen ist?",
      a: ["Automatisch","Manuell in Liste","Wenn Kunde schreibt","Oft zu spät"] },
    { q: "Wo passieren die meisten Abstimmungen?",
      a: ["Im System","Projekttool + Chat","Hauptsächlich Chat","Gespräche / Zuruf"] },
    { q: "Was passiert, wenn eine zentrale Person 2 Wochen fehlt?",
      a: ["Läuft weiter","Wird langsamer","Stockt stark","Chaos"] },
  ],
  en: [
    { q: "When a new request comes in — who owns it?",
      a: ["A defined role","Depends","Whoever sees it","No one clearly"] },
    { q: "How does the next person know it’s their turn?",
      a: ["System assigns it","Written manually","Mentioned in chat","They ask"] },
    { q: "Where can you see a project’s current status?",
      a: ["One central view","Several tools","Chat history","People know"] },
    { q: "Who notices an open offer?",
      a: ["Automatically","Manual list","When client replies","Often too late"] },
    { q: "Where does most coordination happen?",
      a: ["Inside the system","Tool + chat","Mostly chat","Verbal"] },
    { q: "What happens if a key person is gone for 2 weeks?",
      a: ["Continues","Slower","Stalls","Chaos"] },
  ],
} as const;

const RESULT_COPY: Record<Lang, Record<DiagnosisResult, { t: string; p: string }>> = {
  de: {
    structured: { t: "Strukturiert", p: "Ihr habt Tools — aber die Logik lebt noch in Köpfen. Wir würden Übergaben automatisieren und Ownership klarziehen." },
    reactive: { t: "Reaktiv", p: "Ihr arbeitet — aber koordiniert euch dauerhaft selbst. Das erzeugt Rückfragen, Meeting-Last und Verzögerung." },
    chaos: { t: "Chaos", p: "Ihr betreibt Projektarbeit über Kommunikation statt über Struktur. Deshalb hängt alles an einzelnen Personen." },
  },
  en: {
    structured: { t: "Structured", p: "You have tools — but the logic lives in people. We’d automate handoffs and clarify ownership." },
    reactive: { t: "Reactive", p: "Work happens — but constant coordination creates overhead and delays." },
    chaos: { t: "Chaos", p: "Projects run on communication instead of structure. That’s why everything depends on individuals." },
  },
};

function Topbar({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const t = I18N[lang];
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex w-[min(1100px,92vw)] items-center gap-4 py-3">
        <a href="#top" className="flex items-center gap-2 font-extrabold">
          <span className="h-3 w-3 rounded-full" style={{ background: ORANGE }} />
          <span>Agent Bot</span>
        </a>

        <nav className="ml-auto hidden items-center gap-2 md:flex">
          <a href="#problem" className="rounded-xl px-3 py-2 font-bold text-slate-600 hover:bg-slate-100 hover:text-slate-900">{t.nav_problem}</a>
          <a href="#system" className="rounded-xl px-3 py-2 font-bold text-slate-600 hover:bg-slate-100 hover:text-slate-900">{t.nav_system}</a>
          <a href="#example" className="rounded-xl px-3 py-2 font-bold text-slate-600 hover:bg-slate-100 hover:text-slate-900">{t.nav_example}</a>
          <a href="#fit" className="rounded-xl px-3 py-2 font-bold text-slate-600 hover:bg-slate-100 hover:text-slate-900">{t.nav_fit}</a>
          <a href="#analysis" className="rounded-xl px-3 py-2 font-extrabold text-white hover:brightness-95" style={{ background: ORANGE }}>{t.nav_analysis}</a>
        </nav>

        <button
          type="button"
          onClick={() => setLang(lang === "de" ? "en" : "de")}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 font-extrabold"
          aria-label="Toggle language"
        >
          {lang === "de" ? "DE" : "EN"}
        </button>
      </div>
    </header>
  );
}

function Hero({ lang }: { lang: Lang }) {
  const t = I18N[lang];
  return (
    <section id="problem" className="border-b border-slate-200 py-16">
      <div className="mx-auto grid w-[min(1100px,92vw)] grid-cols-1 gap-7 md:grid-cols-[1.15fr_.85fr]">
        <div>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.05]">{t.hero_title}</h1>
          <p className="mt-4 max-w-[60ch] text-lg font-semibold text-slate-600">{t.hero_sub}</p>

          <ul className="mt-6 space-y-2 font-bold text-slate-600">
            <li className="border-b border-dashed border-slate-200 py-2">{t.hero_m1}</li>
            <li className="border-b border-dashed border-slate-200 py-2">{t.hero_m2}</li>
            <li className="py-2">{t.hero_m3}</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            <a href="#diagnosis" className="rounded-2xl px-4 py-3 font-extrabold text-white hover:brightness-95" style={{ background: ORANGE }}>
              {t.cta_primary}
            </a>
            <a href="#example" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-extrabold hover:bg-slate-50">
              {t.cta_secondary}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 font-extrabold text-slate-600">{t.proof_1}</span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 font-extrabold text-slate-600">{t.proof_2}</span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 font-extrabold text-slate-600">{t.proof_3}</span>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(2,6,23,.08)]" aria-hidden="true">
          <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-sm font-extrabold text-white">Agent Bot</span>
          <div className="mt-5 space-y-3">
            <div className="h-3 rounded-full bg-slate-100" />
            <div className="h-3 w-2/3 rounded-full bg-slate-100" />
            <div className="h-3 rounded-full bg-slate-100" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Diagnosis({ lang }: { lang: Lang }) {
  const t = I18N[lang];
  const qs = QUESTIONS[lang];

  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Array<number | null>>(Array(qs.length).fill(null));
  const [done, setDone] = useState(false);

  useEffect(() => {
    setIdx(0);
    setAnswers(Array(qs.length).fill(null));
    setDone(false);
  }, [lang, qs.length]);

  const current = qs[idx];
  const progressPct = useMemo(() => Math.round((idx / qs.length) * 100), [idx, qs.length]);

  const canNext = answers[idx] !== null;
  const canBack = idx > 0;

  function computeResult(): DiagnosisResult {
    const sum = answers.reduce<number>((acc, v) => acc + (typeof v === "number" ? v : 0), 0);
    if (sum <= 6) return "structured";
    if (sum <= 12) return "reactive";
    return "chaos";
  }

  const result = done ? RESULT_COPY[lang][computeResult()] : null;

  return (
    <section id="diagnosis" className="border-b border-slate-200 py-16">
      <div className="mx-auto w-[min(1100px,92vw)]">
        <div className="mb-6">
          <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-extrabold">{t.diag_title}</h2>
          <p className="mt-2 max-w-[70ch] font-semibold text-slate-600">{t.diag_sub}</p>
        </div>

        <div className="grid gap-4">
          <div className="flex items-center gap-3">
            <div className="h-2 flex-1 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
              <div className="h-full" style={{ width: done ? "100%" : `${progressPct}%`, background: ORANGE }} />
            </div>
            <div className="text-sm font-extrabold text-slate-600">{Math.min(idx + 1, qs.length)} / {qs.length}</div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(2,6,23,.08)]">
            {!done ? (
              <>
                <div className="text-lg font-extrabold">{current.q}</div>

                <div className="mt-4 grid gap-2">
                  {current.a.map((label, i) => {
                    const active = answers[idx] === i;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setAnswers(prev => prev.map((v, j) => (j === idx ? i : v)))}
                        aria-pressed={active}
                        className={cx(
                          "rounded-2xl border bg-white px-4 py-3 text-left font-extrabold",
                          active ? "border-[color:var(--agent-orange)] ring-2 ring-[rgba(255,79,21,.22)]" : "border-slate-200 hover:bg-slate-50"
                        )}
                        style={{ ["--agent-orange" as any]: ORANGE }}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => canBack && setIdx(i => i - 1)}
                    disabled={!canBack}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-extrabold disabled:opacity-50"
                  >
                    {t.diag_back}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (!canNext) return;
                      if (idx < qs.length - 1) setIdx(i => i + 1);
                      else setDone(true);
                    }}
                    disabled={!canNext}
                    className="rounded-2xl px-4 py-3 font-extrabold text-white disabled:opacity-50 hover:brightness-95"
                    style={{ background: ORANGE }}
                  >
                    {t.diag_next}
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="text-lg font-extrabold">{result?.t}</div>
                <p className="mt-2 max-w-[75ch] font-semibold text-slate-600">{result?.p}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href="#analysis" className="rounded-2xl px-4 py-3 font-extrabold text-white hover:brightness-95" style={{ background: ORANGE }}>
                    {t.diag_result_cta}
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setIdx(0);
                      setAnswers(Array(qs.length).fill(null));
                      setDone(false);
                    }}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-extrabold hover:bg-slate-50"
                  >
                    {lang === "de" ? "Neu starten" : "Restart"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function System({ lang }: { lang: Lang }) {
  const t = I18N[lang];
  return (
    <section id="system" className="border-b border-slate-200 py-16">
      <div className="mx-auto w-[min(1100px,92vw)]">
        <div className="mb-6">
          <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-extrabold">{t.sys_title}</h2>
          <p className="mt-2 max-w-[75ch] font-semibold text-slate-600">{t.sys_sub}</p>
        </div>

        <div className="grid gap-3 md:grid-cols-4">
          {[
            { h: t.sys_s1_t, p: t.sys_s1_p },
            { h: t.sys_s2_t, p: t.sys_s2_p },
            { h: t.sys_s3_t, p: t.sys_s3_p },
            { h: t.sys_s4_t, p: t.sys_s4_p },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(2,6,23,.08)]">
              <div className="font-extrabold">{s.h}</div>
              <p className="mt-2 font-semibold text-slate-600">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Example({ lang }: { lang: Lang }) {
  const t = I18N[lang];
  return (
    <section id="example" className="border-b border-slate-200 py-16">
      <div className="mx-auto w-[min(1100px,92vw)]">
        <div className="mb-6">
          <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-extrabold">{t.ex_title}</h2>
          <p className="mt-2 max-w-[75ch] font-semibold text-slate-600">{t.ex_sub}</p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(2,6,23,.08)]">
            <div className="font-extrabold">{t.ex_before}</div>
            <ol className="mt-3 list-decimal space-y-2 pl-5 font-semibold text-slate-600">
              {t.ex_before_steps.map((s: string, i: number) => <li key={i}>{s}</li>)}
            </ol>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(2,6,23,.08)]">
            <div className="font-extrabold">{t.ex_after}</div>
            <ol className="mt-3 list-decimal space-y-2 pl-5 font-semibold text-slate-600">
              {t.ex_after_steps.map((s: string, i: number) => <li key={i}>{s}</li>)}
            </ol>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <div className="max-w-[75ch] font-semibold text-slate-700" dangerouslySetInnerHTML={{ __html: t.ex_insight }} />
          <a href="#analysis" className="rounded-2xl px-4 py-3 font-extrabold text-white hover:brightness-95" style={{ background: ORANGE }}>
            {t.ex_cta}
          </a>
        </div>
      </div>
    </section>
  );
}

function Outcomes({ lang }: { lang: Lang }) {
  const t = I18N[lang];
  return (
    <section className="border-b border-slate-200 bg-slate-50 py-14">
      <div className="mx-auto w-[min(1100px,92vw)]">
        <div className="text-[clamp(1.4rem,2.4vw,2rem)] font-black">{t.out_1}</div>
        <div className="mt-3 text-[clamp(1.4rem,2.4vw,2rem)] font-black">{t.out_2}</div>
        <div className="mt-3 text-[clamp(1.4rem,2.4vw,2rem)] font-black">{t.out_3}</div>
      </div>
    </section>
  );
}

function Fit({ lang }: { lang: Lang }) {
  const t = I18N[lang];
  return (
    <section id="fit" className="border-b border-slate-200 py-16">
      <div className="mx-auto w-[min(1100px,92vw)]">
        <div className="mb-6">
          <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-extrabold">{t.fit_title}</h2>
          <p className="mt-2 max-w-[75ch] font-semibold text-slate-600">{t.fit_sub}</p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(2,6,23,.08)]">
            <div className="font-extrabold">{t.fit_yes}</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 font-semibold text-slate-600">
              {t.fit_yes_list.map((s: string, i: number) => <li key={i}>{s}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(2,6,23,.08)]">
            <div className="font-extrabold">{t.fit_no}</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 font-semibold text-slate-600">
              {t.fit_no_list.map((s: string, i: number) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Value({ lang }: { lang: Lang }) {
  const t = I18N[lang];
  return (
    <section id="value" className="border-b border-slate-200 py-16">
      <div className="mx-auto w-[min(1100px,92vw)]">
        <div className="mb-6">
          <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-extrabold">{t.val_title}</h2>
          <p className="mt-2 max-w-[75ch] font-semibold text-slate-600">{t.val_sub}</p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_rgba(2,6,23,.08)]">
          <div className="font-extrabold">{t.val_deliv_t}</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 font-semibold text-slate-600">
            {t.val_deliv_list.map((s: string, i: number) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ lang, bookingHref = "#" }: { lang: Lang; bookingHref?: string }) {
  const t = I18N[lang];
  return (
    <section id="analysis" className="py-16">
      <div className="mx-auto w-[min(1100px,92vw)]">
        <h2 className="text-[clamp(1.5rem,2.4vw,2rem)] font-extrabold">{t.final_title}</h2>
        <p className="mt-2 max-w-[75ch] font-semibold text-slate-600">{t.final_sub}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <a href={bookingHref} className="rounded-2xl px-4 py-3 font-extrabold text-white hover:brightness-95" style={{ background: ORANGE }}>
            {t.final_btn}
          </a>
          <a href="#problem" className="rounded-2xl border border-slate-200 bg-white px-4 py-3 font-extrabold hover:bg-slate-50">
            {t.final_back}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer({ lang }: { lang: Lang }) {
  const t = I18N[lang];
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 py-6">
      <div className="mx-auto flex w-[min(1100px,92vw)] flex-wrap items-center justify-between gap-3">
        <div className="font-bold text-slate-700">© {year} Agent Bot</div>
        <div className="flex gap-4 font-extrabold text-slate-600">
          <a className="hover:text-slate-900" href="#">{t.footer_imprint}</a>
          <a className="hover:text-slate-900" href="#">{t.footer_privacy}</a>
          <a className="hover:text-slate-900" href="#analysis">{t.footer_contact}</a>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  const { lang, setLang } = useLang();

  return (
    <main id="top">
      <Topbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Diagnosis lang={lang} />
      <System lang={lang} />
      <Example lang={lang} />
      <Outcomes lang={lang} />
      <Fit lang={lang} />
      <Value lang={lang} />
      <FinalCTA lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
