import localFont from "next/font/local";
import "./taphuys-woody/theme-woody.css";
import "./woody-v2/woody-v2.css";
import Cursor from "@/components/Cursor";
import V2Nav from "@/components/woodyv2/V2Nav";
import V2BookButton from "@/components/woodyv2/V2BookButton";
import Hero from "@/components/Hero";
import ParallaxShowcase from "@/components/ParallaxShowcase";
import InfoSection from "@/components/InfoSection";
import ClosingBanner from "@/components/ClosingBanner";

// 205TF Exposure — licensed brand font for Woody (same faces as taphuys-woody-2).
const exposureDisplay = localFont({
  src: [
    { path: "./taphuys-woody-2/fonts/Exposure-90.woff2", weight: "400", style: "normal" },
    { path: "./taphuys-woody-2/fonts/Exposure-90Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-woody-display",
  display: "swap",
});
const exposureBody = localFont({
  src: [
    { path: "./taphuys-woody-2/fonts/Exposure-40.woff2", weight: "400", style: "normal" },
    { path: "./taphuys-woody-2/fonts/Exposure-40Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-woody-serif",
  display: "swap",
});
const exposureCond = localFont({
  src: [
    { path: "./taphuys-woody-2/fonts/Exposure-10.woff2", weight: "400", style: "normal" },
    { path: "./taphuys-woody-2/fonts/Exposure-10Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-woody-cond",
  display: "swap",
});

// Woody palette for the colour-cycling closing banner.
const WOODY_BANNER_COLORS = ["#e63946", "#111111", "#6d150f"];

// Home: the /taphuys-woody-2 landing (single hero photo + dancing sections) in
// the woody theme, but with the woody-don navbar (V2Nav) + full-page menu and the
// floating book button — instead of the hero's internal nav.
export default function Home() {
  return (
    <main
      className={`theme-woody v2 ${exposureDisplay.variable} ${exposureBody.variable} ${exposureCond.variable}`}
    >
      <Cursor variant="woody" />
      <V2Nav overlay />
      <V2BookButton />
      <Hero
        background="collage"
        logoVariant="woody"
        heroImage="/img/woody-hero.jpg"
        hideNav
      />
      <ParallaxShowcase dancing />
      <InfoSection dancing />
      <ClosingBanner dancing colors={WOODY_BANNER_COLORS} />
    </main>
  );
}
