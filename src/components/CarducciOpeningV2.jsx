import { useEffect, useRef } from 'react'
import './CarducciOpeningV2.css'

function OpeningMarker({ number, label, dark = false, id }) {
  return (
    <div className={`opening-v2-marker${dark ? ' opening-v2-marker--dark' : ''}`}>
      <span>{number}</span>
      <h2 id={id}>{label}</h2>
    </div>
  )
}

export function CarducciOpeningV2({ copy }) {
  const openingRef = useRef(null)

  useEffect(() => {
    const root = openingRef.current
    if (!root) return undefined

    const revealItems = [...root.querySelectorAll('[data-opening-v2-reveal]')]
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  const projectMetadata = copy.project.metadata ?? []

  return (
    <div className="carducci-opening-v2" ref={openingRef}>
      <section
        className="opening-v2-section opening-v2-project"
        aria-labelledby="opening-v2-project-title"
      >
        <div data-opening-v2-reveal>
          <OpeningMarker
            number={copy.openingV2.projectMarker}
            label={copy.openingV2.projectLabel}
            id="opening-v2-project-title"
          />
        </div>

        <div className="opening-v2-project-composition">
          <h3 className="opening-v2-project-title" data-opening-v2-reveal>
            <span>CAFFÈ</span>
            <span>CARDUCCI</span>
          </h3>

          <div className="opening-v2-project-copy">
            <p className="opening-v2-project-context" data-opening-v2-reveal>
              {copy.opening.subtitle}
            </p>
            <p className="opening-v2-project-statement" data-opening-v2-reveal>
              {copy.project.statement}
            </p>
            <div className="opening-v2-project-description" data-opening-v2-reveal>
              {copy.project.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <dl className="opening-v2-project-metadata" data-opening-v2-reveal>
          {projectMetadata.map((item) => (
            <div className="opening-v2-project-meta" key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        className="opening-v2-section opening-v2-experience"
        aria-labelledby="opening-v2-experience-title"
      >
        <div data-opening-v2-reveal>
          <OpeningMarker
            number={copy.openingV2.experienceMarker}
            label={copy.openingV2.experienceLabel}
            id="opening-v2-experience-title"
            dark
          />
        </div>

        <div className="opening-v2-experience-composition">
          <div className="opening-v2-challenge">
            <h3 className="opening-v2-challenge-title" data-opening-v2-reveal>
              <span>{copy.challenge.titleFirst}</span>
              <span>{copy.challenge.titleSecond}</span>
            </h3>

            <div className="opening-v2-challenge-body" data-opening-v2-reveal>
              {copy.challenge.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ol className="opening-v2-principles">
              {copy.challenge.principles.map((principle) => (
                <li className="opening-v2-principle" key={principle.number} data-opening-v2-reveal>
                  <span>{principle.number}</span>
                  <div>
                    <h4>{principle.title}</h4>
                    <p>{principle.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="opening-v2-experience-response" data-opening-v2-reveal>
            <p>{copy.experience.intro.text}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
