import { useState } from 'react'
import { DiseaseChip, EvidenceBadge, PageHead, Tabs } from '../components/ui'
import { StackBar } from '../components/viz'
import { DISEASES, EVIDENCE_ITEMS, GENE_BY_SYMBOL } from '../data'
import { EVIDENCE } from '../data/evidence'
import type { BiomarkerCategory, CellType, Disease, EvidenceLevel, MechStage } from '../data/types'
import { Link } from '../lib/Link'
import { Landscape } from './Therapeutics'

const VIEWS = [
  ['genes', 'Genes'],
  ['inheritance', 'Inheritance'],
  ['mechanism', 'Mechanism'],
  ['cells', 'Cell types'],
  ['biomarkers', 'Biomarkers'],
  ['diagnosis', 'Diagnosis'],
  ['therapeutics', 'Therapeutics'],
  ['trials', 'Trial landscape'],
  ['evidence', 'Evidence landscape'],
] as const
type View = (typeof VIEWS)[number][0]

export function Compare({ view: v0 }: { view?: string | null }) {
  const [view, setView] = useState<View>((VIEWS.find((v) => v[0] === v0)?.[0] as View) ?? 'genes')
  const [sel, setSel] = useState<string[]>(DISEASES.map((d) => d.id))
  const ds = DISEASES.filter((d) => sel.includes(d.id))
  const toggle = (id: string) => setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))

  return (
    <div className="page">
      <PageHead kicker="Cross-disease comparison" title="Compare leukodystrophies">
        The atlas layer: view genes, mechanisms, cells, biomarkers, diagnostics, therapies and evidence side by side.
      </PageHead>
      <div className="picker">
        {DISEASES.map((d) => (
          <label key={d.id} className={sel.includes(d.id) ? 'on' : ''} style={{ ['--dc' as string]: d.color }}>
            <input type="checkbox" checked={sel.includes(d.id)} onChange={() => toggle(d.id)} />
            {d.short}
          </label>
        ))}
      </div>
      <Tabs<View> value={view} onChange={setView} tabs={VIEWS.map(([id, label]) => ({ id, label }))} />
      {view === 'genes' && <GenesView ds={ds} />}
      {view === 'inheritance' && <InheritanceView ds={ds} />}
      {view === 'mechanism' && <MechanismView ds={ds} />}
      {view === 'cells' && <CellsView ds={ds} />}
      {view === 'biomarkers' && <BiomarkerView ds={ds} />}
      {view === 'diagnosis' && <DiagnosisView ds={ds} />}
      {view === 'therapeutics' && <Landscape />}
      {view === 'trials' && <TrialsView ds={ds} />}
      {view === 'evidence' && <EvidenceView ds={ds} />}
    </div>
  )
}

function GenesView({ ds }: { ds: Disease[] }) {
  return (
    <div className="table-wrap">
      <table className="tbl">
        <thead>
          <tr><th>Disease</th><th>Gene</th><th>Protein</th><th>Normal function</th><th>Pathway</th><th>Location</th></tr>
        </thead>
        <tbody>
          {ds.flatMap((d) =>
            d.genes.map((s, i) => {
              const g = GENE_BY_SYMBOL[s]
              return (
                <tr key={d.id + s}>
                  {i === 0 && <td rowSpan={d.genes.length}><DiseaseChip id={d.id} /></td>}
                  <td><Link to={`/gene/${s}`} className="mono b">{s}</Link></td>
                  <td>{g?.protein}</td>
                  <td className="muted">{g?.function}</td>
                  <td>{g?.pathway}</td>
                  <td className="mono">{g?.location}</td>
                </tr>
              )
            }),
          )}
        </tbody>
      </table>
    </div>
  )
}

function InheritanceView({ ds }: { ds: Disease[] }) {
  const groups = [...new Set(ds.map((d) => d.inheritance))]
  return (
    <div className="inh">
      {groups.map((g) => (
        <div key={g} className="card pad">
          <h3>{g}</h3>
          {ds.filter((d) => d.inheritance === g).map((d) => (
            <div key={d.id} className="inh-row">
              <DiseaseChip id={d.id} />
              <span className="mono">{d.genes.join(', ')}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function MechanismView({ ds }: { ds: Disease[] }) {
  const stages: MechStage[] = ['Gene', 'Protein', 'Molecular function', 'Pathway', 'Cellular consequence', 'Phenotype']
  return (
    <div className="table-wrap">
      <table className="tbl matrix mech">
        <thead>
          <tr><th>Stage</th>{ds.map((d) => <th key={d.id}><DiseaseChip id={d.id} /></th>)}</tr>
        </thead>
        <tbody>
          {stages.map((s) => (
            <tr key={s}>
              <th>{s}</th>
              {ds.map((d) => {
                const m = d.mechanism.find((x) => x.stage === s)
                return (
                  <td key={d.id}>
                    {m ? (
                      <>
                        <b>{m.label}</b>
                        <div className="muted">{m.detail}</div>
                        <EvidenceBadge level={m.ev} src={m.src} title={`${d.short} · ${s}: ${m.label}`} compact />
                      </>
                    ) : '—'}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function CellsView({ ds }: { ds: Disease[] }) {
  const cells: CellType[] = ['Oligodendrocytes', 'Astrocytes', 'Neurons / axons', 'Microglia / macrophages', 'Schwann cells', 'Non-CNS tissue']
  return (
    <>
      <div className="table-wrap">
        <table className="tbl matrix">
          <thead>
            <tr><th>Cell type</th>{ds.map((d) => <th key={d.id}><DiseaseChip id={d.id} /></th>)}</tr>
          </thead>
          <tbody>
            {cells.map((c) => (
              <tr key={c}>
                <th>{c}</th>
                {ds.map((d) => {
                  const e = d.cells.find((x) => x.cell === c)
                  return (
                    <td key={d.id} className={e ? `cellm cm-${e.role}` : 'cell-empty'} title={e?.detail}>
                      {e ? (
                        <>
                          <div className="cm-role">{e.role}</div>
                          <EvidenceBadge level={e.ev} src={e.src} title={`${d.short}: ${c}`} why={e.detail} compact />
                        </>
                      ) : '—'}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="muted sm">Primary = cell type in which the disease process originates; secondary = involved downstream. Hover for detail.</p>
    </>
  )
}

function BiomarkerView({ ds }: { ds: Disease[] }) {
  const cats: BiomarkerCategory[] = ['Enzymatic', 'Biochemical', 'Imaging', 'Genetic', 'Fluid (neuro-glial injury)', 'Endocrine']
  return (
    <>
      <div className="table-wrap">
        <table className="tbl matrix">
          <thead>
            <tr><th>Category</th>{ds.map((d) => <th key={d.id}><DiseaseChip id={d.id} /></th>)}</tr>
          </thead>
          <tbody>
            {cats.map((c) => (
              <tr key={c}>
                <th>{c}</th>
                {ds.map((d) => {
                  const bs = d.biomarkers.filter((b) => b.category === c)
                  return (
                    <td key={d.id} className={bs.length ? '' : 'cell-empty'}>
                      {bs.length
                        ? bs.map((b) => (
                            <div key={b.name} className="bm">
                              <span className={`status st-${b.status.split(' ')[0].toLowerCase()}`}>{b.status === 'Established clinical' ? 'EST' : b.status === 'Clinical adjunct' ? 'ADJ' : 'EXP'}</span>
                              {b.name}
                            </div>
                          ))
                        : '—'}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="muted sm">EST = established clinical · ADJ = clinical adjunct · EXP = experimental / emerging.</p>
    </>
  )
}

function DiagnosisView({ ds }: { ds: Disease[] }) {
  return (
    <div className="table-wrap">
      <table className="tbl">
        <thead>
          <tr><th>Disease</th><th>Suspicion</th><th>Investigation</th><th>Confirmation</th><th>Newborn screening</th></tr>
        </thead>
        <tbody>
          {ds.map((d) => (
            <tr key={d.id}>
              <td><DiseaseChip id={d.id} /></td>
              {(['Suspicion', 'Investigation', 'Confirmation'] as const).map((p) => (
                <td key={p}>
                  {d.diagnosis.filter((s) => s.phase === p).map((s, i) => (
                    <div key={i} className="dxc"><span className="dx-cat">{s.category}</span> {s.method}</div>
                  ))}
                </td>
              ))}
              <td>{d.diagnosis.some((s) => s.category === 'Screening') ? <span className="status st-established">Yes (some regions)</span> : <span className="muted">Not established</span>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function TrialsView({ ds }: { ds: Disease[] }) {
  const max = Math.max(1, ...ds.map((d) => d.trials.length))
  return (
    <div className="card pad">
      {ds.map((d) => (
        <div key={d.id} className="bar-row">
          <DiseaseChip id={d.id} />
          <div className="bar-track">
            {d.trials.map((t) => (
              <a key={t.nct} href={`https://clinicaltrials.gov/study/${t.nct}`} target="_blank" rel="noreferrer" className="bar-seg" style={{ width: `${100 / max}%`, background: d.color }} title={`${t.nct} · ${t.intervention} · ${t.phase} · ${t.status}`}>
                {t.phase}
              </a>
            ))}
            {!d.trials.length && <span className="muted sm">No registered interventional trials curated</span>}
          </div>
        </div>
      ))}
      <p className="muted sm">Each segment is one curated trial (hover for detail, click for registry).</p>
    </div>
  )
}

function EvidenceView({ ds }: { ds: Disease[] }) {
  return (
    <div className="card pad">
      <div className="ev-land">
        <div className="ev-land-head">
          <span />
          <span />
          {EVIDENCE.map((e) => <span key={e.level} className={`ev ev-${e.level} ev-static ev-compact`} title={e.label}><span className="ev-dot" />{e.short}</span>)}
        </div>
        {ds.map((d) => {
          const items = EVIDENCE_ITEMS.filter((i) => i.diseaseId === d.id)
          const c: Partial<Record<EvidenceLevel, number>> = {}
          for (const i of items) c[i.ev] = (c[i.ev] ?? 0) + 1
          return (
            <div key={d.id} className="ev-land-row">
              <DiseaseChip id={d.id} />
              <StackBar counts={c} total={items.length} />
              {EVIDENCE.map((e) => (
                <Link key={e.level} to={`/evidence?d=${d.id}&ev=${e.level}`} className="num">
                  {c[e.level] ?? 0}
                </Link>
              ))}
            </div>
          )
        })}
      </div>
      <p className="muted sm">Distribution of all graded statements per disease. Click a count to open those statements.</p>
    </div>
  )
}
