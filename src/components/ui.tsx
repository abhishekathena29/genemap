import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { Icon, IconTile, type IconName } from './icons'
import { EVIDENCE, EVIDENCE_BY_LEVEL } from '../data/evidence'
import { DISEASE_BY_ID } from '../data'
import { SOURCES, SOURCE_KIND_LABEL } from '../data/sources'
import type { Claim, EvidenceLevel } from '../data/types'
import { useInspector } from '../lib/inspector-context'
import { Link } from '../lib/Link'

export function EvidenceBadge({
  level,
  why,
  src = [],
  title,
  compact,
}: {
  level: EvidenceLevel
  why?: string
  src?: string[]
  title?: string
  compact?: boolean
}) {
  const open = useInspector()
  const def = EVIDENCE_BY_LEVEL[level]
  return (
    <button
      type="button"
      className={`ev ev-${level}${compact ? ' ev-compact' : ''}`}
      title={`${def.label} — click for rationale and sources`}
      onClick={(e) => {
        e.stopPropagation()
        open({ kind: 'evidence', level, why, src, title: title ?? def.label })
      }}
    >
      <span className="ev-dot" aria-hidden />
      {compact ? def.short : def.label}
    </button>
  )
}

export function Cites({ src, title = 'Sources' }: { src?: string[]; title?: string }) {
  const open = useInspector()
  if (!src?.length) return null
  const tip = src.map((id) => SOURCES[id]?.title ?? id).join('\n')
  return (
    <button
      type="button"
      className="cite"
      title={tip}
      onClick={(e) => {
        e.stopPropagation()
        open({ kind: 'sources', title, src })
      }}
    >
      <svg viewBox="0 0 16 16" width="11" height="11" aria-hidden>
        <path d="M3 2h7l3 3v9H3z M10 2v3h3" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
      {src.length}
    </button>
  )
}

export function SourceItem({ id }: { id: string }) {
  const s = SOURCES[id]
  if (!s) return <li className="src-item src-missing">Unresolved source: {id}</li>
  return (
    <li className="src-item">
      <span className={`src-kind src-kind-${s.kind}`}>{SOURCE_KIND_LABEL[s.kind]}</span>
      <a href={s.url} target="_blank" rel="noreferrer">
        {s.title}
      </a>
      <span className="src-meta">
        {[s.authors, s.venue, s.year].filter(Boolean).join(' · ')}
      </span>
    </li>
  )
}

export function ClaimRow({ c }: { c: Claim }) {
  return (
    <div className="claim">
      {c.label && <div className="claim-label">{c.label}</div>}
      <Clamp className="claim-text" lines={4}>
        {c.text}
      </Clamp>
      <div className="claim-meta">
        {c.ev && <EvidenceBadge level={c.ev} why={c.why} src={c.src} title={c.label ?? c.text} />}
        <Cites src={c.src} title={c.label ?? 'Sources'} />
      </div>
    </div>
  )
}

/** Clamps long text to a few lines with a "more" toggle — the full text stays on the page. */
export function Clamp({ children, lines = 3, className = '' }: { children: ReactNode; lines?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [overflows, setOverflows] = useState(false)
  useLayoutEffect(() => {
    const el = ref.current
    if (!el || open) return
    // scrollHeight is unreliable under line-clamp in Chrome, so compare against the unclamped height.
    const check = () => {
      const clamped = el.clientHeight
      el.classList.remove('clamp')
      const full = el.clientHeight
      el.classList.add('clamp')
      setOverflows(full > clamped + 1)
    }
    check()
    // Web fonts can reflow text without resizing the clamped box, so re-check once they load.
    document.fonts?.ready.then(check)
    document.fonts?.addEventListener('loadingdone', check)
    const ro = new ResizeObserver(check)
    ro.observe(el)
    return () => {
      ro.disconnect()
      document.fonts?.removeEventListener('loadingdone', check)
    }
  }, [open])
  return (
    <div className={`clamp-wrap ${className}`}>
      <div ref={ref} className={open ? 'clamp-open' : 'clamp'} style={{ ['--lines' as string]: lines }}>
        {children}
      </div>
      {(overflows || open) && (
        <button
          type="button"
          className="clamp-btn"
          onClick={(e) => {
            e.stopPropagation()
            setOpen(!open)
          }}
        >
          {open ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  )
}

/** Research/education disclaimer. `variant="bar"` is the slim site-wide strip. */
export function Disclaimer({ variant = 'card' }: { variant?: 'card' | 'bar' | 'inline' }) {
  if (variant === 'bar')
    return (
      <div className="disclaimer-bar" role="note">
        <Icon name="shield" size={15} />
        <span>
          <b>For research &amp; education only</b> — not a substitute for medical advice. <Link to="/about?s=disclaimer">Read the disclaimer</Link>
        </span>
      </div>
    )
  return (
    <div className={`disclaimer disclaimer-${variant}`} role="note" id={variant === 'card' ? 'disclaimer' : undefined}>
      <IconTile name="shield" tone="orange" size={variant === 'inline' ? 32 : 44} />
      <div>
        <b>GeneMap is a research and educational atlas — not a substitute for medical advice.</b>
        <p>
          Nothing here should be used to diagnose, treat or make decisions about any individual's health. Always consult a qualified clinician or genetic counsellor
          with medical questions. Trial statuses are time-stamped snapshots; confirm them on ClinicalTrials.gov.
        </p>
      </div>
    </div>
  )
}

/** "Last updated" stamp for curated modules. */
export function Updated({ date, label = 'Last updated' }: { date: string; label?: string }) {
  const fmt = new Date(`${date}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  return (
    <span className="updated" title={`Content last revised ${date}`}>
      <Icon name="calendar" size={14} />
      {label} <time dateTime={date}>{fmt}</time>
    </span>
  )
}

export function EvidenceLegend() {
  return (
    <div className="legend" aria-label="Evidence legend">
      {EVIDENCE.map((e) => (
        <span key={e.level} className={`ev ev-${e.level} ev-static`} title={e.definition}>
          <span className="ev-dot" aria-hidden />
          {e.label}
        </span>
      ))}
    </div>
  )
}

export function DiseaseChip({ id, link = true }: { id: string; link?: boolean }) {
  const d = DISEASE_BY_ID[id]
  if (!d) return null
  const inner = (
    <>
      <span className="dchip-dot" style={{ background: d.color }} />
      {d.short}
    </>
  )
  return link ? (
    <Link to={`/disease/${d.id}`} className="dchip">
      {inner}
    </Link>
  ) : (
    <span className="dchip">{inner}</span>
  )
}

export function Tabs<T extends string>({
  tabs,
  value,
  onChange,
}: {
  tabs: { id: T; label: string; count?: number }[]
  value: T
  onChange: (t: T) => void
}) {
  return (
    <div className="tabs" role="tablist">
      {tabs.map((t) => (
        <button
          key={t.id}
          role="tab"
          aria-selected={value === t.id}
          className={value === t.id ? 'tab on' : 'tab'}
          onClick={() => onChange(t.id)}
        >
          {t.label}
          {t.count !== undefined && <span className="tab-count">{t.count}</span>}
        </button>
      ))}
    </div>
  )
}

export function Expandable({ summary, children, defaultOpen = false }: { summary: ReactNode; children: ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`expand${open ? ' open' : ''}`}>
      <button type="button" className="expand-head" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span className="chev" aria-hidden>
          ▸
        </span>
        {summary}
      </button>
      {open && <div className="expand-body">{children}</div>}
    </div>
  )
}

export function PageHead({ kicker, title, icon, children }: { kicker: string; title: string; icon?: IconName; children?: ReactNode }) {
  return (
    <header className="page-head">
      {icon && <IconTile name={icon} tone="violet" size={52} />}
      <div>
        <div className="kicker">{kicker}</div>
        <h1>{title}</h1>
        {children && <div className="page-lede">{children}</div>}
      </div>
    </header>
  )
}

export function Empty({ children }: { children: ReactNode }) {
  return <div className="empty">{children}</div>
}
