"use client";

import { v2Book } from "@/lib/woody-v2-content";

// Floating circular "Reserveren" button — the aiyanna "sticky unique BOOK NOW"
// idea Niki loved, restyled in Woody's yellow with curved text around the ring.
export default function V2BookButton() {
  return (
    <a className="v2-book" href={v2Book.href} aria-label={v2Book.label}>
      <svg className="v2-book__ring" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          {/* a circle path for the text to run along */}
          <path
            id="v2BookRing"
            d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
          />
        </defs>
        <text>
          <textPath href="#v2BookRing" startOffset="0">
            RESERVEREN · RESERVEREN ·&nbsp;
          </textPath>
        </text>
      </svg>
      <span className="v2-book__center" aria-hidden="true">
        →
      </span>
    </a>
  );
}
