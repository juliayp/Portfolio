import './WorkDrawer.css'

export function WorkDrawer({ copy, isOpen, onClose, onSelectProject, drawerRef, closeRef }) {
  const drawerCopy = copy.drawer

  return (
    <>
      <div
        className={`work-drawer-backdrop${isOpen ? ' is-open' : ''}`}
        aria-hidden="true"
        onClick={onClose}
      />

      <aside
        className={`work-drawer${isOpen ? ' is-open' : ''}`}
        id="work-drawer"
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="work-drawer-title"
        aria-hidden={!isOpen}
        tabIndex={-1}
      >
        <div className="work-drawer-topline">
          <p className="work-drawer-marker">{drawerCopy.marker}</p>
          <button
            className="work-drawer-close"
            type="button"
            ref={closeRef}
            aria-label={drawerCopy.close}
            onClick={onClose}
          >
            <span>{drawerCopy.close}</span>
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <h2 id="work-drawer-title">{drawerCopy.heading}</h2>

        <button
          className="work-drawer-project"
          type="button"
          onClick={onSelectProject}
        >
          <span className="work-drawer-project-meta">
            <span className="work-drawer-project-index">{copy.projectIndex} /</span>
            <span>{drawerCopy.projectType}</span>
            <span>{drawerCopy.projectMeta}</span>
          </span>
          <span className="work-drawer-project-title">{copy.title}</span>
          <span className="work-drawer-preview">
            <img src="/images/carducci-preview.jpeg" alt={copy.alt} />
            <span className="work-drawer-preview-action" aria-hidden="true">
              <span>{drawerCopy.viewCase}</span>
              <span>↗</span>
            </span>
          </span>
          <span className="work-drawer-project-cta">
            <span>{drawerCopy.viewCase}</span>
            <span aria-hidden="true">↗</span>
          </span>
        </button>
      </aside>
    </>
  )
}
