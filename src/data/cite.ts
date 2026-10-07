import type { Source, SourceKind } from './types'

// Citation helpers shared by sources.ts and the per-disease modules.

export const pubmed = (title: string) =>
  `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(title)}`

export const lit = (
  id: string,
  authors: string,
  year: number,
  title: string,
  venue: string,
  kind: SourceKind = 'primary',
): Source => ({ id, authors, year, title, venue, kind, url: pubmed(title) })

/** A primary/review paper pinned by PMID. */
export const pmid = (
  id: string,
  pm: string,
  authors: string,
  year: number,
  title: string,
  venue: string,
  kind: SourceKind = 'primary',
): Source => ({ id, authors, year, title, venue, kind, url: `https://pubmed.ncbi.nlm.nih.gov/${pm}/` })

export const genereviews = (d: string, nbk: string, title: string): Source => ({
  id: `gr:${d}`,
  title: `GeneReviews®: ${title}`,
  venue: 'NCBI Bookshelf / GeneReviews',
  kind: 'review',
  url: `https://www.ncbi.nlm.nih.gov/books/${nbk}/`,
})

export const omim = (mim: string, title: string): Source => ({
  id: `omim:${mim}`,
  title: `OMIM ${mim.startsWith('PS') ? '' : '#'}${mim}: ${title}`,
  venue: 'OMIM',
  kind: 'database',
  url: mim.startsWith('PS') ? `https://www.omim.org/phenotypicSeries/${mim}` : `https://www.omim.org/entry/${mim}`,
})

export const orpha = (code: string, title: string): Source => ({
  id: `orpha:${code}`,
  title: `Orphanet ORPHA:${code}: ${title}`,
  venue: 'Orphanet',
  kind: 'database',
  url: `https://www.orpha.net/en/disease/detail/${code}`,
})

export const nord = (d: string, slug: string, title: string): Source => ({
  id: `nord:${d}`,
  title: `NORD Rare Disease Database: ${title}`,
  venue: 'National Organization for Rare Disorders',
  kind: 'patient-org',
  url: `https://rarediseases.org/rare-diseases/${slug}/`,
})

export const query = (id: string, title: string, terms: string): Source => ({
  id,
  title: `Literature query: ${title}`,
  venue: 'PubMed (curated query)',
  kind: 'query',
  url: pubmed(terms),
})

/** Standard database source ids generated for every gene in the atlas. */
export const geneDb = (g: string) => [`db:ncbi:${g}`, `db:uniprot:${g}`, `db:hgnc:${g}`]
