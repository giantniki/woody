import Cursor from "@/components/Cursor";
import V2Nav from "@/components/woodyv2/V2Nav";
import V2BookButton from "@/components/woodyv2/V2BookButton";
import V2Footer from "@/components/woodyv2/V2Footer";
import Agenda from "@/components/woodyv2/Agenda";

export const metadata = {
  title: "Agenda — Woody",
  description:
    "Alles wat er speelt bij Woody: quiz, live, DJ, borrel en meer. Bekijk de agenda.",
};

export default function AgendaPage() {
  return (
    <main>
      <Cursor variant="woody" />
      <V2Nav overlay />
      <V2BookButton />
      <Agenda />
      <V2Footer />
    </main>
  );
}
