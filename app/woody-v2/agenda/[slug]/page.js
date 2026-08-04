import { notFound } from "next/navigation";
import Cursor from "@/components/Cursor";
import V2Nav from "@/components/woodyv2/V2Nav";
import V2BookButton from "@/components/woodyv2/V2BookButton";
import EventDetail from "@/components/woodyv2/EventDetail";
import { agendaEvents, getEvent } from "@/lib/woody-agenda";

export function generateStaticParams() {
  return agendaEvents.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const ev = getEvent(slug);
  return {
    title: ev ? `${ev.title} — Woody` : "Agenda — Woody",
    description: ev?.subtitle || "",
  };
}

export default async function EventPage({ params }) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  return (
    <main>
      <Cursor variant="woody" />
      <V2Nav overlay />
      <V2BookButton />
      <EventDetail event={event} />
    </main>
  );
}
