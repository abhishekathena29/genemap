import type { Disease, Gene, Source } from '../types'
import { geneDb, omim, orpha, pmid, query } from '../cite'

const OMIM = 'omim:614924'
const ORPHA = 'orpha:352478'
const STE = 'lit:ltbl:steenweg2012'
const SCH = 'lit:ltbl:scheper2007'
const VDK = 'lit:ltbl:vanderknaap2017'
const Q = 'q:ltbl-ears2'

export const ltblSources: Source[] = [
  omim('614924', 'Combined oxidative phosphorylation deficiency 12 (COXPD12) / LTBL'),
  orpha('352478', 'Leukoencephalopathy with thalamus and brainstem involvement and high lactate'),
  pmid(STE, '22532573', 'Steenweg ME et al.', 2012, "Leukoencephalopathy with thalamus and brainstem involvement and high lactate 'LTBL' caused by EARS2 mutations", 'Brain'),
  pmid(SCH, '17384640', 'Scheper GC et al.', 2007, 'Mitochondrial aspartyl-tRNA synthetase deficiency causes LBSL', 'Nat Genet'),
  pmid(VDK, '28572582', 'van der Knaap MS, Bugiani M', 2017, 'Leukodystrophies: a proposed classification system', 'Acta Neuropathol', 'review'),
  query(Q, 'EARS2 leukoencephalopathy case series', 'EARS2[gene] AND leukoencephalopathy'),
]

export const ltblGenes: Gene[] = [
  {
    symbol: 'EARS2',
    name: 'Glutamyl-tRNA synthetase 2, mitochondrial',
    protein: 'Mitochondrial glutamyl-tRNA synthetase (mt-GluRS); class I aaRS, 523 aa',
    location: '16p12.2',
    function:
      'Charges mitochondrial tRNA-Glu with glutamate (glutamyl-adenylate intermediate), required for translation of the 13 mtDNA-encoded OXPHOS subunits.',
    pathway: 'Mitochondrial translation / oxidative phosphorylation',
    transcript: 'NM_001083614.2',
    uniprot: 'Q5JPH6',
    ncbiGene: '124454',
    variantTypes: ['Missense (most common)', 'Nonsense / frameshift (usually in trans with a milder missense)', 'Splice-site'],
    diseases: ['ltbl'],
    ev: 'established',
    src: [STE, OMIM, ...geneDb('EARS2')],
  },
]

export const ltbl: Disease = {
  id: 'ltbl',
  name: 'Leukoencephalopathy with Thalamus and Brainstem Involvement and High Lactate',
  short: 'LTBL',
  lastUpdated: '2026-10-08',
  color: '#a3478f',
  synonyms: [
    'LTBL',
    'EARS2-related leukoencephalopathy',
    'Mitochondrial glutamyl-tRNA synthetase 2 deficiency',
    'Combined oxidative phosphorylation deficiency 12 (COXPD12)',
  ],
  classification: 'Mitochondrial leukodystrophy; mitochondrial aminoacyl-tRNA synthetase (mt-aaRS) disorder',
  inheritance: 'Autosomal recessive',
  genes: ['EARS2'],
  tagline: 'Mitochondrial GluRS deficiency → OXPHOS failure → infantile thalamic/brainstem crisis followed by partial clinical and MRI recovery.',
  identifiers: [
    { label: 'OMIM', value: '614924', url: 'https://www.omim.org/entry/614924' },
    { label: 'Orphanet', value: 'ORPHA:352478', url: 'https://www.orpha.net/en/disease/detail/352478' },
    { label: 'MONDO', value: 'MONDO:0013659', url: 'https://monarchinitiative.org/MONDO:0013659' },
    { label: 'ICD-10', value: 'G37.8' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Biallelic pathogenic EARS2 variants reduce mitochondrial glutamyl-tRNA synthetase (mt-GluRS) activity.', ev: 'established', src: [STE, OMIM] },
    { label: 'Hallmark imaging', text: 'Bilateral thalamic, brainstem and cerebral white matter T2 signal with MRS lactate elevation.', ev: 'established', src: [STE] },
    { label: 'Hallmark course', text: 'Biphasic: acute infantile deterioration followed by partial clinical and MRI improvement, unusual among mitochondrial leukodystrophies.', ev: 'established', why: 'Consistent finding in the defining series and later reports.', src: [STE] },
    { label: 'Primary cell types', text: 'Mitochondria-rich CNS cells, notably thalamic neurons and white matter cells.', ev: 'proposed', why: 'Inferred from lesion distribution and Leigh-like energy-failure biology.', src: [STE] },
  ],
  clinical: [
    { label: 'Age of onset', text: 'Neonatal to infantile (first months of life), often precipitated by febrile illness.', ev: 'established', src: [STE] },
    { label: 'Acute phase', text: 'Severe hypotonia, feeding difficulty, apnoeic episodes, reduced consciousness or acute encephalopathy; seizures common.', ev: 'established', src: [STE] },
    { label: 'Improving phase', text: 'Stabilisation with partial recovery; many have mild-to-moderate intellectual disability and motor delay, with hypotonia evolving to spasticity or mixed tone.', ev: 'established', src: [STE] },
    { label: 'Prognosis', text: 'Static or slowly progressive disability; not typically fatal in childhood.', ev: 'strong', why: 'Case-series data (<100 reported cases).', src: [STE, ORPHA] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Very rare; fewer than 100 reported cases as of 2022 (Orphanet <1:1,000,000). Possibly under-diagnosed.', ev: 'unknown', why: 'No population-based data.', src: [ORPHA] },
    { label: 'Distribution', text: 'Netherlands, Italy, France, Turkey, Iran, Israel and Asia; no founder population.', ev: 'strong', src: [ORPHA, Q] },
    { label: 'Allelic pattern', text: 'Compound heterozygosity (hypomorphic plus more severe allele) is common; recurrent variants suggest hotspots.', ev: 'strong', src: [STE, Q] },
    { label: 'Sex distribution', text: 'No sex bias reported.', ev: 'established', src: [OMIM] },
  ],
  variants: [
    { id: 'ltbl-r108w', disease: 'ltbl', gene: 'EARS2', transcript: 'NM_001083614.2', hgvsc: 'c.322C>T', hgvsp: 'p.(Arg108Trp)', build: 'Not stated', type: 'Missense', consequence: 'Catalytic domain substitution', clinvar: 'Pathogenic / Likely pathogenic', popFreq: 'Recurrent in unrelated families', phenotype: 'LTBL', functional: 'Reduced aminoacylation', ev: 'strong', why: 'Recurrent allele reported in the defining series.', src: [STE, 'db:clinvar:EARS2'] },
    { id: 'ltbl-e386k', disease: 'ltbl', gene: 'EARS2', transcript: 'NM_001083614.2', hgvsc: 'c.1156G>A', hgvsp: 'p.(Glu386Lys)', build: 'Not stated', type: 'Missense', consequence: 'Anticodon-binding domain substitution', clinvar: 'Pathogenic / Likely pathogenic', popFreq: 'Not stated', phenotype: 'LTBL', functional: 'Not characterised in source dossier', ev: 'strong', src: ['db:clinvar:EARS2'] },
    { id: 'ltbl-a401t', disease: 'ltbl', gene: 'EARS2', transcript: 'NM_001083614.2', hgvsc: 'c.1201G>A', hgvsp: 'p.(Ala401Thr)', build: 'Not stated', type: 'Missense', consequence: 'Amino-acid substitution', clinvar: 'Likely pathogenic', popFreq: 'Not stated', phenotype: 'LTBL', functional: 'Not characterised', ev: 'emerging', why: 'ClinVar classification only.', src: ['db:clinvar:EARS2'] },
    { id: 'ltbl-y429s', disease: 'ltbl', gene: 'EARS2', transcript: 'NM_001083614.2', hgvsc: 'c.1286A>C', hgvsp: 'p.(Tyr429Ser)', build: 'Not stated', type: 'Missense', consequence: 'Amino-acid substitution', clinvar: 'Pathogenic', popFreq: 'Not stated', phenotype: 'LTBL', functional: 'Not characterised', ev: 'strong', src: ['db:clinvar:EARS2'] },
  ],
  genotypePhenotype: [
    { aspect: 'Progression', finding: 'Compound heterozygous genotypes (hypomorphic plus severe allele) show the characteristic biphasic course.', ev: 'established', src: [STE] },
    { aspect: 'Severity', finding: 'Higher residual mt-GluRS activity loosely correlates with milder outcome; lower activity with a worse acute phase.', ev: 'emerging', why: 'Fibroblast and biochemical data from few patients.', src: [STE] },
    { aspect: 'Clinical phenotype', finding: 'Severe biallelic genotypes can cause neonatal onset with persistent severe disability.', ev: 'emerging', why: 'Case reports.', src: [Q] },
    { aspect: 'MRI phenotype', finding: 'MRI improvement is not fully explained by genotype; compensatory biogenesis or metabolic adaptation proposed.', ev: 'proposed', src: [STE] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'EARS2 (16p12.2)', detail: 'Biallelic pathogenic variants, often compound heterozygous.', ev: 'established', src: [STE] },
    { stage: 'Protein', label: 'Mitochondrial GluRS', detail: 'Reduced mt-GluRS quantity or catalytic activity.', ev: 'established', src: [STE, 'db:uniprot:EARS2'] },
    { stage: 'Molecular function', label: 'mt-tRNA-Glu charging fails', detail: 'Glutamate incorporation into mtDNA-encoded proteins is impaired.', ev: 'established', src: [STE] },
    { stage: 'Pathway', label: 'OXPHOS deficiency', detail: 'Reduced synthesis of respiratory chain subunits (especially complexes I and III); lower ATP and lactate rise.', ev: 'established', src: [STE] },
    { stage: 'Cellular consequence', label: 'Stress-triggered energy crisis', detail: 'Thalamic neurons, brainstem nuclei and white matter fail under metabolic stress such as fever; later compensation proposed.', ev: 'proposed', src: [STE] },
    { stage: 'Phenotype', label: 'Biphasic leukoencephalopathy', detail: 'Acute infantile encephalopathy followed by partial recovery with residual deficit.', ev: 'established', src: [STE] },
  ],
  relations: [
    { from: ['gene', 'EARS2'], to: ['protein', 'Mitochondrial GluRS'], label: 'encodes', ev: 'established', why: 'Gene-protein identity.', src: [STE, 'db:uniprot:EARS2'] },
    { from: ['protein', 'Mitochondrial GluRS'], to: ['pathway', 'Mitochondrial translation'], label: 'required for', ev: 'established', why: 'Canonical mt-aaRS function.', src: [STE] },
    { from: ['pathway', 'Mitochondrial translation'], to: ['pathway', 'OXPHOS'], label: 'supplies subunits to', ev: 'established', why: 'mtDNA-encoded subunits of complexes I, III, IV, V.', src: [STE] },
    { from: ['pathway', 'OXPHOS'], to: ['metabolite', 'Lactate'], label: 'failure raises', ev: 'established', why: 'MRS and CSF lactate elevation.', src: [STE] },
    { from: ['pathway', 'OXPHOS'], to: ['region', 'Thalamus'], label: 'deficit injures', ev: 'strong', why: 'Bilateral thalamic involvement as in other severe OXPHOS disorders; mechanism partly by analogy to Leigh syndrome.', src: [STE] },
    { from: ['metabolite', 'Lactate'], to: ['biomarker', 'MRS lactate'], label: 'measured as', ev: 'established', why: 'Diagnostic MRS finding.', src: [STE] },
    { from: ['therapy', 'Crisis prevention (fever and fasting management)'], to: ['phenotype', 'Acute encephalopathy'], label: 'may limit (hypothesis)', ev: 'proposed', why: 'Clinical consensus rationale; untested formally.', src: [STE] },
  ],
  cells: [
    { cell: 'Neurons / axons', role: 'primary', detail: 'Thalamic neurons and brainstem nuclei with high OXPHOS dependence.', ev: 'strong', src: [STE] },
    { cell: 'Oligodendrocytes', role: 'primary', detail: 'Diffuse white matter T2 abnormality reflecting energy failure.', ev: 'proposed', src: [STE] },
    { cell: 'Astrocytes', role: 'secondary', detail: 'EARS2 expressed; specific contribution undefined.', ev: 'unknown', src: ['db:hpa:EARS2'] },
  ],
  regions: [
    { region: 'Thalamus (bilateral)', finding: 'Symmetric T2 hyperintensity, may restrict diffusion acutely; often improves later.', src: [STE] },
    { region: 'Brainstem', finding: 'Midbrain, pons, dorsal brainstem nuclei and tegmentum.', src: [STE] },
    { region: 'Cerebral white matter', finding: 'Diffuse periventricular and deep T2 hyperintensity.', src: [STE] },
    { region: 'Cerebellum', finding: 'Cerebellar white matter and dentate nucleus often involved.', src: [STE] },
    { region: 'Spinal cord', finding: 'Variable, less prominent than in LBSL.', src: [STE] },
  ],
  biomarkers: [
    { name: 'MRI bilateral thalamic T2 signal', category: 'Imaging', significance: 'Thalamic energy failure; hallmark finding.', sample: 'In vivo brain', assay: 'Brain MRI (serial)', purpose: ['Diagnosis', 'Monitoring'], status: 'Established clinical', limitations: 'Overlaps with Leigh syndrome; improves over time.', ev: 'established', src: [STE] },
    { name: 'MRI white matter + brainstem T2 signal', category: 'Imaging', significance: 'White matter energy failure.', sample: 'In vivo brain', assay: 'Brain MRI', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Partial improvement may confound timing.', ev: 'established', src: [STE] },
    { name: 'MRS lactate', category: 'Imaging', significance: 'OXPHOS failure with anaerobic glycolysis.', sample: 'In vivo brain', assay: 'Proton MRS (1.33 ppm doublet)', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'May normalise after the acute phase.', ev: 'established', src: [STE] },
    { name: 'CSF lactate', category: 'Biochemical', significance: 'CNS mitochondrial dysfunction.', sample: 'CSF', assay: 'Lactate assay', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'Non-specific for EARS2.', ev: 'established', src: [STE] },
    { name: 'Blood lactate', category: 'Biochemical', significance: 'Systemic mitochondrial burden.', sample: 'Blood', assay: 'Lactate assay; pyruvate:lactate ratio', purpose: ['Supplementary'], status: 'Clinical adjunct', limitations: 'May be normal; non-specific.', ev: 'established', src: [STE] },
    { name: 'Respiratory chain enzyme activity', category: 'Enzymatic', significance: 'Complex I/III deficiency.', sample: 'Muscle or fibroblasts', assay: 'OXPHOS enzyme assays', purpose: ['Confirmation'], status: 'Experimental', limitations: 'Research-level; normal results do not exclude disease.', ev: 'strong', src: [STE] },
    { name: 'Biallelic EARS2 variants', category: 'Genetic', significance: 'Molecular confirmation.', sample: 'DNA (blood)', assay: 'Sequencing + CNV', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Novel missense interpretation may be uncertain.', ev: 'established', src: [STE, 'db:clinvar:EARS2'] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Infant with acute encephalopathy, bilateral thalamic MRI signal and elevated lactate; biphasic course.', src: [STE] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain MRI + MRS (serial)', detail: 'Thalamic, brainstem and white matter T2 signal; lactate doublet; serial imaging documents improvement.', src: [STE] },
    { phase: 'Investigation', category: 'Biochemical', method: 'CSF/plasma lactate, amino and organic acids; OXPHOS studies', detail: 'CSF lactate elevated; muscle or fibroblasts may show complex I/III deficiency.', src: [STE] },
    { phase: 'Confirmation', category: 'Genetic', method: 'EARS2 sequencing + CNV', detail: 'First-tier; broader mitochondrial/Leigh panel or WES/WGS if negative; mtDNA analysis to exclude primary mtDNA disease.', src: [STE, 'db:clinvar:EARS2'] },
    { phase: 'Confirmation', category: 'Prenatal', method: 'CVS / amniocentesis', detail: 'Targeted familial variant testing once variants are known. No newborn screening.', src: [OMIM] },
  ],
  differential: [
    'Leigh syndrome (similar thalamic MRI; different genetics and progressive course)',
    'LBSL (DARS2) and other mt-aaRS disorders',
    'Metabolic encephalopathies',
    'Wilson disease (older patients)',
  ],
  phenotypes: {
    applicable: true,
    note: 'The typical biphasic infantile course is distinguished from rarer severe persistent and insidious presentations.',
    forms: [
      { name: 'Typical biphasic', onset: 'Neonatal to infantile', severity: 'Severe acute phase, then mild-to-moderate disability', progression: 'Acute deterioration then improvement', genetics: 'Compound heterozygous (hypomorphic + severe)', markers: 'Thalamic + brainstem + WM T2; lactate elevated, may normalise', src: [STE] },
      { name: 'Severe persistent', onset: 'Neonatal', severity: 'Severe intellectual and motor disability', progression: 'Minimal recovery', genetics: 'Severe biallelic', markers: 'Persistent MRI abnormality', src: [Q] },
      { name: 'Atypical insidious', onset: 'Later infancy or childhood', severity: 'Variable', progression: 'Insidious delay; rarely monophasic progressive', genetics: 'Not defined', markers: 'Thalamic involvement may be absent', src: [STE] },
    ],
  },
  management: [
    { category: 'Supportive', text: 'Acute phase: intensive care support as needed (airway, hydration, avoidance of fasting).', src: [STE] },
    { category: 'Symptomatic', text: 'Aggressive fever management and anti-seizure medication; avoid valproic acid.', src: [STE] },
    { category: 'Supportive', text: 'Chronic phase: physiotherapy, occupational and speech therapy, special educational support.', src: [OMIM] },
    { category: 'Supportive', text: 'Empirical mitochondrial supplements (CoQ10, riboflavin, thiamine, L-carnitine) without LTBL-specific evidence.', src: [STE] },
    { category: 'Monitoring', text: 'Serial MRI to document disease course; early admission for intercurrent febrile illness.', src: [STE] },
  ],
  therapies: [
    { id: 'ltbl-crisis', name: 'Crisis prevention (fever and fasting management)', modality: 'Other', target: 'Metabolic stress', mechanism: 'Prevent energy crises that drive acute damage.', delivery: 'Clinical care', stage: 'Approved / standard of care', evidenceBase: 'Human', status: 'Empirical clinical consensus; impact on outcome untested', ev: 'proposed', why: 'Most evidence-supported modification per dossier, but based on consensus rather than trials.', src: [STE] },
    { id: 'ltbl-aav', name: 'EARS2 gene therapy', modality: 'Gene therapy', target: 'EARS2', mechanism: 'Viral vector delivery of EARS2 to the CNS.', delivery: 'CNS-directed vector (conceptual)', stage: 'Discovery', evidenceBase: 'Human', status: 'No preclinical or clinical program identified', ev: 'proposed', why: 'Rationale from human genetics only; Ears2 knockout is embryonic lethal.', src: [STE] },
    { id: 'ltbl-oxphos', name: 'OXPHOS support (NAD+ precursors, bezafibrate, PGC-1α agonists)', modality: 'Small molecule', target: 'OXPHOS / mitochondrial biogenesis', mechanism: 'Boost residual respiratory capacity or mitochondrial biogenesis.', delivery: 'Oral', stage: 'Discovery', evidenceBase: 'Human', status: 'Theoretical; no LTBL data', ev: 'proposed', why: 'Extrapolated from other mitochondrial disorders.', src: [STE] },
  ],
  trials: [],
  milestones: [
    { year: 2012, label: 'LTBL defined and EARS2 identified', stage: 'Discovery', src: [STE] },
  ],
  gaps: [
    { text: 'No interventional trials, natural-history registry or validated endpoints as of 2026.', ev: 'unknown', src: [Q] },
    { text: 'Mechanism of clinical and MRI improvement (compensatory biogenesis?) is unresolved.', ev: 'proposed', src: [STE] },
    { text: 'Whether crisis prevention modifies long-term outcome is untested.', ev: 'proposed', src: [STE] },
    { text: 'No viable animal model: constitutive Ears2 knockout is embryonic lethal.', ev: 'strong', src: [STE] },
  ],
}
