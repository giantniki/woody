"use client";

import { useState } from "react";
import { v2Footer } from "@/lib/woody-v2-content";

function Icon({ name }) {
  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
        <circle cx="12" cy="12" r="4.4" />
        <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (name === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 1.9a8.1 8.1 0 1 1-4.2 15l-.3-.2-3 .8.8-2.9-.2-.3A8.1 8.1 0 0 1 12 3.9zM8.9 7.4c-.2 0-.5 0-.7.4-.3.4-1 .9-1 2.2s1 2.5 1.1 2.7c.1.2 1.9 3 4.6 4 2.3.9 2.7.7 3.2.6.5 0 1.6-.6 1.8-1.3.2-.6.2-1.2.1-1.3 0-.1-.2-.2-.5-.3l-1.6-.8c-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-.8-.3-1.5-.5-2.3-1.5-.6-.7-1-1.5-1.2-1.8-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5l-.7-1.8c-.2-.4-.4-.4-.5-.4z" />
      </svg>
    );
  }
  return null;
}

// Shared footer — bottom of every page and inside the menu overlay.
// `inOverlay` drops the background (the overlay is already burgundy) and pins it
// to the bottom of the overlay.
export default function V2Footer({ inOverlay = false }) {
  const [lang, setLang] = useState("nl");
  const { contact, openingstijden, adres, socials } = v2Footer;

  return (
    <footer className={`v2-footer${inOverlay ? " v2-footer--overlay" : ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="v2-footer__mark" src="/gfx/beeldmerk1-beige.svg" alt="Woody" />
      <div className="v2-footer__lang">
        <button
          className={lang === "nl" ? "is-on" : ""}
          onClick={() => setLang("nl")}
        >
          NL
        </button>
        <span>/</span>
        <button
          className={lang === "eng" ? "is-on" : ""}
          onClick={() => setLang("eng")}
        >
          ENG
        </button>
      </div>

      <div className="v2-footer__cols">
        <div className="v2-footer__col">
          <span className="v2-footer__label">Contact</span>
          <a href={`tel:${contact.phone.replace(/[^+\d]/g, "")}`}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>

        <div className="v2-footer__col">
          <span className="v2-footer__label">Openingstijden</span>
          <p>{openingstijden}</p>
        </div>

        <div className="v2-footer__col">
          <span className="v2-footer__label">Adres</span>
          <p>{adres.line}</p>
          <a href={adres.routeHref} target="_blank" rel="noreferrer">
            Route
          </a>
        </div>

        <div className="v2-footer__socials">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
              <Icon name={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
