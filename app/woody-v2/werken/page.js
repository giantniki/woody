import Cursor from "@/components/Cursor";
import V2Nav from "@/components/woodyv2/V2Nav";
import V2BookButton from "@/components/woodyv2/V2BookButton";
import EditorialPage from "@/components/woodyv2/EditorialPage";
import V2Footer from "@/components/woodyv2/V2Footer";
import { woodyV2Pages } from "@/lib/woody-v2-pages";

export const metadata = {
  title: "Team — Woody",
  description: "Werken bij Bar Woody — Jij draagt hier de ster.",
};

export default function WerkenPage() {
  return (
    <main>
      <Cursor variant="woody" />
      <V2Nav overlay />
      <V2BookButton />
      <EditorialPage data={woodyV2Pages.werken} />
      <V2Footer />
    </main>
  );
}
