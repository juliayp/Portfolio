import './GrifoneChallengeScene.css'

export function GrifoneChallengeScene({ copy }) {
  return (
    <section className="grifone-challenge" aria-labelledby="grifone-challenge-title">
      <header className="grifone-challenge__header grifone-challenge__reveal grifone-challenge__reveal--1">
        <p>{copy.marker}</p>
        <p>{copy.direction}</p>
      </header>

      <div className="grifone-challenge__main">
        <h2
          className="grifone-challenge__title grifone-challenge__reveal grifone-challenge__reveal--2"
          id="grifone-challenge-title"
          aria-label={copy.title.join(' ')}
        >
          <span aria-hidden="true">{copy.title[0]}</span>
          <span className="grifone-challenge__title-outline" aria-hidden="true">
            {copy.title[1]}
          </span>
          <span aria-hidden="true">{copy.title[2]}</span>
          <span className="grifone-challenge__title-lime" aria-hidden="true">
            {copy.title[3]}
          </span>
        </h2>

        <ol className="grifone-challenge__services grifone-challenge__reveal grifone-challenge__reveal--3">
          {copy.services.map((service, index) => (
            <li key={service}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span>{service}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="grifone-challenge__bottom grifone-challenge__reveal grifone-challenge__reveal--4">
        <div className="grifone-challenge__brief">
          <p className="grifone-challenge__label">{copy.problem.label}</p>
          <p>
            {copy.problem.lines.map((line) => <span key={line}>{line}</span>)}
          </p>
        </div>

        <div className="grifone-challenge__brief">
          <p className="grifone-challenge__label">{copy.goal.label}</p>
          <p>
            {copy.goal.lines.map((line) => <span key={line}>{line}</span>)}
          </p>
        </div>

        <p className="grifone-challenge__statement">{copy.statement}</p>
      </div>
    </section>
  )
}
