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
      aria-labelledby="carducci-experience-title"
    >
      <header className="experience-intro experience-warm">
        <div data-experience-reveal>
          <ExperienceMarker
            number={copy.intro.number}
            label={copy.intro.label}
            id="carducci-experience-marker"
          />
        </div>
        <h2 id="carducci-experience-title" data-experience-reveal>
          {copy.intro.title}
        </h2>
        <p data-experience-reveal>{copy.intro.text}</p>
      </header>

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
        className="experience-section experience-storytelling experience-warm"
        aria-labelledby="experience-storytelling-title"
      >
        <div data-experience-reveal>
          <ExperienceMarker
            number={copy.storytelling.number}
            label={copy.storytelling.label}
            id="experience-storytelling-title"
          />
        </div>
        <h3 className="experience-display-title" data-experience-reveal>
          {copy.storytelling.title}
        </h3>
        <div className="experience-story-composition">
          <figure className="experience-figure experience-story-main" data-experience-reveal>
            <ExperienceImage src={images.story} alt={copy.storytelling.storyAlt} />
            <figcaption>{copy.storytelling.storyCaption}</figcaption>
          </figure>
          <figure className="experience-figure experience-story-aside" data-experience-reveal>
            <ExperienceImage src={images.vivi} alt={copy.storytelling.viviAlt} />
            <figcaption>{copy.storytelling.viviCaption}</figcaption>
          </figure>
        </div>
      </section>

      <section
        className="experience-section experience-day experience-warm"
        aria-labelledby="experience-day-title"
      >
        <div data-experience-reveal>
          <ExperienceMarker
            number={copy.day.number}
            label={copy.day.label}
            id="experience-day-title"
          />
        </div>
        <h3 className="experience-display-title experience-day-title" data-experience-reveal>
          {copy.day.title}
        </h3>
        <figure className="experience-figure experience-wide-figure" data-experience-reveal>
          <ExperienceImage src={images.aperitivo} alt={copy.day.alt} />
          <figcaption>{copy.day.caption}</figcaption>
        </figure>
      </section>

      <section
        className="experience-section experience-details experience-dark"
        aria-labelledby="experience-details-title"
      >
        <div data-experience-reveal>
          <ExperienceMarker
            number={copy.details.number}
            label={copy.details.label}
            id="experience-details-title"
            dark
          />
        </div>
        <h3 className="experience-display-title" data-experience-reveal>
          {copy.details.title}
        </h3>
        <figure className="experience-figure experience-wide-figure" data-experience-reveal>
          <ExperienceImage src={images.menu} alt={copy.details.alt} />
          <figcaption>{copy.details.caption}</figcaption>
        </figure>
      </section>

      <section
        className="experience-section experience-local experience-warm"
        aria-labelledby="experience-local-title"
      >
        <div data-experience-reveal>
          <ExperienceMarker
            number={copy.local.number}
            label={copy.local.label}
            id="experience-local-title"
          />
        </div>
        <div className="experience-local-layout">
          <h3 className="experience-display-title" data-experience-reveal>
            {copy.local.title}
          </h3>
          <figure className="experience-figure experience-location-figure" data-experience-reveal>
            <ExperienceImage src={images.location} alt={copy.local.alt} />
            <figcaption>{copy.local.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section
        className="experience-section experience-responsive experience-dark"
        aria-labelledby="experience-responsive-title"
      >
        <div data-experience-reveal>
          <ExperienceMarker
            number={copy.responsive.number}
            label={copy.responsive.label}
            id="experience-responsive-marker"
            dark
          />
        </div>
        <h3 id="experience-responsive-title" className="experience-responsive-title" data-experience-reveal>
          <span>{copy.responsive.titleFirst}</span>
          <span>{copy.responsive.titleSecond}</span>
        </h3>

        <div className="experience-responsive-stage">
          <figure className="experience-figure experience-screen experience-screen--homepage" data-experience-reveal>
            <ExperienceImage src={images.homepage} alt={copy.responsive.homepageAlt} />
            <figcaption>{copy.responsive.homepageCaption}</figcaption>
          </figure>
          <figure className="experience-figure experience-screen experience-screen--menu" data-experience-reveal>
            <ExperienceImage src={images.menu} alt={copy.responsive.menuAlt} />
            <figcaption>{copy.responsive.menuCaption}</figcaption>
          </figure>
          <figure className="experience-figure experience-screen experience-screen--review" data-experience-reveal>
            <ExperienceImage src={images.review} alt={copy.responsive.reviewAlt} />
            <figcaption>{copy.responsive.reviewCaption}</figcaption>
          </figure>
          <figure className="experience-figure experience-screen experience-screen--story" data-experience-reveal>
            <ExperienceImage src={images.story} alt={copy.responsive.storyAlt} />
            <figcaption>{copy.responsive.storyCaption}</figcaption>
          </figure>
          <figure className="experience-figure experience-screen experience-screen--mobile" data-experience-reveal>
            <ExperienceImage src={images.mobileReview} alt={copy.responsive.mobileAlt} />
            <figcaption>{copy.responsive.mobileCaption}</figcaption>
          </figure>
        </div>
      </section>
    </section>
  )
}
