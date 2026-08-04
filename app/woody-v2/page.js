import Cursor from "@/components/Cursor";
import V2Nav from "@/components/woodyv2/V2Nav";
import V2BookButton from "@/components/woodyv2/V2BookButton";
import V2Hero from "@/components/woodyv2/V2Hero";
import ParallaxShowcase from "@/components/ParallaxShowcase";
import InfoSection from "@/components/InfoSection";
import ClosingBanner from "@/components/ClosingBanner";
import V2Footer from "@/components/woodyv2/V2Footer";

const WOODY_BANNER_COLORS = ["#f2c00d", "#f1f0cd", "#e0662a", "#c94f3a", "#6d150f"];

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
      <V2Footer />
    </main>
  );
}
