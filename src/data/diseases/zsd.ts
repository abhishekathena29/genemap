import type { Disease, Gene, Source, SourceKind } from '../types'
import { geneDb, genereviews, lit, nord, omim, orpha } from '../cite'

// The dossier cites literature by DOI (no PMIDs); link the DOI directly.
const doi = (id: string, d: string, authors: string, year: number, title: string, venue: string, kind?: SourceKind): Source => ({
  ...lit(id, authors, year, title, venue, kind),
  url: `https://doi.org/${d}`,
})

const GR = 'gr:zsd'
const BRAVERMAN = 'lit:zsd:braverman2013'
const KLOUWER = 'lit:zsd:klouwer2015'
const WANDERS = 'lit:zsd:wanders2004'
const ROSEWICH15 = 'lit:zsd:rosewich2015'
const WALTER = 'lit:zsd:walter2001'
const POLLTHE = 'lit:zsd:pollthe2004'
const CRANE = 'lit:zsd:crane2005'
const ROSEWICH05 = 'lit:zsd:rosewich2005'
const TAMURA = 'lit:zsd:tamura2001'
const SUZUKI = 'lit:zsd:suzuki2001'
const SHIMOZAWA = 'lit:zsd:shimozawa1999'
const BORGIA = 'lit:zsd:borgia2022'
const EBBERINK = 'lit:zsd:ebberink2010'
const THOMS = 'lit:zsd:thoms2011'
const LIPINSKI = 'lit:zsd:lipinski2020'
const SA = 'lit:zsd:sa2015'
const ESPINOSA = 'lit:zsd:espinosaescudero2022'
const BARONIO = 'lit:zsd:baronio2025'
const RATBI = 'lit:zsd:ratbi2024'
const DEAN = 'lit:zsd:dean2018'

export const zsdSources: Source[] = [
  genereviews('zsd', 'NBK1448', 'Zellweger Spectrum Disorder (Steinberg et al.)'),
  omim('214100', 'Zellweger syndrome'),
  omim('202370', 'Neonatal adrenoleukodystrophy'),
  omim('266510', 'Infantile Refsum disease'),
  orpha('912', 'Zellweger syndrome'),
  orpha('44', 'Neonatal adrenoleukodystrophy'),
  orpha('772', 'Infantile Refsum disease'),
  nord('zsd', 'zellweger-syndrome', 'Zellweger syndrome'),
  doi(WANDERS, '10.1111/J.1399-0004.2004.00329.X', 'Wanders RJA, Waterham HR', 2004, 'Peroxisomal disorders I: biochemistry and genetics', 'Clin Genet', 'review'),
  doi(BRAVERMAN, '10.1002/DDRR.1113', 'Braverman N et al.', 2013, 'Peroxisome Biogenesis Disorders: Biological, Clinical and Pathophysiological Perspectives', 'Dev Disabil Res Rev', 'review'),
  doi(KLOUWER, '10.1186/S13023-015-0368-9', 'Klouwer FCC et al.', 2015, 'Zellweger spectrum disorders: clinical overview and management', 'Orphanet J Rare Dis', 'review'),
  doi(ROSEWICH15, '10.1038/EJHG.2014.250', 'Rosewich H et al.', 2015, 'Clinical utility gene card: Zellweger syndrome spectrum', 'Eur J Hum Genet', 'review'),
  doi(WALTER, '10.1086/321265', 'Walter C et al.', 2001, 'Disorders of peroxisome biogenesis due to PEX1 mutations', 'Am J Hum Genet'),
  doi(POLLTHE, '10.1002/AJMG.A.20664', 'Poll-The BT et al.', 2004, 'Peroxisome biogenesis disorders with prolonged survival', 'Am J Med Genet A'),
  doi(CRANE, '10.1002/HUMU.20211', 'Crane DI et al.', 2005, 'PEX1 mutations in the Zellweger spectrum', 'Hum Mutat'),
  doi(ROSEWICH05, '10.1136/JMG.2005.033324', 'Rosewich H et al.', 2005, 'Genetic and clinical aspects of ZSD with PEX1 mutations', 'J Med Genet'),
  doi(TAMURA, '10.1042/0264-6021:3570417', 'Tamura S et al.', 2001, 'Phenotype-genotype relationships in PEX1-defective ZSD', 'Biochem J'),
  doi(SUZUKI, '10.1023/A:1010310816743', 'Suzuki Y et al.', 2001, 'Clinical, biochemical, genetic and neuronal migration in PBDs', 'J Inherit Metab Dis'),
  doi(SHIMOZAWA, '10.1093/HMG/8.6.1077', 'Shimozawa N et al.', 1999, 'Nonsense and temperature-sensitive mutations in PEX13', 'Hum Mol Genet'),
  doi(BORGIA, '10.1186/s13023-022-02415-5', 'Borgia P et al.', 2022, 'Genotype-phenotype correlations in PEX13-related ZSD', 'Orphanet J Rare Dis'),
  doi(EBBERINK, '10.1136/JMG.2009.074302', 'Ebberink MS et al.', 2010, 'Unusual variant PBD caused by PEX16 mutations', 'J Med Genet'),
  doi(THOMS, '10.1186/1471-2350-12-109', 'Thoms S et al.', 2011, "5' polymorphisms in PEX1 and correlation to survival", 'BMC Med Genet'),
  doi(LIPINSKI, '10.1007/S13353-019-00523-W', 'Lipiński P et al.', 2020, 'Mild ZSD due to novel PEX1 variants', 'J Appl Genet'),
  doi(SA, '10.1007/8904_2015_487', 'Sá MJN et al.', 2015, 'Infantile Refsum Disease: Dietary Treatment and Phytanic Acid', 'JIMD Reports'),
  doi(ESPINOSA, '10.37349/edd.2022.00010', 'Espinosa-Escudero RA et al.', 2022, 'Cholestasis associated to inborn errors in bile acid synthesis', 'Explor Dig Dis', 'review'),
  doi(BARONIO, '10.1101/2025.10.14.682039', 'Baronio D et al.', 2025, 'ATAD1 Overexpression Enhances Mitochondrial and Peroxisomal Function in ZSD models', 'bioRxiv (preprint)'),
  doi(RATBI, '10.60692/kdn10-08x49', 'Ratbi I et al.', 2024, 'Heimler Syndrome caused by hypomorphic PEX1 and PEX6 mutations', 'Venue not stated'),
  doi(DEAN, '10.1007/S13238-017-0423-5', 'Dean JM, Lodhi IJ', 2018, 'Structural and functional roles of ether lipids', 'Protein Cell', 'review'),
]

const pexGene = (
  symbol: string,
  location: string,
  fn: string,
  pathway: string,
  variantTypes: string[],
  src: string[],
  extra: Partial<Gene> = {},
): Gene => ({
  symbol,
  name: `Peroxisomal biogenesis factor ${symbol.slice(3)}`,
  protein: `Peroxin ${symbol.slice(3)} (${symbol})`,
  location,
  function: fn,
  pathway,
  variantTypes,
  diseases: ['zsd'],
  ev: 'established',
  src: [...src, ...geneDb(symbol)],
  ...extra,
})

export const zsdGenes: Gene[] = [
  pexGene(
    'PEX1',
    '7q21.2',
    'AAA+ ATPase (147 kDa) that forms a hexameric complex with PEX6 to recycle ubiquitinated PEX5 receptor back to the cytosol, sustaining peroxisomal matrix protein import. Most common ZSD gene (~65% of cases).',
    'Peroxisome biogenesis: PEX1-PEX6 receptor recycling (matrix protein import)',
    ['Hypomorphic missense (p.Gly843Asp, temperature-sensitive)', 'Frameshift / truncating (c.2097_2098insT)', "5' UTR polymorphisms (survival modifiers)"],
    [WALTER, CRANE, BRAVERMAN, GR],
    { protein: 'Peroxin 1 (PEX1), AAA+ ATPase', uniprot: 'O00175', ncbiGene: '5189' },
  ),
  pexGene(
    'PEX6',
    '6p21.1',
    'Peroxisomal AAA ATPase that partners PEX1 in recycling the PEX5 receptor. Second most common ZSD gene; hypomorphic alleles cause Heimler syndrome.',
    'Peroxisome biogenesis: PEX1-PEX6 receptor recycling (matrix protein import)',
    ['Missense (including temperature-sensitive)', 'Truncating', 'Hypomorphic alleles (Heimler syndrome)'],
    [BRAVERMAN, RATBI, GR],
    { protein: 'Peroxin 6 (PEX6), AAA ATPase', ncbiGene: '5190' },
  ),
  pexGene(
    'PEX2',
    '8q21.13',
    'RING-finger peroxin (with PEX10 and PEX12) mediating ubiquitination and recycling of the PEX5 import receptor.',
    'Peroxisome biogenesis: RING-finger complex (matrix protein import)',
    ['Missense', 'Nonsense'],
    [BRAVERMAN, ROSEWICH15, GR],
  ),
  pexGene(
    'PEX10',
    '1p36.32',
    'RING-finger peroxin (with PEX2 and PEX12) mediating ubiquitination and recycling of the PEX5 import receptor.',
    'Peroxisome biogenesis: RING-finger complex (matrix protein import)',
    ['Allelic spectrum not detailed in source dossier'],
    [BRAVERMAN, ROSEWICH15, GR],
  ),
  pexGene(
    'PEX12',
    '17q12',
    'RING-finger peroxin (with PEX2 and PEX10) mediating ubiquitination and recycling of the PEX5 import receptor.',
    'Peroxisome biogenesis: RING-finger complex (matrix protein import)',
    ['Missense', 'Nonsense'],
    [BRAVERMAN, ROSEWICH15, GR],
  ),
  pexGene(
    'PEX13',
    '2p16.1',
    'Peroxin required for peroxisomal matrix protein import; temperature-sensitive alleles retain partial function at lower temperature.',
    'Peroxisome biogenesis: matrix protein import',
    ['Nonsense', 'Temperature-sensitive missense'],
    [SHIMOZAWA, BORGIA, GR],
  ),
  pexGene(
    'PEX16',
    '11p11.2',
    'Peroxin (with PEX3 and PEX19) responsible for peroxisomal membrane protein targeting and insertion.',
    'Peroxisome biogenesis: peroxisomal membrane assembly',
    ['Variants causing atypical, leukodystrophy-predominant ZSD'],
    [EBBERINK, BRAVERMAN, GR],
  ),
  pexGene(
    'PEX26',
    '22q11.21',
    'Peroxin required for peroxisome biogenesis; its specific molecular role is not detailed in the source dossier. Uncommon ZSD gene.',
    'Peroxisome biogenesis',
    ['Clinical reports limited'],
    [ROSEWICH15, GR],
  ),
]

export const zsd: Disease = {
  id: 'zsd',
  name: 'Zellweger Spectrum Disorder',
  short: 'ZSD',
  lastUpdated: '2026-10-08',
  color: '#b0446a',
  synonyms: [
    'Zellweger syndrome (ZS; cerebrohepatorenal syndrome)',
    'Neonatal adrenoleukodystrophy (NALD)',
    'Infantile Refsum disease (IRD)',
    'Peroxisome biogenesis disorder (PBD)',
    'PBD-ZSD',
  ],
  classification: 'Peroxisome biogenesis disorder with secondary leukodystrophy (multisystem peroxisomal disease)',
  inheritance: 'Autosomal recessive',
  genes: ['PEX1', 'PEX6', 'PEX2', 'PEX10', 'PEX12', 'PEX13', 'PEX16', 'PEX26'],
  tagline: 'Biallelic PEX variants → failed peroxisome assembly → loss of all peroxisomal functions → multisystem disease with leukodystrophy.',
  identifiers: [
    { label: 'OMIM (ZS)', value: '214100', url: 'https://www.omim.org/entry/214100' },
    { label: 'OMIM (NALD)', value: '202370', url: 'https://www.omim.org/entry/202370' },
    { label: 'OMIM (IRD)', value: '266510', url: 'https://www.omim.org/entry/266510' },
    { label: 'Orphanet', value: 'ORPHA:912', url: 'https://www.orpha.net/en/disease/detail/912' },
    { label: 'GeneReviews', value: 'NBK1448', url: 'https://www.ncbi.nlm.nih.gov/books/NBK1448/' },
    { label: 'MONDO', value: 'MONDO:0015286', url: 'https://monarchinitiative.org/MONDO:0015286' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Biallelic pathogenic variants in any of at least 13 PEX genes (PEX1, 2, 3, 5, 6, 10, 11B, 12, 13, 14, 16, 19, 26) disrupt peroxisome biogenesis.', ev: 'established', why: 'Gene-disease relationships documented in GeneReviews and multiple cohorts.', src: [GR, BRAVERMAN, ROSEWICH15] },
    { label: 'Hallmark biochemistry', text: 'Simultaneous failure of peroxisomal pathways: raised VLCFA, phytanic/pristanic acid and C27 bile acids; reduced plasmalogens and DHA.', ev: 'established', why: 'Diagnostic biochemical profile used clinically.', src: [WANDERS, KLOUWER] },
    { label: 'Clinical continuum', text: 'Historical tiers ZS (most severe), NALD (intermediate) and IRD (mildest) form one gradational spectrum; Heimler syndrome extends the mild end.', ev: 'established', src: [POLLTHE, KLOUWER, RATBI, 'omim:214100', 'omim:202370', 'omim:266510', 'orpha:912', 'orpha:44', 'orpha:772'] },
    { label: 'Most common gene', text: 'PEX1 accounts for ~65% of cases; PEX6 is second most common.', ev: 'established', src: [BRAVERMAN, ROSEWICH15, GR] },
  ],
  clinical: [
    { label: 'Age of onset', text: 'Neonatal in ZS; neonatal/infantile in NALD; infancy or early childhood in IRD; childhood to adulthood in atypical forms.', ev: 'established', src: [GR, KLOUWER] },
    { label: 'Neurological features', text: 'Hypotonia, seizures, developmental delay or absent development, leukodystrophy, neuronal migration defects and cerebellar involvement.', ev: 'established', src: [GR, KLOUWER, 'nord:zsd'] },
    { label: 'Multisystem features', text: 'Cholestatic liver disease, retinal dystrophy, sensorineural hearing loss, renal cysts, adrenal insufficiency and chondrodysplasia punctata.', ev: 'established', src: [GR, KLOUWER] },
    { label: 'Dysmorphism (ZS)', text: 'High forehead, large anterior fontanelle, anteverted nares and stippled epiphyses in neonates.', ev: 'established', src: [GR] },
    { label: 'Prognosis', text: 'ZS: death usually within the first year; NALD: survival into childhood or adolescence with decline; IRD: survival into adulthood possible.', ev: 'established', src: [POLLTHE, GR] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Approximately 1 in 50,000-100,000 live births for the whole spectrum.', ev: 'strong', why: 'Approximate estimates; comprehensive population-based data are lacking.', src: [BRAVERMAN, KLOUWER] },
    { label: 'Severity distribution', text: 'ZS historically ~50-60% of diagnosed cases; milder forms are likely under-recognised.', ev: 'emerging', why: 'Proportion shifts with broader molecular testing.', src: [BRAVERMAN, KLOUWER] },
    { label: 'Ancestry', text: 'Pan-ethnic; PEX1 p.Gly843Asp predominates in Northern European / Caucasian populations, without strong founder effects.', ev: 'established', src: [CRANE] },
    { label: 'Sex distribution', text: 'No sex bias, as expected for autosomal recessive inheritance.', ev: 'established', src: [GR] },
  ],
  variants: [
    { id: 'zsd-pex1-g843d', disease: 'zsd', gene: 'PEX1', transcript: 'Not specified in dossier', hgvsc: 'c.2528G>A', hgvsp: 'p.(Gly843Asp)', legacy: 'G843D; rs28940888', build: 'Not specified', type: 'Missense (hypomorphic)', consequence: 'Reduced PEX1 stability and PEX1-PEX6 complex assembly; partial residual import', clinvar: 'Pathogenic', popFreq: 'Most common PEX1 allele; predominant in Northern European / Caucasian patients', phenotype: 'Homozygous: mild ZSD (NALD/IRD); with a truncating allele: intermediate/mild', functional: 'Temperature-sensitive; function partially restored at lower temperature', ev: 'established', why: 'Recurrent across cohorts with functional data.', src: [WALTER, CRANE, 'db:clinvar:PEX1'] },
    { id: 'zsd-pex1-i700fs', disease: 'zsd', gene: 'PEX1', transcript: 'Not specified in dossier', hgvsc: 'c.2097_2098insT', hgvsp: 'p.(Ile700Tyrfs*42)', legacy: 'c.2097insT', build: 'Not specified', type: 'Frameshift', consequence: 'Truncating; null allele', clinvar: 'Pathogenic (per dossier)', popFreq: 'Most common null PEX1 allele; multiple populations', phenotype: 'Homozygous: severe ZS; with p.Gly843Asp: intermediate/mild', functional: 'Loss of function', ev: 'established', why: 'Null mechanism; recurrent in cohorts.', src: [WALTER, ROSEWICH05, 'db:clinvar:PEX1'] },
  ],
  genotypePhenotype: [
    { aspect: 'Severity', finding: 'Biallelic truncating/null alleles in any PEX gene give Zellweger syndrome; at least one hypomorphic allele gives NALD/IRD.', ev: 'established', src: [WALTER, TAMURA, GR] },
    { aspect: 'Clinical phenotype', finding: 'Very mild hypomorphic PEX1 or PEX6 alleles cause Heimler syndrome (enamel hypoplasia, SNHL with or without retinopathy).', ev: 'established', src: [RATBI] },
    { aspect: 'Clinical phenotype', finding: 'PEX16 variants can produce atypical ZSD with predominant leukodystrophy and later onset, without severe neonatal hepatic/renal disease.', ev: 'strong', why: 'Small number of reported families.', src: [EBBERINK] },
    { aspect: 'Severity', finding: 'PEX13 temperature-sensitive (nonsense + missense) genotypes cause NALD-range disease; null PEX13 causes ZS.', ev: 'strong', src: [SHIMOZAWA, BORGIA] },
    { aspect: 'Survival / outcome', finding: "Two common PEX1 5' UTR polymorphisms modify survival independently of the coding variant.", ev: 'emerging', why: 'Single study; not independently replicated.', src: [THOMS] },
    { aspect: 'Biomarker levels', finding: 'VLCFA elevation and plasmalogen deficiency scale with severity; serum VLCFA may be normal in IRD.', ev: 'established', src: [GR, LIPINSKI] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'PEX genes (13+)', detail: 'Biallelic pathogenic variants in any obligatory peroxin gene, most often PEX1.', ev: 'established', src: [BRAVERMAN, GR] },
    { stage: 'Protein', label: 'Peroxins', detail: 'Loss of membrane-assembly (PEX3/16/19), import (PEX5/14/13, PEX2/10/12) or receptor-recycling (PEX1-PEX6) peroxins.', ev: 'established', src: [WANDERS, BRAVERMAN] },
    { stage: 'Molecular function', label: 'Peroxisome assembly fails', detail: 'Matrix proteins are not imported; "ghost" peroxisomal membranes without functional matrix.', ev: 'established', src: [WANDERS, BRAVERMAN] },
    { stage: 'Pathway', label: 'Global peroxisomal metabolic failure', detail: 'VLCFA beta-oxidation, plasmalogen synthesis, phytanic acid alpha-oxidation, bile acid side-chain shortening and DHA synthesis all fail.', ev: 'established', src: [WANDERS, KLOUWER, DEAN] },
    { stage: 'Cellular consequence', label: 'Membrane and myelin disruption', detail: 'VLCFA toxicity and plasmalogen-deficient myelin impair oligodendrocytes; fetal lipid abnormalities disrupt neuronal migration.', ev: 'strong', src: [SUZUKI, DEAN] },
    { stage: 'Phenotype', label: 'Multisystem disease with leukodystrophy', detail: 'Hypotonia, seizures, migration defects, leukodystrophy, liver, retinal, auditory, renal and adrenal disease.', ev: 'established', src: [GR, KLOUWER] },
  ],
  relations: [
    { from: ['gene', 'PEX1'], to: ['protein', 'PEX1-PEX6 AAA-ATPase complex'], label: 'forms', ev: 'established', why: 'Biochemical and genetic data on the PEX1-PEX6 complex.', src: [WANDERS, TAMURA] },
    { from: ['gene', 'PEX6'], to: ['protein', 'PEX1-PEX6 AAA-ATPase complex'], label: 'forms', ev: 'established', why: 'Biochemical and genetic data on the PEX1-PEX6 complex.', src: [WANDERS, BRAVERMAN] },
    { from: ['protein', 'PEX1-PEX6 AAA-ATPase complex'], to: ['pathway', 'Peroxisomal matrix protein import'], label: 'recycles PEX5 for', ev: 'established', why: 'Core peroxisome biogenesis mechanism.', src: [WANDERS, BRAVERMAN] },
    { from: ['gene', 'PEX16'], to: ['pathway', 'Peroxisomal membrane assembly'], label: 'required for', ev: 'established', why: 'Described membrane biogenesis role.', src: [WANDERS, BRAVERMAN] },
    { from: ['pathway', 'Peroxisomal matrix protein import'], to: ['metabolite', 'VLCFA accumulation'], label: 'loss causes', ev: 'established', why: 'Diagnostic finding in ZSD.', src: [WANDERS, KLOUWER] },
    { from: ['pathway', 'Peroxisomal matrix protein import'], to: ['metabolite', 'Plasmalogen deficiency'], label: 'loss causes', ev: 'established', why: 'Ether lipid synthesis enzymes are peroxisomal.', src: [WANDERS, DEAN] },
    { from: ['pathway', 'Peroxisomal matrix protein import'], to: ['metabolite', 'C27 bile acid accumulation'], label: 'loss causes', ev: 'established', why: 'Peroxisomal bile acid side-chain shortening blocked.', src: [ESPINOSA] },
    { from: ['metabolite', 'VLCFA accumulation'], to: ['phenotype', 'Leukodystrophy'], label: 'contributes to', ev: 'strong', why: 'Mechanistic inference from biochemistry and pathology; exact neurotoxic mechanism still emerging.', src: [WANDERS, KLOUWER] },
    { from: ['metabolite', 'Plasmalogen deficiency'], to: ['cell', 'Oligodendrocytes'], label: 'destabilises myelin of', ev: 'strong', why: 'Plasmalogens are major myelin membrane lipids.', src: [DEAN] },
    { from: ['metabolite', 'C27 bile acid accumulation'], to: ['phenotype', 'Neonatal cholestasis'], label: 'drives', ev: 'strong', why: 'Bile acid pool deficiency explains cholestasis and vitamin malabsorption.', src: [ESPINOSA] },
    { from: ['metabolite', 'VLCFA accumulation'], to: ['biomarker', 'Plasma VLCFA'], label: 'measured as', ev: 'established', why: 'Standard first-line assay.', src: [WANDERS] },
    { from: ['therapy', 'Cholic acid supplementation'], to: ['phenotype', 'Neonatal cholestasis'], label: 'reduces', ev: 'strong', why: 'Supportive clinical evidence; no controlled trials.', src: [ESPINOSA] },
    { from: ['therapy', 'Pharmacological PEX1 stabilisation (chaperone)'], to: ['gene', 'PEX1'], label: 'stabilises hypomorphic', ev: 'emerging', why: 'Temperature-rescue proof-of-concept in cells only.', src: [WALTER, TAMURA] },
  ],
  cells: [
    { cell: 'Oligodendrocytes', role: 'primary', detail: 'Plasmalogen-deficient myelin; VLCFA toxicity impairs differentiation and survival.', ev: 'strong', src: [DEAN, KLOUWER] },
    { cell: 'Neurons / axons', role: 'primary', detail: 'Neuronal migration defects in ZS; DHA deficiency impairs dendritic and synaptic function; Purkinje cell loss.', ev: 'strong', src: [SUZUKI, GR] },
    { cell: 'Astrocytes', role: 'secondary', detail: 'Reactive gliosis.', ev: 'strong', src: [GR] },
    { cell: 'Microglia / macrophages', role: 'secondary', detail: 'Neuroinflammatory activation in response to VLCFA and myelin debris.', ev: 'emerging', src: [KLOUWER] },
    { cell: 'Non-CNS tissue', role: 'primary', detail: 'Liver (cholestasis, cirrhosis), retina, inner ear, kidney (cysts, oxalate stones), adrenal and skeleton.', ev: 'established', src: [GR, KLOUWER] },
  ],
  regions: [
    { region: 'Cerebral cortex', finding: 'Pachygyria, polymicrogyria and band heterotopia in ZS (neuronal migration defects).', src: [SUZUKI, GR] },
    { region: 'Periventricular & deep white matter', finding: 'Confluent T2 hyperintensity in ZS; progressive leukodystrophy in NALD.', src: [GR, POLLTHE] },
    { region: 'Cerebellum', finding: 'Hypoplasia in ZS; white matter involvement and atrophy in NALD/IRD; Purkinje cell loss.', src: [GR, POLLTHE] },
    { region: 'Pyramidal tracts', finding: 'Involvement correlates with spastic features in milder forms.', src: [POLLTHE, EBBERINK] },
  ],
  biomarkers: [
    { name: 'Plasma VLCFA (C26:0, C26:0/C22:0, C24:0/C22:0)', category: 'Biochemical', significance: 'Cardinal screening marker of failed peroxisomal beta-oxidation.', sample: 'Plasma', assay: 'GC-MS or LC-MS/MS', purpose: ['Screening', 'Diagnosis'], status: 'Established clinical', limitations: 'May be normal in mild ZSD (IRD).', ev: 'established', src: [WANDERS, GR] },
    { name: 'C26:0-lysophosphatidylcholine (DBS)', category: 'Biochemical', significance: 'More sensitive marker, including mild cases with normal serum VLCFA.', sample: 'Dried blood spot', assay: 'Tandem mass spectrometry', purpose: ['Screening', 'Diagnosis'], status: 'Clinical adjunct', limitations: 'Not specific for ZSD versus other VLCFA disorders.', ev: 'strong', src: [LIPINSKI] },
    { name: 'Erythrocyte plasmalogens', category: 'Biochemical', significance: 'Reflects failure of peroxisomal ether lipid synthesis.', sample: 'Erythrocytes', assay: 'GC-MS', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Only mildly reduced in mild forms.', ev: 'established', src: [WANDERS, GR] },
    { name: 'Phytanic and pristanic acid', category: 'Biochemical', significance: 'Elevated, especially in IRD and with dietary phytol intake.', sample: 'Plasma', assay: 'GC-MS', purpose: ['Diagnosis', 'Monitoring'], status: 'Established clinical', limitations: 'Diet-dependent.', ev: 'established', src: [WANDERS, SA] },
    { name: 'C27 bile acid intermediates (THCA, DHCA)', category: 'Biochemical', significance: 'Elevated; explains neonatal cholestasis.', sample: 'Plasma', assay: 'Tandem mass spectrometry', purpose: ['Diagnosis', 'Monitoring'], status: 'Established clinical', limitations: 'Also abnormal in other peroxisomal beta-oxidation defects.', ev: 'established', src: [ESPINOSA] },
    { name: 'Plasma DHA (22:6n-3)', category: 'Biochemical', significance: 'Reduced, reflecting impaired peroxisomal DHA synthesis.', sample: 'Plasma', assay: 'Fatty acid profiling', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'Not specific.', ev: 'strong', src: [KLOUWER] },
    { name: 'Fibroblast peroxisomal function panel', category: 'Enzymatic', significance: 'Reduced DHAP-AT activity, C26:0 and pristanic acid oxidation; catalase cytosolic (ghost peroxisomes).', sample: 'Cultured skin fibroblasts', assay: 'Enzyme assays and catalase immunofluorescence', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Requires skin biopsy and specialist laboratory.', ev: 'established', src: [GR, WANDERS] },
    { name: 'PEX gene panel', category: 'Genetic', significance: 'Biallelic pathogenic PEX variants are definitive.', sample: 'Blood (DNA)', assay: 'Sequencing of all ZSD-associated PEX genes', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Variants of uncertain significance require functional confirmation.', ev: 'established', src: [GR, ROSEWICH15] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Neonate with profound hypotonia, dysmorphism, cholestasis and stippled epiphyses; or infant/child with delay, SNHL, retinopathy and liver disease; or ataxia + retinopathy + hearing loss.', src: [GR, KLOUWER] },
    { phase: 'Investigation', category: 'Biochemical', method: 'Peroxisomal plasma panel', detail: 'VLCFA ratios, phytanic/pristanic acid, DHA and C27 bile acids; erythrocyte plasmalogens.', src: [WANDERS, KLOUWER] },
    { phase: 'Investigation', category: 'Biochemical', method: 'DBS C26:0-lysoPC', detail: 'When milder ZSD is suspected with borderline plasma VLCFA.', src: [LIPINSKI] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain MRI', detail: 'Leukodystrophy pattern, neuronal migration defects and cerebellar changes.', src: [GR] },
    { phase: 'Investigation', category: 'Multisystem', method: 'Organ assessment', detail: 'Ophthalmology, audiology, liver function/ultrasound, ACTH stimulation, renal ultrasound, skeletal survey.', src: [GR, KLOUWER] },
    { phase: 'Confirmation', category: 'Enzymatic', method: 'Fibroblast studies', detail: 'DHAP-AT, C26:0 and pristanic acid beta-oxidation; catalase immunostaining for ghost peroxisomes.', src: [GR] },
    { phase: 'Confirmation', category: 'Genetic', method: 'PEX gene panel sequencing', detail: 'Biallelic pathogenic variants in a single PEX gene.', src: [GR, ROSEWICH15] },
  ],
  differential: [
    'Single peroxisomal enzyme deficiencies (e.g. D-bifunctional protein, ACOX1 deficiency)',
    'X-linked adrenoleukodystrophy (ABCD1; no plasmalogen deficiency or hepatic/renal features)',
    'Adult Refsum disease (PHYH; isolated phytanic acid elevation)',
    'Non-peroxisomal bile acid synthesis defects (CYP7B1, HSD3B7)',
    'Rhizomelic chondrodysplasia punctata (PEX7; isolated plasmalogen deficiency)',
  ],
  phenotypes: {
    applicable: true,
    note: 'ZS, NALD and IRD are gradational tiers of one continuum; atypical forms (PEX16, Heimler syndrome) extend the mild end.',
    forms: [
      { name: 'Zellweger syndrome (ZS)', onset: 'Neonatal', severity: 'Severe; no or minimal development', progression: 'Death usually within the first year', genetics: 'Biallelic null/truncating PEX alleles', markers: 'Markedly ↑ VLCFA; severely ↓ plasmalogens; migration defects on MRI', src: [GR, KLOUWER] },
      { name: 'Neonatal adrenoleukodystrophy (NALD)', onset: 'Neonatal / infantile', severity: 'Intermediate', progression: 'Delay then regression; survival into childhood or adolescence', genetics: 'Hypomorphic + null, or temperature-sensitive alleles', markers: '↑ VLCFA; ↓ plasmalogens; progressive leukodystrophy', src: [POLLTHE, KLOUWER] },
      { name: 'Infantile Refsum disease (IRD)', onset: 'Infancy / early childhood', severity: 'Mild', progression: 'Slow; survival into adulthood possible', genetics: 'Biallelic hypomorphic (e.g. PEX1 p.Gly843Asp homozygous)', markers: 'Mildly ↑ or normal serum VLCFA; ↑ phytanic acid', src: [POLLTHE, GR] },
      { name: 'Atypical ZSD (PEX16, Heimler syndrome)', onset: 'Childhood to adulthood', severity: 'Near-normal to mild', progression: 'Variable; near-normal lifespan in Heimler', genetics: 'PEX16 variants; very mild hypomorphic PEX1/PEX6', markers: 'Mildly ↑ VLCFA; DBS C26:0-lysoPC positive', src: [EBBERINK, RATBI] },
    ],
  },
  management: [
    { category: 'Supportive', text: 'Multidisciplinary care: physical, occupational and speech therapy; gastrostomy for feeding difficulty; avoid fasting.', src: [KLOUWER, GR] },
    { category: 'Symptomatic', text: 'Anti-seizure medication (agents compatible with liver disease); baclofen and physiotherapy for spasticity.', src: [KLOUWER] },
    { category: 'Symptomatic', text: 'Dietary phytanic acid restriction lowers phytanic/pristanic acid; neurological benefit variable.', src: [SA] },
    { category: 'Symptomatic', text: 'Oral cholic acid (or other C24 bile acids) to reduce cholestasis and improve fat-soluble vitamin absorption; ursodeoxycholic acid for cholestasis.', src: [ESPINOSA, KLOUWER] },
    { category: 'Supportive', text: 'Vitamin A, D, E and K supplementation guided by serum levels.', src: [KLOUWER] },
    { category: 'Symptomatic', text: 'Hearing aids or cochlear implants; cataract extraction and low-vision aids; hydrocortisone if adrenal insufficiency confirmed.', src: [KLOUWER, GR] },
    { category: 'Monitoring', text: 'Surveillance of liver function, vision, hearing, adrenal function, renal cysts and oxalate stones, and bone density.', src: [KLOUWER, GR] },
    { category: 'Supportive', text: 'Genetic counselling (25% recurrence risk); prenatal and preimplantation diagnosis for known familial variants.', src: [GR] },
  ],
  therapies: [
    { id: 'zsd-cholic', name: 'Cholic acid supplementation', modality: 'Other', target: 'Bile acid pool', mechanism: 'Replenishes C24 bile acids, reducing cholestasis and improving fat-soluble vitamin absorption.', delivery: 'Oral', stage: 'Approved / standard of care', evidenceBase: 'Human', status: 'Current supportive practice; not disease-modifying for neurological disease', ev: 'strong', why: 'Clinical experience supports biochemical and hepatic benefit; no controlled trials.', src: [ESPINOSA, KLOUWER] },
    { id: 'zsd-phytanic-diet', name: 'Dietary phytanic acid restriction', modality: 'Substrate reduction', target: 'Phytanic / pristanic acid', mechanism: 'Low-phytol diet reduces accumulation of branched-chain fatty acids.', delivery: 'Dietary', stage: 'Approved / standard of care', evidenceBase: 'Human', status: 'Current supportive practice', ev: 'established', why: 'Biochemical benefit established; clinical neurological benefit only emerging.', src: [SA] },
    { id: 'zsd-chaperone', name: 'Pharmacological PEX1 stabilisation (chaperone)', modality: 'Small molecule', target: 'PEX1 p.Gly843Asp and other temperature-sensitive peroxins', mechanism: 'Stabilise hypomorphic peroxins to restore partial peroxisome biogenesis.', delivery: 'Not defined', stage: 'Preclinical (cellular)', evidenceBase: 'Cellular', status: 'Proof-of-concept from temperature rescue in cells; no clinical candidate', ev: 'emerging', why: 'Rescue at 31-34°C in cell studies only; not in trials.', src: [WALTER, TAMURA] },
    { id: 'zsd-atad1', name: 'ATAD1 overexpression', modality: 'Other', target: 'ATAD1 (mitochondrial AAA-ATPase)', mechanism: 'Enhances mitochondrial and peroxisomal lipid metabolism in ZSD models.', delivery: 'Experimental', stage: 'Preclinical (cellular)', evidenceBase: 'Cellular', status: 'Preclinical (preprint)', ev: 'emerging', why: 'Single preprint in cell and model-organism systems; not generalisable to humans.', src: [BARONIO] },
    { id: 'zsd-aav-pex1', name: 'AAV-PEX1 gene therapy (concept)', modality: 'Gene therapy', target: 'PEX1', mechanism: 'Deliver PEX1 cDNA to liver or CNS to restore peroxisome biogenesis.', delivery: 'AAV (liver- or CNS-directed)', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Conceptual; no human program identified', ev: 'proposed', why: 'Theoretical approach without reported preclinical or clinical data.', src: [] },
  ],
  trials: [],
  milestones: [
    { year: 1999, label: 'Temperature-sensitive PEX13 mutations described', stage: 'Discovery', src: [SHIMOZAWA] },
    { year: 2001, label: 'PEX1 genotype-phenotype and temperature-sensitive p.Gly843Asp characterised', stage: 'Preclinical (cellular)', src: [WALTER, TAMURA] },
    { year: 2004, label: 'Prolonged-survival PBD cohorts characterised', stage: 'Discovery', src: [POLLTHE] },
    { year: 2010, label: 'Atypical PEX16 leukodystrophy-predominant ZSD described', stage: 'Discovery', src: [EBBERINK] },
    { year: 2015, label: 'Clinical overview and management recommendations; dietary phytanic acid restriction reported', stage: 'Approved / standard of care', src: [KLOUWER, SA] },
    { year: 2020, label: 'DBS C26:0-lysoPC detects mild ZSD with normal serum VLCFA', stage: 'Discovery', src: [LIPINSKI] },
    { year: 2025, label: 'ATAD1 overexpression improves peroxisomal function in ZSD models (preprint)', stage: 'Preclinical (cellular)', src: [BARONIO] },
  ],
  gaps: [
    { text: 'No approved disease-modifying therapy and no registered interventional trials with confirmed NCT identifiers.', ev: 'unknown', src: [GR, KLOUWER] },
    { text: 'Prospective natural-history data are limited; existing cohorts are largely retrospective.', ev: 'unknown', src: [POLLTHE, KLOUWER] },
    { text: 'Controlled evidence for DHA supplementation is lacking.', ev: 'unknown', src: [KLOUWER] },
    { text: 'Intrafamilial variability suggests unidentified genetic or environmental modifiers.', ev: 'emerging', src: [THOMS] },
    { text: 'Precise neurotoxic mechanisms of VLCFA and plasmalogen deficiency, and the role of microglial inflammation, remain incompletely defined.', ev: 'emerging', src: [KLOUWER, DEAN] },
    { text: 'Population-based epidemiology and the true frequency of mild forms are unknown.', ev: 'unknown', src: [BRAVERMAN] },
  ],
}
