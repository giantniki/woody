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
        <div className="visit__cities">
          {locations.map((l) => (
            <div className="visit__city" key={l.city}>
              <h3 className="visit__place">{l.city}</h3>
              <p className="visit__line">{l.address}</p>
              <p className="visit__line">{l.phone}</p>
              <a
                className="visit__route"
                href={l.routeHref}
                target="_blank"
                rel="noreferrer"
              >
                Route
              </a>
            </div>
          ))}
        </div>

        <div className="visit__open">
          <p className="visit__open-label">{visit.opening.label}</p>
          <p className="visit__open-line">{visit.opening.line}</p>
        </div>
      </div>
    </section>
  );
}
