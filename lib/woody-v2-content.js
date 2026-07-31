// Nav + strings for the /woody-v2 exploration (sticky nav menu, full-screen
// overlay, floating book button, two-column info). Reuses the real data from
// lib/content.js + lib/woody-content.js — only the nav wiring lives here.

export const v2NavLinks = [
  { label: "Home", href: "/woody-v2" },
  { label: "Zelf tappen", href: "/woody-v2#tappen" },
  { label: "Info", href: "/woody-v2/info" },
  { label: "Reserveren", href: "/woody-v2#reserveren" },
];

// Floating circular button (aiyanna-style, in Woody's yellow).
export const v2Book = { label: "Reserveren", href: "/woody-v2#reserveren" };
