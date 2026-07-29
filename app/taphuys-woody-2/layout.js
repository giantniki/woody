import { Bagel_Fat_One, Lora } from "next/font/google";
// Reuse the exact same woody theme as the third landing — only the hero
// collage variant differs (see page.js).
import "../taphuys-woody/theme-woody.css";

const bagel = Bagel_Fat_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-woody-display",
});

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-woody-serif",
});

export const metadata = {
  title: "’t Taphuys — Woody-editie (grote collage)",
  description:
    "De woody-editie van ’t Taphuys met een grotere hero-collage: minder foto's, groter, en eentje die doorloopt in de volgende sectie.",
};

export default function ThemeWoodyLayout({ children }) {
  return (
    <div className={`theme-woody ${bagel.variable} ${lora.variable}`}>
      {children}
    </div>
  );
}
