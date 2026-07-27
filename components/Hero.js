"use client";

import { brand, heroLockup } from "@/lib/content";
import { Smiley } from "@/components/icons";
import RotatingIcon from "@/components/RotatingIcon";

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero__bg" />
      <div className="hero__overlay" />

      <nav className="hero__nav">
        <div className="hero__socials">
          {brand.socials.map((s, i) => (
            <span key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
              {i < brand.socials.length - 1 && <span className="sep">/</span>}
            </span>
          ))}
        </div>
        <div className="hero__logo">{brand.name}</div>
        <a className="hero__contact" href={`mailto:${brand.email}`}>
          CONTACT
        </a>
      </nav>

      <div className="hero__lockup">
        <Smiley className="hero__icon" />
        <span className="hero__connector">{heroLockup.connector}</span>
        <RotatingIcon className="hero__icon hero__icon--rotating" />
      </div>

      <a className="hero__reserve" href="#reserveren">
        {brand.reserveLabel}
      </a>
      <a className="hero__email" href={`mailto:${brand.email}`}>
        {brand.email.toUpperCase()}
      </a>
    </header>
  );
}
