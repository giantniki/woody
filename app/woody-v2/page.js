import Cursor from "@/components/Cursor";
import V2Nav from "@/components/woodyv2/V2Nav";
import V2BookButton from "@/components/woodyv2/V2BookButton";
import V2Hero from "@/components/woodyv2/V2Hero";
import ParallaxShowcase from "@/components/ParallaxShowcase";
import InfoSection from "@/components/InfoSection";
import ClosingBanner from "@/components/ClosingBanner";

// Woody palette for the colour-cycling closing banner (same as taphuys-woody-2).
const WOODY_BANNER_COLORS = ["#f2c00d", "#f1f0cd", "#e0662a", "#c94f3a", "#6d150f"];

// Woody v2: the taphuys-woody-2 landing re-worked with a sticky nav-menu
// (hamburger → full-screen overlay), a floating "Reserveren" book button and a
// cleaned-up hero (no email / instagram; reserve is the floating button).
export default function WoodyV2Page() {
  return (
    <main>
      <Cursor variant="woody" />
      <V2Nav />
      <V2BookButton />
      <V2Hero />
      <ParallaxShowcase dancing />
      <InfoSection dancing />
      <ClosingBanner dancing colors={WOODY_BANNER_COLORS} />
    </main>
  );
}
