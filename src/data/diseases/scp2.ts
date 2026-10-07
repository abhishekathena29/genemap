import type { Disease, Gene, Source } from '../types'
import { geneDb, lit } from '../cite'

const SEEDORF98 = 'lit:scp2:seedorf1998'
const SEEDORF00 = 'lit:scp2:seedorf2000'
const HORVATH = 'lit:scp2:horvath2015'
const GALANO = 'lit:scp2:galano2022'
const MORARJI = 'lit:scp2:morarji2017'
const MONNIG = 'lit:scp2:monnig2004'
const STANLEY = 'lit:scp2:stanley2007'
const NAM = 'lit:scp2:nam2016'
const BUNYA = 'lit:scp2:bunya2000'
const OMIM_GENE = 'omim:184755'

export const scp2Sources: Source[] = [
  lit(SEEDORF98, 'Seedorf U, et al.', 1998, 'Defective peroxisomal catabolism of branched fatty acyl coenzyme A in mice lacking the sterol carrier protein-2/sterol carrier protein-x gene function', 'Genes Dev'),
  lit(SEEDORF00, 'Seedorf U, Ellinghaus P, Nofer JR', 2000, 'Sterol carrier protein-2', 'Biochim Biophys Acta Mol Cell Biol Lipids', 'review'),
  lit(HORVATH, 'Horvath R, et al.', 2015, 'SCP2 mutations and neurodegeneration with brain iron accumulation', 'Neurology'),
  lit(GALANO, 'Galano M, Ezzat S, Papadopoulos V', 2022, 'SCP2 variant is associated with alterations in lipid metabolism, brainstem neurodegeneration, and testicular defects', 'Hum Genomics'),
  lit(MORARJI, 'Morarji J, et al.', 2017, 'An unusual retinal phenotype associated with a mutation in sterol carrier protein SCP2', 'JAMA Ophthalmol'),
  lit(MONNIG, 'Mönnig G, et al.', 2004, 'Phytanic acid accumulation is associated with conduction delay and sudden cardiac death in sterol carrier protein-2/sterol carrier protein-x deficient mice', 'J Cardiovasc Electrophysiol'),
  lit(STANLEY, 'Stanley WA, et al.', 2007, 'Investigation of the ligand spectrum of human sterol carrier protein 2 using a direct mass spectrometry assay', 'Arch Biochem Biophys'),
  lit(NAM, 'Nam DE, et al.', 2016, 'Synthetic High-Density Lipoprotein-Like Nanocarrier Improved Cellular Transport of Lysosomal Cholesterol in Human Sterol Carrier Protein-Deficient Fibroblasts', 'J Med Food'),
  lit(BUNYA, 'Bun-ya M, et al.', 2000, 'New aspects of sterol carrier protein 2 (nonspecific lipid-transfer protein) in fusion proteins and in peroxisomes', 'Cell Biochem Biophys', 'review'),
  {
    id: OMIM_GENE,
    title: 'OMIM *184755: Sterol carrier protein 2 (SCP2) gene entry',
    venue: 'OMIM',
    kind: 'database',
    url: 'https://www.omim.org/entry/184755',
  },
]

export const scp2Genes: Gene[] = [
  {
    symbol: 'SCP2',
    name: 'Sterol carrier protein 2',
    protein: 'SCP-2 (~14 kDa lipid-transfer protein) and SCP-x (~58 kDa; SCP-2 sequence fused to a peroxisomal 3-ketoacyl-CoA thiolase domain)',
    location: '1p32.3',
    function:
      'One locus, two proteins via alternative promoters. SCP-x provides the peroxisomal thiolase step for branched-chain fatty acid (pristanoyl-CoA) and bile-acid side-chain β-oxidation; SCP-2 is a non-specific intracellular lipid-transfer protein binding long-chain fatty acyl-CoAs and sterols.',
    pathway: 'Peroxisomal branched-chain fatty acid β-oxidation; bile acid synthesis; intracellular lipid transport',
    uniprot: 'P22307',
    ncbiGene: '6342',
    variantTypes: [
      'Homozygous / compound heterozygous variants (exact nomenclature not curated)',
      'Heterozygous variant with reduced SCP-x protein (single case)',
      'Large deletions considered possible (CNV analysis advised)',
    ],
    diseases: ['scp2'],
    ev: 'established',
    src: [HORVATH, SEEDORF98, SEEDORF00, BUNYA, OMIM_GENE, ...geneDb('SCP2')],
  },
]

export const scp2: Disease = {
  id: 'scp2',
  name: 'SCP2 Deficiency (Sterol Carrier Protein X Deficiency)',
  short: 'SCP2',
  lastUpdated: '2026-10-08',
  color: '#43779e',
  synonyms: [
    'SCPx deficiency',
    'SCP-x deficiency',
    'SCP2/SCPx deficiency',
    'Peroxisomal 3-ketoacyl-CoA thiolase deficiency (SCPx-type)',
    'Neurodegeneration with brain iron accumulation, SCP2-related',
    'Brainstem neurodegeneration, SCP2-type',
  ],
  classification: 'Peroxisomal single-enzyme deficiency (branched-chain fatty acid β-oxidation); NBIA-spectrum overlap',
  inheritance: 'Autosomal recessive',
  genes: ['SCP2'],
  tagline: 'Loss of peroxisomal SCP-x thiolase → branched-chain fatty acid and bile-acid intermediate accumulation → adult-onset brainstem neurodegeneration.',
  identifiers: [
    { label: 'OMIM (gene)', value: '*184755', url: 'https://www.omim.org/entry/184755' },
    { label: 'OMIM (disease)', value: 'Not assigned (unconfirmed)' },
    { label: 'Orphanet', value: 'Not identified', url: 'https://www.orpha.net' },
    { label: 'ICD-10', value: 'E71.3 (not individually coded)' },
    { label: 'MONDO', value: 'search', url: 'https://monarchinitiative.org/search?q=SCP2%20deficiency' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Pathogenic SCP2 variants reduce or abolish SCP-x, the peroxisomal 3-ketoacyl-CoA thiolase for branched-chain substrates.', ev: 'established', why: 'Gene and human cases confirmed, although only ~3 patients are reported.', src: [HORVATH, GALANO, SEEDORF98] },
    { label: 'Two proteins, one gene', text: 'SCP2 encodes SCP-2 (lipid-transfer protein) and SCP-x (SCP-2 fused to a thiolase domain) via alternative promoters.', ev: 'established', src: [SEEDORF00, BUNYA] },
    { label: 'Hallmark metabolites', text: 'Impaired thiolysis of pristanoyl-CoA and bile-acid intermediates; phytanic and pristanic acid accumulate.', ev: 'strong', why: 'Established in Scp2-null mice; human biochemical data come from very few patients.', src: [SEEDORF98, MONNIG] },
    { label: 'Core phenotype', text: 'Adult-onset progressive brainstem and cerebellar neurodegeneration with NBIA-like MRI; white matter change present but not predominant.', ev: 'emerging', why: 'Derived from a handful of case reports.', src: [HORVATH, GALANO] },
  ],
  clinical: [
    { label: 'Age of onset', text: 'Adult onset in all reported cases; childhood onset not described.', ev: 'emerging', src: [HORVATH, GALANO] },
    { label: 'Neurological features', text: 'Progressive spinocerebellar ataxia with brainstem degeneration; peripheral neuropathy may co-occur.', ev: 'emerging', src: [HORVATH, GALANO] },
    { label: 'Systemic features', text: 'Cardiac dysrhythmia, muscle wasting and azoospermia reported in one patient.', ev: 'emerging', why: 'Single case report.', src: [GALANO] },
    { label: 'Ophthalmology', text: 'An unusual retinal phenotype is described in one patient with an SCP2 mutation.', ev: 'emerging', why: 'Single case report.', src: [MORARJI] },
    { label: 'Prognosis', text: 'Progressive neurodegeneration; outcome data are extremely limited.', ev: 'unknown', why: 'No natural-history data.', src: [GALANO] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Among the rarest peroxisomal disorders; fewer than five patients reported, no registry or incidence data.', ev: 'unknown', why: 'Case reports only.', src: [HORVATH, GALANO, MORARJI] },
    { label: 'Distribution', text: 'Reported cases from Europe and North America; too few for population-specific estimates.', ev: 'emerging', src: [HORVATH, GALANO] },
    { label: 'Founder effects', text: 'None established.', ev: 'unknown', src: [] },
    { label: 'Sex distribution', text: 'Equal sex distribution expected; the best-characterised patient was male.', ev: 'proposed', why: 'Inferred from inheritance; data too limited.', src: [GALANO] },
  ],
  variants: [],
  genotypePhenotype: [
    { aspect: 'Clinical phenotype', finding: 'Biallelic variants are associated with adult-onset brainstem neurodegeneration and NBIA-like MRI.', ev: 'emerging', why: 'Early case reports only.', src: [HORVATH] },
    { aspect: 'Clinical phenotype', finding: 'A heterozygous variant with reduced SCP-x protein was associated with brainstem neurodegeneration plus cardiac, muscle and testicular involvement; haploinsufficiency or dominant-negative effect proposed.', ev: 'emerging', why: 'Single patient; mechanism unresolved.', src: [GALANO] },
    { aspect: 'Severity', finding: 'In Scp2-null mice, dietary phytol load worsens cardiac pathology and causes sudden death; diet may modulate human severity.', ev: 'proposed', why: 'Mouse data; direct human evidence lacking.', src: [MONNIG, SEEDORF98] },
    { aspect: 'Survival / outcome', finding: 'No genotype-based predictor of outcome; systematic correlation impossible with < 5 cases.', ev: 'unknown', src: [GALANO] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'SCP2 (1p32.3)', detail: 'Biallelic (or, in one case, heterozygous) pathogenic variants.', ev: 'established', src: [HORVATH, GALANO] },
    { stage: 'Protein', label: 'SCP-x / SCP-2', detail: 'SCP-x protein absent or markedly reduced in patient fibroblasts.', ev: 'emerging', src: [GALANO, 'db:uniprot:SCP2'] },
    { stage: 'Molecular function', label: 'Peroxisomal thiolysis fails', detail: 'Final thiolytic step of branched-chain β-oxidation (pristanoyl-CoA, THCA intermediates) is impaired.', ev: 'established', src: [SEEDORF98, SEEDORF00] },
    { stage: 'Pathway', label: 'Branched-chain FA & bile acid disruption', detail: 'Phytanic/pristanic acid accumulate; fibroblasts show disrupted PPAR signalling and steroid/bile-acid pathways.', ev: 'strong', src: [SEEDORF98, GALANO] },
    { stage: 'Cellular consequence', label: 'Membrane & lipid-transport dysfunction', detail: 'Phytanic acid incorporation alters cardiac and neuronal membranes (mouse); impaired lysosomal cholesterol transport in vitro.', ev: 'emerging', src: [MONNIG, NAM] },
    { stage: 'Phenotype', label: 'Brainstem / cerebellar neurodegeneration', detail: 'Adult-onset ataxia, NBIA-like MRI, variable cardiac, gonadal and retinal involvement.', ev: 'emerging', src: [HORVATH, GALANO, MORARJI] },
  ],
  relations: [
    { from: ['gene', 'SCP2'], to: ['protein', 'SCP-x'], label: 'encodes', ev: 'established', why: 'Dual-protein locus characterised biochemically.', src: [SEEDORF00, BUNYA] },
    { from: ['gene', 'SCP2'], to: ['protein', 'SCP-2'], label: 'encodes', ev: 'established', why: 'Alternative promoter usage generates the short lipid-transfer protein.', src: [SEEDORF00, BUNYA] },
    { from: ['protein', 'SCP-x'], to: ['metabolite', 'Phytanic / pristanic acid accumulation'], label: 'loss causes', ev: 'strong', why: 'Shown in Scp2-null mice; human data from very few patients.', src: [SEEDORF98] },
    { from: ['protein', 'SCP-x'], to: ['pathway', 'Bile acid side-chain oxidation'], label: 'catalyses final step', ev: 'established', why: 'Biochemical and animal-model data.', src: [SEEDORF00] },
    { from: ['protein', 'SCP-2'], to: ['pathway', 'Intracellular cholesterol transport'], label: 'supports', ev: 'emerging', why: 'In vitro fibroblast data and ligand-binding studies.', src: [NAM, STANLEY] },
    { from: ['metabolite', 'Phytanic / pristanic acid accumulation'], to: ['phenotype', 'Cardiac dysrhythmia'], label: 'drives (mouse)', ev: 'strong', why: 'Conduction delay and sudden death in phytol-fed Scp2-null mice; one human case with dysrhythmia.', src: [MONNIG, GALANO] },
    { from: ['gene', 'SCP2'], to: ['phenotype', 'Brainstem neurodegeneration (NBIA-like)'], label: 'loss associated with', ev: 'emerging', why: 'Handful of human case reports.', src: [HORVATH, GALANO] },
    { from: ['metabolite', 'Phytanic / pristanic acid accumulation'], to: ['biomarker', 'Plasma phytanic / pristanic acid'], label: 'measured as', ev: 'emerging', why: 'Biochemically rational; limited human data.', src: [SEEDORF98] },
    { from: ['therapy', 'Fenofibrate / 4-hydroxytamoxifen'], to: ['protein', 'SCP-x'], label: 'upregulates (in vitro)', ev: 'emerging', why: 'Single patient fibroblast study.', src: [GALANO] },
    { from: ['therapy', 'Dietary phytol / phytanic acid restriction'], to: ['metabolite', 'Phytanic / pristanic acid accumulation'], label: 'reduces substrate load', ev: 'strong', why: 'Mouse model data; no human trial.', src: [MONNIG] },
  ],
  cells: [
    { cell: 'Neurons / axons', role: 'primary', detail: 'Brainstem and cerebellar neurodegeneration; neuropathy and brainstem pathology in Scp2-null mice.', ev: 'emerging', src: [HORVATH, SEEDORF98] },
    { cell: 'Oligodendrocytes', role: 'secondary', detail: 'White matter involvement reported but not characterised; no oligodendrocyte-specific data.', ev: 'unknown', src: [HORVATH] },
    { cell: 'Non-CNS tissue', role: 'secondary', detail: 'Cardiac conduction (mouse; one human case), testis (azoospermia), skeletal muscle and retina; fibroblasts show reduced SCP-x.', ev: 'emerging', src: [MONNIG, GALANO, MORARJI] },
  ],
  regions: [
    { region: 'Brainstem', finding: 'Dominant site of neurodegeneration; T2/signal abnormality.', src: [HORVATH, GALANO] },
    { region: 'Thalamus & basal ganglia', finding: 'Deep grey matter signal change overlapping NBIA.', src: [HORVATH] },
    { region: 'Cerebellum', finding: 'Atrophy with spinocerebellar degeneration pattern in adult-onset cases.', src: [HORVATH] },
    { region: 'Cerebral white matter', finding: 'Changes present but not predominant; pattern not systematically characterised.', src: [HORVATH] },
    { region: 'Retina', finding: 'Unusual retinal phenotype in one patient.', src: [MORARJI] },
  ],
  biomarkers: [
    { name: 'Plasma phytanic acid', category: 'Biochemical', significance: 'Accumulates when downstream thiolysis is deficient.', sample: 'Plasma', assay: 'Fatty acid analysis (GC-MS)', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'May be normal on ordinary diet; strongest evidence is from mice.', ev: 'emerging', src: [SEEDORF98, MONNIG] },
    { name: 'Plasma pristanic acid', category: 'Biochemical', significance: 'SCP-x is required for pristanoyl-CoA thiolysis.', sample: 'Plasma', assay: 'Fatty acid analysis (GC-MS)', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'Normal values may not exclude disease.', ev: 'emerging', src: [SEEDORF98] },
    { name: 'Bile acid intermediates (THCA, DHCA)', category: 'Biochemical', significance: 'C27 bile-acid side-chain oxidation requires SCP-x.', sample: 'Plasma / urine', assay: 'Bile acid profiling', purpose: ['Diagnosis'], status: 'Experimental', limitations: 'Data from very few human cases.', ev: 'emerging', src: [SEEDORF00] },
    { name: 'Plasma VLCFA (C26:0, C24:0/C22:0)', category: 'Biochemical', significance: 'Standard peroxisomal screen; block is downstream of ACOX1 and DBP.', sample: 'Plasma', assay: 'GC-MS', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'Often normal or minimally abnormal; a normal result does not exclude SCPx deficiency.', ev: 'emerging', src: [SEEDORF98] },
    { name: 'SCP-x protein (immunoblot)', category: 'Biochemical', significance: 'Absent or markedly reduced SCP-x confirms the defect.', sample: 'Cultured skin fibroblasts', assay: 'Immunoblot', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'Specialised; based on single-case experience.', ev: 'established', src: [GALANO] },
    { name: 'SCP-x thiolase activity', category: 'Enzymatic', significance: 'Direct measure of pristanoyl-CoA thiolysis.', sample: 'Cultured skin fibroblasts', assay: 'Thiolase enzyme assay', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'Specialised assay, not widely available.', ev: 'established', src: [SEEDORF98] },
    { name: 'Lipidomics panel', category: 'Biochemical', significance: 'Broad perturbation of fatty acids, sterols and bile acids.', sample: 'Fibroblasts / plasma', assay: 'Mass-spectrometry lipidomics', purpose: ['Diagnosis'], status: 'Experimental', limitations: 'Research tool; not clinically standardised.', ev: 'emerging', src: [GALANO] },
    { name: 'NBIA-like MRI pattern', category: 'Imaging', significance: 'Deep grey matter and brainstem signal change with adult spinocerebellar syndrome should prompt SCP2 analysis.', sample: 'In vivo brain', assay: 'Brain MRI (iron-sensitive sequences)', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'Non-specific; overlaps with other NBIA disorders.', ev: 'established', src: [HORVATH] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Adult-onset progressive ataxia or brainstem degeneration with NBIA-like MRI, especially with dysrhythmia, neuropathy or gonadal dysfunction; or unexplained retinal degeneration.', src: [HORVATH, GALANO, MORARJI] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain MRI', detail: 'Brainstem and deep grey matter signal change, cerebellar atrophy; consider SCP2 when NBIA gene panel is negative.', src: [HORVATH] },
    { phase: 'Investigation', category: 'Biochemical', method: 'Plasma phytanic/pristanic acid, VLCFA and bile acid intermediates', detail: 'Branched-chain fatty acids are more informative; normal VLCFA does not exclude SCPx deficiency.', src: [SEEDORF98] },
    { phase: 'Confirmation', category: 'Enzymatic', method: 'Fibroblast SCP-x immunoblot / thiolase assay', detail: 'Absent or reduced SCP-x protein or pristanoyl-CoA thiolysis; lipidomics supportive.', src: [GALANO] },
    { phase: 'Confirmation', category: 'Genetic', method: 'SCP2 sequencing, peroxisomal/NBIA panel or exome/genome with CNV analysis', detail: 'Do not dismiss heterozygous SCP2 findings without functional testing.', src: [GALANO, HORVATH] },
  ],
  differential: [
    'Other NBIA disorders (e.g. WDR45, NFU1)',
    'Adult-onset spinocerebellar ataxias',
    'Other peroxisomal disorders detected by VLCFA screening (X-ALD, Zellweger spectrum)',
  ],
  phenotypes: {
    applicable: true,
    note: 'With fewer than five reported patients, the split below is provisional and reflects individual case reports.',
    forms: [
      { name: 'Classic biallelic', onset: 'Adult', severity: 'Progressive neurodegeneration', progression: 'Progressive; outcome data extremely limited', genetics: 'Homozygous or compound heterozygous SCP2', markers: 'NBIA-like MRI; cerebellar atrophy; SCP-x absent; phytanic/pristanic acid may be elevated', src: [HORVATH] },
      { name: 'Extended / multisystem (heterozygous case)', onset: 'Adult', severity: 'Brainstem degeneration plus systemic disease', progression: 'Insufficient data', genetics: 'Heterozygous SCP2 with reduced SCP-x', markers: 'Cardiac dysrhythmia, muscle wasting, azoospermia; reduced SCP-x in fibroblasts', src: [GALANO] },
      { name: 'Retinal presentation', onset: 'Not specified', severity: 'Ophthalmological involvement', progression: 'Insufficient data', genetics: 'SCP2 mutation (details not curated)', markers: 'Unusual retinal phenotype', src: [MORARJI] },
    ],
  },
  management: [
    { category: 'Supportive', text: 'Multidisciplinary care: neurology, metabolic medicine, cardiology, ophthalmology, andrology and dietetics.', src: [GALANO] },
    { category: 'Symptomatic', text: 'Physiotherapy, occupational therapy and mobility aids for ataxia; no specific neuroprotective drug.', src: [GALANO] },
    { category: 'Supportive', text: 'Restriction of dietary phytol/phytanic acid (dairy and ruminant fat), modelled on Refsum disease; rationale from mouse data, no human trial.', src: [MONNIG] },
    { category: 'Monitoring', text: 'Baseline and periodic ECG, echocardiogram and Holter monitoring (precautionary, based on one case and mouse data).', src: [GALANO, MONNIG] },
    { category: 'Monitoring', text: 'Retinal surveillance and gonadal assessment in males.', src: [MORARJI, GALANO] },
  ],
  therapies: [
    { id: 'scp2-fenofibrate', name: 'Fenofibrate / 4-hydroxytamoxifen', modality: 'Small molecule', target: 'SCP2 (SCP-x)', mechanism: 'PPAR-pathway induction raises residual SCP-x protein and partly normalises fatty acid abnormalities.', delivery: 'Oral (in vitro only to date)', stage: 'Preclinical (cellular)', evidenceBase: 'Cellular', status: 'Patient fibroblasts only; no human trial', ev: 'emerging', why: 'Single patient fibroblast study; CNS penetration and dosing unknown.', src: [GALANO] },
    { id: 'scp2-diet', name: 'Dietary phytol / phytanic acid restriction', modality: 'Other', target: 'Phytanic acid load', mechanism: 'Limit dietary precursors that accumulate behind the thiolase block.', delivery: 'Diet', stage: 'Animal studies', evidenceBase: 'Animal', status: 'Used case-by-case; no controlled human data', ev: 'strong', why: 'High-phytol diet causes cardiac death in Scp2-null mice; human benefit untested.', src: [MONNIG] },
    { id: 'scp2-hdl', name: 'Synthetic HDL-like nanocarrier', modality: 'Other', target: 'Lysosomal cholesterol transport', mechanism: 'Nanocarrier improves cholesterol efflux in SCP-2-deficient cells.', delivery: 'In vitro', stage: 'Preclinical (cellular)', evidenceBase: 'Cellular', status: 'In vitro only', ev: 'emerging', why: 'Single in vitro study; highly preliminary.', src: [NAM] },
  ],
  trials: [],
  milestones: [
    { year: 1998, label: 'Scp2-null mouse shows defective branched-chain acyl-CoA catabolism', stage: 'Animal studies', src: [SEEDORF98] },
    { year: 2004, label: 'Phytanic acid linked to conduction delay and sudden death in Scp2-null mice', stage: 'Animal studies', src: [MONNIG] },
    { year: 2015, label: 'SCP2 mutations linked to human NBIA-like neurodegeneration', stage: 'Discovery', src: [HORVATH] },
    { year: 2016, label: 'HDL-like nanocarrier improves cholesterol transport in deficient fibroblasts', stage: 'Preclinical (cellular)', src: [NAM] },
    { year: 2017, label: 'Retinal phenotype reported with SCP2 mutation', stage: 'Discovery', src: [MORARJI] },
    { year: 2022, label: 'Heterozygous multisystem case; fenofibrate and 4-hydroxytamoxifen raise SCP-x in vitro', stage: 'Preclinical (cellular)', src: [GALANO] },
  ],
  gaps: [
    { text: 'Only ~3–5 patients known; registry and natural-history data are prerequisites for any trial.', ev: 'unknown', src: [GALANO] },
    { text: 'Exact pathogenic variant nomenclature from published cases is not curated here.', ev: 'unknown', src: [HORVATH, GALANO, MORARJI] },
    { text: 'Whether a single heterozygous SCP2 allele causes disease (haploinsufficiency vs dominant-negative) is unresolved.', ev: 'controversial', src: [GALANO] },
    { text: 'Link between SCP-x/SCP-2 loss and brain iron accumulation is not established; may be an epiphenomenon.', ev: 'unknown', src: [HORVATH] },
    { text: 'White matter pattern has not been systematically characterised across cases.', ev: 'unknown', src: [HORVATH] },
    { text: 'AAV gene therapy is conceptually applicable but no preclinical programme is reported.', ev: 'proposed', src: [] },
  ],
}
