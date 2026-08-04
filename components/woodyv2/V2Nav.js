"use client";

import { useState, useEffect } from "react";
import { v2NavLinks, v2Brand } from "@/lib/woody-v2-content";
import V2Footer from "@/components/woodyv2/V2Footer";

// Sticky nav-menu: fixed logo + hamburger that condenses on scroll,
// opening a full-screen burgundy overlay with big Exposure links.
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

  return (
    <>
      <header className={barClass}>
        <a className="v2-nav__logo" href="/woody-v2" onClick={() => setOpen(false)}>
          {v2Brand}
        </a>

        <div className="v2-nav__right">
          <a className="v2-nav__reserveren-btn" href="/woody-v2/reserveren">
            Reserveren
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
        </div>
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

        <V2Footer />
      </div>
    </>
  );
}
