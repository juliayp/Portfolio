import { useEffect, useRef } from 'react'
import './CarducciDevelopmentInteraction.css'

const menuDrawerImage = '/images/carducci-experience/carducci-menu-overlay.png'

const lifecycleCodeStart = `setPhase('closing')
const reducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)',
).matches
exitTimerRef.current = window.setTimeout(`

const lifecycleCodeEnd = `  reducedMotion ? 20 : MENU_DRAWER_EXIT_MS,
)`

export function CarducciDevelopmentInteraction({ copy }) {
  const interactionRef = useRef(null)

  useEffect(() => {
    const root = interactionRef.current
    if (!root) return undefined

    const revealItems = [...root.querySelectorAll('[data-interaction-reveal]')]
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
      className="carducci-development-interaction"
      ref={interactionRef}
      aria-labelledby="development-interaction-title"
    >
      <header className="interaction-opening">
        <div className="interaction-marker" data-interaction-reveal>
          <span>{copy.number} /</span>
          <p>{copy.label}</p>
        </div>

        <h2 id="development-interaction-title" className="interaction-title">
          <span className="interaction-title-line">
            <span data-interaction-reveal>{copy.titleFirst}</span>
          </span>
          <span className="interaction-title-line interaction-title-line--second">
            <span data-interaction-reveal>{copy.titleSecond}</span>
          </span>
        </h2>

        <p className="interaction-intro-copy" data-interaction-reveal>
          {copy.body}
        </p>
      </header>

      <div className="interaction-evidence">
        <div className="interaction-technical-labels" data-interaction-reveal>
          <span>{copy.visualLabel}</span>
          <span>{copy.stateLabel}</span>
        </div>

        <div className="interaction-visual-composition">
          <figure className="interaction-menu-figure" data-interaction-reveal>
            <img
              src={menuDrawerImage}
              alt={copy.imageAlt}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <ol className="interaction-annotations">
            {copy.annotations.map((annotation) => (
              <li
                className={`interaction-annotation interaction-annotation--${annotation.number}`}
                data-interaction-reveal
                key={annotation.number}
              >
                <span>{annotation.number} / {annotation.label}</span>
                <p>{annotation.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="interaction-code-stage">
          <div className="interaction-code-layout">
            <div className="interaction-code-panel" data-interaction-reveal>
              <p>{copy.codeLabel}</p>
              <pre aria-label={copy.codeAriaLabel}><code>{lifecycleCodeStart}</code><span className="interaction-code-omission" aria-hidden="true">{`\n  ⋮\n`}</span><code>{lifecycleCodeEnd}</code></pre>
            </div>

            <p className="interaction-principle" data-interaction-reveal>
              <span>{copy.principleFirst}</span>
              <span>{copy.principleSecond}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
