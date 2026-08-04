"use client";

import { usePathname } from "next/navigation";
import { v2Book } from "@/lib/woody-v2-content";

// Sticky "Reserveren" button (aiyanna-inspired): a yellow card-suit shape in the
// bottom-right corner, tilted, with BOEK TAFEL. The suit changes (morphs) per
// page. The shape is the PNG used as a mask, filled with Woody yellow.
const SUITS = ["klaveren", "harten", "ruiten", "schoppen"];

export default function V2BookButton() {
  const pathname = usePathname() || "/";
  let h = 0;
  for (let i = 0; i < pathname.length; i++) {
    h = (h * 31 + pathname.charCodeAt(i)) >>> 0;
  }
  const suit = SUITS[h % SUITS.length];
  const maskUrl = `url(/gfx/${suit}-beige.png)`;

  return (
    <a className="v2-book" href={v2Book.href} aria-label={v2Book.label}>
      <span
        key={suit}
        className="v2-book__shape"
        style={{ WebkitMaskImage: maskUrl, maskImage: maskUrl }}
        aria-hidden="true"
      />
      <span className="v2-book__label">
        Boek
        <br />
        tafel
      </span>
    </a>
  );
}
