import { Bagel_Fat_One, Lora } from "next/font/google";
import "./theme-woody.css";

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
  title: "Bar Woody — Woody-editie",
  description:
    "De eerste landing van Bar Woody, opnieuw ingekleurd met de bar woody-huisstijl: kleuren en dansende koppen.",
};

export default function ThemeWoodyLayout({ children }) {
  return (
    <div className={`theme-woody ${bagel.variable} ${lora.variable}`}>
      {children}
    </div>
  );
}
