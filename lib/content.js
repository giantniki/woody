// Bar Woody — all site content in one place.

export const brand = {
  name: "BAR WOODY",
  location: "ARNHEM",
  email: "hallo@barwoody.nl",
  reserveLabel: "Reserveren",
  socials: [
    { label: "INSTAGRAM", href: "https://www.instagram.com/barwoody" },
  ],
};

// Hero rebus lockup — same spirit as Cara de Vaca ( ☺ DE 🐷 ).
export const heroLockup = {
  connector: "VAN",
};

// The scrolling showcase: 5 triplets. Each has two background photos moving at
// their own speed and one foreground "lockup" (transparent, text only) on top —
// giving the layered 3D parallax effect.
export const showcase = [
  {
    id: "tappen",
    back: "/img/tapwand-glazen.jpg",
    front: "/img/tappen-pour.jpg",
    lockup: "ZELF\nTAPPEN",
    caption: "Woody is geen concept. Woody is een vriend.\n\nEén die je naam onthoudt. Die een stoel bijschuift voordat je erom vraagt. Die net zo blij is met de gast die alleen binnenloopt als met de tafel van tien.\n\nZelf tappen. Samen ontdekken. Blijven hangen.\n\nDat is het hele verhaal.",
  },
  {
    id: "kaarten",
    back: "/img/kaarten-closeup.jpg",
    front: "/img/kaarten-poker.jpg",
    lockup: "POTJE\nKAARTEN",
    caption: "De kaarten liggen achter de bar. En we kennen zowat elk spel dat je kunt bedenken.",
  },
  {
    id: "blijven",
    back: "/img/blijven-kegs.jpg",
    front: "/img/blijven-backtoback.jpg",
    lockup: "BLIJVEN\nHANGEN",
    caption: "Open van dinsdag t/m zondag tot 01.00. Of later, als het gezellig is.",
  },
  {
    id: "borrel",
    back: "/img/borrel-sandwich.jpg",
    front: "/img/borrel-champagne.jpg",
    lockup: "LUNCH\nBORREL\nDINER",
    caption: "Trek in iets? Woody is er de hele dag. Snel, eerlijk, geen poespas. Een broodje tussen de middag. 's Avonds goed eten, in goed gezelschap — schalen die rondgaan, een biertje dat je zelf tapt.",
  },
  {
    id: "doorzakkertje",
    back: "/img/doorzakkertje-legs.jpg",
    front: "/img/doorzakkertje-cheers.jpg",
    lockup: "KLEIN\nDOORZAKKERTJE",
    caption: "Zou eigenlijk niet meer moeten. Maar ach. Nog eentje, nog een verhaal, nog een nieuw gezicht aan tafel.\n\nZo hoort het te gaan.",
  },
];

// "Werken bij Woody?" — jobs section
export const steps = {
  title: "Werken bij Woody?",
  body: "We zoeken geen ervaring op papier. We zoeken iemand die aanschuift. Energiek, nieuwsgierig, een beetje brutaal. Geen script, geen baas over je schouder — wel een team dat voor je door een muur gaat.",
  cta: "Solliciteer nu",
};

export const intro = {
  heading: "De stadsherburg van nu",
  body: "Je komt binnen als vreemde. Je gaat weg als bekende.\nHier tap je zelf je bier. Er ontstaat vanzelf een gesprek. En de avond wordt groter dan je had gepland.\n\nNiet omdat het moet. Gewoon omdat het hier zo werkt.",
};

// Info block ( equivalent of Cara de Vaca's "COME CON NOSOTROS" ).
export const visit = {
  title: "HIER IS WOODY",
  primary: {
    name: "Bar Woody",
    address: "Toy Story Street 66, Rotterdam",
    phone: "026 - 202 0258",
    email: "hallo@barwoody.nl",
  },
  hours: [
    { days: "dinsdag t/m zondag", open: "11:00", close: "01:00 (of later)" },
  ],
};

// All four Woody locations (for the location switcher / footer).
export const locations = [];

export const closing = {
  image: "/img/avond-feest.jpg",
  bannerLabel: "RESERVEREN",
  bannerNote: "Reserveren kan voor groepen vanaf 8 personen — kom anders lekker binnenlopen!",
};
