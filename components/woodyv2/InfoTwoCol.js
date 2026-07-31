"use client";

import { visit, locations, brand } from "@/lib/content";
import { woodyIntro } from "@/lib/woody-content";

// Two-column info page (answers Niki's "would that be weird to change to a two
// column setup?"). Left = practical (address / hours / contact / route /
// reserve), right = story + the four locations. Collapses to one column on
// mobile. Reuses existing content; Woody huisstijl via .theme-woody.
export default function InfoTwoCol() {
  return (
    <section className="v2-info" id="info">
      <h1 className="v2-info__title">info</h1>

      <div className="v2-info__grid">
        {/* ---- left: practical ---- */}
        <div className="v2-info__col">
          <h2>Bezoek ons</h2>
          <p className="v2-info__place">{visit.primary.name}</p>

          <p className="v2-info__label">Adres</p>
          <p>{visit.primary.address}</p>

          <p className="v2-info__label">Openingstijden</p>
          {visit.hours.map((h) => (
            <p key={h.days} className="v2-info__hours">
              <span>{h.days}</span>
              <span>
                {h.open}&ndash;{h.close}
              </span>
            </p>
          ))}

          <p className="v2-info__label">Contact</p>
          <p>Tel — {visit.primary.phone}</p>
          <p>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
          </p>

          <p className="v2-info__actions">
            <a
              href="https://maps.google.com/?q=Jansplein+56+Arnhem"
              target="_blank"
              rel="noreferrer"
            >
              Route
            </a>
            <a className="v2-info__cta" href="/woody-v2#reserveren">
              Reserveren
            </a>
          </p>
        </div>

        {/* ---- right: story + locations ---- */}
        <div className="v2-info__col">
          <h2>{woodyIntro.heading.replace("\n", " ")}</h2>
          <p className="v2-info__body">{woodyIntro.body}</p>

          <p className="v2-info__label">Ook in</p>
          <ul className="v2-info__locs">
            {locations.map((l) => (
              <li key={l.city} className={l.current ? "is-current" : ""}>
                <strong>{l.city}</strong>
                <span>{l.address}</span>
                <span>{l.phone}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
