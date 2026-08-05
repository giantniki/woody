import { reserveren } from "@/lib/woody-reserveren";
import Woord from "@/components/woodyv2/Woord";

function Paras({ text }) {
  return String(text)
    .split("\n\n")
    .map((p, i) => <p key={i}>{p}</p>);
}

// Reserveren page — reuses the editorial (.v2-ed) layout: text column on the
// left (title + intro + a block per reservation type, each with its own CTA)
// and a photo cluster on the right.
export default function Reserveren() {
  const r = reserveren;
  return (
    <section className="v2-ed v2-ed--reserveren">
      <div className="v2-ed__text">
        <Woord
          name="reserveren"
          color="rood"
          alt="Reserveren"
          className="v2-ed__title-img"
        />

        <div className="v2-ed__intro">
          <Paras text={r.intro} />
        </div>

        {r.blocks.map((b, i) => (
          <div className="v2-ed__section" key={i}>
            <h2 className="v2-ed__heading">{b.heading}</h2>
            <div className="v2-ed__body">
              <Paras text={b.body} />
            </div>
            {b.cta && (
              <a className="v2-ed__cta" href={b.cta.href}>
                {b.cta.label}
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="v2-ed__photos v2-ed__photos--cover" aria-hidden="true">
        {r.photos.map((p, i) => (
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
