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
    lockupImg: "zelftappen",
    caption: "Woody is geen concept. Woody is een vriend.\n\nEén die je naam onthoudt. Die een stoel bijschuift voordat je erom vraagt. Die net zo blij is met de gast die alleen binnenloopt als met de tafel van tien.\n\nZelf tappen. Samen ontdekken. Blijven hangen.\n\nDat is het hele verhaal.",
  },
  {
    id: "kaarten",
    back: "/img/kaarten-closeup.jpg",
    front: "/img/kaarten-poker.jpg",
    lockup: "POTJE\nKAARTEN",
    lockupImg: "potjekaarten",
    caption: "De kaarten liggen achter de bar. En we kennen zowat elk spel dat je kunt bedenken.",
  },
  {
    id: "blijven",
    back: "/img/blijven-kegs.jpg",
    front: "/img/blijven-backtoback.jpg",
    lockup: "BLIJVEN\nHANGEN",
    lockupImg: "blijvenhangen",
    caption: "Open van dinsdag t/m zondag tot 01.00. Of later, als het gezellig is.",
  },
  {
    id: "borrel",
    back: "/img/borrel-sandwich.jpg",
    front: "/img/borrel-champagne.jpg",
    lockup: "LUNCH\nBORREL\nDINER",
    lockupImg: "lunchborreldiner",
    caption: "Trek in iets? Woody is er de hele dag. Snel, eerlijk, geen poespas. Een broodje tussen de middag. 's Avonds goed eten, in goed gezelschap — schalen die rondgaan, een biertje dat je zelf tapt.",
  },
  {
    id: "doorzakkertje",
    back: "/img/doorzakkertje-legs.jpg",
    front: "/img/doorzakkertje-cheers.jpg",
    lockup: "KLEIN\nDOORZAKKERTJE",
    lockupImg: "kleindoorzakkertje",
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
export const visit = {
  title: "HIER IS WOODY",
  opening: {
    label: "open",
    line: "dinsdag t/m zondag 11:00 tot 01:00 (of later)",
  },
};

// The three Woody locations, shown as three columns on the home.
export const locations = [
  {
    city: "Woody Rotterdam",
    address: "Toy Story Street 33",
    phone: "020 - 202 0258",
    routeHref: "https://maps.google.com/?q=Toy+Story+Street+33+Rotterdam",
  },
  {
    city: "Woody Utrecht",
    address: "Toy Story Street 66",
    phone: "030 - 202 0258",
    routeHref: "https://maps.google.com/?q=Toy+Story+Street+66+Utrecht",
  },
  {
    city: "Woody Den Bosch",
    address: "Toy Story Street 111",
    phone: "040 - 202 0258",
    routeHref: "https://maps.google.com/?q=Toy+Story+Street+111+Den+Bosch",
  },
];

export const closing = {
  image: "/img/closing-oysterboys.jpg",
  preLabel: "Er is hier altijd plek.\nSchuif aan.",
  bannerLabel: "RESERVEREN",
  bannerNote: "",
};
