export type Lang = 'de' | 'en';

export const I18N = {
  de: {
    nav_problem:"Problem",
    nav_system:"System",
    nav_example:"Beispiel",
    nav_fit:"Für wen",
    nav_analysis:"Analyse",

    hero_title:"Eure Projekte hängen nicht an der Kreativität — sie hängen an Übergaben, Feedback und 'wer ist dran?'",
    hero_sub:"Wir bauen euch ein Delivery-System für Agenturen: Briefings, Aufgaben, Feedbackrunden und Freigaben laufen automatisch zur richtigen Rolle — ohne Slack-Ping-Pong.",

    hero_m1:"„Wo ist das Feedback vom Kunden?“",
    hero_m2:"„Ich dachte PM hat’s geschickt.“",
    hero_m3:"„Welche Version ist final?“",

    cta_primary:"Delivery-Check starten",
    cta_secondary:"Beispiel ansehen",

    proof_1:"Weniger Nachfragen",
    proof_2:"Klare Freigaben",
    proof_3:"Status jederzeit sichtbar",

    diag_title:"Wo verliert eure Agentur Projekte an Zeit?",
    diag_sub:"6 kurze Fragen — danach seht ihr, ob euer Engpass Kreativität oder Koordination ist.",

    diag_back:"Zurück",
    diag_next:"Weiter",
    diag_result_cta:"Delivery-Audit buchen",

    sys_title:"Wir definieren, wie Projekte sich bewegen.",
    sys_sub:"Nicht Tools organisieren Agenturen — Zustände tun es. Wir modellieren Briefing → Produktion → Review → Freigabe → Launch.",

    sys_s1_t:"1) Zustände",
    sys_s1_p:"Jede Aufgabe ist eindeutig: Briefing, In Arbeit, Review, Kundenfeedback, Freigabe.",

    sys_s2_t:"2) Übergänge",
    sys_s2_p:"Wenn Feedback kommt → startet die nächste Aktion automatisch.",

    sys_s3_t:"3) Verantwortliche",
    sys_s3_p:"Jeder Zustand gehört einer Rolle, nicht einer Person.",

    sys_s4_t:"4) Aktionen",
    sys_s4_p:"Reminder, Follow-ups und Übergaben passieren ohne Nachfragen.",

    ex_title:"Typischer Agentur-Workflow — vorher vs. nachher",
    ex_sub:"Gleiche Arbeit. Weniger Chaos.",

    ex_before:"Vorher",
    ex_after:"Nachher",

    ex_before_steps:[
      "Briefing kommt rein — niemand owned es klar",
      "Assets fehlen → Rückfragen im Chat",
      "Kundenfeedback verteilt sich über Mails & Voice",
      "Versionen werden manuell verglichen",
      "Freigabe unklar → Deadline rutscht",
      "PM wird zum Feuerwehrmann"
    ],

    ex_after_steps:[
      "Briefing erzeugt automatisch Projekt + Owner",
      "Fehlende Infos werden automatisch angefordert",
      "Feedback landet strukturiert an einem Ort",
      "Review-Zustände steuern die nächste Rolle",
      "Offene Punkte triggern Follow-ups",
      "Launch passiert standardisiert"
    ],

    ex_insight:"<strong>Die Arbeit bleibt kreativ.</strong> Nur der Ablauf wird berechenbar.",
    ex_cta:"Eigenen Workflow prüfen",

    out_1:"Niemand fragt nach Status.",
    out_2:"Feedback geht nicht mehr verloren.",
    out_3:"Deadlines hängen nicht an Einzelpersonen.",

    fit_title:"Dieses System passt nicht für jede Agentur",
    fit_sub:"Wenn ihr euch erkennt, lohnt sich das Gespräch.",

    fit_yes:"Passt gut",
    fit_no:"Passt eher nicht",

    fit_yes_list:[
      "5+ Personen arbeiten an Projekten",
      "PM/Account koordiniert zu viel",
      "Feedback ist Haupt-Engpass",
      "Freigaben verzögern Deadlines",
      "Abhängigkeit von einzelnen Seniors",
      "Kunden fragen regelmäßig nach Status"
    ],

    fit_no_list:[
      "Solo-Freelancer",
      "Nur einfache Retainer-Tasks",
      "Ihr sucht nur ein neues Tool",
      "Problem ist fehlende Auslastung"
    ],

    val_title:"Ihr ersetzt kein Tool — ihr ersetzt Koordinationsarbeit.",
    val_sub:"Typisch vergleichbar mit einem Monatsgehalt — spart aber dauerhaft Abstimmung und Stress.",

    val_deliv_t:"Ergebnis nach Umsetzung",
    val_deliv_list:[
      "Klare Zustände im Projekt",
      "Automatische Übergaben",
      "Zentrale Statusübersicht",
      "Dokumentierter Delivery-Workflow"
    ],

    final_title:"Im Delivery-Check sehen wir in 20 Minuten, wo eure Projekte stecken.",
    final_sub:"Wenn Struktur nicht der Engpass ist, sagen wir es euch ehrlich.",

    final_btn:"Delivery-Check buchen",
    final_back:"Zurück nach oben",

    footer_imprint:"Impressum",
    footer_privacy:"Datenschutz",
    footer_contact:"Kontakt"
  },

  en: {
    nav_problem:"Problem",
    nav_system:"System",
    nav_example:"Example",
    nav_fit:"Fit",
    nav_analysis:"Analysis",

    hero_title:"Your projects don’t stall because of creativity — they stall because of handoffs, feedback and unclear ownership.",
    hero_sub:"We build a delivery system for agencies: briefs, tasks, review rounds and approvals move automatically to the right role — without Slack ping-pong.",

    hero_m1:"Where’s the client feedback?",
    hero_m2:"I thought PM sent it.",
    hero_m3:"Which version is final?",

    cta_primary:"Start delivery check",
    cta_secondary:"See example",

    proof_1:"Fewer follow-ups",
    proof_2:"Clear approvals",
    proof_3:"Visible status",

    diag_title:"Where does your agency lose time?",
    diag_sub:"6 quick questions to see whether the bottleneck is creativity or coordination.",

    diag_back:"Back",
    diag_next:"Next",
    diag_result_cta:"Book delivery audit",

    sys_title:"We define how projects move.",
    sys_sub:"Agencies are not organized by tools — but by states: brief → production → review → approval → launch.",

    sys_s1_t:"States",
    sys_s1_p:"Every task has one clear state.",

    sys_s2_t:"Transitions",
    sys_s2_p:"Feedback triggers the next step automatically.",

    sys_s3_t:"Ownership",
    sys_s3_p:"States belong to roles, not people.",

    sys_s4_t:"Actions",
    sys_s4_p:"Reminders and handoffs happen automatically.",

    ex_title:"Typical agency workflow — before vs after",
    ex_sub:"Same work. Less chaos.",

    ex_before:"Before",
    ex_after:"After",

    ex_before_steps:[
      "Brief arrives without ownership",
      "Missing assets cause chat loops",
      "Feedback scattered across channels",
      "Versions manually compared",
      "Approval unclear → deadline slips",
      "PM becomes firefighter"
    ],

    ex_after_steps:[
      "Brief creates project + owner",
      "Missing info requested automatically",
      "Feedback centralized",
      "Review states move work forward",
      "Follow-ups triggered",
      "Launch standardized"
    ],

    ex_insight:"<strong>Creativity stays free.</strong> The workflow becomes predictable.",
    ex_cta:"Check my workflow",

    out_1:"No status chasing.",
    out_2:"Feedback never lost.",
    out_3:"Deadlines don’t depend on individuals.",

    fit_title:"This system isn’t for every agency",
    fit_sub:"If you recognize yourself, the call makes sense.",

    fit_yes:"Good fit",
    fit_no:"Not a fit",

    fit_yes_list:[
      "5+ people working on projects",
      "PM coordinates too much",
      "Feedback is main bottleneck",
      "Approvals delay deadlines",
      "Dependence on senior individuals",
      "Clients ask for status"
    ],

    fit_no_list:[
      "Solo freelancer",
      "Simple retainer work only",
      "Looking only for a new tool",
      "Main problem is lack of leads"
    ],

    val_title:"You’re not buying a tool — you’re removing coordination.",
    val_sub:"Comparable to a monthly salary — but permanently reduces overhead.",

    val_deliv_t:"After implementation",
    val_deliv_list:[
      "Clear project states",
      "Automatic handoffs",
      "Central status view",
      "Documented workflow"
    ],

    final_title:"In 20 minutes we find where your projects get stuck.",
    final_sub:"If structure isn’t the bottleneck, we’ll tell you honestly.",

    final_btn:"Book delivery check",
    final_back:"Back to top",

    footer_imprint:"Imprint",
    footer_privacy:"Privacy",
    footer_contact:"Contact"
  }
} as const;