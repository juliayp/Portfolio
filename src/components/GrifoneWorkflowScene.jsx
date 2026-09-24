import './GrifoneWorkflowScene.css'

const liveFormUrl =
  'https://www.praticheautogrifone.it/invia-documenti?pratica=passaggio-proprieta'

export function GrifoneWorkflowScene({ copy }) {
  return (
    <section className="grifone-workflow" aria-labelledby="grifone-workflow-title">
      <header className="grifone-workflow__header grifone-workflow__reveal">
        <p>{copy.marker}</p>
        <p>{copy.direction}</p>
      </header>

      <div className="grifone-workflow__main">
        <div className="grifone-workflow__copy grifone-workflow__reveal grifone-workflow__reveal--2">
          <h2 id="grifone-workflow-title">
            {copy.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h2>

          <ol className="grifone-workflow__steps">
            {copy.steps.map((step, index) => (
              <li key={step}>
                <span className="grifone-workflow__step-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="grifone-workflow__step-title">{step}</span>
                {index < copy.steps.length - 1 && (
                  <span className="grifone-workflow__step-arrow" aria-hidden="true">
                    ↓
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="grifone-workflow__visual grifone-workflow__reveal grifone-workflow__reveal--3">
          <figure>
            <div className="grifone-workflow__interface-crop">
              <iframe
                src={liveFormUrl}
                title={copy.interfaceTitle}
                loading="lazy"
                tabIndex="-1"
              />
              <span className="grifone-workflow__interface-shield" aria-hidden="true" />
            </div>
            <figcaption>{copy.interfaceCaption}</figcaption>
          </figure>

          <dl className="grifone-workflow__technical">
            {copy.technical.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="grifone-workflow__closing grifone-workflow__reveal grifone-workflow__reveal--4">
        <p>{copy.closing[0]}</p>
        <p>{copy.closing[1]}</p>
      </div>
    </section>
  )
}
