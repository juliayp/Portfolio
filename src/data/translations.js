const sharedWork = Object.freeze({
  sectionNumber: '04',
  projectIndex: '01',
  title: 'CAFFÈ CARDUCCI',
  values: Object.freeze({
    role: 'Front-End Developer',
    stack: 'HTML · CSS · JavaScript · React',
    year: '2026',
  }),
})

const sharedCaseStudy = Object.freeze({
  opening: Object.freeze({
    eyebrow: 'CASE STUDY · 01',
    title: 'CARDUCCI',
    subtitle: 'Caffè · Restaurant · Grosseto, Italy',
    status: 'DESIGN + DEVELOPMENT',
    year: '2026',
  }),
  openingV2: Object.freeze({
    projectMarker: 'CASE STUDY .01',
    projectLabel: 'THE PROJECT',
    experienceMarker: '02 /',
    experienceLabel: 'THE EXPERIENCE',
  }),
  project: Object.freeze({
    number: '01',
    label: 'THE PROJECT',
    statement: 'A local place, translated into a digital experience.',
    paragraphs: [
      'Carducci is a café and restaurant in the heart of Grosseto, Tuscany.',
      'The goal was to create a digital presence that reflects the character of the place — warm, social and distinctly local — while keeping the experience simple and intuitive.',
    ],
    labels: Object.freeze({
      client: 'Client',
      location: 'Location',
      role: 'Role',
      stack: 'Stack',
    }),
    values: Object.freeze({
      client: 'Carducci',
      location: 'Grosseto, Tuscany',
      role: 'Design & Front-end Development',
      stack: 'React · JavaScript · CSS',
    }),
    metadata: [
      { label: 'ROLE', value: 'Design + Development' },
      { label: 'TYPE', value: 'Caffè · Restaurant' },
      { label: 'LOCATION', value: 'Grosseto, Italy' },
      { label: 'CLIENT', value: 'Caffè Carducci' },
      { label: 'YEAR', value: '2026' },
    ],
  }),
  challenge: Object.freeze({
    number: '02',
    label: 'THE CHALLENGE',
    titleFirst: 'NOT JUST',
    titleSecond: 'A MENU.',
    body: [
      'Carducci already had its own identity offline.',
      'The challenge was not to reinvent it, but to translate its atmosphere into a digital experience.',
    ],
    principles: [
      {
        number: '01',
        title: 'Keep it local',
        text: 'Preserve the personality of Carducci and its connection to Grosseto.',
      },
      {
        number: '02',
        title: 'Keep it simple',
        text: 'Make the menu, location and reservation information immediately accessible.',
      },
      {
        number: '03',
        title: 'Make it feel alive',
        text: 'Use photography, typography and subtle motion to recreate the atmosphere of the café.',
      },
    ],
  }),
  experience: Object.freeze({
    intro: {
      number: '03',
      label: 'THE EXPERIENCE',
      title: 'BUILT TO FEEL LIKE CARDUCCI.',
      text: 'A warm, visual and intuitive experience shaped around the everyday rhythm of the café.',
    },
    firstImpression: {
      number: '01',
      label: 'FIRST IMPRESSION',
      caption: 'HOMEPAGE · DESKTOP',
      alt: 'Carducci website homepage with a full-width café photograph on desktop',
    },
    storyAtmosphere: {
      number: '02',
      label: 'STORY + ATMOSPHERE',
      title: 'MORE THAN INFORMATION.',
      storyCaption: 'LA NOSTRA STORIA · EDITORIAL VIEW',
      storyAlt: 'La nostra storia section of the Carducci website',
      viviCaption: 'VIVI CAFFÈ CARDUCCI · DETAIL',
      viviAlt: 'Vivi Caffè Carducci section with editorial photography',
      aperitivoCaption: 'FOOD & APERITIVO · DESKTOP',
      aperitivoAlt: 'Carducci website section showing food and aperitivo imagery',
    },
    usefulInRealLife: {
      number: '03',
      label: 'USEFUL IN REAL LIFE',
      title: 'SIMPLE WHERE IT MATTERS.',
      menuCaption: 'MENU OVERLAY · DESKTOP',
      menuAlt: 'Open Carducci website menu overlay with navigation options',
      localTitle: 'DESIGNED FOR A REAL PLACE.',
      localCaption: 'LOCATION & MAP · MOBILE',
      localAlt: 'Carducci website location section with a Grosseto map and contact details',
    },
    responsive: {
      number: '06',
      label: 'RESPONSIVE BY DESIGN',
      titleFirst: 'RESPONSIVE',
      titleSecond: 'BY DESIGN.',
      homepageCaption: 'HOMEPAGE · DESKTOP',
      homepageAlt: 'Desktop Carducci homepage with café photography',
      menuCaption: 'MENU · DESKTOP',
      menuAlt: 'Desktop Carducci navigation menu overlay',
      reviewCaption: 'REVIEWS · RESPONSIVE VIEW',
      reviewAlt: 'Carducci review section adapted to a compact screen',
      storyCaption: 'STORY · TABLET',
      storyAlt: 'Carducci story section adapted to a tablet layout',
      mobileCaption: 'REVIEWS · MOBILE',
      mobileAlt: 'Dicono di noi review section on mobile',
    },
  }),
  development: Object.freeze({
    number: '04',
    label: 'THE DEVELOPMENT',
    titleFirst: 'DESIGNED WITH',
    titleSecond: 'INTENT.',
    titleOutlineFirst: 'BUILT WITH',
    titleOutlineSecond: 'CODE.',
    body:
      'The visual identity was only the beginning. Every interaction, responsive state and technical decision was built to support the experience.',
    meta: [
      {
        label: 'FRONT-END',
        value: 'React · JavaScript · CSS',
      },
      {
        label: 'BUILD',
        value: 'Vite',
      },
      {
        label: 'FOCUS',
        value: 'Responsive · Interaction · Accessibility',
      },
    ],
    interaction: Object.freeze({
      number: '02',
      label: 'INTERACTION',
      titleFirst: 'BUILT FOR',
      titleSecond: 'INTERACTION.',
      body:
        'A menu that behaves like part of the interface — managing focus, motion and external content without taking the visitor away from the experience.',
      visualLabel: 'MENU DRAWER / DESKTOP',
      stateLabel: 'REACT · INTERACTION STATE',
      imageAlt: 'Open Carducci desktop Menu Drawer displaying the external café menu',
      annotations: [
        {
          number: '01',
          label: 'FOCUS',
          text: 'Keyboard focus stays inside the experience.',
        },
        {
          number: '02',
          label: 'LIFECYCLE',
          text: 'External content loads only when needed.',
        },
        {
          number: '03',
          label: 'ACCESSIBILITY',
          text: 'Escape · Backdrop · Reduced motion',
        },
      ],
      codeLabel: 'MENU DRAWER / LIFECYCLE',
      codeAriaLabel: 'Menu Drawer reduced-motion lifecycle code',
      principleFirst: 'MOTION IS A PREFERENCE,',
      principleSecond: 'NOT A REQUIREMENT.',
    }),
    gallery: Object.freeze({
      number: '03',
      label: 'GALLERY',
      title: ['SCROLL.', 'DRAG.', 'SWIPE.'],
      secondary: 'KEYBOARD, TOO.',
      body: 'One gallery, designed to respond naturally across mouse, touch and keyboard input.',
      galleryAriaLabel: 'Interactive horizontal Carducci gallery. Scroll, drag, swipe or use arrow keys to explore.',
      imageAlts: [
        'Guests outside Caffè Carducci during an evening event',
        'Carducci bartender preparing a drink behind the bar',
        'Friends enjoying an evening inside Caffè Carducci',
        'Close-up of a cocktail being prepared',
        'Carducci team serving freshly prepared food',
        'Cocktails served at a Carducci table',
      ],
      inputs: [
        {
          number: '01',
          label: 'WHEEL',
          text: 'Vertical input → horizontal movement',
        },
        {
          number: '02',
          label: 'DRAG',
          text: 'Mouse + pen pointer capture',
        },
        {
          number: '03',
          label: 'SWIPE',
          text: 'Touch navigation',
        },
        {
          number: '04',
          label: 'KEYS',
          text: 'Arrow-key lightbox navigation',
        },
      ],
      codeLabel: 'GALLERY / HANDLE WHEEL',
      codeAriaLabel: 'Real Carducci handleWheel implementation excerpt',
      principleFirst: 'NATURAL INPUT.',
      principleSecond: 'INTENTIONAL BEHAVIOUR.',
    }),
    responsive: Object.freeze({
      number: '04',
      label: 'RESPONSIVE',
      titleFirst: 'RESPONSIVE',
      titleSecond: 'BY DESIGN.',
      secondaryFirst: 'NOT JUST SMALLER.',
      secondarySecond: 'RECOMPOSED.',
      body: 'The same visual language, deliberately recomposed for every screen.',
      visualAriaLabel: 'The Carducci Hero recomposed across desktop, tablet and mobile screens',
      screens: [
        {
          label: 'DESKTOP / 1440',
          alt: 'Caffè Carducci Hero displayed in its desktop layout',
        },
        {
          label: 'TABLET / 834',
          alt: 'The same Caffè Carducci Hero recomposed for tablet',
        },
        {
          label: 'MOBILE / 390',
          alt: 'The same Caffè Carducci Hero recomposed for mobile',
        },
      ],
      metrics: [
        {
          label: 'TESTED AT',
          value: '1440 · 834 · 390',
        },
        {
          label: 'LAYOUT BREAKPOINTS',
          value: '1040 · 760 · 430',
        },
      ],
      statements: [
        {
          number: '01',
          label: 'LAYOUT',
          text: 'Columns collapse and content order adapts.',
        },
        {
          number: '02',
          label: 'TYPE & MEDIA',
          text: 'Typography, proportions and image crops respond to available space.',
        },
        {
          number: '03',
          label: 'INTERACTION',
          text: 'Navigation, gallery and menu behaviour adapt for smaller screens.',
        },
      ],
      tools: 'CSS GRID · FLEXBOX · CLAMP() · ASPECT-RATIO · DVH',
    }),
    privacy: Object.freeze({
      number: '05',
      label: 'PRIVACY & PERFORMANCE',
      titleFirst: "WHAT DOESN'T LOAD",
      titleSecond: 'MATTERS TOO.',
      body:
        'Google Maps stays unloaded until the visitor chooses to interact with it — reducing unnecessary external requests while keeping the location easy to access.',
      visualAriaLabel: 'Carducci map before and after visitor activation',
      beforeLabel: 'BEFORE INTERACTION',
      previewLabel: 'LOCAL PREVIEW',
      afterLabel: 'AFTER INTERACTION',
      activeLabel: 'GOOGLE MAPS ACTIVE',
      actionLabel: 'USER ACTION',
      previewAlt: 'Local illustrated Carducci map preview before visitor interaction',
      activeAlt: 'Google Maps active after the Carducci visitor chooses to load it',
      principles: [
        {
          label: 'PRIVACY',
          text: 'External content waits.',
        },
        {
          label: 'PERFORMANCE',
          text: 'Deferred iframe loading.',
        },
        {
          label: 'CONTROL',
          text: 'Activated by the visitor.',
        },
      ],
      codeLabel: 'MAP / CONDITIONAL RENDERING',
      codeAriaLabel: 'Real Carducci conditional map rendering excerpt',
      codeNoteFirst: 'PREVIEW FIRST.',
      codeNoteSecond: 'EXTERNAL ON REQUEST.',
      closingFirst: 'LOAD LESS.',
      closingSecond: 'ASK FIRST.',
    }),
    epilogue: Object.freeze({
      markerFirst: 'DEVELOPMENT',
      markerSecond: 'SUMMARY',
      titleFirst: 'BUILT BEYOND',
      titleSecond: 'THE SCREEN.',
      body: 'The interface is what you see. The decisions behind it are what make it work.',
      principles: [
        {
          number: '01',
          label: 'INTERACTION',
          details: 'Focus · Keyboard · Lifecycle',
        },
        {
          number: '02',
          label: 'INPUT',
          details: 'Wheel · Drag · Touch · Keys',
        },
        {
          number: '03',
          label: 'ADAPTATION',
          details: 'Layout · Type · Media',
        },
        {
          number: '04',
          label: 'CONTROL',
          details: 'Motion · External content · Privacy',
        },
      ],
      closingFirst: 'DESIGNED WITH INTENT.',
      closingSecond: 'BUILT WITH CODE.',
      completeLabel: 'CASE STUDY / COMPLETE',
    }),
  }),
  result: Object.freeze({
    markerNumber: '05',
    markerLabel: 'THE RESULT',
    titleFirst: 'FROM A LOCAL PLACE,',
    titleSecond: 'TO A DIGITAL EXPERIENCE.',
    body: 'A complete digital presence shaped around the character, rhythm and everyday experience of Caffè Carducci.',
    caption: 'FINAL EXPERIENCE / DESKTOP',
    secondaryCaption: 'CAFFÈ CARDUCCI · GROSSETO',
    imageAlt: 'Final desktop homepage experience for Caffè Carducci in Grosseto',
    testimonial: Object.freeze({
      markerLabel: 'CLIENT TESTIMONIAL',
      quote:
        'The site immediately felt welcoming and easy to understand, with simple and intuitive connections to our social media. It reflects our genuine simplicity. What I appreciated most was its ease of use, the social links and the interactive maps showing our location. I will certainly share your contact with others in our sector.',
      author: 'FABIO PERIN',
      role: 'Owner, Caffè Carducci',
      note: 'TRANSLATED FROM THE ORIGINAL ITALIAN',
    }),
    outcome: Object.freeze({
      markerNumber: '02',
      markerLabel: 'OUTCOME',
      titleFirst: 'ONE EXPERIENCE.',
      titleSecond: 'EVERY TOUCHPOINT.',
      supporting:
        'The result is more than a website. It is one connected experience — from first impression to menu, atmosphere, location and access.',
      rows: [
        {
          number: '01',
          label: 'IDENTITY',
          word: 'IDENTITY',
          statement: 'Feels unmistakably Carducci.',
          detail:
            'Photography, typography, colour and pacing work together to preserve the character of the real place.',
        },
        {
          number: '02',
          label: 'DISCOVERY',
          word: 'DISCOVERY',
          statement: 'Everything important, easy to find.',
          detail:
            'Menu, atmosphere, location and essential information live inside one clear experience.',
        },
        {
          number: '03',
          label: 'INTERACTION',
          word: 'INTERACTION',
          statement: 'Natural ways to explore.',
          detail:
            'Navigation, gallery and menu interactions respond to the way people actually browse across devices.',
        },
        {
          number: '04',
          label: 'ACCESS',
          word: 'ACCESS',
          statement: 'Designed for different users and screens.',
          detail:
            'Responsive layouts, keyboard support, motion preferences and deliberate external-content loading extend the experience beyond visuals.',
        },
      ],
      closingFirst: 'DIFFERENT TOUCHPOINTS.',
      closingSecond: 'ONE CARDUCCI.',
    }),
  }),
})

export const translations = {
  en: {
    documentLanguage: 'en',
    skip: 'Skip to content',
    navLabel: 'Primary navigation',
    languageLabel: 'Choose language',
    nav: {
      work: 'WORK',
      about: 'ABOUT',
      contact: 'CONTACT',
    },
    navContext: {
      work: 'VIEW PROJECTS ↗',
      about: 'JULIA — FRONT-END DEVELOPER',
      contact: 'LET’S TALK ↗',
    },
    status: 'AVAILABLE FOR PROJECTS',
    heroGreeting: 'Hi! I’m Julia Yaneva. Based in Tuscany, Italy.',
    heroContactLabel: 'Email Julia Yaneva',
    heroContactText: ['LET’S', 'TALK'],
    description: [
      'I TURN IDEAS INTO DISTINCTIVE, RESPONSIVE WEBSITES FOR REAL BUSINESSES.',
      'I LOVE BOLD TYPOGRAPHY, EDITORIAL DESIGN AND THOUGHTFUL DETAILS.',
      'I LOVE NATURE, PIZZA AND ART.',
    ],
    playWithMe: ['CLICK ME'],
    scroll: 'SCROLL TO EXPLORE',
    menu: 'MENU',
    close: 'CLOSE',
    about: {
      marker: '01 / ABOUT',
      mobileIntro: 'HI, I’M JULIA.',
      titleLines: ['I DESIGN FOR', 'REAL PEOPLE.', 'I BUILD FOR', 'REAL BUSINESSES.'],
      titleHighlights: [null, 'PEOPLE.', null, 'BUSINESSES.'],
      bioLabel: 'A LITTLE ABOUT ME',
      paragraphs: [
        'I’m Julia, a front-end developer based in Tuscany, Italy. I combine visual direction and clean code to create websites that feel distinctive, intuitive and genuinely useful.',
        'My path into web development started with three years of studying front-end. Over time, I became just as interested in how a website feels as in how it works.',
        'Today, I bring those two sides together to create thoughtful digital experiences for real businesses.',
        'Every decision should have a reason, and every website should feel like it belongs to the business behind it.',
      ],
      meta: 'TUSCANY, ITALY · DESIGN + DEVELOPMENT · AVAILABLE REMOTELY',
      playgroundLabel: 'Interactive design concepts',
      selectConcept: 'Select concept',
      concepts: {
        design: 'DESIGN',
        code: 'CODE',
        people: 'PEOPLE',
        business: 'BUSINESS',
      },
      conceptRoles: {
        design: ['UI/UX', 'TYPOGRAPHY', 'VISUAL DIRECTION'],
        code: ['REACT', 'JAVASCRIPT', 'CSS'],
        people: ['USERS', 'IDEAS', 'REAL NEEDS'],
        business: ['STRATEGY', 'SOLUTIONS', 'GROWTH'],
      },
      hint: 'MOVE YOUR CURSOR →',
      reset: 'RESET ↺',
      relations: {
        experience: 'DESIGN + CODE = EXPERIENCE',
        useful: 'USEFUL, NOT JUST BEAUTIFUL.',
      },
    },
    approach: {
      marker: '03 / APPROACH',
      kicker: 'HOW I WORK',
      titleLines: ['FROM CHARACTER,', 'TO EXPERIENCE.'],
      summary:
        'Every project starts with understanding your business — its character, goals and audience. From there, we move through a clear process from first ideas to a finished website.',
      principles: [
        {
          title: 'DISCOVER',
          description:
            'We start with a conversation about your business, goals, audience and what the website needs to achieve.',
        },
        {
          title: 'DEFINE',
          description:
            'Together, we agree on a clear direction for the project — its style, structure, photos/images and priorities — before moving into development.',
        },
        {
          title: 'DESIGN + BUILD',
          description:
            'I turn that direction into a responsive website, bringing design and development together as one connected process.',
        },
        {
          title: 'TEST + LAUNCH',
          description:
            'I test the website across devices, refine the details and prepare everything for a confident launch.',
        },
      ],
      closing: 'CLEAR PROCESS. OPEN COMMUNICATION. NO SURPRISES.',
      tools: 'REACT · JAVASCRIPT · CSS · RESPONSIVE · ACCESSIBILITY',
    },
    work: {
      ...sharedWork,
      sectionLabel: 'FEATURED WORK',
      heading: 'SELECTED WORK.',
      type: 'DESIGN + DEVELOPMENT · GROSSETO, ITALY · 2026',
      labels: {
        role: 'ROLE',
        stack: 'STACK',
        year: 'YEAR',
      },
      cta: 'VIEW CASE',
      liveWebsite: 'VIEW LIVE WEBSITE',
      alt: 'Caffè Carducci coffee cup inside the café in Grosseto',
      grifone: {
        projectIndex: '02',
        titleLines: ['PRATICHE', 'AUTO', 'GRIFONE'],
        type: 'DESIGN + DEVELOPMENT · GROSSETO, ITALY · 2026',
        cta: 'VIEW CASE',
        alt: 'Green classic Porsche in Piazza Dante, Grosseto, for Pratiche Auto Grifone',
      },
      drawer: {
        marker: 'WORK / INDEX',
        heading: 'SELECTED WORK',
        close: 'CLOSE',
        projectType: 'DESIGN + DEVELOPMENT',
        projectMeta: 'GROSSETO, ITALY · 2026',
        viewCase: 'VIEW CASE',
      },
      caseStudy: {
        ...sharedCaseStudy,
        opening: {
          ...sharedCaseStudy.opening,
          subtitle: 'Caffè · Restaurant · Grosseto, Italy',
        },
        close: 'CLOSE CASE STUDY',
      },
    },
    clientVoice: {
      marker: '05 / WHY IT MATTERS',
      titleLines: ['A WEBSITE SHOULD', 'FEEL LIKE YOUR', 'BUSINESS. NOT MINE.'],
      supporting:
        'Every business has its own character. My job is not to impose a style, but to find the visual direction that belongs to yours — and turn it into a clear, memorable digital experience.',
      marquee: 'YOUR BUSINESS · YOUR CHARACTER · YOUR WEBSITE · YOUR EXPERIENCE ·',
    },
    contact: {
      marker: '06 / CONTACT',
      titleLines: ['HAVE A PROJECT?', 'LET’S MAKE IT REAL.'],
      email: 'Julia.webcreative@gmail.com',
      emailHref: 'mailto:Julia.webcreative@gmail.com',
      emailLabel: 'Email Julia Yaneva',
      meta: 'TUSCANY, ITALY · AVAILABLE REMOTELY',
      linksLabel: 'Contact links',
      links: {
        linkedin: 'https://www.linkedin.com/in/julia-yaneva-84013321b/',
        github: 'https://github.com/juliayp',
        backToTop: 'BACK TO TOP',
      },
    },
  },
  it: {
    documentLanguage: 'it',
    skip: 'Vai al contenuto',
    navLabel: 'Navigazione principale',
    languageLabel: 'Scegli la lingua',
    nav: {
      work: 'PROGETTI',
      about: 'CHI SONO',
      contact: 'CONTATTI',
    },
    navContext: {
      work: 'GUARDA I PROGETTI ↗',
      about: 'JULIA — FRONT-END DEVELOPER',
      contact: 'PARLIAMONE ↗',
    },
    status: 'DISPONIBILE PER NUOVI PROGETTI',
    heroGreeting: 'Ciao! Sono Julia Yaneva. Vivo in Toscana, Italia.',
    heroContactLabel: 'Scrivi a Julia Yaneva via email',
    heroContactText: ['PARLIAMO'],
    description: [
      'TRASFORMO LE IDEE IN SITI WEB ORIGINALI E RESPONSIVE PER ATTIVITÀ REALI.',
      'AMO LA TIPOGRAFIA AUDACE, IL DESIGN EDITORIALE E I DETTAGLI CURATI.',
      'AMO LA NATURA, LA PIZZA E L’ARTE.',
    ],
    playWithMe: ['CLICCA QUI'],
    scroll: 'SCORRI PER ESPLORARE',
    menu: 'MENU',
    close: 'CHIUDI',
    about: {
      marker: '01 / CHI SONO',
      mobileIntro: 'CIAO, SONO JULIA.',
      titleLines: ['PROGETTO PER', 'PERSONE REALI.', 'SVILUPPO PER', 'ATTIVITÀ REALI.'],
      titleHighlights: [null, 'PERSONE', null, 'ATTIVITÀ'],
      bioLabel: 'QUALCOSA SU DI ME',
      paragraphs: [
        'Sono Julia, front-end developer con base in Toscana, Italia. Unisco direzione visiva e codice pulito per creare siti web riconoscibili, intuitivi e realmente utili.',
        'Il mio percorso nello sviluppo web è iniziato con tre anni di studio del front-end. Con il tempo, mi sono interessata tanto a come un sito fa sentire le persone quanto a come funziona.',
        'Oggi unisco questi due aspetti per creare esperienze digitali curate per attività reali.',
        'Ogni scelta dovrebbe avere una ragione e ogni sito dovrebbe sembrare davvero appartenere all’attività che rappresenta.',
      ],
      meta: 'TOSCANA, ITALIA · DESIGN + SVILUPPO · DISPONIBILE DA REMOTO',
      playgroundLabel: 'Concetti interattivi di design',
      selectConcept: 'Seleziona concetto',
      concepts: {
        design: 'DESIGN',
        code: 'CODICE',
        people: 'PERSONE',
        business: 'ATTIVITÀ',
      },
      conceptRoles: {
        design: ['UI/UX', 'TIPOGRAFIA', 'DIREZIONE VISIVA'],
        code: ['REACT', 'JAVASCRIPT', 'CSS'],
        people: ['UTENTI', 'IDEE', 'ESIGENZE REALI'],
        business: ['STRATEGIA', 'SOLUZIONI', 'CRESCITA'],
      },
      hint: 'MUOVI IL CURSORE →',
      reset: 'RESET ↺',
      relations: {
        experience: 'DESIGN + CODICE = ESPERIENZA',
        useful: 'UTILE, NON SOLO BELLO.',
      },
    },
    approach: {
      marker: '03 / APPROCCIO',
      kicker: 'COME LAVORO',
      titleLines: ['DAL CARATTERE,', 'ALL’ESPERIENZA.'],
      summary:
        'Ogni progetto inizia dalla comprensione della tua attività — il suo carattere, i suoi obiettivi e il suo pubblico. Da qui seguiamo un processo chiaro, dalle prime idee fino al sito completo.',
      principles: [
        {
          title: 'SCOPERTA',
          description:
            'Iniziamo con una conversazione sulla tua attività, i tuoi obiettivi, il tuo pubblico e ciò che il sito deve raggiungere.',
        },
        {
          title: 'DEFINIRE',
          description:
            'Insieme concordiamo una direzione chiara per il progetto — stile, struttura, foto/immagini e priorità — prima di passare allo sviluppo.',
        },
        {
          title: 'DESIGN + SVILUPPO',
          description:
            'Trasformo questa direzione in un sito responsive, unendo design e sviluppo in un unico processo coerente.',
        },
        {
          title: 'TEST + LANCIO',
          description:
            'Testo il sito su diversi dispositivi, perfeziono i dettagli e preparo tutto per un lancio sicuro.',
        },
      ],
      closing: 'PROCESSO CHIARO. COMUNICAZIONE APERTA. NESSUNA SORPRESA.',
      tools: 'REACT · JAVASCRIPT · CSS · RESPONSIVE · ACCESSIBILITÀ',
    },
    work: {
      ...sharedWork,
      sectionLabel: 'PROGETTI IN EVIDENZA',
      heading: 'PROGETTI SELEZIONATI.',
      type: 'DESIGN E SVILUPPO · GROSSETO, ITALIA · 2026',
      labels: {
        role: 'RUOLO',
        stack: 'STACK',
        year: 'ANNO',
      },
      cta: 'SCOPRI IL PROGETTO',
      liveWebsite: 'VISITA IL SITO',
      alt: 'Tazzina di Caffè Carducci all’interno del locale a Grosseto',
      grifone: {
        projectIndex: '02',
        titleLines: ['PRATICHE', 'AUTO', 'GRIFONE'],
        type: 'DESIGN E SVILUPPO · GROSSETO, ITALIA · 2026',
        cta: 'SCOPRI IL PROGETTO',
        alt: 'Porsche classica verde in Piazza Dante a Grosseto per Pratiche Auto Grifone',
      },
      drawer: {
        marker: 'PROGETTI / INDICE',
        heading: 'PROGETTI SELEZIONATI',
        close: 'CHIUDI',
        projectType: 'DESIGN E SVILUPPO',
        projectMeta: 'GROSSETO, ITALIA · 2026',
        viewCase: 'SCOPRI IL PROGETTO',
      },
      caseStudy: {
        opening: {
          ...sharedCaseStudy.opening,
          subtitle: 'Caffè · Ristorante · Grosseto, Italia',
        },
        openingV2: {
          ...sharedCaseStudy.openingV2,
          projectLabel: 'IL PROGETTO',
          experienceLabel: 'L’ESPERIENZA',
        },
        project: {
          ...sharedCaseStudy.project,
          label: 'IL PROGETTO',
          statement: 'Un luogo del territorio, tradotto in un’esperienza digitale.',
          paragraphs: [
            'Carducci è un caffè e ristorante nel cuore di Grosseto, in Toscana.',
            'L’obiettivo era creare una presenza digitale capace di raccontare il carattere del locale — accogliente, sociale e profondamente legato al territorio — mantenendo l’esperienza semplice e intuitiva.',
          ],
          labels: {
            client: 'Cliente',
            location: 'Luogo',
            role: 'Ruolo',
            stack: 'Stack',
          },
          values: {
            client: 'Carducci',
            location: 'Grosseto, Toscana',
            role: 'Design e sviluppo front-end',
            stack: 'React · JavaScript · CSS',
          },
          metadata: [
            { label: 'RUOLO', value: 'Design e sviluppo' },
            { label: 'TIPO', value: 'Caffè · Ristorante' },
            { label: 'LUOGO', value: 'Grosseto, Italia' },
            { label: 'CLIENTE', value: 'Caffè Carducci' },
            { label: 'ANNO', value: '2026' },
          ],
        },
        challenge: {
          ...sharedCaseStudy.challenge,
          label: 'LA SFIDA',
          titleFirst: 'NON SOLO',
          titleSecond: 'UN MENU.',
          body: [
            'Carducci aveva già una propria identità offline.',
            'La sfida non era reinventarla, ma tradurre la sua atmosfera in un’esperienza digitale.',
          ],
          principles: [
            {
              number: '01',
              title: 'Mantieni il legame locale',
              text: 'Preservare la personalità di Carducci e il suo legame con Grosseto.',
            },
            {
              number: '02',
              title: 'Mantieni la semplicità',
              text: 'Rendere menu, luogo e informazioni per la prenotazione subito accessibili.',
            },
            {
              number: '03',
              title: 'Dagli vita',
              text: 'Usare fotografia, tipografia e movimento sottile per ricreare l’atmosfera del caffè.',
            },
          ],
        },
        experience: {
          intro: {
            number: '03',
            label: 'L’ESPERIENZA',
            title: 'PENSATO PER FAR VIVERE CARDUCCI.',
            text: 'Un’esperienza calda, visiva e intuitiva, costruita attorno al ritmo quotidiano del caffè.',
          },
          firstImpression: {
            number: '01',
            label: 'PRIMO IMPATTO',
            caption: 'HOMEPAGE · DESKTOP',
            alt: 'Homepage del sito Carducci con una fotografia del caffè a tutta larghezza su desktop',
          },
          storyAtmosphere: {
            number: '02',
            label: 'STORIA + ATMOSFERA',
            title: 'PIÙ CHE INFORMAZIONI.',
            storyCaption: 'LA NOSTRA STORIA · VISTA EDITORIALE',
            storyAlt: 'Sezione La nostra storia del sito Carducci',
            viviCaption: 'VIVI CAFFÈ CARDUCCI · DETTAGLIO',
            viviAlt: 'Sezione Vivi Caffè Carducci con fotografia editoriale',
            aperitivoCaption: 'CUCINA E APERITIVO · DESKTOP',
            aperitivoAlt: 'Sezione del sito Carducci dedicata alla cucina e all’aperitivo',
          },
          usefulInRealLife: {
            number: '03',
            label: 'UTILE OGNI GIORNO',
            title: 'SEMPLICE DOVE CONTA.',
            menuCaption: 'MENU · DESKTOP',
            menuAlt: 'Menu di navigazione aperto del sito Carducci su desktop',
            localTitle: 'PENSATO PER UN LUOGO REALE.',
            localCaption: 'LUOGO E MAPPA · MOBILE',
            localAlt: 'Sezione del sito Carducci con mappa di Grosseto e informazioni di contatto',
          },
          responsive: {
            number: '06',
            label: 'RESPONSIVE PER SCELTA',
            titleFirst: 'RESPONSIVE',
            titleSecond: 'PER SCELTA.',
            homepageCaption: 'HOMEPAGE · DESKTOP',
            homepageAlt: 'Homepage Carducci su desktop con fotografia del caffè',
            menuCaption: 'MENU · DESKTOP',
            menuAlt: 'Menu di navigazione Carducci su desktop',
            reviewCaption: 'RECENSIONI · VISTA RESPONSIVE',
            reviewAlt: 'Sezione recensioni Carducci adattata a uno schermo compatto',
            storyCaption: 'STORIA · TABLET',
            storyAlt: 'Sezione storia Carducci adattata al layout tablet',
            mobileCaption: 'RECENSIONI · MOBILE',
            mobileAlt: 'Sezione Dicono di noi su mobile',
          },
        },
        development: {
          ...sharedCaseStudy.development,
          label: 'LO SVILUPPO',
          body:
            'L’identità visiva era solo l’inizio. Ogni interazione, stato responsive e scelta tecnica è stata sviluppata per supportare l’esperienza.',
          meta: [
            {
              label: 'FRONT-END',
              value: 'React · JavaScript · CSS',
            },
            {
              label: 'BUILD',
              value: 'Vite',
            },
            {
              label: 'FOCUS',
              value: 'Responsive · Interazione · Accessibilità',
            },
          ],
          interaction: {
            ...sharedCaseStudy.development.interaction,
            label: 'INTERAZIONE',
            titleFirst: 'COSTRUITO PER',
            titleSecond: 'INTERAGIRE.',
            body:
              'Un menu che si comporta come parte dell’interfaccia — gestendo focus, movimento e contenuti esterni senza interrompere l’esperienza.',
            visualLabel: 'CASSETTO MENU / DESKTOP',
            stateLabel: 'REACT · STATO DI INTERAZIONE',
            imageAlt: 'Menu Drawer Carducci aperto su desktop con il menu esterno del caffè',
            annotations: [
              {
                number: '01',
                label: 'FOCUS',
                text: 'Il focus da tastiera resta all’interno dell’esperienza.',
              },
              {
                number: '02',
                label: 'CICLO DI VITA',
                text: 'Il contenuto esterno viene caricato solo quando serve.',
              },
              {
                number: '03',
                label: 'ACCESSIBILITÀ',
                text: 'Escape · Sfondo · Movimento ridotto',
              },
            ],
            codeLabel: 'MENU DRAWER / CICLO DI VITA',
            codeAriaLabel: 'Codice del ciclo di vita Menu Drawer con movimento ridotto',
            principleFirst: 'IL MOVIMENTO È UNA PREFERENZA,',
            principleSecond: 'NON UN REQUISITO.',
          },
          gallery: {
            ...sharedCaseStudy.development.gallery,
            label: 'GALLERIA',
            title: ['SCORRI.', 'TRASCINA.', 'SFOGLIA.'],
            secondary: 'ANCHE DA TASTIERA.',
            body: 'Una sola galleria, progettata per rispondere in modo naturale a mouse, touch e tastiera.',
            galleryAriaLabel:
              'Galleria orizzontale interattiva Carducci. Scorri, trascina, sfoglia o usa i tasti freccia per esplorarla.',
            imageAlts: [
              'Ospiti all’esterno del Caffè Carducci durante un evento serale',
              'Barman del Carducci mentre prepara un drink dietro il bancone',
              'Amici durante una serata all’interno del Caffè Carducci',
              'Primo piano della preparazione di un cocktail',
              'Il team Carducci serve piatti appena preparati',
              'Cocktail serviti a un tavolo del Carducci',
            ],
            inputs: [
              {
                number: '01',
                label: 'ROTELLA',
                text: 'Input verticale → movimento orizzontale',
              },
              {
                number: '02',
                label: 'TRASCINA',
                text: 'Cattura del puntatore con mouse + penna',
              },
              {
                number: '03',
                label: 'SWIPE',
                text: 'Navigazione touch',
              },
              {
                number: '04',
                label: 'TASTI',
                text: 'Navigazione lightbox con i tasti freccia',
              },
            ],
            codeLabel: 'GALLERIA / HANDLE WHEEL',
            codeAriaLabel: 'Estratto reale dell’implementazione handleWheel di Carducci',
            principleFirst: 'INPUT NATURALE.',
            principleSecond: 'COMPORTAMENTO INTENZIONALE.',
          },
          responsive: {
            ...sharedCaseStudy.development.responsive,
            titleSecond: 'PER SCELTA.',
            secondaryFirst: 'NON SOLO PIÙ PICCOLO.',
            secondarySecond: 'RICOMPOSTO.',
            body: 'Lo stesso linguaggio visivo, ricomposto intenzionalmente per ogni schermo.',
            visualAriaLabel: 'L’Hero Carducci ricomposto per schermi desktop, tablet e mobile',
            screens: [
              {
                label: 'DESKTOP / 1440',
                alt: 'Hero di Caffè Carducci nel layout desktop',
              },
              {
                label: 'TABLET / 834',
                alt: 'Lo stesso Hero di Caffè Carducci ricomposto per tablet',
              },
              {
                label: 'MOBILE / 390',
                alt: 'Lo stesso Hero di Caffè Carducci ricomposto per mobile',
              },
            ],
            metrics: [
              {
                label: 'TESTATO A',
                value: '1440 · 834 · 390',
              },
              {
                label: 'BREAKPOINT DI LAYOUT',
                value: '1040 · 760 · 430',
              },
            ],
            statements: [
              {
                number: '01',
                label: 'LAYOUT',
                text: 'Le colonne si riducono e l’ordine dei contenuti si adatta.',
              },
              {
                number: '02',
                label: 'TIPOGRAFIA E MEDIA',
                text: 'Tipografia, proporzioni e ritagli delle immagini rispondono allo spazio disponibile.',
              },
              {
                number: '03',
                label: 'INTERAZIONE',
                text: 'Navigazione, galleria e menu si adattano agli schermi più piccoli.',
              },
            ],
          },
          privacy: {
            ...sharedCaseStudy.development.privacy,
            label: 'PRIVACY E PERFORMANCE',
            titleFirst: 'QUELLO CHE NON SI CARICA',
            titleSecond: 'CONTA ANCHE.',
            body:
              'Google Maps resta disattivato finché il visitatore non sceglie di interagire — riducendo le richieste esterne non necessarie e mantenendo la posizione facile da raggiungere.',
            visualAriaLabel: "Mappa Carducci prima e dopo l’attivazione da parte del visitatore",
            beforeLabel: "PRIMA DELL’INTERAZIONE",
            previewLabel: 'ANTEPRIMA LOCALE',
            afterLabel: "DOPO L’INTERAZIONE",
            activeLabel: 'GOOGLE MAPS ATTIVO',
            actionLabel: "AZIONE DELL’UTENTE",
            previewAlt: "Anteprima illustrata locale della mappa Carducci prima dell’interazione",
            activeAlt: 'Google Maps attivo dopo che il visitatore sceglie di caricarlo',
            principles: [
              {
                label: 'PRIVACY',
                text: 'I contenuti esterni restano in attesa.',
              },
              {
                label: 'PERFORMANCE',
                text: 'Caricamento differito dell’iframe.',
              },
              {
                label: 'CONTROLLO',
                text: 'Attivato dal visitatore.',
              },
            ],
            codeLabel: 'MAPPA / RENDERING CONDIZIONALE',
            codeAriaLabel: 'Estratto reale del rendering condizionale della mappa Carducci',
            codeNoteFirst: 'PRIMA L’ANTEPRIMA.',
            codeNoteSecond: 'ESTERNO SU RICHIESTA.',
            closingFirst: 'CARICA MENO.',
            closingSecond: 'CHIEDI PRIMA.',
          },
          epilogue: {
            ...sharedCaseStudy.development.epilogue,
            markerFirst: 'SVILUPPO',
            markerSecond: 'RIEPILOGO',
            titleFirst: 'COSTRUITO OLTRE',
            titleSecond: 'LO SCHERMO.',
            body:
              'L’interfaccia è ciò che vedi. Le decisioni che la sostengono sono ciò che la fanno funzionare.',
            principles: [
              {
                number: '01',
                label: 'INTERAZIONE',
                details: 'Focus · Tastiera · Ciclo di vita',
              },
              {
                number: '02',
                label: 'INPUT',
                details: 'Rotella · Trascina · Touch · Tasti',
              },
              {
                number: '03',
                label: 'ADATTAMENTO',
                details: 'Layout · Tipografia · Media',
              },
              {
                number: '04',
                label: 'CONTROLLO',
                details: 'Movimento · Contenuti esterni · Privacy',
              },
            ],
            closingFirst: 'PROGETTATO CON INTENTO.',
            closingSecond: 'COSTRUITO CON IL CODICE.',
            completeLabel: 'CASE STUDY / COMPLETO',
          },
        },
        result: {
          markerNumber: '05',
          markerLabel: 'IL RISULTATO',
          titleFirst: 'DA UN LUOGO DEL TERRITORIO,',
          titleSecond: 'A UN’ESPERIENZA DIGITALE.',
          body: 'Una presenza digitale completa, plasmata dal carattere, dal ritmo e dall’esperienza quotidiana del Caffè Carducci.',
          caption: 'ESPERIENZA FINALE / DESKTOP',
          secondaryCaption: 'CAFFÈ CARDUCCI · GROSSETO',
          imageAlt: 'Esperienza finale della homepage desktop di Caffè Carducci a Grosseto',
          testimonial: {
            markerLabel: 'TESTIMONIANZA DEL CLIENTE',
            quote:
              'Vedendo il sito mi è subito sembrato molto carino e facilmente comprensibile, con molte connessioni con i nostri social semplici ed intuitive… Il sito rispecchia la nostra genuina semplicità. La facilità di utilizzo, i richiami social e le mappe interattive sulla nostra localizzazione sono state sicuramente la cosa che mi è piaciuta di più… sicuramente darò il tuo contatto ad altri interessati del nostro settore.',
            author: 'FABIO PERIN',
            role: 'Titolare, Caffè Carducci',
            note: 'TESTIMONIANZA ORIGINALE',
          },
          outcome: {
            markerNumber: '02',
            markerLabel: 'RISULTATO',
            titleFirst: 'UN’UNICA ESPERIENZA.',
            titleSecond: 'OGNI PUNTO DI CONTATTO.',
            supporting:
              'Il risultato è più di un sito web. È un’unica esperienza connessa — dal primo impatto al menu, dall’atmosfera al luogo e all’accesso.',
            rows: [
              {
                number: '01',
                label: 'IDENTITÀ',
                word: 'IDENTITÀ',
                statement: 'Inconfondibilmente Carducci.',
                detail:
                  'Fotografia, tipografia, colore e ritmo lavorano insieme per preservare il carattere del luogo reale.',
              },
              {
                number: '02',
                label: 'SCOPERTA',
                word: 'SCOPERTA',
                statement: 'Tutto ciò che conta, facile da trovare.',
                detail:
                  'Menu, atmosfera, luogo e informazioni essenziali convivono in un’unica esperienza chiara.',
              },
              {
                number: '03',
                label: 'INTERAZIONE',
                word: 'INTERAZIONE',
                statement: 'Modi naturali di esplorare.',
                detail:
                  'Navigazione, galleria e interazioni del menu rispondono al modo in cui le persone esplorano davvero sui diversi dispositivi.',
              },
              {
                number: '04',
                label: 'ACCESSO',
                word: 'ACCESSO',
                statement: 'Pensato per utenti e schermi diversi.',
                detail:
                  'Layout responsive, supporto da tastiera, preferenze di movimento e caricamento intenzionale dei contenuti esterni estendono l’esperienza oltre l’aspetto visivo.',
              },
            ],
            closingFirst: 'PUNTI DI CONTATTO DIVERSI.',
            closingSecond: 'UN SOLO CARDUCCI.',
          },
        },
        close: 'CHIUDI CASE STUDY',
      },
    },
    clientVoice: {
      marker: '05 / PERCHÉ CONTA',
      titleLines: ['UN SITO DOVREBBE', 'PARLARE DELLA TUA', 'ATTIVITÀ. NON DI ME.'],
      supporting:
        'Ogni attività ha un carattere unico. Il mio compito non è imporre uno stile, ma trovare la direzione visiva che le appartiene — e trasformarla in un’esperienza digitale chiara e memorabile.',
      marquee: 'IL TUO BUSINESS · IL TUO CARATTERE · IL TUO SITO · LA TUA ESPERIENZA ·',
    },
    contact: {
      marker: '06 / CONTATTI',
      titleLines: ['HAI UN PROGETTO?', 'RENDIAMOLO REALE.'],
      email: 'Julia.webcreative@gmail.com',
      emailHref: 'mailto:Julia.webcreative@gmail.com',
      emailLabel: 'Scrivi a Julia Yaneva via email',
      meta: 'TOSCANA, ITALIA · DISPONIBILE DA REMOTO',
      linksLabel: 'Link di contatto',
      links: {
        linkedin: 'https://www.linkedin.com/in/julia-yaneva-84013321b/',
        github: 'https://github.com/juliayp',
        backToTop: 'TORNA SU',
      },
    },
  },
}
