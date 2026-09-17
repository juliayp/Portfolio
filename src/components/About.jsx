import { useCallback, useEffect, useRef, useState } from 'react'
import { translations } from '../data/translations'
import './About.css'

const CONCEPT_KEYS = ['design', 'code', 'people', 'business']
const VISIBLE_CONCEPT_KEYS = ['code', 'business']
const DRAG_THRESHOLD = 4
const RELATION_DISTANCE = 22
const REPEL_RADIUS = 25
const MAX_REPEL_DISTANCE = 12
const RESPONSE_DAMPING = 0.16
const ROTATION_DAMPING = 0.13
const RESPONSE_EPSILON = 0.02

const INITIAL_POSITIONS = Object.freeze({
  design: Object.freeze({ x: 17, y: 22 }),
  code: Object.freeze({ x: 17, y: 16 }),
  people: Object.freeze({ x: 28, y: 69 }),
  business: Object.freeze({ x: 92, y: 67 }),
})

const CONCEPT_ANCHORS = Object.freeze({
  design: Object.freeze({ x: 42, y: 34 }),
  code: Object.freeze({ x: 64, y: 32 }),
  people: Object.freeze({ x: 41, y: 68 }),
  business: Object.freeze({ x: 65, y: 65 }),
})

const CATEGORY_BIASES = Object.freeze({
  design: Object.freeze({ x: -2, y: -1.5, rotate: -0.8 }),
  code: Object.freeze({ x: 2, y: -1.5, rotate: 0.8 }),
  people: Object.freeze({ x: -2, y: 1.5, rotate: -0.8 }),
  business: Object.freeze({ x: 2, y: 1.5, rotate: 0.8 }),
})

const RELATIONS = Object.freeze([
  Object.freeze({ id: 'experience', pair: ['design', 'code'], messageKey: 'experience' }),
  Object.freeze({ id: 'useful', pair: ['people', 'business'], messageKey: 'useful' }),
])

function createInitialPositions() {
  return CONCEPT_KEYS.reduce((positions, key) => {
    positions[key] = { ...INITIAL_POSITIONS[key] }
    return positions
  }, {})
}

function createZeroRepulsion() {
  return CONCEPT_KEYS.reduce((repulsion, key) => {
    repulsion[key] = { x: 0, y: 0 }
    return repulsion
  }, {})
}

function getRelationForPositions(positions) {
  return (
    RELATIONS.find(({ pair }) => {
      if (!pair.every((key) => VISIBLE_CONCEPT_KEYS.includes(key))) return false

      const first = positions[pair[0]]
      const second = positions[pair[1]]

      if (!first || !second) return false

      return Math.hypot(first.x - second.x, first.y - second.y) <= RELATION_DISTANCE
    }) ?? null
  )
}

function getRelationForPair(firstKey, secondKey) {
  return (
    RELATIONS.find(
      ({ pair }) =>
        pair.every((key) => VISIBLE_CONCEPT_KEYS.includes(key)) &&
        pair.includes(firstKey) &&
        pair.includes(secondKey),
    ) ?? null
  )
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

export function About({ language }) {
  const copy = translations[language].about
  const playgroundRef = useRef(null)
  const sculptureRef = useRef(null)
  const positionsRef = useRef(createInitialPositions())
  const dragRef = useRef(null)
  const skipClickRef = useRef(null)
  const pointerRef = useRef(null)
  const motionFrameRef = useRef(null)
  const responseTargetRef = useRef({ x: 0, y: 0, rotate: 0 })
  const categoryBiasTargetRef = useRef({ x: 0, y: 0, rotate: 0 })
  const responseCurrentRef = useRef({ x: 0, y: 0, rotate: 0 })
  const awakeConceptRef = useRef(null)
  const prefersReducedMotionRef = useRef(false)
  const [positions, setPositions] = useState(() => createInitialPositions())
  const [repulsion, setRepulsion] = useState(() => createZeroRepulsion())
  const [selectedConcept, setSelectedConcept] = useState(null)
  const [activeRelation, setActiveRelation] = useState(null)
  const [objectResponse, setObjectResponse] = useState(() => ({ x: 0, y: 0, rotate: 0 }))
  const [hoveredConcept, setHoveredConcept] = useState(null)
  const [focusedConcept, setFocusedConcept] = useState(null)
  const [awakeConcept, setAwakeConcept] = useState(null)

  const resetInteraction = useCallback(() => {
    const initialPositions = createInitialPositions()
    positionsRef.current = initialPositions
    dragRef.current = null
    skipClickRef.current = null
    pointerRef.current = null
    responseTargetRef.current = { x: 0, y: 0, rotate: 0 }
    categoryBiasTargetRef.current = { x: 0, y: 0, rotate: 0 }
    responseCurrentRef.current = { x: 0, y: 0, rotate: 0 }
    awakeConceptRef.current = null
    if (motionFrameRef.current !== null) {
      window.cancelAnimationFrame(motionFrameRef.current)
      motionFrameRef.current = null
    }
    setPositions(initialPositions)
    setRepulsion(createZeroRepulsion())
    setSelectedConcept(null)
    setActiveRelation(null)
    setObjectResponse({ x: 0, y: 0, rotate: 0 })
    setHoveredConcept(null)
    setFocusedConcept(null)
    setAwakeConcept(null)
  }, [])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleMotionPreference = () => {
      prefersReducedMotionRef.current = mediaQuery.matches
      if (mediaQuery.matches) {
        responseTargetRef.current = { x: 0, y: 0, rotate: 0 }
        categoryBiasTargetRef.current = { x: 0, y: 0, rotate: 0 }
        responseCurrentRef.current = { x: 0, y: 0, rotate: 0 }
        setRepulsion(createZeroRepulsion())
        setObjectResponse({ x: 0, y: 0, rotate: 0 })
      }
    }

    handleMotionPreference()
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleMotionPreference)
    } else {
      mediaQuery.addListener(handleMotionPreference)
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleMotionPreference)
      } else {
        mediaQuery.removeListener(handleMotionPreference)
      }
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') resetInteraction()
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [resetInteraction])

  useEffect(() => {
    return () => {
      if (motionFrameRef.current !== null) {
        window.cancelAnimationFrame(motionFrameRef.current)
      }
    }
  }, [])

  const commitPositions = (nextPositions) => {
    positionsRef.current = nextPositions
    setPositions(nextPositions)
  }

  function updateMotion() {
    motionFrameRef.current = null

    const playground = playgroundRef.current
    const pointer = pointerRef.current
    const canRepel =
      playground &&
      pointer &&
      !prefersReducedMotionRef.current &&
      window.innerWidth > 620 &&
      window.matchMedia('(pointer: fine)').matches

    if (!canRepel) {
      setRepulsion(createZeroRepulsion())
    } else {
      const bounds = playground.getBoundingClientRect()
      const nextRepulsion = createZeroRepulsion()

      VISIBLE_CONCEPT_KEYS.forEach((key) => {
        const concept = positionsRef.current[key]
        const conceptX = bounds.left + (concept.x / 100) * bounds.width
        const conceptY = bounds.top + (concept.y / 100) * bounds.height
        const deltaX = conceptX - pointer.x
        const deltaY = conceptY - pointer.y
        const distance = Math.hypot(deltaX, deltaY)
        const repelRadius = (REPEL_RADIUS / 100) * bounds.width

        if (distance === 0 || distance >= repelRadius) return

        const influence = 1 - distance / repelRadius
        const distanceRatio = MAX_REPEL_DISTANCE * influence
        nextRepulsion[key] = {
          x: (deltaX / distance) * distanceRatio,
          y: (deltaY / distance) * distanceRatio,
        }
      })

      setRepulsion(nextRepulsion)
    }

    if (prefersReducedMotionRef.current) {
      responseCurrentRef.current = { x: 0, y: 0, rotate: 0 }
      setObjectResponse({ x: 0, y: 0, rotate: 0 })
      return
    }

    const current = responseCurrentRef.current
    const pointerTarget = responseTargetRef.current
    const categoryTarget = categoryBiasTargetRef.current
    const target = {
      x: pointerTarget.x + categoryTarget.x,
      y: pointerTarget.y + categoryTarget.y,
      rotate: pointerTarget.rotate + categoryTarget.rotate,
    }
    const nextResponse = {
      x: current.x + (target.x - current.x) * RESPONSE_DAMPING,
      y: current.y + (target.y - current.y) * RESPONSE_DAMPING,
      rotate: current.rotate + (target.rotate - current.rotate) * ROTATION_DAMPING,
    }

    responseCurrentRef.current = nextResponse
    setObjectResponse(nextResponse)

    const isSettling =
      Math.abs(nextResponse.x - target.x) > RESPONSE_EPSILON ||
      Math.abs(nextResponse.y - target.y) > RESPONSE_EPSILON ||
      Math.abs(nextResponse.rotate - target.rotate) > RESPONSE_EPSILON

    if (isSettling) {
      motionFrameRef.current = window.requestAnimationFrame(updateMotion)
    }
  }

  const scheduleMotionFrame = () => {
    if (motionFrameRef.current === null) {
      motionFrameRef.current = window.requestAnimationFrame(updateMotion)
    }
  }

  const setCategoryBiasTarget = (key) => {
    categoryBiasTargetRef.current = CATEGORY_BIASES[key] ?? { x: 0, y: 0, rotate: 0 }
    scheduleMotionFrame()
  }

  const handleConceptMouseEnter = (key) => {
    setHoveredConcept(key)
    setCategoryBiasTarget(key)
  }

  const handleConceptMouseLeave = () => {
    setHoveredConcept(null)
    setCategoryBiasTarget(focusedConcept)
  }

  const handleConceptFocus = (key) => {
    setFocusedConcept(key)
    setCategoryBiasTarget(key)
  }

  const handleConceptBlur = () => {
    setFocusedConcept(null)
    setCategoryBiasTarget(hoveredConcept)
  }

  const handlePlaygroundPointerMove = (event) => {
    if (dragRef.current) return

    pointerRef.current = { x: event.clientX, y: event.clientY }

    const playground = playgroundRef.current
    const bounds = playground?.getBoundingClientRect()
    const sculptureBounds = sculptureRef.current?.getBoundingClientRect()
    const canWake =
      bounds &&
      sculptureBounds &&
      window.innerWidth > 620 &&
      window.matchMedia('(pointer: fine)').matches

    let nextAwakeConcept = null

    if (canWake) {
      const sculptureRadiusX = sculptureBounds.width * 0.43
      const sculptureRadiusY = sculptureBounds.height * 0.43
      const sculptureCenterX = sculptureBounds.left + sculptureBounds.width / 2
      const sculptureCenterY = sculptureBounds.top + sculptureBounds.height / 2
      const normalizedX = (event.clientX - sculptureCenterX) / sculptureRadiusX
      const normalizedY = (event.clientY - sculptureCenterY) / sculptureRadiusY

      if (normalizedX ** 2 + normalizedY ** 2 <= 1) {
        nextAwakeConcept = VISIBLE_CONCEPT_KEYS.reduce((nearestKey, key) => {
          if (!nearestKey) return key

          const concept = positionsRef.current[key]
          const nearestConcept = positionsRef.current[nearestKey]
          const conceptDistance = Math.hypot(
            bounds.left + (concept.x / 100) * bounds.width - event.clientX,
            bounds.top + (concept.y / 100) * bounds.height - event.clientY,
          )
          const nearestDistance = Math.hypot(
            bounds.left + (nearestConcept.x / 100) * bounds.width - event.clientX,
            bounds.top + (nearestConcept.y / 100) * bounds.height - event.clientY,
          )

          return conceptDistance < nearestDistance ? key : nearestKey
        }, null)
      }
    }

    if (awakeConceptRef.current !== nextAwakeConcept) {
      awakeConceptRef.current = nextAwakeConcept
      setAwakeConcept(nextAwakeConcept)
    }

    const canRespond =
      bounds &&
      window.innerWidth > 620 &&
      !prefersReducedMotionRef.current &&
      window.matchMedia('(pointer: fine)').matches

    if (!canRespond) {
      responseTargetRef.current = { x: 0, y: 0, rotate: 0 }
      scheduleMotionFrame()
      return
    }

    const pointerRatioX = (event.clientX - bounds.left) / bounds.width - 0.5
    const pointerRatioY = (event.clientY - bounds.top) / bounds.height - 0.5
    responseTargetRef.current = {
      x: clamp(pointerRatioX * 18, -10, 10),
      y: clamp(pointerRatioY * 16, -9, 9),
      rotate: clamp(pointerRatioX * 6 - pointerRatioY * 3, -3, 3),
    }
    scheduleMotionFrame()
  }

  const handlePlaygroundPointerLeave = () => {
    pointerRef.current = null
    awakeConceptRef.current = null
    responseTargetRef.current = { x: 0, y: 0, rotate: 0 }
    setRepulsion(createZeroRepulsion())
    setAwakeConcept(null)
    scheduleMotionFrame()
  }

  const handleConceptPointerDown = (event, key) => {
    if (event.button !== undefined && event.button !== 0) return
    if (window.innerWidth <= 620) return

    const playground = playgroundRef.current
    const bounds = playground?.getBoundingClientRect()

    if (!bounds) return

    const currentPosition = positionsRef.current[key]
    const pointerX = ((event.clientX - bounds.left) / bounds.width) * 100
    const pointerY = ((event.clientY - bounds.top) / bounds.height) * 100

    dragRef.current = {
      key,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      offsetX: currentPosition.x - pointerX,
      offsetY: currentPosition.y - pointerY,
      moved: false,
    }
    setRepulsion(createZeroRepulsion())
    responseTargetRef.current = { x: 0, y: 0, rotate: 0 }
    scheduleMotionFrame()

    try {
      event.currentTarget.setPointerCapture(event.pointerId)
    } catch {
      // Pointer capture is an enhancement; click and keyboard activation still work.
    }
  }

  const handleConceptPointerMove = (event) => {
    const drag = dragRef.current

    if (!drag || drag.pointerId !== event.pointerId) return

    const distance = Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY)

    if (!drag.moved && distance < DRAG_THRESHOLD) return
    drag.moved = true

    const playground = playgroundRef.current
    const bounds = playground?.getBoundingClientRect()
    const buttonBounds = event.currentTarget.getBoundingClientRect()

    if (!bounds) return

    const halfWidth = (buttonBounds.width / bounds.width) * 50
    const halfHeight = (buttonBounds.height / bounds.height) * 50
    const pointerX = ((event.clientX - bounds.left) / bounds.width) * 100 + drag.offsetX
    const pointerY = ((event.clientY - bounds.top) / bounds.height) * 100 + drag.offsetY
    const nextPositions = {
      ...positionsRef.current,
      [drag.key]: {
        x: clamp(pointerX, halfWidth, 100 - halfWidth),
        y: clamp(pointerY, halfHeight, 100 - halfHeight),
      },
    }

    commitPositions(nextPositions)
    setSelectedConcept(null)
    setActiveRelation(getRelationForPositions(nextPositions))
  }

  const handleConceptPointerUp = (event) => {
    const drag = dragRef.current

    if (!drag || drag.pointerId !== event.pointerId) return

    dragRef.current = null

    try {
      event.currentTarget.releasePointerCapture(event.pointerId)
    } catch {
      // Pointer capture may already have been released by the browser.
    }

    if (drag.moved) {
      skipClickRef.current = drag.key
      window.setTimeout(() => {
        if (skipClickRef.current === drag.key) skipClickRef.current = null
      }, 0)
    }
  }

  const handleConceptClick = (key) => {
    if (skipClickRef.current === key) {
      skipClickRef.current = null
      return
    }

    if (activeRelation) {
      setActiveRelation(null)
      setSelectedConcept(key)
      return
    }

    if (!selectedConcept) {
      setSelectedConcept(key)
      return
    }

    if (selectedConcept === key) {
      setSelectedConcept(null)
      return
    }

    const relation = getRelationForPair(selectedConcept, key)

    if (relation) {
      setActiveRelation(relation)
      setSelectedConcept(null)
      return
    }

    setSelectedConcept(key)
  }

  const handleConceptKeyDown = (event, key) => {
    if (event.key !== 'Enter' && event.key !== ' ') return

    event.preventDefault()
    handleConceptClick(key)
  }

  const titleLineHighlight = (line, index) => {
    const highlight = copy.titleHighlights?.[index]

    if (!highlight) return line

    const highlightStart = line.lastIndexOf(highlight)

    if (highlightStart < 0) return line

    return (
      <>
        {line.slice(0, highlightStart)}
        <span className="about-title-highlight">{highlight}</span>
        {line.slice(highlightStart + highlight.length)}
      </>
    )
  }

  const attentionConcept = focusedConcept ?? hoveredConcept
  const sculptureIsActive = Boolean(attentionConcept || awakeConcept || activeRelation)

  const renderBio = () => (
    <div className="about-bio">
      <p className="about-bio-label">{copy.bioLabel}</p>
      <div className="about-body">
        {copy.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  )

  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about-inner shell">
        <div className="about-layout">
          <div className="about-heading">
            <p className="about-marker">{copy.marker}</p>
            <p className="about-mobile-intro">{copy.mobileIntro}</p>

            <h2 className="about-title" id="about-title">
              {copy.titleLines.map((line, index) => (
                <span className="about-title-line" key={line}>
                  {titleLineHighlight(line, index)}
                </span>
              ))}
            </h2>
          </div>

          <div className="about-bottom">
            {renderBio()}
            <p className="about-meta">{copy.meta}</p>
          </div>

          <div
            className="about-playground"
            ref={playgroundRef}
            role="group"
            aria-label={copy.playgroundLabel}
            onPointerMove={handlePlaygroundPointerMove}
            onPointerLeave={handlePlaygroundPointerLeave}
          >
            <div
              className={`about-artwork${activeRelation ? ' is-connected' : ''}${sculptureIsActive ? ' is-awake' : ''}`}
              aria-hidden="true"
            >
              <svg className="about-artwork-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <radialGradient id="about-artwork-aura" cx="50%" cy="50%" r="50%">
                    <stop offset="0" stopColor="#c7ff00" stopOpacity="0.12" />
                    <stop offset="0.52" stopColor="#c7ff00" stopOpacity="0.025" />
                    <stop offset="1" stopColor="#c7ff00" stopOpacity="0" />
                  </radialGradient>
                </defs>

                <ellipse className="about-artwork-aura" cx="53" cy="51" rx="43" ry="45" fill="url(#about-artwork-aura)" />
                <ellipse className="about-orbit" cx="53" cy="51" rx="38" ry="21" />
                <ellipse className="about-orbit about-orbit--secondary" cx="53" cy="51" rx="28" ry="40" />

                {VISIBLE_CONCEPT_KEYS.map((key) => {
                  const linkIsActive = awakeConcept === key || activeRelation?.pair.includes(key)

                  return (
                    <g className={`about-label-link${linkIsActive ? ' is-active' : ''}`} key={`link-${key}`}>
                      <line
                        x1={positions[key].x}
                        y1={positions[key].y}
                        x2={CONCEPT_ANCHORS[key].x}
                        y2={CONCEPT_ANCHORS[key].y}
                      />
                      <circle cx={CONCEPT_ANCHORS[key].x} cy={CONCEPT_ANCHORS[key].y} r="0.85" />
                    </g>
                  )
                })}

              </svg>

              <div
                className="about-sculpture-group"
                ref={sculptureRef}
                style={{
                  transform: `translate(calc(-50% + ${objectResponse.x}px), calc(-50% + ${objectResponse.y}px)) rotate(${objectResponse.rotate}deg)`,
                }}
              >
                <img
                  className="about-sculpture-image"
                  src="/images/about/liquid-black-sculpture.png"
                  alt=""
                  aria-hidden="true"
                />
              </div>
            </div>

            <svg className="about-playground-connections" viewBox="0 0 100 100" aria-hidden="true">
              {activeRelation ? (
                <line
                  className="about-relation-line"
                  x1={positions[activeRelation.pair[0]].x}
                  y1={positions[activeRelation.pair[0]].y}
                  x2={positions[activeRelation.pair[1]].x}
                  y2={positions[activeRelation.pair[1]].y}
                />
              ) : null}
            </svg>

            {VISIBLE_CONCEPT_KEYS.map((key) => {
              const conceptPosition = positions[key]
              const conceptRepulsion = repulsion[key]
              const isRelated = activeRelation?.pair.includes(key)
              const isSelected = selectedConcept === key

              return (
                <button
                  className={`about-concept${isSelected ? ' is-selected' : ''}${isRelated ? ' is-related' : ''}${attentionConcept === key ? ' is-attention' : ''}${awakeConcept === key ? ' is-awake' : ''}`}
                  key={key}
                  type="button"
                  aria-pressed={Boolean(isSelected || isRelated)}
                  aria-label={`${copy.selectConcept}: ${copy.concepts[key]}`}
                  style={{
                    left: `${conceptPosition.x}%`,
                    top: `${conceptPosition.y}%`,
                    '--repel-x': `${conceptRepulsion.x}px`,
                    '--repel-y': `${conceptRepulsion.y}px`,
                  }}
                  onClick={() => handleConceptClick(key)}
                  onKeyDown={(event) => handleConceptKeyDown(event, key)}
                  onPointerDown={(event) => handleConceptPointerDown(event, key)}
                  onPointerMove={handleConceptPointerMove}
                  onPointerUp={handleConceptPointerUp}
                  onPointerCancel={handleConceptPointerUp}
                  onMouseEnter={() => handleConceptMouseEnter(key)}
                  onMouseLeave={handleConceptMouseLeave}
                  onFocus={() => handleConceptFocus(key)}
                  onBlur={handleConceptBlur}
                >
                  <span className="about-concept-name">{copy.concepts[key]}</span>
                  {copy.conceptRoles[key].map((role) => (
                    <span className="about-concept-role" key={role}>
                      {role}
                    </span>
                  ))}
                </button>
              )
            })}

            <div className="about-playground-footer">
              <p className="about-relation-message" aria-live="polite">
                {activeRelation ? copy.relations[activeRelation.messageKey] : ''}
              </p>
              <div className="about-playground-controls">
                <p className="about-playground-hint">{copy.hint}</p>
                <button className="about-reset" type="button" onClick={resetInteraction}>
                  {copy.reset}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
