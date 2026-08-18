import { translations } from '../data/translations'
import './Work.css'

const projectImage = '/images/carducci-preview.jpeg'

export function Work({ language }) {
  const copy = translations[language].work

  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="shell">
        <header className="work-heading">
          <p className="work-section-number">{copy.sectionNumber}</p>
          <h2 id="work-title">{copy.heading}</h2>
        </header>

        <article className="work-project" id="carducci" aria-labelledby="carducci-title">
          <div className="work-project-heading">
            <p className="work-project-index">{copy.projectIndex}</p>
            <h3 id="carducci-title">{copy.title}</h3>
            <p className="work-project-type">{copy.type}</p>
          </div>

          <a
            className="work-preview"
            href="#carducci"
            aria-label={`${copy.cta}: ${copy.title}`}
          >
            <img
              src={projectImage}
              alt={copy.alt}
              loading="lazy"
              decoding="async"
            />
            <span className="work-preview-overlay" aria-hidden="true" />
            <span className="work-preview-action" aria-hidden="true">
              <span>{copy.cta}</span>
              <span>↗</span>
            </span>
          </a>

          <div className="work-info-grid">
            <dl className="work-info">
              <dt>{copy.labels.role}</dt>
              <dd>{copy.values.role}</dd>
            </dl>
            <dl className="work-info">
              <dt>{copy.labels.stack}</dt>
              <dd>{copy.values.stack}</dd>
            </dl>
            <dl className="work-info">
              <dt>{copy.labels.year}</dt>
              <dd>{copy.values.year}</dd>
            </dl>
            <a className="work-case-link" href="#carducci">
              <span>{copy.cta}</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}
