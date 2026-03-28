"use client";

import { useState } from "react";

type State = "idle" | "loading" | "success" | "error";

export default function CheatSheetForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          utm_medium: "cheatsheet_download",
        }),
      });
      const data = await res.json();

      if (!res.ok || data.error) {
        setErrorMsg(data.error || "Etwas ist schiefgelaufen.");
        setState("error");
      } else {
        setState("success");
      }
    } catch {
      setErrorMsg("Serverfehler. Bitte versuche es erneut.");
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="border-2 border-[#FF4F15] bg-[#FF4F15]/5 p-8 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-2xl font-black uppercase mb-2">
          Dein Cheat Sheet ist ready.
        </h3>
        <p className="text-sm text-black/60 mb-6">
          Check dein Postfach für die Bestätigung. Hier ist dein Download:
        </p>
        <a
          href="/macOS-Dev-Docker-AI-Ultimate-CheatSheet.pdf"
          download
          className="inline-block bg-[#182332] text-white px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] hover:bg-[#FF4F15] transition-colors"
        >
          ↓ PDF herunterladen (9 Seiten)
        </a>
        <p className="mt-4 text-xs text-black/40">
          Kein Spam. Jederzeit abbestellbar.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="text-sm text-black/60 mb-4">
        Trag deine E-Mail ein und hol dir das PDF — kostenlos.
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="deine@email.de"
          required
          disabled={state === "loading"}
          className="
            flex-1 min-w-0 border-2 border-black/20 bg-white
            px-4 py-3.5 text-sm text-black placeholder-black/30
            outline-none transition-colors
            focus:border-[#FF4F15]
            disabled:opacity-50
          "
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        <button
          type="button"
          onClick={handleSubmit}
          disabled={state === "loading" || !email}
          className="
            bg-[#FF4F15] px-6 py-3.5 text-sm font-bold text-white uppercase tracking-[0.1em]
            transition-all hover:bg-[#182332]
            disabled:opacity-40 disabled:cursor-not-allowed
            whitespace-nowrap
          "
        >
          {state === "loading" ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Wird geladen…
            </span>
          ) : (
            "Kostenlos holen"
          )}
        </button>
      </div>

      {state === "error" && (
        <p className="mt-2 text-xs text-red-600 font-medium">{errorMsg}</p>
      )}

      <p className="mt-3 text-xs text-black/40">
        Kein Spam. Kein Tracking. Jederzeit abbestellbar.
      </p>
    </div>
  );
}
