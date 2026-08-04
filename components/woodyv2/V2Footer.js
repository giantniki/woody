"use client";

import { brand } from "@/lib/content";

export default function V2Footer() {
  return (
    <footer className="v2-foot">
      <div className="v2-foot__inner">
        <div className="v2-foot__col v2-foot__col--lang">
          <span className="v2-foot__lang active">NL</span>
          <span className="v2-foot__lang-sep">|</span>
          <span className="v2-foot__lang">ENG</span>
        </div>

        <div className="v2-foot__col">
          <h3 className="v2-foot__heading">CONTACT</h3>
          <p className="v2-foot__item">
            <span className="v2-foot__label">Telefoon:</span>{" "}
            <a href="tel:0262020258">026 - 202 0258</a>
          </p>
          <p className="v2-foot__item">
            <span className="v2-foot__label">Email:</span>{" "}
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
          </p>
        </div>

        <div className="v2-foot__col">
          <h3 className="v2-foot__heading">OPENINGSTIJDEN</h3>
          <p className="v2-foot__text">
            dinsdag t/m zondag 11:00–01:00 (of later)
          </p>
        </div>

        <div className="v2-foot__col">
          <h3 className="v2-foot__heading">ADRES</h3>
          <p className="v2-foot__text">Toy Story Street 66, Rotterdam</p>
          <a
            className="v2-foot__route"
            href="https://maps.google.com/?q=Toy+Story+Street+66+Rotterdam"
            target="_blank"
            rel="noreferrer"
          >
            Route →
          </a>
        </div>

        <div className="v2-foot__col v2-foot__col--socials">
          <a
            className="v2-foot__social-icon"
            href={brand.socials[0]?.href || "#"}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            className="v2-foot__social-icon"
            href="https://wa.me/31262020258"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
