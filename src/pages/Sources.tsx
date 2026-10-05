import { useState } from 'react'
import { DiseaseChip, PageHead } from '../components/ui'
import { SOURCE_USAGE, SOURCES } from '../data'
import { SOURCE_KIND_LABEL } from '../data/sources'
import type { SourceKind } from '../data/types'

export function Sources() {
  const [kind, setKind] = useState<'all' | SourceKind>('all')
  const [q, setQ] = useState('')
  const [onlyCited, setOnlyCited] = useState(true)
  const list = Object.values(SOURCES)
    .filter((s) => (kind === 'all' || s.kind === kind) && (!onlyCited || SOURCE_USAGE[s.id]) && (!q || `${s.title} ${s.authors} ${s.venue}`.toLowerCase().includes(q.toLowerCase())))
    .sort((a, b) => a.kind.localeCompare(b.kind) || (b.year ?? 0) - (a.year ?? 0))
  return (
    <div className="page">
      <PageHead kicker="Source library" title="Sources & citations">
        Every source cited by a claim in the atlas, with the diseases that cite it. Literature entries link to PubMed; database entries link to the live record.
      </PageHead>
      <div className="filters">
        <label>
          Type
          <select value={kind} onChange={(e) => setKind(e.target.value as SourceKind | 'all')}>
            <option value="all">All</option>
            {Object.entries(SOURCE_KIND_LABEL).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
        </label>
        <label className="check">
          <input type="checkbox" checked={onlyCited} onChange={(e) => setOnlyCited(e.target.checked)} />
          Only cited in disease modules
        </label>
        <input className="input" placeholder="Title, author or venue…" value={q} onChange={(e) => setQ(e.target.value)} />
        <span className="muted">{list.length} sources</span>
      </div>
      <div className="table-wrap">
        <table className="tbl">
          <thead>
            <tr><th>Type</th><th>Source</th><th>Year</th><th>Cited by</th></tr>
          </thead>
          <tbody>
            {list.map((s) => (
              <tr key={s.id}>
                <td><span className={`src-kind src-kind-${s.kind}`}>{SOURCE_KIND_LABEL[s.kind]}</span></td>
                <td>
                  <a href={s.url} target="_blank" rel="noreferrer">{s.title}</a>
                  <div className="muted sm">{[s.authors, s.venue].filter(Boolean).join(' · ')}</div>
                </td>
                <td className="mono">{s.year ?? '—'}</td>
                <td>{[...(SOURCE_USAGE[s.id] ?? [])].map((d) => <DiseaseChip key={d} id={d} />)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
