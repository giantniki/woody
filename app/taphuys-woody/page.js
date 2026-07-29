import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import ParallaxShowcase from "@/components/ParallaxShowcase";
import InfoSection from "@/components/InfoSection";
import ClosingBanner from "@/components/ClosingBanner";

// Woody palette for the colour-cycling closing banner.
const WOODY_BANNER_COLORS = ["#f2c00d", "#f1f0cd", "#e0662a", "#c94f3a", "#6d150f"];

// Third landing: the first page's structure + interactions, re-skinned with the
// bar woody colours and the puffy, dancing H1 typography.
export default function TaphuysWoodyPage() {
  return (
    <main>
      <Cursor variant="woody" />
      <Hero />
      <ParallaxShowcase dancing />
      <InfoSection dancing />
      <ClosingBanner dancing colors={WOODY_BANNER_COLORS} />
    </main>
  );
}
