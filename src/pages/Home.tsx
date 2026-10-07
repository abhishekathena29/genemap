import { useEffect, useState } from 'react'
import { Icon, IconTile, type IconName } from '../components/icons'
import { SearchBox } from '../components/Layout'
import { EvidenceLegend, Tabs } from '../components/ui'
import { NetworkGraph, type GEdge, type GNode } from '../components/viz'
import { ALL_THERAPIES, ALL_TRIALS, ALL_VARIANTS, DISEASE_BY_ID, DISEASES, EVIDENCE_ITEMS, GENES, SOURCES } from '../data'
import { STAGES } from '../data/types'
import { Link } from '../lib/Link'
import { FutureDirections, HowToUse } from './About'
import { DiseaseCard } from './Diseases'

// Primary cell types across the atlas, most common first.
const PRIMARY_CELLS: [string, number][] = Object.entries(
  DISEASES.flatMap((d) => [...new Set(d.cells.filter((c) => c.role === 'primary').map((c) => c.cell))]).reduce<Record<string, number>>(
    (acc, c) => ({ ...acc, [c]: (acc[c] ?? 0) + 1 }),
    {},
  ),
).sort((a, b) => b[1] - a[1])

const ENTRIES: [string, IconName, 'blue' | 'violet' | 'orange' | 'green' | 'pink' | 'teal', string, string][] = [
  ['/diseases', 'disease', 'violet', 'Explore diseases', `${DISEASES.length} standardised disease modules with 16 identical sections each.`],
  ['/genes', 'dna', 'blue', 'Explore genes', 'Gene → protein → function hubs linking every connected record.'],
  ['/variants', 'variant', 'pink', 'Explore variants', 'Filter variants by gene, type, ClinVar class and evidence.'],
  ['/therapeutics', 'therapy', 'green', 'Explore therapeutics', 'Therapeutic pipeline and time-stamped clinical-trial records.'],
  ['/compare', 'compare', 'teal', 'Compare diseases', 'Side-by-side genes, inheritance, cells, biomarkers and therapies.'],
  ['/evidence', 'evidence', 'orange', 'Explore evidence', 'Every graded relationship, filterable by evidence strength.'],
]

export function Home({ section }: { section?: string | null }) {
  useEffect(() => {
    if (section) setTimeout(() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
  }, [section])

  // Atlas overview graph: disease → gene → primary cell type → therapeutic modality,
  // filtered by primary cell type so the graph stays legible as the atlas grows.
  const [cellF, setCellF] = useState<string>(PRIMARY_CELLS[0][0])
  const nodes = new Map<string, GNode>()
  const edges: GEdge[] = []
  const addN = (n: GNode) => !nodes.has(n.id) && nodes.set(n.id, n)
  for (const d of DISEASES.filter((d) => d.cells.some((c) => c.role === 'primary' && c.cell === cellF))) {
    addN({ id: `d:${d.id}`, label: d.short, col: 0, kind: 'disease', color: d.color })
    const g = d.genes[0] + (d.genes.length > 1 ? ` +${d.genes.length - 1}` : '')
    addN({ id: `g:${g}`, label: g, col: 1, kind: 'gene' })
    edges.push({ from: `d:${d.id}`, to: `g:${g}`, label: `${d.short} — ${g}` })
    for (const c of d.cells.filter((c) => c.role === 'primary')) {
      addN({ id: `c:${c.cell}`, label: c.cell, col: 2, kind: 'cell' })
      edges.push({ from: `g:${g}`, to: `c:${c.cell}`, ev: c.ev, label: `${d.short}: ${c.cell}` })
    }
    for (const m of new Set(d.therapies.map((t) => t.modality))) {
      addN({ id: `m:${m}`, label: m, col: 3, kind: 'therapy' })
      edges.push({ from: `d:${d.id}`, to: `m:${m}`, label: `${d.short}: ${m}` })
    }
  }

  const featured = DISEASE_BY_ID.canavan
  const spotlight = ['xald', 'mld', 'krabbe'].map((id) => DISEASE_BY_ID[id]).filter(Boolean)
  const lastUpdated = DISEASES.map((d) => d.lastUpdated).sort().at(-1)!
  const fmtDate = (iso: string) => new Date(`${iso}T00:00:00`).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })

  return (
    <div className="home">
      <section className="dash" aria-label="Atlas overview">
        <div className="dash-col">
          <article className="card dash-card">
            <h2 className="dash-h">Featured module</h2>
            <Link to={`/disease/${featured.id}`} className="feat">
              <span className="feat-av" style={{ ['--dc' as string]: featured.color }}>
                <Icon name="dna" size={22} />
              </span>
              <span className="feat-body">
                <strong>{featured.name}</strong>
                <span className="pill pill-violet">{featured.inheritance}</span>
              </span>
              <Icon name="arrow" size={16} />
            </Link>
            <div className="feat-facts">
              <h3>Key features</h3>
              <ul>
                {featured.identity.slice(0, 2).map((c) => (
                  <li key={c.text}>{c.text}</li>
                ))}
              </ul>
            </div>
          </article>

          <article className="card dash-card">
            <h2 className="dash-h">Start exploring</h2>
            <p className="dash-sub">Next: follow a disease from gene to therapy</p>
            <div className="spot-list">
              {spotlight.map((d) => (
                <div key={d.id} className="spot">
                  <div className="spot-top">
                    <span className="spot-av" style={{ ['--dc' as string]: d.color }}>{d.genes[0]}</span>
                    <span className="spot-name">
                      <strong>{d.short}</strong>
                      <span>{d.classification.split(';')[0]}</span>
                    </span>
                    <span className="spot-count" title={`${d.therapies.length} therapeutic approaches`}>
                      <Icon name="therapy" size={13} /> {d.therapies.length}
                    </span>
                  </div>
                  <div className="spot-actions">
                    <Link to={`/disease/${d.id}`} className="btn-primary">
                      <Icon name="layers" size={15} /> Open module
                    </Link>
                    <Link to={`/therapeutics?d=${d.id}`} className="btn-round" aria-label={`${d.short} therapeutics`} title="Therapeutics">
                      <Icon name="therapy" size={15} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/diseases" className="dash-more">
              See all {DISEASES.length} diseases <Icon name="arrow" size={14} />
            </Link>
          </article>
        </div>

        <div className="stage">
          <h1 className="stage-title">GeneMap</h1>
          <p className="stage-sub">An integrated research atlas of genetic leukodystrophies, with every claim graded and sourced.</p>
          <SearchBox big />
          <div className="hero-try">
            {['ASPA', 'psychosine', 'integrated stress response', 'gene therapy', 'Astrocytes'].map((t) => (
              <Link key={t} to={`/search?q=${encodeURIComponent(t)}`}>
                {t}
              </Link>
            ))}
          </div>
          <div className="stage-visual" aria-hidden>
            <HeroHelix />
            <div className="stage-platform">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        <div className="dash-col">
          <Link to="/evidence" className="feature-card">
            <span className="feature-kicker">Evidence grading</span>
            <span className="feature-date">Last updated {fmtDate(lastUpdated)}</span>
            <strong>{EVIDENCE_ITEMS.length.toLocaleString('en-GB')} graded statements</strong>
            <span>Every claim carries a strength label and its sources.</span>
          </Link>

          <div className="mini-row">
            <Link to="/therapeutics" className="card mini">
              <span className="mini-h">
                <Icon name="chart" size={15} /> Milestones
              </span>
              <strong className="mini-n">{ALL_MILESTONES.length}</strong>
              <span className="mini-sub">{MILESTONE_SPAN}</span>
              <MilestoneLine />
            </Link>
            <Link to="/therapeutics" className="card mini">
              <span className="mini-h">
                <Icon name="therapy" size={15} /> Therapies
              </span>
              <strong className="mini-n">{ALL_THERAPIES.length}</strong>
              <span className="mini-sub">By development stage</span>
              <StageBars />
            </Link>
          </div>

          <article className="card dash-card">
            <div className="dash-row">
              <h2 className="dash-h">
                <Icon name="trial" size={16} /> Clinical trials
              </h2>
              <Link to="/therapeutics?tab=trials" className="dash-link">
                Full list
              </Link>
            </div>
            <div className="trial-big">
              <strong>{ALL_TRIALS.length}</strong>
              <span>registered trials across {new Set(ALL_TRIALS.map((t) => t.diseaseId)).size} diseases</span>
            </div>
          </article>

          <article className="card dash-card">
            <div className="dash-row">
              <h2 className="dash-h">
                <Icon name="sources" size={16} /> Atlas coverage
              </h2>
              <Link to="/about" className="dash-link">
                About
              </Link>
            </div>
            <span className="dash-sub">Last updated {fmtDate(lastUpdated)}</span>
            <dl className="cover">
              {COVERAGE.map(([l, n, to]) => (
                <Link key={l} to={to}>
                  <dt>{l}</dt>
                  <dd>{n.toLocaleString('en-GB')}</dd>
                </Link>
              ))}
            </dl>
          </article>
        </div>
      </section>

      <HowToUse />

      <section className="block">
        <div className="block-head">
          <h2>Explore diseases</h2>
          <Link to="/diseases" className="more">
            All {DISEASES.length} diseases →
          </Link>
        </div>
        <div className="dgrid">
          {DISEASES.slice(0, 6).map((d) => (
            <DiseaseCard key={d.id} d={d} />
          ))}
        </div>
      </section>

      <section className="block">
        <div className="block-head">
          <h2>Atlas overview</h2>
          <p className="muted">Disease → causal gene → primary affected cell type → therapeutic modality. Hover a node to trace its connections.</p>
        </div>
        <Tabs value={cellF} onChange={setCellF} tabs={PRIMARY_CELLS.map(([id, count]) => ({ id, label: id, count }))} />
        <div className="card pad">
          <NetworkGraph nodes={[...nodes.values()]} edges={edges} columns={['Disease', 'Gene', 'Primary cell type', 'Therapeutic modality']} />
        </div>
      </section>

      <section className="block">
        <div className="block-head">
          <h2>Entry points</h2>
          <p className="muted">Enter through a disease, gene, variant, biomarker, pathway or therapy.</p>
        </div>
        <div className="entries">
          {ENTRIES.map(([to, icon, tone, t, d]) => (
            <Link key={to} to={to} className="entry">
              <IconTile name={icon} tone={tone} size={44} />
              <div>
                <strong>{t}</strong>
                <span>{d}</span>
              </div>
              <span className="entry-arrow">
                <Icon name="arrow" size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="block">
        <div className="evidence-band">
          <IconTile name="evidence" tone="green" size={48} />
          <div>
            <h2>Evidence is visible throughout</h2>
            <p className="muted">GeneMap never presents claims as equally certain. Click any label in the atlas to see why it was assigned and which sources support it.</p>
            <EvidenceLegend />
          </div>
        </div>
      </section>

      <FutureDirections compact />
    </div>
  )
}

const COVERAGE: [string, number, string][] = [
  ['Genes', GENES.length, '/genes'],
  ['Variants', ALL_VARIANTS.length, '/variants'],
  ['Sources', Object.keys(SOURCES).length, '/sources'],
]

// ── Mini charts (single series; hover a mark for its value) ─────────────
const ALL_MILESTONES = DISEASES.flatMap((d) => d.milestones)
const YEARS = [...new Set(ALL_MILESTONES.map((m) => m.year))].sort((a, b) => a - b)
const MILESTONE_SPAN = YEARS.length ? `Cumulative, ${YEARS[0]}-${YEARS.at(-1)}` : 'No milestones yet'

function MilestoneLine() {
  const W = 150, H = 54, P = 5
  const pts = YEARS.map((y) => ({ y, n: ALL_MILESTONES.filter((m) => m.year <= y).length }))
  if (pts.length < 2) return null
  const x0 = YEARS[0], x1 = YEARS.at(-1)!, max = pts.at(-1)!.n
  const X = (y: number) => P + ((y - x0) / (x1 - x0)) * (W - 2 * P)
  const Y = (n: number) => H - P - (n / max) * (H - 2 * P)
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${X(p.y).toFixed(1)},${Y(p.n).toFixed(1)}`).join('')
  return (
    <svg className="mini-chart" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Cumulative research milestones: ${max} by ${x1}`}>
      <path d={`${line}L${X(x1)},${H - P}L${X(x0)},${H - P}Z`} className="mini-area" />
      <path d={line} className="mini-line" />
      {pts.map((p) => (
        <circle key={p.y} cx={X(p.y)} cy={Y(p.n)} r="6" className="mini-hit">
          <title>{`${p.y}: ${p.n} milestones to date`}</title>
        </circle>
      ))}
    </svg>
  )
}

function StageBars() {
  const W = 150, H = 54, P = 2, gap = 2
  const counts = STAGES.map((s) => ALL_THERAPIES.filter((t) => t.stage === s).length)
  const max = Math.max(1, ...counts)
  const bw = (W - 2 * P - gap * (counts.length - 1)) / counts.length
  return (
    <svg className="mini-chart" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Therapeutic approaches by development stage">
      {counts.map((c, i) => {
        const h = Math.max(2, (c / max) * (H - 2 * P))
        return (
          <rect key={STAGES[i]} x={P + i * (bw + gap)} y={H - P - h} width={bw} height={h} rx="4" className="mini-bar">
            <title>{`${STAGES[i]}: ${c}`}</title>
          </rect>
        )
      })}
    </svg>
  )
}

/** Decorative double helix for the hero stage. */
function HeroHelix() {
  const pts = Array.from({ length: 13 }, (_, i) => i)
  return (
    <svg className="hero-helix" viewBox="0 0 160 320" aria-hidden>
      {pts.map((i) => {
        const y = 12 + i * 24
        const x = Math.sin(i * 0.62) * 50
        return (
          <g key={i} opacity={0.35 + 0.65 * Math.abs(Math.cos(i * 0.62))}>
            <line x1={80 - x} y1={y} x2={80 + x} y2={y} stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity=".55" />
            <circle cx={80 - x} cy={y} r="5.5" fill="currentColor" />
            <circle cx={80 + x} cy={y} r="5.5" fill="#ffb86b" />
          </g>
        )
      })}
    </svg>
  )
}
