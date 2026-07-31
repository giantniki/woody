"use client";

import { useState, useEffect } from "react";
import { brand, locations } from "@/lib/content";
import { v2NavLinks, v2Brand } from "@/lib/woody-v2-content";

const instagram = brand.socials[0];

// Sticky nav-menu (the "menu" Niki means): fixed logo + hamburger that condenses
// on scroll, opening a full-screen burgundy overlay with big Exposure links —
// The Jane / aiyanna direction, in Woody's huisstijl.
//
// `solid` = pages without a dark hero (e.g. /woody-v2/info): the bar shows its
// cream background from the start so the logo stays readable.
export default function V2Nav({ solid = false }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // condense on scroll (cheap: only flips a boolean past a threshold)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll + close on Esc while the overlay is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const barClass = [
    "v2-nav",
    (scrolled || solid) && "v2-nav--solid",
    open && "v2-nav--open",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={barClass}>
        <a
          className="v2-nav__ig"
          href={instagram.href}
          target="_blank"
          rel="noreferrer"
        >
          {instagram.label}
        </a>
        <a className="v2-nav__logo" href="/woody-v2" onClick={() => setOpen(false)}>
          {v2Brand}
        </a>
        <button
          className={`v2-nav__burger${open ? " is-open" : ""}`}
          aria-label={open ? "Sluit menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`v2-overlay${open ? " is-open" : ""}`} aria-hidden={!open}>
        <nav className="v2-overlay__links">
          {v2NavLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${0.08 + i * 0.06}s` }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="v2-overlay__foot">
          <a className="v2-overlay__mail" href={`mailto:${brand.email}`}>
            {brand.email}
          </a>
          <ul className="v2-overlay__locs">
            {locations.map((l) => (
              <li key={l.city}>
                <strong>{l.city}</strong>
                <span>{l.address}</span>
                <span>{l.phone}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
