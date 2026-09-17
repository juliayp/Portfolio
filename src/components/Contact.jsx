import { useEffect, useRef, useState } from 'react'
import { translations } from '../data/translations'
import './Contact.css'

export function Contact({ language }) {
  const copy = translations[language].contact
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!section || reducedMotion || !('IntersectionObserver' in window)) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
        observer.disconnect()
      },
      { threshold: 0.18 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className={`contact${isVisible ? ' is-visible' : ''}`}
      id="contact"
      ref={sectionRef}
      aria-labelledby="contact-title"
    >
      <div className="contact-inner shell">
        <p className="contact-marker">{copy.marker}</p>

        <div className="contact-main">
          <h2 className="contact-title" id="contact-title">
            <span>{copy.titleLines[0]}</span>
            <span className="contact-title-outline">{copy.titleLines[1]}</span>
          </h2>

          <a className="contact-email" href={copy.emailHref} aria-label={copy.emailLabel}>
            {copy.email}
          </a>
        </div>

        <footer className="contact-footer">
          <p className="contact-meta">{copy.meta}</p>

          <nav className="contact-links" aria-label={copy.linksLabel}>
            <a href={copy.links.linkedin} target="_blank" rel="noopener noreferrer">
              LINKEDIN <span aria-hidden="true">↗</span>
            </a>
            <a href={copy.links.github} target="_blank" rel="noopener noreferrer">
              GITHUB <span aria-hidden="true">↗</span>
            </a>
            <a href="#top">{copy.links.backToTop} <span aria-hidden="true">↑</span></a>
          </nav>
        </footer>
      </div>
    </section>
  )
}
