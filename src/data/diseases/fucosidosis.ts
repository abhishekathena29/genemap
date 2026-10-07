import type { Disease, Gene, Source } from '../types'
import { geneDb, genereviews, lit, nord, omim, orpha } from '../cite'

const GR = 'gr:fucosidosis'
const NORD = 'nord:fucosidosis'
const WILLEMS91 = 'lit:fucosidosis:willems1991'
const WILLEMS88 = 'lit:fucosidosis:willems1988'
const WILLEMS99 = 'lit:fucosidosis:willems1999'
const PANMONTHA = 'lit:fucosidosis:panmontha2016'
const WALI = 'lit:fucosidosis:wali2019'
const FLETCHER = 'lit:fucosidosis:fletcher2016'
const TIBERIO = 'lit:fucosidosis:tiberio1995'
const WILLIAMSON = 'lit:fucosidosis:williamson1993'
const CRAGG = 'lit:fucosidosis:cragg1997'
const KILIC = 'lit:fucosidosis:kilic2025'
const AKAGI = 'lit:fucosidosis:akagi1999'
const SALEH = 'lit:fucosidosis:salehgohari2018'
const DOMIN = 'lit:fucosidosis:domin2021'
const ZHANG = 'lit:fucosidosis:zhang2021'
const CHKIOUA = 'lit:fucosidosis:chkioua2021'
const WOLF = 'lit:fucosidosis:wolf2016'
const WOLFTHESIS = 'lit:fucosidosis:wolf2016thesis'
const STROOBANTS = 'lit:fucosidosis:stroobants2018'
const PENA = 'lit:fucosidosis:pena2025'
const JIANG = 'lit:fucosidosis:jiang2017'
const KONDAGARI = 'lit:fucosidosis:kondagari2015'

export const fucosidosisSources: Source[] = [
  genereviews('fucosidosis', 'NBK1471', 'Fucosidosis'),
  omim('230000', 'Fucosidosis'),
  orpha('349', 'Fucosidosis'),
  nord('fucosidosis', 'fucosidosis', 'Fucosidosis'),
  lit(WILLEMS91, 'Willems PJ, Gatti R, Darby JK, et al.', 1991, 'Fucosidosis revisited: a review of 77 patients', 'Am J Med Genet', 'review'),
  lit(WILLEMS88, 'Willems PJ, Darby JK, DiCioccio RA, et al.', 1988, 'Identification of a mutation in the structural alpha-L-fucosidase gene in fucosidosis', 'Am J Hum Genet'),
  lit(WILLEMS99, 'Willems P, Seo HC, Coucke P, Tonlorenzi R, O\'Brien JS', 1999, 'Spectrum of mutations in fucosidosis', 'Eur J Hum Genet'),
  lit(PANMONTHA, 'Panmontha W, Amarinthnukrowh P, Damrongphol P, et al.', 2016, 'Novel mutations in the FUCA1 gene that cause fucosidosis', 'Genet Mol Res'),
  lit(WALI, 'Wali G, Sue CM, Kumar KR', 2019, 'A Novel Homozygous Mutation in the FUCA1 Gene Highlighting Fucosidosis as a Cause of Dystonia: Case Report and Literature Review', 'Neuropediatrics'),
  lit(FLETCHER, 'Fletcher JL, Taylor RM', 2016, 'Therapy Development for the Lysosomal Storage Disease Fucosidosis using the Canine Animal Model', 'Pediatr Endocrinol Rev', 'review'),
  lit(TIBERIO, 'Tiberio G, Filocamo M, Gatti R, Durand P', 1995, 'Mutations in Fucosidosis Gene: a Review', 'Acta Genet Med Gemellol', 'review'),
  lit(WILLIAMSON, 'Williamson M, Cragg H, Grant J, et al.', 1993, "A 5' splice site mutation in fucosidosis", 'J Med Genet'),
  lit(CRAGG, 'Cragg H, Williamson M, Young E, et al.', 1997, 'Fucosidosis: genetic and biochemical analysis of eight cases', 'J Med Genet'),
  lit(KILIC, 'Kiliç M, Yıldız H', 2025, 'Novel FUCA1 variants in two families, including the first report of a contiguous gene deletion syndrome involving FUCA1 and HMGCL', 'Turk J Pediatr'),
  lit(AKAGI, 'Akagi M, Inui K, Nishigaki T, et al.', 1999, 'Mutation analysis of a Japanese patient with fucosidosis', 'J Hum Genet'),
  lit(SALEH, 'Saleh-Gohari N, Saeidi K, Zeighaminejad R', 2018, 'A novel homozygous frameshift mutation in the FUCA1 gene causes both severe and mild fucosidosis', 'J Clin Pathol'),
  lit(DOMIN, 'Domin A, Zabek T, Kwiatkowska A, et al.', 2021, 'The Identification of a Novel Fucosidosis-Associated FUCA1 Mutation: A Case of a 5-Year-Old Polish Girl with Two Additional Rare Chromosomal Aberrations and Affected DNA Methylation Patterns', 'Genes'),
  lit(ZHANG, 'Zhang X, Zhao S, Liu H, et al.', 2021, 'Identification of a novel homozygous loss-of-function mutation in FUCA1 gene causing severe fucosidosis: A case report', 'J Int Med Res'),
  lit(CHKIOUA, 'Chkioua L, Amri Y, Saheli C, et al.', 2021, 'Fucosidosis in Tunisian patients: mutational analysis and homology-based modeling of FUCA1 enzyme', 'BMC Med Genomics'),
  lit(WOLF, 'Wolf H, Damme M, Stroobants S, et al.', 2016, 'A mouse model for fucosidosis recapitulates storage pathology and neurological features of the milder form of the human disease', 'Dis Model Mech'),
  lit(WOLFTHESIS, 'Wolf H', 2016, 'The lysosomal storage disease fucosidosis: towards enzyme replacement therapy', 'Doctoral thesis'),
  lit(STROOBANTS, 'Stroobants S, Wolf H, Callaerts-Vegh Z, et al.', 2018, 'Sensorimotor and Neurocognitive Dysfunctions Parallel Early Telencephalic Neuropathology in Fucosidosis Mice', 'Front Behav Neurosci'),
  lit(PENA, 'Peña MJdl, López-Martín S, Fernández-Mayoralas DM, et al.', 2025, 'Early Severe Cortical Involvement and Novel FUCA1 Mutations in a Pediatric Fucosidosis Case', 'Mol Genet Genomic Med'),
  lit(JIANG, 'Jiang X, Liu Y, Jiang L, et al.', 2017, 'Brain abnormalities in fucosidosis: transplantation or supportive therapy?', 'Metab Brain Dis'),
  lit(KONDAGARI, 'Kondagari GS, Fletcher JL, Cruz M, et al.', 2015, 'The effects of intracisternal enzyme replacement versus sham treatment on central neuropathology in preclinical canine fucosidosis', 'Orphanet J Rare Dis'),
]

export const fucosidosisGenes: Gene[] = [
  {
    symbol: 'FUCA1',
    name: 'Alpha-L-fucosidase 1',
    protein: 'Lysosomal alpha-L-fucosidase (EC 3.2.1.51), homotetrameric glycoside hydrolase',
    location: '1p34.1–36.1',
    function:
      'Cleaves terminal α(1→2), (1→3), (1→4) and (1→6) fucose residues from fucosylated oligosaccharides, glycoproteins and glycolipids in the lysosome. Eight exons encode a 461-aa precursor.',
    pathway: 'Lysosomal glycoprotein / oligosaccharide catabolism',
    transcript: 'NM_000147',
    uniprot: 'P04066',
    ncbiGene: '2517',
    variantTypes: ['Missense', 'Nonsense', 'Frameshift indels', 'Splice-site', 'Large intragenic / contiguous deletions'],
    diseases: ['fucosidosis'],
    ev: 'established',
    src: [WILLEMS88, WILLEMS99, PANMONTHA, 'omim:230000', ...geneDb('FUCA1')],
  },
]

const TX = 'NM_000147'
const BUILD = 'Not specified'
const CV = 'Not curated (verify in ClinVar)'

export const fucosidosis: Disease = {
  id: 'fucosidosis',
  name: 'Fucosidosis',
  short: 'Fucosidosis',
  lastUpdated: '2026-10-08',
  color: '#6f8f3a',
  synonyms: ['Alpha-L-fucosidase deficiency', 'Fucosidosis type I (historical)', 'Fucosidosis type II (historical)'],
  classification: 'Lysosomal storage disorder (glycoproteinosis) with secondary leukodystrophy',
  inheritance: 'Autosomal recessive',
  genes: ['FUCA1'],
  tagline: 'Loss of lysosomal alpha-L-fucosidase → fucosylated glycoconjugate storage → neurodegeneration, white matter disease and angiokeratoma.',
  identifiers: [
    { label: 'OMIM', value: '230000', url: 'https://www.omim.org/entry/230000' },
    { label: 'Orphanet', value: 'ORPHA:349', url: 'https://www.orpha.net/en/disease/detail/349' },
    { label: 'GeneReviews', value: 'NBK1471', url: 'https://www.ncbi.nlm.nih.gov/books/NBK1471/' },
    { label: 'MONDO', value: 'MONDO:0009462', url: 'https://monarchinitiative.org/MONDO:0009462' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Biallelic loss-of-function FUCA1 variants cause absent or severely reduced lysosomal alpha-L-fucosidase activity.', ev: 'established', why: 'Enzyme deficiency and FUCA1 variants confirmed across many families.', src: [WILLEMS88, WILLEMS99, 'omim:230000'] },
    { label: 'Stored material', text: 'Fucosylated glycoasparagines, oligosaccharides, H-antigen glycolipids and glycoproteins accumulate in lysosomes.', ev: 'established', src: [WOLF, WILLEMS91] },
    { label: 'Core pathology', text: 'Lysosomal vacuolation in neurons, glia, viscera, vascular endothelium and skin, with secondary white matter disease.', ev: 'strong', why: 'Human imaging plus mouse neuropathology; human neuropathology series are limited.', src: [WOLF, WALI, PENA] },
    { label: 'Clinical spectrum', text: 'Historical Type I / Type II split is superseded by a continuous spectrum.', ev: 'strong', src: [WILLEMS91] },
  ],
  clinical: [
    { label: 'Age of onset', text: 'Neonatal to later childhood; most severe cases regress within the first two years.', ev: 'established', src: [WILLEMS91] },
    { label: 'Neurological features', text: 'Intellectual deterioration (~95%), motor deterioration (~87%), seizures, spasticity, dysarthria; dystonia reported.', ev: 'established', why: 'Frequencies from a 77-patient review.', src: [WILLEMS91, WALI] },
    { label: 'Systemic features', text: 'Angiokeratoma corporis diffusum (~52%), coarse facies, hepatosplenomegaly and dysostosis multiplex.', ev: 'established', src: [WILLEMS91] },
    { label: 'Imaging', text: 'White matter T2 hyperintensity, hypomyelination, thin corpus callosum and progressive cerebral and cerebellar atrophy.', ev: 'strong', src: [WALI, PENA, JIANG] },
    { label: 'Prognosis', text: 'Death in childhood in severe cases; survival into the second or third decade in milder courses, rarely adulthood.', ev: 'established', src: [WILLEMS91, WALI] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Ultra-rare, below 1 in 200,000 live births; about 150–200 cases described worldwide.', ev: 'emerging', why: 'Case series and historical reviews; no population registry.', src: [WILLEMS91, TIBERIO, 'orpha:349'] },
    { label: 'Clustering', text: 'Higher incidence in parts of Italy (Calabria), some Hispanic-American communities and consanguineous Middle Eastern and South Asian families.', ev: 'strong', src: [WILLEMS91, TIBERIO, CHKIOUA] },
    { label: 'Carrier frequency', text: 'Unknown population-wide; elevated in genetically isolated populations.', ev: 'unknown', src: [TIBERIO] },
    { label: 'Sex distribution', text: 'No sex predilection, as expected for autosomal recessive inheritance.', ev: 'established', src: [WILLEMS91] },
  ],
  variants: [
    { id: 'fucosidosis-q422x', disease: 'fucosidosis', gene: 'FUCA1', transcript: TX, hgvsc: 'Not reported', hgvsp: 'p.(Gln422Ter)', legacy: 'Q422X', build: BUILD, type: 'Nonsense', consequence: 'Premature stop; loss of function', clinvar: CV, popFreq: 'Reported in several families', phenotype: 'Fucosidosis', functional: 'Predicted null', ev: 'strong', why: 'Recurrent in mutation-spectrum study.', src: [WILLEMS99, 'db:clinvar:FUCA1'] },
    { id: 'fucosidosis-w148x', disease: 'fucosidosis', gene: 'FUCA1', transcript: TX, hgvsc: 'Not reported', hgvsp: 'p.(Trp148Ter)', legacy: 'W148X', build: BUILD, type: 'Nonsense', consequence: 'Premature stop; loss of function', clinvar: CV, popFreq: 'Multiple families', phenotype: 'Fucosidosis', functional: 'Predicted null', ev: 'strong', why: 'Reported in multiple families.', src: [WILLEMS99, 'db:clinvar:FUCA1'] },
    { id: 'fucosidosis-g60d', disease: 'fucosidosis', gene: 'FUCA1', transcript: TX, hgvsc: 'Not reported', hgvsp: 'p.(Gly60Asp)', legacy: 'G60D (as reported)', build: BUILD, type: 'Missense', consequence: 'Loss of enzyme activity', clinvar: CV, popFreq: 'Early molecular studies', phenotype: 'Fucosidosis', functional: 'Not reported', ev: 'emerging', why: 'Nomenclature as listed in an early report; not re-verified.', src: [WILLEMS88] },
    { id: 'fucosidosis-670delc', disease: 'fucosidosis', gene: 'FUCA1', transcript: TX, hgvsc: 'c.670delC', build: BUILD, type: 'Frameshift', consequence: 'Frameshift; loss of function', clinvar: CV, popFreq: 'Case series', phenotype: 'Fucosidosis', functional: 'Predicted null', ev: 'emerging', why: 'Small case series.', src: [CRAGG] },
    { id: 'fucosidosis-1261splice', disease: 'fucosidosis', gene: 'FUCA1', transcript: TX, hgvsc: 'c.1261-1G>A (as reported)', build: BUILD, type: 'Splice-site', consequence: 'Aberrant splicing', clinvar: CV, popFreq: 'Case series', phenotype: 'Fucosidosis', functional: 'Splice-site disruption', ev: 'emerging', why: "Source paper describes a 5' splice-site mutation; exact HGVS needs verification.", src: [WILLIAMSON] },
    { id: 'fucosidosis-k282fs', disease: 'fucosidosis', gene: 'FUCA1', transcript: TX, hgvsc: 'c.844_845delAA', hgvsp: 'p.(Lys282ValfsTer17)', build: BUILD, type: 'Frameshift', consequence: 'Frameshift; loss of function', clinvar: CV, popFreq: 'Iranian family (homozygous)', phenotype: 'Severe and mild disease in two affected siblings', functional: 'Predicted null', ev: 'emerging', why: 'Single family; shows modifier effects.', src: [SALEH] },
    { id: 'fucosidosis-l264p', disease: 'fucosidosis', gene: 'FUCA1', transcript: TX, hgvsc: 'Not reported', hgvsp: 'p.(Leu264Pro)', build: BUILD, type: 'Missense (in trans with a large deletion)', consequence: 'Loss of enzyme activity', clinvar: CV, popFreq: 'Japanese patient', phenotype: 'Fucosidosis', functional: 'Not reported', ev: 'emerging', why: 'Single patient.', src: [AKAGI] },
    { id: 'fucosidosis-hmgcl-del', disease: 'fucosidosis', gene: 'FUCA1', transcript: TX, hgvsc: 'Contiguous deletion including FUCA1 and HMGCL', build: BUILD, type: 'Large deletion', consequence: 'Loss of FUCA1 and neighbouring gene', clinvar: CV, popFreq: 'Turkish families', phenotype: 'Fucosidosis with potentially more complex phenotype', functional: 'Gene loss', ev: 'emerging', why: 'First report of this contiguous deletion.', src: [KILIC] },
  ],
  genotypePhenotype: [
    { aspect: 'Clinical phenotype', finding: 'Features form a continuous spectrum; clinical severity does not segregate cleanly with mutation type.', ev: 'strong', why: '77-patient review.', src: [WILLEMS91] },
    { aspect: 'Severity', finding: 'Homozygous nonsense or frameshift alleles tend to cause severe disease, yet one homozygous frameshift caused severe and mild disease in siblings.', ev: 'emerging', why: 'Individual case reports.', src: [SALEH, ZHANG] },
    { aspect: 'Age of onset', finding: 'Missense alleles with residual activity are associated with milder or later onset in some families, not universally.', ev: 'emerging', src: [TIBERIO, AKAGI] },
    { aspect: 'Clinical phenotype', finding: 'Contiguous FUCA1 + HMGCL deletions may produce more complex phenotypes.', ev: 'emerging', src: [KILIC] },
    { aspect: 'Biomarker levels', finding: 'Residual enzyme activity in leukocytes or fibroblasts does not reliably predict severity.', ev: 'strong', src: [CRAGG] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'FUCA1 (1p34.1–36.1)', detail: 'Biallelic loss-of-function variants; more than 70 distinct variants reported.', ev: 'established', src: [WILLEMS99, TIBERIO] },
    { stage: 'Protein', label: 'Alpha-L-fucosidase', detail: 'Lysosomal homotetramer absent, unstable or catalytically inactive.', ev: 'strong', src: [CHKIOUA, 'db:uniprot:FUCA1'] },
    { stage: 'Molecular function', label: 'Terminal fucose not cleaved', detail: 'Ordered catabolism of fucosylated N-glycans and glycolipids is blocked.', ev: 'established', src: [WILLEMS88, WOLF] },
    { stage: 'Pathway', label: 'Lysosomal glycoconjugate storage', detail: 'Fucosylated glycoasparagines, oligosaccharides and glycolipids accumulate and are excreted in urine.', ev: 'established', src: [WOLF, WILLEMS91] },
    { stage: 'Cellular consequence', label: 'Vacuolation & neuroinflammation', detail: 'Neuronal loss (Purkinje cells), microglial activation, astrogliosis and secondary white matter damage in Fuca1-/- mice.', ev: 'strong', src: [WOLF, STROOBANTS] },
    { stage: 'Phenotype', label: 'Progressive neurodegeneration', detail: 'Cognitive and motor decline, seizures, white matter disease, angiokeratoma, visceral and skeletal storage.', ev: 'established', src: [WILLEMS91] },
  ],
  relations: [
    { from: ['gene', 'FUCA1'], to: ['protein', 'Alpha-L-fucosidase'], label: 'encodes', ev: 'established', why: 'Structural gene mutations identified in patients.', src: [WILLEMS88] },
    { from: ['protein', 'Alpha-L-fucosidase'], to: ['metabolite', 'Fucosylated glycoconjugates'], label: 'loss causes accumulation', ev: 'established', why: 'Consistent biochemical finding; reproduced in knockout mice.', src: [WOLF, WILLEMS91] },
    { from: ['metabolite', 'Fucosylated glycoconjugates'], to: ['biomarker', 'Urine fucosylated oligosaccharides'], label: 'measured as', ev: 'strong', why: 'Used qualitatively and quantitatively in diagnosis.', src: [WILLEMS91, WOLF] },
    { from: ['metabolite', 'Fucosylated glycoconjugates'], to: ['cell', 'Microglia / macrophages'], label: 'activates (mouse)', ev: 'emerging', why: 'Neuroinflammation shown in Fuca1-/- mice.', src: [STROOBANTS, WOLF] },
    { from: ['metabolite', 'Fucosylated glycoconjugates'], to: ['cell', 'Neurons / axons'], label: 'causes storage & loss', ev: 'strong', why: 'Mouse neuropathology; human clinical regression.', src: [WOLF] },
    { from: ['metabolite', 'Fucosylated glycoconjugates'], to: ['phenotype', 'White matter abnormalities'], label: 'drives (secondary)', ev: 'strong', why: 'Human MRI plus murine neuropathology.', src: [WALI, PENA, WOLF] },
    { from: ['protein', 'Alpha-L-fucosidase'], to: ['biomarker', 'Leukocyte alpha-L-fucosidase activity'], label: 'measured as', ev: 'established', why: 'Gold-standard diagnostic assay.', src: [CRAGG] },
    { from: ['therapy', 'Intracisternal ERT'], to: ['protein', 'Alpha-L-fucosidase'], label: 'replaces', ev: 'emerging', why: 'Partial CNS benefit in canine model.', src: [KONDAGARI] },
    { from: ['therapy', 'HSCT / cord blood transplantation'], to: ['protein', 'Alpha-L-fucosidase'], label: 'supplies donor enzyme', ev: 'emerging', why: 'Case reports of neurological stabilisation.', src: [JIANG, WALI] },
  ],
  cells: [
    { cell: 'Neurons / axons', role: 'primary', detail: 'Lysosomal vacuolation in cortical and hippocampal neurons; Purkinje cell loss in Fuca1-/- mice.', ev: 'strong', src: [WOLF, STROOBANTS] },
    { cell: 'Microglia / macrophages', role: 'secondary', detail: 'Microglial activation and vacuolated peripheral macrophages (mouse).', ev: 'emerging', src: [WOLF, STROOBANTS] },
    { cell: 'Astrocytes', role: 'secondary', detail: 'Storage and GFAP-positive astrogliosis in cortex, hippocampus and brainstem (mouse).', ev: 'emerging', src: [WOLF] },
    { cell: 'Oligodendrocytes', role: 'secondary', detail: 'Storage-related loss of myelination capacity inferred from imaging and model data.', ev: 'emerging', src: [WOLF, WALI] },
    { cell: 'Vascular / endothelial cells', role: 'secondary', detail: 'Endothelial storage; angiokeratoma corporis diffusum in ~52%.', ev: 'strong', src: [WILLEMS91, WOLF] },
    { cell: 'Non-CNS tissue', role: 'secondary', detail: 'Hepatocytes, Kupffer cells and dermal cells; hepatosplenomegaly and dysostosis multiplex.', ev: 'established', src: [WILLEMS91] },
  ],
  regions: [
    { region: 'Periventricular & subcortical white matter', finding: 'T2/FLAIR hyperintensity and hypomyelination.', src: [WALI, JIANG] },
    { region: 'Corpus callosum', finding: 'Hypoplasia or thinning.', src: [WALI, PENA] },
    { region: 'Cerebral cortex', finding: 'Progressive atrophy; early severe cortical involvement in one paediatric case.', src: [PENA] },
    { region: 'Cerebellum', finding: 'Atrophy in patients; Purkinje cell loss in mice.', src: [JIANG, WOLF] },
    { region: 'Hippocampus', finding: 'Neuronal vacuolation and neuroinflammation (mouse).', src: [WOLF, STROOBANTS] },
  ],
  biomarkers: [
    { name: 'Alpha-L-fucosidase activity', category: 'Enzymatic', significance: 'Markedly reduced or absent activity is diagnostic.', sample: 'Leukocytes or cultured fibroblasts', assay: 'Fluorometric/colorimetric assay (4-methylumbelliferyl-α-L-fucopyranoside)', purpose: ['Diagnosis', 'Prenatal diagnosis'], status: 'Established clinical', limitations: 'Carrier levels (~50%) overlap; activity does not predict severity.', ev: 'established', src: [CRAGG, WILLEMS88, WALI] },
    { name: 'Urine fucosylated oligosaccharides', category: 'Biochemical', significance: 'Characteristic storage substrates confirm the pattern.', sample: 'Urine', assay: 'TLC or LC-MS', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Qualitative methods vary between laboratories.', ev: 'strong', src: [WILLEMS91, WOLF, WOLFTHESIS] },
    { name: 'Serial brain MRI', category: 'Imaging', significance: 'Progressive white matter hyperintensity and atrophy track disease.', sample: 'In vivo brain', assay: 'Brain MRI', purpose: ['Monitoring'], status: 'Clinical adjunct', limitations: 'No validated MRI trial endpoint.', ev: 'emerging', src: [WOLF, PENA] },
    { name: 'FUCA1 genotype', category: 'Genetic', significance: 'Biallelic pathogenic variants confirm diagnosis.', sample: 'Blood (DNA)', assay: 'Sequencing plus MLPA or microarray for deletions', purpose: ['Diagnosis', 'Carrier testing', 'Prenatal diagnosis'], status: 'Established clinical', limitations: 'Large deletions missed by sequencing alone.', ev: 'established', src: [KILIC, DOMIN] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Progressive cognitive and motor regression, especially with angiokeratoma, coarse facies, hepatosplenomegaly, dysostosis multiplex or consanguinity.', src: [WILLEMS91] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain MRI', detail: 'White matter T2 hyperintensity, hypomyelination, thin corpus callosum, atrophy.', src: [WALI, PENA] },
    { phase: 'Investigation', category: 'Biochemical', method: 'Urine oligosaccharides', detail: 'Characteristic fucosylated substrates on TLC or LC-MS.', src: [WILLEMS91] },
    { phase: 'Confirmation', category: 'Enzymatic', method: 'Alpha-L-fucosidase assay', detail: 'Markedly reduced or undetectable activity in leukocytes or fibroblasts.', src: [CRAGG] },
    { phase: 'Confirmation', category: 'Genetic', method: 'FUCA1 sequencing with deletion/duplication analysis', detail: 'Biallelic pathogenic variants; MLPA or microarray when only one allele is found.', src: [KILIC, DOMIN] },
    { phase: 'Confirmation', category: 'Prenatal', method: 'CVS / amniocyte enzyme or molecular testing', detail: 'Possible for families with a known index case; carrier testing by familial variant preferred.', src: [CRAGG] },
  ],
  differential: [
    'Sialidosis and galactosialidosis',
    'Aspartylglucosaminuria',
    'Alpha- and beta-mannosidosis',
    'GM1 and GM2 gangliosidoses',
    'Mucolipidosis II/III (I-cell disease)',
    'Mucopolysaccharidoses (MPS I, II, III, VI)',
  ],
  phenotypes: {
    applicable: true,
    note: 'Fucosidosis is a continuous spectrum; the historical Type I / Type II labels are retained below only as descriptive ends of that spectrum.',
    forms: [
      { name: 'Severe (historical Type I)', onset: 'Infancy to early childhood (1–2 years)', severity: 'Severe; progressive loss of speech, cognition and ambulation', progression: 'Rapid; death in childhood', genetics: 'Often homozygous nonsense/frameshift', markers: 'Absent enzyme activity; WM T2 hyperintensity; angiokeratoma may be absent', src: [WILLEMS91] },
      { name: 'Milder / slowly progressive (historical Type II)', onset: 'Later childhood or adolescence', severity: 'Mild to moderate cognitive impairment', progression: 'Slow; survival into 2nd–3rd decade, rare adults', genetics: 'Not genotype-determined; same genotype can give mild disease', markers: 'Angiokeratoma more prominent; deficient enzyme activity', src: [WILLEMS91, SALEH] },
    ],
  },
  management: [
    { category: 'Symptomatic', text: 'Anti-seizure medication chosen by seizure type.', src: [GR, WALI] },
    { category: 'Supportive', text: 'Physiotherapy, occupational and speech therapy for spasticity, function, communication and dysphagia.', src: [GR, NORD] },
    { category: 'Supportive', text: 'Nasogastric or gastrostomy feeding; respiratory physiotherapy and aspiration monitoring.', src: [GR, NORD] },
    { category: 'Monitoring', text: 'Multidisciplinary follow-up: neurology, genetics, gastroenterology and developmental paediatrics.', src: [NORD] },
    { category: 'Symptomatic', text: 'Angiokeratoma managed conservatively; laser use extrapolated from related disorders.', src: [GR] },
  ],
  therapies: [
    { id: 'fucosidosis-hsct', name: 'HSCT / cord blood transplantation', modality: 'Cell therapy', target: 'Alpha-L-fucosidase (donor-derived)', mechanism: 'Engrafted donor macrophages/microglia supply functional enzyme.', delivery: 'Intravenous (transplant)', stage: 'Early human trials', evidenceBase: 'Human', status: 'Case reports only (~3.4% of reported patients); no registered trial', ev: 'emerging', why: 'Stabilisation in individual early-treated patients; no controlled data and significant transplant risk.', src: [JIANG, WALI] },
    { id: 'fucosidosis-ert-iv', name: 'Intravenous recombinant ERT', modality: 'Enzyme replacement', target: 'Alpha-L-fucosidase', mechanism: 'Recombinant enzyme reduces visceral storage.', delivery: 'Intravenous', stage: 'Animal studies', evidenceBase: 'Animal', status: 'Preclinical (mouse); limited CNS penetration', ev: 'emerging', why: 'Murine proof-of-concept for visceral clearance only.', src: [WOLFTHESIS, WOLF] },
    { id: 'fucosidosis-ert-ic', name: 'Intracisternal ERT', modality: 'Enzyme replacement', target: 'Alpha-L-fucosidase', mechanism: 'CSF delivery bypasses the blood-brain barrier.', delivery: 'Intracisternal', stage: 'Animal studies', evidenceBase: 'Animal', status: 'Preclinical (canine)', ev: 'emerging', why: 'Partial CNS neuropathological benefit in affected English Springer Spaniels.', src: [KONDAGARI] },
    { id: 'fucosidosis-gt', name: 'Gene therapy (canine model)', modality: 'Gene therapy', target: 'FUCA1', mechanism: 'Gene transfer restores enzyme expression.', delivery: 'Not specified', stage: 'Animal studies', evidenceBase: 'Animal', status: 'Preclinical proof-of-concept', ev: 'proposed', why: 'Reviewed in canine model only; vector and route details not curated.', src: [FLETCHER] },
  ],
  trials: [],
  milestones: [
    { year: 1988, label: 'Mutation identified in the alpha-L-fucosidase structural gene', stage: 'Discovery', src: [WILLEMS88] },
    { year: 1991, label: '77-patient review defines natural history and continuous spectrum', stage: 'Discovery', src: [WILLEMS91] },
    { year: 1999, label: 'FUCA1 mutation spectrum described', stage: 'Discovery', src: [WILLEMS99] },
    { year: 2015, label: 'Intracisternal ERT gives partial CNS benefit in canine fucosidosis', stage: 'Animal studies', src: [KONDAGARI] },
    { year: 2016, label: 'Fuca1-/- mouse model characterised; IV ERT tested', stage: 'Animal studies', src: [WOLF, WOLFTHESIS] },
    { year: 2017, label: 'Review of HSCT outcomes in fucosidosis', stage: 'Early human trials', src: [JIANG] },
    { year: 2025, label: 'First contiguous FUCA1 + HMGCL deletion reported', stage: 'Discovery', src: [KILIC] },
  ],
  gaps: [
    { text: 'No prospective natural-history registry or validated outcome measures.', ev: 'unknown', src: [WILLEMS91] },
    { text: 'No human ERT or gene therapy trial registered; IND-enabling studies needed.', ev: 'unknown', src: [KONDAGARI, FLETCHER] },
    { text: 'Plasma and CSF biomarkers are not characterised or standardised.', ev: 'unknown', src: [] },
    { text: 'Modifier genes behind intrafamilial variability are unidentified.', ev: 'unknown', src: [SALEH, WILLEMS99] },
    { text: 'Role of autophagy, ER stress and mitochondrial dysfunction is proposed but untested in fucosidosis.', ev: 'proposed', src: [] },
    { text: 'Optimal timing and patient selection for HSCT are undefined.', ev: 'strong', src: [JIANG] },
    { text: 'Substrate reduction and chaperone therapies have not been studied.', ev: 'unknown', src: [] },
  ],
}
