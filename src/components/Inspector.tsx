import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { ALL_VARIANTS, DISEASE_BY_ID } from '../data'
import { EVIDENCE, EVIDENCE_BY_LEVEL } from '../data/evidence'
import { InspectorContext, type InspectorContent } from '../lib/inspector-context'
import { Link } from '../lib/Link'
import { EvidenceBadge, SourceItem } from './ui'

export function InspectorProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<InspectorContent | null>(null)
  const open = useCallback((c: InspectorContent) => setContent(c), [])
  const close = () => setContent(null)

  useEffect(() => {
    if (!content) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setContent(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [content])

  useEffect(() => {
    const on = () => setContent(null)
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])

  return (
    <InspectorContext.Provider value={open}>
      {children}
      {content && (
        <>
          <div className="scrim" onClick={close} />
          <aside className="drawer" role="dialog" aria-modal="true">
            <button className="drawer-close" onClick={close} aria-label="Close">
              ×
            </button>
            <DrawerBody c={content} />
          </aside>
        </>
      )}
    </InspectorContext.Provider>
  )
}

function DrawerBody({ c }: { c: InspectorContent }) {
  if (c.kind === 'evidence') {
    const def = EVIDENCE_BY_LEVEL[c.level]
    return (
      <>
        <div className="kicker">Evidence assessment</div>
        <h2 className="drawer-title">{c.title}</h2>
        <div className={`ev ev-${c.level} ev-static ev-lg`}>
          <span className="ev-dot" />
          {def.label}
        </div>
        <h3>Why this level</h3>
        <p>{c.why ?? 'Curator rationale not yet recorded for this statement. Level is taken from the curated dossier.'}</p>
        <h3>What “{def.label}” means</h3>
        <p className="muted">{def.definition}</p>
        <h3>Supporting sources ({c.src.length})</h3>
        <ul className="src-list">
          {c.src.map((id) => (
            <SourceItem key={id} id={id} />
          ))}
        </ul>
        <h3>Evidence scale</h3>
        <ol className="scale">
          {EVIDENCE.map((e) => (
            <li key={e.level} className={e.level === c.level ? 'on' : ''}>
              <span className={`ev ev-${e.level} ev-static`}>
                <span className="ev-dot" />
                {e.label}
              </span>
              <span className="muted">{e.definition}</span>
            </li>
          ))}
        </ol>
      </>
    )
  }
  if (c.kind === 'sources') {
    return (
      <>
        <div className="kicker">Sources</div>
        <h2 className="drawer-title">{c.title}</h2>
        <ul className="src-list">
          {c.src.map((id) => (
            <SourceItem key={id} id={id} />
          ))}
        </ul>
      </>
    )
  }
  const v = ALL_VARIANTS.find((x) => x.id === c.id)
  if (!v) return <p>Variant not found.</p>
  const d = DISEASE_BY_ID[v.disease]
  const rows: [string, ReactNode][] = [
    ['Gene', <Link to={`/gene/${v.gene}`}>{v.gene}</Link>],
    ['Transcript', <code>{v.transcript}</code>],
    ['Genome build', v.build],
    ['HGVS (cDNA)', <code>{v.hgvsc}</code>],
    ['HGVS (protein)', v.hgvsp ? <code>{v.hgvsp}</code> : '—'],
    ['Legacy name', v.legacy ?? '—'],
    ['Variant type', v.type],
    ['Protein consequence', v.consequence],
    ['ClinVar', v.clinvar],
    ['Population frequency', v.popFreq],
    ['Reported phenotype', v.phenotype],
    ['Functional evidence', v.functional],
  ]
  return (
    <>
      <div className="kicker">Variant · {d.name}</div>
      <h2 className="drawer-title mono">
        {v.gene} {v.hgvsp ?? v.hgvsc}
      </h2>
      <EvidenceBadge level={v.ev} why={v.why} src={v.src} title={`${v.gene} ${v.hgvsp ?? v.hgvsc}`} />
      <dl className="kv">
        {rows.map(([k, val]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{val}</dd>
          </div>
        ))}
      </dl>
      <h3>External records</h3>
      <div className="ext-links">
        <a href={`https://www.ncbi.nlm.nih.gov/clinvar/?term=${encodeURIComponent(`${v.gene}[gene] ${v.hgvsc}`)}`} target="_blank" rel="noreferrer">ClinVar ↗</a>
        <a href={`https://gnomad.broadinstitute.org/gene/${v.gene}?dataset=gnomad_r4`} target="_blank" rel="noreferrer">gnomAD ↗</a>
        <a href={`https://www.ensembl.org/Homo_sapiens/Gene/Summary?g=${v.gene}`} target="_blank" rel="noreferrer">Ensembl ↗</a>
        <a href={`https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(`${v.gene} ${v.hgvsp ?? v.hgvsc}`)}`} target="_blank" rel="noreferrer">PubMed ↗</a>
      </div>
      <h3>Sources</h3>
      <ul className="src-list">
        {v.src.map((id) => (
          <SourceItem key={id} id={id} />
        ))}
      </ul>
    </>
  )
}
