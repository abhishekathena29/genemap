import { useState } from 'react'
import { PageHead } from '../components/ui'
import { DISEASES } from '../data'
import { STAGES, type Disease } from '../data/types'
import { Link } from '../lib/Link'

const maxStage = (d: Disease) =>
  d.therapies.reduce((m, t) => Math.max(m, STAGES.indexOf(t.stage)), -1)

export function DiseaseCard({ d }: { d: Disease }) {
  const top = maxStage(d)
  return (
    <Link to={`/disease/${d.id}`} className="dcard" style={{ ['--dc' as string]: d.color }}>
      <div className="dcard-top">
        <span className="dcard-short">{d.short}</span>
        <span className="dcard-inh">{d.inheritance}</span>
      </div>
      <h3>{d.name}</h3>
      <p>{d.tagline}</p>
      <div className="dcard-genes">
        {d.genes.map((g) => (
          <span key={g} className="gene-tag">
            {g}
          </span>
        ))}
      </div>
      <div className="dcard-foot">
        <span>{d.variants.length} variants</span>
        <span>{d.biomarkers.length} biomarkers</span>
        <span>{d.trials.length} trials</span>
        <span className="dcard-stage">{top >= 0 ? STAGES[top] : 'No therapies'}</span>
      </div>
    </Link>
  )
}

export function Diseases() {
  const [inh, setInh] = useState<string>('All')
  const [cell, setCell] = useState<string>('All')
  const inhs = ['All', ...new Set(DISEASES.map((d) => d.inheritance))]
  const cells = ['All', ...new Set(DISEASES.flatMap((d) => d.cells.filter((c) => c.role === 'primary').map((c) => c.cell)))]
  const list = DISEASES.filter(
    (d) => (inh === 'All' || d.inheritance === inh) && (cell === 'All' || d.cells.some((c) => c.role === 'primary' && c.cell === cell)),
  )
  return (
    <div className="page">
      <PageHead kicker="Disease explorer" title="Leukodystrophies in the atlas">
        Every disease module uses the same 15 sections in the same order, so researchers can move between disorders and compare like with like.
      </PageHead>
      <div className="filters">
        <label>
          Inheritance
          <select value={inh} onChange={(e) => setInh(e.target.value)}>
            {inhs.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </label>
        <label>
          Primary cell type
          <select value={cell} onChange={(e) => setCell(e.target.value)}>
            {cells.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>
        </label>
        <span className="muted">{list.length} of {DISEASES.length}</span>
      </div>
      <div className="dgrid">
        {list.map((d) => (
          <DiseaseCard key={d.id} d={d} />
        ))}
      </div>
    </div>
  )
}
