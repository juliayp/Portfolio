import { useRef, useState } from 'react'
import { translations } from '../data/translations'
import { CarducciCaseStudy } from './CarducciCaseStudy'
import './Work.css'

const projectImage = '/images/carducci-preview.jpeg'

export function Work({ language }) {
  const copy = translations[language].work
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false)
  const projectRef = useRef(null)
  const caseStudyId = 'carducci-case-study'
  const caseStudyActionLabel = isCaseStudyOpen ? copy.caseStudy.close : copy.cta

  const toggleCaseStudy = () => {
    const nextOpenState = !isCaseStudyOpen
    setIsCaseStudyOpen(nextOpenState)

    if (!nextOpenState) {
      window.requestAnimationFrame(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        projectRef.current?.scrollIntoView({
          behavior: reduceMotion ? 'auto' : 'smooth',
          block: 'start',
        })
      })
    }
  }

  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="shell">
        <header className="work-heading">
          <p className="work-section-number">{copy.sectionNumber}</p>
          <h2 id="work-title">{copy.heading}</h2>
        </header>

        <article
          className="work-project"
          id="carducci"
          ref={projectRef}
          aria-labelledby="carducci-title"
        >
          <div className="work-project-heading">
            <p className="work-project-index">{copy.projectIndex}</p>
            <h3 id="carducci-title">{copy.title}</h3>
            <p className="work-project-type">{copy.type}</p>
          </div>

          <button
            className="work-preview"
            type="button"
            aria-controls={caseStudyId}
            aria-expanded={isCaseStudyOpen}
            aria-label={`${caseStudyActionLabel}: ${copy.title}`}
            onClick={toggleCaseStudy}
          >
            <img
              src={projectImage}
              alt={copy.alt}
              loading="lazy"
              decoding="async"
            />
            <span className="work-preview-overlay" aria-hidden="true" />
            <span className="work-preview-action" aria-hidden="true">
              <span>{caseStudyActionLabel}</span>
              <span>{isCaseStudyOpen ? '↑' : '↗'}</span>
            </span>
          </button>

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
            <button
              className="work-case-link"
              type="button"
              aria-controls={caseStudyId}
              aria-expanded={isCaseStudyOpen}
              onClick={toggleCaseStudy}
            >
              <span>{caseStudyActionLabel}</span>
              <span aria-hidden="true">{isCaseStudyOpen ? '↑' : '↗'}</span>
            </button>
          </div>

          <div
            className={`case-study-reveal${isCaseStudyOpen ? ' is-open' : ''}`}
            id={caseStudyId}
            aria-hidden={!isCaseStudyOpen}
          >
            <div className="case-study-reveal-inner">
              <CarducciCaseStudy copy={copy.caseStudy} onClose={toggleCaseStudy} />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
