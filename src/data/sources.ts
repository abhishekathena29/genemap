import type { Source, SourceKind } from './types'
import { lit, pubmed } from './cite'
import { EXTRA_GENE_SYMBOLS, EXTRA_SOURCES } from './diseases/extra'

const SOURCES_LIST: Source[] = [
  // ── Reference resources: disease level ──────────────────────────────
  ...(
    [
      ['canavan', 'NBK1234', 'Canavan Disease'],
      ['krabbe', 'NBK1238', 'Krabbe Disease'],
      ['mld', 'NBK1130', 'Arylsulfatase A Deficiency (Metachromatic Leukodystrophy)'],
      ['xald', 'NBK1315', 'X-Linked Adrenoleukodystrophy'],
      ['pmd', 'NBK1182', 'PLP1 Disorders'],
      ['vwm', 'NBK1258', 'Childhood Ataxia with Central Nervous System Hypomyelination / Vanishing White Matter'],
      ['alexander', 'NBK1172', 'Alexander Disease'],
      ['polr3', 'NBK99167', 'POLR3-Related Leukodystrophy'],
    ] as const
  ).map(
    ([d, nbk, title]): Source => ({
      id: `gr:${d}`,
      title: `GeneReviews®: ${title}`,
      venue: 'NCBI Bookshelf / GeneReviews',
      kind: 'review',
      url: `https://www.ncbi.nlm.nih.gov/books/${nbk}/`,
    }),
  ),
  ...(
    [
      ['271900', 'Canavan disease'],
      ['245200', 'Krabbe disease'],
      ['250100', 'Metachromatic leukodystrophy'],
      ['300100', 'Adrenoleukodystrophy'],
      ['312080', 'Pelizaeus-Merzbacher disease'],
      ['PS603896', 'Leukoencephalopathy with vanishing white matter (phenotypic series)'],
      ['203450', 'Alexander disease'],
      ['607694', 'Leukodystrophy, hypomyelinating, 7, with or without oligodontia and/or hypogonadotropic hypogonadism (POLR3A)'],
      ['614381', 'Leukodystrophy, hypomyelinating, 8, with or without oligodontia and/or hypogonadotropic hypogonadism (POLR3B)'],
    ] as const
  ).map(
    ([mim, title]): Source => ({
      id: `omim:${mim}`,
      title: `OMIM ${mim.startsWith('PS') ? '' : '#'}${mim}: ${title}`,
      venue: 'OMIM',
      kind: 'database',
      url: mim.startsWith('PS')
        ? `https://www.omim.org/phenotypicSeries/${mim}`
        : `https://www.omim.org/entry/${mim}`,
    }),
  ),
  ...(
    [
      ['141', 'Canavan disease'],
      ['487', 'Krabbe disease'],
      ['512', 'Metachromatic leukodystrophy'],
      ['43', 'X-linked adrenoleukodystrophy'],
      ['280', 'Pelizaeus-Merzbacher disease'],
      ['135', 'Leukoencephalopathy with vanishing white matter'],
      ['58', 'Alexander disease'],
      ['289494', '4H leukodystrophy (POLR3-related)'],
    ] as const
  ).map(
    ([code, title]): Source => ({
      id: `orpha:${code}`,
      title: `Orphanet ORPHA:${code}: ${title}`,
      venue: 'Orphanet',
      kind: 'database',
      url: `https://www.orpha.net/en/disease/detail/${code}`,
    }),
  ),
  ...(
    [
      ['canavan', 'canavan-disease', 'Canavan Disease'],
      ['krabbe', 'leukodystrophy-krabbes', 'Krabbe Disease'],
      ['mld', 'metachromatic-leukodystrophy', 'Metachromatic Leukodystrophy'],
      ['xald', 'adrenoleukodystrophy', 'Adrenoleukodystrophy'],
      ['pmd', 'pelizaeus-merzbacher-disease', 'Pelizaeus-Merzbacher Disease'],
      ['vwm', 'vanishing-white-matter-disease', 'Vanishing White Matter Disease'],
      ['alexander', 'alexander-disease', 'Alexander Disease'],
      ['polr3', '4h-leukodystrophy', '4H Leukodystrophy'],
    ] as const
  ).map(
    ([d, slug, title]): Source => ({
      id: `nord:${d}`,
      title: `NORD Rare Disease Database: ${title}`,
      venue: 'National Organization for Rare Disorders',
      kind: 'patient-org',
      url: `https://rarediseases.org/rare-diseases/${slug}/`,
    }),
  ),

  // ── Regulatory ──────────────────────────────────────────────────────
  {
    id: 'ema:libmeldy',
    title: 'Libmeldy (atidarsagene autotemcel): European public assessment report',
    venue: 'European Medicines Agency',
    year: 2020,
    kind: 'regulatory',
    url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/libmeldy',
  },
  {
    id: 'fda:lenmeldy',
    title: 'Lenmeldy (atidarsagene autotemcel): FDA approval information',
    venue: 'U.S. Food and Drug Administration',
    year: 2024,
    kind: 'regulatory',
    url: 'https://www.fda.gov/vaccines-blood-biologics/lenmeldy',
  },
  {
    id: 'fda:skysona',
    title: 'Skysona (elivaldogene autotemcel): FDA approval information',
    venue: 'U.S. Food and Drug Administration',
    year: 2022,
    kind: 'regulatory',
    url: 'https://www.fda.gov/vaccines-blood-biologics/skysona',
  },
  {
    id: 'hrsa:rusp',
    title: 'Recommended Uniform Screening Panel (RUSP)',
    venue: 'HRSA Advisory Committee on Heritable Disorders in Newborns and Children',
    kind: 'guideline',
    url: 'https://www.hrsa.gov/advisory-committees/heritable-disorders/rusp',
  },

  // ── Canavan ─────────────────────────────────────────────────────────
  lit('lit:kaul1993', 'Kaul R, Gao GP, Balamurugan K, Matalon R', 1993,
    'Cloning of the human aspartoacylase cDNA and a common missense mutation in Canavan disease', 'Nat Genet'),
  lit('lit:matalon1988', 'Matalon R, Michals K, Sebesta D, et al.', 1988,
    'Aspartoacylase deficiency and N-acetylaspartic aciduria in patients with Canavan disease', 'Am J Med Genet'),
  lit('lit:moffett2007', 'Moffett JR, Ross B, Arun P, Madhavarao CN, Namboodiri AM', 2007,
    'N-Acetylaspartate in the CNS: from neurodiagnostics to neurobiology', 'Prog Neurobiol', 'review'),
  lit('lit:guo2015', 'Guo F, Bannerman P, Mills Ko E, et al.', 2015,
    'Ablating N-acetylaspartate prevents leukodystrophy in a Canavan disease model', 'Ann Neurol'),
  lit('lit:maier2015', 'Maier H, Wang-Eckhardt L, Hartmann D, et al.', 2015,
    'N-Acetylaspartate synthase deficiency corrects the myelin phenotype in a Canavan disease mouse model but does not affect survival time', 'J Neurosci'),
  lit('lit:gessler2017', 'Gessler DJ, Li D, Xu H, et al.', 2017,
    'Redirecting N-acetylaspartate metabolism in the central nervous system normalizes myelination and rescues Canavan disease', 'JCI Insight'),
  {
    id: 'q:slc13a3-naa',
    title: 'Literature query: SLC13A3 (NaDC3) and N-acetylaspartate transport in Canavan disease',
    venue: 'PubMed (curated query — pin primary papers from dossier)',
    kind: 'query',
    url: pubmed('SLC13A3 N-acetylaspartate Canavan'),
  },

  // ── Krabbe ──────────────────────────────────────────────────────────
  lit('lit:suzuki1998', 'Suzuki K', 1998,
    "Twenty five years of the 'psychosine hypothesis': a personal perspective of its history and present status", 'Neurochem Res', 'review'),
  lit('lit:escolar2005', 'Escolar ML, Poe MD, Provenzale JM, et al.', 2005,
    "Transplantation of umbilical-cord blood in babies with infantile Krabbe's disease", 'N Engl J Med'),
  lit('lit:wenger2016', 'Wenger DA, Rafi MA, Luzi P', 2016,
    'Krabbe disease: One Hundred years from the bedside to the bench to the bedside', 'J Neurosci Res', 'review'),
  lit('lit:rafi1995', 'Rafi MA, Luzi P, Chen YQ, Wenger DA', 1995,
    'A large deletion together with a point mutation in the GALC gene is a common mutant allele in patients with infantile Krabbe disease', 'Hum Mol Genet'),
  lit('lit:orsini2016', 'Orsini JJ, Kay DM, Saavedra-Matiz CA, et al.', 2016,
    'Newborn screening for Krabbe disease in New York State: the first eight years\' experience', 'Genet Med'),
  lit('lit:escolar2017', 'Escolar ML, Kiely BT, Shawgo E, et al.', 2017,
    'Psychosine, a marker of Krabbe phenotype and treatment effect', 'Mol Genet Metab'),

  // ── MLD ─────────────────────────────────────────────────────────────
  lit('lit:biffi2013', 'Biffi A, Montini E, Lorioli L, et al.', 2013,
    'Lentiviral hematopoietic stem cell gene therapy benefits metachromatic leukodystrophy', 'Science'),
  lit('lit:fumagalli2022', 'Fumagalli F, Calbi V, Natali Sora MG, et al.', 2022,
    'Lentiviral haematopoietic stem-cell gene therapy for early-onset metachromatic leukodystrophy: long-term results from a non-randomised, open-label, phase 1/2 trial and expanded access', 'Lancet'),
  lit('lit:gieselmann2010', 'Gieselmann V, Krägeloh-Mann I', 2010,
    'Metachromatic leukodystrophy--an update', 'Neuropediatrics', 'review'),
  lit('lit:polten1991', 'Polten A, Fluharty AL, Fluharty CB, et al.', 1991,
    'Molecular basis of different forms of metachromatic leukodystrophy', 'N Engl J Med'),
  lit('lit:kehrer2011', 'Kehrer C, Blumenstock G, Gieselmann V, Krägeloh-Mann I', 2011,
    'The natural course of gross motor deterioration in metachromatic leukodystrophy', 'Dev Med Child Neurol'),

  // ── X-ALD ───────────────────────────────────────────────────────────
  lit('lit:mosser1993', 'Mosser J, Douar AM, Sarde CO, et al.', 1993,
    'Putative X-linked adrenoleukodystrophy gene shares unexpected homology with ABC transporters', 'Nature'),
  lit('lit:engelen2012', 'Engelen M, Kemp S, de Visser M, et al.', 2012,
    'X-linked adrenoleukodystrophy (X-ALD): clinical presentation and guidelines for diagnosis, follow-up and management', 'Orphanet J Rare Dis', 'guideline'),
  lit('lit:eichler2017', 'Eichler F, Duncan C, Musolino PL, et al.', 2017,
    'Hematopoietic stem-cell gene therapy for cerebral adrenoleukodystrophy', 'N Engl J Med'),
  lit('lit:moser2005', 'Moser HW, Raymond GV, Lu SE, et al.', 2005,
    "Follow-up of 89 asymptomatic patients with adrenoleukodystrophy treated with Lorenzo's oil", 'Arch Neurol'),
  lit('lit:kohler2023', 'Köhler W, Engelen M, Eichler F, et al.', 2023,
    'Safety and efficacy of leriglitazone for preventing disease progression in men with adrenomyeloneuropathy (ADVANCE): a randomised, double-blind, multi-centre, placebo-controlled phase 2-3 trial', 'Lancet Neurol'),
  lit('lit:loes1994', 'Loes DJ, Hite S, Moser H, et al.', 1994,
    'Adrenoleukodystrophy: a scoring method for brain MR observations', 'AJNR Am J Neuroradiol'),
  lit('lit:kemper2017', 'Kemper AR, Brosco J, Comeau AM, et al.', 2017,
    'Newborn screening for X-linked adrenoleukodystrophy: evidence summary and advisory committee recommendation', 'Genet Med', 'guideline'),
  lit('lit:huffnagel2019', 'Huffnagel IC, Dijkgraaf MGW, Janssens GE, et al.', 2019,
    'Disease progression in women with X-linked adrenoleukodystrophy is slow', 'Orphanet J Rare Dis'),
  lit('lit:weinhofer2021', 'Weinhofer I, Rommer P, Zierfuss B, et al.', 2021,
    'Neurofilament light chain as a potential biomarker for monitoring neurodegeneration in X-linked adrenoleukodystrophy', 'Nat Commun'),

  // ── PMD ─────────────────────────────────────────────────────────────
  lit('lit:inoue2005', 'Inoue K', 2005,
    'PLP1-related inherited dysmyelinating disorders: Pelizaeus-Merzbacher disease and spastic paraplegia type 2', 'Neurogenetics', 'review'),
  lit('lit:woodward2008', 'Woodward KJ', 2008,
    'The molecular and cellular defects underlying Pelizaeus-Merzbacher disease', 'Expert Rev Mol Med', 'review'),
  lit('lit:elitt2020', 'Elitt MS, Barbar L, Shick HE, et al.', 2020,
    'Suppression of proteolipid protein rescues Pelizaeus-Merzbacher disease', 'Nature'),
  lit('lit:garbern2002', 'Garbern JY, Yool DA, Moore GJ, et al.', 2002,
    'Patients lacking the major CNS myelin protein, proteolipid protein 1, develop length-dependent axonal degeneration in the absence of demyelination and inflammation', 'Brain'),
  lit('lit:nevin2017', 'Nevin ZS, Factor DC, Karl RT, et al.', 2017,
    "Modeling the mutational and phenotypic landscapes of Pelizaeus-Merzbacher disease with human iPSC-derived oligodendrocytes", 'Am J Hum Genet'),
  lit('lit:gupta2012', 'Gupta N, Henry RG, Strober J, et al.', 2012,
    'Neural stem cell engraftment and myelination in the human brain', 'Sci Transl Med'),

  // ── VWM ─────────────────────────────────────────────────────────────
  lit('lit:leegwater2001', 'Leegwater PA, Vermeulen G, Könst AA, et al.', 2001,
    'Subunits of the translation initiation factor eIF2B are mutant in leukoencephalopathy with vanishing white matter', 'Nat Genet'),
  lit('lit:vdknaap2006', 'van der Knaap MS, Pronk JC, Scheper GC', 2006,
    'Vanishing white matter disease', 'Lancet Neurol', 'review'),
  lit('lit:wong2019', 'Wong YL, LeBon L, Basso AM, et al.', 2019,
    'eIF2B activator prevents neurological defects caused by a chronic integrated stress response', 'eLife'),
  lit('lit:abbink2019', 'Abbink TEM, Wisse LE, Jaku E, et al.', 2019,
    'Vanishing white matter: deregulated integrated stress response as therapy target', 'Ann Clin Transl Neurol'),
  lit('lit:dooves2016', 'Dooves S, Bugiani M, Postma NL, et al.', 2016,
    'Astrocytes are central in the pathomechanisms of vanishing white matter', 'J Clin Invest'),
  lit('lit:hamilton2018', 'Hamilton EMC, van der Lei HDW, Vermeulen G, et al.', 2018,
    'Natural history of vanishing white matter', 'Ann Neurol'),
  lit('lit:fogli2004', 'Fogli A, Rodriguez D, Eymard-Pierre E, et al.', 2004,
    'Ovarian failure related to eukaryotic initiation factor 2B mutations', 'Am J Hum Genet'),
  lit('lit:fogli2002', 'Fogli A, Wong K, Eymard-Pierre E, et al.', 2002,
    'Cree leukoencephalopathy and CACH/VWM disease are allelic at the EIF2B5 locus', 'Ann Neurol'),

  // ── Alexander ───────────────────────────────────────────────────────
  lit('lit:brenner2001', 'Brenner M, Johnson AB, Boespflug-Tanguy O, et al.', 2001,
    'Mutations in GFAP, encoding glial fibrillary acidic protein, are associated with Alexander disease', 'Nat Genet'),
  lit('lit:prust2011', 'Prust M, Wang J, Morizono H, et al.', 2011,
    'GFAP mutations, age at onset, and clinical subtypes in Alexander disease', 'Neurology'),
  lit('lit:vdknaap2001', 'van der Knaap MS, Naidu S, Breiter SN, et al.', 2001,
    'Alexander disease: diagnosis with MR imaging', 'AJNR Am J Neuroradiol'),
  lit('lit:hagemann2018', 'Hagemann TL, Powers B, Mazur C, et al.', 2018,
    'Antisense suppression of glial fibrillary acidic protein as a treatment for Alexander disease', 'Ann Neurol'),
  lit('lit:messing2012', 'Messing A, Brenner M, Feany MB, Nedergaard M, Goldman JE', 2012,
    'Alexander disease', 'J Neurosci', 'review'),
  lit('lit:jany2015', 'Jany PL, Agosta GE, Benko WS, et al.', 2015,
    'CSF and blood levels of GFAP in Alexander disease', 'eNeuro'),

  // ── POLR3 ───────────────────────────────────────────────────────────
  lit('lit:bernard2011', 'Bernard G, Chouery E, Putorti ML, et al.', 2011,
    'Mutations of POLR3A encoding a catalytic subunit of RNA polymerase Pol III cause a recessive hypomyelinating leukodystrophy', 'Am J Hum Genet'),
  lit('lit:tetreault2011', 'Tétreault M, Choquet K, Orcesi S, et al.', 2011,
    'Recessive mutations in POLR3B, encoding the second largest subunit of Pol III, cause a rare hypomyelinating leukodystrophy', 'Am J Hum Genet'),
  lit('lit:wolf2014', 'Wolf NI, Vanderver A, van Spaendonk RM, et al.', 2014,
    'Clinical spectrum of 4H leukodystrophy caused by POLR3A and POLR3B mutations', 'Neurology'),
  lit('lit:thiffault2015', 'Thiffault I, Wolf NI, Forget D, et al.', 2015,
    'Recessive mutations in POLR1C cause a leukodystrophy by impairing biogenesis of RNA polymerase III', 'Nat Commun'),
  lit('lit:minnerop2017', 'Minnerop M, Kurzwelly D, Wagner H, et al.', 2017,
    'Hypomorphic mutations in POLR3A are a frequent cause of sporadic and recessive spastic ataxia', 'Brain'),
  lit('lit:dorboz2018', 'Dorboz I, Dumay-Odelot H, Boussaid K, et al.', 2018,
    'Mutation in POLR3K causes hypomyelinating leukodystrophy and abnormal ribosomal RNA regulation', 'Neurol Genet'),
  lit('lit:merheb2021', 'Merheb E, Cui MH, DuBois JC, et al.', 2021,
    'Defective myelination in an RNA polymerase III mutant leukodystrophic mouse', 'Proc Natl Acad Sci U S A'),
  ...EXTRA_SOURCES,
]

// Gene-level database links are generated so every gene in the atlas is
// traceable to the same set of reference resources.
export const GENE_DBS = [
  ['ncbi', 'NCBI Gene', (g: string) => `https://www.ncbi.nlm.nih.gov/gene/?term=${g}%5Bsym%5D+AND+human%5Borgn%5D`],
  ['clinvar', 'ClinVar', (g: string) => `https://www.ncbi.nlm.nih.gov/clinvar/?term=${g}%5Bgene%5D`],
  ['gnomad', 'gnomAD', (g: string) => `https://gnomad.broadinstitute.org/gene/${g}?dataset=gnomad_r4`],
  ['ensembl', 'Ensembl', (g: string) => `https://www.ensembl.org/Homo_sapiens/Gene/Summary?g=${g}`],
  ['hgnc', 'HGNC', (g: string) => `https://www.genenames.org/data/gene-symbol-report/#!/symbol/${g}`],
  ['uniprot', 'UniProt', (g: string) => `https://www.uniprot.org/uniprotkb?query=gene_exact:${g}+AND+organism_id:9606`],
  ['hpa', 'Human Protein Atlas (brain expression)', (g: string) => `https://www.proteinatlas.org/search/${g}`],
  ['reactome', 'Reactome', (g: string) => `https://reactome.org/content/query?q=${g}&species=Homo+sapiens`],
  ['opentargets', 'Open Targets', (g: string) => `https://platform.opentargets.org/search?q=${g}`],
] as const

export const ALL_GENE_SYMBOLS = [
  'ASPA', 'SLC13A3', 'NAT8L', 'GALC', 'PSAP', 'ARSA', 'ABCD1', 'PLP1',
  'EIF2B1', 'EIF2B2', 'EIF2B3', 'EIF2B4', 'EIF2B5', 'GFAP',
  'POLR3A', 'POLR3B', 'POLR1C', 'POLR3K', 'POLR3GL',
  ...EXTRA_GENE_SYMBOLS,
]

for (const g of ALL_GENE_SYMBOLS) {
  for (const [key, name, url] of GENE_DBS) {
    SOURCES_LIST.push({
      id: `db:${key}:${g}`,
      title: `${name}: ${g}`,
      venue: name,
      kind: 'database',
      url: url(g),
    })
  }
}

export const ctgov = (nct: string): Source => ({
  id: `ct:${nct}`,
  title: `ClinicalTrials.gov ${nct}`,
  venue: 'ClinicalTrials.gov',
  kind: 'registry',
  url: `https://clinicaltrials.gov/study/${nct}`,
})

export const SOURCES: Record<string, Source> = Object.fromEntries(
  SOURCES_LIST.map((s) => [s.id, s]),
)

export function registerSource(s: Source) {
  SOURCES[s.id] = s
}

export const SOURCE_KIND_LABEL: Record<SourceKind, string> = {
  primary: 'Primary research',
  review: 'Review',
  guideline: 'Guideline / consensus',
  database: 'Database',
  registry: 'Trial registry',
  regulatory: 'Regulatory',
  'patient-org': 'Patient organisation',
  query: 'Curated literature query',
}
