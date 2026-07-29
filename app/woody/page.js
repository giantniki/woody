import Cursor from "@/components/Cursor";
import WoodyHero from "@/components/woody/WoodyHero";
import WoodySections from "@/components/woody/WoodySections";
import WoodyFooter from "@/components/woody/WoodyFooter";

export default function WoodyPage() {
  return (
    <main className="wd-main">
      <Cursor variant="woody" />
      <WoodyHero />
      <WoodySections />
      <WoodyFooter />
    </main>
  );
}
