import { useEffect, useRef } from 'react'
import './CarducciResultIntro.css'

export function CarducciResultIntro({ copy }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return undefined

    const revealItems = [...root.querySelectorAll('[data-result-reveal]')]
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
      className="carducci-result-intro"
      ref={sectionRef}
      aria-labelledby="carducci-result-intro-title"
    >
      <header className="result-intro-opening">
        <p className="result-intro-marker" data-result-reveal>
          <span>{copy.markerNumber}</span>
          <i aria-hidden="true">/</i>
          <span>{copy.markerLabel}</span>
        </p>

        <div className="result-intro-heading-layout">
          <h2 id="carducci-result-intro-title" className="result-intro-title">
            <span className="result-intro-title-line">
              <span data-result-reveal>{copy.titleFirst}</span>
            </span>
            <span className="result-intro-title-line result-intro-title-line--second">
              <span data-result-reveal>{copy.titleSecond}</span>
            </span>
          </h2>

          <p className="result-intro-body" data-result-reveal>
            {copy.body}
          </p>
        </div>
      </header>

      <ol
        className="result-intro-outcome-list"
        aria-label={copy.outcome.markerLabel}
      >
        {copy.outcome.rows.map((row) => {
          const rowId = `carducci-result-row-${row.number}`

          return (
            <li className="result-intro-outcome-row" data-result-reveal key={row.number}>
              <span className="result-intro-outcome-number" aria-hidden="true">
                {row.number}
              </span>

              <h3 id={rowId} className="result-intro-outcome-word">
                {row.word || row.label}
              </h3>

              <p className="result-intro-outcome-statement" aria-labelledby={rowId}>
                {row.statement}
              </p>
            </li>
          )
        })}
      </ol>

      <footer className="result-intro-closing" data-result-reveal>
        <p className="result-intro-closing-statement">
          <span className="result-intro-closing-line">
            <span>{copy.outcome.closingFirst}</span>
          </span>
          <span className="result-intro-closing-line result-intro-closing-line--outline">
            <span>{copy.outcome.closingSecond}</span>
          </span>
        </p>
      </footer>
    </section>
  )
}
