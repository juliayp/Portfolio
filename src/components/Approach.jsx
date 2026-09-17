import { useEffect, useRef, useState } from 'react'
import { translations } from '../data/translations'
import './Approach.css'

export function Approach({ language }) {
  const copy = translations[language].approach
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current

    if (!section || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
        observer.disconnect()
      },
      { threshold: 0.16 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className={`approach${isVisible ? ' is-visible' : ''}`}
      id="approach"
      aria-labelledby="approach-title"
      ref={sectionRef}
    >
      <div className="approach-inner shell">
        <header className="approach-header">
          <p className="approach-marker">{copy.marker}</p>

          <div className="approach-intro">
            <p className="approach-kicker">{copy.kicker}</p>
            <h2 className="approach-title" id="approach-title">
              <span>{copy.titleLines[0]}</span>
              <span className="approach-title-outline">{copy.titleLines[1]}</span>
            </h2>
            <p className="approach-summary">{copy.summary}</p>
          </div>
        </header>

        <ol className="approach-list">
          {copy.principles.map((principle, index) => (
            <li className="approach-row" key={principle.title}>
              <span className="approach-index">{String(index + 1).padStart(2, '0')} /</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </li>
          ))}
        </ol>

        <footer className="approach-footer">
          <p>{copy.closing}</p>
          <p>{copy.tools}</p>
        </footer>
      </div>
    </section>
  )
}
