import { CarducciExperience } from './CarducciExperience'
import './CarducciCaseStudy.css'

export function CarducciCaseStudy({ copy, onClose }) {
  return (
    <div className="case-study" aria-label="Carducci case study">
      <section className="case-study-opening" aria-labelledby="case-study-title">
        <div className="case-study-opening-meta">
          <p className="case-study-eyebrow">{copy.opening.eyebrow}</p>
          <p className="case-study-opening-status">
            <span>{copy.opening.status}</span>
            <span>{copy.opening.year}</span>
          </p>
        </div>

        <div className="case-study-opening-title">
          <h2 id="case-study-title">{copy.opening.title}</h2>
          <p>{copy.opening.subtitle}</p>
        </div>
      </section>

      <section className="case-study-project" aria-labelledby="case-study-project-title">
        <div className="case-study-section-marker">
          <span>{copy.project.number}</span>
          <h3 id="case-study-project-title">{copy.project.label}</h3>
        </div>

        <div className="case-study-project-content">
          <p className="case-study-statement">{copy.project.statement}</p>
          <div className="case-study-project-copy">
            {copy.project.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="case-study-details">
            {Object.entries(copy.project.labels).map(([key, label]) => (
              <div className="case-study-detail" key={key}>
                <dt>{label}</dt>
                <dd>{copy.project.values[key]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="case-study-challenge" aria-labelledby="case-study-challenge-title">
        <div className="case-study-challenge-heading">
          <div className="case-study-section-marker case-study-section-marker--dark">
            <span>{copy.challenge.number}</span>
            <h3 id="case-study-challenge-title">{copy.challenge.label}</h3>
          </div>

          <h2 className="case-study-challenge-title">
            <span>{copy.challenge.titleFirst}</span>
            <span className="case-study-outline">{copy.challenge.titleSecond}</span>
          </h2>
        </div>

        <div className="case-study-challenge-content">
          <div className="case-study-challenge-copy">
            {copy.challenge.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ol className="case-study-principles">
            {copy.challenge.principles.map((principle) => (
              <li className="case-study-principle" key={principle.number}>
                <span className="case-study-principle-number">{principle.number}</span>
                <div>
                  <h4>{principle.title}</h4>
                  <p>{principle.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CarducciExperience copy={copy.experience} />

      <div className="case-study-close-wrap">
        <button className="case-study-close" type="button" onClick={onClose}>
          <span>{copy.close}</span>
          <span aria-hidden="true">↑</span>
        </button>
      </div>
    </div>
  )
}
