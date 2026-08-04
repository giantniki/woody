"use client";

// Reusable editorial page for /woody-v2 (Over · Menu · Team · Lokaal ·
// Groepen · Reserveren): Driven by lib/woody-v2-pages.js data.

function Paras({ text }) {
  return String(text)
    .split("\n\n")
    .map((p, i) => <p key={i}>{p}</p>);
}

const LAYOUT_BY_SLUG = {
  over: "ketelhuis-info",
  menu: "ketelhuis-vacatures",
  werken: "float-two",
  lokaal: "ketelhuis-niksnieuws",
  groepen: "ketelhuis-info",
  reserveren: "ketelhuis-vacatures",
};

export default function EditorialPage({ data }) {
  const layout = LAYOUT_BY_SLUG[data.slug] || data.layout || "ketelhuis-info";
  const isMenu = data.slug === "menu";

  return (
    <section className="v2-ed">
      <div className="v2-ed__text">
        <h1 className="v2-ed__title">{data.title}</h1>
        {data.subtitle && <p className="v2-ed__subtitle">{data.subtitle}</p>}

        {data.intro && (
          <div className="v2-ed__intro">
            <Paras text={data.intro} />
          </div>
        )}

        {isMenu && data.cta && (
          <div className="v2-ed__top-cta">
            <a className="v2-ed__cta" href={data.cta.href}>
              {data.cta.label}
            </a>
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

            {s.cta && (
              <a className="v2-ed__section-cta" href={s.cta.href}>
                {s.cta.label} →
              </a>
            )}
          </div>
        ))}

        {data.closing && <p className="v2-ed__closing">{data.closing}</p>}

        {!isMenu && data.cta && (
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
            style={{
              backgroundImage: `url(${p.src})`,
              ...(p.ar ? { aspectRatio: p.ar } : {}),
            }}
          />
        ))}
      </div>
    </section>
  );
}
