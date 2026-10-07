import type { Disease, Gene, Source } from '../types'
import { geneDb, lit, omim, orpha, pmid } from '../cite'

const OMIM = 'omim:610532'
const ORPHA = 'orpha:85163'
const ZARA = 'lit:hcc:zara2006'
const BASKIN = 'lit:hcc:baskin2016'
const VDK = 'lit:hcc:vanderknaap2017'

export const hccSources: Source[] = [
  pmid(ZARA, '16969390', 'Zara F, et al.', 2006, 'Deficiency of hyccin, a newly identified membrane protein, causes hypomyelination and congenital cataract', 'Nat Genet'),
  // Dossier cites PMID 27135743 (Cell Rep); that PMID/venue could not be reconciled with this paper, so the link is a title search pending verification.
  lit(BASKIN, 'Baskin JM, et al.', 2016, 'The leukodystrophy protein FAM126A (hyccin) regulates PI4Kα and membrane-associated PI(4)P', 'Cell Rep'),
  pmid(VDK, '28572582', 'van der Knaap MS, Bugiani M', 2017, 'Leukodystrophies: a proposed classification system based on pathological changes and pathogenetic mechanisms', 'Acta Neuropathol', 'review'),
  omim('610532', 'Leukodystrophy, hypomyelinating, 5 (hypomyelination and congenital cataract)'),
  orpha('85163', 'Hypomyelination and congenital cataract'),
]

export const hccGenes: Gene[] = [
  {
    symbol: 'FAM126A',
    name: 'Family with sequence similarity 126 member A',
    protein: 'Hyccin (521 aa), non-enzymatic scaffolding / regulatory subunit of the PI4KIIIα complex',
    location: '7p15.3',
    function:
      'Stabilises and activates the plasma-membrane PI4KIIIα lipid kinase complex (with EFR3 and TTC7), which generates PtdIns(4)P, the precursor of PI(4,5)P2 and a determinant of membrane identity and myelin maintenance.',
    pathway: 'Phosphoinositide metabolism (PI4KIIIα / PtdIns(4)P synthesis at the plasma membrane)',
    transcript: 'NM_032581.4',
    uniprot: 'Q9Y4E8',
    ncbiGene: '84668',
    variantTypes: ['Splice-site (incl. recurrent c.636+1G>C)', 'Nonsense', 'Missense', 'Frameshift'],
    diseases: ['hcc'],
    ev: 'established',
    src: [ZARA, BASKIN, OMIM, ...geneDb('FAM126A')],
  },
]

export const hcc: Disease = {
  id: 'hcc',
  name: 'Hypomyelination and Congenital Cataract',
  short: 'HCC',
  lastUpdated: '2026-10-08',
  color: '#2d6fb8',
  synonyms: [
    'HCC syndrome',
    'FAM126A-related hypomyelinating leukodystrophy',
    'Hypomyelinating leukodystrophy 5 (HLD5)',
    'Hyccin deficiency',
    'Leukodystrophy with congenital cataract',
  ],
  classification: 'Hypomyelinating leukodystrophy; phosphoinositide (PI4KIIIα pathway) metabolism disorder',
  inheritance: 'Autosomal recessive',
  genes: ['FAM126A'],
  tagline: 'Loss of hyccin → reduced PI4KIIIα activity and PtdIns(4)P → CNS hypomyelination with congenital cataract.',
  identifiers: [
    { label: 'OMIM', value: '610532', url: 'https://www.omim.org/entry/610532' },
    { label: 'Orphanet', value: 'ORPHA:85163', url: 'https://www.orpha.net/en/disease/detail/85163' },
    { label: 'MONDO', value: 'MONDO:0011965', url: 'https://monarchinitiative.org/disease/MONDO:0011965' },
    { label: 'ICD-10', value: 'G37.8' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Biallelic pathogenic variants in FAM126A cause deficiency of hyccin.', ev: 'established', why: 'Gene identified in affected families and replicated in subsequent case series.', src: [ZARA, OMIM] },
    { label: 'Defining combination', text: 'Bilateral congenital or infantile cataract together with diffuse CNS hypomyelination; the combination is regarded as pathognomonic.', ev: 'established', src: [ZARA, ORPHA] },
    { label: 'Molecular category', text: 'Phosphoinositide metabolism disorder: hyccin is a regulatory subunit of the PI4KIIIα complex that produces plasma-membrane PtdIns(4)P.', ev: 'established', why: 'Biochemical and cell-based studies of the PI4KIIIα complex.', src: [BASKIN] },
    { label: 'Classification', text: 'Classified among the hypomyelinating leukodystrophies.', ev: 'established', src: [VDK, ORPHA] },
    { label: 'Primary cell types', text: 'Oligodendrocytes (myelination defect) and lens; peripheral nerve involved in a subset.', ev: 'strong', why: 'Cell-type involvement inferred from phenotype and expression data rather than direct human tissue studies.', src: [ZARA, BASKIN] },
  ],
  clinical: [
    { label: 'Age of onset', text: 'Cataract at birth or within the first year; motor delay in infancy.', ev: 'established', src: [ZARA, OMIM] },
    { label: 'Ocular features', text: 'Bilateral congenital cataract requiring early surgery to prevent deprivation amblyopia.', ev: 'established', src: [ZARA, OMIM] },
    { label: 'Neurological features', text: 'Delayed motor milestones, mild cerebellar ataxia, mild to moderate intellectual disability (relatively preserved for the degree of white-matter change) and later dysarthria.', ev: 'established', src: [ZARA, OMIM] },
    { label: 'Peripheral neuropathy', text: 'Motor neuropathy with reduced conduction velocities in a subset of patients; not universal.', ev: 'emerging', why: 'Variably reported across case series.', src: [ZARA] },
    { label: 'Progression', text: 'Slowly progressive; most patients achieve walking (with difficulty) and survive into adulthood, with gradual motor and cognitive decline.', ev: 'established', src: [ZARA, ORPHA] },
    { label: 'Prognosis', text: 'Life expectancy is not precisely established; death in early adulthood is reported in severe cases.', ev: 'unknown', why: 'No systematic natural-history data.', src: [ORPHA] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Very rare; Orphanet prevalence below 1 in 1,000,000 in most populations, with more than 50 published cases as of 2022.', ev: 'emerging', why: 'Based on case counts rather than population studies.', src: [ORPHA, ZARA] },
    { label: 'Founder population', text: 'Original families were Italian; the recurrent splice variant c.636+1G>C is found in Mediterranean families.', ev: 'strong', src: [ZARA] },
    { label: 'Geographic range', text: 'Cases also reported from other European, Middle Eastern and Asian countries; consanguinity is common in published series.', ev: 'strong', src: [ORPHA] },
    { label: 'Sex distribution', text: 'No reported sex bias, as expected for autosomal recessive inheritance.', ev: 'established', src: [OMIM] },
  ],
  variants: [
    { id: 'hcc-c636', disease: 'hcc', gene: 'FAM126A', transcript: 'NM_032581.4', hgvsc: 'c.636+1G>C', build: 'Not specified (transcript-based)', type: 'Splice-site', consequence: 'Disrupts splice donor; loss of function', clinvar: 'Pathogenic (per dossier)', popFreq: 'Recurrent in Italian / Mediterranean families', phenotype: 'Classic HCC', functional: 'Splice-donor loss', ev: 'established', why: 'Recurrent founder-like allele from the original gene-discovery families.', src: [ZARA, 'db:clinvar:FAM126A'] },
    { id: 'hcc-q166x', disease: 'hcc', gene: 'FAM126A', transcript: 'NM_032581.4', hgvsc: 'c.496C>T', hgvsp: 'p.(Gln166Ter)', build: 'Not specified (transcript-based)', type: 'Nonsense', consequence: 'Truncation; loss of function', clinvar: 'Pathogenic (per dossier)', popFreq: 'Not stated in dossier', phenotype: 'HCC', functional: 'Predicted truncated / absent hyccin', ev: 'strong', why: 'Null mechanism; no primary citation given in dossier.', src: ['db:clinvar:FAM126A'] },
    { id: 'hcc-r221h', disease: 'hcc', gene: 'FAM126A', transcript: 'NM_032581.4', hgvsc: 'c.662G>A', hgvsp: 'p.(Arg221His)', build: 'Not specified (transcript-based)', type: 'Missense', consequence: 'Predicted dysfunctional hyccin', clinvar: 'Likely pathogenic (per dossier)', popFreq: 'Not stated in dossier', phenotype: 'HCC', functional: 'Not characterised in dossier', ev: 'emerging', why: 'Likely pathogenic classification without functional data.', src: ['db:clinvar:FAM126A'] },
    { id: 'hcc-w100x', disease: 'hcc', gene: 'FAM126A', transcript: 'NM_032581.4', hgvsc: 'c.299G>A', hgvsp: 'p.(Trp100Ter)', build: 'Not specified (transcript-based)', type: 'Nonsense', consequence: 'Truncation; loss of function', clinvar: 'Pathogenic (per dossier)', popFreq: 'Not stated in dossier', phenotype: 'HCC', functional: 'Predicted truncated / absent hyccin', ev: 'strong', why: 'Null mechanism; no primary citation given in dossier.', src: ['db:clinvar:FAM126A'] },
  ],
  genotypePhenotype: [
    { aspect: 'Clinical phenotype', finding: 'All confirmed patients carry biallelic loss-of-function FAM126A variants with consistent hypomyelination and congenital cataract.', ev: 'established', why: 'Consistent across case series.', src: [ZARA, OMIM] },
    { aspect: 'Severity', finding: 'No clear variant-specific severity correlation; biallelic loss-of-function variants produce a similar spectrum.', ev: 'unknown', why: 'Not systematically studied; small case numbers.', src: [ZARA] },
    { aspect: 'Clinical phenotype', finding: 'Presence of peripheral neuropathy varies between patients and is not fully explained by genotype; modifiers or environment may contribute.', ev: 'emerging', why: 'Observational; no modifier identified.', src: [ZARA] },
    { aspect: 'Survival / outcome', finding: 'No genotype-based predictor of outcome or mild/severe subtype established.', ev: 'unknown', src: [OMIM] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'FAM126A (7p15.3)', detail: 'Biallelic truncating, splice or missense variants.', ev: 'established', src: [ZARA] },
    { stage: 'Protein', label: 'Hyccin', detail: 'Absent (truncating) or dysfunctional (missense) regulatory subunit of the PI4KIIIα complex.', ev: 'established', src: [ZARA, BASKIN, 'db:uniprot:FAM126A'] },
    { stage: 'Molecular function', label: 'PI4KIIIα complex destabilised', detail: 'Reduced complex stability and activity, without effect on PI4KII or PI3Kα complexes.', ev: 'established', src: [BASKIN] },
    { stage: 'Pathway', label: 'PtdIns(4)P depletion', detail: 'Reduced plasma-membrane PtdIns(4)P and downstream PI(4,5)P2, disrupting membrane lipid homeostasis.', ev: 'established', src: [BASKIN] },
    { stage: 'Cellular consequence', label: 'Myelin and lens membrane failure', detail: 'Oligodendrocytes fail to elaborate and maintain myelin; lens fibre membranes are not maintained.', ev: 'strong', src: [BASKIN, ZARA] },
    { stage: 'Phenotype', label: 'Hypomyelination + congenital cataract', detail: 'Diffuse T2 white-matter hyperintensity, motor delay, ataxia, mild intellectual disability and bilateral cataract.', ev: 'established', src: [ZARA, OMIM] },
  ],
  relations: [
    { from: ['gene', 'FAM126A'], to: ['protein', 'PI4KIIIα complex'], label: 'stabilises', ev: 'established', why: 'Hyccin is a constitutive subunit; its loss reduces complex stability in cell studies.', src: [BASKIN] },
    { from: ['protein', 'PI4KIIIα complex'], to: ['metabolite', 'PtdIns(4)P'], label: 'synthesises', ev: 'established', why: 'Biochemical function of the plasma-membrane PI4KIIIα complex.', src: [BASKIN] },
    { from: ['metabolite', 'PtdIns(4)P'], to: ['pathway', 'PI(4,5)P2 synthesis'], label: 'precursor for', ev: 'established', why: 'Standard phosphoinositide biochemistry.', src: [BASKIN] },
    { from: ['metabolite', 'PtdIns(4)P'], to: ['cell', 'Oligodendrocytes'], label: 'required for myelin membranes in', ev: 'strong', why: 'Inferred from mechanism and phenotype; direct human oligodendrocyte data limited.', src: [BASKIN, ZARA] },
    { from: ['cell', 'Oligodendrocytes'], to: ['phenotype', 'Hypomyelination'], label: 'failure causes', ev: 'established', why: 'Consistent MRI hypomyelination in confirmed patients.', src: [ZARA, OMIM] },
    { from: ['gene', 'FAM126A'], to: ['phenotype', 'Congenital cataract'], label: 'loss causes', ev: 'established', why: 'Cataract co-segregates with biallelic variants; lens PtdIns(4)P deficiency is the proposed basis.', src: [ZARA] },
    { from: ['phenotype', 'Hypomyelination'], to: ['biomarker', 'MRI diffuse T2 hypomyelination'], label: 'measured as', ev: 'established', why: 'Diagnostic imaging finding.', src: [ZARA, OMIM] },
    { from: ['therapy', 'FAM126A gene therapy (AAV)'], to: ['gene', 'FAM126A'], label: 'would restore (proposed)', ev: 'proposed', why: 'Conceptual only; no preclinical programme identified.', src: [BASKIN] },
  ],
  cells: [
    { cell: 'Oligodendrocytes', role: 'primary', detail: 'PtdIns(4)P deficiency impairs myelin membrane elaboration and maintenance.', ev: 'strong', src: [BASKIN, ZARA] },
    { cell: 'Non-CNS tissue', role: 'primary', detail: 'Lens: failure of lens fibre membrane maintenance causes congenital cataract.', ev: 'established', src: [ZARA] },
    { cell: 'Schwann cells', role: 'secondary', detail: 'Peripheral motor neuropathy with reduced conduction velocities in a subset.', ev: 'emerging', src: [ZARA] },
  ],
  regions: [
    { region: 'Cerebral white matter', finding: 'Diffuse T2 hyperintensity consistent with hypomyelination; hemispheric white matter predominantly affected.', src: [ZARA, OMIM] },
    { region: 'Corpus callosum', finding: 'Thin in many patients.', src: [OMIM] },
    { region: 'Cerebellum', finding: 'White-matter involvement and cerebellar atrophy in some patients.', src: [OMIM] },
    { region: 'Basal ganglia', finding: 'Generally spared (contrast with H-ABC).', src: [OMIM] },
    { region: 'Subcortical U-fibres', finding: 'May be relatively spared.', src: [OMIM] },
  ],
  biomarkers: [
    { name: 'MRI diffuse T2 hypomyelination', category: 'Imaging', significance: 'Reflects deficient myelin deposition.', sample: 'In vivo brain', assay: 'Brain MRI', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Shared with other hypomyelinating leukodystrophies; specific only with cataract.', ev: 'established', src: [ZARA, OMIM] },
    { name: 'Bilateral congenital cataract', category: 'Imaging', significance: 'Defining extra-CNS feature; with hypomyelination it is pathognomonic.', sample: 'Eye', assay: 'Ophthalmological examination', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Clinical sign rather than a quantitative marker; rarely absent or late.', ev: 'established', src: [ZARA, OMIM] },
    { name: 'Nerve conduction studies', category: 'Imaging', significance: 'Reduced velocities indicate peripheral myelination defect.', sample: 'Peripheral nerve', assay: 'Electrophysiology (NCS/EMG)', purpose: ['Diagnosis'], status: 'Clinical adjunct', limitations: 'Abnormal only in a subset of patients.', ev: 'strong', src: [ZARA] },
    { name: 'Biallelic FAM126A variants', category: 'Genetic', significance: 'Molecular confirmation.', sample: 'DNA (blood)', assay: 'Sequencing + CNV analysis', purpose: ['Diagnosis', 'Carrier / prenatal testing'], status: 'Established clinical', limitations: 'Novel missense variants may be of uncertain significance.', ev: 'established', src: [ZARA, 'db:clinvar:FAM126A'] },
    { name: 'Serum NfL', category: 'Fluid (neuro-glial injury)', significance: 'Marker of axonal / neuronal injury.', sample: 'Serum', assay: 'Immunoassay', purpose: ['Research'], status: 'Experimental', limitations: 'Not validated in HCC.', ev: 'emerging', src: [] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Infant with bilateral congenital cataract plus developmental delay; this combination should prompt FAM126A testing.', src: [ZARA, OMIM] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain MRI', detail: 'Diffuse T2 hyperintensity consistent with hypomyelination; thin corpus callosum; cerebellar abnormalities in some.', src: [ZARA, OMIM] },
    { phase: 'Investigation', category: 'Ophthalmology', method: 'Ophthalmological examination', detail: 'Confirms bilateral congenital cataract and plans early surgery.', src: [ZARA] },
    { phase: 'Investigation', category: 'Electrophysiology', method: 'Nerve conduction studies', detail: 'Motor neuropathy in a subset.', src: [ZARA] },
    { phase: 'Investigation', category: 'Biochemical', method: 'Routine metabolic testing', detail: 'Generally normal; no specific biochemical marker exists.', src: [OMIM] },
    { phase: 'Confirmation', category: 'Genetic', method: 'FAM126A sequencing + CNV analysis', detail: 'First-tier given the pathognomonic combination; otherwise hypomyelinating leukodystrophy panel, then exome / genome sequencing.', src: [ZARA, 'db:clinvar:FAM126A'] },
    { phase: 'Confirmation', category: 'Prenatal', method: 'Targeted familial variant testing', detail: 'CVS or amniocentesis once familial variants are known; no newborn screening marker exists.', src: [OMIM] },
  ],
  differential: [
    'Hypomyelination with atrophy of the basal ganglia and cerebellum (H-ABC; basal ganglia involved)',
    'Other hypomyelinating leukodystrophies without congenital cataract',
  ],
  phenotypes: {
    applicable: false,
    note: 'No validated mild/severe subtypes. Atypical presentations (absent or late cataract, milder or partial hypomyelination, absent neuropathy) are described within a single spectrum.',
    forms: [],
  },
  management: [
    { category: 'Symptomatic', text: 'Early cataract extraction with optical correction to prevent deprivation amblyopia; the most time-sensitive intervention.', src: [ZARA, OMIM] },
    { category: 'Monitoring', text: 'Regular ophthalmological follow-up and correction of refractive error.', src: [OMIM] },
    { category: 'Supportive', text: 'Physiotherapy for motor function and ataxia; occupational and speech-language therapy; special educational support.', src: [ORPHA] },
    { category: 'Symptomatic', text: 'Anti-seizure medication if seizures develop.', src: [ORPHA] },
    { category: 'Supportive', text: 'Physical / occupational therapy and orthoses for foot drop in patients with peripheral neuropathy.', src: [ORPHA] },
  ],
  therapies: [
    { id: 'hcc-cataract-surgery', name: 'Early cataract surgery', modality: 'Other', target: 'Lens (cataract)', mechanism: 'Lens extraction and optical correction to prevent deprivation amblyopia; does not modify CNS disease.', delivery: 'Surgical', stage: 'Approved / standard of care', evidenceBase: 'Human', status: 'Standard of care', ev: 'established', why: 'Standard ophthalmological practice; addresses the ocular component only.', src: [ZARA, OMIM] },
    { id: 'hcc-gene-therapy', name: 'FAM126A gene therapy (AAV)', modality: 'Gene therapy', target: 'FAM126A', mechanism: 'Oligodendrocyte-targeted AAV delivery of FAM126A to restore PtdIns(4)P production.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Conceptual; no preclinical or clinical programme identified', ev: 'proposed', why: 'Rationale from cell-based mechanism only.', src: [BASKIN] },
    { id: 'hcc-pi4ka-activator', name: 'PI4KIIIα complex activators', modality: 'Small molecule', target: 'PI4KIIIα complex', mechanism: 'Pharmacological activation of PI4KIIIα to compensate for hyccin loss.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Theoretical; no compounds identified', ev: 'proposed', why: 'No candidate molecules reported.', src: [BASKIN] },
    { id: 'hcc-pi4p-supp', name: 'Phosphoinositide supplementation', modality: 'Other', target: 'PtdIns(4)P', mechanism: 'Replace deficient PtdIns(4)P directly.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Cellular', status: 'Research direction; direct supplementation not feasible (poor membrane permeability)', ev: 'proposed', why: 'Theoretical; delivery barrier noted in dossier.', src: [BASKIN] },
  ],
  trials: [],
  milestones: [
    { year: 2006, label: 'Biallelic FAM126A variants identified in HCC', stage: 'Discovery', src: [ZARA] },
    { year: 2016, label: 'Hyccin defined as PI4KIIIα complex subunit; PtdIns(4)P mechanism', stage: 'Discovery', src: [BASKIN] },
    { year: 2017, label: 'HCC placed within proposed leukodystrophy classification', stage: 'Discovery', src: [VDK] },
  ],
  gaps: [
    { text: 'No interventional clinical trials registered; therapeutic development remains conceptual.', ev: 'unknown', src: [ORPHA] },
    { text: 'No natural-history study or validated biomarkers for monitoring CNS disease.', ev: 'unknown', src: [ORPHA] },
    { text: 'Cause of variable peripheral neuropathy (genotype, modifiers or environment) is unexplained.', ev: 'emerging', src: [ZARA] },
    { text: 'Fam126a knockout mouse data (peripheral neuropathy, white-matter abnormalities) are preliminary / unpublished and should not be generalised to humans.', ev: 'proposed', why: 'Cited in dossier as unpublished or preliminary.' },
    { text: 'No genotype-based severity or subtype classification has been established.', ev: 'unknown', src: [ZARA] },
  ],
}
