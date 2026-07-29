"use client";

import { useState } from "react";
import { brand, heroLockup } from "@/lib/content";
import { heroCollage, heroCollageBig } from "@/lib/woody-content";
import { Smiley } from "@/components/icons";
import RotatingIcon from "@/components/RotatingIcon";

// background: "photo" (landing 1) | "collage" (burgundy + scattered photos, landing 2/3)
// collageVariant: "default" (8 scattered tiles) | "big" (fewer/larger tiles, one
//                 bleeds down into the next section — see heroCollageBig).
export default function Hero({ background = "photo", collageVariant = "default", logoVariant = "default", heroImage = null }) {
  const isBig = background === "collage" && collageVariant === "big";
  const collage = isBig ? heroCollageBig : heroCollage;
  const [menuOpen, setMenuOpen] = useState(false);
  const isWoodyLogo = logoVariant === "woody";

  return (
    <header
      className={`hero${background === "collage" ? ` hero--collage${isBig ? " hero--collage-big" : ""}` : ""}`}
    >
      {heroImage ? (
        <div className="hero__image" style={{ backgroundImage: `url(${heroImage})` }} />
      ) : background === "collage" ? (
        <div className="hero__collage" aria-hidden="true">
          {collage.map((p, i) => (
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
      ) : (
        <>
          <div className="hero__bg" />
          <div className="hero__overlay" />
        </>
      )}

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
        <div className="hero__logo">{isWoodyLogo ? "woody" : brand.name}</div>
        <button
          className={`hero__hamburger${menuOpen ? " is-open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {menuOpen && (
        <div className="hero__menu">
          <a href={`mailto:${brand.email}`}>{brand.email.toUpperCase()}</a>
          <a href="#reserveren">RESERVEREN</a>
        </div>
      )}

      <div className="hero__lockup">
        {isWoodyLogo ? (
          <h1 className="hero__wd-logo">
            <span className="hero__wd-logo__top">bar</span>
            <span className="hero__wd-logo__main">woody</span>
          </h1>
        ) : (
          <>
            <Smiley className="hero__icon" />
            <span className="hero__connector">{heroLockup.connector}</span>
            <RotatingIcon className="hero__icon hero__icon--rotating" />
          </>
        )}
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
