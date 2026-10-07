import type { Disease, Gene, Source, SourceKind } from '../types'
import { geneDb, lit, omim, orpha, pmid } from '../cite'

// Most dossier references carry a DOI but no PMID; link the DOI directly.
const doi = (id: string, d: string, authors: string, year: number, title: string, venue: string, kind?: SourceKind): Source => ({
  ...lit(id, authors, year, title, venue, kind),
  url: `https://doi.org/${d}`,
})

const OMIM = 'omim:261515'
const ORPHA = 'orpha:300'
const FERD_MUT = 'lit:dbp:ferdinandusse2006a'
const FERD_CLIN = 'lit:dbp:ferdinandusse2006b'
const VANGRUNSVEN = 'lit:dbp:vangrunsven1999'
const GRONBORG = 'lit:dbp:gronborg2010'
const LINES = 'lit:dbp:lines2014'
const LIEBER = 'lit:dbp:lieber2014'
const MEHTALA = 'lit:dbp:mehtala2013'
const DEMUNTER = 'lit:dbp:demunter2018'
const DAS = 'lit:dbp:das2021'
const ZHANG = 'lit:dbp:zhang2019'
const CHAPEL = 'lit:dbp:chapelcrespo2020'
const SUZUKI = 'lit:dbp:suzuki1999'
const BUONI = 'lit:dbp:buoni2007'
const BAE = 'lit:dbp:bae2020'
const MATSUKAWA = 'lit:dbp:matsukawa2017'
const WERNER = 'lit:dbp:werner2021'
const SAVAGE = 'lit:dbp:savage2020'
const ERDAL = 'lit:dbp:erdal2025'
const DIAZ = 'lit:dbp:diazmoreno2025'

export const dbpSources: Source[] = [
  omim('261515', 'D-bifunctional protein deficiency'),
  omim('601860', 'HSD17B4 gene'),
  orpha('300', 'Peroxisomal bifunctional enzyme deficiency'),
  pmid(FERD_MUT, '16385456', 'Ferdinandusse S et al.', 2006, 'Mutational spectrum of D-bifunctional protein deficiency and structure-based genotype-phenotype analysis', 'Am J Hum Genet'),
  pmid(FERD_CLIN, '16278841', 'Ferdinandusse S et al.', 2006, 'Clinical and biochemical spectrum of D-bifunctional protein deficiency', 'Ann Neurol'),
  doi(VANGRUNSVEN, '10.1093/HMG/8.8.1509', 'van Grunsven EG et al.', 1999, 'Enoyl-CoA hydratase deficiency: identification of a new type of D-bifunctional protein deficiency', 'Hum Mol Genet'),
  doi(GRONBORG, '10.1002/AJMG.A.33677', 'Grønborg S et al.', 2010, 'Typical cMRI pattern as diagnostic clue for D-bifunctional protein deficiency without apparent biochemical abnormalities in plasma', 'Am J Med Genet A'),
  doi(LINES, '10.1212/WNL.0000000000000219', 'Lines MA et al.', 2014, 'Peroxisomal D-bifunctional protein deficiency: three adults diagnosed by whole-exome sequencing', 'Neurology'),
  doi(LIEBER, '10.1186/1471-2350-15-30', 'Lieber DS et al.', 2014, 'Next generation sequencing with copy number variant detection expands the phenotypic spectrum of HSD17B4-deficiency', 'BMC Med Genet'),
  doi(MEHTALA, '10.1371/JOURNAL.PONE.0053688', 'Mehtälä ML et al.', 2013, 'On the molecular basis of D-bifunctional protein deficiency type III', 'PLoS One'),
  doi(DEMUNTER, '10.1111/BPA.12586', 'De Munter S et al.', 2018, 'Autonomous Purkinje cell axonal dystrophy causes ataxia in peroxisomal multifunctional protein-2 deficiency', 'Brain Pathol'),
  doi(DAS, '10.3389/FCELL.2021.632930', 'Das Y et al.', 2021, 'Peroxisomal Multifunctional Protein 2 Deficiency Perturbs Lipid Homeostasis in the Retina and Causes Visual Dysfunction in Mice', 'Front Cell Dev Biol'),
  doi(ZHANG, '10.3892/IJMM.2019.4250', 'Zhang Y et al.', 2019, 'SIRT1 activation alleviates brain microvascular endothelial dysfunction in peroxisomal disorders', 'Int J Mol Med'),
  doi(CHAPEL, '10.1016/J.YMGMR.2020.100608', 'Chapel-Crespo CC et al.', 2020, 'Primary adrenal insufficiency in two siblings with D-bifunctional protein deficiency', 'Mol Genet Metab Rep'),
  doi(SUZUKI, '10.1007/S100380050131', 'Suzuki Y et al.', 1999, 'Prenatal diagnosis of peroxisomal D-3-hydroxyacyl-CoA dehydratase/D-3-hydroxyacyl-CoA dehydrogenase bifunctional protein deficiency', 'J Hum Genet'),
  doi(BUONI, '10.1016/J.BRAINDEV.2006.06.004', 'Buoni S et al.', 2007, 'D-bifunctional protein deficiency associated with drug resistant infantile spasms', 'Brain Dev'),
  doi(BAE, '10.3346/JKMS.2020.35.E357', 'Bae EY et al.', 2020, 'First Case of Peroxisomal D-bifunctional Protein Deficiency with Novel HSD17B4 Mutations and Progressive Neuropathy in Korea', 'J Korean Med Sci'),
  doi(MATSUKAWA, '10.1016/J.JNS.2016.11.009', 'Matsukawa T et al.', 2017, 'Slowly progressive D-bifunctional protein deficiency with survival to adulthood diagnosed by whole-exome sequencing', 'J Neurol Sci'),
  doi(WERNER, '10.1002/AJMG.A.62520', 'Werner KM et al.', 2021, 'D-bifunctional protein deficiency caused by splicing variants in a neonate with severe peroxisomal dysfunction and persistent hypoglycemia', 'Am J Med Genet A'),
  doi(SAVAGE, '10.1101/MCS.A005496', 'Savage L et al.', 2020, 'Rapid whole-genome sequencing identifies a homozygous novel variant, His540Arg, in HSD17B4 resulting in D-bifunctional protein deficiency disorder diagnosis', 'Cold Spring Harb Mol Case Stud'),
  doi(ERDAL, '10.1159/000545474', 'Erdal AE et al.', 2025, 'D-Bifunctional Protein Deficiency Type III: Two Turkish Cases and a Novel HSD17B4 Gene Variant', 'Mol Syndromol'),
  doi(DIAZ, '10.1002/jimd.70118', 'Diaz-Moreno U et al.', 2025, 'From Neonatal Encephalopathy to Adult Survival: Revisiting the Natural History of D-Bifunctional Protein Deficiency in a Multicentre International Case Series', 'J Inherit Metab Dis'),
]

export const dbpGenes: Gene[] = [
  {
    symbol: 'HSD17B4',
    name: 'Hydroxysteroid 17-beta dehydrogenase 4',
    protein: 'D-bifunctional protein (DBP; MFP-2 in rodents), 736 aa peroxisomal matrix enzyme',
    location: '5q23.1',
    function:
      'Catalyses steps 2 and 3 of peroxisomal beta-oxidation: (R)-specific enoyl-CoA hydration (N-terminal hydratase domain) and (R)-3-hydroxyacyl-CoA dehydrogenation (central dehydrogenase domain). A C-terminal SCP-2-like domain is proposed to aid lipid transfer.',
    pathway: 'Peroxisomal beta-oxidation of VLCFA, branched-chain fatty acids and C27 bile acid intermediates',
    transcript: 'NM_000414.4',
    uniprot: 'P51659',
    ncbiGene: '3294',
    variantTypes: ['Missense (majority)', 'Splice-site', 'Nonsense', 'Small indels', 'Multi-exon deletions (CNV)'],
    diseases: ['dbp'],
    ev: 'established',
    src: [FERD_MUT, VANGRUNSVEN, 'omim:601860', ...geneDb('HSD17B4')],
  },
]

export const dbp: Disease = {
  id: 'dbp',
  name: 'D-Bifunctional Protein Deficiency',
  short: 'DBP deficiency',
  lastUpdated: '2026-10-08',
  color: '#2c8a7a',
  synonyms: [
    'DBP deficiency',
    'MFP2 / multifunctional protein-2 deficiency',
    'Peroxisomal 17β-hydroxysteroid dehydrogenase type 4 deficiency',
    'Peroxisomal D-3-hydroxyacyl-CoA dehydratase/dehydrogenase bifunctional protein deficiency',
    'HSD17B4-related peroxisomal disorder',
  ],
  classification: 'Peroxisomal single-enzyme fatty acid beta-oxidation defect with leukodystrophy',
  inheritance: 'Autosomal recessive',
  genes: ['HSD17B4'],
  tagline: 'Loss of D-bifunctional protein → failed peroxisomal beta-oxidation → VLCFA and bile acid intermediate accumulation → neonatal encephalopathy to adult ataxia.',
  identifiers: [
    { label: 'OMIM', value: '261515', url: 'https://www.omim.org/entry/261515' },
    { label: 'OMIM (gene)', value: '601860', url: 'https://www.omim.org/entry/601860' },
    { label: 'Orphanet', value: 'ORPHA:300', url: 'https://www.orpha.net/en/disease/detail/300' },
    { label: 'MONDO', value: 'search', url: 'https://monarchinitiative.org/search?q=D-bifunctional%20protein%20deficiency' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Biallelic loss-of-function variants in HSD17B4 abolish or reduce D-bifunctional protein activity.', ev: 'established', why: 'Large mutational and biochemical case series (n=110).', src: [FERD_MUT, OMIM] },
    { label: 'Hallmark metabolites', text: 'Accumulation of VLCFA, pristanic acid and the C27 bile acid intermediates DHCA and THCA.', ev: 'established', src: [FERD_CLIN] },
    { label: 'Enzymatic subtypes', text: 'Type I (combined hydratase + dehydrogenase), type II (isolated dehydrogenase) and type III (isolated hydratase) deficiency.', ev: 'established', src: [VANGRUNSVEN, FERD_MUT] },
    { label: 'Disease class', text: 'Single-enzyme peroxisomal beta-oxidation disorder, distinct from Zellweger spectrum biogenesis disorders.', ev: 'established', src: [FERD_CLIN, ORPHA] },
  ],
  clinical: [
    { label: 'Age of onset', text: 'Severe forms present neonatally; milder forms in childhood or adulthood (diagnoses up to the 4th-6th decades).', ev: 'established', src: [FERD_CLIN, LINES, MATSUKAWA] },
    { label: 'Severe neonatal form', text: 'Profound hypotonia, refractory seizures (including infantile spasms), feeding failure, Zellweger-like dysmorphism and cortical malformations.', ev: 'established', src: [FERD_CLIN, BUONI] },
    { label: 'Mild / adult form', text: 'Progressive cerebellar ataxia, sensorineural hearing loss, axonal neuropathy, hypogonadism (Perrault-like) and variable cognitive decline.', ev: 'established', src: [LINES, MATSUKAWA] },
    { label: 'Adrenal involvement', text: 'Primary adrenal insufficiency is described, mainly in severe cases.', ev: 'emerging', why: 'Case-series level evidence.', src: [CHAPEL] },
    { label: 'Prognosis', text: 'Most severe cases die within 2 years; milder forms survive into adulthood with slow progression.', ev: 'established', src: [FERD_CLIN, DIAZ] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Rare; no published point prevalence, though considered one of the more common single-enzyme peroxisomal beta-oxidation defects.', ev: 'unknown', why: 'No registry or population-based studies identified.', src: [FERD_CLIN] },
    { label: 'Distribution', text: 'Reported worldwide, including Europe, North America and East Asia.', ev: 'established', src: [FERD_CLIN, BAE, MATSUKAWA, ERDAL] },
    { label: 'Founder variants', text: 'No established founder allele; p.Gly16Ser recurs in Turkish patients without formal founder analysis.', ev: 'emerging', src: [ERDAL, FERD_MUT] },
    { label: 'Sex distribution', text: 'Equal sex distribution expected (autosomal recessive).', ev: 'established', src: [OMIM] },
    { label: 'Diagnostic delay', text: 'Adult-onset cases were largely unrecognised before exome/genome sequencing.', ev: 'strong', src: [LINES] },
  ],
  variants: [
    { id: 'dbp-g16s', disease: 'dbp', gene: 'HSD17B4', transcript: 'NM_000414.4', hgvsc: 'Not stated in dossier', hgvsp: 'p.(Gly16Ser)', build: 'Not specified', type: 'Missense', consequence: 'Hydratase domain; isolated hydratase deficiency (type III)', clinvar: 'Not stated (likely pathogenic per case data)', popFreq: 'Recurrent in Turkish patients', phenotype: 'Type III DBP deficiency', functional: 'Isolated enoyl-CoA hydratase deficiency', ev: 'emerging', why: 'Case-level data from a small series.', src: [ERDAL, 'db:clinvar:HSD17B4'] },
    { id: 'dbp-n457y', disease: 'dbp', gene: 'HSD17B4', transcript: 'NM_000414.4', hgvsc: 'Not stated in dossier', hgvsp: 'p.(Asn457Tyr)', build: 'Not specified', type: 'Missense', consequence: 'Perturbs substrate-binding pocket (hydratase domain)', clinvar: 'Not stated', popFreq: 'Not stated', phenotype: 'DBP deficiency (early structural analyses)', functional: 'Hydratase activity impaired', ev: 'strong', why: 'Characterised in early structural and biochemical studies.', src: [VANGRUNSVEN, 'db:clinvar:HSD17B4'] },
    { id: 'dbp-h540r', disease: 'dbp', gene: 'HSD17B4', transcript: 'NM_000414.4', hgvsc: 'Not stated in dossier', hgvsp: 'p.(His540Arg)', build: 'Not specified', type: 'Missense', consequence: 'Novel variant, homozygous', clinvar: 'Not stated', popFreq: 'Not stated', phenotype: 'Critically ill neonate with DBP deficiency', functional: 'Pathogenicity supported by clinical and biochemical context', ev: 'emerging', why: 'Single case identified by rapid WGS.', src: [SAVAGE, 'db:clinvar:HSD17B4'] },
  ],
  genotypePhenotype: [
    { aspect: 'Severity', finding: 'Biallelic null/severely disruptive alleles cause the lethal neonatal form; at least one hypomorphic allele permits longer survival.', ev: 'established', src: [FERD_MUT] },
    { aspect: 'Survival / outcome', finding: 'Residual fibroblast DBP activity and C26:0 beta-oxidation capacity are the best predictors of life expectancy.', ev: 'established', src: [FERD_CLIN] },
    { aspect: 'Clinical phenotype', finding: 'Type III (isolated hydratase) deficiency associates with intermediate to milder, sometimes adult, presentations.', ev: 'strong', src: [VANGRUNSVEN, ERDAL] },
    { aspect: 'Clinical phenotype', finding: 'HSD17B4 is a recognised cause of Perrault syndrome (SNHL + gonadal dysgenesis).', ev: 'established', src: [LINES] },
    { aspect: 'Age of onset', finding: 'Adult-onset cases are compound heterozygous with a hypomorphic allele or multi-exon CNV.', ev: 'strong', src: [LINES, LIEBER] },
    { aspect: 'Biomarker levels', finding: 'Plasma VLCFA and bile acid intermediates may be normal in mild cases despite disease.', ev: 'established', src: [GRONBORG] },
    { aspect: 'Progression', finding: 'Variant-level prediction beyond the null-vs-hypomorphic framework is imprecise; intrafamilial variability occurs.', ev: 'strong', src: [FERD_MUT] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'HSD17B4 (5q23.1)', detail: 'Biallelic loss-of-function variants.', ev: 'established', src: [FERD_MUT] },
    { stage: 'Protein', label: 'D-bifunctional protein', detail: 'Hydratase and/or dehydrogenase domain inactive, or protein absent.', ev: 'established', src: [VANGRUNSVEN, MEHTALA] },
    { stage: 'Molecular function', label: 'Beta-oxidation steps 2-3 fail', detail: 'Enoyl-CoA hydration and 3-hydroxyacyl-CoA dehydrogenation are blocked.', ev: 'established', src: [FERD_MUT, VANGRUNSVEN] },
    { stage: 'Pathway', label: 'Peroxisomal lipid accumulation', detail: 'VLCFA, pristanic acid and DHCA/THCA accumulate; C24 bile acid and DHA synthesis reduced.', ev: 'established', src: [FERD_CLIN, DAS] },
    { stage: 'Cellular consequence', label: 'Lipotoxic membrane and myelin injury', detail: 'Proposed lipotoxicity in myelin and neurons, DHA depletion and cell-autonomous Purkinje cell axonal dystrophy (mouse).', ev: 'strong', src: [DEMUNTER, DAS] },
    { stage: 'Phenotype', label: 'Encephalopathy, leukodystrophy, ataxia', detail: 'Neonatal hypotonia, seizures and cortical malformations to adult ataxia, neuropathy and hearing loss.', ev: 'established', src: [FERD_CLIN, LINES] },
  ],
  relations: [
    { from: ['gene', 'HSD17B4'], to: ['protein', 'D-bifunctional protein'], label: 'encodes', ev: 'established', why: 'Gene-protein identity.', src: [FERD_MUT] },
    { from: ['protein', 'D-bifunctional protein'], to: ['pathway', 'Peroxisomal beta-oxidation'], label: 'catalyses steps 2-3 of', ev: 'established', why: 'Biochemically defined function.', src: [FERD_MUT, VANGRUNSVEN] },
    { from: ['pathway', 'Peroxisomal beta-oxidation'], to: ['metabolite', 'VLCFA accumulation'], label: 'loss causes', ev: 'established', why: 'Diagnostic biochemical finding.', src: [FERD_CLIN] },
    { from: ['pathway', 'Peroxisomal beta-oxidation'], to: ['metabolite', 'DHCA / THCA accumulation'], label: 'loss causes', ev: 'established', why: 'Diagnostic biochemical finding.', src: [FERD_CLIN] },
    { from: ['pathway', 'Peroxisomal beta-oxidation'], to: ['metabolite', 'DHA deficiency'], label: 'loss causes', ev: 'strong', why: 'Shown in Mfp2 knockout mouse retina; human data indirect.', src: [DAS] },
    { from: ['metabolite', 'VLCFA accumulation'], to: ['phenotype', 'Leukodystrophy'], label: 'proposed to drive', ev: 'strong', why: 'Strong biochemical rationale; direct human neuropathological evidence emerging.', src: [FERD_CLIN] },
    { from: ['gene', 'HSD17B4'], to: ['cell', 'Purkinje cells'], label: 'required cell-autonomously in', ev: 'strong', why: 'Purkinje-specific Mfp2 knockout mice develop axonal dystrophy and ataxia (mouse).', src: [DEMUNTER] },
    { from: ['cell', 'Purkinje cells'], to: ['phenotype', 'Cerebellar ataxia'], label: 'loss causes', ev: 'strong', why: 'Mouse model recapitulating human cerebellar vulnerability.', src: [DEMUNTER] },
    { from: ['gene', 'HSD17B4'], to: ['cell', 'Brain microvascular endothelial cells'], label: 'knockdown impairs barrier of', ev: 'emerging', why: 'In vitro knockdown only.', src: [ZHANG] },
    { from: ['therapy', 'SIRT1 activation (resveratrol)'], to: ['cell', 'Brain microvascular endothelial cells'], label: 'protects (in vitro)', ev: 'emerging', why: 'Single in vitro study.', src: [ZHANG] },
    { from: ['metabolite', 'VLCFA accumulation'], to: ['biomarker', 'Fibroblast C26:0 beta-oxidation'], label: 'assessed by', ev: 'established', why: 'Standard confirmatory assay and prognostic marker.', src: [FERD_CLIN] },
  ],
  cells: [
    { cell: 'Neurons / axons', role: 'primary', detail: 'Cortical migration defects; cell-autonomous Purkinje cell axonal dystrophy in Mfp2 knockout mice; photoreceptor dysfunction in mice.', ev: 'strong', src: [DEMUNTER, DAS, GRONBORG] },
    { cell: 'Oligodendrocytes', role: 'primary', detail: 'Hypomyelination/dysmyelination; proposed VLCFA lipotoxicity in myelin.', ev: 'strong', src: [FERD_CLIN, GRONBORG] },
    { cell: 'Vascular / endothelial cells', role: 'secondary', detail: 'HSD17B4 knockdown impairs brain microvascular endothelial barrier via SIRT1/NF-κB/KLF4 (in vitro).', ev: 'emerging', src: [ZHANG] },
    { cell: 'Non-CNS tissue', role: 'secondary', detail: 'Adrenal cortex (primary adrenal insufficiency), gonads (hypogonadism), inner ear.', ev: 'emerging', src: [CHAPEL, LINES] },
  ],
  regions: [
    { region: 'Perisylvian / frontoparietal cortex', finding: 'Polymicrogyria and pachygyria in severe neonatal cases.', src: [GRONBORG, DIAZ] },
    { region: 'Cerebral white matter', finding: 'Diffuse hypomyelination/dysmyelination in severe cases; subtle changes in mild forms.', src: [GRONBORG, FERD_CLIN] },
    { region: 'Cerebellum', finding: 'Cerebellar white matter change and progressive atrophy; may be the predominant finding in adults.', src: [GRONBORG, LINES] },
    { region: 'Pericerebral spaces', finding: 'Pericerebral cysts in severe neonatal cases.', src: [GRONBORG] },
  ],
  biomarkers: [
    { name: 'Plasma VLCFA (C26:0, C26:0/C22:0, C24:0/C22:0)', category: 'Biochemical', significance: 'Elevated, more so in severe disease.', sample: 'Plasma', assay: 'GC-MS', purpose: ['Screening', 'Diagnosis'], status: 'Established clinical', limitations: 'May be normal in mild/atypical cases.', ev: 'established', src: [FERD_CLIN, GRONBORG] },
    { name: 'DHCA / THCA bile acid intermediates', category: 'Biochemical', significance: 'Elevated; most sensitive in types I/II.', sample: 'Plasma / urine', assay: 'Mass spectrometry', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Variable in type III; may be near-normal in mild cases.', ev: 'established', src: [FERD_CLIN] },
    { name: 'Pristanic and phytanic acid', category: 'Biochemical', significance: 'Pristanic acid elevated in most cases; phytanic:pristanic ratio informative.', sample: 'Plasma', assay: 'GC-MS', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Near-normal in some mild cases; diet-dependent.', ev: 'established', src: [FERD_CLIN] },
    { name: 'Fibroblast C26:0 beta-oxidation', category: 'Enzymatic', significance: 'Best predictor of life expectancy; confirms defect.', sample: 'Cultured skin fibroblasts', assay: 'Beta-oxidation assay', purpose: ['Diagnosis', 'Prognosis'], status: 'Established clinical', limitations: 'Requires fibroblast culture; labour-intensive.', ev: 'established', src: [FERD_CLIN] },
    { name: 'DBP enzyme activity (hydratase / dehydrogenase)', category: 'Enzymatic', significance: 'Defines enzymatic subtype (I, II, III).', sample: 'Cultured skin fibroblasts', assay: 'Enzyme assays', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Specialist laboratories only.', ev: 'established', src: [FERD_MUT, VANGRUNSVEN] },
    { name: 'DBP protein immunoblot', category: 'Enzymatic', significance: 'Absent ~79 kDa band in severe cases; usable prenatally.', sample: 'Fibroblasts, liver, amniocytes, chorionic villi', assay: 'Western blot', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'Only partial reduction in milder forms.', ev: 'established', src: [SUZUKI] },
    { name: 'Peroxisomal MRI pattern', category: 'Imaging', significance: 'Cortical migration defects plus leukodystrophy suggest DBP deficiency even with normal plasma biochemistry.', sample: 'In vivo brain', assay: 'Brain MRI', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Adult forms may show only cerebellar atrophy.', ev: 'established', src: [GRONBORG] },
    { name: 'HSD17B4 sequencing with CNV analysis', category: 'Genetic', significance: 'Confirms diagnosis; CNV layer needed to detect multi-exon deletions.', sample: 'Blood (DNA)', assay: 'Gene panel, exome or genome sequencing (incl. rapid WGS)', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Sequencing without CNV analysis misses some alleles.', ev: 'established', src: [LIEBER, SAVAGE] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Neonate with hypotonia, seizures and Zellweger-like dysmorphism; or child/adult with ataxia, SNHL, neuropathy and hypogonadism (Perrault-like).', src: [FERD_CLIN, LINES] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain MRI', detail: 'Cortical migration defects with leukodystrophy, or cerebellar atrophy in adults.', src: [GRONBORG] },
    { phase: 'Investigation', category: 'Biochemical', method: 'Peroxisomal plasma panel', detail: 'VLCFA, DHCA/THCA, pristanic/phytanic acid and C27 sterols; normal results do not exclude disease.', src: [FERD_CLIN, GRONBORG] },
    { phase: 'Confirmation', category: 'Enzymatic', method: 'Fibroblast studies', detail: 'C26:0 beta-oxidation, hydratase and dehydrogenase assays, DBP immunoblot.', src: [FERD_CLIN, SUZUKI] },
    { phase: 'Confirmation', category: 'Genetic', method: 'HSD17B4 sequencing with CNV analysis', detail: 'Biallelic pathogenic variants; rapid WGS in critically ill neonates.', src: [LIEBER, SAVAGE] },
    { phase: 'Confirmation', category: 'Prenatal', method: 'Prenatal testing', detail: 'Beta-oxidation and DBP immunoblot in amniocytes/chorionic villi, or familial variant testing.', src: [SUZUKI] },
  ],
  differential: [
    'Zellweger spectrum disorder (peroxisome biogenesis defects)',
    'ACOX1 deficiency (pseudo-neonatal adrenoleukodystrophy)',
    'Other causes of Perrault syndrome',
    'Spinocerebellar ataxias with hearing loss and neuropathy (adult form)',
  ],
  phenotypes: {
    applicable: true,
    note: 'A severity continuum from lethal neonatal encephalopathy to adult-onset ataxia, broadly mapped to enzymatic subtype and residual activity.',
    forms: [
      { name: 'Severe neonatal (classic)', onset: 'Birth / neonatal', severity: 'Severe; absent development', progression: 'Death within 2 years in most', genetics: 'Biallelic null/severely disruptive; usually type I or II', markers: 'Markedly ↑ VLCFA and DHCA/THCA; absent DBP protein; cortical malformations', src: [FERD_CLIN, FERD_MUT] },
      { name: 'Intermediate', onset: 'Infancy / childhood', severity: 'Moderate', progression: 'Progressive neurological deterioration; survival into childhood or adolescence', genetics: 'At least one hypomorphic allele', markers: 'Reduced but measurable residual activity; cerebellar WM change', src: [FERD_MUT, DIAZ] },
      { name: 'Mild / adult-onset', onset: 'Childhood to 6th decade', severity: 'Mild to moderate', progression: 'Slowly progressive', genetics: 'Compound heterozygous with hypomorphic allele or CNV; often type III', markers: 'Normal to mildly ↑ VLCFA; cerebellar atrophy', src: [LINES, LIEBER, MATSUKAWA] },
    ],
  },
  management: [
    { category: 'Symptomatic', text: 'Anti-seizure therapy for refractory seizures and infantile spasms (vigabatrin and polytherapy used); no drug shown superior.', src: [BUONI] },
    { category: 'Supportive', text: 'Tube feeding for dysphagia; fat-soluble vitamin supplementation; DHA used anecdotally.', src: [BAE, WERNER] },
    { category: 'Symptomatic', text: 'Hydrocortisone for confirmed adrenal insufficiency; screen adrenal function at diagnosis.', src: [CHAPEL] },
    { category: 'Symptomatic', text: 'Hearing aids or cochlear implants; physiotherapy and orthotics for neuropathy; sex hormone replacement for hypogonadism.', src: [LINES] },
    { category: 'Supportive', text: 'Multidisciplinary rehabilitation; early palliative care planning in severe neonatal cases.', src: [CHAPEL] },
    { category: 'Monitoring', text: 'Periodic VLCFA, bile acid and adrenal testing; interval MRI; developmental and audiological assessment.', src: [CHAPEL, FERD_CLIN] },
  ],
  therapies: [
    { id: 'dbp-sirt1', name: 'SIRT1 activation (resveratrol)', modality: 'Small molecule', target: 'SIRT1 / NF-κB / KLF4', mechanism: 'Restores endothelial barrier function impaired by peroxisomal beta-oxidation loss.', delivery: 'In vitro only', stage: 'Preclinical (cellular)', evidenceBase: 'Cellular', status: 'In vitro endothelial knockdown model', ev: 'emerging', why: 'Single in vitro study; not DBP-specific; not tested in patient cells or animal models.', src: [ZHANG] },
    { id: 'dbp-dha', name: 'DHA supplementation', modality: 'Other', target: 'DHA deficiency', mechanism: 'Replaces DHA whose synthesis requires peroxisomal beta-oxidation.', delivery: 'Oral', stage: 'Early human trials', evidenceBase: 'Human', status: 'Anecdotal use in individual patients; no trials', ev: 'proposed', why: 'No controlled data in DBP deficiency.', src: [BAE, WERNER] },
    { id: 'dbp-diet', name: 'Phytanic acid / VLCFA dietary restriction (concept)', modality: 'Substrate reduction', target: 'Branched-chain and very-long-chain fatty acids', mechanism: 'Reduce dietary substrate load, by analogy with Refsum disease.', delivery: 'Dietary', stage: 'Discovery', evidenceBase: 'Human', status: 'Conceptual; no evidence in DBP deficiency', ev: 'proposed', why: 'Extrapolated from other peroxisomal disorders.', src: [] },
    { id: 'dbp-aav', name: 'AAV-HSD17B4 gene therapy (concept)', modality: 'Gene therapy', target: 'HSD17B4', mechanism: 'Deliver wild-type HSD17B4.', delivery: 'AAV', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Conceptual; no preclinical data identified', ev: 'proposed', why: 'By analogy with other single-enzyme peroxisomal defects.', src: [] },
  ],
  trials: [],
  milestones: [
    { year: 1999, label: 'Isolated hydratase deficiency (type III) identified; prenatal diagnosis validated', stage: 'Discovery', src: [VANGRUNSVEN, SUZUKI] },
    { year: 2006, label: 'Largest series (n=110): mutational spectrum and fibroblast C26:0 beta-oxidation as prognostic marker', stage: 'Discovery', src: [FERD_MUT, FERD_CLIN] },
    { year: 2010, label: 'MRI pattern recognised as diagnostic clue independent of plasma biochemistry', stage: 'Discovery', src: [GRONBORG] },
    { year: 2013, label: 'Structural basis of type III deficiency elucidated', stage: 'Discovery', src: [MEHTALA] },
    { year: 2014, label: 'Adult-onset phenotype recognised via WES and CNV analysis', stage: 'Discovery', src: [LINES, LIEBER] },
    { year: 2018, label: 'Purkinje cell-autonomous pathology in Mfp2 conditional knockout mice', stage: 'Animal studies', src: [DEMUNTER] },
    { year: 2019, label: 'SIRT1 activation protects endothelial cells in vitro', stage: 'Preclinical (cellular)', src: [ZHANG] },
    { year: 2021, label: 'Retinal PUFA/DHA disruption in Mfp2 knockout mice', stage: 'Animal studies', src: [DAS] },
    { year: 2025, label: 'Multicentre international natural-history case series', stage: 'Discovery', src: [DIAZ] },
  ],
  gaps: [
    { text: 'No approved disease-modifying therapy and no registered interventional trials.', ev: 'unknown', src: [CHAPEL] },
    { text: 'No published point prevalence or birth incidence.', ev: 'unknown', src: [FERD_CLIN] },
    { text: 'Newborn screening via DBS C26:0-lysoPC may detect some cases but is not validated for DBP deficiency.', ev: 'unknown', src: [] },
    { text: 'Direct human neuropathological evidence for VLCFA lipotoxicity is limited.', ev: 'emerging', src: [FERD_CLIN] },
    { text: 'No validated outcome measures (e.g. DTI, MRI volumetrics) or natural-history registry for trial readiness.', ev: 'unknown', src: [DIAZ] },
    { text: 'No CSF or MRS biomarkers established.', ev: 'unknown', src: [] },
  ],
}
