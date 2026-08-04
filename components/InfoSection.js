"use client";

import { intro, steps, visit, locations } from "@/lib/content";
import Woord from "@/components/woodyv2/Woord";

export default function InfoSection() {
  return (
    <section className="info" id="info">
      <h2 className="info__intro">
        <Woord
          name="destadsherberg"
          color="rood"
          alt={intro.heading}
          className="info__intro-img"
        />
      </h2>
      <p className="info__intro-sub">{intro.body}</p>

      <div className="steps">
        <h2 className="steps__title">
          <Woord
            name="werkenbijwoody"
            color="rood"
            alt={steps.title}
            className="steps__title-img"
          />
        </h2>
        <p className="steps__body">{steps.body}</p>
        <a className="steps__cta" href="#solliciteer">{steps.cta}</a>
      </div>

      <div className="visit">
        <h2 className="visit__title">
          <Woord
            name="hieriswoody"
            color="rood"
            alt={visit.title}
            className="visit__title-img"
          />
        </h2>
        <div className="visit__grid">
          <div className="visit__col">
            <h3 className="visit__place">{visit.primary.name}</h3>
            <p className="visit__label">ADRES &amp; TELEFOON</p>
            <p className="visit__line">{visit.primary.address}</p>
            <p className="visit__line">Tel — {visit.primary.phone}</p>
            <p className="visit__links">
              <a href="https://maps.google.com/?q=Jansplein+56+Arnhem" target="_blank" rel="noreferrer">
                ROUTE
              </a>{" "}
              of{" "}
              <a href="#reserveren">RESERVEREN</a>
            </p>
          </div>

          <div className="visit__col">
            {visit.hours.map((h) => (
              <div className="visit__hours" key={h.days}>
                <div className="visit__times">
                  <span>{h.open}</span>
                  <span className="dash">—</span>
                  <span>{h.close}</span>
                </div>
                <p className="visit__days">{h.days}</p>
              </div>
            ))}
          </div>
        </div>

        <ul className="visit__locations">
          {locations.map((l) => (
            <li key={l.city} className={l.current ? "is-current" : ""}>
              <strong>{l.city}</strong>
              <span>{l.address}</span>
              <span>{l.phone}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
