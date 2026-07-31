"use client";

import { heroLockup } from "@/lib/content";
import { v2HeroPhoto } from "@/lib/woody-v2-content";
import { Smiley } from "@/components/icons";
import RotatingIcon from "@/components/RotatingIcon";

// Hero with a single full-bleed background photo (like /taphuys-woody-2), a soft
// dark gradient for legibility, and the centred lockup (smiley · VAN · pig).
// The navbar (INSTAGRAM · logo · hamburger) lives in the sticky V2Nav on top.
export default function V2Hero() {
  return (
    <header className="hero v2-hero">
      <div
        className="v2-hero__bg"
        style={{ backgroundImage: `url(${v2HeroPhoto})` }}
        aria-hidden="true"
      />
      <div className="v2-hero__overlay" aria-hidden="true" />

      <div className="hero__lockup">
        <Smiley className="hero__icon" />
        <span className="hero__connector">{heroLockup.connector}</span>
        <RotatingIcon className="hero__icon hero__icon--rotating" />
      </div>
    </header>
  );
}
