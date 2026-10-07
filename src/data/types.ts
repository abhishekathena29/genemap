// GeneMap data model.
// Every scientific statement is a Claim (or a typed record) that carries its own
// evidence level and source ids, so the UI never shows an unsourced assertion.

export type EvidenceLevel =
  | 'established'
  | 'strong'
  | 'emerging'
  | 'proposed'
  | 'controversial'
  | 'unknown'

export type SourceKind =
  | 'primary'
  | 'review'
  | 'guideline'
  | 'database'
  | 'registry'
  | 'regulatory'
  | 'patient-org'
  | 'query'

export interface Source {
  id: string
  title: string
  authors?: string
  venue?: string
  year?: number
  kind: SourceKind
  url: string
}

export interface Claim {
  label?: string
  text: string
  ev?: EvidenceLevel
  /** Why the evidence level was assigned (curator rationale). */
  why?: string
  src?: string[]
}

export type NodeType =
  | 'gene'
  | 'protein'
  | 'metabolite'
  | 'pathway'
  | 'cell'
  | 'region'
  | 'phenotype'
  | 'biomarker'
  | 'therapy'
  | 'disease'

export interface Relation {
  from: [NodeType, string]
  to: [NodeType, string]
  label: string
  ev: EvidenceLevel
  why: string
  src: string[]
}

export interface Identifier {
  label: string
  value: string
  url?: string
}

export type Inheritance =
  | 'Autosomal recessive'
  | 'X-linked'
  | 'Autosomal dominant'
  | 'Autosomal dominant (mostly de novo)'
  | 'Autosomal recessive or dominant'

export interface Gene {
  symbol: string
  name: string
  protein: string
  location: string
  function: string
  pathway: string
  transcript?: string
  uniprot?: string
  ncbiGene?: string
  variantTypes: string[]
  diseases: string[]
  ev: EvidenceLevel
  src: string[]
}

export interface Variant {
  id: string
  disease: string
  gene: string
  transcript: string
  hgvsc: string
  hgvsp?: string
  legacy?: string
  build: string
  type: string
  consequence: string
  clinvar: string
  popFreq: string
  phenotype: string
  functional: string
  ev: EvidenceLevel
  why?: string
  src: string[]
}

export type GPAspect =
  | 'Age of onset'
  | 'Severity'
  | 'Progression'
  | 'Clinical phenotype'
  | 'MRI phenotype'
  | 'Biomarker levels'
  | 'Survival / outcome'

export interface GPRow {
  aspect: GPAspect
  finding: string
  ev: EvidenceLevel
  why?: string
  src: string[]
}

export type MechStage =
  | 'Gene'
  | 'Protein'
  | 'Molecular function'
  | 'Pathway'
  | 'Cellular consequence'
  | 'Phenotype'

export interface MechStep {
  stage: MechStage
  label: string
  detail: string
  ev: EvidenceLevel
  src: string[]
}

export type CellType =
  | 'Oligodendrocytes'
  | 'Astrocytes'
  | 'Neurons / axons'
  | 'Microglia / macrophages'
  | 'Schwann cells'
  | 'Vascular / endothelial cells'
  | 'Non-CNS tissue'

export interface CellEntry {
  cell: CellType
  role: 'primary' | 'secondary'
  detail: string
  ev: EvidenceLevel
  src: string[]
}

export interface RegionEntry {
  region: string
  finding: string
  src: string[]
}

export type BiomarkerCategory =
  | 'Enzymatic'
  | 'Biochemical'
  | 'Imaging'
  | 'Genetic'
  | 'Fluid (neuro-glial injury)'
  | 'Endocrine'

export type BiomarkerStatus = 'Established clinical' | 'Clinical adjunct' | 'Experimental'

export interface Biomarker {
  name: string
  category: BiomarkerCategory
  significance: string
  sample: string
  assay: string
  purpose: string[]
  status: BiomarkerStatus
  limitations: string
  ev: EvidenceLevel
  src: string[]
}

export type DxPhase = 'Suspicion' | 'Investigation' | 'Confirmation'

export interface DxStep {
  phase: DxPhase
  category: string
  method: string
  detail: string
  src: string[]
}

export interface PhenoForm {
  name: string
  onset: string
  severity: string
  progression: string
  genetics: string
  markers: string
  src: string[]
}

export interface MgmtItem {
  category: 'Symptomatic' | 'Supportive' | 'Monitoring' | 'Established disease-modifying'
  text: string
  src: string[]
}

export type Modality =
  | 'Gene therapy'
  | 'Gene editing'
  | 'Enzyme replacement'
  | 'Substrate reduction'
  | 'Small molecule'
  | 'Cell therapy'
  | 'Antisense / RNA'
  | 'Other'

export const STAGES = [
  'Discovery',
  'Preclinical (cellular)',
  'Animal studies',
  'Early human trials',
  'Later-stage trials',
  'Approved / standard of care',
] as const
export type Stage = (typeof STAGES)[number]

export interface Therapy {
  id: string
  name: string
  modality: Modality
  target: string
  mechanism: string
  delivery: string
  stage: Stage
  evidenceBase: 'Human' | 'Animal' | 'Cellular' | 'Human + animal'
  status: string
  ev: EvidenceLevel
  why: string
  src: string[]
}

export interface Trial {
  nct: string
  title: string
  intervention: string
  therapyId?: string
  mechanism: string
  type: string
  phase: string
  status: string
  sponsor: string
  population: string
  outcomes: string
  /** Date of the curated status snapshot (ISO). */
  snapshot: string
  /** True only once the record has been checked against the registry entry. */
  verified: boolean
}

export interface Milestone {
  year: number
  label: string
  stage: Stage
  src: string[]
}

export interface Disease {
  id: string
  name: string
  short: string
  color: string
  synonyms: string[]
  classification: string
  inheritance: Inheritance
  genes: string[]
  tagline: string
  identifiers: Identifier[]
  identity: Claim[]
  clinical: Claim[]
  epidemiology: Claim[]
  variants: Variant[]
  genotypePhenotype: GPRow[]
  mechanism: MechStep[]
  relations: Relation[]
  cells: CellEntry[]
  regions: RegionEntry[]
  biomarkers: Biomarker[]
  diagnosis: DxStep[]
  differential: string[]
  phenotypes: { applicable: boolean; note: string; forms: PhenoForm[] }
  management: MgmtItem[]
  therapies: Therapy[]
  trials: Trial[]
  milestones: Milestone[]
  gaps: Claim[]
  /** ISO date (YYYY-MM-DD) the module's content was last revised. */
  lastUpdated: string
}

export const MODALITIES: Modality[] = [
  'Gene therapy',
  'Gene editing',
  'Enzyme replacement',
  'Substrate reduction',
  'Small molecule',
  'Cell therapy',
  'Antisense / RNA',
  'Other',
]
