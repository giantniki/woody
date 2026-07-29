"use client";

import { useEffect, useRef } from "react";
import { closing, brand } from "@/lib/content";
import DancingText from "@/components/DancingText";

// Colours the banner border + text cycle through, every 300ms.
const DEFAULT_COLORS = [
  "#e63946",
  "#f4a300",
  "#2a9d8f",
  "#3d5afe",
  "#111111",
  "#c1121f",
];

export default function ClosingBanner({ dancing = false, colors = DEFAULT_COLORS }) {
  const bannerRef = useRef(null);

  useEffect(() => {
    const el = bannerRef.current;
    if (!el) return;
    let i = 0;
    const id = setInterval(() => {
      i = (i + 1) % colors.length;
      el.style.setProperty("--banner-color", colors[i]);
    }, 300);
    return () => clearInterval(id);
  }, [colors]);

  return (
    <>
      <section className="closing" id="reserveren">
        <div
          className="closing__image"
          style={{ backgroundImage: `url(${closing.image})` }}
        />
        <div className="closing__note">{closing.bannerNote}</div>
      </section>
      <section className="closing__bar" ref={bannerRef}>
        <a className="closing__banner" href={`mailto:${brand.email}`}>
          {dancing ? (
            <DancingText text={closing.bannerLabel} intensity={1.5} />
          ) : (
            closing.bannerLabel
          )}
        </a>
      </section>
      <footer className="closing__footer">
        <span>© Bar Woody. Alle rechten voorbehouden.</span>
        <a href={`mailto:${brand.email}`}>{brand.email}</a>
      </footer>
    </>
  );
}
