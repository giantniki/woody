"use client";

import { heroCollageBig } from "@/lib/woody-content";
import { heroLockup } from "@/lib/content";
import { Smiley } from "@/components/icons";
import RotatingIcon from "@/components/RotatingIcon";

// Cleaned-up hero (Niki's brief): the taphuys-woody-2 "big collage" hero, but
// WITHOUT the in-hero nav / INSTAGRAM / email / bottom-left reserve button —
// the sticky V2Nav (logo + hamburger) and the floating V2BookButton take over.
// Reuses the shared .hero* classes so globals.css + theme-woody.css style it.
export default function V2Hero() {
  return (
    <header className="hero hero--collage hero--collage-big v2-hero">
      <div className="hero__collage" aria-hidden="true">
        {heroCollageBig.map((p, i) => (
          <div
            key={i}
            className={`hero__tile${p.cross ? " hero__tile--cross" : ""}`}
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

      <div className="hero__lockup">
        <Smiley className="hero__icon" />
        <span className="hero__connector">{heroLockup.connector}</span>
        <RotatingIcon className="hero__icon hero__icon--rotating" />
      </div>
    </header>
  );
}
