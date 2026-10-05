import { useState } from 'react'
import { Cites, DiseaseChip, EvidenceBadge, PageHead } from '../components/ui'
import { DISEASES, EVIDENCE_ITEMS, type EvidenceItem } from '../data'
import { EVIDENCE, evidenceRank } from '../data/evidence'
import { Link } from '../lib/Link'

const KINDS: EvidenceItem['kind'][] = ['Relationship', 'Mechanism', 'Genotype–phenotype', 'Variant', 'Biomarker', 'Therapy', 'Disease claim', 'Research gap']

export function Evidence({ diseaseId, level }: { diseaseId?: string | null; level?: string | null }) {
  const [d, setD] = useState(diseaseId ?? 'all')
  const [lv, setLv] = useState<string[]>(level ? [level] : EVIDENCE.map((e) => e.level))
  const [kind, setKind] = useState('all')
  const [q, setQ] = useState('')

  const base = EVIDENCE_ITEMS.filter((i) => (d === 'all' || i.diseaseId === d) && (kind === 'all' || i.kind === kind) && (!q || `${i.title} ${i.detail}`.toLowerCase().includes(q.toLowerCase())))
  const list = base.filter((i) => lv.includes(i.ev)).sort((a, b) => evidenceRank(a.ev) - evidenceRank(b.ev))
  const toggle = (l: string) => setLv((s) => (s.includes(l) ? s.filter((x) => x !== l) : [...s, l]))

  return (
    <div className="page">
      <PageHead kicker="Evidence explorer" title="Browse by evidence strength">
        Every graded statement in GeneMap. Labels come from the curated research data; click any label for the curator rationale and supporting sources.
      </PageHead>
      <div className="ev-filter">
        {EVIDENCE.map((e) => {
          const n = base.filter((i) => i.ev === e.level).length
          return (
            <button key={e.level} className={`ev-toggle ev-${e.level}${lv.includes(e.level) ? ' on' : ''}`} onClick={() => toggle(e.level)} title={e.definition}>
              <span className="ev-dot" />
              {e.label}
              <span className="tab-count">{n}</span>
            </button>
          )
        })}
      </div>
      <div className="filters">
        <label>
          Disease
          <select value={d} onChange={(e) => setD(e.target.value)}>
            <option value="all">All</option>
            {DISEASES.map((x) => <option key={x.id} value={x.id}>{x.short}</option>)}
          </select>
        </label>
        <label>
          Statement type
          <select value={kind} onChange={(e) => setKind(e.target.value)}>
            <option value="all">All</option>
            {KINDS.map((k) => <option key={k}>{k}</option>)}
          </select>
        </label>
        <input className="input" placeholder="Filter statements…" value={q} onChange={(e) => setQ(e.target.value)} />
        <span className="muted">{list.length} statements</span>
      </div>
      <ul className="evlist">
        {list.slice(0, 400).map((i, k) => (
          <li key={k}>
            <EvidenceBadge level={i.ev} why={i.why} src={i.src} title={i.title} />
            <div className="evlist-body">
              <div>{i.title}</div>
              <div className="muted sm">
                <span className="kind">{i.kind}</span>
                {i.detail && <> · {i.detail}</>}
              </div>
            </div>
            <div className="evlist-meta">
              <DiseaseChip id={i.diseaseId} />
              <Cites src={i.src} title={i.title} />
              <Link to={`/disease/${i.diseaseId}?s=${i.section}`} className="sm">
                in context →
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
