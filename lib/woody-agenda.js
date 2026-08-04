// Agenda / programma for Woody — placeholder events (Dutch). Each event drives
// both the overview list (//agenda) and its detail page
// (//agenda/<slug>). TODO: vervang door de echte programmering.

const YEAR = "'26";

// shared default running order (overridden per event where it differs)
const defaultTimes = (title) => [
  { time: "20:00", label: "Deuren open" },
  { time: "20:30 – 23:00", label: title },
];

export const agendaEvents = [
  {
    slug: "woody-pubquiz",
    city: "Rotterdam",
    date: "di 05 aug",
    tag: "uitverkocht",
    title: "Woody Pubquiz",
    subtitle: "Dé gezellige kroegquiz van de buurt.",
    genre: "Quiz",
    image: "/img/samen-zitten.jpg",
    price: "€ 5,- p.p.",
    zaal: "Bar Woody",
    times: [
      { time: "19:30", label: "Deuren open" },
      { time: "20:00 – 23:00", label: "Woody Pubquiz" },
    ],
    description:
      "Team van vier, hoofd vol nutteloze kennis en een biertje binnen handbereik. Van muziek tot buurttrivia, van serieus tot nét over het randje — het doel is gewoon een goede avond.\n\nWinnend team tapt de laatste ronde gratis. Verliezers ook, eerlijk gezegd. Wees er snel bij, want de vorige edities waren in een uur uitverkocht.",
  },
  {
    slug: "speciaalbier-woensdag",
    city: "Utrecht",
    date: "wo 06 aug",
    title: "Speciaalbier Woensdag",
    subtitle: "Elke week een nieuw vat aan de wand.",
    genre: "Bier",
    image: "/img/tapwand-bieren.jpg",
    price: "gratis entree",
    zaal: "Bar Woody",
    times: [
      { time: "15:00", label: "Open" },
      { time: "19:00", label: "Nieuw vat aangeslagen" },
    ],
    description:
      "Elke woensdag draaien we een vers, bijzonder vat open. Lokaal, verrassend, soms een beetje eigenwijs — en altijd zelf te tappen aan de wand.\n\nGeen kaartjes, gewoon binnenlopen. Op = op, dus wie het eerst komt, proeft het eerst.",
  },
  {
    slug: "taproom-sessies",
    city: "Den Bosch",
    date: "do 07 aug",
    tag: "gratis",
    title: "Live: Taproom Sessies",
    subtitle: "Rauwe live sets, dichtbij en gratis.",
    genre: "Live",
    image: "/img/avond-feest.jpg",
    price: "gratis",
    zaal: "Bar Woody",
    times: defaultTimes("Taproom Sessies"),
    description:
      "Geen podium, geen afstand. Gewoon een band in de hoek van de bar en jij op een meter afstand. Rauw, dichtbij en zoals live hoort te zijn.\n\nWie er speelt? Dat houden we tot het laatst spannend. Kom langs en laat je verrassen.",
  },
  {
    slug: "vinyl-night",
    city: "Rotterdam",
    date: "vr 08 aug",
    title: "Vinyl Night",
    subtitle: "Alleen platen, alleen goede.",
    genre: "DJ",
    image: "/img/dj-avond.jpg",
    price: "gratis entree",
    zaal: "Bar Woody",
    times: [
      { time: "21:00", label: "Naald op de plaat" },
      { time: "21:00 – 01:00", label: "Vinyl Night" },
    ],
    description:
      "Geen laptops, geen playlists. Alleen platen, van de eerste naald tot de laatste ronde. Van soul tot postpunk — als het goed is, draaien we het.\n\nEigen platen mag je meenemen. Als ze goed zijn, draaien we ze.",
  },
  {
    slug: "woody-borrel",
    city: "Utrecht",
    date: "za 09 aug",
    title: "Woody Borrelsessie",
    subtitle: "Borrelen tot het vanzelf laat wordt.",
    genre: "Borrel",
    image: "/img/proost.jpg",
    price: "gratis entree",
    zaal: "Bar Woody",
    times: defaultTimes("Woody Borrelsessie"),
    description:
      "Borrelschalen op tafel, een potje kaarten erbij en een bar die zichzelf vult. Begin met een plan voor één drankje en kijk waar de avond heen gaat.\n\nGrote tafels, kleine tafels, en altijd wel plek om aan te schuiven.",
  },
  {
    slug: "zondagse-jazz",
    city: "Den Bosch",
    date: "zo 10 aug",
    title: "Zondagse Jazz & Bitterballen",
    subtitle: "Jazz, bitterballen en een luie zondag.",
    genre: "Live",
    image: "/img/vrienden-bier.jpg",
    price: "gratis",
    zaal: "Bar Woody",
    times: [
      { time: "15:00", label: "Deuren open" },
      { time: "16:00 – 19:00", label: "Live jazz" },
    ],
    description:
      "De rustigste manier om je weekend af te sluiten: zachte jazz, een schaal bitterballen en niks wat moet.\n\nSchuif aan, bestel een borrel en laat de middag traag voorbijgaan.",
  },
  {
    slug: "bingo-met-bitter",
    city: "Rotterdam",
    date: "di 12 aug",
    tag: "bijna vol",
    title: "Bingo met Bitter",
    subtitle: "Bingo zoals het hoort: prijzen aan de bar.",
    genre: "Spel",
    image: "/img/kaarten-poker.jpg",
    price: "€ 7,50 p.p.",
    zaal: "Bar Woody",
    times: defaultTimes("Bingo met Bitter"),
    description:
      "Balletjes, kaarten en een presentator die het net iets te serieus neemt. De prijzen? Van een rondje bier tot dat ene lelijke beeldje dat iedereen wil winnen.\n\nHou je kaart bij, roep hard genoeg en misschien tap jij vanavond gratis.",
  },
  {
    slug: "wijnproeverij",
    city: "Utrecht",
    date: "wo 13 aug",
    title: "Wijnproeverij",
    subtitle: "Acht wijnen, één avond, geen kapsones.",
    genre: "Wijn",
    image: "/img/wijnwand.jpg",
    price: "€ 22,50 p.p.",
    zaal: "Bar Woody",
    times: [
      { time: "19:30", label: "Deuren open" },
      { time: "20:00 – 22:30", label: "Proeverij" },
    ],
    description:
      "Acht wijnen, van vertrouwd tot verrassend, met verhalen die je onthoudt en woorden die je meteen weer vergeet. Geen kapsones, wel plezier.\n\nInclusief brood, kaas en genoeg tijd om je favoriet te vinden.",
  },
  {
    slug: "klein-doorzakkertje",
    city: "Den Bosch",
    date: "vr 15 aug",
    tag: "nieuw",
    title: "DJ-nacht: Klein Doorzakkertje",
    subtitle: "De nacht die eigenlijk niet had gemoeten.",
    genre: "DJ",
    image: "/img/doorzakkertje-cheers.jpg",
    price: "gratis entree",
    zaal: "Bar Woody",
    times: [
      { time: "22:00", label: "Deuren open" },
      { time: "22:00 – 03:00", label: "DJ's tot sluit" },
    ],
    description:
      "Zou eigenlijk niet meer moeten. Maar ach. DJ's die doorgaan tot het licht wordt, een dansvloer die zichzelf vult en nog eentje, nog een verhaal, nog een nieuw gezicht.\n\nZo hoort het te gaan.",
  },
  {
    slug: "open-podium",
    city: "Rotterdam",
    date: "za 16 aug",
    title: "Open Podium",
    subtitle: "Jouw vijf minuten op het podium.",
    genre: "Live",
    image: "/img/tappen-samen.jpg",
    price: "gratis",
    zaal: "Bar Woody",
    times: defaultTimes("Open Podium"),
    description:
      "Muziek, comedy, een gedicht of iets waar we nog geen naam voor hebben — het podium is van jou. Vijf minuten, jouw ding, ons applaus.\n\nInschrijven doe je gewoon aan de bar. Publiek zijn mag ook, hoor.",
  },
];

// unique genres, in first-seen order, for the filter dropdown
export const agendaGenres = agendaEvents.reduce((acc, e) => {
  if (!acc.includes(e.genre)) acc.push(e.genre);
  return acc;
}, []);

// cities for the "Selecteer stad" filter
export const agendaCities = ["Rotterdam", "Utrecht", "Den Bosch"];

// display date incl. year, e.g. "di 05 aug '26"
export const dateLong = (date) => `${date} ${YEAR}`;

export const getEvent = (slug) =>
  agendaEvents.find((e) => e.slug === slug) || null;

// a few other events for the "Meer voor jou" block
export const moreEvents = (slug, n = 3) =>
  agendaEvents.filter((e) => e.slug !== slug).slice(0, n);
