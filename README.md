# Julia Yaneva — Portfolio

A bilingual creative portfolio in progress, built with Vite, React, JavaScript and hand-written CSS.

## Run locally

```bash
pnpm install
pnpm dev
```

## Quality checks

```bash
pnpm lint
pnpm build
```

## Current scope

The current rendered version contains:

- the shared design tokens and typography foundation;
- a responsive desktop/mobile header;
- one EN/IT language state owned by `App.jsx`;
- an editorial Hero composition with a short CSS intro animation;
- an accessible mobile menu, skip link and language controls;
- a dark Selected Work section featuring the Caffè Carducci case study preview;
- responsive layouts for desktop, tablet and mobile.

The primary source files are:

- `src/App.jsx` — shared language state for the future page;
- `src/components/Hero.jsx` — Header + Hero markup and interaction;
- `src/components/Hero.css` — global foundation plus all Header/Hero styling;
- `src/components/Work.jsx` — Selected Work markup;
- `src/components/Work.css` — responsive project presentation and hover states;
- `src/data/translations.js` — centralized EN/IT copy.

Additional case-study content and the remaining portfolio sections will be added incrementally.

## Before publishing

Before a production launch, add the remaining portfolio sections, verify contact details and metadata in `index.html`, and run both quality checks.
