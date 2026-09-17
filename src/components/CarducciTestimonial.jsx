import { useEffect, useRef } from 'react'
import './CarducciTestimonial.css'

export function CarducciTestimonial({ copy }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return undefined

    const revealItems = [...root.querySelectorAll('[data-testimonial-reveal]')]
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
      className="carducci-testimonial"
      ref={sectionRef}
      aria-labelledby="carducci-testimonial-title"
    >
      <div className="carducci-testimonial-inner">
        <h2 id="carducci-testimonial-title" className="testimonial-marker" data-testimonial-reveal>
          {copy.markerLabel}
        </h2>

        <div className="testimonial-quote-wrap" data-testimonial-reveal>
          <blockquote className="testimonial-blockquote">
            <span className="testimonial-opening-quote" aria-hidden="true">
              “
            </span>
            <p className="testimonial-quote">{copy.quote}</p>

            <footer className="testimonial-footer">
              <div className="testimonial-attribution">
                <cite className="testimonial-author">{copy.author}</cite>
                <p className="testimonial-role">{copy.role}</p>
              </div>
              <p className="testimonial-note">{copy.note}</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
