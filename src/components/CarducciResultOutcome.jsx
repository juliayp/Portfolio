import { useEffect, useRef } from 'react'
import './CarducciResultOutcome.css'

export function CarducciResultOutcome({ copy }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return undefined

    const revealItems = [...root.querySelectorAll('[data-outcome-reveal]')]
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || typeof IntersectionObserver === 'undefined') {
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
      className="carducci-result-outcome"
      ref={sectionRef}
      aria-labelledby="carducci-result-outcome-title"
    >
      <header className="result-outcome-opening">
        <p className="result-outcome-marker" data-outcome-reveal>
          <span className="result-outcome-marker-number">{copy.markerNumber}</span>
          <span className="result-outcome-marker-slash" aria-hidden="true">
            /
          </span>
          <span>{copy.markerLabel}</span>
        </p>

        <div className="result-outcome-heading-layout">
          <h2 id="carducci-result-outcome-title" className="result-outcome-title">
            <span className="result-outcome-title-line">
              <span data-outcome-reveal>{copy.titleFirst}</span>
            </span>
            <span className="result-outcome-title-line result-outcome-title-line--outline">
              <span data-outcome-reveal>{copy.titleSecond}</span>
            </span>
          </h2>

          <p className="result-outcome-supporting" data-outcome-reveal>
            {copy.supporting}
          </p>
        </div>
      </header>

      <ol
        className="result-outcome-list"
        aria-labelledby="carducci-result-outcome-title"
      >
        {copy.rows.map((row) => {
          const rowId = `carducci-result-outcome-row-${row.number}`

          return (
            <li
              className="result-outcome-row"
              data-outcome-reveal
              key={row.number}
              aria-labelledby={rowId}
            >
              <div className="result-outcome-row-meta">
                <span className="result-outcome-row-number">{row.number} /</span>
                <span>{row.label}</span>
              </div>

              <h3 id={rowId} className="result-outcome-word">
                {row.word}
              </h3>

              <div className="result-outcome-row-copy">
                <p className="result-outcome-statement">{row.statement}</p>
                <p className="result-outcome-detail">{row.detail}</p>
              </div>
            </li>
          )
        })}
      </ol>

      <footer className="result-outcome-closing" data-outcome-reveal>
        <p className="result-outcome-closing-statement">
          <span className="result-outcome-closing-line">
            <span>{copy.closingFirst}</span>
          </span>
          <span className="result-outcome-closing-line result-outcome-closing-line--outline">
            <span>{copy.closingSecond}</span>
          </span>
        </p>
      </footer>
    </section>
  )
}
