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

export function CarducciDevelopmentResponsive({ copy }) {
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
    </section>
  )
}
