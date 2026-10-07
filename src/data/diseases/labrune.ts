import type { Disease, Gene, Source } from '../types'
import { lit, nord, omim, orpha, pmid } from '../cite'

const OMIM = 'omim:614561'
const ORPHA = 'orpha:99876'
const NORD = 'nord:labrune'
const JENK = 'lit:labrune:jenkinson2016'
const CROW = 'lit:labrune:crow2021'
const MCF = 'lit:labrune:mcfadden2022'
const HELMAN = 'lit:labrune:helman2021'
const PAFF = 'lit:labrune:paff2022'
const PICCHI = 'lit:labrune:picchi2021'
const POLIT = 'lit:labrune:politano2023'
const IWAMA = 'lit:labrune:iwama2017'
const MURPHY = 'lit:labrune:murphy2021'
const CULL = 'lit:labrune:cullinane2020'
const SHTAYA = 'lit:labrune:shtaya2019'
const BONOMO = 'lit:labrune:bonomo2020'
const NAIR = 'lit:labrune:nair2023'
const CUZZ = 'lit:labrune:cuzzocrea2020'
const WAACK = 'lit:labrune:waack2022'
const GUAN = 'lit:labrune:guan2026'
const SILVA = 'lit:labrune:silva'

export const labruneSources: Source[] = [
  lit(JENK, 'Jenkinson EM, et al.', 2016, 'Mutations in SNORD118 cause the cerebral microangiopathy leukoencephalopathy with calcifications and cysts', 'Nat Genet'),
  lit(CROW, 'Crow YJ, et al.', 2021, 'Leukoencephalopathy with calcifications and cysts: genetic and phenotypic spectrum', 'Am J Med Genet A'),
  lit(MCF, 'McFadden EJ, Baserga SJ', 2022, 'U8 variants on the brain: a small nucleolar RNA and human disease', 'RNA Biol', 'review'),
  lit(HELMAN, 'Helman G, et al.', 2021, 'Cerebral microangiopathy in leukoencephalopathy with cerebral calcifications and cysts: a pathological description', 'J Child Neurol'),
  lit(PAFF, 'Paff M, et al.', 2022, 'Leukoencephalopathy with brain calcifications and cysts (Labrune syndrome): diagnosis and management', 'BMC Neurol'),
  lit(PICCHI, 'Picchi E, et al.', 2021, 'Neuroimaging findings in leukoencephalopathy with calcifications and cysts: case report and review', 'Neurol Sci', 'review'),
  lit(POLIT, 'Politano D, et al.', 2023, 'Expanding the natural history of SNORD118-related ribosomopathy', 'Genes'),
  lit(IWAMA, 'Iwama K, et al.', 2017, 'Identification of novel SNORD118 mutations in seven patients with leukoencephalopathy with brain calcifications and cysts', 'Clin Genet'),
  lit(MURPHY, 'Murphy S, et al.', 2021, 'Paediatric neurosurgical implications of a ribosomopathy: illustrative case and literature review', "Childs Nerv Syst"),
  lit(CULL, 'Cullinane PW, et al.', 2020, 'Phenotypic variability in leukoencephalopathy with calcifications and cysts: siblings from an Irish Traveller family with homozygous SNORD118 mutation', 'J Mol Neurosci'),
  lit(SHTAYA, 'Shtaya A, et al.', 2019, 'Labrune syndrome with obstructive hydrocephalus', 'World Neurosurg'),
  lit(BONOMO, 'Bonomo G, et al.', 2020, 'Systemic involvement in adult-onset leukoencephalopathy with intracranial calcifications and cysts with a novel SNORD118 mutation', 'Eur J Neurol'),
  lit(NAIR, 'Nair J, et al.', 2023, 'Labrune syndrome: a rare leukodystrophy', 'Cureus'),
  pmid(CUZZ, '32657880', 'Cuzzocrea M, et al.', 2020, '18F-FDG PET/CT in Labrune syndrome', 'Clin Nucl Med'),
  lit(WAACK, 'Waack A, et al.', 2022, 'Leukoencephalopathy, calcifications, and cysts: Labrune syndrome', 'Radiol Case Rep'),
  lit(GUAN, 'Guan C, et al.', 2026, 'Literature review of leukoencephalopathy with calcifications and cysts and a case report', 'Front Neurosci', 'review'),
  {
    id: SILVA,
    title: 'SNORD118-negative Labrune syndrome',
    authors: 'Silva MA, et al.',
    venue: 'J Clin Images Med Case Rep',
    kind: 'primary',
    url: 'https://scispace.com/papers/snord118-negative-labrune-syndrome-journal-of-clinical-2qhbzrzp',
  },
  omim('614561', 'Leukoencephalopathy, brain calcifications, and cysts (LCC)'),
  orpha('99876', 'Labrune syndrome'),
  nord('labrune', 'labrune-syndrome', 'Labrune Syndrome'),
]

export const labruneGenes: Gene[] = [
  {
    symbol: 'SNORD118',
    name: 'Small nucleolar RNA, C/D box 118',
    protein: 'None: non-coding snoRNA (U8 snoRNA; mature ~136–138 nt, precursor ~156 nt)',
    location: '17p13.1 (intron 8 of TMEM107)',
    function:
      'Atypical box C/D snoRNA that, with LSm2–8 and other factors, is required for ITS2 processing cleavages generating mature 5.8S and 28S rRNAs of the 60S ribosomal subunit (structural / processing role rather than 2′-O-methylation guide).',
    pathway: 'Ribosome biogenesis (pre-rRNA processing, large subunit)',
    transcript: 'NR_033294.1',
    ncbiGene: '100033413',
    variantTypes: [
      'Single-nucleotide substitutions in mature U8 (box C/D, 5′ stem-loop, body)',
      'Substitutions in pre-U8 3′ flanking region (processing)',
      'Small insertions / deletions (less common)',
    ],
    diseases: ['labrune'],
    ev: 'established',
    src: [JENK, MCF, OMIM, 'db:ncbi:SNORD118', 'db:hgnc:SNORD118'],
  },
]

export const labrune: Disease = {
  id: 'labrune',
  name: 'Labrune Syndrome (Leukoencephalopathy with Calcifications and Cysts)',
  short: 'Labrune / LCC',
  lastUpdated: '2026-10-08',
  color: '#b5487a',
  synonyms: [
    'Leukoencephalopathy with calcifications and cysts (LCC)',
    'Leukoencephalopathy with brain calcifications and cysts',
    'Cerebral microangiopathy with leukoencephalopathy, calcifications and cysts',
    'SNORD118-related leukoencephalopathy',
  ],
  classification: 'Cerebral microangiopathy; ribosomopathy; leukoencephalopathy',
  inheritance: 'Autosomal recessive',
  genes: ['SNORD118'],
  tagline: 'Biallelic SNORD118 (U8 snoRNA) variants impair ribosome biogenesis → cerebral small-vessel microangiopathy → leukoencephalopathy, calcifications and cysts.',
  identifiers: [
    { label: 'OMIM', value: '614561', url: 'https://www.omim.org/entry/614561' },
    { label: 'Orphanet', value: 'ORPHA:99876', url: 'https://www.orpha.net/en/disease/detail/99876' },
    { label: 'MONDO', value: 'MONDO:0013596', url: 'https://monarchinitiative.org/disease/MONDO:0013596' },
    { label: 'ICD-10', value: 'G37.8' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Biallelic SNORD118 variants impair the U8 small nucleolar RNA, a non-protein-coding RNA required for large ribosomal subunit biogenesis.', ev: 'established', why: 'Gene identified in 2016 with functional RNA assays and replicated in a 64-patient cohort.', src: [JENK, CROW, OMIM, ORPHA] },
    { label: 'Radiological triad', text: 'Leukoencephalopathy, intracranial calcifications and parenchymal cysts define the disease.', ev: 'established', src: [PICCHI, CROW] },
    { label: 'Core pathology', text: 'Diffuse small-vessel microangiopathy with vessel-wall sclerosis, obliteration and clustered vascular malformations, causing ischaemic white-matter injury, mineralisation and cystic degeneration.', ev: 'strong', why: 'Neuropathological series from biopsy and post-mortem material.', src: [HELMAN] },
    { label: 'Disease class', text: 'Considered a ribosomopathy with a brain-predominant small-vessel phenotype and an example of a non-coding RNA disorder.', ev: 'strong', src: [MCF, JENK] },
    { label: 'Primary cell types', text: 'Cerebral small-vessel endothelial cells and pericytes / smooth muscle cells; oligodendrocytes and axons are affected secondarily.', ev: 'strong', why: 'Inferred from histopathology; cell-selective mechanism not yet defined.', src: [HELMAN] },
  ],
  clinical: [
    { label: 'Age of onset', text: 'Highly variable, from 3 weeks to 67 years; paediatric- and adult-onset forms are recognised.', ev: 'established', src: [CROW] },
    { label: 'Neurological features', text: 'Seizures, progressive spasticity and pyramidal signs, cerebellar ataxia, cognitive decline, headache and focal deficits; dysarthria and dysphagia in advanced cases.', ev: 'established', src: [CROW] },
    { label: 'Cyst complications', text: 'Expanding cysts can cause mass effect, raised intracranial pressure and obstructive hydrocephalus.', ev: 'established', src: [SHTAYA, MURPHY] },
    { label: 'Natural history', text: 'Variable: some patients remain stable for decades with episodic deterioration, others decline progressively from cumulative ischaemia and cyst growth.', ev: 'emerging', why: 'Course not fully characterised; no natural-history study.', src: [CROW, POLIT] },
    { label: 'Systemic features', text: 'Extracerebral vascular or soft-tissue involvement reported in at least one adult-onset case.', ev: 'emerging', why: 'Single case report.', src: [BONOMO] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Ultra-rare: fewer than 100 published cases; population prevalence estimated below 1 in 1,000,000.', ev: 'emerging', why: 'Based on case ascertainment, not registry data.', src: [NAIR, PICCHI, NORD] },
    { label: 'Largest cohort', text: '64 affected individuals from 56 families, with 44 distinct likely pathogenic variants; 52 of 56 probands were compound heterozygous.', ev: 'established', src: [CROW] },
    { label: 'Geographic distribution', text: 'Reported from Europe, North America, Japan and the Middle East; no robust founder effect, though homozygous variants occur in consanguineous families (e.g. an Irish Traveller kindred).', ev: 'emerging', src: [CULL, CROW] },
    { label: 'Sex distribution', text: 'No significant sex predilection.', ev: 'emerging', src: [CROW] },
    { label: 'Diagnostic delay', text: 'Long diagnostic delays are common; exome sequencing may miss the non-coding locus.', ev: 'strong', src: [JENK] },
  ],
  variants: [
    { id: 'labrune-n5cg', disease: 'labrune', gene: 'SNORD118', transcript: 'NR_033294.1', hgvsc: 'n.*5C>G', build: 'Not specified (transcript-based)', type: 'Non-coding substitution (pre-U8 3′ flanking)', consequence: 'Impaired 3′ processing of pre-U8', clinvar: 'Not stated in dossier', popFreq: 'Homozygous in an Irish Traveller family', phenotype: 'LCC with marked intrafamilial variability (childhood and adult onset)', functional: 'Reduced mature U8 abundance (processing defect)', ev: 'strong', why: 'Single family, but mechanism consistent with other flanking-region variants.', src: [CULL, MCF, 'db:clinvar:SNORD118'] },
    { id: 'labrune-n9ct', disease: 'labrune', gene: 'SNORD118', transcript: 'NR_033294.1', hgvsc: 'n.*9C>T', build: 'Not specified (transcript-based)', type: 'Non-coding substitution (pre-U8 3′ flanking)', consequence: 'Impaired 3′ processing of pre-U8', clinvar: 'Not stated in dossier', popFreq: 'Recurrent across cohorts', phenotype: 'LCC (in trans with second variant)', functional: 'Processing defect in cell-based assays', ev: 'established', why: 'Recurrent in discovery and largest cohorts.', src: [JENK, CROW, 'db:clinvar:SNORD118'] },
    { id: 'labrune-n60gc', disease: 'labrune', gene: 'SNORD118', transcript: 'NR_033294.1', hgvsc: 'n.60G>C', build: 'Not specified (transcript-based)', type: 'Non-coding substitution (mature U8 body)', consequence: 'Altered RNA structure / protein binding', clinvar: 'Not stated in dossier', popFreq: 'Reported in multiple probands', phenotype: 'LCC', functional: 'Not detailed in dossier', ev: 'strong', src: [IWAMA, 'db:clinvar:SNORD118'] },
    { id: 'labrune-n3ct', disease: 'labrune', gene: 'SNORD118', transcript: 'NR_033294.1', hgvsc: 'n.3C>T', build: 'Not specified (transcript-based)', type: 'Non-coding substitution (5′ box C region)', consequence: 'Impaired U8 biogenesis', clinvar: 'Not stated in dossier', popFreq: 'Not stated in dossier', phenotype: 'LCC', functional: 'Not detailed in dossier', ev: 'emerging', why: 'Case-level report.', src: [IWAMA, 'db:clinvar:SNORD118'] },
    { id: 'labrune-n74ga', disease: 'labrune', gene: 'SNORD118', transcript: 'NR_033294.1', hgvsc: 'n.74G>A', build: 'Not specified (transcript-based)', type: 'Non-coding substitution (mature U8 body)', consequence: 'Altered RNA structure', clinvar: 'Not stated in dossier', popFreq: 'Not stated in dossier', phenotype: 'LCC', functional: 'Not detailed in dossier', ev: 'emerging', why: 'Case-level report.', src: [IWAMA, 'db:clinvar:SNORD118'] },
  ],
  genotypePhenotype: [
    { aspect: 'Age of onset', finding: 'No consistent genotype correlation; the same homozygous n.*5C>G variant caused both childhood and adult onset in one family.', ev: 'emerging', why: 'Small numbers and ascertainment bias.', src: [CULL, CROW] },
    { aspect: 'Severity', finding: 'Whether homozygosity for severe variants predicts earlier or more severe disease is not established.', ev: 'unknown', src: [CROW] },
    { aspect: 'Clinical phenotype', finding: 'Processing-region (3′ flanking) versus mature-body variants may act differently, but distinct clinical phenotypes are not demonstrated.', ev: 'proposed', src: [MCF] },
    { aspect: 'Clinical phenotype', finding: 'Paediatric onset often features seizures and progressive decline; adult onset may be insidious cognitive decline, focal deficits or incidental imaging findings.', ev: 'emerging', src: [CROW, NAIR] },
    { aspect: 'MRI phenotype', finding: 'Cyst location, size and number drive severity and surgical eligibility but are not linked to genotype.', ev: 'emerging', src: [PAFF] },
    { aspect: 'Survival / outcome', finding: 'Severity and onset should not be predicted from genotype; serial imaging and functional assessment guide monitoring.', ev: 'established', why: 'Consensus clinical guidance in published series.', src: [CROW] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'SNORD118 (17p13.1)', detail: 'Biallelic, mostly compound heterozygous, variants in the mature U8 sequence or pre-U8 3′ flanking region.', ev: 'established', src: [JENK, CROW] },
    { stage: 'Protein', label: 'U8 snoRNP (non-coding RNA)', detail: 'Reduced or dysfunctional U8 snoRNA; impaired maturation or binding to LSm2–8 and associated proteins.', ev: 'established', src: [JENK, MCF] },
    { stage: 'Molecular function', label: 'ITS2 pre-rRNA processing fails', detail: 'Cleavages generating mature 5.8S and 28S rRNA are disrupted; precursors accumulate.', ev: 'established', src: [MCF, JENK] },
    { stage: 'Pathway', label: '60S ribosome biogenesis / ribosomopathy', detail: 'Impaired large-subunit assembly; nucleolar stress and p53 activation are proposed as in other ribosomopathies.', ev: 'strong', src: [MCF] },
    { stage: 'Cellular consequence', label: 'Small-vessel endothelial vulnerability', detail: 'Selective cerebral microangiopathy with vessel-wall sclerosis and clustered vascular malformations; basis of cell selectivity is unknown.', ev: 'proposed', src: [MCF, HELMAN] },
    { stage: 'Phenotype', label: 'Leukoencephalopathy, calcifications, cysts', detail: 'Ischaemic white-matter injury with secondary demyelination, mineralisation and expanding cysts; seizures, spasticity, ataxia, cognitive decline.', ev: 'established', src: [HELMAN, CROW] },
  ],
  relations: [
    { from: ['gene', 'SNORD118'], to: ['pathway', 'ITS2 pre-rRNA processing'], label: 'required for', ev: 'established', why: 'Cell-based and biochemical studies of U8 function.', src: [MCF, JENK] },
    { from: ['pathway', 'ITS2 pre-rRNA processing'], to: ['pathway', '60S ribosome biogenesis'], label: 'enables', ev: 'established', why: 'Generates mature 5.8S and 28S rRNAs.', src: [MCF] },
    { from: ['pathway', '60S ribosome biogenesis'], to: ['cell', 'Vascular / endothelial cells'], label: 'deficit selectively damages (proposed)', ev: 'proposed', why: 'Selective vascular vulnerability is unexplained; hypotheses only.', src: [MCF] },
    { from: ['cell', 'Vascular / endothelial cells'], to: ['phenotype', 'Cerebral microangiopathy'], label: 'injury causes', ev: 'strong', why: 'Consistent histopathology across biopsy and autopsy material.', src: [HELMAN] },
    { from: ['phenotype', 'Cerebral microangiopathy'], to: ['phenotype', 'Calcifications and cysts'], label: 'leads to', ev: 'strong', why: 'Ischaemia, necrosis and mineralisation on pathology.', src: [HELMAN, MURPHY] },
    { from: ['phenotype', 'Cerebral microangiopathy'], to: ['cell', 'Oligodendrocytes'], label: 'secondary ischaemic injury to', ev: 'strong', why: 'White-matter changes are ischaemic rather than primary dysmyelination.', src: [HELMAN] },
    { from: ['phenotype', 'Calcifications and cysts'], to: ['biomarker', 'CT/MRI radiological triad'], label: 'measured as', ev: 'established', why: 'Defining diagnostic imaging.', src: [PICCHI] },
    { from: ['therapy', 'Bevacizumab (off-label)'], to: ['phenotype', 'Cerebral microangiopathy'], label: 'may stabilise', ev: 'emerging', why: 'Case reports and small series only; VEGF link to U8 undefined.', src: [POLIT, MURPHY] },
    { from: ['therapy', 'Neurosurgical cyst drainage'], to: ['phenotype', 'Calcifications and cysts'], label: 'relieves mass effect of', ev: 'strong', why: 'Case series report clinical and radiological improvement.', src: [PAFF, MURPHY, GUAN] },
  ],
  cells: [
    { cell: 'Vascular / endothelial cells', role: 'primary', detail: 'Small-vessel endothelial cells, pericytes and smooth muscle: wall sclerosis, obliteration and clustered malformations.', ev: 'strong', src: [HELMAN] },
    { cell: 'Oligodendrocytes', role: 'secondary', detail: 'Secondary ischaemic demyelination and white-matter rarefaction.', ev: 'strong', src: [HELMAN] },
    { cell: 'Neurons / axons', role: 'secondary', detail: 'Axonal loss within ischaemic white matter; regional hypometabolism on FDG-PET.', ev: 'strong', src: [HELMAN, CUZZ] },
    { cell: 'Microglia / macrophages', role: 'secondary', detail: 'Perivascular macrophage infiltration and foamy macrophages.', ev: 'emerging', src: [HELMAN] },
    { cell: 'Astrocytes', role: 'secondary', detail: 'Reactive astrogliosis surrounding affected white matter.', ev: 'emerging', src: [HELMAN] },
  ],
  regions: [
    { region: 'Periventricular & deep white matter', finding: 'Confluent T2/FLAIR hyperintensity; U-fibres spared in a proportion of cases.', src: [PICCHI] },
    { region: 'Basal ganglia & thalami', finding: 'Bilateral, often symmetric calcification (putamen, globus pallidus, thalamus).', src: [PICCHI, NAIR] },
    { region: 'Cerebellum (dentate nuclei)', finding: 'Dentate calcification; cerebellar hemisphere cysts.', src: [PICCHI, NAIR] },
    { region: 'Cerebral hemispheres', finding: 'Lobar parenchymal cysts of millimetres to centimetres that can enlarge.', src: [SHTAYA, PICCHI] },
    { region: 'Brainstem', finding: 'Less common calcification; brainstem-predominant cysts in atypical cases.', src: [SHTAYA, PICCHI] },
    { region: 'Cortical-subcortical junction', finding: 'Less common calcification site; predominantly cortical / subcortical calcification in atypical cases.', src: [PICCHI, WAACK] },
  ],
  biomarkers: [
    { name: 'CT/MRI radiological triad', category: 'Imaging', significance: 'Leukoencephalopathy, calcifications and cysts define the disease; cyst size and growth guide surgery.', sample: 'In vivo brain', assay: 'CT (calcification); MRI T1/T2/FLAIR/DWI/SWI', purpose: ['Diagnosis', 'Monitoring'], status: 'Established clinical', limitations: 'Shared with Coats plus; calcifications may be sparse early.', ev: 'established', src: [PICCHI, CROW] },
    { name: 'Biallelic SNORD118 variants', category: 'Genetic', significance: 'Definitive diagnosis.', sample: 'DNA (blood)', assay: 'Genome sequencing or panel including SNORD118', purpose: ['Diagnosis', 'Carrier / prenatal testing'], status: 'Established clinical', limitations: 'May be missed by exome capture; novel non-coding variants need functional RNA assays.', ev: 'established', src: [JENK, MCF, 'db:clinvar:SNORD118'] },
    { name: 'FDG-PET regional hypometabolism', category: 'Imaging', significance: 'Correlates with affected regions and clinical severity.', sample: 'In vivo brain', assay: '18F-FDG PET/CT', purpose: ['Research'], status: 'Experimental', limitations: 'Single case report.', ev: 'emerging', src: [CUZZ] },
    { name: 'Candidate endothelial / injury markers (NfL, VEGF, MMP-9, sVCAM-1)', category: 'Fluid (neuro-glial injury)', significance: 'Biologically plausible readouts of white-matter injury and endothelial dysfunction.', sample: 'CSF / blood', assay: 'Immunoassays', purpose: ['Research'], status: 'Experimental', limitations: 'Not evaluated in LCC cohorts; routine CSF is normal or nonspecific.', ev: 'proposed', src: [] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Progressive seizures, spasticity, ataxia, cognitive decline or focal deficits with a negative metabolic workup.', src: [PICCHI] },
    { phase: 'Investigation', category: 'Imaging', method: 'CT brain', detail: 'Required to show calcification in basal ganglia, dentate nuclei and white matter.', src: [PICCHI] },
    { phase: 'Investigation', category: 'Imaging', method: 'MRI brain (incl. SWI, DWI)', detail: 'White-matter signal change, cyst morphology and mineralisation; CSF flow studies if hydrocephalus is suspected.', src: [PICCHI, SHTAYA] },
    { phase: 'Investigation', category: 'Exclusion', method: 'Metabolic workup and ophthalmology', detail: 'Exclude metabolic leukodystrophies and Coats plus (retinal telangiectasia).', src: [PICCHI, CROW] },
    { phase: 'Confirmation', category: 'Genetic', method: 'Genome sequencing (preferred) or SNORD118-inclusive panel', detail: 'Biallelic SNORD118 variants; confirm the locus is covered, and use functional RNA assays for novel variants. Rare SNORD118-negative cases suggest possible locus heterogeneity.', src: [JENK, MCF, SILVA] },
    { phase: 'Confirmation', category: 'Pathology', method: 'Brain biopsy / cyst wall histology', detail: 'For unsolved cases: demonstrates microangiopathy.', src: [HELMAN] },
  ],
  differential: [
    'Coats plus / CRMCC (CTC1; retinal telangiectasia, bone marrow failure, GI ectasia)',
    'Primary familial brain calcification (SLC20A2, PDGFB, PDGFRB, XPR1; no leukoencephalopathy or cysts)',
    'Congenital TORCH infection (CMV, toxoplasmosis)',
    'Aicardi-Goutières syndrome (interferon signature, earlier onset)',
    'Mitochondrial leukodystrophies',
    'Cerebral cavernous malformations (CCM1/2/3)',
  ],
  phenotypes: {
    applicable: true,
    note: 'Paediatric- and adult-onset presentations are recognised, with identical histopathology and no consistent genotype correlation.',
    forms: [
      { name: 'Paediatric onset', onset: 'Neonatal to second decade', severity: 'Moderate to severe', progression: 'Seizures and progressive neurological decline; may progress rapidly', genetics: 'Biallelic SNORD118 (mostly compound heterozygous)', markers: 'Radiological triad; cysts may need drainage', src: [CROW, POLIT] },
      { name: 'Adult onset', onset: '4th–7th decade', severity: 'Mild to moderate', progression: 'Insidious cognitive decline, focal deficits, or incidental imaging finding', genetics: 'Biallelic SNORD118; same variants can cause childhood onset', markers: 'Radiological triad; rare systemic involvement', src: [CROW, CULL, BONOMO] },
    ],
  },
  management: [
    { category: 'Symptomatic', text: 'Standard anti-seizure medication by seizure type; no LCC-specific preference.', src: [POLIT] },
    { category: 'Symptomatic', text: 'Surgical drainage, fenestration, aspiration, resection or shunting of symptomatic expanding cysts; re-accumulation may need repeat surgery.', src: [MURPHY, PAFF, GUAN] },
    { category: 'Symptomatic', text: 'VP shunting or endoscopic third ventriculostomy for obstructive hydrocephalus.', src: [SHTAYA] },
    { category: 'Supportive', text: 'Physiotherapy, occupational and speech-language therapy, educational and neuropsychological support.', src: [CROW] },
    { category: 'Monitoring', text: 'Serial neuroimaging and functional assessment to track cyst growth and disease burden.', src: [CROW, PAFF] },
    { category: 'Supportive', text: 'Genetic counselling (25% sibling recurrence risk); carrier, prenatal and preimplantation testing once variants are known.', src: [JENK] },
  ],
  therapies: [
    { id: 'labrune-surgery', name: 'Neurosurgical cyst drainage', modality: 'Other', target: 'Expanding parenchymal cysts', mechanism: 'Drainage, fenestration or shunting relieves mass effect and raised intracranial pressure.', delivery: 'Neurosurgical', stage: 'Approved / standard of care', evidenceBase: 'Human', status: 'Standard symptomatic care for symptomatic cysts', ev: 'strong', why: 'Case series report improvement; no controlled trials; cysts can recur.', src: [PAFF, MURPHY, GUAN] },
    { id: 'labrune-bevacizumab', name: 'Bevacizumab (off-label)', modality: 'Other', target: 'VEGF', mechanism: 'Anti-VEGF antibody suppresses pathological angiogenesis and vascular permeability.', delivery: 'Intravenous', stage: 'Early human trials', evidenceBase: 'Human', status: 'Off-label use in case reports / series; no formal trial', ev: 'emerging', why: 'Anecdotal radiological and clinical benefit; systemic risks (hypertension, impaired wound healing, thromboembolism).', src: [POLIT, MURPHY] },
    { id: 'labrune-steroids', name: 'Corticosteroids (empirical)', modality: 'Other', target: 'Perivascular inflammation', mechanism: 'Reduce perivascular inflammation.', delivery: 'Oral / intravenous', stage: 'Early human trials', evidenceBase: 'Human', status: 'Empirical off-label use; unclear benefit', ev: 'unknown', why: 'Insufficient and inconsistent evidence.', src: [POLIT] },
    { id: 'labrune-u8', name: 'U8 snoRNA replacement / gene therapy', modality: 'Gene therapy', target: 'SNORD118', mechanism: 'Deliver functional U8 snoRNA to affected CNS cells.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Concept only; no preclinical programme or animal model', ev: 'proposed', why: 'No published preclinical data.', src: [MCF] },
    { id: 'labrune-ribosome', name: 'Ribosome biogenesis rescue (small molecule)', modality: 'Small molecule', target: 'LSm2–8, pre-rRNA processing or p53/MDM2 stress axis', mechanism: 'Restore ribosome biogenesis or blunt nucleolar stress responses.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Concept only', ev: 'proposed', why: 'No LCC-directed studies.', src: [MCF] },
    { id: 'labrune-vascular', name: 'Other vascular-targeted therapies', modality: 'Other', target: 'Cerebral microvasculature (mTOR, angiopoietin pathways)', mechanism: 'Modulate pathological vascular proliferation.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Human', status: 'Biologically plausible; not investigated', ev: 'proposed', why: 'Rationale from human histopathology only.', src: [HELMAN] },
  ],
  trials: [],
  milestones: [
    { year: 1996, label: 'Radiological triad described by Labrune and colleagues', stage: 'Discovery', src: [] },
    { year: 2016, label: 'Biallelic SNORD118 variants identified', stage: 'Discovery', src: [JENK] },
    { year: 2021, label: '64-patient cohort defines genetic and phenotypic spectrum; microangiopathy pathology described', stage: 'Discovery', src: [CROW, HELMAN] },
    { year: 2023, label: 'Off-label bevacizumab experience reported in natural-history series', stage: 'Early human trials', src: [POLIT] },
  ],
  gaps: [
    { text: 'Why U8 dysfunction selectively damages cerebral small vessels is unknown.', ev: 'proposed', src: [MCF] },
    { text: 'No validated fluid biomarker for monitoring.', ev: 'unknown', src: [CROW] },
    { text: 'No natural-history study or patient registry formally established.', ev: 'unknown', src: [CROW] },
    { text: 'Genotype–phenotype correlations insufficiently characterised.', ev: 'emerging', src: [CROW, CULL] },
    { text: 'No animal model of LCC published, limiting preclinical development.', ev: 'unknown', src: [MCF] },
    { text: 'No interventional trials; bevacizumab evidence is anecdotal and warrants a prospective controlled study.', ev: 'emerging', src: [POLIT] },
    { text: 'SNORD118-negative cases suggest possible locus heterogeneity.', ev: 'emerging', src: [SILVA] },
  ],
}
