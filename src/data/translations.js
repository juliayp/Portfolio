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
    },
  },
}
