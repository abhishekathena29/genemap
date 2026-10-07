import type { Disease, Gene, Source, SourceKind } from '../types'
import { geneDb, lit, omim, orpha, pmid } from '../cite'

// Most dossier references carry a DOI but no PMID; link the DOI (or stated URL) directly.
const link = (id: string, url: string, authors: string, year: number, title: string, venue: string, kind?: SourceKind): Source => ({
  ...lit(id, authors, year, title, venue, kind),
  url,
})
const doi = (id: string, d: string, authors: string, year: number, title: string, venue: string, kind?: SourceKind): Source =>
  link(id, `https://doi.org/${d}`, authors, year, title, venue, kind)

const OMIM_LOF = 'omim:264470'
const OMIM_GOF = 'omim:618205'
const ORPHA = 'orpha:86'
const POLLTHE = 'lit:acox1:pollthe1988'
const FOURNIER = 'lit:acox1:fournier1994'
const FERD07 = 'lit:acox1:ferdinandusse2007'
const ROSEWICH = 'lit:acox1:rosewich2006'
const CARROZZO = 'lit:acox1:carrozzo2008'
const KURIAN = 'lit:acox1:kurian2004'
const FERD10 = 'lit:acox1:ferdinandusse2010'
const ELHAJJ = 'lit:acox1:elhajj2012'
const CHUNG = 'lit:acox1:chung2020'
const WANG = 'lit:acox1:wang2014'
const MORITA = 'lit:acox1:morita2021'
const NEURO22 = 'lit:acox1:neurology2022'
const THIELS = 'lit:acox1:thiels2023'
const CHEN = 'lit:acox1:chen2023'
const FILIPPI = 'lit:acox1:filippi2024'
const MOREAU = 'lit:acox1:moreau2024'
const OAXACA = 'lit:acox1:oaxacacastillo2007'
const WANDERS = 'lit:acox1:wanders2020'
const ESSADEK = 'lit:acox1:essadek2023'
const DECRAEMER = 'lit:acox1:decraemer1991'
const KEBBAJ = 'lit:acox1:kebbaj2013'

export const acox1Sources: Source[] = [
  omim('264470', 'Peroxisomal acyl-CoA oxidase deficiency (pseudo-neonatal adrenoleukodystrophy)'),
  omim('618205', 'Mitchell syndrome (ACOX1 gain-of-function)'),
  omim('609751', 'ACOX1 gene'),
  orpha('86', 'Pseudo-neonatal adrenoleukodystrophy'),
  pmid(POLLTHE, '3348239', 'Poll-The BT et al.', 1988, 'A new peroxisomal disorder with enlarged peroxisomes and a specific deficiency of acyl-CoA oxidase (pseudo-neonatal adrenoleukodystrophy)', 'Am J Hum Genet'),
  doi(FOURNIER, '10.1172/JCI117365', 'Fournier B et al.', 1994, 'Large deletion of the peroxisomal acyl-CoA oxidase gene in pseudoneonatal adrenoleukodystrophy', 'J Clin Invest'),
  doi(FERD07, '10.1002/HUMU.20535', 'Ferdinandusse S et al.', 2007, 'Clinical, biochemical, and mutational spectrum of peroxisomal acyl-coenzyme A oxidase deficiency', 'Hum Mutat'),
  doi(ROSEWICH, '10.1055/S-2006-923943', 'Rosewich H et al.', 2006, 'Pitfall in metabolic screening in a patient with fatal peroxisomal beta-oxidation defect', 'Neuropediatrics'),
  doi(CARROZZO, '10.1002/AJMG.A.32298', 'Carrozzo R et al.', 2008, 'Peroxisomal acyl-CoA-oxidase deficiency: two new cases', 'Am J Med Genet A'),
  doi(KURIAN, '10.1023/B:BOLI.0000016687.88818.6D', 'Kurian MA et al.', 2004, 'Straight-chain acyl-CoA oxidase deficiency presenting with dysmorphia, neurodevelopmental autistic-type regression and a selective pattern of leukodystrophy', 'J Inherit Metab Dis'),
  doi(FERD10, '10.1136/JNNP.2009.176255', 'Ferdinandusse S et al.', 2010, 'Adult peroxisomal acyl-coenzyme A oxidase deficiency with cerebellar and brainstem atrophy', 'J Neurol Neurosurg Psychiatry'),
  doi(ELHAJJ, '10.1210/EN.2012-1137', 'El Hajj HI et al.', 2012, 'The Inflammatory Response in Acyl-CoA Oxidase 1 Deficiency (Pseudoneonatal Adrenoleukodystrophy)', 'Endocrinology'),
  link(CHUNG, 'https://www.cell.com/neuron/fulltext/S0896-6273(20)30144-6', 'Chung H et al.', 2020, 'Loss- or gain-of-function mutations in ACOX1 cause axonal loss via different mechanisms', 'Neuron'),
  doi(WANG, '10.1007/S10545-014-9698-3', 'Wang RY et al.', 2014, 'Effects of hematopoietic stem cell transplantation on acyl-CoA oxidase deficiency: a sibling comparison study', 'J Inherit Metab Dis'),
  doi(MORITA, '10.1016/J.BRAINDEV.2020.10.011', 'Morita A et al.', 2021, 'Novel ACOX1 mutations in two siblings with peroxisomal acyl-CoA oxidase deficiency', 'Brain Dev'),
  doi(NEURO22, '10.1212/wnl.0000000000200935', 'Authors not listed in dossier', 2022, 'Child Neurology: Neurodegenerative Encephalomyelopathy Associated With ACOX1 Gain-of-Function Variation Partially Responsive to Immunotherapy', 'Neurology'),
  doi(THIELS, '10.1055/s-0043-1776013', 'Thiels C et al.', 2023, 'ACOX1 Gain-of-Function Variant in Two German Pediatric Patients, in One Case Mimicking Autoimmune Inflammatory Disease', 'Neuropediatrics'),
  doi(CHEN, '10.1186/s12920-023-01577-w', 'Chen Q et al.', 2023, 'A de novo heterozygous variant in ACOX1 gene cause Mitchell syndrome: the first case in China and literature review', 'BMC Med Genomics'),
  doi(FILIPPI, '10.1002/ajmg.a.63796', 'Filippi C et al.', 2024, 'ACOX1 gain-of-function variation in a 10-years-old patient responsive to immunomodulating therapy', 'Am J Med Genet A'),
  doi(MOREAU, '10.1016/j.ymgme.2024.108581', 'Moreau C et al.', 2024, 'Findings from the individualized management of a patient with acyl-CoA Oxidase-1 (ACOX1) deficiency: A bedside-to-bench-to-bedside strategy', 'Mol Genet Metab'),
  doi(OAXACA, '10.1016/J.BBRC.2007.06.059', 'Oaxaca-Castillo D et al.', 2007, 'Biochemical characterization of two functional human liver acyl-CoA oxidase isoforms 1a and 1b encoded by a single gene', 'Biochem Biophys Res Commun'),
  doi(WANDERS, '10.1007/978-3-030-60204-8_5', 'Wanders RJA et al.', 2020, 'Fatty Acid Oxidation in Peroxisomes: Enzymology, Metabolic Crosstalk with Other Organelles and Peroxisomal Disorders', 'Adv Exp Med Biol', 'review'),
  doi(ESSADEK, '10.3390/antiox12010168', 'Essadek S et al.', 2023, 'Two Argan Oil Phytosterols, Schottenol and Spinasterol, Attenuate Oxidative Stress and Restore LPS-Dysregulated Peroxisomal Functions in Acox1-/- and Wild-Type BV-2 Microglial Cells', 'Antioxidants'),
  doi(DECRAEMER, '10.1007/BF01650683', 'De Craemer D et al.', 1991, 'Very large peroxisomes in distinct peroxisomal disorders (rhizomelic chondrodysplasia punctata and acyl-CoA oxidase deficiency): novel data', 'Virchows Arch'),
  doi(KEBBAJ, '10.4236/HEALTH.2013.51009', 'Kebbaj RE et al.', 2013, 'Modulation of peroxisomes abundance by argan oil and lipopolysaccharides in acyl-CoA oxidase 1-deficient fibroblasts', 'Health'),
]

export const acox1Genes: Gene[] = [
  {
    symbol: 'ACOX1',
    name: 'Acyl-CoA oxidase 1, palmitoyl',
    protein: 'Acyl-CoA oxidase 1 (ACOX1; palmitoyl-CoA oxidase), FAD-dependent peroxisomal matrix enzyme; isoforms 1a and 1b',
    location: '17q25.1',
    function:
      'Catalyses the first, rate-limiting step of peroxisomal straight-chain beta-oxidation (acyl-CoA to 2-trans-enoyl-CoA), generating H2O2 that is detoxified by catalase. Exon 3 alternative splicing yields isoforms 1a and 1b with overlapping substrate specificities.',
    pathway: 'Peroxisomal straight-chain VLCFA beta-oxidation',
    transcript: 'NM_004035',
    uniprot: 'Q15067',
    ncbiGene: '51',
    variantTypes: ['Large genomic deletions', 'Splice-site', 'Frameshift', 'Missense (hypomorphic)', 'Heterozygous gain-of-function missense (p.Asn237Ser)'],
    diseases: ['acox1'],
    ev: 'established',
    src: [FERD07, CHUNG, OAXACA, 'omim:609751', ...geneDb('ACOX1')],
  },
]

export const acox1: Disease = {
  id: 'acox1',
  name: 'ACOX1 Deficiency (P-NALD) and Mitchell Syndrome',
  short: 'ACOX1',
  lastUpdated: '2026-10-08',
  color: '#7d6a2a',
  synonyms: [
    'Pseudo-neonatal adrenoleukodystrophy (P-NALD)',
    'Peroxisomal acyl-CoA oxidase 1 deficiency',
    'Straight-chain acyl-CoA oxidase deficiency',
    'Mitchell syndrome (ACOX1 gain-of-function)',
    'ACOX1 gain-of-function variant syndrome',
  ],
  classification: 'Peroxisomal beta-oxidation defect (loss of function); ROS-driven neuroinflammatory demyelinating disease (gain of function)',
  inheritance: 'Autosomal recessive or dominant',
  genes: ['ACOX1'],
  tagline: 'One gene, two diseases: ACOX1 loss → VLCFA accumulation (P-NALD); ACOX1 gain → excess H2O2 and neuroinflammation (Mitchell syndrome).',
  identifiers: [
    { label: 'OMIM (P-NALD)', value: '264470', url: 'https://www.omim.org/entry/264470' },
    { label: 'OMIM (Mitchell)', value: '618205', url: 'https://www.omim.org/entry/618205' },
    { label: 'OMIM (gene)', value: '609751', url: 'https://www.omim.org/entry/609751' },
    { label: 'Orphanet', value: 'ORPHA:86', url: 'https://www.orpha.net/en/disease/detail/86' },
    { label: 'MONDO', value: 'search', url: 'https://monarchinitiative.org/search?q=acyl-CoA%20oxidase%20deficiency' },
  ],
  identity: [
    { label: 'Primary defect (LOF)', text: 'Biallelic loss-of-function ACOX1 variants cause acyl-CoA oxidase deficiency (P-NALD), an autosomal recessive peroxisomal disorder.', ev: 'established', why: 'Enzyme defect, deletion allele and 22-patient series.', src: [POLLTHE, FOURNIER, FERD07, OMIM_LOF, ORPHA] },
    { label: 'Primary defect (GOF)', text: 'Heterozygous de novo gain-of-function variants, mainly p.Asn237Ser, cause Mitchell syndrome.', ev: 'established', why: 'Recurrent de novo allele with functional model-organism data.', src: [CHUNG, OMIM_GOF] },
    { label: 'Distinct mechanisms', text: 'LOF acts via VLCFA lipotoxicity; GOF via excess H2O2/ROS-driven neuroinflammation; both cause axonal loss.', ev: 'established', why: 'Separated in Drosophila and mouse studies.', src: [CHUNG] },
    { label: 'Distinctive pathology', text: 'Enlarged peroxisomes in P-NALD, unlike the absent/ghost peroxisomes of Zellweger spectrum.', ev: 'established', src: [POLLTHE, DECRAEMER] },
  ],
  clinical: [
    { label: 'P-NALD onset and features', text: 'Neonatal/early infantile hypotonia, seizures, regression, dysmorphism, SNHL and retinopathy with progressive leukodystrophy.', ev: 'established', src: [FERD07, POLLTHE] },
    { label: 'Mitchell syndrome', text: 'Childhood-onset episodic demyelination, sensorineural hearing loss, sensorimotor polyneuropathy and ichthyosis with a relapsing course.', ev: 'established', src: [CHUNG, NEURO22, FILIPPI] },
    { label: 'Adult-onset LOF', text: 'Rare adults present with progressive cerebellar ataxia and cerebellar/brainstem atrophy.', ev: 'strong', why: 'Few reported cases.', src: [FERD10] },
    { label: 'Atypical presentations', text: 'Autistic-type regression with selective leukodystrophy (LOF); GOF can mimic autoimmune CNS disease.', ev: 'emerging', why: 'Single case reports.', src: [KURIAN, THIELS] },
    { label: 'Prognosis', text: 'Severe P-NALD usually fatal within the first 5 years; Mitchell syndrome may stabilise or improve with early immunomodulation.', ev: 'strong', src: [FERD07, FILIPPI] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Extremely rare; no population prevalence data. Largest LOF series: 22 patients; fewer than ~30 GOF cases reported by 2024.', ev: 'unknown', why: 'Case-series counts only; no registries.', src: [FERD07, CHUNG] },
    { label: 'Distribution', text: 'P-NALD reported in Europe, North America, Japan and Korea; Mitchell syndrome in the USA, Germany, Italy and China.', ev: 'established', src: [FERD07, CARROZZO, MORITA, THIELS, CHEN, FILIPPI] },
    { label: 'Founder effects', text: 'None established; p.Asn237Ser is a recurrent de novo mutation, not a founder allele.', ev: 'strong', src: [CHUNG, FERD07] },
    { label: 'Sex distribution', text: 'No sex bias expected for either inheritance pattern.', ev: 'unknown', why: 'No sex-specific incidence data identified.', src: [OMIM_LOF] },
  ],
  variants: [
    { id: 'acox1-n237s', disease: 'acox1', gene: 'ACOX1', transcript: 'NM_004035', hgvsc: 'c.710A>G', hgvsp: 'p.(Asn237Ser)', legacy: 'N237S', build: 'Not specified', type: 'Missense (gain of function)', consequence: 'Increased enzyme activity / altered substrate processing; excess H2O2 and ROS', clinvar: 'Pathogenic (per dossier)', popFreq: 'Recurrent de novo; not a founder allele', phenotype: 'Mitchell syndrome (heterozygous, de novo)', functional: 'Increased ROS production in Drosophila and mouse models', ev: 'established', why: 'Recurrent de novo in unrelated patients with functional confirmation.', src: [CHUNG, THIELS, CHEN, FILIPPI, 'db:clinvar:ACOX1'] },
    { id: 'acox1-l54fs', disease: 'acox1', gene: 'ACOX1', transcript: 'NM_004035', hgvsc: 'c.160delC', hgvsp: 'p.(Leu54Serfs*18)', build: 'Not specified', type: 'Frameshift', consequence: 'Premature stop; loss of function', clinvar: 'Not stated', popFreq: 'Not stated', phenotype: 'Typical P-NALD', functional: 'Null allele', ev: 'established', why: 'Null mechanism in affected patients.', src: [CARROZZO, ROSEWICH, 'db:clinvar:ACOX1'] },
    { id: 'acox1-ivs3', disease: 'acox1', gene: 'ACOX1', transcript: 'NM_004035', hgvsc: 'Not stated (HGVS)', legacy: 'IVS3-1G>A', build: 'Not specified', type: 'Splice-site (acceptor)', consequence: 'Aberrant splicing; loss of function', clinvar: 'Not stated', popFreq: 'Not stated', phenotype: 'P-NALD', functional: 'Loss of enzyme function', ev: 'strong', why: 'Described in case series; individual functional data not detailed.', src: [FERD07, 'db:clinvar:ACOX1'] },
    { id: 'acox1-del', disease: 'acox1', gene: 'ACOX1', transcript: 'NM_004035', hgvsc: 'Large genomic deletion of ACOX1 locus', build: 'Not specified', type: 'Large deletion (CNV)', consequence: 'Complete loss of enzyme', clinvar: 'Not stated', popFreq: 'Original P-NALD family (homozygous)', phenotype: 'P-NALD', functional: 'Null allele', ev: 'established', why: 'First molecular cause of P-NALD; null mechanism.', src: [FOURNIER] },
  ],
  genotypePhenotype: [
    { aspect: 'Clinical phenotype', finding: 'Biallelic LOF causes recessive P-NALD; heterozygous GOF causes dominant de novo Mitchell syndrome, clinically and biochemically distinct.', ev: 'established', src: [CHUNG, FERD07] },
    { aspect: 'Severity', finding: 'Within P-NALD, biallelic null alleles associate with severe neonatal disease; hypomorphic alleles may allow later onset or longer survival.', ev: 'strong', why: 'No strict genotype-phenotype map in the 22-patient series.', src: [FERD07] },
    { aspect: 'Age of onset', finding: 'Rare adult-onset LOF cases show cerebellar and brainstem atrophy.', ev: 'strong', src: [FERD10] },
    { aspect: 'Biomarker levels', finding: 'Plasma VLCFA elevated in LOF but normal or near-normal in GOF; fibroblast ACOX1 activity absent in LOF, increased in GOF.', ev: 'established', src: [FERD07, CHUNG] },
    { aspect: 'Progression', finding: 'LOF follows continuous deterioration; GOF a relapsing-remitting course with MRI lesion activity tracking relapses.', ev: 'strong', src: [FERD07, NEURO22] },
    { aspect: 'Biomarker levels', finding: 'Isoform 1a/1b-specific defects may explain atypical biochemical profiles.', ev: 'emerging', why: 'Biochemistry established; clinical impact unproven.', src: [OAXACA] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'ACOX1 (17q25.1)', detail: 'Biallelic LOF (deletions, splice, frameshift, missense) or heterozygous GOF (p.Asn237Ser).', ev: 'established', src: [FERD07, CHUNG] },
    { stage: 'Protein', label: 'Acyl-CoA oxidase 1', detail: 'FAD-dependent peroxisomal enzyme absent/inactive (LOF) or hyperactive (GOF).', ev: 'established', src: [WANDERS, CHUNG] },
    { stage: 'Molecular function', label: 'First step of beta-oxidation', detail: 'LOF: acyl-CoA oxidation fails; GOF: excess H2O2 beyond catalase capacity.', ev: 'established', src: [WANDERS, CHUNG] },
    { stage: 'Pathway', label: 'VLCFA accumulation / oxidative stress', detail: 'LOF: C24:0/C26:0 accumulate, enlarged peroxisomes, IL-1-centred inflammation; GOF: ROS-driven glial activation.', ev: 'strong', src: [FERD07, ELHAJJ, CHUNG] },
    { stage: 'Cellular consequence', label: 'Axonal loss and demyelination', detail: 'Lipotoxic (LOF) or inflammatory oxidative (GOF) injury to axons and myelin.', ev: 'strong', src: [CHUNG, ELHAJJ] },
    { stage: 'Phenotype', label: 'Leukodystrophy / relapsing demyelination', detail: 'Neonatal encephalopathy with leukodystrophy (P-NALD) or episodic demyelination, neuropathy, SNHL and ichthyosis (Mitchell).', ev: 'established', src: [FERD07, NEURO22] },
  ],
  relations: [
    { from: ['gene', 'ACOX1'], to: ['protein', 'Acyl-CoA oxidase 1'], label: 'encodes', ev: 'established', why: 'Gene-protein identity.', src: [WANDERS] },
    { from: ['protein', 'Acyl-CoA oxidase 1'], to: ['pathway', 'Peroxisomal beta-oxidation'], label: 'rate-limiting step of', ev: 'established', why: 'Biochemically defined.', src: [WANDERS, OAXACA] },
    { from: ['pathway', 'Peroxisomal beta-oxidation'], to: ['metabolite', 'VLCFA accumulation'], label: 'loss (LOF) causes', ev: 'established', why: 'Diagnostic finding in P-NALD.', src: [POLLTHE, FERD07] },
    { from: ['protein', 'Acyl-CoA oxidase 1'], to: ['metabolite', 'Excess H2O2 / ROS'], label: 'GOF overproduces', ev: 'established', why: 'Functional studies in model organisms.', src: [CHUNG] },
    { from: ['metabolite', 'VLCFA accumulation'], to: ['pathway', 'IL-1 inflammatory signalling'], label: 'activates', ev: 'strong', why: 'Established in patient fibroblasts in vitro; in vivo relevance inferred.', src: [ELHAJJ] },
    { from: ['metabolite', 'Excess H2O2 / ROS'], to: ['cell', 'Microglia / macrophages'], label: 'activates', ev: 'strong', why: 'Model-organism data and clinical MRI correlation.', src: [CHUNG, NEURO22] },
    { from: ['metabolite', 'VLCFA accumulation'], to: ['phenotype', 'Leukodystrophy'], label: 'drives (LOF)', ev: 'strong', why: 'Lipotoxic axonal loss shown in models.', src: [CHUNG, FERD07] },
    { from: ['cell', 'Microglia / macrophages'], to: ['phenotype', 'Relapsing demyelination'], label: 'drives (GOF)', ev: 'strong', why: 'Mechanistic and clinical case evidence.', src: [CHUNG, NEURO22] },
    { from: ['therapy', 'IVIg ± mycophenolate'], to: ['phenotype', 'Relapsing demyelination'], label: 'partially suppresses', ev: 'emerging', why: 'Case reports only.', src: [NEURO22, FILIPPI] },
    { from: ['therapy', 'N-acetylcysteine amide (NACA)'], to: ['metabolite', 'Excess H2O2 / ROS'], label: 'scavenges', ev: 'emerging', why: 'Mechanism-informed; single case response.', src: [FILIPPI] },
    { from: ['metabolite', 'VLCFA accumulation'], to: ['biomarker', 'Fibroblast C26:0 beta-oxidation'], label: 'confirmed by', ev: 'established', why: 'Gold-standard LOF assay.', src: [FERD07] },
  ],
  cells: [
    { cell: 'Neurons / axons', role: 'primary', detail: 'Axonal loss via lipotoxicity (LOF) or ROS (GOF).', ev: 'established', src: [CHUNG] },
    { cell: 'Oligodendrocytes', role: 'primary', detail: 'Myelin loss: progressive dysmyelination (LOF) and episodic demyelination (GOF).', ev: 'strong', src: [FERD07, NEURO22] },
    { cell: 'Microglia / macrophages', role: 'secondary', detail: 'ROS-driven activation (GOF); Acox1-/- microglial cells show oxidative stress and inflammatory signalling.', ev: 'strong', src: [CHUNG, ESSADEK] },
    { cell: 'Astrocytes', role: 'secondary', detail: 'Glial inflammatory activation in GOF disease.', ev: 'emerging', src: [CHUNG] },
    { cell: 'Non-CNS tissue', role: 'secondary', detail: 'Fibroblast IL-1/IL-6/IL-8 inflammatory response; enlarged hepatic peroxisomes; skin (ichthyosis) in GOF.', ev: 'strong', src: [ELHAJJ, POLLTHE, CHUNG] },
  ],
  regions: [
    { region: 'Cerebral & cerebellar white matter', finding: 'Diffuse progressive leukodystrophy in P-NALD; posterior predominance.', src: [FERD07, KURIAN] },
    { region: 'Middle cerebellar peduncles & pons', finding: 'T2 hyperintensity of MCP and pontine transverse fibres in several P-NALD cases.', src: [MORITA] },
    { region: 'Cerebellum & brainstem', finding: 'Progressive atrophy in surviving and adult-onset LOF patients.', src: [FERD10] },
    { region: 'Spinal cord & brainstem', finding: 'Multifocal/longitudinal relapsing demyelinating lesions in Mitchell syndrome, mimicking NMOSD or autoimmune myelitis.', src: [THIELS, NEURO22] },
  ],
  biomarkers: [
    { name: 'Plasma VLCFA (C26:0, C26:0/C22:0, C24:0/C22:0)', category: 'Biochemical', significance: 'Elevated in LOF; normal or mildly elevated in GOF.', sample: 'Plasma', assay: 'GC-MS', purpose: ['Screening', 'Diagnosis'], status: 'Established clinical', limitations: 'Normal VLCFA does not exclude P-NALD (documented fatal missed case).', ev: 'established', src: [FERD07, ROSEWICH] },
    { name: 'Fibroblast C26:0 beta-oxidation', category: 'Enzymatic', significance: 'Markedly reduced in LOF; not reduced in GOF.', sample: 'Cultured skin fibroblasts', assay: 'Beta-oxidation assay', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Requires skin biopsy and specialist laboratory.', ev: 'established', src: [FERD07] },
    { name: 'ACOX1 enzyme activity', category: 'Enzymatic', significance: 'Absent/severely reduced in LOF; increased in GOF.', sample: 'Cultured skin fibroblasts', assay: 'Enzyme assay', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Specialist laboratories only.', ev: 'established', src: [FERD07, CHUNG] },
    { name: 'Pristanic / phytanic acid', category: 'Biochemical', significance: 'Variable in LOF; normal in GOF.', sample: 'Plasma', assay: 'GC-MS', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'Branched-chain pathway may be intact.', ev: 'established', src: [FERD07] },
    { name: 'Oxidative stress markers (H2O2 / ROS)', category: 'Biochemical', significance: 'Elevated, especially in GOF.', sample: 'Plasma / fibroblasts', assay: 'Research assays', purpose: ['Diagnosis', 'Monitoring'], status: 'Experimental', limitations: 'Not validated clinically.', ev: 'emerging', src: [CHUNG] },
    { name: 'Inflammatory cytokines (IL-6, IL-8)', category: 'Biochemical', significance: 'Elevated in LOF fibroblasts and in GOF-driven inflammation.', sample: 'Fibroblasts / plasma', assay: 'Immunoassay', purpose: ['Monitoring'], status: 'Experimental', limitations: 'Established in vitro only; clinical utility emerging.', ev: 'emerging', src: [ELHAJJ] },
    { name: 'MRI lesion activity', category: 'Imaging', significance: 'Correlates with relapses and treatment response in Mitchell syndrome.', sample: 'In vivo brain and spinal cord', assay: 'Serial MRI', purpose: ['Monitoring', 'Treatment response'], status: 'Clinical adjunct', limitations: 'Case-level evidence; may mimic autoimmune disease.', ev: 'emerging', src: [NEURO22, FILIPPI] },
    { name: 'ACOX1 sequencing with CNV analysis', category: 'Genetic', significance: 'Confirms biallelic LOF or heterozygous de novo GOF variant.', sample: 'Blood (DNA); parental samples', assay: 'Targeted, panel, exome or genome sequencing', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'CNV analysis needed for large deletions.', ev: 'established', src: [FOURNIER, CHUNG] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'LOF: neonatal hypotonia, seizures, leukodystrophy, retinopathy/SNHL. GOF: childhood episodic demyelination with SNHL, neuropathy and ichthyosis, or inflammatory CNS disease failing immunotherapy.', src: [FERD07, THIELS] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain and spine MRI', detail: 'Posterior-predominant leukodystrophy with brainstem/cerebellar involvement (LOF) or relapsing multifocal lesions (GOF).', src: [MORITA, NEURO22] },
    { phase: 'Investigation', category: 'Biochemical', method: 'Peroxisomal plasma panel', detail: 'VLCFA ratios, phytanic/pristanic acid, bile acid intermediates; normal VLCFA does not exclude disease.', src: [ROSEWICH, FERD07] },
    { phase: 'Confirmation', category: 'Enzymatic', method: 'Fibroblast studies', detail: 'C26:0 beta-oxidation and ACOX1 activity (definitive for LOF); excess ROS may be detectable in GOF.', src: [FERD07, ROSEWICH] },
    { phase: 'Confirmation', category: 'Genetic', method: 'ACOX1 sequencing with CNV analysis', detail: 'Biallelic LOF or heterozygous GOF (p.Asn237Ser) with parental testing; reanalyse non-diagnostic exomes.', src: [FOURNIER, MORITA, CHUNG] },
  ],
  differential: [
    'Zellweger spectrum disorder (neonatal adrenoleukodystrophy)',
    'D-bifunctional protein deficiency',
    'X-linked adrenoleukodystrophy',
    'Neuromyelitis optica spectrum disorder / autoimmune myelitis (Mitchell syndrome mimic)',
  ],
  phenotypes: {
    applicable: true,
    note: 'Two mechanistically distinct disorders share one gene; the LOF form also has a rare adult-onset presentation.',
    forms: [
      { name: 'P-NALD (classic LOF)', onset: 'Neonatal / early infantile', severity: 'Severe', progression: 'Continuous deterioration; usually fatal within the first 5 years', genetics: 'Biallelic null/LOF (AR)', markers: '↑ VLCFA; absent ACOX1 activity; enlarged peroxisomes', src: [FERD07, POLLTHE] },
      { name: 'Adult-onset LOF', onset: 'Adulthood (3rd-5th decade)', severity: 'Moderate', progression: 'Slowly progressive ataxia', genetics: 'Compound heterozygous hypomorphic (AR)', markers: '↑ or near-normal VLCFA; cerebellar/brainstem atrophy', src: [FERD10] },
      { name: 'Mitchell syndrome (GOF)', onset: 'Childhood (first decade)', severity: 'Variable', progression: 'Relapsing-remitting; may stabilise with treatment', genetics: 'Heterozygous de novo p.Asn237Ser (AD)', markers: 'Normal/near-normal VLCFA; increased ACOX1 activity; relapsing MRI lesions', src: [CHUNG, NEURO22, FILIPPI] },
    ],
  },
  management: [
    { category: 'Symptomatic', text: 'Anti-seizure medication in P-NALD; no agent shown superior.', src: [FERD07] },
    { category: 'Supportive', text: 'Tube feeding, fat-soluble vitamins and anecdotal DHA in P-NALD; Lorenzo\'s oil lacks efficacy data.', src: [FERD07] },
    { category: 'Symptomatic', text: 'Mitchell syndrome: IVIg (acute and maintenance), adjunctive mycophenolate and NACA antioxidant reported to stabilise or improve patients.', src: [NEURO22, FILIPPI] },
    { category: 'Symptomatic', text: 'Hearing aids or cochlear implants; physiotherapy and orthotics for neuropathy; emollients for ichthyosis.', src: [NEURO22] },
    { category: 'Monitoring', text: 'Serial MRI to track lesion activity and treatment response in Mitchell syndrome.', src: [NEURO22] },
    { category: 'Supportive', text: 'Multidisciplinary neurology, metabolic, rehabilitation, audiology, dermatology and palliative care.', src: [FERD07] },
  ],
  therapies: [
    { id: 'acox1-ivig', name: 'IVIg ± mycophenolate', modality: 'Other', target: 'Neuroinflammation (GOF)', mechanism: 'Immunomodulation suppresses ROS-triggered glial inflammation and relapses.', delivery: 'Intravenous / oral', stage: 'Early human trials', evidenceBase: 'Human', status: 'Off-label case-level use; no registered trial', ev: 'emerging', why: 'Case reports showing partial response; no controlled data.', src: [NEURO22, FILIPPI] },
    { id: 'acox1-naca', name: 'N-acetylcysteine amide (NACA)', modality: 'Small molecule', target: 'H2O2 / ROS (GOF)', mechanism: 'Antioxidant counteracting excess ACOX1-derived H2O2.', delivery: 'Oral', stage: 'Early human trials', evidenceBase: 'Human', status: 'Single paediatric case with dramatic improvement (with immunomodulation)', ev: 'emerging', why: 'Mechanism-informed; case-report level.', src: [FILIPPI] },
    { id: 'acox1-niclosamide', name: 'Niclosamide (repurposed)', modality: 'Small molecule', target: 'VLCFA levels (LOF)', mechanism: 'Reduced VLCFA in patient fibroblast screen.', delivery: 'Oral', stage: 'Early human trials', evidenceBase: 'Human', status: 'Long-term use in one patient; safe, no definitive benefit', ev: 'emerging', why: 'Single-patient, bedside-to-bench data.', src: [MOREAU] },
    { id: 'acox1-hsct', name: 'Haematopoietic stem cell transplantation', modality: 'Cell therapy', target: 'P-NALD (LOF)', mechanism: 'Donor-derived cells; mechanism of any benefit undefined.', delivery: 'Intravenous (transplant)', stage: 'Early human trials', evidenceBase: 'Human', status: 'Single sibling comparison; insufficient evidence', ev: 'emerging', why: 'Different imaging course in one transplanted sibling; no efficacy conclusion possible.', src: [WANG] },
    { id: 'acox1-il1', name: 'IL-1 / MAPK pathway inhibition', modality: 'Small molecule', target: 'IL-1, p38/JNK MAPK (LOF)', mechanism: 'Block the IL-1-centred inflammatory cascade triggered by ACOX1 loss.', delivery: 'Not defined', stage: 'Preclinical (cellular)', evidenceBase: 'Cellular', status: 'In vitro fibroblast data; anakinra a hypothetical candidate', ev: 'proposed', why: 'MAPK inhibitors reduced cytokines in vitro only.', src: [ELHAJJ] },
    { id: 'acox1-argan', name: 'Argan oil phytosterols (schottenol, spinasterol)', modality: 'Other', target: 'Oxidative stress / peroxisome abundance (LOF)', mechanism: 'Attenuate oxidative stress and restore peroxisomal function.', delivery: 'In vitro', stage: 'Preclinical (cellular)', evidenceBase: 'Cellular', status: 'Acox1-/- microglial cells and patient fibroblasts', ev: 'emerging', why: 'In vitro only; no human evidence.', src: [ESSADEK, KEBBAJ] },
    { id: 'acox1-aav', name: 'AAV-ACOX1 gene therapy (concept)', modality: 'Gene therapy', target: 'ACOX1 (LOF)', mechanism: 'Deliver ACOX1 to liver or brain.', delivery: 'AAV', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Conceptual; no preclinical program identified', ev: 'proposed', why: 'No published data.', src: [] },
    { id: 'acox1-catalase', name: 'Catalase augmentation (concept)', modality: 'Other', target: 'H2O2 (GOF)', mechanism: 'Increase peroxisomal H2O2 detoxification.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Conceptual', ev: 'proposed', why: 'Rationale only.', src: [] },
  ],
  trials: [],
  milestones: [
    { year: 1988, label: 'P-NALD described: enlarged peroxisomes and acyl-CoA oxidase deficiency', stage: 'Discovery', src: [POLLTHE] },
    { year: 1994, label: 'Large ACOX1 deletion identified as first molecular cause', stage: 'Discovery', src: [FOURNIER] },
    { year: 2006, label: 'Fatal case with normal plasma VLCFA highlights need for fibroblast testing', stage: 'Discovery', src: [ROSEWICH] },
    { year: 2007, label: '22-patient series defines mutational and biochemical spectrum', stage: 'Discovery', src: [FERD07] },
    { year: 2012, label: 'IL-1/MAPK inflammatory activation in LOF fibroblasts', stage: 'Preclinical (cellular)', src: [ELHAJJ] },
    { year: 2014, label: 'HSCT sibling comparison: insufficient efficacy evidence', stage: 'Early human trials', src: [WANG] },
    { year: 2020, label: 'Mitchell syndrome defined as ACOX1 GOF (p.Asn237Ser); LOF vs GOF mechanisms separated in models', stage: 'Animal studies', src: [CHUNG] },
    { year: 2022, label: 'Partial response of GOF encephalomyelopathy to immunotherapy reported', stage: 'Early human trials', src: [NEURO22] },
    { year: 2024, label: 'NACA + IVIg response in Mitchell syndrome; niclosamide single-patient use in P-NALD', stage: 'Early human trials', src: [FILIPPI, MOREAU] },
  ],
  gaps: [
    { text: 'No approved disease-modifying therapy and no registered interventional trials for either form.', ev: 'unknown', src: [FERD07] },
    { text: 'No natural-history registry or validated outcome measures; extreme rarity limits trial design.', ev: 'unknown', src: [FERD07] },
    { text: 'Efficacy of IVIg and NACA in Mitchell syndrome rests on case reports; controlled data needed.', ev: 'emerging', src: [NEURO22, FILIPPI] },
    { text: 'Clinical impact of isoform 1a/1b-specific defects is unresolved.', ev: 'emerging', src: [OAXACA] },
    { text: 'Newborn screening (DBS C26:0-lysoPC) for LOF ACOX1 deficiency has not been validated.', ev: 'unknown', src: [] },
  ],
}
