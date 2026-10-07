import type { Disease, Gene, Source } from '../types'
import { geneDb, lit, omim } from '../cite'

const DEP = 'lit:clcn2:depienne2013'
const JEN = 'lit:clcn2:jentsch2013'
const GAI = 'lit:clcn2:gaitanpenas2017'
const BLA = 'lit:clcn2:blanz2007'
const FU = 'lit:clcn2:fu2021'
const NOB = 'lit:clcn2:nobrega2023'
const GIO = 'lit:clcn2:giorgio2017'
const ORI = 'lit:clcn2:orimo2025'
const HOS = 'lit:clcn2:hoshi2019'
const GUO = 'lit:clcn2:guo2019'
const CHE = 'lit:clcn2:cheng2023'
const MOH = 'lit:clcn2:mohamed2022'
const OHI = 'lit:clcn2:ohira2024'
const OZA = 'lit:clcn2:ozaki2020'
const ALM = 'lit:clcn2:almasoudi2023'
const OCH = 'lit:clcn2:ochiai2024'
const ABR = 'lit:clcn2:abreu2022'
const SCH = 'lit:clcn2:scheper2010'
const GR = 'lit:clcn2:vanderknaap2015'

export const clcn2Sources: Source[] = [
  omim('615651', 'Leukoencephalopathy with ataxia (LKPAT)'),
  omim('600570', 'Chloride voltage-gated channel 2 (CLCN2)'),
  lit(GR, 'van der Knaap MS, Depienne C, Sedel F, Abbink TEM', 2015, 'CLCN2-Related Leukoencephalopathy', 'GeneReviews (NCBI Bookshelf)', 'review'),
  lit(DEP, 'Depienne C, Bugiani M, Dupuits C, et al.', 2013, 'Brain white matter oedema due to ClC-2 chloride channel deficiency: an observational analytical study', 'Lancet Neurology'),
  lit(JEN, 'Jentsch TJ', 2013, 'From mice to man: chloride transport in leukoencephalopathy', 'Lancet Neurology', 'review'),
  lit(GAI, 'Gaitán-Peñas H, Apaja PM, Arnedo T, et al.', 2017, 'Leukoencephalopathy-causing CLCN2 mutations are associated with impaired Cl- channel function and trafficking', 'Journal of Physiology'),
  lit(BLA, 'Blanz J, Schweizer M, Auberson M, et al.', 2007, 'Leukoencephalopathy upon disruption of the chloride channel ClC-2', 'Journal of Neuroscience'),
  lit(FU, 'Fu SS, Hu MC, Hsiao CT, et al.', 2021, 'Regulation of ClC-2 Chloride Channel Proteostasis by Molecular Chaperones: Correction of Leukodystrophy-Associated Defect', 'International Journal of Molecular Sciences'),
  lit(NOB, 'Nóbrega PR, Paiva ARB de, Souza KS, et al.', 2023, 'Expanding the phenotypic spectrum of CLCN2-related leukoencephalopathy and ataxia', 'Brain Communications'),
  lit(GIO, 'Giorgio E, Vaula G, Benna P, et al.', 2017, 'A novel homozygous change of CLCN2 (p.His590Pro) is associated with a subclinical form of leukoencephalopathy with ataxia (LKPAT)', 'Journal of Neurology, Neurosurgery and Psychiatry'),
  lit(ORI, 'Orimo K, Matsukawa T, Mitsutake A, et al.', 2025, 'Clinical, neuroimaging and genetic findings in the Japanese case series of CLCN2-related leukoencephalopathy', 'Journal of the Neurological Sciences'),
  lit(HOS, 'Hoshi M, Koshimizu E, Miyatake S, et al.', 2019, 'A novel homozygous mutation of CLCN2 in a patient with characteristic brain MRI images - first case in Japan', 'Brain & Development'),
  lit(GUO, 'Guo Z, Lu T, Peng L, et al.', 2019, 'CLCN2-related leukoencephalopathy: a case report and review', 'BMC Neurology'),
  lit(CHE, 'Cheng Y, Liu X, Sun L', 2023, 'Case report: A frameshift mutation in CLCN2-related leukoencephalopathy and retinopathy', 'Frontiers in Genetics'),
  lit(MOH, 'Mohamed DB, Saied Z, Sassi SB, et al.', 2022, 'A Tunisian patient with CLCN2-related leukoencephalopathy', 'Clinical Case Reports'),
  lit(OHI, 'Ohira M, Saitsu H, Nakashima M, et al.', 2024, 'CLCN2-related leukoencephalopathy with novel compound heterozygous variants followed with MRI over 17 years: a case report', 'Research Square (preprint)'),
  lit(OZA, 'Ozaki A, Sasaki M, Hiraide T, et al.', 2020, 'A case of CLCN2-related leukoencephalopathy with bright tree appearance during aseptic meningitis', 'Brain & Development'),
  lit(ALM, 'Almasoudi W, Nilsson C, Kjellström U, et al.', 2023, 'Co-occurrence of CLCN2-related leukoencephalopathy and SPG56', 'Clinical Parkinsonism & Related Disorders'),
  lit(OCH, 'Ochiai K, Ohashi T, Mori H, et al.', 2024, 'CLCN2-Related Leukoencephalopathy Exhibiting Reduced Choline Levels on MRS', 'Cureus'),
  lit(ABR, 'Abreu V, Tarrio J, Pinto EFC, et al.', 2022, 'Brain imaging findings in CLCN2-related leukoencephalopathy', 'Pediatric Radiology'),
  lit(SCH, 'Scheper GC, van Berkel CGM, Leisle L, et al.', 2010, 'Analysis of CLCN2 as candidate gene for megalencephalic leukoencephalopathy with subcortical cysts', 'Genetic Testing and Molecular Biomarkers'),
]

export const clcn2Genes: Gene[] = [
  {
    symbol: 'CLCN2',
    name: 'Chloride voltage-gated channel 2',
    protein: 'ClC-2, plasma-membrane chloride channel (CLC family)',
    location: '3q27.1',
    function:
      'Inwardly rectifying chloride channel activated by hyperpolarisation, cell swelling and extracellular acidification. Enriched in astrocytic endfeet, oligodendrocytes and ependymal cells; gating and trafficking modulated by GlialCAM and MLC1.',
    pathway: 'Panglial ion and water homeostasis (GlialCAM/MLC1/ClC-2 complex)',
    variantTypes: ['Frameshift', 'Nonsense', 'Splice-site', 'Missense', 'In-frame deletion'],
    diseases: ['clcn2'],
    ev: 'established',
    src: [DEP, GR, 'omim:600570', ...geneDb('CLCN2')],
  },
]

const NS = 'Not specified in dossier'

export const clcn2: Disease = {
  id: 'clcn2',
  name: 'CLCN2-Related Leukoencephalopathy',
  short: 'CC2L',
  lastUpdated: '2026-10-08',
  color: '#2f9bb3',
  synonyms: ['CC2L', 'Leukoencephalopathy with ataxia (LKPAT)', 'ClC-2 chloride channel deficiency', 'Brain white matter oedema due to ClC-2 deficiency'],
  classification: 'Leukodystrophy; chloride channelopathy; intramyelinic oedema (panglial homeostasis) disorder',
  inheritance: 'Autosomal recessive',
  genes: ['CLCN2'],
  tagline: 'Loss of the ClC-2 chloride channel → panglial ion/water imbalance → intramyelinic oedema with a distinctive diffusion-restricted MRI pattern.',
  identifiers: [
    { label: 'OMIM', value: '615651', url: 'https://www.omim.org/entry/615651' },
    { label: 'GeneReviews', value: 'CLCN2-Related Leukoencephalopathy (2015)', url: 'https://www.ncbi.nlm.nih.gov/books/?term=CLCN2-related+leukoencephalopathy' },
    { label: 'MONDO', value: 'search', url: 'https://monarchinitiative.org/search?q=CLCN2-related%20leukoencephalopathy' },
  ],
  identity: [
    { label: 'Primary defect', text: 'Biallelic loss-of-function variants in CLCN2 abolish or impair the ClC-2 chloride channel.', ev: 'established', why: 'Defined in a 2013 multi-family study; replicated in later cohorts.', src: [DEP, GR, 'omim:615651'] },
    { label: 'Core pathology', text: 'Intramyelinic oedema (myelin vacuolation) from disrupted glial ion and water homeostasis.', ev: 'established', why: 'ClC-2 knockout mice show progressive vacuolation; human diffusion imaging concordant.', src: [BLA, DEP] },
    { label: 'Imaging signature', text: 'Symmetric T2 hyperintensity with restricted diffusion in the posterior limbs of the internal capsules, cerebral peduncles and middle cerebellar peduncles.', ev: 'established', src: [DEP, ABR] },
    { label: 'Related disorders', text: 'ClC-2 forms a complex with GlialCAM and MLC1, linking CC2L mechanistically to MLC.', ev: 'established', src: [JEN, GAI] },
    { label: 'Dominant effects', text: 'Heterozygous CLCN2 variants usually lack major clinical effect; dominant pathogenicity for CC2L is not established.', ev: 'strong', why: 'Mouse and human data; earlier epilepsy associations largely reinterpreted.', src: [BLA, GR] },
  ],
  clinical: [
    { label: 'Age of onset', text: 'Childhood to adulthood; some individuals are identified incidentally on MRI.', ev: 'established', src: [DEP, GR] },
    { label: 'Neurological features', text: 'Mild cerebellar ataxia, action tremor, pyramidal signs, severe intermittent headache, tinnitus and vertigo.', ev: 'established', src: [DEP] },
    { label: 'Visual features', text: 'Chorioretinopathy, macular/retinal atrophy and optic atrophy with variable visual impairment.', ev: 'strong', src: [CHE, DEP] },
    { label: 'Reproductive', text: 'Testicular degeneration or azoospermia in some affected males.', ev: 'emerging', why: 'Consistent with mouse testis phenotype; reported in a subset of pedigrees.', src: [BLA, ALM] },
    { label: 'Expanded spectrum', text: 'Seizures, paroxysmal dyskinesia, cognitive impairment and psychiatric features reported in recent series.', ev: 'emerging', src: [NOB] },
    { label: 'Progression', text: 'Generally mild and slowly progressive; MRI often stable over years (one case followed 17 years).', ev: 'strong', why: 'Case series and long-term single-case follow-up.', src: [GR, OHI] },
  ],
  epidemiology: [
    { label: 'Prevalence', text: 'Ultra-rare; about 30 affected individuals from about 30 families described in the GeneReviews summary. Point prevalence is not established.', ev: 'unknown', why: 'No population-based studies.', src: [GR] },
    { label: 'Geography', text: 'Reported from Europe, Tunisia, Japan, China and Brazil.', ev: 'established', src: [ORI, MOH, GUO, NOB] },
    { label: 'Founder allele', text: 'c.61dupC recurs in Japanese patients (allele frequency ~0.002152 in a Japanese series), suggesting a regional founder effect.', ev: 'emerging', src: [ORI, HOS] },
    { label: 'Sex distribution', text: 'Males and females equally affected (autosomal recessive).', ev: 'established', src: [GR] },
    { label: 'Underdiagnosis', text: 'Likely underdiagnosed given mild phenotypes; MRI recognition and panel testing improve ascertainment.', ev: 'emerging', src: [DEP, NOB] },
  ],
  variants: [
    { id: 'clcn2-l21fs', disease: 'clcn2', gene: 'CLCN2', transcript: NS, hgvsc: 'c.61dupC', hgvsp: 'p.(Leu21Profs*27)', build: NS, type: 'Frameshift', consequence: 'Premature truncation; loss of function', clinvar: 'Verify in ClinVar', popFreq: 'Recurrent in Japan (~0.002152 in a Japanese series)', phenotype: 'Typical CC2L (homozygous)', functional: 'Null mechanism predicted', ev: 'strong', why: 'Recurrent in multiple Japanese patients with characteristic MRI.', src: [HOS, ORI, 'db:clinvar:CLCN2'] },
    { id: 'clcn2-r610x', disease: 'clcn2', gene: 'CLCN2', transcript: NS, hgvsc: 'c.1828C>T', hgvsp: 'p.(Arg610*)', build: NS, type: 'Nonsense', consequence: 'Premature stop; loss of function', clinvar: 'Verify in ClinVar', popFreq: NS, phenotype: 'CC2L (compound heterozygous), MRI followed over 17 years', functional: 'Null mechanism predicted', ev: 'emerging', why: 'Single case in a preprint.', src: [OHI, 'db:clinvar:CLCN2'] },
    { id: 'clcn2-r753x', disease: 'clcn2', gene: 'CLCN2', transcript: NS, hgvsc: 'c.2257C>T', hgvsp: 'p.(Arg753*)', build: NS, type: 'Nonsense', consequence: 'Premature stop; loss of function', clinvar: 'Verify in ClinVar', popFreq: NS, phenotype: 'Adult-onset ataxia and pyramidal signs (homozygous)', functional: 'Null mechanism predicted', ev: 'emerging', why: 'Single case report with characteristic imaging.', src: [GUO, 'db:clinvar:CLCN2'] },
    { id: 'clcn2-w570x', disease: 'clcn2', gene: 'CLCN2', transcript: NS, hgvsc: 'c.1709G>A', hgvsp: 'p.(Trp570*)', build: NS, type: 'Nonsense', consequence: 'Premature stop; loss of function', clinvar: 'Verify in ClinVar', popFreq: NS, phenotype: 'Mild phenotype (homozygous; Tunisian patient)', functional: 'Null mechanism predicted', ev: 'emerging', why: 'Single case report.', src: [MOH, 'db:clinvar:CLCN2'] },
    { id: 'clcn2-p461fs', disease: 'clcn2', gene: 'CLCN2', transcript: NS, hgvsc: 'c.1382_1386del', hgvsp: 'p.(Pro461Lfs*13)', build: NS, type: 'Frameshift', consequence: 'Premature truncation; loss of function', clinvar: 'Verify in ClinVar', popFreq: NS, phenotype: 'Leukoencephalopathy with retinal atrophy (homozygous)', functional: 'Null mechanism predicted', ev: 'emerging', why: 'Single case report.', src: [CHE, 'db:clinvar:CLCN2'] },
    { id: 'clcn2-a500v', disease: 'clcn2', gene: 'CLCN2', transcript: NS, hgvsc: NS, hgvsp: 'p.(Ala500Val)', build: NS, type: 'Missense', consequence: 'Impaired gating and trafficking', clinvar: 'Verify in ClinVar', popFreq: NS, phenotype: 'CC2L (biallelic)', functional: 'Reduced surface expression and trafficking defect; partially rescued by GlialCAM/MLC1', ev: 'strong', why: 'Electrophysiology and trafficking assays.', src: [GAI, 'db:clinvar:CLCN2'] },
    { id: 'clcn2-h590p', disease: 'clcn2', gene: 'CLCN2', transcript: NS, hgvsc: NS, hgvsp: 'p.(His590Pro)', build: NS, type: 'Missense', consequence: 'Likely hypomorphic', clinvar: 'Verify in ClinVar', popFreq: NS, phenotype: 'Subclinical leukoencephalopathy found incidentally (homozygous)', functional: 'Residual function inferred from mild phenotype', ev: 'emerging', why: 'Single minimally symptomatic individual.', src: [GIO, 'db:clinvar:CLCN2'] },
  ],
  genotypePhenotype: [
    { aspect: 'Severity', finding: 'Biallelic truncating variants give the characteristic MRI pattern with severity from near-subclinical to moderate ataxia and pyramidal involvement.', ev: 'emerging', why: 'Small numbers; variability even with similar genotypes.', src: [DEP, NOB] },
    { aspect: 'Clinical phenotype', finding: 'Hypomorphic missense alleles (e.g. p.His590Pro) can cause subclinical disease.', ev: 'emerging', src: [GIO] },
    { aspect: 'Severity', finding: 'Greater loss of channel activity and trafficking tends to accompany more prominent clinical features.', ev: 'emerging', why: 'Functional data on a limited allele set; inter-individual variability noted.', src: [GAI] },
    { aspect: 'Clinical phenotype', finding: 'Japanese c.61dupC patients show features consistent with international cases.', ev: 'emerging', src: [HOS, ORI] },
    { aspect: 'MRI phenotype', finding: 'Some childhood-onset cases show more diffuse white matter involvement.', ev: 'emerging', src: [DEP] },
    { aspect: 'Survival / outcome', finding: 'No genotype-based outcome predictor.', ev: 'unknown', src: [GR] },
  ],
  mechanism: [
    { stage: 'Gene', label: 'CLCN2 (3q27.1)', detail: 'Biallelic loss-of-function variants.', ev: 'established', src: [DEP] },
    { stage: 'Protein', label: 'ClC-2 chloride channel', detail: 'Mutant channels show ERAD, short half-life, reduced surface expression or defective gating.', ev: 'established', src: [GAI, FU] },
    { stage: 'Molecular function', label: 'Chloride flux lost', detail: 'Loss of hyperpolarisation- and swelling-activated chloride conductance in astrocytic endfeet and oligodendrocytes.', ev: 'established', src: [JEN, DEP] },
    { stage: 'Pathway', label: 'Panglial ion/water homeostasis fails', detail: 'Chloride flux can no longer balance cation redistribution during K+ siphoning; GlialCAM/MLC1 complex shared with MLC.', ev: 'strong', src: [JEN, GAI] },
    { stage: 'Cellular consequence', label: 'Intramyelinic oedema', detail: 'Water accumulates between myelin lamellae, producing vacuolation (mouse) and low ADC (human).', ev: 'established', src: [BLA, DEP] },
    { stage: 'Phenotype', label: 'Leukoencephalopathy with ataxia', detail: 'Mild ataxia, pyramidal signs, headache, visual and reproductive involvement.', ev: 'established', src: [DEP, GR] },
  ],
  relations: [
    { from: ['gene', 'CLCN2'], to: ['protein', 'ClC-2'], label: 'encodes', ev: 'established', why: 'Gene-protein identity.', src: ['db:uniprot:CLCN2'] },
    { from: ['protein', 'GlialCAM / MLC1 complex'], to: ['protein', 'ClC-2'], label: 'modulates gating and trafficking of', ev: 'established', why: 'Physical interaction and functional rescue in expression systems.', src: [GAI, JEN] },
    { from: ['protein', 'ClC-2'], to: ['pathway', 'Panglial ion and water homeostasis'], label: 'sustains', ev: 'strong', why: 'Model built from expression pattern and knockout mouse data.', src: [JEN, DEP] },
    { from: ['pathway', 'Panglial ion and water homeostasis'], to: ['phenotype', 'Intramyelinic oedema'], label: 'failure causes', ev: 'established', why: 'ClC-2 knockout mice develop progressive vacuolation.', src: [BLA] },
    { from: ['gene', 'CLCN2'], to: ['cell', 'Astrocytes'], label: 'expressed in (endfeet)', ev: 'established', why: 'Localisation at perivascular and subpial glia limitans.', src: [JEN, 'db:hpa:CLCN2'] },
    { from: ['gene', 'CLCN2'], to: ['cell', 'Oligodendrocytes'], label: 'expressed in', ev: 'established', why: 'Expression studies.', src: [JEN] },
    { from: ['phenotype', 'Intramyelinic oedema'], to: ['biomarker', 'Low ADC in PLIC, cerebral and middle cerebellar peduncles'], label: 'imaged as', ev: 'established', why: 'Restricted diffusion reflects trapped intramyelinic water rather than vasogenic oedema.', src: [DEP, HOS] },
    { from: ['gene', 'CLCN2'], to: ['disease', 'MLC'], label: 'shares pathway with', ev: 'established', why: 'Common GlialCAM/MLC1/ClC-2 complex.', src: [JEN, SCH] },
    { from: ['therapy', 'Hsp90 inhibition (17-AAG)'], to: ['protein', 'ClC-2'], label: 'rescues surface expression of', ev: 'emerging', why: 'Cell culture only.', src: [FU] },
  ],
  cells: [
    { cell: 'Astrocytes', role: 'primary', detail: 'ClC-2 in endfeet at perivascular and subpial boundaries; impaired K+ buffering and fluid movement.', ev: 'strong', src: [JEN, DEP] },
    { cell: 'Oligodendrocytes', role: 'primary', detail: 'ClC-2 expressed in oligodendrocytes; myelin sheaths swell with intramyelinic water. Relative primacy versus astrocytes unresolved.', ev: 'strong', src: [DEP, JEN, BLA] },
    { cell: 'Non-CNS tissue', role: 'secondary', detail: 'Testis (testicular degeneration, azoospermia) and retina (chorioretinopathy).', ev: 'emerging', src: [BLA, ALM, CHE] },
  ],
  regions: [
    { region: 'Posterior limb of internal capsule', finding: 'Bilateral symmetric T2 hyperintensity with low ADC.', src: [DEP, ABR] },
    { region: 'Cerebral peduncles & pontine pyramidal tracts', finding: 'Symmetric diffusion-restricted signal.', src: [DEP] },
    { region: 'Middle cerebellar peduncles', finding: 'Bilateral, often prominent involvement.', src: [DEP, ABR] },
    { region: 'Optic radiations & posterior white matter', finding: 'Variable involvement; more diffuse change in some children.', src: [DEP] },
    { region: 'Retina & optic nerve', finding: 'Chorioretinopathy, macular atrophy, optic atrophy.', src: [CHE] },
  ],
  biomarkers: [
    { name: 'Characteristic MRI pattern', category: 'Imaging', significance: 'Symmetric T2/FLAIR hyperintensity with low ADC in PLIC, cerebral peduncles and MCP should trigger CLCN2 testing.', sample: 'In vivo brain', assay: 'MRI with DWI/ADC', purpose: ['Diagnosis'], status: 'Established clinical', limitations: 'Childhood cases may be more diffuse; transient bright tree appearance during intercurrent illness.', ev: 'established', src: [DEP, ABR, OZA] },
    { name: 'Biallelic CLCN2 variants', category: 'Genetic', significance: 'Confirmatory diagnosis.', sample: 'Blood (DNA)', assay: 'Leukodystrophy panel, WES/WGS, Sanger, CNV analysis', purpose: ['Diagnosis', 'Carrier testing'], status: 'Established clinical', limitations: 'Missense interpretation may need functional data.', ev: 'established', src: [DEP, GR] },
    { name: 'Ophthalmological findings (fundoscopy, OCT, ERG, VEP)', category: 'Imaging', significance: 'Chorioretinal or macular atrophy and optic atrophy support the diagnosis.', sample: 'Eye', assay: 'Fundoscopy, OCT, ERG/VEP', purpose: ['Diagnosis', 'Monitoring'], status: 'Clinical adjunct', limitations: 'Not present in all patients.', ev: 'emerging', src: [CHE, DEP] },
    { name: 'DTI metrics', category: 'Imaging', significance: 'Reduced FA and increased radial diffusivity in affected tracts.', sample: 'In vivo brain', assay: 'Diffusion tensor imaging', purpose: ['Monitoring'], status: 'Experimental', limitations: 'Single-case data.', ev: 'emerging', src: [GUO] },
    { name: 'Reduced white matter choline (MRS)', category: 'Imaging', significance: 'May indicate abnormal membrane turnover beyond oedema.', sample: 'In vivo brain', assay: 'Proton MR spectroscopy', purpose: ['Monitoring'], status: 'Experimental', limitations: 'Reported in one case.', ev: 'emerging', src: [OCH] },
    { name: 'Fluid biomarkers', category: 'Fluid (neuro-glial injury)', significance: 'No validated CSF or blood marker; routine CSF normal or nonspecific.', sample: 'CSF / blood', assay: 'Not established', purpose: ['Monitoring'], status: 'Experimental', limitations: 'Evidence insufficient.', ev: 'unknown', src: [GR] },
  ],
  diagnosis: [
    { phase: 'Suspicion', category: 'Clinical', method: 'Clinical assessment', detail: 'Slowly progressive ataxia and pyramidal signs, headache, visual symptoms, male infertility, or incidental symmetric white matter changes; recessive family history.', src: [DEP, GR] },
    { phase: 'Investigation', category: 'Imaging', method: 'Brain MRI with DWI/ADC', detail: 'Symmetric T2 hyperintensity and restricted diffusion in PLIC, cerebral peduncles, MCP and pontine pyramidal tracts.', src: [DEP, ABR] },
    { phase: 'Investigation', category: 'Ophthalmology', method: 'Visual acuity, fundoscopy, OCT, ERG, VEP', detail: 'Retinopathy, macular atrophy or optic atrophy.', src: [CHE] },
    { phase: 'Investigation', category: 'Other', method: 'EEG, neuropsychology, spinal MRI, semen analysis', detail: 'Guided by seizures, cognitive/psychiatric symptoms, pyramidal signs or infertility.', src: [NOB, ALM] },
    { phase: 'Confirmation', category: 'Genetic', method: 'Leukodystrophy panel including CLCN2; WES/WGS; microarray', detail: 'Biallelic pathogenic CLCN2 variants; targeted c.61dupC testing in Japanese patients.', src: [GR, NOB, ORI, 'db:clinvar:CLCN2'] },
    { phase: 'Confirmation', category: 'Functional', method: 'Electrophysiology of variant channels (research)', detail: 'Xenopus oocyte or HEK293 expression to support missense pathogenicity.', src: [GAI] },
  ],
  differential: [
    'Megalencephalic leukoencephalopathy with subcortical cysts (MLC1, HEPACAM)',
    'GJB1 (X-linked CMT) leukoencephalopathy',
    'LBSL (DARS2)',
    'H-ABC (TUBB4A)',
    'Primary progressive multiple sclerosis',
    'Metabolic leukoencephalopathies',
  ],
  phenotypes: {
    applicable: true,
    note: 'Presentation ranges from subclinical MRI findings to moderate disability; forms reflect clinical variability rather than formal subtypes.',
    forms: [
      { name: 'Typical CC2L', onset: 'Childhood to early adulthood', severity: 'Mild; usually ambulatory', progression: 'Slow; MRI largely stable', genetics: 'Biallelic truncating or severe missense', markers: 'PLIC/peduncle/MCP low ADC; retinopathy; headache', src: [DEP, GR] },
      { name: 'Subclinical / minimally symptomatic', onset: 'Adulthood (incidental)', severity: 'Minimal', progression: 'Static or very slow', genetics: 'Hypomorphic missense (e.g. p.His590Pro)', markers: 'Characteristic MRI without major deficits', src: [GIO] },
      { name: 'Expanded / childhood diffuse', onset: 'Early childhood', severity: 'Moderate', progression: 'Variable', genetics: 'Biallelic CLCN2', markers: 'More diffuse WM change; seizures, dyskinesia, cognitive or psychiatric features', src: [DEP, NOB] },
    ],
  },
  management: [
    { category: 'Symptomatic', text: 'Physiotherapy and gait aids for ataxia; baclofen, tizanidine or botulinum toxin for spasticity; beta-blockers or primidone for tremor.', src: [GR] },
    { category: 'Symptomatic', text: 'Anti-seizure medication (effective in reported cases) and standard headache management.', src: [HOS, GR] },
    { category: 'Supportive', text: 'Neuropsychological and psychiatric support; low-vision aids; audiological assessment for tinnitus and vertigo.', src: [NOB, CHE] },
    { category: 'Supportive', text: 'Andrological assessment for males; genetic counselling (25% recurrence), carrier, prenatal and preimplantation testing.', src: [ALM, GR] },
    { category: 'Monitoring', text: 'Annual or biennial neurological review, ophthalmology and neuropsychology; brain MRI every 2-3 years or as indicated.', src: [GR, CHE] },
  ],
  therapies: [
    { id: 'clcn2-hsp90', name: 'Hsp90 inhibition (17-AAG)', modality: 'Small molecule', target: 'Hsp90 / ClC-2 proteostasis', mechanism: 'Enhances chaperone-assisted folding and surface trafficking of misfolded mutant ClC-2.', delivery: 'Not defined', stage: 'Preclinical (cellular)', evidenceBase: 'Cellular', status: 'Cell-model proof of concept', ev: 'emerging', why: 'HEK293 data only; no in vivo rescue.', src: [FU] },
    { id: 'clcn2-hsc70', name: 'Hsc70 chaperone modulation', modality: 'Small molecule', target: 'Hsc70 / ClC-2', mechanism: 'Stabilises ClC-2 and reduces ERAD-mediated degradation.', delivery: 'Not defined', stage: 'Preclinical (cellular)', evidenceBase: 'Cellular', status: 'Cell-model data', ev: 'emerging', why: 'Cell culture only.', src: [FU] },
    { id: 'clcn2-glialcam', name: 'GlialCAM/MLC1 modifier targeting', modality: 'Other', target: 'GlialCAM / MLC1 / ClC-2 complex', mechanism: 'Exploit the endogenous modifier complex to restore mutant channel surface expression and gating.', delivery: 'Not defined', stage: 'Preclinical (cellular)', evidenceBase: 'Cellular', status: 'In vitro co-expression rescue', ev: 'emerging', why: 'Expression-system data only.', src: [GAI] },
    { id: 'clcn2-gt', name: 'CLCN2 gene therapy', modality: 'Gene therapy', target: 'CLCN2', mechanism: 'Restore wild-type ClC-2 in astrocytes and oligodendrocytes.', delivery: 'Not defined', stage: 'Discovery', evidenceBase: 'Animal', status: 'Conceptual', ev: 'proposed', why: 'Rationale from knockout mouse mechanism; no in vivo gene therapy study.', src: [GAI, FU] },
  ],
  trials: [],
  milestones: [
    { year: 2007, label: 'ClC-2 knockout mouse shows white matter vacuolation', stage: 'Animal studies', src: [BLA] },
    { year: 2013, label: 'CLCN2 defined as cause of leukoencephalopathy', stage: 'Discovery', src: [DEP, JEN] },
    { year: 2017, label: 'Disease alleles characterised; GlialCAM rescue shown', stage: 'Preclinical (cellular)', src: [GAI] },
    { year: 2021, label: 'Chaperone (Hsp90 inhibitor) rescue of mutant ClC-2', stage: 'Preclinical (cellular)', src: [FU] },
    { year: 2023, label: 'Phenotypic spectrum expanded', stage: 'Discovery', src: [NOB] },
    { year: 2025, label: 'Japanese case series and recurrent c.61dupC allele', stage: 'Discovery', src: [ORI] },
  ],
  gaps: [
    { text: 'No disease-modifying therapy; proteostasis rescue lacks in vivo validation.', ev: 'unknown', src: [FU] },
    { text: 'No registered trials, natural history study, registry or validated outcome measures.', ev: 'unknown', src: [GR] },
    { text: 'Relative contribution of astrocytic versus oligodendroglial ClC-2 loss is unresolved.', ev: 'controversial', src: [DEP, JEN] },
    { text: 'Frequency of subclinical forms and of cognitive/psychiatric involvement is undefined.', ev: 'emerging', src: [NOB, GIO] },
    { text: 'No validated fluid or functional biomarkers of disease activity.', ev: 'unknown', src: [GR] },
  ],
}
