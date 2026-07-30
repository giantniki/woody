import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import ParallaxShowcase from "@/components/ParallaxShowcase";
import InfoSection from "@/components/InfoSection";
import ClosingBanner from "@/components/ClosingBanner";

// Woody palette for the colour-cycling closing banner.
const WOODY_BANNER_COLORS = ["#e63946", "#111111", "#6d150f"];

// Fourth landing: same woody re-skin as /taphuys-woody, but the hero collage is
// the "big" variant — fewer, larger photos, with one tile bleeding down into
// the next section.
export default function TaphuysWoody2Page() {
  return (
    <main>
      <Cursor variant="woody" />
      <Hero background="collage" logoVariant="woody" heroImage="/img/woody-hero.jpg" />
      <ParallaxShowcase dancing />
      <InfoSection dancing />
      <ClosingBanner dancing colors={WOODY_BANNER_COLORS} />
    </main>
  );
}
