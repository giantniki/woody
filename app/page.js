import Cursor from "@/components/Cursor";
import Hero from "@/components/Hero";
import ParallaxShowcase from "@/components/ParallaxShowcase";
import InfoSection from "@/components/InfoSection";
import ClosingBanner from "@/components/ClosingBanner";

export default function Home() {
  return (
    <main>
      <Cursor />
      <Hero />
      <ParallaxShowcase />
      <InfoSection />
      <ClosingBanner />
    </main>
  );
}
