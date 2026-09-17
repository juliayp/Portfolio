import { useEffect, useRef, useState } from 'react'
import { translations } from '../data/translations'
import './ClientVoice.css'

export function ClientVoice({ language }) {
  const copy = translations[language].clientVoice
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
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18 },
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      className={`client-voice${isVisible ? ' is-visible' : ''}`}
      id="client-voice"
      ref={sectionRef}
      aria-labelledby="client-voice-title"
    >
      <div className="client-voice-inner shell">
        <p className="client-voice-marker">{copy.marker}</p>

        <div className="client-voice-content" lang={language}>
          <h2 className="client-voice-title" id="client-voice-title">
            {copy.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>
          <p className="client-voice-supporting">{copy.supporting}</p>
          <div className="client-voice-marquee" aria-hidden="true">
            <div className="client-voice-marquee-track">
              <span className="client-voice-marquee-group">{copy.marquee}</span>
              <span className="client-voice-marquee-group">{copy.marquee}</span>
            </div>
          </div>
          <div className="client-voice-divider" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
