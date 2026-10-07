import type { Disease, Gene, Source } from '../types'
import { geneDb, lit, omim } from '../cite'

const HEN = 'lit:rnaset2:henneke2009'
const KAM = 'lit:rnaset2:kameli2019'
const KET = 'lit:rnaset2:kettwig2021'
const HAM = 'lit:rnaset2:hamilton2020'
const WEB = 'lit:rnaset2:weber2020'
const SIN = 'lit:rnaset2:sinkevicius2018'
const SUN = 'lit:rnaset2:sun2018'
const SEI = 'lit:rnaset2:seifert2024'
const OLI = 'lit:rnaset2:olivier1998'
const ASH = 'lit:rnaset2:ashrafi2020'
const RUT = 'lit:rnaset2:rutherfordthesis'
const OMIM = 'omim:612951'

export const rnaset2Sources: Source[] = [
  lit(HEN, 'Henneke M, Diekmann S, Ohlenbusch A, et al.', 2009, 'RNASET2-deficient cystic leukoencephalopathy resembles congenital cytomegalovirus brain infection', 'Nat Genet'),
  lit(KAM, 'Kameli R, Amanat M, Rezaei Z, et al.', 2019, 'RNASET2-deficient leukoencephalopathy mimicking congenital CMV infection and Aicardi-Goutieres syndrome: a case report with a novel pathogenic variant', 'Orphanet J Rare Dis'),
  lit(KET, 'Kettwig M, Ternka K, Wendland K, et al.', 2021, 'Interferon-driven brain phenotype in a mouse model of RNaseT2 deficient leukoencephalopathy', 'Nat Commun'),
  lit(HAM, 'Hamilton N, Rutherford HA, Petts JJ, et al.', 2020, 'The failure of microglia to digest developmental apoptotic cells contributes to the pathology of RNASET2-deficient leukoencephalopathy', 'Glia'),
  lit(WEB, 'Weber T, Schlotawa L, Dosch R, et al.', 2020, 'Zebrafish disease model of human RNASET2-deficient cystic leukoencephalopathy displays abnormalities in early microglia', 'Biol Open'),
  lit(SIN, 'Sinkevicius KW, Morrison TR, Kulkarni P, et al.', 2018, 'RNaseT2 knockout rats exhibit hippocampal neuropathology and deficits in memory', 'Dis Model Mech'),
  lit(SUN, 'Sun Y, Hu X, Song J, et al.', 2018, 'Novel RNASET2 Pathogenic Variants in an East Asian Child with Delayed Psychomotor Development', 'Fetal Pediatr Pathol'),
  { ...lit(SEI, 'Seifert CL', 2024, 'Rnaset2-Defizienz: Eine klinisch-experimentelle Betrachtung im Kontext der Typ-1-Interferonopathien', 'PhD thesis, University of Göttingen'), url: 'https://doi.org/10.53846/goediss-10878' },
  lit(OLI, 'Olivier M, Lenard HC, Aksu F, Gärtner J', 1998, 'A new leukoencephalopathy with bilateral anterior temporal lobe cysts', 'Neuropediatrics'),
  lit(ASH, 'Ashrafi MR, Amanat M, Garshasbi M, et al.', 2020, 'An update on clinical, pathological, diagnostic, and therapeutic perspectives of childhood leukodystrophies', 'Expert Rev Neurother', 'review'),
  {
    id: RUT,
    authors: 'Rutherford H',
    title: 'Transplantation for microglia replacement: Grafting therapeutic strategies for RNASET2-deficient leukodystrophy in a zebrafish model',
    venue: 'PhD thesis, University of Sheffield',
    kind: 'primary',
    url: 'https://etheses.whiterose.ac.uk/id/eprint/36417/',
  },
  omim('612951', 'Leukoencephalopathy, cystic, without megalencephaly; LCWM'),
  omim('612249', 'Ribonuclease T2; RNASET2'),
]

export const rnaset2Genes: Gene[] = [
  {
    symbol: 'RNASET2',
    name: 'Ribonuclease T2',
    protein: 'RNase T2, 256-aa secreted and lysosomal glycoprotein ribonuclease',
    location: '6q27',
    function:
      'Degrades single-stranded RNA, particularly ribosomal RNA, in lysosomes and the extracellular space. In the CNS it supports microglial digestion of RNA-rich apoptotic material.',
    pathway: 'Lysosomal RNA turnover; nucleic acid sensing / type I interferon restraint',
    variantTypes: ['Nonsense', 'Frameshift', 'Large genomic deletions (e.g. 6q27)'],
    diseases: ['rnaset2'],
    ev: 'established',
    src: [HEN, KAM, 'omim:612249', ...geneDb('RNASET2')],
  },
]

const cv = 'db:clinvar:RNASET2'
const NS = 'Not stated in dossier'
const NOFREQ = 'Not reported in dossier (expected very rare)'

export const rnaset2: Disease = {
  id: 'rnaset2',
  name: 'RNASET2-Deficient Cystic Leukoencephalopathy',
  short: 'RNASET2',
  lastUpdated: '2026-10-08',
  color: '#3f7f8c',
  synonyms: [
    'RNase T2-deficient leukoencephalopathy',
    'Cystic leukoencephalopathy without megalencephaly',
    'Leukoencephalopathy with bilateral anterior temporal lobe cysts',
  ],
  classification: 'Infantile cystic leukoencephalopathy; type I interferonopathy (AGS spectrum overlap); lysosomal RNA metabolism disorder',
  inheritance: 'Autosomal recessive',
  genes: ['RNASET2'],
  tagline: 'Loss of lysosomal RNase T2 → undegraded RNA in microglia → type I interferon neuroinflammation → cystic white matter injury mimicking congenital CMV.',
  identifiers: [
    { label: 'OMIM', value: '612951', url: 'https://www.omim.org/entry/612951' },
    { label: 'OMIM (gene)', value: '612249', url: 'https://www.omim.org/entry/612249' },
    { label: 'Orphanet', value: 'search', url: 'https://www.orpha.net/en/disease/search?search=RNASET2' },
    { label: 'MONDO', value: 'search', url: 'https://monarchinitiative.org/search?q=RNASET2-deficient%20cystic%20leukoencephalopathy' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Biallelic loss-of-function variants in RNASET2 abolish RNase T2 activity.', ev: 'established', why: 'Original 2009 genetic description replicated in later case reports.', src: [HEN, KAM, OMIM] },
    { label: 'Pathomechanism', text: 'Lysosomal RNA accumulation in microglia triggers constitutive type I interferon signalling and neuroinflammation.', ev: 'strong', why: 'Convergent zebrafish, mouse and rat data; human mechanistic evidence limited.', src: [HAM, KET, WEB] },
    { label: 'Imaging hallmark', text: 'Bilateral anterior temporal subcortical cysts with diffuse white matter abnormality and intracranial calcifications.', ev: 'established', src: [OLI, HEN] },
    { label: 'Primary cell types', text: 'Microglia, with secondary oligodendrocyte dysfunction and astrogliosis.', ev: 'strong', why: 'Microglial primacy shown in animal models.', src: [HAM, KET] },
  ],
  clinical: [
    { label: 'Age of onset', text: 'Infantile, typically in the first year of life.', ev: 'established', src: [HEN] },
    { label: 'Neurological features', text: 'Psychomotor delay and regression, hypotonia evolving to spasticity, epilepsy (may be refractory) and acquired microcephaly.', ev: 'established', src: [HEN, KAM] },
    { label: 'Head size', text: 'Normal or microcephalic, never megalencephalic, distinguishing it from MLC.', ev: 'established', src: [HEN] },
    { label: 'CMV mimicry', text: 'Clinical and radiological picture closely resembles congenital CMV infection and Aicardi-Goutières syndrome; molecular testing is needed.', ev: 'established', src: [HEN, KAM] },
    { label: 'Outcome', text: 'Severe cognitive impairment with minimal language is typical; some patients retain limited ambulation.', ev: 'emerging', why: 'Single 18-patient cohort (doctoral thesis).', src: [SEI] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Ultra-rare; no prevalence estimate is established.', ev: 'unknown', why: 'Only case reports and one small cohort.', src: [HEN, SEI] },
    { label: 'Largest cohort', text: 'An 18-patient clinical cohort is the largest published characterisation.', ev: 'emerging', src: [SEI] },
    { label: 'Under-ascertainment', text: 'Likely under-diagnosed because of misattribution to congenital CMV or AGS.', ev: 'strong', src: [HEN] },
    { label: 'Distribution', text: 'Reported in European (German), Middle Eastern (Iranian) and East Asian (Chinese) families; no ethnic restriction; consanguinity in some families.', ev: 'strong', src: [HEN, KAM, SUN] },
    { label: 'Sex distribution', text: 'Equal sex distribution, as expected for autosomal recessive inheritance.', ev: 'established', src: [HEN] },
  ],
  variants: [
    { id: 'rnaset2-s78x', disease: 'rnaset2', gene: 'RNASET2', transcript: NS, hgvsc: 'c.233C>A', hgvsp: 'p.(Ser78Ter)', build: NS, type: 'Nonsense', consequence: 'Premature stop; loss of function', clinvar: NS, popFreq: NOFREQ, phenotype: 'Homozygous: motor delay, regression, anterior temporal cysts', functional: 'Presumed null', ev: 'emerging', why: 'Single consanguineous family.', src: [KAM, cv] },
    { id: 'rnaset2-w43x', disease: 'rnaset2', gene: 'RNASET2', transcript: NS, hgvsc: 'c.128G>A', hgvsp: 'p.(Trp43Ter)', build: NS, type: 'Nonsense', consequence: 'Premature stop; loss of function', clinvar: NS, popFreq: NOFREQ, phenotype: 'Compound heterozygous with 6q27 deletion: delayed psychomotor development', functional: 'Presumed null', ev: 'emerging', why: 'Single patient report.', src: [SUN, cv] },
    { id: 'rnaset2-del6q27', disease: 'rnaset2', gene: 'RNASET2', transcript: NS, hgvsc: '~430 kb deletion at 6q27 encompassing RNASET2', build: NS, type: 'Large genomic deletion', consequence: 'Whole-gene loss', clinvar: NS, popFreq: NOFREQ, phenotype: 'Second allele in trans with p.Trp43Ter', functional: 'Gene absent', ev: 'emerging', why: 'Single patient; highlights need for CNV analysis.', src: [SUN] },
  ],
  genotypePhenotype: [
    { aspect: 'Severity', finding: 'Biallelic null variants (nonsense, frameshift, large deletion) cause the classic severe infantile cystic leukoencephalopathy.', ev: 'established', src: [HEN, KAM] },
    { aspect: 'Clinical phenotype', finding: 'Compound heterozygous nonsense plus deletion genotypes give the same severe phenotype.', ev: 'emerging', why: 'Single case.', src: [SUN] },
    { aspect: 'Severity', finding: 'Motor and cognitive severity varies between patients; attribution to genotype or modifiers is unknown.', ev: 'emerging', src: [SEI] },
    { aspect: 'Clinical phenotype', finding: 'Whether hypomorphic variants cause milder disease is not established.', ev: 'unknown', src: [HEN] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'RNASET2 (6q27)', detail: 'Biallelic loss-of-function variants, including large deletions.', ev: 'established', src: [HEN, SUN] },
    { stage: 'Protein', label: 'RNase T2', detail: 'Lysosomal / secreted ribonuclease absent or non-functional.', ev: 'established', src: [HEN, KAM] },
    { stage: 'Molecular function', label: 'Lysosomal RNA degradation fails', detail: 'Undegraded RNA, particularly rRNA, accumulates in microglial lysosomes.', ev: 'strong', src: [HAM] },
    { stage: 'Pathway', label: 'Constitutive type I interferon signalling', detail: 'ISG upregulation, IRF9 nuclear translocation and IFNAR1-dependent neuroinflammation with CD8+ T-cell and monocyte infiltration (mouse).', ev: 'strong', src: [KET] },
    { stage: 'Cellular consequence', label: 'Microglial engorgement and clearance failure', detail: 'Microglia fail to digest developmental apoptotic cells; secondary astrogliosis and myelin loss.', ev: 'strong', src: [HAM, WEB, KET] },
    { stage: 'Phenotype', label: 'Cystic leukoencephalopathy', detail: 'Infantile psychomotor regression, spasticity, epilepsy, microcephaly, temporal cysts and calcifications.', ev: 'established', src: [HEN, KAM] },
  ],
  relations: [
    { from: ['gene', 'RNASET2'], to: ['metabolite', 'Lysosomal RNA accumulation'], label: 'loss causes', ev: 'strong', why: 'Shown in zebrafish microglia; human tissue data limited.', src: [HAM, WEB] },
    { from: ['metabolite', 'Lysosomal RNA accumulation'], to: ['pathway', 'Type I interferon signalling'], label: 'triggers', ev: 'strong', why: 'IFNAR1-dependent phenotype in Rnaset2 knockout mice.', src: [KET] },
    { from: ['gene', 'RNASET2'], to: ['cell', 'Microglia / macrophages'], label: 'required in', ev: 'strong', why: 'Microglial clearance defect precedes brain injury in zebrafish.', src: [HAM, WEB] },
    { from: ['pathway', 'Type I interferon signalling'], to: ['phenotype', 'Cystic white matter injury'], label: 'drives', ev: 'strong', why: 'Animal model evidence; mechanistic inference in humans.', src: [KET, HAM] },
    { from: ['pathway', 'Type I interferon signalling'], to: ['disease', 'Aicardi-Goutières syndrome'], label: 'shared with', ev: 'strong', why: 'Both are interferonopathies from failed nucleic acid degradation.', src: [HEN, KET] },
    { from: ['pathway', 'Type I interferon signalling'], to: ['biomarker', 'Interferon-stimulated gene signature'], label: 'measured as', ev: 'emerging', why: 'Shown in mice; not validated in patients.', src: [KET] },
    { from: ['phenotype', 'Cystic white matter injury'], to: ['biomarker', 'Anterior temporal cysts (MRI)'], label: 'visualised as', ev: 'established', why: 'Cardinal imaging feature in all descriptions.', src: [OLI, HEN] },
    { from: ['therapy', 'Type I interferon pathway modulation'], to: ['pathway', 'Type I interferon signalling'], label: 'would block (proposed)', ev: 'emerging', why: 'Rationale from IFNAR1 dependence in mice; no treatment data.', src: [KET] },
    { from: ['therapy', 'Microglial replacement'], to: ['cell', 'Microglia / macrophages'], label: 'replaces', ev: 'emerging', why: 'Zebrafish proof-of-concept only.', src: [RUT, HAM] },
  ],
  cells: [
    { cell: 'Microglia / macrophages', role: 'primary', detail: 'Fail to digest RNA-rich apoptotic cells; engorgement, reactive microgliosis and interferon response.', ev: 'strong', src: [HAM, WEB, KET] },
    { cell: 'Oligodendrocytes', role: 'secondary', detail: 'Myelin loss secondary to the neuroinflammatory environment.', ev: 'emerging', src: [HAM, KET] },
    { cell: 'Astrocytes', role: 'secondary', detail: 'White matter astrogliosis.', ev: 'emerging', src: [HAM, KET] },
    { cell: 'Neurons / axons', role: 'secondary', detail: 'Hippocampal neuropathology and memory deficits in knockout rats (rat data).', ev: 'emerging', src: [SIN] },
  ],
  regions: [
    { region: 'Anterior temporal subcortical white matter', finding: 'Bilateral cysts with CSF-like signal, the cardinal feature.', src: [OLI, HEN] },
    { region: 'Frontal and parieto-occipital white matter', finding: 'Additional subcortical cysts in some cases.', src: [KAM] },
    { region: 'Cerebral white matter (diffuse)', finding: 'Confluent or multifocal T2/FLAIR hyperintensity with ex vacuo ventricular enlargement.', src: [HEN, KAM] },
    { region: 'Basal ganglia & periventricular region', finding: 'Calcifications on CT, not present in all cases.', src: [HEN, KAM, SEI] },
    { region: 'Hippocampus', finding: 'Neuropathology in knockout rats (animal data).', src: [SIN] },
  ],
  biomarkers: [
    { name: 'Biallelic RNASET2 variants', category: 'Genetic', significance: 'Definitive diagnosis.', sample: 'Blood DNA', assay: 'Sequencing plus CNV analysis (panel, WES/WGS, microarray)', purpose: ['Diagnosis', 'Family testing'], status: 'Established clinical', limitations: 'Sequencing alone can miss large deletions.', ev: 'established', src: [HEN, KAM, SUN] },
    { name: 'Anterior temporal cysts (MRI)', category: 'Imaging', significance: 'Highly characteristic imaging sign.', sample: 'In vivo brain', assay: 'MRI (T1, T2/FLAIR, DWI, SWI)', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Shared with congenital CMV and partly with MLC.', ev: 'established', src: [OLI, HEN] },
    { name: 'Intracranial calcifications (CT)', category: 'Imaging', significance: 'Supports CMV/AGS-like pattern.', sample: 'In vivo brain', assay: 'CT', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'Not universally present.', ev: 'strong', src: [HEN, SEI] },
    { name: 'RNase T2 protein / activity', category: 'Enzymatic', significance: 'Confirms absent functional enzyme.', sample: 'Not specified', assay: 'Protein activity assay (research)', purpose: ['Diagnosis'], status: 'Experimental', limitations: 'Research use only.', ev: 'strong', src: [HEN] },
    { name: 'Interferon-stimulated gene signature', category: 'Biochemical', significance: 'Candidate readout of interferon activation.', sample: 'Blood / CSF', assay: 'ISG expression', purpose: ['Diagnosis', 'Treatment response'], status: 'Experimental', limitations: 'Not validated in RNASET2 patients.', ev: 'emerging', src: [KET] },
    { name: 'Siglec-1 (CD169)', category: 'Biochemical', significance: 'Elevated in knockout mouse blood.', sample: 'Blood', assay: 'Flow cytometry / expression', purpose: ['Research'], status: 'Experimental', limitations: 'Not consistently elevated in patient blood.', ev: 'controversial', src: [KET] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Infant with psychomotor delay or regression, spasticity, seizures and microcephaly.', src: [HEN, KAM] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain MRI and CT', detail: 'Bilateral anterior temporal cysts, diffuse white matter change; CT for calcifications.', src: [OLI, HEN, KAM] },
    { phase: 'Investigation', category: 'Infectious', method: 'Congenital CMV / TORCH workup', detail: 'Blood, urine, CSF and dried blood spot PCR; serology. Negative results support a genetic cause.', src: [HEN, KAM] },
    { phase: 'Investigation', category: 'CSF / metabolic', method: 'CSF and metabolic screen', detail: 'Cell count, protein, interferon-alpha; organic acids, amino acids and lysosomal enzymes to exclude other causes.', src: [KAM, ASH] },
    { phase: 'Confirmation', category: 'Genetic', method: 'RNASET2 sequencing + CNV analysis', detail: 'Biallelic pathogenic variants; WES must be supplemented by CNV analysis or WGS/microarray to detect deletions.', src: [SUN, ASH, KAM] },
    { phase: 'Confirmation', category: 'Genetic', method: 'AGS gene panel', detail: 'If RNASET2 result is negative or ambiguous (TREX1, RNASEH2A/B/C, SAMHD1, ADAR, IFIH1).', src: [HEN, KAM] },
  ],
  differential: [
    'Congenital CMV brain infection',
    'Aicardi-Goutières syndrome',
    'Megalencephalic leukoencephalopathy with subcortical cysts (macrocephaly, no calcifications)',
    'Congenital Zika virus infection',
    'Krabbe disease',
    'Canavan disease',
  ],
  phenotypes: {
    applicable: false,
    note: 'All reported patients share a severe infantile presentation with variable degree of disability; a discrete typical/atypical split is not supported by the small case numbers.',
    forms: [],
  },
  management: [
    { category: 'Symptomatic', text: 'Individualised anti-seizure medication; epileptology referral; ketogenic diet for refractory seizures.', src: [KAM, ASH] },
    { category: 'Symptomatic', text: 'Spasticity: physiotherapy, orthoses, baclofen or tizanidine, botulinum toxin, intrathecal baclofen.', src: [ASH] },
    { category: 'Supportive', text: 'Early intervention (PT, OT, speech), AAC devices and special education.', src: [KAM, ASH] },
    { category: 'Supportive', text: 'Nutritional management with gastrostomy for severe dysphagia; respiratory monitoring and palliative care planning.', src: [KAM, ASH] },
    { category: 'Supportive', text: 'Genetic counselling: 25% recurrence risk; carrier, prenatal and preimplantation testing.', src: [HEN] },
  ],
  therapies: [
    { id: 'rnaset2-ifn', name: 'Type I interferon pathway modulation', modality: 'Small molecule', target: 'IFNAR1 / JAK-STAT', mechanism: 'JAK inhibitors or anti-IFNAR antibody to dampen interferon-driven neuroinflammation.', delivery: 'Systemic', stage: 'Discovery', evidenceBase: 'Animal', status: 'Preclinical rationale only; AGS precedent', ev: 'emerging', why: 'IFNAR1-dependent phenotype in mice; no RNASET2 treatment data.', src: [KET] },
    { id: 'rnaset2-mg', name: 'Microglial replacement', modality: 'Cell therapy', target: 'RNASET2-deficient microglia', mechanism: 'Replace dysfunctional microglia with RNASET2-competent cells.', delivery: 'Transplantation (zebrafish)', stage: 'Animal studies', evidenceBase: 'Animal', status: 'Early preclinical proof-of-concept', ev: 'emerging', why: 'Zebrafish grafting work only.', src: [RUT, HAM] },
    { id: 'rnaset2-gt', name: 'RNASET2 gene therapy', modality: 'Gene therapy', target: 'RNASET2', mechanism: 'Restore RNASET2 expression in microglia / CNS.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Conceptual', ev: 'proposed', why: 'No preclinical efficacy data.', src: [HEN] },
    { id: 'rnaset2-rna', name: 'Alternative RNA degradation enhancement', modality: 'Other', target: 'RNA metabolism', mechanism: 'Enhance alternative RNA degradation pathways to reduce substrate.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Conceptual', ev: 'proposed', why: 'Conceptual only; no published data.', src: [HEN] },
  ],
  trials: [],
  milestones: [
    { year: 1998, label: 'Leukoencephalopathy with anterior temporal cysts described', stage: 'Discovery', src: [OLI] },
    { year: 2009, label: 'RNASET2 identified as causative gene', stage: 'Discovery', src: [HEN] },
    { year: 2018, label: 'RNaseT2 knockout rat model', stage: 'Animal studies', src: [SIN] },
    { year: 2020, label: 'Zebrafish models show microglial clearance failure', stage: 'Animal studies', src: [HAM, WEB] },
    { year: 2021, label: 'Mouse model shows IFNAR1-dependent interferon brain phenotype', stage: 'Animal studies', src: [KET] },
    { year: 2024, label: '18-patient clinical cohort characterised', stage: 'Discovery', src: [SEI] },
  ],
  gaps: [
    { text: 'No disease-modifying therapy and no registered clinical trials.', ev: 'unknown', src: [SEI, ASH] },
    { text: 'Interferon signature assays are not validated in RNASET2 patients; Siglec-1 findings diverge between mouse and human.', ev: 'controversial', src: [KET] },
    { text: 'Natural history rests on a single 18-patient cohort; registries are needed.', ev: 'unknown', src: [SEI] },
    { text: 'Efficacy of JAK inhibition, shown in AGS, is untested in RNASET2 deficiency.', ev: 'proposed', src: [KET] },
    { text: 'Genotype-phenotype correlations and hypomorphic alleles are uncharacterised.', ev: 'unknown', src: [HEN, SEI] },
  ],
}
