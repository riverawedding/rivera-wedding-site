'use client';

import React from 'react';
import { Cormorant_Garamond } from 'next/font/google';
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});
import Image from "next/image";
type EventItem = {
  day: string;
  title: string;
  date: string;
  venue: string;
  address?: string;
  addressUrl?: string;
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
  attire: string;
  registry: string;
  weddingParty: string;
  gallery: string;
  thingsToDo: string;
  faqs: string;
  rsvp: string;
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
  travelSubtitle: string;
  rsvpTitle: string;
  rsvpSubtitle: string;
  rsvpBody: string;
  rsvpButton: string;
  updatesButton: string;
  countdownDays: string;
  countdownHours: string;
  countdownMinutes: string;
  countdownSeconds: string;
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
  attireTitle: string;
  attireSubtitle: string;
  weddingAttireTitle: string;
  weddingAttireText: string;
  womenLabel: string;
  menLabel: string;
  womenAttireText: string;
  menAttireText: string;
  fridayAttireTitle: string;
  fridayAttireText: string;
  sundayAttireTitle: string;
  sundayAttireText: string;
  travelTag: string;
  travelTitle: string;
  accommodationTag: string;
  accommodationTitle: string;
  accommodationText: string;
   homeBaseTitle: string;
  homeBaseText: string;
  airportsTitle: string;
  airportsIntro: string;
  transportationTitle: string;
transportationNotes: string[];
accommodationSectionTitle: string;  hotelName: string;
  hotelIntro: string;
  whyStayTitle: string;
  specialRatesTitle: string;
  specialRatesText: string;
  bookingInstructionsTitle: string;
  bookingInstructionsText: string;
  brochureLinkLabel: string;
  bookingFormLinkLabel: string;
  weddingTransportationTitle: string;
  weddingTransportationText: string;
  weekendEventsTitle: string;
  weekendEventsText: string;
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
  highlightsLabel: string;
  sanGimignanoTitle: string;
  sanGimignanoText: string;
  sanGimignanoHighlights: string;
  florenceTitle: string;
  florenceText: string;
  florenceHighlights: string;
  luccaTitle: string;
  luccaText: string;
  sienaTitle: string;
  sienaText: string;
  pisaTitle: string;
  pisaText: string;
  experiencesTitle: string;
  experiencesList: string[];
  foodsDrinksTitle: string;
  foodsTitle: string;
  foodsText: string;
  drinksTitle: string;
  drinksText: string;
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
    travelSubtitle:
      'We’ve gathered the key travel details for the wedding weekend in one place, including accommodations, transportation, airport recommendations, and booking information to help make your trip as smooth as possible.',
    rsvpTitle: 'RSVP',
    rsvpSubtitle: 'RSVP details will be shared closer to the wedding date.',
    rsvpBody: 'Please check back later for updates.',
    rsvpButton: 'RSVP',
    updatesButton: 'Opt In for Updates',
    countdownDays: 'Days',
    countdownHours: 'Hours',
    countdownMinutes: 'Minutes',
    countdownSeconds: 'Seconds',
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
scheduleTitle: 'Weekend Schedule',
scheduleSubtitle:
  'Below you’ll find an overview of the wedding weekend. Exact times and locations will be shared closer to the celebration.',
attireTitle: 'Attire',
attireSubtitle:
  'Dress code details for each event throughout the wedding weekend.',
weddingAttireTitle: 'Saturday: Wedding Day',
weddingAttireText: '',
womenLabel: 'Women',
menLabel: 'Men',
womenAttireText:
  'Floor-length gowns are preferred. Think elegant fabrics, timeless silhouettes, and rich, solid colors. Please also keep in mind that portions of the celebration will take place outdoors on grass, gravel, and stone pathways.',
menAttireText:
  'Tuxedos or dark suits with a tie or bow tie are preferred.',
fridayAttireTitle: 'Friday: Welcome Dinner',
fridayAttireText:
  'Casual, Dressy. A relaxed Tuscan evening calls for attire that is polished yet comfortable.',
sundayAttireTitle: 'Sunday: Pool Party',
sundayAttireText:
  'Casual / Relaxed. Vacation-ready attire is encouraged for an afternoon of sunshine, poolside lounging, and celebrating together one last time.',travelTag: 'Travel & Stay',
    travelTitle: 'Getting there',
    accommodationTag: 'Accommodations',
    accommodationTitle: 'Hotel details coming soon',
    accommodationText:
      'We’ve gathered the key travel details for the wedding weekend in one place, including accommodations, transportation, airport recommendations, and booking information to help make your trip as smooth as possible.',
    homeBaseTitle: 'Our Home Base: San Gimignano',
    homeBaseText:
      'San Gimignano, a historic hilltop town in the heart of Tuscany, will be our home base for the wedding weekend. Known for its medieval towers, cobblestone streets, and beautiful countryside views, it offers the perfect setting to experience the charm of Tuscany.',
    airportsTitle: 'Airports',
    airportsIntro:
      'We typically recommend flying into Florence for the most convenient travel experience, but please feel free to choose whichever airport works best for your plans.',
    transportationTitle: 'Transportation',
    transportationNotes: [
      'Complimentary transportation will be provided between Cappuccina Country Resort & Spa and Antica Fattoria di Paterno on the wedding day.',
      'If you plan to explore Tuscany before or after the wedding weekend, we recommend renting a car, as taxis and rideshare services are limited in the area.',
      'For airport transfer requests, you may reach out directly to the concierge team at Cappuccina or review other transportation options here.',
    ],
    accommodationSectionTitle: 'Accommodation',
    hotelName: 'Cappuccina Country Resort & Spa',
    hotelIntro:
      'While there are many accommodation options in and around San Gimignano, Cappuccina Country Resort & Spa is our recommended hotel for the wedding weekend. The resort offers beautiful Tuscan countryside views, complimentary breakfast, a spa, and convenient access to all wedding festivities.',
    whyStayTitle: 'Why Stay Here?',
    specialRatesTitle: 'Special Guest Rates',
    specialRatesText:
      'We have secured special negotiated rates for our guests. Rooms are available on a first-come, first-served basis, so we encourage booking early.',
    bookingInstructionsTitle: 'Booking Instructions',
bookingInstructionsText:
  'Please complete and submit the reservation form provided below to secure your room at the wedding rate.',    brochureLinkLabel: 'Cappuccina Country Resort Brochure',
    bookingFormLinkLabel: 'Cappuccina Country Resort Booking Form',
    weddingTransportationTitle: 'Wedding Transportation',
    weddingTransportationText:
      'Complimentary shuttles will be provided between Cappuccina Country Resort & Spa and Antica Fattoria di Paterno on the wedding day.',
    weekendEventsTitle: 'Weekend Events',
    weekendEventsText:
      'Our Welcome Party and Pool Party will take place nearby, making Cappuccina Country Resort & Spa the most convenient place to stay throughout the wedding weekend.',
    plannedAdditions: 'Planned additions',
    anchorHotel: 'Anchor hotel',
    overflowOptions: 'Overflow options',
    shuttleDetails: 'Shuttle details',
    townGuide: 'Nearby town guide',
    registryTag: 'Registry',
registryTitle: 'Registry',
registryText:
  'Having you with us in Tuscany is truly the greatest gift. For those who have asked, we’ll also be sharing a registry with contributions toward our honeymoon, newlywed fund, and future home.',
registryButton: 'View Our Registry',    weddingPartyTag: 'Wedding Party',
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
    thingsToDoTitle: 'Things to Do',
    thingsToDoText:
      'If you’re spending extra time in Tuscany, here are a few of our favorite nearby places and experiences to enjoy during your trip.',
    highlightsLabel: 'Highlights',
    sanGimignanoTitle: 'San Gimignano',
    sanGimignanoText:
      'Our home base for the wedding weekend, known for its medieval towers, beautiful views, Vernaccia wine, and gelato.',
    sanGimignanoHighlights:
      'Torre Grossa, Piazza della Cisterna, Vernaccia wine, and Gelateria Dondoli.',
    florenceTitle: 'Florence',
    florenceText:
      'A city we’ve come to know well throughout the wedding planning process, filled with incredible art, architecture, shopping, and food.',
    florenceHighlights:
      'The Duomo, Ponte Vecchio, Uffizi Gallery, leather shopping, and rooftop aperitivos.',
    luccaTitle: 'Lucca',
    luccaText:
      'A relaxed and charming walled city, perfect for strolling, biking, and enjoying a quieter side of Tuscany.',
    sienaTitle: 'Siena',
    sienaText:
      'A beautiful medieval city full of history, charm, and classic Tuscan character.',
    pisaTitle: 'Pisa',
    pisaText:
      'Much more than its famous tower, Pisa offers beautiful historic sites, riverside walks, and lively cafés.',
    experiencesTitle: 'Experiences',
    experiencesList: [
      'Wine tastings',
      'Cooking classes',
      'Vespa tours',
      'Hot air balloon rides',
      'Truffle hunting',
    ],
    foodsDrinksTitle: 'Foods & Drinks to Try',
    foodsTitle: 'Foods',
    foodsText:
      'Bistecca alla Fiorentina, pappardelle al cinghiale, pici cacio e pepe, pecorino Toscano, truffle dishes, gelato',
    drinksTitle: 'Drinks',
    drinksText:
      'Chianti Classico, Vernaccia di San Gimignano, spritzes, and Negronis',    questionsTag: 'Questions',
    questionsTitle: 'Frequently asked questions',
    footerLeft: 'Daniella & Victor · May 15, 2027',
    footerRight: 'More details coming as the weekend plans are finalized.',
nav: {
  home: 'Home',
  travel: 'Travel',
  schedule: 'Schedule',
  attire: 'Attire',
  registry: 'Registry',
  weddingParty: 'Wedding Party',
  gallery: 'Gallery',
  thingsToDo: 'Things To Do',
  faqs: 'FAQs',
  rsvp: 'RSVP',
},
travelNotes: [
  'Florence Airport (FLR) — approximately 45 minutes away.',
  'Pisa International Airport (PSA) — approximately 1 hour away.',
  'Bologna Airport (BLQ) — approximately 2 hours away.',
  'Rome Fiumicino Airport (FCO) — approximately 3 hours away.',
],    events: [
  {
    day: 'Friday',
    title: 'Welcome Dinner',
    date: 'May 14, 2027',
    venue: 'San Gimignano',
    time: 'Evening',
    description:
      'Join us as we kick off the wedding weekend with a relaxed welcome dinner. Enjoy great food, drinks, and the opportunity to reconnect with family and friends before the big day.',
  },
  {
    day: 'Saturday',
    title: 'Wedding Day',
    date: 'May 15, 2027',
    venue: 'Antica Fattoria di Paterno',
    address: 'Via Paterno 48 - 50025 Montespertoli (Toscana)',
    addressUrl: 'https://maps.google.com/?q=Via+Paterno+48,+50025+Montespertoli,+Toscana,+Italy',
    time: 'Late Afternoon',
    description:
      'Our wedding celebration will take place at Antica Fattoria di Paterno near Montespertoli. Ceremony, cocktails, dinner, and dancing to follow.',
  },
  {
    day: 'Sunday',
    title: 'Farewell Lunch & Pool Party',
    date: 'May 16, 2027',
    venue: 'San Gimignano',
    time: 'Early Afternoon',
    description:
      'Before everyone heads home, join us for one last gathering to relax, enjoy lunch by the pool, and soak in the Tuscan sunshine with family and friends.',
  },
],
    faqs: [
      {
        q: 'Can I bring my children?',
        a: 'While we love your little ones, our wedding weekend will be adults-only, with the exception of children in the wedding party. Thank you so much for understanding.',
      },
      {
        q: 'Can I bring a plus one?',
        a: 'If a guest has been reserved for you, it will be reflected on your invitation and RSVP. Unfortunately, we’re only able to accommodate the guests listed.',
      },
      {
        q: 'When should I arrive?',
        a: 'We recommend arriving by Friday afternoon so you can join us for the Welcome Dinner that evening.',
      },
      {
        q: 'When should I depart?',
        a: 'Our Farewell Lunch & Pool Party will take place on Sunday, so we recommend departing on Monday if your schedule allows.',
      },
      {
        q: 'Where should I stay?',
        a: 'We recommend staying in or near San Gimignano, as our Friday and Sunday events will be held there. We have specially negotiated rates with our recommended hotel, Cappuccina Country Resort & Spa, and wedding-day transportation will be provided to and from this location. Please visit the Travel page for additional details.',
      },
      {
        q: 'Can I stay extra nights at the hotel before or after the wedding weekend?',
        a: 'Yes. If you would like to extend your stay, you can indicate that on the booking form or speak directly with the hotel to adjust your reservation.',
      },
      {
        q: 'Will transportation be provided on the wedding day?',
        a: 'Yes. Transportation will be provided on the wedding day, with pick-up and drop-off at Cappuccina Country Resort & Spa.',
      },
      {
        q: 'Can I drive myself to the wedding and weekend events?',
        a: 'Yes. Parking will be available on site.',
      },
      {
        q: 'Do I need a rental car?',
        a: 'A rental car is recommended if you plan to explore Tuscany during your stay. Otherwise, we suggest arranging private transportation through your hotel or a local transfer company for travel between the airport and San Gimignano.',
      },
      {
        q: 'What will the weather be like?',
        a: 'Mid-May in Tuscany is typically mild and beautiful, with daytime temperatures around 65–75°F (18–24°C). Evenings can be cooler, so bringing a light wrap or jacket is recommended.',
      },
      {
        q: 'Will the events be indoors or outdoors?',
        a: 'Our wedding weekend events will take place outdoors. While we have contingency plans in the event of inclement weather, we recommend bringing appropriate footwear, a light layer for cooler evenings, and sunglasses for daytime events.',
      },
      {
        q: 'When will RSVP be due?',
        a: 'An RSVP deadline will be shared once formal invitations have been sent.',
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
    travelSubtitle:
      'Wir haben alle wichtigen Reisedetails für das Hochzeitswochenende an einem Ort zusammengestellt, einschließlich Unterkünften, Transportinformationen, Flughafenvorschlägen und Buchungshinweisen, um eure Reise so reibungslos wie möglich zu gestalten.',
    rsvpTitle: 'Antwort',
    rsvpSubtitle: 'Die RSVP-Details werden näher am Hochzeitstermin bekannt gegeben.',
    rsvpBody: 'Bitte schauen Sie später noch einmal vorbei, um Updates zu erhalten.',
    rsvpButton: 'Antwort',
    updatesButton: 'Updates erhalten',
    countdownDays: 'Tage',
    countdownHours: 'Stunden',
    countdownMinutes: 'Minuten',
    countdownSeconds: 'Sekunden',
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
scheduleTitle: 'Wochenendablauf',
scheduleSubtitle:
  'Unten findet ihr einen Überblick über das Hochzeitswochenende. Genaue Uhrzeiten und Orte werden näher an der Feier bekannt gegeben.',
attireTitle: 'Dresscode',
attireSubtitle:
  'Hier findet ihr die Dresscode-Infos für die einzelnen Veranstaltungen des Hochzeitswochenendes.',
weddingAttireTitle: 'Samstag: Hochzeitstag',
weddingAttireText: '',
womenLabel: 'Damen',
menLabel: 'Herren',
womenAttireText:
  'Bodenlange Kleider werden bevorzugt. Denkt an elegante Stoffe, zeitlose Silhouetten und satte, einfarbige Töne. Bitte beachtet außerdem, dass Teile der Feier im Freien auf Rasen, Kies und Steinwegen stattfinden.',
menAttireText:
  'Smokings oder dunkle Anzüge mit Krawatte oder Fliege werden bevorzugt.',
fridayAttireTitle: 'Freitag: Willkommensdinner',
fridayAttireText:
  'Casual, gepflegt. Ein entspannter toskanischer Abend verlangt nach einem Look, der gepflegt und zugleich bequem ist.',
sundayAttireTitle: 'Sonntag: Pool Party',
sundayAttireText:
  'Casual / Entspannt. Urlaubsgeeignete Kleidung ist ideal für einen sonnigen Nachmittag am Pool und ein letztes gemeinsames Feiern.',
    travelTag: 'Reise & Aufenthalt',
    travelTitle: 'Anreise',
    accommodationTag: 'Unterkünfte',
    accommodationTitle: 'Hoteldetails folgen',
    accommodationText:
      'Wir haben alle wichtigen Reisedetails für das Hochzeitswochenende an einem Ort zusammengestellt, darunter Unterkünfte, Transportinformationen, Flughafenvorschläge und Buchungshinweise, um eure Reise so reibungslos wie möglich zu gestalten.',
    homeBaseTitle: 'Unser Ausgangspunkt: San Gimignano',
    homeBaseText:
      'San Gimignano, eine historische Hügellandschaftsstadt im Herzen der Toskana, wird unser Ausgangspunkt für das Hochzeitswochenende sein. Bekannt für ihre mittelalterlichen Türme, gepflasterten Straßen und wunderschönen Ausblicke auf die toskanische Landschaft, bietet sie den perfekten Rahmen, um den Charme der Toskana zu erleben.',
    airportsTitle: 'Flughäfen',
    airportsIntro:
      'Für die einfachste Anreise empfehlen wir in der Regel einen Flug nach Florenz, aber selbstverständlich könnt ihr auch den Flughafen wählen, der am besten zu euren Reiseplänen passt.',
    transportationTitle: 'Transport',
    transportationNotes: [
      'Am Hochzeitstag wird ein kostenloser Transfer zwischen dem Cappuccina Country Resort & Spa und Antica Fattoria di Paterno angeboten.',
      'Wenn ihr die Toskana vor oder nach dem Hochzeitswochenende erkunden möchtet, empfehlen wir einen Mietwagen, da Taxis und Fahrdienste in der Gegend nur eingeschränkt verfügbar sind.',
      'Für Flughafentransfers könnt ihr euch direkt an das Concierge-Team von Cappuccina wenden oder hier weitere Transportmöglichkeiten ansehen.',
    ],
    accommodationSectionTitle: 'Unterkunft',
    hotelName: 'Cappuccina Country Resort & Spa',
    hotelIntro:
      'Obwohl es viele Unterkunftsmöglichkeiten in und um San Gimignano gibt, ist das Cappuccina Country Resort & Spa unser empfohlenes Hotel für das Hochzeitswochenende. Das Resort bietet einen wunderschönen Blick auf die toskanische Landschaft, Frühstück inklusive, ein Spa und eine praktische Lage in der Nähe aller Hochzeitsveranstaltungen.',
    whyStayTitle: 'Warum hier übernachten?',
    specialRatesTitle: 'Sonderkonditionen für Gäste',
    specialRatesText:
      'Wir haben für unsere Gäste spezielle ausgehandelte Raten gesichert. Die Zimmer werden nach dem Prinzip „first come, first served“ vergeben, daher empfehlen wir eine frühzeitige Buchung.',
    bookingInstructionsTitle: 'Buchungshinweise',
bookingInstructionsText:
  'Bitte füllt das untenstehende Reservierungsformular aus und sendet es ab, um euer Zimmer zum Hochzeitsrabatt zu sichern.',    brochureLinkLabel: 'Cappuccina Country Resort Broschüre',
    bookingFormLinkLabel: 'Cappuccina Country Resort Buchungsformular',
    weddingTransportationTitle: 'Hochzeitstransport',
    weddingTransportationText:
      'Am Hochzeitstag wird ein kostenloser Shuttle zwischen dem Cappuccina Country Resort & Spa und Antica Fattoria di Paterno angeboten.',
    weekendEventsTitle: 'Wochenendveranstaltungen',
    weekendEventsText:
      'Unsere Welcome Party und Pool Party finden in der Nähe statt, sodass das Cappuccina Country Resort & Spa die bequemste Unterkunft für das gesamte Hochzeitswochenende ist.',
    plannedAdditions: 'Geplante Ergänzungen',
    anchorHotel: 'Haupthotel',
    overflowOptions: 'Weitere Optionen',
    shuttleDetails: 'Shuttle-Details',
    townGuide: 'Guide zur Umgebung',
    registryTag: 'Geschenkeliste',
   registryTitle: 'Geschenkeliste',
registryText:
  'Euch in der Toskana bei uns zu haben, ist für uns wirklich das größte Geschenk. Für alle, die gefragt haben, werden wir außerdem eine Geschenkeliste mit Beiträgen zu unserer Hochzeitsreise, unserem Newlywed Fund und unserem zukünftigen Zuhause teilen.',
registryButton: 'Zur Geschenkeliste',
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
    thingsToDoTitle: 'Aktivitäten',
    thingsToDoText:
      'Wenn ihr etwas mehr Zeit in der Toskana verbringt, findet ihr hier einige unserer Lieblingsorte und Erlebnisse für euren Aufenthalt.',
    highlightsLabel: 'Highlights',
    sanGimignanoTitle: 'San Gimignano',
    sanGimignanoText:
      'Unser Ausgangspunkt für das Hochzeitswochenende, bekannt für mittelalterliche Türme, schöne Ausblicke, Vernaccia-Wein und Gelato.',
    sanGimignanoHighlights:
      'Torre Grossa, Piazza della Cisterna, Vernaccia-Wein und Gelateria Dondoli.',
    florenceTitle: 'Florenz',
    florenceText:
      'Eine Stadt, die wir im Laufe der Hochzeitsplanung gut kennengelernt haben – voller beeindruckender Kunst, Architektur, Shopping und Kulinarik.',
    florenceHighlights:
      'Der Dom, Ponte Vecchio, die Uffizien, Leder-Shopping und Rooftop-Aperitivos.',
    luccaTitle: 'Lucca',
    luccaText:
      'Eine entspannte und charmante Stadt mit Stadtmauer – ideal zum Spazierengehen, Radfahren und um eine ruhigere Seite der Toskana zu genießen.',
    sienaTitle: 'Siena',
    sienaText:
      'Eine wunderschöne mittelalterliche Stadt voller Geschichte, Charme und typisch toskanischem Charakter.',
    pisaTitle: 'Pisa',
    pisaText:
      'Pisa ist weit mehr als nur sein berühmter Turm und bietet schöne historische Sehenswürdigkeiten, Spaziergänge am Fluss und lebhafte Cafés.',
    experiencesTitle: 'Erlebnisse',
    experiencesList: [
      'Weinverkostungen',
      'Kochkurse',
      'Vespa-Touren',
      'Heißluftballonfahrten',
      'Trüffelsuche',
    ],
    foodsDrinksTitle: 'Kulinarisches zum Probieren',
    foodsTitle: 'Essen',
    foodsText:
      'Bistecca alla Fiorentina, Pappardelle al Cinghiale, Pici Cacio e Pepe, Pecorino Toscano, Trüffelgerichte, Gelato',
    drinksTitle: 'Getränke',
    drinksText:
      'Chianti Classico, Vernaccia di San Gimignano, Spritzes und Negronis',
    questionsTag: 'Fragen',
    questionsTitle: 'Häufige Fragen',
    footerLeft: 'Daniella & Victor · 15. Mai 2027',
    footerRight: 'Weitere Details folgen, sobald die Wochenendplanung finalisiert ist.',
nav: {
  home: 'Startseite',
  travel: 'Reise',
  schedule: 'Ablauf',
  attire: 'Dresscode',
  registry: 'Geschenkeliste',
  weddingParty: 'Hochzeitsgesellschaft',
  gallery: 'Galerie',
  thingsToDo: 'Aktivitäten',
  faqs: 'FAQs',
  rsvp: 'Antwort',
},
travelNotes: [
  'Flughafen Florenz (FLR) — etwa 45 Minuten entfernt.',
  'Pisa International Airport (PSA) — etwa 1 Stunde entfernt.',
  'Flughafen Bologna (BLQ) — etwa 2 Stunden entfernt.',
  'Rom Fiumicino (FCO) — etwa 3 Stunden entfernt.',
],   events: [
  {
    day: 'Freitag',
    title: 'Welcome Dinner',
    date: '14. Mai 2027',
    venue: 'San Gimignano',
    time: 'Abend',
    description:
      'Gemeinsam starten wir mit einem entspannten Welcome Dinner in das Hochzeitswochenende. Freut euch auf gutes Essen, Getränke und die Gelegenheit, Familie und Freunde vor dem großen Tag wiederzusehen.',
  },
  {
    day: 'Samstag',
    title: 'Hochzeitstag',
    date: '15. Mai 2027',
    venue: 'Antica Fattoria di Paterno',
    address: 'Via Paterno 48 - 50025 Montespertoli (Toskana)',
    addressUrl: 'https://maps.google.com/?q=Via+Paterno+48,+50025+Montespertoli,+Toscana,+Italy',
    time: 'Später Nachmittag',
    description:
      'Unsere Hochzeitsfeier findet in der Antica Fattoria di Paterno bei Montespertoli statt. Anschließend folgen Trauung, Aperitif, Dinner und Tanz.',
  },
  {
    day: 'Sonntag',
    title: 'Farewell Lunch & Pool Party',
    date: '16. Mai 2027',
    venue: 'San Gimignano',
    time: 'Früher Nachmittag',
    description:
      'Bevor sich alle wieder auf den Heimweg machen, freuen wir uns auf ein letztes gemeinsames Treffen mit Mittagessen am Pool und entspannten Stunden in der toskanischen Sonne mit Familie und Freunden.',
  },
],
    faqs: [
      {
        q: 'Können wir unsere Kinder mitbringen?',
        a: 'So sehr wir eure Kleinen auch mögen, unser Hochzeitswochenende wird – mit Ausnahme der Kinder in der Hochzeitsgesellschaft – adults-only sein. Vielen Dank für euer Verständnis.',
      },
      {
        q: 'Darf ich eine Begleitperson mitbringen?',
        a: 'Falls für euch eine Begleitperson vorgesehen ist, wird dies auf eurer Einladung und beim RSVP entsprechend angegeben. Leider können wir nur die dort aufgeführten Gäste berücksichtigen.',
      },
      {
        q: 'Wann sollten wir anreisen?',
        a: 'Wir empfehlen eine Anreise bis Freitagnachmittag, damit ihr am Abend beim Welcome Dinner dabei sein könnt.',
      },
      {
        q: 'Wann sollten wir abreisen?',
        a: 'Unser Farewell Lunch & Pool Party findet am Sonntag statt. Wenn es euer Zeitplan zulässt, empfehlen wir daher eine Abreise am Montag.',
      },
      {
        q: 'Wo sollten wir übernachten?',
        a: 'Wir empfehlen eine Unterkunft in oder bei San Gimignano, da unsere Veranstaltungen am Freitag und Sonntag dort stattfinden. Für unser empfohlenes Hotel, das Cappuccina Country Resort & Spa, haben wir Sonderkonditionen vereinbart. Der Hochzeitstransport wird ebenfalls von und zu diesem Hotel angeboten. Weitere Informationen findet ihr auf der Travel-Seite.',
      },
      {
        q: 'Können wir vor oder nach dem Hochzeitswochenende zusätzliche Nächte im Hotel bleiben?',
        a: 'Ja. Wenn ihr euren Aufenthalt verlängern möchtet, könnt ihr dies im Buchungsformular angeben oder direkt mit dem Hotel Kontakt aufnehmen, um eure Reservierung anzupassen.',
      },
      {
        q: 'Wird es am Hochzeitstag einen Transport geben?',
        a: 'Ja. Am Hochzeitstag wird ein Transport mit Abholung und Rückfahrt ab dem Cappuccina Country Resort & Spa angeboten.',
      },
      {
        q: 'Können wir selbst zu den Veranstaltungen fahren?',
        a: 'Ja. Parkplätze werden vor Ort verfügbar sein.',
      },
      {
        q: 'Brauchen wir einen Mietwagen?',
        a: 'Ein Mietwagen ist empfehlenswert, wenn ihr die Toskana während eures Aufenthalts erkunden möchtet. Andernfalls empfehlen wir, private Transfers über euer Hotel oder ein lokales Transferunternehmen zwischen dem Flughafen und San Gimignano zu organisieren.',
      },
      {
        q: 'Wie wird das Wetter sein?',
        a: 'Mitte Mai ist das Wetter in der Toskana in der Regel mild und wunderschön, mit Tagestemperaturen von etwa 18–24 °C (65–75 °F). Abends kann es kühler werden, daher empfehlen wir einen leichten Schal, ein Tuch oder eine Jacke.',
      },
      {
        q: 'Finden die Veranstaltungen drinnen oder draußen statt?',
        a: 'Unsere Veranstaltungen am Hochzeitswochenende finden im Freien statt. Für den Fall von schlechtem Wetter haben wir Ausweichmöglichkeiten, dennoch empfehlen wir geeignetes Schuhwerk, eine leichte Schicht für kühlere Abende und eine Sonnenbrille für tagsüber.',
      },
      {
        q: 'Bis wann müssen wir zusagen?',
        a: 'Die RSVP-Frist wird mit dem Versand der formellen Einladungen bekannt gegeben.',
      },
    ],
  },
  es: {
    languageName: 'Español',
    names: 'Daniella & Victor',
    togetherWith: 'Junto con sus familias',
    gettingMarried: 'se casan en la Toscana',
    dateVenue: '15 de Mayo de 2027 · Antica Fattoria di Paterno',
    viewSchedule: 'Ver itinerario',
    travelInfo: 'Información de viaje',
    celebrationTag: 'Nuestra celebración',
    celebrationTitle: 'Un fin de semana de boda en la Toscana',
    celebrationText1:
      'Estamos muy emocionados de celebrar con las personas que más queremos. Este sitio será su punto principal para encontrar detalles del fin de semana de la boda, guía de viaje, hospedaje y actualizaciones a medida que todo vaya tomando forma.',
    celebrationText2:
      'Por ahora, reserven la fecha y comiencen a imaginar un fin de semana inolvidable en Italia con nosotros.',
    travelSubtitle:
      'Hemos reunido toda la información clave de viaje para el fin de semana de la boda en un solo lugar, incluyendo alojamiento, transporte, recomendaciones de aeropuertos e instrucciones de reserva para que su viaje sea lo más sencillo posible.',
    rsvpTitle: 'RSVP',
    rsvpSubtitle: 'Los detalles para confirmar asistencia se compartirán más cerca de la fecha de la boda.',
    rsvpBody: 'Por favor, vuelve a consultar más adelante para ver actualizaciones.',
    rsvpButton: 'RSVP',
    updatesButton: 'Recibir actualizaciones',
    countdownDays: 'Días',
    countdownHours: 'Horas',
    countdownMinutes: 'Minutos',
    countdownSeconds: 'Segundos',
    glance: 'Resumen',
    date: 'Fecha',
    venue: 'Lugar',
    location: 'Ubicación',
    weekendStyle: 'Estilo del fin de semana',
    dateValue: 'Sábado, 15 de Mayo de 2027',
    venueValue: 'Antica Fattoria di Paterno',
    locationValue: 'Toscana, Italia',
    weekendStyleValue: 'Boda destino con varios eventos',
scheduleTag: 'Itinerario del fin de semana',
scheduleTitle: 'Itinerario del Fin de Semana',
scheduleSubtitle:
  'A continuación encontrarán un resumen del fin de semana de la boda. Los horarios y lugares exactos se compartirán más cerca de la celebración.',
attireTitle: 'Vestimenta',
attireSubtitle:
  'Aquí encontrarán el código de vestimenta para cada evento del fin de semana de la boda.',
weddingAttireTitle: 'Sábado: Día de la Boda',
weddingAttireText: '',
womenLabel: 'Mujeres',
menLabel: 'Hombres',
womenAttireText:
  'Se prefieren vestidos largos. Piensen en telas elegantes, siluetas atemporales y colores sólidos intensos. También tengan en cuenta que parte de la celebración será al aire libre sobre césped, grava y caminos de piedra.',
menAttireText:
  'Se prefieren esmóquines o trajes oscuros con corbata o pajarita.',
fridayAttireTitle: 'Viernes: Cena de Bienvenida',
fridayAttireText:
  'Casual, arreglado. Una relajada noche toscana pide un look cómodo pero arreglado.',
sundayAttireTitle: 'Domingo: Pool Party',
sundayAttireText:
  'Casual / Relajado. Se recomienda ropa lista para vacaciones para una tarde de sol, descanso junto a la piscina y una última celebración juntos.',
  travelTag: 'Viaje y estadía',
    travelTitle: 'Cómo llegar',
    accommodationTag: 'Alojamiento',
    accommodationTitle: 'Próximamente detalles del hotel',
    accommodationText:
      'Hemos reunido toda la información clave de viaje para el fin de semana de la boda en un solo lugar, incluyendo alojamiento, transporte, recomendaciones de aeropuertos e instrucciones de reserva para que su viaje sea lo más sencillo posible.',
    homeBaseTitle: 'Nuestra Base: San Gimignano',
    homeBaseText:
      'San Gimignano, un histórico pueblo medieval en lo alto de una colina en el corazón de la Toscana, será nuestra base durante el fin de semana de la boda. Conocido por sus torres medievales, calles empedradas y hermosas vistas al campo toscano, ofrece el entorno perfecto para disfrutar del encanto de la Toscana.',
    airportsTitle: 'Aeropuertos',
    airportsIntro:
      'Normalmente recomendamos volar a Florencia por ser la opción más conveniente, aunque pueden elegir el aeropuerto que mejor se ajuste a sus planes de viaje.',
    transportationTitle: 'Transporte',
    transportationNotes: [
      'Se ofrecerá transporte de cortesía entre Cappuccina Country Resort & Spa y Antica Fattoria di Paterno el día de la boda.',
      'Si planean explorar la Toscana antes o después del fin de semana de la boda, recomendamos alquilar un coche, ya que los taxis y servicios de transporte compartido son limitados en la zona.',
      'Para solicitar traslados desde el aeropuerto, pueden comunicarse directamente con el equipo de concierge de Cappuccina o consultar otras opciones de transporte aquí.',
    ],
    accommodationSectionTitle: 'Alojamiento',
    hotelName: 'Cappuccina Country Resort & Spa',
    hotelIntro:
      'Aunque hay muchas opciones de alojamiento en San Gimignano y sus alrededores, Cappuccina Country Resort & Spa es nuestro hotel recomendado para el fin de semana de la boda. El resort ofrece hermosas vistas al campo toscano, desayuno incluido, spa y acceso conveniente a todas las celebraciones de la boda.',
    whyStayTitle: '¿Por Qué Hospedarse Aquí?',
    specialRatesTitle: 'Tarifas Especiales para Invitados',
    specialRatesText:
      'Hemos conseguido tarifas especiales negociadas para nuestros invitados. Las habitaciones estarán disponibles por orden de reserva, por lo que recomendamos reservar con anticipación.',
    bookingInstructionsTitle: 'Instrucciones de Reserva',
bookingInstructionsText:
  'Por favor completen y envíen el formulario de reserva que aparece a continuación para asegurar su habitación con la tarifa de la boda.',    brochureLinkLabel: 'Folleto de Cappuccina Country Resort',
    bookingFormLinkLabel: 'Formulario de Reserva de Cappuccina Country Resort',
    weddingTransportationTitle: 'Transporte para la Boda',
    weddingTransportationText:
      'Se ofrecerán traslados de cortesía entre Cappuccina Country Resort & Spa y Antica Fattoria di Paterno el día de la boda.',
    weekendEventsTitle: 'Eventos del Fin de Semana',
    weekendEventsText:
      'Nuestra Fiesta de Bienvenida y Pool Party se llevarán a cabo cerca, lo que convierte a Cappuccina Country Resort & Spa en el lugar más conveniente para hospedarse durante todo el fin de semana de la boda.',
    plannedAdditions: 'Próximamente',
    anchorHotel: 'Hotel principal',
    overflowOptions: 'Opciones adicionales',
    shuttleDetails: 'Detalles del transporte',
    townGuide: 'Guía del pueblo cercano',    registryTag: 'Mesa de regalos',
   registryTitle: 'Mesa de Regalos',
registryText:
  'Tenerlos con nosotros en la Toscana es verdaderamente el mejor regalo. Para quienes nos lo han preguntado, también compartiremos una mesa de regalos con contribuciones para nuestra luna de miel, nuestro fondo de recién casados y nuestro futuro hogar.',
registryButton: 'Ver Nuestra Mesa de Regalos',
    weddingPartyTag: 'Cortejo nupcial',
    weddingPartyTitle: 'Nuestra gente favorita',
    weddingPartyText:
      'Esta sección puede mostrar a tus damas, padrinos, familia y a cualquier persona especial que quieras presentar a los invitados.',
    weddingPartyPlaceholder: 'Próximamente',
    weddingPartyBioPlaceholder: 'Espacio para foto y breve descripción.',
    galleryTag: 'Galería',
    galleryTitle: 'Momentos Capturados',
    galleryText:
      'Agrega fotos de compromiso, recuerdos de viajes o imágenes espontáneas favoritas para que el sitio se sienta más personal.',
     thingsToDoTag: 'Qué Hacer',
    thingsToDoTitle: 'Qué Hacer',
    thingsToDoText:
      'Si van a pasar más tiempo en la Toscana, aquí tienen algunos de nuestros lugares y experiencias favoritas para disfrutar durante su viaje.',
    highlightsLabel: 'Lo más destacado',
    sanGimignanoTitle: 'San Gimignano',
    sanGimignanoText:
      'Nuestra base para el fin de semana de la boda, conocida por sus torres medievales, hermosas vistas, vino Vernaccia y gelato.',
    sanGimignanoHighlights:
      'Torre Grossa, Piazza della Cisterna, vino Vernaccia y Gelateria Dondoli.',
    florenceTitle: 'Florencia',
    florenceText:
      'Una ciudad que hemos llegado a conocer bien durante el proceso de planificación de la boda, llena de arte, arquitectura, compras y comida increíble.',
    florenceHighlights:
      'El Duomo, Ponte Vecchio, la Galería Uffizi, compras de cuero y aperitivos en terrazas.',
    luccaTitle: 'Lucca',
    luccaText:
      'Una ciudad amurallada, relajada y encantadora, perfecta para pasear, andar en bicicleta y disfrutar de un lado más tranquilo de la Toscana.',
    sienaTitle: 'Siena',
    sienaText:
      'Una hermosa ciudad medieval llena de historia, encanto y el clásico carácter toscano.',
    pisaTitle: 'Pisa',
    pisaText:
      'Mucho más que su famosa torre, Pisa ofrece hermosos sitios históricos, paseos junto al río y cafés animados.',
    experiencesTitle: 'Experiencias',
    experiencesList: [
      'Catas de vino',
      'Clases de cocina',
      'Tours en Vespa',
      'Paseos en globo aerostático',
      'Búsqueda de trufas',
    ],
    foodsDrinksTitle: 'Comidas y Bebidas para Probar',
    foodsTitle: 'Comidas',
    foodsText:
      'Bistecca alla Fiorentina, pappardelle al cinghiale, pici cacio e pepe, pecorino Toscano, platos con trufa, gelato',
    drinksTitle: 'Bebidas',
    drinksText:
      'Chianti Classico, Vernaccia di San Gimignano, spritzes y Negronis', questionsTag:'Preguntas',
    questionsTitle: 'Preguntas frecuentes',
    footerLeft: 'Daniella & Victor · 15 de Mayo de 2027',
    footerRight:
      'Pronto compartiremos más detalles a medida que se finalice la planificación del fin de semana.',
nav: {
  home: 'Inicio',
  travel: 'Viaje',
  schedule: 'Agenda',
  attire: 'Vestimenta',
  registry: 'Registro',
  weddingParty: 'Cortejo',
  gallery: 'Galería',
  thingsToDo: 'Qué Hacer',
  faqs: 'FAQs',
  rsvp: 'RSVP',
},
travelNotes: [
  'Aeropuerto de Florencia (FLR) — aproximadamente a 45 minutos.',
  'Aeropuerto Internacional de Pisa (PSA) — aproximadamente a 1 hora.',
  'Aeropuerto de Bolonia (BLQ) — aproximadamente a 2 horas.',
  'Roma Fiumicino (FCO) — aproximadamente a 3 horas.',
],    events: [
  {
    day: 'Viernes',
    title: 'Cena de Bienvenida',
    date: '14 de Mayo de 2027',
    venue: 'San Gimignano',
    time: 'Por la noche',
    description:
      'Acompáñennos mientras damos inicio al fin de semana de la boda con una cena de bienvenida relajada. Disfruten de buena comida, bebidas y la oportunidad de reencontrarse con familiares y amigos antes del gran día.',
  },
  {
    day: 'Sábado',
    title: 'Día de la Boda',
    date: '15 de Mayo de 2027',
    venue: 'Antica Fattoria di Paterno',
    address: 'Via Paterno 48 - 50025 Montespertoli (Toscana)',
    addressUrl: 'https://maps.google.com/?q=Via+Paterno+48,+50025+Montespertoli,+Toscana,+Italy',
    time: 'A última hora de la tarde',
    description:
      'Nuestra celebración de boda tendrá lugar en Antica Fattoria di Paterno, cerca de Montespertoli. Después seguirán la ceremonia, los cócteles, la cena y el baile.',
  },
  {
    day: 'Domingo',
    title: 'Almuerzo de Despedida y Pool Party',
    date: '16 de Mayo de 2027',
    venue: 'San Gimignano',
    time: 'A primeras horas de la tarde',
    description:
      'Antes de que todos regresen a casa, acompáñennos en una última reunión para relajarnos, disfrutar de un almuerzo junto a la piscina y aprovechar el sol de la Toscana con familiares y amigos.',
  },
],
    faqs: [
      {
        q: '¿Puedo llevar a mis hijos?',
        a: 'Aunque queremos mucho a sus pequeños, nuestro fin de semana de boda será solo para adultos, con la excepción de los niños que formen parte del cortejo nupcial. Muchas gracias por su comprensión.',
      },
      {
        q: '¿Puedo llevar acompañante?',
        a: 'Si se les ha reservado un acompañante, aparecerá reflejado en su invitación y en el RSVP. Lamentablemente, solo podremos acomodar a los invitados que figuren allí.',
      },
      {
        q: '¿Cuándo deberíamos llegar?',
        a: 'Recomendamos llegar el viernes por la tarde para que puedan acompañarnos en la Cena de Bienvenida esa noche.',
      },
      {
        q: '¿Cuándo deberíamos regresar?',
        a: 'Nuestro Almuerzo de Despedida y Pool Party será el domingo, por lo que recomendamos regresar el lunes si su horario se lo permite.',
      },
      {
        q: '¿Dónde deberíamos hospedarnos?',
        a: 'Recomendamos hospedarse en San Gimignano o sus alrededores, ya que nuestros eventos del viernes y domingo se celebrarán allí. Hemos negociado tarifas especiales con nuestro hotel recomendado, Cappuccina Country Resort & Spa, y el transporte del día de la boda saldrá y regresará a esta ubicación. Por favor visiten la página de Travel para más detalles.',
      },
      {
        q: '¿Podemos quedarnos noches adicionales en el hotel antes o después del fin de semana de la boda?',
        a: 'Sí. Si desean extender su estancia, pueden indicarlo en el formulario de reserva o comunicarse directamente con el hotel para ajustar su reservación.',
      },
      {
        q: '¿Habrá transporte el día de la boda?',
        a: 'Sí. El transporte del día de la boda incluirá recogida y regreso en Cappuccina Country Resort & Spa.',
      },
      {
        q: '¿Podemos conducir nosotros mismos a la boda y a los eventos del fin de semana?',
        a: 'Sí. Habrá estacionamiento disponible en el lugar.',
      },
      {
        q: '¿Necesitamos alquilar un coche?',
        a: 'Se recomienda alquilar un coche si planean explorar la Toscana durante su estancia. De lo contrario, sugerimos organizar transporte privado a través de su hotel o de una empresa local de traslados para moverse entre el aeropuerto y San Gimignano.',
      },
      {
        q: '¿Cómo será el clima?',
        a: 'A mediados de Mayo, el clima en la Toscana suele ser templado y muy agradable, con temperaturas durante el día de aproximadamente 18–24 °C (65–75 °F). Por la noche puede refrescar, así que recomendamos llevar un chal, una capa ligera o una chaqueta.',
      },
      {
        q: '¿Los eventos serán al aire libre o en interiores?',
        a: 'Los eventos de nuestro fin de semana de boda se llevarán a cabo al aire libre. Aunque contamos con planes de contingencia en caso de mal tiempo, recomendamos traer calzado adecuado, una capa ligera para las noches más frescas y gafas de sol para los eventos durante el día.',
      },
      {
        q: '¿Cuándo será la fecha límite para confirmar asistencia?',
        a: 'La fecha límite para confirmar asistencia se compartirá una vez que se hayan enviado las invitaciones formales.',
      },
    ],
  },
};

type LanguageCode = keyof typeof translations;
type PageKey =
  | 'home'
  | 'travel'
  | 'schedule'
  | 'attire'
  | 'registry'
  | 'wedding-party'
  | 'gallery'
  | 'things-to-do'
  | 'faqs'
  | 'rsvp';

type LanguageButton = {
  code: LanguageCode;
  label: string;
  symbol: string;
};

const languages: LanguageButton[] = [
  { code: 'en', label: 'EN', symbol: '' },
  { code: 'de', label: 'DE', symbol: '' },
  { code: 'es', label: 'ES', symbol: '' },
];

function getNavItems(t: TranslationEntry): { id: PageKey; label: string }[] {
  return [
    { id: 'home', label: t.nav.home },
    { id: 'travel', label: t.nav.travel },
    { id: 'schedule', label: t.nav.schedule },
    { id: 'attire', label: t.nav.attire },
    { id: 'registry', label: t.nav.registry },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'things-to-do', label: t.nav.thingsToDo },
    { id: 'faqs', label: t.nav.faqs },
    { id: 'rsvp', label: t.nav.rsvp },
  ];
}

function isPageKey(value: string): value is PageKey {
  return [
    'home',
    'travel',
    'schedule',
    'attire',
    'registry',
    'wedding-party',
    'gallery',
    'things-to-do',
    'faqs',
    'rsvp',
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
    console.assert(getNavItems(entry).length === 9, `Expected 9 nav items for ${code}`);
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
    <section className="mx-auto max-w-6xl px-6 pt-8 pb-16 md:pt-10 md:pb-20">
      <div className="max-w-3xl border-b border-black/10 pb-8">
        <h1 className={`${cormorant.className} text-4xl font-medium text-black md:text-5xl`}>
          {title}
        </h1>
        {subtitle ? <p className="mt-4 text-lg leading-8 text-black/70">{subtitle}</p> : null}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}
export default function WeddingWebsite() {
  const [language, setLanguage] = React.useState<LanguageCode>('en');
  const [page, setPage] = React.useState<PageKey>('home');
const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
const [selectedGalleryIndex, setSelectedGalleryIndex] = React.useState<number | null>(null);

const galleryImages = [
  '/gallery-1.jpg',
  '/gallery-2.jpg',
  '/gallery-3.jpg',
  '/gallery-4.jpg',
  '/gallery-5.jpg',
  '/gallery-6.jpg',
  '/gallery-7.jpg',
  '/gallery-8.jpg',
  '/gallery-9.jpg',
];

const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

React.useEffect(() => {
  const targetDate = new Date('2027-05-15T15:30:00+02:00');

  const updateCountdown = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    setTimeLeft({ days, hours, minutes, seconds });
  };

  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);

return () => clearInterval(interval);
}, []);

React.useEffect(() => {
  setPage(getInitialPage());
}, []);

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
  React.useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (selectedGalleryIndex === null) return;

    if (event.key === 'Escape') closeGallery();
    if (event.key === 'ArrowLeft') showPrevImage();
    if (event.key === 'ArrowRight') showNextImage();
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [selectedGalleryIndex]);

const t = translations[language];
const navItems = getNavItems(t);

const openGallery = (index: number) => setSelectedGalleryIndex(index);
const closeGallery = () => setSelectedGalleryIndex(null);

const showPrevImage = () => {
  setSelectedGalleryIndex((prev) =>
    prev === null ? 0 : (prev - 1 + galleryImages.length) % galleryImages.length
  );
};

const showNextImage = () => {
  setSelectedGalleryIndex((prev) =>
    prev === null ? 0 : (prev + 1) % galleryImages.length
  );
};

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
      <section className="mx-auto max-w-6xl px-6 pt-8 pb-10 md:pt-12 md:pb-14">
        <div className="grid gap-6 md:grid-cols-[1fr_1.15fr] md:gap-10 md:items-center">
          <div className="order-2 md:order-1">
   <h1 className={`${cormorant.className} text-4xl font-medium leading-[0.95] text-black md:text-6xl`}>
  {t.locationValue}
</h1>
<p className={`${cormorant.className} mt-3 text-xl font-medium text-black/75 md:text-2xl`}>
  {t.dateValue}
</p>

<p className="mt-6 max-w-[540px] text-[15px] leading-7 text-black/70">
  {t.celebrationText1}
</p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
  <a
    href="#rsvp"
    className="inline-flex items-center justify-center rounded-sm border border-black bg-black px-6 py-3 text-sm font-medium tracking-[0.08em] text-white transition hover:opacity-90"
  >
    {t.rsvpButton}
  </a>

  <a
    href="https://chat.whatsapp.com/Do0n8ZnFsNs5idxasXJitn"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center rounded-sm border border-black bg-black px-6 py-3 text-sm font-medium tracking-[0.08em] text-white transition hover:opacity-90"
  >
    {t.updatesButton}
  </a>
</div>

            <div className="mt-8">
              <div className="grid max-w-[420px] grid-cols-4 gap-3">
                <div className="text-center">
                  <p className="text-2xl font-serif text-black md:text-3xl">{timeLeft.days}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-black/55">{t.countdownDays}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-serif text-black md:text-3xl">{timeLeft.hours}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-black/55">{t.countdownHours}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-serif text-black md:text-3xl">{timeLeft.minutes}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-black/55">{t.countdownMinutes}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-serif text-black md:text-3xl">{timeLeft.seconds}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-black/55">{t.countdownSeconds}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
  <div className="mx-auto w-full max-w-[760px] overflow-hidden rounded-sm shadow-sm">
    <img
      src="/header-right.jpg"
      alt="Hero image"
      className="h-[240px] w-full object-cover object-center md:h-[520px] md:[object-position:50%_82%]"
    />
  </div>
</div>
        </div>
      </section>
    </>
  );
       case 'travel':
        return (
          <section className="mx-auto max-w-6xl px-6 py-14 md:py-18">
            <div className="space-y-14 md:space-y-16">
              <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:items-start">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-black/45">
                    {t.travelTag}
                  </p>
                  <h2 className={`${cormorant.className} mt-3 text-3xl font-medium text-black md:text-4xl`}>
                    {t.homeBaseTitle}
                  </h2>
                  <p className="mt-5 text-base leading-7 text-black/70">
                    {t.homeBaseText}
                  </p>
                </div>

                <div className="md:-mt-6">
  <img
    src="/sangimignano.jpg"
                    alt="San Gimignano"
                    className="h-[220px] w-full rounded-sm object-cover md:h-[280px]"
                  />
                </div>
              </div>

              <div className="grid gap-10 md:grid-cols-2 md:gap-12 md:items-start">
                <div>
                  <h2 className={`${cormorant.className} text-3xl font-medium text-black md:text-4xl`}>
                    {t.airportsTitle}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-black/70">
                    {t.airportsIntro}
                  </p>
                  <ul className="mt-5 list-disc pl-6 text-base leading-7 text-black/70 marker:text-black/60">
                    {t.travelNotes.map((note) => (
                      <li key={note} className="border-b border-black/10 pb-4 mb-4">
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className={`${cormorant.className} text-3xl font-medium text-black md:text-4xl`}>
                    {t.transportationTitle}
                  </h2>
                  <ul className="mt-4 list-disc pl-6 text-base leading-7 text-black/70 marker:text-black/60">
                    {t.transportationNotes.map((note) => (
                      <li key={note} className="border-b border-black/10 pb-4 mb-4">
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className={`${cormorant.className} text-3xl font-medium text-black md:text-4xl`}>
                  {t.accommodationSectionTitle}
                </h2>

                <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:items-start">
                  <div>
                    <h3 className={`${cormorant.className} text-2xl font-medium text-black`}>
                      {t.hotelName}
                    </h3>
                    <p className="mt-4 leading-7 text-black/70">{t.hotelIntro}</p>
                  </div>

                  <div className="md:-mt-20">
  <img
    src="/cappuccina.jpg"
                      alt="Cappuccina Country Resort & Spa"
                      className="h-[220px] w-full rounded-sm object-cover md:h-[280px]"
                    />
                  </div>
                </div>

                <div className="space-y-6">

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="border-b border-black/10 pb-5">
                      <p className="text-sm uppercase tracking-[0.2em] text-black/45">
                        {t.specialRatesTitle}
                      </p>
                      <p className="mt-3 leading-7 text-black/70">{t.specialRatesText}</p>
                    </div>

                    <div className="border-b border-black/10 pb-5">
                      <p className="text-sm uppercase tracking-[0.2em] text-black/45">
                        {t.weekendEventsTitle}
                      </p>
                      <p className="mt-3 leading-7 text-black/70">{t.weekendEventsText}</p>
                    </div>

                    <div className="border-b border-black/10 pb-5">
                      <p className="text-sm uppercase tracking-[0.2em] text-black/45">
                        {t.bookingInstructionsTitle}
                      </p>
                      <p className="mt-3 leading-7 text-black/70">{t.bookingInstructionsText}</p>

                      <div className="mt-4 flex flex-col gap-3">
                        <a
                          href="/Cappuccina Country Resort Brochure.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm underline underline-offset-4 text-black/80 hover:text-black"
                        >
                          {t.brochureLinkLabel}
                        </a>
                        <a
                          href="/Cappuccina Country Resort Booking Form.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm underline underline-offset-4 text-black/80 hover:text-black"
                        >
                          {t.bookingFormLinkLabel}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case 'schedule':
  return (
    <PageShell title={t.scheduleTitle} subtitle={t.scheduleSubtitle}>
      <div className="grid gap-8 md:grid-cols-3">
        {t.events.map((event) => (
          <div key={event.title} className="border-b border-black/10 pb-6">
            <p className="text-sm uppercase tracking-[0.25em] text-black/45">
              {event.day}
            </p>
            <h3 className={`${cormorant.className} mt-3 text-2xl font-medium text-black`}>
              {event.title}
            </h3>
            <p className="mt-4 text-sm font-medium text-black/45">{event.date}</p>
            <p className="mt-1 text-sm font-medium text-black/45">{event.venue}</p>
            {event.address && event.addressUrl ? (
              <a
                href={event.addressUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-sm text-black/60 underline underline-offset-4 hover:text-black"
              >
                {event.address}
              </a>
            ) : null}
            <p className="mt-3 text-sm font-medium text-black/45">{event.time}</p>
            <p className="mt-5 leading-7 text-black/70">{event.description}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
case 'attire':
  return (
    <section className="mx-auto max-w-6xl px-6 pt-8 pb-16 md:pt-10 md:pb-20">
      <div className="space-y-10">
        <div className="grid gap-8 border-b border-black/10 pb-8 md:grid-cols-[1.05fr_0.95fr] md:items-start md:pb-10">
  <div>
    <h2 className={`${cormorant.className} text-3xl font-medium text-black md:text-4xl`}>
      {t.weddingAttireTitle}
    </h2>
    <p className="mt-4 text-sm uppercase tracking-[0.3em] text-black/45">
      Black Tie Optional
    </p>
    <ul className="mt-5 list-disc space-y-3 pl-6 leading-7 text-black/70 marker:text-black/60">
      <li>
  <span className="font-medium text-black">{t.womenLabel}:</span> {t.womenAttireText}
</li>
<li>
  <span className="font-medium text-black">{t.menLabel}:</span> {t.menAttireText}
</li>
    </ul>
  </div>

  <div className="overflow-hidden rounded-sm bg-[#F7F7F5]">
    <img
      src="/attire.jpg"
      alt="Wedding attire inspiration"
      className="h-[260px] w-full object-contain object-center md:h-[320px] md:object-cover"
    />
  </div>
</div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border-b border-black/10 pb-6">
            <h3 className={`${cormorant.className} text-2xl font-medium text-black`}>
              {t.fridayAttireTitle}
            </h3>
            <p className="mt-3 leading-7 text-black/70">
              {t.fridayAttireText}
            </p>
          </div>

          <div className="border-b border-black/10 pb-6">
            <h3 className={`${cormorant.className} text-2xl font-medium text-black`}>
              {t.sundayAttireTitle}
            </h3>
            <p className="mt-3 leading-7 text-black/70">
              {t.sundayAttireText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
     case 'registry':
  return (
    <PageShell title={t.registryTitle} subtitle={t.registryText}>
      <a
        href="https://www.zola.com/wedding/victoranddaniella/registry"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex rounded-sm border border-black bg-black px-6 py-4 text-white shadow-sm transition hover:opacity-90"
      >
        {t.registryButton}
      </a>
    </PageShell>
  );

      case 'wedding-party':
        return (
          <PageShell title={t.weddingPartyTitle} subtitle={t.weddingPartyText}>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[0, 1, 2, 3].map((index) => (
                <div key={index} className="border-b border-black/10 pb-6">
                  <div className="h-52 bg-[#F7F7F5]" />
                  <h3 className={`${cormorant.className} mt-5 text-xl font-medium text-black`}>
                    {t.weddingPartyPlaceholder}
                  </h3>
                  <p className="mt-2 text-black/70">{t.weddingPartyBioPlaceholder}</p>
                </div>
              ))}
            </div>
          </PageShell>
        );

      case 'gallery':
  return (
    <PageShell title={t.galleryTitle}>
      <div className="mx-auto max-w-[840px] space-y-3">
        <div className="grid gap-3 lg:grid-cols-[2.15fr_0.78fr]">
          <button
            type="button"
            onClick={() => openGallery(0)}
            className="overflow-hidden rounded-[16px] text-left"
          >
            <img
              src={galleryImages[0]}
              alt="Gallery image 1"
              className="h-[300px] w-full object-cover transition hover:opacity-95 sm:h-[400px] lg:h-[625px]"
            />
          </button>

          <div className="grid gap-3">
            {[1, 2, 3].map((index) => (
              <button
                key={index}
                type="button"
                onClick={() => openGallery(index)}
                className="overflow-hidden rounded-[16px] text-left"
              >
                <img
                  src={galleryImages[index]}
                  alt={`Gallery image ${index + 1}`}
                  className="aspect-[1/0.88] w-full object-cover transition hover:opacity-95"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-[1fr_0.98fr] lg:items-start">
          <div className="grid grid-cols-2 gap-3">
            {[4, 5, 6, 7].map((index) => (
              <button
                key={index}
                type="button"
                onClick={() => openGallery(index)}
                className="overflow-hidden rounded-[16px] text-left"
              >
                <img
                  src={galleryImages[index]}
                  alt={`Gallery image ${index + 1}`}
                  className="aspect-square w-full object-cover transition hover:opacity-95"
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => openGallery(8)}
            className="overflow-hidden rounded-[16px] text-left"
          >
            <img
              src={galleryImages[8]}
              alt="Gallery image 9"
              className="h-[190px] w-full object-cover transition hover:opacity-95 sm:h-[230px] lg:h-[420px]"
            />
          </button>
        </div>
      </div>
    </PageShell>
  );

            case 'things-to-do':
        return (
          <PageShell title={t.thingsToDoTitle} subtitle={t.thingsToDoText}>
            <div className="space-y-12">
              <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
                <div>
                  <h2 className={`${cormorant.className} text-3xl font-medium text-black md:text-4xl`}>
                    {t.sanGimignanoTitle}
                  </h2>
                  <p className="mt-6 text-base leading-7 text-black/70">
                    {t.sanGimignanoText}
                  </p>
                  <p className="mt-4 text-base leading-7 text-black/70">
                    <span className="font-medium text-black">{t.highlightsLabel}:</span>{' '}
                    {t.sanGimignanoHighlights}
                  </p>
                </div>

                <div>
  <img
    src="/san-gimignano-1.jpg"
    alt="San Gimignano"
    className="h-[220px] w-full rounded-sm object-cover md:h-[280px]"
  />
</div>
              </div>

              <div className="grid gap-10 border-t border-black/10 pt-10 md:grid-cols-[1.05fr_0.95fr] md:items-start">
                <div>
                  <h2 className={`${cormorant.className} text-3xl font-medium text-black md:text-4xl`}>
                    {t.florenceTitle}
                  </h2>
                  <p className="mt-6 text-base leading-7 text-black/70">
                    {t.florenceText}
                  </p>
                  <p className="mt-4 text-base leading-7 text-black/70">
                    <span className="font-medium text-black">{t.highlightsLabel}:</span>{' '}
                    {t.florenceHighlights}
                  </p>
                </div>

                <div className="md:-mt-6">
                  <img
                    src="/florence.jpg"
                    alt="Florence"
                    className="h-[220px] w-full rounded-sm object-cover md:h-[280px]"
                  />
                </div>
              </div>

              <div className="grid gap-8 border-t border-black/10 pt-10 md:grid-cols-3">
                <div className="border-b border-black/10 pb-6 md:border-b-0 md:pb-0">
                  <h3 className={`${cormorant.className} text-2xl font-medium text-black`}>
                    {t.luccaTitle}
                  </h3>
                  <p className="mt-3 leading-7 text-black/70">{t.luccaText}</p>
                </div>

                <div className="border-b border-black/10 pb-6 md:border-b-0 md:pb-0">
                  <h3 className={`${cormorant.className} text-2xl font-medium text-black`}>
                    {t.sienaTitle}
                  </h3>
                  <p className="mt-3 leading-7 text-black/70">{t.sienaText}</p>
                </div>

                <div className="border-b border-black/10 pb-6 md:border-b-0 md:pb-0">
                  <h3 className={`${cormorant.className} text-2xl font-medium text-black`}>
                    {t.pisaTitle}
                  </h3>
                  <p className="mt-3 leading-7 text-black/70">{t.pisaText}</p>
                </div>
              </div>

              <div className="grid gap-10 border-t border-black/10 pt-10 md:grid-cols-2 md:gap-12">
                <div className="border-b border-black/10 pb-6">
                  <h2 className={`${cormorant.className} text-3xl font-medium text-black md:text-4xl`}>
                    {t.experiencesTitle}
                  </h2>
                  <ul className="mt-6 list-disc pl-6 text-base leading-7 text-black/70 marker:text-black/60">
                    {t.experiencesList.map((item) => (
                      <li key={item} className="pb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-b border-black/10 pb-6">
                  <h2 className={`${cormorant.className} text-3xl font-medium text-black md:text-4xl`}>
                    {t.foodsDrinksTitle}
                  </h2>

                  <div className="mt-6 space-y-5">
                    <div>
                      <h3 className="text-sm uppercase tracking-[0.2em] text-black/45">
                        {t.foodsTitle}
                      </h3>
                      <p className="mt-3 leading-7 text-black/70">{t.foodsText}</p>
                    </div>

                    <div>
                      <h3 className="text-sm uppercase tracking-[0.2em] text-black/45">
                        {t.drinksTitle}
                      </h3>
                      <p className="mt-3 leading-7 text-black/70">{t.drinksText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </PageShell>
        );

case 'faqs':
  return (
    <PageShell title={t.questionsTitle}>
      <div className="grid gap-5">
        {t.faqs.map((item) => (
          <div key={item.q} className="border-b border-black/10 pb-6">
            <h3 className="text-xl font-medium text-black">{item.q}</h3>
            <p className="mt-3 leading-7 text-black/70">{item.a}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );

case 'rsvp':
  return (
    <PageShell title={t.rsvpTitle} subtitle={t.rsvpSubtitle}>
      <div className="border-b border-black/10 pb-6">
        <p className="leading-7 text-black/70">{t.rsvpBody}</p>
      </div>
    </PageShell>
  );
default:
  return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF8F2] text-black">
<header className="relative z-50 border-b border-[#EEE5DA] bg-[#FCF8F2]/95">
  <div className="w-full px-4 py-3 md:px-8">
    <div className="relative hidden md:block pb-4">
<div className="flex flex-col items-center">
  <Image
    src="/dv-logo5.png"
    alt="Daniella and Victor logo"
    width={416}
    height={504}
    unoptimized
    className="h-auto w-[44px] md:w-[66px]"
    priority
  />
<p className={`${cormorant.className} mt-2 text-center text-4xl font-medium text-black md:text-5xl`}>
  Daniella & Victor
</p></div>
      <div className="absolute right-[-16px] top-2 flex items-center md:right-[-20px]">
        {languages.map((item, index) => {
          const active = language === item.code;
          return (
            <React.Fragment key={item.code}>
              {index > 0 && <span className="mx-3 h-5 w-px bg-black/20" />}
              <button
                type="button"
                onClick={() => setLanguage(item.code)}
                aria-label={item.label}
                className={`relative pb-1 text-sm font-medium tracking-[0.08em] transition ${
                  active ? 'text-black' : 'text-black/60 hover:text-black'
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-black" />
                )}
              </button>
            </React.Fragment>
          );
        })}
      </div>
    </div>

<div className="flex items-center justify-between md:block">
  <button
    type="button"
    onClick={() => setMobileMenuOpen((prev) => !prev)}
    className="text-3xl leading-none text-black md:hidden"
    aria-label="Open menu"
  >
    ☰
  </button>

  <div className="flex flex-1 flex-col items-center md:hidden">
    <Image
      src="/dv-logo5.png"
      alt="Daniella and Victor logo"
      width={416}
      height={504}
      unoptimized
      className="h-auto w-[34px]"
      priority
    />
    <p className={`${cormorant.className} mt-1 text-center text-3xl font-medium text-black`}>
      Daniella & Victor
    </p>
  </div>

  <div className="w-8 md:hidden" />

  <div className="hidden md:flex md:justify-center">
        <nav className="flex flex-wrap items-center gap-8">
          {navItems.map((item) => {
            const active = page === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => goToPage(item.id)}
                className={`relative pb-2 text-sm font-medium tracking-[0.08em] transition ${
                  active ? 'text-black' : 'text-black/70 hover:text-black'
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      <div className="md:hidden" />
    </div>
  </div>

  {mobileMenuOpen && (
    <div className="absolute left-0 right-0 top-full z-50 border-t border-[#EEE5DA] bg-[#FCF8F2] px-4 py-4 shadow-md md:hidden">

      <div className="flex flex-col gap-3">
        {navItems.map((item) => {
          const active = page === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                goToPage(item.id);
                setMobileMenuOpen(false);
              }}
              className={`text-left text-sm font-medium transition ${
                active ? 'text-black underline underline-offset-4' : 'text-black/70 hover:text-black'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center border-t border-[#EEE5DA] pt-4">
        {languages.map((item, index) => {
          const active = language === item.code;
          return (
            <React.Fragment key={item.code}>
              {index > 0 && <span className="mx-3 h-4 w-px bg-black/20" />}
              <button
                type="button"
                onClick={() => setLanguage(item.code)}
                aria-label={item.label}
                className={`relative pb-1 text-sm font-medium transition ${
                  active ? 'text-black' : 'text-black/60 hover:text-black'
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute left-0 right-0 -bottom-0.5 h-[2px] bg-black" />
                )}
              </button>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  )}
</header>
      {renderPage()}

      {selectedGalleryIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 px-4 py-8"
          onClick={closeGallery}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closeGallery();
            }}
            className="absolute right-5 top-5 text-3xl text-white/90 hover:text-white"
            aria-label="Close gallery"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrevImage();
            }}
            className="absolute left-4 top-1/2 z-[101] -translate-y-1/2 rounded-full bg-white px-4 py-3 text-2xl text-black shadow-md hover:bg-white/90 md:left-8"
            aria-label="Previous image"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNextImage();
            }}
            className="absolute right-4 top-1/2 z-[101] -translate-y-1/2 rounded-full bg-white px-4 py-3 text-2xl text-black shadow-md hover:bg-white/90 md:right-8"
            aria-label="Next image"
          >
            ›
          </button>

          <div
            className="flex h-full items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedGalleryIndex]}
              alt={`Gallery image ${selectedGalleryIndex + 1}`}
              className="max-h-[88vh] max-w-[88vw] rounded-sm object-contain shadow-2xl"
            />
          </div>
        </div>
      )}

    </div>
  );
}