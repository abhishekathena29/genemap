import { SearchBox } from '../components/Layout'
import { EvidenceLegend } from '../components/ui'
import { NetworkGraph, type GEdge, type GNode } from '../components/viz'
import { ALL_THERAPIES, ALL_TRIALS, ALL_VARIANTS, DISEASES, EVIDENCE_ITEMS, GENES, SOURCES } from '../data'
import { Link } from '../lib/Link'
import { DiseaseCard } from './Diseases'

const ENTRIES = [
  ['/diseases', 'Explore diseases', 'Eight standardised disease modules with 15 identical sections each.'],
  ['/genes', 'Explore genes', 'Gene → protein → function hubs linking every connected record.'],
  ['/variants', 'Explore variants', 'Filter variants by gene, type, ClinVar class and evidence.'],
  ['/therapeutics', 'Explore therapeutics', 'Therapeutic pipeline and time-stamped clinical-trial records.'],
  ['/compare', 'Compare diseases', 'Side-by-side genes, inheritance, cells, biomarkers and therapies.'],
  ['/evidence', 'Explore evidence', 'Every graded relationship, filterable by evidence strength.'],
] as const

export function Home() {
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

  const stats = [
    [DISEASES.length, 'diseases'],
    [GENES.length, 'genes'],
    [ALL_VARIANTS.length, 'curated variants'],
    [ALL_THERAPIES.length, 'therapeutic approaches'],
    [ALL_TRIALS.length, 'clinical trials'],
    [EVIDENCE_ITEMS.length, 'graded statements'],
    [Object.keys(SOURCES).length, 'linked sources'],
  ] as const

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-text">
          <div className="kicker">Research atlas · v0.1</div>
          <h1 className="hero-title">GENEMAP</h1>
          <p className="hero-sub">An Integrated Research Atlas of Genetic Leukodystrophies</p>
          <p className="hero-lede">
            Explore the genes, molecular mechanisms, cellular biology, biomarkers, diagnostic strategies, and therapeutic development underlying genetic
            leukodystrophies — with every claim graded for evidence strength and traceable to its source.
          </p>
          <SearchBox big />
          <div className="hero-try">
            Try:{' '}
            {['ASPA', 'psychosine', 'integrated stress response', 'gene therapy', 'NCT04849741', 'Astrocytes'].map((t) => (
              <Link key={t} to={`/search?q=${encodeURIComponent(t)}`}>
                {t}
              </Link>
            ))}
          </div>
        </div>
        <dl className="stats">
          {stats.map(([n, l]) => (
            <div key={l}>
              <dt>{n}</dt>
              <dd>{l}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="block">
        <div className="block-head">
          <h2>Atlas overview</h2>
          <p className="muted">Disease → causal gene → primary affected cell type → therapeutic modalities under investigation. Hover a node to trace its connections.</p>
        </div>
        <div className="card pad">
          <NetworkGraph nodes={[...nodes.values()]} edges={edges} columns={['Disease', 'Gene', 'Primary cell type', 'Therapeutic modality']} />
        </div>
      </section>

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
          <h2>Entry points</h2>
          <p className="muted">Enter through a disease, gene, variant, biomarker, pathway or therapy.</p>
        </div>
        <div className="entries">
          {ENTRIES.map(([to, t, d]) => (
            <Link key={to} to={to} className="entry">
              <strong>{t}</strong>
              <span>{d}</span>
              <span className="entry-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="block">
        <div className="block-head">
          <h2>Evidence is visible throughout</h2>
          <p className="muted">
            GeneMap never presents claims as equally certain. Every relationship carries one of these labels — click any label in the atlas to see why it was assigned and which
            sources support it.
          </p>
        </div>
        <EvidenceLegend />
      </section>
    </div>
  )
}
