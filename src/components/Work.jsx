import { useEffect, useRef, useState } from 'react'
import { translations } from '../data/translations'
import { CarducciCaseStudy } from './CarducciCaseStudy'
import { GrifoneBuildScene } from './GrifoneBuildScene'
import { GrifoneChallengeScene } from './GrifoneChallengeScene'
import { GrifoneExperienceScene } from './GrifoneExperienceScene'
import { GrifoneProjectScene } from './GrifoneProjectScene'
import { GrifoneStructureScene } from './GrifoneStructureScene'
import { GrifoneUnderHoodScene } from './GrifoneUnderHoodScene'
import { GrifoneWorkflowScene } from './GrifoneWorkflowScene'
import './Work.css'

const carducciImage = '/images/carducci-preview.jpeg'
const grifoneImage = '/images/work/pratiche-auto-grifone.png'

export function Work({ language }) {
  const copy = translations[language].work
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false)
  const [isGrifoneCaseStudyOpen, setIsGrifoneCaseStudyOpen] = useState(false)
  const projectRef = useRef(null)
  const caseStudyRef = useRef(null)
  const grifoneProjectRef = useRef(null)
  const grifoneCaseStudyRef = useRef(null)
  const scrollTimeoutRef = useRef(null)
  const caseStudyId = 'carducci-case-study'
  const grifoneCaseStudyId = 'grifone-case-study'
  const caseStudyActionLabel = isCaseStudyOpen ? copy.caseStudy.close : copy.cta
  const grifoneCaseStudyActionLabel = isGrifoneCaseStudyOpen
    ? copy.grifone.caseStudy.close
    : copy.grifone.cta

  useEffect(() => {
    const openFromDrawer = () => {
      setIsCaseStudyOpen(true)

      if (scrollTimeoutRef.current !== null) {
        window.clearTimeout(scrollTimeoutRef.current)
        scrollTimeoutRef.current = null
      }

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const scrollToCaseStudy = () => {
        caseStudyRef.current?.scrollIntoView({
          behavior: reduceMotion ? 'auto' : 'smooth',
          block: 'start',
        })
        scrollTimeoutRef.current = null
      }

      if (reduceMotion) {
        window.requestAnimationFrame(scrollToCaseStudy)
      } else {
        scrollTimeoutRef.current = window.setTimeout(scrollToCaseStudy, 140)
      }
    }

    window.addEventListener('portfolio:open-carducci', openFromDrawer)
    return () => window.removeEventListener('portfolio:open-carducci', openFromDrawer)
  }, [])

  const toggleCaseStudy = () => {
    const nextOpenState = !isCaseStudyOpen
    setIsCaseStudyOpen(nextOpenState)

    if (scrollTimeoutRef.current !== null) {
      window.clearTimeout(scrollTimeoutRef.current)
      scrollTimeoutRef.current = null
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const scrollToTarget = () => {
      const target = nextOpenState ? caseStudyRef.current : projectRef.current

      target?.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start',
      })
      scrollTimeoutRef.current = null
    }

    if (nextOpenState && !reduceMotion) {
      scrollTimeoutRef.current = window.setTimeout(scrollToTarget, 140)
      return
    }

    window.requestAnimationFrame(scrollToTarget)
  }

  const toggleGrifoneCaseStudy = () => {
    const nextOpenState = !isGrifoneCaseStudyOpen
    setIsGrifoneCaseStudyOpen(nextOpenState)

    if (scrollTimeoutRef.current !== null) {
      window.clearTimeout(scrollTimeoutRef.current)
      scrollTimeoutRef.current = null
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const scrollToTarget = () => {
      const target = nextOpenState ? grifoneCaseStudyRef.current : grifoneProjectRef.current

      target?.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start',
      })
      scrollTimeoutRef.current = null
    }

    if (nextOpenState && !reduceMotion) {
      scrollTimeoutRef.current = window.setTimeout(scrollToTarget, 140)
      return
    }

    window.requestAnimationFrame(scrollToTarget)
  }

  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="shell">
        <header className="work-heading">
          <p className="work-section-number">
            <span>{copy.sectionNumber} /</span>
            <span className="work-section-label">{copy.sectionLabel}</span>
          </p>
          <h2 id="work-title">{copy.heading}</h2>
        </header>

        <article
          className="work-project"
          id="carducci"
          ref={projectRef}
          aria-labelledby="carducci-title"
        >
          <div className="work-project-layout">
            <div className="work-project-copy">
              <div className="work-project-heading">
                <p className="work-project-index">{copy.projectIndex} /</p>
                <h3 id="carducci-title">{copy.title}</h3>
                <p className="work-project-type">{copy.type}</p>
              </div>

              <button
                className="work-case-link"
                type="button"
                aria-controls={caseStudyId}
                aria-expanded={isCaseStudyOpen}
                onClick={toggleCaseStudy}
              >
                <span>{caseStudyActionLabel}</span>
                <span aria-hidden="true">↑</span>
              </button>
              <a
                className="work-live-link"
                href="https://caffe-carducci.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{copy.liveWebsite}</span>
                <span aria-hidden="true">↑</span>
              </a>
            </div>

            <button
              className="work-preview"
              type="button"
              aria-controls={caseStudyId}
              aria-expanded={isCaseStudyOpen}
              aria-label={`${caseStudyActionLabel}: ${copy.title}`}
              onClick={toggleCaseStudy}
            >
              <img
                src={carducciImage}
                alt={copy.alt}
                loading="lazy"
                decoding="async"
              />
              <span className="work-preview-overlay" aria-hidden="true" />
            </button>
          </div>

          <div
            className={`case-study-reveal${isCaseStudyOpen ? ' is-open' : ''}`}
            id={caseStudyId}
            ref={caseStudyRef}
            aria-hidden={!isCaseStudyOpen}
          >
            <div className="case-study-reveal-inner">
              <CarducciCaseStudy copy={copy.caseStudy} onClose={toggleCaseStudy} />
            </div>
          </div>
        </article>

        <article
          className="work-project work-project--reverse"
          id="pratiche-auto-grifone"
          ref={grifoneProjectRef}
          aria-labelledby="grifone-title"
        >
          <div className="work-project-layout">
            <div className="work-preview work-preview--static work-preview--grifone">
              <img
                src={grifoneImage}
                alt={copy.grifone.alt}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="work-project-copy">
              <div className="work-project-heading">
                <p className="work-project-index">{copy.grifone.projectIndex} /</p>
                <h3 id="grifone-title" className="work-project-title--grifone">
                  {copy.grifone.titleLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h3>
                <p className="work-project-type">{copy.grifone.type}</p>
              </div>

              <button
                className="work-case-link"
                type="button"
                aria-controls={grifoneCaseStudyId}
                aria-expanded={isGrifoneCaseStudyOpen}
                onClick={toggleGrifoneCaseStudy}
              >
                <span>{grifoneCaseStudyActionLabel}</span>
                <span aria-hidden="true">↑</span>
              </button>
              <a
                className="work-live-link"
                href="https://www.praticheautogrifone.it/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{copy.liveWebsite}</span>
                <span aria-hidden="true">↑</span>
              </a>
            </div>
          </div>

          <div
            className={`case-study-reveal case-study-reveal--grifone${isGrifoneCaseStudyOpen ? ' is-open' : ''}`}
            id={grifoneCaseStudyId}
            ref={grifoneCaseStudyRef}
            aria-hidden={!isGrifoneCaseStudyOpen}
          >
            <div className="case-study-reveal-inner">
              {isGrifoneCaseStudyOpen && (
                <>
                  <GrifoneProjectScene copy={copy.grifone.caseStudy} />
                  <GrifoneChallengeScene copy={copy.grifone.caseStudy.challenge} />
                  <GrifoneStructureScene copy={copy.grifone.caseStudy.structure} />
                  <GrifoneExperienceScene copy={copy.grifone.caseStudy.experience} />
                  <GrifoneWorkflowScene copy={copy.grifone.caseStudy.workflow} />
                  <GrifoneBuildScene copy={copy.grifone.caseStudy.build} />
                  <GrifoneUnderHoodScene copy={copy.grifone.caseStudy.underHood} />
                  <div className="case-study-close-wrap">
                    <button
                      className="case-study-close"
                      type="button"
                      onClick={toggleGrifoneCaseStudy}
                    >
                      <span>{copy.grifone.caseStudy.close}</span>
                      <span aria-hidden="true">↑</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
