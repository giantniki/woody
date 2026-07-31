import Cursor from "@/components/Cursor";
import V2Nav from "@/components/woodyv2/V2Nav";
import V2BookButton from "@/components/woodyv2/V2BookButton";
import InfoTwoCol from "@/components/woodyv2/InfoTwoCol";

export const metadata = {
  title: "Info — Woody",
  description: "Adres, openingstijden, contact en onze locaties.",
};

// Info page for /woody-v2 — two-column layout, shares the sticky nav + floating
// book button. `solid` keeps the nav bar readable (no dark hero here).
export default function WoodyV2InfoPage() {
  return (
    <main>
      <Cursor variant="woody" />
      <V2Nav solid />
      <V2BookButton />
      <InfoTwoCol />
    </main>
  );
}
