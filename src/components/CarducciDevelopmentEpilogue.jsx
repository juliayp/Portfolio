import { useEffect, useRef } from 'react'
import './CarducciDevelopmentEpilogue.css'

export function CarducciDevelopmentEpilogue({ copy }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return undefined

    const revealItems = [...root.querySelectorAll('[data-epilogue-reveal]')]
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
      className="carducci-development-epilogue"
      ref={sectionRef}
      aria-labelledby="development-epilogue-title"
    >
      <header className="development-epilogue-opening">
        <p className="development-epilogue-marker" data-epilogue-reveal>
          <span>{copy.markerFirst}</span>
          <i aria-hidden="true">/</i>
          <span>{copy.markerSecond}</span>
        </p>

        <div className="development-epilogue-heading-layout">
          <h2 id="development-epilogue-title" className="development-epilogue-title">
            <span className="development-epilogue-title-line">
              <span data-epilogue-reveal>{copy.titleFirst}</span>
            </span>
            <span className="development-epilogue-title-line development-epilogue-title-line--second">
              <span data-epilogue-reveal>{copy.titleSecond}</span>
            </span>
          </h2>

          <p className="development-epilogue-body" data-epilogue-reveal>
            {copy.body}
          </p>
        </div>
      </header>

      <ol className="development-epilogue-principles">
        {copy.principles.map((principle) => (
          <li data-epilogue-reveal key={principle.number}>
            <div className="development-epilogue-principle-label">
              <span>{principle.number} /</span>
              <h3>{principle.label}</h3>
            </div>
            <p>{principle.details}</p>
          </li>
        ))}
      </ol>

      <footer className="development-epilogue-closing" data-epilogue-reveal>
        <p className="development-epilogue-statement">
          <span>{copy.closingFirst}</span>
          <span>{copy.closingSecond}</span>
        </p>
        <p className="development-epilogue-complete">{copy.completeLabel}</p>
      </footer>
    </section>
  )
}
