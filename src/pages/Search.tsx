import { SearchBox } from '../components/Layout'
import { Empty, PageHead } from '../components/ui'
import { search, type SearchType } from '../data'
import { Link } from '../lib/Link'

const ORDER: SearchType[] = ['Disease', 'Gene', 'Protein', 'Variant', 'Pathway', 'Cell type', 'Biomarker', 'Therapy', 'Clinical trial']

export function Search({ q }: { q: string }) {
  const results = search(q)
  const groups = ORDER.map((t) => [t, results.filter((r) => r.type === t)] as const).filter(([, r]) => r.length)
  return (
    <div className="page">
      <PageHead icon="research" kicker="Search" title={q ? `Results for “${q}”` : 'Search the atlas'}>
        Search diseases, genes, proteins, variants, biomarkers, therapies, clinical trials and pathways.
      </PageHead>
      <SearchBox big />
      {q && !results.length && <Empty>No matches. Try a gene symbol (e.g. GALC), a metabolite (psychosine) or an NCT number.</Empty>}
      <div className="sgroups">
        {groups.map(([t, rs]) => (
          <section key={t} className="sgroup">
            <h3>
              <span className={`stype stype-${t.replace(/\s/g, '')}`}>{t}</span> <span className="muted">{rs.length}</span>
            </h3>
            <ul>
              {rs.map((r) => (
                <li key={r.label + r.route}>
                  <Link to={r.route}>{r.label}</Link>
                  <span className="muted sm">{r.sub}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
