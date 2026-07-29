import localFont from "next/font/local";
import "../taphuys-woody/theme-woody.css";

// 205TF Exposure — licensed brand font for Woody.
// Three weights by exposure value: [-10] light, [-40] medium, [-90] boldest.

// [-90] boldest → headings / display / buttons (--font-display)
const exposureDisplay = localFont({
  src: [
    { path: "./fonts/Exposure-90.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Exposure-90Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-woody-display",
  display: "swap",
});

// [-40] medium → body / paragraphs (--font-serif)
const exposureBody = localFont({
  src: [
    { path: "./fonts/Exposure-40.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Exposure-40Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-woody-serif",
  display: "swap",
});

// [-10] light → labels, nav, small text (--font-cond)
const exposureCond = localFont({
  src: [
    { path: "./fonts/Exposure-10.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Exposure-10Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-woody-cond",
  display: "swap",
});

export const metadata = {
  title: "’t Taphuys — Woody-editie (grote collage)",
  description:
    "De woody-editie van ’t Taphuys met een grotere hero-collage: minder foto's, groter, en eentje die doorloopt in de volgende sectie.",
};

export default function ThemeWoodyLayout({ children }) {
  return (
    <div className={`theme-woody ${exposureDisplay.variable} ${exposureBody.variable} ${exposureCond.variable}`}>
      {children}
    </div>
  );
}
