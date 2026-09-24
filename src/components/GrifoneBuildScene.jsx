import './GrifoneBuildScene.css'

const codeFragments = {
  context: `const requested = new URLSearchParams(
  window.location.search
).get('pratica')

return DOCUMENT_SERVICE_OPTIONS.some(
  (option) => option.value === requested
) ? requested : ''`,
  files: `const MAX_FILES = 6
const MAX_FILE_SIZE = 8 * 1024 * 1024
const MAX_TOTAL_SIZE = 25 * 1024 * 1024
const ALLOWED_EXTENSIONS = new Set([
  'pdf', 'jpg', 'jpeg', 'png'
])

function isAllowedFile(file) {
  const extension = extensionOf(file)
  return ALLOWED_EXTENSIONS.has(extension)
    && (!file.type || ALLOWED_TYPES.has(
      file.type.toLowerCase()
    ))
}`,
  states: `const response = await fetch(ENDPOINT, {
  method: 'POST',
  body: payload,
  headers: { Accept: 'application/json' },
})

if (response.status === 429 ||
    result?.code === 'rate_limited') {
  setStatus('rate-limited')
  return
}

setStatus('success')`,
}

export function GrifoneBuildScene({ copy }) {
  return (
    <section className="grifone-build" aria-labelledby="grifone-build-title">
      <header className="grifone-build__header grifone-build__reveal">
        <p>{copy.marker}</p>
        <p>{copy.direction}</p>
      </header>

      <div className="grifone-build__intro grifone-build__reveal grifone-build__reveal--2">
        <h2 id="grifone-build-title">
          {copy.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>
      </div>

      <div className="grifone-build__decisions">
        {copy.decisions.map((decision, index) => (
          <article
            className={`grifone-build__decision grifone-build__reveal grifone-build__reveal--${index + 3}`}
            key={decision.label}
          >
            <header>
              <p className="grifone-build__decision-label">
                {String(index + 1).padStart(2, '0')} / {decision.label}
              </p>
              <h3>{decision.title}</h3>
            </header>

            <pre aria-label={decision.codeLabel}>
              <code>{codeFragments[decision.key]}</code>
            </pre>

            {decision.supporting && (
              <p className="grifone-build__supporting">{decision.supporting}</p>
            )}

            {decision.facts && (
              <ul className="grifone-build__facts" aria-label={decision.factsLabel}>
                {decision.facts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>

      <div className="grifone-build__closing grifone-build__reveal grifone-build__reveal--6">
        <p>{copy.closing[0]}</p>
        <p>{copy.closing[1]}</p>
      </div>
    </section>
  )
}
