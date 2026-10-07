import type { Disease, Gene, Source } from '../types'
import { geneDb, genereviews, lit, nord, omim, orpha } from '../cite'

const GR = 'gr:salla'
const NORD = 'nord:salla'
const VERHEIJEN = 'lit:salla:verheijen1999'
const AULA00 = 'lit:salla:aula2000'
const AULA02 = 'lit:salla:aula2002'
const VARHO = 'lit:salla:varho2002'
const MOCHEL = 'lit:salla:mochel2010'
const KLETA = 'lit:salla:kleta2003'
const MORSE = 'lit:salla:morse2005'
const BIANCHERI = 'lit:salla:biancheri2005'
const LANDAU = 'lit:salla:landau2004'
const SALOMAKI = 'lit:salla:salomaki2001'
const AULA06 = 'lit:salla:aula2006'
const TARAILO = 'lit:salla:tarailograovac2017'
const COUCE = 'lit:salla:couce2014'
const HARTLEY = 'lit:salla:hartley2013'
const HUIZING = 'lit:salla:huizing2021'
const STROOBANTS = 'lit:salla:stroobants2017'
const HARB = 'lit:salla:harb2023'
const SABIR = 'lit:salla:sabir2024'

export const sallaSources: Source[] = [
  genereviews('salla', 'NBK1396', 'Free Sialic Acid Storage Disorders'),
  omim('269920', 'Salla disease'),
  omim('269921', 'Infantile free sialic acid storage disease (ISSD)'),
  orpha('834', 'Salla disease'),
  orpha('309469', 'Infantile sialic acid storage disease'),
  nord('salla', 'salla-disease', 'Salla Disease'),
  lit(VERHEIJEN, 'Verheijen FW, Verbeek E, Aula N, et al.', 1999, 'A new gene, encoding an anion transporter, is mutated in sialic acid storage diseases', 'Nat Genet'),
  lit(AULA00, 'Aula N, Salomäki P, Timonen R, et al.', 2000, 'The Spectrum of SLC17A5-Gene Mutations Resulting in Free Sialic Acid-Storage Diseases Indicates Some Genotype-Phenotype Correlation', 'Am J Hum Genet'),
  lit(AULA02, 'Aula N, Jalanko A, Aula P, Peltonen L', 2002, 'Unraveling the molecular pathogenesis of free sialic acid storage disorders: altered targeting of mutant sialin', 'Mol Genet Metab'),
  lit(VARHO, 'Varho T, Alajoki L, Posti J, et al.', 2002, 'Phenotypic spectrum of Salla disease, a free sialic acid storage disorder', 'Pediatr Neurol'),
  lit(MOCHEL, 'Mochel F, Engelke UFH, Barritault J, et al.', 2010, 'Elevated CSF N-acetylaspartylglutamate in patients with free sialic acid storage diseases', 'Neurology'),
  lit(KLETA, 'Kleta R, Aughton DJ, Rivkin MJ, et al.', 2003, 'Biochemical and molecular analyses of infantile free sialic acid storage disease in North American children', 'Am J Med Genet A'),
  lit(MORSE, 'Morse RP, Kleta R, Alroy J, Gahl WA', 2005, 'Novel Form of Intermediate Salla Disease: Clinical and Neuroimaging Features', 'J Child Neurol'),
  lit(BIANCHERI, 'Biancheri R, Rossi A, Verbeek HA, et al.', 2005, 'Homozygosity for the p.K136E mutation in the SLC17A5 gene as cause of an Italian severe Salla disease', 'Neurogenetics'),
  lit(LANDAU, 'Landau D, Cohen S, Shalev H, et al.', 2004, 'A novel mutation in the SLC17A5 gene causing both severe and mild phenotypes of free sialic acid storage disease in one inbred Bedouin kindred', 'Mol Genet Metab'),
  lit(SALOMAKI, 'Salomäki P, Aula N, Juvonen V, Renlund M, Aula P', 2001, 'Prenatal detection of free sialic acid storage disease: genetic and biochemical studies in nine families', 'Prenat Diagn'),
  lit(AULA06, 'Aula N, Aula P', 2006, 'Prenatal diagnosis of free sialic acid storage disorders (SASD)', 'Prenat Diagn'),
  lit(TARAILO, 'Tarailo-Graovac M, Drögemöller BI, Wasserman WW, et al.', 2017, 'Identification of a large intronic transposal insertion in SLC17A5 causing sialic acid storage disease', 'Orphanet J Rare Dis'),
  lit(COUCE, 'Couce ML, Macías-Vidal J, Castiñeiras DE, et al.', 2014, 'The early detection of Salla disease through second-tier tests in newborn screening', 'Eur J Med Genet'),
  lit(HARTLEY, 'Hartley JN, Salman MS, Booth FA, et al.', 2013, 'Diagnostic challenges in Salla disease', 'Open J Genet'),
  lit(HUIZING, 'Huizing M, Hackbarth ME, Adams DR, et al.', 2021, 'Free sialic acid storage disorder: Progress and promise', 'Neurosci Lett', 'review'),
  lit(STROOBANTS, 'Stroobants S, Van Acker N, Verheijen FW, et al.', 2017, 'Progressive leukoencephalopathy impairs neurobehavioral development in sialin-deficient mice', 'Exp Neurol'),
  lit(HARB, 'Harb J, Christensen CL, Kan SH, et al.', 2023, 'Base editing corrects the common Salla disease SLC17A5 c.115C>T variant', 'Mol Ther Nucleic Acids'),
  lit(SABIR, 'Sabir MS, Leoyklang P, Hackbarth ME, et al.', 2024, 'Generation and characterization of two iPSC lines derived from subjects with Free sialic acid storage disorder (FSASD)', 'Stem Cell Res'),
]

export const sallaGenes: Gene[] = [
  {
    symbol: 'SLC17A5',
    name: 'Solute carrier family 17 member 5',
    protein: 'Sialin, lysosomal sialic acid/H+ co-transporter (495 aa, 12 transmembrane domains, MFS family)',
    location: '6q14.3',
    function:
      'Proton-coupled export of free sialic acid (Neu5Ac) from the lysosome after glycoprotein/glycolipid degradation, allowing its reuse. A neuronal aspartate/glutamate transport role has been proposed.',
    pathway: 'Lysosomal sialic acid recycling (glycan catabolism)',
    uniprot: 'Q9Y2D2',
    ncbiGene: '26503',
    variantTypes: ['Missense (most common, incl. founder p.Arg39Cys)', 'Nonsense', 'Frameshift indels', 'Splice-site', 'Exon deletions', 'Large intronic LINE-1 insertion'],
    diseases: ['salla'],
    ev: 'established',
    src: [VERHEIJEN, AULA00, GR, ...geneDb('SLC17A5')],
  },
]

const TX = 'Not specified in source'
const BUILD = 'Not specified'

export const salla: Disease = {
  id: 'salla',
  name: 'Salla Disease (Free Sialic Acid Storage Disorder)',
  short: 'Salla',
  lastUpdated: '2026-10-08',
  color: '#a85a8c',
  synonyms: [
    'Free sialic acid storage disorder (FSASD)',
    'Infantile sialic acid storage disease (ISSD, severe allelic form)',
    'Intermediate sialic acid storage disease',
    'Lysosomal free sialic acid storage disease',
    'N-acetylneuraminic acid storage disease',
  ],
  classification: 'Lysosomal storage disorder (transporter defect); hypomyelinating leukodystrophy',
  inheritance: 'Autosomal recessive',
  genes: ['SLC17A5'],
  tagline: 'Loss of the lysosomal sialic acid exporter sialin → free sialic acid storage → hypomyelination and progressive neurological impairment.',
  identifiers: [
    { label: 'OMIM', value: '269920', url: 'https://www.omim.org/entry/269920' },
    { label: 'OMIM (ISSD)', value: '269921', url: 'https://www.omim.org/entry/269921' },
    { label: 'Orphanet', value: 'ORPHA:834', url: 'https://www.orpha.net/en/disease/detail/834' },
    { label: 'GeneReviews', value: 'NBK1396', url: 'https://www.ncbi.nlm.nih.gov/books/NBK1396/' },
    { label: 'MONDO', value: 'search', url: 'https://monarchinitiative.org/search?q=Salla%20disease' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Biallelic pathogenic SLC17A5 variants cause loss of sialin, the lysosomal free sialic acid exporter.', ev: 'established', why: 'Gene identified by positional cloning; confirmed across cohorts.', src: [VERHEIJEN, AULA00, 'omim:269920'] },
    { label: 'Hallmark metabolite', text: 'Free (unconjugated) sialic acid accumulates in lysosomes and is excreted in urine (sialuria).', ev: 'established', src: [GR, KLETA] },
    { label: 'Disease spectrum', text: 'FSASD continuum from mild Salla disease through intermediate FSASD to severe infantile sialic acid storage disease (ISSD).', ev: 'established', src: [AULA00, MORSE, 'omim:269921', 'orpha:309469'] },
    { label: 'Clinical triad', text: 'Intellectual disability, progressive motor impairment (ataxia, spasticity) and hypomyelination with a thin corpus callosum.', ev: 'established', src: [VARHO, HUIZING] },
  ],
  clinical: [
    { label: 'Age of onset', text: 'Infancy (hypotonia, developmental delay, nystagmus) in Salla disease; neonatal in ISSD, sometimes with hydrops fetalis.', ev: 'established', src: [VARHO, AULA00] },
    { label: 'Neurological features', text: 'Mild to profound intellectual disability, ataxia, spasticity, hypotonia, dysarthria or absent speech, behavioural disturbance; epilepsy in ~50%.', ev: 'established', src: [VARHO, HUIZING] },
    { label: 'Systemic features', text: 'ISSD adds hepatosplenomegaly, coarse facies and cardiomegaly.', ev: 'established', src: [AULA00, KLETA] },
    { label: 'Progression', text: 'Slowly progressive in Salla disease; most patients are non-ambulant or severely motor-impaired by adulthood.', ev: 'established', src: [VARHO] },
    { label: 'Prognosis', text: 'Survival to the 3rd–5th decade in Salla disease; variable in intermediate FSASD; death in the first years of life in ISSD.', ev: 'strong', why: 'Derived from case series rather than prospective cohorts.', src: [AULA00, VARHO, KLETA] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Ultra-rare; about 200 FSASD cases reported worldwide, suggesting underdiagnosis.', ev: 'emerging', why: 'Estimate from a review; no global registry.', src: [HUIZING, 'orpha:834'] },
    { label: 'Founder population', text: 'Most prevalent in northern Finland (estimated ~1/40,000 in Finns), due to a founder effect.', ev: 'established', src: [AULA00, GR] },
    { label: 'Founder variant', text: 'p.Arg39Cys accounts for the vast majority of Finnish Salla alleles.', ev: 'established', src: [AULA00, VERHEIJEN] },
    { label: 'Other populations', text: 'ISSD and intermediate FSASD reported in North American, Bedouin, Italian, Swedish and other populations.', ev: 'strong', src: [KLETA, LANDAU, BIANCHERI] },
    { label: 'Sex distribution', text: 'Equal sex distribution, as expected for autosomal recessive inheritance.', ev: 'established', src: [GR] },
  ],
  variants: [
    { id: 'salla-r39c', disease: 'salla', gene: 'SLC17A5', transcript: TX, hgvsc: 'c.115C>T', hgvsp: 'p.(Arg39Cys)', legacy: 'R39C', build: BUILD, type: 'Missense', consequence: 'Slower lysosomal targeting with residual transport activity', clinvar: 'Not curated (verify in ClinVar)', popFreq: 'Finnish founder; vast majority of Finnish alleles', phenotype: 'Salla disease (homozygous); intermediate FSASD with a severe second allele', functional: 'Partial lysosomal localisation and measurable residual transport', ev: 'established', why: 'Founder allele with consistent genotype-phenotype and functional data.', src: [AULA00, AULA02, VERHEIJEN, 'db:clinvar:SLC17A5'] },
    { id: 'salla-k136e', disease: 'salla', gene: 'SLC17A5', transcript: TX, hgvsc: 'c.406A>G', hgvsp: 'p.(Lys136Glu)', legacy: 'K136E', build: BUILD, type: 'Missense', consequence: 'Severe mislocalisation; markedly reduced transport', clinvar: 'Not curated (verify in ClinVar)', popFreq: 'Reported in an Italian family', phenotype: 'Severe Salla disease (homozygous)', functional: 'Protein fails to reach lysosomes efficiently', ev: 'strong', why: 'Functional data, but a single family.', src: [BIANCHERI, 'db:clinvar:SLC17A5'] },
    { id: 'salla-g328e', disease: 'salla', gene: 'SLC17A5', transcript: TX, hgvsc: 'c.983G>A', hgvsp: 'p.(Gly328Glu)', legacy: 'G328E', build: BUILD, type: 'Missense', consequence: 'Loss of function (variable expression)', clinvar: 'Not curated (verify in ClinVar)', popFreq: 'Inbred Bedouin kindred', phenotype: 'Both severe and mild FSASD within one kindred', functional: 'Not reported', ev: 'emerging', why: 'Single kindred; intrafamilial variability implies modifiers.', src: [LANDAU, 'db:clinvar:SLC17A5'] },
    { id: 'salla-del15', disease: 'salla', gene: 'SLC17A5', transcript: TX, hgvsc: 'del801-815 (15-bp deletion, as reported)', legacy: '15-bp deletion; also exon 9 deletions', build: BUILD, type: 'Deletion', consequence: 'Predicted null / severe', clinvar: 'Not curated (verify in ClinVar)', popFreq: 'Multiple ISSD / intermediate families', phenotype: 'ISSD or intermediate FSASD', functional: 'Predicted severe loss of function', ev: 'strong', src: [KLETA, AULA00] },
    { id: 'salla-y306x', disease: 'salla', gene: 'SLC17A5', transcript: TX, hgvsc: 'c.918C>G', hgvsp: 'p.(Tyr306Ter)', build: BUILD, type: 'Nonsense', consequence: 'Premature stop; predicted null', clinvar: 'Not curated (verify in ClinVar)', popFreq: 'Non-Finnish patient', phenotype: 'ISSD / Salla disease (as reported)', functional: 'Predicted loss of transport', ev: 'emerging', why: 'Single report.', src: [COUCE] },
    { id: 'salla-l167p', disease: 'salla', gene: 'SLC17A5', transcript: TX, hgvsc: 'Not reported', hgvsp: 'p.(Leu167Pro)', build: BUILD, type: 'Missense', consequence: 'Predicted loss of transport', clinvar: 'Not curated (verify in ClinVar)', popFreq: 'Non-Finnish patient', phenotype: 'FSASD', functional: 'Not reported', ev: 'emerging', why: 'Single report.', src: [COUCE] },
    { id: 'salla-line1', disease: 'salla', gene: 'SLC17A5', transcript: TX, hgvsc: 'Intronic LINE-1 insertion (nomenclature not reported)', build: BUILD, type: 'Structural (intronic transposon insertion)', consequence: 'Disrupts splicing', clinvar: 'Not curated', popFreq: 'Single Swedish patient', phenotype: 'Sialic acid storage disease', functional: 'Disease without a coding mutation; missed by exon sequencing', ev: 'emerging', why: 'Single case, but mechanistically characterised.', src: [TARAILO] },
  ],
  genotypePhenotype: [
    { aspect: 'Severity', finding: 'Homozygous p.Arg39Cys gives mild Salla disease; p.Arg39Cys with a severe allele gives intermediate FSASD; biallelic null alleles give ISSD.', ev: 'strong', why: 'Molecular genetics and functional trafficking studies.', src: [AULA00, AULA02, KLETA] },
    { aspect: 'Clinical phenotype', finding: 'Mislocalising alleles such as p.Lys136Glu cause severe disease even in otherwise Salla-type presentations.', ev: 'strong', src: [BIANCHERI] },
    { aspect: 'Progression', finding: 'Homozygous p.Gly328Glu produced both severe and mild disease within one kindred, so genotype alone does not predict course.', ev: 'emerging', why: 'Single kindred.', src: [LANDAU] },
    { aspect: 'MRI phenotype', finding: 'MRI severity broadly tracks clinical severity (ISSD > intermediate > Salla).', ev: 'strong', src: [AULA00, MORSE] },
    { aspect: 'Biomarker levels', finding: 'Urinary free sialic acid correlates roughly with severity and may be only modestly raised in mild Salla disease.', ev: 'strong', src: [GR, KLETA] },
    { aspect: 'Survival / outcome', finding: 'Salla disease survives to adulthood; ISSD is fatal in early childhood.', ev: 'established', src: [AULA00, VARHO] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'SLC17A5 (6q14.3)', detail: 'Biallelic loss-of-function variants; Finnish founder p.Arg39Cys.', ev: 'established', src: [VERHEIJEN, AULA00] },
    { stage: 'Protein', label: 'Sialin', detail: 'Mutant transporter is retained in ER/Golgi or reaches lysosomes slowly.', ev: 'strong', src: [AULA02, 'db:uniprot:SLC17A5'] },
    { stage: 'Molecular function', label: 'Sialic acid export fails', detail: 'Free Neu5Ac released by lysosomal sialidases cannot exit the lysosome.', ev: 'established', src: [VERHEIJEN, AULA02] },
    { stage: 'Pathway', label: 'Lysosomal storage', detail: 'Free sialic acid accumulates; enlarged storage vacuoles; overflow into urine.', ev: 'established', src: [GR] },
    { stage: 'Cellular consequence', label: 'Oligodendrocyte & neuronal dysfunction', detail: 'Impaired myelination; sialin-deficient mice develop progressive leukoencephalopathy.', ev: 'strong', src: [STROOBANTS, AULA02] },
    { stage: 'Phenotype', label: 'Hypomyelinating leukodystrophy', detail: 'Intellectual disability, ataxia/spasticity, thin corpus callosum.', ev: 'established', src: [VARHO, HUIZING] },
  ],
  relations: [
    { from: ['gene', 'SLC17A5'], to: ['protein', 'Sialin'], label: 'encodes', ev: 'established', why: 'Positional cloning and expression studies.', src: [VERHEIJEN] },
    { from: ['protein', 'Sialin'], to: ['metabolite', 'Lysosomal free sialic acid'], label: 'loss causes accumulation', ev: 'established', why: 'Diagnostic hallmark in every confirmed case.', src: [VERHEIJEN, GR] },
    { from: ['metabolite', 'Lysosomal free sialic acid'], to: ['biomarker', 'Urinary free sialic acid'], label: 'measured as', ev: 'established', why: 'Standard diagnostic assay.', src: [GR, KLETA] },
    { from: ['metabolite', 'Lysosomal free sialic acid'], to: ['cell', 'Oligodendrocytes'], label: 'impairs', ev: 'strong', why: 'Mouse model leukoencephalopathy and human hypomyelination.', src: [STROOBANTS, AULA02] },
    { from: ['cell', 'Oligodendrocytes'], to: ['phenotype', 'Hypomyelination'], label: 'drives', ev: 'strong', why: 'Consistent MRI and animal-model data.', src: [STROOBANTS, VARHO] },
    { from: ['gene', 'SLC17A5'], to: ['phenotype', 'Thin corpus callosum'], label: 'loss associated with', ev: 'strong', why: 'Frequently reported characteristic MRI feature.', src: [VARHO, MORSE] },
    { from: ['gene', 'SLC17A5'], to: ['biomarker', 'CSF NAAG'], label: 'loss associated with', ev: 'emerging', why: 'Single CSF metabolite study; mechanism unclear.', src: [MOCHEL] },
    { from: ['therapy', 'Adenine base editing of p.R39C'], to: ['gene', 'SLC17A5'], label: 'corrects', ev: 'emerging', why: 'In vitro correction in patient fibroblasts and mouse cells.', src: [HARB] },
  ],
  cells: [
    { cell: 'Oligodendrocytes', role: 'primary', detail: 'Lysosomal storage impairs myelin synthesis and maintenance; hypomyelination.', ev: 'strong', src: [STROOBANTS, AULA02] },
    { cell: 'Neurons / axons', role: 'primary', detail: 'Sialin is highly expressed in brain neurons; storage contributes to neurodegeneration and intellectual disability.', ev: 'strong', src: [AULA02, 'db:hpa:SLC17A5'] },
    { cell: 'Non-CNS tissue', role: 'secondary', detail: 'Storage vacuoles in fibroblasts and lymphocytes; organomegaly and cardiomegaly in ISSD.', ev: 'established', src: [GR, KLETA] },
  ],
  regions: [
    { region: 'Supratentorial white matter', finding: 'Diffuse hypomyelination on T2/FLAIR.', src: [VARHO, MORSE] },
    { region: 'Corpus callosum', finding: 'Thinning or hypoplasia; possibly the most distinctive structural feature.', src: [VARHO, MORSE] },
    { region: 'Cerebellum', finding: 'Variable atrophy in some patients.', src: [VARHO] },
    { region: 'Basal ganglia', finding: 'Generally spared early; possible signal change in severe cases.', src: [AULA00, MORSE] },
  ],
  biomarkers: [
    { name: 'Urinary free sialic acid', category: 'Biochemical', significance: 'Primary diagnostic readout of the transport block.', sample: 'Urine', assay: 'HPLC or thin-layer chromatography; quantitative assay', purpose: ['Diagnosis', 'Screening'], status: 'Established clinical', limitations: 'May be only modestly elevated in mild Salla disease.', ev: 'established', src: [GR, KLETA] },
    { name: 'Lysosomal free sialic acid', category: 'Biochemical', significance: 'Confirms storage when urine results are borderline; used prenatally.', sample: 'Cultured fibroblasts; chorionic villi', assay: 'Lysosomal fraction sialic acid quantification', purpose: ['Diagnosis', 'Prenatal diagnosis'], status: 'Established clinical', limitations: 'Specialised laboratories; amniotic fluid assays less reliable.', ev: 'established', src: [SALOMAKI, AULA06] },
    { name: 'CSF NAAG', category: 'Biochemical', significance: 'Elevated N-acetylaspartylglutamate may indicate neurological involvement.', sample: 'CSF', assay: 'CSF metabolite profiling', purpose: ['Diagnosis'], status: 'Experimental', limitations: 'Not validated; sensitivity and specificity unknown.', ev: 'emerging', src: [MOCHEL] },
    { name: 'Corpus callosum thinning / hypomyelination (MRI)', category: 'Imaging', significance: 'Characteristic structural pattern aiding diagnosis.', sample: 'In vivo brain', assay: 'Brain MRI', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'Non-specific among hypomyelinating disorders.', ev: 'strong', src: [VARHO, MORSE] },
    { name: 'Newborn screening (second-tier urine sialic acid)', category: 'Biochemical', significance: 'Can detect elevated sialic acid in the newborn period.', sample: 'Urine', assay: 'Second-tier metabolite testing', purpose: ['Screening'], status: 'Experimental', limitations: 'Borderline results and ethical issues; molecular confirmation required.', ev: 'emerging', src: [COUCE, HARTLEY] },
    { name: 'SLC17A5 genotype', category: 'Genetic', significance: 'Biallelic pathogenic variants are definitive.', sample: 'Blood (DNA)', assay: 'Targeted p.Arg39Cys genotyping, gene sequencing, expanded structural analysis', purpose: ['Diagnosis', 'Carrier testing', 'Prenatal diagnosis'], status: 'Established clinical', limitations: 'Intronic structural variants missed by exon sequencing.', ev: 'established', src: [GR, TARAILO] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Infantile hypotonia, developmental delay, nystagmus, ataxia; neonatal organomegaly or hydrops in ISSD.', src: [VARHO, GR] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain MRI', detail: 'Diffuse hypomyelination with thin or hypoplastic corpus callosum.', src: [VARHO, MORSE] },
    { phase: 'Investigation', category: 'Biochemical', method: 'Urine free sialic acid', detail: 'Elevated free sialic acid; specific quantitative assay needed to avoid missing mild cases.', src: [GR, HARTLEY] },
    { phase: 'Confirmation', category: 'Genetic', method: 'SLC17A5 sequencing (p.Arg39Cys first in Finns)', detail: 'Biallelic pathogenic variants; if negative, analyse deep intronic/structural variants or use exome.', src: [GR, HUIZING, TARAILO] },
    { phase: 'Confirmation', category: 'Biochemical', method: 'Fibroblast lysosomal sialic acid', detail: 'Used when molecular testing is inconclusive.', src: [GR] },
    { phase: 'Confirmation', category: 'Prenatal', method: 'CVS molecular or biochemical testing', detail: 'Familial variants or lysosomal sialic acid in chorionic villi; carrier testing of parents.', src: [SALOMAKI, AULA06] },
  ],
  differential: [
    'Fucosidosis and GM2 gangliosidoses',
    'Hypomyelinating leukodystrophies (PMD, PMLD, POLR3-related)',
    'Sialidosis (NEU1 deficiency)',
    'Organic acid disorders with white matter involvement',
  ],
  phenotypes: {
    applicable: true,
    note: 'The free sialic acid storage disorders form an allelic continuum; three tiers are consistently described.',
    forms: [
      { name: 'Salla disease (classical / mild)', onset: 'Infancy', severity: 'Mild–moderate intellectual disability; ataxia and spasticity', progression: 'Slowly progressive; survival to 3rd–5th decade', genetics: 'Homozygous p.Arg39Cys (Finnish)', markers: 'Elevated urine sialic acid (may be modest); hypomyelination; thin corpus callosum', src: [VARHO, AULA00] },
      { name: 'Intermediate FSASD', onset: 'Early infancy', severity: 'Moderate–severe; non-ambulant early', progression: 'Variable (teens to adult)', genetics: 'p.Arg39Cys with a severe allele; other mixed genotypes', markers: 'Prominent hypomyelination; elevated urine sialic acid', src: [MORSE, KLETA] },
      { name: 'ISSD (severe)', onset: 'Neonatal; hydrops fetalis possible', severity: 'Profound; organomegaly, coarse facies, cardiomegaly', progression: 'Rapid; death in first years of life', genetics: 'Biallelic null or severely mislocalising alleles', markers: 'Markedly elevated urine sialic acid; extensive hypomyelination', src: [VERHEIJEN, KLETA] },
    ],
  },
  management: [
    { category: 'Symptomatic', text: 'Anti-seizure medication guided by seizure type and EEG.', src: [GR, HUIZING] },
    { category: 'Symptomatic', text: 'Spasticity: physiotherapy, orthotics, baclofen, botulinum toxin; intrathecal baclofen in severe cases.', src: [GR] },
    { category: 'Supportive', text: 'Feeding support with gastrostomy if needed; nutritional monitoring.', src: [GR] },
    { category: 'Supportive', text: 'Physiotherapy, occupational therapy, AAC for non-verbal patients and special education.', src: [GR, NORD] },
    { category: 'Monitoring', text: 'Neurological, developmental and ophthalmological review; spine and hip surveillance in non-ambulant patients.', src: [GR] },
    { category: 'Supportive', text: 'Genetic counselling (25% recurrence risk), carrier testing and prenatal diagnosis.', src: [GR, SALOMAKI] },
  ],
  therapies: [
    { id: 'salla-abe', name: 'Adenine base editing of p.R39C', modality: 'Gene editing', target: 'SLC17A5 c.115C>T', mechanism: 'Adenine base editor reverts the founder variant, reducing free sialic acid storage without detectable indels.', delivery: 'Ex vivo / in vitro (delivery for patients not established)', stage: 'Preclinical (cellular)', evidenceBase: 'Cellular', status: 'In vitro proof-of-concept; no in vivo or IND-enabling data', ev: 'emerging', why: 'Patient fibroblasts and mouse cells only.', src: [HARB] },
    { id: 'salla-ipsc', name: 'iPSC drug-screening platform', modality: 'Other', target: 'Sialic acid storage phenotype', mechanism: 'Patient iPSC-derived neural cells recapitulate storage for compound screening.', delivery: 'Research platform', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Cell lines available; no drug identified', ev: 'emerging', why: 'Two lines characterised; no therapeutic hit yet.', src: [SABIR] },
  ],
  trials: [],
  milestones: [
    { year: 1999, label: 'SLC17A5 (sialin) identified as the disease gene', stage: 'Discovery', src: [VERHEIJEN] },
    { year: 2000, label: 'Mutation spectrum and genotype-phenotype correlation defined', stage: 'Discovery', src: [AULA00] },
    { year: 2002, label: 'Altered lysosomal targeting of mutant sialin shown', stage: 'Preclinical (cellular)', src: [AULA02] },
    { year: 2010, label: 'Elevated CSF NAAG reported', stage: 'Discovery', src: [MOCHEL] },
    { year: 2017, label: 'Sialin-deficient mice show progressive leukoencephalopathy', stage: 'Animal studies', src: [STROOBANTS] },
    { year: 2023, label: 'Base editing corrects p.R39C in patient cells', stage: 'Preclinical (cellular)', src: [HARB] },
    { year: 2024, label: 'Patient iPSC lines generated', stage: 'Preclinical (cellular)', src: [SABIR] },
  ],
  gaps: [
    { text: 'In vivo validation of base editing and a delivery route to the CNS have not been reported.', ev: 'unknown', src: [HARB] },
    { text: 'No natural-history study or registry to support trial design.', ev: 'unknown', src: [HUIZING] },
    { text: 'Urine sialic acid and CSF NAAG assays need standardisation and validation.', ev: 'emerging', src: [MOCHEL, HUIZING] },
    { text: 'Whether neuronal aspartate/glutamate transport by sialin contributes to human disease is unresolved.', ev: 'proposed', src: [] },
    { text: 'Modifier factors explaining intrafamilial variability are unidentified.', ev: 'unknown', src: [LANDAU] },
    { text: 'Human neuropathology and MRS data are limited.', ev: 'unknown', src: [] },
  ],
}
