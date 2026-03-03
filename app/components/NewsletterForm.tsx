"use client";

import { useState } from "react";

type State = "idle" | "loading" | "success" | "error";

export default function NewsletterForm({ compact = false }: { compact?: boolean }) {
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
        body: JSON.stringify({ email }),
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
      <div className="flex flex-col items-center gap-2 py-4 text-center">
        <span className="text-3xl">🎉</span>
        <p className="font-semibold text-[#e8e8f0]">Du bist dabei!</p>
        <p className="text-sm text-[#9ca3af]">
          Check dein Postfach — du erhältst in Kürze eine Bestätigungs-E-Mail.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={`flex w-full gap-2 ${
          compact ? "flex-row" : "flex-col sm:flex-row"
        }`}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="deine@email.de"
          required
          disabled={state === "loading"}
          className="
            flex-1 min-w-0 rounded-lg border border-[#2d2d44] bg-[#13131f]
            px-4 py-3 text-sm text-[#e8e8f0] placeholder-[#4b5563]
            outline-none transition-colors
            focus:border-[#a78bfa]
            disabled:opacity-50
          "
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="
            rounded-lg bg-[#a78bfa] px-6 py-3 text-sm font-bold text-[#0a0a0f]
            transition-all hover:bg-[#c4b5fd] hover:-translate-y-0.5
            active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed
            whitespace-nowrap
          "
        >
          {state === "loading" ? (
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Wird eingetragen…
            </span>
          ) : (
            "Kostenlos abonnieren"
          )}
        </button>
      </div>

      {state === "error" && (
        <p className="mt-2 text-xs text-red-400">{errorMsg}</p>
      )}

      <p className="mt-2 text-xs text-[#4b5563]">
        Kein Spam. Kein Tracking. Jederzeit abbestellbar.
      </p>
    </form>
  );
}
