import './GrifoneStructureScene.css'

export function GrifoneStructureScene({ copy }) {
  return (
    <section className="grifone-structure" aria-labelledby="grifone-structure-title">
      <header className="grifone-structure__header grifone-structure__reveal grifone-structure__reveal--1">
        <p>{copy.marker}</p>
        <p>{copy.direction}</p>
      </header>

      <h2
        className="grifone-structure__title grifone-structure__reveal grifone-structure__reveal--2"
        id="grifone-structure-title"
      >
        <span>{copy.title[0]}</span>
        <span className="grifone-structure__title-outline">{copy.title[1]}</span>
      </h2>

      <ol className="grifone-structure__journey grifone-structure__reveal grifone-structure__reveal--3">
        {copy.steps.map((step, index) => (
          <li key={step.title}>
            <p className="grifone-structure__step-heading">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <span>— {step.title}</span>
            </p>
            {step.detail ? (
              <p className="grifone-structure__detail">
                <span>{step.detail.label}</span>
                <span>{step.detail.value}</span>
              </p>
            ) : null}
          </li>
        ))}
      </ol>

      <div className="grifone-structure__bottom grifone-structure__reveal grifone-structure__reveal--4">
        <p>
          <span>{copy.statement.lead}</span>
          <strong>{copy.statement.emphasis}</strong>
        </p>
      </div>
    </section>
  )
}
