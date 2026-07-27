"use client";

import { useEffect, useRef } from "react";
import { closing } from "@/lib/content";

// Colours the banner border + text cycle through, every 300ms.
const COLORS = ["#e63946", "#f4a300", "#2a9d8f", "#3d5afe", "#111111", "#c1121f"];

export default function ClosingBanner() {
  const bannerRef = useRef(null);

  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % COLORS.length;
      el.style.setProperty("--banner-color", COLORS[i]);
    }, 300);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="closing" id="reserveren">
      <div
        className="closing__image"
        style={{ backgroundImage: `url(${closing.image})` }}
      />
      <div className="closing__note">{closing.bannerNote}</div>
      <a className="closing__banner" ref={bannerRef} href={`mailto:info@taphuysarnhem.nl`}>
        {closing.bannerLabel}
      </a>
      <footer className="closing__footer">
        <span>© ’t Taphuys Arnhem. Alle rechten voorbehouden.</span>
        <a href="mailto:info@taphuysarnhem.nl">info@taphuysarnhem.nl</a>
      </footer>
    </section>
  );
}
