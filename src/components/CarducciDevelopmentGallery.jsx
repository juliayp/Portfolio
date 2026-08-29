import { useEffect, useRef } from 'react'
import './CarducciDevelopmentGallery.css'

const galleryImages = [
  '/images/carducci-development/gallery/01-fuori.webp',
  '/images/carducci-development/gallery/02-barmen.webp',
  '/images/carducci-development/gallery/03-friends.webp',
  '/images/carducci-development/gallery/04-aperitivo.webp',
  '/images/carducci-development/gallery/05-food.webp',
  '/images/carducci-development/gallery/07-rituale.webp',
]

const wheelCode = `const maxScroll = track.scrollWidth - track.clientWidth
const canMove = event.deltaY > 0 ? track.scrollLeft < maxScroll - 1 : track.scrollLeft > 1
if (!canMove) return

event.preventDefault()
track.scrollLeft += event.deltaY`

export function CarducciDevelopmentGallery({ copy }) {
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return undefined

    const revealItems = [...root.querySelectorAll('[data-gallery-reveal]')]
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

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    const handleWheel = (event) => {
      if (Math.abs(event.deltaX) >= Math.abs(event.deltaY) || Math.abs(event.deltaY) < 1) return
      const maxScroll = track.scrollWidth - track.clientWidth
      const canMove = event.deltaY > 0 ? track.scrollLeft < maxScroll - 1 : track.scrollLeft > 1
      if (!canMove) return

      event.preventDefault()
      track.scrollLeft += event.deltaY
    }

    let pointerStart = 0
    let scrollStart = 0

    const finishDrag = (event) => {
      if (!track.hasPointerCapture(event.pointerId)) return
      track.releasePointerCapture(event.pointerId)
      track.classList.remove('is-dragging')
    }

    const handlePointerDown = (event) => {
      if (event.pointerType === 'mouse' && event.button !== 0) return
      pointerStart = event.clientX
      scrollStart = track.scrollLeft
      track.setPointerCapture(event.pointerId)
      track.classList.add('is-dragging')
    }

    const handlePointerMove = (event) => {
      if (!track.hasPointerCapture(event.pointerId)) return
      track.scrollLeft = scrollStart - (event.clientX - pointerStart)
    }

    track.addEventListener('wheel', handleWheel, { passive: false })
    track.addEventListener('pointerdown', handlePointerDown)
    track.addEventListener('pointermove', handlePointerMove)
    track.addEventListener('pointerup', finishDrag)
    track.addEventListener('pointercancel', finishDrag)

    return () => {
      track.removeEventListener('wheel', handleWheel)
      track.removeEventListener('pointerdown', handlePointerDown)
      track.removeEventListener('pointermove', handlePointerMove)
      track.removeEventListener('pointerup', finishDrag)
      track.removeEventListener('pointercancel', finishDrag)
    }
  }, [])

  return (
    <section
      className="carducci-development-gallery"
      ref={sectionRef}
      aria-labelledby="development-gallery-title"
    >
      <header className="gallery-engineering-opening">
        <div className="gallery-engineering-marker" data-gallery-reveal>
          <span>{copy.number} /</span>
          <p>{copy.label}</p>
        </div>

        <div className="gallery-engineering-heading-layout">
          <h2 id="development-gallery-title" className="gallery-engineering-title">
            {copy.title.map((line, index) => (
              <span className={`gallery-engineering-title-line gallery-engineering-title-line--${index + 1}`} key={line}>
                <span data-gallery-reveal>{line}</span>
              </span>
            ))}
          </h2>

          <div className="gallery-engineering-intro" data-gallery-reveal>
            <p className="gallery-engineering-secondary">{copy.secondary}</p>
            <p className="gallery-engineering-body">{copy.body}</p>
          </div>
        </div>
      </header>

      <div
        className="gallery-engineering-viewport"
        ref={trackRef}
        role="region"
        aria-label={copy.galleryAriaLabel}
        tabIndex="0"
      >
        <div className="gallery-engineering-track" data-gallery-reveal>
          {galleryImages.map((src, index) => (
            <figure className={`gallery-engineering-figure gallery-engineering-figure--${index + 1}`} key={src}>
              <img
                src={src}
                alt={copy.imageAlts[index]}
                loading="lazy"
                decoding="async"
                draggable="false"
              />
              <figcaption>{String(index + 1).padStart(2, '0')}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <ol className="gallery-engineering-inputs">
        {copy.inputs.map((input) => (
          <li data-gallery-reveal key={input.number}>
            <span>{input.number} / {input.label}</span>
            <p>{input.text}</p>
          </li>
        ))}
      </ol>

      <div className="gallery-engineering-code-stage">
        <div className="gallery-engineering-code" data-gallery-reveal>
          <p>{copy.codeLabel}</p>
          <pre aria-label={copy.codeAriaLabel}><code>{wheelCode}</code></pre>
        </div>

        <p className="gallery-engineering-principle" data-gallery-reveal>
          <span>{copy.principleFirst}</span>
          <span>{copy.principleSecond}</span>
        </p>
      </div>
    </section>
  )
}
