// Content for the 5 editorial pages under /woody-v2 (Over · Menu · Werken ·
// Lokaal · Groepen). Dutch copy verbatim from Niki's document. Each page: a
// left text column (title + intro + sections + CTA) and a right cluster of
// scattered photos. `photos` positions are % within the (sticky) photo column.
//
// section: { heading, body?, list?, stat?, statLabel? }
// photo:   { src, top, right, w, ar, r }   ar = aspect-ratio, r = rotation°

export const woodyV2Pages = {
  over: {
    slug: "over",
    title: "over",
    layout: "single",
    intro:
      "De stadsherberg van nu.\n\nJe komt binnen als vreemde. Je gaat weg als bekende.",
    sections: [
      {
        heading: "Wie we zijn",
        body: "Woody is geen bar. Woody is een vriend die bier tapt — maar die je ook gewoon je eigen glas laat vullen.\n\nEr ontstaat vanzelf een gesprek. En de avond wordt groter dan je had gepland. Niet omdat het moet. Gewoon omdat het hier zo werkt.",
      },
      {
        heading: "Waar we in geloven",
        body: "De meeste mensen deugen. Daar beginnen we mee. Niet met controle, met vertrouwen.\n\nNiemand drinkt hier alleen — niet omdat het moet, maar omdat er altijd wel iemand een stoel bijschuift. De gast die alleen binnenloopt. De collega met een zware dienst. Het nieuwe teamlid dat de weg nog niet weet. Niemand blijft hier achter.",
      },
      {
        heading: "Hoe het voelt",
        body: "Versleten hout, geen gepolijst staal. De tap in het midden — dat is het kampvuur. Tafels net iets te klein, zodat je toch naar je buurman moet schuiven.",
      },
    ],
    closing: "Er is hier altijd plek. Schuif aan.",
    cta: { label: "Reserveren", href: "/woody-v2#reserveren" },
    photos: [
      { src: "/img/sfeer-kegs.jpg", top: "0%", right: "6%", w: "62%", ar: "4 / 5", r: -3 },
      { src: "/img/pages/over-1.jpg", top: "34%", right: "40%", w: "44%", ar: "3 / 4", r: 4 },
      { src: "/img/pages/over-2.jpg", top: "60%", right: "4%", w: "50%", ar: "3 / 4", r: -2 },
    ],
  },

  menu: {
    slug: "menu",
    title: "menu",
    layout: "stack",
    intro:
      "Woody is er de hele dag.\n\nLunch. Taart. Diner. Borrel. Geen poespas. Altijd goed. Een plek waar je rustig je bord mag aflikken.\n\nKijk op de menukaart wat de pot vandaag schaft.",
    sections: [
      {
        heading: "Lunch",
        body: "Snel, eerlijk, geen poespas. Even een broodje, even bijkomen, even een praatje aan de bar. Dan weer verder met je dag.",
      },
      {
        heading: "Diner",
        body: "Gewoon goed eten, in goed gezelschap. Deel wat gerechten, tap er zelf een biertje bij, en kijk waar de avond heen gaat.",
      },
      {
        heading: "Borrel",
        body: "Borrelschalen op tafel, een potje kaarten erbij. Iets te vieren of gewoon zin in een avond — het maakt hier niet uit.",
      },
    ],
    cta: { label: "Bekijk het menu", href: "#" },
    photos: [
      { src: "/img/pages/menu-1.jpg", top: "0%", right: "4%", w: "54%", ar: "3 / 4", r: 3 },
      { src: "/img/pages/menu-2.jpg", top: "30%", right: "42%", w: "46%", ar: "3 / 4", r: -4 },
      { src: "/img/pages/menu-3.jpg", top: "58%", right: "8%", w: "56%", ar: "3 / 4", r: 2 },
    ],
  },

  werken: {
    slug: "werken",
    title: "werken",
    layout: "triptych",
    intro:
      "Jij draagt hier de ster. Niet het menu. Niet het interieur. Niet het licht. Jij.\n\nWoody begint bij het team, niet bij de gast. Een gast voelt altijd of een team gelukkig is. Bouw de mooiste bar — als het team er niet in gelooft, werkt het niet. Gelooft het team er wel in, dan hoeft de bar niet eens zo mooi te zijn.\n\nGeen cowboy rijdt alleen de zonsondergang in.",
    sections: [
      {
        heading: "Wat we beloven",
        list: [
          "Hier word je de beste versie van jezelf.",
          "Maak er je eigen ding van — binnen het karakter van Woody.",
          "We doen het samen, of we doen het niet.",
        ],
        body: "Jij bent de reden waarom mensen terugkomen. Geen script, geen baas over je schouder. Wel een team dat voor je door een muur gaat.",
      },
      {
        heading: "Wie we zoeken",
        body: "Geen cv, geen ervaring op papier. Energiek, nieuwsgierig, een beetje brutaal. Mensen die aanschuiven voordat ze het gevraagd wordt.",
      },
    ],
    closing: "Wees de reden dat de gast terugkomt. Kom werken bij Woody.",
    cta: { label: "Bekijk vacatures", href: "mailto:hallo@barwoody.nl" },
    photos: [
      { src: "/img/pages/werken-1.jpg", top: "0%", right: "8%", w: "56%", ar: "3 / 4", r: -4 },
      { src: "/img/pages/werken-2.jpg", top: "38%", right: "38%", w: "50%", ar: "4 / 3", r: 3 },
      { src: "/img/pages/werken-3.jpg", top: "62%", right: "4%", w: "54%", ar: "4 / 3", r: -2 },
    ],
  },

  lokaal: {
    slug: "lokaal",
    title: "lokaal",
    layout: "offset",
    intro:
      "Van de stad. Voor de stad.\n\nModerne steden groeien. Meer mensen, meer cafés, meer schermen. En toch kent bijna niemand zijn buurman.\n\nWoody is er voor de mensen die om de hoek wonen en de plek nog niet hebben gevonden die van hen is. Geen bar in de stad. Een plek van de stad.",
    sections: [
      {
        heading: "Wat dat betekent",
        body: "Lokale bieren op de tap. Lokale makers aan de muur. Lokale verhalen aan de bar. We steunen wat er leeft in de buurt — van de brouwerij om de hoek tot het rugbyteam dat elke zaterdag verliest maar elke zaterdag terugkomt.\n\nEr is altijd iets nieuws op de tap, aan de muur of aan de bar. Woody staat nooit stil.",
      },
      {
        heading: "Voor wie",
        stat: "€10.000",
        statLabel: "in lokale sport, elk jaar",
        body: "Woody gelooft in teams die niemand achterlaten. Geen grote namen. Geen sponsorborden. Gewoon een team dat het samen doet.",
      },
    ],
    closing: "Is dat jouw team? Laat het achter. We bellen.",
    cta: { label: "Steun dit team", href: "mailto:hallo@barwoody.nl" },
    photos: [
      { src: "/img/pages/lokaal-1.jpg", top: "2%", right: "4%", w: "58%", ar: "4 / 3", r: 3 },
      { src: "/img/pages/lokaal-2.jpg", top: "36%", right: "38%", w: "48%", ar: "4 / 3", r: -3 },
      { src: "/img/vrienden-bier.jpg", top: "60%", right: "8%", w: "52%", ar: "3 / 4", r: 2 },
    ],
  },

  groepen: {
    slug: "groepen",
    title: "groepen",
    layout: "feature",
    intro:
      "Jouw feestje is ons feestje.\n\nVerjaardag, teamuitje, project afgesloten, gewoon zin om samen te zijn — Woody heeft altijd plek.",
    sections: [
      {
        heading: "Waarom Woody",
        stat: "10–100",
        statLabel: "personen",
        body: "Woody is geen evenementenlocatie. Dat is precies waarom het werkt. Het is een echte plek met een eigen karakter — en dat karakter maakt elke bijeenkomst beter dan een zaal met een flipover.\n\nGeen zaalhuur, geen pakket. Gewoon Woody, voor jullie.",
      },
      {
        heading: "Wat je krijgt",
        body: "Ruimte, faciliteiten en een team dat meedenkt — binnen de Woody-formule. Geen confetti, geen dj. Wel de tap, de sfeer, en het gevoel dat de tent voor die avond van jullie is.\n\nEn de rest van de zaak blijft gewoon open. Ook een grote groep voelt hier als onderdeel van de avond, niet als bezetting van de ruimte.",
      },
    ],
    closing: "Eén contactpunt. Eén gesprek. Eén avond die klopt.",
    cta: { label: "Plan jullie avond", href: "mailto:hallo@barwoody.nl" },
    photos: [
      { src: "/img/pages/groepen-1.jpg", top: "0%", right: "6%", w: "56%", ar: "4 / 3", r: -3 },
      { src: "/img/pages/groepen-2.jpg", top: "34%", right: "40%", w: "48%", ar: "4 / 3", r: 4 },
      { src: "/img/pages/groepen-3.jpg", top: "60%", right: "2%", w: "54%", ar: "4 / 3", r: -2 },
    ],
  },
};

// order for the nav overlay
export const woodyV2PageOrder = ["over", "menu", "werken", "lokaal", "groepen"];
