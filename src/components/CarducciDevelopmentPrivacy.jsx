import { useEffect, useRef } from 'react'
import './CarducciDevelopmentPrivacy.css'

const mapStates = {
  preview: '/images/carducci-development/privacy/carducci-map-preview.png',
  active: '/images/carducci-development/privacy/carducci-map-active.png',
}

const mapConditionalCode = `{interactiveMapVisible ? (
  <>
    <iframe
      src={MAP_EMBED_URL}
      title="Mappa interattiva del Caffè Carducci a Grosseto"
      loading="lazy"`

export function CarducciDevelopmentPrivacy({ copy }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return undefined

    const revealItems = [...root.querySelectorAll('[data-privacy-reveal]')]
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion) {
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

  return (
    <section
      className="carducci-development-privacy"
      ref={sectionRef}
      aria-labelledby="development-privacy-title"
    >
      <div className="privacy-engineering-warm">
        <header className="privacy-engineering-opening">
          <div className="privacy-engineering-marker" data-privacy-reveal>
            <span>{copy.number} /</span>
            <p>{copy.label}</p>
          </div>

          <div className="privacy-engineering-heading-layout">
            <h2 id="development-privacy-title" className="privacy-engineering-title">
              <span className="privacy-engineering-title-line">
                <span data-privacy-reveal>{copy.titleFirst}</span>
              </span>
              <span className="privacy-engineering-title-line privacy-engineering-title-line--second">
                <span data-privacy-reveal>{copy.titleSecond}</span>
              </span>
            </h2>

            <p className="privacy-engineering-body" data-privacy-reveal>
              {copy.body}
            </p>
          </div>
        </header>

        <div className="privacy-engineering-states" aria-label={copy.visualAriaLabel}>
          <figure className="privacy-engineering-state privacy-engineering-state--preview" data-privacy-reveal>
            <figcaption>
              <span>{copy.beforeLabel}</span>
              <strong>{copy.previewLabel}</strong>
            </figcaption>
            <img src={mapStates.preview} alt={copy.previewAlt} loading="lazy" decoding="async" />
          </figure>

          <div className="privacy-engineering-transition" data-privacy-reveal aria-hidden="true">
            <span>{copy.actionLabel}</span>
            <i />
            <b>→</b>
          </div>

          <figure className="privacy-engineering-state privacy-engineering-state--active" data-privacy-reveal>
            <figcaption>
              <span>{copy.afterLabel}</span>
              <strong>{copy.activeLabel}</strong>
            </figcaption>
            <img src={mapStates.active} alt={copy.activeAlt} loading="lazy" decoding="async" />
          </figure>
        </div>

        <ol className="privacy-engineering-principles">
          {copy.principles.map((principle) => (
            <li data-privacy-reveal key={principle.label}>
              <span>{principle.label}</span>
              <p>{principle.text}</p>
            </li>
          ))}
        </ol>

        <div className="privacy-engineering-code-layout">
          <p className="privacy-engineering-code-note" data-privacy-reveal>
            <span>{copy.codeNoteFirst}</span>
            <span>{copy.codeNoteSecond}</span>
          </p>

          <div className="privacy-engineering-code" data-privacy-reveal>
            <p>{copy.codeLabel}</p>
            <pre aria-label={copy.codeAriaLabel}><code>{mapConditionalCode}</code><span aria-hidden="true">{`\n      ⋮`}</span></pre>
          </div>
        </div>
      </div>

      <div className="privacy-engineering-closing" data-privacy-reveal>
        <p>
          <span>{copy.closingFirst}</span>
          <span>{copy.closingSecond}</span>
        </p>
      </div>
    </section>
  )
}
