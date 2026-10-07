import { useState } from 'react'
import { Cites, DiseaseChip, Empty, EvidenceBadge, PageHead } from '../components/ui'
import { RelationGraph } from '../components/viz'
import { GENE_BY_SYMBOL, GENES, geneHub } from '../data'
import { GENE_DBS } from '../data/sources'
import { useInspector } from '../lib/inspector-context'
import { Link } from '../lib/Link'
import { TrialTable } from './DiseasePage'

export function Genes() {
  const [q, setQ] = useState('')
  const list = GENES.filter((g) => !q || `${g.symbol} ${g.name} ${g.protein} ${g.pathway}`.toLowerCase().includes(q.toLowerCase()))
  return (
    <div className="page">
      <PageHead icon="dna" kicker="Gene explorer" title="Genes in the atlas">
        Disease-causing genes plus curated modifier / target genes. Each gene opens a hub of every connected disease, variant, relationship, biomarker, therapy and trial.
      </PageHead>
      <div className="filters">
        <input className="input" placeholder="Filter by gene, protein or pathway…" value={q} onChange={(e) => setQ(e.target.value)} />
        <span className="muted">{list.length} genes</span>
      </div>
      <div className="table-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th>Gene</th>
              <th>Protein</th>
              <th>Location</th>
              <th>Pathway</th>
              <th>Disease(s)</th>
              <th>Association</th>
            </tr>
          </thead>
          <tbody>
            {list.map((g) => (
              <tr key={g.symbol}>
                <td>
                  <Link to={`/gene/${g.symbol}`} className="mono b">
                    {g.symbol}
                  </Link>
                  <div className="muted">{g.name}</div>
                </td>
                <td>{g.protein}</td>
                <td className="mono">{g.location}</td>
                <td>{g.pathway}</td>
                <td>{g.diseases.map((d) => <DiseaseChip key={d} id={d} />)}</td>
                <td className="nowrap">
                  <EvidenceBadge level={g.ev} src={g.src} title={`${g.symbol} association`} compact />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export function GenePage({ symbol }: { symbol: string }) {
  const g = GENE_BY_SYMBOL[symbol]
  const open = useInspector()
  if (!g) return <Empty>Unknown gene “{symbol}”.</Empty>
  const hub = geneHub(symbol)
  return (
    <div className="page">
      <PageHead icon="gene" kicker="Gene hub" title={g.symbol}>
        {g.name} · <span className="mono">{g.location}</span>
      </PageHead>

      <div className="flow">
        {[
          ['Gene', g.symbol],
          ['Protein', g.protein],
          ['Function', g.function],
          ['Pathway', g.pathway],
          ['Disease', hub.diseases.map((d) => d.short).join(', ') || '—'],
        ].map(([k, v]) => (
          <div key={k} className="flow-step">
            <div className="chain-stage">{k}</div>
            <div>{v}</div>
          </div>
        ))}
      </div>

      <div className="card pad">
        <dl className="kv kv-2 tight">
          <div><dt>Transcript (MANE)</dt><dd className="mono">{g.transcript ?? '—'}</dd></div>
          <div><dt>UniProt</dt><dd className="mono">{g.uniprot ?? '—'}</dd></div>
          <div><dt>NCBI Gene</dt><dd className="mono">{g.ncbiGene ?? '—'}</dd></div>
          <div><dt>Gene–disease association</dt><dd><EvidenceBadge level={g.ev} src={g.src} title={`${g.symbol} association`} /> <Cites src={g.src} title={g.symbol} /></dd></div>
          <div className="span2"><dt>Pathogenic variant types</dt><dd>{g.variantTypes.join(' · ')}</dd></div>
        </dl>
        <div className="ext-links">
          {GENE_DBS.map(([key, name, url]) => (
            <a key={key} href={url(g.symbol)} target="_blank" rel="noreferrer">
              {name} ↗
            </a>
          ))}
        </div>
      </div>

      <h2 className="h2">Connected diseases</h2>
      <div className="chips">{hub.diseases.map((d) => <DiseaseChip key={d.id} id={d.id} />)}</div>

      {hub.relations.length > 0 && (
        <>
          <h2 className="h2">Relationships involving {g.symbol}</h2>
          <div className="card pad">
            <RelationGraph relations={hub.relations} />
          </div>
        </>
      )}

      <h2 className="h2">Variants ({hub.variants.length})</h2>
      {hub.variants.length ? (
        <div className="table-wrap">
          <table className="tbl clickable">
            <thead>
              <tr><th>Variant</th><th>Type</th><th>ClinVar</th><th>Phenotype</th><th>Evidence</th></tr>
            </thead>
            <tbody>
              {hub.variants.map((v) => (
                <tr key={v.id} onClick={() => open({ kind: 'variant', id: v.id })}>
                  <td className="mono">{v.hgvsc} {v.hgvsp && <span className="muted">{v.hgvsp}</span>}</td>
                  <td>{v.type}</td>
                  <td>{v.clinvar}</td>
                  <td>{v.phenotype}</td>
                  <td><EvidenceBadge level={v.ev} why={v.why} src={v.src} compact /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Empty>No individual variants curated for {g.symbol}.</Empty>
      )}

      <h2 className="h2">Biomarkers in connected diseases ({hub.biomarkers.length})</h2>
      <div className="mini-grid">
        {hub.biomarkers.map((b) => (
          <div key={b.diseaseId + b.name} className="mini">
            <DiseaseChip id={b.diseaseId} />
            <b>{b.name}</b>
            <span className="muted">{b.sample} · {b.status}</span>
            <EvidenceBadge level={b.ev} src={b.src} title={b.name} compact />
          </div>
        ))}
      </div>

      <h2 className="h2">Therapeutic approaches targeting {g.symbol} ({hub.therapies.length})</h2>
      <div className="mini-grid">
        {hub.therapies.map((t) => (
          <div key={t.id} className="mini">
            <DiseaseChip id={t.diseaseId} />
            <b>{t.name}</b>
            <span className="muted">{t.modality} · {t.stage}</span>
            <EvidenceBadge level={t.ev} why={t.why} src={t.src} title={t.name} compact />
          </div>
        ))}
        {!hub.therapies.length && <Empty>None curated.</Empty>}
      </div>

      <h2 className="h2">Clinical trials</h2>
      <TrialTable trials={hub.trials} showDisease />
    </div>
  )
}
