import { useEffect, useId, useState } from 'react'
import { translations } from '../data/translations'
import './Hero.css'

const navItems = [
  { id: 'work', labelKey: 'work' },
  { id: 'about', labelKey: 'about' },
  { id: 'contact', labelKey: 'contact' },
]

const languageOptions = ['en', 'it']

export function Hero({ language, onLanguageChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuId = useId()
  const copy = translations[language]

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

  const closeMenu = () => setIsMenuOpen(false)

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
            {navItems.map((item) => (
              <a href={`#${item.id}`} key={item.id} onClick={closeMenu}>
                {copy.nav[item.labelKey]}
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
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-inner shell">
            <h1 id="hero-title" className="hero-title" aria-label="Front-End Developer">
              <span className="hero-line hero-line--front" aria-hidden="true">
                <span className="hero-line-inner">FRONT<span className="hero-dash">—</span></span>
              </span>
              <span className="hero-line hero-line--end" aria-hidden="true">
                <span className="hero-line-inner">END</span>
              </span>
              <span className="hero-line hero-line--developer hero-line--desktop">
                <span className="hero-line-inner">
                  <span className="developer-word" tabIndex="0">DEVELOPER</span>
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

            <div className="hero-bottom">
              <div className="hero-description">
                <p>{copy.description}</p>
                <p className="hero-tech">HTML · CSS · JAVASCRIPT · REACT</p>
              </div>
              <a className="scroll-link" href="#work">
                {copy.scroll} <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
