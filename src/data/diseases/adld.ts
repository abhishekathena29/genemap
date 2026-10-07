import type { Disease, Gene, Source } from '../types'
import { geneDb, lit, nord, omim, orpha, pmid } from '../cite'

const PAD = 'lit:adld:padiath2006'
const HEN = 'lit:adld:heng2013'
const LIN = 'lit:adld:lin2014'
const FIN = 'lit:adld:finnsson2015'
const SCH = 'lit:adld:schuster2011'
const MEZ = 'lit:adld:mezaki2018'
const DHA = 'lit:adld:dhamija2025'
const PAD19 = 'lit:adld:padiath2019'
const POT = 'lit:adld:potic2013'
const SAN = 'lit:adld:sandovalrodriguez2017'
const SAN12 = 'lit:adld:santos2012'
const BRU = 'lit:adld:brussino2009'
const BRUMS = 'lit:adld:brussino2009ms'
const BUT = 'lit:adld:butinisraeli2012'
const DAI = 'lit:adld:dai2017'
const ORT = 'lit:adld:ortiz2024'
const LYN = 'lit:adld:lynch2019'
const WEI = 'lit:adld:weisfeldadams2015'
const MEL = 'lit:adld:melberg2011'
const NAH = 'lit:adld:nahhas2016'

export const adldSources: Source[] = [
  omim('169500', 'Leukodystrophy, demyelinating, adult-onset, autosomal dominant (ADLD)'),
  orpha('88203', 'Adult-onset autosomal dominant leukodystrophy'),
  nord('adld', 'adult-onset-autosomal-dominant-leukodystrophy', 'Adult-Onset Autosomal Dominant Leukodystrophy'),
  lit(NAH, 'Nahhas N, Rasekh PS, Vanderver A, Padiath QS', 2016, 'Autosomal Dominant Leukodystrophy with Autonomic Disease', 'GeneReviews (NCBI Bookshelf)', 'review'),
  lit(PAD, 'Padiath QS, Saigoh K, Schiffmann R, et al.', 2006, 'Lamin B1 duplications cause autosomal dominant leukodystrophy', 'Nature Genetics'),
  lit(HEN, 'Heng MY, Lin ST, Verret L, et al.', 2013, 'Lamin B1 mediates cell-autonomous neuropathology in a leukodystrophy mouse model', 'Journal of Clinical Investigation'),
  lit(LIN, 'Lin ST, Heng MY, Ptáček LJ, Fu YH', 2014, 'Regulation of Myelination in the Central Nervous System by Nuclear Lamin B1 and Non-coding RNAs', 'Translational Neurodegeneration', 'review'),
  lit(FIN, 'Finnsson J, Sundblom J, Dahl N, Melberg A, Raininko R', 2015, 'LMNB1-related autosomal-dominant leukodystrophy: Clinical and radiological course', 'Annals of Neurology'),
  lit(SCH, 'Schuster J, Sundblom J, Thuresson AC, et al.', 2011, 'Genomic duplications mediate overexpression of lamin B1 in adult-onset autosomal dominant leukodystrophy (ADLD) with autonomic symptoms', 'Neurogenetics'),
  lit(MEZ, 'Mezaki N, Miura T, Ogaki K, et al.', 2018, 'Duplication and deletion upstream of LMNB1 in autosomal dominant adult-onset leukodystrophy', 'Neurology Genetics'),
  lit(DHA, 'Dhamija R, Tobin WO, Cortelli P, et al.', 2025, 'Clinical Practice Guidelines for the Diagnosis, Management, and Surveillance of LMNB1-Related Autosomal Dominant Leukodystrophy', 'Neurology Genetics', 'guideline'),
  lit(PAD19, 'Padiath QS', 2019, 'Autosomal Dominant Leukodystrophy: A Disease of the Nuclear Lamina', 'Frontiers in Cell and Developmental Biology', 'review'),
  lit(POT, 'Potic A, Pavlović AM, Uziel G, et al.', 2013, 'Adult-onset autosomal dominant leukodystrophy without early autonomic dysfunctions linked to lamin B1 duplication: a phenotypic variant', 'Journal of Neurology'),
  lit(SAN, 'Sandoval-Rodríguez V, Cansino-Torres MA, Sáenz-Farret M, et al.', 2017, "Autosomal dominant leukodystrophy presenting as Alzheimer's-type dementia", 'Multiple Sclerosis and Related Disorders'),
  lit(SAN12, 'Santos MM Dos, Grond-Ginsbach C, Aksay SS, et al.', 2012, 'Adult-onset autosomal dominant leukodystrophy due to LMNB1 gene duplication', 'Journal of Neurology'),
  lit(BRU, 'Brussino A, Vaula G, Cagnoli C, et al.', 2009, 'A novel family with Lamin B1 duplication associated with adult-onset leucoencephalopathy', 'Journal of Neurology, Neurosurgery, and Psychiatry'),
  pmid(BRUMS, '19348623', "Brussino A, D'Alfonso S, Cagnoli C, et al.", 2009, 'Mutations in the lamin B1 gene are not present in multiple sclerosis', 'European Journal of Neurology'),
  lit(BUT, 'Butin-Israeli V, Adam SA, Goldman AE, Goldman RD', 2012, 'Nuclear lamin functions and disease', 'Trends in Genetics', 'review'),
  lit(DAI, 'Dai Y, Ma Y, Li S, et al.', 2017, 'An LMNB1 Duplication Caused Adult-Onset Autosomal Dominant Leukodystrophy in Chinese Family', 'Frontiers in Molecular Neuroscience'),
  lit(ORT, 'Ortiz JP, Muthusamy K, Tobin WO, et al.', 2024, 'A retrospective review of LMNB1-related autosomal dominant leukodystrophy', 'Journal of Rare Diseases'),
  lit(LYN, 'Lynch DS, Wade C, Paiva ARB de, et al.', 2019, 'Practical approach to the diagnosis of adult-onset leukodystrophies: an updated guide in the genomic era', 'Journal of Neurology, Neurosurgery, and Psychiatry', 'review'),
  lit(WEI, 'Weisfeld-Adams JD, Sand IK, Honce JM, Lublin FD', 2015, 'Differential diagnosis of Mendelian and mitochondrial disorders in patients with suspected multiple sclerosis', 'Brain', 'review'),
  lit(MEL, 'Melberg A, Sundblom J, Raininko R', 2011, 'White matter disorders with autosomal dominant heredity', 'Acta Neurologica Scandinavica'),
]

export const adldGenes: Gene[] = [
  {
    symbol: 'LMNB1',
    name: 'Lamin B1',
    protein: 'Lamin B1, type V intermediate filament of the nuclear lamina (586 aa)',
    location: '5q23.2',
    function:
      'B-type lamin anchored to the inner nuclear membrane by a farnesylated CAAX motif. Maintains nuclear shape and stability, anchors heterochromatin, and contributes to DNA replication and repair, transcriptional regulation and senescence.',
    pathway: 'Nuclear lamina / chromatin organisation; myelin gene transcription in oligodendrocytes',
    transcript: 'NM_005573',
    uniprot: 'P20700',
    ncbiGene: '4001',
    variantTypes: ['Whole-gene duplication (most common)', 'Upstream regulatory deletion', 'Upstream duplication', 'Rare coding point variants'],
    diseases: ['adld'],
    ev: 'established',
    src: [PAD, PAD19, BUT, 'omim:169500', ...geneDb('LMNB1')],
  },
]

export const adld: Disease = {
  id: 'adld',
  name: 'Adult-Onset Autosomal Dominant Leukodystrophy',
  short: 'ADLD',
  lastUpdated: '2026-10-08',
  color: '#9a5a2b',
  synonyms: [
    'ADLD',
    'LMNB1-related autosomal dominant leukodystrophy',
    'Autosomal dominant adult-onset leukodystrophy with autonomic disease',
    'Pelizaeus-Merzbacher-like disease 3 (historical)',
  ],
  classification: 'Adult-onset leukodystrophy; nuclear laminopathy; myelin maintenance disorder',
  inheritance: 'Autosomal dominant',
  genes: ['LMNB1'],
  tagline: 'LMNB1 dosage gain → lamin B1 excess in oligodendrocytes → failed myelin gene transcription → autonomic-first adult leukodystrophy.',
  identifiers: [
    { label: 'OMIM', value: '169500', url: 'https://www.omim.org/entry/169500' },
    { label: 'Orphanet', value: 'ORPHA:88203', url: 'https://www.orpha.net/en/disease/detail/88203' },
    { label: 'GeneReviews', value: 'Autosomal Dominant Leukodystrophy with Autonomic Disease', url: 'https://www.ncbi.nlm.nih.gov/books/?term=autosomal+dominant+leukodystrophy+with+autonomic+disease' },
    { label: 'MONDO', value: 'MONDO:0009022', url: 'https://monarchinitiative.org/MONDO:0009022' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Heterozygous gain of LMNB1 dosage or expression causes lamin B1 overexpression.', ev: 'established', why: 'Duplications segregate in multiple families; overexpression shown in patient tissue and leukocytes.', src: [PAD, SCH, 'omim:169500'] },
    { label: 'Variant classes', text: 'Whole-gene duplications (most common), upstream regulatory deletions or duplications, and rare point variants all converge on excess lamin B1.', ev: 'established', src: [PAD, MEZ] },
    { label: 'Core pathology', text: 'Cell-autonomous oligodendrocyte dysfunction with myelin loss; neurons are not primarily affected.', ev: 'strong', why: 'Oligodendrocyte-specific overexpression reproduces pathology in mice.', src: [HEN] },
    { label: 'Mechanism type', text: 'Dosage gain, not haploinsufficiency or dominant-negative effect.', ev: 'established', src: [PAD, PAD19] },
  ],
  clinical: [
    { label: 'Age of onset', text: 'Typically the fourth to sixth decade; earlier (third decade) onset and intrafamilial variability reported.', ev: 'established', src: [FIN, POT] },
    { label: 'Autonomic dysfunction', text: 'Urinary urgency, orthostatic hypotension, constipation and erectile dysfunction usually appear first and are diagnostically distinctive.', ev: 'established', src: [NAH, FIN] },
    { label: 'Motor features', text: 'Pyramidal signs (lower-limb spasticity) followed by cerebellar ataxia.', ev: 'established', src: [NAH] },
    { label: 'Cognition', text: 'Preserved early; dementia is a late feature, though early cognitive presentations occur.', ev: 'strong', src: [NAH, SAN] },
    { label: 'Course and survival', text: 'Slowly progressive and fatal; survival can exceed two decades after onset.', ev: 'established', src: [FIN] },
    { label: 'Preclinical MRI', text: 'White matter changes can precede symptoms by more than ten years.', ev: 'strong', why: 'Longitudinal family imaging data.', src: [FIN] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Ultra-rare; population prevalence not established.', ev: 'unknown', why: 'No epidemiological registry study.', src: [PAD, SCH] },
    { label: 'Geography', text: 'Families of European, North American, Middle Eastern, Israeli, Chinese, Japanese and South American origin; no ethnic restriction.', ev: 'established', src: [PAD, SCH, DAI] },
    { label: 'Sex distribution', text: 'Males and females equally affected.', ev: 'established', src: [FIN] },
    { label: 'Penetrance', text: 'Near-complete for duplications; most probands have an affected parent. De novo duplications are rare.', ev: 'strong', why: 'Family studies; de novo frequency not quantified.', src: [SCH] },
    { label: 'Founder effects', text: 'No shared founder variant; duplication breakpoints differ between families.', ev: 'strong', src: [SCH] },
  ],
  variants: [
    { id: 'adld-dup', disease: 'adld', gene: 'LMNB1', transcript: 'NM_005573', hgvsc: 'Heterozygous genomic duplication encompassing LMNB1 (several hundred kb; family-specific breakpoints)', build: 'Not specified (structural variant)', type: 'Copy-number gain (whole-gene duplication)', consequence: 'Increased gene dosage; lamin B1 overexpression', clinvar: 'Catalogued in ClinVar / DECIPHER (verify accessions)', popFreq: 'Not captured in SNV databases; check structural variant resources', phenotype: 'Classical autonomic-first ADLD', functional: 'Increased LMNB1 mRNA and protein in leukocytes and brain', ev: 'established', why: 'Original discovery and multiple independent families.', src: [PAD, SCH, BRU, 'db:clinvar:LMNB1'] },
    { id: 'adld-updel', disease: 'adld', gene: 'LMNB1', transcript: 'NM_005573', hgvsc: 'Large heterozygous deletion upstream of the LMNB1 promoter (regulatory region)', build: 'Not specified (structural variant)', type: 'Copy-number loss (upstream regulatory deletion)', consequence: 'Loss of repressive elements; increased LMNB1 transcription without gene duplication', clinvar: 'Requires regulatory annotation; verify in ClinVar', popFreq: 'Not reported', phenotype: 'Possibly earlier cognitive/behavioural involvement and broader MRI change', functional: 'Increased LMNB1 expression', ev: 'established', why: 'Defined in multiple families; phenotype correlates based on few cases.', src: [MEZ] },
    { id: 'adld-updup', disease: 'adld', gene: 'LMNB1', transcript: 'NM_005573', hgvsc: 'Heterozygous duplication upstream of the LMNB1 regulatory region', build: 'Not specified (structural variant)', type: 'Copy-number gain (upstream duplication)', consequence: 'Altered regulatory balance; increased LMNB1 expression', clinvar: 'Verify in ClinVar', popFreq: 'Not reported', phenotype: 'ADLD', functional: 'Increased expression', ev: 'established', why: 'Graded established in the dossier variant table.', src: [MEZ] },
    { id: 'adld-point', disease: 'adld', gene: 'LMNB1', transcript: 'NM_005573', hgvsc: 'Rare coding point variants (not individually catalogued in dossier)', build: 'Not specified', type: 'Point variant', consequence: 'Increased LMNB1 expression by unknown mechanism', clinvar: 'Verify in ClinVar', popFreq: 'Not reported', phenotype: 'ADLD', functional: 'Pathogenicity depends on demonstrating increased expression', ev: 'emerging', why: 'Very few reports.', src: [MEZ] },
  ],
  genotypePhenotype: [
    { aspect: 'Clinical phenotype', finding: 'Intragenic duplications associate with the classical sequence of autonomic dysfunction preceding pyramidal and cerebellar signs.', ev: 'strong', src: [PAD, SCH, FIN] },
    { aspect: 'Clinical phenotype', finding: 'Upstream deletions may present with earlier, more prominent cognitive and behavioural change, including Alzheimer-type dementia.', ev: 'emerging', why: 'Limited number of families.', src: [MEZ, SAN] },
    { aspect: 'MRI phenotype', finding: 'Upstream-deletion families may show broader involvement, including anterior temporal white matter.', ev: 'emerging', src: [MEZ] },
    { aspect: 'Clinical phenotype', finding: 'Some duplication families lack early autonomic dysfunction.', ev: 'strong', src: [POT] },
    { aspect: 'Age of onset', finding: 'Substantial intrafamilial variability with the same duplication suggests modifiers.', ev: 'strong', src: [FIN] },
    { aspect: 'Severity', finding: 'No correlation between duplication size and severity established.', ev: 'unknown', src: [SCH] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'LMNB1 (5q23.2)', detail: 'Duplication, upstream deletion or rare point variant increases expression.', ev: 'established', src: [PAD, MEZ] },
    { stage: 'Protein', label: 'Lamin B1 excess', detail: 'Overexpressed nuclear lamina protein in brain and leukocytes.', ev: 'established', src: [SCH, HEN, 'db:uniprot:LMNB1'] },
    { stage: 'Molecular function', label: 'Altered lamina and chromatin', detail: 'Changed nuclear lamina architecture and chromatin organisation in oligodendrocytes.', ev: 'strong', src: [HEN, PAD19] },
    { stage: 'Pathway', label: 'YY1 / PLP1 transcription', detail: 'Reduced YY1 occupancy at the PLP1 promoter lowers myelin gene transcription; miR-23a normally restrains lamin B1.', ev: 'strong', src: [LIN, HEN] },
    { stage: 'Cellular consequence', label: 'Oligodendrocyte myelin maintenance failure', detail: 'Cell-autonomous inability to maintain myelin sheaths; reactive astrogliosis, later axonal damage.', ev: 'strong', src: [HEN, PAD19] },
    { stage: 'Phenotype', label: 'Adult-onset leukodystrophy', detail: 'Autonomic failure, spasticity, ataxia, late dementia.', ev: 'established', src: [NAH, FIN] },
  ],
  relations: [
    { from: ['gene', 'LMNB1'], to: ['protein', 'Lamin B1'], label: 'dosage gain increases', ev: 'established', why: 'Overexpression documented in patient leukocytes and brain.', src: [PAD, SCH] },
    { from: ['protein', 'Lamin B1'], to: ['pathway', 'Nuclear lamina / chromatin organisation'], label: 'disrupts', ev: 'strong', why: 'Mouse and cellular models.', src: [HEN, PAD19] },
    { from: ['protein', 'Lamin B1'], to: ['protein', 'YY1'], label: 'reduces PLP1 promoter occupancy of', ev: 'strong', why: 'Shown in model systems.', src: [HEN, LIN] },
    { from: ['protein', 'YY1'], to: ['gene', 'PLP1'], label: 'activates transcription of', ev: 'strong', why: 'Reduced PLP1 expression follows YY1 displacement in models.', src: [LIN, HEN] },
    { from: ['pathway', 'miR-23a / lamin B1 axis'], to: ['protein', 'Lamin B1'], label: 'downregulates', ev: 'emerging', why: 'miR-23a overexpression rescues models.', src: [LIN] },
    { from: ['protein', 'Lamin B1'], to: ['cell', 'Oligodendrocytes'], label: 'cell-autonomous toxicity in', ev: 'strong', why: 'Oligodendrocyte-specific overexpression sufficient in mice.', src: [HEN] },
    { from: ['cell', 'Oligodendrocytes'], to: ['phenotype', 'Progressive demyelination'], label: 'failure causes', ev: 'strong', why: 'Mouse model and human neuropathology.', src: [HEN, PAD19] },
    { from: ['gene', 'LMNB1'], to: ['biomarker', 'LMNB1 copy-number gain'], label: 'detected as', ev: 'established', why: 'Standard diagnostic test.', src: [PAD, SCH] },
    { from: ['therapy', 'miR-23a modulation'], to: ['protein', 'Lamin B1'], label: 'lowers', ev: 'emerging', why: 'Preclinical models only.', src: [LIN] },
  ],
  cells: [
    { cell: 'Oligodendrocytes', role: 'primary', detail: 'Lamin B1 excess impairs differentiation and myelin gene expression; cell-autonomous.', ev: 'strong', src: [HEN, LIN] },
    { cell: 'Astrocytes', role: 'secondary', detail: 'Reactive astrogliosis on neuropathology; not a primary driver in models.', ev: 'emerging', src: [PAD19, HEN] },
    { cell: 'Neurons / axons', role: 'secondary', detail: 'Axons relatively spared early; damage with progression.', ev: 'emerging', src: [PAD19] },
  ],
  regions: [
    { region: 'Frontal & parietal deep white matter', finding: 'Symmetric confluent T2/FLAIR hyperintensity, frontal predominant; earliest changes.', src: [FIN, SAN12] },
    { region: 'Corpus callosum & corticospinal tracts', finding: 'Corona radiata, PLIC and cerebral peduncles involved.', src: [FIN] },
    { region: 'Cerebellar peduncles', finding: 'Middle and superior peduncles and cerebellar white matter affected.', src: [FIN, MEL] },
    { region: 'Brainstem', finding: 'Pyramidal tract involvement; possible substrate for autonomic features.', src: [FIN, PAD19] },
    { region: 'Spinal cord', finding: 'Diffuse atrophy and T2 signal change correlating with pyramidal signs.', src: [FIN] },
    { region: 'Periventricular rim & U-fibres', finding: 'Characteristically spared.', src: [FIN, PAD19] },
  ],
  biomarkers: [
    { name: 'LMNB1 copy-number gain', category: 'Genetic', significance: 'Definitive diagnosis when positive.', sample: 'Blood (DNA)', assay: 'MLPA, chromosomal microarray, array-CGH/FISH, WGS', purpose: ['Diagnosis', 'Predictive testing'], status: 'Established clinical', limitations: 'Exome sequencing does not reliably detect duplications.', ev: 'established', src: [PAD, SCH, DHA] },
    { name: 'Upstream LMNB1 regulatory deletion', category: 'Genetic', significance: 'Confirms diagnosis in non-duplication families.', sample: 'Blood (DNA)', assay: 'Microarray / WGS covering the 5\' regulatory region', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Missed if the assay covers only the gene body.', ev: 'established', src: [MEZ, DHA] },
    { name: 'LMNB1 mRNA in leukocytes', category: 'Biochemical', significance: 'Confirms dosage effect.', sample: 'Peripheral blood leukocytes', assay: 'RT-qPCR', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'Supportive only, not confirmatory alone.', ev: 'strong', src: [SCH, DAI] },
    { name: 'Lamin B1 protein in leukocytes', category: 'Biochemical', significance: 'Accessible readout of overexpression; candidate pharmacodynamic marker.', sample: 'Peripheral blood leukocytes', assay: 'Western blot / immunofluorescence', purpose: ['Diagnosis', 'Treatment response'], status: 'Clinical adjunct', limitations: 'Not validated as a trial endpoint.', ev: 'strong', src: [SCH] },
    { name: 'Characteristic MRI pattern', category: 'Imaging', significance: 'Frontal-predominant confluent deep WM change with cerebellar peduncle involvement and periventricular rim sparing.', sample: 'In vivo brain', assay: 'Brain and spinal MRI', purpose: ['Diagnosis', 'Monitoring'], status: 'Established clinical', limitations: 'May be normal very early; frequently mistaken for PP-MS.', ev: 'established', src: [FIN, SAN12] },
    { name: 'Presymptomatic MRI change', category: 'Imaging', significance: 'WM change precedes symptoms by over a decade in at-risk relatives.', sample: 'In vivo brain', assay: 'Serial MRI', purpose: ['Monitoring'], status: 'Clinical adjunct', limitations: 'Not validated as an outcome measure.', ev: 'strong', src: [FIN] },
    { name: 'Neurofilament light chain (NfL)', category: 'Fluid (neuro-glial injury)', significance: 'Candidate marker of neuroaxonal damage.', sample: 'Blood / CSF', assay: 'Immunoassay', purpose: ['Monitoring'], status: 'Experimental', limitations: 'No ADLD-specific data reported.', ev: 'unknown', src: [DHA] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Adult with progressive autonomic dysfunction preceding pyramidal and cerebellar signs and a dominant family history.', src: [NAH, DHA] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain and spinal MRI', detail: 'Frontal-predominant confluent deep WM hyperintensity, cerebellar peduncle and brainstem involvement, periventricular rim sparing, spinal cord atrophy.', src: [FIN, SAN12] },
    { phase: 'Investigation', category: 'Autonomic', method: 'Autonomic testing (tilt table, sudomotor)', detail: 'Documents autonomic failure.', src: [NAH] },
    { phase: 'Investigation', category: 'Exclusion', method: 'CSF analysis', detail: 'Typically normal or mildly abnormal without MS-type oligoclonal bands.', src: [BRUMS, WEI] },
    { phase: 'Confirmation', category: 'Genetic', method: 'LMNB1 copy-number testing (MLPA, microarray, WGS)', detail: 'First-line structural testing including the upstream regulatory region; exome is not sufficient.', src: [DHA, SCH, MEZ, 'db:clinvar:LMNB1'] },
    { phase: 'Confirmation', category: 'Expression', method: 'LMNB1 RT-qPCR / Western blot', detail: 'Supportive adjunct when copy-number results are borderline.', src: [SCH] },
  ],
  differential: [
    'Primary progressive multiple sclerosis (most common misdiagnosis)',
    'Vanishing white matter disease (EIF2B)',
    'AARS2-related leukoencephalopathy',
    'CADASIL (NOTCH3)',
    'CARASIL (HTRA1)',
    'CSF1R-related leukoencephalopathy',
    'POLR3-related leukodystrophy',
    "Alzheimer disease / frontotemporal dementia (cognitive presentations)",
  ],
  phenotypes: {
    applicable: true,
    note: 'A classical autonomic-first course is typical; variants without early autonomic features and cognitively prominent forms (often with upstream deletions) are described.',
    forms: [
      { name: 'Classical ADLD', onset: '4th-6th decade', severity: 'Progressive, fatal', progression: 'Slow; survival over 20 years', genetics: 'Intragenic LMNB1 duplication', markers: 'Autonomic failure first; frontal-predominant WM change; spinal atrophy', src: [PAD, FIN, NAH] },
      { name: 'Without early autonomic dysfunction', onset: 'Adult', severity: 'Variable', progression: 'Slow', genetics: 'LMNB1 duplication', markers: 'Pyramidal or cerebellar onset; autonomic signs delayed or absent', src: [POT] },
      { name: 'Cognitive-prominent / upstream deletion', onset: 'Adult', severity: 'Variable', progression: 'Possibly faster cognitive decline', genetics: 'Upstream regulatory deletion', markers: 'Early dementia; broader WM including anterior temporal regions', src: [MEZ, SAN] },
    ],
  },
  management: [
    { category: 'Symptomatic', text: 'Orthostatic hypotension: compression, salt and fluids, head-up tilt; fludrocortisone, midodrine or droxidopa as indicated.', src: [DHA] },
    { category: 'Symptomatic', text: 'Bladder and bowel: antimuscarinics or beta-3 agonists, urodynamics, intermittent catheterisation; laxatives; PDE-5 inhibitors for erectile dysfunction.', src: [DHA, NAH] },
    { category: 'Symptomatic', text: 'Spasticity: baclofen, tizanidine, dantrolene, botulinum toxin, intrathecal baclofen in refractory cases.', src: [DHA] },
    { category: 'Supportive', text: 'Physiotherapy, occupational and speech therapy, fall prevention, nutrition and gastrostomy when needed; respiratory monitoring in advanced disease.', src: [DHA] },
    { category: 'Supportive', text: 'Neuropsychology, mood management and early advance care planning; genetic counselling (50% risk), cascade, prenatal and preimplantation testing.', src: [DHA] },
    { category: 'Monitoring', text: 'Annual multidisciplinary review; serial MRI for longitudinal monitoring.', src: [DHA, FIN] },
  ],
  therapies: [
    { id: 'adld-mir23a', name: 'miR-23a modulation', modality: 'Antisense / RNA', target: 'Lamin B1 (via miR-23a)', mechanism: 'miR-23a downregulates lamin B1, restoring oligodendrocyte differentiation and myelin gene expression.', delivery: 'Not defined (CNS delivery challenge)', stage: 'Animal studies', evidenceBase: 'Animal', status: 'Preclinical proof of concept', ev: 'emerging', why: 'Rescue in transgenic mouse and oligodendrocyte models; no human data.', src: [LIN] },
    { id: 'adld-aso', name: 'LMNB1-directed ASO / RNAi', modality: 'Antisense / RNA', target: 'LMNB1 mRNA', mechanism: 'Reduce LMNB1 transcripts toward physiological lamin B1 levels.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Animal', status: 'Conceptual; no published efficacy study', ev: 'proposed', why: 'Target validated genetically and in mouse models; no ASO data.', src: [PAD19] },
    { id: 'adld-yy1', name: 'YY1 / PLP1 pathway restoration', modality: 'Other', target: 'YY1 / PLP1', mechanism: 'Rescue myelin gene transcription downstream of lamin B1 excess.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Animal', status: 'Mechanistic rationale only', ev: 'proposed', why: 'Derived from model studies; no intervention tested.', src: [HEN, LIN] },
  ],
  trials: [],
  milestones: [
    { year: 2006, label: 'LMNB1 duplications identified as cause of ADLD', stage: 'Discovery', src: [PAD] },
    { year: 2011, label: 'Lamin B1 overexpression shown in patient leukocytes', stage: 'Discovery', src: [SCH] },
    { year: 2013, label: 'Oligodendrocyte-specific LMNB1 mouse model', stage: 'Animal studies', src: [HEN] },
    { year: 2014, label: 'miR-23a rescues lamin B1 overexpression models', stage: 'Animal studies', src: [LIN] },
    { year: 2015, label: 'Longitudinal clinical and radiological course defined', stage: 'Discovery', src: [FIN] },
    { year: 2018, label: 'Upstream deletions and duplications described', stage: 'Discovery', src: [MEZ] },
  ],
  gaps: [
    { text: 'No disease-modifying therapy; miR-23a and ASO approaches need translation to human candidates.', ev: 'unknown', src: [LIN, PAD19] },
    { text: 'No registered clinical trials, patient registry or validated outcome measures.', ev: 'unknown', src: [DHA, ORT] },
    { text: 'Genotype-phenotype map for upstream regulatory variants is incomplete.', ev: 'emerging', src: [MEZ] },
    { text: 'No validated fluid biomarker for pharmacodynamic endpoints.', ev: 'unknown', src: [DHA] },
    { text: 'Anatomical substrate of early autonomic failure is not characterised.', ev: 'unknown', src: [PAD19, NAH] },
  ],
}
