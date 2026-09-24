import './GrifoneUnderHoodScene.css'

const mimeValidationCode = `$mime = $finfo === false
    ? false
    : finfo_file($finfo, $upload['tmp_name'][$key]);

$expectedMime = [
    'pdf' => 'application/pdf',
    'jpg' => 'image/jpeg',
    'jpeg' => 'image/jpeg',
    'png' => 'image/png',
][$extension] ?? null;

if (
    $mime === false
    || $expectedMime === null
    || $mime !== $expectedMime
) invalidRequest('Formato non supportato.');`

export function GrifoneUnderHoodScene({ copy }) {
  return (
    <section className="grifone-under-hood" aria-labelledby="grifone-under-hood-title">
      <header className="grifone-under-hood__header grifone-under-hood__reveal">
        <p>{copy.marker}</p>
        <p>{copy.direction}</p>
      </header>

      <div className="grifone-under-hood__intro">
        <h2
          className="grifone-under-hood__title grifone-under-hood__reveal grifone-under-hood__reveal--2"
          id="grifone-under-hood-title"
        >
          {copy.title.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h2>

        <div className="grifone-under-hood__principle grifone-under-hood__reveal grifone-under-hood__reveal--3">
          <span aria-hidden="true" />
          <p>{copy.principle[0]}</p>
          <p>{copy.principle[1]}</p>
        </div>
      </div>

      <ol
        className="grifone-under-hood__flow grifone-under-hood__reveal grifone-under-hood__reveal--4"
        aria-label={copy.flowLabel}
      >
        {copy.flow.map((step, index) => (
          <li key={step.title}>
            <p>
              <span>{String(index + 1).padStart(2, '0')}</span>
              {step.title}
            </p>
            <strong>{step.detail}</strong>
          </li>
        ))}
      </ol>

      <div className="grifone-under-hood__evidence">
        <figure className="grifone-under-hood__code grifone-under-hood__reveal grifone-under-hood__reveal--5">
          <figcaption>{copy.codeLabel}</figcaption>
          <pre aria-label={copy.codeDescription}>
            <code>{mimeValidationCode}</code>
          </pre>
        </figure>

        <div className="grifone-under-hood__temporary grifone-under-hood__reveal grifone-under-hood__reveal--5">
          <p className="grifone-under-hood__temporary-label">{copy.temporary.label}</p>
          <p className="grifone-under-hood__permissions">
            {copy.temporary.permissions.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </p>
          <p className="grifone-under-hood__cleanup">{copy.temporary.cleanup}</p>
        </div>
      </div>

      <div className="grifone-under-hood__closing grifone-under-hood__reveal grifone-under-hood__reveal--6">
        <p>{copy.closing[0]}</p>
        <p>{copy.closing[1]}</p>
      </div>
    </section>
  )
}
