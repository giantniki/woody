import { dateLong, moreEvents } from "@/lib/woody-agenda";

function Paras({ text }) {
  return String(text)
    .split("\n\n")
    .map((p, i) => <p key={i}>{p}</p>);
}

// Event detail page (013-style, Woody huisstijl): photo hero + two-column body
// (description | ticket & practical sidebar) + a "meer voor jou" block.
export default function EventDetail({ event }) {
  const sold = event.tag === "uitverkocht";
  const related = moreEvents(event.slug, 3);

  return (
    <>
      <header className="ev-hero">
        <div
          className="ev-hero__img"
          style={{ backgroundImage: `url(${event.image})` }}
          aria-hidden="true"
        />
        <div className="ev-hero__overlay" aria-hidden="true" />
        <div className="ev-hero__head">
          <span className="ev-hero__date">{dateLong(event.date)}</span>
          <h1 className="ev-hero__title">{event.title}</h1>
        </div>
      </header>

      <div className="ev-body">
        <div className="ev-main">
          {event.subtitle && <p className="ev-lead">{event.subtitle}</p>}
          <div className="ev-desc">
            <Paras text={event.description} />
          </div>
        </div>

        <aside className="ev-aside">
          <a
            className={`ev-cta${sold ? " is-sold" : ""}`}
            href={sold ? "#" : "/woody-v2#reserveren"}
          >
            {sold ? "Uitverkocht" : "Tickets"}
          </a>

          <dl className="ev-info">
            <div>
              <dt>Entree</dt>
              <dd>{event.price}</dd>
            </div>
            <div>
              <dt>Datum</dt>
              <dd>{dateLong(event.date)}</dd>
            </div>
            <div>
              <dt>Zaal</dt>
              <dd>{event.zaal}</dd>
            </div>
          </dl>

          {event.times?.length > 0 && (
            <div className="ev-times">
              <span className="ev-times__label">Tijden</span>
              <ul>
                {event.times.map((t, i) => (
                  <li key={i}>
                    <span className="ev-times__time">{t.time}</span>
                    <span className="ev-times__what">{t.label}</span>
                  </li>
                ))}
              </ul>
              <p className="ev-times__note">Tijdschema onder voorbehoud.</p>
            </div>
          )}
        </aside>
      </div>

      <section className="ev-more">
        <h2 className="ev-more__title">meer voor jou</h2>
        <ul className="ev-more__list">
          {related.map((ev) => (
            <li key={ev.slug} className="ev-more__row">
              <a href={`/woody-v2/agenda/${ev.slug}`}>
                <span className="ev-more__date">{ev.date}</span>
                <span className="ev-more__body">
                  {ev.tag && <span className="ev-more__tag">{ev.tag}</span>}
                  <span className="ev-more__name">{ev.title}</span>
                  {ev.subtitle && (
                    <span className="ev-more__sub">{ev.subtitle}</span>
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <a className="ev-more__cta" href="/woody-v2/agenda">
          Bekijk programma
        </a>
      </section>
    </>
  );
}
