import type { Disease } from '../types'

const GR = 'gr:alexander'

export const alexander: Disease = {
  id: 'alexander',
  name: 'Alexander Disease',
  short: 'Alexander',
  color: '#5a6fd6',
  synonyms: ['AxD', 'Fibrinoid leukodystrophy', 'GFAP-related astrogliopathy'],
  classification: 'Primary astrocytopathy; leukodystrophy with Rosenthal fibres',
  inheritance: 'Autosomal dominant (mostly de novo)',
  genes: ['GFAP'],
  tagline: 'Gain-of-function GFAP variants → Rosenthal fibres → astrocyte failure and white-matter loss.',
  identifiers: [
    { label: 'OMIM', value: '203450', url: 'https://www.omim.org/entry/203450' },
    { label: 'Orphanet', value: 'ORPHA:58', url: 'https://www.orpha.net/en/disease/detail/58' },
    { label: 'GeneReviews', value: 'NBK1172', url: 'https://www.ncbi.nlm.nih.gov/books/NBK1172/' },
    { label: 'MONDO', value: 'search', url: 'https://monarchinitiative.org/search?q=Alexander%20disease' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Heterozygous, usually de novo, missense variants in GFAP.', ev: 'established', src: ['lit:brenner2001', GR] },
    { label: 'Hallmark pathology', text: 'Rosenthal fibres — cytoplasmic aggregates of GFAP, αB-crystallin and HSP27 in astrocytes.', ev: 'established', src: ['lit:messing2012'] },
    { label: 'Mechanism class', text: 'Toxic gain of function with GFAP accumulation (feed-forward increase of GFAP levels).', ev: 'strong', src: ['lit:messing2012', 'lit:hagemann2018'] },
    { label: 'Primary cell type', text: 'Astrocytes; first leukodystrophy recognised as a primary astrocyte disorder.', ev: 'established', src: ['lit:messing2012'] },
  ],
  clinical: [
    { label: 'Type I (early onset)', text: 'Macrocephaly, seizures, developmental delay/regression, frontal-predominant leukodystrophy; typically onset before age 4.', ev: 'established', src: ['lit:prust2011'] },
    { label: 'Type II (later onset)', text: 'Bulbar/pseudobulbar signs (dysphagia, dysphonia), palatal myoclonus, ataxia, autonomic dysfunction; brainstem/spinal cord atrophy.', ev: 'established', src: ['lit:prust2011'] },
    { label: 'Progression', text: 'Progressive in both types; Type I generally faster.', ev: 'established', src: ['lit:prust2011'] },
    { label: 'Prognosis', text: 'Type I often fatal in childhood; Type II survival of years to decades after onset.', ev: 'strong', src: [GR] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Estimated ~1 in 2.7 million in one national study; likely underestimated, especially adult forms.', ev: 'emerging', src: [GR, 'orpha:58'] },
    { label: 'Inheritance pattern', text: 'Most infantile cases de novo; familial dominant transmission more common in adult-onset disease.', ev: 'established', src: [GR] },
    { label: 'Ancestry', text: 'Pan-ethnic; no founder variants.', ev: 'established', src: [GR] },
  ],
  variants: [
    { id: 'gfap-r239c', disease: 'alexander', gene: 'GFAP', transcript: 'NM_002055.5', hgvsc: 'c.715C>T', hgvsp: 'p.(Arg239Cys)', build: 'GRCh38', type: 'Missense', consequence: 'Gain of function; aggregation', clinvar: 'Pathogenic', popFreq: 'Recurrent hotspot (de novo)', phenotype: 'Type I, often severe infantile', functional: 'Aggregation in cell models', ev: 'established', why: 'Hotspot with consistent severe phenotype.', src: ['lit:brenner2001', 'lit:prust2011', 'db:clinvar:GFAP'] },
    { id: 'gfap-r239h', disease: 'alexander', gene: 'GFAP', transcript: 'NM_002055.5', hgvsc: 'c.716G>A', hgvsp: 'p.(Arg239His)', build: 'GRCh38', type: 'Missense', consequence: 'Gain of function', clinvar: 'Pathogenic', popFreq: 'Recurrent hotspot', phenotype: 'Type I, severe', functional: 'Aggregation', ev: 'established', src: ['lit:prust2011', 'db:clinvar:GFAP'] },
    { id: 'gfap-r79c', disease: 'alexander', gene: 'GFAP', transcript: 'NM_002055.5', hgvsc: 'c.235C>T', hgvsp: 'p.(Arg79Cys)', build: 'GRCh38', type: 'Missense', consequence: 'Gain of function', clinvar: 'Pathogenic', popFreq: 'Recurrent hotspot', phenotype: 'Type I and Type II reported', functional: 'Aggregation', ev: 'established', src: ['lit:brenner2001', 'lit:prust2011'] },
    { id: 'gfap-r88c', disease: 'alexander', gene: 'GFAP', transcript: 'NM_002055.5', hgvsc: 'c.262C>T', hgvsp: 'p.(Arg88Cys)', build: 'GRCh38', type: 'Missense', consequence: 'Gain of function', clinvar: 'Pathogenic', popFreq: 'Recurrent hotspot', phenotype: 'Type I and Type II reported', functional: 'Aggregation', ev: 'established', src: ['lit:prust2011', 'db:clinvar:GFAP'] },
  ],
  genotypePhenotype: [
    { aspect: 'Severity', finding: 'p.Arg239Cys/His associated with earlier onset and more severe disease.', ev: 'strong', src: ['lit:prust2011'] },
    { aspect: 'Clinical phenotype', finding: 'Same variant can produce Type I or Type II disease; modifiers proposed.', ev: 'established', src: ['lit:prust2011'] },
    { aspect: 'Biomarker levels', finding: 'CSF GFAP is elevated across genotypes; relation to severity not established.', ev: 'emerging', src: ['lit:jany2015'] },
    { aspect: 'Age of onset', finding: 'Genetic modifiers (e.g. GFAP promoter, other loci) influence onset.', ev: 'proposed', src: ['lit:messing2012'] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'GFAP (17q21.31)', detail: 'Heterozygous gain-of-function missense.', ev: 'established', src: ['lit:brenner2001'] },
    { stage: 'Protein', label: 'Mutant GFAP', detail: 'Intermediate filament assembly disrupted; aggregation-prone.', ev: 'established', src: ['lit:messing2012'] },
    { stage: 'Molecular function', label: 'GFAP accumulation & aggregation', detail: 'Rosenthal fibres; proteasome inhibition; feed-forward GFAP elevation.', ev: 'strong', src: ['lit:messing2012'] },
    { stage: 'Pathway', label: 'Stress response / proteostasis failure', detail: 'Activation of stress kinases and small heat-shock proteins.', ev: 'strong', src: ['lit:messing2012'] },
    { stage: 'Cellular consequence', label: 'Astrocyte dysfunction', detail: 'Loss of glutamate transport, altered ion/water homeostasis, secondary myelin loss.', ev: 'strong', src: ['lit:messing2012'] },
    { stage: 'Phenotype', label: 'Leukodystrophy / brainstem atrophy', detail: 'Type I frontal leukodystrophy; Type II hindbrain involvement.', ev: 'established', src: ['lit:prust2011'] },
  ],
  relations: [
    { from: ['gene', 'GFAP'], to: ['cell', 'Astrocytes'], label: 'gain of function in', ev: 'established', why: 'Rosenthal fibres in astrocytes are diagnostic.', src: ['lit:brenner2001', 'lit:messing2012'] },
    { from: ['gene', 'GFAP'], to: ['phenotype', 'Rosenthal fibres'], label: 'forms', ev: 'established', why: 'Neuropathological hallmark.', src: ['lit:messing2012'] },
    { from: ['cell', 'Astrocytes'], to: ['cell', 'Oligodendrocytes'], label: 'non-cell-autonomous injury to', ev: 'strong', why: 'Model data; mechanism incompletely defined.', src: ['lit:messing2012'] },
    { from: ['gene', 'GFAP'], to: ['biomarker', 'CSF GFAP'], label: 'elevated', ev: 'emerging', why: 'Single cohort study.', src: ['lit:jany2015'] },
    { from: ['therapy', 'Zilganersen (GFAP ASO)'], to: ['gene', 'GFAP'], label: 'reduces', ev: 'emerging', why: 'Reverses pathology in rodent models; pivotal human trial in progress/reported by sponsor.', src: ['lit:hagemann2018', 'ct:NCT04849741'] },
  ],
  cells: [
    { cell: 'Astrocytes', role: 'primary', detail: 'Rosenthal fibres; GFAP aggregation; dysfunction.', ev: 'established', src: ['lit:messing2012'] },
    { cell: 'Oligodendrocytes', role: 'secondary', detail: 'Secondary myelin loss.', ev: 'strong', src: ['lit:messing2012'] },
    { cell: 'Neurons / axons', role: 'secondary', detail: 'Secondary neuronal dysfunction, seizures.', ev: 'strong', src: ['lit:messing2012'] },
    { cell: 'Microglia / macrophages', role: 'secondary', detail: 'Inflammatory activation in models.', ev: 'emerging', src: ['lit:messing2012'] },
  ],
  regions: [
    { region: 'Frontal white matter', finding: 'Frontal-predominant abnormality (Type I).', src: ['lit:vdknaap2001'] },
    { region: 'Periventricular rim', finding: 'T1 hyperintense / T2 hypointense rim.', src: ['lit:vdknaap2001'] },
    { region: 'Basal ganglia & thalami', finding: 'Signal abnormality or swelling.', src: ['lit:vdknaap2001'] },
    { region: 'Brainstem (medulla) & cervical cord', finding: 'Atrophy ("tadpole" sign) in Type II.', src: ['lit:prust2011'] },
  ],
  biomarkers: [
    { name: 'MRI criteria (van der Knaap)', category: 'Imaging', significance: '4 of 5 criteria support diagnosis of Type I.', sample: 'In vivo brain', assay: 'MRI', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Less sensitive for Type II.', ev: 'established', src: ['lit:vdknaap2001'] },
    { name: 'CSF GFAP', category: 'Fluid (neuro-glial injury)', significance: 'Elevated GFAP reflects disease biology; potential pharmacodynamic marker.', sample: 'CSF', assay: 'ELISA', purpose: ['Monitoring', 'Treatment response'], status: 'Experimental', limitations: 'Not disease-specific; small cohorts.', ev: 'emerging', src: ['lit:jany2015'] },
    { name: 'Blood GFAP', category: 'Fluid (neuro-glial injury)', significance: 'Less consistently elevated than CSF.', sample: 'Plasma / serum', assay: 'Immunoassay', purpose: ['Monitoring'], status: 'Experimental', limitations: 'Variable elevation.', ev: 'emerging', src: ['lit:jany2015'] },
    { name: 'GFAP sequencing', category: 'Genetic', significance: 'Confirms diagnosis in >95% of clinically typical cases.', sample: 'Blood DNA', assay: 'Sanger / NGS', purpose: ['Diagnosis'], status: 'Established clinical', limitations: '—', ev: 'established', src: [GR] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Infant with macrocephaly and seizures; adult with bulbar signs and palatal tremor.', src: ['lit:prust2011'] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain & spine MRI', detail: 'Frontal-predominant WM change, periventricular rim, contrast enhancement; medullary atrophy (Type II).', src: ['lit:vdknaap2001'] },
    { phase: 'Confirmation', category: 'Genetic', method: 'GFAP sequencing', detail: 'Heterozygous pathogenic variant; parental testing to establish de novo status.', src: [GR, 'db:clinvar:GFAP'] },
  ],
  differential: ['Canavan disease (macrocephaly)', 'Megalencephalic leukoencephalopathy with subcortical cysts', 'Adult: multiple system atrophy, MS, brainstem tumour'],
  phenotypes: {
    applicable: true,
    note: 'Prust et al. (2011) Type I / Type II classification supersedes the older infantile/juvenile/adult scheme.',
    forms: [
      { name: 'Type I', onset: 'Typically < 4 years', severity: 'Severe', progression: 'Faster', genetics: 'Enriched for p.Arg239Cys/His', markers: 'Frontal WM; macrocephaly', src: ['lit:prust2011'] },
      { name: 'Type II', onset: 'Any age, often adolescence/adult', severity: 'Variable', progression: 'Slower', genetics: 'Broad variant spectrum', markers: 'Medulla / cervical cord atrophy', src: ['lit:prust2011'] },
    ],
  },
  management: [
    { category: 'Symptomatic', text: 'Seizure management; treatment of raised intracranial pressure/hydrocephalus where present.', src: [GR] },
    { category: 'Supportive', text: 'Feeding and swallowing support, respiratory care, physiotherapy.', src: [GR, 'nord:alexander'] },
    { category: 'Monitoring', text: 'Swallowing assessment, scoliosis and autonomic monitoring in Type II.', src: [GR] },
  ],
  therapies: [
    { id: 'axd-zilg', name: 'Zilganersen (ION373)', modality: 'Antisense / RNA', target: 'GFAP mRNA', mechanism: 'Antisense oligonucleotide reduces GFAP expression.', delivery: 'Intrathecal', stage: 'Later-stage trials', evidenceBase: 'Human + animal', status: 'Phase 1–3 (check sponsor results)', ev: 'emerging', why: 'Rodent reversal of pathology; pivotal trial data from sponsor pending peer review.', src: ['lit:hagemann2018', 'ct:NCT04849741'] },
    { id: 'axd-ceftriax', name: 'Ceftriaxone / GLT-1 upregulation', modality: 'Small molecule', target: 'EAAT2 (GLT-1)', mechanism: 'Restore astrocytic glutamate transport.', delivery: 'Intravenous', stage: 'Animal studies', evidenceBase: 'Animal', status: 'Preclinical', ev: 'proposed', why: 'Model data, not tested in trials.', src: ['lit:messing2012'] },
  ],
  trials: [
    { nct: 'NCT04849741', title: 'Zilganersen (ION373) in Alexander disease', intervention: 'Zilganersen', therapyId: 'axd-zilg', mechanism: 'GFAP antisense', type: 'Interventional (randomised)', phase: 'Phase 1–3', status: 'Active, not recruiting (check registry)', sponsor: 'Ionis Pharmaceuticals', population: 'Children and adults with AxD', outcomes: 'Gait speed (10MWT); safety; CSF GFAP', snapshot: '2025-06-01', verified: false },
  ],
  milestones: [
    { year: 2001, label: 'GFAP identified as causal gene', stage: 'Discovery', src: ['lit:brenner2001'] },
    { year: 2001, label: 'MRI diagnostic criteria', stage: 'Discovery', src: ['lit:vdknaap2001'] },
    { year: 2011, label: 'Type I / II classification', stage: 'Discovery', src: ['lit:prust2011'] },
    { year: 2018, label: 'ASO reverses pathology in rodents', stage: 'Animal studies', src: ['lit:hagemann2018'] },
    { year: 2021, label: 'Zilganersen pivotal-phase trial opens', stage: 'Later-stage trials', src: ['ct:NCT04849741'] },
  ],
  gaps: [
    { text: 'Determinants of Type I vs Type II expression for the same variant.', ev: 'unknown', src: ['lit:prust2011'] },
    { text: 'Validated clinical outcome measures for Type I children.', ev: 'unknown', src: [GR] },
    { text: 'Mechanism linking astrocyte GFAP aggregation to myelin loss.', ev: 'proposed', src: ['lit:messing2012'] },
  ],
}
