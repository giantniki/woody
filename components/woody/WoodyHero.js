"use client";

import { woodyBrand, heroCollage } from "@/lib/woody-content";

export default function WoodyHero() {
  return (
    <header className="wd-hero">
      <button className="wd-menu" aria-label="Menu">
        <span />
        <span />
        <span />
      </button>

      <div className="wd-collage" aria-hidden="true">
        {heroCollage.map((p, i) => (
          <div
            key={i}
            className="wd-tile"
            style={{
              top: p.top,
              left: p.left,
              right: p.right,
              width: p.w,
              height: p.h,
              transform: `rotate(${p.r}deg)`,
              backgroundImage: `url(${p.src})`,
            }}
          />
        ))}
      </div>

      <div className="wd-hero__center">
        <h1 className="wd-logo">
          <span className="wd-logo__top">{woodyBrand.logoTop}</span>
          <span className="wd-logo__main">{woodyBrand.logoMain}</span>
        </h1>
        <a className="wd-pill" href={woodyBrand.ctaHref}>
          {woodyBrand.cta}
        </a>
      </div>
    </header>
  );
}
