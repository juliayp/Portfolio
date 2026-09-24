import './GrifoneExperienceScene.css'

const experienceImages = {
  hero: '/images/grifone-experience/hero-porsche.png',
  documents: '/images/grifone-experience/documenti-necessari.png',
  send: '/images/grifone-experience/invia-documenti.png',
  contact: '/images/grifone-experience/contact.png',
}

function ExperienceFigure({ className, image, label, alt, width, height }) {
  return (
    <figure className={`grifone-experience__figure ${className}`}>
      <figcaption>{label}</figcaption>
      <img
        src={image}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
    </figure>
  )
}

export function GrifoneExperienceScene({ copy }) {
  return (
    <section className="grifone-experience" aria-labelledby="grifone-experience-title">
      <header className="grifone-experience__header grifone-experience__reveal grifone-experience__reveal--1">
        <p>{copy.marker}</p>
        <p>{copy.direction}</p>
      </header>

      <div className="grifone-experience__canvas">
        <h2
          className="grifone-experience__title grifone-experience__reveal grifone-experience__reveal--2"
          id="grifone-experience-title"
        >
          <span>{copy.title[0]}</span>
          <span>{copy.title[1]}</span>
        </h2>

        <ExperienceFigure
          className="grifone-experience__figure--hero grifone-experience__reveal grifone-experience__reveal--3"
          image={experienceImages.hero}
          label={copy.labels[0]}
          alt={copy.alts.hero}
          width="1438"
          height="952"
        />

        <ExperienceFigure
          className="grifone-experience__figure--documents grifone-experience__reveal grifone-experience__reveal--4"
          image={experienceImages.documents}
          label={copy.labels[1]}
          alt={copy.alts.documents}
          width="1459"
          height="951"
        />

        <ExperienceFigure
          className="grifone-experience__figure--send grifone-experience__reveal grifone-experience__reveal--5"
          image={experienceImages.send}
          label={copy.labels[2]}
          alt={copy.alts.send}
          width="1317"
          height="489"
        />

        <div className="grifone-experience__local grifone-experience__reveal grifone-experience__reveal--6">
          <p>{copy.local[0]}</p>
          <p>{copy.local[1]}</p>
        </div>

        <ExperienceFigure
          className="grifone-experience__figure--contact grifone-experience__reveal grifone-experience__reveal--6"
          image={experienceImages.contact}
          label={copy.labels[3]}
          alt={copy.alts.contact}
          width="1474"
          height="948"
        />

        <div className="grifone-experience__closing grifone-experience__reveal grifone-experience__reveal--7">
          <p>{copy.closing[0]}</p>
          <p>{copy.closing[1]}</p>
        </div>
      </div>
    </section>
  )
}
