import type { Disease, Gene, Source, SourceKind } from '../types'
import { geneDb, genereviews, omim, orpha } from '../cite'

// The AARS2 dossier provides DOIs (not PMIDs) as primary identifiers, so
// literature sources here link to doi.org.
const doi = (id: string, d: string, authors: string, year: number, title: string, venue: string, kind: SourceKind = 'primary'): Source => ({
  id, authors, year, title, venue, kind, url: `https://doi.org/${d}`,
})

const OMIM = 'omim:615889'
const OMIMG = 'omim:612035'
const ORPHA = 'orpha:363992'
const GR = 'gr:aars2'
const DAL = 'lit:aars2:dallabona2014'
const EURO = 'lit:aars2:euro2015'
const LYN = 'lit:aars2:lynch2016'
const FINE = 'lit:aars2:fine2019'
const LAK = 'lit:aars2:lakshmanan2017'
const HAM = 'lit:aars2:hamatani2016'
const DONG = 'lit:aars2:dong2018'
const WANGY = 'lit:aars2:wang2018'
const SONG = 'lit:aars2:song2019'
const SRI = 'lit:aars2:srivastava2019'
const WANGJ = 'lit:aars2:wang2019'
const KUO = 'lit:aars2:kuo2020'
const AMA = 'lit:aars2:amanat2023'
const FAN = 'lit:aars2:fan2022'
const KAZ = 'lit:aars2:kazakova2023'
const PER = 'lit:aars2:peragallo2018'
const SUN = 'lit:aars2:sun2017'
const DUZ = 'lit:aars2:duzkale2024'
const ROS = 'lit:aars2:rosales'

export const aars2Sources: Source[] = [
  omim('615889', 'AARS2-related leukodystrophy / leukoencephalopathy with ovarian failure (LKENP)'),
  omim('612035', 'AARS2 (alanyl-tRNA synthetase 2, mitochondrial)'),
  orpha('363992', 'Ovarioleukodystrophy'),
  genereviews('aars2', 'NBK1499', 'Mitochondrial Disorders Overview'),
  doi(DAL, '10.1212/WNL.0000000000000497', 'Dallabona C, Diodato D, Kevelam SH, et al.', 2014, 'Novel (ovario) leukodystrophy related to AARS2 mutations', 'Neurology'),
  doi(EURO, '10.3389/FGENE.2015.00021', 'Euro L, Konovalova S, Asin-Cayuela J, et al.', 2015, 'Structural modeling of tissue-specific mitochondrial alanyl-tRNA synthetase (AARS2) defects predicts differential effects on aminoacylation', 'Front Genet'),
  doi(LYN, '10.1001/JAMANEUROL.2016.2229', 'Lynch DS, Zhang WJ, Lakshmanan R, et al.', 2016, 'Analysis of mutations in AARS2 in a series of CSF1R-negative patients with adult-onset leukoencephalopathy with axonal spheroids and pigmented glia', 'JAMA Neurol'),
  doi(FINE, '10.1186/S11689-019-9292-Y', 'Fine AS, Nemeth CL, Kaufman ML, Fatemi A', 2019, 'Mitochondrial aminoacyl-tRNA synthetase disorders: an emerging group of developmental disorders of myelination', 'J Neurodev Disord', 'review'),
  doi(LAK, '10.1212/NXG.0000000000000135', 'Lakshmanan R, Adams M, Lynch DS, et al.', 2017, 'Redefining the phenotype of ALSP and AARS2 mutation-related leukodystrophy', 'Neurol Genet'),
  doi(HAM, '10.1038/JHG.2016.64', 'Hamatani M, Jingami N, Tsurusaki Y, et al.', 2016, 'The first Japanese case of leukodystrophy with ovarian failure arising from novel compound heterozygous AARS2 mutations', 'J Hum Genet'),
  doi(DONG, '10.1038/S10038-018-0446-7', 'Dong Q, Long L, Chang YY, et al.', 2018, 'An adolescence-onset male leukoencephalopathy with remarkable cerebellar atrophy and novel compound heterozygous AARS2 gene mutations', 'J Hum Genet'),
  doi(WANGY, '10.1093/jnen/nly087', 'Wang Y, Yu T, Zhang T, et al.', 2018, 'AARS2 compound heterozygous variants in a case of adult-onset leukoencephalopathy with axonal spheroids and pigmented glia', 'J Neuropathol Exp Neurol'),
  doi(SONG, '10.1038/S10038-019-0648-7', 'Song C, Peng L, Wang S, Liu Y', 2019, 'A novel compound heterozygous mutation in AARS2 gene (c.965G>A, p.R322H; c.334G>C, p.G112R) in a Chinese patient with leukodystrophy', 'J Hum Genet'),
  doi(SRI, '10.1002/AJMG.A.61188', 'Srivastava S, Butala A, Mahida S, et al.', 2019, 'Expansion of the clinical spectrum associated with AARS2-related disorders', 'Am J Med Genet A'),
  doi(WANGJ, '10.1002/BRB3.1313', 'Wang JY, Chen SF, Zhang HQ, et al.', 2019, 'A homozygous mutation of alanyl-transfer RNA synthetase 2 in a patient of adult-onset leukodystrophy', 'Brain Behav'),
  doi(KUO, '10.1007/S12311-019-01080-Y', 'Kuo ME, Antonellis A, Shakkottai VG', 2020, 'Alanyl-tRNA synthetase 2 (AARS2)-related ataxia without leukoencephalopathy', 'Cerebellum'),
  doi(AMA, '10.1212/wnl.0000000000203410', 'Amanat M, Cohen JS, Fatemi A, Fine AS', 2023, 'AARS2-related leukodystrophy without ovarian failure mimicking multiple sclerosis in a female: a case report with a novel pathogenic variant', 'Neurology (abstract)'),
  doi(FAN, '10.1186/s12883-022-02720-3', 'Fan Y, Han J, Chen T', 2022, 'Novel mitochondrial alanyl-tRNA synthetase 2 (AARS2) heterozygous mutations in a Chinese patient with adult-onset leukoencephalopathy', 'BMC Neurol'),
  doi(KAZ, '10.3389/fneur.2023.878446', 'Kazakova E, Téllez-Martínez JA, Flores-Lagunes L, et al.', 2023, 'Uterus infantilis: a novel phenotype associated with AARS2 new genetic variants', 'Front Neurol'),
  doi(PER, '10.1080/13816810.2017.1350723', 'Peragallo J, Keller S, van der Knaap MS, et al.', 2018, 'Retinopathy and optic atrophy: expanding the phenotypic spectrum of pathogenic variants in the AARS2 gene', 'Ophthalmic Genet'),
  doi(SUN, '10.4103/0366-6999.220300', 'Sun J, Quan C, Luo S, Zhou L, Zhao C', 2017, 'Leukodystrophy without ovarian failure caused by compound heterozygous alanyl-tRNA synthetase 2 mutations', 'Chin Med J'),
  doi(DUZ, '10.54029/2024zvd', 'Düzkale N, Lafcı O, Ayaz R, et al.', 2024, 'Report of a progressive leukoencephalopathy with ovarian failure case with compound heterozygous genotype and a novel variant: AARS2:c.2358_2364+7dup', 'Case report'),
  {
    id: ROS,
    authors: 'Rosales, Krupp',
    title: 'AARS2-related leukodystrophy (meeting abstract, Neurology 86(16 suppl) P6.145)',
    venue: 'Neurology (supplement)',
    kind: 'primary',
    url: 'https://doi.org/10.1212/wnl.86.16_supplement.p6.145',
  },
]

export const aars2Genes: Gene[] = [
  {
    symbol: 'AARS2',
    name: 'Alanyl-tRNA synthetase 2, mitochondrial',
    protein: 'Mitochondrial alanyl-tRNA synthetase (mtAlaRS; EC 6.1.1.7); 985-aa precursor with aminoacylation, tRNA-binding and editing domains',
    location: '6p21.1',
    function:
      'Aminoacylates mitochondrial tRNA-Ala with alanine and proofreads misacylated tRNA (editing domain); essential for synthesis of the 13 mtDNA-encoded OXPHOS subunits.',
    pathway: 'Mitochondrial translation / oxidative phosphorylation',
    uniprot: 'Q5JTZ9',
    ncbiGene: '57505',
    variantTypes: ['Missense (often hypomorphic)', 'Frameshift', 'Nonsense', 'Splice-site', 'Small duplications', 'Complex rearrangements'],
    diseases: ['aars2'],
    ev: 'established',
    src: [EURO, DAL, OMIMG, ...geneDb('AARS2')],
  },
]

const v = (
  id: string, hgvsc: string, hgvsp: string | undefined, type: string, consequence: string,
  phenotype: string, src: string[], why: string,
) => ({
  id: `aars2-${id}`, disease: 'aars2', gene: 'AARS2', transcript: 'Not stated in source', hgvsc, hgvsp, build: 'Not stated',
  type, consequence, clinvar: 'Literature-reported; ClinVar status not stated', popFreq: 'Not stated',
  phenotype, functional: 'Not characterised in source', ev: 'emerging' as const, why, src: [...src, 'db:clinvar:AARS2'],
})

export const aars2: Disease = {
  id: 'aars2',
  name: 'AARS2-Related Leukodystrophy (Ovarioleukodystrophy)',
  short: 'AARS2-L',
  lastUpdated: '2026-10-08',
  color: '#5f8f2e',
  synonyms: [
    'AARS2 ovarioleukodystrophy',
    'Ovarioleukodystrophy',
    'Leukoencephalopathy with ovarian failure (LKENP)',
    'Leukoencephalopathy with premature ovarian failure',
    'AARS2-related mitochondrial leukoencephalopathy',
  ],
  classification: 'Mitochondrial aminoacyl-tRNA synthetase disorder; adult-onset leukoencephalopathy; mitochondrial disease',
  inheritance: 'Autosomal recessive',
  genes: ['AARS2'],
  tagline: 'Mitochondrial AlaRS deficiency → OXPHOS insufficiency → adult-onset frontoparietal leukoencephalopathy, often with premature ovarian failure.',
  identifiers: [
    { label: 'OMIM', value: '615889', url: 'https://www.omim.org/entry/615889' },
    { label: 'OMIM (gene)', value: '612035', url: 'https://www.omim.org/entry/612035' },
    { label: 'Orphanet', value: 'ORPHA:363992', url: 'https://www.orpha.net/en/disease/detail/363992' },
    { label: 'GeneReviews', value: 'NBK1499 (mitochondrial disorders overview)', url: 'https://www.ncbi.nlm.nih.gov/books/NBK1499/' },
    { label: 'MONDO', value: 'MONDO:0014461', url: 'https://monarchinitiative.org/MONDO:0014461' },
    { label: 'ICD-11', value: '5C50.3' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Biallelic pathogenic AARS2 variants impair aminoacylation of mitochondrial tRNA-Ala.', ev: 'established', src: [DAL, EURO, OMIM] },
    { label: 'Core clinical picture', text: 'Progressive adult-onset leukoencephalopathy with cognitive and frontal-behavioural decline, pyramidal signs and, in females, premature ovarian insufficiency (POI).', ev: 'established', src: [DAL, LYN] },
    { label: 'Pathology', text: 'Axonal spheroids and pigmented macrophages, overlapping with CSF1R-related ALSP.', ev: 'strong', why: 'Biopsy/autopsy reports from a limited number of cases.', src: [LYN, WANGY] },
    { label: 'Allelic disorder', text: 'Editing-domain AARS2 variants cause a distinct fatal infantile cardiomyopathy.', ev: 'strong', why: 'Structural modelling supported by phenotype correlation.', src: [EURO] },
  ],
  clinical: [
    { label: 'Age of onset', text: 'Predominantly second to fourth decade; adolescent onset reported.', ev: 'strong', src: [DAL, DONG] },
    { label: 'Neurological features', text: 'Insidious cognitive decline and executive dysfunction, behavioural change, then spasticity, ataxia, tremor and pyramidal signs.', ev: 'established', src: [DAL, LYN] },
    { label: 'Ovarian failure', text: 'POI frequently precedes or co-presents with neurological symptoms, but is absent in some affected females.', ev: 'strong', src: [DAL, AMA, SUN] },
    { label: 'Expanded phenotype', text: 'Cerebellar atrophy-predominant disease, ataxia without leukoencephalopathy, retinopathy/optic atrophy, spinal cord lesions and uterus infantilis described.', ev: 'emerging', src: [DONG, KUO, PER, SONG, KAZ] },
    { label: 'Progression', text: 'Relentlessly progressive to loss of independence over years to decades; survival data limited. MS misdiagnosis is documented.', ev: 'strong', src: [DAL, AMA, ROS] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Ultra-rare; roughly 60–100 individuals reported worldwide. Population prevalence unknown.', ev: 'emerging', why: 'Aggregated case series; no registry.', src: [DAL, LYN, LAK, ORPHA] },
    { label: 'Distribution', text: 'Europe, East Asia, North America and Mexico; no founder population.', ev: 'strong', src: [DAL, LYN, HAM, SONG, KAZ] },
    { label: 'Sex distribution', text: 'Both sexes affected; females recognised earlier through POI. Male cases increasingly reported.', ev: 'strong', src: [LYN, DONG] },
    { label: 'Carrier frequency', text: 'No population-level estimates available.', ev: 'unknown', src: [FINE] },
  ],
  variants: [
    v('g310v', 'c.929G>T', 'p.(Gly310Val)', 'Missense (homozygous)', 'Amino-acid substitution', 'Leukodystrophy without ovarian failure, MS mimic', [AMA], 'Single case report (abstract).'),
    v('g570fs', 'c.1709delG', 'p.(Gly570AlafsTer21)', 'Frameshift', 'Premature stop; loss of function', 'LKENP with ovarian failure (compound heterozygous)', [DUZ], 'Single case report.'),
    v('2358dup', 'c.2358_2364+7dup', undefined, 'Duplication (exon-intron boundary)', 'Predicted splice / frameshift disruption', 'LKENP (compound heterozygous)', [DUZ], 'Novel variant, single case.'),
    v('1145', 'c.1145C>A', undefined, 'Single-nucleotide substitution', 'Protein change not stated', 'Leukodystrophy + POI (compound heterozygous, first Japanese case)', [HAM], 'Single case report.'),
    v('2255+1', 'c.2255+1G>A', undefined, 'Canonical splice donor', 'Splice disruption', 'Leukodystrophy + POI (compound heterozygous)', [HAM], 'Single case report.'),
    v('718', 'c.718C>T', undefined, 'Single-nucleotide substitution', 'Protein change not stated', 'Adult-onset leukoencephalopathy (compound heterozygous)', [FAN], 'Single case report.'),
    v('1040+1', 'c.1040+1G>A', undefined, 'Canonical splice donor', 'Splice disruption', 'Adult-onset leukoencephalopathy (compound heterozygous)', [FAN], 'Single case report.'),
    v('m151t', 'c.452T>C', 'p.(Met151Thr)', 'Missense (homozygous)', 'Amino-acid substitution', 'Adult-onset leukodystrophy', [WANGJ], 'Single case report.'),
    v('r322h', 'c.965G>A', 'p.(Arg322His)', 'Missense', 'Amino-acid substitution', 'Leukodystrophy with brain and spinal cord lesions (compound heterozygous)', [SONG], 'Single case report.'),
    v('g112r', 'c.334G>C', 'p.(Gly112Arg)', 'Missense', 'Amino-acid substitution', 'Leukodystrophy with brain and spinal cord lesions (compound heterozygous)', [SONG], 'Single case report.'),
    v('r756fs', 'c.2265dupA', 'p.(Arg756fs)', 'Frameshift', 'Premature stop; loss of function', 'Adolescent-onset male with cerebellar atrophy (compound heterozygous)', [DONG], 'Single case report.'),
    v('p217l', 'c.650C>T', 'p.(Pro217Leu)', 'Missense', 'Amino-acid substitution', 'Adolescent-onset male with cerebellar atrophy (compound heterozygous)', [DONG], 'Single case report.'),
    v('1691', 'c.1691T>C', undefined, 'Single-nucleotide substitution', 'Protein change not stated', 'ALSP phenocopy with spheroids (compound heterozygous)', [WANGY], 'Single case with neuropathology.'),
    v('179', 'c.179C>A', undefined, 'Single-nucleotide substitution', 'Protein change not stated', 'ALSP phenocopy with spheroids (compound heterozygous)', [WANGY], 'Single case with neuropathology.'),
  ],
  genotypePhenotype: [
    { aspect: 'Clinical phenotype', finding: 'Editing-domain variants (e.g. p.R592W) associate with fatal infantile cardiomyopathy; partially active catalytic-domain alleles with adult-onset leukodystrophy.', ev: 'strong', why: 'Structural modelling supported by clinical correlation.', src: [EURO] },
    { aspect: 'Severity', finding: 'Leukodystrophy typically involves a loss-of-function allele in trans with a hypomorphic missense; biallelic null may be lethal or severe early.', ev: 'strong', src: [LYN] },
    { aspect: 'Clinical phenotype', finding: 'POI is frequent but not invariant in affected females.', ev: 'strong', src: [DAL, AMA, SUN, LAK] },
    { aspect: 'Age of onset', finding: 'Adolescent onset with cerebellar atrophy and ataxia without leukoencephalopathy extend the spectrum.', ev: 'emerging', src: [DONG, KUO] },
    { aspect: 'Progression', finding: 'Siblings with identical genotypes differ in onset and white matter involvement, implying modifiers.', ev: 'emerging', src: [SRI] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'AARS2 (6p21.1)', detail: 'Biallelic variants, usually loss-of-function plus hypomorphic missense.', ev: 'established', src: [DAL, LYN] },
    { stage: 'Protein', label: 'Mitochondrial AlaRS', detail: 'Reduced aminoacylation activity; editing-domain defects impair fidelity.', ev: 'strong', src: [EURO, 'db:uniprot:AARS2'] },
    { stage: 'Molecular function', label: 'mt-tRNA-Ala charging fails', detail: 'Defective mitochondrial translation of the 13 mtDNA-encoded subunits.', ev: 'established', src: [EURO, FINE] },
    { stage: 'Pathway', label: 'Respiratory chain dysfunction', detail: 'Impaired complexes I, III, IV and V; COX deficiency documented in muscle.', ev: 'strong', src: [KAZ, FINE] },
    { stage: 'Cellular consequence', label: 'Energy deficit in white matter and ovary', detail: 'Oligodendrocytes and ovarian follicles proposed as energy-vulnerable; axonal spheroids and macrophage response follow.', ev: 'proposed', src: [FINE, DAL, LYN] },
    { stage: 'Phenotype', label: 'Ovarioleukodystrophy', detail: 'Adult-onset frontoparietal leukoencephalopathy with cognitive decline and POI.', ev: 'established', src: [DAL] },
  ],
  relations: [
    { from: ['gene', 'AARS2'], to: ['protein', 'Mitochondrial AlaRS'], label: 'encodes', ev: 'established', why: 'Gene-protein identity.', src: [EURO, 'db:uniprot:AARS2'] },
    { from: ['protein', 'Mitochondrial AlaRS'], to: ['pathway', 'Mitochondrial translation'], label: 'required for', ev: 'established', why: 'Canonical mt-aaRS function.', src: [EURO, FINE] },
    { from: ['pathway', 'Mitochondrial translation'], to: ['pathway', 'OXPHOS'], label: 'supplies subunits to', ev: 'strong', why: 'COX deficiency in muscle biopsy; mechanistic inference.', src: [KAZ, FINE] },
    { from: ['pathway', 'OXPHOS'], to: ['cell', 'Oligodendrocytes'], label: 'deficit injures (proposed)', ev: 'proposed', why: 'Extrapolated from mitochondrial disease biology; not tested in AARS2 models.', src: [FINE] },
    { from: ['pathway', 'OXPHOS'], to: ['phenotype', 'Premature ovarian insufficiency'], label: 'deficit causes (proposed)', ev: 'proposed', why: 'Follicle energy demand hypothesis.', src: [DAL] },
    { from: ['cell', 'Microglia / macrophages'], to: ['phenotype', 'Axonal spheroids'], label: 'accompany', ev: 'emerging', why: 'Convergent ALSP-like pathology; mechanism unexplained.', src: [LYN, WANGY] },
    { from: ['disease', 'AARS2-L'], to: ['disease', 'ALSP (CSF1R)'], label: 'phenocopies', ev: 'strong', why: 'AARS2 variants found in CSF1R-negative ALSP series; histology can be indistinguishable.', src: [LYN, LAK] },
    { from: ['phenotype', 'Premature ovarian insufficiency'], to: ['biomarker', 'FSH / LH / AMH / estradiol'], label: 'measured as', ev: 'strong', why: 'Standard hormonal confirmation of POI.', src: [DAL] },
  ],
  cells: [
    { cell: 'Oligodendrocytes', role: 'primary', detail: 'Proposed primary target of mitochondrial translation failure; severe demyelination.', ev: 'proposed', src: [FINE, LYN] },
    { cell: 'Neurons / axons', role: 'secondary', detail: 'Axonal spheroids and later axonal loss; retinopathy and optic atrophy reported.', ev: 'strong', src: [LYN, WANGY, PER] },
    { cell: 'Microglia / macrophages', role: 'secondary', detail: 'Pigmented (lipofuscin/ceroid-laden) macrophages and reactive microgliosis.', ev: 'strong', src: [LYN, WANGY] },
    { cell: 'Astrocytes', role: 'secondary', detail: 'Astrogliosis.', ev: 'strong', src: [LYN] },
    { cell: 'Non-CNS tissue', role: 'primary', detail: 'Ovary (POI) and, in one case, hypoplastic uterus; allelic cardiomyopathy involves heart.', ev: 'strong', src: [DAL, KAZ, EURO] },
  ],
  regions: [
    { region: 'Frontoparietal white matter', finding: 'Confluent, asymmetric periventricular T2/FLAIR hyperintensity; rarefaction; punctate diffusion restriction ("diffusion dots").', src: [LAK, DAL] },
    { region: 'Corpus callosum', finding: 'Involvement, often with thinning.', src: [LAK] },
    { region: 'Corticospinal tracts', finding: 'Descending tract involvement.', src: [LAK] },
    { region: 'Cerebellum', finding: 'Atrophy in some, especially adolescent-onset cases.', src: [DONG] },
    { region: 'Spinal cord', finding: 'Lesions reported in a minority.', src: [SONG] },
    { region: 'Retina / optic nerve', finding: 'Retinopathy and optic atrophy in some cases.', src: [PER] },
  ],
  biomarkers: [
    { name: 'Characteristic MRI pattern', category: 'Imaging', significance: 'Asymmetric frontoparietal WM disease, diffusion dots, corpus callosum change, rarefaction.', sample: 'In vivo brain', assay: 'MRI with FLAIR, DWI and gadolinium', purpose: ['Diagnosis', 'Monitoring'], status: 'Established clinical', limitations: 'Overlaps with ALSP; can mimic MS.', ev: 'strong', src: [LAK, DAL] },
    { name: 'FSH / LH / AMH / estradiol', category: 'Endocrine', significance: 'Confirms POI in females; may precede neurological onset.', sample: 'Serum', assay: 'Hormone immunoassays', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Females only; POI absent in a subset.', ev: 'strong', src: [DAL] },
    { name: 'Respiratory chain enzyme activity', category: 'Enzymatic', significance: 'COX or other complex deficiency supports mitochondrial aetiology.', sample: 'Muscle biopsy', assay: 'OXPHOS enzyme assays', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'Sensitivity and specificity not established.', ev: 'emerging', src: [KAZ] },
    { name: 'Blood / CSF lactate', category: 'Biochemical', significance: 'General mitochondrial marker.', sample: 'Blood, CSF', assay: 'Lactate assay', purpose: ['Supplementary'], status: 'Experimental', limitations: 'Normal or non-diagnostic in some AARS2 reports.', ev: 'unknown', src: [ROS] },
    { name: 'Biallelic AARS2 variants', category: 'Genetic', significance: 'Definitive diagnosis.', sample: 'DNA (blood)', assay: 'Panel / WES / WGS; MLPA if one allele found', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Many private and novel variants.', ev: 'established', src: [DAL, LYN] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Adult with progressive leukoencephalopathy and frontal-behavioural decline; female with POI (under 40) plus WM change; CSF1R-negative ALSP phenocopy; atypical MS not responding to therapy.', src: [DAL, LYN, AMA, ROS] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain MRI (FLAIR, DWI, gadolinium)', detail: 'Asymmetric frontoparietal WM disease, diffusion dots, corpus callosum involvement.', src: [LAK] },
    { phase: 'Investigation', category: 'Endocrine', method: 'Hormonal evaluation (females)', detail: 'FSH, LH, AMH and estradiol for POI.', src: [DAL] },
    { phase: 'Confirmation', category: 'Genetic', method: 'AARS2 sequencing', detail: 'Adult-onset leukoencephalopathy panel, WES or WGS; deletion analysis (MLPA) if only one allele found. Test AARS2 in CSF1R-negative ALSP phenocopies.', src: [LYN, DAL] },
    { phase: 'Confirmation', category: 'Enzymatic', method: 'Muscle respiratory chain analysis', detail: 'Supports diagnosis in ambiguous cases.', src: [KAZ] },
  ],
  differential: [
    'CSF1R-related leukoencephalopathy (ALSP): histological overlap; no ovarian failure',
    'Multiple sclerosis (relapsing course, oligoclonal bands)',
    'Other mt-aaRS leukodystrophies (DARS2/LBSL, EARS2/LTBL, RARS2)',
    'Adult-onset autosomal dominant leukodystrophy (LMNB1)',
    'CADASIL',
    'Progressive multifocal leukoencephalopathy (immunosuppressed)',
  ],
  phenotypes: {
    applicable: true,
    note: 'Classic adult-onset ovarioleukodystrophy is distinguished from expanding atypical presentations; the editing-domain cardiomyopathy is an allelic disorder rather than a leukodystrophy form.',
    forms: [
      { name: 'Classic adult-onset ovarioleukodystrophy', onset: '20s–40s', severity: 'Progressive cognitive and motor decline', progression: 'Relentless over years to decades', genetics: 'LoF + hypomorphic missense', markers: 'Asymmetric frontoparietal WM, diffusion dots; POI in most females', src: [DAL, LAK] },
      { name: 'Leukodystrophy without ovarian failure', onset: 'Adulthood', severity: 'Similar', progression: 'Progressive', genetics: 'Biallelic AARS2', markers: 'WM pattern; normal ovarian function; MS mimic', src: [AMA, SUN] },
      { name: 'Adolescent / cerebellar-predominant', onset: 'Adolescence', severity: 'Variable', progression: 'Progressive', genetics: 'Compound heterozygous', markers: 'Cerebellar atrophy; ataxia possibly without leukoencephalopathy', src: [DONG, KUO] },
    ],
  },
  management: [
    { category: 'Symptomatic', text: 'Anti-seizure medication if seizures; physiotherapy and occupational therapy for spasticity and motor decline.', src: [DAL, FINE] },
    { category: 'Supportive', text: 'Speech and language therapy, neuropsychological support and cognitive rehabilitation.', src: [FINE] },
    { category: 'Symptomatic', text: 'Hormone replacement therapy for POI (symptoms, bone and cardiovascular health); endocrinology co-management and fertility counselling.', src: [DAL] },
    { category: 'Supportive', text: 'Mitochondrial cofactors (CoQ10, riboflavin) used empirically without AARS2-specific evidence; use mitochondrial toxins (metformin, valproate, aminoglycosides) with caution.', src: [FINE] },
    { category: 'Monitoring', text: 'Multidisciplinary neurology follow-up with serial MRI; genetic counselling, carrier and prenatal/preimplantation testing.', src: [FINE, GR] },
  ],
  therapies: [
    { id: 'aars2-aav', name: 'AAV-AARS2 gene therapy', modality: 'Gene therapy', target: 'AARS2', mechanism: 'CNS delivery of functional AARS2.', delivery: 'CNS-directed AAV (conceptual)', stage: 'Discovery', evidenceBase: 'Human', status: 'No preclinical program published as of October 2026', ev: 'proposed', why: 'Rationale from human genetics and analogous diseases only.', src: [FINE] },
    { id: 'aars2-stabilizer', name: 'Structure-guided AlaRS stabilizers', modality: 'Small molecule', target: 'AARS2 aminoacylation domain', mechanism: 'Stabilise variant enzyme to raise residual activity.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Conceptual; structural framework only', ev: 'proposed', why: 'Based on structural modelling, no compounds tested.', src: [EURO] },
    { id: 'aars2-mito', name: 'Mitochondrial translation augmentation / OXPHOS support', modality: 'Other', target: 'Mitochondrial translation', mechanism: 'Compensate for AARS2 deficiency pharmacologically.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Human', status: 'Theoretical; not shown in AARS2 models', ev: 'proposed', why: 'No AARS2-specific experimental data.', src: [FINE] },
  ],
  trials: [],
  milestones: [
    { year: 2014, label: 'Ovarioleukodystrophy defined; AARS2 linked to leukodystrophy', stage: 'Discovery', src: [DAL] },
    { year: 2015, label: 'Structural modelling explains tissue-specific AARS2 phenotypes', stage: 'Discovery', src: [EURO] },
    { year: 2016, label: 'AARS2 found in CSF1R-negative ALSP patients', stage: 'Discovery', src: [LYN] },
    { year: 2017, label: 'Imaging phenotype redefined; diffusion dots described', stage: 'Discovery', src: [LAK] },
    { year: 2020, label: 'AARS2 ataxia without leukoencephalopathy reported', stage: 'Discovery', src: [KUO] },
  ],
  gaps: [
    { text: 'No registered interventional trials, natural-history registry or validated outcome measures as of October 2026.', ev: 'unknown', src: [FINE] },
    { text: 'Why white matter and ovary are selectively vulnerable has not been tested in AARS2-specific models.', ev: 'proposed', src: [FINE, DAL] },
    { text: 'Mechanism of ALSP-like spheroid and macrophage pathology is unexplained.', ev: 'emerging', src: [LYN, WANGY] },
    { text: 'Reliability of lactate as a biomarker is not established.', ev: 'unknown', src: [ROS] },
    { text: 'Modifiers of intrafamilial variability are unknown.', ev: 'emerging', src: [SRI] },
    { text: 'PMIDs for the cited literature were not confirmed in the source dossier; DOIs used.', ev: 'unknown', src: [DAL] },
  ],
}
