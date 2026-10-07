import { alexander } from './diseases/alexander'
import { canavan } from './diseases/canavan'
import { krabbe } from './diseases/krabbe'
import { mld } from './diseases/mld'
import { pmd } from './diseases/pmd'
import { polr3 } from './diseases/polr3'
import { vwm } from './diseases/vwm'
import { xald } from './diseases/xald'
import { EXTRA_DISEASES } from './diseases/extra'
import { GENES } from './genes'
import { ctgov, registerSource, SOURCES } from './sources'
import type { Disease, EvidenceLevel, NodeType } from './types'

export const DISEASES: Disease[] = [canavan, krabbe, mld, xald, pmd, vwm, alexander, polr3, ...EXTRA_DISEASES]
export const DISEASE_BY_ID: Record<string, Disease> = Object.fromEntries(DISEASES.map((d) => [d.id, d]))

/** All source ids referenced (via `src` arrays) anywhere inside a value. */
function srcIdsOf(v: unknown, into = new Set<string>()): Set<string> {
  if (Array.isArray(v)) v.forEach((x) => srcIdsOf(x, into))
  else if (v && typeof v === 'object')
    for (const [k, val] of Object.entries(v)) {
      if (k === 'src' && Array.isArray(val)) val.forEach((s) => into.add(s as string))
      else srcIdsOf(val, into)
    }
  return into
}

// Register a ClinicalTrials.gov source for every trial id referenced anywhere.
const allSrcIds = srcIdsOf(GENES, srcIdsOf(DISEASES))
for (const d of DISEASES) for (const t of d.trials) allSrcIds.add(`ct:${t.nct}`)
for (const id of allSrcIds) {
  if (id.startsWith('ct:') && !SOURCES[id]) registerSource(ctgov(id.slice(3)))
}
if (import.meta.env.DEV) {
  const missing = [...allSrcIds].filter((id) => !SOURCES[id])
  if (missing.length) console.warn('[GeneMap] unresolved source ids:', missing)
}

/** Which records cite a given source — powers "cited by" in the source library. */
export const SOURCE_USAGE: Record<string, Set<string>> = {}
for (const d of DISEASES) {
  const ids = srcIdsOf(d)
  for (const t of d.trials) ids.add(`ct:${t.nct}`)
  for (const id of ids) (SOURCE_USAGE[id] ??= new Set()).add(d.id)
}

export const withDisease = <T>(pick: (d: Disease) => T[]) =>
  DISEASES.flatMap((d) => pick(d).map((x) => ({ ...x, diseaseId: d.id })))

export const ALL_VARIANTS = DISEASES.flatMap((d) => d.variants)
export const ALL_THERAPIES = withDisease((d) => d.therapies)
export const ALL_TRIALS = withDisease((d) => d.trials)
export const ALL_BIOMARKERS = withDisease((d) => d.biomarkers)
export const ALL_RELATIONS = withDisease((d) => d.relations)

// ── Evidence items: every graded statement in the atlas ────────────────
export interface EvidenceItem {
  diseaseId: string
  kind: 'Relationship' | 'Genotype–phenotype' | 'Mechanism' | 'Biomarker' | 'Therapy' | 'Variant' | 'Disease claim' | 'Research gap'
  title: string
  detail?: string
  ev: EvidenceLevel
  why?: string
  src: string[]
  section: string
}

export const EVIDENCE_ITEMS: EvidenceItem[] = DISEASES.flatMap((d) => {
  const items: EvidenceItem[] = []
  for (const r of d.relations)
    items.push({ diseaseId: d.id, kind: 'Relationship', title: `${r.from[1]} → ${r.label} → ${r.to[1]}`, ev: r.ev, why: r.why, src: r.src, section: 'mechanism' })
  for (const g of d.genotypePhenotype)
    items.push({ diseaseId: d.id, kind: 'Genotype–phenotype', title: g.finding, detail: g.aspect, ev: g.ev, why: g.why, src: g.src, section: 'genotype-phenotype' })
  for (const m of d.mechanism)
    items.push({ diseaseId: d.id, kind: 'Mechanism', title: `${m.stage}: ${m.label}`, detail: m.detail, ev: m.ev, src: m.src, section: 'mechanism' })
  for (const b of d.biomarkers)
    items.push({ diseaseId: d.id, kind: 'Biomarker', title: b.name, detail: b.significance, ev: b.ev, src: b.src, section: 'biomarkers' })
  for (const t of d.therapies)
    items.push({ diseaseId: d.id, kind: 'Therapy', title: t.name, detail: t.mechanism, ev: t.ev, why: t.why, src: t.src, section: 'therapeutics' })
  for (const v of d.variants)
    items.push({ diseaseId: d.id, kind: 'Variant', title: `${v.gene} ${v.hgvsp ?? v.hgvsc}`, detail: v.phenotype, ev: v.ev, why: v.why, src: v.src, section: 'variants' })
  for (const c of [...d.identity, ...d.clinical, ...d.epidemiology])
    if (c.ev) items.push({ diseaseId: d.id, kind: 'Disease claim', title: c.text, detail: c.label, ev: c.ev, why: c.why, src: c.src ?? [], section: 'identity' })
  for (const c of d.gaps)
    items.push({ diseaseId: d.id, kind: 'Research gap', title: c.text, ev: c.ev ?? 'unknown', why: c.why, src: c.src ?? [], section: 'gaps' })
  return items
})

// ── Search index ──────────────────────────────────────────────────────
export type SearchType = 'Disease' | 'Gene' | 'Protein' | 'Variant' | 'Biomarker' | 'Therapy' | 'Clinical trial' | 'Pathway' | 'Cell type'

export interface SearchEntry {
  type: SearchType
  label: string
  sub: string
  route: string
  text: string
}

const entries: SearchEntry[] = []
const add = (e: Omit<SearchEntry, 'text'>, extra: string[] = []) =>
  entries.push({ ...e, text: [e.label, e.sub, ...extra].join(' ').toLowerCase() })

for (const d of DISEASES) {
  add({ type: 'Disease', label: d.name, sub: `${d.inheritance} · ${d.genes.join(', ')}`, route: `/disease/${d.id}` }, [d.short, ...d.synonyms, d.classification])
  for (const v of d.variants)
    add({ type: 'Variant', label: `${v.gene} ${v.hgvsc}${v.hgvsp ? ' ' + v.hgvsp : ''}`, sub: `${d.short} · ${v.type} · ${v.phenotype}`, route: `/variants?id=${v.id}` }, [v.legacy ?? '', v.clinvar])
  for (const b of d.biomarkers)
    add({ type: 'Biomarker', label: b.name, sub: `${d.short} · ${b.category} · ${b.status}`, route: `/disease/${d.id}?s=biomarkers` }, [b.sample, b.assay])
  for (const t of d.therapies)
    add({ type: 'Therapy', label: t.name, sub: `${d.short} · ${t.modality} · ${t.stage}`, route: `/therapeutics?d=${d.id}` }, [t.target, t.mechanism])
  for (const t of d.trials)
    add({ type: 'Clinical trial', label: `${t.nct} — ${t.intervention}`, sub: `${d.short} · ${t.phase} · ${t.status}`, route: `/therapeutics?d=${d.id}&tab=trials` }, [t.title, t.sponsor])
  for (const m of d.mechanism)
    if (m.stage === 'Pathway')
      add({ type: 'Pathway', label: m.label, sub: `${d.short} · molecular mechanism`, route: `/disease/${d.id}?s=mechanism` }, [m.detail])
}
for (const g of GENES) {
  add({ type: 'Gene', label: g.symbol, sub: `${g.name} · ${g.location}`, route: `/gene/${g.symbol}` }, [g.pathway, g.function])
  add({ type: 'Protein', label: g.protein, sub: `encoded by ${g.symbol}`, route: `/gene/${g.symbol}` }, [g.uniprot ?? ''])
  add({ type: 'Pathway', label: g.pathway, sub: `${g.symbol}`, route: `/gene/${g.symbol}` })
}
const cellsSeen = new Set<string>()
for (const d of DISEASES) for (const c of d.cells) cellsSeen.add(c.cell)
for (const c of cellsSeen) add({ type: 'Cell type', label: c, sub: 'Cross-disease cell-type comparison', route: `/compare?v=cells` })

export const SEARCH_INDEX = entries

export function search(q: string): SearchEntry[] {
  const terms = q.toLowerCase().trim().split(/\s+/).filter(Boolean)
  if (!terms.length) return []
  // Match at word starts so "aspa" finds ASPA but not "tetraspan".
  const res = terms.map((t) => new RegExp(`(^|[^a-z0-9])${t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`))
  const seen = new Set<string>()
  return entries
    .filter((e) => res.every((r) => r.test(e.text)))
    .map((e) => {
      const l = e.label.toLowerCase()
      const t0 = terms[0]
      const score = l === q.toLowerCase() ? 0 : l.startsWith(t0) ? 1 : l.includes(t0) ? 2 : 3
      return { e, score }
    })
    .sort((a, b) => a.score - b.score)
    .map((x) => x.e)
    .filter((e) => {
      const k = e.type + e.label + e.route
      if (seen.has(k)) return false
      seen.add(k)
      return true
    })
}

/** Everything connected to a gene symbol, for the gene hub page. */
export function geneHub(symbol: string) {
  const diseases = DISEASES.filter(
    (d) => d.genes.includes(symbol) || d.relations.some((r) => r.from[1] === symbol || r.to[1] === symbol),
  )
  return {
    diseases,
    variants: ALL_VARIANTS.filter((v) => v.gene === symbol),
    relations: ALL_RELATIONS.filter((r) => r.from[1] === symbol || r.to[1] === symbol),
    therapies: ALL_THERAPIES.filter((t) => t.target.includes(symbol)),
    trials: ALL_TRIALS.filter((t) => {
      const th = ALL_THERAPIES.find((x) => x.id === t.therapyId)
      return th?.target.includes(symbol)
    }),
    biomarkers: ALL_BIOMARKERS.filter((b) => diseases.some((d) => d.id === b.diseaseId && d.genes.includes(symbol))),
  }
}

export const NODE_TYPE_LABEL: Record<NodeType, string> = {
  gene: 'Gene',
  protein: 'Protein',
  metabolite: 'Metabolite',
  pathway: 'Pathway',
  cell: 'Cell type',
  region: 'Brain region',
  phenotype: 'Phenotype',
  biomarker: 'Biomarker',
  therapy: 'Therapy',
  disease: 'Disease',
}

export { GENES, GENE_BY_SYMBOL } from './genes'
export { SOURCES } from './sources'
export { EVIDENCE, EVIDENCE_BY_LEVEL } from './evidence'
