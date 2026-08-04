"use client";

import { useState } from "react";
import { agendaEvents, agendaGenres } from "@/lib/woody-agenda";

// Agenda / programma overview (013-style): a list of events over a burgundy
// field. Hovering a row reveals the event's photo (following the cursor) while
// the other rows dim. Search + genre filter the list. Woody huisstijl.
export default function Agenda() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("");
  const [active, setActive] = useState(null); // hovered event
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const shown = agendaEvents.filter(
    (e) =>
      (!query || e.title.toLowerCase().includes(query.toLowerCase())) &&
      (!genre || e.genre === genre)
  );

  return (
    <section
      className="agenda"
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      onMouseLeave={() => setActive(null)}
    >
      <div className="agenda__filters">
        <div className="agenda__search">
          <input
            type="search"
            placeholder="Zoek artiest of evenement"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Zoek artiest of evenement"
          />
        </div>
        <div className="agenda__genre">
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            aria-label="Selecteer genre"
          >
            <option value="">Selecteer genre</option>
            {agendaGenres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ul className={`agenda__list${active ? " is-hovering" : ""}`}>
        {shown.map((ev) => (
          <li
            key={ev.slug}
            className={`agenda__row${
              active && active.slug === ev.slug ? " is-active" : ""
            }`}
            onMouseEnter={() => setActive(ev)}
          >
            <a className="agenda__link" href={`/woody-v2/agenda/${ev.slug}`}>
              <span className="agenda__date">{ev.date}</span>
              <span className="agenda__main">
                {ev.tag && <span className="agenda__tag">{ev.tag}</span>}
                <span className="agenda__title">{ev.title}</span>
              </span>
              <span className="agenda__genre-label">{ev.genre}</span>
            </a>
          </li>
        ))}

        {shown.length === 0 && (
          <li className="agenda__empty">Niks gevonden. Probeer iets anders.</li>
        )}
      </ul>

      {/* cursor-following photo reveal */}
      <div
        className={`agenda__preview${active ? " is-on" : ""}`}
        style={{
          top: `${pos.y}px`,
          backgroundImage: active ? `url(${active.image})` : undefined,
        }}
        aria-hidden="true"
      />
    </section>
  );
}
