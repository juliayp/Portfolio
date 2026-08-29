import { useEffect, useRef } from 'react'
import './CarducciDevelopmentIntro.css'

export function CarducciDevelopmentIntro({ copy }) {
  const developmentRef = useRef(null)

  useEffect(() => {
    const root = developmentRef.current
    if (!root) return undefined

    const revealItems = [...root.querySelectorAll('[data-development-reveal]')]
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
      className="carducci-development-intro"
      ref={developmentRef}
      aria-labelledby="carducci-development-title"
    >
      <div className="development-marker" data-development-reveal>
        <span>{copy.number} /</span>
        <h3>{copy.label}</h3>
      </div>

      <h2 id="carducci-development-title" className="development-title">
        <span className="development-title-line development-title-line--designed">
          <span data-development-reveal>{copy.titleFirst}</span>
        </span>
        <span className="development-title-line development-title-line--intent">
          <span data-development-reveal>{copy.titleSecond}</span>
        </span>
        <span className="development-title-line development-title-line--outline">
          <span data-development-reveal>
            <span>{copy.titleOutlineFirst}</span>{' '}
            <span>{copy.titleOutlineSecond}</span>
          </span>
        </span>
      </h2>

      <div className="development-supporting">
        <dl className="development-meta" data-development-reveal>
          {copy.meta.map((item) => (
            <div className="development-meta-item" key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>

        <p className="development-copy" data-development-reveal>
          {copy.body}
        </p>
      </div>
    </section>
  )
}
