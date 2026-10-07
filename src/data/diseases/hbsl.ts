import type { Disease, Gene, Source } from '../types'
import { geneDb, omim, orpha, pmid, pubmed, query } from '../cite'

const OMIM = 'omim:616140'
const ORPHA = 'orpha:401854'
const WOLF = 'lit:hbsl:wolf2014'
const VDK = 'lit:hbsl:vanderknaap2017'
const Q = 'q:hbsl-dars1'

export const hbslSources: Source[] = [
  omim('616140', 'Hypomyelinating leukodystrophy 7 (HBSL)'),
  orpha('401854', 'Hypomyelination with brainstem and spinal cord involvement (HBSL)'),
  {
    // The dossier itself flags this citation (title/PMID pairing) for verification,
    // so it is linked by PubMed search rather than pinned to the PMID.
    id: WOLF,
    authors: 'Wolf NI et al.',
    year: 2014,
    title: 'DARS1 variants in hypomyelination with brainstem and spinal cord involvement (dossier citation, PMID 25231095 pending verification)',
    venue: 'Ann Neurol',
    kind: 'primary',
    url: pubmed('DARS1 leukodystrophy Wolf 2014'),
  },
  pmid(VDK, '28572582', 'van der Knaap MS, Bugiani M', 2017, 'Leukodystrophies: a proposed classification system', 'Acta Neuropathol', 'review'),
  query(Q, 'DARS1 leukodystrophy (case series, adult onset)', 'DARS1 leukodystrophy'),
]

export const hbslGenes: Gene[] = [
  {
    symbol: 'DARS1',
    name: 'Aspartyl-tRNA synthetase 1, cytoplasmic',
    protein: 'Cytoplasmic aspartyl-tRNA synthetase (AspRS); class II aaRS, homodimeric, 501 aa',
    location: '2q21.3',
    function:
      'Charges cytoplasmic tRNA-Asp with aspartate for cytoplasmic ribosomal translation; also part of the multi-aminoacyl-tRNA synthetase complex (MSC). Formerly named DARS.',
    pathway: 'Cytoplasmic aminoacyl-tRNA synthesis / protein translation',
    transcript: 'NM_001349.3',
    uniprot: 'P14868',
    ncbiGene: '1615',
    variantTypes: ['Missense (most common)', 'Nonsense', 'Frameshift', 'Splice-site'],
    diseases: ['hbsl'],
    ev: 'established',
    src: [WOLF, OMIM, ...geneDb('DARS1')],
  },
]

export const hbsl: Disease = {
  id: 'hbsl',
  name: 'Hypomyelination with Brainstem and Spinal Cord Involvement (HBSL / HLD7)',
  short: 'HBSL',
  lastUpdated: '2026-10-08',
  color: '#c2742f',
  synonyms: [
    'HBSL',
    'Hypomyelinating leukodystrophy 7 (HLD7)',
    'DARS1-related leukodystrophy',
    'DARS-related hypomyelinating leukodystrophy',
    'Cytoplasmic aspartyl-tRNA synthetase deficiency',
  ],
  classification: 'Hypomyelinating leukodystrophy; cytoplasmic aminoacyl-tRNA synthetase disorder',
  inheritance: 'Autosomal recessive',
  genes: ['DARS1'],
  tagline: 'Cytoplasmic AspRS deficiency → impaired myelin protein translation → hypomyelination with brainstem and spinal cord tract involvement, without lactate.',
  identifiers: [
    { label: 'OMIM', value: '616140', url: 'https://www.omim.org/entry/616140' },
    { label: 'Orphanet', value: 'ORPHA:401854', url: 'https://www.orpha.net/en/disease/detail/401854' },
    { label: 'MONDO', value: 'MONDO:0014574', url: 'https://monarchinitiative.org/MONDO:0014574' },
    { label: 'ICD-10', value: 'G37.8' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Biallelic pathogenic DARS1 variants reduce cytoplasmic aspartyl-tRNA synthetase (AspRS) activity.', ev: 'established', why: 'Gene identified in affected families; autosomal recessive inheritance confirmed in OMIM.', src: [WOLF, OMIM] },
    { label: 'Core pathology', text: 'Hypomyelination (failure of normal myelin deposition) with selective brainstem and spinal cord tract involvement.', ev: 'established', src: [WOLF, VDK] },
    { label: 'Key distinction', text: 'MRI resembles LBSL (DARS2), but HBSL is a cytoplasmic, not mitochondrial, translation defect and shows no MRS lactate elevation.', ev: 'established', why: 'Consistent MRS findings across reported cases.', src: [WOLF] },
    { label: 'Primary cell types', text: 'Oligodendrocytes (myelin protein synthesis) with secondary neuronal degeneration.', ev: 'strong', why: 'Inferred from hypomyelinating phenotype and translation mechanism; not directly tested in human tissue.', src: [WOLF] },
  ],
  clinical: [
    { label: 'Age of onset', text: 'Typically early childhood (first decade); adult-onset cases reported.', ev: 'established', why: 'Childhood onset established; adult onset from small case series (emerging).', src: [WOLF, Q] },
    { label: 'Neurological features', text: 'Cerebellar ataxia, progressive spasticity, motor delay, mild to moderate intellectual disability; impaired gaze and dysarthria in advanced cases.', ev: 'established', src: [WOLF, OMIM] },
    { label: 'Progression', text: 'Slowly progressive over decades; ambulation often preserved for extended periods.', ev: 'established', src: [WOLF] },
    { label: 'Prognosis', text: 'Most patients survive into adulthood.', ev: 'strong', why: 'Derived from case series (<50 published cases).', src: [WOLF] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Very rare; fewer than 50 published cases as of 2022. Exact incidence not established.', ev: 'unknown', why: 'No population-based data.', src: [ORPHA, WOLF] },
    { label: 'Distribution', text: 'Cases from Europe, North America and the Middle East; no dominant founder population.', ev: 'strong', src: [WOLF, ORPHA] },
    { label: 'Consanguinity', text: 'Consanguineous families present in published series, consistent with recessive inheritance.', ev: 'established', src: [WOLF] },
    { label: 'Sex distribution', text: 'No reported sex bias.', ev: 'established', src: [OMIM] },
  ],
  variants: [
    { id: 'hbsl-e173k', disease: 'hbsl', gene: 'DARS1', transcript: 'NM_001349.3', hgvsc: 'c.517G>A', hgvsp: 'p.(Glu173Lys)', build: 'Not stated', type: 'Missense', consequence: 'Catalytic domain substitution', clinvar: 'Pathogenic / Likely pathogenic', popFreq: 'Recurrent across families; frequency not stated', phenotype: 'Classic HBSL', functional: 'Not characterised in source dossier', ev: 'strong', why: 'Recurrent allele in the gene-discovery series.', src: [WOLF, 'db:clinvar:DARS1'] },
    { id: 'hbsl-v120m', disease: 'hbsl', gene: 'DARS1', transcript: 'NM_001349.3', hgvsc: 'c.358G>A', hgvsp: 'p.(Val120Met)', build: 'Not stated', type: 'Missense', consequence: 'Amino-acid substitution', clinvar: 'Likely pathogenic', popFreq: 'Not stated', phenotype: 'HBSL', functional: 'Not characterised', ev: 'emerging', why: 'ClinVar classification only; no functional or segregation detail in dossier.', src: ['db:clinvar:DARS1'] },
    { id: 'hbsl-r263x', disease: 'hbsl', gene: 'DARS1', transcript: 'NM_001349.3', hgvsc: 'c.787C>T', hgvsp: 'p.(Arg263Ter)', build: 'Not stated', type: 'Nonsense', consequence: 'Premature stop; loss of function', clinvar: 'Pathogenic', popFreq: 'Not stated', phenotype: 'HBSL (compound heterozygous)', functional: 'Truncating', ev: 'strong', why: 'Null mechanism; observed in trans with a second allele.', src: ['db:clinvar:DARS1'] },
    { id: 'hbsl-g338s', disease: 'hbsl', gene: 'DARS1', transcript: 'NM_001349.3', hgvsc: 'c.1012G>A', hgvsp: 'p.(Gly338Ser)', build: 'Not stated', type: 'Missense', consequence: 'Anticodon-binding domain substitution', clinvar: 'Likely pathogenic', popFreq: 'Not stated', phenotype: 'HBSL', functional: 'Not characterised', ev: 'emerging', why: 'ClinVar classification only.', src: ['db:clinvar:DARS1'] },
  ],
  genotypePhenotype: [
    { aspect: 'Clinical phenotype', finding: 'Biallelic (often compound heterozygous) DARS1 variants cause classic HBSL with hypomyelination and brainstem/spinal cord involvement.', ev: 'established', src: [WOLF] },
    { aspect: 'Severity', finding: 'Two severe missense or truncating alleles tend to give earlier onset and a more severe phenotype.', ev: 'strong', why: 'Limited case series.', src: [WOLF, Q] },
    { aspect: 'Age of onset', finding: 'One hypomorphic plus one severe allele may give a milder or later-onset course.', ev: 'emerging', why: 'Small numbers of reported patients.', src: [Q] },
    { aspect: 'Survival / outcome', finding: 'No systematic large-cohort genotype-phenotype study exists.', ev: 'unknown', src: [Q] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'DARS1 (2q21.3)', detail: 'Biallelic pathogenic variants (missense, truncating, splice).', ev: 'established', src: [WOLF, OMIM] },
    { stage: 'Protein', label: 'Cytoplasmic AspRS', detail: 'Reduced protein amount and/or aminoacylation activity.', ev: 'established', src: [WOLF, 'db:uniprot:DARS1'] },
    { stage: 'Molecular function', label: 'tRNA-Asp charging fails', detail: 'Impaired charging of cytoplasmic tRNA-Asp; ribosomal pausing at aspartate codons.', ev: 'strong', src: [WOLF] },
    { stage: 'Pathway', label: 'Cytoplasmic translation deficit', detail: 'Reduced synthesis of aspartate-rich myelin proteins (e.g. MBP, PLP, MOG); no OXPHOS failure or lactate rise.', ev: 'strong', src: [WOLF] },
    { stage: 'Cellular consequence', label: 'Impaired myelin membrane synthesis', detail: 'Oligodendrocytes with high translational demand fail to deposit normal myelin.', ev: 'proposed', src: [WOLF] },
    { stage: 'Phenotype', label: 'Hypomyelination with tract involvement', detail: 'Ataxia, spasticity and motor delay; brainstem and spinal cord tract T2 signal.', ev: 'established', src: [WOLF, OMIM] },
  ],
  relations: [
    { from: ['gene', 'DARS1'], to: ['protein', 'Cytoplasmic AspRS'], label: 'encodes', ev: 'established', why: 'Gene-protein identity in UniProt.', src: ['db:uniprot:DARS1'] },
    { from: ['protein', 'Cytoplasmic AspRS'], to: ['pathway', 'Cytoplasmic translation'], label: 'charges tRNA-Asp for', ev: 'established', why: 'Canonical aaRS function.', src: [WOLF] },
    { from: ['pathway', 'Cytoplasmic translation'], to: ['cell', 'Oligodendrocytes'], label: 'limits myelin protein synthesis in', ev: 'proposed', why: 'Mechanistic inference from high translational demand of myelinating cells.', src: [WOLF] },
    { from: ['cell', 'Oligodendrocytes'], to: ['phenotype', 'Hypomyelination'], label: 'failure causes', ev: 'strong', why: 'Hypomyelination pattern on MRI in all reported cases.', src: [WOLF, VDK] },
    { from: ['gene', 'DARS1'], to: ['region', 'Brainstem and spinal cord tracts'], label: 'deficiency involves', ev: 'established', why: 'Defining MRI feature.', src: [WOLF] },
    { from: ['disease', 'HBSL'], to: ['biomarker', 'MRS: no lactate peak'], label: 'distinguished from LBSL by', ev: 'established', why: 'Key differentiator from DARS2-related LBSL.', src: [WOLF] },
  ],
  cells: [
    { cell: 'Oligodendrocytes', role: 'primary', detail: 'High translational demand for myelin proteins; hypomyelination.', ev: 'strong', src: [WOLF] },
    { cell: 'Neurons / axons', role: 'secondary', detail: 'Secondary neuronal degeneration; DARS1 also expressed in neurons.', ev: 'emerging', src: [WOLF, 'db:hpa:DARS1'] },
  ],
  regions: [
    { region: 'Cerebral white matter', finding: 'Diffuse hypomyelination (T2 hyperintense, T1 hypointense), periventricular predominance.', src: [WOLF] },
    { region: 'Brainstem', finding: 'Selective tract involvement (corticospinal tracts, medial lemniscus), similar to LBSL.', src: [WOLF] },
    { region: 'Spinal cord', finding: 'Dorsal columns and lateral corticospinal tracts.', src: [WOLF] },
    { region: 'Cerebellum', finding: 'White matter involvement; possible cerebellar atrophy.', src: [WOLF] },
  ],
  biomarkers: [
    { name: 'MRI hypomyelination + brainstem/spinal tract pattern', category: 'Imaging', significance: 'Myelin deficiency with selective tract involvement.', sample: 'In vivo brain and spine', assay: 'Brain and spinal MRI', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Overlaps with LBSL; requires MRS and genetics to separate.', ev: 'established', src: [WOLF] },
    { name: 'MRS lactate (absent)', category: 'Imaging', significance: 'Absence of lactate distinguishes HBSL from LBSL.', sample: 'In vivo brain', assay: 'Proton MR spectroscopy', purpose: ['Differential diagnosis'], status: 'Established clinical', limitations: 'Negative marker; lactate detection depends on technique.', ev: 'established', src: [WOLF] },
    { name: 'Biallelic DARS1 variants', category: 'Genetic', significance: 'Molecular confirmation.', sample: 'DNA (blood)', assay: 'Sequencing + CNV analysis', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Many variants are private; interpretation of novel missense may be uncertain.', ev: 'established', src: [WOLF, 'db:clinvar:DARS1'] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Child with ataxia, spasticity and motor delay; hypomyelination with brainstem/spinal involvement on MRI.', src: [WOLF] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain and spinal MRI', detail: 'Diffuse hypomyelination; brainstem tracts; dorsal column and corticospinal tract T2 signal.', src: [WOLF] },
    { phase: 'Investigation', category: 'Imaging', method: 'MRS', detail: 'No lactate elevation (critical differentiator from LBSL); CSF lactate normal.', src: [WOLF] },
    { phase: 'Confirmation', category: 'Genetic', method: 'DARS1 sequencing + CNV / leukodystrophy panel', detail: 'First-tier DARS1 testing or hypomyelinating/mitochondrial panel including DARS1 and DARS2; WES/WGS if negative.', src: [WOLF, 'db:clinvar:DARS1'] },
    { phase: 'Confirmation', category: 'Screening', method: 'Newborn screening', detail: 'Not available; no validated NBS biomarker as of 2026.', src: [ORPHA] },
  ],
  differential: [
    'LBSL (DARS2): similar brainstem/spinal tract pattern but with MRS and CSF lactate elevation',
    'Other hypomyelinating leukodystrophies (panel testing)',
    'Other aminoacyl-tRNA synthetase leukoencephalopathies',
  ],
  phenotypes: {
    applicable: true,
    note: 'A typical childhood-onset form and rarer adult-onset presentations are described; both lack lactate elevation.',
    forms: [
      { name: 'Typical (childhood onset)', onset: 'Early childhood', severity: 'Mild to moderate disability', progression: 'Slow, over decades', genetics: 'Biallelic DARS1; severe alleles linked to earlier onset', markers: 'Diffuse hypomyelination; brainstem/spinal tracts; no MRS or CSF lactate', src: [WOLF] },
      { name: 'Adult onset', onset: 'Adulthood', severity: 'Variable', progression: 'Slow', genetics: 'Possibly one hypomorphic allele', markers: 'Hypomyelination and tract involvement present; no lactate', src: [Q] },
    ],
  },
  management: [
    { category: 'Supportive', text: 'Physiotherapy, occupational therapy and speech-language therapy.', src: [OMIM] },
    { category: 'Symptomatic', text: 'Anti-seizure medication if seizures develop.', src: [OMIM] },
    { category: 'Supportive', text: 'Special educational support; genetic counselling (autosomal recessive).', src: [OMIM, ORPHA] },
    { category: 'Monitoring', text: 'No disease-modifying therapy approved as of 2026; follow-up is symptom-directed.', src: [ORPHA] },
  ],
  therapies: [
    { id: 'hbsl-aav', name: 'AAV-DARS1 gene therapy', modality: 'Gene therapy', target: 'DARS1', mechanism: 'Restore cytoplasmic AspRS expression in oligodendrocytes.', delivery: 'CNS-directed AAV (conceptual)', stage: 'Discovery', evidenceBase: 'Human', status: 'Concept only; no preclinical program identified', ev: 'proposed', why: 'Rationale rests on human genetics alone; no model data.', src: [WOLF] },
    { id: 'hbsl-chaperone', name: 'DARS1 pharmacological stabilizers', modality: 'Small molecule', target: 'DARS1 (AspRS)', mechanism: 'Chaperones to increase residual AspRS activity.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Human', status: 'Theoretical; no compounds identified', ev: 'proposed', why: 'No candidate molecules or experimental data.', src: [WOLF] },
    { id: 'hbsl-translation', name: 'Translation enhancement strategies', modality: 'Other', target: 'Cytoplasmic translation', mechanism: 'Compensate for reduced tRNA-Asp charging.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Human', status: 'Theoretical; no clinical data', ev: 'proposed', why: 'Purely conceptual.', src: [WOLF] },
  ],
  trials: [],
  milestones: [
    { year: 2014, label: 'Biallelic DARS1 variants identified in HBSL', stage: 'Discovery', src: [WOLF] },
    { year: 2017, label: 'HBSL classified among hypomyelinating leukodystrophies', stage: 'Discovery', src: [VDK] },
  ],
  gaps: [
    { text: 'No interventional clinical trials registered for HBSL/DARS1 as of 2026.', ev: 'unknown', src: [Q] },
    { text: 'No systematic genotype-phenotype cohort; allele-severity relationships rest on small series.', ev: 'unknown', src: [Q] },
    { text: 'Why cytoplasmic AspRS deficiency selectively targets myelin and specific tracts is not directly demonstrated.', ev: 'proposed', src: [WOLF] },
    { text: 'No preclinical gene therapy or small-molecule program identified.', ev: 'unknown', src: [WOLF] },
    { text: 'Primary gene-discovery citation in the source dossier needs PMID/title verification.', ev: 'unknown', src: [WOLF] },
  ],
}
