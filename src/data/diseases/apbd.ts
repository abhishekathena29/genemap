import type { Disease, Gene, Source } from '../types'
import { geneDb, genereviews, lit, nord, omim, orpha, pmid, query } from '../cite'

/** Pin a literature source to its DOI landing page. */
const doi = (s: Source, d: string): Source => ({ ...s, url: `https://doi.org/${d}` })

const GR = 'gr:apbd'
const MOCHEL = 'lit:apbd:mochel2012'
const KOCH = 'lit:apbd:koch2023'
const PARADAS = 'lit:apbd:paradas2014'
const ZEB = 'lit:apbd:zebhauser2022'
const SOUZA = 'lit:apbd:souza2021'
const ABRAHAM = 'lit:apbd:abraham2023'
const VAKNIN = 'lit:apbd:vaknin2021'
const AKMAN15 = 'lit:apbd:akman2015'
const AKMAN12 = 'lit:apbd:akman2012'
const WIERZBA = 'lit:apbd:wierzbabobrowicz2008'
const MASSA = 'lit:apbd:massa2008'
const HARIGAYA = 'lit:apbd:harigaya2017'
const COLOMBO = 'lit:apbd:colombo2015'
const CHEN = 'lit:apbd:chen2023'
const CARVALHO = 'lit:apbd:carvalho2021'
const NADDAF = 'lit:apbd:naddaf2016'
const SAMPAOLO = 'lit:apbd:sampaolo2015'
const DUGUE = 'lit:apbd:dugue2024'
const FRANCO = 'lit:apbd:francopalacios2016'

export const apbdSources: Source[] = [
  genereviews('apbd', 'NBK164700', 'GBE1 Adult Polyglucosan Body Disease'),
  omim('263570', 'Polyglucosan body disease, adult form'),
  omim('232500', 'Glycogen storage disease IV'),
  orpha('308553', 'Adult polyglucosan body disease'),
  nord('apbd', 'glycogen-storage-disease-type-iv', 'Glycogen Storage Disease Type IV'),
  {
    id: 'org:apbd:apbdrf',
    title: 'APBD Research Foundation (advocacy and patient registry)',
    venue: 'APBD Research Foundation',
    kind: 'patient-org',
    url: 'https://www.apbdrf.org/',
  },
  {
    id: 'reg:apbd:ctgov',
    title: 'ClinicalTrials.gov search: adult polyglucosan body disease',
    venue: 'ClinicalTrials.gov',
    kind: 'registry',
    url: 'https://clinicaltrials.gov/ct2/results?cond=adult+polyglucosan+body+disease',
  },
  query('q:apbd:gys', 'Glycogen synthase inhibition for polyglucosan disorders', 'glycogen synthase inhibition polyglucosan'),
  query('q:apbd:nfl', 'Neurofilament light chain in adult polyglucosan body disease', 'neurofilament light adult polyglucosan body disease'),
  doi(lit(MOCHEL, 'Mochel F, et al.', 2012, 'Adult polyglucosan body disease: natural history and key MRI findings', 'Ann Neurol'), '10.1002/ANA.23598'),
  doi(lit(KOCH, 'Koch RL, et al.', 2023, 'Diagnosis and management of glycogen storage disease type IV, including adult polyglucosan body disease', 'Mol Genet Metab', 'guideline'), '10.1016/j.ymgme.2023.107525'),
  doi(lit(PARADAS, 'Paradas C, et al.', 2014, 'Branching enzyme deficiency: expanding the clinical spectrum', 'JAMA Neurol'), '10.1001/JAMANEUROL.2013.4888'),
  doi(lit(ZEB, 'Zebhauser PT, et al.', 2022, 'Characterization of cognitive impairment in adult polyglucosan body disease', 'J Neurol'), '10.1007/s00415-022-10960-z'),
  doi(lit(SOUZA, 'Souza PVS, et al.', 2021, 'GBE1-related disorders: adult polyglucosan body disease and its neuromuscular phenotypes', 'J Inherit Metab Dis', 'review'), '10.1002/JIMD.12325'),
  doi(lit(ABRAHAM, 'Abraham JR, et al.', 2023, 'Proteomic investigations of adult polyglucosan body disease', 'Front Neurol'), '10.3389/fneur.2023.1261125'),
  doi(lit(VAKNIN, 'Vaknin H, et al.', 2021, 'A new drug candidate for glycogen storage disorders enhances glycogen catabolism', 'bioRxiv (preprint)'), '10.1101/2021.03.18.436069'),
  doi(lit(AKMAN15, 'Akman HO, et al.', 2015, 'A novel mouse model that recapitulates adult-onset glycogenosis type 4', 'Hum Mol Genet'), '10.1093/hmg/ddv385'),
  doi(lit(AKMAN12, 'Akman HO, et al.', 2012, 'An exon trap in GBE1 is the common missing cause in APBD', 'Neurology (suppl.)'), '10.1212/wnl.84.14_supplement.s42.006'),
  pmid(WIERZBA, '19039738', 'Wierzba-Bobrowicz T, et al.', 2008, 'Immunohistochemical and ultrastructural changes in the brain in probable adult glycogenosis type IV', 'Folia Neuropathol'),
  doi(lit(MASSA, 'Massa R, et al.', 2008, 'Adult polyglucosan body disease: proton MRS and novel GBE1 mutation', 'Muscle Nerve'), '10.1002/MUS.20916'),
  doi(lit(HARIGAYA, 'Harigaya Y, et al.', 2017, 'Novel GBE1 mutation in a Japanese family with adult polyglucosan body disease', 'Neurol Genet'), '10.1212/NXG.0000000000000138'),
  doi(lit(COLOMBO, 'Colombo I, et al.', 2015, 'Adult polyglucosan body disease: clinical and histological heterogeneity of a large Italian family', 'Neuromuscul Disord'), '10.1016/j.nmd.2015.01.015'),
  doi(lit(CHEN, 'Chen Y, et al.', 2023, 'Clinical and genetic heterogeneity of adult polyglucosan body disease caused by GBE1 biallelic mutations in China', 'Genes Dis'), '10.1016/j.gendis.2023.101140'),
  doi(lit(CARVALHO, 'Carvalho AF, et al.', 2021, 'Adult polyglucosan body disease: an atypical compound heterozygous with a novel GBE1 mutation', 'Neurol Sci'), '10.1007/S10072-021-05096-3'),
  doi(lit(NADDAF, 'Naddaf E, et al.', 2016, 'Adult polyglucosan body disease presenting as a unilateral progressive plexopathy', 'Muscle Nerve'), '10.1002/MUS.25041'),
  doi(lit(SAMPAOLO, 'Sampaolo S, et al.', 2015, 'A novel GBE1 mutation and features of polyglucosan bodies autophagy in adult polyglucosan body disease', 'Neuromuscul Disord'), '10.1016/J.NMD.2014.11.006'),
  doi(lit(DUGUE, 'Dugue A, et al.', 2024, 'Neuro-ophthalmic manifestations of adult polyglucosan body disease', 'J Neuroophthalmol'), '10.1097/wno.0000000000002186'),
  lit(FRANCO, 'Franco-Palacios MA, et al.', 2016, 'Adult polyglucosan body disease mimicking a low-grade glioma', 'Int J Clin Exp Pathol'),
]

export const apbdGenes: Gene[] = [
  {
    symbol: 'GBE1',
    name: '1,4-alpha-glucan branching enzyme 1',
    protein: 'Glycogen branching enzyme (GBE; EC 2.4.1.18), GH13 (alpha-amylase) family, 702 aa',
    location: '3p12.3',
    function:
      'Transfers terminal glucosyl chains from alpha-1,4 to alpha-1,6 linkages, creating the branch points that keep glycogen soluble and rapidly mobilisable.',
    pathway: 'Glycogen synthesis (branching step)',
    transcript: 'NM_000158.4',
    uniprot: 'P35573',
    ncbiGene: '2632',
    variantTypes: ['Missense (incl. Ashkenazi founder p.Tyr329Ser)', 'Splice-site', 'Frameshift', 'Deep intronic (IVS15 exon trap)'],
    diseases: ['apbd'],
    ev: 'established',
    src: [MOCHEL, KOCH, 'omim:263570', ...geneDb('GBE1')],
  },
]

export const apbd: Disease = {
  id: 'apbd',
  name: 'Adult Polyglucosan Body Disease',
  short: 'APBD',
  lastUpdated: '2026-10-08',
  color: '#3d8f5a',
  synonyms: [
    'Adult-onset polyglucosan body disease',
    'Glycogen storage disease type IV, adult neurologic form',
    'Adult-onset GBE1-related disorder',
    'Polyglucosan body neuropathy (historical)',
  ],
  classification: 'Glycogen storage disorder (adult neurologic GSD IV) with leukoencephalopathy and axonal neuropathy',
  inheritance: 'Autosomal recessive',
  genes: ['GBE1'],
  tagline: 'Hypomorphic GBE1 variants → poorly branched glycogen → polyglucosan bodies in neurons, glia and axons.',
  identifiers: [
    { label: 'OMIM', value: '263570', url: 'https://www.omim.org/entry/263570' },
    { label: 'OMIM (GSD IV)', value: '232500', url: 'https://www.omim.org/entry/232500' },
    { label: 'Orphanet', value: 'ORPHA:308553', url: 'https://www.orpha.net/en/disease/detail/308553' },
    { label: 'GeneReviews', value: 'NBK164700', url: 'https://www.ncbi.nlm.nih.gov/books/NBK164700/' },
    { label: 'MONDO', value: 'MONDO:0009268', url: 'https://monarchinitiative.org/MONDO:0009268' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Biallelic GBE1 variants, at least one hypomorphic, reduce glycogen branching enzyme activity.', ev: 'established', why: 'Causal gene, enzyme deficiency and pathology documented across cohorts and practice guidance.', src: [MOCHEL, KOCH, GR] },
    { label: 'Hallmark pathology', text: 'Poorly branched, insoluble glycogen precipitates as polyglucosan bodies in neurons, glia and peripheral nerve axons.', ev: 'established', src: [MOCHEL, WIERZBA, SAMPAOLO] },
    { label: 'Disease spectrum', text: 'APBD is the adult-onset, neurologically predominant end of glycogen storage disease type IV.', ev: 'established', src: [KOCH, 'omim:232500'] },
    { label: 'Primary cell types', text: 'Neurons and axons (central and peripheral) with astrocytic and microglial inclusions.', ev: 'strong', why: 'Neuropathology from autopsy and biopsy case series; cell-specific contributions not formally quantified.', src: [WIERZBA, NADDAF] },
  ],
  clinical: [
    { label: 'Age of onset', text: 'Typically the fifth to sixth decade (mean ~50 years); earlier onset in some non-Ashkenazi compound heterozygotes.', ev: 'established', src: [MOCHEL, PARADAS] },
    { label: 'Core triad', text: 'Neurogenic bladder (often first and most disabling), progressive spastic paraparesis and distal axonal sensorimotor polyneuropathy.', ev: 'established', src: [MOCHEL, KOCH] },
    { label: 'Cognition', text: 'Executive and memory impairment is recognised but variably expressed, more frequent with longer disease duration.', ev: 'strong', why: 'Single dedicated cohort study.', src: [ZEB] },
    { label: 'Autonomic and other features', text: 'Orthostatic hypotension and constipation; neuro-ophthalmic involvement and diaphragmatic failure reported in atypical cases.', ev: 'emerging', why: 'Case reports and small series.', src: [DUGUE, PARADAS] },
    { label: 'Progression', text: 'Slowly progressive; a relapsing, MS-like course is reported in some compound heterozygotes.', ev: 'strong', src: [MOCHEL, PARADAS, CARVALHO] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'True population prevalence is unknown; no population-wide epidemiological study exists.', ev: 'unknown', why: 'Rare, late-onset and likely under-ascertained.', src: [MOCHEL, 'orpha:308553'] },
    { label: 'Founder population', text: 'Enriched in Ashkenazi Jews; p.Tyr329Ser carrier frequency estimated at ~1 in 100 (theoretical prevalence ~1 in 40,000).', ev: 'emerging', why: 'Founder effect is established; numeric estimates vary by study.', src: [MOCHEL] },
    { label: 'Pan-ethnic cases', text: 'Reported in Portuguese, Italian, Spanish, Brazilian, Japanese and Chinese patients with distinct GBE1 variants.', ev: 'established', src: [SOUZA, HARIGAYA, COLOMBO, CHEN] },
    { label: 'Sex distribution', text: 'No clear sex predilection established.', ev: 'unknown', src: [MOCHEL] },
    { label: 'Diagnostic delay', text: 'Delays of many years are common because of overlap with MS, hereditary spastic paraplegia and neuropathies.', ev: 'emerging', src: [MOCHEL, KOCH] },
  ],
  variants: [
    { id: 'apbd-y329s', disease: 'apbd', gene: 'GBE1', transcript: 'NM_000158.4', hgvsc: 'c.986A>C', hgvsp: 'p.(Tyr329Ser)', build: 'Not stated (transcript-level)', type: 'Missense', consequence: 'Hypomorphic; residual GBE activity ~5–20% in homozygotes', clinvar: 'Pathogenic', popFreq: 'Ashkenazi Jewish founder; carrier rate ~1%; rare elsewhere', phenotype: 'Classic late-onset APBD (homozygous or with another hypomorphic allele)', functional: 'Substitution in the GH13 catalytic domain reduces branching activity', ev: 'established', why: 'Most common APBD allele worldwide with consistent enzymatic data.', src: [MOCHEL, 'db:clinvar:GBE1'] },
    { id: 'apbd-ivs15', disease: 'apbd', gene: 'GBE1', transcript: 'NM_000158.4', hgvsc: 'Deep intronic IVS15 exon-trap variant', build: 'Not stated', type: 'Deep intronic', consequence: 'Cryptic exon inclusion', clinvar: 'Not stated in source', popFreq: 'Relatively common occult second allele in apparently heterozygous Ashkenazi patients', phenotype: 'Classic APBD in trans with an exonic pathogenic variant', functional: 'Missed by exon sequencing; requires genome or long-read sequencing', ev: 'emerging', why: 'Reported in a conference abstract; not yet widely replicated.', src: [AKMAN12] },
    { id: 'apbd-n541d', disease: 'apbd', gene: 'GBE1', transcript: 'NM_000158.4', hgvsc: 'c.1621A>G', hgvsp: 'p.(Asn541Asp)', build: 'Not stated (transcript-level)', type: 'Missense', consequence: 'Reduced branching enzyme activity', clinvar: 'Verify in ClinVar', popFreq: 'European compound heterozygotes', phenotype: 'APBD (compound heterozygous)', functional: 'Not specified in source', ev: 'strong', src: [COLOMBO, 'db:clinvar:GBE1'] },
    { id: 'apbd-r515g', disease: 'apbd', gene: 'GBE1', transcript: 'NM_000158.4', hgvsc: 'c.1543C>G', hgvsp: 'p.(Arg515Gly)', build: 'Not stated (transcript-level)', type: 'Missense', consequence: 'Reduced branching enzyme activity', clinvar: 'Verify in ClinVar', popFreq: 'Non-Ashkenazi; compound heterozygotes', phenotype: 'APBD (compound heterozygous)', functional: 'Not specified in source', ev: 'strong', src: [PARADAS, 'db:clinvar:GBE1'] },
    { id: 'apbd-r355h', disease: 'apbd', gene: 'GBE1', transcript: 'NM_000158.4', hgvsc: 'c.1064G>A', hgvsp: 'p.(Arg355His)', build: 'Not stated (transcript-level)', type: 'Missense', consequence: 'Reduced branching enzyme activity', clinvar: 'Verify in ClinVar', popFreq: 'Reported in multiple ethnic groups', phenotype: 'APBD', functional: 'Not specified in source', ev: 'strong', src: [PARADAS, 'db:clinvar:GBE1'] },
    { id: 'apbd-y535c', disease: 'apbd', gene: 'GBE1', transcript: 'NM_000158.4', hgvsc: 'c.1604A>G', hgvsp: 'p.(Tyr535Cys)', build: 'Not stated (transcript-level)', type: 'Missense', consequence: 'Reduced branching enzyme activity', clinvar: 'Verify in ClinVar', popFreq: 'Case reports', phenotype: 'APBD', functional: 'Not specified in source', ev: 'strong', src: [PARADAS, 'db:clinvar:GBE1'] },
    { id: 'apbd-c691', disease: 'apbd', gene: 'GBE1', transcript: 'NM_000158.4', hgvsc: 'c.691+2T>C', build: 'Not stated (transcript-level)', type: 'Splice-site', consequence: 'Canonical splice disruption; loss of function', clinvar: 'Verify in ClinVar', popFreq: 'Non-Ashkenazi; compound heterozygotes', phenotype: 'APBD in trans with a hypomorphic allele', functional: 'Predicted null allele', ev: 'strong', src: [PARADAS, 'db:clinvar:GBE1'] },
    { id: 'apbd-c1961', disease: 'apbd', gene: 'GBE1', transcript: 'NM_000158.4', hgvsc: 'c.1961_1962delCA', build: 'Not stated (transcript-level)', type: 'Frameshift', consequence: 'Frameshift; loss of function', clinvar: 'Verify in ClinVar', popFreq: 'Non-Ashkenazi', phenotype: 'APBD in trans with a hypomorphic allele', functional: 'Predicted null allele', ev: 'strong', src: [PARADAS, 'db:clinvar:GBE1'] },
  ],
  genotypePhenotype: [
    { aspect: 'Clinical phenotype', finding: 'At least one hypomorphic allele retaining partial activity yields adult neurological APBD; biallelic null variants cause infantile hepatic/cardiac GSD IV instead.', ev: 'strong', why: 'Consistent allele-class pattern across the GSD IV spectrum.', src: [MOCHEL, PARADAS, KOCH] },
    { aspect: 'Age of onset', finding: 'Non-Ashkenazi compound heterozygotes often present earlier (third to fourth decade) and more variably.', ev: 'emerging', why: 'Small case series.', src: [PARADAS, CARVALHO] },
    { aspect: 'Progression', finding: 'Relapsing MS-like courses, predominantly neuropathic or myopathic forms and severe dysautonomia reported in compound heterozygotes.', ev: 'emerging', src: [PARADAS, CARVALHO] },
    { aspect: 'Severity', finding: 'Lower residual GBE activity generally associates with earlier or more severe disease, but correlation is imperfect within the APBD range (5–30%).', ev: 'emerging', why: 'Modifier genes and environment likely contribute.', src: [SOUZA, MOCHEL] },
    { aspect: 'Clinical phenotype', finding: 'Cognitive impairment tracks with age and disease duration rather than a specific genotype.', ev: 'emerging', src: [ZEB] },
    { aspect: 'Survival / outcome', finding: 'No validated genotype-based predictor of outcome.', ev: 'unknown', src: [KOCH] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'GBE1 (3p12.3)', detail: 'Biallelic variants with at least one hypomorphic allele.', ev: 'established', src: [MOCHEL, KOCH] },
    { stage: 'Protein', label: 'Glycogen branching enzyme', detail: 'Residual activity typically 5–30% of normal in leukocytes or fibroblasts.', ev: 'established', src: [MOCHEL, 'db:uniprot:GBE1'] },
    { stage: 'Molecular function', label: 'Defective alpha-1,6 branching', detail: 'Glycogen with long outer chains becomes insoluble, amylose-like polyglucosan.', ev: 'established', src: [WIERZBA, SAMPAOLO] },
    { stage: 'Pathway', label: 'Polyglucosan body formation; proteostasis stress', detail: 'Polyglucosan bodies accumulate; patient tissue shows mTOR, ubiquitin-proteasome, ER stress/UPR and autophagy-lysosomal dysregulation.', ev: 'emerging', src: [ABRAHAM, SAMPAOLO] },
    { stage: 'Cellular consequence', label: 'Axonal and myelin disruption', detail: 'Intra-axonal inclusions impair axonal transport and destabilise adjacent myelin; neuronal energy failure is proposed.', ev: 'strong', src: [MOCHEL, SAMPAOLO] },
    { stage: 'Phenotype', label: 'Leukoencephalopathy with neuropathy', detail: 'Neurogenic bladder, spastic paraparesis, axonal polyneuropathy and cognitive decline.', ev: 'established', src: [MOCHEL, KOCH] },
  ],
  relations: [
    { from: ['gene', 'GBE1'], to: ['protein', 'Glycogen branching enzyme'], label: 'encodes', ev: 'established', why: 'Gene-protein identity.', src: ['db:uniprot:GBE1'] },
    { from: ['protein', 'Glycogen branching enzyme'], to: ['metabolite', 'Polyglucosan'], label: 'deficiency produces', ev: 'established', why: 'Reduced branching yields poorly branched glycogen in every confirmed case.', src: [MOCHEL, WIERZBA] },
    { from: ['metabolite', 'Polyglucosan'], to: ['cell', 'Neurons / axons'], label: 'accumulates in', ev: 'established', why: 'Intra-axonal polyglucosan bodies on nerve biopsy and autopsy.', src: [NADDAF, WIERZBA] },
    { from: ['metabolite', 'Polyglucosan'], to: ['cell', 'Astrocytes'], label: 'accumulates in', ev: 'strong', why: 'Neuropathology case material.', src: [WIERZBA] },
    { from: ['metabolite', 'Polyglucosan'], to: ['pathway', 'Proteostasis / autophagy'], label: 'dysregulates', ev: 'emerging', why: 'Single proteomic study of patient tissue.', src: [ABRAHAM] },
    { from: ['cell', 'Neurons / axons'], to: ['phenotype', 'Axonal polyneuropathy'], label: 'injury causes', ev: 'strong', why: 'Neurophysiology and biopsy correlation.', src: [MOCHEL, NADDAF] },
    { from: ['cell', 'Neurons / axons'], to: ['phenotype', 'Neurogenic bladder & spastic paraparesis'], label: 'injury causes', ev: 'strong', why: 'Clinical-pathological correlation with spinal cord tract involvement.', src: [MOCHEL] },
    { from: ['protein', 'Glycogen branching enzyme'], to: ['biomarker', 'Leukocyte GBE activity'], label: 'measured as', ev: 'established', why: 'Standard diagnostic assay.', src: [KOCH] },
    { from: ['therapy', '144DG11 (autophagy enhancer)'], to: ['metabolite', 'Polyglucosan'], label: 'clears (mouse)', ev: 'emerging', why: 'Preprint data in the p.Y329S knock-in mouse only.', src: [VAKNIN] },
  ],
  cells: [
    { cell: 'Neurons / axons', role: 'primary', detail: 'Polyglucosan bodies in neuronal processes and central and peripheral axons; corticospinal and spinothalamic tracts affected; ER stress/UPR activation.', ev: 'established', src: [WIERZBA, NADDAF, MOCHEL] },
    { cell: 'Astrocytes', role: 'secondary', detail: 'Inclusions in astrocytic processes; reactive gliosis post mortem.', ev: 'strong', src: [WIERZBA] },
    { cell: 'Microglia / macrophages', role: 'secondary', detail: 'Polyglucosan-containing microglia; neuroinflammatory role proposed but uncharacterised.', ev: 'emerging', src: [WIERZBA] },
    { cell: 'Schwann cells', role: 'secondary', detail: 'Less prominent than intra-axonal involvement; large myelinated axons preferentially affected.', ev: 'emerging', src: [NADDAF, SAMPAOLO] },
    { cell: 'Non-CNS tissue', role: 'secondary', detail: 'Lower-level deposits in liver, muscle and heart.', ev: 'strong', src: [WIERZBA, NADDAF] },
  ],
  regions: [
    { region: 'Periventricular & deep white matter', finding: 'Confluent supratentorial T2/FLAIR hyperintensity.', src: [MOCHEL] },
    { region: 'Brainstem & cerebellar white matter', finding: 'Infratentorial involvement, including medullary signal change.', src: [MOCHEL] },
    { region: 'Spinal cord', finding: 'Cervical and thoracic cord atrophy; highly characteristic.', src: [MOCHEL] },
    { region: 'Peripheral nerve', finding: 'Large intra-axonal polyglucosan bodies on sural nerve biopsy.', src: [NADDAF, SAMPAOLO] },
  ],
  biomarkers: [
    { name: 'GBE activity (leukocytes / fibroblasts)', category: 'Enzymatic', significance: 'Primary biochemical marker; typically 5–30% residual in APBD vs <5% in infantile GSD IV.', sample: 'Peripheral blood leukocytes or cultured fibroblasts', assay: 'Branching enzyme activity assay', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Overlap between carriers and affected individuals reported; needs molecular confirmation.', ev: 'established', src: [KOCH, MOCHEL] },
    { name: 'GBE activity (muscle / liver)', category: 'Enzymatic', significance: 'Used when the leukocyte assay is inconclusive; muscle can also show polyglucosan bodies.', sample: 'Muscle or liver biopsy', assay: 'Enzyme assay with histochemistry', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'Invasive.', ev: 'established', src: [KOCH] },
    { name: 'Polyglucosan bodies on nerve biopsy', category: 'Biochemical', significance: 'Classical diagnostic criterion; confirmatory in ambiguous cases.', sample: 'Sural nerve biopsy', assay: 'PAS-positive, diastase-resistant, alcian-blue-positive histochemistry', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'Invasive; reserved for inconclusive molecular/enzymatic work-up.', ev: 'established', src: [NADDAF, SAMPAOLO] },
    { name: 'Polyglucosan bodies on skin biopsy', category: 'Biochemical', significance: 'Less invasive tissue sampling option.', sample: 'Skin biopsy (eccrine glands, nerve twigs)', assay: 'Histology', purpose: ['Diagnosis'], status: 'Experimental', limitations: 'Sensitivity and specificity for APBD not characterised.', ev: 'emerging', src: [KOCH] },
    { name: 'White matter + spinal cord atrophy (MRI)', category: 'Imaging', significance: 'Characteristic pattern that should prompt GBE1 testing in late-onset disease.', sample: 'In vivo brain and spinal cord', assay: 'MRI (T2/FLAIR, DWI)', purpose: ['Diagnosis', 'Monitoring'], status: 'Established clinical', limitations: 'Supportive but not pathognomonic; may mimic MS or glioma.', ev: 'established', src: [MOCHEL, FRANCO] },
    { name: 'Proton MRS abnormalities', category: 'Imaging', significance: 'Reduced NAA and possible lactate peak in a subset of patients.', sample: 'In vivo brain', assay: 'Proton MR spectroscopy', purpose: ['Diagnosis'], status: 'Experimental', limitations: 'Reported in few patients; not specific.', ev: 'emerging', src: [MASSA] },
    { name: 'Biallelic GBE1 variants', category: 'Genetic', significance: 'Definitive diagnostic marker.', sample: 'Blood (DNA)', assay: 'GBE1 sequencing + del/dup; genome sequencing for deep intronic alleles', purpose: ['Diagnosis', 'Carrier testing'], status: 'Established clinical', limitations: 'Exon sequencing misses the IVS15 exon-trap allele.', ev: 'established', src: [KOCH, AKMAN12] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Adult (>40 years) with neurogenic bladder, spastic gait and/or distal polyneuropathy, especially with Ashkenazi ancestry or gene-negative atypical MS / HSP.', src: [KOCH, MOCHEL] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain and spinal cord MRI', detail: 'Confluent white matter signal change with spinal cord atrophy and medullary involvement.', src: [MOCHEL] },
    { phase: 'Investigation', category: 'Enzymatic', method: 'GBE activity in leukocytes or fibroblasts', detail: 'Reduced activity supports diagnosis; borderline results still warrant molecular testing.', src: [KOCH] },
    { phase: 'Investigation', category: 'Neurophysiology', method: 'Nerve conduction / EMG and urodynamics', detail: 'Axonal sensorimotor neuropathy (reduced SNAP/CMAP); neurogenic bladder.', src: [KOCH] },
    { phase: 'Confirmation', category: 'Genetic', method: 'GBE1 sequencing + deletion/duplication', detail: 'Biallelic pathogenic variants; if only one found, genome sequencing to detect the IVS15 exon-trap allele.', src: [KOCH, AKMAN12, 'db:clinvar:GBE1'] },
    { phase: 'Confirmation', category: 'Histopathology', method: 'Sural nerve biopsy', detail: 'Intra-axonal polyglucosan bodies when molecular and enzymatic results are inconclusive.', src: [NADDAF, SAMPAOLO] },
  ],
  differential: [
    'Hereditary spastic paraplegia (no leukoencephalopathy or bladder-neuropathy triad)',
    'Multiple sclerosis (relapsing course, CSF oligoclonal bands)',
    'CADASIL / cerebral small vessel disease',
    'Charcot-Marie-Tooth neuropathies',
    'Other glycogen storage diseases (GSD III, GSD V)',
    'Cerebrotendinous xanthomatosis (CYP27A1)',
    'Low-grade glioma (focal APBD signal change)',
  ],
  phenotypes: {
    applicable: true,
    note: 'The literature distinguishes classic (largely Ashkenazi, p.Tyr329Ser) APBD from atypical presentations in non-Ashkenazi compound heterozygotes.',
    forms: [
      { name: 'Classic APBD', onset: '5th–6th decade', severity: 'Progressive disability', progression: 'Slowly progressive', genetics: 'p.Tyr329Ser homozygous, or with the IVS15 deep intronic allele', markers: 'GBE activity 5–20%; confluent WM signal + cord atrophy', src: [MOCHEL, AKMAN12] },
      { name: 'Atypical APBD', onset: '3rd–4th decade possible', severity: 'Variable; severe dysautonomia or diaphragmatic failure reported', progression: 'Relapsing MS-like course in some', genetics: 'Compound heterozygous non-Ashkenazi variants', markers: 'Variable GBE activity; MRI may mimic MS or glioma', src: [PARADAS, CARVALHO, DUGUE, FRANCO] },
    ],
  },
  management: [
    { category: 'Symptomatic', text: 'Neurogenic bladder: urodynamic-guided care, clean intermittent self-catheterisation, anticholinergics or beta-3 agonists; prevent urinary tract infections.', src: [KOCH] },
    { category: 'Symptomatic', text: 'Spasticity: oral or intrathecal baclofen; neuropathic pain: gabapentin, pregabalin or duloxetine.', src: [KOCH] },
    { category: 'Supportive', text: 'Physiotherapy, gait aids, orthotics, fall prevention and occupational therapy.', src: [KOCH, 'nord:apbd'] },
    { category: 'Symptomatic', text: 'Orthostatic hypotension (fludrocortisone, midodrine, compression) and constipation management.', src: [KOCH] },
    { category: 'Supportive', text: 'Neuropsychological assessment, cognitive rehabilitation and treatment of depression or anxiety.', src: [ZEB, KOCH] },
    { category: 'Monitoring', text: 'Respiratory surveillance; routine cardiac and liver monitoring for possible subclinical involvement.', src: [KOCH] },
    { category: 'Supportive', text: 'Genetic counselling (25% recurrence risk); cascade carrier testing in Ashkenazi relatives.', src: [KOCH, GR] },
  ],
  therapies: [
    { id: 'apbd-144dg11', name: '144DG11 (autophagy enhancer)', modality: 'Small molecule', target: 'LAMP1-mediated autolysosomal degradation', mechanism: 'Enhances autolysosomal glycogen degradation, lowering polyglucosan body burden.', delivery: 'Systemic (mouse)', stage: 'Animal studies', evidenceBase: 'Animal', status: 'Preclinical; no human studies', ev: 'emerging', why: 'Reduced polyglucosan and improved function in p.Y329S knock-in mice (preprint).', src: [VAKNIN, AKMAN15] },
    { id: 'apbd-proteostasis', name: 'Proteostasis pathway modulators', modality: 'Other', target: 'mTOR, ubiquitin-proteasome, ER stress (PERK), autophagy', mechanism: 'Correct proteostatic dysregulation identified by proteomics.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Human', status: 'Target identification only', ev: 'proposed', why: 'Derived from a single proteomic study; no candidate compounds described.', src: [ABRAHAM] },
    { id: 'apbd-aav', name: 'AAV-GBE1 gene replacement', modality: 'Gene therapy', target: 'GBE1', mechanism: 'Deliver GBE1 cDNA with a CNS-tropic AAV.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Animal', status: 'Conceptual; not reported in literature', ev: 'proposed', why: 'Mouse model provides a testing framework; no program or IND identified.', src: [AKMAN15] },
    { id: 'apbd-gys', name: 'GYS1/GYS2 inhibition (substrate reduction)', modality: 'Substrate reduction', target: 'Glycogen synthase', mechanism: 'Reduce glycogen synthesis upstream of the branching defect.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Animal', status: 'Conceptual; explored in Lafora disease, not APBD', ev: 'proposed', why: 'Theoretical rationale only for APBD.', src: ['q:apbd:gys'] },
  ],
  trials: [],
  milestones: [
    { year: 2008, label: 'Brain neuropathology and ultrastructure of polyglucosan bodies described', stage: 'Discovery', src: [WIERZBA] },
    { year: 2012, label: 'Natural history and key MRI findings defined', stage: 'Discovery', src: [MOCHEL] },
    { year: 2012, label: 'GBE1 deep intronic exon-trap allele reported', stage: 'Discovery', src: [AKMAN12] },
    { year: 2015, label: 'p.Y329S knock-in mouse model', stage: 'Animal studies', src: [AKMAN15] },
    { year: 2021, label: '144DG11 reduces polyglucosan in APBD mice', stage: 'Animal studies', src: [VAKNIN] },
    { year: 2023, label: 'Proteomics nominates proteostasis targets', stage: 'Discovery', src: [ABRAHAM] },
  ],
  gaps: [
    { text: 'No validated natural history or outcome measures for trial readiness; no prospective registry with a confirmed identifier.', ev: 'unknown', src: [KOCH, 'org:apbd:apbdrf'] },
    { text: 'No registered interventional APBD trial identified; all therapeutic data are preclinical.', ev: 'unknown', src: ['reg:apbd:ctgov', VAKNIN] },
    { text: 'No validated fluid biomarker; NfL has not been formally evaluated in APBD cohorts.', ev: 'unknown', src: [KOCH, 'q:apbd:nfl'] },
    { text: 'Prevalence outside the Ashkenazi population is uncharacterised.', ev: 'unknown', src: [MOCHEL, CHEN] },
    { text: 'Genotype does not reliably predict severity within the APBD range; modifiers are suspected.', ev: 'emerging', src: [SOUZA, MOCHEL] },
  ],
}
