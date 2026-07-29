"use client";

import { woodyIntro, woodySections } from "@/lib/woody-content";
import DancingText from "@/components/DancingText";

function multiline(text) {
  return text.split("\n").map((line, i) => <span key={i}>{line}</span>);
}

export default function WoodySections() {
  return (
    <div className="wd-body">
      {/* Intro — "De stadsherberg van nu" */}
      <section className="wd-intro">
        <div
          className="wd-intro__photo"
          style={{ backgroundImage: `url(${woodyIntro.photo})` }}
        />
        <div className="wd-intro__text">
          <h2 className="wd-heading">{multiline(woodyIntro.heading)}</h2>
          <p className="wd-serif">{woodyIntro.body}</p>
        </div>
      </section>

      {/* Big word sections */}
      {woodySections.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className={`wd-word-section wd-word-section--${s.align} ${
            s.photo ? `has-photo has-photo--${s.photo.side}` : ""
          }`}
        >
          <h2 className="wd-word">
            <DancingText text={s.word} />
          </h2>

          {s.photo && (
            <div
              className="wd-word__photo"
              style={{ backgroundImage: `url(${s.photo.src})` }}
            />
          )}

          <p className="wd-serif wd-word__body">{s.body}</p>
        </section>
      ))}
    </div>
  );
}
