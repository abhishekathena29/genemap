import type { Disease, Gene, Source } from '../types'
import { geneDb, lit, omim } from '../cite'

const BUG = 'lit:carasal:bugiani2016'
const HAF = 'lit:carasal:haffner2016'
const HWA = 'lit:carasal:hwang2017'
const FIN = 'lit:carasal:finsterer2019'
const MAN = 'lit:carasal:mancuso2020'
const BUD = 'lit:carasal:budhdeo2022'
const CAV = 'lit:carasal:cavalcante2024'

export const carasalSources: Source[] = [
  omim('616779', 'Arteriopathy, cerebral, autosomal dominant, with strokes and leukoencephalopathy (CARASAL)'),
  omim('256540', 'Galactosialidosis (allelic recessive CTSA disorder)'),
  lit(BUG, 'Bugiani M, et al.', 2016, 'Cathepsin A-related arteriopathy with strokes and leukoencephalopathy (CARASAL)', 'Neurology'),
  lit(HAF, 'Haffner C, Vinters HV', 2016, 'CADASIL, CARASIL, CARASAL: The linguistic subtleties of cerebral small vessel disease', 'Neurology', 'review'),
  lit(HWA, 'Hwang YT, et al.', 2017, 'Brainstem phenotype of cathepsin A-related arteriopathy with strokes and leukoencephalopathy', 'Neurology Genetics'),
  lit(FIN, 'Finsterer J, et al.', 2019, 'Update on hereditary, autosomal dominant cathepsin-A-related arteriopathy with strokes and leukoencephalopathy (CARASAL)', 'Acta Neurologica Belgica', 'review'),
  lit(MAN, 'Mancuso M, et al.', 2020, 'Monogenic cerebral small-vessel diseases: diagnosis and therapy. Consensus recommendations of the European Academy of Neurology', 'European Journal of Neurology', 'guideline'),
  lit(BUD, 'Budhdeo S, et al.', 2022, 'A rare cause of monogenic cerebral small vessel disease and stroke: cathepsin A-related arteriopathy with strokes and leukoencephalopathy (CARASAL)', 'Journal of Neurology'),
  lit(CAV, 'Cavalcante FLHB, et al.', 2024, 'Cathepsin A-related arteriopathy with strokes and leukoencephalopathy (CARASAL): a systematic review', 'Arquivos de Neuro-Psiquiatria', 'review'),
]

export const carasalGenes: Gene[] = [
  {
    symbol: 'CTSA',
    name: 'Cathepsin A',
    protein: 'Cathepsin A / protective protein cathepsin A (PPCA), lysosomal serine carboxypeptidase',
    location: '20q13.12',
    function:
      'Forms a protective lysosomal complex with beta-galactosidase (GLB1) and neuraminidase (NEU1), and acts as a serine carboxypeptidase degrading bioactive peptides including endothelin-1 (ET-1), substance P, oxytocin and bradykinin.',
    pathway: 'Lysosomal protective complex; endothelin-1 catabolism',
    transcript: 'NM_000308.3',
    uniprot: 'P10619',
    ncbiGene: '5476',
    variantTypes: ['Heterozygous missense (CARASAL; p.Arg325Cys recurrent)', 'Biallelic variants cause galactosialidosis (allelic disorder)'],
    diseases: ['carasal'],
    ev: 'established',
    src: [BUG, FIN, 'omim:616779', ...geneDb('CTSA')],
  },
]

export const carasal: Disease = {
  id: 'carasal',
  name: 'Cathepsin A-Related Arteriopathy with Strokes and Leukoencephalopathy',
  short: 'CARASAL',
  lastUpdated: '2026-10-08',
  color: '#6c4fb0',
  synonyms: ['CARASAL', 'Cathepsin A-related cerebral small vessel disease', 'CTSA-related leukoencephalopathy', 'CARASAL syndrome'],
  classification: 'Hereditary cerebral small vessel disease; monogenic adult-onset leukoencephalopathy (lysosomal enzyme gene)',
  inheritance: 'Autosomal dominant',
  genes: ['CTSA'],
  tagline: 'Dominant CTSA variants impair cathepsin A degradation of endothelin-1 → ET-1 excess → small-vessel arteriopathy, strokes and leukoencephalopathy.',
  identifiers: [
    { label: 'OMIM', value: '616779', url: 'https://www.omim.org/entry/616779' },
    { label: 'OMIM (allelic, galactosialidosis)', value: '256540', url: 'https://www.omim.org/entry/256540' },
    { label: 'MONDO', value: 'search', url: 'https://monarchinitiative.org/search?q=CARASAL' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Heterozygous pathogenic CTSA variants reduce cathepsin A carboxypeptidase activity.', ev: 'established', why: 'Segregation in affected pedigrees plus cell-based enzymatic data.', src: [BUG, 'omim:616779'] },
    { label: 'Hallmark pathology', text: 'Endothelin-1 (ET-1) accumulates in white matter astrocytes, a finding not seen in other hereditary small vessel diseases.', ev: 'established', why: 'Demonstrated by immunohistochemistry in patient neuropathology.', src: [BUG] },
    { label: 'Disease category', text: 'Adult-onset hereditary cerebral small vessel disease, distinct from CADASIL (NOTCH3) and CARASIL (HTRA1) in its upstream mechanism.', ev: 'established', src: [BUG, HAF] },
    { label: 'Allelic disorder', text: 'Biallelic CTSA variants cause galactosialidosis, a recessive lysosomal storage disease with an entirely different phenotype.', ev: 'established', src: [BUG, 'omim:256540'] },
    { label: 'Dominant mechanism', text: 'Whether disease results from haploinsufficiency or a dominant-negative effect within the lysosomal complex is not defined.', ev: 'proposed', why: 'Enzymatic impairment shown; precise dominant mechanism untested.', src: [BUG] },
  ],
  clinical: [
    { label: 'Age of onset', text: 'Typically the third to fifth decade; earlier (second decade) and later (sixth to seventh decade) onset reported.', ev: 'emerging', why: 'Derived from a small number of families.', src: [BUG, FIN] },
    { label: 'Leukoencephalopathy', text: 'Diffuse white matter disease on MRI that is often disproportionately severe relative to clinical deficits early in the course.', ev: 'established', src: [BUG, BUD] },
    { label: 'Stroke', text: 'Recurrent ischaemic (lacunar) strokes; haemorrhagic stroke in a subset.', ev: 'established', src: [BUG, FIN] },
    { label: 'Hypertension', text: 'Therapy-resistant hypertension is a recurring systemic feature, possibly linked to ET-1-mediated vasoconstriction; absent in some cases.', ev: 'emerging', why: 'Consistent in early families; link to ET-1 is mechanistic inference.', src: [BUG, CAV] },
    { label: 'Brainstem and other features', text: 'Migraine, facial pain, vertigo, hearing abnormalities, dysphagia, mood and behavioural change, REM-sleep behaviour disorder and slowly progressive cognitive decline.', ev: 'emerging', src: [BUG, HWA, FIN] },
    { label: 'Progression', text: 'Variable accumulation of deficit over years to decades from strokes and progressive white matter injury; marked intrafamilial variability.', ev: 'emerging', why: 'No natural history study exists.', src: [FIN, CAV] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Ultra-rare; tens of published cases (estimated fewer than 50-100) from a small number of families. Population prevalence and incidence are not established.', ev: 'emerging', src: [BUG, CAV] },
    { label: 'Geography', text: 'Reported mainly from the Netherlands, United Kingdom, Italy, Belgium and Brazil; likely underdiagnosed elsewhere.', ev: 'emerging', src: [BUG, BUD] },
    { label: 'Sex distribution', text: 'No established sex predilection, consistent with autosomal dominant inheritance.', ev: 'emerging', src: [BUG] },
    { label: 'Penetrance', text: 'Appears high but age-dependent, with variable expressivity.', ev: 'emerging', src: [BUG, FIN] },
    { label: 'Diagnostic delay', text: 'Likely substantial owing to overlap with CADASIL, sporadic small vessel disease and multiple sclerosis.', ev: 'emerging', src: [BUG, MAN] },
  ],
  variants: [
    { id: 'carasal-r325c', disease: 'carasal', gene: 'CTSA', transcript: 'NM_000308.3', hgvsc: 'c.973C>T', hgvsp: 'p.(Arg325Cys)', build: 'GRCh38', type: 'Missense', consequence: 'Impaired ET-1 degradation; dominant mechanism', clinvar: 'Confirm current classification in ClinVar', popFreq: 'Rare/absent in control populations (gnomAD)', phenotype: 'Full CARASAL spectrum, from leukoencephalopathy-predominant to multi-infarct disease', functional: 'Exon 8 (catalytic domain region); mutant CathA shows impaired ET-1 degradation in cell assays', ev: 'established', why: 'Most recurrent variant; segregates in multiple independent families with functional support.', src: [BUG, BUD, 'db:clinvar:CTSA'] },
  ],
  genotypePhenotype: [
    { aspect: 'Clinical phenotype', finding: 'p.Arg325Cys is associated with the full clinical spectrum, implying strong influence of modifiers such as hypertension severity.', ev: 'emerging', why: 'Few cases; one predominant variant.', src: [BUG] },
    { aspect: 'Clinical phenotype', finding: 'A brainstem phenotype (facial pain, hearing loss, vertigo, dysphagia) is described; whether it is variant-specific is not established.', ev: 'emerging', src: [HWA] },
    { aspect: 'MRI phenotype', finding: 'Imaging-clinical dissociation (extensive white matter disease, relatively preserved function) appears consistent across genotypes.', ev: 'emerging', src: [BUG] },
    { aspect: 'Age of onset', finding: 'Marked intrafamilial variability in onset age and stroke frequency argues against tight genotype-phenotype correlation.', ev: 'emerging', src: [FIN] },
    { aspect: 'Survival / outcome', finding: 'No genotype-based predictor of outcome.', ev: 'unknown', why: 'Absence of natural history data.', src: [CAV] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'CTSA (20q13.12)', detail: 'Heterozygous pathogenic variants (e.g. p.Arg325Cys).', ev: 'established', src: [BUG] },
    { stage: 'Protein', label: 'Cathepsin A (PPCA)', detail: 'Lysosomal serine carboxypeptidase with reduced activity; dominant mechanism unresolved.', ev: 'established', src: [BUG, 'db:uniprot:CTSA'] },
    { stage: 'Molecular function', label: 'ET-1 catabolism fails', detail: 'Mutant CathA does not cleave the C-terminus of endothelin-1 to inactive fragments.', ev: 'established', src: [BUG] },
    { stage: 'Pathway', label: 'Endothelin-1 excess', detail: 'ET-1 accumulates in white matter astrocytes; possible secondary GLB1/NEU1 impairment is unproven.', ev: 'established', src: [BUG, FIN] },
    { stage: 'Cellular consequence', label: 'Small-vessel arteriopathy', detail: 'Hypothesised smooth muscle hypertrophy, luminal narrowing, endothelial dysfunction and impaired oligodendrocyte maturation.', ev: 'proposed', src: [BUG, FIN] },
    { stage: 'Phenotype', label: 'Strokes and leukoencephalopathy', detail: 'Lacunar strokes, diffuse white matter disease, resistant hypertension, brainstem symptoms, cognitive decline.', ev: 'established', src: [BUG, BUD] },
  ],
  relations: [
    { from: ['gene', 'CTSA'], to: ['protein', 'Cathepsin A'], label: 'encodes', ev: 'established', why: 'Gene-protein identity.', src: ['db:uniprot:CTSA'] },
    { from: ['protein', 'Cathepsin A'], to: ['metabolite', 'Endothelin-1 (ET-1)'], label: 'degrades', ev: 'established', why: 'CathA is the principal ET-1-degrading carboxypeptidase in brain and vasculature.', src: [BUG, FIN] },
    { from: ['gene', 'CTSA'], to: ['metabolite', 'Endothelin-1 (ET-1)'], label: 'loss causes accumulation of', ev: 'established', why: 'ET-1 accumulation shown in patient neuropathology.', src: [BUG] },
    { from: ['metabolite', 'Endothelin-1 (ET-1)'], to: ['cell', 'Astrocytes'], label: 'accumulates in', ev: 'established', why: 'Immunohistochemistry of CARASAL brain tissue.', src: [BUG] },
    { from: ['metabolite', 'Endothelin-1 (ET-1)'], to: ['pathway', 'Small-vessel arteriopathy'], label: 'drives (hypothesised)', ev: 'proposed', why: 'Inferred from ET-1 vasoconstrictor and mitogenic biology; not directly tested in models.', src: [BUG, FIN] },
    { from: ['metabolite', 'Endothelin-1 (ET-1)'], to: ['phenotype', 'Therapy-resistant hypertension'], label: 'may contribute to', ev: 'proposed', why: 'Mechanistic inference; plasma ET-1 not measured systematically.', src: [BUG] },
    { from: ['metabolite', 'Endothelin-1 (ET-1)'], to: ['cell', 'Oligodendrocytes'], label: 'impairs maturation (proposed)', ev: 'proposed', why: 'ET-1 inhibits OPC differentiation in animal models.', src: [BUG, FIN] },
    { from: ['pathway', 'Small-vessel arteriopathy'], to: ['phenotype', 'Lacunar strokes and leukoencephalopathy'], label: 'causes', ev: 'strong', why: 'Arteriolar wall thickening and ischaemic rarefaction on neuropathology.', src: [BUG] },
    { from: ['protein', 'Cathepsin A'], to: ['protein', 'GLB1 / NEU1 complex'], label: 'stabilises', ev: 'established', why: 'Basis of galactosialidosis; contribution to CARASAL is unproven.', src: [BUG, 'omim:256540'] },
    { from: ['metabolite', 'Endothelin-1 (ET-1)'], to: ['biomarker', 'ET-1 immunoreactivity in white matter'], label: 'measured as', ev: 'established', why: 'Key neuropathological marker.', src: [BUG] },
    { from: ['therapy', 'Endothelin receptor antagonists'], to: ['metabolite', 'Endothelin-1 (ET-1)'], label: 'blocks signalling of (proposed)', ev: 'proposed', why: 'Rational repurposing; no preclinical or clinical data in CARASAL.', src: [FIN] },
  ],
  cells: [
    { cell: 'Vascular / endothelial cells', role: 'primary', detail: 'Small-vessel smooth muscle and endothelial cells: arteriolar wall thickening and luminal narrowing (ET-1-mediated vasculopathy).', ev: 'strong', src: [BUG] },
    { cell: 'Astrocytes', role: 'primary', detail: 'Site of ET-1 accumulation in white matter.', ev: 'established', src: [BUG] },
    { cell: 'Oligodendrocytes', role: 'secondary', detail: 'Maturation impairment proposed from ET-1 effects; secondary demyelination.', ev: 'proposed', src: [BUG, FIN] },
    { cell: 'Neurons / axons', role: 'secondary', detail: 'Axonal loss from ischaemic white matter injury.', ev: 'strong', src: [BUG] },
  ],
  regions: [
    { region: 'Deep & periventricular white matter', finding: 'Confluent symmetric T2/FLAIR hyperintensity, often disproportionate to deficits.', src: [BUG, BUD] },
    { region: 'Thalami & basal ganglia', finding: 'Thalamic involvement; mild basal ganglia change.', src: [BUG] },
    { region: 'Brainstem (pons, medulla)', finding: 'Prominent involvement, especially in the brainstem phenotype.', src: [HWA] },
    { region: 'Cerebellar white matter', finding: 'Posterior fossa extension of leukoencephalopathy.', src: [BUG] },
    { region: 'Anterior temporal poles', finding: 'White matter changes typically absent (contrast with CADASIL).', src: [BUG, MAN] },
    { region: 'Microbleeds (SWI)', finding: 'Sparse relative to white matter disease extent.', src: [BUG] },
  ],
  biomarkers: [
    { name: 'ET-1 immunoreactivity in white matter', category: 'Biochemical', significance: 'Pathological hallmark distinguishing CARASAL from other hereditary small vessel diseases.', sample: 'Brain biopsy or post-mortem tissue', assay: 'Immunohistochemistry', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'Requires tissue; biopsy not needed when imaging and genetics concord.', ev: 'established', src: [BUG] },
    { name: 'Heterozygous pathogenic CTSA variant', category: 'Genetic', significance: 'Definitive diagnostic biomarker.', sample: 'Blood (DNA)', assay: 'Targeted CTSA sequencing or WES/WGS', purpose: ['Diagnosis', 'Predictive testing'], status: 'Established clinical', limitations: 'Must be distinguished from galactosialidosis carrier variants; CTSA absent from many SVD panels.', ev: 'established', src: [BUG, MAN] },
    { name: 'White matter lesion burden (MRI)', category: 'Imaging', significance: 'Lesion volume, distribution, lacune count and brainstem/thalamic involvement.', sample: 'In vivo brain', assay: 'T2/FLAIR, DWI MRI', purpose: ['Diagnosis', 'Monitoring'], status: 'Clinical adjunct', limitations: 'No validated quantitative trial endpoint.', ev: 'emerging', src: [BUG, BUD] },
    { name: 'Microbleed burden (SWI)', category: 'Imaging', significance: 'Relatively sparse microbleeds help differentiate from CADASIL.', sample: 'In vivo brain', assay: 'SWI / GRE MRI', purpose: ['Diagnosis', 'Monitoring'], status: 'Clinical adjunct', limitations: 'Based on small series.', ev: 'emerging', src: [BUG] },
    { name: 'Plasma ET-1', category: 'Biochemical', significance: 'Biologically plausible circulating marker of the ET-1 degradation defect.', sample: 'Plasma', assay: 'Immunoassay', purpose: ['Diagnosis', 'Monitoring'], status: 'Experimental', limitations: 'Elevation not established in any CARASAL cohort.', ev: 'proposed', src: [BUG] },
    { name: 'Cathepsin A / beta-galactosidase / neuraminidase activity', category: 'Enzymatic', significance: 'Possible partial reduction in heterozygotes; excludes galactosialidosis.', sample: 'Leukocytes or fibroblasts', assay: 'Lysosomal enzyme assays', purpose: ['Diagnosis'], status: 'Experimental', limitations: 'Not validated for diagnosis or monitoring in the dominant setting.', ev: 'proposed', src: [MAN] },
    { name: 'Fluid neuro-glial injury markers (NfL, GFAP)', category: 'Fluid (neuro-glial injury)', significance: 'Candidate monitoring markers.', sample: 'CSF / serum', assay: 'Immunoassay', purpose: ['Monitoring'], status: 'Experimental', limitations: 'Not evaluated in CARASAL.', ev: 'unknown', src: [CAV] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Adult with leukoencephalopathy disproportionate to deficits, lacunar strokes, resistant hypertension, brainstem symptoms and dominant family history after exclusion of common SVD causes.', src: [BUG, MAN] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain MRI (T1, T2, FLAIR, DWI, SWI)', detail: 'Confluent WM hyperintensity, thalamic/brainstem involvement, lacunes, sparse microbleeds, no anterior temporal pole lesions; CT shows no calcification.', src: [BUG] },
    { phase: 'Investigation', category: 'Exclusion', method: 'NOTCH3 testing / skin biopsy; ophthalmology', detail: 'Exclude CADASIL (GOM deposits, retinal vessel changes).', src: [MAN] },
    { phase: 'Investigation', category: 'Enzymatic', method: 'Lysosomal enzyme panel', detail: 'CathA, beta-galactosidase and neuraminidase in leukocytes; may show partial reduction and excludes galactosialidosis.', src: [MAN] },
    { phase: 'Investigation', category: 'Vascular', method: 'Vascular risk assessment', detail: 'Lipids, HbA1c, echocardiography and Holter monitoring.', src: [MAN] },
    { phase: 'Confirmation', category: 'Genetic', method: 'Targeted CTSA sequencing or WES/WGS', detail: 'Heterozygous pathogenic CTSA variant; segregation and functional evidence support interpretation. WES/WGS advised as SVD panels may omit CTSA.', src: [MAN, BUG, 'db:clinvar:CTSA'] },
    { phase: 'Confirmation', category: 'Pathology', method: 'Brain tissue immunohistochemistry', detail: 'ET-1 accumulation in white matter astrocytes if tissue is available; not routinely required.', src: [BUG] },
  ],
  differential: [
    'CADASIL (NOTCH3; anterior temporal pole lesions, GOM deposits)',
    'CARASIL (HTRA1; recessive, alopecia, spondylosis)',
    'Sporadic cerebral small vessel disease',
    'Multiple sclerosis',
    'Labrune syndrome (calcifications and cysts)',
    'Galactosialidosis (biallelic CTSA; lysosomal storage disease)',
  ],
  phenotypes: {
    applicable: true,
    note: 'Case series describe a typical cerebral small vessel disease presentation and a brainstem-predominant variant; data come from few families.',
    forms: [
      { name: 'Typical CARASAL', onset: '3rd-5th decade', severity: 'Variable; cognitive decline late and mild relative to imaging', progression: 'Slow accumulation of deficit with recurrent strokes', genetics: 'Heterozygous CTSA, mostly p.Arg325Cys', markers: 'Diffuse periventricular/deep WM disease, thalamic involvement, lacunes; resistant hypertension', src: [BUG, FIN] },
      { name: 'Brainstem phenotype', onset: 'Adult', severity: 'Dominated by cranial nerve symptoms', progression: 'Variable', genetics: 'Heterozygous CTSA', markers: 'Predominant pontine/medullary and posterior fossa lesions; facial pain, vertigo, hearing loss, dysphagia', src: [HWA] },
      { name: 'Atypical presentations', onset: '2nd decade to 7th decade', severity: 'Variable', progression: 'Variable', genetics: 'Novel CTSA variants in unique families; sporadic cases', markers: 'Incidental WM lesions, isolated hypertension, haemorrhagic stroke, absent hypertension or migraine', src: [FIN, BUD, CAV] },
    ],
  },
  management: [
    { category: 'Symptomatic', text: 'Aggressive, sustained blood pressure control is a clinical priority.', src: [MAN, FIN] },
    { category: 'Symptomatic', text: 'Antiplatelet therapy for secondary prevention after ischaemic stroke, weighing haemorrhagic risk; anticoagulation per general cSVD guidance.', src: [MAN] },
    { category: 'Symptomatic', text: 'Standard migraine prophylaxis, anti-seizure medication if seizures occur, RBD treatment and neuropsychiatric support.', src: [MAN] },
    { category: 'Supportive', text: 'Genetic counselling (50% recurrence risk; predictive and prenatal testing), clearly separating CARASAL from galactosialidosis carrier status.', src: [MAN, BUG] },
    { category: 'Supportive', text: 'Multidisciplinary care: neurology, cardiology, genetics, neuropsychology, ophthalmology and rehabilitation.', src: [MAN] },
    { category: 'Monitoring', text: 'Serial MRI and functional assessment rather than genotype-based prediction.', src: [BUG] },
  ],
  therapies: [
    { id: 'carasal-era', name: 'Endothelin receptor antagonists', modality: 'Small molecule', target: 'ETA / ETB receptors', mechanism: 'Block ET-1 signalling (e.g. bosentan, macitentan; approved for pulmonary arterial hypertension).', delivery: 'Oral', stage: 'Discovery', evidenceBase: 'Human', status: 'Proposed repurposing; not studied in CARASAL', ev: 'proposed', why: 'Rationale from human neuropathology only; CNS penetration uncertain; no preclinical or clinical data.', src: [FIN] },
    { id: 'carasal-gt', name: 'AAV-CTSA gene therapy', modality: 'Gene therapy', target: 'CTSA', mechanism: 'Deliver functional CTSA to CNS vasculature and astrocytes to restore ET-1 catabolism.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Concept only', ev: 'proposed', why: 'No preclinical programme reported; no CARASAL animal model exists.', src: [FIN] },
    { id: 'carasal-ert', name: 'Recombinant cathepsin A', modality: 'Enzyme replacement', target: 'Cathepsin A', mechanism: 'Augment CathA activity to normalise ET-1 degradation.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Concept only', ev: 'proposed', why: 'No published data.', src: [FIN] },
    { id: 'carasal-chap', name: 'Lysosomal chaperone / substrate approaches', modality: 'Other', target: 'GLB1 / NEU1 complex', mechanism: 'Support secondary lysosomal enzyme function stabilised by CathA.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Distant concept', ev: 'proposed', why: 'Contribution of lysosomal dysfunction to CARASAL is itself unproven.', src: [BUG] },
  ],
  trials: [],
  milestones: [
    { year: 2016, label: 'CTSA variants and ET-1 accumulation define CARASAL', stage: 'Discovery', src: [BUG] },
    { year: 2017, label: 'Brainstem phenotype described', stage: 'Discovery', src: [HWA] },
    { year: 2022, label: 'Further families and novel CTSA variants reported', stage: 'Discovery', src: [BUD] },
    { year: 2024, label: 'First systematic review of CARASAL cases', stage: 'Discovery', src: [CAV] },
  ],
  gaps: [
    { text: 'Dominant mechanism (haploinsufficiency vs dominant-negative) of CARASAL CTSA variants is undefined.', ev: 'unknown', src: [BUG] },
    { text: 'No CARASAL-specific animal model; Ctsa knockout mice model galactosialidosis instead.', ev: 'unknown', src: [FIN] },
    { text: 'No validated monitoring biomarker (plasma ET-1, NfL) and no natural history study or registry.', ev: 'unknown', src: [CAV] },
    { text: 'Endothelin receptor antagonists are untested preclinically or clinically; no registered trials.', ev: 'proposed', src: [FIN] },
    { text: 'Genotype-phenotype relationships remain poorly defined.', ev: 'emerging', src: [BUG, FIN] },
  ],
}
