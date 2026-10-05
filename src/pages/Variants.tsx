import { useEffect, useState } from 'react'
import { DiseaseChip, EvidenceBadge, PageHead } from '../components/ui'
import { ALL_VARIANTS, DISEASES } from '../data'
import { EVIDENCE } from '../data/evidence'
import { useInspector } from '../lib/inspector-context'

export function Variants({ diseaseId, variantId }: { diseaseId?: string | null; variantId?: string | null }) {
  const open = useInspector()
  const [d, setD] = useState(diseaseId ?? 'all')
  const [gene, setGene] = useState('all')
  const [type, setType] = useState('all')
  const [ev, setEv] = useState('all')
  const [q, setQ] = useState('')

  useEffect(() => {
    if (variantId) open({ kind: 'variant', id: variantId })
  }, [variantId, open])

  const genes = [...new Set(ALL_VARIANTS.filter((v) => d === 'all' || v.disease === d).map((v) => v.gene))]
  const types = [...new Set(ALL_VARIANTS.map((v) => v.type))]
  const list = ALL_VARIANTS.filter(
    (v) =>
      (d === 'all' || v.disease === d) &&
      (gene === 'all' || v.gene === gene) &&
      (type === 'all' || v.type === type) &&
      (ev === 'all' || v.ev === ev) &&
      (!q || `${v.hgvsc} ${v.hgvsp} ${v.legacy} ${v.phenotype}`.toLowerCase().includes(q.toLowerCase())),
  )

  return (
    <div className="page">
      <PageHead kicker="Variant explorer" title="Curated variants">
        Variants represented individually where evidence supports it. Click a row for HGVS nomenclature, transcript, genome build, consequence, ClinVar, population frequency,
        functional evidence and literature.
      </PageHead>
      <div className="filters">
        <label>
          Disease
          <select value={d} onChange={(e) => { setD(e.target.value); setGene('all') }}>
            <option value="all">All</option>
            {DISEASES.map((x) => <option key={x.id} value={x.id}>{x.short}</option>)}
          </select>
        </label>
        <label>
          Gene
          <select value={gene} onChange={(e) => setGene(e.target.value)}>
            <option value="all">All</option>
            {genes.map((g) => <option key={g}>{g}</option>)}
          </select>
        </label>
        <label>
          Type
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="all">All</option>
            {types.map((g) => <option key={g}>{g}</option>)}
          </select>
        </label>
        <label>
          Evidence
          <select value={ev} onChange={(e) => setEv(e.target.value)}>
            <option value="all">All</option>
            {EVIDENCE.map((x) => <option key={x.level} value={x.level}>{x.label}</option>)}
          </select>
        </label>
        <input className="input" placeholder="HGVS, legacy name or phenotype…" value={q} onChange={(e) => setQ(e.target.value)} />
        <span className="muted">{list.length} variants</span>
      </div>
      <div className="table-wrap">
        <table className="tbl clickable">
          <thead>
            <tr>
              <th>Disease</th>
              <th>Gene</th>
              <th>HGVS (cDNA)</th>
              <th>HGVS (protein)</th>
              <th>Type</th>
              <th>ClinVar</th>
              <th>Population</th>
              <th>Reported phenotype</th>
              <th>Evidence</th>
            </tr>
          </thead>
          <tbody>
            {list.map((v) => (
              <tr key={v.id} onClick={() => open({ kind: 'variant', id: v.id })}>
                <td><DiseaseChip id={v.disease} link={false} /></td>
                <td className="b">{v.gene}</td>
                <td className="mono">{v.hgvsc}</td>
                <td className="mono">{v.hgvsp ?? '—'}</td>
                <td>{v.type}</td>
                <td>{v.clinvar}</td>
                <td className="muted">{v.popFreq}</td>
                <td>{v.phenotype}</td>
                <td><EvidenceBadge level={v.ev} why={v.why} src={v.src} compact /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
