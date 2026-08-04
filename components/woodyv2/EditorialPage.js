"use client";

// Reusable editorial page for /woody-v2 (Over · Menu · Werken · Lokaal ·
// Groepen): a text column on the left (title + intro + sections + CTA) and a
// cluster of scattered photos on the right. Driven by lib/woody-v2-pages.js.

function Paras({ text }) {
  return String(text)
    .split("\n\n")
    .map((p, i) => <p key={i}>{p}</p>);
}

// One distinct photo composition per page (right half). Driven by slug so the
// Dutch copy in lib/woody-v2-pages.js stays untouched.
//   cover      → over    · 1 foto flush full-bleed
//   peek-down  → menu    · 2 flush, la 2ª asoma cortada por abajo
//   float-two  → werken  · 2 flotando con aire cream
//   float-one  → lokaal  · 1 flotando con aire cream
//   peek-up    → groepen · 2 flush, la 2ª asoma cortada por arriba
const LAYOUT_BY_SLUG = {
  over: "cover",
  menu: "peek-down",
  werken: "float-two",
  lokaal: "float-one",
  groepen: "peek-up",
};

export default function EditorialPage({ data }) {
  const layout = LAYOUT_BY_SLUG[data.slug] || data.layout || "cover";
  return (
    <section className="v2-ed">
      <div className="v2-ed__text">
        <h1 className="v2-ed__title">{data.title}</h1>

        {data.intro && (
          <div className="v2-ed__intro">
            <Paras text={data.intro} />
          </div>
        )}

        {data.sections?.map((s, i) => (
          <div className="v2-ed__section" key={i}>
            <h2 className="v2-ed__heading">{s.heading}</h2>

            {s.stat && (
              <p className="v2-ed__stat">
                <span className="v2-ed__stat-num">{s.stat}</span>
                {s.statLabel && (
                  <span className="v2-ed__stat-label">{s.statLabel}</span>
                )}
              </p>
            )}

            {s.list && (
              <ul className="v2-ed__list">
                {s.list.map((li, j) => (
                  <li key={j}>{li}</li>
                ))}
              </ul>
            )}

            {s.body && (
              <div className="v2-ed__body">
                <Paras text={s.body} />
              </div>
            )}
          </div>
        ))}

        {data.closing && <p className="v2-ed__closing">{data.closing}</p>}

        {data.cta && (
          <a className="v2-ed__cta" href={data.cta.href}>
            {data.cta.label}
          </a>
        )}
      </div>

      <div
        className={`v2-ed__photos v2-ed__photos--${layout}`}
        aria-hidden="true"
      >
        {data.photos?.map((p, i) => (
          <div
            key={i}
            className="v2-ed__tile"
            style={{ backgroundImage: `url(${p.src})` }}
          />
        ))}
      </div>
    </section>
  );
}
