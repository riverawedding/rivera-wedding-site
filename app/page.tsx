'use client';

import React from 'react';

type EventItem = {
  day: string;
  title: string;
  time: string;
  description: string;
};

type FaqItem = {
  q: string;
  a: string;
};

type NavLabels = {
  home: string;
  travel: string;
  schedule: string;
  registry: string;
  weddingParty: string;
  gallery: string;
  thingsToDo: string;
  faqs: string;
};

type TranslationEntry = {
  languageName: string;
  names: string;
  togetherWith: string;
  gettingMarried: string;
  dateVenue: string;
  viewSchedule: string;
  travelInfo: string;
  celebrationTag: string;
  celebrationTitle: string;
  celebrationText1: string;
  celebrationText2: string;
  glance: string;
  date: string;
  venue: string;
  location: string;
  weekendStyle: string;
  dateValue: string;
  venueValue: string;
  locationValue: string;
  weekendStyleValue: string;
  scheduleTag: string;
  scheduleTitle: string;
  scheduleSubtitle: string;
  travelTag: string;
  travelTitle: string;
  accommodationTag: string;
  accommodationTitle: string;
  accommodationText: string;
  plannedAdditions: string;
  anchorHotel: string;
  overflowOptions: string;
  shuttleDetails: string;
  townGuide: string;
  registryTag: string;
  registryTitle: string;
  registryText: string;
  registryButton: string;
  weddingPartyTag: string;
  weddingPartyTitle: string;
  weddingPartyText: string;
  weddingPartyPlaceholder: string;
  weddingPartyBioPlaceholder: string;
  galleryTag: string;
  galleryTitle: string;
  galleryText: string;
  thingsToDoTag: string;
  thingsToDoTitle: string;
  thingsToDoText: string;
  wineTastingTitle: string;
  wineTastingText: string;
  historicTownsTitle: string;
  historicTownsText: string;
  foodViewsTitle: string;
  foodViewsText: string;
  questionsTag: string;
  questionsTitle: string;
  footerLeft: string;
  footerRight: string;
  nav: NavLabels;
  travelNotes: string[];
  events: EventItem[];
  faqs: FaqItem[];
};

const translations: Record<'en' | 'de' | 'es', TranslationEntry> = {
  en: {
    languageName: 'English',
    names: 'Daniella & Victor',
    togetherWith: 'Together with their families',
    gettingMarried: 'Are getting married in Tuscany',
    dateVenue: 'May 15, 2027 · Antica Fattoria di Paterno',
    viewSchedule: 'View Schedule',
    travelInfo: 'Travel Info',
    celebrationTag: 'Our Celebration',
    celebrationTitle: 'A destination wedding weekend in Tuscany',
    celebrationText1:
      'We’re so excited to celebrate with the people we love most. This website will be your home base for wedding weekend details, travel guidance, accommodations, and updates as everything comes together.',
    celebrationText2:
      'For now, save the date and start dreaming of an unforgettable weekend in Italy with us.',
    glance: 'At a glance',
    date: 'Date',
    venue: 'Venue',
    location: 'Location',
    weekendStyle: 'Weekend Style',
    dateValue: 'Saturday, May 15, 2027',
    venueValue: 'Antica Fattoria di Paterno',
    locationValue: 'Tuscany, Italy',
    weekendStyleValue: 'Destination wedding with multiple events',
    scheduleTag: 'Weekend Schedule',
    scheduleTitle: 'What to expect',
    scheduleSubtitle:
      'A full itinerary with exact times will be posted here closer to the wedding.',
    travelTag: 'Travel & Stay',
    travelTitle: 'Getting there',
    accommodationTag: 'Accommodations',
    accommodationTitle: 'Hotel details coming soon',
    accommodationText:
      'We’re currently finalizing the best hotel setup for our guests. Once confirmed, this section will include where to stay, booking guidance, and any group rates or recommended nearby options.',
    plannedAdditions: 'Planned additions',
    anchorHotel: 'Anchor hotel',
    overflowOptions: 'Overflow options',
    shuttleDetails: 'Shuttle details',
    townGuide: 'Nearby town guide',
    registryTag: 'Registry',
    registryTitle: 'Registry details to follow',
    registryText:
      'We’ll share registry information here if and when it becomes available. Your presence in Tuscany with us is what matters most.',
    registryButton: 'Registry Coming Soon',
    weddingPartyTag: 'Wedding Party',
    weddingPartyTitle: 'Meet our favorite people',
    weddingPartyText:
      'This section can feature your bridesmaids, groomsmen, family, and anyone special you want guests to know.',
    weddingPartyPlaceholder: 'Coming Soon',
    weddingPartyBioPlaceholder: 'Photo and short bio placeholder.',
    galleryTag: 'Gallery',
    galleryTitle: 'A few moments from us',
    galleryText:
      'Add engagement photos, travel memories, or favorite candid shots to make the site feel more personal.',
    thingsToDoTag: 'Things To Do',
    thingsToDoTitle: 'Make a weekend of it',
    thingsToDoText:
      'This is the perfect place for winery suggestions, day trips, restaurants, scenic viewpoints, and nearby towns for guests to explore.',
    wineTastingTitle: 'Wine Tasting',
    wineTastingText: 'Recommend a few standout vineyards and tastings nearby.',
    historicTownsTitle: 'Historic Towns',
    historicTownsText:
      'Highlight San Gimignano, Florence, and other favorite day trip options.',
    foodViewsTitle: 'Food & Views',
    foodViewsText: 'Point guests toward memorable meals, scenic terraces, and sunset spots.',
    questionsTag: 'Questions',
    questionsTitle: 'Frequently asked questions',
    footerLeft: 'Daniella & Victor · May 15, 2027',
    footerRight: 'More details coming as the weekend plans are finalized.',
    nav: {
      home: 'Home',
      travel: 'Travel',
      schedule: 'Schedule',
      registry: 'Registry',
      weddingParty: 'Wedding Party',
      gallery: 'Gallery',
      thingsToDo: 'Things To Do',
      faqs: 'FAQs',
    },
    travelNotes: [
      'Nearest major airport options will be shared here once travel logistics are finalized.',
      'Hotel recommendations and room block details will be added as soon as they are confirmed.',
      'Transportation guidance for the wedding day will be listed here for guests staying nearby.',
    ],
    events: [
      {
        day: 'Friday',
        title: 'Welcome Event',
        time: 'Evening',
        description:
          'Kick off the weekend with a relaxed pizza party and time to settle in, meet everyone, and enjoy Tuscany together.',
      },
      {
        day: 'Saturday',
        title: 'Wedding Day',
        time: 'May 15, 2027',
        description:
          'Our wedding celebration at Antica Fattoria di Paterno in Tuscany. Ceremony, cocktails, dinner, and dancing to follow.',
      },
      {
        day: 'Sunday',
        title: 'Farewell Gathering',
        time: 'Late Morning / Early Afternoon',
        description:
          'A final get-together to enjoy time with family and friends before departures.',
      },
    ],
    faqs: [
      {
        q: 'When should I arrive?',
        a: 'We recommend arriving by Friday so you can enjoy the full wedding weekend.',
      },
      {
        q: 'Is transportation being provided?',
        a: 'Transportation details are still being finalized and will be added here once confirmed.',
      },
      {
        q: 'Can I bring a plus-one?',
        a: 'Your invitation will indicate exactly who is included in your party.',
      },
      {
        q: 'What should I wear?',
        a: 'Dress code details will be shared here closer to the wedding date.',
      },
    ],
  },
  de: {
    languageName: 'Deutsch',
    names: 'Daniella & Victor',
    togetherWith: 'Gemeinsam mit ihren Familien',
    gettingMarried: 'heiraten in der Toskana',
    dateVenue: '15. Mai 2027 · Antica Fattoria di Paterno',
    viewSchedule: 'Ablauf ansehen',
    travelInfo: 'Reiseinfos',
    celebrationTag: 'Unsere Feier',
    celebrationTitle: 'Ein Hochzeitswochenende in der Toskana',
    celebrationText1:
      'Wir freuen uns sehr, dieses besondere Wochenende mit den Menschen zu feiern, die wir lieben. Diese Website ist eure zentrale Anlaufstelle für alle Details rund um das Hochzeitswochenende, die Reiseplanung, Unterkünfte und weitere Updates.',
    celebrationText2:
      'Merkt euch das Datum schon jetzt und freut euch mit uns auf ein unvergessliches Wochenende in Italien.',
    glance: 'Auf einen Blick',
    date: 'Datum',
    venue: 'Location',
    location: 'Ort',
    weekendStyle: 'Wochenendstil',
    dateValue: 'Samstag, 15. Mai 2027',
    venueValue: 'Antica Fattoria di Paterno',
    locationValue: 'Toskana, Italien',
    weekendStyleValue: 'Destination Wedding mit mehreren Events',
    scheduleTag: 'Wochenendablauf',
    scheduleTitle: 'Was euch erwartet',
    scheduleSubtitle:
      'Ein vollständiger Ablaufplan mit genauen Uhrzeiten wird näher am Hochzeitstermin veröffentlicht.',
    travelTag: 'Reise & Aufenthalt',
    travelTitle: 'Anreise',
    accommodationTag: 'Unterkünfte',
    accommodationTitle: 'Hoteldetails folgen',
    accommodationText:
      'Wir finalisieren gerade die beste Hotelaufteilung für unsere Gäste. Sobald alles bestätigt ist, findet ihr hier Übernachtungsmöglichkeiten, Buchungshinweise und empfohlene Hotels in der Nähe.',
    plannedAdditions: 'Geplante Ergänzungen',
    anchorHotel: 'Haupthotel',
    overflowOptions: 'Weitere Optionen',
    shuttleDetails: 'Shuttle-Details',
    townGuide: 'Guide zur Umgebung',
    registryTag: 'Geschenkeliste',
    registryTitle: 'Infos zur Geschenkeliste folgen',
    registryText:
      'Falls wir eine Geschenkeliste bereitstellen, findet ihr die Informationen hier. Am wichtigsten ist uns, dieses Wochenende in der Toskana mit euch zu verbringen.',
    registryButton: 'Geschenkeliste folgt',
    weddingPartyTag: 'Hochzeitsgesellschaft',
    weddingPartyTitle: 'Unsere liebsten Menschen',
    weddingPartyText:
      'Hier könnt ihr Brautjungfern, Trauzeugen, Familie und andere wichtige Menschen kennenlernen.',
    weddingPartyPlaceholder: 'Demnächst',
    weddingPartyBioPlaceholder: 'Platzhalter für Foto und Kurzbeschreibung.',
    galleryTag: 'Galerie',
    galleryTitle: 'Ein paar Momente von uns',
    galleryText:
      'Fügt Verlobungsfotos, Reisemomente oder Lieblingsbilder hinzu, damit sich die Website persönlicher anfühlt.',
    thingsToDoTag: 'Aktivitäten',
    thingsToDoTitle: 'Macht ein ganzes Wochenende daraus',
    thingsToDoText:
      'Hier passen Empfehlungen für Weingüter, Tagesausflüge, Restaurants, Aussichtspunkte und nahegelegene Orte perfekt hinein.',
    wineTastingTitle: 'Weinprobe',
    wineTastingText: 'Empfehlt hier ein paar besondere Weingüter und Verkostungen in der Nähe.',
    historicTownsTitle: 'Historische Orte',
    historicTownsText: 'Hebt San Gimignano, Florenz und andere schöne Ausflugsziele hervor.',
    foodViewsTitle: 'Kulinarik & Ausblicke',
    foodViewsText: 'Gebt Tipps zu besonderen Restaurants, Terrassen und Sonnenuntergangs-Spots.',
    questionsTag: 'Fragen',
    questionsTitle: 'Häufige Fragen',
    footerLeft: 'Daniella & Victor · 15. Mai 2027',
    footerRight: 'Weitere Details folgen, sobald die Wochenendplanung finalisiert ist.',
    nav: {
      home: 'Startseite',
      travel: 'Reise',
      schedule: 'Ablauf',
      registry: 'Geschenkeliste',
      weddingParty: 'Hochzeitsgesellschaft',
      gallery: 'Galerie',
      thingsToDo: 'Aktivitäten',
      faqs: 'FAQs',
    },
    travelNotes: [
      'Die nächstgelegenen großen Flughäfen werden hier geteilt, sobald die Reiseplanung finalisiert ist.',
      'Hotelempfehlungen und Informationen zu Zimmerkontingenten werden ergänzt, sobald sie bestätigt sind.',
      'Hinweise zur Anreise am Hochzeitstag werden hier für Gäste in der Umgebung veröffentlicht.',
    ],
    events: [
      {
        day: 'Freitag',
        title: 'Willkommensevent',
        time: 'Abend',
        description:
          'Wir starten das Wochenende mit einer entspannten Pizza-Party, Zeit zum Ankommen, Kennenlernen und gemeinsamen Genießen der Toskana.',
      },
      {
        day: 'Samstag',
        title: 'Hochzeitstag',
        time: '15. Mai 2027',
        description:
          'Unsere Hochzeitsfeier in der Antica Fattoria di Paterno in der Toskana. Mit Trauung, Aperitif, Dinner und anschließender Feier.',
      },
      {
        day: 'Sonntag',
        title: 'Abschlusstreffen',
        time: 'Später Vormittag / früher Nachmittag',
        description:
          'Ein letztes Beisammensein mit Familie und Freunden vor der Abreise.',
      },
    ],
    faqs: [
      {
        q: 'Wann sollten wir anreisen?',
        a: 'Wir empfehlen eine Anreise bis Freitag, damit ihr das gesamte Hochzeitswochenende genießen könnt.',
      },
      {
        q: 'Wird es einen Transport geben?',
        a: 'Die Transportdetails werden derzeit finalisiert und hier ergänzt, sobald sie bestätigt sind.',
      },
      {
        q: 'Darf ich eine Begleitperson mitbringen?',
        a: 'Auf eurer Einladung wird genau angegeben, wer zu eurer Einladung gehört.',
      },
      {
        q: 'Was soll ich anziehen?',
        a: 'Details zum Dresscode werden näher am Hochzeitstermin veröffentlicht.',
      },
    ],
  },
  es: {
    languageName: 'Español',
    names: 'Daniella & Victor',
    togetherWith: 'Junto con sus familias',
    gettingMarried: 'se casan en la Toscana',
    dateVenue: '15 de mayo de 2027 · Antica Fattoria di Paterno',
    viewSchedule: 'Ver itinerario',
    travelInfo: 'Información de viaje',
    celebrationTag: 'Nuestra celebración',
    celebrationTitle: 'Un fin de semana de boda en la Toscana',
    celebrationText1:
      'Estamos muy emocionados de celebrar con las personas que más queremos. Este sitio será su punto principal para encontrar detalles del fin de semana de la boda, guía de viaje, hospedaje y actualizaciones a medida que todo vaya tomando forma.',
    celebrationText2:
      'Por ahora, reserven la fecha y comiencen a imaginar un fin de semana inolvidable en Italia con nosotros.',
    glance: 'Resumen',
    date: 'Fecha',
    venue: 'Lugar',
    location: 'Ubicación',
    weekendStyle: 'Estilo del fin de semana',
    dateValue: 'Sábado, 15 de mayo de 2027',
    venueValue: 'Antica Fattoria di Paterno',
    locationValue: 'Toscana, Italia',
    weekendStyleValue: 'Boda destino con varios eventos',
    scheduleTag: 'Itinerario del fin de semana',
    scheduleTitle: 'Qué esperar',
    scheduleSubtitle:
      'Un itinerario completo con horarios exactos se publicará más cerca de la boda.',
    travelTag: 'Viaje y estadía',
    travelTitle: 'Cómo llegar',
    accommodationTag: 'Hospedaje',
    accommodationTitle: 'Detalles del hotel próximamente',
    accommodationText:
      'Actualmente estamos definiendo la mejor opción de hospedaje para nuestros invitados. Una vez confirmado, esta sección incluirá dónde hospedarse, cómo reservar y cualquier tarifa grupal u opciones cercanas recomendadas.',
    plannedAdditions: 'Próximamente',
    anchorHotel: 'Hotel principal',
    overflowOptions: 'Opciones adicionales',
    shuttleDetails: 'Detalles del transporte',
    townGuide: 'Guía del pueblo cercano',
    registryTag: 'Mesa de regalos',
    registryTitle: 'Detalles de la mesa de regalos próximamente',
    registryText:
      'Si compartimos una mesa de regalos, la información aparecerá aquí. Lo más importante para nosotros es celebrar este fin de semana en la Toscana con ustedes.',
    registryButton: 'Mesa de regalos próximamente',
    weddingPartyTag: 'Cortejo nupcial',
    weddingPartyTitle: 'Nuestra gente favorita',
    weddingPartyText:
      'Esta sección puede mostrar a tus damas, padrinos, familia y a cualquier persona especial que quieras presentar a los invitados.',
    weddingPartyPlaceholder: 'Próximamente',
    weddingPartyBioPlaceholder: 'Espacio para foto y breve descripción.',
    galleryTag: 'Galería',
    galleryTitle: 'Algunos momentos de nosotros',
    galleryText:
      'Agrega fotos de compromiso, recuerdos de viajes o imágenes espontáneas favoritas para que el sitio se sienta más personal.',
    thingsToDoTag: 'Qué hacer',
    thingsToDoTitle: 'Conviertan esto en un fin de semana completo',
    thingsToDoText:
      'Este es el lugar perfecto para sugerencias de bodegas, excursiones, restaurantes, miradores y pueblos cercanos para explorar.',
    wineTastingTitle: 'Cata de vinos',
    wineTastingText: 'Recomienden algunas bodegas y degustaciones destacadas cerca de la zona.',
    historicTownsTitle: 'Pueblos históricos',
    historicTownsText: 'Destaquen San Gimignano, Florencia y otras excursiones favoritas.',
    foodViewsTitle: 'Comida y vistas',
    foodViewsText:
      'Guíen a los invitados hacia comidas memorables, terrazas escénicas y lugares para ver el atardecer.',
    questionsTag: 'Preguntas',
    questionsTitle: 'Preguntas frecuentes',
    footerLeft: 'Daniella & Victor · 15 de mayo de 2027',
    footerRight:
      'Pronto compartiremos más detalles a medida que se finalice la planificación del fin de semana.',
    nav: {
      home: 'Inicio',
      travel: 'Viaje',
      schedule: 'Itinerario',
      registry: 'Mesa de regalos',
      weddingParty: 'Cortejo nupcial',
      gallery: 'Galería',
      thingsToDo: 'Qué hacer',
      faqs: 'Preguntas',
    },
    travelNotes: [
      'Las opciones de aeropuertos principales más cercanos se compartirán aquí una vez que se definan los detalles del viaje.',
      'Las recomendaciones de hoteles y detalles de bloque de habitaciones se añadirán tan pronto como estén confirmados.',
      'La guía de transporte para el día de la boda aparecerá aquí para los invitados que se hospeden cerca.',
    ],
    events: [
      {
        day: 'Viernes',
        title: 'Evento de bienvenida',
        time: 'Noche',
        description:
          'Comenzaremos el fin de semana con una relajada fiesta de pizza, tiempo para instalarse, conocerse y disfrutar juntos de la Toscana.',
      },
      {
        day: 'Sábado',
        title: 'Día de la boda',
        time: '15 de mayo de 2027',
        description:
          'Nuestra celebración de boda en Antica Fattoria di Paterno, en la Toscana. Después de la ceremonia habrá cocteles, cena y baile.',
      },
      {
        day: 'Domingo',
        title: 'Despedida',
        time: 'Última mañana / primeras horas de la tarde',
        description:
          'Un último encuentro para disfrutar con familiares y amigos antes de partir.',
      },
    ],
    faqs: [
      {
        q: '¿Cuándo deberíamos llegar?',
        a: 'Recomendamos llegar el viernes para poder disfrutar de todo el fin de semana de la boda.',
      },
      {
        q: '¿Habrá transporte?',
        a: 'Los detalles del transporte todavía se están definiendo y se añadirán aquí una vez confirmados.',
      },
      {
        q: '¿Puedo llevar acompañante?',
        a: 'Su invitación indicará exactamente quiénes están incluidos en su grupo.',
      },
      {
        q: '¿Qué debo ponerme?',
        a: 'Los detalles del código de vestimenta se compartirán más cerca de la fecha de la boda.',
      },
    ],
  },
};

type LanguageCode = keyof typeof translations;
type PageKey =
  | 'home'
  | 'travel'
  | 'schedule'
  | 'registry'
  | 'wedding-party'
  | 'gallery'
  | 'things-to-do'
  | 'faqs';

type LanguageButton = {
  code: LanguageCode;
  label: string;
  symbol: string;
};

const languages: LanguageButton[] = [
  { code: 'en', label: 'English', symbol: '🇬🇧' },
  { code: 'de', label: 'Deutsch', symbol: '🇩🇪' },
  { code: 'es', label: 'Español', symbol: '🇪🇸' },
];

function getNavItems(t: TranslationEntry): { id: PageKey; label: string }[] {
  return [
    { id: 'home', label: t.nav.home },
    { id: 'travel', label: t.nav.travel },
    { id: 'schedule', label: t.nav.schedule },
    { id: 'registry', label: t.nav.registry },
    { id: 'wedding-party', label: t.nav.weddingParty },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'things-to-do', label: t.nav.thingsToDo },
    { id: 'faqs', label: t.nav.faqs },
  ];
}

function isPageKey(value: string): value is PageKey {
  return [
    'home',
    'travel',
    'schedule',
    'registry',
    'wedding-party',
    'gallery',
    'things-to-do',
    'faqs',
  ].includes(value);
}

function getInitialPage(): PageKey {
  if (typeof window === 'undefined') return 'home';
  const hash = window.location.hash.replace('#', '');
  return isPageKey(hash) ? hash : 'home';
}

function scrollToTop() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }
}

function setPageHash(page: PageKey) {
  if (typeof window !== 'undefined') {
    window.location.hash = page;
  }
}

function runSanityChecks() {
  console.assert(languages.length === 3, 'Expected 3 languages');
  console.assert(
    languages.every((lang) => lang.code in translations),
    'Each language button must match a translation set',
  );
  (Object.keys(translations) as LanguageCode[]).forEach((code) => {
    const entry = translations[code];
    console.assert(entry.events.length === 3, `Expected 3 events for ${code}`);
    console.assert(entry.faqs.length >= 4, `Expected 4+ FAQs for ${code}`);
    console.assert(entry.travelNotes.length >= 3, `Expected 3+ travel notes for ${code}`);
    console.assert(getNavItems(entry).length === 8, `Expected 8 nav items for ${code}`);
  });
}

runSanityChecks();

function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-2xl border-b border-[#E8D2D6] pb-8">
        <h1 className="text-4xl font-serif text-[#5F6B5C]">{title}</h1>
        {subtitle ? <p className="mt-4 text-lg leading-8 text-[#6F7F6A]">{subtitle}</p> : null}
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export default function WeddingWebsite() {
  const [language, setLanguage] = React.useState<LanguageCode>('en');
  const [page, setPage] = React.useState<PageKey>(getInitialPage());

  React.useEffect(() => {
    const onHashChange = () => {
      setPage(getInitialPage());
      scrollToTop();
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  React.useEffect(() => {
    scrollToTop();
  }, [page]);

  const t = translations[language];
  const navItems = getNavItems(t);

  const goToPage = (nextPage: PageKey) => {
    if (nextPage === page) {
      scrollToTop();
      return;
    }
    setPage(nextPage);
    setPageHash(nextPage);
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return (
          <>
            <section
              className="relative overflow-hidden"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(88,105,82,0.28), rgba(181,125,138,0.20)), url('/tuscan-hills.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="mx-auto max-w-6xl px-6 py-32 md:py-44">
                <div className="max-w-3xl rounded-3xl border border-white/30 bg-white/20 p-8 shadow-2xl backdrop-blur-sm">
                  <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#F8F1F3]">
                    {t.togetherWith}
                  </p>
                  <h1 className="text-5xl font-serif text-white md:text-7xl">{t.names}</h1>
                  <p className="mt-6 text-lg text-[#F7F4F2] md:text-xl">{t.gettingMarried}</p>
                  <p className="mt-3 text-base text-[#F3E7EA] md:text-lg">{t.dateVenue}</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <button
                      type="button"
                      onClick={() => goToPage('schedule')}
                      className="rounded-2xl bg-[#B57D8A] px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-[1.02] hover:bg-[#A96F7D]"
                    >
                      {t.viewSchedule}
                    </button>
                    <button
                      type="button"
                      onClick={() => goToPage('travel')}
                      className="rounded-2xl border border-white/60 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
                    >
                      {t.travelInfo}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="mx-auto max-w-5xl px-6 py-20">
              <div className="grid gap-10 md:grid-cols-2 md:items-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#8D9A89]">
                    {t.celebrationTag}
                  </p>
                  <h2 className="mt-3 text-4xl font-serif text-[#5F6B5C]">
                    {t.celebrationTitle}
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-[#6F7F6A]">
                    {t.celebrationText1}
                  </p>
                  <p className="mt-4 text-lg leading-8 text-[#6F7F6A]">
                    {t.celebrationText2}
                  </p>
                </div>

                <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-[#E8D2D6]">
                  <h3 className="text-2xl font-serif text-[#5F6B5C]">{t.glance}</h3>
                  <div className="mt-6 space-y-5 text-[#5F6B5C]">
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-[#B57D8A]">
                        {t.date}
                      </p>
                      <p className="mt-1 text-lg">{t.dateValue}</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-[#B57D8A]">
                        {t.venue}
                      </p>
                      <p className="mt-1 text-lg">{t.venueValue}</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-[#B57D8A]">
                        {t.location}
                      </p>
                      <p className="mt-1 text-lg">{t.locationValue}</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-[#B57D8A]">
                        {t.weekendStyle}
                      </p>
                      <p className="mt-1 text-lg">{t.weekendStyleValue}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );

      case 'travel':
        return (
          <PageShell title={t.travelTitle} subtitle={t.accommodationText}>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] bg-[#6F7F6A] p-8 text-white shadow-xl">
                <p className="text-sm uppercase tracking-[0.3em] text-[#F3E7EA]">
                  {t.travelTag}
                </p>
                <h2 className="mt-3 text-4xl font-serif text-white">{t.travelTitle}</h2>
                <ul className="mt-8 space-y-4 text-base leading-7 text-[#F7F3F1]">
                  {t.travelNotes.map((note) => (
                    <li key={note} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#F7F3F1]" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] bg-white p-8 shadow-xl ring-1 ring-[#E8D2D6]">
                <p className="text-sm uppercase tracking-[0.3em] text-[#8D9A89]">
                  {t.accommodationTag}
                </p>
                <h2 className="mt-3 text-4xl font-serif text-[#5F6B5C]">
                  {t.accommodationTitle}
                </h2>
                <div className="mt-8 rounded-3xl bg-[#F8F4F2] p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#B57D8A]">
                    {t.plannedAdditions}
                  </p>
                  <div className="mt-4 grid gap-3 text-[#5F6B5C] sm:grid-cols-2">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">{t.anchorHotel}</div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">{t.overflowOptions}</div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">{t.shuttleDetails}</div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">{t.townGuide}</div>
                  </div>
                </div>
              </div>
            </div>
          </PageShell>
        );

      case 'schedule':
        return (
          <PageShell title={t.scheduleTitle} subtitle={t.scheduleSubtitle}>
            <div className="grid gap-6 md:grid-cols-3">
              {t.events.map((event) => (
                <div
                  key={event.title}
                  className="rounded-[2rem] border border-[#D7E0D3] bg-[#F8F4F2] p-7 shadow-sm"
                >
                  <p className="text-sm uppercase tracking-[0.25em] text-[#B57D8A]">
                    {event.day}
                  </p>
                  <h3 className="mt-3 text-2xl font-serif text-[#5F6B5C]">{event.title}</h3>
                  <p className="mt-2 text-sm font-medium text-[#8D9A89]">{event.time}</p>
                  <p className="mt-5 leading-7 text-[#6F7F6A]">{event.description}</p>
                </div>
              ))}
            </div>
          </PageShell>
        );

      case 'registry':
        return (
          <PageShell title={t.registryTitle} subtitle={t.registryText}>
            <div className="inline-flex rounded-2xl bg-[#6F7F6A] px-6 py-4 text-white shadow-lg">
              {t.registryButton}
            </div>
          </PageShell>
        );

      case 'wedding-party':
        return (
          <PageShell title={t.weddingPartyTitle} subtitle={t.weddingPartyText}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-[#E8D2D6]"
                >
                  <div className="h-52 rounded-[1.5rem] bg-[#F8F4F2]" />
                  <h3 className="mt-5 text-xl font-serif text-[#5F6B5C]">
                    {t.weddingPartyPlaceholder}
                  </h3>
                  <p className="mt-2 text-[#6F7F6A]">{t.weddingPartyBioPlaceholder}</p>
                </div>
              ))}
            </div>
          </PageShell>
        );

      case 'gallery':
        return (
          <PageShell title={t.galleryTitle} subtitle={t.galleryText}>
            <div className="grid gap-4 md:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="h-64 rounded-[2rem] bg-[#F8F4F2] shadow-sm ring-1 ring-[#E8D2D6]"
                />
              ))}
            </div>
          </PageShell>
        );

      case 'things-to-do':
        return (
          <PageShell title={t.thingsToDoTitle} subtitle={t.thingsToDoText}>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-[#E8D2D6]">
                <h3 className="text-2xl font-serif text-[#5F6B5C]">{t.wineTastingTitle}</h3>
                <p className="mt-3 leading-7 text-[#6F7F6A]">{t.wineTastingText}</p>
              </div>
              <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-[#E8D2D6]">
                <h3 className="text-2xl font-serif text-[#5F6B5C]">{t.historicTownsTitle}</h3>
                <p className="mt-3 leading-7 text-[#6F7F6A]">{t.historicTownsText}</p>
              </div>
              <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-[#E8D2D6]">
                <h3 className="text-2xl font-serif text-[#5F6B5C]">{t.foodViewsTitle}</h3>
                <p className="mt-3 leading-7 text-[#6F7F6A]">{t.foodViewsText}</p>
              </div>
            </div>
          </PageShell>
        );

      case 'faqs':
        return (
          <PageShell title={t.questionsTitle}>
            <div className="grid gap-5">
              {t.faqs.map((item) => (
                <div
                  key={item.q}
                  className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-[#E8D2D6]"
                >
                  <h3 className="text-xl font-medium text-[#5F6B5C]">{item.q}</h3>
                  <p className="mt-3 leading-7 text-[#6F7F6A]">{item.a}</p>
                </div>
              ))}
            </div>
          </PageShell>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDFC] text-[#5F6B5C]">
      <header className="sticky top-0 z-20 border-b border-[#D7E0D3] bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-end gap-4 px-6 py-4">


          <div className="flex flex-wrap gap-2">
            {languages.map((item) => {
              const active = language === item.code;
              return (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLanguage(item.code)}
                  aria-label={item.label}
                  className={`rounded-2xl border px-4 py-2 text-sm font-medium transition ${
                    active
                      ? 'border-[#B57D8A] bg-[#B57D8A] text-white shadow-md'
                      : 'border-[#D7E0D3] bg-white text-[#6F7F6A] hover:border-[#B57D8A]'
                  }`}
                >
                  <span className="mr-2">{item.symbol}</span>
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="border-t border-[#E8D2D6] bg-[#FFFDFC]">
          <nav className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-3 px-6 py-4 text-sm font-medium text-[#6F7F6A]">
            {navItems.map((item) => {
              const active = page === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToPage(item.id)}
                  className={`transition ${
                    active ? 'text-[#B57D8A] underline underline-offset-4' : 'hover:text-[#B57D8A]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {renderPage()}

      <footer className="border-t border-[#D7E0D3] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-[#8D9A89] md:flex-row md:items-center md:justify-between">
          <p>{t.footerLeft}</p>
          <p>{t.footerRight}</p>
        </div>
      </footer>
    </div>
      );
}