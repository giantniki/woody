import { Bagel_Fat_One, Lora } from "next/font/google";
import "./woody.css";

// Puffy Cooper-Black-style display for the logo + giant words.
const bagel = Bagel_Fat_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-woody-display",
});

// Warm classic serif for body + headings.
const lora = Lora({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-woody-serif",
});

export const metadata = {
  title: "bar woody — de stadsherberg van nu",
  description:
    "Bar Woody: zelf tappen, goed eten en goed gezelschap. Lunch, borrel, diner en een klein doorzakkertje in Arnhem, Eindhoven, Tilburg en Utrecht.",
};

export default function WoodyLayout({ children }) {
  return (
    <div className={`woody ${bagel.variable} ${lora.variable}`}>{children}</div>
  );
}
