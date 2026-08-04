import Cursor from "@/components/Cursor";
import V2Nav from "@/components/woodyv2/V2Nav";
import V2BookButton from "@/components/woodyv2/V2BookButton";
import V2Footer from "@/components/woodyv2/V2Footer";
import InfoTwoCol from "@/components/woodyv2/InfoTwoCol";

export const metadata = {
  title: "Info — Woody",
  description: "Adres, openingstijden, contact en onze locaties.",
};

// Info page for / — two-column layout, shares the sticky nav + floating
// book button. `solid` keeps the nav bar readable (no dark hero here).
export default function WoodyV2InfoPage() {
  return (
    <main>
      <Cursor variant="woody" />
      <V2Nav solid />
      <V2BookButton />
      <InfoTwoCol />
      <V2Footer />
    </main>
  );
}
