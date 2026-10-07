import { useEffect } from 'react'
import { Icon, IconTile, type IconName } from '../components/icons'
import { SearchBox } from '../components/Layout'
import { EvidenceLegend } from '../components/ui'
import { NetworkGraph, type GEdge, type GNode } from '../components/viz'
import { ALL_THERAPIES, ALL_TRIALS, ALL_VARIANTS, DISEASES, EVIDENCE_ITEMS, GENES, SOURCES } from '../data'
import { Link } from '../lib/Link'
import { FutureDirections, HowToUse } from './About'
import { DiseaseCard } from './Diseases'

const ENTRIES: [string, IconName, 'blue' | 'violet' | 'orange' | 'green' | 'pink' | 'teal', string, string][] = [
  ['/diseases', 'disease', 'violet', 'Explore diseases', 'Eight standardised disease modules with 16 identical sections each.'],
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

  // Atlas overview graph: disease → gene → primary cell type → therapeutic modality
  const nodes = new Map<string, GNode>()
  const edges: GEdge[] = []
  const addN = (n: GNode) => !nodes.has(n.id) && nodes.set(n.id, n)
  for (const d of DISEASES) {
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

  const stats: [number, string, IconName, 'blue' | 'violet' | 'orange' | 'green' | 'pink' | 'teal'][] = [
    [DISEASES.length, 'Diseases', 'disease', 'violet'],
    [GENES.length, 'Genes', 'dna', 'blue'],
    [ALL_VARIANTS.length, 'Curated variants', 'variant', 'pink'],
    [ALL_THERAPIES.length, 'Therapeutic approaches', 'therapy', 'green'],
    [ALL_TRIALS.length, 'Clinical trials', 'trial', 'teal'],
    [EVIDENCE_ITEMS.length, 'Graded statements', 'evidence', 'orange'],
  ]

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-main">
          <div className="hero-text">
            <div className="hero-badge">
              <Icon name="sparkle" size={14} /> Research atlas · v0.1
            </div>
            <h1 className="hero-title">GENEMAP</h1>
            <p className="hero-sub">An Integrated Research Atlas of Genetic Leukodystrophies</p>
            <p className="hero-lede">
              Explore the genes, molecular mechanisms, cellular biology, biomarkers, diagnostic strategies, and therapeutic development underlying genetic leukodystrophies —
              with every claim graded for evidence strength and traceable to its source.
            </p>
            <SearchBox big />
            <div className="hero-try">
              Try:
              {['ASPA', 'psychosine', 'integrated stress response', 'gene therapy', 'NCT04849741', 'Astrocytes'].map((t) => (
                <Link key={t} to={`/search?q=${encodeURIComponent(t)}`}>
                  {t}
                </Link>
              ))}
            </div>
          </div>
          <HeroHelix />
        </div>
        <dl className="stats">
          {stats.map(([n, l, icon, tone]) => (
            <div key={l} className="stat">
              <IconTile name={icon} tone={tone} size={36} />
              <dt>{n}</dt>
              <dd>{l}</dd>
            </div>
          ))}
          <Link to="/sources" className="stat stat-link">
            <IconTile name="sources" tone="blue" size={36} />
            <dt>{Object.keys(SOURCES).length}</dt>
            <dd>Linked sources →</dd>
          </Link>
          <Link to="/about" className="stat stat-about">
            <dt>About the project</dt>
            <dd>Why leukodystrophies, the research question and methodology →</dd>
          </Link>
        </dl>
      </section>

      <HowToUse />

      <section className="block">
        <div className="block-head">
          <h2>Explore diseases</h2>
          <Link to="/diseases" className="more">
            Disease explorer →
          </Link>
        </div>
        <div className="dgrid">
          {DISEASES.map((d) => (
            <DiseaseCard key={d.id} d={d} />
          ))}
        </div>
      </section>

      <section className="block">
        <div className="block-head">
          <h2>Atlas overview</h2>
          <p className="muted">Disease → causal gene → primary affected cell type → therapeutic modality. Hover a node to trace its connections.</p>
        </div>
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

/** Decorative double helix for the hero card. */
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
