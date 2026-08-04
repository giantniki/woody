import Cursor from "@/components/Cursor";
import V2Nav from "@/components/woodyv2/V2Nav";
import V2BookButton from "@/components/woodyv2/V2BookButton";
import V2Footer from "@/components/woodyv2/V2Footer";
import Hero from "@/components/Hero";
import ParallaxShowcase from "@/components/ParallaxShowcase";
import InfoSection from "@/components/InfoSection";
import ClosingBanner from "@/components/ClosingBanner";

// Woody palette for the colour-cycling closing banner.
const WOODY_BANNER_COLORS = ["#e63946", "#111111", "#6d150f"];

// Home — the good Woody landing (collage hero + woody logo), with the sticky
// nav-menu, floating book button and shared footer. Theme + Exposure fonts come
// from the root layout.
export default function Home() {
  return (
    <main>
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
      <V2Footer />
    </main>
  );
}
