// Real content pulled from taphuys.nl/arnhem (Dutch). Kept in one place so the
// site is easy to extend to the other locations later.

export const brand = {
  name: "'T TAPHUYS",
  location: "ARNHEM",
  email: "info@taphuysarnhem.nl",
  reserveLabel: "Reserveren",
  socials: [
    { label: "FACEBOOK", href: "https://www.facebook.com/taphuysarnhem" },
    { label: "INSTAGRAM", href: "https://www.instagram.com/taphuysarnhem" },
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
    back: "/img/taphuys-15.jpg",
    front: "/img/taphuys-18.jpg",
    lockup: "ZELF\nTAPPEN",
    caption: "Tapkaartje halen, in de houder plaatsen en tappen maar.",
  },
  {
    id: "bieren",
    back: "/img/taphuys-24.jpg",
    front: "/img/spijs-6.jpg",
    lockup: "100\nBIEREN",
    caption: "Een uitgebreid, regelmatig wisselend assortiment op de tapwand.",
  },
  {
    id: "wijnen",
    back: "/img/taphuys-2.jpg",
    front: "/img/taphuys-3.jpg",
    lockup: "80\nWIJNEN",
    caption: "Verschillende soorten, smaken en prijscategorieën.",
  },
  {
    id: "borrel",
    back: "/img/spijs-25.jpg",
    front: "/img/the-77.jpg",
    lockup: "LUNCH\nBORREL\nDINER",
    caption: "Bij wijn en bier hoort natuurlijk lekker eten.",
  },
  {
    id: "tapwand",
    back: "/img/spijs-32.jpg",
    front: "/img/taphuys-12.jpg",
    lockup: "DE\nTAPWAND",
    caption: "Proeven, ontdekken en borrelen. Je raakt nooit uitgeproefd.",
  },
];

// "Ontdek onze formule" — 3 steps of self-tapping.
export const steps = {
  title: "Zelf tappen in drie stappen",
  items: [
    {
      n: "01",
      title: "Haal je tapkaart!",
      body: "Bestel je tapkaart via de app of vraag er een bij de bediening! Jij bepaalt het saldo.",
    },
    {
      n: "02",
      title: "Voer de kaart in bij de tapwand!",
      body: "Plaats het kaartje in de houder bij de wand met 100 bieren en 80 wijnen.",
    },
    {
      n: "03",
      title: "Tappen!",
      body: "Jij bepaalt de hoeveelheid: een vol glas of proef je een beetje van alles?",
    },
  ],
};

export const intro = {
  heading: "Bij ’t Taphuys draait alles om zelf tappen, proeven en borrelen.",
  body: "Wij zijn 7 dagen per week open voor koffie, lunch, borrel en diner. De unieke tapwanden met een uitgebreid assortiment staan centraal.",
};

// Info block ( equivalent of Cara de Vaca's "COME CON NOSOTROS" ).
export const visit = {
  title: "KOM BIJ ONS",
  primary: {
    name: "TAPHUYS ARNHEM",
    address: "Jansplein 56, Arnhem",
    phone: "026 - 202 0258",
    email: "info@taphuysarnhem.nl",
  },
  hours: [
    { days: "Maandag t/m donderdag", open: "11:00", close: "01:00" },
    { days: "Vrijdag & zaterdag", open: "11:00", close: "03:00" },
    { days: "Zondag", open: "11:00", close: "01:00" },
  ],
};

// All four Taphuys locations (for the location switcher / footer).
export const locations = [
  { city: "Arnhem", address: "Jansplein 56", phone: "026 - 202 0258", current: true },
  { city: "Eindhoven", address: "Stationsplein 4", phone: "040 - 244 20 96" },
  { city: "Tilburg", address: "Piusplein 10", phone: "013 - 203 33 65" },
  { city: "Utrecht", address: "Mariaplaats 3", phone: "030 - 633 9706" },
];

export const closing = {
  image: "/img/taphuys-24.jpg",
  bannerLabel: "RESERVEREN",
  bannerNote: "Reserveren kan voor groepen vanaf 8 personen — kom anders lekker binnenlopen!",
};
