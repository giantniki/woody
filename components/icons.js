// Simple white line/silhouette icons — same playful spirit as Cara de Vaca.
// They use `currentColor` so the parent controls the colour.

export function Smiley(props) {
  return (
    <svg viewBox="0 0 100 100" fill="none" {...props}>
      <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="8" />
      <circle cx="37" cy="42" r="6" fill="currentColor" />
      <circle cx="63" cy="42" r="6" fill="currentColor" />
      <path
        d="M32 60 q18 22 36 0"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function Pig(props) {
  return (
    <svg viewBox="0 0 120 100" fill="currentColor" {...props}>
      <path d="M14 40c0-8 6-13 12-11 3-9 12-13 20-9 6-3 14-4 22-1 6-6 16-9 24-4l-4 12c6 4 10 11 10 19 0 3 5 2 6 6 1 4-2 7-6 7-1 6-5 11-10 15v9c0 3-2 5-5 5s-5-2-5-5v-4c-6 2-13 2-19 0v4c0 3-2 5-5 5s-5-2-5-5v-9C33 78 26 68 26 56c-7-1-12-7-12-16z" />
      <circle cx="44" cy="50" r="4" fill="var(--cream)" />
      <circle cx="70" cy="50" r="4" fill="var(--cream)" />
    </svg>
  );
}

export function Cow(props) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
      <path d="M18 22c-8-4-15 2-13 11 1 6 6 9 11 9-2 6-3 12-3 17 0 20 16 32 37 32s37-12 37-32c0-5-1-11-3-17 5 0 10-3 11-9 2-9-5-15-13-11-6-4-13-6-20-6h-24c-7 0-14 2-20 6z" />
      <ellipse cx="50" cy="72" rx="20" ry="14" fill="var(--cream)" />
      <circle cx="42" cy="70" r="4" fill="currentColor" />
      <circle cx="58" cy="70" r="4" fill="currentColor" />
      <circle cx="38" cy="48" r="5" fill="var(--cream)" />
      <circle cx="62" cy="48" r="5" fill="var(--cream)" />
    </svg>
  );
}

export function Beer(props) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="7" strokeLinejoin="round" {...props}>
      <path d="M26 34h34v54H26z" />
      <path d="M60 44h10c8 0 12 5 12 12s-4 12-12 12h-10" />
      <path d="M26 34c0-9 8-14 17-14s17 5 17 14" fill="currentColor" />
      <path d="M34 48v28M43 48v28M52 48v28" strokeWidth="5" />
    </svg>
  );
}

export function Wine(props) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
      <path d="M30 16h40c0 22-9 34-16 37v23h12v6H34v-6h12V53C39 50 30 38 30 16z" />
      <path d="M34 24h32c-1 6-3 11-5 15H39c-2-4-4-9-5-15z" fill="var(--cream)" />
    </svg>
  );
}

export function Taco(props) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" {...props}>
      <path d="M8 74c0-26 19-46 42-46s42 20 42 46H8z" />
      <path d="M20 66c0-16 13-28 30-28s30 12 30 28H20z" fill="var(--cream)" />
      <circle cx="38" cy="60" r="4" fill="currentColor" />
      <circle cx="55" cy="56" r="4" fill="currentColor" />
      <circle cx="66" cy="62" r="4" fill="currentColor" />
    </svg>
  );
}

// Ordered set the hero cycles through, every 0.5s.
export const rotatingIcons = [Pig, Cow, Beer, Wine, Taco, Smiley];
