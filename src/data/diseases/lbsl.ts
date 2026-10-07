import type { Disease, Gene, Source } from '../types'
import { geneDb, genereviews, nord, omim, orpha, pmid, query } from '../cite'

const GR = 'gr:lbsl'
const OMIM = 'omim:611105'
const ORPHA = 'orpha:137898'
const NORD = 'nord:lbsl'
const VDK03 = 'lit:lbsl:vanderknaap2003'
const SCH = 'lit:lbsl:scheper2007'
const ULUC = 'lit:lbsl:uluc2008'
const STE = 'lit:lbsl:steenweg2012'
const VDK17 = 'lit:lbsl:vanderknaap2017'
const QMOUSE = 'q:lbsl-dars2-mouse'

export const lbslSources: Source[] = [
  genereviews('lbsl', 'NBK1233', 'Leukoencephalopathy with Brainstem and Spinal Cord Involvement and Lactate Elevation'),
  omim('611105', 'Leukoencephalopathy with brainstem and spinal cord involvement and lactate elevation (LBSL)'),
  orpha('137898', 'Leukoencephalopathy with brainstem and spinal cord involvement and lactate elevation'),
  nord('lbsl', 'leukoencephalopathy-with-brainstem-and-spinal-cord-involvement-and-lactate-elevation', 'Leukoencephalopathy with Brainstem and Spinal Cord Involvement and Lactate Elevation'),
  pmid(VDK03, '12764061', 'van der Knaap MS et al.', 2003, 'Leukoencephalopathy with brainstem and spinal cord involvement and high lactate: a genetically proven leukodystrophy', 'Brain'),
  pmid(SCH, '17384640', 'Scheper GC et al.', 2007, 'Mitochondrial aspartyl-tRNA synthetase deficiency causes leukoencephalopathy with brain stem and spinal cord involvement and lactate elevation', 'Nat Genet'),
  pmid(ULUC, '17989041', 'Uluc K et al.', 2008, 'Sensory neuropathy and elevated CSF protein and lactate in LBSL', 'Neurology'),
  pmid(STE, '22396274', 'Steenweg ME et al.', 2012, 'Leukoencephalopathy with brainstem and spinal cord involvement and lactate elevation: clinical and genetic characterization and target for therapy', 'Brain'),
  pmid(VDK17, '28572582', 'van der Knaap MS, Bugiani M', 2017, 'Leukodystrophies: a proposed classification system', 'Acta Neuropathol', 'review'),
  query(QMOUSE, 'Dars2 knockout and conditional CNS knockout mouse models', 'Dars2 knockout mouse'),
]

export const lbslGenes: Gene[] = [
  {
    symbol: 'DARS2',
    name: 'Aspartyl-tRNA synthetase 2, mitochondrial',
    protein: 'Mitochondrial aspartyl-tRNA synthetase (mt-AspRS); class II aaRS, 645 aa',
    location: '1q25.1',
    function:
      'Charges mitochondrial tRNA-Asp with aspartate (ATP-dependent two-step reaction), required for translation of the 13 mtDNA-encoded OXPHOS subunits.',
    pathway: 'Mitochondrial translation / oxidative phosphorylation',
    transcript: 'NM_018122.5',
    uniprot: 'Q6PI48',
    ncbiGene: '55157',
    variantTypes: ['Intronic splice (c.228-20A>G, common hypomorphic)', 'Missense', 'Canonical splice-site', 'Nonsense / frameshift (usually in trans with a milder allele)'],
    diseases: ['lbsl'],
    ev: 'established',
    src: [SCH, GR, ...geneDb('DARS2')],
  },
]

export const lbsl: Disease = {
  id: 'lbsl',
  name: 'Leukoencephalopathy with Brainstem and Spinal Cord Involvement and Lactate Elevation',
  short: 'LBSL',
  lastUpdated: '2026-10-08',
  color: '#d24c4c',
  synonyms: [
    'LBSL',
    'Mitochondrial aspartyl-tRNA synthetase deficiency',
    'DARS2-related leukoencephalopathy',
    'Hypomyelination with brainstem and spinal cord involvement (historical overlap term)',
  ],
  classification: 'Mitochondrial leukodystrophy; mitochondrial aminoacyl-tRNA synthetase (mt-aaRS) disorder',
  inheritance: 'Autosomal recessive',
  genes: ['DARS2'],
  tagline: 'Mitochondrial AspRS deficiency → impaired mitochondrial translation and OXPHOS → selective tract degeneration with lactate elevation.',
  identifiers: [
    { label: 'OMIM', value: '611105', url: 'https://www.omim.org/entry/611105' },
    { label: 'Orphanet', value: 'ORPHA:137898', url: 'https://www.orpha.net/en/disease/detail/137898' },
    { label: 'GeneReviews', value: 'NBK1233', url: 'https://www.ncbi.nlm.nih.gov/books/NBK1233/' },
    { label: 'MONDO', value: 'MONDO:0012589', url: 'https://monarchinitiative.org/MONDO:0012589' },
    { label: 'ICD-10', value: 'G37.8' },
    { label: 'ICD-11', value: '8A44.Y' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Biallelic pathogenic DARS2 variants reduce mitochondrial aspartyl-tRNA synthetase (mt-AspRS) activity.', ev: 'established', why: 'Gene identified in 2007 and replicated across cohorts.', src: [SCH, GR, OMIM] },
    { label: 'Hallmark imaging', text: 'Cerebral white matter abnormality with selective involvement of brainstem tracts and spinal cord dorsal columns and lateral corticospinal tracts, plus MRS lactate.', ev: 'established', why: 'Defining MRI pattern used for diagnosis before genetic confirmation.', src: [VDK03, GR] },
    { label: 'Core pathology', text: 'Impaired mitochondrial translation causes respiratory chain dysfunction and energy failure in long white matter tracts.', ev: 'established', src: [SCH, VDK03] },
    { label: 'Primary cell types', text: 'Oligodendrocytes and long-tract axons with high mitochondrial demand.', ev: 'proposed', why: 'Selective vulnerability is inferred from tract distribution and other mt-aaRS disorders.', src: [SCH] },
  ],
  clinical: [
    { label: 'Age of onset', text: 'Most present in childhood (first decade); onset ranges from infancy to adulthood, with a milder adult-onset form.', ev: 'established', src: [STE, GR] },
    { label: 'Neurological features', text: 'Cerebellar ataxia (usually first), progressive spasticity, dorsal column dysfunction (vibration and proprioception loss), dysarthria; cognition relatively preserved in many.', ev: 'established', src: [VDK03, GR, NORD] },
    { label: 'Sensory system', text: 'Sensory neuropathy with elevated CSF protein and lactate has been described.', ev: 'strong', src: [ULUC] },
    { label: 'Progression', text: 'Slowly progressive over decades; episodic deterioration sometimes after febrile illness.', ev: 'established', src: [GR, STE] },
    { label: 'Prognosis', text: 'Life expectancy generally not severely curtailed; many reach adulthood with significant disability, ambulation often maintained for years.', ev: 'strong', why: 'Case-series data rather than prospective natural history.', src: [STE, NORD] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Rare (Orphanet <1:1,000,000); over 200 patients reported as of 2020.', ev: 'unknown', why: 'No population-based incidence studies.', src: [ORPHA, NORD] },
    { label: 'Distribution', text: 'Reported worldwide (Netherlands, Turkey, Italy, UK, France, North America, Middle East, Japan); no dominant founder population.', ev: 'strong', src: [SCH, ORPHA] },
    { label: 'Common allele', text: 'The hypomorphic intronic c.228-20A>G variant is present (usually in trans with a missense allele) in many European patients.', ev: 'established', src: [SCH, STE] },
    { label: 'Sex distribution', text: 'No sex bias reported.', ev: 'established', src: [OMIM] },
  ],
  variants: [
    { id: 'lbsl-c228', disease: 'lbsl', gene: 'DARS2', transcript: 'NM_018122.5', hgvsc: 'c.228-20A>G', build: 'Not stated', type: 'Intronic (splice-affecting)', consequence: 'Cryptic splice site; partial mis-splicing with residual normal transcript', clinvar: 'Pathogenic', popFreq: 'Most common allele in European patients', phenotype: 'Mild-to-moderate LBSL when in trans with a missense allele', functional: 'RNA analysis shows partial intron retention / aberrant transcript; hypomorphic', ev: 'established', why: 'Recurrent allele with RNA functional data.', src: [SCH, STE, 'db:clinvar:DARS2'] },
    { id: 'lbsl-c492', disease: 'lbsl', gene: 'DARS2', transcript: 'NM_018122.5', hgvsc: 'c.492+2T>C', build: 'Not stated', type: 'Canonical splice donor', consequence: 'Disrupts splice donor', clinvar: 'Pathogenic', popFreq: 'Various populations', phenotype: 'LBSL', functional: 'Not characterised in source dossier', ev: 'strong', why: 'Canonical splice disruption; ClinVar pathogenic.', src: ['db:clinvar:DARS2'] },
    { id: 'lbsl-l613w', disease: 'lbsl', gene: 'DARS2', transcript: 'NM_018122.5', hgvsc: 'c.1837T>G', hgvsp: 'p.(Leu613Trp)', build: 'Not stated', type: 'Missense', consequence: 'Anticodon-binding domain substitution', clinvar: 'Pathogenic / Likely pathogenic', popFreq: 'Not stated', phenotype: 'LBSL', functional: 'Reduced aminoacylation', ev: 'strong', src: ['db:clinvar:DARS2'] },
    { id: 'lbsl-r263q', disease: 'lbsl', gene: 'DARS2', transcript: 'NM_018122.5', hgvsc: 'c.788G>A', hgvsp: 'p.(Arg263Gln)', build: 'Not stated', type: 'Missense', consequence: 'Catalytic core substitution', clinvar: 'Pathogenic / Likely pathogenic', popFreq: 'Not stated', phenotype: 'LBSL', functional: 'Not characterised in source dossier', ev: 'strong', src: ['db:clinvar:DARS2'] },
    { id: 'lbsl-d367y', disease: 'lbsl', gene: 'DARS2', transcript: 'NM_018122.5', hgvsc: 'c.1099G>T', hgvsp: 'p.(Asp367Tyr)', build: 'Not stated', type: 'Missense', consequence: 'Conserved residue substitution', clinvar: 'Likely pathogenic', popFreq: 'Not stated', phenotype: 'LBSL', functional: 'Not characterised', ev: 'emerging', why: 'ClinVar classification only.', src: ['db:clinvar:DARS2'] },
  ],
  genotypePhenotype: [
    { aspect: 'Severity', finding: 'Compound heterozygosity for intronic c.228-20A>G plus a missense allele gives a mild-to-moderate, slowly progressive course with childhood/adolescent onset.', ev: 'established', src: [SCH] },
    { aspect: 'Age of onset', finding: 'Two more severe (missense or truncating) alleles are associated with earlier onset and faster progression.', ev: 'strong', why: 'Multiple small series.', src: [STE] },
    { aspect: 'Clinical phenotype', finding: 'Adult-onset LBSL occurs with milder allele combinations; same MRI pattern with milder clinical severity (spastic paraplegia may predominate over ataxia).', ev: 'strong', src: [STE] },
    { aspect: 'Survival / outcome', finding: 'Biallelic truncating genotypes are presumed severe or lethal (case reports only).', ev: 'emerging', src: [STE, GR] },
    { aspect: 'Biomarker levels', finding: 'No systematic relationship between residual mt-AspRS activity and severity has been established.', ev: 'emerging', src: [STE] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'DARS2 (1q25.1)', detail: 'Biallelic variants, commonly a hypomorphic intronic allele plus a missense allele.', ev: 'established', src: [SCH] },
    { stage: 'Protein', label: 'Mitochondrial AspRS', detail: 'Reduced mt-AspRS quantity and/or catalytic activity.', ev: 'established', src: [SCH, 'db:uniprot:DARS2'] },
    { stage: 'Molecular function', label: 'mt-tRNA-Asp charging fails', detail: 'Ribosomal stalling at aspartate codons during mitochondrial translation.', ev: 'strong', src: [SCH] },
    { stage: 'Pathway', label: 'OXPHOS deficiency', detail: 'Reduced synthesis of mtDNA-encoded subunits (especially complexes I and III); lower ATP, compensatory glycolysis and lactate rise.', ev: 'established', src: [SCH, VDK03] },
    { stage: 'Cellular consequence', label: 'Energy failure in long tracts', detail: 'Myelinating cells and long axons with high sustained mitochondrial demand are selectively vulnerable.', ev: 'proposed', src: [SCH] },
    { stage: 'Phenotype', label: 'Tract-selective leukoencephalopathy', detail: 'Ataxia, spasticity and dorsal column signs; LBSL MRI pattern with MRS lactate.', ev: 'established', src: [VDK03, GR] },
  ],
  relations: [
    { from: ['gene', 'DARS2'], to: ['protein', 'Mitochondrial AspRS'], label: 'encodes', ev: 'established', why: 'Gene-protein identity.', src: [SCH, 'db:uniprot:DARS2'] },
    { from: ['protein', 'Mitochondrial AspRS'], to: ['pathway', 'Mitochondrial translation'], label: 'required for', ev: 'established', why: 'Canonical mt-aaRS role.', src: [SCH] },
    { from: ['pathway', 'Mitochondrial translation'], to: ['pathway', 'OXPHOS'], label: 'supplies subunits to', ev: 'established', why: '13 OXPHOS subunits are mtDNA-encoded.', src: [SCH] },
    { from: ['pathway', 'OXPHOS'], to: ['metabolite', 'Lactate'], label: 'failure raises', ev: 'established', why: 'MRS and CSF lactate elevation observed in affected white matter.', src: [VDK03, ULUC] },
    { from: ['metabolite', 'Lactate'], to: ['biomarker', 'MRS lactate'], label: 'measured as', ev: 'established', why: 'Diagnostic MRS finding.', src: [VDK03] },
    { from: ['pathway', 'OXPHOS'], to: ['region', 'Spinal cord dorsal columns'], label: 'deficit injures', ev: 'proposed', why: 'Tract selectivity explained by energy demand hypothesis, not directly tested.', src: [SCH] },
    { from: ['gene', 'DARS2'], to: ['cell', 'Oligodendrocytes'], label: 'expressed in', ev: 'strong', why: 'Expression atlas data; ubiquitous expression.', src: ['db:hpa:DARS2'] },
  ],
  cells: [
    { cell: 'Oligodendrocytes', role: 'primary', detail: 'High mitochondrial demand for myelination; proposed site of energy failure.', ev: 'proposed', src: [SCH] },
    { cell: 'Neurons / axons', role: 'primary', detail: 'Long-tract axons (corticospinal, dorsal column) selectively affected.', ev: 'strong', src: [VDK03, SCH] },
    { cell: 'Astrocytes', role: 'secondary', detail: 'DARS2 expressed; specific role in pathology not defined.', ev: 'unknown', src: ['db:hpa:DARS2'] },
    { cell: 'Schwann cells', role: 'secondary', detail: 'Peripheral sensory neuropathy reported in some patients.', ev: 'emerging', src: [ULUC] },
  ],
  regions: [
    { region: 'Cerebral white matter', finding: 'Diffuse periventricular and deep T2 hyperintensity; U-fibres relatively spared early.', src: [VDK03] },
    { region: 'Brainstem tracts', finding: 'Corticospinal tracts, medial lemniscus, trigeminal tracts, superior and inferior cerebellar peduncles.', src: [VDK03] },
    { region: 'Cerebellum', finding: 'Cerebellar white matter and peduncles.', src: [VDK03] },
    { region: 'Spinal cord', finding: 'Dorsal columns and lateral corticospinal tracts; most diagnostically specific feature.', src: [VDK03, GR] },
  ],
  biomarkers: [
    { name: 'MRI tract-selective pattern', category: 'Imaging', significance: 'Hallmark brain, brainstem and spinal cord tract involvement.', sample: 'In vivo brain and spine', assay: 'MRI (sagittal and axial spinal sequences essential)', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Spinal imaging must be performed; overlaps with HBSL (DARS1).', ev: 'established', src: [VDK03] },
    { name: 'MRS lactate (1.33 ppm doublet)', category: 'Imaging', significance: 'Impaired OXPHOS with anaerobic glycolysis.', sample: 'In vivo brain white matter', assay: 'Proton MRS (TE 144 ms, inverted doublet)', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Not always detectable; depends on technique, stage and region sampled.', ev: 'established', src: [VDK03] },
    { name: 'CSF lactate', category: 'Biochemical', significance: 'CNS mitochondrial dysfunction.', sample: 'CSF', assay: 'Lactate assay', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'May be normal in mild adult cases.', ev: 'strong', src: [ULUC, VDK03] },
    { name: 'Blood lactate', category: 'Biochemical', significance: 'Systemic mitochondrial burden.', sample: 'Blood', assay: 'Lactate assay', purpose: ['Supplementary'], status: 'Clinical adjunct', limitations: 'Non-specific; often normal.', ev: 'emerging', src: [GR] },
    { name: 'CSF protein', category: 'Biochemical', significance: 'Mild elevation common; non-specific.', sample: 'CSF', assay: 'Total protein', purpose: ['Supplementary'], status: 'Clinical adjunct', limitations: 'Non-specific.', ev: 'established', src: [ULUC] },
    { name: 'Biallelic DARS2 variants', category: 'Genetic', significance: 'Molecular confirmation.', sample: 'DNA (blood)', assay: 'Sequencing incl. intronic c.228-20A>G region; CNV; RNA studies', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Deep intronic allele can be missed by exon-only capture.', ev: 'established', src: [SCH, GR] },
    { name: 'Serum neurofilament light (NfL)', category: 'Fluid (neuro-glial injury)', significance: 'Axonal injury.', sample: 'Serum', assay: 'Immunoassay', purpose: ['Monitoring'], status: 'Experimental', limitations: 'Not validated for LBSL.', ev: 'emerging', src: [GR] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Child or young adult with ataxia, spasticity and dorsal column signs, without systemic mitochondrial features (cardiomyopathy, myopathy, ophthalmoplegia).', src: [GR, VDK03] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain + spinal MRI with MRS', detail: 'Diffuse cerebral WM signal plus selective brainstem and spinal tract involvement; lactate peak at 1.33 ppm.', src: [VDK03] },
    { phase: 'Investigation', category: 'Biochemical', method: 'CSF and blood lactate; muscle OXPHOS studies', detail: 'CSF lactate often elevated; muscle may show complex I/III deficiency, but normal results do not exclude LBSL.', src: [ULUC, GR] },
    { phase: 'Confirmation', category: 'Genetic', method: 'DARS2 sequencing + del/dup', detail: 'Include targeted analysis of intronic c.228-20A>G; mitochondrial or mt-aaRS panel; WES/WGS if unsolved.', src: [SCH, GR] },
    { phase: 'Confirmation', category: 'Genetic', method: 'RNA studies', detail: 'Confirm cryptic splicing effect of deep intronic variants.', src: [SCH] },
    { phase: 'Confirmation', category: 'Prenatal', method: 'CVS / amniocentesis', detail: 'Targeted familial variant testing once both variants are known. No newborn screening.', src: [GR] },
  ],
  differential: [
    'HBSL (DARS1): similar tract pattern without lactate elevation',
    'LTBL (EARS2): thalamic involvement and biphasic infantile course',
    'Classical mitochondrial encephalomyopathies (systemic features present)',
    'Other mt-aaRS leukoencephalopathies',
  ],
  phenotypes: {
    applicable: true,
    note: 'The literature distinguishes a typical childhood-onset form, an adult-onset milder form and rare severe early-onset cases.',
    forms: [
      { name: 'Typical (childhood onset)', onset: '1–10 years', severity: 'Moderate; ataxia + spasticity', progression: 'Slow, over decades', genetics: 'Compound heterozygous: intronic c.228-20A>G + missense', markers: 'Classic MRI pattern; MRS and CSF lactate elevated', src: [SCH, GR] },
      { name: 'Adult onset', onset: '>20 years', severity: 'Mild', progression: 'Slow', genetics: 'Milder hypomorphic allele combinations', markers: 'Same MRI pattern; CSF lactate may be normal', src: [STE] },
      { name: 'Severe early onset', onset: 'Infancy', severity: 'Severe regression; seizures possible', progression: 'Rapid', genetics: 'Biallelic severe missense or truncating', markers: 'Classic pattern with variable severity', src: [STE] },
    ],
  },
  management: [
    { category: 'Symptomatic', text: 'Spasticity: baclofen (oral or intrathecal), tizanidine, botulinum toxin, orthoses.', src: [GR] },
    { category: 'Supportive', text: 'Physiotherapy (balance, contracture prevention), occupational therapy, speech therapy for dysarthria; nutritional support if dysphagia.', src: [GR, NORD] },
    { category: 'Symptomatic', text: 'Anti-seizure medication when needed; avoid valproic acid (mitochondrial toxin) where alternatives exist.', src: [GR] },
    { category: 'Supportive', text: 'Empirical mitochondrial supplements (CoQ10, riboflavin, thiamine, L-carnitine) are used off-label without LBSL-specific evidence.', src: [GR] },
    { category: 'Monitoring', text: 'Avoid prolonged fasting and high physiological stress; neurological follow-up for episodic deterioration.', src: [GR] },
  ],
  therapies: [
    { id: 'lbsl-aav', name: 'AAV-DARS2 gene therapy', modality: 'Gene therapy', target: 'DARS2', mechanism: 'Deliver DARS2 to CNS oligodendrocytes and neurons.', delivery: 'CNS-directed AAV (conceptual)', stage: 'Discovery', evidenceBase: 'Animal', status: 'Proposed / early preclinical; no clinical-stage program', ev: 'proposed', why: 'Conditional Dars2 mouse confirms CNS vulnerability, but no gene therapy data reported.', src: [QMOUSE, STE] },
    { id: 'lbsl-chaperone', name: 'mt-AspRS stabilizing chaperones', modality: 'Small molecule', target: 'DARS2 (mt-AspRS)', mechanism: 'Stabilise misfolded mt-AspRS to raise residual activity.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Research level; structural studies ongoing', ev: 'emerging', why: 'Research-level concept with no clinical data.', src: [STE] },
    { id: 'lbsl-nad', name: 'NAD+ precursors (nicotinamide riboside, NMN)', modality: 'Small molecule', target: 'OXPHOS capacity', mechanism: 'Support respiratory chain function.', delivery: 'Oral', stage: 'Discovery', evidenceBase: 'Human', status: 'Proposed; used in other mitochondrial diseases, no LBSL data', ev: 'proposed', why: 'Extrapolated from other mitochondrial disorders.', src: [GR] },
    { id: 'lbsl-biogenesis', name: 'Mitochondrial biogenesis inducers (AICAR, bezafibrate, PGC-1α agonists)', modality: 'Small molecule', target: 'PGC-1α / mitochondrial biogenesis', mechanism: 'Increase mitochondrial mass to compensate for translation deficit.', delivery: 'Oral', stage: 'Discovery', evidenceBase: 'Animal', status: 'Proposed; preclinical rationale from other mt-disorders', ev: 'proposed', why: 'No LBSL-specific data.', src: [GR] },
  ],
  trials: [],
  milestones: [
    { year: 2003, label: 'LBSL MRI pattern defined', stage: 'Discovery', src: [VDK03] },
    { year: 2007, label: 'DARS2 identified; common intronic allele characterised', stage: 'Discovery', src: [SCH] },
    { year: 2011, label: 'Conditional CNS Dars2 knockout mouse recapitulates OXPHOS deficiency', stage: 'Animal studies', src: [QMOUSE] },
    { year: 2012, label: 'Late-onset LBSL described; allelic spectrum expanded', stage: 'Discovery', src: [STE] },
  ],
  gaps: [
    { text: 'No interventional clinical trials registered as of 2026; no formal natural-history registry.', ev: 'unknown', src: [GR] },
    { text: 'Why long white matter tracts are selectively vulnerable is unproven.', ev: 'proposed', src: [SCH] },
    { text: 'Residual mt-AspRS activity thresholds versus severity are not defined.', ev: 'emerging', src: [STE] },
    { text: 'Constitutive Dars2 knockout is embryonic lethal, limiting preclinical models.', ev: 'strong', src: [QMOUSE] },
    { text: 'No validated fluid biomarker or newborn screening marker.', ev: 'unknown', src: [GR] },
  ],
}
