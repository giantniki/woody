// Content + assets for the "bar woody" landing (design language from the
// designer's schets PDF). Dutch copy transcribed from the mockup.

export const woodyBrand = {
  logoTop: "bar",
  logoMain: "woody",
  cta: "Reserveren",
  ctaHref: "#reserveren",
};

// Hero photo collage — scattered rectangular tiles around the centred logo.
// Positions in %; `w` is width in vw-ish %. Real lifestyle shots of the venue
// (self-tapping, the tap/wine walls, food, borrel & avond energy).
export const heroCollage = [
  { src: "/img/sfeer-kegs-2.jpg", top: "6%", left: "2%", w: "14%", h: "22vh", r: -3 },
  { src: "/img/bier-tap-glas.jpg", top: "2%", left: "17%", w: "12%", h: "26vh", r: 2 },
  { src: "/img/wijnwand.jpg", top: "10%", left: "30%", w: "15%", h: "20vh", r: -2 },
  { src: "/img/burger.jpg", top: "4%", right: "6%", w: "15%", h: "38vh", r: 3 },
  { src: "/img/vrienden-bier.jpg", top: "46%", left: "6%", w: "16%", h: "24vh", r: 2 },
  { src: "/img/lunch-broodje.jpg", top: "70%", left: "16%", w: "12%", h: "22vh", r: -3 },
  { src: "/img/dj-avond.jpg", top: "52%", right: "4%", w: "16%", h: "26vh", r: -2 },
  { src: "/img/wijn-borrel.jpg", top: "74%", right: "12%", w: "14%", h: "20vh", r: 3 },
];

// Alternate hero collage: fewer, bigger photos, and one that bleeds down into
// the next section (marked `cross`).
export const heroCollageBig = [
  { src: "/img/sfeer-kegs.jpg", top: "9%", left: "3%", w: "20%", h: "34vh", r: -2 },
  { src: "/img/avond-feest.jpg", top: "5%", left: "27%", w: "26%", h: "38vh", r: -1 },
  { src: "/img/bier-getapt.jpg", top: "4%", right: "6%", w: "18%", h: "44vh", r: 2 },
  { src: "/img/diner-eten.jpg", top: "50%", right: "5%", w: "23%", h: "34vh", r: -2 },
  {
    src: "/img/tapwand-bieren.jpg",
    top: "50%",
    left: "4%",
    w: "24%",
    h: "62vh",
    r: 1,
    cross: true,
  },
];

export const woodyIntro = {
  heading: "De stadsherberg\nvan nu",
  body: "Je komt binnen als vreemde en gaat weg als bekende. Hier tap je zelf je bier, ontstaat er vanzelf een gesprek, en wordt de avond groter dan je had gepland. Niet omdat het moet. Omdat de plek daarvoor gebouwd is.",
  photo: "/img/samen-zitten.jpg",
};

// Big playful word-sections. `align` staggers the giant word left/center/right.
export const woodySections = [
  {
    id: "lunch",
    word: "lunch",
    align: "left",
    body: "Snel, eerlijk, geen poespas. Even een broodje, even bijkomen, even een praatje aan de bar. Dan weer verder met je dag.",
    photo: null,
  },
  {
    id: "borrel",
    word: "borrel",
    align: "center",
    body: "Geen zaalervaring, gewoon goed eten in goed gezelschap. Deel wat gerechten, tap er zelf een biertje bij, en kijk waar de avond heen gaat.",
    photo: null,
  },
  {
    id: "diner",
    word: "diner",
    align: "right",
    body: "Na het werk aanschuiven, glas erbij, verhaal van de dag kwijt. Voor je het weet zit je er nog met mensen die je een uur geleden nog niet kende.",
    photo: { src: "/img/diner-samen.jpg", side: "left" },
  },
  {
    id: "doorzakkertje",
    word: "klein\ndoorzakkertje",
    align: "left",
    body: "Zou eigenlijk niet moeten, maar ach. Nog eentje, nog een verhaal, nog een nieuw gezicht aan tafel. Dat is hoe het hoort te gaan.",
    photo: { src: "/img/proost.jpg", side: "wide" },
  },
];

export const woodyFooter = {
  werken: {
    heading: "Werken bij Woody?",
    body: "We zoeken geen ervaring op papier, we zoeken iemand die aanschuift. Energiek, nieuwsgierig, een beetje brutaal. Geen script, geen baas over je schouder, wel een team dat voor je door een muur gaat.",
    cta: "Solliciteer nu",
    ctaHref: "mailto:info@taphuysarnhem.nl",
  },
  openingstijden: {
    heading: "Openingstijden",
    body: "dinsdag t/m vrijdag van 15.00 tot 01.00. Zaterdag & zondag van 13.00 tot 01.00 (of later)",
  },
  locations: [
    { city: "Arnhem", address: "Jansplein 56", phone: "026 - 202 0258" },
    { city: "Eindhoven", address: "Stationsplein 4", phone: "040 244 20 96" },
    { city: "Tilburg", address: "Piusplein 10", phone: "013 - 203 33 65" },
    { city: "Utrecht", address: "Mariaplaats 3", phone: "030 - 633 9706" },
  ],
};
