import { useEffect, useRef } from 'react'
import './CarducciExperience.css'

const images = {
  homepage: '/images/carducci-experience/carducci-homepage-desktop.png',
  menu: '/images/carducci-experience/carducci-menu-overlay.png',
  story: '/images/carducci-experience/carducci-story.png',
  vivi: '/images/carducci-experience/carducci-vivi.png',
  review: '/images/carducci-experience/carducci-review-desktop.png',
  mobileReview: '/images/carducci-experience/carducci-review-mobile.png',
  location: '/images/carducci-experience/carducci-location-map.png',
  aperitivo: '/images/carducci-experience/carducci-aperitivo.png',
}

function ExperienceMarker({ number, label, id, dark = false }) {
  return (
    <div className={`experience-marker${dark ? ' experience-marker--dark' : ''}`}>
      <span>{number} /</span>
      <h3 id={id}>{label}</h3>
    </div>
  )
}

function ExperienceImage({ src, alt }) {
  return <img src={src} alt={alt} loading="lazy" decoding="async" />
}

export function CarducciExperience({ copy }) {
  const experienceRef = useRef(null)

  useEffect(() => {
    const root = experienceRef.current
    if (!root) return undefined

    const revealItems = [...root.querySelectorAll('[data-experience-reveal]')]
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
      className="carducci-experience"
      ref={experienceRef}
      aria-labelledby="experience-first-title"
    >
      <section
        className="experience-section experience-first experience-warm"
        aria-labelledby="experience-first-title"
      >
        <div data-experience-reveal>
          <ExperienceMarker
            number={copy.firstImpression.number}
            label={copy.firstImpression.label}
            id="experience-first-title"
          />
        </div>
        <figure className="experience-figure experience-first-figure" data-experience-reveal>
          <ExperienceImage src={images.homepage} alt={copy.firstImpression.alt} />
          <figcaption>{copy.firstImpression.caption}</figcaption>
        </figure>
      </section>

      <section
        className="experience-section experience-story-atmosphere experience-warm"
        aria-labelledby="experience-story-atmosphere-title"
      >
        <div data-experience-reveal>
          <ExperienceMarker
            number={copy.storyAtmosphere.number}
            label={copy.storyAtmosphere.label}
            id="experience-story-atmosphere-title"
          />
        </div>
        <h3 className="experience-display-title" data-experience-reveal>
          {copy.storyAtmosphere.title}
        </h3>
        <div className="experience-atmosphere-composition">
          <figure className="experience-figure experience-atmosphere-story" data-experience-reveal>
            <ExperienceImage src={images.story} alt={copy.storyAtmosphere.storyAlt} />
            <figcaption>{copy.storyAtmosphere.storyCaption}</figcaption>
          </figure>
          <figure className="experience-figure experience-atmosphere-vivi" data-experience-reveal>
            <ExperienceImage src={images.vivi} alt={copy.storyAtmosphere.viviAlt} />
            <figcaption>{copy.storyAtmosphere.viviCaption}</figcaption>
          </figure>
          <figure className="experience-figure experience-atmosphere-aperitivo" data-experience-reveal>
            <ExperienceImage src={images.aperitivo} alt={copy.storyAtmosphere.aperitivoAlt} />
            <figcaption>{copy.storyAtmosphere.aperitivoCaption}</figcaption>
          </figure>
        </div>
      </section>

      <section
        className="experience-section experience-useful experience-dark"
        aria-labelledby="experience-useful-title"
      >
        <div data-experience-reveal>
          <ExperienceMarker
            number={copy.usefulInRealLife.number}
            label={copy.usefulInRealLife.label}
            id="experience-useful-title"
            dark
          />
        </div>
        <h3 className="experience-display-title" data-experience-reveal>
          {copy.usefulInRealLife.title}
        </h3>
        <div className="experience-useful-composition">
          <figure className="experience-figure experience-useful-menu" data-experience-reveal>
            <ExperienceImage src={images.menu} alt={copy.usefulInRealLife.menuAlt} />
            <figcaption>{copy.usefulInRealLife.menuCaption}</figcaption>
          </figure>
          <div className="experience-useful-location">
            <h4 data-experience-reveal>{copy.usefulInRealLife.localTitle}</h4>
            <figure className="experience-figure" data-experience-reveal>
              <ExperienceImage src={images.location} alt={copy.usefulInRealLife.localAlt} />
              <figcaption>{copy.usefulInRealLife.localCaption}</figcaption>
            </figure>
          </div>
        </div>
      </section>

    </section>
  )
}
