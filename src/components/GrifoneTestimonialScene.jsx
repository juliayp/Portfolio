import { useEffect, useRef } from 'react'
import './GrifoneTestimonialScene.css'

export function GrifoneTestimonialScene({ copy }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return undefined

    const revealItems = [...root.querySelectorAll('[data-grifone-testimonial-reveal]')]
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
      className="grifone-testimonial"
      ref={sectionRef}
      aria-labelledby="grifone-testimonial-title"
    >
      <header className="grifone-testimonial__header" data-grifone-testimonial-reveal>
        <h2 id="grifone-testimonial-title">{copy.marker}</h2>
        <p>{copy.direction}</p>
      </header>

      <blockquote className="grifone-testimonial__blockquote" data-grifone-testimonial-reveal>
        <span className="grifone-testimonial__opening-quote" aria-hidden="true">“</span>
        <p className="grifone-testimonial__quote">{copy.quote}</p>

        <footer className="grifone-testimonial__footer">
          <div>
            <cite className="grifone-testimonial__author">{copy.author}</cite>
            <p className="grifone-testimonial__role">{copy.role}</p>
          </div>
          <p className="grifone-testimonial__note">{copy.note}</p>
        </footer>
      </blockquote>
    </section>
  )
}
