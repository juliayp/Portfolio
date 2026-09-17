import { useEffect, useRef } from 'react'
import './CarducciDevelopmentResponsive.css'

const responsiveScreens = [
  {
    key: 'desktop',
    src: '/images/carducci-development/responsive/carducci-hero-desktop-1440.png',
  },
  {
    key: 'tablet',
    src: '/images/carducci-development/responsive/carducci-hero-tablet-834.png',
  },
  {
    key: 'mobile',
    src: '/images/carducci-development/responsive/carducci-hero-mobile-390.png',
  },
]

export function CarducciDevelopmentResponsive({ copy, privacyCopy }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return undefined

    const revealItems = [...root.querySelectorAll('[data-responsive-reveal]')]
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
      className="carducci-development-responsive"
      ref={sectionRef}
      aria-labelledby="development-responsive-title"
    >
      <header className="responsive-engineering-opening">
        <div className="responsive-engineering-marker" data-responsive-reveal>
          <span>{copy.number} /</span>
          <p>{copy.label}</p>
        </div>

        <div className="responsive-engineering-heading-layout">
          <h2 id="development-responsive-title" className="responsive-engineering-title">
            <span className="responsive-engineering-title-line">
              <span data-responsive-reveal>{copy.titleFirst}</span>
            </span>
            <span className="responsive-engineering-title-line responsive-engineering-title-line--outline">
              <span data-responsive-reveal>{copy.titleSecond}</span>
            </span>
          </h2>

          <div className="responsive-engineering-intro" data-responsive-reveal>
            <p className="responsive-engineering-secondary">
              <span>{copy.secondaryFirst}</span>
              <span>{copy.secondarySecond}</span>
            </p>
            <p className="responsive-engineering-body">{copy.body}</p>
          </div>
        </div>
      </header>

      <div className="responsive-engineering-stage" aria-label={copy.visualAriaLabel}>
        {responsiveScreens.map((screen, index) => (
          <figure
            className={`responsive-engineering-screen responsive-engineering-screen--${screen.key}`}
            data-responsive-reveal
            key={screen.key}
          >
            <figcaption>{copy.screens[index].label}</figcaption>
            <img
              src={screen.src}
              alt={copy.screens[index].alt}
              loading="lazy"
              decoding="async"
            />
          </figure>
        ))}
      </div>

      <dl className="responsive-engineering-metrics" data-responsive-reveal>
        {copy.metrics.map((metric) => (
          <div key={metric.label}>
            <dt>{metric.label}</dt>
            <dd>{metric.value}</dd>
          </div>
        ))}
      </dl>

      <ol className="responsive-engineering-statements">
        {copy.statements.map((statement) => (
          <li data-responsive-reveal key={statement.number}>
            <span className="responsive-engineering-statement-number">{statement.number} /</span>
            <h3>{statement.label}</h3>
            <p>{statement.text}</p>
          </li>
        ))}
      </ol>

      <p className="responsive-engineering-tools" data-responsive-reveal>
        {copy.tools}
      </p>

      <aside className="responsive-privacy" aria-label={privacyCopy.label}>
        <header className="responsive-privacy-heading" data-responsive-reveal>
          <div className="responsive-privacy-marker">
            <span>{privacyCopy.number} /</span>
            <p>{privacyCopy.label}</p>
          </div>

          <div className="responsive-privacy-heading-copy">
            <p>{privacyCopy.body}</p>
          </div>
        </header>

        <div className="responsive-privacy-flow" aria-label={privacyCopy.visualAriaLabel}>
          <figure className="responsive-privacy-state responsive-privacy-state--preview" data-responsive-reveal>
            <figcaption>
              <span>{privacyCopy.beforeLabel}</span>
              <strong>{privacyCopy.previewLabel}</strong>
            </figcaption>
            <img
              src="/images/carducci-development/privacy/carducci-map-preview.png"
              alt={privacyCopy.previewAlt}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="responsive-privacy-transition" data-responsive-reveal aria-hidden="true">
            <span>{privacyCopy.actionLabel}</span>
            <i />
            <b>→</b>
          </div>

          <figure className="responsive-privacy-state responsive-privacy-state--active" data-responsive-reveal>
            <figcaption>
              <span>{privacyCopy.afterLabel}</span>
              <strong>{privacyCopy.activeLabel}</strong>
            </figcaption>
            <img
              src="/images/carducci-development/privacy/carducci-map-active.png"
              alt={privacyCopy.activeAlt}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        <div className="responsive-privacy-footer" data-responsive-reveal>
          <ul className="responsive-privacy-principles">
            {privacyCopy.principles.map((principle) => (
              <li key={principle.label}>
                <span>{principle.label}</span>
                <p>{principle.text}</p>
              </li>
            ))}
          </ul>

          <p className="responsive-privacy-closing">
            <span>{privacyCopy.closingFirst}</span>
            <span>{privacyCopy.closingSecond}</span>
          </p>
        </div>
      </aside>
    </section>
  )
}
