import { useEffect, useState, type ReactNode } from 'react'
import { Icon, IconTile, type IconName } from '../components/icons'
import { Cites, ClaimRow, Clamp, DiseaseChip, Empty, EvidenceBadge, EvidenceLegend, Updated } from '../components/ui'
import { MechanismChain, MilestoneTimeline, NetworkGraph, Pipeline, RelationGraph, StackBar, type GEdge, type GNode } from '../components/viz'
import { DISEASE_BY_ID, DISEASES, GENE_BY_SYMBOL } from '../data'
import { evidenceRank } from '../data/evidence'
import { GENE_DBS } from '../data/sources'
import type { Disease, DxPhase, EvidenceLevel, MgmtItem } from '../data/types'
import { useInspector } from '../lib/inspector-context'
import { Link } from '../lib/Link'

const SECTIONS = [
  ['identity', 'Disease identity', 'disease'],
  ['clinical', 'Clinical & biological summary', 'person'],
  ['epidemiology', 'Epidemiology & populations', 'chart'],
  ['genetics', 'Genetics', 'dna'],
  ['variants', 'Variant-level information', 'variant'],
  ['genotype-phenotype', 'Genotype–phenotype', 'link'],
  ['mechanism', 'Molecular mechanism', 'mechanism'],
  ['spatial', 'Brain, cellular & spatial biology', 'cell'],
  ['biomarkers', 'Biomarkers', 'target'],
  ['diagnosis', 'Diagnosis & testing', 'diagnosis'],
  ['phenotypes', 'Typical vs atypical phenotype', 'person'],
  ['management', 'Current management', 'shield'],
  ['therapeutics', 'Therapeutic development', 'therapy'],
  ['trials', 'Clinical trials', 'trial'],
  ['pipeline', 'Therapeutic pipeline timeline', 'rocket'],
  ['gaps', 'Research gaps', 'research'],
] as const satisfies readonly (readonly [string, string, IconName])[]

function Section({ id, n, title, children, aside }: { id: string; n: number; title: string; children: ReactNode; aside?: ReactNode }) {
  return (
    <section id={id} className="dsec">
      <div className="dsec-head">
        <span className="dsec-ico">
          <Icon name={SECTIONS.find((s) => s[0] === id)?.[2] ?? 'info'} size={20} />
        </span>
        <div className="dsec-title">
          <span className="dsec-n">Section {String(n).padStart(2, '0')}</span>
          <h2>{title}</h2>
        </div>
        {aside && <div className="dsec-aside">{aside}</div>}
      </div>
      {children}
    </section>
  )
}

function useScrollSpy(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (vis[0]) setActive(vis[0].target.id)
      },
      { rootMargin: '-90px 0px -65% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [ids])
  return active
}

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

export function DiseasePage({ id, section }: { id: string; section?: string | null }) {
  const d = DISEASE_BY_ID[id]
  const ids = SECTIONS.map((s) => s[0])
  const active = useScrollSpy(ids)

  useEffect(() => {
    if (section) setTimeout(() => scrollTo(section), 50)
  }, [id, section])

  if (!d) return <Empty>Unknown disease “{id}”.</Empty>
  const idx = DISEASES.indexOf(d)
  const prev = DISEASES[(idx + DISEASES.length - 1) % DISEASES.length]
  const next = DISEASES[(idx + 1) % DISEASES.length]

  return (
    <div className="dpage" style={{ ['--dc' as string]: d.color }}>
      <header className="dhero">
        <div className="dhero-card">
          <div className="dhero-top">
            <div className="kicker">
              <Link to="/diseases">Disease explorer</Link> / {d.short}
            </div>
            <Updated date={d.lastUpdated} />
          </div>
          <h1>{d.name}</h1>
          <p className="dhero-tag">{d.tagline}</p>
          <div className="dhero-switch">
            <Link to={`/disease/${prev.id}`}>← {prev.short}</Link>
            <Link to={`/compare`}>Compare all</Link>
            <Link to={`/disease/${next.id}`}>{next.short} →</Link>
          </div>
        </div>
        <div className="dhero-facts">
          <div className="fact">
            <IconTile name="link" tone="violet" size={34} />
            <em>Inheritance</em>
            <span>{d.inheritance}</span>
          </div>
          <div className="fact">
            <IconTile name="dna" tone="blue" size={34} />
            <em>Gene{d.genes.length > 1 ? 's' : ''}</em>
            <span className="fact-genes">
              {d.genes.map((g) => (
                <Link key={g} to={`/gene/${g}`} className="gene-tag">
                  {g}
                </Link>
              ))}
            </span>
          </div>
          <div className="fact fact-wide">
            <IconTile name="layers" tone="teal" size={34} />
            <em>Class</em>
            <span>{d.classification}</span>
          </div>
          <div className="fact">
            <IconTile name="trial" tone="green" size={34} />
            <em>Trials · therapies</em>
            <span className="fact-num">
              {d.trials.length} · {d.therapies.length}
            </span>
          </div>
        </div>
      </header>

      <div className="dlayout">
        <nav className="snav" aria-label="Sections">
          {SECTIONS.map(([sid, label], i) => (
            <button key={sid} className={active === sid ? 'on' : ''} onClick={() => scrollTo(sid)}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              {label}
            </button>
          ))}
          <div className="snav-legend">
            <EvidenceLegend />
          </div>
        </nav>

        <div className="dcontent">
          <Identity d={d} />
          <Section id="clinical" n={2} title="Broad clinical & biological summary">
            <div className="claims">{d.clinical.map((c, i) => <ClaimRow key={i} c={c} />)}</div>
          </Section>
          <Section id="epidemiology" n={3} title="Epidemiology & affected populations">
            <div className="claims">{d.epidemiology.map((c, i) => <ClaimRow key={i} c={c} />)}</div>
          </Section>
          <Genetics d={d} />
          <Variants d={d} />
          <GenotypePhenotype d={d} />
          <Section id="mechanism" n={7} title="Molecular mechanism">
            <p className="muted sm">Gene → protein → molecular function → pathway → cellular consequence → disease phenotype.</p>
            <MechanismChain steps={d.mechanism} />
            <h3 className="sub">Relationship network</h3>
            <div className="card pad">
              <RelationGraph relations={d.relations} />
            </div>
          </Section>
          <Spatial d={d} />
          <Biomarkers d={d} />
          <Diagnosis d={d} />
          <Phenotypes d={d} />
          <Management d={d} />
          <Therapeutics d={d} />
          <Trials d={d} />
          <Section id="pipeline" n={15} title="Therapeutic pipeline timeline">
            {d.therapies.length ? (
              <Pipeline
                rows={[...d.therapies]
                  .sort((a, b) => evidenceRank(a.ev) - evidenceRank(b.ev))
                  .map((t) => ({ id: t.id, name: t.name, sub: `${t.modality} · ${t.target}`, stage: t.stage, color: d.color, ev: t.ev, why: t.why, src: t.src }))}
              />
            ) : (
              <Empty>No therapeutic programmes curated.</Empty>
            )}
            <h3 className="sub">Milestones</h3>
            <MilestoneTimeline milestones={d.milestones} color={d.color} />
          </Section>
          <Section id="gaps" n={16} title="Major research gaps">
            <div className="claims">{d.gaps.map((c, i) => <ClaimRow key={i} c={c} />)}</div>
          </Section>
          <div className="dfoot">
            <Updated date={d.lastUpdated} label={`${d.short} module last updated`} />
          </div>
        </div>
      </div>
    </div>
  )
}

function Identity({ d }: { d: Disease }) {
  return (
    <Section id="identity" n={1} title="Disease identity">
      <dl className="kv kv-2">
        <div>
          <dt>Name</dt>
          <dd>{d.name}</dd>
        </div>
        <div>
          <dt>Synonyms</dt>
          <dd>{d.synonyms.join(' · ')}</dd>
        </div>
        <div>
          <dt>Classification</dt>
          <dd>{d.classification}</dd>
        </div>
        <div>
          <dt>Inheritance</dt>
          <dd>{d.inheritance}</dd>
        </div>
        <div>
          <dt>Identifiers</dt>
          <dd className="ids">
            {d.identifiers.map((i) => (
              <a key={i.label} href={i.url} target="_blank" rel="noreferrer" className="idtag">
                <b>{i.label}</b> {i.value}
              </a>
            ))}
          </dd>
        </div>
        <div>
          <dt>Primary cell types</dt>
          <dd>{d.cells.filter((c) => c.role === 'primary').map((c) => c.cell).join(' · ')}</dd>
        </div>
      </dl>
      <h3 className="sub">Core disease characteristics</h3>
      <div className="claims">{d.identity.map((c, i) => <ClaimRow key={i} c={c} />)}</div>
    </Section>
  )
}

function Genetics({ d }: { d: Disease }) {
  const genes = d.genes.map((g) => GENE_BY_SYMBOL[g]).filter(Boolean)
  return (
    <Section id="genetics" n={4} title="Genetics">
      <div className="gene-cards">
        {genes.map((g) => (
          <article key={g.symbol} className="gcard">
            <div className="gcard-head">
              <Link to={`/gene/${g.symbol}`} className="gcard-sym">
                {g.symbol}
              </Link>
              <span className="muted">{g.name}</span>
              <span className="gcard-ev">
                <EvidenceBadge level={g.ev} src={g.src} title={`${g.symbol} – ${d.short} association`} why={`Gene–disease association strength for ${g.symbol} in ${d.name}.`} />
                <Cites src={g.src} title={g.symbol} />
              </span>
            </div>
            <dl className="kv kv-2 tight">
              <div><dt>Protein</dt><dd>{g.protein}</dd></div>
              <div><dt>Chromosomal location</dt><dd className="mono">{g.location}</dd></div>
              <div><dt>Inheritance</dt><dd>{d.inheritance}</dd></div>
              <div><dt>Transcript (MANE)</dt><dd className="mono">{g.transcript ?? '—'}</dd></div>
              <div><dt>UniProt</dt><dd className="mono">{g.uniprot ? <a href={`https://www.uniprot.org/uniprotkb/${g.uniprot}`} target="_blank" rel="noreferrer">{g.uniprot}</a> : '—'}</dd></div>
              <div><dt>NCBI Gene</dt><dd className="mono">{g.ncbiGene ? <a href={`https://www.ncbi.nlm.nih.gov/gene/${g.ncbiGene}`} target="_blank" rel="noreferrer">{g.ncbiGene}</a> : '—'}</dd></div>
              <div className="span2"><dt>Normal function</dt><dd><Clamp lines={3}>{g.function}</Clamp></dd></div>
              <div className="span2"><dt>Biological pathway</dt><dd><Clamp lines={2}>{g.pathway}</Clamp></dd></div>
              <div className="span2"><dt>Pathogenic variant types</dt><dd>{g.variantTypes.join(' · ')}</dd></div>
            </dl>
            <div className="ext-links">
              {GENE_DBS.map(([key, name, url]) => (
                <a key={key} href={url(g.symbol)} target="_blank" rel="noreferrer">
                  {name.replace(' (brain expression)', '')} ↗
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Variants({ d }: { d: Disease }) {
  const open = useInspector()
  return (
    <Section id="variants" n={5} title="Variant-level information" aside={<Link to={`/variants?d=${d.id}`}>Open in variant explorer →</Link>}>
      {d.variants.length ? (
        <div className="table-wrap">
          <table className="tbl clickable">
            <thead>
              <tr>
                <th>Variant (HGVS)</th>
                <th>Gene / transcript</th>
                <th>Type</th>
                <th>ClinVar</th>
                <th>Reported phenotype</th>
                <th>Evidence</th>
              </tr>
            </thead>
            <tbody>
              {d.variants.map((v) => (
                <tr key={v.id} onClick={() => open({ kind: 'variant', id: v.id })}>
                  <td className="mono">
                    {v.hgvsc}
                    {v.hgvsp && <div className="muted">{v.hgvsp}</div>}
                  </td>
                  <td>
                    <b>{v.gene}</b>
                    <div className="muted mono">{v.transcript}</div>
                  </td>
                  <td>{v.type}</td>
                  <td>{v.clinvar}</td>
                  <td>{v.phenotype}</td>
                  <td>
                    <EvidenceBadge level={v.ev} why={v.why} src={v.src} title={`${v.gene} ${v.hgvsp ?? v.hgvsc}`} compact />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <Empty>No individual variants curated.</Empty>
      )}
      <p className="muted sm">Click a row for full variant detail (genome build, consequence, population frequency, functional evidence, external records).</p>
    </Section>
  )
}

function countLevels(levels: EvidenceLevel[]) {
  const c: Partial<Record<EvidenceLevel, number>> = {}
  for (const l of levels) c[l] = (c[l] ?? 0) + 1
  return c
}

function GenotypePhenotype({ d }: { d: Disease }) {
  const rows = d.genotypePhenotype
  return (
    <Section id="genotype-phenotype" n={6} title="Genotype–phenotype relationships" aside={<StackBar counts={countLevels(rows.map((r) => r.ev))} total={rows.length} />}>
      <div className="table-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Finding</th>
              <th>Evidence</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td className="nowrap">{r.aspect}</td>
                <td><Clamp lines={3}>{r.finding}</Clamp></td>
                <td>
                  <EvidenceBadge level={r.ev} why={r.why} src={r.src} title={`${r.aspect}: ${r.finding}`} />
                </td>
                <td>
                  <Cites src={r.src} title={r.aspect} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}

function Spatial({ d }: { d: Disease }) {
  const nodes: GNode[] = []
  const edges: GEdge[] = []
  const gid = `g:${d.genes[0]}`
  nodes.push({ id: gid, label: d.genes.length > 1 ? `${d.genes[0]} +${d.genes.length - 1}` : d.genes[0], col: 0, kind: 'gene' })
  for (const c of d.cells) {
    nodes.push({ id: `c:${c.cell}`, label: c.cell, col: 1, kind: 'cell' })
    edges.push({ from: gid, to: `c:${c.cell}`, ev: c.ev, label: `${c.role}: ${c.detail}` })
  }
  nodes.push({ id: 'p', label: d.short + ' phenotype', col: 2, kind: 'phenotype', color: d.color })
  for (const c of d.cells.filter((c) => c.role === 'primary')) edges.push({ from: `c:${c.cell}`, to: 'p', ev: c.ev, label: `${c.cell} → ${d.short}` })
  for (const r of d.regions) {
    nodes.push({ id: `r:${r.region}`, label: r.region, col: 3, kind: 'region' })
    edges.push({ from: 'p', to: `r:${r.region}`, label: r.finding })
  }

  return (
    <Section id="spatial" n={8} title="Brain, cellular & spatial biology">
      <div className="card pad">
        <NetworkGraph nodes={nodes} edges={edges} columns={['Gene', 'Affected cell type', 'Phenotype', 'Brain region involved']} />
      </div>
      <div className="two">
        <div>
          <h3 className="sub">Affected cell types</h3>
          <ul className="cells">
            {d.cells.map((c) => (
              <li key={c.cell}>
                <div className="cells-head">
                  <b>{c.cell}</b>
                  <span className={`role role-${c.role}`}>{c.role}</span>
                  <EvidenceBadge level={c.ev} src={c.src} title={`${c.cell} in ${d.short}`} compact />
                  <Cites src={c.src} title={c.cell} />
                </div>
                <Clamp lines={2}><p>{c.detail}</p></Clamp>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="sub">Brain regions</h3>
          <ul className="cells">
            {d.regions.map((r) => (
              <li key={r.region}>
                <div className="cells-head">
                  <b>{r.region}</b>
                  <Cites src={r.src} title={r.region} />
                </div>
                <Clamp lines={2}><p>{r.finding}</p></Clamp>
              </li>
            ))}
          </ul>
          <h3 className="sub">Expression resources</h3>
          <div className="ext-links">
            {d.genes.map((g) => (
              <a key={g} href={`https://www.proteinatlas.org/search/${g}`} target="_blank" rel="noreferrer">
                {g} · Human Protein Atlas ↗
              </a>
            ))}
            <a href="https://portal.brain-map.org/" target="_blank" rel="noreferrer">
              Allen Brain Map ↗
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Biomarkers({ d }: { d: Disease }) {
  const groups = [
    ['Established / clinical', d.biomarkers.filter((b) => b.status !== 'Experimental')],
    ['Experimental / emerging', d.biomarkers.filter((b) => b.status === 'Experimental')],
  ] as const
  return (
    <Section id="biomarkers" n={9} title="Biomarkers">
      {groups.map(([label, list]) =>
        list.length ? (
          <div key={label}>
            <h3 className="sub">{label}</h3>
            <div className="table-wrap">
              <table className="tbl">
                <thead>
                  <tr>
                    <th>Biomarker</th>
                    <th>Biological significance</th>
                    <th>Sample · assay</th>
                    <th>Purpose</th>
                    <th>Clinical status</th>
                    <th>Limitations</th>
                    <th>Evidence</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((b) => (
                    <tr key={b.name}>
                      <td>
                        <b>{b.name}</b>
                        <div className="muted">{b.category}</div>
                      </td>
                      <td className="wide"><Clamp lines={3}>{b.significance}</Clamp></td>
                      <td>
                        {b.sample}
                        <div className="muted">{b.assay}</div>
                      </td>
                      <td>{b.purpose.map((p) => <span key={p} className="pill">{p}</span>)}</td>
                      <td>
                        <span className={`status st-${b.status.split(' ')[0].toLowerCase()}`}>{b.status}</span>
                      </td>
                      <td className="muted wide"><Clamp lines={3}>{b.limitations}</Clamp></td>
                      <td className="nowrap">
                        <EvidenceBadge level={b.ev} src={b.src} title={b.name} compact /> <Cites src={b.src} title={b.name} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null,
      )}
    </Section>
  )
}

function Diagnosis({ d }: { d: Disease }) {
  const phases: DxPhase[] = ['Suspicion', 'Investigation', 'Confirmation']
  return (
    <Section id="diagnosis" n={10} title="Diagnosis & testing">
      <div className="dx">
        {phases.map((p, i) => (
          <div key={p} className="dx-col">
            <div className="dx-phase">
              <span>{i + 1}</span>
              {p}
            </div>
            {d.diagnosis
              .filter((s) => s.phase === p)
              .map((s, j) => (
                <div key={j} className="dx-card">
                  <div className="dx-cat">{s.category}</div>
                  <b>{s.method}</b>
                  <Clamp lines={3}><p>{s.detail}</p></Clamp>
                  <Cites src={s.src} title={s.method} />
                </div>
              ))}
          </div>
        ))}
      </div>
      <h3 className="sub">Differential diagnosis</h3>
      <ul className="pills">
        {d.differential.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </Section>
  )
}

function Phenotypes({ d }: { d: Disease }) {
  const { applicable, note, forms } = d.phenotypes
  return (
    <Section id="phenotypes" n={11} title="Typical vs atypical phenotype">
      <p className={applicable ? 'muted sm' : 'note'}>{note}</p>
      {applicable && (
        <div className="table-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Presentation</th>
                <th>Age of onset</th>
                <th>Severity</th>
                <th>Progression</th>
                <th>Genetic differences</th>
                <th>Biomarkers / imaging</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {forms.map((f) => (
                <tr key={f.name}>
                  <td><b>{f.name}</b></td>
                  <td>{f.onset}</td>
                  <td>{f.severity}</td>
                  <td><Clamp lines={3}>{f.progression}</Clamp></td>
                  <td><Clamp lines={3}>{f.genetics}</Clamp></td>
                  <td><Clamp lines={3}>{f.markers}</Clamp></td>
                  <td><Cites src={f.src} title={f.name} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Section>
  )
}

function Management({ d }: { d: Disease }) {
  const cats: MgmtItem['category'][] = ['Established disease-modifying', 'Symptomatic', 'Supportive', 'Monitoring']
  return (
    <Section id="management" n={12} title="Current management">
      <p className="muted sm">
        Management (symptomatic, supportive, monitoring) is shown separately from disease-modifying interventions. Investigational therapies are in section 13.
      </p>
      <div className="mgmt">
        {cats.map((c) => {
          const items = d.management.filter((m) => m.category === c)
          return (
            <div key={c} className={`mgmt-col${c.startsWith('Established') ? ' dm' : ''}`}>
              <h4>{c}</h4>
              {items.length ? (
                items.map((m, i) => (
                  <p key={i}>
                    {m.text} <Cites src={m.src} title={c} />
                  </p>
                ))
              ) : (
                <p className="muted">None established.</p>
              )}
            </div>
          )
        })}
      </div>
    </Section>
  )
}

function Therapeutics({ d }: { d: Disease }) {
  return (
    <Section id="therapeutics" n={13} title="Therapeutic development" aside={<Link to={`/therapeutics?d=${d.id}`}>Cross-disease view →</Link>}>
      <div className="table-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th>Approach</th>
              <th>Target · mechanism</th>
              <th>Delivery</th>
              <th>Stage</th>
              <th>Evidence base</th>
              <th>Current status</th>
              <th>Evidence</th>
            </tr>
          </thead>
          <tbody>
            {d.therapies.map((t) => (
              <tr key={t.id}>
                <td>
                  <b>{t.name}</b>
                  <div className="muted">{t.modality}</div>
                </td>
                <td>
                  <span className="mono">{t.target}</span>
                  <Clamp lines={2} className="muted">{t.mechanism}</Clamp>
                </td>
                <td>{t.delivery}</td>
                <td className="nowrap">{t.stage}</td>
                <td>
                  <span className={`base base-${t.evidenceBase.startsWith('Human') ? 'human' : 'model'}`}>{t.evidenceBase}</span>
                </td>
                <td className="wide"><Clamp lines={3}>{t.status}</Clamp></td>
                <td className="nowrap">
                  <EvidenceBadge level={t.ev} why={t.why} src={t.src} title={t.name} compact /> <Cites src={t.src} title={t.name} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}

export function TrialTable({ trials, showDisease }: { trials: (Disease['trials'][number] & { diseaseId?: string })[]; showDisease?: boolean }) {
  if (!trials.length) return <Empty>No registered interventional trials curated for this selection.</Empty>
  return (
    <div className="table-wrap">
      <table className="tbl">
        <thead>
          <tr>
            <th>Trial</th>
            {showDisease && <th>Disease</th>}
            <th>Intervention · mechanism</th>
            <th>Phase</th>
            <th>Status</th>
            <th>Sponsor</th>
            <th>Population</th>
            <th>Main outcomes</th>
            <th>Snapshot</th>
          </tr>
        </thead>
        <tbody>
          {trials.map((t) => (
            <tr key={t.nct}>
              <td>
                <a className="mono" href={`https://clinicaltrials.gov/study/${t.nct}`} target="_blank" rel="noreferrer">
                  {t.nct} ↗
                </a>
                <div className="muted">{t.title}</div>
              </td>
              {showDisease && <td>{t.diseaseId && <DiseaseChip id={t.diseaseId} />}</td>}
              <td>
                <b>{t.intervention}</b>
                <Clamp lines={2} className="muted">{t.mechanism}</Clamp>
              </td>
              <td className="nowrap">{t.phase}</td>
              <td>
                <span className={`tstatus ts-${t.status.split(/[ ,(]/)[0].toLowerCase()}`}>{t.status}</span>
              </td>
              <td>{t.sponsor}</td>
              <td><Clamp lines={3}>{t.population}</Clamp></td>
              <td className="wide"><Clamp lines={3}>{t.outcomes}</Clamp></td>
              <td className="nowrap">
                <span className="mono">{t.snapshot}</span>
                <div className={t.verified ? 'verified' : 'unverified'}>{t.verified ? 'Verified' : 'Unverified'}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Trials({ d }: { d: Disease }) {
  return (
    <Section id="trials" n={14} title="Clinical trials">
      <TrialTable trials={d.trials} />
    </Section>
  )
}
