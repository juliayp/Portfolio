import { useEffect, useId, useRef, useState } from 'react'
import { translations } from '../data/translations'
import { WorkDrawer } from './WorkDrawer'
import './Hero.css'

const navItems = [
  { id: 'work', labelKey: 'work' },
  { id: 'about', labelKey: 'about' },
  { id: 'contact', labelKey: 'contact' },
]

const languageOptions = ['en', 'it']

export function Hero({ language, onLanguageChange, children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isWorkDrawerOpen, setIsWorkDrawerOpen] = useState(false)
  const [heroInteraction, setHeroInteraction] = useState('idle')
  const menuId = useId()
  const heroRef = useRef(null)
  const splatRef = useRef(null)
  const glowRef = useRef(null)
  const trailRefs = useRef([])
  const turbulenceRef = useRef(null)
  const displacementRef = useRef(null)
  const workTriggerRef = useRef(null)
  const workDrawerRef = useRef(null)
  const workCloseRef = useRef(null)
  const workDrawerWasOpenRef = useRef(false)
  const interactionRef = useRef('idle')
  const copy = translations[language]

  const activateInteraction = (interaction, event) => {
    if (event?.pointerType === 'touch' || event?.pointerType === 'pen') return
    interactionRef.current = interaction
    setHeroInteraction(interaction)
  }

  const releaseInteraction = (event) => {
    if (event?.currentTarget === document.activeElement) return
    interactionRef.current = 'idle'
    setHeroInteraction('idle')
  }

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.body.classList.add('menu-open')

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.classList.remove('menu-open')
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (!isWorkDrawerOpen) {
      document.body.classList.remove('work-drawer-open')

      if (workDrawerWasOpenRef.current) {
        window.requestAnimationFrame(() => workTriggerRef.current?.focus())
      }

      workDrawerWasOpenRef.current = false
      return undefined
    }

    workDrawerWasOpenRef.current = true
    document.body.classList.add('work-drawer-open')
    window.requestAnimationFrame(() => workCloseRef.current?.focus())

    const handleDrawerKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        setIsWorkDrawerOpen(false)
        return
      }

      if (event.key !== 'Tab') return

      const focusableElements = workDrawerRef.current?.querySelectorAll(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      )
      const focusable = focusableElements ? Array.from(focusableElements) : []
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleDrawerKeyDown)

    return () => {
      document.removeEventListener('keydown', handleDrawerKeyDown)
      document.body.classList.remove('work-drawer-open')
    }
  }, [isWorkDrawerOpen])

  useEffect(() => {
    const hero = heroRef.current
    const splat = splatRef.current
    const glow = glowRef.current
    const trails = trailRefs.current.filter(Boolean)
    const turbulence = turbulenceRef.current
    const displacement = displacementRef.current

    if (!hero || !splat || !glow || !turbulence || !displacement) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frameId
    let bounds = hero.getBoundingClientRect()
    let isReduced = reducedMotion.matches

    const restingGlow = () => ({
      x: bounds.width * 0.74,
      y: bounds.height * 0.38,
    })
    const resting = restingGlow()
    const target = { glowX: resting.x, glowY: resting.y, x: 0, y: 0, rotate: 0 }
    const current = { ...target, activity: 0, deformation: 1.4 }
    const trailCurrent = trails.map(() => ({ x: resting.x, y: resting.y }))
    let lastPointerTime = -Infinity

    const render = (time) => {
      current.glowX += (target.glowX - current.glowX) * 0.065
      current.glowY += (target.glowY - current.glowY) * 0.065
      current.x += (target.x - current.x) * 0.11
      current.y += (target.y - current.y) * 0.11
      current.rotate += (target.rotate - current.rotate) * 0.095
      const activityTarget = time - lastPointerTime < 420 ? 1 : 0
      current.activity += (activityTarget - current.activity) * 0.055

      const interactionIntensity = {
        idle: 1.4,
        work: 2.4,
        about: 2,
        contact: 1.2,
        front: 2.6,
        end: 3,
        developer: 7,
      }[interactionRef.current] ?? 1.4

      current.deformation += (interactionIntensity - current.deformation) * 0.06

      glow.style.setProperty('--hero-glow-x', `${current.glowX}px`)
      glow.style.setProperty('--hero-glow-y', `${current.glowY}px`)
      glow.style.setProperty('--hero-glow-activity', `${0.48 + current.activity * 0.3}`)
      splat.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) rotate(${current.rotate}deg)`

      trails.forEach((trail, index) => {
        const easing = index === 0 ? 0.042 : 0.026
        trailCurrent[index].x += (target.glowX - trailCurrent[index].x) * easing
        trailCurrent[index].y += (target.glowY - trailCurrent[index].y) * easing
        trail.style.setProperty('--trail-x', `${trailCurrent[index].x}px`)
        trail.style.setProperty('--trail-y', `${trailCurrent[index].y}px`)
        trail.style.setProperty('--trail-opacity', `${current.activity * (index === 0 ? 0.22 : 0.13)}`)
      })

      const wave = Math.sin(time / 2100)
      turbulence.setAttribute('baseFrequency', `${0.011 + wave * 0.0012} ${0.015 - wave * 0.001}`)
      displacement.setAttribute('scale', `${current.deformation + wave * 0.65}`)

      frameId = window.requestAnimationFrame(render)
    }

    const resetTargets = () => {
      const origin = restingGlow()
      target.glowX = origin.x
      target.glowY = origin.y
      target.x = 0
      target.y = 0
      target.rotate = 0
      lastPointerTime = -Infinity
    }

    const handlePointerMove = (event) => {
      if (isReduced || event.pointerType === 'touch' || event.pointerType === 'pen') return

      const localX = event.clientX - bounds.left
      const localY = event.clientY - bounds.top
      const normalizedX = Math.max(-1, Math.min(1, (localX / bounds.width) * 2 - 1))
      const normalizedY = Math.max(-1, Math.min(1, (localY / bounds.height) * 2 - 1))

      target.glowX = localX
      target.glowY = localY
      target.x = normalizedX * 8
      target.y = normalizedY * 6
      target.rotate = normalizedX * 1.8
      lastPointerTime = performance.now()
    }

    const handleResize = () => {
      bounds = hero.getBoundingClientRect()
      resetTargets()
    }

    const applyReducedMotion = () => {
      bounds = hero.getBoundingClientRect()
      const origin = restingGlow()
      glow.style.setProperty('--hero-glow-x', `${origin.x}px`)
      glow.style.setProperty('--hero-glow-y', `${origin.y}px`)
      glow.style.setProperty('--hero-glow-activity', '0.48')
      splat.style.transform = 'none'
      trails.forEach((trail) => trail.style.setProperty('--trail-opacity', '0'))
      turbulence.setAttribute('baseFrequency', '0.011 0.015')
      displacement.setAttribute('scale', '0')
    }

    const handleMotionPreference = (event) => {
      isReduced = event.matches
      window.cancelAnimationFrame(frameId)
      resetTargets()

      if (isReduced) {
        applyReducedMotion()
      } else {
        Object.assign(current, target)
        frameId = window.requestAnimationFrame(render)
      }
    }

    hero.addEventListener('pointermove', handlePointerMove, { passive: true })
    hero.addEventListener('pointerleave', resetTargets)
    window.addEventListener('resize', handleResize)
    reducedMotion.addEventListener('change', handleMotionPreference)

    if (isReduced) applyReducedMotion()
    else frameId = window.requestAnimationFrame(render)

    return () => {
      window.cancelAnimationFrame(frameId)
      hero.removeEventListener('pointermove', handlePointerMove)
      hero.removeEventListener('pointerleave', resetTargets)
      window.removeEventListener('resize', handleResize)
      reducedMotion.removeEventListener('change', handleMotionPreference)
    }
  }, [])

  const closeMenu = () => setIsMenuOpen(false)
  const openWorkDrawer = () => {
    setIsMenuOpen(false)
    setIsWorkDrawerOpen(true)
  }
  const closeWorkDrawer = () => setIsWorkDrawerOpen(false)
  const selectCarducci = () => {
    closeWorkDrawer()
    window.dispatchEvent(new CustomEvent('portfolio:open-carducci'))
  }

  return (
    <>
      <a className="skip-link" href="#main-content">{copy.skip}</a>

      <header className="site-header">
        <div className="header-inner shell">
          <a className="wordmark" href="#top" onClick={closeMenu}>JULIA YANEVA</a>

          <nav
            className={`header-nav${isMenuOpen ? ' is-open' : ''}`}
            id={menuId}
            aria-label={copy.navLabel}
          >
            {navItems.map((item) => item.id === 'work' ? (
              <button
                className="header-nav-work"
                type="button"
                key={item.id}
                ref={workTriggerRef}
                data-context={copy.navContext[item.labelKey]}
                aria-expanded={isWorkDrawerOpen}
                aria-controls="work-drawer"
                onClick={openWorkDrawer}
                onPointerEnter={(event) => activateInteraction(item.id, event)}
                onPointerLeave={releaseInteraction}
                onFocus={() => activateInteraction(item.id)}
                onBlur={releaseInteraction}
              >
                <span className="nav-hover-blob" aria-hidden="true" />
                <span className="nav-link-label">{copy.nav[item.labelKey]}</span>
              </button>
            ) : (
              <a
                href={`#${item.id}`}
                key={item.id}
                data-context={copy.navContext[item.labelKey]}
                onClick={closeMenu}
                onPointerEnter={(event) => activateInteraction(item.id, event)}
                onPointerLeave={releaseInteraction}
                onFocus={() => activateInteraction(item.id)}
                onBlur={releaseInteraction}
              >
                <span className="nav-hover-blob" aria-hidden="true" />
                <span className="nav-link-label">{copy.nav[item.labelKey]}</span>
              </a>
            ))}
            <p className="mobile-status"><span aria-hidden="true" />{copy.status}</p>
          </nav>

          <div className="language-switch" role="group" aria-label={copy.languageLabel}>
            {languageOptions.map((option, index) => (
              <span className="language-option" key={option}>
                {index > 0 ? <span className="language-divider" aria-hidden="true">/</span> : null}
                <button
                  type="button"
                  aria-pressed={language === option}
                  onClick={() => onLanguageChange(option)}
                >
                  {option.toUpperCase()}
                </button>
              </span>
            ))}
          </div>

          <p className="project-status"><span aria-hidden="true" />{copy.status}</p>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? copy.close : copy.menu}
            <span aria-hidden="true">{isMenuOpen ? '−' : '+'}</span>
          </button>
        </div>
      </header>

      <main id="main-content">
        <section
          className="hero"
          id="top"
          aria-labelledby="hero-title"
          data-interaction={heroInteraction}
          ref={heroRef}
        >
          <div className="hero-cursor-glow" aria-hidden="true" ref={glowRef} />
          <div className="hero-cursor-trails" aria-hidden="true">
            {[0, 1].map((index) => (
              <span
                className={`hero-cursor-trail hero-cursor-trail--${index + 1}`}
                key={index}
                ref={(element) => { trailRefs.current[index] = element }}
              />
            ))}
          </div>

          <svg className="hero-filter-definitions" aria-hidden="true" focusable="false">
            <filter id="hero-blob-distortion" x="-18%" y="-18%" width="136%" height="136%">
              <feTurbulence
                ref={turbulenceRef}
                type="fractalNoise"
                baseFrequency="0.011 0.015"
                numOctaves="2"
                seed="8"
                result="noise"
              />
              <feDisplacementMap
                ref={displacementRef}
                in="SourceGraphic"
                in2="noise"
                scale="1.4"
                xChannelSelector="R"
                yChannelSelector="B"
              />
            </filter>
          </svg>

          <div className="hero-organic-fields" aria-hidden="true">
            <span className="hero-organic-field hero-organic-field--top" />
            <span className="hero-organic-field hero-organic-field--left" />
            <span className="hero-organic-field hero-organic-field--right" />
            <span className="hero-organic-field hero-organic-field--bottom" />
          </div>

          <svg
            className="hero-connection-map"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M 570 -32 C 566 86 594 118 700 138 C 790 155 857 215 875 310 C 887 371 895 410 914 459" />
            <path d="M 1448 54 C 1330 64 1252 92 1222 165 C 1208 199 1210 227 1225 252" />
            <circle cx="818" cy="190" r="13" />
            <circle cx="910" cy="405" r="8" />
          </svg>

          <div className="hero-inner shell">
            <div className="hero-heading">
              <p className="hero-intro">{copy.heroGreeting}</p>

              <h1 id="hero-title" className="hero-title" aria-label="Front-End Developer">
                <span
                  className="hero-line hero-line--front"
                  aria-hidden="true"
                  onPointerEnter={(event) => activateInteraction('front', event)}
                  onPointerLeave={releaseInteraction}
                >
                  <span className="hero-line-inner"><span className="hero-reactive-word">FRONT</span><span className="hero-dash">—</span></span>
                </span>
                <span
                  className="hero-line hero-line--end"
                  aria-hidden="true"
                  onPointerEnter={(event) => activateInteraction('end', event)}
                  onPointerLeave={releaseInteraction}
                >
                  <span className="hero-line-inner"><span className="hero-reactive-word">END</span></span>
                </span>
                <span className="hero-line hero-line--developer hero-line--desktop">
                  <span className="hero-line-inner">
                    <span
                      className="developer-word"
                      data-text="DEVELOPER"
                      tabIndex="0"
                      onPointerEnter={(event) => activateInteraction('developer', event)}
                      onPointerLeave={releaseInteraction}
                      onPointerMove={(event) => {
                        const bounds = event.currentTarget.getBoundingClientRect()
                        event.currentTarget.style.setProperty('--type-x', `${event.clientX - bounds.left}px`)
                        event.currentTarget.style.setProperty('--type-y', `${event.clientY - bounds.top}px`)
                      }}
                      onFocus={() => activateInteraction('developer')}
                      onBlur={releaseInteraction}
                    >DEVELOPER</span>
                  </span>
                </span>
                <span className="hero-developer-mobile">
                  <span className="developer-word developer-word--mobile" tabIndex="0">
                    <span className="hero-line" aria-hidden="true">
                      <span className="hero-line-inner">DEVEL</span>
                    </span>
                    <span className="hero-line" aria-hidden="true">
                      <span className="hero-line-inner">OPER</span>
                    </span>
                  </span>
                </span>
              </h1>
            </div>

            <a
              className="hero-splat"
              href="mailto:Julia.webcreative@gmail.com"
              aria-label={copy.heroContactLabel}
              ref={splatRef}
            >
              <div className="hero-splat-entry">
                <div className="hero-splat-interaction">
                  <div className="hero-splat-shape">
                    <img className="hero-splat-art" src="/images/hero/super-klaksa.png" alt="" aria-hidden="true" />
                    <span className="hero-splat-letter" aria-hidden="true">
                      <span className="hero-splat-letter-lines">
                        {copy.heroContactText.map((line, index) => (
                          <span key={line}>
                            {line}
                            {index === copy.heroContactText.length - 1 ? (
                              <svg
                                className="hero-splat-cta-arrow"
                                viewBox="0 0 10 10"
                                aria-hidden="true"
                                focusable="false"
                              >
                                <path d="M1.25 8.75 8.75 1.25M3.25 1.25h5.5v5.5" />
                              </svg>
                            ) : null}
                          </span>
                        ))}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </a>

            <div className="hero-play-prompt" aria-hidden="true">
              <span>{copy.playWithMe.join(' ')}</span>
              <svg viewBox="0 0 54 50" focusable="false">
                <path d="M 47 3 C 20 6 11 20 15 41" />
                <path d="M 8 34 L 15 42 L 22 33" />
              </svg>
            </div>

            <div className="hero-bottom">
              <div className="hero-description">
                {copy.description.map((line) => <p key={line}>{line}</p>)}
                <p className="hero-tech">HTML · CSS · JAVASCRIPT · REACT</p>
              </div>
              <a className="scroll-link" href="#work">
                {copy.scroll} <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>
        {children}
      </main>
      <WorkDrawer
        copy={copy.work}
        isOpen={isWorkDrawerOpen}
        onClose={closeWorkDrawer}
        onSelectProject={selectCarducci}
        drawerRef={workDrawerRef}
        closeRef={workCloseRef}
      />
    </>
  )
}
