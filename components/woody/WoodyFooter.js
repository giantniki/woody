"use client";

import { woodyBrand, woodyFooter } from "@/lib/woody-content";

export default function WoodyFooter() {
  const { werken, openingstijden, locations } = woodyFooter;
  return (
    <footer className="wd-footer" id="reserveren">
      <div className="wd-footer__grid">
        <div className="wd-footer__left">
          <h2 className="wd-heading wd-heading--cream">{werken.heading}</h2>
          <p className="wd-serif wd-serif--cream">{werken.body}</p>
          <a className="wd-pill" href={werken.ctaHref}>
            {werken.cta}
          </a>

          <h2 className="wd-heading wd-heading--cream wd-footer__hours-title">
            {openingstijden.heading}
          </h2>
          <p className="wd-serif wd-serif--cream">{openingstijden.body}</p>
        </div>

        <ul className="wd-footer__locations">
          {locations.map((l) => (
            <li key={l.city}>
              <strong>{l.city}</strong>
              <span>{l.address}</span>
              <span>{l.phone}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="wd-footer__logo">
        <span className="wd-logo__top">{woodyBrand.logoTop}</span>
        <span className="wd-logo__main">{woodyBrand.logoMain}</span>
      </div>
    </footer>
  );
}
