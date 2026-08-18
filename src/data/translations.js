const sharedWork = Object.freeze({
  sectionNumber: '02 /',
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
    status: 'AVAILABLE FOR PROJECTS',
    description: 'Front-End Developer based in Tuscany. I build modern, responsive websites for real businesses.',
    scroll: 'SCROLL TO EXPLORE',
    menu: 'MENU',
    close: 'CLOSE',
    work: {
      ...sharedWork,
      heading: 'SELECTED WORK',
      type: 'Restaurant Website · Grosseto, Italy',
      labels: {
        role: 'ROLE',
        stack: 'STACK',
        year: 'YEAR',
      },
      cta: 'VIEW CASE',
      alt: 'Caffè Carducci coffee cup inside the café in Grosseto',
      caseStudy: {
        ...sharedCaseStudy,
        opening: {
          ...sharedCaseStudy.opening,
          subtitle: 'Caffè · Restaurant · Grosseto, Italy',
        },
        close: 'CLOSE CASE STUDY',
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
    status: 'DISPONIBILE PER NUOVI PROGETTI',
    description: 'Front-End Developer con base in Toscana. Creo siti web moderni e responsive per attività reali.',
    scroll: 'SCORRI PER ESPLORARE',
    menu: 'MENU',
    close: 'CHIUDI',
    work: {
      ...sharedWork,
      heading: 'PROGETTI SELEZIONATI',
      type: 'Sito web per ristorante · Grosseto, Italia',
      labels: {
        role: 'RUOLO',
        stack: 'STACK',
        year: 'ANNO',
      },
      cta: 'SCOPRI IL PROGETTO',
      alt: 'Tazzina di Caffè Carducci all’interno del locale a Grosseto',
      caseStudy: {
        opening: {
          ...sharedCaseStudy.opening,
          subtitle: 'Caffè · Ristorante · Grosseto, Italia',
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
        close: 'CHIUDI CASE STUDY',
      },
    },
  },
}
