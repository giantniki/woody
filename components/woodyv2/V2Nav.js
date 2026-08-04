"use client";

import { useState, useEffect } from "react";
import { v2NavLinks, v2Brand } from "@/lib/woody-v2-content";
import V2Footer from "@/components/woodyv2/V2Footer";

// Sticky nav-menu: fixed logo (left) + hamburger (right); the hamburger opens a
// full-screen burgundy overlay with big Exposure links + the shared footer.
// `solid`   = pages without a dark hero (cream bar from the start).
// `overlay` = pages with a full-bleed photo hero (transparent bar, cream marks).
export default function V2Nav({ solid = false, overlay = false }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    overlay ? "v2-nav--overlay" : (scrolled || solid) && "v2-nav--solid",
    open && "v2-nav--open",
  ]
    .filter(Boolean)
    .join(" ");

  // Logo color switches with context: beige over the dark hero / open overlay,
  // burgundy once a cream bar is showing.
  const onCream = !open && (solid || scrolled);
  const logoSrc = onCream ? "/gfx/logo-rood.svg" : "/gfx/logo-beige.svg";

  return (
    <>
      <header className={barClass}>
        <a
          className="v2-nav__logo"
          href="/"
          aria-label={v2Brand}
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="Woody" />
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

        <V2Footer inOverlay />
      </div>
    </>
  );
}
