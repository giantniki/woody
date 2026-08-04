// Content for the editorial pages under /woody-v2 (Over · Menu · Team ·
// Lokaal · Groepen · Reserveren). Dutch copy verbatim from user specification.

export const woodyV2Pages = {
  over: {
    slug: "over",
    title: "Over",
    layout: "ketelhuis-info",
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
    cta: null,
    photos: [
      { src: "/img/sfeer-kegs.jpg", top: "0%", right: "0%", w: "100%", ar: "16 / 9" },
    ],
  },

  menu: {
    slug: "menu",
    title: "Menu",
    layout: "ketelhuis-vacatures",
    intro:
      "Woody is er de hele dag\nLunch. Taart. Diner. Borrel. Geen poespas. Altijd goed.\nEen plek waar je rustig je bord mag aflikken.\n\nKijk op de menukaart wat de pot vandaag schaft.",
    cta: { label: "Bekijk het menu", href: "#" },
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
    photos: [
      { src: "/img/pages/menu-1.jpg", top: "0%", right: "0%", w: "100%", ar: "16 / 9" },
      { src: "/img/pages/menu-2.jpg", top: "50%", right: "0%", w: "100%", ar: "16 / 9" },
    ],
  },

  werken: {
    slug: "werken",
    title: "Team",
    subtitle: "Werken bij Woody",
    layout: "float-two",
    intro:
      "Jij draagt hier de ster.\nNiet het menu. Niet het interieur. Niet het licht. Jij.\nWoody begint bij het team, niet bij de gast. Een gast voelt altijd of een team gelukkig is. Bouw de mooiste bar — als het team er niet in gelooft, werkt het niet. Gelooft het team er wel in, dan hoeft de bar niet eens zo mooi te me zijn.\n\nGeen cowboy rijdt alleen de zonsondergang in.",
    sections: [
      {
        heading: "Wat we beloven",
        list: [
          "Hier word je de beste versie van jezelf.",
          "Maak er je eigen ding van — binnen het karakter van Woody.",
          "We doen het samen, of we doen het niet.",
        ],
        body: "Jij bent de reden waarom mensen terugkomen.\nGeen script, geen baas over je schouder. Wel een team dat voor je door een muur gaat.",
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
    ],
  },

  lokaal: {
    slug: "lokaal",
    title: "Lokaal",
    layout: "ketelhuis-niksnieuws",
    intro:
      "Van de stad. Voor de stad.\n\nModerne steden groeien. Meer mensen, meer cafés, meer schermen. En toch kent bijna niemand zijn buurman.\n\nWoody is er voor de mensen die om de hoek wonen en de plek nog niet hebben gevonden die van hen is. Geen bar in de stad. Een plek van de stad.",
    sections: [
      {
        heading: "Wat dat betekent",
        body: "Lokale bieren op de tap. Lokale makers aan de muur. Lokale verhalen aan de bar. We steunen wat er leeft in de buurt — van de brouwerij om de hoek tot het rugbyteam dat elke zaterdag verliest maar elke zaterdag terugkomt.\n\nEr is altijd iets nieuws op de tap, aan de muur of aan de bar. Woody staat nooit stil.",
      },
      {
        heading: "Voor wie",
        body: "Woody gelooft in teams die niemand achterlaten.\nDaarom steken we €10.000 in lokale sport.\n\nGeen grote namen. Geen sponsorborden.\nGewoon een team dat het samen doet. En van Woody de stamkroeg maakt.",
      },
    ],
    closing: "Is dat jouw team?\nLaat het achter. We bellen.",
    cta: { label: "Dit is mijn team", href: "mailto:hallo@barwoody.nl" },
    photos: [
      { src: "/img/pages/lokaal-1.jpg", top: "0%", right: "0%", w: "100%", ar: "16 / 9" },
    ],
  },

  groepen: {
    slug: "groepen",
    title: "Groepen",
    layout: "ketelhuis-info",
    intro:
      "Jouw feestje is ons feestje.\nVerjaardag, teamuitje, project afgesloten, gewoon zin om samen te zijn — Woody heeft altijd plek. Voor groepen van 10 tot 100 mensen.",
    sections: [
      {
        heading: "Waarom Woody",
        body: "Woody is geen evenementenlocatie. Dat is precies waarom het werkt. Het is een echte plek met een eigen karakter — en dat karakter maakt elke bijeenkomst beter dan een zaal met een flipover.\n\nGeen zaalhuur, geen pakket. Gewoon Woody, voor jullie.",
      },
      {
        heading: "Wat je krijgt",
        body: "Ruimte, faciliteiten en een team dat meedenkt — binnen de Woody-formule. Geen confetti, geen dj. Wel de tap, de sfeer, en het gevoel dat de tent voor die avond van jullie is.\n\nEn de rest van de zaak blijft gewoon open. Ook een grote groep voelt hier als onderdeel van de avond, niet als bezetting van de ruimte.",
      },
    ],
    closing: "Eén contactpunt. Eén gesprek. Eén avond die klopt.",
    cta: { label: "Plan jullie avond", href: "/woody-v2/reserveren" },
    photos: [
      { src: "/img/pages/groepen-1.jpg", top: "0%", right: "0%", w: "100%", ar: "16 / 9" },
    ],
  },

  reserveren: {
    slug: "reserveren",
    title: "Reserveren",
    layout: "ketelhuis-vacatures",
    intro:
      "Woody is een plek waar je altijd binnen kunt wandelen. Spontaan aan komen waaien, daar houden we van.\nEr is hier altijd plek. Schuif aan.\nToch vinden we reserveren ook fijn. Dan weten we een beetje wat we kunnen verwachten, komen we nooit handen, ingrediënten of wc-papier tekort, en ben jij verzekerd van een plekje.",
    sections: [
      {
        heading: "Een tafeltje reserveren?",
        body: "Tafels van 1 tot 10 personen reserveer je hier.",
        cta: { label: "RESERVEREN", href: "#reserveren" },
      },
      {
        heading: "Kom je met een groep?",
        body: "Jouw feestje is ons feestje.\nVerjaardag, teamuitje, project afgesloten, of gewoon zin om samen te zijn — Woody heeft altijd plek. Voor groepen van 10 tot 100 mensen.\nRuimte, faciliteiten en een team dat meedenkt — binnen de Woody-formule. Geen confetti, geen dj. Wel de tap, de sfeer, en het gevoel dat de tent voor die avond van jullie is.\nBellen mag. Binnenlopen ook. Of...",
        cta: { label: "Plan jullie feestje hier", href: "mailto:hallo@barwoody.nl?subject=Groep%20Reservering" },
      },
      {
        heading: "Kom je met je team?",
        body: "Woody heeft een speciale voorliefde voor teams. Een rugbyteam dat elke zaterdag verliest. Een softbalteam zonder stamkroeg.\nWoody gelooft in teams die niemand achterlaten.\nGeen grote namen. Geen sponsorborden. Gewoon een team dat het samen doet.\nKom je met jouw team? Laat het ons weten!",
        cta: { label: "Plan je teamuitje hier", href: "mailto:hallo@barwoody.nl?subject=Teamuitje" },
      },
    ],
    photos: [
      { src: "/img/sfeer-kegs.jpg", top: "0%", right: "0%", w: "100%", ar: "16 / 9" },
    ],
  },
};

export const woodyV2PageOrder = ["over", "menu", "werken", "lokaal", "groepen", "reserveren"];
