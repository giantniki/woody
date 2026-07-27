import { Anton, Barlow_Condensed, Bitter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const barlow = Barlow_Condensed({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cond",
});

const bitter = Bitter({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata = {
  title: "’t Taphuys — Arnhem",
  description:
    "Zelf bier en wijn tappen aan de tapwand. 100 bieren en 80 wijnen, lunch, borrel en diner bij ’t Taphuys Arnhem.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl" className={`${anton.variable} ${barlow.variable} ${bitter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
