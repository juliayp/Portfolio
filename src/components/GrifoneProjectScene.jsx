import './GrifoneProjectScene.css'

const grifoneImage = '/images/work/pratiche-auto-grifone.png'

export function GrifoneProjectScene({ copy }) {
  return (
    <section className="grifone-project-scene" aria-labelledby="grifone-project-scene-title">
      <header className="grifone-project-scene__header grifone-project-scene__reveal grifone-project-scene__reveal--1">
        <p>{copy.marker}</p>
        <p>{copy.location}</p>
      </header>

      <div className="grifone-project-scene__hero">
        <h2
          className="grifone-project-scene__title grifone-project-scene__reveal grifone-project-scene__reveal--2"
          id="grifone-project-scene-title"
          aria-label="Pratiche Auto Grifone"
        >
          <span aria-hidden="true">PRATICHE</span>
          <span className="grifone-project-scene__title-outline" aria-hidden="true">AUTO</span>
          <span aria-hidden="true">GRIFONE</span>
        </h2>

        <figure className="grifone-project-scene__media grifone-project-scene__reveal grifone-project-scene__reveal--3">
          <img
            src={grifoneImage}
            alt={copy.imageAlt}
            width="1280"
            height="835"
            loading="eager"
            decoding="async"
          />
          <figcaption>{copy.imageCaption}</figcaption>
        </figure>
      </div>

      <div className="grifone-project-scene__lower">
        <div className="grifone-project-scene__statements grifone-project-scene__reveal grifone-project-scene__reveal--4">
          <p>
            {copy.primaryStatement.map((line) => <span key={line}>{line}</span>)}
          </p>
          <p>
            <span>{copy.secondaryStatement[0]}</span>
            <span className="grifone-project-scene__lime">{copy.secondaryStatement[1]}</span>
          </p>
        </div>

        <div className="grifone-project-scene__summary grifone-project-scene__reveal grifone-project-scene__reveal--5">
          <p>{copy.summary}</p>
          <p className="grifone-project-scene__meta">
            <span>{copy.meta.role}</span>
            <span>{copy.meta.stack}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
